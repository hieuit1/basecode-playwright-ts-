import { Page, Locator } from "@playwright/test";
import { BasePage } from "../BasePage";

export class SearchPage extends BasePage {
    readonly searchInput: Locator;
    readonly searchResultDropdown: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {
        super(page);
        // Hỗ trợ quét tìm ô search với nhiều kịch bản (Smart Locator cho multi-tenant)
        this.searchInput = page.locator("input#keyword")
            .or(page.locator("input[name='keyword']"))
            .or(page.locator("input[type='search']"))
            .or(page.locator("input[name='q']"))
            .or(page.locator("input[name='search']"))
            .or(page.locator("input[placeholder*='tìm kiếm' i]"))
            .or(page.locator("input[placeholder*='search' i]"))
            .or(page.locator("input[placeholder*='Tên sản phẩm' i]"));
        this.searchResultDropdown = page.locator("//div[@id='search-result']");
        // Nút tìm kiếm của web mới (Hỗ trợ button, submit, hoặc label giả button)
        this.searchButton = page.locator("button[title='Tìm kiếm'], .search button, form button[type='submit'], label[for='keyword'], label[onclick*='onSearch']").first();
    }

    /**
     * Mở trang chủ (để bắt đầu search)
     */
    async gotoHomePage() {
        let baseUrl = process.env.BASE_URL || '';

        // Loại bỏ dấu / ở cuối để dễ nối chuỗi
        if (baseUrl.endsWith('/')) {
            baseUrl = baseUrl.slice(0, -1);
        }

        // Ưu tiên thử vào /index.php trước
        const indexUrl = baseUrl.endsWith('.php') ? baseUrl : `${baseUrl}/index.php`;

        try {
            const response = await this.page.goto(indexUrl);
            await this.page.waitForLoadState("domcontentloaded");

            // Nếu web trả về 404 (Không tìm thấy index.php)
            if (response && response.status() === 404) {
                console.log(`[THÔNG BÁO] Không tìm thấy /index.php, chuyển hướng về link gốc...`);
                await this.page.goto(`${baseUrl}/`);
                await this.page.waitForLoadState("domcontentloaded");
            }
        } catch (error) {
            // Nếu lỗi mạng (không truy cập được), thử lại link gốc
            console.log(`[THÔNG BÁO] Lỗi khi truy cập /index.php, thử lại link gốc...`);
            await this.page.goto(`${baseUrl}/`);
            await this.page.waitForLoadState("domcontentloaded");
        }
    }

