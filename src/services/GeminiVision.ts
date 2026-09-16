import { GoogleGenAI } from '@google/genai';
import * as fs from 'fs';
import sharp from 'sharp';

/**
 * Danh sách model thử lần lượt, từ mạnh nhất xuống các bản Lite (quota cao hơn nhiều).
 */
const MODELS = [
    'gemini-3.6-flash',
    'gemini-3.5-flash',
    'gemini-3-flash',
    'gemini-2.5-flash',
    'gemini-3.5-flash-lite',
    'gemini-3.1-flash-lite',
    'gemini-1.5-flash',
    'gemini-flash-latest'
];

/**
 * Kho API key dùng chung cho cả tiến trình.
 *
 * Khai báo key theo một trong hai cách (dùng được cả hai cùng lúc, hệ thống tự gộp
 * và loại trùng):
 *   GEMINI_API_KEY=key1
 *   GEMINI_API_KEYS=key1,key2,key3
 */
class GeminiKeyPool {
    private static keys: string[] = [];
    private static clients = new Map<number, GoogleGenAI>();
    /** model → tập chỉ số key đã hết quota trong phiên chạy này */
    private static exhausted = new Map<string, Set<number>>();
    /** Key sai/bị thu hồi — hỏng với mọi model, loại hẳn để khỏi thử lại vô ích */
    private static dead = new Set<number>();

    static load(): string[] {
        if (this.keys.length > 0) return this.keys;

        const raw = [process.env.GEMINI_API_KEY, process.env.GEMINI_API_KEYS]
            .filter(Boolean)
            .join(',');

        this.keys = [...new Set(
            raw.split(/[,;\s]+/).map(key => key.trim()).filter(Boolean)
        )];

        if (this.keys.length === 0) {
            throw new Error('Thiếu biến môi trường GEMINI_API_KEY (hoặc GEMINI_API_KEYS)');
        }
        return this.keys;
    }

    static client(index: number): GoogleGenAI {
        let client = this.clients.get(index);
        if (!client) {
            client = new GoogleGenAI({ apiKey: this.load()[index] });
            this.clients.set(index, client);
        }
        return client;
    }

    /** Các key còn dùng được cho model này */
    static availableFor(model: string): number[] {
        const outOfQuota = this.exhausted.get(model) ?? new Set<number>();
        return this.load()
            .map((_, index) => index)
            .filter(index => !this.dead.has(index) && !outOfQuota.has(index));
    }

    static markExhausted(model: string, index: number): void {
        if (!this.exhausted.has(model)) this.exhausted.set(model, new Set());
        this.exhausted.get(model)!.add(index);
    }

    /** Loại hẳn một key khỏi mọi model (key sai, bị thu hồi, hoặc không có quyền) */
    static markDead(index: number): void {
        this.dead.add(index);
    }

    static hasUsableKey(): boolean {
        return this.load().some((_, index) => !this.dead.has(index));
    }

    /** Nhãn để ghi log — chỉ lộ 4 ký tự cuối, không bao giờ in key đầy đủ */
    static label(index: number): string {
        const key = this.load()[index] ?? '';
        return `key#${index + 1}(…${key.slice(-4)})`;
    }

    static size(): number {
        return this.load().length;
    }
}

/** Phân loại lỗi để biết nên đổi key, loại key, hay đổi model */
function classifyError(error: any): 'quota' | 'bad-key' | 'model' | 'other' {
    const status = error?.status ?? error?.code ?? error?.response?.status;
    const message = String(error?.message ?? error).toLowerCase();

    // Key sai hoặc bị thu hồi thì hỏng với mọi model — loại hẳn thay vì thử lại 8 lần
    if (
        status === 401 ||
        status === 403 ||
        message.includes('api_key_invalid') ||
        message.includes('api key not valid') ||
        message.includes('permission_denied')
    ) {
        return 'bad-key';
    }

    if (
        status === 429 ||
        message.includes('429') ||
        message.includes('quota') ||
        message.includes('resource_exhausted') ||
        message.includes('rate limit')
    ) {
        return 'quota';
    }

    if (
        status === 404 ||
        message.includes('not found') ||
        message.includes('is not supported') ||
        message.includes('unsupported')
    ) {
        return 'model';
    }

    return 'other';
}

