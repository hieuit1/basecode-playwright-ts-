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

        // ID chuẩn theo "Báo cáo hỗ trợ automation test" mục 3.8
        this.discountInput = page.locator("#input-magiamgia");
        this.applyDiscountButton = page.locator("#btn-apdung-magiamgia");
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
     * Lấy số tiền ưu đãi (giảm giá).
     * KHÔNG bọc try/catch trả 0: nếu không tìm thấy #discount-value thì phải báo lỗi,
     * vì "thiếu element" và "ưu đãi bằng 0đ" là hai chuyện khác nhau — gộp lại sẽ làm
     * các test negative (expect toBe(0)) xanh giả.
     */
    async getDiscountAmountValue(): Promise<number> {
        const discountLocator = this.page.locator("#discount-value");
        await discountLocator.waitFor({ state: 'visible', timeout: 5000 });
        const text = await discountLocator.textContent();
        return this.parsePrice(text || '0');
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
