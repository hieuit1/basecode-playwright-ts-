# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: CB Tép (/cb-tep)
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
        - link "Thiết bị điện công nghiệp" [ref=e63] [cursor=pointer]:
          - /url: https://code5.mimadigi.vn/2026/august/ngocxoai_113726W/thiet-bi-dien-cong-nghiep
      - listitem [ref=e64]:
        - text: /
        - link "CB Tép" [ref=e65] [cursor=pointer]:
          - /url: https://code5.mimadigi.vn/2026/august/ngocxoai_113726W/cb-tep
    - generic [ref=e68]:
      - generic [ref=e69]:
        - generic [ref=e70]:
          - link [ref=e72] [cursor=pointer]:
            - /url: thumbs/product/1-aptomat-mcb-panasonic-bbd1061cnv-1jpg-1729853973.png.webp
            - figure [ref=e73]:
              - img "CB Tép" [ref=e74]
              - generic:
                - img "Ngọc Xoài Company"
          - listbox [ref=e78]:
            - option "CB Tép" [ref=e79] [cursor=pointer]:
              - img "CB Tép" [ref=e80]
        - generic [ref=e81]:
          - generic [ref=e83]: CB Tép
          - list [ref=e84]:
            - listitem [ref=e85]:
              - generic [ref=e86]: "Giá:"
              - generic [ref=e88]: Liên hệ
            - listitem [ref=e89]:
              - list [ref=e90]:
                - listitem [ref=e91]:
                  - generic [ref=e93]:
                    - text: CB Tép
                    - strong [ref=e94]: 1P (1 tép)
                - listitem [ref=e95]:
                  - generic [ref=e97]:
                    - text: "Số pha:"
                    - strong [ref=e98]: 1 pha
                - listitem [ref=e99]:
                  - generic [ref=e101]:
                    - text: "Dòng điện:"
                    - strong [ref=e102]: 6A
                - listitem [ref=e103]:
                  - generic [ref=e105]:
                    - text: "Dòng cắt:"
                    - strong [ref=e106]: 6kA
                - listitem [ref=e107]:
                  - generic [ref=e108]: "Điện áp: 240VAC/415VAC"
                - listitem [ref=e109]:
                  - generic [ref=e110]: Đạt tiêu chuẩn IEC
                - listitem [ref=e111]:
                  - generic [ref=e112]: Bảo hành 12 tháng.
      - alert [ref=e113]:
        - strong [ref=e114]: Nội dung đang cập nhật
      - generic [ref=e115]: Sản phẩm tương tự
      - generic [ref=e119]:
        - generic [ref=e122]:
          - link "Hộp nhựa Boxco IP67, BC-ATP -350X450X220mm" [ref=e124] [cursor=pointer]:
            - /url: hop-nhua-boxco-ip67-bc-atp-350x450x220mm
            - img "Hộp nhựa Boxco IP67, BC-ATP -350X450X220mm" [ref=e125]
          - heading "Hộp nhựa Boxco IP67, BC-ATP -350X450X220mm" [level=3] [ref=e126]:
            - link "Hộp nhựa Boxco IP67, BC-ATP -350X450X220mm" [ref=e127] [cursor=pointer]:
              - /url: hop-nhua-boxco-ip67-bc-atp-350x450x220mm
          - paragraph [ref=e128]:
            - text: "Giá:"
            - generic [ref=e129]: Liên hệ
        - generic [ref=e132]:
          - link "Relay 840410 S1MN 110VAC 2c/o" [ref=e134] [cursor=pointer]:
            - /url: relay-840410-s1mn-110vac-2co
            - img "Relay 840410 S1MN 110VAC 2c/o" [ref=e135]
          - heading "Relay 840410 S1MN 110VAC 2c/o" [level=3] [ref=e136]:
            - link "Relay 840410 S1MN 110VAC 2c/o" [ref=e137] [cursor=pointer]:
              - /url: relay-840410-s1mn-110vac-2co
          - paragraph [ref=e138]:
            - text: "Giá:"
            - generic [ref=e139]: Liên hệ
        - generic [ref=e142]:
          - link "Đèn treo trần LED" [ref=e144] [cursor=pointer]:
            - /url: den-treo-tran-led
            - img "Đèn treo trần LED" [ref=e145]
          - heading "Đèn treo trần LED" [level=3] [ref=e146]:
            - link "Đèn treo trần LED" [ref=e147] [cursor=pointer]:
              - /url: den-treo-tran-led
          - paragraph [ref=e148]:
            - text: "Giá:"
            - generic [ref=e149]: Liên hệ
        - generic [ref=e152]:
          - link "Thiết bị đóng cắt MCB BKN-4P" [ref=e154] [cursor=pointer]:
            - /url: thiet-bi-dong-cat-mcb-bkn-4p
            - img "Thiết bị đóng cắt MCB BKN-4P" [ref=e155]
          - heading "Thiết bị đóng cắt MCB BKN-4P" [level=3] [ref=e156]:
            - link "Thiết bị đóng cắt MCB BKN-4P" [ref=e157] [cursor=pointer]:
              - /url: thiet-bi-dong-cat-mcb-bkn-4p
          - paragraph [ref=e158]:
            - text: "Giá:"
            - generic [ref=e159]: Liên hệ
        - generic [ref=e162]:
          - link "MCB BKN 2P 32A LS" [ref=e164] [cursor=pointer]:
            - /url: mcb-bkn-2p-32a-ls
            - img "MCB BKN 2P 32A LS" [ref=e165]
          - heading "MCB BKN 2P 32A LS" [level=3] [ref=e166]:
            - link "MCB BKN 2P 32A LS" [ref=e167] [cursor=pointer]:
              - /url: mcb-bkn-2p-32a-ls
          - paragraph [ref=e168]:
            - text: "Giá:"
            - generic [ref=e169]: Liên hệ
        - generic [ref=e172]:
          - link "CB khối (MCCB) LS ABS1003b-1000A, 65Ka" [ref=e174] [cursor=pointer]:
            - /url: cb-khoi-mccb-ls-abs1003b-1000a-65ka
            - img "CB khối (MCCB) LS ABS1003b-1000A, 65Ka" [ref=e175]
          - heading "CB khối (MCCB) LS ABS1003b-1000A, 65Ka" [level=3] [ref=e176]:
            - link "CB khối (MCCB) LS ABS1003b-1000A, 65Ka" [ref=e177] [cursor=pointer]:
              - /url: cb-khoi-mccb-ls-abs1003b-1000a-65ka
          - paragraph [ref=e178]:
            - text: "Giá:"
            - generic [ref=e179]: Liên hệ
        - generic [ref=e182]:
          - link "MCCB 3P LS ABS203c 225A (42kA)" [ref=e184] [cursor=pointer]:
            - /url: mccb-3p-ls-abs203c-225a-42ka
            - img "MCCB 3P LS ABS203c 225A (42kA)" [ref=e185]
          - heading "MCCB 3P LS ABS203c 225A (42kA)" [level=3] [ref=e186]:
            - link "MCCB 3P LS ABS203c 225A (42kA)" [ref=e187] [cursor=pointer]:
              - /url: mccb-3p-ls-abs203c-225a-42ka
          - paragraph [ref=e188]:
            - text: "Giá:"
            - generic [ref=e189]: Liên hệ
        - generic [ref=e192]:
          - link "Dây curoa" [ref=e194] [cursor=pointer]:
            - /url: day-curoa
            - img "Dây curoa" [ref=e195]
          - heading "Dây curoa" [level=3] [ref=e196]:
            - link "Dây curoa" [ref=e197] [cursor=pointer]:
              - /url: day-curoa
          - paragraph [ref=e198]:
            - text: "Giá:"
            - generic [ref=e199]: Liên hệ
        - generic [ref=e202]:
          - link "Đồng Hồ Đo Điện" [ref=e204] [cursor=pointer]:
            - /url: dong-ho-do-dien
            - img "Đồng Hồ Đo Điện" [ref=e205]
          - heading "Đồng Hồ Đo Điện" [level=3] [ref=e206]:
            - link "Đồng Hồ Đo Điện" [ref=e207] [cursor=pointer]:
              - /url: dong-ho-do-dien
          - paragraph [ref=e208]:
            - text: "Giá:"
            - generic [ref=e209]: Liên hệ
        - generic [ref=e212]:
          - link "Đồng hồ điện" [ref=e214] [cursor=pointer]:
            - /url: dong-ho-dien
            - img "Đồng hồ điện" [ref=e215]
          - heading "Đồng hồ điện" [level=3] [ref=e216]:
            - link "Đồng hồ điện" [ref=e217] [cursor=pointer]:
              - /url: dong-ho-dien
          - paragraph [ref=e218]:
            - text: "Giá:"
            - generic [ref=e219]: Liên hệ
    - generic [ref=e220]:
      - 'link "Call me: 0902217299" [ref=e221] [cursor=pointer]':
        - /url: tel:0902217299
        - img [ref=e225]
        - generic [ref=e228]: "Call me: 0902217299"
      - 'link "Zalo: 0902217299" [ref=e229] [cursor=pointer]':
        - /url: https://zalo.me/0902217299
        - img [ref=e233]
        - generic [ref=e234]: "Zalo: 0902217299"
    - generic [ref=e235]:
      - generic:
        - img "Ngọc Xoài Company"
  - contentinfo [ref=e236]:
    - generic [ref=e238]:
      - generic [ref=e239]:
        - paragraph [ref=e240]: Thông tin liên hệ
        - paragraph [ref=e242]:
          - generic [ref=e243]:
            - strong [ref=e246]: CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ KỸ THUẬT NGỌC XOÀI
            - generic [ref=e248]:
              - text: "Địa chỉ: 24/2/8 Đường Võ Văn Ngân, Khu phố 1, Phường Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam."
              - text: "Chi nhánh Tỉnh Bà Rịa Vũng Tàu: Đường D10, KP. Mỹ Tân, Phường Phú Mỹ, Thành phố Hồ Chí Minh, Việt Nam."
              - text: "Hotline: 0902 217 299"
              - text: "Mail: ngocxoai2023@gmail.com"
              - text: "Website: ngocxoai.com"
      - generic [ref=e249]:
        - paragraph [ref=e250]: Truy cập nhanh
        - list [ref=e251]:
          - listitem [ref=e252]:
            - link "Trang chủ" [ref=e253] [cursor=pointer]:
              - /url: https://code5.mimadigi.vn/2026/august/ngocxoai_113726W/
          - listitem [ref=e254]:
            - link "Giới thiệu" [ref=e255] [cursor=pointer]:
              - /url: gioi-thieu
          - listitem [ref=e256]:
            - link "Dịch vụ" [ref=e257] [cursor=pointer]:
              - /url: dich-vu
          - listitem [ref=e258]:
            - link "Dự án" [ref=e259] [cursor=pointer]:
              - /url: du-an
          - listitem [ref=e260]:
            - link "Đối tác" [ref=e261] [cursor=pointer]:
              - /url: doi-tac
          - listitem [ref=e262]:
            - link "Tuyển dụng" [ref=e263] [cursor=pointer]:
              - /url: tuyen-dung
          - listitem [ref=e264]:
            - link "Tin tức" [ref=e265] [cursor=pointer]:
              - /url: tin-tuc
          - listitem [ref=e266]:
            - link "Liên hệ" [ref=e267] [cursor=pointer]:
              - /url: lien-he
      - generic [ref=e268]:
        - paragraph [ref=e269]: Chính sách
        - list [ref=e270]:
          - listitem [ref=e271]:
            - link "Chính sách bảo mật thông tin khách hàng" [ref=e272] [cursor=pointer]:
              - /url: chinh-sach-bao-mat-thong-tin-khach-hang
          - listitem [ref=e273]:
            - link "Chính sách đổi trả" [ref=e274] [cursor=pointer]:
              - /url: chinh-sach-doi-tra
          - listitem [ref=e275]:
            - link "Thông tin thanh toán" [ref=e276] [cursor=pointer]:
              - /url: thong-tin-thanh-toan
          - listitem [ref=e277]:
            - link "Chính sách bảo trì bảo hành" [ref=e278] [cursor=pointer]:
              - /url: chinh-sach-bao-tri-bao-hanh
          - listitem [ref=e279]:
            - link "Hướng dẫn thanh toán" [ref=e280] [cursor=pointer]:
              - /url: huong-dan-thanh-toan
        - paragraph [ref=e281]: Liên kết MXH
        - list [ref=e282]:
          - listitem [ref=e283]:
            - link "mxh" [ref=e284] [cursor=pointer]:
              - /url: " https://www.facebook.com/share/1BxPmATEu6/"
              - img "mxh" [ref=e285]
          - listitem [ref=e286]:
            - link "mxh" [ref=e287] [cursor=pointer]:
              - /url: ""
              - img "mxh" [ref=e288]
          - listitem [ref=e289]:
            - link "mxh" [ref=e290] [cursor=pointer]:
              - /url: ""
              - img "mxh" [ref=e291]
          - listitem [ref=e292]:
            - link "mxh" [ref=e293] [cursor=pointer]:
              - /url: https://zalo.me/0902217299
              - img "mxh" [ref=e294]
      - generic [ref=e295]:
        - paragraph [ref=e296]: Danh mục sản phẩm
        - list [ref=e297]:
          - listitem [ref=e298]:
            - link "Thiết bị điện công nghiệp" [ref=e299] [cursor=pointer]:
              - /url: thiet-bi-dien-cong-nghiep
          - listitem [ref=e300]:
            - link "Dụng cụ dùng khí nén" [ref=e301] [cursor=pointer]:
              - /url: dung-cu-dung-khi-nen
          - listitem [ref=e302]:
            - link "Vòng bi (Bạc đạn)" [ref=e303] [cursor=pointer]:
              - /url: vong-bi-bac-dan
          - listitem [ref=e304]:
            - link "Vật tư mài mòn" [ref=e305] [cursor=pointer]:
              - /url: vat-tu-mai-mon
          - listitem [ref=e306]:
            - link "Máy bơm công nghiệp các loại" [ref=e307] [cursor=pointer]:
              - /url: may-bom-cong-nghiep-cac-loai
          - listitem [ref=e308]:
            - link "Vật tư công nghiệp" [ref=e309] [cursor=pointer]:
              - /url: vat-tu-cong-nghiep
        - paragraph [ref=e311]: Copyright © Ngọc Xoài Company. Thiết kế Web MIMA
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
          - strong: CB Tép
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e312]:
      - generic [ref=e313]: "❌ Chi tiết lỗi cần khắc phục (1/15):"
      - generic [ref=e314]:
        - generic [ref=e315]:
          - generic [ref=e316]: 3. Heading (H1-H6)
          - generic [ref=e317]: 1 lỗi
        - generic [ref=e318]:
          - strong [ref=e320]: Heading phân cấp hợp lệ (1 lỗi)
          - generic [ref=e321]: "⚠️ Heading phân cấp sai: Nhảy cấp từ H1 → H3 (\"Hộp nhựa Boxco IP67, BC-ATP -350X450X220mm\")"
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