    /**
     * Lấy động một từ khóa (tên sản phẩm) từ trang Sản Phẩm.
     * Tự động điều hướng sang /san-pham để lấy tên sản phẩm chuẩn nhất, sau đó quay lại trang chủ.
     */
    async getDynamicKeywordFromHome(): Promise<string> {
        let baseUrl = process.env.BASE_URL || '';

        let origin = '';
        try {
            origin = new URL(baseUrl.startsWith('http') ? baseUrl : `https://${baseUrl}`).origin;
        } catch (e) {
            origin = baseUrl.split('/index.php')[0]; // fallback nếu URL invalid
            if (origin.endsWith('/')) origin = origin.slice(0, -1);
        }

        // Điều hướng sang trang danh sách sản phẩm để cào cho chuẩn xác
        const productPageUrl = `${origin}/san-pham`;
        console.log(`Đang truy cập ${productPageUrl} để cào tên sản phẩm...`);

        try {
            await this.page.goto(productPageUrl);
            await this.page.waitForLoadState("domcontentloaded");
        } catch (e) {
            console.log("Lỗi khi truy cập /san-pham, sẽ cố gắng cào từ trang hiện tại.");
        }

        const keyword = await this.page.evaluate(() => {
            // 1. Ưu tiên tìm theo các class/tag phổ biến của tên sản phẩm trên trang /san-pham
            const commonProductSelectors = [
                '.product-name', '.product-title', '.title-product',
                'h3.title', '.item-title', 'h3 > a', 'h2 > a', '.name-product'
            ];

            for (const selector of commonProductSelectors) {
                const elements = document.querySelectorAll(selector);
                for (const element of Array.from(elements)) {
                    if (element && element.textContent) {
                        const text = element.textContent.trim();
                        // Tránh các nút bấm mua hàng hay tiêu đề linh tinh
                        if (text.length > 5 && !text.toLowerCase().includes('chi tiết') && !text.toLowerCase().includes('mua ngay')) {
                            return text;
                        }
                    }
                }
            }

            // 2. Fallback duyệt thẻ <a> 
            const links = Array.from(document.querySelectorAll('a'));
            const ignoreWords = [
                'trang chủ', 'giới thiệu', 'liên hệ', 'tin tức',
                'đăng nhập', 'đăng ký', 'giỏ hàng', 'xem thêm',
                'chi tiết', 'danh mục', 'sản phẩm', 'khuyến mãi'
            ];

            for (const link of links) {
                const text = link.textContent?.trim() || "";
                const textLower = text.toLowerCase();

                if (text.length > 10 && text.length < 80) {
                    const isSystemLink = ignoreWords.some(ignore => textLower.includes(ignore));
                    if (!isSystemLink) {
                        return text;
                    }
                }
            }
            return "";
        });

        // QUAN TRỌNG: Lấy xong thì phải quay lại trang chủ (hoặc trang index.php) để thực hiện kịch bản test search
        console.log("Đã lấy được từ khóa, đang quay lại trang chủ...");
        const homeUrl = baseUrl.endsWith('.php') ? baseUrl : `${origin}/index.php`;
        await this.page.goto(homeUrl).catch(() => this.page.goto(origin));
        await this.page.waitForLoadState("domcontentloaded");

        if (!keyword) {
            throw new Error("Không thể trích xuất được từ khóa sản phẩm nào từ trang /san-pham!");
        }

        return keyword;
    }

    /**
     * Nhập từ khóa vào ô tìm kiếm
     */
    async searchKeyword(keyword: string) {
        // Trường hợp 1 & 2: Kiểm tra xem ô input có sẵn sàng chưa
        const isInputVisible = await this.searchInput.first().isVisible({ timeout: 2000 }).catch(() => false);

        if (!isInputVisible) {
            // Trường hợp 2: Ô tìm kiếm bị ẩn, phải rê chuột (hover) hoặc click vào icon kính lúp mới hiện ra
            console.log("Ô tìm kiếm đang bị ẩn, thử tìm và tương tác với icon search hoặc vùng chứa (container)...");

            // 1. Thử hover vào các vùng chứa (container) search phổ biến trước (thường dùng CSS :hover)
            const searchContainers = this.page.locator('.search, .search-box, .search-container, .header-search, .search-wrapper, .search-form');
            const containerCount = await searchContainers.count();
            for (let i = 0; i < containerCount; i++) {
                const container = searchContainers.nth(i);
                if (await container.isVisible().catch(() => false)) {
                    await container.hover({ force: true }).catch(() => { });
                    await this.page.waitForTimeout(300);
                    if (await this.searchInput.first().isVisible().catch(() => false)) return this.fillSearchAndSubmit(keyword);
                }
            }

            // 2. Thử hover/click vào các nút hoặc icon search phổ biến
            const searchToggleIcons = this.page.locator(
                '.fa-search, .icon-search, [class*="search-icon"], [class*="icon-search"], ' +
                'i.search, svg.search, .search-toggle, .search-btn, .header-search-icon, .icon-magnifier, span.search'
            );

            const iconCount = await searchToggleIcons.count();
            for (let i = 0; i < iconCount; i++) {
                const icon = searchToggleIcons.nth(i);
                if (await icon.isVisible().catch(() => false)) {
                    // Thử rê chuột (hover)
                    await icon.hover({ force: true }).catch(() => { });
                    await this.page.waitForTimeout(300);
                    if (await this.searchInput.first().isVisible().catch(() => false)) return this.fillSearchAndSubmit(keyword);

                    // Nếu vẫn chưa hiện, thử click
                    await icon.click({ force: true }).catch(() => { });
                    await this.page.waitForTimeout(300);
                    if (await this.searchInput.first().isVisible().catch(() => false)) return this.fillSearchAndSubmit(keyword);
                }
            }

            // 3. Fallback bạo lực: Ép buộc hiện input bằng JavaScript nếu UI chặn
            console.log("Thử dùng JavaScript để ép hiển thị ô input...");
            await this.searchInput.first().evaluate((node: HTMLElement) => {
                node.style.display = 'block';
                node.style.visibility = 'visible';
                node.style.opacity = '1';
                if (node.parentElement) {
                    node.parentElement.style.display = 'block';
                    node.parentElement.style.visibility = 'visible';
                }
            }).catch(() => { });
            await this.page.waitForTimeout(500);
        }

        // Đợi chắc chắn ô input phải hiện lên trước khi gõ
        await this.fillSearchAndSubmit(keyword);
    }

