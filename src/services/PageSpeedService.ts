import * as dotenv from "dotenv";

dotenv.config();

export interface CoreWebVitals {
  lcp: number | null; // Largest Contentful Paint (ms)
  cls: number | null; // Cumulative Layout Shift
  inp: number | null; // Interaction to Next Paint (ms)
  score: number | null; // Performance Score (0-100), lab data only
  insights?: {
    lcpElement: string | null;
    clsElements: string[];
    renderBlocking: string | null;
  };
}

// Giới hạn số request PSI chạy song song trong toàn bộ suite
let activeRequests = 0;
const MAX_CONCURRENT = 1;
const queue: Array<() => void> = [];

async function acquireSlot(): Promise<void> {
  if (activeRequests < MAX_CONCURRENT) {
    activeRequests++;
    return;
  }
  return new Promise((resolve) => queue.push(resolve));
}

function releaseSlot() {
  activeRequests--;
  const next = queue.shift();
  if (next) {
    activeRequests++;
    next();
  }
}

export class PageSpeedService {
  private apiKey: string | undefined;
  private readonly timeoutMs = 180000;
  private readonly maxRetries = 3;

  constructor() {
    this.apiKey = process.env.PAGESPEED_API_KEY;
  }

  public isAvailable(): boolean {
    return !!this.apiKey;
  }

  // Hàm public — chỉ lo việc xếp hàng rồi gọi fetchWithRetry
  public async getCoreWebVitals(
    url: string,
    strategy: "mobile" | "desktop" = "mobile"
  ): Promise<CoreWebVitals | null> {
    if (!this.apiKey) {
      return null;
    }

    await acquireSlot();
    try {
      return await this.fetchWithRetry(url, strategy);
    } finally {
      releaseSlot();
    }
  }

  // Hàm private — lo việc gọi API thật + retry khi bị 429/5xx
  private async fetchWithRetry(
    url: string,
    strategy: "mobile" | "desktop",
    attempt = 1
  ): Promise<CoreWebVitals | null> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);

    try {
      const endpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
        url
      )}&key=${this.apiKey}&strategy=${strategy}&category=performance`;

      const response = await fetch(endpoint, { signal: controller.signal });

      if (!response.ok) {
        const bodyText = await response.text().catch(() => "(không đọc được response body)");
        console.error(
          `[PageSpeedService] HTTP ${response.status} strategy=${strategy} attempt=${attempt} url=${url}\nBody: ${bodyText}`
        );

        if ((response.status === 429 || response.status >= 500) && attempt <= this.maxRetries) {
          const backoffMs = attempt * 5000; // 5s, 10s, 15s...
          console.warn(`[PageSpeedService] Retry lần ${attempt} sau ${backoffMs}ms...`);
          await new Promise((r) => setTimeout(r, backoffMs));
          return this.fetchWithRetry(url, strategy, attempt + 1);
        }
        return null;
      }

      const data = await response.json();
      return this.parseResponse(data);
    } catch (error) {
      console.log(
        `[PageSpeedService][EXCEPTION] strategy=${strategy} attempt=${attempt} | name=${(error as Error).name} | message=${(error as Error).message}`
      );
      if (attempt <= this.maxRetries && (error as Error).name === "AbortError") {
        return this.fetchWithRetry(url, strategy, attempt + 1);
      }
      return null;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  // Hàm private — tách riêng phần parse dữ liệu trả về, logic giữ nguyên như file gốc
  private parseResponse(data: any): CoreWebVitals {
    const fieldMetrics =
      data.loadingExperience?.metrics || data.originLoadingExperience?.metrics || null;

    let lcp: number | null = null;
    let cls: number | null = null;
    let inp: number | null = null;

    if (fieldMetrics) {
      lcp = fieldMetrics["LARGEST_CONTENTFUL_PAINT_MS"]?.percentile ?? null;
      cls = fieldMetrics["CUMULATIVE_LAYOUT_SHIFT_SCORE"]?.percentile ?? null;
      // CrUX trả CLS *1000 dạng percentile (vd 8 = 0.008), quy đổi lại về thang thật
      if (cls !== null) cls = cls / 100;
      inp = fieldMetrics["INTERACTION_TO_NEXT_PAINT"]?.percentile ?? null;
    }

    // ---- 2. Fallback về Lab Data (Lighthouse) nếu thiếu field data ----
    const audits = data.lighthouseResult?.audits || {};

    if (lcp === null) {
      lcp = audits["largest-contentful-paint"]?.numericValue ?? null;
    }
    if (cls === null) {
      cls = audits["cumulative-layout-shift"]?.numericValue ?? null;
    }
    if (inp === null) {
      // Tuỳ phiên bản Lighthouse, key có thể là "interaction-to-next-paint"
      // hoặc "experimental-interaction-to-next-paint"
      inp =
        audits["interaction-to-next-paint"]?.numericValue ??
        audits["experimental-interaction-to-next-paint"]?.numericValue ??
        null;
    }

    const perfScoreRaw = data.lighthouseResult?.categories?.performance?.score;
    const score = perfScoreRaw != null ? Math.round(perfScoreRaw * 100) : null;

    // LCP Element (hỗ trợ cả version mới và cũ của Lighthouse)
    let lcpElement = null;
    const lcpDiscoveryItems = audits["lcp-discovery-insight"]?.details?.items;
    if (lcpDiscoveryItems) {
      const nodeItem = lcpDiscoveryItems.find(
        (item: any) => item.type === "node" || item.snippet || item.nodeLabel
      );
      lcpElement = nodeItem?.snippet || nodeItem?.nodeLabel || null;
    }
    if (!lcpElement) {
      const oldLcpItem = audits["largest-contentful-paint-element"]?.details?.itemsA?.[0];
      lcpElement = oldLcpItem?.node?.snippet || oldLcpItem?.node?.nodeLabel || oldLcpItem?.url || null;
    }

    // CLS Elements
    const clsItems =
      audits["layout-shifts"]?.details?.items || audits["layout-shift-elements"]?.details?.items;
    const clsElements = clsItems
      ? clsItems.map((item: any) => item.node?.snippet || item.node?.nodeLabel).filter(Boolean)
      : [];

    const renderBlocking = audits["render-blocking-resources"]?.displayValue || null;

    return {
      lcp: lcp !== null ? Math.round(lcp) : null,
      cls: cls !== null ? Number(cls.toFixed(3)) : null,
      inp: inp !== null ? Math.round(inp) : null,
      score,
      insights: { lcpElement, clsElements, renderBlocking },
    };
  }
}