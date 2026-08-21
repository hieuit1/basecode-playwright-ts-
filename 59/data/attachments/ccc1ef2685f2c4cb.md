# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: SẢNH ALACARTE (/sanh-alacarte)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 93/100 dưới ngưỡng 96%. Có 1/15 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e7]:
      - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e9] [cursor=pointer]:
        - /url: https://nhahangtieccuoinambo.vn/
        - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e10]
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link [ref=e13] [cursor=pointer]:
            - /url: ""
        - listitem [ref=e15]:
          - link "Giới thiệu" [ref=e16] [cursor=pointer]:
            - /url: gioi-thieu
        - listitem [ref=e17]:
          - link "Dịch vụ" [ref=e18] [cursor=pointer]:
            - /url: dich-vu
        - listitem [ref=e19]:
          - link "Menu" [ref=e20] [cursor=pointer]:
            - /url: menu
        - listitem [ref=e21]:
          - link "Tiệc cưới - báo hỷ" [ref=e22] [cursor=pointer]:
            - /url: tiec-cuoi-bao-hy
        - listitem [ref=e23]:
          - link "Liên hệ" [ref=e24] [cursor=pointer]:
            - /url: lien-he
        - listitem [ref=e25]:
          - link "Blog" [ref=e26] [cursor=pointer]:
            - /url: blog
        - listitem [ref=e27]:
          - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e28]
          - combobox [ref=e29]:
            - option "VN" [selected]
            - option "EN"
            - option "CN"
            - option "JA"
            - option "KO"
            - option "FR"
    - list [ref=e32]:
      - listitem [ref=e33]:
        - link "Trang chủ" [ref=e34] [cursor=pointer]:
          - /url: https://nhahangtieccuoinambo.vn/
          - img [ref=e35]
          - generic [ref=e37]: Trang chủ
      - listitem [ref=e38]:
        - text: /
        - link "Sảnh tiệc" [ref=e39] [cursor=pointer]:
          - /url: https://nhahangtieccuoinambo.vn/sanh-tiec
      - listitem [ref=e40]:
        - text: /
        - link "SẢNH ALACARTE" [ref=e41] [cursor=pointer]:
          - /url: https://nhahangtieccuoinambo.vn/sanh-alacarte
    - generic [ref=e44]:
      - heading "SẢNH ALACARTE" [level=2] [ref=e46]
      - generic [ref=e48]:
        - paragraph [ref=e51]:
          - generic "SẢNH ALACARTE" [ref=e52]:
            - img "SẢNH ALACARTE" [ref=e53]
        - paragraph [ref=e56]:
          - generic "SẢNH ALACARTE" [ref=e57]:
            - img "SẢNH ALACARTE" [ref=e58]
        - paragraph [ref=e61]:
          - generic "SẢNH ALACARTE" [ref=e62]:
            - img "SẢNH ALACARTE" [ref=e63]
        - paragraph [ref=e66]:
          - generic "SẢNH ALACARTE" [ref=e67]:
            - img "SẢNH ALACARTE" [ref=e68]
        - paragraph [ref=e71]:
          - generic "SẢNH ALACARTE" [ref=e72]:
            - img "SẢNH ALACARTE" [ref=e73]
        - paragraph [ref=e76]:
          - generic "SẢNH ALACARTE" [ref=e77]:
            - img "SẢNH ALACARTE" [ref=e78]
        - generic [ref=e79]:
          - generic:
            - paragraph:
              - generic "SẢNH ALACARTE":
                - img "SẢNH ALACARTE"
        - generic [ref=e80]:
          - generic:
            - paragraph:
              - generic "SẢNH ALACARTE":
                - img "SẢNH ALACARTE"
        - generic [ref=e81]:
          - generic:
            - paragraph:
              - generic "SẢNH ALACARTE":
                - img "SẢNH ALACARTE"
        - generic [ref=e82]:
          - generic:
            - paragraph:
              - generic "SẢNH ALACARTE":
                - img "SẢNH ALACARTE"
        - generic [ref=e83]:
          - generic:
            - paragraph:
              - generic "SẢNH ALACARTE":
                - img "SẢNH ALACARTE"
        - generic [ref=e84]:
          - generic:
            - paragraph:
              - generic "SẢNH ALACARTE":
                - img "SẢNH ALACARTE"
        - generic [ref=e85]:
          - generic:
            - paragraph:
              - generic "SẢNH ALACARTE":
                - img "SẢNH ALACARTE"
        - generic [ref=e86]:
          - generic:
            - paragraph:
              - generic "SẢNH ALACARTE":
                - img "SẢNH ALACARTE"
        - generic [ref=e87]:
          - generic:
            - paragraph:
              - generic "SẢNH ALACARTE":
                - img "SẢNH ALACARTE"
        - generic [ref=e88]:
          - generic:
            - paragraph:
              - generic "SẢNH ALACARTE":
                - img "SẢNH ALACARTE"
        - generic [ref=e89]:
          - generic:
            - paragraph:
              - generic "SẢNH ALACARTE":
                - img "SẢNH ALACARTE"
    - generic [ref=e90]:
      - list [ref=e92]:
        - listitem [ref=e93]:
          - link "Garden" [ref=e94] [cursor=pointer]:
            - /url: garden
        - listitem [ref=e95]:
          - link "Wedding" [ref=e96] [cursor=pointer]:
            - /url: wedding
        - listitem [ref=e97]:
          - link "Khuyến mãi" [ref=e98] [cursor=pointer]:
            - /url: khuyen-mai
        - listitem [ref=e99]:
          - link "Sảnh tiệc" [ref=e100] [cursor=pointer]:
            - /url: sanh-tiec
        - listitem [ref=e101]:
          - link "Blog" [ref=e102] [cursor=pointer]:
            - /url: blog
        - listitem [ref=e103]:
          - link "Liên hệ" [ref=e104] [cursor=pointer]:
            - /url: lien-he
        - listitem [ref=e105]:
          - link "Tuyển dụng" [ref=e106] [cursor=pointer]:
            - /url: tuyen-dung
      - generic [ref=e109]:
        - generic [ref=e110]:
          - paragraph [ref=e111]: Nhà Hàng Tiệc Cưới Nam Bộ
          - generic [ref=e112]:
            - paragraph [ref=e113]: 615A Âu Cơ, P. Hòa Thạnh, Quận Tân Phú, TP.HCM
            - paragraph [ref=e114]: "Hotline tư vấn: 094 963 61 66"
            - paragraph [ref=e115]: "Giờ mở cửa: 8h30 - 22h30 hằng ngày"
            - paragraph [ref=e116]:
              - text: "Email:"
              - link "namboaucowedding@gmail.com" [ref=e117] [cursor=pointer]:
                - /url: http://namboaucowedding@gmail.com
          - paragraph [ref=e118]: Mạng xã hội
          - generic [ref=e119]:
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e120] [cursor=pointer]:
              - /url: https://www.facebook.com/weddingnambo/?locale=vi_VN
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e121]
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e122] [cursor=pointer]:
              - /url: ""
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e123]
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e124] [cursor=pointer]:
              - /url: https://www.tiktok.com/@nambo.wedding
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e125]
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e126] [cursor=pointer]:
              - /url: ""
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e127]
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e128] [cursor=pointer]:
              - /url: ""
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e129]
        - paragraph [ref=e132]: Chứng chỉ
        - generic [ref=e133]:
          - paragraph [ref=e134]: Fanpage
          - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e135] [cursor=pointer]:
            - /url: ""
            - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e136]
      - generic [ref=e139]:
        - generic [ref=e140]: ©2026. Nhà Hàng Tiệc Cưới Nam Bộ. Thiết kế Web MIMA
        - generic [ref=e141]:
          - generic [ref=e142]:
            - text: "Đang online:"
            - generic [ref=e143]: "790"
          - generic [ref=e144]: "|"
          - generic [ref=e145]:
            - text: "Hôm nay:"
            - generic [ref=e146]: "52"
          - generic [ref=e147]: "|"
          - generic [ref=e148]:
            - text: "Tổng truy cập:"
            - generic [ref=e149]: "29866"
    - generic [ref=e153]:
      - 'link "Call me: 094 963 61 66" [ref=e154] [cursor=pointer]':
        - /url: tel:0949636166
        - img [ref=e158]
        - generic [ref=e161]: "Call me: 094 963 61 66"
      - 'link "Zalo: 094 963 61 66" [ref=e162] [cursor=pointer]':
        - /url: https://zalo.me/0949636166
        - img [ref=e166]
        - generic [ref=e167]: "Zalo: 094 963 61 66"
  - img [ref=e170]
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
          - strong: SẢNH ALACARTE
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e172]:
      - generic [ref=e173]: "❌ Chi tiết lỗi cần khắc phục (1/15):"
      - generic [ref=e174]:
        - generic [ref=e175]:
          - generic [ref=e176]: 6. Liên kết (Links)
          - generic [ref=e177]: 1 lỗi
        - generic [ref=e178]:
          - strong [ref=e180]: "Không có broken links (lỗi: 2/19)"
          - generic [ref=e181]: "⚠️ Broken links: http://namboaucowedding@gmail.com (status: 0), tin-tuc (status: 404)"
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