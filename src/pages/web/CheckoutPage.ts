import { Page, Locator, test, expect } from "@playwright/test";
import { BasePage } from "../BasePage";

export class CheckoutPage extends BasePage {
    // ===== LOCATORS (Frontend Checkout) =====
    readonly paymentCOD: Locator;
    readonly paymentBank: Locator;

    readonly fullnameInput: Locator;
    readonly phoneInput: Locator;
    readonly emailInput: Locator;

    readonly cityDropdownContainer: Locator;
    readonly wardDropdownContainer: Locator;
    readonly addressInput: Locator;
    readonly requirementsInput: Locator;

    readonly submitButton: Locator;

    // ===== LOCATORS (Success Page) =====
    readonly successMessage: Locator;
    readonly orderIdText: Locator;

    // ===== LOCATORS (Admin Verification) =====
    readonly notificationDropdown: Locator;
    readonly orderMenu: Locator;
    readonly orderTable: Locator;

    constructor(page: Page) {
        super(page);

        // Checkout Form
        this.paymentCOD = page.locator("//input[@id='payments-37']");
        this.paymentBank = page.locator("//input[@id='payments-38']");

        this.fullnameInput = page.locator("//input[@id='fullname']");
        this.phoneInput = page.locator("//input[@id='phone']");
        this.emailInput = page.locator("//input[@id='email']");

        this.cityDropdownContainer = page.locator("//span[@id='select2-city-container']");
        this.wardDropdownContainer = page.locator("//span[@id='select2-ward-container']");
        this.addressInput = page.locator("//input[@id='address']");
        this.requirementsInput = page.locator("//textarea[@id='requirements']");

        this.submitButton = page.locator("//button[normalize-space()='Thanh toán']");

        // Success Page
        this.successMessage = page.locator("text=Đặt hàng thành công!");
        this.orderIdText = page.locator("//h3[contains(@class, 'text-primary')]"); // Ví dụ: #WDVNDB

        // Admin
        this.notificationDropdown = page.locator("//li[@class='nav-item dropdown']//a[@class='nav-link']");
        this.orderMenu = page.locator("//a[contains(text(),'Đơn hàng')]");
        this.orderTable = page.locator("//div[@class='card card-primary card-outline text-sm mb-0']");
    }

    // ===== METHODS =====

    async fillCheckoutForm(customer: any) {
        await test.step("Điền thông tin khách hàng và giao hàng", async () => {
            // Điền thông tin cá nhân
            await this.typeInto(this.fullnameInput, customer.fullname);
            await this.typeInto(this.phoneInput, customer.phone);
            await this.typeInto(this.emailInput, customer.email);

            // Chọn ngẫu nhiên Tỉnh/Thành phố
            await this.cityDropdownContainer.click();
            await this.page.waitForTimeout(500); // Đợi dropdown mở

            const cityOptions = this.page.locator("li.select2-results__option:not([aria-disabled='true'])");
            await cityOptions.first().waitFor({ state: 'visible', timeout: 5000 });
            let cityCount = await cityOptions.count();
            // Lấy ngẫu nhiên từ index 1 trở đi nếu option 0 là "Chọn tỉnh/thành phố" (thường không có aria-disabled='true' nếu không được config kỹ)
            let randomCityIndex = Math.floor(Math.random() * (cityCount - 1)) + 1;
            // Nếu vô tình chỉ có 1 option (ko tính option mặc định)
            if (cityCount <= 1) randomCityIndex = 0;
            await cityOptions.nth(randomCityIndex).click();

            // Đợi danh sách phường xã load
            await this.page.waitForTimeout(2000);

            // Chọn ngẫu nhiên Phường/Xã
            await this.wardDropdownContainer.click();
            await this.page.waitForTimeout(500); // Đợi dropdown mở

            const wardOptions = this.page.locator("li.select2-results__option:not([aria-disabled='true'])");
            await wardOptions.first().waitFor({ state: 'visible', timeout: 5000 });
            let wardCount = await wardOptions.count();
            let randomWardIndex = Math.floor(Math.random() * (wardCount - 1)) + 1;
            if (wardCount <= 1) randomWardIndex = 0;
            await wardOptions.nth(randomWardIndex).click();

            // Điền địa chỉ và yêu cầu
            await this.typeInto(this.addressInput, customer.address);
            if (customer.requirements) {
                await this.typeInto(this.requirementsInput, customer.requirements);
            }
        });
    }

    async selectPaymentMethod(method: 'cod' | 'bank') {
        await test.step(`Chọn phương thức thanh toán: ${method}`, async () => {
            if (method === 'cod') {
                await this.paymentCOD.click({ force: true });
            } else {
                await this.paymentBank.click({ force: true });
            }
            await this.page.waitForTimeout(500); // Đợi UI update
        });
    }

    async submitOrder() {
        await test.step("Bấm nút Thanh Toán", async () => {
            await this.submitButton.click({ force: true });
        });
    }

    async verifyOrderFailed() {
        await test.step("Xác nhận Đặt hàng không thành công (Negative test)", async () => {
            await expect(this.successMessage).toBeHidden({ timeout: 3000 });
        });
    }

    async verifyOrderSuccessAndGetId(): Promise<string> {
        return await test.step("Xác nhận thông báo thành công và lấy mã Đơn hàng", async () => {
            await this.successMessage.waitFor({ state: 'visible', timeout: 15000 });
            const orderIdStr = await this.orderIdText.textContent() || '';
            const cleanOrderId = orderIdStr.trim();
            return cleanOrderId;
        });
    }

    async gotoAdminOrders() {
        await test.step("Truy cập trang Quản lý Đơn hàng (Admin)", async () => {
            await this.notificationDropdown.click();
            await this.orderMenu.click();
            await this.page.waitForLoadState('domcontentloaded');
        });
    }

    async verifyOrderInAdminTable(orderId: string) {
        await test.step(`Kiểm tra mã đơn hàng ${orderId} hiển thị trên bảng Admin`, async () => {
            await this.orderTable.waitFor({ state: 'visible', timeout: 10000 });

            // Mã đơn hàng thường bắt đầu bằng #WDVNDB nhưng trong bảng có thể không có dấu #
            const rawId = orderId.replace('#', '');

            // Tìm locator chứa text mã đơn hàng
            const orderRow = this.orderTable.locator(`text="${rawId}"`);

            const isVisible = await orderRow.first().isVisible();
            if (isVisible) {
                console.log(`✅ Tìm thấy đơn hàng ${orderId} trong bảng Admin!`);
            } else {
                throw new Error(`❌ Không tìm thấy đơn hàng ${orderId} trong trang Admin.`);
            }
        });
    }
}
