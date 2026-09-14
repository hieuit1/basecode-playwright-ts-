# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Liên hệ (/lien-he)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 90/100 dưới ngưỡng 96%. Có 2/21 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]: CÔNG TY TNHH SÂM CAO CẤP CHUẨN HÀN ACT
    - generic [ref=e7]:
      - link "CÔNG TY TNHH SÂM CAO CẤP CHUẨN HÀN ACT" [ref=e8] [cursor=pointer]:
        - /url: https://code6.mimadigi.vn/2026/august/samcaocap_113426w/
        - img "CÔNG TY TNHH SÂM CAO CẤP CHUẨN HÀN ACT" [ref=e9]
      - list [ref=e10]:
        - listitem [ref=e11]:
          - link "Trang chủ" [ref=e12] [cursor=pointer]:
            - /url: https://code6.mimadigi.vn/2026/august/samcaocap_113426w/
        - listitem [ref=e13]:
          - link "Giới thiệu" [ref=e14] [cursor=pointer]:
            - /url: gioi-thieu
        - listitem [ref=e15]:
          - link "Sản phẩm" [ref=e16] [cursor=pointer]:
            - /url: san-pham
            - text: Sản phẩm
            - img [ref=e17]
        - listitem [ref=e19]:
          - link "Khuyến mãi" [ref=e20] [cursor=pointer]:
            - /url: khuyen-mai
        - listitem [ref=e21]:
          - link "Tin tức" [ref=e22] [cursor=pointer]:
            - /url: tin-tuc
        - listitem [ref=e23]:
          - link "Liên hệ" [ref=e24] [cursor=pointer]:
            - /url: lien-he
        - listitem [ref=e25]:
          - link "0888 080 138" [ref=e26] [cursor=pointer]:
            - /url: tel:0888080138
            - img [ref=e27]
            - generic [ref=e30]: 0888 080 138
    - list [ref=e33]:
      - listitem [ref=e34]:
        - link "Trang chủ" [ref=e35] [cursor=pointer]:
          - /url: https://code6.mimadigi.vn/2026/august/samcaocap_113426w/
          - img [ref=e36]
          - generic [ref=e38]: Trang chủ
      - listitem [ref=e39]:
        - link "Liên hệ" [ref=e40] [cursor=pointer]:
          - /url: https://code6.mimadigi.vn/2026/august/samcaocap_113426w/lien-he
    - generic [ref=e45]:
      - generic [ref=e47]: Liên hệ
      - tablist
      - generic [ref=e48]:
        - generic [ref=e49]:
          - generic:
            - tabpanel
        - generic [ref=e50]:
          - generic [ref=e51]:
            - generic [ref=e53]:
              - textbox "Họ và tên" [ref=e54]
              - generic: Họ và tên
            - generic [ref=e56]:
              - textbox "Số điện thoại" [ref=e57]
              - generic: Số điện thoại
            - generic [ref=e59]:
              - textbox "Địa chỉ" [ref=e60]
              - generic: Địa chỉ
            - generic [ref=e62]:
              - textbox "Email" [ref=e63]
              - generic: Email
          - generic [ref=e65]:
            - textbox "Chủ đề" [ref=e66]:
              - /placeholder: Dịch vụ quan tâm
            - generic: Chủ đề
          - generic [ref=e68]:
            - textbox "Nội dung" [ref=e69]
            - generic: Nội dung
          - button "Gửi" [ref=e70] [cursor=pointer]
          - button "Nhập lại" [ref=e71] [cursor=pointer]
      - iframe [ref=e73]:
        - generic [active] [ref=f3e1]:
          - link "Xem đường đi (mở trong thẻ mới)" [ref=f3e6] [cursor=pointer]:
            - /url: https://www.google.com/maps/dir//''/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x3174d98a2bfdadb5:0xcdbc96951b7064e7!3e0?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF
            - img [ref=f3e10]
          - generic [ref=f3e13]:
            - generic:
              - button "Phím tắt"
            - region "Bản đồ" [ref=f3e14]
            - generic [ref=f3e15]:
              - iframe [ref=f3e73]:
                
              - button "Các chế độ điều khiển camera trên bản đồ" [ref=f3e75] [cursor=pointer]
              - button "Hiển thị hình ảnh qua vệ tinh" [ref=f3e78] [cursor=pointer]:
                - generic [ref=f3e82]:
                  - region [ref=f3e83]
                  - iframe [ref=f3e89]:
                    
              - img "Google" [ref=f3e91]
              - generic [ref=f3e92]:
                - button "Phím tắt" [ref=f3e98] [cursor=pointer]
                - generic [ref=f3e103]: Dữ liệu bản đồ ©2026 Google
                - link "Điều khoản (mở trong thẻ mới)" [ref=f3e108] [cursor=pointer]:
                  - /url: https://www.google.com/intl/vi_US/help/terms_maps.html
                  - text: Điều khoản
                - link "Báo cáo một lỗi bản đồ (mở trong thẻ mới)" [ref=f3e113] [cursor=pointer]:
                  - /url: https://www.google.com/maps/@10.9553344,106.8051898,16z/data=!10m1!1e1!12b1?source=apiv3&rapsrc=apiv3
                  - text: Báo cáo một lỗi bản đồ
    - generic [ref=e76]:
      - generic [ref=e78]:
        - textbox "Email" [ref=e79]
        - button "Đăng Ký" [ref=e80] [cursor=pointer]
      - generic [ref=e82]:
        - generic [ref=e83]: Theo Dõi Chúng Tôi Tại
        - generic [ref=e84]:
          - link "Facebook" [ref=e85] [cursor=pointer]:
            - /url: ""
            - img "Facebook" [ref=e86]
          - link "Message" [ref=e87] [cursor=pointer]:
            - /url: ""
            - img "Message" [ref=e88]
          - link "Instargam" [ref=e89] [cursor=pointer]:
            - /url: ""
            - img "Instargam" [ref=e90]
          - link "Tiktok" [ref=e91] [cursor=pointer]:
            - /url: https://vt.tiktok.com/ZS9nuW1De/
            - img "Tiktok" [ref=e92]
          - link "Youtobe" [ref=e93] [cursor=pointer]:
            - /url: ""
            - img "Youtobe" [ref=e94]
          - link "Shoppee" [ref=e95] [cursor=pointer]:
            - /url: https://s.shopee.vn/2LO7k4zLQF
            - img "Shoppee" [ref=e96]
    - generic [ref=e97]:
      - generic [ref=e100]:
        - generic [ref=e101]:
          - link "CÔNG TY TNHH SÂM CAO CẤP CHUẨN HÀN ACT" [ref=e102] [cursor=pointer]:
            - /url: https://code6.mimadigi.vn/2026/august/samcaocap_113426w/
            - img "CÔNG TY TNHH SÂM CAO CẤP CHUẨN HÀN ACT" [ref=e103]
          - paragraph [ref=e104]: Thông Tin Liên Hệ
          - list [ref=e106]:
            - listitem [ref=e107]: "Địa chỉ: Số L22-23, đường N1, Khu phố 1, Phường Trấn Biên, Đồng Nai"
            - listitem [ref=e108]:
              - text: "Hotline:"
              - link "0888 080 138" [ref=e109] [cursor=pointer]:
                - /url: tel:0888080138
            - listitem [ref=e110]:
              - text: "Email:"
              - link "hoahd98.mima@gmail.com" [ref=e111] [cursor=pointer]:
                - /url: mailto:hoahd98.mima@gmail.com
        - generic [ref=e112]:
          - paragraph [ref=e113]: Danh Mục Sản Phẩm
          - list [ref=e114]:
            - listitem [ref=e115]:
              - link "Nhân sâm hàn quốc" [ref=e116] [cursor=pointer]:
                - /url: nhan-sam-han-quoc
            - listitem [ref=e117]:
              - link "Tinh dầu thông đỏ" [ref=e118] [cursor=pointer]:
                - /url: tinh-dau-thong-do
            - listitem [ref=e119]:
              - link "An cung bổ não" [ref=e120] [cursor=pointer]:
                - /url: an-cung-bo-nao
            - listitem [ref=e121]:
              - link "Đông trùng hạ thảo" [ref=e122] [cursor=pointer]:
                - /url: dong-trung-ha-thao
            - listitem [ref=e123]:
              - link "Nấm Linh Chi" [ref=e124] [cursor=pointer]:
                - /url: nam-linh-chi
        - generic [ref=e125]:
          - paragraph [ref=e126]: Chính Sách
          - list
      - generic [ref=e129]: Copyright @ 2026 CÔNG TY TNHH SÂM CAO CẤP CHUẨN HÀN ACT. All Right Reserved. Thiết kế Web MIMA
    - generic [ref=e130]:
      - 'link "Call me: 0888080138" [ref=e131] [cursor=pointer]':
        - /url: tel:0888080138
        - img [ref=e135]
        - generic [ref=e138]: "Call me: 0888080138"
      - 'link "Zalo: 0888080138" [ref=e139] [cursor=pointer]':
        - /url: https://zalo.me/0888080138
        - img [ref=e143]
        - generic [ref=e144]: "Zalo: 0888080138"
  - generic:
    - generic:
      - generic: 🎯 BÁO CÁO SEO AUDIT CHUYÊN SÂU
      - generic: SEO Báo cáo (Tự động)
    - generic:
      - generic: ══ KẾT QUẢ CHẤM ĐIỂM SEO ══
      - generic:
        - generic:
          - generic:
            - generic:
              - generic: "90"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 90/100
          - generic:
            - generic: "Đánh giá:"
            - strong: 🟢 TỐT
          - generic:
            - generic: "Ngưỡng đạt:"
            - generic: 70%
          - generic:
            - generic: "Kết quả:"
            - generic: ✅ PASS
      - generic:
        - generic:
          - generic: "21"
          - generic: Tổng tiêu chí
        - generic:
          - generic: ✅ 19
          - generic: Đạt
        - generic:
          - generic: ❌ 2
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: Liên hệ
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e145]:
      - generic [ref=e146]: "❌ Chi tiết lỗi cần khắc phục (2/21):"
      - generic [ref=e147]:
        - generic [ref=e148]:
          - generic [ref=e149]: 8. Tốc độ & Core Web Vitals
          - generic [ref=e150]: 2 lỗi
        - generic [ref=e151]:
          - strong [ref=e153]: "[📱 MOBILE (ƯU TIÊN)] Tổng điểm Performance: 56/100 (≥ 60)"
          - generic [ref=e154]: ⚠️ [📱 MOBILE (ƯU TIÊN)] Điểm Performance 56/100 dưới ngưỡng 60. Phân tích chi tiết LCP/CLS/INP bên dưới...
        - generic [ref=e155]:
          - strong [ref=e157]: "[📱 MOBILE (ƯU TIÊN)] LCP (Largest Contentful Paint): 16097ms (< 2500ms)"
          - generic [ref=e158]:
            - text: "⚠️ [📱 MOBILE (ƯU TIÊN)] LCP quá cao: 16097ms (chuẩn: < 2.5s) → Thủ phạm LCP:"
            - generic [ref=e159]: CÔNG TY TNHH SÂM CAO CẤP CHUẨN HÀN ACT
            - text: "[Vấn đề]: Phần tử LCP là dạng..."
