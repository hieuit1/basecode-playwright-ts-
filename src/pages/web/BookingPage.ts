import { Page, Locator } from "@playwright/test";
import { BasePage } from "../BasePage";

export class BookingPage extends BasePage {
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly phoneInput: Locator;
    readonly dateInput: Locator;
    readonly menuSelect: Locator;
    readonly quantityInput: Locator;
    readonly contentTextarea: Locator;
    readonly submitButton: Locator;
    readonly successMessage: Locator;
    readonly errorMessage: Locator;
    readonly dashboardElement: Locator;
    readonly notificationDropdown: Locator;
    readonly bookingLink: Locator;

    constructor(page: Page) {
        super(page);
        this.nameInput = page.locator("//input[@id='fullname-datban']");
        this.emailInput = page.locator("//input[@id='email-datban']");
        this.phoneInput = page.locator("//input[@id='phone-datban']");
        this.dateInput = page.locator("//input[@id='ngaydat-datban']");
        this.menuSelect = page.locator("//select[@id='thucdon-datban']");
        this.quantityInput = page.locator("//input[@id='soluong-datban']");
        this.contentTextarea = page.locator("//textarea[@id='content-datban']");
        this.submitButton = page.locator("//button[contains(text(),'ĐẶT BÀN NGAY')]");
        this.successMessage = page.locator("//div[@id='alert']").or(page.locator("//div[contains(@class, 'alert-success')]"));
        this.errorMessage = page.locator("//div[@id='alert']").or(page.locator("//div[contains(@class, 'alert-danger')]"));
        this.dashboardElement = page.locator("//span[@class='text-split']");
        this.notificationDropdown = page.locator("//li[@class='nav-item dropdown']//a[@class='nav-link']");
        this.bookingLink = page.locator("//a[contains(text(),'Đặt bàn')]");
    }

    /**
     * Điền thông tin vào form đặt bàn
     */
    async fillBookingForm(name: string, email: string, phone: string, date: string, quantity: string, content: string) {
        // Cuộn trang đến form đặt bàn
        await this.nameInput.scrollIntoViewIfNeeded();

        if (name !== undefined) {
            await this.nameInput.fill(name);
        }
        if (email !== undefined) {
            await this.emailInput.fill(email);
        }
        if (phone !== undefined) {
            await this.phoneInput.fill(phone);
        }
        if (date !== undefined) {
            await this.dateInput.evaluate((el: HTMLInputElement, val) => {
                el.type = 'date';
                el.value = val;
            }, date);
        }

        // Chọn thực đơn (chọn cái đầu tiên hợp lệ)
        const hasMenuSelect = await this.menuSelect.count() > 0;
        if (hasMenuSelect && await this.menuSelect.isVisible()) {
            const options = this.menuSelect.locator("option");
            const count = await options.count();
            if (count > 1) {
                // Lấy giá trị của option thứ 2 (index 1)
                const val = await options.nth(1).getAttribute("value");
                if (val) {
                    await this.menuSelect.selectOption(val);
                } else {
                    await this.menuSelect.selectOption({ index: 1 });
                }
            }
        }

        if (quantity !== undefined) {
            await this.quantityInput.fill(quantity);
        }
        if (content !== undefined) {
            await this.contentTextarea.fill(content);
        }
    }

    /**
     * Submit form đặt bàn
     */
    async submitForm() {
        await this.submitButton.click({ force: true });
    }

    async goToBookingManagement() {
        await this.notificationDropdown.click();
        await this.bookingLink.click();
    }

    getBookingRow(identifier: string): Locator {
        return this.page.getByText(identifier).first();
    }

    async verifyBookingExists(identifier: string) {
        const targetCell = this.getBookingRow(identifier);
        await targetCell.waitFor({ state: 'visible', timeout: 10000 });
    }
}
