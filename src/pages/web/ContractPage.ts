import { Page, Locator, test } from "@playwright/test";
import { BasePage } from "../BasePage";

export class ContractPage extends BasePage {
    // Locators
    readonly fullnameInput: Locator;
    readonly phoneInput: Locator;
    readonly addressInput: Locator;
    readonly emailInput: Locator;
    readonly subjectInput: Locator;
    readonly contentTextarea: Locator;
    readonly sendButton: Locator;
    readonly resetButton: Locator;
    readonly successMessage: Locator;
    readonly dashboardElement: Locator;
    readonly notificationDropdown: Locator;
    readonly contactLink: Locator;
    readonly selectAllCheckbox: Locator;
    readonly deleteAllButton: Locator;
    readonly confirmDeleteButton: Locator;

    constructor(page: Page) {
        super(page);
        this.fullnameInput = page.locator("//input[@id='fullname-contact']");
        this.phoneInput = page.locator("//input[@id='phone-contact']");
        this.addressInput = page.locator("//input[@id='address-contact']");
        this.emailInput = page.locator("//input[@id='email-contact']");
        this.subjectInput = page.locator("//input[@id='subject-contact']");
        this.contentTextarea = page.locator("//textarea[@id='content-contact']");
        this.sendButton = page.locator("//button[contains(text(),'Gửi')]");
        this.resetButton = page.locator("//button[contains(text(),'Nhập lại')]");
        this.successMessage = page.locator("//div[@id='alert']");
        this.dashboardElement = page.locator("//span[@class='text-split']");
        this.notificationDropdown = page.locator("//li[@class='nav-item dropdown']//a[@class='nav-link']");
        this.contactLink = page.locator("//a[contains(text(),'Liên hệ')]");
        this.selectAllCheckbox = page.locator("//input[@id='selectall-checkbox']");
        this.deleteAllButton = page.locator("//div[@class='card-footer text-sm']//a[@id='delete-all']");
        this.confirmDeleteButton = page.locator("//button[contains(text(),'Đồng ý')]");
    }

    // Điền dữ liệu vào form liên hệ
    async fillContactForm(fullname: string, phone: string, address: string, email: string, subject: string, content: string) {
        await test.step(`Điền thông tin liên hệ: ${fullname}`, async () => {
            // Sử dụng pressSequentially thay vì fill() để mô phỏng người thật gõ phím
            // Google reCAPTCHA v3 chấm điểm hành vi, nếu điền bằng fill() quá nhanh (vài ms) nó sẽ phát hiện là Bot và đánh điểm cực thấp
            if (fullname) { await this.fullnameInput.clear(); await this.fullnameInput.pressSequentially(fullname, { delay: 50 }); }
            if (phone) { await this.phoneInput.clear(); await this.phoneInput.pressSequentially(phone, { delay: 50 }); }
            if (address) { await this.addressInput.clear(); await this.addressInput.pressSequentially(address, { delay: 50 }); }
            if (email) { await this.emailInput.clear(); await this.emailInput.pressSequentially(email, { delay: 50 }); }
            if (subject) { await this.subjectInput.clear(); await this.subjectInput.pressSequentially(subject, { delay: 50 }); }
            if (content) { await this.contentTextarea.clear(); await this.contentTextarea.pressSequentially(content, { delay: 50 }); }
        });
    }

    async gotoContactPage() {
        const baseUrl = process.env.BASE_URL?.endsWith('/') ? process.env.BASE_URL : process.env.BASE_URL + '/';
        await this.page.goto(baseUrl + 'lien-he');
    }

    // Bấm nút Gửi
    async clickSend() {
        await test.step("Bấm nút Gửi", async () => {
            await this.sendButton.evaluate((node) => node.removeAttribute('disabled'));
            await this.clickOn(this.sendButton);
        });
    }

    async clickReset() {
        await test.step("Bấm nút Nhập lại", async () => {
            await this.clickOn(this.resetButton);
        });
    }

    async goToContactManagement() {
        await test.step("Mở danh sách Liên hệ từ thông báo", async () => {
            await this.clickOn(this.notificationDropdown);
            await this.clickOn(this.contactLink);
        });
    }

    getContactRow(uniqueName: string): Locator {
        return this.page.getByText(uniqueName).first();
    }

    async verifyContactExists(uniqueName: string) {
        await test.step(`Xác nhận liên hệ có tên '${uniqueName}' xuất hiện trong Admin`, async () => {
            const targetCell = this.getContactRow(uniqueName);
            await targetCell.waitFor({ state: 'visible', timeout: 10000 });
        });
    }

    async deleteContact() {
        await test.step(`Xóa liên hệ`, async () => {
            await this.clickOn(this.selectAllCheckbox);
            await this.clickOn(this.deleteAllButton);
            await this.clickOn(this.confirmDeleteButton);
        });
    }
}
