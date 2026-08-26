# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Mũ bảo hộ có lỗ thoáng (/mu-bao-ho-co-lo-thoang)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 93/100 dưới ngưỡng 96%. Có 1/15 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e6]:
      - link "Ngọc Xoài Company" [ref=e8] [cursor=pointer]:
        - /url: https://code5.mimadigi.vn/2026/august/ngocxoai_113726W/
        - img "Ngọc Xoài Company" [ref=e9]
      - generic [ref=e11]:
        - textbox "Tìm kiếm..." [ref=e12]
        - paragraph [ref=e13] [cursor=pointer]:
          - generic [ref=e14]: 
      - generic [ref=e15]:
        - img "Email" [ref=e17]
        - generic [ref=e18]: "Email: luom.py.tuyan.phulong@gmail.com"
      - 'link "Hotline Hotline: 0902 217 299" [ref=e19] [cursor=pointer]':
        - /url: "tel:\n                    0902217299"
        - img "Hotline" [ref=e21]
        - generic [ref=e22]:
          - text: "Hotline:"
          - generic [ref=e23]: 0902 217 299
      - link "EN" [ref=e25] [cursor=pointer]:
        - /url: https://code5.mimadigi.vn/2026/august/ngocxoai_113726W/ngon-ngu/en/
    - generic [ref=e26]:
      - generic [ref=e29]:
        - generic [ref=e31]:
          - link " Danh mục sản phẩm" [ref=e32] [cursor=pointer]:
            - /url: san-pham
            - generic [ref=e33]: 
            - text: Danh mục sản phẩm
          - generic:
            - list:
              - listitem:
                - link "Thiết bị điện công nghiệp":
                  - /url: thiet-bi-dien-cong-nghiep
              - listitem:
                - link "Dụng cụ dùng khí nén":
                  - /url: dung-cu-dung-khi-nen
              - listitem:
                - link "Vòng bi (Bạc đạn)":
                  - /url: vong-bi-bac-dan
              - listitem:
                - link "Vật tư mài mòn":
                  - /url: vat-tu-mai-mon
              - listitem:
                - link "Máy bơm công nghiệp các loại":
                  - /url: may-bom-cong-nghiep-cac-loai
              - listitem:
                - link "Vật tư công nghiệp":
                  - /url: vat-tu-cong-nghiep
              - listitem:
                - link "Dụng cụ cầm tay dùng điện":
                  - /url: dung-cu-cam-tay-dung-dien
              - listitem:
                - link "Vật tư ngành hàn":
                  - /url: vat-tu-nganh-han
              - listitem:
                - link "Bảo hộ lao động":
                  - /url: bao-ho-lao-dong
        - list [ref=e35]:
          - listitem
          - listitem [ref=e36]:
            - link "Trang chủ" [ref=e37] [cursor=pointer]:
              - /url: https://code5.mimadigi.vn/2026/august/ngocxoai_113726W/
          - listitem [ref=e38]:
            - link "Giới thiệu" [ref=e39] [cursor=pointer]:
              - /url: gioi-thieu
          - listitem [ref=e40]:
            - link "Dịch vụ" [ref=e41] [cursor=pointer]:
              - /url: dich-vu
          - listitem [ref=e42]:
            - link "Dự án" [ref=e43] [cursor=pointer]:
              - /url: du-an
          - listitem [ref=e44]:
            - link "Đối tác" [ref=e45] [cursor=pointer]:
              - /url: doi-tac
          - listitem [ref=e46]:
            - link "Tuyển dụng" [ref=e47] [cursor=pointer]:
              - /url: tuyen-dung
          - listitem [ref=e48]:
            - link "Tin tức" [ref=e49] [cursor=pointer]:
              - /url: tin-tuc
          - listitem [ref=e50]:
            - link "Liên hệ" [ref=e51] [cursor=pointer]:
              - /url: lien-he
      - text:   
    - list [ref=e54]:
      - listitem [ref=e55]:
        - link "Trang chủ" [ref=e56] [cursor=pointer]:
          - /url: https://code5.mimadigi.vn/2026/august/ngocxoai_113726W/
          - img [ref=e57]
          - generic [ref=e59]: Trang chủ
      - listitem [ref=e60]:
        - text: /
        - link "Sản phẩm" [ref=e61] [cursor=pointer]:
          - /url: https://code5.mimadigi.vn/2026/august/ngocxoai_113726W/san-pham
      - listitem [ref=e62]:
        - text: /
        - link "Bảo hộ lao động" [ref=e63] [cursor=pointer]:
          - /url: https://code5.mimadigi.vn/2026/august/ngocxoai_113726W/bao-ho-lao-dong
      - listitem [ref=e64]:
        - text: /
        - link "Mũ bảo hộ có lỗ thoáng" [ref=e65] [cursor=pointer]:
          - /url: https://code5.mimadigi.vn/2026/august/ngocxoai_113726W/mu-bao-ho-co-lo-thoang
    - generic [ref=e68]:
      - generic [ref=e69]:
        - generic [ref=e70]:
          - link [ref=e72] [cursor=pointer]:
            - /url: thumbs/product/8m11-2-1729835086.jpg.webp
            - figure [ref=e73]:
              - img "Mũ bảo hộ có lỗ thoáng" [ref=e74]
              - generic:
                - img "Ngọc Xoài Company"
          - listbox [ref=e78]:
            - option "Mũ bảo hộ có lỗ thoáng" [ref=e79] [cursor=pointer]:
              - img "Mũ bảo hộ có lỗ thoáng" [ref=e80]
        - generic [ref=e81]:
          - generic [ref=e83]: Mũ bảo hộ có lỗ thoáng
          - list [ref=e84]:
            - listitem [ref=e85]:
              - generic [ref=e86]: "Giá:"
              - generic [ref=e88]: Liên hệ
            - listitem [ref=e89]:
              - paragraph [ref=e90]:
                - generic [ref=e91]: "Tiêu Chuẩn Chất Lượng: TCVN 6407-1998, ★CE ★ANSI Z89"
              - paragraph [ref=e92]:
                - generic [ref=e93]: "Chất Liệu: HDPE – ABS"
              - paragraph [ref=e94]:
                - generic [ref=e95]: "Loại: Có Núm Vặn – Có Lỗ Thoáng"
              - paragraph [ref=e96]:
                - generic [ref=e97]: "Màu Sắc: Màu Trắng,Vàng,Xanh dương, Xanh lá,Đỏ,Cam,Xám"
              - paragraph [ref=e98]:
                - generic [ref=e99]: "Tính Năng: Có Khả Năng Cách Điện"
      - generic [ref=e100]:
        - generic [ref=e102]: Chi tiết sản phẩm
        - generic [ref=e103]:
          - paragraph [ref=e104]:
            - generic [ref=e105]: Mũ bảo hộ được thiết kế nhằm luôn mang lại sự thoải mái , bảo vệ trong những môi trường khắc nghiệt cao
          - paragraph [ref=e106]:
            - generic [ref=e107]: Mũ bảo hộ có lỗ thoáng khí
          - paragraph [ref=e108]:
            - generic [ref=e109]: Mũ bảo hộ lao động phải luôn đảm bảo an toàn để bảo vệ người sử dụng. Hệ thống giảm xóc bên trong nón giúp người mang thoải mái và thuận lợi khi làm việc.
          - paragraph [ref=e110]:
            - generic [ref=e112]:
              - text: Sản phẩm hữu dụng bảo vệ đầu, tối ưu sự thoải mái khi mang trong nhiều môi trường làm việc khác nhau đã làm cho mũ bảo hộ là một lựa chọn tuyệt vời.
              - text: • Chịu lực cao, lớp ngoài bằng HDPE tăng cường khả năng bảo vệ tác động từ trên không
              - text: • Dây nón dệt bằng dây nylon tăng khả năng giữ cân bằng và rất bền khi sử dụng.
              - text: • Dễ dàng điều chỉnh phù hợp với người mang bằng hệ thống nút gài
              - text: • Tăng độ rộng, miếng lót trước trán tăng cường khả năng thấm hút mồ hôi, an toàn cho người sử dụng không bị mờ kiếng.
              - text: • Hệ thống dây bao trùm cả đầu, tăng cường sự mềm mại, thông thoáng cho người sử dụng.
      - generic: Sản phẩm tương tự
      - generic [ref=e116]:
        - generic [ref=e119]:
          - link "Bao tay len trắng" [ref=e121] [cursor=pointer]:
            - /url: bao-tay-len-trang
            - img "Bao tay len trắng" [ref=e122]
          - heading "Bao tay len trắng" [level=3] [ref=e123]:
            - link "Bao tay len trắng" [ref=e124] [cursor=pointer]:
              - /url: bao-tay-len-trang
          - paragraph [ref=e125]:
            - text: "Giá:"
            - generic [ref=e126]: Liên hệ
        - generic [ref=e129]:
          - link "Bao tay len phủ sơn đỏ" [ref=e131] [cursor=pointer]:
            - /url: bao-tay-len-phu-son-do
            - img "Bao tay len phủ sơn đỏ" [ref=e132]
          - heading "Bao tay len phủ sơn đỏ" [level=3] [ref=e133]:
            - link "Bao tay len phủ sơn đỏ" [ref=e134] [cursor=pointer]:
              - /url: bao-tay-len-phu-son-do
          - paragraph [ref=e135]:
            - text: "Giá:"
            - generic [ref=e136]: Liên hệ
        - generic [ref=e139]:
          - link "Bao tay hàng" [ref=e141] [cursor=pointer]:
            - /url: bao-tay-hang
            - img "Bao tay hàng" [ref=e142]
          - heading "Bao tay hàng" [level=3] [ref=e143]:
            - link "Bao tay hàng" [ref=e144] [cursor=pointer]:
              - /url: bao-tay-hang
          - paragraph [ref=e145]:
            - text: "Giá:"
            - generic [ref=e146]: Liên hệ
        - generic [ref=e149]:
          - link "Bao tay chống cắt 3M" [ref=e151] [cursor=pointer]:
            - /url: bao-tay-chong-cat-3m
            - img "Bao tay chống cắt 3M" [ref=e152]
          - heading "Bao tay chống cắt 3M" [level=3] [ref=e153]:
            - link "Bao tay chống cắt 3M" [ref=e154] [cursor=pointer]:
              - /url: bao-tay-chong-cat-3m
          - paragraph [ref=e155]:
            - text: "Giá:"
            - generic [ref=e156]: Liên hệ
        - generic [ref=e159]:
          - link "Bộ quần áo bảo hộ" [ref=e161] [cursor=pointer]:
            - /url: bo-quan-ao-bao-ho
            - img "Bộ quần áo bảo hộ" [ref=e162]
          - heading "Bộ quần áo bảo hộ" [level=3] [ref=e163]:
            - link "Bộ quần áo bảo hộ" [ref=e164] [cursor=pointer]:
              - /url: bo-quan-ao-bao-ho
          - paragraph [ref=e165]:
            - text: "Giá:"
            - generic [ref=e166]: Liên hệ
        - generic [ref=e169]:
          - link "Găng tay chống dầu" [ref=e171] [cursor=pointer]:
            - /url: gang-tay-chong-dau
            - img "Găng tay chống dầu" [ref=e172]
          - heading "Găng tay chống dầu" [level=3] [ref=e173]:
            - link "Găng tay chống dầu" [ref=e174] [cursor=pointer]:
              - /url: gang-tay-chong-dau
          - paragraph [ref=e175]:
            - text: "Giá:"
            - generic [ref=e176]: Liên hệ
        - generic [ref=e179]:
          - link "Kính bảo hộ an toàn" [ref=e181] [cursor=pointer]:
            - /url: kinh-bao-ho-an-toan
            - img "Kính bảo hộ an toàn" [ref=e182]
          - heading "Kính bảo hộ an toàn" [level=3] [ref=e183]:
            - link "Kính bảo hộ an toàn" [ref=e184] [cursor=pointer]:
              - /url: kinh-bao-ho-an-toan
          - paragraph [ref=e185]:
            - text: "Giá:"
            - generic [ref=e186]: Liên hệ
        - generic [ref=e189]:
          - link "Giày bảo hộ lao động" [ref=e191] [cursor=pointer]:
            - /url: giay-bao-ho-lao-dong
            - img "Giày bảo hộ lao động" [ref=e192]
          - heading "Giày bảo hộ lao động" [level=3] [ref=e193]:
            - link "Giày bảo hộ lao động" [ref=e194] [cursor=pointer]:
              - /url: giay-bao-ho-lao-dong
          - paragraph [ref=e195]:
            - text: "Giá:"
            - generic [ref=e196]: Liên hệ
    - generic [ref=e197]:
      - 'link "Call me: 0902217299" [ref=e198] [cursor=pointer]':
        - /url: tel:0902217299
        - img [ref=e202]
        - generic [ref=e205]: "Call me: 0902217299"
      - 'link "Zalo: 0902217299" [ref=e206] [cursor=pointer]':
        - /url: https://zalo.me/0902217299
        - img [ref=e210]
        - generic [ref=e211]: "Zalo: 0902217299"
    - generic [ref=e212]:
      - generic:
        - img "Ngọc Xoài Company"
  - contentinfo:
    - generic:
      - generic:
        - generic:
          - paragraph: Thông tin liên hệ
          - generic:
            - paragraph:
              - generic:
                - generic:
                  - generic:
                    - strong: CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ KỸ THUẬT NGỌC XOÀI
                - generic:
                  - generic:
                    - text: "Địa chỉ: 24/2/8 Đường Võ Văn Ngân, Khu phố 1, Phường Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam."
                    - text: "Chi nhánh Tỉnh Bà Rịa Vũng Tàu: Đường D10, KP. Mỹ Tân, Phường Phú Mỹ, Thành phố Hồ Chí Minh, Việt Nam."
                    - text: "Hotline: 0902 217 299"
                    - text: "Mail: ngocxoai2023@gmail.com"
                    - text: "Website: ngocxoai.com"
        - generic:
          - paragraph: Truy cập nhanh
          - list:
            - listitem:
              - link "Trang chủ":
                - /url: https://code5.mimadigi.vn/2026/august/ngocxoai_113726W/
            - listitem:
              - link "Giới thiệu":
                - /url: gioi-thieu
            - listitem:
              - link "Dịch vụ":
                - /url: dich-vu
            - listitem:
              - link "Dự án":
                - /url: du-an
            - listitem:
              - link "Đối tác":
                - /url: doi-tac
            - listitem:
              - link "Tuyển dụng":
                - /url: tuyen-dung
            - listitem:
              - link "Tin tức":
                - /url: tin-tuc
            - listitem:
              - link "Liên hệ":
                - /url: lien-he
        - generic:
          - paragraph: Chính sách
          - list:
            - listitem:
              - link "Chính sách bảo mật thông tin khách hàng":
                - /url: chinh-sach-bao-mat-thong-tin-khach-hang
            - listitem:
              - link "Chính sách đổi trả":
                - /url: chinh-sach-doi-tra
            - listitem:
              - link "Thông tin thanh toán":
                - /url: thong-tin-thanh-toan
            - listitem:
              - link "Chính sách bảo trì bảo hành":
                - /url: chinh-sach-bao-tri-bao-hanh
            - listitem:
              - link "Hướng dẫn thanh toán":
                - /url: huong-dan-thanh-toan
          - paragraph: Liên kết MXH
          - list:
            - listitem:
              - link "mxh":
                - /url: " https://www.facebook.com/share/1BxPmATEu6/"
                - img "mxh"
            - listitem:
              - link "mxh":
                - /url: ""
                - img "mxh"
            - listitem:
              - link "mxh":
                - /url: ""
                - img "mxh"
            - listitem:
              - link "mxh":
                - /url: https://zalo.me/0902217299
                - img "mxh"
        - generic:
          - paragraph: Danh mục sản phẩm
          - list:
            - listitem:
              - link "Thiết bị điện công nghiệp":
                - /url: thiet-bi-dien-cong-nghiep
            - listitem:
              - link "Dụng cụ dùng khí nén":
                - /url: dung-cu-dung-khi-nen
            - listitem:
              - link "Vòng bi (Bạc đạn)":
                - /url: vong-bi-bac-dan
            - listitem:
              - link "Vật tư mài mòn":
                - /url: vat-tu-mai-mon
            - listitem:
              - link "Máy bơm công nghiệp các loại":
                - /url: may-bom-cong-nghiep-cac-loai
            - listitem:
              - link "Vật tư công nghiệp":
                - /url: vat-tu-cong-nghiep
          - generic:
            - paragraph: Copyright © Ngọc Xoài Company. Thiết kế Web MIMA
  - img
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
          - strong: Mũ bảo hộ có lỗ thoáng
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e213]:
      - generic [ref=e214]: "❌ Chi tiết lỗi cần khắc phục (1/15):"
      - generic [ref=e215]:
        - generic [ref=e216]:
          - generic [ref=e217]: 3. Heading (H1-H6)
          - generic [ref=e218]: 1 lỗi
        - generic [ref=e219]:
          - strong [ref=e221]: Heading phân cấp hợp lệ (1 lỗi)
          - generic [ref=e222]: "⚠️ Heading phân cấp sai: Nhảy cấp từ H1 → H3 (\"Bao tay len trắng\")"
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