# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Giới thiệu (/gioi-thieu)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 85/100 dưới ngưỡng 96%. Có 3/20 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - link "PHẾ LIỆU BÌNH MINH" [ref=e6] [cursor=pointer]:
      - /url: https://code7.mimadigi.vn/2026_09/levietdieu_115526w/
      - img "PHẾ LIỆU BÌNH MINH" [ref=e7]
    - generic [ref=e8]:
      - list [ref=e10]:
        - listitem [ref=e11]:
          - generic [ref=e12]:
            - img [ref=e13]
            - generic [ref=e16]: "Địa chỉ: Khu công nghiệp Tân Bình"
        - listitem [ref=e17]:
          - 'link "Hotline: 0978 57 76 79" [ref=e18] [cursor=pointer]':
            - /url: tel:0978577679
            - img [ref=e19]
            - generic [ref=e21]: "Hotline: 0978 57 76 79"
      - generic [ref=e22]:
        - list [ref=e23]:
          - listitem [ref=e24]:
            - link "Trang chủ" [ref=e25] [cursor=pointer]:
              - /url: ""
              - img [ref=e26]
              - text: Trang chủ
          - listitem [ref=e28]:
            - link "Về chúng tôi" [ref=e29] [cursor=pointer]:
              - /url: gioi-thieu
          - listitem [ref=e30]:
            - link "Dịch vụ" [ref=e31] [cursor=pointer]:
              - /url: dich-vu
              - text: Dịch vụ
              - img [ref=e32]
          - listitem [ref=e34]:
            - link "Dự án" [ref=e35] [cursor=pointer]:
              - /url: du-an
          - listitem [ref=e36]:
            - link "Tin tức" [ref=e37] [cursor=pointer]:
              - /url: tin-tuc
          - listitem [ref=e38]:
            - link "Liên hệ" [ref=e39] [cursor=pointer]:
              - /url: lien-he
        - link "Nhận báo giá" [ref=e41] [cursor=pointer]:
          - /url: "#quote-modal"
          - img [ref=e42]
          - generic [ref=e47]: Nhận báo giá
  - generic [ref=e48]:
    - generic [ref=e49]:
      - generic [ref=e50]:
        - region "Giới thiệu" [ref=e51]:
          - img "CÔNG TY TNHH TMDV GOLDEN RULE" [ref=e53]
        - list [ref=e56]:
          - listitem [ref=e57]:
            - link "Trang chủ" [ref=e58] [cursor=pointer]:
              - /url: https://code7.mimadigi.vn/2026_09/levietdieu_115526w/
              - generic [ref=e59]: Trang chủ
          - listitem [ref=e60]:
            - text: /
            - link "Giới thiệu" [ref=e61] [cursor=pointer]:
              - /url: https://code7.mimadigi.vn/2026_09/levietdieu_115526w/gioi-thieu
              - generic [ref=e62]: Giới thiệu
      - generic [ref=e64]:
        - generic [ref=e65]:
          - generic [ref=e66]:
            - generic:
              - img "PHẾ LIỆU BÌNH MINH - GIẢI PHÁP THU MUA PHẾ LIỆU GIÁ CAO VÀ UY TÍN CHO DOANH NGHIỆP"
          - generic [ref=e67]:
            - generic:
              - generic: Về chúng tôi
              - heading "PHẾ LIỆU BÌNH MINH - GIẢI PHÁP THU MUA PHẾ LIỆU GIÁ CAO VÀ UY TÍN CHO DOANH NGHIỆP" [level=2]
              - generic:
                - paragraph: Phế liệu Bình Minh tự hào là đối tác tin cậy trong lĩnh vực thu mua và xử lý phế liệu công nghiệp. Chúng tôi cung cấp giải pháp thu mua tận nơi linh hoạt từ đồng, nhôm, sắt thép, inox đến phế liệu nhà xưởng, giúp tối ưu hóa chi phí giải phóng mặt bằng và mang lại nguồn thu tối đa cho doanh nghiệp
                - paragraph: Với nhiều năm kinh nghiệm cùng hệ thống xe tải chuyên dụng và đội ngũ nhân sự lành nghề, chúng tôi cam kết thu mua với giá cạnh tranh nhất thị trường, quy trình định giá công khai và hỗ trợ dọn dẹp mặt bằng sạch sẻ sau khi bốc xếp.
        - generic:
          - generic:
            - generic:
              - paragraph: Phế liệu Bình Minh tự hào là đối tác tin cậy trong lĩnh vực thu mua và xử lý phế liệu công nghiệp. Chúng tôi cung cấp giải pháp thu mua tận nơi linh hoạt từ đồng, nhôm, sắt thép, inox đến phế liệu nhà xưởng, giúp tối ưu hóa chi phí giải phóng mặt bằng và mang lại nguồn thu tối đa cho doanh nghiệp
              - paragraph: Với nhiều năm kinh nghiệm cùng hệ thống xe tải chuyên dụng và đội ngũ nhân sự lành nghề, chúng tôi cam kết thu mua với giá cạnh tranh nhất thị trường, quy trình định giá công khai và hỗ trợ dọn dẹp mặt bằng sạch sẻ sau khi bốc xếp.
              - paragraph: Phế liệu Bình Minh tự hào là đối tác tin cậy trong lĩnh vực thu mua và xử lý phế liệu công nghiệp. Chúng tôi cung cấp giải pháp thu mua tận nơi linh hoạt từ đồng, nhôm, sắt thép, inox đến phế liệu nhà xưởng, giúp tối ưu hóa chi phí giải phóng mặt bằng và mang lại nguồn thu tối đa cho doanh nghiệp
              - paragraph: Với nhiều năm kinh nghiệm cùng hệ thống xe tải chuyên dụng và đội ngũ nhân sự lành nghề, chúng tôi cam kết thu mua với giá cạnh tranh nhất thị trường, quy trình định giá công khai và hỗ trợ dọn dẹp mặt bằng sạch sẻ sau khi bốc xếp.
              - paragraph: Phế liệu Bình Minh tự hào là đối tác tin cậy trong lĩnh vực thu mua và xử lý phế liệu công nghiệp. Chúng tôi cung cấp giải pháp thu mua tận nơi linh hoạt từ đồng, nhôm, sắt thép, inox đến phế liệu nhà xưởng, giúp tối ưu hóa chi phí giải phóng mặt bằng và mang lại nguồn thu tối đa cho doanh nghiệp
              - paragraph: Với nhiều năm kinh nghiệm cùng hệ thống xe tải chuyên dụng và đội ngũ nhân sự lành nghề, chúng tôi cam kết thu mua với giá cạnh tranh nhất thị trường, quy trình định giá công khai và hỗ trợ dọn dẹp mặt bằng sạch sẻ sau khi bốc xếp.
              - paragraph: Phế liệu Bình Minh tự hào là đối tác tin cậy trong lĩnh vực thu mua và xử lý phế liệu công nghiệp. Chúng tôi cung cấp giải pháp thu mua tận nơi linh hoạt từ đồng, nhôm, sắt thép, inox đến phế liệu nhà xưởng, giúp tối ưu hóa chi phí giải phóng mặt bằng và mang lại nguồn thu tối đa cho doanh nghiệp
              - paragraph: Với nhiều năm kinh nghiệm cùng hệ thống xe tải chuyên dụng và đội ngũ nhân sự lành nghề, chúng tôi cam kết thu mua với giá cạnh tranh nhất thị trường, quy trình định giá công khai và hỗ trợ dọn dẹp mặt bằng sạch sẻ sau khi bốc xếp.
              - paragraph: Phế liệu Bình Minh tự hào là đối tác tin cậy trong lĩnh vực thu mua và xử lý phế liệu công nghiệp. Chúng tôi cung cấp giải pháp thu mua tận nơi linh hoạt từ đồng, nhôm, sắt thép, inox đến phế liệu nhà xưởng, giúp tối ưu hóa chi phí giải phóng mặt bằng và mang lại nguồn thu tối đa cho doanh nghiệp
              - paragraph: Với nhiều năm kinh nghiệm cùng hệ thống xe tải chuyên dụng và đội ngũ nhân sự lành nghề, chúng tôi cam kết thu mua với giá cạnh tranh nhất thị trường, quy trình định giá công khai và hỗ trợ dọn dẹp mặt bằng sạch sẻ sau khi bốc xếp.
          - button "Xem thêm bài viết":
            - generic: Xem thêm bài viết
            - generic:
              - img
      - generic [ref=e70]:
        - generic:
          - paragraph: 0+
          - paragraph: Tấn phế liệu đã thu mua
        - generic:
          - paragraph: 0+
          - paragraph: Khách hàng tin tưởng
        - generic:
          - paragraph: "0"
          - paragraph: Tỉnh thành phục vụ
        - generic:
          - paragraph: 0%
          - paragraph: Thu mua tận nơi
      - generic [ref=e73]:
        - article:
          - generic:
            - img
          - heading "Giá cao nhất thị trường" [level=3]
        - article:
          - generic:
            - img
          - heading "Thu mua tận nơi" [level=3]
        - article:
          - generic:
            - img
          - heading "Thanh toán nhanh chóng" [level=3]
        - article:
          - generic:
            - img
          - heading "Uy tín chuyên nghiệp" [level=3]
      - generic [ref=e75]:
        - article:
          - generic:
            - heading "Tầm Nhìn" [level=2]
            - generic:
              - paragraph: Trở thành đơn vị thu mua và tái chế phế liệu công nghiệp hàng đầu khu vực, đóng góp tích cực vào mô hình kinh tế tuần hoàn, giúp tối ưu hóa giá trị tài nguyên tái chế và mang lại lợi ích tài chính bền vững cho các đối tác doanh nghiệp.
        - article:
          - generic:
            - heading "Sứ mệnh" [level=2]
            - generic:
              - paragraph: Cung cấp giải pháp thu mua phế liệu trọn gói, nhanh chóng và an toàn. Chúng tôi không chỉ giúp khách hàng giải phóng mặt bằng kho bãi hiệu quả mà còn đồng hành bảo vệ môi trường thông qua quy trình phân loại và xử lý đạt chuẩn.
      - generic [ref=e78]:
        - heading "Giá trị cốt lõi" [level=2] [ref=e85]
        - article:
          - heading "Uy tín" [level=3]
          - paragraph: Định giá chính xác, cân đo trung thực và thanh toán 100% tiền mặt hoặc chuyển khoản ngay trong ngày.
        - article:
          - heading "Giá cao" [level=3]
          - paragraph: Luôn cập nhật giá thị trường liên tục để đảm bảo mức giá thu mua cao và tối ưu nhất cho khách hàng.
        - article:
          - heading "Tận nơi" [level=3]
          - paragraph: Khảo sát và thu gom tận kho bãi, hỗ trợ tháo dỡ và vận chuyển trọn gói không tốn phí phát sinh.
        - article:
          - heading "Chuyên nghiệp" [level=3]
          - paragraph: Quy trình xử lý nhanh gọn, đội ngũ thi công an toàn và hỗ trợ tư vấn nhiệt tình 24/7.
      - generic [ref=e87]:
        - generic:
          - paragraph: Đối tác khách hàng
          - heading "Các đối tác khách hàng của chúng tôi" [level=2]
        - generic [ref=e90]:
          - group "1 / 11" [ref=e91]:
            - link:
              - /url: "#"
          - group "2 / 11" [ref=e92]:
            - link:
              - /url: "#"
          - group "3 / 11" [ref=e93]:
            - link:
              - /url: "#"
          - group "4 / 11" [ref=e94]:
            - link:
              - /url: "#"
          - group "5 / 11" [ref=e95]:
            - link:
              - /url: "#"
          - group "6 / 11" [ref=e96]:
            - link:
              - /url: "#"
          - group "7 / 11" [ref=e97]:
            - link:
              - /url: "#"
          - group "8 / 11" [ref=e98]:
            - link:
              - /url: "#"
          - group "9 / 11" [ref=e99]:
            - link:
              - /url: "#"
          - group "10 / 11" [ref=e100]:
            - link:
              - /url: "#"
          - group "11 / 11" [ref=e101]:
            - link:
              - /url: "#"
      - generic [ref=e104]:
        - generic:
          - heading "Đăng ký nhận tư vấn" [level=2]
          - generic:
            - generic:
              - generic: Họ và tên
              - generic:
                - generic:
                  - img
                - textbox "Họ và tên":
                  - /placeholder: Nhập họ và tên
            - generic:
              - generic: Điện thoại
              - generic:
                - generic:
                  - img
                - textbox "Điện thoại":
                  - /placeholder: Nhập số điện thoại
            - generic:
              - generic: Bạn cần tư vấn dịch vụ gì ?
              - generic:
                - combobox "Bạn cần tư vấn dịch vụ gì ?":
                  - option "Chọn dịch vụ" [selected]
                  - option "Thu mua phế liệu sắt"
                  - option "Thu mua phế liệu nhôm"
                  - option "Thu mua phế liệu đồng"
                  - option "Thu mua phế liệu inox"
                  - option "Thu mua máy móc cũ"
                  - option "Thu mua xác nhà xưởng"
            - generic:
              - generic: Nội dung
              - generic:
                - textbox "Nội dung":
                  - /placeholder: Nhập lời nhắn
            - button "Gửi thông tin liên hệ ngay":
              - generic: Gửi thông tin liên hệ ngay
              - img
    - generic [ref=e105]:
      - 'link "Call me: 097 857 7679" [ref=e106] [cursor=pointer]':
        - /url: tel:0978577679
        - img [ref=e110]
        - generic [ref=e113]: "Call me: 097 857 7679"
      - 'link "Zalo: 097 857 7679" [ref=e114] [cursor=pointer]':
        - /url: https://zalo.me/0978577679
        - img [ref=e118]
        - generic [ref=e119]: "Zalo: 097 857 7679"
  - contentinfo [ref=e120]:
    - generic [ref=e123]:
      - generic [ref=e124]:
        - link "PHẾ LIỆU BÌNH MINH" [ref=e125] [cursor=pointer]:
          - /url: https://code7.mimadigi.vn/2026_09/levietdieu_115526w/
          - img "PHẾ LIỆU BÌNH MINH" [ref=e126]
        - paragraph [ref=e127]: "Địa chỉ: Khu Công Nghiệp Tân Bình Điện thoại: 097 857 7679 Email: 7xoai113@gmail.com Website: www.thumuaphelieubinhminh.com"
        - generic [ref=e128]:
          - link "PHẾ LIỆU BÌNH MINH" [ref=e129] [cursor=pointer]:
            - /url: ""
            - img "PHẾ LIỆU BÌNH MINH" [ref=e130]
          - link "PHẾ LIỆU BÌNH MINH" [ref=e131] [cursor=pointer]:
            - /url: ""
            - img "PHẾ LIỆU BÌNH MINH" [ref=e132]
          - link "PHẾ LIỆU BÌNH MINH" [ref=e133] [cursor=pointer]:
            - /url: ""
            - img "PHẾ LIỆU BÌNH MINH" [ref=e134]
      - generic [ref=e135]:
        - heading "Thông tin công ty" [level=3] [ref=e136]
        - generic [ref=e138]:
          - paragraph [ref=e139]:
            - strong [ref=e140]: "Địa chỉ:"
            - text: Khu Công Nghiệp Tân Bình
          - paragraph [ref=e141]:
            - strong [ref=e142]: "Điện thoại:"
            - link "097 857 7679" [ref=e143] [cursor=pointer]:
              - /url: tel:0978577679
          - paragraph [ref=e144]:
            - strong [ref=e145]: "Email:"
            - link "7xoai113@gmail.com" [ref=e146] [cursor=pointer]:
              - /url: mailto:7xoai113@gmail.com
          - paragraph [ref=e147]:
            - strong [ref=e148]: "Website:"
            - link "www.thumuaphelieubinhminh.com" [ref=e149] [cursor=pointer]:
              - /url: https://www.thumuaphelieubinhminh.com
      - generic [ref=e150]:
        - heading "Truy cập nhanh" [level=3] [ref=e151]
        - list [ref=e152]:
          - listitem [ref=e153]:
            - link "Trang chủ" [ref=e154] [cursor=pointer]:
              - /url: ""
          - listitem [ref=e155]:
            - link "Về chúng tôi" [ref=e156] [cursor=pointer]:
              - /url: gioi-thieu
          - listitem [ref=e157]:
            - link "Dự án" [ref=e158] [cursor=pointer]:
              - /url: du-an
          - listitem [ref=e159]:
            - link "Tin tức" [ref=e160] [cursor=pointer]:
              - /url: tin-tuc
          - listitem [ref=e161]:
            - link "Liên hệ" [ref=e162] [cursor=pointer]:
              - /url: lien-he
      - generic [ref=e163]:
        - heading "Dịch vụ" [level=3] [ref=e164]
        - list [ref=e165]:
          - listitem [ref=e166]:
            - link "Thu mua phế liệu sắt" [ref=e167] [cursor=pointer]:
              - /url: thu-mua-phe-lieu-sat
          - listitem [ref=e168]:
            - link "Thu mua phế liệu nhôm" [ref=e169] [cursor=pointer]:
              - /url: thu-mua-phe-lieu-nhom
          - listitem [ref=e170]:
            - link "Thu mua phế liệu đồng" [ref=e171] [cursor=pointer]:
              - /url: thu-mua-phe-lieu-dong
          - listitem [ref=e172]:
            - link "Thu mua phế liệu inox" [ref=e173] [cursor=pointer]:
              - /url: thu-mua-phe-lieu-inox
          - listitem [ref=e174]:
            - link "Thu mua máy móc cũ" [ref=e175] [cursor=pointer]:
              - /url: thu-mua-may-moc-cu
          - listitem [ref=e176]:
            - link "Thu mua xác nhà xưởng" [ref=e177] [cursor=pointer]:
              - /url: thu-mua-xac-nha-xuong
    - paragraph [ref=e180]:
      - text: © Copyright 2026 Thu mua phế liệu Bình Minh. All Right Reserved. Thiết kế web
      - strong [ref=e181]: MIMA
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
              - generic: "85"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 85/100
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
          - generic: ✅ 17
          - generic: Đạt
        - generic:
          - generic: ❌ 3
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: Giới thiệu
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e182]:
      - generic [ref=e183]: "❌ Chi tiết lỗi cần khắc phục (3/20):"
      - generic [ref=e184]:
        - generic [ref=e185]:
          - generic [ref=e186]: 6. Liên kết (Links)
          - generic [ref=e187]: 1 lỗi
        - generic [ref=e188]:
          - strong [ref=e190]: "Không có broken links (lỗi: 1/13)"
          - generic [ref=e191]: "⚠️ Broken links: https://www.thumuaphelieubinhminh.com (status: 0)"
      - generic [ref=e192]:
        - generic [ref=e193]:
          - generic [ref=e194]: 8. Tốc độ & Core Web Vitals
          - generic [ref=e195]: 2 lỗi
        - generic [ref=e196]:
          - strong [ref=e198]: "[📱 MOBILE (ƯU TIÊN)] Tổng điểm Performance: 56/100 (≥ 60)"
          - generic [ref=e199]: ⚠️ [📱 MOBILE (ƯU TIÊN)] Điểm Performance 56/100 dưới ngưỡng 60. Phân tích chi tiết LCP/CLS/INP bên dưới...
        - generic [ref=e200]:
          - strong [ref=e202]: "[📱 MOBILE (ƯU TIÊN)] LCP (Largest Contentful Paint): 21083ms (< 2500ms)"
          - generic [ref=e203]: "⚠️ [📱 MOBILE (ƯU TIÊN)] LCP quá cao: 21083ms (chuẩn: < 2.5s) → Thủ phạm LCP:"
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 85/100 dưới ngưỡng 96%. Có 3/20 tiêu chí không đạt.
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