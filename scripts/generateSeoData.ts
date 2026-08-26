import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import dotenv from 'dotenv';
import { seoManualConfig } from '../data/seo/seoManualConfig';
import { SeoPageTestData } from '../data/seo/seoData';


// Load environment variables
dotenv.config();

const BASE_URL = process.env.BASE_URL;

/** Cap an toàn phòng khi sitemap quá lớn */
const MAX_SITEMAP_URLS = 3000;

/** Số trang tải song song khi lấy breadcrumb + tên trang */
const FETCH_CONCURRENCY = 10;

/** Số trang chi tiết lấy cho mỗi trang tổng (1 chi tiết SP, 1 chi tiết tin tức, ...) */
const MAX_DETAILS_PER_HUB = 1;

/** Cap an toàn cho website có rất nhiều danh mục */
const MAX_CATEGORIES = 50;

const FETCH_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  'Accept-Language': 'vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cache-Control': 'no-cache'
};

/** Một mắt xích breadcrumb. path = null khi mắt xích đó không kèm link. */
interface CrumbNode {
  name: string;
  path: string | null;
}

/** Dữ liệu bóc từ HTML của một trang */
interface PageInfo {
  crumbs: CrumbNode[];
  ogType: string;
  name: string;
}

/** Gộp mọi khoảng trắng (kể cả tab, xuống dòng) thành một dấu cách */
function normalizeText(value: string | undefined | null): string {
  return (value ?? '').replace(/\s+/g, ' ').trim();
}

/**
 * Đổi URL tuyệt đối thành path tương đối so với BASE_URL.
 * Dùng chung cho cả URL trong sitemap lẫn URL trong breadcrumb.
 * Trả về null nếu URL nằm ngoài website (khác host hoặc ngoài thư mục base).
 */
function toRelativePath(rawUrl: string): string | null {
  let target: URL;
  try {
    target = new URL(rawUrl, BASE_URL);
  } catch {
    return null;
  }

  const base = new URL(BASE_URL as string);
  if (target.hostname !== base.hostname) return null;

  const basePath = base.pathname.endsWith('/') ? base.pathname : base.pathname + '/';
  let relativePath = target.pathname;

  if (relativePath.startsWith(basePath)) {
    relativePath = '/' + relativePath.slice(basePath.length);
  } else if (basePath.length > 1 && relativePath === basePath.slice(0, -1)) {
    relativePath = '/';
  } else if (basePath.length > 1) {
    return null; // Nằm ngoài thư mục base → không thuộc website đang test
  }

  relativePath = '/' + relativePath.replace(/^\/+/, '');
  if (relativePath.length > 1) relativePath = relativePath.replace(/\/+$/, '');

  // Thay đường dẫn trang chủ từ '/' thành '/index.php' theo yêu cầu
  if (relativePath === '' || relativePath === '/') relativePath = '/index.php';

  return relativePath;
}

/** Chạy tác vụ bất đồng bộ theo pool giới hạn số luồng song song (tự viết, không thêm dependency) */
async function runWithPool<T, R>(
  items: T[],
  concurrency: number,
  worker: (item: T) => Promise<R>
): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let cursor = 0;

  const runners = Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (true) {
      const index = cursor++;
      if (index >= items.length) return;
      results[index] = await worker(items[index]);
    }
  });

  await Promise.all(runners);
  return results;
}

/**
 * Đọc đúng một file sitemap.xml, KHÔNG đệ quy sang các file sitemap con.
 */
async function fetchSitemapUrls(sitemapUrl: string): Promise<string[]> {
  try {
    const response = await fetch(sitemapUrl, { headers: FETCH_HEADERS });
    if (!response.ok) {
      console.warn(`Sitemap not found at ${sitemapUrl} (${response.status})`);
      return [];
    }
    const xml = await response.text();
    const $ = cheerio.load(xml, { xmlMode: true });

    if ($('sitemapindex').length > 0) {
      console.warn(
        `⚠ ${sitemapUrl} là sitemap index (chỉ chứa link tới các file sitemap con).\n` +
        `  Script chỉ đọc đúng file sitemap.xml này nên không lấy được URL nào.\n` +
        `  Hãy khai báo thủ công các trang cần test trong data/seo/seoManualConfig.ts.`
      );
      return [];
    }

    const urls: string[] = [];
    const locNodes = $('url > loc').length > 0 ? $('url > loc') : $('loc');
    locNodes.each((_, el) => {
      const url = $(el).text().trim();
      // Bỏ qua các URL sitemap nếu vô tình lọt vào
      if (url && !url.endsWith('.xml')) urls.push(url);
    });

    // Lọc các kết quả trùng lặp nếu query selector lấy dư
    const uniqueUrls = Array.from(new Set(urls));

    if (uniqueUrls.length > MAX_SITEMAP_URLS) {
      console.warn(`⚠ Sitemap có ${uniqueUrls.length} URL, chỉ xử lý ${MAX_SITEMAP_URLS} URL đầu tiên.`);
      return uniqueUrls.slice(0, MAX_SITEMAP_URLS);
    }

    return uniqueUrls;
  } catch (error) {
    console.error('Error fetching sitemap:', error);
    return [];
  }
}

