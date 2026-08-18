import { Page, Locator, test } from "@playwright/test";
import { ArticleBasePage } from "./ArticleBasePage";
import { TestHelper } from "../../utils/TestHelper";

export class ProjectPage extends ArticleBasePage {
    protected parentMenu: Locator;
    protected subMenu: Locator;

    constructor(page: Page) {
        super(page);

        this.clientUrl = "du-an";

        // Cấu hình riêng cho mục Dự án
        this.parentMenu = page.locator("//a[@title='Quản lý bài viết']");
        this.subMenu = page.locator("//a[@title='Dự án']");
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
    async gotoAdminProject() {
        await this.gotoAdminMenu();
    }

    async addProject(
        title: string,
        slug: string,
        numb: string,
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
        await this.addArticle(title, slug, desc, content, imagePath, enData, numb);
    }

    // Ghi đè addArticle để dùng cho bulk test (TestHelper gọi hàm này với 5 tham số)
    // Tự động thêm dữ liệu tiếng Anh vào để test bulk
    async addArticle(title: string, slug: string, desc: string, content: string, imagePath: string, enData?: any, numb?: string) {
        // Nếu không có enData (do TestHelper gọi), tự động sinh dữ liệu tiếng Anh
        if (!enData) {
            enData = {
                titleEn: `${title} EN`,
                slugEn: `${slug}-en`,
                descEn: `English description for bulk test project`,
                contentEn: `English content for bulk test project`,
            };
        }
        await super.addArticle(title, slug, desc, content, imagePath, enData, numb || "0");
    }

    async verifyProjectInAdminSuccess() {
        await this.verifyAdminSuccess();
    }

    async verifyProjectOnWebsite(title: string) {
        await this.verifyOnWebsite(title);
    }



    async deleteProject(title: string) {
        await this.deleteArticle(title);
    }

    // ========== Bulk Test Methods ==========
    async copyBulkProjects(count: number) {
        await this.copyBulkArticles(count);
    }

    async deleteBulkProjects(prefix: string) {
        await this.deleteArticlesWithPrefix(prefix);
    }
}
