import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { chromium } from 'playwright';
import {
    ScannedFigmaFramesFile,
    FigmaFrame,
    UiSectionTestData
} from '../data/ui/uiTypes';

const environment = process.env.ENV || 'qa';
dotenv.config({ path: path.resolve(__dirname, `../config/.env.${environment}`) });
dotenv.config();

const FIGMA_TOKEN = process.env.UI_TEST_FIGMA_TOKEN || '';
const FIGMA_FILE_KEY = process.env.UI_TEST_FIGMA_FILE_KEY || '';

function normalize(str: string): string {
    return str.toLowerCase().normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9 ]/g, ' ')
        .replace(/\s+/g, ' ').trim();
}

function similarityScore(a: string, b: string): number {
    const wordsA = new Set(normalize(a).split(' ').filter(Boolean));
    const wordsB = new Set(normalize(b).split(' ').filter(Boolean));
    if (wordsA.size === 0 || wordsB.size === 0) return 0;
    let commonCount = 0;
    for (const word of wordsA) if (wordsB.has(word)) commonCount++;
    return commonCount / new Set([...wordsA, ...wordsB]).size;
}

// ──────────────────────────────────────────
// BƯỚC 1: Lấy các Top Level Frames từ Figma
// ──────────────────────────────────────────
import { FigmaService } from '../src/services/FigmaService';

async function fetchTopLevelFigmaFrames(fileKey: string, token: string): Promise<FigmaFrame[]> {
    const figmaService = new FigmaService();
    // FigmaService uses UI_TEST_FIGMA_TOKEN from env automatically
    return await figmaService.fetchAllFrames(fileKey);
}

// removed obsolete functions

function generateTs(testData: UiSectionTestData[]): string {
    return `// ============================================================
// TẬP TIN NÀY ĐƯỢC TẠO TỰ ĐỘNG BỞI scripts/generateUiData.ts
// KHÔNG sửa trực tiếp — hãy chạy lại script để cập nhật
// ============================================================

import { UiSectionTestData } from './uiTypes';

export const uiTestData: UiSectionTestData[] = ${JSON.stringify(testData, null, 2)};
`;
}

