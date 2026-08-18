import { test, expect } from "@playwright/test";
import { allure } from "allure-playwright";
import { CartPage } from "../../src/pages/web/CartPage";
import { cartTestConfig } from "../../data/web/cartData";
import { FeatureHelper } from "../../src/utils/FeatureHelper";

test.use({ video: 'retain-on-failure' });

if (FeatureHelper.hasCartFeature()) {
    test.describe("Cart Feature Tests", () => {
        let cartPage: CartPage;

        test.beforeEach(async ({ page }) => {
            cartPage = new CartPage(page);

            await allure.epic("Web");
            await allure.feature("Shopping Cart");
        });

        // ==================== TC-01: THÊM 1 SẢN PHẨM VÀO GIỎ HÀNG ====================
        test(
            "TC-01: Thêm 1 sản phẩm vào giỏ hàng thành công",
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
                await allure.story("Add Single Product to Cart");

                await test.step("1. Điều hướng đến trang sản phẩm", async () => {
                    await cartPage.gotoProductPage();
                });

                await test.step("2. Click vào 1 sản phẩm bất kỳ", async () => {
                    await cartPage.clickProduct();
                });

                await test.step("3. Click nút Thêm vào giỏ", async () => {
                    await cartPage.addToCart();
                });

                await test.step("4. Đóng modal thông báo (nếu có)", async () => {
                    await cartPage.closeModal();
                });

                await test.step("5. Mở giỏ hàng và kiểm tra", async () => {
                    await cartPage.gotoCart();

                    // Kiểm tra giỏ hàng KHÔNG trống
                    const isEmpty = await cartPage.isCartEmpty();
                    expect(isEmpty, "Giỏ hàng không được trống sau khi thêm sản phẩm!").toBeFalsy();

                    // Kiểm tra có ít nhất 1 sản phẩm
                    const itemCount = await cartPage.getCartItemCount();
                    expect(itemCount, "Phải có ít nhất 1 sản phẩm trong giỏ hàng!").toBeGreaterThanOrEqual(1);

                    // Kiểm tra giá tiền hiển thị > 0
                    const totalPrice = await cartPage.getTotalPrice();
                    expect(totalPrice, "Tổng tiền phải lớn hơn 0!").toBeGreaterThan(0);

                    console.log(`✅ Giỏ hàng có ${itemCount} sản phẩm, tổng tiền: ${totalPrice.toLocaleString('vi-VN')} đ`);
                });

                // Cleanup: Xóa sạch giỏ hàng sau test
                await test.step("6. Dọn dẹp giỏ hàng", async () => {
                    await cartPage.clearCart();
                });
            }
        );

        // ==================== TC-02: TĂNG SỐ LƯỢNG SẢN PHẨM ====================
        test(
            "TC-02: Tăng số lượng sản phẩm trong giỏ hàng",
            {
                tag: [
                    "@priority:high",
                    "@regression",
                    "@positive",
                ],
                annotation: [{ type: "severity", description: "critical" }],
            },
            async ({ page }) => {
                await allure.story("Increase Product Quantity in Cart");

                await test.step("1. Thêm 1 sản phẩm vào giỏ hàng", async () => {
                    await cartPage.addOneProductToCart();
                });

                await test.step("2. Mở giỏ hàng", async () => {
                    await cartPage.gotoCart();
                });

                let priceBeforeIncrease = 0;

                await test.step("3. Ghi nhận giá ban đầu (số lượng = 1)", async () => {
                    priceBeforeIncrease = await cartPage.getSingleProductPrice();
                    const quantity = await cartPage.getQuantity();

                    console.log(`Giá ban đầu: ${priceBeforeIncrease.toLocaleString('vi-VN')} đ | Số lượng: ${quantity}`);
                    expect(quantity, "Số lượng ban đầu phải = 1").toBe(1);
                });

                await test.step("4. Click nút + để tăng số lượng lên 2", async () => {
                    await cartPage.increaseQuantity();

                    const newQuantity = await cartPage.getQuantity();
                    expect(newQuantity, "Số lượng sau khi tăng phải = 2").toBe(2);
                });

                await test.step("5. Kiểm tra tổng tiền cập nhật đúng", async () => {
                    const priceAfterIncrease = await cartPage.getSingleProductPrice();
                    const expectedPrice = priceBeforeIncrease * 2;

                    console.log(`Giá sau tăng: ${priceAfterIncrease.toLocaleString('vi-VN')} đ | Kỳ vọng: ${expectedPrice.toLocaleString('vi-VN')} đ`);

                    // Cho phép sai số ±1000đ (do làm tròn)
                    expect(
                        Math.abs(priceAfterIncrease - expectedPrice),
                        `Giá sau tăng (${priceAfterIncrease}) phải xấp xỉ giá kỳ vọng (${expectedPrice})`
                    ).toBeLessThanOrEqual(1000);
                });

                // Cleanup
                await test.step("6. Dọn dẹp giỏ hàng", async () => {
                    await cartPage.clearCart();
                });
            }
        );

        // ==================== TC-03: GIẢM SỐ LƯỢNG SẢN PHẨM ====================
        test(
            "TC-03: Giảm số lượng sản phẩm trong giỏ hàng",
            {
                tag: [
                    "@priority:high",
                    "@regression",
                    "@positive",
                ],
                annotation: [{ type: "severity", description: "critical" }],
            },
            async ({ page }) => {
                await allure.story("Decrease Product Quantity in Cart");

                await test.step("1. Thêm 1 sản phẩm vào giỏ hàng", async () => {
                    await cartPage.addOneProductToCart();
                });

                await test.step("2. Mở giỏ hàng", async () => {
                    await cartPage.gotoCart();
                });

                let pricePerUnit = 0;

                await test.step("3. Tăng số lượng lên 2 (để có thể giảm)", async () => {
                    pricePerUnit = await cartPage.getSingleProductPrice();
                    await cartPage.increaseQuantity();

                    const quantityAfterIncrease = await cartPage.getQuantity();
                    expect(quantityAfterIncrease, "Số lượng sau khi tăng phải = 2").toBe(2);
                });

                await test.step("4. Click nút - để giảm số lượng về 1", async () => {
                    await cartPage.decreaseQuantity();

                    const quantityAfterDecrease = await cartPage.getQuantity();
                    expect(quantityAfterDecrease, "Số lượng sau khi giảm phải = 1").toBe(1);
                });

                await test.step("5. Kiểm tra giá quay về giá 1 đơn vị", async () => {
                    const priceAfterDecrease = await cartPage.getSingleProductPrice();

                    console.log(`Giá sau giảm: ${priceAfterDecrease.toLocaleString('vi-VN')} đ | Giá 1 đơn vị: ${pricePerUnit.toLocaleString('vi-VN')} đ`);

                    expect(
                        Math.abs(priceAfterDecrease - pricePerUnit),
                        `Giá sau giảm (${priceAfterDecrease}) phải xấp xỉ giá 1 đơn vị (${pricePerUnit})`
                    ).toBeLessThanOrEqual(1000);
                });

                await test.step("6. Verify giảm dưới 1 vẫn giữ số lượng = 1", async () => {
                    await cartPage.decreaseQuantity();

                    const quantityMin = await cartPage.getQuantity();
                    expect(quantityMin, "Số lượng không được giảm dưới 1").toBe(1);
                });

                // Cleanup
                await test.step("7. Dọn dẹp giỏ hàng", async () => {
                    await cartPage.clearCart();
                });
            }
        );

        // ==================== TC-04: XÓA SẢN PHẨM KHỎI GIỎ HÀNG ====================
        test(
            "TC-04: Xóa sản phẩm khỏi giỏ hàng",
            {
                tag: [
                    "@priority:high",
                    "@regression",
                    "@positive",
                ],
                annotation: [{ type: "severity", description: "critical" }],
            },
            async ({ page }) => {
                await allure.story("Delete Product from Cart");

                await test.step("1. Thêm 1 sản phẩm vào giỏ hàng", async () => {
                    await cartPage.addOneProductToCart();
                });

                await test.step("2. Mở giỏ hàng", async () => {
                    await cartPage.gotoCart();

                    const itemCount = await cartPage.getCartItemCount();
                    expect(itemCount, "Phải có ít nhất 1 SP trong giỏ trước khi xóa").toBeGreaterThanOrEqual(1);
                });

                await test.step("3. Dọn dẹp giỏ hàng", async () => {
                    await cartPage.clearCart();
                });

                await test.step("4. Verify giỏ hàng trống", async () => {
                    const isEmpty = await cartPage.isCartEmpty();
                    expect(isEmpty, "Giỏ hàng phải hiển thị message trống sau khi xóa hết SP!").toBeTruthy();
                });
            }
        );

        // ==================== TC-05: THÊM 3-5 SẢN PHẨM VÀO GIỎ HÀNG ====================
        test(
            "TC-05: Thêm nhiều sản phẩm (3-5 SP) vào giỏ hàng",
            {
                tag: [
                    "@priority:high",
                    "@smoke",
                    "@regression",
                    "@positive",
                ],
                annotation: [{ type: "severity", description: "critical" }],
            },
            async ({ page }) => {
                await allure.story("Add Multiple Products to Cart");

                const productCount = cartTestConfig.multiProductCount;

                await test.step(`1. Thêm ${productCount} sản phẩm ngẫu nhiên vào giỏ hàng`, async () => {
                    await cartPage.addMultipleProductsToCart(productCount);
                });

                await test.step("2. Mở giỏ hàng", async () => {
                    await cartPage.gotoCart();
                });

                await test.step(`3. Kiểm tra giỏ hàng có đủ ${productCount} sản phẩm`, async () => {
                    const isEmpty = await cartPage.isCartEmpty();
                    expect(isEmpty, "Giỏ hàng không được trống!").toBeFalsy();

                    const itemCount = await cartPage.getCartItemCount();
                    console.log(`Số lượng dòng SP trong giỏ: ${itemCount} | Kỳ vọng: ${productCount}`);

                    expect(
                        itemCount,
                        `Giỏ hàng phải có ít nhất ${productCount} sản phẩm!`
                    ).toBeGreaterThanOrEqual(productCount);
                });

                await test.step("4. Kiểm tra tổng tiền > 0 và hợp lệ", async () => {
                    const totalPrice = await cartPage.getTotalPrice();
                    expect(totalPrice, "Tổng tiền phải lớn hơn 0").toBeGreaterThan(0);

                    // Kiểm tra tổng tiền = tổng các dòng SP
                    let sumIndividualPrices = 0;
                    const itemCount = await cartPage.getCartItemCount();

                    for (let i = 0; i < itemCount; i++) {
                        const linePrice = await cartPage.getSingleProductPrice(i);
                        sumIndividualPrices += linePrice;
                        console.log(`  SP #${i + 1}: ${linePrice.toLocaleString('vi-VN')} đ`);
                    }

                    console.log(`  Tổng cộng từng dòng: ${sumIndividualPrices.toLocaleString('vi-VN')} đ`);
                    console.log(`  Tổng tiền hiển thị: ${totalPrice.toLocaleString('vi-VN')} đ`);

                    // Cho phép sai số ±5000đ (do nhiều SP có thể có discount rounding)
                    expect(
                        Math.abs(totalPrice - sumIndividualPrices),
                        `Tổng tiền (${totalPrice}) phải xấp xỉ tổng từng dòng (${sumIndividualPrices})`
                    ).toBeLessThanOrEqual(5000);
                });

                // Cleanup
                await test.step("5. Dọn dẹp giỏ hàng", async () => {
                    await cartPage.clearCart();
                });
            }
        );

        // ==================== TC-06: GIỎ HÀNG TRỐNG (NEGATIVE) ====================
        test(
            "TC-06: Giỏ hàng trống khi chưa thêm sản phẩm",
            {
                tag: [
                    "@priority:medium",
                    "@regression",
                    "@negative",
                ],
                annotation: [{ type: "severity", description: "normal" }],
            },
            async ({ page }) => {
                await allure.story("Empty Cart Verification");

                await test.step("1. Điều hướng về trang chủ", async () => {
                    await cartPage.gotoHomePage();
                });

                await test.step("2. Dọn sạch giỏ hàng (nếu đã có SP từ trước)", async () => {
                    await cartPage.gotoCart();

                    // Xóa hết SP cũ nếu có
                    const existingItems = await cartPage.getCartItemCount();
                    if (existingItems > 0) {
                        console.log(`Phát hiện ${existingItems} SP cũ trong giỏ, đang dọn dẹp...`);
                        await cartPage.clearCart();
                    }
                });

                await test.step("3. Kiểm tra message giỏ hàng trống", async () => {
                    const isEmpty = await cartPage.isCartEmpty();
                    expect(
                        isEmpty,
                        "Phải hiển thị message 'Không tồn tại sản phẩm nào trong giỏ hàng !'"
                    ).toBeTruthy();
                });

                await test.step("4. Kiểm tra tổng tiền không hiển thị hoặc = 0", async () => {
                    const isTotalVisible = await cartPage.totalPrice.isVisible({ timeout: 2000 }).catch(() => false);

                    if (isTotalVisible) {
                        const totalPrice = await cartPage.getTotalPrice();
                        expect(totalPrice, "Tổng tiền giỏ hàng trống phải = 0").toBe(0);
                    } else {
                        // Tổng tiền không hiển thị khi giỏ trống → OK
                        console.log('Tổng tiền không hiển thị khi giỏ hàng trống → Hợp lệ.');
                    }
                });
            }
        );
    });
}