/** Gỡ code block markdown và vớt khối JSON đầu tiên nếu AI trả về kèm chữ thừa */
function safeParseJson(text: string): any | null {
    if (!text) return null;

    const cleaned = text.trim()
        .replace(/^```(?:json)?\s*/i, '')
        .replace(/\s*```$/, '');

    try {
        return JSON.parse(cleaned);
    } catch {
        // thử cách vớt vát bên dưới
    }

    const block = cleaned.match(/\{[\s\S]*\}/);
    if (block) {
        try {
            return JSON.parse(block[0]);
        } catch {
            // chịu
        }
    }
    return null;
}

export class GeminiVision {
    constructor() {
        // Gọi sớm để thiếu key là báo lỗi ngay, không đợi tới lúc gọi API
        GeminiKeyPool.load();
    }

    private async fileToGenerativePart(filePath: string, mimeType: string) {
        console.log(`[GeminiVision] Processing file with sharp: ${filePath}`);
        if (!fs.existsSync(filePath)) {
            console.log(`[GeminiVision] File does not exist! ${filePath}`);
        } else {
            console.log(`[GeminiVision] File size: ${fs.statSync(filePath).size} bytes`);
        }

        try {
            const compressedBuffer = await sharp(filePath)
                .resize({ width: 1280, withoutEnlargement: true }) // Giới hạn chiều rộng
                .jpeg({ quality: 70 }) // Đổi sang JPEG cho nhẹ
                .toBuffer();
            console.log(`[GeminiVision] Successfully compressed ${filePath}`);
            return {
                inlineData: {
                    data: compressedBuffer.toString("base64"),
                    mimeType: "image/jpeg"
                },
            };
        } catch (error) {
            console.error(`[GeminiVision] Sharp failed on file: ${filePath}`);
            throw error;
        }
    }

    /**
     * Gọi Gemini và trả về JSON đã parse.
     *
     * Vòng ngoài duyệt model (giữ ưu tiên model mạnh), vòng trong duyệt key. Hết quota
     * thì đổi key trước rồi mới đổi model, nên có bao nhiêu key là tận dụng được bấy nhiêu.
     */
    private async generateJson(prompt: string, imageParts: any[], label: string): Promise<any> {
        let lastError: any = null;

        for (const model of MODELS) {
            const keys = GeminiKeyPool.availableFor(model);
            if (keys.length === 0) {
                console.warn(`[GeminiVision] ${model}: mọi key đều đã hết quota → đổi model.`);
                continue;
            }

            for (const keyIndex of keys) {
                try {
                    console.log(`[GeminiVision] ${label} → ${model} bằng ${GeminiKeyPool.label(keyIndex)}...`);

                    const response = await GeminiKeyPool.client(keyIndex).models.generateContent({
                        model,
                        contents: [prompt, ...imageParts],
                        config: { responseMimeType: 'application/json' }
                    });

                    const parsed = safeParseJson(response.text || '');
                    if (parsed) return parsed;

                    // Gọi được nhưng nội dung không phải JSON đọc được. Đây KHÔNG phải lỗi
                    // key, nên không đánh dấu hết quota — đổi model thay vì đốt thêm key.
                    console.warn(`[GeminiVision] ${model} trả về nội dung không phải JSON hợp lệ → đổi model.`);
                    lastError = new Error(`Phản hồi không phải JSON hợp lệ từ ${model}`);
                    break;

                } catch (error: any) {
                    lastError = error;

                    switch (classifyError(error)) {
                        case 'quota':
                            console.warn(`[GeminiVision] ${GeminiKeyPool.label(keyIndex)} hết quota ở ${model} → thử key kế tiếp.`);
                            GeminiKeyPool.markExhausted(model, keyIndex);
                            continue;

                        case 'bad-key':
                            console.warn(`[GeminiVision] ${GeminiKeyPool.label(keyIndex)} không hợp lệ → loại khỏi mọi model.`);
                            GeminiKeyPool.markDead(keyIndex);
                            if (!GeminiKeyPool.hasUsableKey()) {
                                throw new Error('Tất cả GEMINI_API_KEY đều không hợp lệ');
                            }
                            continue;

                        case 'model':
                            console.warn(`[GeminiVision] ${model} không dùng được (${error?.message}) → đổi model.`);
                            break;

                        default:
                            console.warn(`[GeminiVision] Lỗi ở ${model}/${GeminiKeyPool.label(keyIndex)}: ${error?.message} → thử key kế tiếp.`);
                            continue;
                    }
                    break; // chỉ tới đây khi là lỗi 'model'
                }
            }
        }

        throw lastError ?? new Error('Không gọi được model Gemini nào');
    }

