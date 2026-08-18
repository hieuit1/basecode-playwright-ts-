import { test, expect } from "@playwright/test";
import { allure } from "allure-playwright";
import { CartPage } from "../../src/pages/web/CartPage";
import { CheckoutPage } from "../../src/pages/web/CheckoutPage";
import { AdminLoginPage } from "../../src/pages/admin/AdminLoginPage";
import { checkoutTestConfig, invalidCheckoutCases } from "../../data/web/checkoutData";
import { FeatureHelper } from "../../src/utils/FeatureHelper";
import { TestHelper } from "../../src/utils/TestHelper";

test.use({ video: 'retain-on-failure' });

if (FeatureHelper.hasCartFeature()) {
    test.describe("Checkout Feature Tests", () => {
        let cartPage: CartPage;
        let checkoutPage: CheckoutPage;
        let adminLoginPage: AdminLoginPage;

        test.beforeEach(async ({ page }) => {
            cartPage = new CartPage(page);
            checkoutPage = new CheckoutPage(page);
            adminLoginPage = new AdminLoginPage(page);

            await allure.epic("Web");
            await allure.feature("Checkout & Payment");
        });

        // ==================== TC-01: Thanh toán khi nhận hàng (COD) ====================
        test(
            "TC-01: Thanh toán đơn hàng thành công (COD) và verify trên Admin",
            {
                tag: ["@priority:critical", "@smoke", "@regression", "@positive"],
                annotation: [{ type: "severity", description: "blocker" }],
            },
            async ({ page }) => {
                await allure.story("Checkout using COD");
                const customer = checkoutTestConfig.customer;

                await test.step("1. Thêm sản phẩm vào giỏ và tới trang thanh toán", async () => {
                    await cartPage.gotoProductPage();
                    await cartPage.clickProduct();
                    await cartPage.addToCart();
                    await cartPage.closeModal();
                    await cartPage.gotoCart();

                });

                await test.step("2. Chọn phương thức thanh toán COD", async () => {
                    await checkoutPage.selectPaymentMethod('cod');
                });

                await test.step("3. Điền thông tin giao hàng", async () => {
                    await checkoutPage.fillCheckoutForm(customer);

                });

                await test.step("4. Đặt hàng và lấy mã đơn hàng", async () => {
                    await checkoutPage.submitOrder();
                    const orderId = await checkoutPage.verifyOrderSuccessAndGetId();


                    // Lưu lại Order ID để kiểm tra ở bước sau
                    test.info().annotations.push({ type: 'OrderId', description: orderId });

                    await test.step("5. Kiểm tra đơn hàng trong Admin", async () => {
                        await adminLoginPage.gotoLoginPage();
                        // Sử dụng credentials từ file .env.qa hoặc .env
                        await adminLoginPage.fillLoginForm(process.env.ADMIN_USERNAME || 'admin', process.env.ADMIN_PASSWORD || '123456');
                        await adminLoginPage.loginButton.click();

                        await checkoutPage.gotoAdminOrders();

                        await checkoutPage.verifyOrderInAdminTable(orderId);
                    });
                });
            }
        );

        // ==================== TC-02: Thanh toán qua ngân hàng (Bank) ====================
        test(
            "TC-02: Thanh toán đơn hàng thành công (Ngân hàng) và verify trên Admin",
            {
                tag: ["@priority:critical", "@regression", "@positive"],
                annotation: [{ type: "severity", description: "blocker" }],
            },
            async ({ page }) => {
                await allure.story("Checkout using Bank Transfer");
                const customer = checkoutTestConfig.customer;
                // Thêm tiền tố để dễ phân biệt
                customer.fullname = customer.fullname + " (Bank)";

                await test.step("1. Thêm sản phẩm vào giỏ và tới trang thanh toán", async () => {
                    await cartPage.gotoProductPage();
                    await cartPage.clickProduct();
                    await cartPage.addToCart();
                    await cartPage.closeModal();
                    await cartPage.gotoCart();
                });

                await test.step("2. Chọn phương thức thanh toán Ngân hàng", async () => {
                    await checkoutPage.selectPaymentMethod('bank');
                    await TestHelper.takeScreenshot(page, 'Chọn thanh toán ngân hàng');
                });

                await test.step("3. Điền thông tin giao hàng", async () => {
                    await checkoutPage.fillCheckoutForm(customer);
                });

                await test.step("4. Đặt hàng và lấy mã đơn hàng", async () => {
                    await checkoutPage.submitOrder();
                    const orderId = await checkoutPage.verifyOrderSuccessAndGetId();

                    await test.step("5. Kiểm tra đơn hàng trong Admin", async () => {
                        await adminLoginPage.gotoLoginPage();
                        await adminLoginPage.fillLoginForm(process.env.ADMIN_USERNAME || 'admin', process.env.ADMIN_PASSWORD || '123456');
                        await adminLoginPage.loginButton.click();

                        await checkoutPage.gotoAdminOrders();
                        await checkoutPage.verifyOrderInAdminTable(orderId);
                    });
                });
            }
        );

        // ==================== Negative Cases ====================
        if (invalidCheckoutCases && invalidCheckoutCases.length > 0) {
            for (const testCase of invalidCheckoutCases) {
                test(
                    `TC-Negative: ${testCase.scenario}`,
                    { 
                        tag: ["@negative", "@regression"],
                        annotation: [
                            { type: "priority", description: testCase.priority },
                            { type: "severity", description: testCase.severity }
                        ]
                    },
                    async ({ page }) => {
                        await allure.story("Checkout Negative Scenarios");
                        // Lấy dữ liệu trực tiếp từ testCase
                        const customer = {
                            fullname: testCase.fullname,
                            phone: testCase.phone,
                            email: testCase.email,
                            address: testCase.address,
                            requirements: testCase.requirements
                        };

                        await test.step("1. Thêm sản phẩm vào giỏ và tới trang thanh toán", async () => {
                            await cartPage.gotoProductPage();
                            await cartPage.clickProduct();
                            await cartPage.addToCart();
                            await cartPage.closeModal();
                            await cartPage.gotoCart();
                        });

                        await test.step("2. Chọn phương thức thanh toán", async () => {
                            await checkoutPage.selectPaymentMethod('cod');
                        });

                        await test.step("3. Điền thông tin giao hàng", async () => {
                            // Cố tình truyền object customer đã bị thiếu thông tin (overrideCustomer)
                            await checkoutPage.fillCheckoutForm(customer);
                        });

                        await test.step("4. Đặt hàng và xác nhận lỗi hiển thị", async () => {
                            await checkoutPage.submitOrder();
                            // Không verify success message mà verify error
                            await checkoutPage.verifyOrderFailed();
                        });
                    }
                );
            }
        }
    });
}
