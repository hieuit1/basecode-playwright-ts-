import { test, expect } from "../../src/fixtures/adminFixture";
import { allure } from "allure-playwright";
import { RecruitmentPage } from "../../src/pages/admin/RecruitmentPage";
import { validRecruitmentData, invalidRecruitmentCases } from "../../data/admin/recruitmentData";
import { TestHelper } from "../../src/utils/TestHelper";
import { MenuHelper } from "../../src/utils/MenuHelper";

test.use({ video: 'retain-on-failure' });

if (MenuHelper.hasSubMenu(['Quản lý bài viết', 'Tuyển dụng'], ['TUYEN DUNG', 'Tuyển Dụng', 'TUYỂN DỤNG'])) {
    test.describe("Recruitment Management Tests", () => {
        let recruitmentPage: RecruitmentPage;

        test.beforeEach(async ({ page }) => {
            recruitmentPage = new RecruitmentPage(page);

            await allure.epic("Admin");
            await allure.feature("Add and Verify Recruitments");
        });

        // ==================== DATA-DRIVEN NEGATIVE TEST CASES ====================
        invalidRecruitmentCases.forEach((data) => {
            test(
                `Add recruitment should fail with ${data.scenario}`,
                {
                    tag: [
                        `@priority:${data.priority}`,
                        "@regression",
                        "@negative",
                    ],
                    annotation: [{ type: "severity", description: data.severity }],
                },
                async ({ page }) => {
                    await allure.story(`Invalid Recruitment: ${data.scenario.toUpperCase()}`);

                    await test.step("bước 1: Điều hướng đến trang admin quản lý Tuyển dụng", async () => {
                        await recruitmentPage.gotoAdminRecruitment();
                    });

                    await test.step("bước 2: Nhập thông tin không hợp lệ", async () => {
                        await recruitmentPage.addRecruitment(
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
                                await expect(recruitmentPage.successAdminMessage).toBeVisible({ timeout: 2000 });
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
            "Add recruitment successfully and verify on website",
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
                await allure.story("Valid Recruitment Addition Flow");

                await test.step("bước 1: Điều hướng đến trang admin quản lý Tuyển dụng", async () => {
                    await recruitmentPage.gotoAdminRecruitment();
                });

                await test.step("bước 2: Nhập thông tin và lưu tuyển dụng mới", async () => {
                    await recruitmentPage.addRecruitment(
                        validRecruitmentData.title,
                        validRecruitmentData.slug,
                        validRecruitmentData.desc,
                        validRecruitmentData.content,
                        validRecruitmentData.imagePath,
                        validRecruitmentData.enData  // Nhập tiếng Anh nếu web hỗ trợ 2 ngôn ngữ
                    );
                });

                await test.step("bước 3: Xác nhận lưu thành công trong Admin", async () => {
                    await recruitmentPage.verifyRecruitmentInAdminSuccess();
                    await TestHelper.takeScreenshot(page, 'Thông báo lưu tuyển dụng thành công');
                });

                // Sử dụng khối try...finally để đảm bảo luôn xóa dữ liệu dù test có bị lỗi ở giữa chừng
                let isCreated = true;
                try {
                    await TestHelper.delay(page, 1000);

                    await test.step("bước 4: Kiểm tra tuyển dụng hiển thị ngoài Website", async () => {
                        await recruitmentPage.verifyRecruitmentOnWebsite(validRecruitmentData.title);
                        await TestHelper.takeScreenshot(page, 'Tuyển dụng hiển thị trên website');
                    });

                    await TestHelper.delay(page, 1000);
                } finally {
                    if (isCreated) {
                        await test.step("bước 5: Quay lại Admin và xóa tuyển dụng vừa tạo (Cleanup)", async () => {
                            const baseUrl = process.env.BASE_URL?.endsWith('/') ? process.env.BASE_URL : process.env.BASE_URL + '/';
                            await page.goto(baseUrl + 'madmin/index.php');

                            await recruitmentPage.gotoAdminRecruitment();

                            await recruitmentPage.deleteRecruitment(validRecruitmentData.title);
                            await TestHelper.takeScreenshot(page, 'Sau khi xóa tuyển dụng');
                        });
                    }
                }
            }
        );

        // ==================== PERFORMANCE / BULK INSERT TEST CASE ====================
        test(
            "Bulk insert 35 recruitments via Copy and verify Load More on website",
            {
                tag: ["@priority:high", "@smoke",
                    "@regression"],
                annotation: [{ type: "severity", description: "critical" }],
            },
            async ({ page }) => {
                test.setTimeout(10 * 60 * 1000);
                await allure.story("Bulk Insert and Pagination Verification");

                const timestamp = Date.now().toString();
                const bulkPrefix = `[AUTO-TEST] Recruitment LoadTest`;
                const baseTitle = `${bulkPrefix} ${timestamp}`;
                const baseSlug = `tuyen-dung-loadtest-${timestamp}`;

                await TestHelper.runBulkPaginationTest(
                    page,
                    recruitmentPage,
                    baseTitle,
                    baseSlug,
                    validRecruitmentData.imagePath,
                    bulkPrefix,
                    "Tuyển dụng"
                );
            }
        );
    });
}
