import { Page, Locator, test, expect } from "@playwright/test";
import { BasePage } from "../BasePage";
import { TestHelper } from "../../utils/TestHelper";

export class ArticleBasePage extends BasePage {
    // Shared Locators
    readonly addNewButton: Locator;

    readonly titleInput: Locator;
    readonly slugInput: Locator;
    readonly descTextarea: Locator;
    readonly contentHtml: Locator;
    readonly imageUploadButton: Locator;
    readonly saveButton: Locator;

    readonly successAdminMessage: Locator;

    readonly confirmDeleteButton: Locator;

    // Bulk action locators
    readonly tableRows: Locator;
    readonly bulkDeleteBtn: Locator;

    // Copy item locators
    readonly firstCopyDropdownBtn: Locator;
    readonly copyNowBtn: Locator;
    readonly firstShowCheckbox: Locator;

    // Client-side generic locators
    readonly loadMoreBtn: Locator;

    // Product locators
    readonly codeInput: Locator;
    readonly regularPriceInput: Locator;
    readonly salePriceInput: Locator;
    readonly discountInput: Locator;
    readonly galleryUploadButton: Locator;

    readonly descviHtml: Locator;
    readonly contentviHtml: Locator;
    readonly thongsoviHtml: Locator;

    // Slug tab language locators
    readonly slugTabVi: Locator;
    readonly slugTabEn: Locator;

    // Content tab language locators
    readonly contentTabVi: Locator;
    readonly contentTabEn: Locator;

    // EN language field locators
    readonly slugEnInput: Locator;
    readonly titleEnInput: Locator;
    readonly descEnHtml: Locator;      // Dùng cho form sản phẩm (CKEditor)
    readonly descEnTextarea: Locator;  // Dùng cho form bài viết/dự án (textarea thường)
    readonly contentEnHtml: Locator;
    readonly thongsoEnHtml: Locator;

    // Properties to store child-specific data
    protected clientUrl!: string | string[];

    constructor(page: Page) {
        super(page);

        // Shared locators for generic admin interface
        this.addNewButton = page.locator("//div[@class='card-footer text-sm sticky-top']//a[@title='Thêm mới'][contains(text(),'Thêm mới')]");

        this.titleInput = page.locator("//input[@id='namevi']");
        this.slugInput = page.locator("(//input[@id='slugvi'])[1]");
        this.descTextarea = page.locator("//textarea[@id='descvi']");
        this.contentHtml = page.locator("iframe.cke_wysiwyg_frame");
        this.imageUploadButton = page.locator("//label[@id='photo-zone']");

        this.saveButton = page.locator("button[type='submit']").filter({ hasText: /^Lưu$|^Lưu và thoát$|^Lưu & thoát$/i }).first();

        this.confirmDeleteButton = page.locator("//button[contains(text(),'Đồng ý') or contains(text(),'OK')]");

        this.successAdminMessage = page.locator("//div[@class='card card-primary card-outline text-sm mb-0']");

        this.tableRows = page.locator('tbody tr');
        this.bulkDeleteBtn = page.locator("(//a[@id='delete-all'])[2]");

        this.firstCopyDropdownBtn = page.locator("(//a[@id='dropdownCopy'])[1]");
        this.copyNowBtn = page.locator("//ul[contains(@class,'show')]//a[contains(@class,'copy-now')]");
        this.firstShowCheckbox = page.locator("(//input[contains(@id,'show-checkbox-hienthi')])[1]");

        this.loadMoreBtn = page.locator("//a[contains(text(),'Xem thêm')]");

        // Cấu hình locators cho sản phẩm
        this.codeInput = page.locator("//input[@id='code']");
        this.regularPriceInput = page.locator("//input[@id='regular_price']");
        this.salePriceInput = page.locator("//input[@id='sale_price']");
        this.discountInput = page.locator("//input[@id='discount']");
        this.galleryUploadButton = page.locator("//div[@class='jFiler-input-inner']");

        this.descviHtml = page.frameLocator('#cke_descvi iframe.cke_wysiwyg_frame').locator('body');
        this.contentviHtml = page.frameLocator('#cke_contentvi iframe.cke_wysiwyg_frame').locator('body');
        this.thongsoviHtml = page.frameLocator('#cke_thongsovi iframe.cke_wysiwyg_frame').locator('body');

        // Slug tab locators (for switching VI/EN on slug section)
        this.slugTabVi = page.locator("//a[@href='#tabs-sluglang-vi']");
        this.slugTabEn = page.locator("//a[@href='#tabs-sluglang-en']");

        // Content tab locators (for switching VI/EN on content section)
        this.contentTabVi = page.locator("//a[@href='#tabs-lang-vi']");
        this.contentTabEn = page.locator("//a[@href='#tabs-lang-en']");

        // EN language field locators
        this.slugEnInput = page.locator("//input[@id='slugen']");
        this.titleEnInput = page.locator("//input[@id='nameen']");
        this.descEnHtml = page.frameLocator('#cke_descen iframe.cke_wysiwyg_frame').locator('body');
        this.descEnTextarea = page.locator("//textarea[@id='descen']");  // Dùng cho bài viết/dự án
        this.contentEnHtml = page.frameLocator('#cke_contenten iframe.cke_wysiwyg_frame').locator('body');
        this.thongsoEnHtml = page.frameLocator('#cke_thongsoen iframe.cke_wysiwyg_frame').locator('body');
    }

