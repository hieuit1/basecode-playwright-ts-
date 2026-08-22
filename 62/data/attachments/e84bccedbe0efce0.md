# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Phòng ngủ (/phong-ngu1)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 93/100 dưới ngưỡng 96%. Có 1/15 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e6]:
        - link "CÔNG TY TNHH CFURNI" [ref=e8] [cursor=pointer]:
          - /url: https://code2.mimadigi.vn/2026/august/cfurni_111926w/
          - img "CÔNG TY TNHH CFURNI" [ref=e9]
        - link "Danh Mục" [ref=e12] [cursor=pointer]:
          - /url: javascript:;
          - img [ref=e13]
          - text: Danh Mục
        - generic [ref=e19]:
          - textbox "Tìm" [ref=e20]
          - button [ref=e21] [cursor=pointer]:
            - img [ref=e22]
        - generic [ref=e24]:
          - img [ref=e25]
          - generic [ref=e28]:
            - text: Hotline
            - link "0932 67 82 67" [ref=e29] [cursor=pointer]:
              - /url: tel:0932678267
        - generic [ref=e31]:
          - img [ref=e32]
          - generic [ref=e35]:
            - text: Hệ thống
            - generic "Map" [ref=e36]: CFURNI
        - link "Giỏ hàng 0" [ref=e38] [cursor=pointer]:
          - /url: gio-hang
          - img [ref=e39]
          - generic [ref=e43]:
            - generic [ref=e44]: Giỏ hàng
            - generic [ref=e45]: "0"
      - list [ref=e49]:
        - listitem [ref=e50]:
          - link "Bàn ăn" [ref=e51] [cursor=pointer]:
            - /url: ban-an
        - listitem [ref=e52]:
          - link "Bàn sofa" [ref=e53] [cursor=pointer]:
            - /url: ban-sofa
        - listitem [ref=e54]:
          - link "Ghế ăn" [ref=e55] [cursor=pointer]:
            - /url: ghe-an
        - listitem [ref=e56]:
          - link "Sofa đẹp" [ref=e57] [cursor=pointer]:
            - /url: sofa-dep
        - listitem [ref=e58]:
          - link "Văn phòng" [ref=e59] [cursor=pointer]:
            - /url: van-phong
        - listitem [ref=e60]:
          - link "Hàng giải trí" [ref=e61] [cursor=pointer]:
            - /url: hang-giai-tri
        - listitem [ref=e62]:
          - link "Thảm sofa" [ref=e63] [cursor=pointer]:
            - /url: tham-sofa
        - listitem [ref=e64]:
          - link "Phòng ngủ" [ref=e65] [cursor=pointer]:
            - /url: phong-ngu1
        - listitem [ref=e66]:
          - link "Thi công phòng bếp" [ref=e67] [cursor=pointer]:
            - /url: thi-cong-phong-bep
    - list [ref=e70]:
      - listitem [ref=e71]:
        - link "Trang chủ" [ref=e72] [cursor=pointer]:
          - /url: https://code2.mimadigi.vn/2026/august/cfurni_111926w/
          - img [ref=e73]
          - generic [ref=e75]: Trang chủ
      - listitem [ref=e76]:
        - text: /
        - link "Sản phẩm" [ref=e77] [cursor=pointer]:
          - /url: https://code2.mimadigi.vn/2026/august/cfurni_111926w/san-pham
      - listitem [ref=e78]:
        - text: /
        - link "Phòng ngủ" [ref=e79] [cursor=pointer]:
          - /url: https://code2.mimadigi.vn/2026/august/cfurni_111926w/phong-ngu1
    - generic [ref=e83]:
      - heading "Danh mục" [level=2] [ref=e85]
      - generic [ref=e86]:
        - link "Bàn trang điểm Bàn trang điểm" [ref=e88] [cursor=pointer]:
          - /url: ban-trang-diem
          - paragraph [ref=e89]:
            - img "Bàn trang điểm" [ref=e90]
          - heading "Bàn trang điểm" [level=3] [ref=e91]
        - link "Ghế trang điểm Ghế trang điểm" [ref=e93] [cursor=pointer]:
          - /url: ghe-trang-diem
          - paragraph [ref=e94]:
            - img "Ghế trang điểm" [ref=e95]
          - heading "Ghế trang điểm" [level=3] [ref=e96]
        - link "Giường gỗ Giường gỗ" [ref=e98] [cursor=pointer]:
          - /url: giuong-go
          - paragraph [ref=e99]:
            - img "Giường gỗ" [ref=e100]
          - heading "Giường gỗ" [level=3] [ref=e101]
        - link "Giường ngủ bé cưng Giường ngủ bé cưng" [ref=e103] [cursor=pointer]:
          - /url: giuong-ngu-be-cung
          - paragraph [ref=e104]:
            - img "Giường ngủ bé cưng" [ref=e105]
          - heading "Giường ngủ bé cưng" [level=3] [ref=e106]
        - link "Giường ngủ bọc nệm Giường ngủ bọc nệm" [ref=e108] [cursor=pointer]:
          - /url: giuong-ngu-boc-nem
          - paragraph [ref=e109]:
            - img "Giường ngủ bọc nệm" [ref=e110]
          - heading "Giường ngủ bọc nệm" [level=3] [ref=e111]
        - link "Giường cổ điển Giường cổ điển" [ref=e113] [cursor=pointer]:
          - /url: giuong-co-dien
          - paragraph [ref=e114]:
            - img "Giường cổ điển" [ref=e115]
          - heading "Giường cổ điển" [level=3] [ref=e116]
        - link "Kệ giày Kệ giày" [ref=e118] [cursor=pointer]:
          - /url: ke-giay
          - paragraph [ref=e119]:
            - img "Kệ giày" [ref=e120]
          - heading "Kệ giày" [level=3] [ref=e121]
        - link "Kệ tivi Kệ tivi" [ref=e123] [cursor=pointer]:
          - /url: ke-tivi
          - paragraph [ref=e124]:
            - img "Kệ tivi" [ref=e125]
          - heading "Kệ tivi" [level=3] [ref=e126]
        - link "Tab đầu giường Tab đầu giường" [ref=e128] [cursor=pointer]:
          - /url: tab-dau-giuong
          - paragraph [ref=e129]:
            - img "Tab đầu giường" [ref=e130]
          - heading "Tab đầu giường" [level=3] [ref=e131]
        - link "Tủ áo Tủ áo" [ref=e133] [cursor=pointer]:
          - /url: tu-ao
          - paragraph [ref=e134]:
            - img "Tủ áo" [ref=e135]
          - heading "Tủ áo" [level=3] [ref=e136]
      - heading "Tất cả Phòng ngủ" [level=2] [ref=e138]
      - alert [ref=e140]:
        - strong [ref=e141]: Không tìm thấy sản phẩm phù hợp
    - generic [ref=e146]:
      - generic [ref=e148]:
        - paragraph [ref=e149]:
          - img "Xưởng & Showroom" [ref=e150]
        - generic [ref=e151]:
          - heading "Xưởng & Showroom" [level=3] [ref=e152]
          - paragraph [ref=e153]: Đặt lịch xe trực tiếp sản phẩm
      - generic [ref=e155]:
        - paragraph [ref=e156]:
          - img "Bảo hành khung 10 năm" [ref=e157]
        - generic [ref=e158]:
          - heading "Bảo hành khung 10 năm" [level=3] [ref=e159]
          - paragraph [ref=e160]: Khung gỗ sồi chắc chắn
      - generic [ref=e162]:
        - paragraph [ref=e163]:
          - img "Mút Coolsafe 4 năm" [ref=e164]
        - generic [ref=e165]:
          - heading "Mút Coolsafe 4 năm" [level=3] [ref=e166]
          - paragraph [ref=e167]: Chống cháy đạt tiêu chuẩn
      - generic [ref=e169]:
        - paragraph [ref=e170]:
          - img "Chứng chỉ EQ vật liệu" [ref=e171]
        - generic [ref=e172]:
          - heading "Chứng chỉ EQ vật liệu" [level=3] [ref=e173]
          - paragraph [ref=e174]: An toàn cho trẻ con & thai phụ
      - generic [ref=e176]:
        - paragraph [ref=e177]:
          - img "10,000+ khách hàng" [ref=e178]
        - generic [ref=e179]:
          - heading "10,000+ khách hàng" [level=3] [ref=e180]
          - paragraph [ref=e181]: Đánh giá tốt trên website
    - generic [ref=e182]:
      - generic [ref=e185]:
        - generic [ref=e186]:
          - link "CÔNG TY TNHH CFURNI" [ref=e187] [cursor=pointer]:
            - /url: https://code2.mimadigi.vn/2026/august/cfurni_111926w/
            - img "CÔNG TY TNHH CFURNI" [ref=e188]
          - paragraph [ref=e189]: CÔNG TY TNHH CFURNI
          - table [ref=e191]:
            - rowgroup [ref=e192]:
              - 'row "MST: 0313344129 - Sở kế hoạch và đầu tư TP.HCM cấp ngày 13/7/2015. Office: 198 Đường Số 10, Phường Thông Tây Hội, TP.HCM Showroom 1: 41 Đường A4, Phường Bảy Hiền, TP.HCM Showroom 2: 66A đường A4 (khu K300), Phường Bảy Hiền, TP.HCM Xưởng 1: 25/5A đường số 610, xã Phú Hòa Đông, TP.HCM Xưởng 2: C7C Phạm Hùng, xã Bình Hưng, TP.HCM Email: Cfurni168@gmail.com Web: www.cfurni.vn Facebook: Nội Thất Cfurni Phone: 0932 67 82 67 - 0902 34 93 94" [ref=e193]':
                - 'cell "MST: 0313344129 - Sở kế hoạch và đầu tư TP.HCM cấp ngày 13/7/2015. Office: 198 Đường Số 10, Phường Thông Tây Hội, TP.HCM Showroom 1: 41 Đường A4, Phường Bảy Hiền, TP.HCM Showroom 2: 66A đường A4 (khu K300), Phường Bảy Hiền, TP.HCM Xưởng 1: 25/5A đường số 610, xã Phú Hòa Đông, TP.HCM Xưởng 2: C7C Phạm Hùng, xã Bình Hưng, TP.HCM Email: Cfurni168@gmail.com Web: www.cfurni.vn Facebook: Nội Thất Cfurni Phone: 0932 67 82 67 - 0902 34 93 94" [ref=e194]':
                  - paragraph [ref=e195]:
                    - text: "MST: 0313344129 - Sở kế hoạch và đầu tư TP.HCM cấp ngày 13/7/2015."
                    - text: "Office: 198 Đường Số 10, Phường Thông Tây Hội, TP.HCM"
                  - paragraph [ref=e196]: "Showroom 1: 41 Đường A4, Phường Bảy Hiền, TP.HCM"
                  - paragraph [ref=e197]: "Showroom 2: 66A đường A4 (khu K300), Phường Bảy Hiền, TP.HCM"
                  - paragraph [ref=e198]: "Xưởng 1: 25/5A đường số 610, xã Phú Hòa Đông, TP.HCM"
                  - paragraph [ref=e199]: "Xưởng 2: C7C Phạm Hùng, xã Bình Hưng, TP.HCM"
                  - paragraph [ref=e200]:
                    - text: "Email: Cfurni168@gmail.com"
                    - text: "Web: www.cfurni.vn"
                  - paragraph [ref=e201]:
                    - 'link "Facebook: Nội Thất Cfurni" [ref=e202] [cursor=pointer]':
                      - /url: https://www.facebook.com/noithatcfurni/
                  - paragraph [ref=e203]: "Phone: 0932 67 82 67 - 0902 34 93 94"
          - paragraph [ref=e204]: Theo dõi chúng tôi tại
          - generic [ref=e205]:
            - link "Facebook" [ref=e206] [cursor=pointer]:
              - /url: https://www.facebook.com/noithatcfurni
              - img "Facebook" [ref=e207]
            - link "Messenger" [ref=e208] [cursor=pointer]:
              - /url: ""
              - img "Messenger" [ref=e209]
            - link "Instargam" [ref=e210] [cursor=pointer]:
              - /url: https://www.instagram.com/cfurni.vn?igsh=cnNhNG43aGhhbzJs
              - img "Instargam" [ref=e211]
            - link "TikTok" [ref=e212] [cursor=pointer]:
              - /url: https://www.tiktok.com/@noithatcfurni?_r=1&_t=ZS-98xhhbBhQua
              - img "TikTok" [ref=e213]
            - link "Youtube" [ref=e214] [cursor=pointer]:
              - /url: https://youtube.com/@noithatcfurni?si=HxSvpE0k9CoN2tWr
              - img "Youtube" [ref=e215]
        - img "CÔNG TY TNHH CFURNI" [ref=e218]
      - generic [ref=e221]:
        - generic [ref=e222]:
          - paragraph [ref=e223]: Truy cập nhanh
          - list [ref=e224]:
            - listitem [ref=e225]:
              - link "Giới thiệu" [ref=e226] [cursor=pointer]:
                - /url: gioi-thieu
            - listitem [ref=e227]:
              - link "Sản phẩm" [ref=e228] [cursor=pointer]:
                - /url: san-pham
            - listitem [ref=e229]:
              - link "Dự án" [ref=e230] [cursor=pointer]:
                - /url: du-an
            - listitem [ref=e231]:
              - link "Tuyển dụng" [ref=e232] [cursor=pointer]:
                - /url: tuyen-dung
            - listitem [ref=e233]:
              - link "Liên hệ" [ref=e234] [cursor=pointer]:
                - /url: lien-he
        - generic [ref=e235]:
          - paragraph [ref=e236]: Giải pháp
          - list [ref=e237]:
            - listitem [ref=e238]:
              - link "Phòng khách" [ref=e239] [cursor=pointer]:
                - /url: phong-khach
            - listitem [ref=e240]:
              - link "Phòng ăn" [ref=e241] [cursor=pointer]:
                - /url: phong-an
            - listitem [ref=e242]:
              - link "Phòng ngủ" [ref=e243] [cursor=pointer]:
                - /url: phong-ngu
            - listitem [ref=e244]:
              - link "Phòng làm việc" [ref=e245] [cursor=pointer]:
                - /url: phong-lam-viec
        - generic [ref=e246]:
          - paragraph [ref=e247]: Chính sách hỗ trợ
          - list [ref=e248]:
            - listitem [ref=e249]:
              - link "Chính sách đổi trả" [ref=e250] [cursor=pointer]:
                - /url: chinh-sach-doi-tra
            - listitem [ref=e251]:
              - link "Chính sách bảo hành" [ref=e252] [cursor=pointer]:
                - /url: chinh-sach-bao-hanh
            - listitem [ref=e253]:
              - link "Chính sách giao hàng" [ref=e254] [cursor=pointer]:
                - /url: chinh-sach-giao-hang
            - listitem [ref=e255]:
              - link "Chính sách thanh toán" [ref=e256] [cursor=pointer]:
                - /url: chinh-sach-thanh-toan
            - listitem [ref=e257]:
              - link "Chính sách xử lý khiếu nại" [ref=e258] [cursor=pointer]:
                - /url: chinh-sach-xu-ly-khieu-nai
            - listitem [ref=e259]:
              - link "Bảo mật thông tin khách hàng" [ref=e260] [cursor=pointer]:
                - /url: bao-mat-thong-tin-khach-hang
        - generic [ref=e261]:
          - paragraph [ref=e262]: Hotline
          - paragraph [ref=e264]:
            - text: Tư vấn bán hàng
            - text: 0932 67 82 67
            - text: Chăm sóc khách hàng
            - text: 0902 34 93 94
          - link "http://online.gov.vn/nen-tang/4b688d70-4fe8-4619-a929-3c859c5d4206" [ref=e265] [cursor=pointer]:
            - /url: ""
            - img "http://online.gov.vn/nen-tang/4b688d70-4fe8-4619-a929-3c859c5d4206" [ref=e266]
      - generic [ref=e269]:
        - generic [ref=e270]: Copyright ©2026 Công Ty TNHH CFURNI. Thiết kế Web MIMA
        - generic [ref=e271]:
          - generic [ref=e272]:
            - text: "Đang online:"
            - generic [ref=e273]: "1585"
          - generic [ref=e274]: "|"
          - generic [ref=e275]:
            - text: "Hôm nay:"
            - generic [ref=e276]: "14"
          - generic [ref=e277]: "|"
          - generic [ref=e278]:
            - text: "Tổng truy cập:"
            - generic [ref=e279]: "326"
    - generic [ref=e280]:
      - link "Map" [ref=e281] [cursor=pointer]:
        - /url: https://maps.app.goo.gl/JD2W7Ho6mb8Hrmsw6
        - img [ref=e285]
      - 'link "Call me: 0932 67 82 67" [ref=e288] [cursor=pointer]':
        - /url: tel:0932678267
        - img [ref=e292]
        - generic [ref=e295]: "Call me: 0932 67 82 67"
      - 'link "Zalo: 0932 67 82 67" [ref=e296] [cursor=pointer]':
        - /url: https://zalo.me/0932678267
        - img [ref=e300]
        - generic [ref=e301]: "Zalo: 0932 67 82 67"
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
          - strong: Phòng ngủ
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e302]:
      - generic [ref=e303]: "❌ Chi tiết lỗi cần khắc phục (1/15):"
      - generic [ref=e304]:
        - generic [ref=e305]:
          - generic [ref=e306]: 6. Liên kết (Links)
          - generic [ref=e307]: 1 lỗi
        - generic [ref=e308]:
          - strong [ref=e310]: "Không có broken links (lỗi: 5/81)"
          - generic [ref=e311]: "⚠️ Broken links: he-thong-cua-hang (status: 404), phong-lam-viec (status: 404), phong-khach (status: 404), phong-an (status: 404), phong-ngu (status: 404)"
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