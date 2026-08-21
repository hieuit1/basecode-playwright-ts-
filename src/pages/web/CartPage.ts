import { Page, Locator } from "@playwright/test";
import { BasePage } from "../BasePage";

export class CartPage extends BasePage {
    // ===== LOCATORS =====

    readonly cartIcon: Locator;
    readonly productItems: Locator;
    readonly addToCartButton: Locator;
    readonly closeModalButton: Locator;
    readonly singleProductPrice: Locator;
    readonly totalPrice: Locator;
    readonly minusButton: Locator;
    readonly plusButton: Locator;
    readonly deleteButton: Locator;
    readonly confirmDialog: Locator;
    readonly confirmOkButton: Locator;
    readonly emptyCartMessage: Locator;

    constructor(page: Page) {
        super(page);

        this.cartIcon = page.locator("//a[@class='cart d-flex align-items-center border border-2 border-main text-main rounded-lg p-2']//*[name()='svg']");
        this.productItems = page.locator("//div[@class='box-product ']");
        this.addToCartButton = page.locator("//span[contains(@class,'d-block fs-16 fw-600 text-main')]");
        this.closeModalButton = page.locator("//div[@class='modal-dialog modal-lg']//div[@class='modal-header']//button[@aria-label='Close']");
        this.singleProductPrice = page.locator("//p[contains(@class,'price-new-cart')]");
        this.totalPrice = page.locator("//p[@class='total-price load-price-total']");
        this.minusButton = page.locator("//span[@class='counter-procart-minus counter-procart']");
        this.plusButton = page.locator("//span[@class='counter-procart-plus counter-procart']");
        this.deleteButton = page.locator("a.del-procart");
        this.confirmDialog = page.locator(".jconfirm");
        this.confirmOkButton = page.locator(".jconfirm button.btn-primary, //button[contains(text(),'Đồng ý')]");
        this.emptyCartMessage = page.locator("//p[contains(text(),'Không tồn tại sản phẩm nào trong giỏ hàng !')]");
    }

    // ===== NAVIGATION =====

    /**
     * Mở trang chủ (tương tự pattern SearchPage)
     */
    async gotoHomePage() {
        let baseUrl = process.env.BASE_URL || '';
        if (baseUrl.endsWith('/')) {
            baseUrl = baseUrl.slice(0, -1);
        }
        const indexUrl = baseUrl.endsWith('.php') ? baseUrl : `${baseUrl}/index.php`;

        try {
            const response = await this.page.goto(indexUrl, { waitUntil: 'domcontentloaded' });
            if (response && response.status() === 404) {
                console.log(`[THÔNG BÁO] Không tìm thấy /index.php, chuyển hướng về link gốc...`);
                await this.page.goto(`${baseUrl}/`, { waitUntil: 'domcontentloaded' });
            }
        } catch (error) {
            console.log(`[THÔNG BÁO] Lỗi khi truy cập /index.php, thử lại link gốc...`);
            await this.page.goto(`${baseUrl}/`, { waitUntil: 'domcontentloaded' });
        }
    }

    /**
     * Điều hướng đến trang danh sách sản phẩm /ban-sofa
     */
    async gotoProductPage() {
        let baseUrl = process.env.BASE_URL || '';
        // Loại bỏ /index.php nếu có
        if (baseUrl.includes('/index.php')) {
            baseUrl = baseUrl.split('/index.php')[0];
        }
        if (baseUrl.endsWith('/')) {
            baseUrl = baseUrl.slice(0, -1);
        }

        const productPageUrl = `${baseUrl}/ban-sofa`;
        console.log(`Đang truy cập ${productPageUrl}...`);
        await this.page.goto(productPageUrl, { waitUntil: 'domcontentloaded' });
    }