// ──────────────────────────────────────────
// MAIN
// ──────────────────────────────────────────
async function run() {
    console.log('Bắt đầu sinh UI Test Data (Auto-Crop Ratio Mode)...\n');
    if (!FIGMA_TOKEN || !FIGMA_FILE_KEY) {
        console.error(' Thiếu UI_TEST_FIGMA_TOKEN hoặc UI_TEST_FIGMA_FILE_KEY trong .env');
        process.exit(1);
    }

    const BASE_URL = (process.env.BASE_URL || '').replace(/\/$/, '');
    if (!BASE_URL) {
        console.error(' Thiếu BASE_URL trong .env');
        process.exit(1);
    }

    const allFrames = await fetchTopLevelFigmaFrames(FIGMA_FILE_KEY, FIGMA_TOKEN);
    fs.writeFileSync(
        path.resolve(__dirname, '../data/templates/scanned-figma-frames.json'),
        JSON.stringify({ timestamp: new Date().toISOString(), fileKey: FIGMA_FILE_KEY, frames: allFrames }, null, 2),
        'utf-8'
    );

    const topFrames = allFrames.filter(f => ['FRAME', 'SECTION'].includes(f.type || '') && f.name === f.topLevelFrame);
    const testData: UiSectionTestData[] = [];

    // --- SITEMAP AUTO-DISCOVERY ---
    console.log(` Đang tải sitemap từ: ${BASE_URL}/sitemap.xml...`);
    const sitemapRes = await fetch(`${BASE_URL}/sitemap.xml`).catch(() => null);
    let urls: string[] = [];
    if (sitemapRes && sitemapRes.ok) {
        const sitemapText = await sitemapRes.text();
        const matches = sitemapText.match(/<loc>(.*?)<\/loc>/g);
        if (matches) {
            urls = matches.map(u => u.replace(/<\/?loc>/g, ''));
        }
    }

    if (urls.length === 0) {
        console.error(' Không thể lấy sitemap hoặc sitemap trống!');
        process.exit(1);
    }

    const getRelativePath = (u?: string) => {
        if (!u) return '';
        const rel = u.replace(BASE_URL, '');
        return rel.startsWith('/') ? rel : '/' + rel;
    };

    // --- BƯỚC 2.5: CÀO LINK SẢN PHẨM BẰNG PLAYWRIGHT ---
    console.log(`\n Đang mở trình duyệt nền để tìm một link sản phẩm ngẫu nhiên từ ${BASE_URL}...`);
    let dynamicProductUrl = '';
    let browser = null;
    try {
        browser = await chromium.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(BASE_URL, { waitUntil: 'domcontentloaded', timeout: 15000 });
        
        dynamicProductUrl = await page.evaluate(() => {
            const commonProductSelectors = [
                'a.product-name', 'a.product-title', 'a.title-product', 
                'a.item-title', 'h3 > a', 'h2 > a', '.product-item a', '.product-card a'
            ];
            
            for (const selector of commonProductSelectors) {
                // @ts-ignore
                const elements = document.querySelectorAll(selector);
                for (let i = 0; i < elements.length; i++) {
                    const el = elements[i] as any;
                    if (el.href && el.textContent) {
                        const text = el.textContent.trim();
                        // Tránh các link menu hệ thống
                        // @ts-ignore
                        if (text.length > 5 && String(el.href).startsWith(window.location.origin)) {
                            return String(el.href);
                        }
                    }
                }
            }
            return '';
        });
        
        if (dynamicProductUrl) {
            console.log(` Đã trích xuất thành công link sản phẩm: ${dynamicProductUrl}`);
        } else {
            console.warn(` Không tìm thấy thẻ sản phẩm nào hợp lệ trên trang chủ!`);
        }
    } catch (e) {
        console.warn(` Lỗi khi chạy Playwright cào dữ liệu: ${(e as Error).message}`);
    } finally {
        if (browser) {
            await browser.close();
        }
    }

    // --- BƯỚC 3: GHÉP CẶP FIGMA VÀ SITEMAP ---
    console.log('\n Đang tiến hành ghép cặp (Mapping) tự động...');
    const pagesToTest: { name: string, path: string, figmaFrameName: string }[] = [];

    for (const frame of topFrames) {
        const frameNameNormal = normalize(frame.name).replace(/ /g, '');
        
        // 1. Trường hợp là Trang Chủ
        if (frameNameNormal.includes('home') || frameNameNormal.includes('trangchu')) {
            pagesToTest.push({ name: frame.name, path: '/', figmaFrameName: frame.name });
            continue;
        }

        // 2. Trường hợp là Trang Chi tiết Sản phẩm
        if (frameNameNormal.includes('chitiet') || frameNameNormal.includes('detail')) {
            if (dynamicProductUrl) {
                pagesToTest.push({ name: frame.name, path: getRelativePath(dynamicProductUrl), figmaFrameName: frame.name });
            } else {
                console.warn(` Không tìm thấy link sản phẩm thực tế cho frame ${frame.name}`);
            }
            continue;
        }

        // 3. Các trang tĩnh còn lại (Tìm link có độ tương đồng cao nhất trong sitemap)
        let bestMatchUrl = '';
        
        for (const u of urls) {
            const relPath = getRelativePath(u);
            const slugNormal = normalize(relPath).replace(/ /g, '');
            if (!slugNormal || slugNormal === '/') continue;

            // Kiểm tra xem tên frame có nằm trong URL không hoặc ngược lại
            if (slugNormal.includes(frameNameNormal) || frameNameNormal.includes(slugNormal)) {
                // Ưu tiên độ dài ngắn nhất để lấy trang gốc (tránh nhầm /gioi-thieu với /gioi-thieu-chi-tiet)
                if (!bestMatchUrl || relPath.length < bestMatchUrl.length) {
                    bestMatchUrl = relPath;
                }
            }
        }

        if (bestMatchUrl) {
            pagesToTest.push({ name: frame.name, path: bestMatchUrl, figmaFrameName: frame.name });
        } else {
            console.warn(` Cảnh báo: Không tìm thấy link sitemap nào khớp với frame "${frame.name}"`);
        }
    }

    for (const page of pagesToTest) {
        console.log(`\n Xử lý trang: ${page.name} (${page.path})`);

        let bestFrame = topFrames.find(f => similarityScore(page.figmaFrameName, f.name) > 0.5);
        if (!bestFrame) {
            console.warn(` Không tìm thấy Top-Level Frame nào cho trang ${page.name} (Tên dự kiến: ${page.figmaFrameName}). Bỏ qua!`);
            continue;
        }


        testData.push({
            page: page.name,
            path: page.path,
            sectionName: 'Toàn bộ trang',
            selector: 'body',
            figmaNodeId: bestFrame.id.replace(':', '-'),
            figmaFrameName: bestFrame.name,
            matchScore: 1.0
        });
    }

    const outputTsPath = path.resolve(__dirname, '../data/ui/uiGeneratedData.ts');
    if (!fs.existsSync(path.dirname(outputTsPath))) fs.mkdirSync(path.dirname(outputTsPath), { recursive: true });
    fs.writeFileSync(outputTsPath, generateTs(testData), 'utf-8');
    console.log(`\n Hoàn tất! Đã lưu: ${outputTsPath}`);
}

run().catch(err => {
    console.error('Lỗi:', err);
    process.exit(1);
});

