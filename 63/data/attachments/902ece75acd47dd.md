# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: 18_100754_ General 1946 (/18100754-general-1946-7vol2)
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
          - textbox "Tìm kiếm sản phẩm..." [ref=e20]
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
        - link "Tin tức" [ref=e77] [cursor=pointer]:
          - /url: https://code2.mimadigi.vn/2026/august/cfurni_111926w/tin-tuc
      - listitem [ref=e78]:
        - text: /
        - link "18_100754_ General 1946-7_Vol_2" [ref=e79] [cursor=pointer]:
          - /url: https://code2.mimadigi.vn/2026/august/cfurni_111926w/18100754-general-1946-7vol2
    - generic [ref=e82]:
      - generic [ref=e83]:
        - generic [ref=e85]:
          - generic [ref=e87]: 18_100754_ General 1946-7_Vol_2
          - generic [ref=e88]:
            - img [ref=e89]
            - generic [ref=e92]: 13 Lượt xem
            - img [ref=e93]
            - generic [ref=e96]: "Ngày đăng: 20/05/2026 02:20 PM"
        - alert [ref=e97]:
          - strong [ref=e98]: Nội dung đang cập nhật
      - generic [ref=e102]:
        - heading "Bài viết liên quan" [level=2] [ref=e103]
        - generic [ref=e104]:
          - paragraph [ref=e106]:
            - link "Test News Title 1787364043065" [ref=e107] [cursor=pointer]:
              - /url: test-news-title-1787364043065
              - img "Test News Title 1787364043065" [ref=e108]
          - link "Test News Title 1787364043065" [ref=e110] [cursor=pointer]:
            - /url: test-news-title-1787364043065
            - heading "Test News Title 1787364043065" [level=3] [ref=e111]
        - generic [ref=e112]:
          - paragraph [ref=e114]:
            - link "Test News Title 1787306363981" [ref=e115] [cursor=pointer]:
              - /url: test-news-title-1787306363981
              - img "Test News Title 1787306363981" [ref=e116]
          - link "Test News Title 1787306363981" [ref=e118] [cursor=pointer]:
            - /url: test-news-title-1787306363981
            - heading "Test News Title 1787306363981" [level=3] [ref=e119]
        - generic [ref=e120]:
          - paragraph [ref=e122]:
            - link "Cách chọn bàn ăn phong cách hiện đại" [ref=e123] [cursor=pointer]:
              - /url: chon-ban-an-phong-cach-hien-dai
              - img "Cách chọn bàn ăn phong cách hiện đại" [ref=e124]
          - link "Cách chọn bàn ăn phong cách hiện đại" [ref=e126] [cursor=pointer]:
            - /url: chon-ban-an-phong-cach-hien-dai
            - heading "Cách chọn bàn ăn phong cách hiện đại" [level=3] [ref=e127]
        - generic [ref=e128]:
          - paragraph [ref=e130]:
            - link "Công nghệ tự lái hoạt động như thế nào trên xe hiện đại?" [ref=e131] [cursor=pointer]:
              - /url: cong-nghe-tu-lai-hoat-dong-nhu-the-nao-tren-xe-hien-dai
              - img "Công nghệ tự lái hoạt động như thế nào trên xe hiện đại?" [ref=e132]
          - link "Công nghệ tự lái hoạt động như thế nào trên xe hiện đại?" [ref=e134] [cursor=pointer]:
            - /url: cong-nghe-tu-lai-hoat-dong-nhu-the-nao-tren-xe-hien-dai
            - heading "Công nghệ tự lái hoạt động như thế nào trên xe hiện đại?" [level=3] [ref=e135]
        - generic [ref=e136]:
          - paragraph [ref=e138]:
            - link "Vì sao xe điện đang trở thành xu hướng của ngành ô tô toàn cầu?" [ref=e139] [cursor=pointer]:
              - /url: vi-sao-xe-dien-dang-tro-thanh-xu-huong-cua-nganh-o-to-toan-cau
              - img "Vì sao xe điện đang trở thành xu hướng của ngành ô tô toàn cầu?" [ref=e140]
          - link "Vì sao xe điện đang trở thành xu hướng của ngành ô tô toàn cầu?" [ref=e142] [cursor=pointer]:
            - /url: vi-sao-xe-dien-dang-tro-thanh-xu-huong-cua-nganh-o-to-toan-cau
            - heading "Vì sao xe điện đang trở thành xu hướng của ngành ô tô toàn cầu?" [level=3] [ref=e143]
    - generic [ref=e148]:
      - generic [ref=e150]:
        - paragraph [ref=e151]:
          - img "Xưởng & Showroom" [ref=e152]
        - generic [ref=e153]:
          - heading "Xưởng & Showroom" [level=3] [ref=e154]
          - paragraph [ref=e155]: Đặt lịch xe trực tiếp sản phẩm
      - generic [ref=e157]:
        - paragraph [ref=e158]:
          - img "Bảo hành khung 10 năm" [ref=e159]
        - generic [ref=e160]:
          - heading "Bảo hành khung 10 năm" [level=3] [ref=e161]
          - paragraph [ref=e162]: Khung gỗ sồi chắc chắn
      - generic [ref=e164]:
        - paragraph [ref=e165]:
          - img "Mút Coolsafe 4 năm" [ref=e166]
        - generic [ref=e167]:
          - heading "Mút Coolsafe 4 năm" [level=3] [ref=e168]
          - paragraph [ref=e169]: Chống cháy đạt tiêu chuẩn
      - generic [ref=e171]:
        - paragraph [ref=e172]:
          - img "Chứng chỉ EQ vật liệu" [ref=e173]
        - generic [ref=e174]:
          - heading "Chứng chỉ EQ vật liệu" [level=3] [ref=e175]
          - paragraph [ref=e176]: An toàn cho trẻ con & thai phụ
      - generic [ref=e178]:
        - paragraph [ref=e179]:
          - img "10,000+ khách hàng" [ref=e180]
        - generic [ref=e181]:
          - heading "10,000+ khách hàng" [level=3] [ref=e182]
          - paragraph [ref=e183]: Đánh giá tốt trên website
    - generic [ref=e184]:
      - generic [ref=e187]:
        - generic [ref=e188]:
          - link "CÔNG TY TNHH CFURNI" [ref=e189] [cursor=pointer]:
            - /url: https://code2.mimadigi.vn/2026/august/cfurni_111926w/
            - img "CÔNG TY TNHH CFURNI" [ref=e190]
          - paragraph [ref=e191]: CÔNG TY TNHH CFURNI
          - table [ref=e193]:
            - rowgroup [ref=e194]:
              - 'row "MST: 0313344129 - Sở kế hoạch và đầu tư TP.HCM cấp ngày 13/7/2015. Office: 198 Đường Số 10, Phường Thông Tây Hội, TP.HCM Showroom 1: 41 Đường A4, Phường Bảy Hiền, TP.HCM Showroom 2: 66A đường A4 (khu K300), Phường Bảy Hiền, TP.HCM Xưởng 1: 25/5A đường số 610, xã Phú Hòa Đông, TP.HCM Xưởng 2: C7C Phạm Hùng, xã Bình Hưng, TP.HCM Email: Cfurni168@gmail.com Web: www.cfurni.vn Facebook: Nội Thất Cfurni Phone: 0932 67 82 67 - 0902 34 93 94" [ref=e195]':
                - 'cell "MST: 0313344129 - Sở kế hoạch và đầu tư TP.HCM cấp ngày 13/7/2015. Office: 198 Đường Số 10, Phường Thông Tây Hội, TP.HCM Showroom 1: 41 Đường A4, Phường Bảy Hiền, TP.HCM Showroom 2: 66A đường A4 (khu K300), Phường Bảy Hiền, TP.HCM Xưởng 1: 25/5A đường số 610, xã Phú Hòa Đông, TP.HCM Xưởng 2: C7C Phạm Hùng, xã Bình Hưng, TP.HCM Email: Cfurni168@gmail.com Web: www.cfurni.vn Facebook: Nội Thất Cfurni Phone: 0932 67 82 67 - 0902 34 93 94" [ref=e196]':
                  - paragraph [ref=e197]:
                    - text: "MST: 0313344129 - Sở kế hoạch và đầu tư TP.HCM cấp ngày 13/7/2015."
                    - text: "Office: 198 Đường Số 10, Phường Thông Tây Hội, TP.HCM"
                  - paragraph [ref=e198]: "Showroom 1: 41 Đường A4, Phường Bảy Hiền, TP.HCM"
                  - paragraph [ref=e199]: "Showroom 2: 66A đường A4 (khu K300), Phường Bảy Hiền, TP.HCM"
                  - paragraph [ref=e200]: "Xưởng 1: 25/5A đường số 610, xã Phú Hòa Đông, TP.HCM"
                  - paragraph [ref=e201]: "Xưởng 2: C7C Phạm Hùng, xã Bình Hưng, TP.HCM"
                  - paragraph [ref=e202]:
                    - text: "Email: Cfurni168@gmail.com"
                    - text: "Web: www.cfurni.vn"
                  - paragraph [ref=e203]:
                    - 'link "Facebook: Nội Thất Cfurni" [ref=e204] [cursor=pointer]':
                      - /url: https://www.facebook.com/noithatcfurni/
                  - paragraph [ref=e205]: "Phone: 0932 67 82 67 - 0902 34 93 94"
          - paragraph [ref=e206]: Theo dõi chúng tôi tại
          - generic [ref=e207]:
            - link "Facebook" [ref=e208] [cursor=pointer]:
              - /url: https://www.facebook.com/noithatcfurni
              - img "Facebook" [ref=e209]
            - link "Messenger" [ref=e210] [cursor=pointer]:
              - /url: ""
              - img "Messenger" [ref=e211]
            - link "Instargam" [ref=e212] [cursor=pointer]:
              - /url: https://www.instagram.com/cfurni.vn?igsh=cnNhNG43aGhhbzJs
              - img "Instargam" [ref=e213]
            - link "TikTok" [ref=e214] [cursor=pointer]:
              - /url: https://www.tiktok.com/@noithatcfurni?_r=1&_t=ZS-98xhhbBhQua
              - img "TikTok" [ref=e215]
            - link "Youtube" [ref=e216] [cursor=pointer]:
              - /url: https://youtube.com/@noithatcfurni?si=HxSvpE0k9CoN2tWr
              - img "Youtube" [ref=e217]
        - img "CÔNG TY TNHH CFURNI" [ref=e220]
      - generic [ref=e223]:
        - generic [ref=e224]:
          - paragraph [ref=e225]: Truy cập nhanh
          - list [ref=e226]:
            - listitem [ref=e227]:
              - link "Giới thiệu" [ref=e228] [cursor=pointer]:
                - /url: gioi-thieu
            - listitem [ref=e229]:
              - link "Sản phẩm" [ref=e230] [cursor=pointer]:
                - /url: san-pham
            - listitem [ref=e231]:
              - link "Dự án" [ref=e232] [cursor=pointer]:
                - /url: du-an
            - listitem [ref=e233]:
              - link "Tuyển dụng" [ref=e234] [cursor=pointer]:
                - /url: tuyen-dung
            - listitem [ref=e235]:
              - link "Liên hệ" [ref=e236] [cursor=pointer]:
                - /url: lien-he
        - generic [ref=e237]:
          - paragraph [ref=e238]: Giải pháp
          - list [ref=e239]:
            - listitem [ref=e240]:
              - link "Phòng khách" [ref=e241] [cursor=pointer]:
                - /url: phong-khach
            - listitem [ref=e242]:
              - link "Phòng ăn" [ref=e243] [cursor=pointer]:
                - /url: phong-an
            - listitem [ref=e244]:
              - link "Phòng ngủ" [ref=e245] [cursor=pointer]:
                - /url: phong-ngu
            - listitem [ref=e246]:
              - link "Phòng làm việc" [ref=e247] [cursor=pointer]:
                - /url: phong-lam-viec
        - generic [ref=e248]:
          - paragraph [ref=e249]: Chính sách hỗ trợ
          - list [ref=e250]:
            - listitem [ref=e251]:
              - link "Chính sách đổi trả" [ref=e252] [cursor=pointer]:
                - /url: chinh-sach-doi-tra
            - listitem [ref=e253]:
              - link "Chính sách bảo hành" [ref=e254] [cursor=pointer]:
                - /url: chinh-sach-bao-hanh
            - listitem [ref=e255]:
              - link "Chính sách giao hàng" [ref=e256] [cursor=pointer]:
                - /url: chinh-sach-giao-hang
            - listitem [ref=e257]:
              - link "Chính sách thanh toán" [ref=e258] [cursor=pointer]:
                - /url: chinh-sach-thanh-toan
            - listitem [ref=e259]:
              - link "Chính sách xử lý khiếu nại" [ref=e260] [cursor=pointer]:
                - /url: chinh-sach-xu-ly-khieu-nai
            - listitem [ref=e261]:
              - link "Bảo mật thông tin khách hàng" [ref=e262] [cursor=pointer]:
                - /url: bao-mat-thong-tin-khach-hang
        - generic [ref=e263]:
          - paragraph [ref=e264]: Hotline
          - paragraph [ref=e266]:
            - text: Tư vấn bán hàng
            - text: 0932 67 82 67
            - text: Chăm sóc khách hàng
            - text: 0902 34 93 94
          - link "http://online.gov.vn/nen-tang/4b688d70-4fe8-4619-a929-3c859c5d4206" [ref=e267] [cursor=pointer]:
            - /url: ""
            - img "http://online.gov.vn/nen-tang/4b688d70-4fe8-4619-a929-3c859c5d4206" [ref=e268]
      - generic [ref=e271]:
        - generic [ref=e272]: Copyright ©2026 Công Ty TNHH CFURNI. Thiết kế Web MIMA
        - generic [ref=e273]:
          - generic [ref=e274]:
            - text: "Đang online:"
            - generic [ref=e275]: "1942"
          - generic [ref=e276]: "|"
          - generic [ref=e277]:
            - text: "Hôm nay:"
            - generic [ref=e278]: "8"
          - generic [ref=e279]: "|"
          - generic [ref=e280]:
            - text: "Tổng truy cập:"
            - generic [ref=e281]: "361"
    - generic [ref=e282]:
      - link "Map" [ref=e283] [cursor=pointer]:
        - /url: https://maps.app.goo.gl/JD2W7Ho6mb8Hrmsw6
        - img [ref=e287]
      - 'link "Call me: 0932 67 82 67" [ref=e290] [cursor=pointer]':
        - /url: tel:0932678267
        - img [ref=e294]
        - generic [ref=e297]: "Call me: 0932 67 82 67"
      - 'link "Zalo: 0932 67 82 67" [ref=e298] [cursor=pointer]':
        - /url: https://zalo.me/0932678267
        - img [ref=e302]
        - generic [ref=e303]: "Zalo: 0932 67 82 67"
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
          - strong: 18_100754_ General 1946
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e304]:
      - generic [ref=e305]: "❌ Chi tiết lỗi cần khắc phục (1/15):"
      - generic [ref=e306]:
        - generic [ref=e307]:
          - generic [ref=e308]: 6. Liên kết (Links)
          - generic [ref=e309]: 1 lỗi
        - generic [ref=e310]:
          - strong [ref=e312]: "Không có broken links (lỗi: 5/87)"
          - generic [ref=e313]: "⚠️ Broken links: he-thong-cua-hang (status: 404), phong-ngu (status: 404), phong-khach (status: 404), phong-an (status: 404), phong-lam-viec (status: 404)"
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