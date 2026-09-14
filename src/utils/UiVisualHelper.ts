import { Page, test, expect, TestInfo } from '@playwright/test';
import { allure } from 'allure-playwright';
import * as path from 'path';
import * as fs from 'fs';
import { UiPage } from '../pages/ui/UiPage';
import { VisualAnnotator } from '../services/VisualAnnotator';
import { GeminiVision } from '../services/GeminiVision';
import { UiPageTarget } from '../../data/ui/uiTypes';
import { BaselineContext, BaselineImage, resolveBaseline } from '../services/baseline/BaselineStrategy';

/** Đặt tên file an toàn từ path của trang: "/gioi-thieu" → "gioi_thieu" */
function safeName(value: string): string {
    return value.replace(/[^a-z0-9]/gi, '_').replace(/^_+|_+$/g, '') || 'home';
}

export class UiVisualHelper {
    /**
     * Đối chiếu giao diện thực tế với một ảnh chuẩn.
     *
     * Ảnh chuẩn lấy từ đâu là do BaselineStrategy quyết định (Figma, web tham chiếu, ...),
     * helper này không biết và không cần biết. Trang nào không có chuẩn ở viewport đang
     * chạy thì bỏ qua — phần kiểm tra của nó nằm ở các lớp nội tại.
     */
    static async runVisualComparison(
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

        const ctx: BaselineContext = {
            viewportWidth: page.viewportSize()?.width ?? 0,
            viewportName: testInfo.project.name
        };

        const fullUrl = `${BASE_URL}${target.path}`;
        const diffDir = path.join(testInfo.outputDir, 'visual-diff');
        fs.mkdirSync(diffDir, { recursive: true });

        const slug = safeName(target.path);
        const expectedImagePath = path.join(diffDir, `${slug}_expected.png`);
        const actualImagePath = path.join(diffDir, `${slug}_actual.png`);

        // ── Step 1: Lấy ảnh chuẩn ──
        let baseline: BaselineImage | null = null;
        await test.step('1. Lấy ảnh chuẩn để đối chiếu', async () => {
            baseline = await resolveBaseline(target).getExpected(target, ctx, testInfo);
        });

        if (!baseline) {
            test.skip(true,
                `Trang "${target.name}" chưa có bản thiết kế đối chiếu cho ${ctx.viewportName} ` +
                `(${ctx.viewportWidth}px). Trang này vẫn được kiểm tra ở bộ heuristic.`);
            return;
        }

        const expected: BaselineImage = baseline;
        fs.copyFileSync(expected.path, expectedImagePath);
        await allure.parameter('Nguồn chuẩn', expected.kind);
        await allure.attachment(expected.label, fs.readFileSync(expectedImagePath), 'image/png');

        // ── Step 2: Chụp ảnh web thực tế ──
        await test.step(`2. Chụp ảnh trang "${target.name}" trên ${ctx.viewportName}`, async () => {
            await uiPage.gotoTargetUrl(fullUrl);
            // Thứ tự quan trọng: cuộn kích lazy-load TRƯỚC, vì nhiều theme chỉ gắn
            // class sticky cho header sau khi người dùng cuộn.
            await uiPage.prepareForScreenshot();
            await uiPage.hideDynamicElements();

            await page.screenshot({
                path: actualImagePath,
                fullPage: true,
                animations: 'disabled'
            });
            await allure.attachment('Web Actual', fs.readFileSync(actualImagePath), 'image/png');
        });

        // ── Step 3: So sánh + Annotate ──
        let aiResult: {
            pass: boolean,
            reason: string,
            issues?: Array<{ description: string, web_box_2d: [number, number, number, number], figma_box_2d: [number, number, number, number] }>
        };

        await test.step('3. Phân tích ngữ cảnh với Gemini AI', async () => {
            const gemini = new GeminiVision();
            aiResult = await gemini.compareImages(expectedImagePath, actualImagePath);
            await allure.parameter('AI Pass', String(aiResult.pass));
            await allure.attachment('AI Reason', Buffer.from(aiResult.reason, 'utf-8'), 'text/plain');

            if (!aiResult.pass && aiResult.issues && aiResult.issues.length > 0) {
                const snippetResults = await VisualAnnotator.annotateAiDifferences(
                    expectedImagePath,
                    actualImagePath,
                    diffDir,
                    target.name,
                    aiResult.issues
                );

                let idx = 1;
                for (const snippet of snippetResults) {
                    await allure.attachment(
                        `Lỗi ${idx}: ${snippet.description.substring(0, 30)}...`,
                        fs.readFileSync(snippet.outputPath),
                        'image/png'
                    );
                    idx++;
                }
                aiResult.reason += `\nĐã đính kèm ${snippetResults.length} ảnh chi tiết lỗi vào báo cáo.`;
            }
        });

        await test.step('4. Kiểm tra kết quả AI', async () => {
            expect(aiResult!.pass, `AI báo lỗi: ${aiResult!.reason}`).toBe(true);
        });
    }
}
