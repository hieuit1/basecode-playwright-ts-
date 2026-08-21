import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import dotenv from 'dotenv';
import { seoManualConfig } from '../data/seo/seoManualConfig';
import { SeoPageTestData } from '../data/seo/seoData';


// Load environment variables
dotenv.config();

const BASE_URL = process.env.BASE_URL;

async function fetchSitemapUrls(sitemapUrl: string, maxLimit?: number): Promise<string[]> {
  try {
    const response = await fetch(sitemapUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
      }
    });
    if (!response.ok) {
      console.warn(`Sitemap not found at ${sitemapUrl} (${response.status})`);
      return [];
    }
    const xml = await response.text();
    const $ = cheerio.load(xml, { xmlMode: true });

    const isSitemapIndex = $('sitemapindex').length > 0;

    if (isSitemapIndex) {
      console.log(`Found sitemap index at ${sitemapUrl}. Fetching sub-sitemaps...`);
      const sitemapPromises: Promise<string[]>[] = [];
      $('sitemap > loc, sitemap loc').each((_, el) => {
        const subSitemapUrl = $(el).text().trim();
        if (subSitemapUrl) {
          let limit = undefined;
          if (subSitemapUrl.includes('sitemap_product')) limit = 5;
          else if (subSitemapUrl.includes('sitemap_blog')) limit = 5;
          sitemapPromises.push(fetchSitemapUrls(subSitemapUrl, limit));
        }
      });

      const results = await Promise.all(sitemapPromises);
      return results.flat();
    } else {
      const urls: string[] = [];
      $('url > loc, loc').each((_, el) => {
        const url = $(el).text().trim();
        // Bỏ qua các URL sitemap nếu vô tình lọt vào
        if (url && !url.endsWith('.xml')) {
          urls.push(url);
        }
      });
      // Lọc các kết quả trùng lặp nếu query selector lấy dư
      let uniqueUrls = Array.from(new Set(urls));
      if (maxLimit && uniqueUrls.length > maxLimit) {
        // Shuffle array
        uniqueUrls = uniqueUrls.sort(() => 0.5 - Math.random());
        uniqueUrls = uniqueUrls.slice(0, maxLimit);
      }
      return uniqueUrls;
    }
  } catch (error) {
    console.error('Error fetching sitemap:', error);
    return [];
  }
}

async function extractPageName(url: string): Promise<string> {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7',
        'Cache-Control': 'no-cache'
      }
    });

    if (!response.ok) {
      console.warn(`Failed to fetch ${url} - Status: ${response.status}`);
      return '';
    }
    const html = await response.text();

    if (html.includes('Just a moment...') || html.includes('cf-browser-verification')) {
      console.warn(`[WARNING] Request to ${url} was blocked by Cloudflare/WAF!`);
      return '';
    }

    const $ = cheerio.load(html);
    let name = $('title').text().trim() || $('h1').first().text().trim() || url;
    if (name.includes('|')) name = name.split('|')[0].trim();
    if (name.includes('-')) name = name.split('-')[0].trim();

    return name;
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    return '';
  }
}

/**
 * Kiểm tra URL có phải do automation test tạo ra hay không.
 * Dùng để lọc bỏ các URL tạm (sản phẩm/bài viết test) tránh race condition trên CI:
 * Khi chạy song song, shard khác có thể cleanup xóa sản phẩm test → gây broken links cho SEO tests.
 */
function isAutoTestUrl(url: string): boolean {
  const lowerUrl = decodeURIComponent(url).toLowerCase();
  return lowerUrl.includes('auto-test') || lowerUrl.includes('test');
}

