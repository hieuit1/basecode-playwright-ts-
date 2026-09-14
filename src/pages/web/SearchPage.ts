import { Page, Locator } from "@playwright/test";
import { BasePage } from "../BasePage";

export class SearchPage extends BasePage {
    readonly searchInput: Locator;
    readonly searchResultDropdown: Locator;
    readonly searchButton: Locator;
    readonly productItems: Locator;

    constructor(page: Page) {
        super(page);

        // ID chuẩn theo "Báo cáo hỗ trợ automation test" mục 3.2
        this.searchInput = page.locator("#search-sanpham");
        // .first() phòng trường hợp site nhân đôi header cho desktop/mobile làm ID bị lặp
        this.searchButton = page.locator("#btn-search-sanpham").first();
        this.productItems = page.locator("[data-product-id]");

        this.searchResultDropdown = page.locator("//div[@id='search-result']");
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
        // Loại bỏ /index.php nếu có
        if (baseUrl.includes('/index.php')) {
            baseUrl = baseUrl.split('/index.php')[0];
        }
        if (baseUrl.endsWith('/')) {
            baseUrl = baseUrl.slice(0, -1);
        }

        // Điều hướng sang trang danh sách sản phẩm để cào cho chuẩn xác
        const productPageUrl = `${baseUrl}/san-pham`;
        console.log(`Đang truy cập ${productPageUrl} để cào tên sản phẩm...`);

        try {
            await this.page.goto(productPageUrl);
            await this.page.waitForLoadState("domcontentloaded");
        } catch (e) {
            console.log("Lỗi khi truy cập /san-pham, sẽ cố gắng cào từ trang hiện tại.");
        }

        // Lấy tên sản phẩm từ các thẻ có data-product-id (ID chuẩn mục 3.2)
        const keyword = await this.page.evaluate(() => {
            const cards = Array.from(document.querySelectorAll('[data-product-id]'));

            for (const card of cards) {
                const link = card.querySelector('a[title]');
                const raw = link?.getAttribute('title')
                    || link?.textContent
                    || card.textContent
                    || "";

                const text = raw.split('\n')[0].trim();
                if (text.length > 5) {
                    return text;
                }
            }
            return "";
        });

        // QUAN TRỌNG: Lấy xong thì phải quay lại trang chủ (hoặc trang index.php) để thực hiện kịch bản test search
        console.log("Đã lấy được từ khóa, đang quay lại trang chủ...");
        const homeUrl = `${baseUrl}/index.php`;
        await this.page.goto(homeUrl).catch(() => this.page.goto(`${baseUrl}/`));
        await this.page.waitForLoadState("domcontentloaded");

        if (!keyword) {
            throw new Error("Không lấy được tên sản phẩm nào từ trang /san-pham! Kiểm tra xem thẻ sản phẩm đã có thuộc tính data-product-id chưa.");
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
            console.log("Ô tìm kiếm đang bị ẩn, thử tương tác với icon kính lúp #btn-search-sanpham...");

            const searchIcon = this.searchButton;
            if (await searchIcon.isVisible().catch(() => false)) {
                // 1. Thử rê chuột (hover) trước - nhiều site mở ô search bằng CSS :hover
                await searchIcon.hover({ force: true }).catch(() => { });
                await this.page.waitForTimeout(300);
                if (await this.searchInput.first().isVisible().catch(() => false)) return this.fillSearchAndSubmit(keyword);

                // 2. Hover không ăn thì mới click (chấp nhận rủi ro site submit luôn)
                await searchIcon.click({ force: true }).catch(() => { });
                await this.page.waitForTimeout(300);
                if (await this.searchInput.first().isVisible().catch(() => false)) return this.fillSearchAndSubmit(keyword);
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
            const inputSelector = "#search-sanpham";

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
     * Lấy danh sách sản phẩm trong dropdown kết quả (theo data-product-id)
     */
    getResultItems(): Locator {
        return this.searchResultDropdown.locator("[data-product-id]");
    }

    /**
     * Lấy danh sách các thẻ sản phẩm hiển thị trên trang kết quả (theo data-product-id)
     */
    getProductElementsOnPage(): Locator {
        return this.productItems;
    }
}
