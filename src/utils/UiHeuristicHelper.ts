import { Page, test, expect, TestInfo } from '@playwright/test';
import { allure } from 'allure-playwright';
import * as path from 'path';
import * as fs from 'fs';
import { UiPage } from '../pages/ui/UiPage';
import { VisualAnnotator } from '../services/VisualAnnotator';
import { GeminiVision } from '../services/GeminiVision';
import { UiPageTarget } from '../../data/ui/uiTypes';

/** Đặt tên file an toàn từ path của trang: "/gioi-thieu" → "gioi_thieu" */
function safeName(value: string): string {
    return value.replace(/[^a-z0-9]/gi, '_').replace(/^_+|_+$/g, '') || 'home';
}

export class UiHeuristicHelper {
    /**
     * Chấm giao diện một trang mà KHÔNG cần bản thiết kế.
     *
     * Đây là lớp chạy được cho mọi website — kể cả web cào lại không còn bản gốc để so —
     * và cho mọi viewport. Trước đây lớp này chỉ chạy trên mobile (UiMobileHelper).
     */
    static async runHeuristic(
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

        const viewportName = testInfo.project.name;
        const viewportWidth = page.viewportSize()?.width;

        const fullUrl = `${BASE_URL}${target.path}`;
        const issueDir = path.join(testInfo.outputDir, 'layout-issues');
        fs.mkdirSync(issueDir, { recursive: true });

        const actualImagePath = path.join(issueDir, `${safeName(target.path)}_${safeName(viewportName)}.png`);

        await test.step(`1. Chụp ảnh "${target.name}" trên ${viewportName}`, async () => {
            await uiPage.gotoTargetUrl(fullUrl);
            // Cuộn kích lazy-load TRƯỚC rồi mới xử lý overlay — xem ghi chú trong UiPage
            await uiPage.prepareForScreenshot();
            await uiPage.hideDynamicElements();

            await page.screenshot({
                path: actualImagePath,
                fullPage: true,
                animations: 'disabled'
            });
            await allure.attachment(`Ảnh ${viewportName}`, fs.readFileSync(actualImagePath), 'image/png');
        });

        let aiResult: {
            pass: boolean,
            reason: string,
            issues?: Array<{ description: string, anchor_text?: string, web_box_2d: [number, number, number, number] }>
        };

        await test.step('2. AI đánh giá UX/UI', async () => {
            const gemini = new GeminiVision();
            aiResult = await gemini.evaluateLayout(actualImagePath, viewportName, viewportWidth);
            await allure.parameter('AI Pass', String(aiResult.pass));
            await allure.attachment('AI Reason', Buffer.from(aiResult.reason, 'utf-8'), 'text/plain');

            if (!aiResult.pass && aiResult.issues && aiResult.issues.length > 0) {
                await this.refineIssueCoordinates(page, aiResult.issues);

                const snippetResults = await VisualAnnotator.annotateMobileIssues(
                    actualImagePath,
                    issueDir,
                    `${target.name} ${viewportName}`,
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

        await test.step('3. Kiểm tra kết quả', async () => {
            expect(aiResult!.pass, `AI báo lỗi: ${aiResult!.reason}`).toBe(true);
        });
    }

    /**
     * Toạ độ do AI ước lượng rất kém chính xác. AI được yêu cầu trích một đoạn text ngắn
     * nằm ngay tại chỗ lỗi; ở đây dùng Playwright dò lại đoạn text đó để lấy toạ độ thật
     * từ DOM, chỉ giữ toạ độ của AI khi không tìm thấy.
     */
    private static async refineIssueCoordinates(
        page: Page,
        issues: Array<{ anchor_text?: string, web_box_2d: [number, number, number, number] }>
    ): Promise<void> {
        const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
        const pageWidth = await page.evaluate(() => document.documentElement.scrollWidth);
        if (!pageHeight || !pageWidth) return;

        for (const issue of issues) {
            if (!issue.anchor_text) continue;
            try {
                const element = page.getByText(issue.anchor_text).first();
                if (!(await element.isVisible({ timeout: 1000 }))) continue;

                const box = await element.boundingBox();
                if (!box) continue;

                const padding = 20;
                const ymin = Math.max(0, box.y - padding);
                const xmin = Math.max(0, box.x - padding);
                const ymax = Math.min(pageHeight, box.y + box.height + padding);
                const xmax = Math.min(pageWidth, box.x + box.width + padding);

                issue.web_box_2d = [
                    (ymin / pageHeight) * 1000,
                    (xmin / pageWidth) * 1000,
                    (ymax / pageHeight) * 1000,
                    (xmax / pageWidth) * 1000
                ];
            } catch {

            }
        }
    }
}
