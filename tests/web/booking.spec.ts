import { test, expect } from "@playwright/test";
import { allure } from "allure-playwright";
import { HomePage } from "../../src/pages/web/HomePage";
import { BookingPage } from "../../src/pages/web/BookingPage";
import { validBookingData, invalidBookingCases } from "../../data/web/bookingData";
import { AdminLoginPage } from "../../src/pages/admin/AdminLoginPage";
import { validAdminLoginData } from "../../data/admin/adminLoginData";
import { FeatureHelper } from "../../src/utils/FeatureHelper";
import { TestHelper } from "../../src/utils/TestHelper";

test.use({ video: 'retain-on-failure' });

if (FeatureHelper.hasBookingFeature()) {
    test.describe("Table Booking Feature Tests", () => {
        let homePage: HomePage;
        let bookingPage: BookingPage;

        test.beforeEach(async ({ page }) => {
            homePage = new HomePage(page);
            bookingPage = new BookingPage(page);

            await allure.epic("Web");
            await allure.feature("Table Booking");

            await test.step("Điều hướng đến trang chủ", async () => {
                await homePage.gotoHomePage();
                await page.waitForLoadState("domcontentloaded");
            });
        });

        test(
            "Đặt bàn thành công",
            {
                tag: ["@priority:critical", "@smoke", "@regression", "@positive"],
                annotation: [{ type: "severity", description: "blocker" }],
            },
            async ({ page }) => {
                await allure.story("Valid Table Booking Submission");

                await test.step("Điền thông tin đặt bàn", async () => {
                    await bookingPage.fillBookingForm(
                        validBookingData.name,
                        validBookingData.email,
                        validBookingData.phone,
                        validBookingData.date,
                        validBookingData.quantity,
                        validBookingData.content
                    );
                });

                await test.step("Gửi thông tin và kiểm tra thành công", async () => {
                    await bookingPage.submitForm();

                    // Không kiểm tra thông báo thành công vì trang chỉ reset form
                    await TestHelper.takeScreenshot(page, 'Gửi đặt bàn thành công');

                    await TestHelper.delay(page, 2000);
                });

                await test.step("Đăng nhập vào trang Admin", async () => {
                    const adminLoginPage = new AdminLoginPage(page);
                    await adminLoginPage.gotoLoginPage();
                    await adminLoginPage.fillLoginForm(validAdminLoginData.username, validAdminLoginData.password);
                    await adminLoginPage.clickLogin();
                    await expect(page).toHaveURL(/.*madmin\/index\.php/);
                });

                await test.step("Xác nhận thông tin đặt bàn hiển thị trong Admin Dashboard", async () => {
                    await bookingPage.goToBookingManagement();
                    await bookingPage.verifyBookingExists(validBookingData.email);

                    await TestHelper.takeScreenshot(page, 'Danh sách đặt bàn');
                });
            }
        );

        invalidBookingCases.forEach((data) => {
            test(
                `Đặt bàn thất bại khi ${data.scenario}`,
                {
                    tag: [`@priority:${data.priority}`, "@regression", "@negative"],
                    annotation: [{ type: "severity", description: data.severity }],
                },
                async ({ page }) => {
                    await allure.story(`Invalid Booking Submission: ${data.scenario.toUpperCase()}`);

                    await test.step(`Điền thông tin đặt bàn - Trường hợp: ${data.scenario}`, async () => {
                        await bookingPage.fillBookingForm(
                            data.name,
                            data.email,
                            data.phone,
                            data.date,
                            data.quantity,
                            data.content
                        );
                    });

                    await test.step("Gửi thông tin và kiểm tra form", async () => {
                        await bookingPage.submitForm();

                        await TestHelper.takeScreenshot(page, `Lỗi khi ${data.scenario}`);
                        await TestHelper.delay(page, 1000);
                    });
                }
            );
        });
    });
}
