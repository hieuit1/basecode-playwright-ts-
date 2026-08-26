# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Giày bảo hộ lao động (/giay-bao-ho-lao-dong)
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
        - link "Giày bảo hộ lao động" [ref=e65] [cursor=pointer]:
          - /url: https://code5.mimadigi.vn/2026/august/ngocxoai_113726W/giay-bao-ho-lao-dong
    - generic [ref=e68]:
      - generic [ref=e69]:
        - generic [ref=e70]:
          - link [ref=e72] [cursor=pointer]:
            - /url: thumbs/product/giay-bao-ho-lao-dong-1729831620.png.webp
            - figure [ref=e73]:
              - img "Giày bảo hộ lao động" [ref=e74]
              - generic:
                - img "Ngọc Xoài Company"
          - listbox [ref=e78]:
            - option "Giày bảo hộ lao động" [ref=e79] [cursor=pointer]:
              - img "Giày bảo hộ lao động" [ref=e80]
        - generic [ref=e81]:
          - generic [ref=e83]: Giày bảo hộ lao động
          - list [ref=e84]:
            - listitem [ref=e85]:
              - generic [ref=e86]: "Giá:"
              - generic [ref=e88]: Liên hệ
            - listitem [ref=e89]:
              - paragraph [ref=e90]:
                - generic [ref=e92]:
                  - strong [ref=e93]: "Chất liệu:"
                  - text: Bằng da xịn
              - paragraph [ref=e94]:
                - generic [ref=e96]:
                  - strong [ref=e97]: "Cấu tạo:"
                  - text: Mũi thép + Đế thép
              - paragraph [ref=e98]:
                - generic [ref=e100]:
                  - strong [ref=e101]: "Cỡ giày:"
                  - text: 38 – 44
              - paragraph [ref=e102]:
                - generic [ref=e104]:
                  - strong [ref=e105]: "Công dụng:"
                  - text: Chống đinh,Chống dầu trơn trượt,nước
              - paragraph [ref=e106]:
                - generic [ref=e108]:
                  - strong [ref=e109]: "Loại:"
                  - text: Thấp cổ
      - generic [ref=e110]:
        - generic [ref=e112]: Chi tiết sản phẩm
        - generic [ref=e113]:
          - paragraph [ref=e114]:
            - generic [ref=e116]:
              - text: ĐẶC ĐIỂM
              - text: Giày thấp cổ
              - text: Chống thấm nước
              - text: Chống trơn trượt (SRC)
              - text: Chống đinh
              - text: Chống dầu, hóa chất
              - text: Chống dập ngón
              - text: Chống sốc
              - text: Chống tĩnh điện
          - paragraph [ref=e117]:
            - generic [ref=e119]:
              - text: CẤU TẠO
              - text: "Vỏ ngoài: da thật"
              - text: "Đế giày: hai lớp PU"
              - text: "Mũi giày: thép"
              - text: "Lót chống đâm xuyên: thép"
              - text: "Mặt trong: sợi nylon"
              - text: "Miếng lót: E.V.A"
              - text: "Size: EU 36-47 / UK 3.5-12"
              - text: "Trọng lượng: 580 gr. / chiếc (size 41)"
              - text: Thương hiệu Anh, gia công tại Trung Quốc
          - paragraph [ref=e120]:
            - generic [ref=e122]:
              - text: ỨNG DỤNG
              - text: Công trường xây dựng
              - text: Nhà máy
              - text: Xưởng cơ khí
              - text: Hầm mỏ
          - paragraph [ref=e123]:
            - generic [ref=e125]:
              - text: CHỨNG NHẬN
              - text: Euronorm EN345 – CE S3
              - text: JIS (JAPAN)
              - text: AS/NZS2210.3 (AUST)
              - text: GOST-R (RUSSIA)
              - text: ASTM (USA)
              - text: ANSI Z41-1999 (PHILIP)
              - text: ĐÁNH GIÁ
          - paragraph [ref=e126]:
            - generic [ref=e128]:
              - text: ƯU ĐIỂM
              - text: Bảo vệ toàn diện theo tiêu chuẩn châu Âu – EN ISO 20345 S3
              - text: Thương hiệu Anh
              - text: Kiểu dáng trẻ trung, năng động
          - paragraph [ref=e129]:
            - generic [ref=e131]:
              - text: KHUYẾT ĐIỂM
              - text: Giá cao và nặng hơn giày bảo hộ phổ thông
          - paragraph [ref=e132]:
            - generic [ref=e134]:
              - text: LƯU Ý TRONG QUÁ TRÌNH SỬ DỤNG
              - text: Không dùng nhiệt độ cao để làm khô giày.
              - text: Khi giày bị ướt có thể làm khô bằng cách vò chặt giấy báo rồi nhét vào bên trong giày, phơi giày trong bóng râm.
              - text: Miếng lót E.V.A có thể tháo rời để vệ sinh.
              - text: "Khuyến cáo thay giày khi: Các chi tiết gờ nổi ở đế giày bị mòn (ảnh hưởng đến tính chống trượt)."
              - text: Sau khi đạp đinh hoặc lớp da phủ PU bị rách (ảnh hưởng đến tính cách điện).
      - generic: Sản phẩm tương tự
      - generic [ref=e138]:
        - generic [ref=e141]:
          - link "Bao tay len trắng" [ref=e143] [cursor=pointer]:
            - /url: bao-tay-len-trang
            - img "Bao tay len trắng" [ref=e144]
          - heading "Bao tay len trắng" [level=3] [ref=e145]:
            - link "Bao tay len trắng" [ref=e146] [cursor=pointer]:
              - /url: bao-tay-len-trang
          - paragraph [ref=e147]:
            - text: "Giá:"
            - generic [ref=e148]: Liên hệ
        - generic [ref=e151]:
          - link "Bao tay len phủ sơn đỏ" [ref=e153] [cursor=pointer]:
            - /url: bao-tay-len-phu-son-do
            - img "Bao tay len phủ sơn đỏ" [ref=e154]
          - heading "Bao tay len phủ sơn đỏ" [level=3] [ref=e155]:
            - link "Bao tay len phủ sơn đỏ" [ref=e156] [cursor=pointer]:
              - /url: bao-tay-len-phu-son-do
          - paragraph [ref=e157]:
            - text: "Giá:"
            - generic [ref=e158]: Liên hệ
        - generic [ref=e161]:
          - link "Bao tay hàng" [ref=e163] [cursor=pointer]:
            - /url: bao-tay-hang
            - img "Bao tay hàng" [ref=e164]
          - heading "Bao tay hàng" [level=3] [ref=e165]:
            - link "Bao tay hàng" [ref=e166] [cursor=pointer]:
              - /url: bao-tay-hang
          - paragraph [ref=e167]:
            - text: "Giá:"
            - generic [ref=e168]: Liên hệ
        - generic [ref=e171]:
          - link "Bao tay chống cắt 3M" [ref=e173] [cursor=pointer]:
            - /url: bao-tay-chong-cat-3m
            - img "Bao tay chống cắt 3M" [ref=e174]
          - heading "Bao tay chống cắt 3M" [level=3] [ref=e175]:
            - link "Bao tay chống cắt 3M" [ref=e176] [cursor=pointer]:
              - /url: bao-tay-chong-cat-3m
          - paragraph [ref=e177]:
            - text: "Giá:"
            - generic [ref=e178]: Liên hệ
        - generic [ref=e181]:
          - link "Bộ quần áo bảo hộ" [ref=e183] [cursor=pointer]:
            - /url: bo-quan-ao-bao-ho
            - img "Bộ quần áo bảo hộ" [ref=e184]
          - heading "Bộ quần áo bảo hộ" [level=3] [ref=e185]:
            - link "Bộ quần áo bảo hộ" [ref=e186] [cursor=pointer]:
              - /url: bo-quan-ao-bao-ho
          - paragraph [ref=e187]:
            - text: "Giá:"
            - generic [ref=e188]: Liên hệ
        - generic [ref=e191]:
          - link "Mũ bảo hộ có lỗ thoáng" [ref=e193] [cursor=pointer]:
            - /url: mu-bao-ho-co-lo-thoang
            - img "Mũ bảo hộ có lỗ thoáng" [ref=e194]
          - heading "Mũ bảo hộ có lỗ thoáng" [level=3] [ref=e195]:
            - link "Mũ bảo hộ có lỗ thoáng" [ref=e196] [cursor=pointer]:
              - /url: mu-bao-ho-co-lo-thoang
          - paragraph [ref=e197]:
            - text: "Giá:"
            - generic [ref=e198]: Liên hệ
        - generic [ref=e201]:
          - link "Găng tay chống dầu" [ref=e203] [cursor=pointer]:
            - /url: gang-tay-chong-dau
            - img "Găng tay chống dầu" [ref=e204]
          - heading "Găng tay chống dầu" [level=3] [ref=e205]:
            - link "Găng tay chống dầu" [ref=e206] [cursor=pointer]:
              - /url: gang-tay-chong-dau
          - paragraph [ref=e207]:
            - text: "Giá:"
            - generic [ref=e208]: Liên hệ
        - generic [ref=e211]:
          - link "Kính bảo hộ an toàn" [ref=e213] [cursor=pointer]:
            - /url: kinh-bao-ho-an-toan
            - img "Kính bảo hộ an toàn" [ref=e214]
          - heading "Kính bảo hộ an toàn" [level=3] [ref=e215]:
            - link "Kính bảo hộ an toàn" [ref=e216] [cursor=pointer]:
              - /url: kinh-bao-ho-an-toan
          - paragraph [ref=e217]:
            - text: "Giá:"
            - generic [ref=e218]: Liên hệ
    - generic [ref=e219]:
      - 'link "Call me: 0902217299" [ref=e220] [cursor=pointer]':
        - /url: tel:0902217299
        - img [ref=e224]
        - generic [ref=e227]: "Call me: 0902217299"
      - 'link "Zalo: 0902217299" [ref=e228] [cursor=pointer]':
        - /url: https://zalo.me/0902217299
        - img [ref=e232]
        - generic [ref=e233]: "Zalo: 0902217299"
    - generic [ref=e234]:
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
          - strong: Giày bảo hộ lao động
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e235]:
      - generic [ref=e236]: "❌ Chi tiết lỗi cần khắc phục (1/15):"
      - generic [ref=e237]:
        - generic [ref=e238]:
          - generic [ref=e239]: 3. Heading (H1-H6)
          - generic [ref=e240]: 1 lỗi
        - generic [ref=e241]:
          - strong [ref=e243]: Heading phân cấp hợp lệ (1 lỗi)
          - generic [ref=e244]: "⚠️ Heading phân cấp sai: Nhảy cấp từ H1 → H3 (\"Bao tay len trắng\")"
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