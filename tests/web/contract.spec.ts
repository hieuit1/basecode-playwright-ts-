import { test as baseTest, expect } from "@playwright/test";
import { chromium } from "playwright-extra";
// @ts-ignore
import StealthPlugin from "puppeteer-extra-plugin-stealth";

const stealth = StealthPlugin();
chromium.use(stealth);

const test = baseTest.extend({
    page: async ({ }, use) => {
        const browser = await chromium.launch({ headless: !!process.env.CI, args: ['--start-maximized'] });
        const context = await browser.newContext({
            viewport: null,
            recordVideo: { dir: 'test-results/videos/' }
        });
        const page = await context.newPage();
        await use(page);
        await context.close();
        await browser.close();
    }
});

import { allure } from "allure-playwright";
import { ContractPage } from "../../src/pages/web/ContractPage";
import { AdminLoginPage } from "../../src/pages/admin/AdminLoginPage";
import { invalidContractCases, validContractData } from "../../data/web/contractData";
import { validAdminLoginData } from "../../data/admin/adminLoginData";
import { TestHelper } from "../../src/utils/TestHelper";
import { MenuHelper } from "../../src/utils/MenuHelper";

test.use({ video: 'on' });
test.describe("Contract Feature Tests", () => {
    let contractPage: ContractPage;

    test.beforeEach(async ({ page }) => {
        contractPage = new ContractPage(page);

        await allure.epic("Web");
        await allure.feature("Submit Contract Form");

        await test.step("Điều hướng đến trang Liên hệ (Contract)", async () => {
            await contractPage.gotoContactPage();
        });
    });

    // ==================== DATA-DRIVEN NEGATIVE TEST CASES ====================
    invalidContractCases.forEach((data) => {
        test(
            `Submit form should fail with ${data.scenario}`,
            {
                tag: [
                    `@priority:${data.priority}`,
                    "@regression",
                    "@negative",
                ],
                annotation: [{ type: "severity", description: data.severity }],
            },
            async ({ page }) => {
                await allure.story(`Invalid Contract: ${data.scenario.toUpperCase()}`);

                await test.step(`Nhập form với trường hợp: ${data.scenario}`, async () => {
                    await contractPage.fillContactFormNe(
                        data.fullname,
                        data.phone,
                        data.address,
                        data.email,
                        data.subject,
                        data.content
                    );
                });

                await test.step("Gửi form", async () => {
                    await contractPage.clickSend();
                });

                await test.step("Xác nhận hệ thống báo lỗi chính xác", async () => {
                    if (data.assertionType === "ui_error") {
                    } else if (data.assertionType === "form_block") {
                        try {
                            await expect(contractPage.successMessage).toBeVisible({ timeout: 1000 });
                            // Nếu lệnh trên PASS (tức là popup có xuất hiện) -> Web có bug!
                            throw new Error(`Web có bug: Test case '${data.scenario}' vẫn đăng nhập thành công!`);
                        } catch (error: any) {
                            // Nếu lỗi là do chúng ta throw ở trên -> Báo test FAIL
                            if (error.message.includes('Web có bug')) {
                                throw error;
                            }
                        }
                    }
                });
            }
        );
    });

    // ==================== POSITIVE TEST CASE ====================
    test(
        "Submit form successfully with valid data",
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
            await allure.story("Valid Contract Submission");

            await test.step("1 Nhập thông tin liên hệ hợp lệ", async () => {
                await TestHelper.delay(page, 2000);
                await contractPage.fillContactForm(
                    validContractData.fullname,
                    validContractData.phone,
                    validContractData.address,
                    validContractData.email,
                    validContractData.subject,
                    validContractData.content
                );
            });

            await test.step("2 Gửi form", async () => {
                await TestHelper.delay(page, 2000);
                await contractPage.clickSend();
            });

            await test.step("3 Xác nhận gửi thành công", async () => {
                const successLocator = contractPage.successMessage;
                await expect(successLocator).toBeVisible({ timeout: 10000 });
                await TestHelper.takeScreenshot(page, 'Thông báo sau khi gửi liên hệ');
            });
            await TestHelper.delay(page, 1000);

            await test.step("4 Đăng nhập vào trang Admin", async () => {
                const adminLoginPage = new AdminLoginPage(page);
                await adminLoginPage.gotoLoginPage();
                await adminLoginPage.fillLoginForm(validAdminLoginData.username, validAdminLoginData.password);
                await adminLoginPage.clickLogin();
                // Đợi login xong bằng cách check URL
                await expect(page).toHaveURL(/.*madmin\/index\.php/);
            });

            await test.step("5 Xác nhận data đổ về Admin Dashboard và xóa liên hệ", async () => {
                await contractPage.goToContactManagement();
                await contractPage.verifyContactExists(validContractData.fullname);

                await TestHelper.takeScreenshot(page, 'Danh sách liên hệ trước khi xóa');

                // Xóa liên hệ vừa gửi để dọn dẹp
                // await contractPage.deleteContact();
            });
        }
    );


});
