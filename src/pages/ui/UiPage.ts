import { Page, test } from '@playwright/test';
import { BasePage } from '../BasePage';

export class UiPage extends BasePage {

    constructor(page: Page) {
        super(page);

    }

    /**
     * Navigate to the target web URL for UI testing
     * @param url The URL to navigate to
     */
    async gotoTargetUrl(url: string) {
        await test.step(`Điều hướng tới URL: ${url}`, async () => {
            // Dùng domcontentloaded hoặc load thay vì networkidle (networkidle rất dễ bị timeout nếu web có tracking scripts)
            await this.page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
            // Đợi thêm một chút để đảm bảo giao diện render
            await this.page.waitForTimeout(3000);
        });
    }

    /**
     * Điều hướng đến URL và cuộn đến section cụ thể để chụp ảnh
     * @param url URL đầy đủ của trang
     * @param selector CSS selector của section cần chụp
     */
    async gotoSection(url: string, selector: string) {
        return await test.step(`Cuộn đến section: ${selector}`, async () => {
            await this.gotoTargetUrl(url);
            const locator = this.page.locator(selector).first();
            const isVisible = await locator.isVisible({ timeout: 10000 }).catch(() => false);
            if (isVisible) {
                await locator.scrollIntoViewIfNeeded();
                await this.page.waitForTimeout(500); // Để animation settle
            }
            return locator;
        });
    }

    async hideDynamicElements() {
        await test.step(`Ẩn overlay nổi và bỏ tính dính trước khi chụp ảnh`, async () => {
            const result = await this.page.evaluate(() => {
                /** Từ khoá trong class/id của các overlay thật sự che nội dung */
                const OVERLAY_KEYWORDS = [
                    'chat', 'zalo', 'messenger', 'fb_dialog', 'fb-root', 'hotline', 'call-now',
                    'backtotop', 'back-to-top', 'scroll-top', 'scrolltop', 'gotop', 'totop',
                    'cookie', 'consent', 'gdpr',
                    'popup', 'modal', 'backdrop', 'suspension', 'float-contact', 'fixed-contact'
                ];

                /** Nút nổi thường nhỏ ở cả hai chiều */
                const FLOATING_MAX_SIZE = 200;

                const viewportWidth = window.innerWidth;
                const viewportHeight = window.innerHeight;

                let hidden = 0;
                let unstuck = 0;
                let untouched = 0;

                document.querySelectorAll<HTMLElement>('*').forEach(element => {
                    const style = window.getComputedStyle(element);
                    if (style.position !== 'fixed' && style.position !== 'sticky') return;

                    const rect = element.getBoundingClientRect();
                    const signature = `${element.className} ${element.id}`.toLowerCase();

                    const isOverlayByName = OVERLAY_KEYWORDS.some(word => signature.includes(word));
                    const isFloatingButton =
                        rect.width > 0 && rect.height > 0 &&
                        rect.width < FLOATING_MAX_SIZE && rect.height < FLOATING_MAX_SIZE;

                    if (isOverlayByName || isFloatingButton) {
                        element.style.setProperty('display', 'none', 'important');
                        hidden++;
                        return;
                    }

                    // Lớp phủ kín màn hình mà KHÔNG mang tên overlay thường là nền trang
                    // trí (canvas particles, video nền, gradient). Ẩn đi thì sai thiết kế,
                    // mà chuyển sang static thì nó chiếm nguyên một màn hình trong luồng
                    // và đẩy nội dung xuống. Đúng nhất là để nguyên.
                    const isFullScreenLayer =
                        rect.width >= viewportWidth * 0.9 &&
                        rect.height >= viewportHeight * 0.9;

                    if (isFullScreenLayer) {
                        untouched++;
                        return;
                    }

                    // Panel trượt off-canvas (menu mobile) nằm hoàn toàn ngoài mép trái/phải.
                    // Chuyển sang static là kéo nó vào luồng và lòi ra giữa ảnh chụp.
                    const isOffCanvas =
                        rect.width > 0 && (rect.right <= 0 || rect.left >= viewportWidth);

                    if (isOffCanvas) {
                        untouched++;
                        return;
                    }

                    // Header / thanh điều hướng dính: giữ lại, chỉ bỏ tính dính để nó nằm
                    // đúng vị trí trong luồng và chỉ xuất hiện một lần trên ảnh fullPage.
                    element.style.setProperty('position', 'static', 'important');
                    unstuck++;
                });

                return { hidden, unstuck, untouched };
            });

            console.log(
                `[UiPage] Ẩn ${result.hidden} overlay nổi, bỏ dính ${result.unstuck} phần tử, ` +
                `giữ nguyên ${result.untouched} lớp nền kín màn hình.`
            );
        });
    }

    /**
     * Chuẩn bị trang để ảnh chụp ổn định giữa các lần chạy.
     *
     * Lưu ý: KHÔNG ép font về Arial như bản cũ. Chuẩn hoá font chỉ có ý nghĩa với
     * pixel-diff (chống sai lệch anti-alias giữa các OS); ở đây việc chấm do AI làm và
     * một trong các tiêu chí là "kích thước chữ có đúng thiết kế không" — ép font sẽ
     * xoá đúng bằng chứng cần chấm.
     */
    async prepareForScreenshot() {
        await test.step(`Chuẩn bị trang web (tắt hiệu ứng, kích lazy-load) trước khi chụp ảnh`, async () => {
            await this.page.addStyleTag({
                content: `
                    *, *::before, *::after {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                        scroll-behavior: auto !important;
                    }
                    /* Ép hiển thị các phần tử bị ẩn bởi thư viện AOS hoặc wow.js */
                    [data-aos], .wow, .lazy, .lazyload, .lazyloaded, [class*="fade"] {
                        opacity: 1 !important;
                        transform: none !important;
                        visibility: visible !important;
                    }
                    /* Con trỏ nhấp nháy trong ô nhập làm mỗi lần chụp ra một ảnh khác.
                       Bản cũ khai báo dòng này ngoài mọi selector nên trình duyệt bỏ qua. */
                    * {
                        caret-color: transparent !important;
                    }
                `
            });

            // Cuộn bằng wheel chuột giả lập thực tế để kích hoạt các lazy-load library bắt sự kiện wheel/scroll
            const viewportHeight = await this.page.evaluate(() => window.innerHeight);
            let scrolled = 0;
            const maxScroll = 20000; // Bảo vệ vòng lặp vô hạn

            while (scrolled < maxScroll) {
                const step = viewportHeight / 1.5;
                await this.page.evaluate((s) => window.scrollBy(0, s), step);
                scrolled += step;
                await this.page.waitForTimeout(300); // Đợi 0.3s mỗi lần cuộn

                // Check nếu đã tới đáy trang
                const isBottom = await this.page.evaluate(() => {
                    return (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
                });
                if (isBottom) break;
            }

            await this.page.waitForTimeout(2000);

            // Scroll back to top
            await this.page.evaluate(() => window.scrollTo(0, 0));

            // Wait a bit for animations to settle
            await this.page.waitForTimeout(1000);
        });
    }
}
