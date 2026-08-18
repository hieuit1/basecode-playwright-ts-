import { Page, Locator, test } from "@playwright/test";
import { ArticleBasePage } from "./ArticleBasePage";

export class ServiceCategory1Page extends ArticleBasePage {
    readonly parentMenu: Locator;
    readonly subMenu: Locator;

    constructor(page: Page) {
        super(page);
        this.parentMenu = page.locator("//a[@title='Quản lý Dịch vụ']");
        this.subMenu = page.locator("//a[@href='news?act=man_list&type=dich-vu']");
        this.clientUrl = "dich-vu";
    }

    // method 

    async gotoAdminMenu() {
        await test.step("Mở menu", async () => {
            // Đợi parent menu ổn định trước khi thao tác
            await this.parentMenu.waitFor({ state: 'visible' });

            // Kiểm tra nếu submenu chưa hiển thị thì mới click parent
            if (!(await this.subMenu.isVisible())) {
                await this.parentMenu.click();
            }

            // Đợi submenu hiển thị rõ ràng và kết thúc animation
            await this.subMenu.waitFor({ state: 'visible' });
            
            // Dùng click force: true trong trường hợp AdminLTE menu hay bị che lấp nhẹ
            await Promise.all([
                this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 }).catch(() => { }),
                this.subMenu.click({ force: true })
            ]);
        });
    }

    // method extends from ArticleBasePage
    async gotoAdminServiceCategory1() {
        await this.gotoAdminMenu();
    }

    async addArticle(title: string, slug: string, desc: string, content: string, imagePath: string, enData?: any, numb?: string) {
        if (!enData) {
            enData = {
                titleEn: `${title} EN`,
                slugEn: `${slug}-en`,
                contentEn: `English content for bulk test Service Category 1`,
            };
        }
        
        // Dịch vụ cấp 1 không dùng trường mô tả (bị ẩn hoặc là CKEditor), nên ta bỏ qua cả desc vi và desc en
        const processedEnData = { ...enData };
        delete processedEnData.descEn;

        await super.addArticle(title, slug, "", content, imagePath, processedEnData, numb || "0");
    }

    async addServiceCategory1(title: string, slug: string, numb: string, desc: string, content: string, imagePath: string, enData?: any) {
        await this.addArticle(title, slug, desc, content, imagePath, enData, numb);
    }

    async verifyServiceCategory1InAdminSuccess() {
        await this.verifyAdminSuccess();
    }

    async verifyServiceCategory1OnWebsite(title: string) {
        await test.step(`Kiểm tra danh mục '${title}' hiển thị trên trang web`, async () => {
            const baseUrl = process.env.BASE_URL?.endsWith('/') ? process.env.BASE_URL : process.env.BASE_URL + '/';
            await this.page.goto(baseUrl + this.clientUrl);

            const articleItem = this.page.getByText(title, { exact: false }).first();
            await articleItem.waitFor({ state: 'attached', timeout: 5000 });
        });
    }

    async deleteServiceCategory1(title: string) {
        await this.deleteArticle(title);
    }

    // ========== Bulk Test Methods ==========
    async deleteBulkServiceCategory1(prefix: string) {
        await this.deleteArticlesWithPrefix(prefix);
    }
}