/** Duyệt đệ quy khối JSON-LD để tìm node BreadcrumbList (có thể nằm trong mảng hoặc @graph) */
function findBreadcrumbNode(node: any): any | null {
  if (!node || typeof node !== 'object') return null;

  if (Array.isArray(node)) {
    for (const child of node) {
      const found = findBreadcrumbNode(child);
      if (found) return found;
    }
    return null;
  }

  const rawType = node['@type'];
  const types = Array.isArray(rawType) ? rawType : [rawType];
  if (types.includes('BreadcrumbList') && Array.isArray(node.itemListElement)) return node;

  if (node['@graph']) return findBreadcrumbNode(node['@graph']);
  return null;
}

/** Bóc breadcrumb từ JSON-LD schema.org — nguồn chính xác nhất */
function extractCrumbsFromJsonLd($: cheerio.CheerioAPI): CrumbNode[] | null {
  const scripts = $('script[type="application/ld+json"]').toArray();

  for (const script of scripts) {
    const raw = $(script).contents().text().trim();
    if (!raw || !raw.includes('BreadcrumbList')) continue;

    let parsed: any;
    try {
      parsed = JSON.parse(raw);
    } catch {
      continue; // JSON-LD hỏng thì bỏ qua, thử khối tiếp theo
    }

    const breadcrumb = findBreadcrumbNode(parsed);
    if (!breadcrumb) continue;

    const items = [...breadcrumb.itemListElement].sort(
      (a: any, b: any) => (Number(a?.position) || 0) - (Number(b?.position) || 0)
    );

    const crumbs: CrumbNode[] = [];
    for (const item of items) {
      const name = normalizeText(item?.name ?? item?.item?.name);
      const href = typeof item?.item === 'string' ? item.item : item?.item?.['@id'];
      const crumbPath = href ? toRelativePath(String(href)) : null;
      if (name || crumbPath) crumbs.push({ name, path: crumbPath });
    }

    if (crumbs.length > 0) return crumbs;
  }

  return null;
}

const DOM_BREADCRUMB_SELECTORS = [
  '[itemtype*="BreadcrumbList"] [itemprop="itemListElement"]',
  'nav[aria-label*="readcrumb"] li',
  '.breadcrumb li',
  '.breadcrumbs li',
  '#breadcrumb li'
];

/** Bóc breadcrumb từ DOM khi website không phát JSON-LD */
function extractCrumbsFromDom($: cheerio.CheerioAPI): CrumbNode[] | null {
  for (const selector of DOM_BREADCRUMB_SELECTORS) {
    const nodes = $(selector).toArray();
    if (nodes.length === 0) continue;

    const crumbs: CrumbNode[] = nodes.map((node) => {
      const $node = $(node);
      const href = $node.find('a[href]').first().attr('href') ?? $node.attr('href');
      return {
        name: normalizeText($node.text()),
        path: href ? toRelativePath(href) : null
      };
    });

    // Breadcrumb hiển thị thường có node "Trang chủ" dẫn đầu, JSON-LD thì không.
    // Bỏ node này để hai nguồn cho ra cùng một cách đếm tầng.
    const trimmed = crumbs.length > 1 && crumbs[0].path === '/index.php' ? crumbs.slice(1) : crumbs;
    if (trimmed.length > 0) return trimmed;
  }

  return null;
}

/**
 * Cắt phần tên website ra khỏi thẻ title.
 * Suy ra tên site từ title trang chủ thay vì cắt cứng ở dấu '-' đầu tiên — cách cũ
 * làm "CB khối (MCCB) LS ABS1003b 1000A 65kA" cụt còn "CB khối (MCCB) LS ABS1003b".
 */