    /**
     * Mở trang giỏ hàng bằng cách click icon giỏ hàng trên header
     */
    async gotoCart() {
        await this.cartIcon.waitFor({ state: 'visible', timeout: 5000 });

        try {
            await Promise.all([
                this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 30000 }),
                this.cartIcon.click({ timeout: 5000, force: true })
            ]);
        } catch (error) {
            let baseUrl = process.env.BASE_URL || '';
            // Loại bỏ /index.php nếu có
            if (baseUrl.includes('/index.php')) {
                baseUrl = baseUrl.split('/index.php')[0];
            }
            if (baseUrl.endsWith('/')) baseUrl = baseUrl.slice(0, -1);
            try {
                await this.page.evaluate((url) => { window.location.href = url; }, `${baseUrl}/gio-hang`);
                await this.page.waitForLoadState('domcontentloaded');
            } catch (evalError) {
                // Nếu "Execution context was destroyed", tức là navigation trước đó đã thành công
            }
        }
        // Thêm thời gian chờ vì trang giỏ hàng thỉnh thoảng load hơi chậm/lag
        await this.page.waitForTimeout(2000);
    }

    // ===== PRODUCT ACTIONS =====

    /**
     * Click vào sản phẩm theo index (0-based) trên trang /san-pham
     * Mặc định chọn ngẫu nhiên nếu không truyền index
     */
    async clickProduct(index?: number) {
        await this.productItems.first().waitFor({ state: 'visible', timeout: 10000 });
        const totalProducts = await this.productItems.count();

        if (totalProducts === 0) {
            throw new Error('Không tìm thấy sản phẩm nào trên trang /san-pham!');
        }

        // Nếu không truyền index, chọn ngẫu nhiên
        const targetIndex = index !== undefined ? index : Math.floor(Math.random() * totalProducts);
        const safeIndex = Math.min(targetIndex, totalProducts - 1);

        // Lấy tên sản phẩm trước khi click (để log)
        const productName = await this.productItems.nth(safeIndex).locator('.name-product').textContent().catch(() => `SP #${safeIndex + 1}`);
        console.log(`Đang click vào sản phẩm: "${productName?.trim()}" (index: ${safeIndex})`);

        // Click vào link sản phẩm
        const productLink = this.productItems.nth(safeIndex).locator('a').first();
        await productLink.click();
        await this.page.waitForLoadState('domcontentloaded');
    }

    /**
     * Click nút "Thêm vào giỏ" trên trang chi tiết sản phẩm
     */
    async addToCart() {
        await this.addToCartButton.waitFor({ state: 'visible', timeout: 5000 });
        await this.addToCartButton.click();
        // Đợi modal hoặc phản hồi từ server
        await this.page.waitForTimeout(1500);
    }

    /**
     * Đóng modal thông báo sau khi thêm vào giỏ (nếu có)
     */
    async closeModal() {
        try {
            await this.closeModalButton.waitFor({ state: 'visible', timeout: 3000 });
            await this.closeModalButton.click();
            await this.page.waitForTimeout(500);
            console.log('Đã đóng modal thông báo thêm giỏ hàng.');
        } catch {
            console.log('Không có modal thông báo hiển thị, bỏ qua.');
        }
    }

    /**
     * Flow đầy đủ: Thêm 1 sản phẩm vào giỏ hàng
     * (Vào /san-pham → click SP → thêm vào giỏ → đóng modal)
     */
    async addOneProductToCart(productIndex?: number) {
        await this.gotoProductPage();
        await this.clickProduct(productIndex);
        await this.addToCart();
        await this.closeModal();
    }

    /**
     * Flow: Thêm nhiều sản phẩm vào giỏ hàng (3-5 SP)
     * @param count Số lượng sản phẩm muốn thêm (mặc định: 3)
     */
    async addMultipleProductsToCart(count: number = 3) {
        await this.gotoProductPage();

        // Đếm tổng số SP trên trang
        await this.productItems.first().waitFor({ state: 'visible', timeout: 10000 });
        const totalProducts = await this.productItems.count();
        const actualCount = Math.min(count, totalProducts);

        console.log(`Sẽ thêm ${actualCount}/${totalProducts} sản phẩm vào giỏ hàng...`);

        // Tạo danh sách index ngẫu nhiên, không trùng lặp
        const indices = this.getRandomIndices(totalProducts, actualCount);

        for (let i = 0; i < actualCount; i++) {
            console.log(`--- Đang thêm sản phẩm ${i + 1}/${actualCount} (index: ${indices[i]}) ---`);

            if (i > 0) {
                // Quay lại trang /san-pham để chọn SP tiếp theo
                await this.gotoProductPage();
            }

            await this.clickProduct(indices[i]);
            await this.addToCart();
            await this.closeModal();
        }
    }

    // ===== CART ACTIONS =====

    /**
     * Tăng số lượng sản phẩm trong giỏ (click nút "+")
     * @param productIndex Index của sản phẩm trong giỏ (0-based), mặc định = 0
     */
    async increaseQuantity(productIndex: number = 0) {
        await this.plusButton.nth(productIndex).waitFor({ state: 'visible', timeout: 5000 });
        await this.plusButton.nth(productIndex).click();
        // Đợi server cập nhật giá
        await this.page.waitForTimeout(2000);
    }

    /**
     * Giảm số lượng sản phẩm trong giỏ (click nút "-")
     * @param productIndex Index của sản phẩm trong giỏ (0-based), mặc định = 0
     */
    async decreaseQuantity(productIndex: number = 0) {
        await this.minusButton.nth(productIndex).waitFor({ state: 'visible', timeout: 5000 });
        await this.minusButton.nth(productIndex).click();
        // Đợi server cập nhật giá
        await this.page.waitForTimeout(2000);
    }

    /**
     * Lấy số lượng hiện tại của sản phẩm trong giỏ
     * Sử dụng locator linh hoạt: tìm input nằm giữa nút - và +
     * @param productIndex Index của sản phẩm trong giỏ (0-based), mặc định = 0
     */
    async getQuantity(productIndex: number = 0): Promise<number> {
        // Tìm tất cả input có type="text" nằm trong vùng counter-procart
        const quantityInput = this.page.locator(
            "//span[@class='counter-procart-minus counter-procart']/following-sibling::input"
        ).nth(productIndex);

        const value = await quantityInput.inputValue().catch(async () => {
            // Fallback: tìm input gần nút +/-
            const fallbackInput = this.page.locator("input[type='text']")
                .filter({ has: this.page.locator("..").filter({ has: this.page.locator(".counter-procart") }) });
            return await fallbackInput.nth(productIndex).inputValue().catch(() => '1');
        });

        return parseInt(value) || 1;
    }

    /**
     * Lấy giá của 1 dòng sản phẩm trong giỏ
     * @param productIndex Index của sản phẩm trong giỏ (0-based), mặc định = 0
     */
    async getSingleProductPrice(productIndex: number = 0): Promise<number> {
        await this.singleProductPrice.nth(productIndex).waitFor({ state: 'visible', timeout: 5000 });
        const text = await this.singleProductPrice.nth(productIndex).textContent() || '';
        return this.parsePrice(text);
    }

    /**
     * Lấy tổng tiền của tất cả sản phẩm trong giỏ
     */
    async getTotalPrice(): Promise<number> {
        await this.totalPrice.waitFor({ state: 'visible', timeout: 5000 });
        const text = await this.totalPrice.textContent() || '';
        return this.parsePrice(text);
    }

    /**
     * Xóa sản phẩm khỏi giỏ hàng (click "Xóa" → confirm "Đồng ý")
     * LƯU Ý: Dialog xác nhận dùng jquery-confirm có countdown tự đóng (3s),
     * nên phải click "Đồng ý" NGAY LẬP TỨC sau khi dialog xuất hiện.
     * @param productIndex Index của sản phẩm trong giỏ (0-based), mặc định = 0
     */
    async deleteProduct(productIndex: number = 0) {
        await this.deleteButton.nth(productIndex).waitFor({ state: 'visible', timeout: 5000 });
        await this.deleteButton.nth(productIndex).click();

        // Dialog jquery-confirm có countdown 3s auto-close → phải click Đồng ý nhanh
        try {
            // Đợi nút "Đồng ý" xuất hiện trong dialog
            await this.confirmOkButton.first().waitFor({ state: 'visible', timeout: 3000 });
            await this.confirmOkButton.first().click();
        } catch {
            // Fallback: nếu locator không khớp, thử click trực tiếp bằng text
            await this.page.locator("button:has-text('Đồng ý')").first().click({ timeout: 2000 }).catch(() => {
            });
        }

        // Đợi trang cập nhật sau khi xóa
        await this.page.waitForTimeout(2000);
    }

    /**
     * Xóa toàn bộ sản phẩm trong giỏ hàng (dọn dẹp)
     */
    async clearCart() {
        let maxAttempts = 10; // Giới hạn tối đa để tránh vòng lặp vô hạn
        while (maxAttempts > 0) {
            const deleteCount = await this.deleteButton.count();
            if (deleteCount === 0) break;

            await this.deleteProduct(0);
            maxAttempts--;
        }
    }

    // ===== VERIFICATION HELPERS =====

    /**
     * Kiểm tra giỏ hàng có trống hay không
     */
    async isCartEmpty(): Promise<boolean> {
        return await this.emptyCartMessage.isVisible({ timeout: 5000 }).catch(() => false);
    }

    /**
     * Đếm số lượng sản phẩm (dòng) trong giỏ hàng
     */
    async getCartItemCount(): Promise<number> {
        // Đếm theo số nút "Xóa" — mỗi dòng SP có 1 nút Xóa
        return await this.deleteButton.count();
    }

    // ===== UTILITY =====

    /**
     * Parse chuỗi giá tiền "247.500 đ" hoặc "975.000 đ" → number 247500 hoặc 975000
     */
    parsePrice(priceText: string): number {
        // Loại bỏ tất cả ký tự không phải số và dấu chấm
        const cleanText = priceText.replace(/[^\d.]/g, '');
        // Loại bỏ dấu chấm phân cách hàng nghìn (VN format: 247.500 → 247500)
        const numericString = cleanText.replace(/\./g, '');
        return parseInt(numericString) || 0;
    }

    /**
     * Tạo mảng các index ngẫu nhiên không trùng lặp
     */
    private getRandomIndices(max: number, count: number): number[] {
        const indices: number[] = [];
        const available = Array.from({ length: max }, (_, i) => i);

        for (let i = 0; i < count && available.length > 0; i++) {
            const randomPos = Math.floor(Math.random() * available.length);
            indices.push(available[randomPos]);
            available.splice(randomPos, 1);
        }

        return indices;
    }
}