```

# Test source

```ts
  103 |         return Math.round((this.passedChecks / this.totalChecks) * 100);
  104 |     }
  105 | 
  106 |     /** Lấy thống kê chi tiết */
  107 |     get stats() {
  108 |         return {
  109 |             total: this.totalChecks,
  110 |             passed: this.passedChecks,
  111 |             failed: this.totalChecks - this.passedChecks,
  112 |             score: this.score,
  113 |             failures: [...this.failures],
  114 |         };
  115 |     }
  116 | 
  117 |     async finalizeScore(page: Page, threshold = 70): Promise<void> {
  118 |         const { total, passed, failed, score, failures } = this.stats;
  119 | 
  120 |         // Xác định trạng thái
  121 |         const isPass = score >= threshold;
  122 |         const statusText = isPass ? "PASS" : "FAIL";
  123 | 
  124 |         // Thang điểm SEO mới
  125 |         let scoreLabel: string;
  126 |         let statusIcon: string;
  127 |         if (score >= 93) {
  128 |             scoreLabel = "XUẤT SẮC";
  129 |             statusIcon = "💎";
  130 |         } else if (score >= 77) {
  131 |             scoreLabel = "TỐT";
  132 |             statusIcon = "🟢";
  133 |         } else if (score >= 65) {
  134 |             scoreLabel = "KHÁ";
  135 |             statusIcon = "🟡";
  136 |         } else if (score >= 50) {
  137 |             scoreLabel = "TRUNG BÌNH";
  138 |             statusIcon = "🟠";
  139 |         } else {
  140 |             scoreLabel = "KÉM";
  141 |             statusIcon = "🔴";
  142 |         }
  143 | 
  144 |         // Tạo báo cáo tổng kết dạng text
  145 |         const summaryLines = [
  146 |             `══════════════════════════════════════`,
  147 |             `   ${statusIcon} KẾT QUẢ CHẤM ĐIỂM SEO`,
  148 |             `══════════════════════════════════════`,
  149 |             `   Điểm số:     ${score}/100`,
  150 |             `   Đánh giá:    ${scoreLabel}`,
  151 |             `   Ngưỡng đạt:  ${threshold}%`,
  152 |             `   Kết quả:     ${statusText}`,
  153 |             `──────────────────────────────────────`,
  154 |             `   Tổng tiêu chí:  ${total}`,
  155 |             `   ✅ Đạt:          ${passed}`,
  156 |             `   ❌ Không đạt:    ${failed}`,
  157 |             `══════════════════════════════════════`,
  158 |         ];
  159 | 
  160 |         if (failures.length > 0) {
  161 |             summaryLines.push(``, `📋 CHI TIẾT LỖI CẦN KHẮC PHỤC (${failed}/${total}):`);
  162 | 
  163 |             // Group errors by their assigned group
  164 |             const groupedFailures = failures.reduce((acc, f) => {
  165 |                 if (!acc[f.group]) acc[f.group] = [];
  166 |                 acc[f.group].push(f);
  167 |                 return acc;
  168 |             }, {} as Record<string, ScorecardFailure[]>);
  169 | 
  170 |             let globalIndex = 1;
  171 |             for (const [group, items] of Object.entries(groupedFailures)) {
  172 |                 summaryLines.push(`--- ${group.toUpperCase()} ---`);
  173 |                 items.forEach((f) => {
  174 |                     summaryLines.push(`   ${globalIndex}. [${f.step}]`);
  175 |                     summaryLines.push(`      → ${f.message}`);
  176 |                     globalIndex++;
  177 |                 });
  178 |             }
  179 |         }
  180 | 
  181 |         const summaryText = summaryLines.join("\n");
  182 | 
  183 |         // Step cuối cùng — hiển thị bảng điểm + quyết định PASS/FAIL
  184 |         await customStep(
  185 |             page,
  186 |             `🏆 Kết quả chấm điểm SEO: ${score}/100 — ${statusText} (${scoreLabel})`,
  187 |             async () => {
  188 |                 // Đính kèm bảng điểm text
  189 |                 await allure.attachment(
  190 |                     "Bảng điểm SEO",
  191 |                     Buffer.from(summaryText, "utf-8"),
  192 |                     "text/plain"
  193 |                 );
  194 | 
  195 |                 // Gắn description vào Test Case trên Allure
  196 |                 await allure.description(
  197 |                     `[${statusText}] Điểm SEO: ${score}/100 | Đạt: ${passed}/${total} tiêu chí | Ngưỡng: ${threshold}%\n\n` +
  198 |                     `${scoreLabel}`
  199 |                 );
  200 | 
  201 |                 // 🚀 ĐÂY LÀ DÒNG DUY NHẤT quyết định Test PASS hay FAIL
  202 |                 if (!isPass) {
> 203 |                     throw new Error(
      |                           ^ Error: ❌ FAIL — Điểm SEO 90/100 dưới ngưỡng 96%. Có 2/21 tiêu chí không đạt.
  204 |                         `❌ FAIL — Điểm SEO ${score}/100 dưới ngưỡng ${threshold}%. ` +
  205 |                         `Có ${failed}/${total} tiêu chí không đạt.`
  206 |                     );
  207 |                 }
  208 |             },
  209 |             { screenshot: true }
  210 |         );
  211 |     }
  212 | }
```