    async compareImages(figmaPath: string, webPath: string): Promise<{ pass: boolean, reason: string, issues?: Array<{ description: string, web_box_2d: [number, number, number, number], figma_box_2d: [number, number, number, number] }> }> {
        try {
            const figmaPart = await this.fileToGenerativePart(figmaPath, "image/jpeg");
            const webPart = await this.fileToGenerativePart(webPath, "image/jpeg");

            const prompt = `Bạn là một chuyên gia kiểm thử giao diện người dùng (UI/UX Automation Tester) vô cùng khắt khe.
Nhiệm vụ của bạn là soi thật kỹ 2 bức ảnh toàn trang: Ảnh 1 là bản thiết kế chuẩn trên Figma, Ảnh 2 là giao diện thực tế trên Web.
Hãy đánh giá chi tiết xem giao diện Web thực tế có bám sát thiết kế Figma từ trên xuống dưới (bao gồm cả Header, Body, Footer) và đảm bảo trải nghiệm người dùng (UX/UI) hay không. Vui lòng BẮT CÁC LỖI sau:
1. Lỗi cấu trúc: Mất khối nội dung (section), layout bị vỡ, đè lên nhau, hoặc căn lề (alignment) sai.
2. Lỗi UI/Thẩm mỹ: Màu sắc (background, text, button) không đúng thiết kế. Kích thước chữ (typography) sai lệch rõ rệt (quá to hoặc quá nhỏ làm mất sự tinh tế).
3. Lỗi khoảng cách (Spacing): Khoảng cách (padding/margin) giữa các phần tử quá hẹp, quá rộng, hoặc không đồng đều gây nhức mắt.
4. Lỗi UX tổng thể: Giao diện thực tế nhìn thô, không hợp mắt, kém sang trọng hơn so với bản thiết kế.

Hãy phớt lờ các lỗi sau:
1. Nội dung text cụ thể (vì web có thể dùng data thật khác data mẫu).
2. Hình ảnh sản phẩm thật khác với ảnh mẫu (placeholder).

Quan trọng: Nếu phát hiện lỗi nghiêm trọng (đặc biệt là thiếu hụt section hoặc vỡ layout), bạn phải cung cấp vị trí ƯỚC TÍNH của lỗi đó trên CẢ 2 BỨC ẢNH dưới dạng Bounding Box [ymin, xmin, ymax, xmax]. Tọa độ chuẩn hóa từ 0 đến 1000 (0,0 là góc trên trái, 1000,1000 là góc dưới phải).

Trả về kết quả dưới định dạng JSON như sau:
{
  "pass": boolean (true nếu giống, false nếu có lỗi),
  "reason": "Giải thích lý do tổng quan",
  "issues": [
    {
      "description": "Mô tả chi tiết phần bị thiếu/lỗi",
      "web_box_2d": [ymin, xmin, ymax, xmax],
      "figma_box_2d": [ymin, xmin, ymax, xmax]
    }
  ]
}`;

            return await this.generateJson(prompt, [figmaPart, webPart], 'So sánh Figma ↔ Web');

        } catch (error: any) {
            console.error('Gemini Vision Error (compareImages):', error);
            return { pass: false, reason: `Lỗi gọi AI: ${error?.message || error}` };
        }
    }

