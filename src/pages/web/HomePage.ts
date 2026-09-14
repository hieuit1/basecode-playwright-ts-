import { Page, Locator } from "@playwright/test";
import { BasePage } from "../BasePage";
import { CartPage } from "./CartPage";
import * as fs from 'fs';
import * as path from 'path';

export class HomePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    /**
     * Mở trang chủ
     */
    async gotoHomePage() {
        let baseUrl = process.env.BASE_URL || '';

        if (baseUrl.endsWith('/')) {
            baseUrl = baseUrl.slice(0, -1);
        }

        const indexUrl = baseUrl.endsWith('.php') ? baseUrl : `${baseUrl}/index.php`;

        try {
            const response = await this.page.goto(indexUrl, { waitUntil: 'domcontentloaded' });
            if (response && response.status() === 404) {
                console.log(`[THÔNG BÁO] Không tìm thấy /index.php, chuyển hướng về link gốc...`);
                await this.page.goto(`${baseUrl}/`, { waitUntil: 'domcontentloaded' });
            }
        } catch (error) {
            console.log(`[THÔNG BÁO] Lỗi khi truy cập /index.php, thử lại link gốc...`);
            await this.page.goto(`${baseUrl}/`, { waitUntil: 'domcontentloaded' });
        }
    }

    /**
     * Quét các tính năng trên trang chủ (Tìm kiếm, Đăng ký nhận tin)
     */
    async scanFrontendFeatures(baseUrl: string) {
        console.log('--- STARTING FRONTEND FEATURE SCAN (FROM HOMEPAGE) ---');
        await this.gotoHomePage();

        // Quét theo đúng bộ ID chuẩn ở "Báo cáo hỗ trợ automation test",
        // để hàm quét và các hàm thao tác trong page object dùng chung một nguồn.
        // Ô tìm kiếm có thể bị ẩn sau icon kính lúp nên chỉ cần tồn tại trong DOM là đủ.
        const hasSearch = await this.page.locator("#search-sanpham").count() > 0;

        // 2. Quét tính năng đăng ký nhận tin
        const hasNewsletter = await this.page.locator("#form-newsletter").isVisible({ timeout: 5000 }).catch(() => false);

        // 3. Quét tính năng Đặt Bàn (Booking)
        const hasBooking = await this.page.locator("#form-datban").isVisible({ timeout: 5000 }).catch(() => false);

        // 4. Quét tính năng Giỏ Hàng (Cart)
        const hasCart = await this.page.locator("#btn-cart-header").isVisible({ timeout: 5000 }).catch(() => false);

        // Kiểm tra tính năng Mã giảm giá (Discount) - Chỉ quét khi có Giỏ hàng
        // Lưu ý: input mã giảm giá chỉ được render khi giỏ hàng có sản phẩm.
        // → Phải thêm 1 sản phẩm vào giỏ TRƯỚC khi quét, sau đó dọn dẹp.
        let hasDiscount = false;
        if (hasCart) {
            console.log(`Tìm thấy giỏ hàng. Đang thêm sản phẩm để kiểm tra tính năng mã giảm giá...`);
            const cartPage = new CartPage(this.page);
            try {
                // Bước 1: Thêm 1 sản phẩm vào giỏ để form discount được render
                await cartPage.addOneProductToCart();
                // Bước 2: Vào trang giỏ hàng
                await cartPage.gotoCart();
                // Bước 3: Kiểm tra locator input mã giảm giá
                hasDiscount = await this.page
                    .locator("#input-magiamgia")
                    .isVisible({ timeout: 5000 })
                    .catch(() => false);
                console.log(`Kết quả quét discount (sau khi thêm SP): ${hasDiscount ? 'CÓ' : 'KHÔNG'}`);
            } catch (e) {
                console.warn(`⚠ Không thêm được sản phẩm để quét discount — nhiều khả năng thiếu #btn-addtocart hoặc #btn-cart-header. Chi tiết: ${e}`);
            }
        }

        // 5. Quét tính năng Form Tư Vấn (Free Consultation) trên trang sản phẩm
        let hasFreeConsultation = false;
        let productUrlForConsultation = '';
        try {
            let origin = '';
            try {
                origin = new URL(baseUrl.startsWith('http') ? baseUrl : `https://${baseUrl}`).origin;
            } catch (e) {
                origin = baseUrl.split('/index.php')[0];
                if (origin.endsWith('/')) origin = origin.slice(0, -1);
            }

            const productPageUrl = `${origin}/san-pham`;
            console.log(`Đang truy cập ${productPageUrl} để kiểm tra form Tư vấn...`);

            const response = await this.page.goto(productPageUrl, { waitUntil: 'domcontentloaded' }).catch(() => null);

            if (response && response.status() !== 404) {
                // Thử tìm thẻ sản phẩm để click
                const productLocators = this.page.locator('[data-product-id] a').first();

                if (await productLocators.isVisible({ timeout: 3000 }).catch(() => false)) {
                    console.log(`Tìm thấy sản phẩm. Đang click vào sản phẩm đầu tiên...`);
                    // Click vào sản phẩm đầu tiên
                    await productLocators.click().catch(() => { });
                    await this.page.waitForLoadState("domcontentloaded").catch(() => { });

                    // Lưu lại URL của trang chi tiết sản phẩm này để dùng trực tiếp cho test case sau này
                    productUrlForConsultation = this.page.url();

                    // Kiểm tra sự tồn tại của form
                    hasFreeConsultation = await this.page.locator("#form-tuvan").isVisible({ timeout: 5000 }).catch(() => false);
                } else {
                    console.log('Không tìm thấy sản phẩm nào trên trang /san-pham. Bỏ qua quét form Tư vấn.');
                }
            } else {
                console.log('Trang /san-pham không tồn tại (404). Bỏ qua quét form Tư vấn.');
            }
        } catch (error) {
            console.log(`Lỗi khi quét form Tư vấn: ${error}`);
        }

        console.log(` Kết quả phân tích Heuristic - Có thanh tìm kiếm: ${hasSearch ? 'CÓ' : 'KHÔNG'}`);
        console.log(` Kết quả phân tích Heuristic - Có đăng ký nhận tin: ${hasNewsletter ? 'CÓ' : 'KHÔNG'}`);
        console.log(` Kết quả phân tích Heuristic - Có form tư vấn miễn phí: ${hasFreeConsultation ? 'CÓ' : 'KHÔNG'}`);
        console.log(` Kết quả phân tích Heuristic - Có đặt bàn: ${hasBooking ? 'CÓ' : 'KHÔNG'}`);
        console.log(` Kết quả phân tích Heuristic - Có giỏ hàng: ${hasCart ? 'CÓ' : 'KHÔNG'}`);
        console.log(` Kết quả phân tích Heuristic - Có mã giảm giá: ${hasDiscount ? 'CÓ' : 'KHÔNG'}`);

        const featuresDir = path.resolve(__dirname, '../../../data/templates');
        if (!fs.existsSync(featuresDir)) {
            fs.mkdirSync(featuresDir, { recursive: true });
        }

        const featurePath = path.join(featuresDir, 'scanned-frontend.json');
        const featureData = {
            timestamp: new Date().toISOString(),
            baseUrl: baseUrl,
            productUrlForConsultation: productUrlForConsultation,
            features: {
                search: hasSearch,
                newsletter: hasNewsletter,
                freeConsultation: hasFreeConsultation,
                booking: hasBooking,
                cart: hasCart,
                discount: hasDiscount
            }
        };

        fs.writeFileSync(featurePath, JSON.stringify(featureData, null, 2), 'utf-8');
        console.log(`✅ Đã lưu cấu hình Frontend tại: ${featurePath}`);
    }
}