function stripSiteSuffix(title: string, siteTitle: string): string {
  if (!title || !siteTitle) return title;

  const separator = /\s[|\-–—»·]\s/;
  const parts = title.split(separator).map((part) => part.trim()).filter(Boolean);
  if (parts.length <= 1) return title;

  const siteNames = new Set(
    [siteTitle, ...siteTitle.split(separator)].map((part) => part.trim().toLowerCase())
  );

  // Chỉ gọt các đoạn ĐUÔI trùng tên site, giữ nguyên phần đầu
  while (parts.length > 1 && siteNames.has(parts[parts.length - 1].toLowerCase())) {
    parts.pop();
  }

  return parts.join(' - ');
}

/**
 * Tải một trang và bóc breadcrumb + og:type + tên trang.
 * Thay cho extractPageName cũ: cùng một request nhưng lấy thêm breadcrumb để phân loại.
 */
async function fetchPageInfo(url: string, siteTitle: string): Promise<PageInfo | null> {
  try {
    const response = await fetch(url, { headers: FETCH_HEADERS });

    if (!response.ok) {
      console.warn(`Failed to fetch ${url} - Status: ${response.status}`);
      return null;
    }
    const html = await response.text();

    if (html.includes('Just a moment...') || html.includes('cf-browser-verification')) {
      console.warn(`[WARNING] Request to ${url} was blocked by Cloudflare/WAF!`);
      return null;
    }

    const $ = cheerio.load(html);

    let crumbs = extractCrumbsFromJsonLd($) ?? extractCrumbsFromDom($);
    if (!crumbs) {
      // Không có breadcrumb: coi như trang 1 tầng (chính nó)
      const selfPath = toRelativePath(url);
      crumbs = selfPath ? [{ name: '', path: selfPath }] : [];
    }

    const title = normalizeText($('title').first().text());

    // Lấy tên theo thứ tự tin cậy giảm dần, không cắt cứng ở dấu '-' như bản cũ.
    // Chốt cuối là path: có trang thiếu hẳn title/og:title/h1 (chính là lỗi SEO mà
    // suite này đi tìm) — khi đó vẫn phải có tên đọc được để đặt tên test case.
    const name =
      normalizeText(crumbs.length > 0 ? crumbs[crumbs.length - 1].name : '') ||
      normalizeText($('meta[property="og:title"]').attr('content')) ||
      normalizeText($('h1').first().text()) ||
      normalizeText(stripSiteSuffix(title, siteTitle)) ||
      title ||
      toRelativePath(url) ||
      url;

    return {
      crumbs,
      ogType: normalizeText($('meta[property="og:type"]').attr('content')).toLowerCase(),
      name
    };
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    return null;
  }
}

/**
 * Kiểm tra URL có phải do automation test tạo ra hay không.
 * Dùng để lọc bỏ các URL tạm (sản phẩm/bài viết test) tránh race condition trên CI:
 * Khi chạy song song, shard khác có thể cleanup xóa sản phẩm test → gây broken links cho SEO tests.
 *
 * Phải neo vào marker cụ thể thay vì bắt chuỗi 'test' trần: khi chạy trên website khác,
 * 'test' trần sẽ nuốt oan trang thật ("máy test", "contest", "latest").
 */
