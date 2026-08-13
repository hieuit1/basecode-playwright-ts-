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
    }

    // Điền dữ liệu vào form liên hệ (Cố tình làm chậm để lừa reCAPTCHA)
    async fillContactForm(fullname: string, phone: string, address: string, email: string, subject: string, content: string) {
        await test.step(`Điền thông tin liên hệ: ${fullname}`, async () => {
            // const typingDelay = 50; // Delay 50ms giữa mỗi lần gõ phím (giống người thật)
            // const fieldDelay = 300; // Nghỉ 300ms giữa việc chuyển sang ô tiếp theo

            // if (fullname) { 
            //     await this.fullnameInput.click();
            //     await this.fullnameInput.pressSequentially(fullname, { delay: typingDelay }); 
            //     await this.page.waitForTimeout(fieldDelay);
            // }
            // if (phone) { 
            //     await this.phoneInput.click();
            //     await this.phoneInput.pressSequentially(phone, { delay: typingDelay }); 
            //     await this.page.waitForTimeout(fieldDelay);
            // }
            // if (address) { 
            //     await this.addressInput.click();
            //     await this.addressInput.pressSequentially(address, { delay: typingDelay }); 
            //     await this.page.waitForTimeout(fieldDelay);
            // }
            // if (email) { 
            //     await this.emailInput.click();
            //     await this.emailInput.pressSequentially(email, { delay: typingDelay }); 
            //     await this.page.waitForTimeout(fieldDelay);
            // }
            // if (subject) { 
            //     await this.subjectInput.click();
            //     await this.subjectInput.pressSequentially(subject, { delay: typingDelay }); 
            //     await this.page.waitForTimeout(fieldDelay);
            // }
            // if (content) { 
            //     await this.contentTextarea.click();
            //     await this.contentTextarea.pressSequentially(content, { delay: typingDelay }); 
            //     await this.page.waitForTimeout(fieldDelay);
            // }
            if (fullname) { await this.fullnameInput.fill(fullname); }
            if (phone) { await this.phoneInput.fill(phone); }
            if (address) { await this.addressInput.fill(address); }
            if (email) { await this.emailInput.fill(email); }
            if (subject) { await this.subjectInput.fill(subject); }
            if (content) { await this.contentTextarea.fill(content); }
        });
    }

    async gotoContactPage() {
        const baseUrl = process.env.BASE_URL?.endsWith('/') ? process.env.BASE_URL : process.env.BASE_URL + '/';
        await this.page.goto(baseUrl + 'lien-he');
    }

    // Bấm nút Gửi
    async clickSend() {
        await test.step("Bấm nút Gửi", async () => {
            // Đợi 2.5 giây để mô phỏng người dùng đọc lại form và chờ reCAPTCHA load token ngầm xong
            await this.page.waitForTimeout(3000);

            // Từ từ rê chuột vào nút Gửi giống người thật
            await this.sendButton.hover({ force: true });
            await this.page.waitForTimeout(1000); // Khựng lại nửa giây trước khi bấm

            // Bỏ disabled (nếu web set cứng) và click
            await this.sendButton.evaluate((node) => node.removeAttribute('disabled')).catch(() => { });
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

}
