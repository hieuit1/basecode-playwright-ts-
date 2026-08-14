import { Page, Locator } from "@playwright/test";
import { BasePage } from "../BasePage";

export class NewsletterPage extends BasePage {
    readonly formWrapper: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly phoneInput: Locator;
    readonly serviceSelect: Locator;
    readonly contentTextarea: Locator;
    readonly submitButton: Locator;
    readonly successMessage: Locator;
    readonly dashboardElement: Locator;
    readonly notificationDropdown: Locator;
    readonly newsletterLink: Locator;

    constructor(page: Page) {
        super(page);
        this.formWrapper = page.locator("//p[@class='form-p']");
        this.nameInput = page.locator("//input[@id='name-newsletter']").or(page.locator("//input[contains(@id, 'name')]"));
        this.emailInput = page.locator("//input[@id='email-newsletter']");
        this.phoneInput = page.locator("//input[@id='phone-newsletter']");
        this.serviceSelect = page.locator("//select[@id='service-newsletter']");
        this.contentTextarea = page.locator("//textarea[@id='content-newsletter']");
        this.submitButton = page.locator("//div[@class='newsletter-button']");
        this.successMessage = page.locator("//div[@id='alert']");
        this.dashboardElement = page.locator("//span[@class='text-split']");
        this.notificationDropdown = page.locator("//li[@class='nav-item dropdown']//a[@class='nav-link']");
        this.newsletterLink = page.locator("//a[contains(text(),'Đăng ký nhận tin')]");
    }

    /**
     * Điền thông tin vào form đăng ký nhận tin
     */
    async fillNewsletterForm(name: string, email: string, phone: string, content: string) {
        // Cuộn trang đến form đăng ký nhận tin
        await this.formWrapper.scrollIntoViewIfNeeded().catch(() => { });

        if (name !== undefined) {
            await this.nameInput.fill(name).catch(() => { });
        }
        if (email !== undefined) {
            await this.emailInput.fill(email).catch(() => { });
        }
        if (phone !== undefined) {
            await this.phoneInput.fill(phone).catch(() => { });
        }

        // Chọn dịch vụ (chọn cái đầu tiên - index 1 vì 0 thường là placeholder)
        const hasServiceSelect = await this.serviceSelect.count() > 0;
        if (hasServiceSelect && await this.serviceSelect.isVisible().catch(() => false)) {
            // Lấy danh sách các option để đảm bảo có thể chọn
            const options = this.serviceSelect.locator("option");
            const count = await options.count();
            if (count > 1) {
                // Lấy giá trị của option thứ 2 (index 1)
                const val = await options.nth(1).getAttribute("value");
                if (val) {
                    await this.serviceSelect.selectOption(val).catch(() => { });
                } else {
                    await this.serviceSelect.selectOption({ index: 1 }).catch(() => { });
                }
            }
        }

        if (content !== undefined) {
            await this.contentTextarea.fill(content).catch(() => { });
        }
    }

    /**
     * Submit form đăng ký nhận tin
     */
    async submitForm() {
        await this.submitButton.click().catch(() => { });
    }

    async goToNewsletterManagement() {
        // Có thể cần import { test } từ "@playwright/test" trong file này, nhưng vì không có nên chỉ thao tác
        await this.notificationDropdown.click();
        await this.newsletterLink.click();
    }

    getNewsletterRow(email: string): Locator {
        return this.page.getByText(email).first();
    }

    async verifyNewsletterExists(email: string) {
        const targetCell = this.getNewsletterRow(email);
        await targetCell.waitFor({ state: 'visible', timeout: 10000 });
    }
}
