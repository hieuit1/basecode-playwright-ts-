# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: MẶT TIỀN (/mat-tien-sanh-g)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 87/100 dưới ngưỡng 96%. Có 2/15 tiêu chí không đạt.
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
      - button [ref=e32] [cursor=pointer]:
        - img [ref=e33]
    - list [ref=e36]:
      - listitem [ref=e37]:
        - link "Trang chủ" [ref=e38] [cursor=pointer]:
          - /url: https://nhahangtieccuoinambo.vn/
          - img [ref=e39]
          - generic [ref=e41]: Trang chủ
      - listitem [ref=e42]:
        - text: /
        - link "Sảnh tiệc" [ref=e43] [cursor=pointer]:
          - /url: https://nhahangtieccuoinambo.vn/sanh-tiec
      - listitem [ref=e44]:
        - text: /
        - link "MẶT TIỀN - SẢNH G" [ref=e45] [cursor=pointer]:
          - /url: https://nhahangtieccuoinambo.vn/mat-tien-sanh-g
    - generic [ref=e48]:
      - heading "MẶT TIỀN - SẢNH G" [level=2] [ref=e50]
      - generic [ref=e52]:
        - paragraph [ref=e55]:
          - generic "MẶT TIỀN - SẢNH G" [ref=e56]:
            - img "MẶT TIỀN - SẢNH G" [ref=e57]
        - paragraph [ref=e60]:
          - generic "MẶT TIỀN - SẢNH G" [ref=e61]:
            - img "MẶT TIỀN - SẢNH G" [ref=e62]
        - paragraph [ref=e65]:
          - generic "MẶT TIỀN - SẢNH G" [ref=e66]:
            - img "MẶT TIỀN - SẢNH G" [ref=e67]
        - paragraph [ref=e70]:
          - generic "MẶT TIỀN - SẢNH G" [ref=e71]:
            - img "MẶT TIỀN - SẢNH G" [ref=e72]
        - paragraph [ref=e75]:
          - generic "MẶT TIỀN - SẢNH G" [ref=e76]:
            - img "MẶT TIỀN - SẢNH G" [ref=e77]
        - paragraph [ref=e80]:
          - generic "MẶT TIỀN - SẢNH G" [ref=e81]:
            - img "MẶT TIỀN - SẢNH G" [ref=e82]
        - generic [ref=e83]:
          - generic:
            - paragraph:
              - generic "MẶT TIỀN - SẢNH G":
                - img "MẶT TIỀN - SẢNH G"
    - generic [ref=e84]:
      - list [ref=e86]:
        - listitem [ref=e87]:
          - link "Garden" [ref=e88] [cursor=pointer]:
            - /url: garden
        - listitem [ref=e89]:
          - link "Wedding" [ref=e90] [cursor=pointer]:
            - /url: wedding
        - listitem [ref=e91]:
          - link "Khuyến mãi" [ref=e92] [cursor=pointer]:
            - /url: khuyen-mai
        - listitem [ref=e93]:
          - link "Sảnh tiệc" [ref=e94] [cursor=pointer]:
            - /url: sanh-tiec
        - listitem [ref=e95]:
          - link "Blog" [ref=e96] [cursor=pointer]:
            - /url: blog
        - listitem [ref=e97]:
          - link "Liên hệ" [ref=e98] [cursor=pointer]:
            - /url: lien-he
        - listitem [ref=e99]:
          - link "Tuyển dụng" [ref=e100] [cursor=pointer]:
            - /url: tuyen-dung
      - generic [ref=e103]:
        - generic [ref=e104]:
          - paragraph [ref=e105]: Nhà Hàng Tiệc Cưới Nam Bộ
          - generic [ref=e106]:
            - paragraph [ref=e107]: 615A Âu Cơ, P. Hòa Thạnh, Quận Tân Phú, TP.HCM
            - paragraph [ref=e108]: "Hotline tư vấn: 094 963 61 66"
            - paragraph [ref=e109]: "Giờ mở cửa: 8h30 - 22h30 hằng ngày"
            - paragraph [ref=e110]:
              - text: "Email:"
              - link "namboaucowedding@gmail.com" [ref=e111] [cursor=pointer]:
                - /url: http://namboaucowedding@gmail.com
          - paragraph [ref=e112]: Mạng xã hội
          - generic [ref=e113]:
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e114] [cursor=pointer]:
              - /url: https://www.facebook.com/weddingnambo/?locale=vi_VN
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e115]
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e116] [cursor=pointer]:
              - /url: ""
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e117]
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e118] [cursor=pointer]:
              - /url: https://www.tiktok.com/@nambo.wedding
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e119]
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e120] [cursor=pointer]:
              - /url: ""
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e121]
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e122] [cursor=pointer]:
              - /url: ""
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e123]
        - paragraph [ref=e126]: Chứng chỉ
        - generic [ref=e127]:
          - paragraph [ref=e128]: Fanpage
          - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e129] [cursor=pointer]:
            - /url: ""
            - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e130]
      - generic [ref=e133]:
        - generic [ref=e134]: ©2026. Nhà Hàng Tiệc Cưới Nam Bộ. Thiết kế Web MIMA
        - generic [ref=e135]:
          - generic [ref=e136]:
            - text: "Đang online:"
            - generic [ref=e137]: "276"
          - generic [ref=e138]: "|"
          - generic [ref=e139]:
            - text: "Hôm nay:"
            - generic [ref=e140]: "90"
          - generic [ref=e141]: "|"
          - generic [ref=e142]:
            - text: "Tổng truy cập:"
            - generic [ref=e143]: "29527"
    - generic [ref=e147]:
      - 'link "Call me: 094 963 61 66" [ref=e148] [cursor=pointer]':
        - /url: tel:0949636166
        - img [ref=e152]
        - generic [ref=e155]: "Call me: 094 963 61 66"
      - 'link "Zalo: 094 963 61 66" [ref=e156] [cursor=pointer]':
        - /url: https://zalo.me/0949636166
        - img [ref=e160]
        - generic [ref=e161]: "Zalo: 094 963 61 66"
  - img [ref=e164]
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
              - generic: "87"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 87/100
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
          - generic: "15"
          - generic: Tổng tiêu chí
        - generic:
          - generic: ✅ 13
          - generic: Đạt
        - generic:
          - generic: ❌ 2
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: MẶT TIỀN
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e166]:
      - generic [ref=e167]: "❌ Chi tiết lỗi cần khắc phục (2/15):"
      - generic [ref=e168]:
        - generic [ref=e169]:
          - generic [ref=e170]: 3. Heading (H1-H6)
          - generic [ref=e171]: 1 lỗi
        - generic [ref=e172]:
          - strong [ref=e174]: Heading phân cấp hợp lệ (1 lỗi)
          - generic [ref=e175]: "⚠️ Heading phân cấp sai: Nhảy cấp từ H2 → H5 (\"Đặt lịch\")"
      - generic [ref=e176]:
        - generic [ref=e177]:
          - generic [ref=e178]: 6. Liên kết (Links)
          - generic [ref=e179]: 1 lỗi
        - generic [ref=e180]:
          - strong [ref=e182]: "Không có broken links (lỗi: 2/19)"
          - generic [ref=e183]: "⚠️ Broken links: http://namboaucowedding@gmail.com (status: 0), tin-tuc (status: 404)"
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 87/100 dưới ngưỡng 96%. Có 2/15 tiêu chí không đạt.
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