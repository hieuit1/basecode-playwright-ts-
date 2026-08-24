import { test, expect } from "@playwright/test";
import { allure } from "allure-playwright";
import { CartPage } from "../../src/pages/web/CartPage";
import { DiscountPage } from "../../src/pages/web/DiscountPage";
import { DiscountAdminPage } from "../../src/pages/admin/DiscountAdminPage";
import { AdminLoginPage } from "../../src/pages/admin/AdminLoginPage";
import { FeatureHelper } from "../../src/utils/FeatureHelper";
import { DiscountDataGenerator, DiscountFormData } from "../../src/utils/DiscountDataGenerator";
import { discountData } from "../../data/web/discountData";
import { validAdminLoginData } from "../../data/admin/adminLoginData";

test.use({ video: 'retain-on-failure' });

if (FeatureHelper.hasDiscountFeature()) {
    test.describe("Discount Code Feature Tests", () => {
        let cartPage: CartPage;
        let discountPage: DiscountPage;

        // Lưu trữ data của 3 mã được tạo 1 lần duy nhất trong beforeAll
        let validData: DiscountFormData;
        let expiredData: DiscountFormData;
        let exhaustedData: DiscountFormData;

        test.beforeAll(async ({ browser }) => {
            // Sinh data trên memory
            validData = DiscountDataGenerator.generateValidDiscount();
            exhaustedData = DiscountDataGenerator.generateExhaustedDiscount();

            // Mở 1 context ẩn để chạy setup Admin
            const context = await browser.newContext();
            const adminPage = await context.newPage();

            const adminLoginPage = new AdminLoginPage(adminPage);
            const discountAdminPage = new DiscountAdminPage(adminPage);

            console.log("--- BẮT ĐẦU SETUP DATA (TẠO 3 MÃ TRÊN ADMIN CÙNG LÚC) ---");

            await adminLoginPage.gotoLoginPage();
            await adminLoginPage.fillLoginForm(validAdminLoginData.username, validAdminLoginData.password);
            await adminLoginPage.clickLogin();

            // 1. Tạo mã hợp lệ
            console.log(`[Setup] Tạo mã hợp lệ: ${validData.codeName}`);
            await discountAdminPage.gotoDiscountManagement();
            await discountAdminPage.createDiscountCode(validData);
            await discountAdminPage.verifyCreateSuccess();

            // 2. Tạo mã hết hạn

            // 3. Tạo mã hết lượt
            console.log(`[Setup] Tạo mã hết lượt: ${exhaustedData.codeName}`);
            await discountAdminPage.gotoDiscountManagement();
            await discountAdminPage.createDiscountCode(exhaustedData);
            await discountAdminPage.verifyCreateSuccess();

            console.log("--- HOÀN TẤT SETUP DATA ---");
            await context.close();
        });


        test.beforeEach(async ({ page }) => {
            cartPage = new CartPage(page);
            discountPage = new DiscountPage(page);

            await allure.epic("Web");
            await allure.feature("Discount Code");
        });

        // ==================== POSITIVE TEST — TỰ TẠO MÃ VÀ ÁP DỤNG ====================
        test.describe("Nhóm 1 — Tự tạo mã và áp dụng (Positive)", () => {
            test(
                "TC: Tự động tạo mã giảm giá trên Admin và áp dụng thành công trên Web",
                { tag: ["@positive", "@regression", "@e2e"] },
                async ({ page }) => {
                    await allure.story("Auto-Create and Apply Valid Discount Code");

                    // Ghi chú: Mã hợp lệ đã được tạo ở block test.beforeAll
                    const generatedData = validData;

                    // ========== TEST MÃ TRÊN WEB ==========

                    await test.step("1. Thêm sản phẩm vào giỏ hàng", async () => {
                        await cartPage.addOneProductToCart();
                        await cartPage.gotoCart();
                        const isEmpty = await cartPage.isCartEmpty();
                        expect(isEmpty, "Giỏ hàng không được trống!").toBeFalsy();
                    });

                    let initialPrice = 0;
                    await test.step("2. Lấy tổng tiền ban đầu", async () => {
                        initialPrice = await cartPage.getTotalPrice();
                        expect(initialPrice).toBeGreaterThan(0);
                    });

                    await test.step(`3. Nhập mã '${generatedData.codeName}' và Áp dụng`, async () => {
                        await discountPage.applyDiscountCode(generatedData.codeName);
                    });

                    await test.step("4. Kiểm tra thông báo thành công", async () => {
                        const message = await discountPage.getDiscountModalMessage();
                        expect(message).toContain('Nhập mã giảm giá thành công!');
                        await discountPage.closeDiscountModal();
                    });

                    await test.step("5. Kiểm tra số tiền ưu đãi và tổng tiền giảm", async () => {
                        const discountValue = await discountPage.getDiscountAmountValue();
                        expect(discountValue, "Số tiền ưu đãi phải lớn hơn 0").toBeGreaterThan(0);

                        const currentTotalPrice = await cartPage.getTotalPrice();
                        console.log(`[Auto Discount] Giá ban đầu: ${initialPrice} | Ưu đãi: ${discountValue} | Giá hiện tại: ${currentTotalPrice}`);
                        expect(currentTotalPrice, "Tổng tiền mới phải nhỏ hơn tổng tiền ban đầu").toBeLessThan(initialPrice);

                        // Kiểm tra công thức: giá mới = giá cũ - ưu đãi
                        expect(currentTotalPrice).toEqual(initialPrice - discountValue);
                    });
                }
            );
        });

        // ==================== NEGATIVE TEST — MÃ KHÔNG HỢP LỆ ====================
        test.describe("Nhóm 2 — Nhập mã không hợp lệ (Negative)", () => {
            for (const data of discountData.invalidCodes) {
                test(
                    `TC: Áp dụng mã không hợp lệ - ${data.description}`,
                    { tag: ["@negative", "@regression"] },
                    async ({ page }) => {
                        await allure.story("Apply Invalid Discount Code");

                        await test.step("1. Thêm 1 sản phẩm vào giỏ hàng", async () => {
                            await cartPage.addOneProductToCart();
                            await cartPage.gotoCart();
                        });

                        let initialPrice = 0;
                        await test.step("2. Lấy tổng tiền ban đầu", async () => {
                            initialPrice = await cartPage.getTotalPrice();
                        });

                        await test.step(`3. Nhập mã '${data.code}' và Áp dụng`, async () => {
                            await discountPage.applyDiscountCode(data.code);
                        });

                        await test.step("4. Kiểm tra thông báo lỗi", async () => {
                            try {
                                const message = await discountPage.getDiscountModalMessage();
                                expect(message).toContain(data.expectedMessage);
                                await discountPage.closeDiscountModal();
                            } catch (error) {
                                if (data.code === '') {
                                    // Trường hợp bỏ trống có thể dùng validation HTML5 (required) không hiện modal
                                    console.log("Không có modal hiển thị cho mã rỗng, có thể frontend dùng validation HTML5.");
                                } else {
                                    throw error;
                                }
                            }
                        });

                        await test.step("5. Kiểm tra tổng tiền không thay đổi", async () => {
                            const discountValue = await discountPage.getDiscountAmountValue();
                            expect(discountValue, "Số tiền ưu đãi phải là 0").toBe(0);

                            const currentTotalPrice = await cartPage.getTotalPrice();
                            expect(currentTotalPrice, "Tổng tiền không được thay đổi").toBe(initialPrice);
                        });
                    }
                );
            }
        });

        // ==================== NEGATIVE TEST — TẠO MÃ LỖI TỪ ADMIN ====================
        test.describe("Nhóm 3 — Tạo mã lỗi trên Admin và kiểm tra (Negative)", () => {

            test(
                "TC: Áp dụng mã đã cạn kiệt lượt dùng",
                { tag: ["@negative", "@regression", "@e2e"] },
                async ({ page }) => {
                    await allure.story("Apply Exhausted Discount Code");

                    // Ghi chú: Mã hết lượt đã được tạo ở block test.beforeAll
                    const generatedData = exhaustedData;

                    // ========== TEST MÃ TRÊN WEB ==========
                    let initialPrice = 0;
                    await test.step("1. Thêm sản phẩm vào giỏ hàng", async () => {
                        await cartPage.addOneProductToCart();
                        await cartPage.gotoCart();
                        initialPrice = await cartPage.getTotalPrice();
                    });

                    await test.step("2. Nhập mã và Áp dụng", async () => {
                        await discountPage.applyDiscountCode(generatedData.codeName);
                    });

                    await test.step("3. Kiểm tra thông báo lỗi và tổng tiền không đổi", async () => {
                        const message = await discountPage.getDiscountModalMessage();
                        expect(message).not.toBeNull();
                        expect(message.length).toBeGreaterThan(0);
                        await discountPage.closeDiscountModal();

                        const discountValue = await discountPage.getDiscountAmountValue();
                        expect(discountValue, "Số tiền ưu đãi phải là 0").toBe(0);

                        const currentTotalPrice = await cartPage.getTotalPrice();
                        expect(currentTotalPrice, "Tổng tiền không được thay đổi").toBe(initialPrice);
                    });
                }
            );
        });

        // ==================== SECURITY TEST — KIỂM THỬ BẢO MẬT ====================
        test.describe("Nhóm 4 — Kiểm thử Bảo mật (Security/Hack)", () => {
            for (const data of discountData.hackCodes) {
                test(
                    `TC: Security - ${data.description}`,
                    { tag: ["@security", "@regression"] },
                    async ({ page }) => {
                        await allure.story("Apply Hack/Security Discount Code");

                        await test.step("1. Thêm 1 sản phẩm vào giỏ hàng", async () => {
                            await cartPage.addOneProductToCart();
                            await cartPage.gotoCart();
                        });

                        let initialPrice = 0;
                        await test.step("2. Lấy tổng tiền ban đầu", async () => {
                            initialPrice = await cartPage.getTotalPrice();
                        });

                        await test.step(`3. Nhập chuỗi độc hại và Áp dụng`, async () => {
                            // Lắng nghe sự kiện dialog để bắt lỗi XSS (nếu có alert popup thì test fail)
                            page.on('dialog', async dialog => {
                                console.error(`[CẢNH BÁO BẢO MẬT] Bắt được XSS popup: ${dialog.message()}`);
                                expect(dialog.type(), "Lỗ hổng XSS: Trình duyệt hiển thị Alert!").not.toBe('alert');
                                await dialog.dismiss();
                            });
                            
                            // Nhập chuỗi
                            await discountPage.applyDiscountCode(data.code);
                        });

                        await test.step("4. Kiểm tra hệ thống không bị crash", async () => {
                            try {
                                const message = await discountPage.getDiscountModalMessage();
                                expect(message).not.toBeNull(); // Miễn là có hiện modal bình thường
                                await discountPage.closeDiscountModal();
                            } catch (error) {
                                console.log("Không hiện modal lỗi. Có thể do thuộc tính maxlength chặn, hoặc WAF/Frontend tự block request.");
                            }
                        });

                        await test.step("5. Đảm bảo tiền không bị giảm", async () => {
                            const discountValue = await discountPage.getDiscountAmountValue();
                            expect(discountValue, "Lỗ hổng logic: Chuỗi độc hại làm thay đổi số tiền ưu đãi!").toBe(0);

                            const currentTotalPrice = await cartPage.getTotalPrice();
                            expect(currentTotalPrice, "Lỗ hổng logic: Tổng tiền bị thay đổi!").toBe(initialPrice);
                        });
                    }
                );
            }
        });
    });
}