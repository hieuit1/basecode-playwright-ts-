# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: https://code4.mimadigi.vn/2026/august/buivanquy_111126W/ (/index.php)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 90/100 dưới ngưỡng 96%. Có 2/20 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]: Bền bỉ mọi cung đường
      - img "Lorem Ipsum" [ref=e6]
      - generic [ref=e7]: Bền bỉ mọi cung đường
      - img "Lorem Ipsum" [ref=e8]
      - generic [ref=e9]: Bền bỉ mọi cung đường
      - img "Lorem Ipsum" [ref=e10]
      - generic [ref=e11]: Bền bỉ mọi cung đường
      - img "Lorem Ipsum" [ref=e12]
      - generic [ref=e13]: Bền bỉ mọi cung đường
      - img "Lorem Ipsum" [ref=e14]
      - generic [ref=e15]: Bền bỉ mọi cung đường
      - img "Lorem Ipsum" [ref=e16]
      - generic [ref=e17]: Bền bỉ mọi cung đường
      - img "Lorem Ipsum" [ref=e18]
      - generic [ref=e19]: Bền bỉ mọi cung đường
      - img "Lorem Ipsum" [ref=e20]
      - generic [ref=e21]: Bền bỉ mọi cung đường
      - img "Lorem Ipsum" [ref=e22]
      - generic [ref=e23]: Bền bỉ mọi cung đường
      - img "Lorem Ipsum" [ref=e24]
    - generic [ref=e27]:
      - link "Lorem Ipsum" [ref=e28] [cursor=pointer]:
        - /url: https://code4.mimadigi.vn/2026/august/buivanquy_111126W/
        - img "Lorem Ipsum" [ref=e29]
      - list [ref=e30]:
        - listitem [ref=e31]:
          - link "Trang chủ" [ref=e32] [cursor=pointer]:
            - /url: https://code4.mimadigi.vn/2026/august/buivanquy_111126W/
        - listitem [ref=e33]:
          - link "Giới thiệu" [ref=e34] [cursor=pointer]:
            - /url: gioi-thieu
        - listitem [ref=e35]:
          - link "Dịch vụ" [ref=e36] [cursor=pointer]:
            - /url: dich-vu
        - listitem [ref=e37]:
          - link "Dự án" [ref=e38] [cursor=pointer]:
            - /url: du-an
        - listitem [ref=e39]:
          - link "Tin tức" [ref=e40] [cursor=pointer]:
            - /url: tin-tuc
        - listitem [ref=e41]:
          - link "Liên hệ" [ref=e42] [cursor=pointer]:
            - /url: lien-he
      - generic [ref=e44]:
        - textbox "Tìm kiếm..." [ref=e45]
        - button "Tìm kiếm" [ref=e46] [cursor=pointer]:
          - img [ref=e47]
      - link "0938 247 868" [ref=e48] [cursor=pointer]:
        - /url: tel:0938247868
        - img [ref=e50]
        - generic [ref=e53]: 0938 247 868
    - generic [ref=e57]:
      - button "Previous" [ref=e58] [cursor=pointer]: ←Previous
      - listbox [ref=e60]:
        - option [ref=e61]:
          - link [ref=e62] [cursor=pointer]:
            - /url: ""
            - img [ref=e64]
        - option [ref=e65]:
          - link [ref=e66] [cursor=pointer]:
            - /url: ""
            - img [ref=e68]
        - option [ref=e69]:
          - link [ref=e70] [cursor=pointer]:
            - /url: ""
            - img [ref=e72]
        - option "Lorem Ipsum" [ref=e73]:
          - link "Lorem Ipsum" [ref=e74] [cursor=pointer]:
            - /url: ""
            - img "Lorem Ipsum" [ref=e76]
      - button "Next" [ref=e77] [cursor=pointer]: →Next
    - generic [ref=e78]:
      - generic [ref=e81]:
        - img
        - generic [ref=e82]:
          - generic [ref=e83]:
            - generic [ref=e84]: ★
            - text: VỀ CHÚNG TÔI
          - heading "Lorem Ipsum là gì?" [level=2] [ref=e85]
          - paragraph [ref=e87]:
            - strong [ref=e88]: Lorem Ipsum
            - text: chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng trong các ứng dụng dàn trang, như Aldus PageMaker.
          - link "Xem thêm về chúng tôi" [ref=e89] [cursor=pointer]:
            - /url: gioi-thieu
            - generic [ref=e90]: Xem thêm về chúng tôi
            - img [ref=e92]
        - img "Lorem Ipsum là gì?" [ref=e96]
      - generic [ref=e99]:
        - generic:
          - generic:
            - heading "làm đẹp" [level=3]
        - generic:
          - generic:
            - heading "cứu hộ" [level=3]
        - generic:
          - generic:
            - heading "bảo dưỡng" [level=3]
        - generic:
          - generic:
            - heading "sửa chữa" [level=3]
      - generic [ref=e101]:
        - generic:
          - heading "DỊCH VỤ CHÍNH" [level=2]:
            - img
            - generic: DỊCH VỤ CHÍNH
            - img
        - generic [ref=e102]:
          - generic:
            - generic:
              - link "Danh mục dịch vụ 1":
                - /url: danh-muc-dich-vu-1
              - generic:
                - heading "Danh mục dịch vụ 1" [level=3]:
                  - link "Danh mục dịch vụ 1":
                    - /url: danh-muc-dich-vu-1
                - paragraph: Mô tả danh mục dịch vụ 1
          - generic:
            - generic:
              - link "Danh mục dịch vụ 2":
                - /url: danh-muc-dich-vu-2
              - generic:
                - heading "Danh mục dịch vụ 2" [level=3]:
                  - link "Danh mục dịch vụ 2":
                    - /url: danh-muc-dich-vu-2
                - paragraph: Mô tả danh mục dịch vụ 2
          - generic:
            - generic:
              - link "Danh mục dịch vụ 3":
                - /url: danh-muc-dich-vu-3
              - generic:
                - heading "Danh mục dịch vụ 3" [level=3]:
                  - link "Danh mục dịch vụ 3":
                    - /url: danh-muc-dich-vu-3
                - paragraph: Mô tả danh mục dịch vụ 3
          - generic:
            - generic:
              - link "Danh mục dịch vụ 4":
                - /url: danh-muc-dich-vu-4
              - generic:
                - heading "Danh mục dịch vụ 4" [level=3]:
                  - link "Danh mục dịch vụ 4":
                    - /url: danh-muc-dich-vu-4
        - generic:
          - link "Xem tất cả dịch vụ":
            - /url: dich-vu
            - generic: Xem tất cả dịch vụ
            - generic:
              - img
      - generic [ref=e104]:
        - generic:
          - heading "DỰ ÁN" [level=2]:
            - img
            - generic: DỰ ÁN
            - img
        - generic [ref=e105]:
          - generic:
            - generic:
              - link "Dự án 1":
                - /url: du-an-1
              - generic:
                - heading "Dự án 1" [level=3]:
                  - link "Dự án 1":
                    - /url: du-an-1
                - paragraph: Nội dung bài dự án 1. Đây là phần nội dung chi tiết dùng làm data mẫu để dựng giao diện. Đoạn văn thứ hai của bài dự án 1 dùng để kiểm tra chiều cao khối nội dung. Nội dung bài dự án 1. Đây là phần nội dung chi tiết dùng làm data mẫu để dựng giao diện. Đoạn văn thứ hai của bài dự án 1 dùng để kiểm tra chiều cao khối nội dung.
                - generic:
                  - link "Xem thêm":
                    - /url: du-an-1
                    - generic: Xem thêm
                    - img
          - generic:
            - generic:
              - link "Dự án 2":
                - /url: du-an-2
              - generic:
                - heading "Dự án 2" [level=3]:
                  - link "Dự án 2":
                    - /url: du-an-2
                - paragraph: Mô tả bài dự án 2
                - generic:
                  - link "Xem thêm":
                    - /url: du-an-2
                    - generic: Xem thêm
                    - img
          - generic:
            - generic:
              - link "Dự án 3":
                - /url: du-an-3
              - generic:
                - heading "Dự án 3" [level=3]:
                  - link "Dự án 3":
                    - /url: du-an-3
                - paragraph: Mô tả bài dự án 3
                - generic:
                  - link "Xem thêm":
                    - /url: du-an-3
                    - generic: Xem thêm
                    - img
          - generic:
            - generic:
              - link "Dự án 4":
                - /url: du-an-4
              - generic:
                - heading "Dự án 4" [level=3]:
                  - link "Dự án 4":
                    - /url: du-an-4
                - paragraph: Mô tả bài dự án 4
                - generic:
                  - link "Xem thêm":
                    - /url: du-an-4
                    - generic: Xem thêm
                    - img
        - generic:
          - link "Xem tất cả dự án":
            - /url: du-an
            - generic: Xem tất cả dự án
            - generic:
              - img
      - generic [ref=e106]:
        - generic [ref=e107]:
          - generic:
            - heading "TẠI SAO PHẢI CHỌN GARA 247?" [level=2]:
              - img
              - generic: TẠI SAO PHẢI CHỌN GARA 247?
              - img
        - generic:
          - generic:
            - generic:
              - img "TẠI SAO PHẢI CHỌN GARA 247"
        - generic [ref=e109]:
          - generic:
            - generic:
              - generic:
                - img
                - heading "Hỗ Trợ 24/7" [level=3]
              - paragraph: Sẵn sàng bảo dưỡng, sửa chữa và cứu hộ mọi lúc khi khách hàng cần
          - generic:
            - generic:
              - generic:
                - img
                - heading "Minh Bạch" [level=3]
              - paragraph: Báo giá rõ ràng, tư vấn trước khi sửa chữa, không phát sinh chi phí
          - generic:
            - generic:
              - generic:
                - img
                - heading "Thiết Bị Hiện Đại" [level=3]
              - paragraph: Máy móc tiên tiến, hỗ trợ chẩn đoán nhanh và hiệu quả
          - generic:
            - generic:
              - generic:
                - img
                - heading "Kỹ Thuật Giỏi" [level=3]
              - paragraph: Đội ngũ giàu kinh nghiệm, sửa chữa chuyên nghiệp
      - generic [ref=e110]:
        - generic [ref=e111]:
          - generic:
            - heading "KHÁCH HÀNG CẢM NHẬN GÌ VỀ CHÚNG TÔI" [level=2]:
              - img
              - generic: KHÁCH HÀNG CẢM NHẬN GÌ VỀ CHÚNG TÔI
              - img
          - generic [ref=e113]:
            - generic:
              - generic:
                - heading "Nguyễn Văn Hùng" [level=3]
                - paragraph: Chủ doanh nghiệp vận tải
                - separator
                - paragraph: Dịch vụ rất chuyên nghiệp, kỹ thuật viên tư vấn rõ ràng và sửa chữa nhanh chóng. Xe vận hành ổn định hơn sau khi bảo dưỡng
                - generic:
                  - img
            - generic:
              - generic:
                - heading "Nguyễn Văn Hùng (1)" [level=3]
                - paragraph: Chủ doanh nghiệp vận tải
                - separator
                - paragraph: Dịch vụ rất chuyên nghiệp, kỹ thuật viên tư vấn rõ ràng và sửa chữa nhanh chóng. Xe vận hành ổn định hơn sau khi bảo dưỡng
                - generic:
                  - img
            - generic:
              - generic:
                - heading "Nguyễn Văn Hùng (2)" [level=3]
                - paragraph: Chủ doanh nghiệp vận tải
                - separator
                - paragraph: Dịch vụ rất chuyên nghiệp, kỹ thuật viên tư vấn rõ ràng và sửa chữa nhanh chóng. Xe vận hành ổn định hơn sau khi bảo dưỡng
                - generic:
                  - img
        - generic:
          - img
        - generic:
          - img
      - generic [ref=e115]:
        - generic:
          - heading "ĐỐI TÁC" [level=2]:
            - img
            - generic: ĐỐI TÁC
            - img
        - generic [ref=e118]:
          - link [ref=e120] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e121]
          - link [ref=e123] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e124]
          - link [ref=e126] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e127]
          - link [ref=e129] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e130]
          - link [ref=e132] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e133]
          - link [ref=e135] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e136]
          - link [ref=e138] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e139]
          - link [ref=e141] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e142]
          - link [ref=e144] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e145]
          - link [ref=e147] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e148]
          - link [ref=e150] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e151]
          - link [ref=e153] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e154]
          - link [ref=e156] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e157]
          - link [ref=e159] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e160]
          - link [ref=e162] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e163]
          - link [ref=e165] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e166]
          - link [ref=e168] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e169]
          - link [ref=e171] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e172]
          - link [ref=e174] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e175]
          - link [ref=e177] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e178]
          - link [ref=e180] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e181]
          - link [ref=e183] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e184]
      - generic [ref=e186]:
        - generic:
          - heading "TIN TỨC" [level=2]:
            - img
            - generic: TIN TỨC
            - img
        - generic [ref=e189]:
          - generic [ref=e191]:
            - link "Tin tức 1" [ref=e192] [cursor=pointer]:
              - /url: tin-tuc-1
            - generic [ref=e193]:
              - heading "Tin tức 1" [level=3] [ref=e194]:
                - link "Tin tức 1" [ref=e195] [cursor=pointer]:
                  - /url: tin-tuc-1
              - paragraph [ref=e196]: Mô tả bài tin tức 1 Nội dung bài tin tức 1. Đây là phần nội dung chi tiết dùng làm data mẫu để dựng giao diện. Đoạn văn thứ hai của bài tin tức 1 dùng để kiểm tra chiều cao khối nội dung.
              - link "Xem thêm" [ref=e198] [cursor=pointer]:
                - /url: tin-tuc-1
                - generic [ref=e199]: Xem thêm
                - img [ref=e200]
          - generic [ref=e203]:
            - link "Tin tức 2" [ref=e204] [cursor=pointer]:
              - /url: tin-tuc-2
            - generic [ref=e205]:
              - heading "Tin tức 2" [level=3] [ref=e206]:
                - link "Tin tức 2" [ref=e207] [cursor=pointer]:
                  - /url: tin-tuc-2
              - paragraph [ref=e208]: Mô tả bài tin tức 2 Nội dung bài tin tức 2. Đây là phần nội dung chi tiết dùng làm data mẫu để dựng giao diện. Đoạn văn thứ hai của bài tin tức 2 dùng để kiểm tra chiều cao khối nội dung. Nội dung bài tin tức 2. Đây là phần nội dung chi tiết dùng làm data mẫu để dựng giao diện. Mô tả bài tin tức 2 Nội dung bài tin tức 2. Đây là phần nội dung chi tiết dùng làm data mẫu để dựng giao diện. Đoạn văn thứ hai của bài tin tức 2 dùng để kiểm tra chiều cao khối nội dung. Nội dung bài tin tức 2. Đây là phần nội dung chi tiết dùng làm data mẫu để dựng giao diện. Đoạn văn thứ hai của bài tin tức 2 dùng để kiểm tra chiều cao khối nội dung.
              - link "Xem thêm" [ref=e210] [cursor=pointer]:
                - /url: tin-tuc-2
                - generic [ref=e211]: Xem thêm
                - img [ref=e212]
          - generic [ref=e215]:
            - link "Tin tức 3" [ref=e216] [cursor=pointer]:
              - /url: tin-tuc-3
            - generic [ref=e217]:
              - heading "Tin tức 3" [level=3] [ref=e218]:
                - link "Tin tức 3" [ref=e219] [cursor=pointer]:
                  - /url: tin-tuc-3
              - paragraph [ref=e220]: Mô tả bài tin tức 3
              - link "Xem thêm" [ref=e222] [cursor=pointer]:
                - /url: tin-tuc-3
                - generic [ref=e223]: Xem thêm
                - img [ref=e224]
        - generic:
          - link "Xem tất cả bài viết":
            - /url: tin-tuc
            - generic: Xem tất cả bài viết
            - generic:
              - img
      - generic [ref=e226]:
        - img "Đăng ký nhận thông tin" [ref=e227]
        - generic [ref=e231]:
          - generic:
            - paragraph: Đăng ký nhận thông tin
            - generic:
              - generic:
                - textbox "Họ và tên*"
              - generic:
                - textbox "Số điện thoại*"
              - generic:
                - textbox "Email*"
              - generic:
                - textbox "Nội dung"
              - button "Gửi thông tin đăng ký ngay":
                - img
                - generic: Gửi thông tin đăng ký ngay
    - generic [ref=e232]:
      - generic [ref=e233]:
        - link "Lorem Ipsum" [ref=e235] [cursor=pointer]:
          - /url: https://code4.mimadigi.vn/2026/august/buivanquy_111126W/
          - img "Lorem Ipsum" [ref=e236]
        - generic [ref=e237]:
          - generic [ref=e238]:
            - paragraph [ref=e239]: Thông tin liên hệ
            - list [ref=e240]:
              - listitem [ref=e241]:
                - 'link "Địa chỉ: Số L22-23, đường N1, Khu phố 1, Phường Trấn Biên, Đồng Nai" [ref=e242] [cursor=pointer]':
                  - /url: https://maps.app.goo.gl/JD2W7Ho6mb8Hrmsw6
                  - img [ref=e243]
                  - generic [ref=e245]: "Địa chỉ: Số L22-23, đường N1, Khu phố 1, Phường Trấn Biên, Đồng Nai"
              - listitem [ref=e246]:
                - 'link "Hotline: 0938 247 868" [ref=e247] [cursor=pointer]':
                  - /url: tel:0938247868
                  - img [ref=e248]
                  - generic [ref=e251]: "Hotline: 0938 247 868"
              - listitem [ref=e252]:
                - 'link "Email: hoahd98.mima@gmail.com" [ref=e253] [cursor=pointer]':
                  - /url: mailto:hoahd98.mima@gmail.com
                  - img [ref=e254]
                  - generic [ref=e256]: "Email: hoahd98.mima@gmail.com"
            - paragraph [ref=e257]: Theo dõi chúng tôi tại
            - generic [ref=e258]:
              - link "Lorem Ipsum" [ref=e259] [cursor=pointer]:
                - /url: ""
                - img "Lorem Ipsum" [ref=e260]
              - link "Lorem Ipsum" [ref=e261] [cursor=pointer]:
                - /url: ""
                - img "Lorem Ipsum" [ref=e262]
              - link "Lorem Ipsum" [ref=e263] [cursor=pointer]:
                - /url: ""
                - img "Lorem Ipsum" [ref=e264]
              - link "Lorem Ipsum" [ref=e265] [cursor=pointer]:
                - /url: ""
                - img "Lorem Ipsum" [ref=e266]
          - generic [ref=e267]:
            - paragraph [ref=e268]: Dịch vụ
            - list [ref=e269]:
              - listitem [ref=e270]:
                - link "Test Dịch vụ cấp 1 1787110726250" [ref=e271] [cursor=pointer]:
                  - /url: test-dich-vu-cap-1-1787110726250
              - listitem [ref=e272]:
                - link "Danh mục dịch vụ 1" [ref=e273] [cursor=pointer]:
                  - /url: danh-muc-dich-vu-1
              - listitem [ref=e274]:
                - link "Danh mục dịch vụ 2" [ref=e275] [cursor=pointer]:
                  - /url: danh-muc-dich-vu-2
              - listitem [ref=e276]:
                - link "Danh mục dịch vụ 3" [ref=e277] [cursor=pointer]:
                  - /url: danh-muc-dich-vu-3
              - listitem [ref=e278]:
                - link "Danh mục dịch vụ 4" [ref=e279] [cursor=pointer]:
                  - /url: danh-muc-dich-vu-4
              - listitem [ref=e280]:
                - link "Danh mục dịch vụ 5" [ref=e281] [cursor=pointer]:
                  - /url: danh-muc-dich-vu-5
          - generic [ref=e282]:
            - paragraph [ref=e283]: Chính sách & hỗ trợ KH
            - list [ref=e284]:
              - listitem [ref=e285]:
                - link "Tư vấn tận tâm" [ref=e286] [cursor=pointer]:
                  - /url: tu-van-tan-tam
              - listitem [ref=e287]:
                - link "Phụ tùng chính hãng" [ref=e288] [cursor=pointer]:
                  - /url: phu-tung-chinh-hang
              - listitem [ref=e289]:
                - link "Hỗ trợ cứu hộ 24/7" [ref=e290] [cursor=pointer]:
                  - /url: ho-tro-cuu-ho-247
              - listitem [ref=e291]:
                - link "Bảo hành dịch vụ" [ref=e292] [cursor=pointer]:
                  - /url: bao-hanh-dich-vu
              - listitem [ref=e293]:
                - link "Báo giá minh bạch" [ref=e294] [cursor=pointer]:
                  - /url: bao-gia-minh-bach
      - paragraph [ref=e297]: Copyright ©2026 Web Mima. All Rights Reserved. Thiết kế Web MIMA
    - generic [ref=e298]:
      - 'link "Call me: 0938 247 868" [ref=e299] [cursor=pointer]':
        - /url: tel:0938247868
        - img [ref=e303]
        - generic [ref=e306]: "Call me: 0938 247 868"
      - 'link "Zalo: 0938 247 868" [ref=e307] [cursor=pointer]':
        - /url: https://zalo.me/0938247868
        - img [ref=e311]
        - generic [ref=e312]: "Zalo: 0938 247 868"
      - link "Chỉ đường tới GARA" [ref=e313] [cursor=pointer]:
        - /url: https://maps.app.goo.gl/JD2W7Ho6mb8Hrmsw6
        - img [ref=e317]
        - generic [ref=e319]: Chỉ đường tới GARA
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
              - generic: "90"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 90/100
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
          - generic: ✅ 18
          - generic: Đạt
        - generic:
          - generic: ❌ 2
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: https://code4.mimadigi.vn/2026/august/buivanquy_111126W/
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e320]:
      - generic [ref=e321]: "❌ Chi tiết lỗi cần khắc phục (2/20):"
      - generic [ref=e322]:
        - generic [ref=e323]:
          - generic [ref=e324]: 1. Thẻ Title
          - generic [ref=e325]: 1 lỗi
        - generic [ref=e326]:
          - strong [ref=e328]: "Title phải có nội dung (hiện tại: 0 ký tự)"
          - generic [ref=e329]: ⚠️ Title tag không tồn tại hoặc rỗng!
      - generic [ref=e330]:
        - generic [ref=e331]:
          - generic [ref=e332]: 8. Tốc độ & Core Web Vitals
          - generic [ref=e333]: 1 lỗi
        - generic [ref=e334]:
          - strong [ref=e336]: "[📱 MOBILE (ƯU TIÊN)] LCP (Largest Contentful Paint): 3968ms (< 2500ms)"
          - generic [ref=e337]:
            - text: "⚠️ [📱 MOBILE (ƯU TIÊN)] LCP quá cao: 3968ms (chuẩn: < 2.5s) → Thủ phạm LCP:"
            - paragraph [ref=e338]:
              - strong [ref=e339]: Lorem Ipsum
              - text: chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phụ...
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 90/100 dưới ngưỡng 96%. Có 2/20 tiêu chí không đạt.
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