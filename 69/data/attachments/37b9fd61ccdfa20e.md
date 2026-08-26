# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Bộ quần áo bảo hộ (/bo-quan-ao-bao-ho)
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
        - link "Bộ quần áo bảo hộ" [ref=e65] [cursor=pointer]:
          - /url: https://code5.mimadigi.vn/2026/august/ngocxoai_113726W/bo-quan-ao-bao-ho
    - generic [ref=e68]:
      - generic [ref=e69]:
        - generic [ref=e70]:
          - link [ref=e72] [cursor=pointer]:
            - /url: thumbs/product/quan-ao-dep-net-10-1729835274.jpg.webp
            - figure [ref=e73]:
              - img "Bộ quần áo bảo hộ" [ref=e74]
              - generic:
                - img "Ngọc Xoài Company"
          - listbox [ref=e78]:
            - option "Bộ quần áo bảo hộ" [ref=e79] [cursor=pointer]:
              - img "Bộ quần áo bảo hộ" [ref=e80]
        - generic [ref=e81]:
          - generic [ref=e83]: Bộ quần áo bảo hộ
          - list [ref=e84]:
            - listitem [ref=e85]:
              - generic [ref=e86]: "Giá:"
              - generic [ref=e88]: Liên hệ
            - listitem [ref=e89]:
              - paragraph [ref=e90]:
                - generic [ref=e92]: "Tiêu chuẩn chất lượng: TCVN 6692-2000"
              - paragraph [ref=e93]:
                - generic [ref=e95]: "Chất liệu: vải kaki Pangrim Hàn Quốc"
              - paragraph [ref=e96]:
                - generic [ref=e98]: "Màu sắc: có thể đặt các màu khác"
              - paragraph [ref=e99]:
                - generic [ref=e101]: "Kích cỡ: 5-8"
      - generic [ref=e102]:
        - generic [ref=e104]: Chi tiết sản phẩm
        - generic [ref=e105]:
          - paragraph [ref=e106]:
            - generic [ref=e108]:
              - text: – Quần áo bảo hộ chất liệu vải kaki pangrim Hàn Quốc 2721, hút ẩm tốt, thoáng mát, cầm màu tuyệt đối.
              - text: – Áo ngắn tay gồm cầu vai, 2 túi đắp trước ngực có nắp đậy, cài khuy, vạt áo bầu. Nẹp áo nổi, mật độ chỉ may chắc chắn, toàn bộ thân áo may mí diễu.
              - text: – Quần gồm 2 túi xéo dọc 2 bên sườn và 2 túi hậu. Túi hậu dạng túi mổ 2 viền, có cài khuy. 2 Túi hộp ở thân quần
              - text: – Nhận may thêm phản quang, hoặc pha mầu cách tân tạo sự riêng biệt nổi bật
              - text: – Kiểu quần áo thích hợp cho kỹ sư, nhân viên bảo trì, chuyên viên kỹ thuật, khối văn phòng, điều hành sản xuất, công nhân…
              - text: – Nhận in thêu logo tên các công ty lên áo
              - text: "– Cỡ: 5-8"
              - text: – Liên hệ để biết thêm chi tiết
          - paragraph [ref=e109]:
            - generic [ref=e110]: CAM KẾT BÁN HÀNG CHÍNH HÃNG
          - paragraph [ref=e111]:
            - generic [ref=e112]: – Tổng Kho Bảo Hộ Lao Động là nhà phân phối tại Việt Nam nên giá cạnh tranh nhất
          - paragraph [ref=e113]:
            - generic [ref=e114]: – Đội ngũ tư vấn nhiệt tình
          - paragraph [ref=e115]:
            - generic [ref=e116]: – Sản phẩm giống như mô tả.
          - paragraph [ref=e117]:
            - generic [ref=e118]: – Giao hàng trên toàn quốc theo quy định của sàn.
          - paragraph [ref=e119]:
            - generic [ref=e120]: – Shop hỗ trợ đổi sản phẩm trong suốt thời gian bảo hành.
          - paragraph [ref=e121]:
            - generic [ref=e122]: – TP. Hồ Chí Minh vận chuyển khoản 2 – 3 ngày.
      - generic: Sản phẩm tương tự
      - generic [ref=e126]:
        - generic [ref=e129]:
          - link "Bao tay len trắng" [ref=e131] [cursor=pointer]:
            - /url: bao-tay-len-trang
            - img "Bao tay len trắng" [ref=e132]
          - heading "Bao tay len trắng" [level=3] [ref=e133]:
            - link "Bao tay len trắng" [ref=e134] [cursor=pointer]:
              - /url: bao-tay-len-trang
          - paragraph [ref=e135]:
            - text: "Giá:"
            - generic [ref=e136]: Liên hệ
        - generic [ref=e139]:
          - link "Bao tay len phủ sơn đỏ" [ref=e141] [cursor=pointer]:
            - /url: bao-tay-len-phu-son-do
            - img "Bao tay len phủ sơn đỏ" [ref=e142]
          - heading "Bao tay len phủ sơn đỏ" [level=3] [ref=e143]:
            - link "Bao tay len phủ sơn đỏ" [ref=e144] [cursor=pointer]:
              - /url: bao-tay-len-phu-son-do
          - paragraph [ref=e145]:
            - text: "Giá:"
            - generic [ref=e146]: Liên hệ
        - generic [ref=e149]:
          - link "Bao tay hàng" [ref=e151] [cursor=pointer]:
            - /url: bao-tay-hang
            - img "Bao tay hàng" [ref=e152]
          - heading "Bao tay hàng" [level=3] [ref=e153]:
            - link "Bao tay hàng" [ref=e154] [cursor=pointer]:
              - /url: bao-tay-hang
          - paragraph [ref=e155]:
            - text: "Giá:"
            - generic [ref=e156]: Liên hệ
        - generic [ref=e159]:
          - link "Bao tay chống cắt 3M" [ref=e161] [cursor=pointer]:
            - /url: bao-tay-chong-cat-3m
            - img "Bao tay chống cắt 3M" [ref=e162]
          - heading "Bao tay chống cắt 3M" [level=3] [ref=e163]:
            - link "Bao tay chống cắt 3M" [ref=e164] [cursor=pointer]:
              - /url: bao-tay-chong-cat-3m
          - paragraph [ref=e165]:
            - text: "Giá:"
            - generic [ref=e166]: Liên hệ
        - generic [ref=e169]:
          - link "Mũ bảo hộ có lỗ thoáng" [ref=e171] [cursor=pointer]:
            - /url: mu-bao-ho-co-lo-thoang
            - img "Mũ bảo hộ có lỗ thoáng" [ref=e172]
          - heading "Mũ bảo hộ có lỗ thoáng" [level=3] [ref=e173]:
            - link "Mũ bảo hộ có lỗ thoáng" [ref=e174] [cursor=pointer]:
              - /url: mu-bao-ho-co-lo-thoang
          - paragraph [ref=e175]:
            - text: "Giá:"
            - generic [ref=e176]: Liên hệ
        - generic [ref=e179]:
          - link "Găng tay chống dầu" [ref=e181] [cursor=pointer]:
            - /url: gang-tay-chong-dau
            - img "Găng tay chống dầu" [ref=e182]
          - heading "Găng tay chống dầu" [level=3] [ref=e183]:
            - link "Găng tay chống dầu" [ref=e184] [cursor=pointer]:
              - /url: gang-tay-chong-dau
          - paragraph [ref=e185]:
            - text: "Giá:"
            - generic [ref=e186]: Liên hệ
        - generic [ref=e189]:
          - link "Kính bảo hộ an toàn" [ref=e191] [cursor=pointer]:
            - /url: kinh-bao-ho-an-toan
            - img "Kính bảo hộ an toàn" [ref=e192]
          - heading "Kính bảo hộ an toàn" [level=3] [ref=e193]:
            - link "Kính bảo hộ an toàn" [ref=e194] [cursor=pointer]:
              - /url: kinh-bao-ho-an-toan
          - paragraph [ref=e195]:
            - text: "Giá:"
            - generic [ref=e196]: Liên hệ
        - generic [ref=e199]:
          - link "Giày bảo hộ lao động" [ref=e201] [cursor=pointer]:
            - /url: giay-bao-ho-lao-dong
            - img "Giày bảo hộ lao động" [ref=e202]
          - heading "Giày bảo hộ lao động" [level=3] [ref=e203]:
            - link "Giày bảo hộ lao động" [ref=e204] [cursor=pointer]:
              - /url: giay-bao-ho-lao-dong
          - paragraph [ref=e205]:
            - text: "Giá:"
            - generic [ref=e206]: Liên hệ
    - generic [ref=e207]:
      - 'link "Call me: 0902217299" [ref=e208] [cursor=pointer]':
        - /url: tel:0902217299
        - img [ref=e212]
        - generic [ref=e215]: "Call me: 0902217299"
      - 'link "Zalo: 0902217299" [ref=e216] [cursor=pointer]':
        - /url: https://zalo.me/0902217299
        - img [ref=e220]
        - generic [ref=e221]: "Zalo: 0902217299"
    - generic [ref=e222]:
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
          - strong: Bộ quần áo bảo hộ
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e223]:
      - generic [ref=e224]: "❌ Chi tiết lỗi cần khắc phục (1/15):"
      - generic [ref=e225]:
        - generic [ref=e226]:
          - generic [ref=e227]: 3. Heading (H1-H6)
          - generic [ref=e228]: 1 lỗi
        - generic [ref=e229]:
          - strong [ref=e231]: Heading phân cấp hợp lệ (1 lỗi)
          - generic [ref=e232]: "⚠️ Heading phân cấp sai: Nhảy cấp từ H1 → H3 (\"Bao tay len trắng\")"
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