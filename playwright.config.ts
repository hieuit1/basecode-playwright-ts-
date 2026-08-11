import { defineConfig, devices } from "@playwright/test";
import * as dotenv from "dotenv";
import * as path from "path";

// Đọc cấu hình môi trường từ biến hệ thống, mặc định là 'qa'
const environment = process.env.ENV || "qa";
dotenv.config({ path: path.resolve(__dirname, `config/.env.${environment}`) });
dotenv.config({ path: path.resolve(__dirname, ".env") });

export default defineConfig({
    fullyParallel: false, // Tắt chạy song song các test case trong cùng 1 file
    globalSetup: "./src/setup/global.setup.ts",
    testDir: "./tests",
    timeout: 180000,
    workers: process.env.CI ? 2 : undefined,
    expect: {
        timeout: 5000,
    },
    retries: 0,
    use: {
        actionTimeout: 15000,
        baseURL: process.env.BASE_URL || "https://example.com",
        headless: process.env.CI ? true : false,
        screenshot: "only-on-failure",
        // video: "on",
        trace: "retain-on-failure",
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
        {
            name: 'Desktop Chrome',
            use: {
                channel: 'chrome',
                viewport: { width: 1920, height: 1080 },
                launchOptions: {
                    args: ["--disable-blink-features=AutomationControlled"],
                },
            },
            testIgnore: /.*Mobile\.spec\.ts/,
        },
        {
            name: 'Mobile',
            testMatch: /.*Mobile\.spec\.ts/,
            use: {
                ...devices['iPhone 12 Pro'],
            },
        },
    ],
});