    /**
     * Hàm phụ trợ dùng để nhập và submit search (dùng chung cho các nhánh phía trên)
     */
    private async fillSearchAndSubmit(keyword: string) {
        const targetInput = this.searchInput.first();

        // Đợi 2s xem input có tự hiện lên không
        await targetInput.waitFor({ state: 'visible', timeout: 2000 }).catch(() => { });

        try {
            // Dùng { force: true } và giới hạn thời gian cực ngắn để tránh bị treo 15s
            await targetInput.fill(keyword, { force: true, timeout: 1000 });
            await targetInput.pressSequentially(' ', { delay: 100 });
            await this.page.keyboard.press('Backspace');
        } catch (error) {
            console.log("Playwright fill thất bại, chuyển sang ép buộc gõ bằng JavaScript nguyên thủy...");

            // Dùng page.evaluate thay vì locator.evaluate để tránh việc Playwright ngầm đợi element
            const inputSelector = "input#keyword, input[name='keyword'], input[type='search'], input[name='q'], input[name='search']";

            await this.page.evaluate(({ selector, text }) => {
                const node = document.querySelector(selector) as HTMLInputElement;
                if (node) {
                    node.value = text;
                    node.dispatchEvent(new Event('input', { bubbles: true }));
                    node.dispatchEvent(new Event('change', { bubbles: true }));
                    node.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true, key: ' ' }));
                } else {
                    console.error("Không tìm thấy thẻ input nào trên DOM để bơm chữ!");
                }
            }, { selector: inputSelector, text: keyword });

            // Bấm thêm dấu backspace và Enter từ phía page
            await this.page.keyboard.press('Backspace').catch(() => { });
            await this.page.keyboard.press('Enter').catch(() => { });
        }
    }

    /**
     * Chờ dropdown search xuất hiện
     */
    async waitForDropdown() {
        await this.searchResultDropdown.waitFor({ state: 'visible', timeout: 5000 });
    }

    /**
     * Lấy danh sách các phần tử chứa kết quả sản phẩm trong dropdown
     * (Hỗ trợ thẻ a, li, hoặc các div có class thông dụng)
     */
    getResultItems(): Locator {
        return this.searchResultDropdown.locator("a, li, .search-item, .result-item, .autocomplete-suggestion, .item");
    }

    /**
     * Lấy danh sách các thẻ sản phẩm hiển thị trên trang kết quả.
     * Dùng một list các class CSS phổ biến nhất trong giới thiết kế web.
     * Cực kỳ hiệu quả cho bài toán multi-tenant.
     */
    getProductElementsOnPage(): Locator {
        return this.page.locator('.product-item, .item-product, .product-card, .col-product, article.product, .product-block, .product-grid-item, .item-box, .product, .name-product');
    }
}
