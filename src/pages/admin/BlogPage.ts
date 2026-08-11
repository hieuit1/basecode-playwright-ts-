import { Page, Locator, test } from "@playwright/test";
import { ArticleBasePage } from "./ArticleBasePage";

export class BlogPage extends ArticleBasePage {
    protected parentMenu: Locator;
    protected subMenu: Locator;

    constructor(page: Page) {
        super(page);

        this.clientUrl = "blog";

        // Cấu hình riêng cho mục Blog
        this.parentMenu = page.locator("//a[@title='Quản lý bài viết']");
        this.subMenu = page.locator("//a[@title='BLOG']");
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
    async gotoAdminBlog() {
        await this.gotoAdminMenu();
    }

    async addBlog(
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
    async addArticle(title: string, slug: string, desc: string, content: string, imagePath: string, enData?: any) {
        // Nếu không có enData (do TestHelper gọi), tự động sinh dữ liệu tiếng Anh
        if (!enData) {
            enData = {
                titleEn: `${title} EN`,
                slugEn: `${slug}-en`,
                descEn: `English description for bulk test blog`,
                contentEn: `English content for bulk test blog`,
            };
        }
        await super.addArticle(title, slug, desc, content, imagePath, enData);
    }

    async verifyBlogInAdminSuccess() {
        await this.verifyAdminSuccess();
    }

    async verifyBlogOnWebsite(title: string) {
        await this.verifyOnWebsite(title);
    }

    async deleteBlog(title: string) {
        await this.deleteArticle(title);
    }

    // ========== Bulk Test Methods ==========
    async copyBulkBlogs(count: number) {
        await this.copyBulkArticles(count);
    }

    async deleteBulkBlogs(prefix: string) {
        await this.deleteArticlesWithPrefix(prefix);
    }
}
