import { test, expect } from "../../src/fixtures/adminFixture";
import { allure } from "allure-playwright";
import { WarrantyPage } from "../../src/pages/admin/WarrantyPage";
import { validWarrantyData, invalidWarrantyCases } from "../../data/admin/warrantyData";
import { TestHelper } from "../../src/utils/TestHelper";
import { MenuHelper } from "../../src/utils/MenuHelper";

test.use({ video: 'retain-on-failure' });

// Chỉ định nghĩa và chạy Test nếu có ít nhất 1 menu khớp với các Alias sau
if (MenuHelper.hasSubMenu(['Quản lý bài viết'], ['Bảo hành'])) {
    test.describe("Warranty Management Tests", () => {
        let warrantyPage: WarrantyPage;

        test.beforeEach(async ({ page }) => {
            warrantyPage = new WarrantyPage(page);

            await allure.epic("Admin");
            await allure.feature("Add and Verify Warranty & Repair Policy");
        });

        // ==================== DATA-DRIVEN NEGATIVE TEST CASES ====================
        invalidWarrantyCases.forEach((data) => {
            test(
                `Add warranty policy should fail with ${data.scenario}`,
                {
                    tag: [
                        `@priority:${data.priority}`,
                        "@regression",
                        "@negative",
                    ],
                    annotation: [{ type: "severity", description: data.severity }],
                },
                async ({ page }) => {
                    await allure.story(`Invalid Warranty Policy: ${data.scenario.toUpperCase()}`);

                    await test.step("bước 1: Điều hướng đến trang admin quản lý Bảo hành & sửa chữa", async () => {
                        await warrantyPage.gotoAdminWarranty();
                    });

                    await test.step("bước 2: Nhập thông tin không hợp lệ", async () => {
                        await warrantyPage.addWarranty(
                            data.title,
                            data.slug,
                            data.numb,
                            data.desc,
                            data.content,
                            data.imagePath
                        );
                    });

                    await test.step("bước 3: Xác nhận hệ thống chặn lưu (Báo lỗi)", async () => {
                        if (data.assertionType === "form_block") {
                            try {
                                await expect(warrantyPage.successAdminMessage).toBeVisible({ timeout: 2000 });
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
            "Add warranty policy successfully and verify on website",
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
                await allure.story("Valid Warranty Policy Addition Flow");

                await test.step("bước 1: Điều hướng đến trang admin quản lý Bảo hành & sửa chữa", async () => {
                    await warrantyPage.gotoAdminWarranty();
                });

                await test.step("bước 2: Nhập thông tin và lưu chính sách mới", async () => {
                    await warrantyPage.addWarranty(
                        validWarrantyData.title,
                        validWarrantyData.slug,
                        validWarrantyData.numb,
                        validWarrantyData.desc,
                        validWarrantyData.content,
                        validWarrantyData.imagePath,
                        validWarrantyData.enData  // Nhập tiếng Anh nếu web hỗ trợ 2 ngôn ngữ
                    );
                });

                await test.step("bước 3: Xác nhận lưu thành công trong Admin", async () => {
                    await warrantyPage.verifyWarrantyInAdminSuccess();
                    await TestHelper.takeScreenshot(page, 'Thông báo lưu chính sách bảo hành thành công');
                });

                // Sử dụng khối try...finally để đảm bảo luôn xóa dữ liệu dù test có bị lỗi ở giữa chừng
                let isCreated = true;
                try {
                    await TestHelper.delay(page, 1000);

                    await test.step("bước 4: Kiểm tra chính sách hiển thị ngoài Website", async () => {
                        await warrantyPage.verifyWarrantyOnWebsite(validWarrantyData.title);
                        await TestHelper.takeScreenshot(page, 'Chính sách bảo hành hiển thị trên website');
                    });

                    await TestHelper.delay(page, 1000);
                } finally {
                    if (isCreated) {
                        await test.step("bước 5: Quay lại Admin và xóa chính sách vừa tạo (Cleanup)", async () => {
                            const baseUrl = process.env.BASE_URL?.endsWith('/') ? process.env.BASE_URL : process.env.BASE_URL + '/';
                            await page.goto(baseUrl + 'madmin/index.php');

                            await warrantyPage.gotoAdminWarranty();

                            await warrantyPage.deleteWarranty(validWarrantyData.title);
                            await TestHelper.takeScreenshot(page, 'Sau khi xóa chính sách bảo hành');
                        });
                    }
                }
            }
        );

        // ==================== PERFORMANCE / BULK INSERT TEST CASE ====================
        test(
            "Bulk insert 35 warranty policies via Copy and verify Load More on website",
            {
                tag: ["@priority:high", "@smoke",
                    "@regression"],
                annotation: [{ type: "severity", description: "critical" }],
            },
            async ({ page }) => {
                test.setTimeout(10 * 60 * 1000);
                await allure.story("Bulk Insert and Pagination Verification");

                const timestamp = Date.now().toString();
                const bulkPrefix = `[AUTO-TEST] Bảo hành sửa chữa thực hiện quá trình LoadTest`;
                const baseTitle = `${bulkPrefix} ${timestamp}`;
                const baseSlug = `bao-hanh-sua-chua-loadtest-${timestamp}`;

                await TestHelper.runBulkPaginationTest(
                    page,
                    warrantyPage,
                    baseTitle,
                    baseSlug,
                    validWarrantyData.imagePath,
                    bulkPrefix,
                    "Bảo hành & sửa chữa"
                );
            }
        );
    });
}
