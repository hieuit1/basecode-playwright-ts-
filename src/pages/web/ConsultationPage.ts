import { Page, Locator } from "@playwright/test";
import { BasePage } from "../BasePage";

export class ConsultationPage extends BasePage {
    readonly consultationForm: Locator;
    readonly nameInput: Locator;
    readonly phoneInput: Locator;
    readonly submitButton: Locator;
    readonly successMessage: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.consultationForm = page.locator("//p[@class='form-p']");
        this.nameInput = page.locator("input[name*='name'], input[id*='name']").first();
        this.phoneInput = page.locator("//input[@id='phone-newsletter']");
        this.submitButton = page.locator("//div[@class='newsletter-button']");
        // Alert cụ thể cho thành công và thất bại
        this.successMessage = page.locator("//div[contains(@class, 'alert-success')]").or(page.locator("//div[@id='alert']//div[contains(@class, 'alert-success')]"));
        this.errorMessage = page.locator("//div[contains(@class, 'alert-danger')]").or(page.locator("//div[@id='alert']//div[contains(@class, 'alert-danger')]"));
    }

    /**
     * Mở trực tiếp trang chi tiết sản phẩm dựa vào URL đã lưu khi quét
     */
    async gotoFormViaDirectUrl(productUrl: string) {
        if (!productUrl) {
            throw new Error("Không có URL sản phẩm nào được lưu. Vui lòng kiểm tra lại quá trình quét.");
        }
        await this.page.goto(productUrl, { waitUntil: 'domcontentloaded' }).catch(() => {});
    }

    /**
     * Điền thông tin vào form tư vấn
     */
    async fillConsultationForm(name: string, phone: string) {
        await this.consultationForm.scrollIntoViewIfNeeded().catch(() => { });

        if (name !== undefined) {
            await this.nameInput.fill(name).catch(() => { });
        }
        if (phone !== undefined) {
            await this.phoneInput.fill(phone).catch(() => { });
        }
    }

    /**
     * Submit form
     */
    async submitForm() {
        await this.submitButton.click().catch(() => { });
    }
}
