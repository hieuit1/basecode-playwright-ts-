# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Thư viện ảnh (/thu-vien-anh)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 80/100 dưới ngưỡng 96%. Có 4/20 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e5]:
      - paragraph [ref=e6]:
        - img [ref=e7]
        - generic [ref=e10]: Số L22-23, đường N1, Khu phố 1, Phường Trấn Biên, Đồng Nai
      - paragraph [ref=e11]:
        - img [ref=e12]
        - 'link "Email: datnt04.mima@gmail.com" [ref=e15] [cursor=pointer]':
          - /url: mailto:datnt04.mima@gmail.com
    - generic [ref=e19]:
      - link "Lorem Ipsum" [ref=e20] [cursor=pointer]:
        - /url: https://code6.mimadigi.vn/2026/september/phuongvinh_115626w/
        - img "Lorem Ipsum" [ref=e21]
      - list [ref=e22]:
        - listitem [ref=e23]:
          - link "Trang chủ" [ref=e24] [cursor=pointer]:
            - /url: https://code6.mimadigi.vn/2026/september/phuongvinh_115626w/
        - listitem [ref=e25]:
          - link "Về chúng tôi" [ref=e26] [cursor=pointer]:
            - /url: gioi-thieu
        - listitem [ref=e27]:
          - link "Dịch vụ" [ref=e28] [cursor=pointer]:
            - /url: dich-vu
            - text: Dịch vụ
            - img [ref=e29]
        - listitem [ref=e31]:
          - link "Thông tin" [ref=e32] [cursor=pointer]:
            - /url: tin-tuc
        - listitem [ref=e33]:
          - link "Album" [ref=e34] [cursor=pointer]:
            - /url: thu-vien-anh
        - listitem [ref=e35]:
          - link "Liên hệ" [ref=e36] [cursor=pointer]:
            - /url: lien-he
        - listitem [ref=e37]:
          - link "Về CEO" [ref=e38] [cursor=pointer]:
            - /url: ve-ceo
      - link "0888 080 138" [ref=e40] [cursor=pointer]:
        - /url: tel:0888080138
        - img [ref=e41]
        - generic [ref=e44]: 0888 080 138
    - list [ref=e47]:
      - listitem [ref=e48]:
        - link "Trang chủ" [ref=e49] [cursor=pointer]:
          - /url: https://code6.mimadigi.vn/2026/september/phuongvinh_115626w/
          - generic [ref=e50]: Trang chủ
      - listitem [ref=e51]:
        - text: /
        - link "Thư viện ảnh" [ref=e52] [cursor=pointer]:
          - /url: https://code6.mimadigi.vn/2026/september/phuongvinh_115626w/thu-vien-anh
    - generic [ref=e55]:
      - generic [ref=e57]: Thư viện ảnh
      - generic [ref=e58]:
        - generic [ref=e60]:
          - paragraph [ref=e61]:
            - link "anh dam phan (1) (1) (1)" [ref=e62] [cursor=pointer]:
              - /url: https://code6.mimadigi.vn/2026/september/phuongvinh_115626w/upload/product/anhthuvien-1902-1153-7783-9303.png
              - img "anh dam phan (1) (1) (1)" [ref=e63]
          - heading "anh dam phan (1) (1) (1)" [level=3] [ref=e64]:
            - generic [ref=e65]: anh dam phan (1) (1) (1)
        - generic [ref=e67]:
          - paragraph [ref=e68]:
            - link "anh dam phan (1) (1)" [ref=e69] [cursor=pointer]:
              - /url: https://code6.mimadigi.vn/2026/september/phuongvinh_115626w/upload/product/anhthuvien-1902-1153-7783.png
              - img "anh dam phan (1) (1)" [ref=e70]
          - heading "anh dam phan (1) (1)" [level=3] [ref=e71]:
            - generic [ref=e72]: anh dam phan (1) (1)
        - generic [ref=e74]:
          - paragraph [ref=e75]:
            - link "anh dam phan (1)" [ref=e76] [cursor=pointer]:
              - /url: https://code6.mimadigi.vn/2026/september/phuongvinh_115626w/upload/product/anhthuvien-1902-1153.png
              - img "anh dam phan (1)" [ref=e77]
          - heading "anh dam phan (1)" [level=3] [ref=e78]:
            - generic [ref=e79]: anh dam phan (1)
        - generic [ref=e81]:
          - paragraph [ref=e82]:
            - link "anh dam phan" [ref=e83] [cursor=pointer]:
              - /url: https://code6.mimadigi.vn/2026/september/phuongvinh_115626w/upload/product/anhthuvien-1902.png
              - img "anh dam phan" [ref=e84]
          - heading "anh dam phan" [level=3] [ref=e85]:
            - generic [ref=e86]: anh dam phan
    - generic [ref=e88]:
      - generic [ref=e89]:
        - generic [ref=e90]:
          - link "Lorem Ipsum" [ref=e91] [cursor=pointer]:
            - /url: https://code6.mimadigi.vn/2026/september/phuongvinh_115626w/
            - img "Lorem Ipsum" [ref=e92]
          - generic [ref=e93]:
            - link "Facebook" [ref=e94] [cursor=pointer]:
              - /url: ""
              - img "Facebook" [ref=e95]
            - link "Message" [ref=e96] [cursor=pointer]:
              - /url: ""
              - img "Message" [ref=e97]
            - link "Instargam" [ref=e98] [cursor=pointer]:
              - /url: ""
              - img "Instargam" [ref=e99]
            - link "Tiktok" [ref=e100] [cursor=pointer]:
              - /url: https://vt.tiktok.com/ZS9nuW1De/
              - img "Tiktok" [ref=e101]
            - link "Youtobe" [ref=e102] [cursor=pointer]:
              - /url: ""
              - img "Youtobe" [ref=e103]
            - link "Shoppee" [ref=e104] [cursor=pointer]:
              - /url: https://s.shopee.vn/2LO7k4zLQF
              - img "Shoppee" [ref=e105]
        - generic [ref=e106]:
          - generic [ref=e107]: Thông tin liên hệ
          - paragraph [ref=e109]: "Chi nhánh 2 Công ty TNHH Cung Ứng Nội Thất Hân Di - Mã số chi nhánh: 0315524871-002 - Ngày cấp: 24/11/2022 - Địa chỉ: 314 Trần Thị Năm, Khu phố 9, Phường Trung Mỹ Tây, Thành phố Hồ Chí Minh, Việt Nam - Người đại diện theo pháp luật: Ngô Kim Sang - Điện thoại: 0934004552"
        - generic [ref=e110]:
          - generic [ref=e111]: Về Phượng Vinh
          - list [ref=e112]:
            - listitem [ref=e113]:
              - link "Trang chủ" [ref=e114] [cursor=pointer]:
                - /url: https://code6.mimadigi.vn/2026/september/phuongvinh_115626w/
            - listitem [ref=e115]:
              - link "Về chúng tôi" [ref=e116] [cursor=pointer]:
                - /url: gioi-thieu
            - listitem [ref=e117]:
              - link "Thông tin" [ref=e118] [cursor=pointer]:
                - /url: tin-tuc
            - listitem [ref=e119]:
              - link "Album" [ref=e120] [cursor=pointer]:
                - /url: thu-vien-anh
            - listitem [ref=e121]:
              - link "Về CEO" [ref=e122] [cursor=pointer]:
                - /url: ve-ceo
            - listitem [ref=e123]:
              - link "Liên hệ" [ref=e124] [cursor=pointer]:
                - /url: lien-he
        - generic [ref=e125]:
          - generic [ref=e126]: Dịch vụ
          - list [ref=e127]:
            - listitem [ref=e128]:
              - link "Dịch vụ ly hôn" [ref=e129] [cursor=pointer]:
                - /url: dich-vu-ly-hon
            - listitem [ref=e130]:
              - link "Pháp lý văn bản" [ref=e131] [cursor=pointer]:
                - /url: phap-ly-van-ban
            - listitem [ref=e132]:
              - link "Tư vấn pháp luật" [ref=e133] [cursor=pointer]:
                - /url: tu-van-phap-luat
            - listitem [ref=e134]:
              - link "Pháp nhân đại diện" [ref=e135] [cursor=pointer]:
                - /url: phap-nhan-dai-dien
            - listitem [ref=e136]:
              - link "Thành lập cty hộ Kinh doanh" [ref=e137] [cursor=pointer]:
                - /url: thanh-lap-cty-ho-kinh-doanh
            - listitem [ref=e138]:
              - link "Soạn thảo văn bản Review hợp đồng" [ref=e139] [cursor=pointer]:
                - /url: soan-thao-van-ban-review-hop-dong
      - generic [ref=e140]:
        - generic [ref=e141]:
          - generic [ref=e142]: CÔNG TY LUẬT TRÁCH NHIỆM HỮU HẠN MỘT THÀNH VIÊN PHƯỢNG VINH
          - generic [ref=e143]:
            - text: MST 3604083212 cấp ngày 06/02/2026 cấp bởi Sở Tư Pháp TP Đồng Nai
            - text: Bản quyền thuộc về Phượng Vinh ©2026. Thiết kế web MIMA.
        - generic [ref=e144]:
          - generic [ref=e145]: Hỗ trợ khách hàng
          - list [ref=e146]:
            - listitem [ref=e147]:
              - link "Câu hỏi thường gặp" [ref=e148] [cursor=pointer]:
                - /url: cau-hoi-thuong-gap
            - listitem [ref=e149]:
              - link "Chính sách & Điều khoản" [ref=e150] [cursor=pointer]:
                - /url: chinh-sach-dieu-khoan
        - generic [ref=e151]:
          - generic [ref=e152]: Giờ làm việc
          - list [ref=e153]:
            - listitem [ref=e154]: T2 - CN, 8:00 đến 17:30
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
              - generic: "80"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 80/100
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
          - generic: "20"
          - generic: Tổng tiêu chí
        - generic:
          - generic: ✅ 16
          - generic: Đạt
        - generic:
          - generic: ❌ 4
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: Thư viện ảnh
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e155]:
      - generic [ref=e156]: "❌ Chi tiết lỗi cần khắc phục (4/20):"
      - generic [ref=e157]:
        - generic [ref=e158]:
          - generic [ref=e159]: 3. Heading (H1-H6)
          - generic [ref=e160]: 1 lỗi
        - generic [ref=e161]:
          - strong [ref=e163]: Heading phân cấp hợp lệ (1 lỗi)
          - generic [ref=e164]: "⚠️ Heading phân cấp sai: Nhảy cấp từ H1 → H3 (\"anh dam phan (1) (1) (1)\")"
      - generic [ref=e165]:
        - generic [ref=e166]:
          - generic [ref=e167]: 8. Tốc độ & Core Web Vitals
          - generic [ref=e168]: 3 lỗi
        - generic [ref=e169]:
          - strong [ref=e171]: "[📱 MOBILE (ƯU TIÊN)] Tổng điểm Performance: 50/100 (≥ 60)"
          - generic [ref=e172]: ⚠️ [📱 MOBILE (ƯU TIÊN)] Điểm Performance 50/100 dưới ngưỡng 60. Phân tích chi tiết LCP/CLS/INP bên dưới...
        - generic [ref=e173]:
          - strong [ref=e175]: "[📱 MOBILE (ƯU TIÊN)] LCP (Largest Contentful Paint): 5411ms (< 2500ms)"
          - generic [ref=e176]:
            - text: "⚠️ [📱 MOBILE (ƯU TIÊN)] LCP quá cao: 5411ms (chuẩn: < 2.5s) → Thủ phạm LCP:"
            - img "Lorem ...</div> </div> <div style=" [ref=e177]
            - strong [ref=e179]: "[📱 MOBILE (ƯU TIÊN)] CLS (Cumulative Layout Shift): 0.222 (< 0.1)"
            - generic [ref=e180]:
              - text: "⚠️ [📱 MOBILE (ƯU TIÊN)] CLS quá cao: 0.222 (chuẩn: < 0.1) → Thủ phạm CLS: -"
              - generic [ref=e181]:
                - text: "-"
                - generic [ref=e182]:
                  - text: "-"
                  - generic [ref=e183]: "-"
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 80/100 dưới ngưỡng 96%. Có 4/20 tiêu chí không đạt.
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