async function run() {
  console.log('Starting SEO data generation...');

  if (!BASE_URL) {
    console.error('ERROR: BASE_URL is not defined in environment variables.');
    process.exit(1);
  }

  const sitemapUrl = BASE_URL.endsWith('/') ? BASE_URL + 'sitemap.xml' : BASE_URL + '/sitemap.xml';
  console.log(`Fetching sitemap from: ${sitemapUrl}`);

  const allSitemapUrls = await fetchSitemapUrls(sitemapUrl);
  console.log(`Found ${allSitemapUrls.length} URLs in sitemap.`);

  // Lọc bỏ các URL tạm do automation test tạo ra để tránh race condition trên CI
  const sitemapUrls = allSitemapUrls.filter(url => !isAutoTestUrl(url));
  const skippedCount = allSitemapUrls.length - sitemapUrls.length;
  if (skippedCount > 0) {
    console.log(`⚠ Đã bỏ qua ${skippedCount} URL thuộc automation test data (chứa 'test' hoặc 'auto-test').`);
  }

  const finalData: SeoPageTestData[] = [];

  const processedPaths = new Set<string>();

  // Dùng để đánh dấu số lượng các trang theo từng nhóm (prefix)
  const prefixCounts = new Map<string, number>();
  const MAX_PER_PREFIX = 1; // Lấy 1 trang đại diện duy nhất cho mỗi nhóm sản phẩm/bài viết để tránh trùng lặp

  // Các trang chính (Core pages) luôn được ưu tiên test
  const CORE_PAGES = ['/gioi-thieu', '/san-pham', '/du-an', '/tin-tuc', '/lien-he', '/dich-vu', '/tin-tuc-va-su-kien', '/blog', '/phong-thuy', '/mau-nha-dep', 'ban-sofa', 'ban-an', 'ghe-an', 'sofa-dep', 'van-phong', 'phong-ngu1', 'thi-cong-phong-bep'];

  // Dùng để giới hạn số lượng trang động được check Core Web Vitals (vì test CWV rất chậm)
  let dynamicCwvCount = 0;
  const MAX_DYNAMIC_CWV = 2;

  for (const fullUrl of sitemapUrls) {
    const urlObj = new URL(fullUrl);
    const baseUrlObj = new URL(BASE_URL as string);
    const basePath = baseUrlObj.pathname; // e.g. "/2026/july/tranquang_108426W/"

    let relativePath = urlObj.pathname;

    if (relativePath.startsWith(basePath)) {
      // Strip basePath
      let stripped = relativePath.slice(basePath.length);
      // Ensure it starts with exactly one '/'
      relativePath = '/' + stripped.replace(/^\/+/, '');
    } else if (relativePath === basePath.slice(0, -1) && basePath.length > 1) {
      relativePath = '/';
    }

    // Thay thế đường dẫn trang chủ từ '/' thành '/index.php' theo yêu cầu
    if (relativePath === '/') {
      relativePath = '/index.php';
    }

    processedPaths.add(relativePath);

    // Cấu hình mặc định: 
    // 1. Luôn test Trang chủ và Các trang chính (Core pages)
    // 2. Lấy mẫu đại diện động cho các trang còn lại (Sản phẩm, Bài viết...)
    let shouldCheckCWV = false;
    let skipFetch = false;

    if (relativePath === '/' || relativePath === '/index.php' || CORE_PAGES.includes(relativePath)) {
      shouldCheckCWV = true;
    } else {
      // Logic gom nhóm linh hoạt cho nhiều loại website
      const segments = relativePath.split('/').filter(Boolean);
      let prefix = '';

      if (segments.length > 1) {
        prefix = 'dir_' + segments[0].toLowerCase();
      } else {
        const firstSegment = segments[0] || '';
        const parts = firstSegment.split('-');
        prefix = 'flat_' + (parts.length >= 2 ? parts.slice(0, 2).join('-').toLowerCase() : parts[0].toLowerCase());
      }

      // Bỏ qua trang trùng lặp
      let count = prefixCounts.get(prefix) || 0;
      if (count >= MAX_PER_PREFIX) {
        skipFetch = true;
      } else {
        prefixCounts.set(prefix, count + 1);
        // Chỉ bật CWV cho một vài trang đại diện đầu tiên để tiết kiệm thời gian test
        if (dynamicCwvCount < MAX_DYNAMIC_CWV) {
          shouldCheckCWV = true;
          dynamicCwvCount++;
        }
      }
    }

    if (skipFetch) {
      // console.log(`[Deduplicate] Bỏ qua trang trùng lặp: ${relativePath}`);
      continue;
    }

    // Find manual config
    const manualEntry = seoManualConfig.find(item => item.path === relativePath);

    // Fetch meta data if not overridden by manual config
    let name = manualEntry?.name;

    if (!name) {
      console.log(`Fetching metadata for ${fullUrl}...`);
      name = await extractPageName(fullUrl);
    }

    const baseEntry: SeoPageTestData = {
      name: name!,
      path: relativePath,
      priority: "medium",
      severity: "normal",
      checkCoreWebVitals: shouldCheckCWV
    };

    // Merge manual overrides over the defaults
    finalData.push({
      ...baseEntry,
      ...manualEntry
    });
  }

  // Thêm các trang cấu hình thủ công vào đầu danh sách nếu chúng chưa có trong sitemap
  const manualEntriesToAdd: SeoPageTestData[] = [];
  for (const manualEntry of seoManualConfig) {
    if (!processedPaths.has(manualEntry.path)) {
      console.log(`Adding manual entry not found in sitemap: ${manualEntry.path}`);
      const baseEntry: SeoPageTestData = {
        name: manualEntry.name || manualEntry.path,
        path: manualEntry.path,
        priority: "medium",
        severity: "normal"
      };
      manualEntriesToAdd.push({ ...baseEntry, ...manualEntry });
    }
  }

  // Đẩy các trang thủ công lên đầu danh sách (trang đầu tiên)
  finalData.unshift(...manualEntriesToAdd);

  // Generate the TypeScript file content
  const fileContent = `// TẬP TIN NÀY ĐƯỢC TẠO TỰ ĐỘNG BỞI scripts/generateSeoData.ts
// Không nên sửa trực tiếp file này. Hãy sửa data/seo/seoManualConfig.ts

import { SeoPageTestData } from "./seoData";

export const seoTestData: SeoPageTestData[] = ${JSON.stringify(finalData, null, 2)};
`;

  const outputPath = path.join(__dirname, '../data/seo/seoGeneratedData.ts');
  fs.writeFileSync(outputPath, fileContent, 'utf-8');
  console.log(`SEO data generated successfully with ${finalData.length} items.`);
  console.log(`Output written to ${outputPath}`);
}

run().catch(console.error);
