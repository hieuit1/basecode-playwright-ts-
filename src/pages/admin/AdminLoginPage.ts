import { Page, Locator, test } from "@playwright/test";
import { BasePage } from "../BasePage";

export class AdminLoginPage extends BasePage {
    // Locators
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly dashboardElement: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.locator("//input[@id='username']");
        this.passwordInput = page.locator("//input[@id='password']");
        this.loginButton = page.locator("//button[@class='login-btn btn-login']");
        this.errorMessage = page.locator("//div[@role='alert']");
        this.dashboardElement = page.locator("//span[@class='text-split']");
    }

    async fillLoginForm(username?: string, password?: string) {
        await test.step(`Điền thông tin đăng nhập`, async () => {
            if (username !== undefined && username !== null && username !== "") {
                await this.typeInto(this.usernameInput, username);
            } else if (username === "") {
                await this.usernameInput.fill("");
            }

            if (password !== undefined && password !== null && password !== "") {
                await this.typeInto(this.passwordInput, password);
            } else if (password === "") {
                await this.passwordInput.fill("");
            }
        });
    }

    async gotoLoginPage() {
        const baseUrl = process.env.BASE_URL?.endsWith('/') ? process.env.BASE_URL : process.env.BASE_URL + '/';
        const loginUrl = baseUrl + 'madmin/login';
        const MAX_RETRIES = 3;

        for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
            try {
                await this.page.goto(loginUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
                return; // Thành công → thoát
            } catch (error) {
                console.log(`⚠ Truy cập Admin lần ${attempt}/${MAX_RETRIES} thất bại: ${(error as Error).message.split('\n')[0]}`);
                if (attempt === MAX_RETRIES) {
                    throw new Error(
                        `❌ Không thể truy cập trang Admin sau ${MAX_RETRIES} lần thử.\n` +
                        `URL: ${loginUrl}\n` +
                        `Nguyên nhân phổ biến: Server chặn IP nước ngoài (CI/CD), WAF/Firewall, hoặc mạng không ổn định.\n` +
                        `Lỗi gốc: ${(error as Error).message}`
                    );
                }
                // Đợi trước khi thử lại (3s, 6s, 9s...)
                await this.page.waitForTimeout(attempt * 3000);
            }
        }
    }

    async clickLogin() {
        await test.step("Bấm nút Đăng nhập", async () => {
            await this.clickOn(this.loginButton);
        });
    }
}
