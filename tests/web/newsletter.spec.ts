import { test, expect } from "@playwright/test";
import { allure } from "allure-playwright";
import { HomePage } from "../../src/pages/web/HomePage";
import { NewsletterPage } from "../../src/pages/web/NewsletterPage";
import { validNewsletterData, invalidNewsletterCases } from "../../data/web/newsletterData";
import { AdminLoginPage } from "../../src/pages/admin/AdminLoginPage";
import { validAdminLoginData } from "../../data/admin/adminLoginData";
import { FeatureHelper } from "../../src/utils/FeatureHelper";
import { TestHelper } from "../../src/utils/TestHelper";

test.use({ video: 'retain-on-failure' });

if (FeatureHelper.hasNewsletterFeature()) {
    test.describe("Newsletter Feature Tests", () => {
        let homePage: HomePage;
        let newsletterPage: NewsletterPage;

        test.beforeEach(async ({ page }) => {
            homePage = new HomePage(page);
            newsletterPage = new NewsletterPage(page);

            await allure.epic("Web");
            await allure.feature("Newsletter Subscription");

            await test.step("Điều hướng đến trang chủ", async () => {
                await homePage.gotoHomePage();
                await page.waitForLoadState("domcontentloaded");
            });
        });

        test(
            "Đăng ký nhận tin thành công",
            {
                tag: ["@priority:critical", "@smoke", "@regression", "@positive"],
                annotation: [{ type: "severity", description: "blocker" }],
            },
            async ({ page }) => {
                await allure.story("Valid Newsletter Submission");

                await test.step("Điền thông tin đăng ký nhận tin", async () => {
                    await newsletterPage.fillNewsletterForm(
                        validNewsletterData.name,
                        validNewsletterData.email,
                        validNewsletterData.phone,
                        validNewsletterData.content
                    );
                });

                await test.step("Gửi thông tin và kiểm tra thành công", async () => {
                    await newsletterPage.submitForm();

                    await expect(newsletterPage.successMessage).toBeVisible({ timeout: 5000 });

                    await TestHelper.takeScreenshot(page, 'Gửi đăng ký nhận tin thành công');

                    // Thêm delay để đảm bảo submit xong nếu trang sử dụng AJAX
                    await TestHelper.delay(page, 2000);
                });

                await test.step("Đăng nhập vào trang Admin", async () => {
                    const adminLoginPage = new AdminLoginPage(page);
                    await adminLoginPage.gotoLoginPage();
                    await adminLoginPage.fillLoginForm(validAdminLoginData.username, validAdminLoginData.password);
                    await adminLoginPage.clickLogin();
                    // Đợi login xong bằng cách check URL
                    await expect(page).toHaveURL(/.*madmin\/index\.php/);
                });

                await test.step("Xác nhận email nhận tin hiển thị trong Admin Dashboard", async () => {
                    await newsletterPage.goToNewsletterManagement();
                    await newsletterPage.verifyNewsletterExists(validNewsletterData.email);

                    await TestHelper.takeScreenshot(page, 'Danh sách đăng ký nhận tin');
                });
            }
        );

        invalidNewsletterCases.forEach((data) => {
            test(
                `Đăng ký nhận tin thất bại khi ${data.scenario}`,
                {
                    tag: [`@priority:${data.priority}`, "@regression", "@negative"],
                    annotation: [{ type: "severity", description: data.severity }],
                },
                async ({ page }) => {
                    await allure.story(`Invalid Newsletter Submission: ${data.scenario.toUpperCase()}`);

                    await test.step(`Điền thông tin đăng ký - Trường hợp: ${data.scenario}`, async () => {
                        await newsletterPage.fillNewsletterForm(
                            data.name,
                            data.email,
                            data.phone,
                            data.content
                        );
                    });

                    await test.step("Gửi thông tin và kiểm tra form", async () => {
                        await newsletterPage.submitForm();

                        await TestHelper.takeScreenshot(page, `Lỗi khi ${data.scenario}`);
                        await TestHelper.delay(page, 1000);
                    });
                }
            );
        });
    });
}
