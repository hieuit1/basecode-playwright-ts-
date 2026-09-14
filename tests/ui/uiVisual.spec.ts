import { test } from '../../src/fixtures/webFixture';
import { allure } from 'allure-playwright';
import { uiTargets } from '../../data/ui/uiGeneratedData';
import { UiPage } from '../../src/pages/ui/UiPage';
import { UiVisualHelper } from '../../src/utils/UiVisualHelper';
import { hasBaseline } from '../../src/services/baseline/BaselineStrategy';

/** Sinh tag riêng cho từng trang để có thể chạy lẻ: --grep "@ui-gioi-thieu" */
function pageTag(target: { path: string }): string {
    const slug = target.path.toLowerCase()
        .normalize('NFD').replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]/g, '-').replace(/^-+|-+$/g, '');
    return `@ui-${slug || 'home'}`;
}

if (uiTargets.length === 0) {
    // Danh sách rỗng nghĩa là bộ test UI không chạy trang nào. Phải BÁO ĐỎ chứ không
    // được pass, nếu không pipeline sẽ xanh trong khi coverage UI bằng 0.
    // Gắn tag để test này vẫn hiện ra khi lọc --grep "@ui", nếu không thì chạy bộ UI
    // với data rỗng sẽ ra "0 tests" và lại thành im lặng.
    test('Chưa sinh được danh sách trang UI', { tag: ['@ui', '@uivisual'] }, () => {
        throw new Error(
            'data/ui/uiGeneratedData.ts đang rỗng nên không có trang nào được test UI.\n' +
            'Chạy: npm run generate-seo && npm run generate-ui'
        );
    });
} else {
    test.describe('UI — Đối chiếu bản thiết kế', () => {
        test.describe.configure({ mode: 'parallel' });

        let uiPage: UiPage;

        test.beforeEach(async ({ page }) => {
            uiPage = new UiPage(page);
            await allure.epic('UI');
        });

        uiTargets.forEach((target) => {
            test(
                `[${target.name}] Đối chiếu thiết kế ↔ web`,
                {
                    tag: ['@priority:high', '@regression', '@positive', '@ui', '@uivisual', pageTag(target)],
                    annotation: [{ type: 'template', description: target.templateKind }]
                },
                async ({ page }, testInfo) => {
                    test.setTimeout(600000);

                    // Trang chưa có bản thiết kế cho nhóm viewport này thì bỏ qua ở đây —
                    // nó vẫn được kiểm tra đầy đủ bên uiHeuristic.spec.ts.
                    const viewportWidth = page.viewportSize()?.width ?? 0;
                    test.skip(
                        !hasBaseline(target, viewportWidth),
                        `Không có bản thiết kế cho ${testInfo.project.name} (${viewportWidth}px)`
                    );

                    await allure.feature(target.name);
                    await allure.story(testInfo.project.name);

                    await UiVisualHelper.runVisualComparison(page, uiPage, target, testInfo);
                }
            );
        });
    });
}
