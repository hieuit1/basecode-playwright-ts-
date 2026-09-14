import { Page, test, expect, TestInfo } from '@playwright/test';
import { allure } from 'allure-playwright';
import { UiPage } from '../pages/ui/UiPage';
import { GeminiVision } from '../services/GeminiVision';
import { UiPageTarget } from '../../data/ui/uiTypes';
import { spellingRules } from '../../data/ui/contentRules';

interface SpellingError {
    wrong: string;
    suggestion: string;
    context: string;
    confidence: string;
}

export class UiSpellingHelper {
    /**
     * Kiểm tra lỗi chính tả tiếng Việt trên một trang.
     *
     * Chữ được lấy từ DOM chứ không từ ảnh chụp, nên chính xác từng ký tự.
     * Vì nội dung chữ giống nhau ở mọi viewport, lớp này chỉ chạy một lần mỗi trang
     * (bật bằng metadata.contentCheck trong playwright.config.ts).
     */
    static async runSpellingCheck(
        page: Page,
        uiPage: UiPage,
        target: UiPageTarget,
        testInfo: TestInfo
    ) {
        const BASE_URL = (process.env.BASE_URL || '').replace(/\/$/, '');
        if (!BASE_URL) {
            test.skip(true, 'Thiếu BASE_URL trong .env');
            return;
        }

        const fullUrl = `${BASE_URL}${target.path}`;
        let pageText = '';

        // ── Step 1: Lấy chữ từ DOM ──
        await test.step(`1. Trích văn bản hiển thị của trang "${target.name}"`, async () => {
            await uiPage.gotoTargetUrl(fullUrl);
            pageText = await this.extractVisibleText(page);

            if (pageText.length > spellingRules.maxTextLength) {
                pageText = pageText.slice(0, spellingRules.maxTextLength);
            }

            await allure.parameter('Số ký tự kiểm tra', String(pageText.length));
            await allure.attachment('Văn bản đã trích', Buffer.from(pageText, 'utf-8'), 'text/plain');
        });

        if (!pageText.trim()) {
            test.skip(true, `Trang "${target.name}" không có văn bản nào để kiểm tra`);
            return;
        }

        // ── Step 2: AI soát chính tả ──
        let errors: SpellingError[] = [];
        await test.step('2. AI soát lỗi chính tả tiếng Việt', async () => {
            const gemini = new GeminiVision();
            const result = await gemini.checkSpelling(pageText, spellingRules.whitelist);
            const rawErrors = result.errors ?? [];
            errors = this.filterReliableErrors(rawErrors, pageText);

            await allure.parameter('AI báo', String(rawErrors.length));
            await allure.parameter('Còn lại sau lọc', String(errors.length));

            // In thẳng ra console: ở chế độ report đây là cách nhanh nhất để soi kết quả
            // của cả 12 trang mà không phải mở Allure.
            console.log(
                `[Chính tả] ${target.path} — ${pageText.length} ký tự | ` +
                `AI báo ${rawErrors.length} lỗi → còn ${errors.length} sau lọc` +
                (errors.length > 0
                    ? `\n            ${errors.map(e => `"${e.wrong}" → "${e.suggestion}"`).join('\n            ')}`
                    : '')
            );
            if (rawErrors.length > errors.length) {
                const dropped = rawErrors
                    .filter(r => !errors.some(k => k.wrong === String(r.wrong ?? '').trim()))
                    .map(r => `"${r.wrong}"(${r.confidence})`);
                console.log(`            Đã lọc bỏ: ${dropped.join(', ')}`);
            }
        });

        // ── Step 3: Ghi từng lỗi vào báo cáo ──
        await test.step(`3. Kết quả: ${errors.length} lỗi chính tả`, async () => {
            if (errors.length === 0) {
                await allure.attachment(
                    'Kết quả',
                    Buffer.from('Không phát hiện lỗi chính tả nào.', 'utf-8'),
                    'text/plain'
                );
                return;
            }

            const lines = errors.map((e, i) =>
                `${i + 1}. "${e.wrong}"  →  "${e.suggestion}"\n   Ngữ cảnh: ${e.context}`
            );
            await allure.attachment(
                `Danh sách ${errors.length} lỗi chính tả`,
                Buffer.from(lines.join('\n\n'), 'utf-8'),
                'text/plain'
            );

            for (const e of errors) {
                await allure.step(`❌ "${e.wrong}" → "${e.suggestion}"`, async () => {
                    await allure.attachment(
                        'Ngữ cảnh',
                        Buffer.from(e.context || '(không có)', 'utf-8'),
                        'text/plain'
                    );
                });
            }
        });

        // ── Step 4: Kết luận theo chế độ ──
        await test.step('4. Đối chiếu ngưỡng', async () => {
            const summary = errors
                .map(e => `"${e.wrong}" → "${e.suggestion}"`)
                .join('; ');

            if (spellingRules.mode === 'report') {
                // Chế độ ghi nhận: không fail, dùng cho lần chạy đầu để gom whitelist
                await allure.parameter('Chế độ', 'report (chỉ ghi nhận, không fail)');
                if (errors.length > 0) {
                    console.warn(`[Chính tả] ${target.path}: ${errors.length} lỗi — ${summary}`);
                }
                return;
            }

            await allure.parameter('Chế độ', `enforce (tối đa ${spellingRules.maxErrors} lỗi)`);
            expect(
                errors.length,
                `Trang ${target.path} có ${errors.length} lỗi chính tả: ${summary}`
            ).toBeLessThanOrEqual(spellingRules.maxErrors);
        });
    }