    /**
     * Chấm giao diện một trang mà KHÔNG cần bản thiết kế để đối chiếu.
     * Dùng cho mọi viewport: truyền nhãn thiết bị vào để AI biết đang xem màn hình nào,
     * vì lỗi "chật hẹp" trên 375px và trên 1920px là hai chuyện hoàn toàn khác nhau.
     */
    async evaluateLayout(
        webPath: string,
        viewportLabel = 'Mobile',
        viewportWidth?: number
    ): Promise<{ pass: boolean, reason: string, issues?: Array<{ description: string, anchor_text?: string, web_box_2d: [number, number, number, number] }> }> {
        try {
            const webPart = await this.fileToGenerativePart(webPath, "image/jpeg");
            const deviceHint = viewportWidth ? `${viewportLabel} (rộng ${viewportWidth}px)` : viewportLabel;

            const prompt = `Bạn là một chuyên gia kiểm thử UX/UI.
Nhiệm vụ của bạn là xem xét bức ảnh chụp giao diện ${deviceHint} toàn trang này và tìm ra các lỗi dàn trang (layout) THẬT SỰ RÕ RÀNG.
Hãy BẮT CÁC LỖI sau (nếu có):
1. Vỡ layout: Các khối nội dung chồng chéo lên nhau một cách bất thường, lệch lạc, hoặc bị cắt xén (đặc biệt là text).
2. Tràn viền (Overflow): Các phần tử tràn ra ngoài chiều rộng màn hình, gây xuất hiện thanh cuộn ngang.
3. Khoảng cách (Spacing): Khoảng cách quá chật hẹp khiến giao diện bí bách, chữ đè sát vào viền mà không có khoảng trống.

LƯU Ý QUAN TRỌNG:
- BẠN TUYỆT ĐỐI KHÔNG ĐƯỢC BỊA RA LỖI (hallucinate). Nếu giao diện bình thường, hãy trả về pass = true.
- BỎ QUA các thiết kế phá cách cố ý (ví dụ: nút "Xem thêm" hình tròn đè lên văn bản nhạt màu ở nền). Đây là phong cách thiết kế, không phải lỗi đè nội dung.
- Chỉ báo lỗi đè nội dung nếu hai phần tử tĩnh (static elements) nằm trên cùng một mặt phẳng THẬT SỰ bị đè lên nhau một cách lỗi lõm, gây mất chữ hoặc không thể đọc được.
- Đôi khi ảnh có thể bị cắt hơi đột ngột ở mép dưới do quá trình chụp ảnh, đó không phải là lỗi overflow hay cắt xén.

Quan trọng: Khi phát hiện lỗi, bạn phải trích dẫn một đoạn text ngắn (khoảng 3-6 từ) nằm NGAY TẠI vị trí lỗi (trích dẫn chính xác từng chữ trên hình) vào trường "anchor_text". Hệ thống sẽ dùng text này để dò tìm tọa độ chính xác. Đồng thời cung cấp vị trí ƯỚC TÍNH vào "web_box_2d" dưới dạng [ymin, xmin, ymax, xmax] (chuẩn hóa 0-1000).

Hãy trả kết quả bằng chuỗi JSON (KHÔNG bọc trong markdown code block) theo đúng định dạng sau:
{
    "pass": boolean,
    "reason": "Giải thích ngắn gọn lý do tại sao pass hoặc fail",
    "issues": [
        {
            "description": "Mô tả chi tiết lỗi",
            "anchor_text": "Đoạn text ngắn nằm ngay tại lỗi để làm mỏ neo dò tìm tọa độ",
            "web_box_2d": [ymin, xmin, ymax, xmax]
        }
    ]
}`;

            return await this.generateJson(prompt, [webPart], `Heuristic ${deviceHint}`);

        } catch (error: any) {
            console.error('Gemini Vision Error (evaluateLayout):', error);
            return { pass: false, reason: `Lỗi gọi AI: ${error?.message || error}` };
        }
    }

