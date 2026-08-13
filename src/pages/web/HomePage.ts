import { Page, Locator } from "@playwright/test";
import { BasePage } from "../BasePage";
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

        // 1. Quét tính năng tìm kiếm
        const hasSearch = await this.page.evaluate(() => {
            const inputs = Array.from(document.querySelectorAll('input'));
            for (const input of inputs) {
                if (input.type === 'hidden' || input.style.display === 'none') continue;
                const type = input.type.toLowerCase();
                const name = (input.name || '').toLowerCase();
                const placeholder = (input.placeholder || '').toLowerCase();
                const id = (input.id || '').toLowerCase();
                const className = (input.className || '').toLowerCase();

                if (type === 'search') return true;
                if (name === 'q' || name === 'keyword' || name === 'search') return true;
                if (placeholder.includes('tìm kiếm') || placeholder.includes('search')) return true;
                if (id.includes('search') || id === 'keyword') return true;
                if (className.includes('search')) return true;
            }

            const forms = Array.from(document.querySelectorAll('form'));
            for (const form of forms) {
                const action = (form.getAttribute('action') || '').toLowerCase();
                if (action.includes('search') || action.includes('tim-kiem')) return true;
            }
            return false;
        });

        // 2. Quét tính năng đăng ký nhận tin
        // Theo yêu cầu, locator: //p[@class='form-p']
        const hasNewsletter = await this.page.locator("//p[@class='form-p']").isVisible({ timeout: 5000 }).catch(() => false);

        console.log(` Kết quả phân tích Heuristic - Có thanh tìm kiếm: ${hasSearch ? 'CÓ' : 'KHÔNG'}`);
        console.log(` Kết quả phân tích Heuristic - Có đăng ký nhận tin: ${hasNewsletter ? 'CÓ' : 'KHÔNG'}`);

        const featuresDir = path.resolve(__dirname, '../../../data/templates');
        if (!fs.existsSync(featuresDir)) {
            fs.mkdirSync(featuresDir, { recursive: true });
        }

        const featurePath = path.join(featuresDir, 'scanned-frontend.json');
        const featureData = {
            timestamp: new Date().toISOString(),
            baseUrl: baseUrl,
            features: {
                search: hasSearch,
                newsletter: hasNewsletter
            }
        };

        fs.writeFileSync(featurePath, JSON.stringify(featureData, null, 2), 'utf-8');
        console.log(`✅ Đã lưu cấu hình Frontend tại: ${featurePath}`);
    }
}