    /** Gom mọi chữ người dùng nhìn thấy: nội dung, tiêu đề, mô tả và các thuộc tính hiển thị */
    private static async extractVisibleText(page: Page): Promise<string> {
        const raw = await page.evaluate(() => {
            const parts: string[] = [];

            const title = document.title?.trim();
            if (title) parts.push(title);

            const description = document
                .querySelector('meta[name="description"]')
                ?.getAttribute('content')?.trim();
            if (description) parts.push(description);

            // innerText chỉ trả về chữ đang hiển thị, tự bỏ script/style và phần tử ẩn
            parts.push(document.body?.innerText ?? '');

            // Chữ nằm trong thuộc tính mà người dùng vẫn đọc được
            const seen = new Set<string>();
            document.querySelectorAll('[alt],[title],[placeholder],[aria-label]').forEach(element => {
                for (const attribute of ['alt', 'title', 'placeholder', 'aria-label']) {
                    const value = element.getAttribute(attribute)?.trim();
                    if (value && !seen.has(value)) {
                        seen.add(value);
                        parts.push(value);
                    }
                }
            });

            return parts.join('\n');
        });

        // Gộp dòng trống liên tiếp cho gọn, giữ nguyên nội dung chữ
        return raw.replace(/\n{3,}/g, '\n\n').trim();
    }

    /**
     * Lọc bỏ những lỗi không đáng tin.
     *
     * Ba lớp, lớp thứ ba là quan trọng nhất: LLM có thể bịa ra một từ không hề tồn tại
     * trên trang. Đối chiếu ngược lại văn bản gốc loại sạch nhóm này.
     */
    private static filterReliableErrors(errors: SpellingError[], pageText: string): SpellingError[] {
        const haystack = pageText.toLowerCase();
        const whitelist = spellingRules.whitelist.map(word => word.toLowerCase());
        const kept: SpellingError[] = [];
        const seen = new Set<string>();

        for (const error of errors) {
            const wrong = String(error?.wrong ?? '').trim();
            if (!wrong) continue;

            // 1. Chỉ nhận mức chắc chắn cao
            if (String(error.confidence ?? '').toLowerCase() !== 'cao') continue;

            const needle = wrong.toLowerCase();

            // 2. Bỏ qua từ nằm trong danh sách cho phép
            if (whitelist.some(word => needle.includes(word))) continue;

            // 3. Từ AI báo phải THẬT SỰ có trên trang
            if (!haystack.includes(needle)) continue;

            // Không báo trùng cùng một từ nhiều lần
            if (seen.has(needle)) continue;
            seen.add(needle);

            kept.push({
                wrong,
                suggestion: String(error.suggestion ?? '').trim(),
                context: String(error.context ?? '').trim(),
                confidence: String(error.confidence)
            });
        }

        return kept;
    }
}
