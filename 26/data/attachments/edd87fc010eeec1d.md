# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/uiMobile.spec.ts >> Mobile UI Tests >> [dichvu] [Toàn bộ trang] Đánh giá trên Mobile
- Location: tests/ui/uiMobile.spec.ts:29:21

# Error details

```
Error: AI báo lỗi: Phát hiện lỗi cắt xén văn bản (text truncation) ở tiêu đề thanh thông báo đầu trang và tiêu đề mục chính sách ở chân trang.
Đã đính kèm 2 ảnh chi tiết lỗi vào báo cáo.

expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e4]:
    - generic [ref=e5]: Bền bỉ mọi cung đường
    - img "Lorem Ipsum" [ref=e6]
    - generic [ref=e7]: Bền bỉ mọi cung đường
    - img "Lorem Ipsum" [ref=e8]
    - generic [ref=e9]: Bền bỉ mọi cung đường
    - img "Lorem Ipsum" [ref=e10]
    - generic [ref=e11]: Bền bỉ mọi cung đường
    - img "Lorem Ipsum" [ref=e12]
    - generic [ref=e13]: Bền bỉ mọi cung đường
    - img "Lorem Ipsum" [ref=e14]
    - generic [ref=e15]: Bền bỉ mọi cung đường
    - img "Lorem Ipsum" [ref=e16]
    - generic [ref=e17]: Bền bỉ mọi cung đường
    - img "Lorem Ipsum" [ref=e18]
    - generic [ref=e19]: Bền bỉ mọi cung đường
    - img "Lorem Ipsum" [ref=e20]
    - generic [ref=e21]: Bền bỉ mọi cung đường
    - img "Lorem Ipsum" [ref=e22]
    - generic [ref=e23]: Bền bỉ mọi cung đường
    - img "Lorem Ipsum" [ref=e24]
  - list [ref=e27]:
    - listitem [ref=e28]:
      - link "Trang chủ" [ref=e29]:
        - /url: https://code4.mimadigi.vn/2026/august/buivanquy_111126W/
        - img [ref=e30]
        - generic [ref=e32]: Trang chủ
    - listitem [ref=e33]:
      - text: /
      - link "Dịch vụ" [ref=e34]:
        - /url: https://code4.mimadigi.vn/2026/august/buivanquy_111126W/dich-vu
  - generic [ref=e38]:
    - heading "Dịch vụ" [level=2] [ref=e40]:
      - img [ref=e41]
      - generic [ref=e44]: Dịch vụ
      - img [ref=e45]
    - generic [ref=e48]:
      - generic [ref=e50]:
        - link "Danh mục dịch vụ 1" [ref=e51]:
          - /url: danh-muc-dich-vu-1
          - img "Danh mục dịch vụ 1" [ref=e52]
        - generic [ref=e53]:
          - heading "Danh mục dịch vụ 1" [level=3] [ref=e54]:
            - link "Danh mục dịch vụ 1" [ref=e55]:
              - /url: danh-muc-dich-vu-1
          - paragraph [ref=e56]: Mô tả danh mục dịch vụ 1
      - generic [ref=e58]:
        - link "Danh mục dịch vụ 2" [ref=e59]:
          - /url: danh-muc-dich-vu-2
          - img "Danh mục dịch vụ 2" [ref=e60]
        - generic [ref=e61]:
          - heading "Danh mục dịch vụ 2" [level=3] [ref=e62]:
            - link "Danh mục dịch vụ 2" [ref=e63]:
              - /url: danh-muc-dich-vu-2
          - paragraph [ref=e64]: Mô tả danh mục dịch vụ 2
      - generic [ref=e66]:
        - link "Danh mục dịch vụ 3" [ref=e67]:
          - /url: danh-muc-dich-vu-3
          - img "Danh mục dịch vụ 3" [ref=e68]
        - generic [ref=e69]:
          - heading "Danh mục dịch vụ 3" [level=3] [ref=e70]:
            - link "Danh mục dịch vụ 3" [ref=e71]:
              - /url: danh-muc-dich-vu-3
          - paragraph [ref=e72]: Mô tả danh mục dịch vụ 3
      - generic [ref=e74]:
        - link "Danh mục dịch vụ 4" [ref=e75]:
          - /url: danh-muc-dich-vu-4
          - img "Danh mục dịch vụ 4" [ref=e76]
        - heading "Danh mục dịch vụ 4" [level=3] [ref=e78]:
          - link "Danh mục dịch vụ 4" [ref=e79]:
            - /url: danh-muc-dich-vu-4
      - generic [ref=e81]:
        - link "Danh mục dịch vụ 5" [ref=e82]:
          - /url: danh-muc-dich-vu-5
          - img "Danh mục dịch vụ 5" [ref=e83]
        - heading "Danh mục dịch vụ 5" [level=3] [ref=e85]:
          - link "Danh mục dịch vụ 5" [ref=e86]:
            - /url: danh-muc-dich-vu-5
  - generic [ref=e87]:
    - generic [ref=e88]:
      - link "Lorem Ipsum" [ref=e90]:
        - /url: https://code4.mimadigi.vn/2026/august/buivanquy_111126W/
        - img "Lorem Ipsum" [ref=e91]
      - generic [ref=e92]:
        - generic [ref=e93]:
          - paragraph [ref=e94]: Thông tin liên hệ
          - list [ref=e95]:
            - listitem [ref=e96]:
              - 'link "Địa chỉ: Số L22-23, đường N1, Khu phố 1, Phường Trấn Biên, Đồng Nai" [ref=e97]':
                - /url: https://maps.app.goo.gl/JD2W7Ho6mb8Hrmsw6
                - img [ref=e98]
                - generic [ref=e100]: "Địa chỉ: Số L22-23, đường N1, Khu phố 1, Phường Trấn Biên, Đồng Nai"
            - listitem [ref=e101]:
              - 'link "Hotline: 0888080138" [ref=e102]':
                - /url: tel:0888080138
                - img [ref=e103]
                - generic [ref=e106]: "Hotline: 0888080138"
            - listitem [ref=e107]:
              - 'link "Email: hoahd98.mima@gmail.com" [ref=e108]':
                - /url: mailto:hoahd98.mima@gmail.com
                - img [ref=e109]
                - generic [ref=e111]: "Email: hoahd98.mima@gmail.com"
          - paragraph [ref=e112]: Theo dõi chúng tôi tại
          - generic [ref=e113]:
            - link "Facebook" [ref=e114]:
              - /url: ""
              - img "Facebook" [ref=e115]
            - link "Message" [ref=e116]:
              - /url: ""
              - img "Message" [ref=e117]
            - link "Instargam" [ref=e118]:
              - /url: ""
              - img "Instargam" [ref=e119]
            - link "Tiktok" [ref=e120]:
              - /url: https://vt.tiktok.com/ZS9nuW1De/
              - img "Tiktok" [ref=e121]
            - link "Youtobe" [ref=e122]:
              - /url: ""
              - img "Youtobe" [ref=e123]
            - link "Shoppee" [ref=e124]:
              - /url: https://s.shopee.vn/2LO7k4zLQF
              - img "Shoppee" [ref=e125]
        - generic [ref=e126]:
          - paragraph [ref=e127]: Dịch vụ
          - list [ref=e128]:
            - listitem [ref=e129]:
              - link "Danh mục dịch vụ 1" [ref=e130]:
                - /url: danh-muc-dich-vu-1
            - listitem [ref=e131]:
              - link "Danh mục dịch vụ 2" [ref=e132]:
                - /url: danh-muc-dich-vu-2
            - listitem [ref=e133]:
              - link "Danh mục dịch vụ 3" [ref=e134]:
                - /url: danh-muc-dich-vu-3
            - listitem [ref=e135]:
              - link "Danh mục dịch vụ 4" [ref=e136]:
                - /url: danh-muc-dich-vu-4
            - listitem [ref=e137]:
              - link "Danh mục dịch vụ 5" [ref=e138]:
                - /url: danh-muc-dich-vu-5
        - generic [ref=e139]:
          - paragraph [ref=e140]: Chính sách & hỗ trợ KH
          - list [ref=e141]:
            - listitem [ref=e142]:
              - link "Tư vấn tận tâm" [ref=e143]:
                - /url: tu-van-tan-tam
            - listitem [ref=e144]:
              - link "Phụ tùng chính hãng" [ref=e145]:
                - /url: phu-tung-chinh-hang
            - listitem [ref=e146]:
              - link "Hỗ trợ cứu hộ 24/7" [ref=e147]:
                - /url: ho-tro-cuu-ho-247
            - listitem [ref=e148]:
              - link "Bảo hành dịch vụ" [ref=e149]:
                - /url: bao-hanh-dich-vu
            - listitem [ref=e150]:
              - link "Báo giá minh bạch" [ref=e151]:
                - /url: bao-gia-minh-bach
    - paragraph [ref=e154]: Copyright ©2026 Web Mima. All Rights Reserved. Thiết kế Web MIMA
```