    /**
     * Tìm lỗi chính tả tiếng Việt trong văn bản lấy từ DOM.
     *
     * Gửi TEXT THUẦN chứ không gửi ảnh: ảnh chụp đã bị nén xuống 1280px/JPEG 70 nên
     * chữ nhỏ đọc không ra, còn innerText thì chính xác từng ký tự và rẻ hơn nhiều lần.
     *
     * Prompt cố ý viết theo hướng thà bỏ sót còn hơn báo sai — web tiếng Việt đầy tên
     * thương hiệu, mã hàng và từ mượn, báo sai vài lần là mất luôn niềm tin vào bộ test.
     */
    async checkSpelling(
        text: string,
        whitelist: string[] = []
    ): Promise<{ errors: Array<{ wrong: string; suggestion: string; context: string; confidence: string }> }> {
        try {
            if (!text.trim()) return { errors: [] };

            const ignoreList = whitelist.length > 0
                ? whitelist.join(', ')
                : '(không có)';

            const prompt = `Bạn là biên tập viên tiếng Việt giàu kinh nghiệm.
Nhiệm vụ: tìm LỖI CHÍNH TẢ THẬT SỰ trong đoạn văn bản được lấy từ một website.

CHỈ báo những lỗi sau:
1. Sai phụ âm hoặc vần, tạo ra từ không tồn tại: "sử lý" (đúng: "xử lý"), "chia sẽ" (đúng: "chia sẻ").
2. Sai hoặc thiếu dấu thanh: "chất lương" (đúng: "chất lượng"), "bao gôm" (đúng: "bao gồm").
3. Nhầm s/x, ch/tr, d/gi/r, i/y khi kết quả là một từ vô nghĩa trong tiếng Việt.

TUYỆT ĐỐI BỎ QUA:
- Tên riêng: tên người, tên thương hiệu, tên sản phẩm, địa danh.
- Mã sản phẩm, mã đơn hàng, số điện thoại, địa chỉ, email, URL, tên miền.
- Từ mượn tiếng Anh và thuật ngữ chuyên ngành.
- Từ viết tắt (TP.HCM, CTY, Q.1, TNHH).
- Khác biệt vùng miền, cách viết hoa, cách dùng từ.
- Lỗi khoảng trắng, dấu câu, xuống dòng, lặp từ.
- Mọi từ nằm trong DANH SÁCH BỎ QUA.

DANH SÁCH BỎ QUA: ${ignoreList}

NGUYÊN TẮC QUAN TRỌNG NHẤT: nếu không CHẮC CHẮN đó là lỗi chính tả, ĐỪNG báo.
Thà bỏ sót còn hơn báo nhầm. Văn bản đúng hoàn toàn thì trả về mảng rỗng.

Trường "wrong" phải trích NGUYÊN VĂN, đúng từng ký tự như trong văn bản, để hệ thống dò lại được.

Trả về JSON đúng định dạng:
{
  "errors": [
    {
      "wrong": "từ hoặc cụm từ viết sai, trích nguyên văn",
      "suggestion": "cách viết đúng",
      "context": "khoảng 8-12 từ xung quanh để định vị",
      "confidence": "cao" | "trung bình" | "thấp"
    }
  ]
}

VĂN BẢN CẦN KIỂM TRA:
"""
${text}
"""`;

            const result = await this.generateJson(prompt, [], 'Kiểm tra chính tả');
            return { errors: Array.isArray(result?.errors) ? result.errors : [] };

        } catch (error: any) {
            console.error('Gemini Vision Error (checkSpelling):', error);
            throw error;
        }
    }
}
