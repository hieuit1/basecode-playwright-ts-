# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: GIẢI TRÍ (/mau-xe-hyber)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 93/100 dưới ngưỡng 96%. Có 1/15 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e5]:
    - generic [ref=e6]:
      - generic [ref=e12] [cursor=pointer]: Menu
      - button "Flag" [ref=e15] [cursor=pointer]:
        - img "Flag" [ref=e16]
        - img
    - link "BALLANTINE HOTEL" [ref=e19] [cursor=pointer]:
      - /url: https://code2.mimadigi.vn/2026/august/ballantine_112326w/
      - img "BALLANTINE HOTEL" [ref=e20]
    - generic [ref=e21]:
      - button "Hệ thống hotel" [ref=e23] [cursor=pointer]
      - button "Đặt phòng" [ref=e25] [cursor=pointer]
  - list [ref=e28]:
    - listitem [ref=e29]:
      - link "Trang chủ" [ref=e30] [cursor=pointer]:
        - /url: https://code2.mimadigi.vn/2026/august/ballantine_112326w/
        - img [ref=e31]
        - generic [ref=e33]: Trang chủ
    - listitem [ref=e34]:
      - text: /
      - link "GIẢI TRÍ" [ref=e35] [cursor=pointer]:
        - /url: https://code2.mimadigi.vn/2026/august/ballantine_112326w/mau-xe-hyber
  - generic [ref=e37]:
    - generic [ref=e39]: GIẢI TRÍ
    - generic [ref=e42]:
      - generic [ref=e44]:
        - generic [ref=e45]:
          - img [ref=e46]
          - img [ref=e48]
          - img [ref=e50]
          - img [ref=e52]
          - img [ref=e54]
        - heading "PHÒNG SUITE Ballantine" [level=3] [ref=e56]:
          - link "PHÒNG SUITE Ballantine" [ref=e57] [cursor=pointer]:
            - /url: phong-suite-ballantine
        - generic [ref=e58]:
          - paragraph [ref=e60]: Số phòng
          - paragraph [ref=e62]: Số giường
          - paragraph [ref=e64]: Diện tích
        - generic [ref=e65]:
          - link "0837 701 111" [ref=e66] [cursor=pointer]:
            - /url: tel:0837701111
          - paragraph [ref=e67]: Gọi Ballantine ngay
        - link "Khám phá" [ref=e69] [cursor=pointer]:
          - /url: phong-suite-ballantine
      - link "PHÒNG SUITE Ballantine" [ref=e72] [cursor=pointer]:
        - /url: phong-suite-ballantine
        - img "PHÒNG SUITE Ballantine" [ref=e73]
  - generic [ref=e74]:
    - generic [ref=e76]:
      - generic [ref=e78]:
        - link "BALLANTINE HOTEL" [ref=e79] [cursor=pointer]:
          - /url: https://code2.mimadigi.vn/2026/august/ballantine_112326w/
          - img "BALLANTINE HOTEL" [ref=e80]
        - paragraph [ref=e81]: BALLANTINE HOTEL
        - paragraph [ref=e83]: "Địa chỉ: 68-70 Lê Văn Thiêm, khu đô thị Phú Mỹ Hưng, Phường Tân Phong, Quận 7, TP. Hồ Chí Minh - Mã số thuế: 0317208046 - Điện thoại: 0837701111, Email: ballantinehotel1111@gmail.com"
        - paragraph [ref=e84]: Theo dõi chúng tôi tại
        - generic [ref=e85]:
          - link "Facebook" [ref=e86] [cursor=pointer]:
            - /url: ""
            - img "Facebook" [ref=e87]
          - link "Message" [ref=e88] [cursor=pointer]:
            - /url: ""
            - img "Message" [ref=e89]
          - link "Instargam" [ref=e90] [cursor=pointer]:
            - /url: ""
            - img "Instargam" [ref=e91]
          - link "Tiktok" [ref=e92] [cursor=pointer]:
            - /url: https://vt.tiktok.com/ZS9nuW1De/
            - img "Tiktok" [ref=e93]
      - img "BALLANTINE HOTEL" [ref=e95]
    - generic [ref=e99]: Copyright ©2026 Web Mima. All Rights Reserved. Thiết kế Web MIMA
  - generic [ref=e100]:
    - link "Wechat" [ref=e101] [cursor=pointer]:
      - /url: ""
      - img [ref=e105]
    - link "Kakaotalk" [ref=e114] [cursor=pointer]:
      - /url: ""
      - img [ref=e118]:
        - generic [ref=e121]: TALK
    - 'link "Call me: 0837701111" [ref=e122] [cursor=pointer]':
      - /url: tel:0837701111
      - img [ref=e126]
      - generic [ref=e129]: "Call me: 0837701111"
    - 'link "Zalo: 0837701111" [ref=e130] [cursor=pointer]':
      - /url: https://zalo.me/0837701111
      - img [ref=e134]
      - generic [ref=e135]: "Zalo: 0837701111"
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
              - generic: "93"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 93/100
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
          - generic: "15"
          - generic: Tổng tiêu chí
        - generic:
          - generic: ✅ 14
          - generic: Đạt
        - generic:
          - generic: ❌ 1
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: GIẢI TRÍ
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e136]:
      - generic [ref=e137]: "❌ Chi tiết lỗi cần khắc phục (1/15):"
      - generic [ref=e138]:
        - generic [ref=e139]:
          - generic [ref=e140]: 3. Heading (H1-H6)
          - generic [ref=e141]: 1 lỗi
        - generic [ref=e142]:
          - strong [ref=e144]: Heading phân cấp hợp lệ (2 lỗi)
          - generic [ref=e145]: "⚠️ Heading phân cấp sai: Nhảy cấp từ H1 → H3 (\"PHÒNG SUITE Ballantine\"); Nhảy cấp từ H3 → H5 (\"Đặt phòng\")"
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 93/100 dưới ngưỡng 96%. Có 1/15 tiêu chí không đạt.
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