import { Page, Locator } from "@playwright/test";
import { BasePage } from "../BasePage";

export class DiscountPage extends BasePage {
    // ===== LOCATORS =====
    readonly discountInput: Locator;
    readonly applyDiscountButton: Locator;
    readonly discountModalBody: Locator;
    readonly discountModalCloseButton: Locator;

    constructor(page: Page) {
        super(page);

        this.discountInput = page.locator("//input[@placeholder='Nhập mã ưu đãi']");
        this.applyDiscountButton = page.locator("//input[@value='Áp dụng']");
        // Scope vào đúng #popup-notify để tránh strict mode violation (trang có nhiều modal: #popup-cart, ...)
        this.discountModalBody = page.locator("#popup-notify .modal-body");
        // Nút "Thoát" trong footer của #popup-notify
        this.discountModalCloseButton = page.locator("#popup-notify .modal-footer button.btn-danger");
    }

    // ===== DISCOUNT ACTIONS =====

    /**
     * Nhập mã giảm giá và click Áp dụng
     */
    async applyDiscountCode(code: string) {
        await this.discountInput.waitFor({ state: 'visible', timeout: 5000 });
        await this.discountInput.fill(code);
        await this.applyDiscountButton.click();
    }

    /**
     * Lấy nội dung thông báo sau khi click Áp dụng
     */
    async getDiscountModalMessage(): Promise<string> {
        await this.discountModalBody.waitFor({ state: 'visible', timeout: 5000 });
        const text = await this.discountModalBody.textContent();
        return text?.trim() || '';
    }

    /**
     * Đóng modal thông báo giảm giá
     */
    async closeDiscountModal() {
        await this.discountModalCloseButton.waitFor({ state: 'visible', timeout: 5000 });
        await this.discountModalCloseButton.click();
        // Chờ modal biến mất hẳn (hidden) thay vì dùng timeout cứng
        // Chờ toàn bộ modal #popup-notify ẩn hẳn
        await this.page.locator("#popup-notify").waitFor({ state: 'hidden', timeout: 5000 });
    }

    /**
     * Lấy số tiền ưu đãi (giảm giá)
     */
    async getDiscountAmountValue(): Promise<number> {
        try {
            // Cố gắng tìm phần tử chứa text "Ưu đãi", sau đó lấy span kế tiếp chứa giá tiền
            const discountLocator = this.page.locator("//div[contains(@class,'total-procart')]//span[contains(text(),'Ưu đãi')]/following-sibling::span");
            if (await discountLocator.isVisible({ timeout: 2000 })) {
                const text = await discountLocator.textContent();
                return this.parsePrice(text || '0');
            }
            
            // Nếu không được, dùng locator dựa trên class mô tả của user
            const altLocator = this.page.locator("//div[@class='total-procart d-flex align-items-center justify-content-between']");
            if (await altLocator.isVisible({ timeout: 2000 })) {
                const text = await altLocator.textContent();
                return this.parsePrice(text || '0');
            }
            return 0;
        } catch {
            return 0;
        }
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
}
