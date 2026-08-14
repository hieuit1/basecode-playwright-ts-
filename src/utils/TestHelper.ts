import { Page, test, expect } from "@playwright/test";

export class TestHelper {
    /**
     * Chụp ảnh màn hình và đính kèm vào Allure Report
     * @param page - Context hiện tại
     * @param screenshotName - Tên hiển thị trên report
     */
    static async takeScreenshot(page: Page, screenshotName: string): Promise<void> {
        const screenshot = await page.screenshot();
        await test.info().attach(screenshotName, { body: screenshot, contentType: 'image/png' });
    }

    /**
     * Dừng test một khoảng thời gian (Dùng để xem giao diện hoặc debug)
     * @param page - Context hiện tại
     * @param ms - Số mili-giây cần dừng
     */
    static async delay(page: Page, ms: number): Promise<void> {
        await page.waitForTimeout(ms);
    }

    /**
     * Shared helper to run bulk insert and pagination test across different modules
     */
    static async runBulkPaginationTest(
        page: Page,
        pageObj: any,
        baseTitle: string,
        baseSlug: string,
        imagePath: string,
        bulkPrefix: string,
        itemTypeLabel: string,
        options?: {
            copyCount?: number,
            beforeSaveAction?: () => Promise<void>
        }
    ) {
        const copyCount = options?.copyCount ?? 34;

        await test.step(`bước 1: Điều hướng đến trang admin quản lý ${itemTypeLabel}`, async () => {
            await pageObj.gotoAdminMenu();
        });

        await test.step(`bước 2: Tạo 1 ${itemTypeLabel} gốc`, async () => {
            if (options?.beforeSaveAction) {
                await options.beforeSaveAction();
            }
            await pageObj.addArticle(
                baseTitle,
                baseSlug,
                `Mô tả cho ${itemTypeLabel} bulk test`,
                `Nội dung chi tiết cho ${itemTypeLabel} bulk test`,
                imagePath
            );
            await pageObj.verifyAdminSuccess();

            // Quay về danh sách an toàn trước khi thực hiện bước Copy
            const fastForwardLink = pageObj.successAdminMessage.locator("//a[contains(text(),'Click vào đây nếu không muốn đợi lâu')]");
            if (await fastForwardLink.isVisible({ timeout: 1500 }).catch(() => false)) {
                await Promise.all([
                    page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 }).catch(() => { }),
                    fastForwardLink.click({ force: true })
                ]);
            }

            // Chờ trang load xong
            await page.waitForLoadState('domcontentloaded', { timeout: 5000 }).catch(() => { });

            // Cơ chế chống văng ra Dashboard với retry: nếu bị văng thì tự vào lại qua menu
            // Thử tối đa 3 lần để đảm bảo đứng đúng trang danh sách trước khi sang bước 3
            for (let retryCount = 0; retryCount < 3; retryCount++) {
                const isAtList = await pageObj.addNewButton.waitFor({ state: 'visible', timeout: 5000 }).then(() => true).catch(() => false);

                if (isAtList) {
                    break; // Đã ở đúng trang danh sách, thoát vòng lặp
                }

                console.log(`⚠ Lần ${retryCount + 1}: Không thấy trang danh sách sau bước 2, đang tự động vào lại qua menu...`);

                // Thử click nút "Thoát" trước
                const exitBtn = page.locator("a.btn-danger").filter({ hasText: /Thoát/i }).first();
                if (await exitBtn.isVisible().catch(() => false)) {
                    await Promise.all([
                        page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 5000 }).catch(() => { }),
                        exitBtn.click({ force: true })
                    ]);
                } else {
                    // Nếu web bị lỗi văng ra trang chủ admin, lập tức gọi lại Menu để vào đúng trang
                    await pageObj.gotoAdminMenu();
                }