    // Removed gotoAdminMenu per user request

    async addArticle(
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
        const hasEnData = !!enData && Object.values(enData).some(v => !!v);

        await test.step(`Thêm bài viết mới: ${title}`, async () => {
            // Đảm bảo click và đợi trang form load xong (tránh lỗi Timeout chờ slugvi trên CI do chậm)
            await Promise.all([
                this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 }).catch(() => { }),
                this.clickOn(this.addNewButton)
            ]);

            // ===== PHẦN ĐƯỜNG DẪN (SLUG) =====
            // Luôn click tab VI trước khi nhập slug (web có tab thì click vào, không có tab thì bỏ qua)
            const slugTabViVisible = await this.slugTabVi.isVisible({ timeout: 2000 }).catch(() => false);
            if (slugTabViVisible) await this.clickOn(this.slugTabVi);
            if (slug) await this.typeInto(this.slugInput, slug);

            if (hasEnData && enData?.slugEn) {
                const slugTabEnVisible = await this.slugTabEn.isVisible({ timeout: 2000 }).catch(() => false);
                if (slugTabEnVisible) {
                    await this.clickOn(this.slugTabEn);
                    await this.typeInto(this.slugEnInput, enData.slugEn);
                    await this.clickOn(this.slugTabVi);
                }
            }

            // ===== PHẦN NỘI DUNG (VI) =====
            // Luôn click tab VI trước khi nhập nội dung (web có tab thì click vào, không có tab thì bỏ qua)
            const contentTabViVisible = await this.contentTabVi.isVisible({ timeout: 2000 }).catch(() => false);
            if (contentTabViVisible) await this.clickOn(this.contentTabVi);

            if (title) await this.typeInto(this.titleInput, title);
            if (desc) await this.typeInto(this.descTextarea, desc);

            if (content) {
                try {
                    await this.contentviHtml.fill(content, { timeout: 2000 });
                } catch (e) {
                    const frame = this.page.frameLocator("iframe.cke_wysiwyg_frame").first();
                    await frame.locator("body").fill(content);
                }
            }

            // ===== PHẦN NỘI DUNG (EN) — chỉ chạy nếu có enData =====
            if (hasEnData) {
                const contentTabEnVisible = await this.contentTabEn.isVisible({ timeout: 2000 }).catch(() => false);
                if (contentTabEnVisible) {
                    await this.clickOn(this.contentTabEn);

                    if (enData?.titleEn) await this.typeInto(this.titleEnInput, enData.titleEn);

                    // desc EN dùng textarea thường (không phải CKEditor)
                    if (enData?.descEn) await this.typeInto(this.descEnTextarea, enData.descEn);

                    if (enData?.contentEn) {
                        try {
                            await this.contentEnHtml.fill(enData.contentEn, { timeout: 2000 });
                        } catch (e) {
                            console.log('CẢNH BÁO: Không thể fill content EN qua frameLocator, bỏ qua.');
                        }
                    }
                }
            }

            // ===== PHẦN HÌNH ẢNH =====
            if (imagePath) {
                const fileChooserPromise = this.page.waitForEvent('filechooser');
                await this.clickOn(this.imageUploadButton);
                const fileChooser = await fileChooserPromise;
                await fileChooser.setFiles(imagePath);
                await TestHelper.delay(this.page, 3000);
            }

            await this.clickOn(this.saveButton);
        });
    }

    async addProduct(
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
        const hasEnData = !!enData && Object.values(enData).some(v => !!v);

        await test.step(`Thêm sản phẩm mới: ${title}`, async () => {
            // Đảm bảo click và đợi trang form load xong (tránh lỗi Timeout chờ slugvi trên CI do chậm)
            await Promise.all([
                this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 }).catch(() => { }),
                this.clickOn(this.addNewButton)
            ]);

            // ===== PHẦN ĐƯỜNG DẪN (SLUG) =====
            // Nếu có dữ liệu EN, click tab VI trước khi nhập slug VI
            if (hasEnData) {
                const slugTabViVisible = await this.slugTabVi.isVisible({ timeout: 2000 }).catch(() => false);
                if (slugTabViVisible) await this.clickOn(this.slugTabVi);
            }
            if (slug) await this.typeInto(this.slugInput, slug);

            // Nhập slug tiếng Anh nếu có
            if (hasEnData && enData?.slugEn) {
                const slugTabEnVisible = await this.slugTabEn.isVisible({ timeout: 2000 }).catch(() => false);
                if (slugTabEnVisible) {
                    await this.clickOn(this.slugTabEn);
                    await this.typeInto(this.slugEnInput, enData.slugEn);
                    // Quay lại tab VI sau khi nhập EN
                    await this.clickOn(this.slugTabVi);
                }
            }

            // ===== PHẦN GIÁ & MÃ SẢN PHẨM (không có tab ngôn ngữ) =====
            if (code) await this.typeInto(this.codeInput, code);
            if (regularPrice) await this.typeInto(this.regularPriceInput, regularPrice);
            if (salePrice) await this.typeInto(this.salePriceInput, salePrice);
            if (discount) await this.typeInto(this.discountInput, discount);

            // ===== PHẦN NỘI DUNG SẢN PHẨM (VI) =====
            // Nếu có dữ liệu EN, click tab VI trước khi nhập nội dung VI
            if (hasEnData) {
                const contentTabViVisible = await this.contentTabVi.isVisible({ timeout: 2000 }).catch(() => false);
                if (contentTabViVisible) await this.clickOn(this.contentTabVi);
            }

            if (title) await this.typeInto(this.titleInput, title);

            if (descHtml) {
                await this.descviHtml.fill(descHtml);
            }

            if (contentHtml) {
                try {
                    await this.contentviHtml.fill(contentHtml, { timeout: 2000 });
                } catch (e) {
                    const frame = this.page.frameLocator("iframe.cke_wysiwyg_frame").first();
                    await frame.locator("body").fill(contentHtml);
                }
            }

            if (thongsoHtml) {
                await this.thongsoviHtml.fill(thongsoHtml);
            }

            // ===== PHẦN NỘI DUNG SẢN PHẨM (EN) — chỉ chạy nếu có enData =====
            if (hasEnData) {
                const contentTabEnVisible = await this.contentTabEn.isVisible({ timeout: 2000 }).catch(() => false);
                if (contentTabEnVisible) {
                    await this.clickOn(this.contentTabEn);

                    if (enData?.titleEn) await this.typeInto(this.titleEnInput, enData.titleEn);

                    if (enData?.descEn) {
                        try {
                            await this.descEnHtml.fill(enData.descEn, { timeout: 2000 });
                        } catch (e) {
                            console.log('CẢNH BÁO: Không thể fill desc EN qua frameLocator, bỏ qua.');
                        }
                    }

                    if (enData?.contentEn) {
                        try {
                            await this.contentEnHtml.fill(enData.contentEn, { timeout: 2000 });
                        } catch (e) {
                            // Fallback nếu CKEditor EN chưa khởi tạo
                            console.log('CẢNH BÁO: Không thể fill content EN qua frameLocator, bỏ qua.');
                        }
                    }

                    if (enData?.thongsoEn) {
                        try {
                            await this.thongsoEnHtml.fill(enData.thongsoEn, { timeout: 2000 });
                        } catch (e) {
                            console.log('CẢNH BÁO: Không thể fill thongso EN qua frameLocator, bỏ qua.');
                        }
                    }
                }
            }

            // ===== PHẦN HÌNH ẢNH (không có tab ngôn ngữ) =====
            if (imagePath) {
                const fileChooserPromise = this.page.waitForEvent('filechooser');
                await this.clickOn(this.imageUploadButton);
                const fileChooser = await fileChooserPromise;
                await fileChooser.setFiles(imagePath);
                await TestHelper.delay(this.page, 3000);
            }

            if (galleryPaths && galleryPaths.length > 0) {
                const fileChooserPromise = this.page.waitForEvent('filechooser');
                await this.clickOn(this.galleryUploadButton);
                const fileChooser = await fileChooserPromise;
                await fileChooser.setFiles(galleryPaths);
                await TestHelper.delay(this.page, 3000);
            }

            await this.clickOn(this.saveButton);
        });
    }

    async verifyAdminSuccess() {
        await test.step("Xác nhận thông báo lưu thành công trong Admin", async () => {
            await this.successAdminMessage.waitFor({ state: 'visible', timeout: 5000 });
        });
    }

    async verifyOnWebsite(title: string) {
        await test.step(`Kiểm tra bài viết '${title}' hiển thị trên trang web`, async () => {
            const baseUrl = process.env.BASE_URL?.endsWith('/') ? process.env.BASE_URL : process.env.BASE_URL + '/';
            const urlsToTry = Array.isArray(this.clientUrl) ? this.clientUrl : [this.clientUrl];
            let found = false;

            for (const url of urlsToTry) {
                try {
                    await this.page.goto(baseUrl + url);
                    const articleItem = this.page.getByText(title, { exact: false }).first();
                    await articleItem.waitFor({ state: 'visible', timeout: 5000 });
                    found = true;
                    break; // Ngừng vòng lặp nếu tìm thấy
                } catch (error) {
                    // Tiếp tục vòng lặp thử URL tiếp theo
                }
            }

            if (!found) {
                throw new Error(`Không tìm thấy bài viết '${title}' trên các trang: ${urlsToTry.join(', ')}`);
            }
        });
    }

    async deleteArticle(title: string) {
        await test.step(`Xóa bài viết '${title}' trong Admin`, async () => {
            const dialogHandler = async (dialog: any) => {
                await dialog.accept();
            };
            this.page.on('dialog', dialogHandler);

            // Thực hiện tìm kiếm bài viết trước để đảm bảo bài viết nằm ở trang 1 (Tránh lỗi do Bulk Test đẩy bài viết sang trang 2)
            try {
                const searchInput = this.page.locator("input[placeholder*='Tìm kiếm' i], input#keyword, input[name='keyword']").first();
                const searchBtn = this.page.locator("button, a").filter({ has: this.page.locator(".fa-search") }).first();

                if (await searchInput.isVisible({ timeout: 2000 })) {
                    await searchInput.fill(title);
                    if (await searchBtn.isVisible({ timeout: 1000 })) {
                        await Promise.all([
                            this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 5000 }).catch(() => { }),
                            searchBtn.click()
                        ]);
                    } else {
                        await Promise.all([
                            this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 5000 }).catch(() => { }),
                            searchInput.press('Enter')
                        ]);
                    }
                    await TestHelper.delay(this.page, 1000);
                }
            } catch (error) {
                // Bỏ qua nếu không tìm thấy thanh tìm kiếm
            }

            // Đợi bảng dữ liệu load xong trước khi tìm row
            await this.tableRows.first().waitFor({ state: 'visible', timeout: 10000 }).catch(() => { });
            await TestHelper.delay(this.page, 500);

            const rowLocator = this.page.locator('tr').filter({ hasText: title }).first();

            try {
                // Chờ thẻ tr xuất hiện
                await rowLocator.waitFor({ state: 'attached', timeout: 5000 });

                // Dùng CSS Selector tìm đúng thẻ <a> bọc ngoài icon trash
                const deleteBtn = rowLocator.locator("a").filter({ has: this.page.locator(".fa-trash-alt, .fa-trash") }).first();
                await deleteBtn.waitFor({ state: 'visible', timeout: 3000 });
                await deleteBtn.click({ force: true });
            } catch (error) {
                // Fallback cho giao diện dạng list (div, li)
                const itemLocator = this.page.locator('div, li').filter({ hasText: title }).first();
                await itemLocator.waitFor({ state: 'attached', timeout: 3000 }).catch(() => { });

                const deleteBtn = itemLocator.locator("a").filter({ has: this.page.locator(".fa-trash-alt, .fa-trash") }).first();
                if (await deleteBtn.isVisible().catch(() => false) || await deleteBtn.count() > 0) {
                    await deleteBtn.click({ force: true }).catch(() => { });
                } else {
                    console.log(`Bỏ qua: Không tìm thấy nút xóa cho bài viết '${title}' (có thể đã bị xóa hoặc không tồn tại)`);
                }
            }

            // Chờ modal xác nhận (SweetAlert) nếu có
            await this.confirmDeleteButton.waitFor({ state: 'visible', timeout: 5000 }).catch(() => { });
            if (await this.confirmDeleteButton.isVisible()) {
                // Click Đồng ý và đợi load lại bảng để chắc chắn server đã xử lý xóa
                await Promise.all([
                    this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 }).catch(() => {
                        // Fallback nếu web dùng AJAX để xóa thay vì reload trang
                        return this.page.waitForLoadState('networkidle', { timeout: 3000 }).catch(() => { });
                    }),
                    this.confirmDeleteButton.click({ force: true })
                ]);
            }

            await TestHelper.delay(this.page, 2000);

            this.page.off('dialog', dialogHandler);
        });
    }

    async deleteArticlesWithPrefix(prefix: string) {
        await test.step(`Xóa hàng loạt các bài viết có tiền tố '${prefix}'`, async () => {
            let hasItemsToDelete = true;
            let emptyChecks = 0; // Đếm số lần không tìm thấy dữ liệu để retry

            while (hasItemsToDelete && emptyChecks < 3) {
                // Đợi cho mạng ổn định một chút phòng trường hợp AJAX đang tải dữ liệu bảng mới
                await this.page.waitForLoadState('domcontentloaded');
                await TestHelper.delay(this.page, 1500); // Thêm lại delay cứng nhỏ vì nếu web dùng AJAX thì loadState không bắt được

                hasItemsToDelete = false;
                const rows = await this.tableRows.all();
                let clickedCount = 0;

                for (const row of rows) {
                    const rowText = await row.innerText().catch(() => ""); // Bắt lỗi lỡ DOM bị detached

                    if (rowText.includes(prefix)) {
                        const rowCheckbox = row.locator('.select-checkbox').first();
                        if (await rowCheckbox.count() > 0) {
                            const isChecked = await rowCheckbox.evaluate((node: HTMLInputElement) => node.checked).catch(() => false);
                            if (!isChecked) {
                                await rowCheckbox.evaluate((node: HTMLElement) => node.click()).catch(() => { });
                            }
                            clickedCount++;
                            hasItemsToDelete = true;
                        }
                    }
                }

                if (clickedCount > 0) {
                    emptyChecks = 0; // Đã tìm thấy và xóa, reset lại biến đếm
                    const dialogHandler = async (dialog: any) => {
                        await dialog.accept();
                    };
                    this.page.on('dialog', dialogHandler);

                    // Click xóa hàng loạt
                    await this.bulkDeleteBtn.evaluate((el: HTMLElement) => el.click());
                    await this.confirmDeleteButton.waitFor({ state: 'visible', timeout: 1500 }).catch(() => { });

                    if (await this.confirmDeleteButton.isVisible().catch(() => false)) {
                        // Click Đồng ý và đợi load lại bảng
                        await Promise.all([
                            this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 }).catch(() => { }),
                            this.confirmDeleteButton.click({ force: true }).catch(() => { })
                        ]);
                    } else {
                        await this.page.waitForLoadState('domcontentloaded', { timeout: 5000 }).catch(() => { });
                    }

                    this.page.off('dialog', dialogHandler);

                    // Thêm khoảng nghỉ sau khi xác nhận xóa để hệ thống server/AJAX kịp xử lý xong
                    await TestHelper.delay(this.page, 2000);
                } else {
                    // Nếu không tìm thấy, có thể là do AJAX load chậm, ta tăng biến đếm và thử lại thay vì thoát luôn
                    emptyChecks++;
                    if (emptyChecks < 3) {
                        hasItemsToDelete = true; // Tiếp tục vòng lặp để thử lại
                        console.log(`Chưa thấy bài viết nào chứa '${prefix}', thử lại lần ${emptyChecks}...`);
                    }
                }
            }
        });
    }

    async copyFirstItemAndShow(): Promise<boolean> {
        const MAX_COPY_RETRIES = 3;

        for (let attempt = 1; attempt <= MAX_COPY_RETRIES; attempt++) {
            const dialogHandler = async (dialog: any) => {
                await dialog.accept();
            };
            this.page.on('dialog', dialogHandler);

            try {
                // Đảm bảo đang ở trang danh sách trước khi thao tác copy
                const isAtListBeforeCopy = await this.addNewButton.waitFor({ state: 'visible', timeout: 3000 }).then(() => true).catch(() => false);
                if (!isAtListBeforeCopy) {
                    console.log(`⚠ Lần thử ${attempt}: Không ở trang danh sách trước khi copy, đang vào lại qua menu...`);
                    if (typeof (this as any).gotoAdminMenu === 'function') {
                        await (this as any).gotoAdminMenu();
                    }
                    await this.addNewButton.waitFor({ state: 'visible', timeout: 5000 }).catch(() => { });
                }

                const copyBtn = this.page.locator("a.copy-now").first();

                // Mở dropdown bằng vòng lặp thử lại (tránh trường hợp JS chưa nhận click)
                let copyVisible = false;
                for (let i = 0; i < 3; i++) {
                    await this.firstCopyDropdownBtn.click({ force: true }).catch(() => { });
                    await copyBtn.waitFor({ state: 'visible', timeout: 500 }).catch(() => { });
                    if (await copyBtn.isVisible().catch(() => false)) {
                        copyVisible = true;
                        break;
                    }
                }

                if (!copyVisible) {
                    console.log(`⚠ Lần thử ${attempt}/${MAX_COPY_RETRIES}: Không tìm thấy nút Copy (Dropdown không hiển thị).`);
                    this.page.off('dialog', dialogHandler);

                    if (attempt < MAX_COPY_RETRIES) {
                        // Quay lại trang danh sách qua menu và thử lại
                        console.log(`   → Đang tự động quay lại trang danh sách để thử lại...`);
                        if (typeof (this as any).gotoAdminMenu === 'function') {
                            await (this as any).gotoAdminMenu();
                        }
                        await TestHelper.delay(this.page, 1000);
                        continue; // Thử lại từ đầu
                    }
                    // Hết số lần thử, ném lỗi
                    throw new Error("Lỗi: Không tìm thấy nút Copy (Dropdown không hiển thị) sau 3 lần thử! Kịch bản nhân bản thất bại.");
                }

                // Xóa href để tránh navigate sai
                await copyBtn.evaluate((el: HTMLAnchorElement) => {
                    el.removeAttribute('href');
                });

                // Xử lý Click và đợi Navigation đồng thời (Tốc độ tối đa, không cần delay)
                await Promise.all([
                    this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 5000 }).catch(() => { }),
                    copyBtn.evaluate((el: HTMLElement) => el.click()) // Dùng evaluate click để bỏ qua lỗi ẩn hiện của dropdown
                ]);

                // Xử lý confirm dialog nếu có (kiểm tra tức thời, không timeout)
                if (await this.confirmDeleteButton.isVisible().catch(() => false)) {
                    await this.confirmDeleteButton.click({ force: true }).catch(() => { });
                }

                // Chờ trang load xong sau khi copy
                await this.page.waitForLoadState('domcontentloaded', { timeout: 5000 }).catch(() => { });

                // Kiểm tra xem có bị văng ra dashboard/trang chủ hay không
                const afterCopyUrl = this.page.url();
                const isWrongPage = !afterCopyUrl.includes('act=man') || afterCopyUrl.endsWith('#');
                const isAtList = await this.addNewButton.waitFor({ state: 'visible', timeout: 3000 }).then(() => true).catch(() => false);

                if (isWrongPage || !isAtList) {
                    console.log(`⚠ Lần thử ${attempt}/${MAX_COPY_RETRIES}: Bị văng ra trang chủ sau khi Copy (URL: ${afterCopyUrl}).`);
                    this.page.off('dialog', dialogHandler);

                    if (attempt < MAX_COPY_RETRIES) {
                        console.log(`   → Đang tự động quay lại trang danh sách qua menu để thử copy lại...`);
                        if (typeof (this as any).gotoAdminMenu === 'function') {
                            await (this as any).gotoAdminMenu();
                        }
                        await this.addNewButton.waitFor({ state: 'visible', timeout: 5000 }).catch(() => { });
                        await TestHelper.delay(this.page, 1000);
                        continue; // Thử lại toàn bộ quá trình copy
                    }
                    // Hết số lần thử, vẫn vào lại trang danh sách nhưng báo lỗi copy thất bại
                    console.log(`❌ Đã thử ${MAX_COPY_RETRIES} lần nhưng vẫn bị văng ra trang chủ. Đang vào lại trang danh sách...`);
                    if (typeof (this as any).gotoAdminMenu === 'function') {
                        await (this as any).gotoAdminMenu();
                    }
                    await this.addNewButton.waitFor({ state: 'visible', timeout: 5000 }).catch(() => { });
                    return false; // Báo cho caller biết copy thất bại
                }

                // Copy thành công! Bật checkbox hiển thị
                await this.firstShowCheckbox.waitFor({ state: 'attached', timeout: 2000 }).catch(() => { });
                if (await this.firstShowCheckbox.count() > 0) {
                    const isChecked = await this.firstShowCheckbox.evaluate((node: HTMLInputElement) => node.checked).catch(() => true);
                    if (!isChecked) {
                        await this.firstShowCheckbox.evaluate((node: HTMLInputElement) => node.click()).catch(() => { });
                    }
                }

                this.page.off('dialog', dialogHandler);
                return true; // Copy thành công

            } catch (error) {
                this.page.off('dialog', dialogHandler);

                if (attempt < MAX_COPY_RETRIES) {
                    console.log(`⚠ Lần thử ${attempt}/${MAX_COPY_RETRIES}: Lỗi không mong muốn khi copy: ${(error as Error).message}`);
                    console.log(`   → Đang tự động quay lại trang danh sách để thử lại...`);
                    if (typeof (this as any).gotoAdminMenu === 'function') {
                        await (this as any).gotoAdminMenu();
                    }
                    await this.addNewButton.waitFor({ state: 'visible', timeout: 5000 }).catch(() => { });
                    await TestHelper.delay(this.page, 1000);
                    continue; // Thử lại
                }
                throw error; // Hết lần thử, ném lỗi gốc
            }
        }
        return false; // Fallback (không bao giờ chạy tới đây)
    }

    async addBulkArticlesManually(count: number, baseTitle: string, baseSlug: string, desc: string, content: string, imagePath: string) {
        for (let i = 1; i <= count; i++) {
            await test.step(`Thêm thủ công lần thứ ${i}`, async () => {
                const currentTitle = `${baseTitle} - ${i}`;
                const currentSlug = `${baseSlug}-${i}`;

                await this.addArticle(currentTitle, currentSlug, desc, content, imagePath);

                await this.verifyAdminSuccess();

                // Bấm vào nút "Click vào đây nếu không muốn đợi lâu" để tối ưu thời gian (bỏ qua chờ redirect tự động)
                const fastForwardLink = this.successAdminMessage.locator("//a[contains(text(),'Click vào đây nếu không muốn đợi lâu')]");
                if (await fastForwardLink.isVisible({ timeout: 1500 }).catch(() => false)) {
                    await Promise.all([
                        this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 5000 }).catch(() => { }),
                        fastForwardLink.click({ force: true })
                    ]);
                }

                // Chờ trang load xong
                await this.page.waitForLoadState('domcontentloaded', { timeout: 5000 }).catch(() => { });

                // Cơ chế chống văng ra Dashboard với retry: nếu bị văng thì tự vào lại qua menu
                for (let retryCount = 0; retryCount < 3; retryCount++) {
                    const isAtList = await this.addNewButton.waitFor({ state: 'visible', timeout: 5000 }).then(() => true).catch(() => false);
                    
                    if (isAtList) {
                        break; // Đã ở đúng trang danh sách, thoát vòng lặp
                    }

                    console.log(`⚠ Lần ${retryCount + 1}: Thêm thủ công lần ${i} - Không thấy trang danh sách, đang tự động vào lại qua menu...`);

                    // Thử click nút "Thoát" trước
                    const exitBtn = this.page.locator("a.btn-danger").filter({ hasText: /Thoát/i }).first();
                    if (await exitBtn.isVisible().catch(() => false)) {
                        await Promise.all([
                            this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 5000 }).catch(() => {}),
                            exitBtn.click({ force: true })
                        ]);
                    } else {
                        // Nếu web bị văng ra trang chủ admin, gọi lại gotoAdminMenu() qua thanh menu
                        if (typeof (this as any).gotoAdminMenu === 'function') {
                            await (this as any).gotoAdminMenu();
                        }
                    }

                    await TestHelper.delay(this.page, 1000);
                }
            });
        }
    }

    async copyBulkArticles(count: number) {
        let successCount = 0;
        let attempt = 0;
        const maxAttempts = count * 2; // Giới hạn số lần thử để tránh lặp vô hạn

        while (successCount < count && attempt < maxAttempts) {
            attempt++;
            await test.step(`Nhân bản lần thứ ${successCount + 1} (Lần thử ${attempt})`, async () => {
                // copyFirstItemAndShow đã tự xử lý retry và navigate lại nếu bị văng ra trang chủ
                const copySuccess = await this.copyFirstItemAndShow();

                if (copySuccess) {
                    successCount++;
                } else {
                    console.log(`⚠ Nhân bản lần ${successCount + 1} thất bại sau nhiều lần thử. Đang thử lại... (Đã thành công: ${successCount}/${count})`);
                }
            });
        }

        if (successCount < count) {
            throw new Error(`❌ Kết quả nhân bản thất bại: Chỉ đạt ${successCount}/${count} sau ${attempt} lần thử.`);
        } else {
            console.log(`✅ Kết quả nhân bản: Hoàn thành ${successCount}/${count} sau ${attempt} lần thử.`);
        }
    }

    async scrollToBottom() {
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
        await TestHelper.delay(this.page, 1000);
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await TestHelper.delay(this.page, 1000);
    }

    async getClientArticleCount(prefix?: string): Promise<number> {
        // Đếm dựa theo tiêu đề tự động sinh ra trong automation test (Chính xác nhất trên mọi web)
        if (prefix) {
            return await this.page.getByText(prefix).count();
        }
        // Fallback: Gom các class phổ biến thường dùng trên web để đếm
        return await this.page.locator('.news-item, .box-product, .box-news, .item-news, .project-item, .product-item, div[class*="item"]').count();
    }
}
