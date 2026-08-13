import { Page, Locator, test } from "@playwright/test";
import { ArticleBasePage } from "./ArticleBasePage";

export class ProductPage extends ArticleBasePage {
  readonly groupproduct: Locator;
  readonly parentMenu: Locator;
  readonly subMenu: Locator;

  constructor(page: Page) {
    super(page);

    // Cấu hình riêng cho mục Sản phẩm
    this.groupproduct = page.locator("//a[@title='Group Sản Phẩm']");
    this.parentMenu = page.locator("(//a[@title='Sản phẩm'])[1]");
    this.subMenu = page.locator("//a[@href='product?act=man&type=san-pham']");
    this.clientUrl = "san-pham";
  }

  async gotoAdminMenu() {
    await test.step("Mở menu", async () => {
      if (!(await this.parentMenu.isVisible().catch(() => false))) {
        const hasGroup = await this.groupproduct.isVisible({ timeout: 2000 }).catch(() => false);
        if (hasGroup) {
          await this.groupproduct.click();
          await this.parentMenu.waitFor({ state: 'visible', timeout: 5000 });
        }
      }

      await this.clickOn(this.parentMenu);

      await Promise.all([
        this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 }).catch(() => { }),
        this.subMenu.click({ force: true })
      ]);
    });
  }

  async gotoAdminProduct() {
    await this.gotoAdminMenu();
  }

  async addNewProduct(
    title: string,
    slug: string,
    code: string,
    regularPrice: string,
    salePrice: string,
    discount: string,
    descHtml: string,
    contentHtml: string,
    thongsoHtml: string,
    imagePath: string,
    galleryPaths?: string[],
    enData?: {
      titleEn?: string;
      slugEn?: string;
      descEn?: string;
      contentEn?: string;
      thongsoEn?: string;
    }
  ) {
    await this.addProduct(title, slug, code, regularPrice, salePrice, discount, descHtml, contentHtml, thongsoHtml, imagePath, galleryPaths, enData);
  }

  // Ghi đè phương thức addArticle của ArticleBasePage để dùng cho bulk test (TestHelper gọi hàm này)
  async addArticle(title: string, slug: string, desc: string, content: string, imagePath: string) {
    await this.addProduct(
      title,
      slug,
      `SP-AUTO-${Date.now()}`,
      "100000",
      "90000",
      "10",
      desc,       // descHtml (VI)
      content,    // contentHtml (VI)
      "",         // thongsoHtml
      imagePath,
      undefined,  // galleryPaths
      {
        titleEn: `${title} EN`,
        slugEn: `${slug}-en`,
        descEn: `English description for bulk test product`,
        contentEn: `English content for bulk test product`,
      }
    );
  }

  async verifyProductInAdminSuccess() {
    await this.verifyAdminSuccess();
  }

  async verifyProductOnWebsite(title: string) {
    await this.verifyOnWebsite(title);
  }

  async deleteProduct(title: string) {
    await this.deleteArticle(title);
  }

  // ========== Bulk Test Methods ==========
  async copyBulkProduct(count: number) {
    await this.copyBulkArticles(count);
  }

  async deleteBulkProduct(prefix: string) {
    await this.deleteArticlesWithPrefix(prefix);
  }
}