function isAutoTestUrl(url: string): boolean {
  const decoded = decodeURIComponent(url);
  if (/(^|[-_/])(auto-test|autotest|loadtest)/i.test(decoded)) return true;

  // Trang nháp đặt tên trống trơn là 'test' — chỉ khớp khi cả segment đúng bằng 'test',
  // không khớp các slug chứa chữ test ("may-test-ac-quy", "contest", "latest")
  return /\/test\/?$/i.test(new URL(decoded).pathname);
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
    console.log(`⚠ Đã bỏ qua ${skippedCount} URL thuộc automation test data (auto-test / loadtest).`);
  }

  // Title trang chủ dùng làm mốc để cắt hậu tố tên site khỏi title các trang khác
  const homeInfo = await fetchPageInfo(BASE_URL, '');
  const siteTitle = homeInfo?.name ?? '';

  // Tải breadcrumb của toàn bộ trang. Bản cũ cũng fetch từng trang (để lấy tên) nên
  // không phát sinh thêm loại chi phí mới, chỉ chạy song song cho nhanh.
  console.log(`Đang quét breadcrumb ${sitemapUrls.length} trang (${FETCH_CONCURRENCY} luồng song song)...`);

  let scanned = 0;
  const pageInfos = await runWithPool(sitemapUrls, FETCH_CONCURRENCY, async (url) => {
    const info = await fetchPageInfo(url, siteTitle);
    scanned++;
    if (scanned % 50 === 0) console.log(`  ... đã quét ${scanned}/${sitemapUrls.length} trang`);
    return info;
  });

  const infoByUrl = new Map<string, PageInfo>();
  sitemapUrls.forEach((url, index) => {
    const info = pageInfos[index];
    if (info) infoByUrl.set(url, info);
  });

  const finalData: SeoPageTestData[] = [];
  const processedPaths = new Set<string>();

  // Đếm số trang chi tiết đã lấy cho từng trang tổng (thay cho prefixCounts theo slug của bản cũ)
  const detailCounts = new Map<string, number>();
  let categoryCount = 0;
  const kindCounts: Record<string, number> = { home: 0, hub: 0, category: 0, detail: 0 };

  for (const fullUrl of sitemapUrls) {
    const relativePath = toRelativePath(fullUrl);
    if (!relativePath) continue;

    const info = infoByUrl.get(fullUrl);
    if (!info) continue; // Không tải được trang thì bỏ qua, không đưa link hỏng vào data test

    processedPaths.add(relativePath);

    // ── PHÂN LOẠI TRANG ──────────────────────────────────────
    // Website dùng URL PHẲNG (chi tiết sản phẩm là /mcb-bkn-2p-32a-ls chứ không phải
    // /san-pham/mcb-bkn-2p-32a-ls) nên KHÔNG phân loại được bằng độ sâu path.
    // Tầng thật sự nằm trong breadcrumb:
    //   1 tầng                  → trang tổng (/san-pham, /tin-tuc, /gioi-thieu, ...)
    //   >= 2 tầng + og:type object → trang danh mục (/thiet-bi-dien-cong-nghiep)
    //   >= 2 tầng + og:type khác   → trang chi tiết
    // Lưu ý: chi tiết KHÔNG có độ sâu cố định — chi tiết sản phẩm 3 tầng nhưng chi tiết
    // dịch vụ/dự án chỉ 2 tầng — nên phải gom theo node GỐC của breadcrumb.
    const depth = info.crumbs.length;
    const hubPath = info.crumbs.find(crumb => crumb.path)?.path ?? relativePath;

    let kind: 'home' | 'hub' | 'category' | 'detail';
    if (relativePath === '/index.php') {
      kind = 'home';
    } else if (depth <= 1) {
      kind = 'hub';
    } else if (info.ogType === 'object') {
      kind = 'category';
    } else {
      kind = 'detail';
    }

    // ── LẤY MẪU ĐẠI DIỆN ─────────────────────────────────────
    let skip = false;
    if (kind === 'category') {
      if (categoryCount >= MAX_CATEGORIES) skip = true;
      else categoryCount++;
    } else if (kind === 'detail') {
      const taken = detailCounts.get(hubPath) ?? 0;
      if (taken >= MAX_DETAILS_PER_HUB) skip = true;
      else detailCounts.set(hubPath, taken + 1);
    }

    if (skip) continue;

    kindCounts[kind]++;

    // Find manual config
    const manualEntry = seoManualConfig.find(item => item.path === relativePath);

    const baseEntry: SeoPageTestData = {
      name: manualEntry?.name ?? info.name ?? relativePath,
      path: relativePath,
      priority: "medium",
      severity: "normal",
      // Chỉ trang chủ và trang tổng mới đo tốc độ (gọi PageSpeed API rất chậm)
      checkCoreWebVitals: kind === 'home' || kind === 'hub'
    };

    // Merge manual overrides over the defaults
    finalData.push({
      ...baseEntry,
      ...manualEntry
    });
  }

  console.log(
    `Phân loại: ${kindCounts.home} trang chủ, ${kindCounts.hub} trang tổng, ` +
    `${kindCounts.category} danh mục, ${kindCounts.detail} trang chi tiết.`
  );

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

  const cwvCount = finalData.filter(item => item.checkCoreWebVitals).length;
  console.log(`SEO data generated successfully with ${finalData.length} items (${cwvCount} trang có đo Core Web Vitals).`);
  console.log(`Output written to ${outputPath}`);
}

run().catch(console.error);
