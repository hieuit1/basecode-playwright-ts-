import { Page, Locator, test } from "@playwright/test";
import { ArticleBasePage } from "./ArticleBasePage";

export class TechDocPage extends ArticleBasePage {
    readonly parentMenu: Locator;
    readonly subMenu: Locator;

    constructor(page: Page) {
        super(page);

        // Cấu hình riêng cho mục Tài liệu kỹ thuật
        this.parentMenu = page.locator("//a[@title='Quản lý bài viết']");
        this.subMenu = page.locator("//a[@title='Tài liệu kỹ thuật']");
        this.clientUrl = "tai-lieu-ky-thuat";
    }

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


    // Các hàm bọc (wrapper) để dễ đọc trong spec
    async gotoAdminTechDoc() {
        await this.gotoAdminMenu();
    }

    async addTechDoc(
        title: string,
        slug: string,
        desc: string,
        content: string,
        imagePath: string,
        enData?: {
            titleEn?: string;
            slugEn?: string;
            descEn?: string;
            contentEn?: string;
        }
    ) {
        await this.addArticle(title, slug, desc, content, imagePath, enData);
    }

    // Ghi đè addArticle để dùng cho bulk test (TestHelper gọi hàm này với 5 tham số)
    // Tự động thêm dữ liệu tiếng Anh vào để test bulk
    async addArticle(title: string, slug: string, desc: string, content: string, imagePath: string, enData?: any) {
        // Nếu không có enData (do TestHelper gọi), tự động sinh dữ liệu tiếng Anh
        if (!enData) {
            enData = {
                titleEn: `${title} EN`,
                slugEn: `${slug}-en`,
                descEn: `English description for bulk test tech doc`,
                contentEn: `English content for bulk test tech doc`,
            };
        }
        await super.addArticle(title, slug, desc, content, imagePath, enData);
    }

    async verifyTechDocInAdminSuccess() {
        await this.verifyAdminSuccess();
    }

    async verifyTechDocOnWebsite(title: string) {
        await this.verifyOnWebsite(title);
    }

    async deleteTechDoc(title: string) {
        await this.deleteArticle(title);
    }



    // ========== Bulk Test Methods ==========
    async copyBulkTechDocs(count: number) {
        await this.copyBulkArticles(count);
    }

    async deleteBulkTechDocs(prefix: string) {
        await this.deleteArticlesWithPrefix(prefix);
    }
}
