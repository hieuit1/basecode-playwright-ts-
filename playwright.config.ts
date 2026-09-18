import { defineConfig, devices } from "@playwright/test";
import * as dotenv from "dotenv";
import * as path from "path";

// Đọc cấu hình môi trường từ biến hệ thống, mặc định là 'qa'
const environment = process.env.ENV || "qa";
dotenv.config({ path: path.resolve(__dirname, `config/.env.${environment}`) });
dotenv.config({ path: path.resolve(__dirname, ".env") });

/**
 * Mọi spec trong tests/ui được nhân bản qua từng project viewport bên dưới.
 * Dùng cả hai dấu phân cách để khớp được trên Windows lẫn Linux (CI).
 */
const UI_SPECS = /tests[\\/]ui[\\/]/;

export default defineConfig({
    fullyParallel: false, // Tắt chạy song song các test case trong cùng 1 file
    globalSetup: "./src/setup/global.setup.ts",
    testDir: "./tests",
    timeout: 300000,
    workers: process.env.CI ? 2 : 1,
    expect: {
        timeout: 10000,
    },
    retries: 0,
    use: {
        actionTimeout: 30000,
        baseURL: process.env.BASE_URL || "https://example.com",
        headless: process.env.CI ? true : false,
        screenshot: "only-on-failure",
        // video: "on",
        trace: process.env.CI ? "off" : "retain-on-failure",
    },
    reporter: [
        ["html"],
        [
            "allure-playwright",
            {
                detail: true,
                outputFolder: "allure-results",
            },
        ],
    ],
    projects: [
        // Admin / Web / SEO — chạy một lần trên desktop
        {
            name: 'Desktop Chrome',
            use: {
                channel: 'chrome',
                viewport: { width: 1920, height: 1080 },
                launchOptions: {
                    args: ["--disable-blink-features=AutomationControlled"],
                },
            },
            testIgnore: UI_SPECS,
        },
        {
            name: 'UI Desktop',
            testMatch: UI_SPECS,
            // contentCheck: lớp kiểm tra chữ (chính tả) chỉ chạy ở ĐÚNG MỘT viewport,
            // vì nội dung chữ giống hệt nhau ở mọi kích thước màn hình.
            metadata: { aiHeuristic: true, contentCheck: true },
            use: {
                channel: 'chrome',
                viewport: { width: 1920, height: 1080 },
                launchOptions: {
                    args: ["--disable-blink-features=AutomationControlled"],
                },
            },
        },
        {
            name: 'UI iPad Air 4',
            testMatch: UI_SPECS,
            metadata: { aiHeuristic: false },
            use: {
                ...devices['iPad Pro 11'],
                viewport: { width: 820, height: 1180 },
            },
        },
        {
            name: 'UI iPhone X',
            testMatch: UI_SPECS,
            metadata: { aiHeuristic: true },
            use: {
                ...devices['iPhone X'],
            },
        },
    ],
});