/**
 * Cấu hình cho lớp kiểm tra chính tả tiếng Việt.
 *
 * Khai theo TỪNG website trong config/.env.<site>, không sửa file này:
 *
 *   UI_SPELLING_WHITELIST=Vellora,Eames,showroom,combo
 *   UI_SPELLING_MODE=report        # report = chỉ ghi nhận | enforce = fail khi có lỗi
 *   UI_SPELLING_MAX_ERRORS=0
 */

/** Tách chuỗi biến môi trường thành mảng, bỏ khoảng trắng và mục rỗng */
function parseList(raw: string | undefined): string[] {
    if (!raw) return [];
    return raw.split(/[,;|]/).map(item => item.trim()).filter(Boolean);
}

export type SpellingMode = 'report' | 'enforce';

export interface SpellingRules {
    /**
     * Từ KHÔNG được coi là sai: tên thương hiệu, tên sản phẩm, mã hàng, từ mượn.
     * Mỗi website một danh sách riêng.
     */
    whitelist: string[];
    /**
     * report  — ghi nhận đầy đủ vào Allure nhưng không fail. Dùng cho lần chạy đầu
     *           để gom whitelist từ dữ liệu thật.
     * enforce — fail khi số lỗi vượt maxErrors.
     */
    mode: SpellingMode;
    /** Số lỗi chấp nhận được ở chế độ enforce */
    maxErrors: number;
    /** Số ký tự tối đa gửi cho AI mỗi trang, để khống chế token */
    maxTextLength: number;
}

export const spellingRules: SpellingRules = {
    whitelist: [
        // Từ mượn đã quá phổ biến trên web tiếng Việt, AI hay nhầm là sai chính tả
        'showroom', 'combo', 'voucher', 'banner', 'slider', 'logo', 'menu',
        'email', 'website', 'online', 'offline', 'sale', 'size', 'set',
        ...parseList(process.env.UI_SPELLING_WHITELIST)
    ],

    mode: (process.env.UI_SPELLING_MODE === 'enforce' ? 'enforce' : 'report'),
    maxErrors: Number(process.env.UI_SPELLING_MAX_ERRORS ?? 0),
    maxTextLength: Number(process.env.UI_SPELLING_MAX_TEXT ?? 8000)
};
