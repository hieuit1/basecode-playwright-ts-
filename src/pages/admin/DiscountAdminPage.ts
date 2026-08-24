import { Page, Locator, test } from "@playwright/test";
import { BasePage } from "../BasePage";
import { DiscountFormData } from "../../utils/DiscountDataGenerator";


export class DiscountAdminPage extends BasePage {

    // ===== MENU NAVIGATION =====
    readonly discountMenu: Locator;

    // ===== SHARED ADMIN LOCATORS (giống ArticleBasePage) =====
    readonly addNewButton: Locator;
    readonly saveButton: Locator;
    readonly successAdminMessage: Locator;

    // ===== FORM FIELDS =====
    readonly codeNameInput: Locator;
    readonly percentInput: Locator;
    readonly maxDiscountInput: Locator;
    readonly usageCountInput: Locator;
    readonly expiryDateInput: Locator;
    readonly descriptionTextarea: Locator;
    readonly visibleCheckbox: Locator;
    readonly specialCheckbox: Locator;

    // ── Timeout cấu hình ──
    protected readonly ADMIN_ACTION_TIMEOUT = 15000;

    constructor(page: Page) {
        super(page);

        // Menu — click trực tiếp, không qua menu cha
        this.discountMenu = page.locator("//a[@href='discount?act=man']");

        // Shared admin locators (giống ArticleBasePage)
        this.addNewButton = page.locator(
            "//div[@class='card-footer text-sm sticky-top']//a[@title='Thêm mới'][contains(text(),'Thêm mới')]"
        );
        this.saveButton = page.locator("button[type='submit']")
            .filter({ hasText: /^Lưu$|^Lưu và thoát$|^Lưu \& thoát$/i })
            .first();
        this.successAdminMessage = page.locator(
            "//div[@class='card card-primary card-outline text-sm mb-0']"
        );

        // Form fields
        this.codeNameInput = page.locator("//input[@id='tenma']");
        this.percentInput = page.locator("//input[@id='phantram']");
        this.maxDiscountInput = page.locator("//input[@id='giamax']");
        this.usageCountInput = page.locator("//input[@id='solansudung']");
        this.expiryDateInput = page.locator("//input[@id='ngayhethan']");
        this.descriptionTextarea = page.locator("//textarea[@id='mota']");
        this.visibleCheckbox = page.locator("//label[@for='status-hienthi']");
        this.specialCheckbox = page.locator("//label[contains(text(),'Đặc biệt')]");
    }

    // ===== NAVIGATION =====

    /**
     * Điều hướng đến trang Quản lý Mã giảm giá
     * Click trực tiếp vào menu (không qua menu cha)
     */
    async gotoDiscountManagement() {
        await test.step("Mở trang Quản lý Mã giảm giá", async () => {
            await this.discountMenu.waitFor({ state: 'visible' });
            await Promise.all([
                this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 }).catch(() => { }),
                this.discountMenu.click({ force: true })
            ]);
        });
    }

    async createDiscountCode(data: DiscountFormData) {
        await test.step(`Tạo mã giảm giá: ${data.codeName}`, async () => {
            // Click nút "Thêm mới" và đợi trang form load
            await Promise.all([
                this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 }).catch(() => { }),
                this.clickOn(this.addNewButton)
            ]);

            // Đợi form sẵn sàng
            await this.codeNameInput.waitFor({ state: 'visible', timeout: 10000 });

            // Điền thông tin mã giảm giá
            await this.typeInto(this.codeNameInput, data.codeName);
            await this.typeInto(this.percentInput, data.percent);
            await this.typeInto(this.maxDiscountInput, data.maxDiscount);
            await this.typeInto(this.usageCountInput, data.usageCount);

            // Xử lý ngày hết hạn
            await this.expiryDateInput.waitFor({ state: 'visible' });
            await this.expiryDateInput.fill(data.expiryDate);

            // Mô tả
            await this.descriptionTextarea.fill(data.description);

            // Checkbox Hiển thị
            if (data.isVisible) {
                await this.visibleCheckbox.waitFor({ state: 'visible' });
                await this.visibleCheckbox.click();
            }

            // Checkbox Đặc biệt
            if (data.isSpecial) {
                await this.specialCheckbox.waitFor({ state: 'visible' });
                await this.specialCheckbox.click();
            }

            // Click Lưu
            await this.clickOn(this.saveButton);
        });
    }

    // ===== VERIFICATION =====

    /**
     * Xác nhận tạo mã giảm giá thành công (thông báo success trên Admin)
     * Pattern giống ArticleBasePage.verifyAdminSuccess()
     */
    async verifyCreateSuccess() {
        await test.step("Xác nhận tạo mã giảm giá thành công", async () => {
            await this.page.waitForLoadState('domcontentloaded', { timeout: this.ADMIN_ACTION_TIMEOUT }).catch(() => { });
            await this.successAdminMessage.waitFor({ state: 'visible', timeout: this.ADMIN_ACTION_TIMEOUT });
        });
    }
}
