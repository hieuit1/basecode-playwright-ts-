# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin/product.spec.ts >> Product Management Tests >> Bulk insert 35 products via Copy and verify Load More on website
- Location: tests/admin/product.spec.ts:147:13

# Error details

```
Test timeout of 600000ms exceeded.
```

```
Error: locator.click: Target page, context or browser has been closed
```

# Test source

```ts
  1   | import { Page, Locator, test } from "@playwright/test";
  2   | import { ArticleBasePage } from "./ArticleBasePage";
  3   | 
  4   | export class ProductPage extends ArticleBasePage {
  5   |   readonly groupproduct: Locator;
  6   |   readonly parentMenu: Locator;
  7   |   readonly subMenu: Locator;
  8   | 
  9   |   constructor(page: Page) {
  10  |     super(page);
  11  | 
  12  |     // Cấu hình riêng cho mục Sản phẩm
  13  |     this.groupproduct = page.locator("//a[@title='Group Sản Phẩm']");
  14  |     this.parentMenu = page.locator("(//a[@title='Sản phẩm'])[1]");
  15  |     this.subMenu = page.locator("//a[@href='product?act=man&type=san-pham']");
  16  |     this.clientUrl = "san-pham";
  17  |   }
  18  | 
  19  |   async gotoAdminMenu() {
  20  |     await test.step("Mở menu", async () => {
  21  |       // 1. Kiểm tra xem submenu đã hiển thị chưa
  22  |       if (!(await this.subMenu.isVisible().catch(() => false))) {
  23  |         // 2. Kiểm tra xem parent menu có đang bị ẩn không
  24  |         if (!(await this.parentMenu.isVisible().catch(() => false))) {
  25  |           const hasGroup = await this.groupproduct.isVisible({ timeout: 2000 }).catch(() => false);
  26  |           if (hasGroup) {
  27  |             await this.groupproduct.click({ force: true }).catch(() => { });
  28  |             await this.parentMenu.waitFor({ state: 'visible', timeout: 3000 }).catch(() => { });
  29  |           }
  30  |         }
  31  | 
  32  |         // 3. Click vào parentMenu
  33  |         // Dùng force: true hoặc DOM click để tránh lỗi Playwright báo "element is not visible" trên CI
  34  |         try {
  35  |           await this.parentMenu.click({ force: true, timeout: 3000 });
  36  |         } catch (e) {
  37  |           await this.parentMenu.evaluate((el: HTMLElement) => el.click()).catch(() => { });
  38  |         }
  39  |       }
  40  | 
  41  |       // Đợi submenu hiển thị
  42  |       await this.subMenu.waitFor({ state: 'visible', timeout: 5000 }).catch(() => { });
  43  | 
  44  |       // Click vào submenu
  45  |       await Promise.all([
  46  |         this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 }).catch(() => { }),
  47  |         this.subMenu.evaluate((el: HTMLElement) => el.click()).catch(async () => {
> 48  |           await this.subMenu.click({ force: true });
      |                              ^ Error: locator.click: Target page, context or browser has been closed
  49  |         })
  50  |       ]);
  51  |     });
  52  |   }
  53  | 
  54  |   async gotoAdminProduct() {
  55  |     await this.gotoAdminMenu();
  56  |   }
  57  | 
  58  |   async addNewProduct(
  59  |     title: string,
  60  |     slug: string,
  61  |     numb: string,
  62  |     code: string,
  63  |     regularPrice: string,
  64  |     salePrice: string,
  65  |     discount: string,
  66  |     descHtml: string,
  67  |     contentHtml: string,
  68  |     thongsoHtml: string,
  69  |     imagePath: string,
  70  |     galleryPaths?: string[],
  71  |     enData?: {
  72  |       titleEn?: string;
  73  |       slugEn?: string;
  74  |       descEn?: string;
  75  |       contentEn?: string;
  76  |       thongsoEn?: string;
  77  |     }
  78  |   ) {
  79  |     await this.addProduct(title, slug, numb, code, regularPrice, salePrice, discount, descHtml, contentHtml, thongsoHtml, imagePath, galleryPaths, enData);
  80  |   }
  81  | 
  82  |   // Ghi đè phương thức addArticle của ArticleBasePage để dùng cho bulk test (TestHelper gọi hàm này)
  83  |   async addArticle(title: string, slug: string, desc: string, content: string, imagePath: string) {
  84  |     await this.addProduct(
  85  |       title,
  86  |       slug,
  87  |       "0",
  88  |       `SP-AUTO-${Date.now()}`,
  89  |       "100000",
  90  |       "90000",
  91  |       "10",
  92  |       desc,       // descHtml (VI)
  93  |       content,    // contentHtml (VI)
  94  |       "",         // thongsoHtml
  95  |       imagePath,
  96  |       undefined,  // galleryPaths
  97  |       {
  98  |         titleEn: `${title} EN`,
  99  |         slugEn: `${slug}-en`,
  100 |         descEn: `English description for bulk test product`,
  101 |         contentEn: `English content for bulk test product`,
  102 |       }
  103 |     );
  104 |   }
  105 | 
  106 |   async verifyProductInAdminSuccess() {
  107 |     await this.verifyAdminSuccess();
  108 |   }
  109 | 
  110 |   async verifyProductOnWebsite(title: string) {
  111 |     await this.verifyOnWebsite(title);
  112 |   }
  113 | 
  114 |   async deleteProduct(title: string) {
  115 |     await this.deleteArticle(title);
  116 |   }
  117 | 
  118 |   // ========== Bulk Test Methods ==========
  119 |   async copyBulkProduct(count: number) {
  120 |     await this.copyBulkArticles(count);
  121 |   }
  122 | 
  123 |   async deleteBulkProduct(prefix: string) {
  124 |     await this.deleteArticlesWithPrefix(prefix);
  125 |   }
  126 | }
  127 | 
```