# Test source

```ts
  4   | import * as fs from 'fs';
  5   | import { UiPage } from '../pages/ui/UiPage';
  6   | import { VisualAnnotator } from '../services/VisualAnnotator';
  7   | import { GeminiVision } from '../services/GeminiVision';
  8   | import { UiSectionTestData } from '../../data/ui/uiTypes';
  9   | 
  10  | export class UiMobileHelper {
  11  |     static async runMobileHeuristic(
  12  |         page: Page,
  13  |         uiPage: UiPage,
  14  |         data: UiSectionTestData,
  15  |         testInfo: TestInfo
  16  |     ) {
  17  |         const BASE_URL = (process.env.BASE_URL || '').replace(/\/$/, '');
  18  | 
  19  |         if (!BASE_URL) {
  20  |             test.skip(true, 'Thiếu BASE_URL trong .env');
  21  |             return;
  22  |         }
  23  | 
  24  |         const fullUrl = `${BASE_URL}${data.path}`;
  25  |         const diffDir = path.join(testInfo.outputDir, 'mobile-issues');
  26  | 
  27  |         const actualImagePath = path.join(diffDir, `${data.sectionName.replace(/[^a-z0-9]/gi, '_')}_mobile.png`);
  28  |         if (!fs.existsSync(diffDir)) fs.mkdirSync(diffDir, { recursive: true });
  29  | 
  30  |         await test.step(`1. Chụp ảnh màn hình thiết bị Mobile cho "${data.sectionName}"`, async () => {
  31  |             const locator = await uiPage.gotoSection(fullUrl, data.selector);
  32  |             await uiPage.hideDynamicElements();
  33  |             await uiPage.prepareForScreenshot();
  34  | 
  35  |             const isVisible = await locator.isVisible({ timeout: 10000 }).catch(() => false);
  36  |             if (!isVisible) {
  37  |                 throw new Error(`Không tìm thấy element "${data.selector}" trên trang ${fullUrl}`);
  38  |             }
  39  | 
  40  |             await page.screenshot({
  41  |                 path: actualImagePath,
  42  |                 fullPage: true,
  43  |                 animations: 'disabled'
  44  |             });
  45  |             await allure.attachment('Mobile Screenshot', fs.readFileSync(actualImagePath), 'image/png');
  46  |         });
  47  | 
  48  |         let aiResult: { pass: boolean, reason: string, issues?: Array<{ description: string, anchor_text?: string, web_box_2d: [number, number, number, number] }> };
  49  |         await test.step('2. AI Đánh giá UX/UI', async () => {
  50  |             const gemini = new GeminiVision();
  51  |             aiResult = await gemini.evaluateMobileUI(actualImagePath);
  52  |             await allure.parameter('AI Pass', String(aiResult.pass));
  53  |             await allure.attachment('AI Reason', Buffer.from(aiResult.reason, 'utf-8'), 'text/plain');
  54  | 
  55  |             if (!aiResult.pass && aiResult.issues && aiResult.issues.length > 0) {
  56  |                 // Tinh chỉnh độ chuẩn xác của tọa độ bằng Playwright
  57  |                 const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  58  |                 const pageWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  59  | 
  60  |                 for (const issue of aiResult.issues) {
  61  |                     if (issue.anchor_text) {
  62  |                         try {
  63  |                             const el = page.getByText(issue.anchor_text).first();
  64  |                             if (await el.isVisible({ timeout: 1000 })) {
  65  |                                 const box = await el.boundingBox();
  66  |                                 if (box) {
  67  |                                     const padding = 20;
  68  |                                     const ymin = Math.max(0, box.y - padding);
  69  |                                     const xmin = Math.max(0, box.x - padding);
  70  |                                     const ymax = Math.min(pageHeight, box.y + box.height + padding);
  71  |                                     const xmax = Math.min(pageWidth, box.x + box.width + padding);
  72  |                                     
  73  |                                     issue.web_box_2d = [
  74  |                                         (ymin / pageHeight) * 1000,
  75  |                                         (xmin / pageWidth) * 1000,
  76  |                                         (ymax / pageHeight) * 1000,
  77  |                                         (xmax / pageWidth) * 1000
  78  |                                     ];
  79  |                                 }
  80  |                             }
  81  |                         } catch (e) {
  82  |                             // Fallback dùng tọa độ của AI nếu không tìm thấy text
  83  |                         }
  84  |                     }
  85  |                 }
  86  | 
  87  |                 const snippetResults = await VisualAnnotator.annotateMobileIssues(
  88  |                     actualImagePath,
  89  |                     diffDir,
  90  |                     data.sectionName,
  91  |                     aiResult.issues
  92  |                 );
  93  | 
  94  |                 let idx = 1;
  95  |                 for (const snippet of snippetResults) {
  96  |                     await allure.attachment(`Lỗi ${idx}: ${snippet.description.substring(0, 30)}...`, fs.readFileSync(snippet.outputPath), 'image/png');
  97  |                     idx++;
  98  |                 }
  99  |                 aiResult.reason += `\nĐã đính kèm ${snippetResults.length} ảnh chi tiết lỗi vào báo cáo.`;
  100 |             }
  101 |         });
  102 | 
  103 |         await test.step('3. Kiểm tra kết quả', async () => {
> 104 |             expect(aiResult!.pass, `AI báo lỗi: ${aiResult!.reason}`).toBe(true);
      |                                                                       ^ Error: AI báo lỗi: Phát hiện lỗi cắt xén văn bản (text truncation) ở tiêu đề thanh thông báo đầu trang và tiêu đề mục chính sách ở chân trang.
  105 |         });
  106 |     }
  107 | }
  108 | 
```