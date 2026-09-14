import { test } from '../../src/fixtures/webFixture';
import { allure } from 'allure-playwright';
import { uiTargets } from '../../data/ui/uiGeneratedData';
import { UiPage } from '../../src/pages/ui/UiPage';
import { UiSpellingHelper } from '../../src/utils/UiSpellingHelper';

/** Sinh tag riêng cho từng trang để có thể chạy lẻ: --grep "@ui-gioi-thieu" */
function pageTag(target: { path: string }): string {
    const slug = target.path.toLowerCase()
        .normalize('NFD').replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]/g, '-').replace(/^-+|-+$/g, '');
    return `@ui-${slug || 'home'}`;
}

if (uiTargets.length === 0) {
    test('Chưa sinh được danh sách trang UI', { tag: ['@smoke', '@ui', '@uispelling'] }, () => {
        throw new Error(
            'data/ui/uiGeneratedData.ts đang rỗng nên không có trang nào được kiểm tra chính tả.\n' +
            'Chạy: npm run generate-seo && npm run generate-ui'
        );
    });
} else {
    test.describe('UI — Kiểm tra chính tả tiếng Việt', () => {
        test.describe.configure({ mode: 'parallel' });

        let uiPage: UiPage;

        test.beforeEach(async ({ page }) => {
            uiPage = new UiPage(page);
            await allure.epic('UI');
        });

        uiTargets.forEach((target) => {
            test(
                // Kèm path để tiêu đề luôn duy nhất — xem ghi chú trong uiHeuristic.spec.ts
                `[${target.name}] Soát lỗi chính tả — ${target.path}`,
                {
                    tag: ['@priority:high', '@smoke', '@regression', '@positive', '@ui', '@uispelling', pageTag(target)],
                    annotation: [{ type: 'template', description: target.templateKind }]
                },
                async ({ page }, testInfo) => {
                    test.setTimeout(300000);

                    // Nội dung chữ giống hệt nhau ở mọi viewport nên chỉ kiểm một lần,
                    // ở project có bật metadata.contentCheck (xem playwright.config.ts).
                    test.skip(
                        testInfo.project.metadata?.contentCheck !== true,
                        `${testInfo.project.name} không chạy lớp kiểm tra nội dung (đã kiểm ở UI Desktop)`
                    );

                    await allure.feature(target.name);
                    await allure.story('Chính tả');

                    await UiSpellingHelper.runSpellingCheck(page, uiPage, target, testInfo);
                }
            );
        });
    });
}