                await TestHelper.delay(page, 1000);
            }
        });

        await test.step(`bước 3: Sử dụng nút Copy nhân bản thêm ${copyCount} ${itemTypeLabel}`, async () => {
            await pageObj.copyBulkArticles(copyCount);
        });

        let isCreated = true;
        try {
            await test.step(`bước 4: Kiểm tra nút 'Xem thêm' hiển thị ngoài Website`, async () => {
                const baseUrl = process.env.BASE_URL?.endsWith('/') ? process.env.BASE_URL : process.env.BASE_URL + '/';
                await page.goto(baseUrl + pageObj['clientUrl']);

                await pageObj.scrollToBottom();

                await expect(
                    pageObj.loadMoreBtn,
                    `Lỗi nghiêm trọng: Không tìm thấy nút 'Xem thêm' phân trang ở cuối màn hình dù đã có hơn 30 ${itemTypeLabel}!`
                ).toBeVisible({ timeout: 10000 });

                await TestHelper.takeScreenshot(page, 'Nút Xem thêm hiển thị');
            });

            await test.step(`bước 5: Click nút Xem thêm và kiểm tra dữ liệu load thêm`, async () => {
                const initialCount = await pageObj.getClientArticleCount(bulkPrefix);

                await pageObj.loadMoreBtn.click();

                // CHỜ THÔNG MINH
                await expect.poll(async () => {
                    return await pageObj.getClientArticleCount(bulkPrefix);
                }, {
                    timeout: 30000,
                    message: `Lỗi: Bấm Xem thêm nhưng số lượng ${itemTypeLabel} không tăng sau 30s! (Ban đầu: ${initialCount})`
                }).toBeGreaterThan(initialCount);

                const afterLoadCount = await pageObj.getClientArticleCount(bulkPrefix);

                // Bắt lỗi: Tổng số bài viết phải lớn hơn 30 hoặc 32
                expect(
                    afterLoadCount,
                    `Lỗi: Tổng số ${itemTypeLabel} hiển thị (${afterLoadCount}) chưa vượt quá ngưỡng phân trang (30 bài)!`
                ).toBeGreaterThan(30);

                await TestHelper.takeScreenshot(page, `Đã load thêm ${itemTypeLabel} thành công`);
            });
        } finally {
            if (isCreated) {
                // await test.step(`bước 6: Dọn rác (Cleanup An Toàn Tuyệt Đối)`, async () => {
                //     const baseUrl = process.env.BASE_URL?.endsWith('/') ? process.env.BASE_URL : process.env.BASE_URL + '/';
                //     await page.goto(baseUrl + 'madmin/index.php');
                //     await pageObj.gotoAdminMenu();

                //     await pageObj.deleteArticlesWithPrefix(bulkPrefix);
                // });
            }
        }
    }

    /**
     * Shared helper to run bulk insert MANUALLY and pagination test across different modules
     */
    static async runManualBulkPaginationTest(
        page: Page,
        pageObj: any,
        baseTitle: string,
        baseSlug: string,
        imagePath: string,
        bulkPrefix: string,
        itemTypeLabel: string,
        options?: {
            addCount?: number,
            beforeSaveAction?: () => Promise<void>,
            desc?: string,
            content?: string,
            enData?: any
        }
    ) {
        const addCount = options?.addCount ?? 35;

        await test.step(`bước 1: Điều hướng đến trang admin quản lý ${itemTypeLabel}`, async () => {
            await pageObj.gotoAdminMenu();
        });

        // Với thêm thủ công, ta không cần thêm 1 bài gốc rồi copy 34 lần, mà có thể thêm trực tiếp addCount lần (hoặc giống logic cũ)
        await test.step(`bước 2 & 3: Thêm mới thủ công ${addCount} ${itemTypeLabel}`, async () => {
            if (options?.beforeSaveAction) {
                await options.beforeSaveAction();
            }
            await pageObj.addBulkArticlesManually(
                addCount,
                baseTitle,
                baseSlug,
                options?.desc || `Mô tả cho ${itemTypeLabel} bulk test`,
                options?.content || `Nội dung chi tiết cho ${itemTypeLabel} bulk test`,
                imagePath,
                options?.enData
            );
        });

        let isCreated = true;
        try {
            await test.step(`bước 4: Kiểm tra nút 'Xem thêm' hiển thị ngoài Website`, async () => {
                const baseUrl = process.env.BASE_URL?.endsWith('/') ? process.env.BASE_URL : process.env.BASE_URL + '/';
                await page.goto(baseUrl + pageObj['clientUrl']);

                await pageObj.scrollToBottom();

                await expect(
                    pageObj.loadMoreBtn,
                    `Lỗi nghiêm trọng: Không tìm thấy nút 'Xem thêm' phân trang ở cuối màn hình dù đã có hơn 30 ${itemTypeLabel}!`
                ).toBeVisible({ timeout: 10000 });

                await TestHelper.takeScreenshot(page, 'Nút Xem thêm hiển thị');
            });

            await test.step(`bước 5: Click nút Xem thêm và kiểm tra dữ liệu load thêm`, async () => {
                const initialCount = await pageObj.getClientArticleCount(bulkPrefix);

                await pageObj.loadMoreBtn.click();

                // CHỜ THÔNG MINH
                await expect.poll(async () => {
                    return await pageObj.getClientArticleCount(bulkPrefix);
                }, {
                    timeout: 20000,
                    message: `Lỗi: Bấm Xem thêm nhưng số lượng ${itemTypeLabel} không tăng sau 20s! (Ban đầu: ${initialCount})`
                }).toBeGreaterThan(initialCount);

                const afterLoadCount = await pageObj.getClientArticleCount(bulkPrefix);

                // Bắt lỗi: Tổng số bài viết phải lớn hơn 30 hoặc 32
                expect(
                    afterLoadCount,
                    `Lỗi: Tổng số ${itemTypeLabel} hiển thị (${afterLoadCount}) chưa vượt quá ngưỡng phân trang (30 bài)!`
                ).toBeGreaterThan(30);

                await TestHelper.takeScreenshot(page, `Đã load thêm ${itemTypeLabel} thành công`);
            });
        } finally {
            if (isCreated) {
                await test.step(`bước 6: Dọn rác (Cleanup An Toàn Tuyệt Đối)`, async () => {
                    const baseUrl = process.env.BASE_URL?.endsWith('/') ? process.env.BASE_URL : process.env.BASE_URL + '/';
                    await page.goto(baseUrl + 'madmin/index.php');
                    await pageObj.gotoAdminMenu();

                    await pageObj.deleteArticlesWithPrefix(bulkPrefix);
                });
            }
        }
    }
}
