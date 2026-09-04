# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Liên hệ (/lien-he)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 95/100 dưới ngưỡng 96%. Có 1/21 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - link "Rimtech Việt Nam" [ref=e5] [cursor=pointer]:
      - /url: https://rimtechvietnam.com/
      - figure "Rimtech Việt Nam" [ref=e6]:
        - img "Rimtech Việt Nam" [ref=e7]
        - generic [ref=e8]: Rimtech Việt Nam
    - generic [ref=e9]:
      - navigation [ref=e10]:
        - list [ref=e11]:
          - listitem [ref=e12]:
            - link "Rimtech Việt Nam" [ref=e13] [cursor=pointer]:
              - /url: https://rimtechvietnam.com/
              - text: Trang chủ
          - listitem [ref=e14]:
            - link "Rimtech Việt Nam" [ref=e15] [cursor=pointer]:
              - /url: gioi-thieu
              - text: Giới thiệu
          - listitem [ref=e16]:
            - link "Rimtech Việt Nam" [ref=e17] [cursor=pointer]:
              - /url: dich-vu
              - text: Dịch vụ
            - text: 
          - listitem [ref=e18]:
            - link "Rimtech Việt Nam" [ref=e19] [cursor=pointer]:
              - /url: san-pham
              - text: Sản phẩm
            - text: 
          - listitem [ref=e20]:
            - link "Rimtech Việt Nam" [ref=e21] [cursor=pointer]:
              - /url: dao-tao
              - text: Đào tạo
            - text: 
          - listitem [ref=e22]:
            - link "Rimtech Việt Nam" [ref=e23] [cursor=pointer]:
              - /url: ""
              - text: Thông tin
            - text: 
          - listitem [ref=e24]:
            - link "Rimtech Việt Nam" [ref=e25] [cursor=pointer]:
              - /url: lien-he
              - text: Liên hệ
      - generic [ref=e29] [cursor=pointer]: 
  - list [ref=e32]:
    - listitem [ref=e33]:
      - link "Rimtech Việt Nam" [ref=e34] [cursor=pointer]:
        - /url: https://rimtechvietnam.com/
        - generic [ref=e35]: Trang chủ
    - listitem [ref=e36]:
      - text: /
      - link "Rimtech Việt Nam" [ref=e37] [cursor=pointer]:
        - /url: https://rimtechvietnam.com/lien-he
        - text: Liên hệ
  - generic [ref=e42]:
    - generic [ref=e44]: Liên hệ
    - tablist [ref=e45]
    - generic [ref=e46]:
      - tabpanel [ref=e49]:
        - generic [ref=e50]:
          - paragraph [ref=e51]:
            - strong [ref=e52]: CÔNG TY TNHH RIMTECH VIỆT NAM
          - paragraph [ref=e53]: "Địa chỉ: 142 Giao Thông Hào, Ấp 19, Xã Bình Chánh, TP. Hồ Chí Minh"
          - paragraph [ref=e54]: "Hotline: 0974.034.084 - 0949 303 664 Mr Phong"
          - paragraph [ref=e55]: "Email: rimtechvietnam@gmail.com"
          - paragraph [ref=e56]:
            - generic [ref=e57]: "Website: www.rimtechvietnam.com"
      - generic [ref=e58]:
        - generic [ref=e59]:
          - generic [ref=e61]:
            - textbox "Họ và tên" [ref=e62]
            - generic: Họ và tên
          - generic [ref=e64]:
            - textbox "Số điện thoại" [ref=e65]
            - generic: Số điện thoại
          - generic [ref=e67]:
            - textbox "Địa chỉ" [ref=e68]
            - generic: Địa chỉ
          - generic [ref=e70]:
            - textbox "Email" [ref=e71]
            - generic: Email
        - generic [ref=e73]:
          - textbox "Chủ đề" [ref=e74]:
            - /placeholder: Dịch vụ quan tâm
          - generic: Chủ đề
        - generic [ref=e76]:
          - textbox "Nội dung" [ref=e77]
          - generic: Nội dung
        - button "Gửi" [ref=e78] [cursor=pointer]
        - button "Nhập lại" [ref=e79] [cursor=pointer]
    - iframe [ref=e81]:
      - generic [active] [ref=f1e1]:
        - link "Xem đường đi (mở trong thẻ mới)" [ref=f1e6] [cursor=pointer]:
          - /url: https://www.google.com/maps/dir//''/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x31752bd226000a35:0x9d4bd0d304e59066!3e0?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF
          - img [ref=f1e10]
        - generic [ref=f1e13]:
          - generic:
            - button "Phím tắt"
          - region "Bản đồ" [ref=f1e14]
          - generic [ref=f1e15]:
            - iframe [ref=f1e73]:
              
            - button "Các chế độ điều khiển camera trên bản đồ" [ref=f1e75] [cursor=pointer]
            - button "Hiển thị bản đồ phố" [ref=f1e78] [cursor=pointer]:
              - generic [ref=f1e82]:
                - region [ref=f1e83]
                - iframe [ref=f1e89]:
                  
            - img "Google" [ref=f1e91]
            - generic [ref=f1e92]:
              - button "Phím tắt" [ref=f1e98] [cursor=pointer]
              - generic [ref=f1e103]: Dữ liệu bản đồ ©2026 Hình ảnh ©2026 Maxar Technologies
              - link "Điều khoản (mở trong thẻ mới)" [ref=f1e108] [cursor=pointer]:
                - /url: https://www.google.com/intl/vi_US/help/terms_maps.html
                - text: Điều khoản
              - link "Báo cáo một lỗi bản đồ (mở trong thẻ mới)" [ref=f1e113] [cursor=pointer]:
                - /url: https://www.google.com/maps/@10.6741063,106.5892198,16z/data=!3m1!1e3!10m1!1e1!12b1?source=apiv3&rapsrc=apiv3
                - text: Báo cáo một lỗi bản đồ
  - contentinfo [ref=e82]:
    - generic [ref=e83]:
      - generic [ref=e85]:
        - generic [ref=e86]:
          - link "Rimtech Việt Nam" [ref=e89] [cursor=pointer]:
            - /url: https://rimtechvietnam.com/
            - figure "Rimtech Việt Nam" [ref=e90]:
              - img "Rimtech Việt Nam" [ref=e91]
              - generic [ref=e92]: Rimtech Việt Nam
          - separator [ref=e93]
          - generic [ref=e95]:
            - generic [ref=e96]: Công Ty TNHH Rimtech Việt Nam
            - generic [ref=e97]:
              - paragraph [ref=e98]: "Địa chỉ: 142 Giao Thông Hào,Ấp 19,Xã Bình Chánh,TP. HCM"
              - paragraph [ref=e99]:
                - text: "Hotline:"
                - generic "Rimtech Việt Nam" [ref=e100]: 0974.034.084 Mr Phong
              - paragraph [ref=e101]: "Email: rimtechvietnam@gmail.com"
              - paragraph [ref=e102]: "Website: www.rimtechvietnam.com"
        - generic [ref=e104]:
          - generic [ref=e105]: Follow us
          - list [ref=e106]:
            - listitem [ref=e107]:
              - link "Rimtech Việt Nam" [ref=e108] [cursor=pointer]:
                - /url: https://www.youtube.com/@RIMTECHVI%E1%BB%86TNAM
                - figure "Youtube" [ref=e110]:
                  - img "Youtube" [ref=e111]
                  - generic [ref=e112]: Youtube
            - listitem [ref=e113]:
              - link "Rimtech Việt Nam" [ref=e114] [cursor=pointer]:
                - /url: https://www.tiktok.com/@rimtech.vietnam?_t=ZS-8zemr8qrntZ&_r=1
                - figure "TikTok" [ref=e116]:
                  - img "TikTok" [ref=e117]
                  - generic [ref=e118]: TikTok
            - listitem [ref=e119]:
              - link "Rimtech Việt Nam" [ref=e120] [cursor=pointer]:
                - /url: https://zalo.me/0974034084
                - figure "Zalo" [ref=e122]:
                  - img "Zalo" [ref=e123]
                  - generic [ref=e124]: Zalo
            - listitem [ref=e125]:
              - link "Rimtech Việt Nam" [ref=e126] [cursor=pointer]:
                - /url: ""
                - figure "Facebook" [ref=e128]:
                  - img "Facebook" [ref=e129]
                  - generic [ref=e130]: Facebook
      - generic [ref=e132]:
        - generic [ref=e133]: Copyright © Rimtech Việt Nam. Thiết kế web MIMA
        - generic [ref=e134]:
          - link "Rimtech Việt Nam" [ref=e135] [cursor=pointer]:
            - /url: sitemap.xml
            - text: Sitemap
          - text: "|"
          - link "Rimtech Việt Nam" [ref=e136] [cursor=pointer]:
            - /url: chinh-sach
            - text: Chính sách
    - link "Rimtech Việt Nam" [ref=e142] [cursor=pointer]:
      - /url: tel:0949303664
      - generic [ref=e143]: 
      - text: "0949303664"
    - generic [ref=e144]:
      - link "Rimtech Việt Nam" [ref=e145] [cursor=pointer]:
        - /url: https://www.tiktok.com/@rimtech.vietnam?_t=ZS-8zemr8qrntZ&_r=1
        - img "Tiktok" [ref=e149]
      - link "Rimtech Việt Nam" [ref=e150] [cursor=pointer]:
        - /url: https://zalo.me/0974034084
        - img "Zalo" [ref=e154]
      - link "Rimtech Việt Nam" [ref=e155] [cursor=pointer]:
        - /url: https://www.youtube.com/@RIMTECHVI%E1%BB%86TNAM
        - img "Youtube" [ref=e159]
      - link "Rimtech Việt Nam" [ref=e160] [cursor=pointer]:
        - /url: https://maps.app.goo.gl/jebun2CPUNHf9V6d7
        - img "Map" [ref=e164]
    - button "" [ref=e165] [cursor=pointer]:
      - generic [ref=e166]: 
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
              - generic: "95"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 95/100
          - generic:
            - generic: "Đánh giá:"
            - strong: 💎 XUẤT SẮC
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
          - generic: ✅ 20
          - generic: Đạt
        - generic:
          - generic: ❌ 1
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: Liên hệ
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e167]:
      - generic [ref=e168]: "❌ Chi tiết lỗi cần khắc phục (1/21):"
      - generic [ref=e169]:
        - generic [ref=e170]:
          - generic [ref=e171]: 8. Tốc độ & Core Web Vitals
          - generic [ref=e172]: 1 lỗi
        - generic [ref=e173]:
          - strong [ref=e175]: "[💻 Desktop] Tổng điểm Performance: 52/100 (≥ 60)"
          - generic [ref=e176]: ⚠️ [💻 Desktop] Điểm Performance 52/100 dưới ngưỡng 60. Phân tích chi tiết LCP/CLS/INP bên dưới...
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 95/100 dưới ngưỡng 96%. Có 1/21 tiêu chí không đạt.
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