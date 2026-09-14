import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { FigmaService } from '../src/services/FigmaService';
import { FigmaFrame, TemplateKind, UiPageTarget } from '../data/ui/uiTypes';
import { SeoPageTestData } from '../data/seo/seoData';
import { seoTestData } from '../data/seo/seoGeneratedData';

const environment = process.env.ENV || 'qa';
dotenv.config({ path: path.resolve(__dirname, `../config/.env.${environment}`) });
dotenv.config();

/** Trần số trang test UI. Mỗi trang chạy trên mọi viewport nên tăng là tốn theo cấp số nhân. */
const MAX_PAGES = Number(process.env.UI_MAX_PAGES ?? 12);

/** Frame thấp hơn ngưỡng này là component (nút, thanh, icon), không phải bản vẽ trang */
const MIN_PAGE_FRAME_HEIGHT = 400;

/** Dưới ngưỡng khớp này thì coi như không ghép được thiết kế */
const MATCH_THRESHOLD = 0.6;

/** SEO ghi trang chủ là /index.php, phía UI dùng / */
const HOME_PATHS = new Set(['/', '/index.php', '/index.html']);

const OUTPUT_PATH = path.resolve(__dirname, '../data/ui/uiGeneratedData.ts');
const SCANNED_FRAMES_PATH = path.resolve(__dirname, '../data/templates/scanned-figma-frames.json');

// ──────────────────────────────────────────
// Chuẩn hoá & so khớp tên
// ──────────────────────────────────────────

/** Bỏ dấu, bỏ mọi ký tự không phải chữ/số: "Giới thiệu" và "/gioi-thieu" cùng ra "gioithieu" */
function normalizeKey(value: string): string {
    return value.toLowerCase().normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]/g, '');
}

/** Bỏ dấu nhưng giữ khoảng trắng, để so theo từ */
function normalizeWords(value: string): string {
    return value.toLowerCase().normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9 ]/g, ' ')
        .replace(/\s+/g, ' ').trim();
}

/** Tỉ lệ từ chung trên tổng số từ của hai chuỗi (Jaccard) */
function similarityScore(a: string, b: string): number {
    const wordsA = new Set(normalizeWords(a).split(' ').filter(Boolean));
    const wordsB = new Set(normalizeWords(b).split(' ').filter(Boolean));
    if (wordsA.size === 0 || wordsB.size === 0) return 0;
    let common = 0;
    for (const word of wordsA) if (wordsB.has(word)) common++;
    return common / new Set([...wordsA, ...wordsB]).size;
}

// ──────────────────────────────────────────
// Bước 1: Chọn trang từ dữ liệu SEO
// ──────────────────────────────────────────

const toUiPath = (p: string) => (HOME_PATHS.has(p) ? '/' : p);

function templateKindOf(page: SeoPageTestData): TemplateKind {
    if (HOME_PATHS.has(page.path)) return 'home';
    return page.checkCoreWebVitals ? 'hub' : 'sample';
}

/**
 * Lấy mẫu trải đều thay vì lấy N phần tử đầu.
 * Website dùng URL phẳng thì các trang cùng một nhánh nằm liền nhau trong sitemap,
 * lấy N cái đầu sẽ ra toàn trang cùng một template.
 */
function spreadSample<T>(items: T[], count: number): T[] {
    if (count <= 0 || items.length === 0) return [];
    if (items.length <= count) return [...items];
    const step = items.length / count;
    return Array.from({ length: count }, (_, i) => items[Math.floor(i * step)]);
}

