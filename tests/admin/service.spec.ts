import { test, expect } from "../../src/fixtures/adminFixture";
import { allure } from "allure-playwright";
import { ServicePage } from "../../src/pages/admin/ServicePage";
import { validServiceData, invalidServiceCases } from "../../data/admin/serviceData";
import { TestHelper } from "../../src/utils/TestHelper";
import { MenuHelper } from "../../src/utils/MenuHelper";

test.use({ video: 'on' });

if (MenuHelper.hasSubMenu(['Quản lý Dịch vụ'], ['Dịch vụ00', 'Service00'])) {
    test.describe("Service Management Tests", () => {
        let servicePage: ServicePage;

        test.beforeEach(async ({ page }) => {
            servicePage = new ServicePage(page);

            await allure.epic("Admin");
            await allure.feature("Add and Verify Services");
        });

        // ==================== DATA-DRIVEN NEGATIVE TEST CASES ====================
        invalidServiceCases.forEach((data) => {
            test(
                `Add service should fail with ${data.scenario}`,
                {
                    tag: [
                        `@priority:${data.priority}`,
                        "@regression",
                        "@negative",
                    ],
                    annotation: [{ type: "severity", description: data.severity }],
                },
                async ({ page }) => {
                    await allure.story(`Invalid Service: ${data.scenario.toUpperCase()}`);

                    await test.step("bước 1: Điều hướng đến trang admin quản lý Dịch vụ", async () => {
                        await servicePage.gotoAdminService();
                    });

                    await test.step("bước 2: Nhập thông tin không hợp lệ", async () => {
                        await servicePage.addService(
                            data.title,
                            data.slug,
                            data.desc,
                            data.content,
                            data.imagePath
                        );
                    });

                    await test.step("bước 3: Xác nhận hệ thống chặn lưu (Báo lỗi)", async () => {
                        if (data.assertionType === "form_block") {
                            try {
                                await expect(servicePage.successAdminMessage).toBeVisible({ timeout: 2000 });
                                throw new Error(`Web có bug: Test case '${data.scenario}' vẫn lưu thành công!`);
                            } catch (error: any) {
                                if (error.message.includes('Web có bug')) {
                                    throw error;
                                }
                                // Expected to fail validation
                            }
                        }
                    });
                }
            );
        });

        // ==================== POSITIVE TEST CASE ====================
        test(
            "Add service successfully and verify on website",
            {
                tag: [
                    "@priority:critical",
                    "@smoke",
                    "@regression",
                    "@positive",
                ],
                annotation: [{ type: "severity", description: "blocker" }],
            },
            async ({ page }) => {
                await allure.story("Valid Service Addition Flow");

                await test.step("bước 1: Điều hướng đến trang admin quản lý Dịch vụ", async () => {
                    await servicePage.gotoAdminService();
                });

                await test.step("bước 2: Nhập thông tin và lưu dịch vụ mới", async () => {
                    await servicePage.addService(
                        validServiceData.title,
                        validServiceData.slug,
                        validServiceData.desc,
                        validServiceData.content,
                        validServiceData.imagePath,
                        validServiceData.enData  // Nhập tiếng Anh nếu web hỗ trợ 2 ngôn ngữ
                    );
                });

                await test.step("bước 3: Xác nhận lưu thành công trong Admin", async () => {
                    await servicePage.verifyServiceInAdminSuccess();
                    await TestHelper.takeScreenshot(page, 'Thông báo lưu dịch vụ thành công');
                });

                // Sử dụng khối try...finally để đảm bảo luôn xóa dữ liệu dù test có bị lỗi ở giữa chừng
                let isCreated = true;
                try {
                    await TestHelper.delay(page, 1000);

                    await test.step("bước 4: Kiểm tra dịch vụ hiển thị ngoài Website", async () => {
                        await servicePage.verifyServiceOnWebsite(validServiceData.title);
                        await TestHelper.takeScreenshot(page, 'Dịch vụ hiển thị trên website');
                    });

                    await TestHelper.delay(page, 1000);
                } finally {
                    if (isCreated) {
                        await test.step("bước 5: Quay lại Admin và xóa dịch vụ vừa tạo (Cleanup)", async () => {
                            const baseUrl = process.env.BASE_URL?.endsWith('/') ? process.env.BASE_URL : process.env.BASE_URL + '/';
                            await page.goto(baseUrl + 'madmin/index.php');

                            await servicePage.gotoAdminService();

                            await servicePage.deleteService(validServiceData.title);
                            await TestHelper.takeScreenshot(page, 'Sau khi xóa dịch vụ');
                        });
                    }
                }
            }
        );

        // ==================== PERFORMANCE / BULK INSERT TEST CASE ====================
        test(
            "Bulk insert 35 services via Copy and verify Load More on website",
            {
                tag: ["@priority:high", "@smoke",
                    "@regression"],
                annotation: [{ type: "severity", description: "critical" }],
            },
            async ({ page }) => {
                test.setTimeout(10 * 60 * 1000);
                await allure.story("Bulk Insert and Pagination Verification");

                const timestamp = Date.now().toString();
                const bulkPrefix = `[AUTO-TEST] Dịch vụ LoadTest`;
                const baseTitle = `${bulkPrefix} ${timestamp}`;
                const baseSlug = `dich-vu-loadtest-${timestamp}`;

                await TestHelper.runBulkPaginationTest(
                    page,
                    servicePage,
                    baseTitle,
                    baseSlug,
                    validServiceData.imagePath,
                    bulkPrefix,
                    "Dịch vụ"
                );
            }
        );
    });
}
