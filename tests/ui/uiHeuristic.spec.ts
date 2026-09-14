import { test } from '../../src/fixtures/webFixture';
import { allure } from 'allure-playwright';
import { uiTargets } from '../../data/ui/uiGeneratedData';
import { UiPage } from '../../src/pages/ui/UiPage';
import { UiHeuristicHelper } from '../../src/utils/UiHeuristicHelper';

/** Sinh tag riêng cho từng trang để có thể chạy lẻ: --grep "@ui-gioi-thieu" */
function pageTag(target: { path: string }): string {
    const slug = target.path.toLowerCase()
        .normalize('NFD').replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]/g, '-').replace(/^-+|-+$/g, '');
    return `@ui-${slug || 'home'}`;
}

if (uiTargets.length === 0) {
    test('Chưa sinh được danh sách trang UI', { tag: ['@ui', '@uiheuristic'] }, () => {
        throw new Error(
            'data/ui/uiGeneratedData.ts đang rỗng nên không có trang nào được test UI.\n' +
            'Chạy: npm run generate-seo && npm run generate-ui'
        );
    });
} else {
    test.describe('UI — Đánh giá UX/UI không cần thiết kế', () => {
        test.describe.configure({ mode: 'parallel' });

        let uiPage: UiPage;

        test.beforeEach(async ({ page }) => {
            uiPage = new UiPage(page);
            await allure.epic('UI');
        });

        // Lớp này chạy cho MỌI trang trên MỌI viewport, không phụ thuộc Figma —
        // nên website cào lại không còn bản gốc để so vẫn được kiểm tra đầy đủ.
        uiTargets.forEach((target) => {
            test(
                `[${target.name}] Đánh giá bố cục`,
                {
                    tag: ['@priority:high', '@regression', '@positive', '@ui', '@uiheuristic', pageTag(target)],
                    annotation: [{ type: 'template', description: target.templateKind }]
                },
                async ({ page }, testInfo) => {
                    test.setTimeout(600000);

                    // Viewport nào được gọi AI là do metadata.aiHeuristic trong
                    // playwright.config.ts quyết định — xem ghi chú ở đó về chi phí.
                    test.skip(
                        testInfo.project.metadata?.aiHeuristic !== true,
                        `${testInfo.project.name} không bật lớp chấm bằng AI (xem metadata.aiHeuristic)`
                    );

                    await allure.feature(target.name);
                    await allure.story(testInfo.project.name);

                    await UiHeuristicHelper.runHeuristic(page, uiPage, target, testInfo);
                }
            );
        });
    });
}