export function pickTargets(pages: SeoPageTestData[]): UiPageTarget[] {
    // Gộp '/' với '/index.php' để trang chủ không bị đếm hai lần
    const seen = new Set<string>();
    const unique: SeoPageTestData[] = [];
    for (const page of pages) {
        const uiPath = toUiPath(page.path);
        if (seen.has(uiPath)) continue;
        seen.add(uiPath);
        unique.push(page);
    }

    // Trang chủ + các trang SEO đã xác định có template riêng → giữ toàn bộ.
    const primary = unique.filter(p => templateKindOf(p) !== 'sample');
    const rest = unique.filter(p => templateKindOf(p) === 'sample');
    const sampled = spreadSample(rest, Math.max(0, MAX_PAGES - primary.length));

    const targets: UiPageTarget[] = [...primary, ...sampled].map(page => ({
        name: page.name,
        path: toUiPath(page.path),
        templateKind: templateKindOf(page),
        figmaNodeId: null,
        figmaFrameName: null,
        figmaFrameWidth: null,
        matchScore: 0
    }));

    return ensureUniqueNames(targets);
}

function ensureUniqueNames(targets: UiPageTarget[]): UiPageTarget[] {
    const nameCounts = new Map<string, number>();
    for (const target of targets) {
        nameCounts.set(target.name, (nameCounts.get(target.name) ?? 0) + 1);
    }

    return targets.map(target => {
        if ((nameCounts.get(target.name) ?? 0) <= 1) return target;

        const label = target.path === '/' ? 'trang chủ' : target.path.replace(/^\//, '');
        return { ...target, name: `${target.name} — ${label}` };
    });
}

// ──────────────────────────────────────────
// Bước 2: Làm giàu bằng Figma (tuỳ chọn)
// ──────────────────────────────────────────

function scoreFrame(frame: FigmaFrame, target: UiPageTarget): number {
    const frameKey = normalizeKey(frame.name);
    if (!frameKey) return 0;

    // Tên mặc định của Figma ("Frame 39", "Group 12") không mang thông tin gì
    if (/^(frame|group|component|rectangle)\d*$/.test(frameKey)) return 0;

    if (target.path === '/') {
        return /(home|trangchu|index)/.test(frameKey) ? 1 : 0;
    }

    // Bản vẽ trang chi tiết không bao giờ khớp slug (slug là tên sản phẩm thật),
    // nên ghép với một trang lấy mẫu — chính là trang chi tiết SEO đã chọn sẵn.
    if (/(chitiet|detail)/.test(frameKey)) {
        return target.templateKind === 'sample' ? 0.7 : 0;
    }

    const slugKey = normalizeKey(target.path);
    const nameKey = normalizeKey(target.name);

    if (frameKey === slugKey || frameKey === nameKey) return 1;
    if (slugKey.includes(frameKey) || frameKey.includes(slugKey)) return 0.85;

    return similarityScore(frame.name, target.name);
}

async function enrichWithFigma(targets: UiPageTarget[]): Promise<void> {
    const fileKey = process.env.UI_TEST_FIGMA_FILE_KEY || '';
    const token = process.env.UI_TEST_FIGMA_TOKEN || '';

    if (!fileKey || !token) {
        console.log('ℹ Không có UI_TEST_FIGMA_TOKEN/FILE_KEY — bỏ qua bước ghép thiết kế.');
        console.log('  Các trang vẫn được test bằng những lớp không cần bản thiết kế.');
        return;
    }

    let frames: FigmaFrame[];
    try {
        frames = await new FigmaService().fetchAllFrames(fileKey);
    } catch (error) {
        console.warn(`⚠ Không đọc được file Figma: ${(error as Error).message}`);
        console.warn('  Vẫn sinh data bình thường, chỉ là không có chuẩn để đối chiếu ảnh.');
        return;
    }

    fs.writeFileSync(
        SCANNED_FRAMES_PATH,
        JSON.stringify({ timestamp: new Date().toISOString(), fileKey, frames }, null, 2),
        'utf-8'
    );

    const pageFrames = frames.filter(
        f => ['FRAME', 'SECTION'].includes(f.type ?? '') && f.height >= MIN_PAGE_FRAME_HEIGHT
    );
    console.log(
        `Figma: ${frames.length} node → ${pageFrames.length} frame đủ lớn để coi là bản vẽ trang ` +
        `(bỏ qua frame cao dưới ${MIN_PAGE_FRAME_HEIGHT}px vì đó là component).`
    );

    // Chấm điểm mọi cặp (trang × frame) rồi gán tham lam từ điểm cao xuống.
    // Mỗi frame chỉ dùng cho một trang, tránh việc một bản vẽ khớp nhiều trang cùng lúc.
    const pairs: Array<{ target: UiPageTarget; frame: FigmaFrame; score: number }> = [];
    for (const target of targets) {
        for (const frame of pageFrames) {
            const score = scoreFrame(frame, target);
            if (score >= MATCH_THRESHOLD) pairs.push({ target, frame, score });
        }
    }
    pairs.sort((a, b) => b.score - a.score);

    const usedFrames = new Set<string>();
    for (const { target, frame, score } of pairs) {
        if (target.figmaNodeId || usedFrames.has(frame.id)) continue;
        target.figmaNodeId = frame.id.replace(':', '-');
        target.figmaFrameName = frame.name;
        target.figmaFrameWidth = frame.width;
        target.matchScore = Number(score.toFixed(2));
        usedFrames.add(frame.id);
        console.log(`  ✓ ${target.path}  ←  "${frame.name}" (${frame.width}px, khớp ${score.toFixed(2)})`);
    }

    const unmatched = pageFrames.filter(f => !usedFrames.has(f.id));
    if (unmatched.length > 0) {
        console.warn(`⚠ ${unmatched.length} bản vẽ chưa ghép được trang nào: ${unmatched.map(f => f.name).join(', ')}`);
        console.warn('  Đặt tên frame trùng slug URL (ví dụ "gioithieu" ↔ /gioi-thieu) để ghép được.');
    }
}

// ──────────────────────────────────────────
// Bước 3: Ghi file
// ──────────────────────────────────────────

function writeOutput(targets: UiPageTarget[]): void {
    const content = `// ============================================================
// TẬP TIN NÀY ĐƯỢC TẠO TỰ ĐỘNG BỞI scripts/generateUiData.ts
// Nguồn trang: data/seo/seoGeneratedData.ts
// KHÔNG sửa trực tiếp — hãy chạy lại script để cập nhật
// ============================================================

import { UiPageTarget } from './uiTypes';

export const uiTargets: UiPageTarget[] = ${JSON.stringify(targets, null, 2)};
`;
    fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
    fs.writeFileSync(OUTPUT_PATH, content, 'utf-8');
}

// ──────────────────────────────────────────
// MAIN
// ──────────────────────────────────────────
async function run() {
    console.log('Sinh UI Test Data từ dữ liệu SEO...\n');

    if (seoTestData.length === 0) {
        console.error('✗ data/seo/seoGeneratedData.ts đang rỗng.');
        console.error('  Chạy "npm run generate-seo" trước để crawl danh sách trang.');
        process.exit(1);
    }

    const targets = pickTargets(seoTestData);
    console.log(
        `Chọn ${targets.length}/${seoTestData.length} trang từ dữ liệu SEO ` +
        `(${targets.filter(t => t.templateKind !== 'sample').length} trang template riêng, ` +
        `${targets.filter(t => t.templateKind === 'sample').length} trang lấy mẫu).\n`
    );

    await enrichWithFigma(targets);

    writeOutput(targets);

    const withDesign = targets.filter(t => t.figmaNodeId).length;
    console.log(`\n✓ Đã lưu ${targets.length} trang vào ${OUTPUT_PATH}`);
    console.log(`  ${withDesign} trang có bản thiết kế để đối chiếu, ${targets.length - withDesign} trang chạy kiểm tra nội tại.`);
}

// Chỉ tự chạy khi được gọi trực tiếp, để các hàm thuần ở trên import ra kiểm thử được
if (require.main === module) {
    run().catch(error => {
        console.error('Lỗi:', error);
        process.exit(1);
    });
}
