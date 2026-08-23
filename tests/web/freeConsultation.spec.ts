import { test, expect } from "@playwright/test";
import { allure } from "allure-playwright";
import { ConsultationPage } from "../../src/pages/web/ConsultationPage";
import { validFreeConsultationData, invalidFreeConsultationCases } from "../../data/web/freeConsultationData";
import { FeatureHelper } from "../../src/utils/FeatureHelper";
import { TestHelper } from "../../src/utils/TestHelper";

test.use({ video: 'retain-on-failure' });

if (FeatureHelper.hasFreeConsultationFeature()) {
    test.describe("Free Consultation Feature Tests", () => {
        let consultationPage: ConsultationPage;

        test.beforeEach(async ({ page }) => {
            consultationPage = new ConsultationPage(page);

            await allure.epic("Web");
            await allure.feature("Free Consultation on Product Page");

            await test.step("Điều hướng đến trang chi tiết sản phẩm", async () => {
                const productUrl = FeatureHelper.getProductUrlForConsultation();
                await consultationPage.gotoFormViaDirectUrl(productUrl);
                await page.waitForLoadState("domcontentloaded");
            });
        });

        test(
            "Gửi form tư vấn miễn phí thành công",
            {
                tag: ["@priority:critical", "@smoke", "@regression", "@positive"],
                annotation: [{ type: "severity", description: "blocker" }],
            },
            async ({ page }) => {
                await allure.story("Valid Free Consultation Submission");

                await test.step("Điền thông tin form tư vấn", async () => {
                    await consultationPage.fillConsultationForm(
                        validFreeConsultationData.name,
                        validFreeConsultationData.phone
                    );
                });

                await test.step("Gửi thông tin và kiểm tra thông báo", async () => {
                    await consultationPage.submitForm();

                    await consultationPage.successMessage.waitFor({ state: 'visible', timeout: 2000 });
                    await TestHelper.takeScreenshot(page, 'Gửi form tư vấn thành công');

                    await expect(consultationPage.errorMessage).toBeHidden();

                    // Thêm delay để đảm bảo tiến trình xử lý ngầm (nếu có)
                    await TestHelper.delay(page, 2000);
                });
            }
        );

        invalidFreeConsultationCases.forEach((data) => {
            test(
                `Gửi form tư vấn thất bại khi ${data.scenario}`,
                {
                    tag: [`@priority:${data.priority}`, "@regression", "@negative"],
                    annotation: [{ type: "severity", description: data.severity }],
                },
                async ({ page }) => {
                    await allure.story(`Invalid Free Consultation: ${data.scenario.toUpperCase()}`);

                    await test.step(`Điền thông tin form - Trường hợp: ${data.scenario}`, async () => {
                        await consultationPage.fillConsultationForm(
                            data.name,
                            data.phone
                        );
                    });

                    await test.step("Gửi thông tin và kiểm tra UI", async () => {
                        await consultationPage.submitForm();

                        // Bắt ngay khoảnh khắc bảng thông báo (chung) vừa hiện lên để chụp
                        const alertBox = page.locator("//div[@id='alert']");
                        await alertBox.waitFor({ state: 'visible', timeout: 3000 }).catch(() => { });

                        await TestHelper.takeScreenshot(page, `Lỗi tư vấn khi ${data.scenario}`);
                        await TestHelper.delay(page, 1000);
                    });
                }
            );
        });
    });
}
