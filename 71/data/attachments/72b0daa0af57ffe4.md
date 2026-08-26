# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: /index.php (/index.php)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 81/100 dưới ngưỡng 96%. Có 4/21 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e6]:
      - link "Công Hợp Transport" [ref=e7] [cursor=pointer]:
        - /url: https://code5.mimadigi.vn/2026/july/thuexe_toconghop_000426W/
        - img "Công Hợp Transport" [ref=e8]
      - list [ref=e9]:
        - listitem [ref=e10]:
          - link "Trang chủ" [ref=e11] [cursor=pointer]:
            - /url: ""
        - listitem [ref=e12]:
          - link "Về chúng tôi" [ref=e13] [cursor=pointer]:
            - /url: gioi-thieu
        - listitem [ref=e14]:
          - link "Dịch vụ" [ref=e15] [cursor=pointer]:
            - /url: dich-vu
            - text: Dịch vụ
            - img [ref=e16]
        - listitem [ref=e18]:
          - link "Loại xe" [ref=e19] [cursor=pointer]:
            - /url: loai-xe
            - text: Loại xe
            - img [ref=e20]
        - listitem [ref=e22]:
          - link "Bảng giá" [ref=e23] [cursor=pointer]:
            - /url: bang-gia
        - listitem [ref=e24]:
          - link "Tuyến nổi bật" [ref=e25] [cursor=pointer]:
            - /url: tuyen-noi-bat
        - listitem [ref=e26]:
          - link "Tin tức" [ref=e27] [cursor=pointer]:
            - /url: tin-tuc
        - listitem [ref=e28]:
          - link "Tuyển dụng" [ref=e29] [cursor=pointer]:
            - /url: tuyen-dung
        - listitem [ref=e30]:
          - link "Liên hệ" [ref=e31] [cursor=pointer]:
            - /url: lien-he
      - generic [ref=e32]:
        - img "Hotline" [ref=e33]
        - link "0888080138" [ref=e35] [cursor=pointer]:
          - /url: tel:0888080138
    - generic [ref=e36]:
      - generic [ref=e39]:
        - img "banner trang chủ" [ref=e42]
        - generic [ref=e45]:
          - heading "Giảm giá 5% đăng ký nhận báo giá xe ( Báo giá qua Zalo )" [level=3] [ref=e46]:
            - generic [ref=e47]:
              - generic [ref=e48]: Giảm giá 5%
              - img "đăng ký nhận báo giá xe" [ref=e49]
            - generic [ref=e50]: ( Báo giá qua Zalo )
          - generic [ref=e51]:
            - generic [ref=e53]:
              - generic [ref=e54]: Điểm đi
              - generic: "Điểm đi:"
              - textbox "Điểm đi" [ref=e55]
            - generic [ref=e57]:
              - generic [ref=e58]: Điểm đến
              - generic: "Điểm đến:"
              - textbox "Điểm đến" [ref=e59]
            - generic [ref=e61]:
              - generic [ref=e62]: Loại xe
              - combobox "Loại xe" [ref=e63] [cursor=pointer]:
                - option "Chọn loại xe" [selected]
                - option "Xe 4 chỗ"
                - option "Xe 7 chỗ"
                - option "Xe MPV - Canival"
                - option "Xe 9 chỗ Limousine"
                - option "Xe 12 chỗ Limousine"
                - option "Xe 16 chỗ"
                - option "Xe 29 chỗ"
                - option "Xe 35 chỗ"
                - option "Xe 45 chỗ"
            - generic [ref=e65]:
              - generic [ref=e66]: Dịch vụ
              - combobox "Dịch vụ" [ref=e67] [cursor=pointer]:
                - option "Chọn dịch vụ" [selected]
                - option "Đưa Đón Sân Bay"
                - option "Thuê Xe Liên Tỉnh"
                - option "Thuê Xe Du Lịch"
                - option "Thuê Xe Đánh Golf"
                - option "Thuê Xe Tự Lái"
                - option "Thuê Xe Hoa - Cưới"
                - option "Thuê Xe Hợp Đồng"
                - option "Thuê Xe Theo Tháng"
                - option "Thuê Xe Đưa Đón Học Sinh"
                - option "Thuê Xe Đi Bệnh Viện"
            - generic [ref=e69]:
              - generic [ref=e70]:
                - checkbox "Tài xế tự túc ăn uống" [checked] [ref=e71] [cursor=pointer]
                - generic [ref=e72] [cursor=pointer]: Tài xế tự túc ăn uống
              - generic [ref=e73]:
                - checkbox "Xuất VAT" [ref=e74] [cursor=pointer]
                - generic [ref=e75] [cursor=pointer]: Xuất VAT
              - generic [ref=e76]:
                - checkbox "Hai chiều" [ref=e77] [cursor=pointer]
                - generic [ref=e78] [cursor=pointer]: Hai chiều
            - generic [ref=e80]:
              - generic [ref=e81]: Giờ thuê xe
              - generic: "Giờ thuê xe:"
              - textbox "Giờ thuê xe" [ref=e82]
            - generic [ref=e84]:
              - generic [ref=e85]: Ngày thuê xe
              - textbox "Ngày thuê xe" [ref=e86]:
                - /placeholder: "Ngày thuê xe:"
            - generic [ref=e88]:
              - generic [ref=e89]: Họ và tên
              - generic: "Họ và tên:"
              - textbox "Họ và tên" [ref=e90]
            - generic [ref=e92]:
              - generic [ref=e93]: Số điện thoại
              - generic: "Số điện thoại:"
              - textbox "Số điện thoại" [ref=e94]
            - button "Nhận báo giá ngay" [ref=e97] [cursor=pointer]: Nhận báo giá ngay
      - generic [ref=e100]:
        - heading "Dù Hành Trình Của Bạn Lại Bắt Đầu Từ Đâu Chúng Tôi Đã Có Lựa Chọn Hoàn Hảo Cho Bạn" [level=2] [ref=e102]
        - generic [ref=e103]:
          - generic [ref=e105]:
            - link "Đưa Đón Sân Bay" [ref=e107] [cursor=pointer]:
              - /url: dua-don-san-bay
              - img "Đưa Đón Sân Bay" [ref=e108]
            - heading "Đưa Đón Sân Bay" [level=3] [ref=e110]:
              - link "Đưa Đón Sân Bay" [ref=e111] [cursor=pointer]:
                - /url: dua-don-san-bay
          - generic [ref=e113]:
            - link "Thuê Xe Liên Tỉnh" [ref=e115] [cursor=pointer]:
              - /url: thue-xe-lien-tinh
              - img "Thuê Xe Liên Tỉnh" [ref=e116]
            - heading "Thuê Xe Liên Tỉnh" [level=3] [ref=e118]:
              - link "Thuê Xe Liên Tỉnh" [ref=e119] [cursor=pointer]:
                - /url: thue-xe-lien-tinh
          - generic [ref=e121]:
            - link "Thuê Xe Du Lịch" [ref=e123] [cursor=pointer]:
              - /url: thue-xe-du-lich
              - img "Thuê Xe Du Lịch" [ref=e124]
            - heading "Thuê Xe Du Lịch" [level=3] [ref=e126]:
              - link "Thuê Xe Du Lịch" [ref=e127] [cursor=pointer]:
                - /url: thue-xe-du-lich
          - generic [ref=e129]:
            - link "Thuê Xe Đánh Golf" [ref=e131] [cursor=pointer]:
              - /url: thue-xe-danh-golf
              - img "Thuê Xe Đánh Golf" [ref=e132]
            - heading "Thuê Xe Đánh Golf" [level=3] [ref=e134]:
              - link "Thuê Xe Đánh Golf" [ref=e135] [cursor=pointer]:
                - /url: thue-xe-danh-golf
          - generic [ref=e137]:
            - link "Thuê Xe Tự Lái" [ref=e139] [cursor=pointer]:
              - /url: thue-xe-tu-lai
              - img "Thuê Xe Tự Lái" [ref=e140]
            - heading "Thuê Xe Tự Lái" [level=3] [ref=e142]:
              - link "Thuê Xe Tự Lái" [ref=e143] [cursor=pointer]:
                - /url: thue-xe-tu-lai
          - generic [ref=e145]:
            - link "Thuê Xe Hoa - Cưới" [ref=e147] [cursor=pointer]:
              - /url: thue-xe-hoa-cuoi
              - img "Thuê Xe Hoa - Cưới" [ref=e148]
            - heading "Thuê Xe Hoa - Cưới" [level=3] [ref=e150]:
              - link "Thuê Xe Hoa - Cưới" [ref=e151] [cursor=pointer]:
                - /url: thue-xe-hoa-cuoi
          - generic [ref=e153]:
            - link "Thuê Xe Hợp Đồng" [ref=e155] [cursor=pointer]:
              - /url: thue-xe-hop-dong
              - img "Thuê Xe Hợp Đồng" [ref=e156]
            - heading "Thuê Xe Hợp Đồng" [level=3] [ref=e158]:
              - link "Thuê Xe Hợp Đồng" [ref=e159] [cursor=pointer]:
                - /url: thue-xe-hop-dong
          - generic [ref=e161]:
            - link "Thuê Xe Theo Tháng" [ref=e163] [cursor=pointer]:
              - /url: thue-xe-theo-thang
              - img "Thuê Xe Theo Tháng" [ref=e164]
            - heading "Thuê Xe Theo Tháng" [level=3] [ref=e166]:
              - link "Thuê Xe Theo Tháng" [ref=e167] [cursor=pointer]:
                - /url: thue-xe-theo-thang
        - link "Xem tất cả dịch vụ" [ref=e169] [cursor=pointer]:
          - /url: dich-vu
          - generic [ref=e170]: Xem tất cả dịch vụ
          - img [ref=e172]
      - generic [ref=e175]:
        - heading "Từ Linh Hoạt Cá Nhân Đến Chuyến Đi Đoàn Thể Tìm Chiếc Xe Vừa Vặn Cho Hành Trình Của Bạn" [level=2] [ref=e177]
        - generic [ref=e178]:
          - button "Xe 4 chỗ" [ref=e179] [cursor=pointer]
          - button "Xe 7 chỗ" [ref=e180] [cursor=pointer]
          - button "Xe MPV - Canival" [ref=e181] [cursor=pointer]
          - button "Xe 9 chỗ Limousine" [ref=e182] [cursor=pointer]
          - button "Xe 12 chỗ Limousine" [ref=e183] [cursor=pointer]
        - generic:
          - link "Xem tất cả loại xe":
            - /url: loai-xe
            - generic: Xem tất cả loại xe
            - generic:
              - img
      - generic [ref=e185]:
        - heading "Vì Sao Hàng Ngàn Khách Hàng Tin Chọn Chúng Tôi Cho Mỗi Chuyến Đi?" [level=2] [ref=e187]
        - generic [ref=e188]:
          - generic [ref=e189]:
            - generic:
              - generic:
                - heading "Tài xế chuyên nghiệp" [level=3]
                - generic: Không chỉ lái xe, chúng tôi mang đến người đồng hành lịch sự, thông thuộc đường xá.
            - generic:
              - generic:
                - heading "Thanh toán dễ dàng" [level=3]
                - generic: Cùng gia đình & bạn bè vi vu mọi nẻo đường Thỏa sức khám phá, trọn vẹn niềm vui
          - generic:
            - generic:
              - generic:
                - heading "Thủ tục đơn giản" [level=3]
                - generic: Cùng gia đình & bạn bè vi vu mọi nẻo đường Thỏa sức khám phá, trọn vẹn niềm vui
            - generic:
              - generic:
                - heading "An tâm đặt xe" [level=3]
                - generic: Cùng gia đình & bạn bè vi vu mọi nẻo đường Thỏa sức khám phá, trọn vẹn niềm vui
      - generic [ref=e192]:
        - generic:
          - generic:
            - paragraph: 1000 +
            - generic: Chuyến đi Đã hoàn thành
        - generic:
          - generic:
            - paragraph: 200 +
            - generic: Khách hàng tin tưởng
        - generic:
          - generic:
            - paragraph: 10 +
            - generic: Năm kinh nghiệm
        - generic:
          - generic:
            - paragraph: 20 +
            - generic: Dòng xe đời mới
      - generic [ref=e194]:
        - heading "Những Hành Trình Đón Đưa - Các Tuyến Nổi Bật Nhất" [level=2] [ref=e196]
        - generic [ref=e197]:
          - generic [ref=e198]:
            - generic:
              - generic:
                - link "Sài gòn - Hạ Long":
                  - /url: sai-gon-ha-long
              - generic:
                - heading "Sài gòn - Hạ Long" [level=3]:
                  - link "Sài gòn - Hạ Long":
                    - /url: sai-gon-ha-long
          - generic [ref=e199]:
            - generic:
              - generic:
                - link "Đà Lạt - Lâm Đồng":
                  - /url: da-lat-lam-dong
              - generic:
                - heading "Đà Lạt - Lâm Đồng" [level=3]:
                  - link "Đà Lạt - Lâm Đồng":
                    - /url: da-lat-lam-dong
          - generic [ref=e200]:
            - generic:
              - generic:
                - link "Cam Ranh - Nha Trang":
                  - /url: cam-ranh-nha-trang
              - generic:
                - heading "Cam Ranh - Nha Trang" [level=3]:
                  - link "Cam Ranh - Nha Trang":
                    - /url: cam-ranh-nha-trang
          - generic [ref=e201]:
            - generic:
              - generic:
                - link "Sài Gòn - TPHCM":
                  - /url: sai-gon-tphcm
              - generic:
                - heading "Sài Gòn - TPHCM" [level=3]:
                  - link "Sài Gòn - TPHCM":
                    - /url: sai-gon-tphcm
        - link "Xem tất cả các tuyến nổi bật" [ref=e203] [cursor=pointer]:
          - /url: dich-vu
          - generic [ref=e204]: Xem tất cả các tuyến nổi bật
          - img [ref=e206]
      - generic [ref=e209]:
        - heading "Bảng Giá Minh Bạch Chi Phí Tối Ưu Cho Mọi Cung Đường" [level=2] [ref=e211]
        - generic [ref=e212]:
          - generic [ref=e214]:
            - link "Limousine Sài Gòn – Đà Lạt" [ref=e216] [cursor=pointer]:
              - /url: limousine-sai-gon-da-lat
            - generic [ref=e217]:
              - heading "Limousine Sài Gòn – Đà Lạt" [level=3] [ref=e219]:
                - link "Limousine Sài Gòn – Đà Lạt" [ref=e220] [cursor=pointer]:
                  - /url: limousine-sai-gon-da-lat
              - paragraph [ref=e222]: Đi du lịch đông người mà chọn nhầm dòng xe chật chội, thiếu chỗ để hành lý hay xe cũ hôi hám sẽ làm chuyến đi mất vui ngay từ lúc xuất phát.
              - paragraph [ref=e223]:
                - generic [ref=e224]: 50.000đ
                - generic [ref=e225]:
                  - strong [ref=e226]: /
                  - text: ngày
              - link "Thuê xe ngay" [ref=e227] [cursor=pointer]:
                - /url: limousine-sai-gon-da-lat
                - generic [ref=e228]: Thuê xe ngay
          - generic [ref=e231]:
            - link "Limousine Sài Gòn - Nha Trang" [ref=e233] [cursor=pointer]:
              - /url: limousine-sai-gon-nha-trang
            - generic [ref=e234]:
              - heading "Limousine Sài Gòn - Nha Trang" [level=3] [ref=e236]:
                - link "Limousine Sài Gòn - Nha Trang" [ref=e237] [cursor=pointer]:
                  - /url: limousine-sai-gon-nha-trang
              - paragraph [ref=e239]: Đi du lịch đông người mà chọn nhầm dòng xe chật chội, thiếu chỗ để hành lý hay xe cũ hôi hám sẽ làm chuyến đi mất vui ngay từ lúc xuất phát.
              - paragraph [ref=e240]:
                - generic [ref=e241]: 50.000đ
                - generic [ref=e242]:
                  - strong [ref=e243]: /
                  - text: ngày
              - link "Thuê xe ngay" [ref=e244] [cursor=pointer]:
                - /url: limousine-sai-gon-nha-trang
                - generic [ref=e245]: Thuê xe ngay
          - generic [ref=e248]:
            - link "Limousine Sài Gòn – Vĩnh Hy" [ref=e250] [cursor=pointer]:
              - /url: limousine-sai-gon-vinh-hy
            - generic [ref=e251]:
              - heading "Limousine Sài Gòn – Vĩnh Hy" [level=3] [ref=e253]:
                - link "Limousine Sài Gòn – Vĩnh Hy" [ref=e254] [cursor=pointer]:
                  - /url: limousine-sai-gon-vinh-hy
              - paragraph [ref=e256]: Đi du lịch đông người mà chọn nhầm dòng xe chật chội, thiếu chỗ để hành lý hay xe cũ hôi hám sẽ làm chuyến đi mất vui ngay từ lúc xuất phát.
              - paragraph [ref=e257]:
                - generic [ref=e258]: 50.000đ
                - generic [ref=e259]:
                  - strong [ref=e260]: /
                  - text: ngày
              - link "Thuê xe ngay" [ref=e261] [cursor=pointer]:
                - /url: limousine-sai-gon-vinh-hy
                - generic [ref=e262]: Thuê xe ngay
          - generic [ref=e265]:
            - link "Limousine Sài Gòn - Mũi Né" [ref=e267] [cursor=pointer]:
              - /url: limousine-sai-gon-mui-ne
            - generic [ref=e268]:
              - heading "Limousine Sài Gòn - Mũi Né" [level=3] [ref=e270]:
                - link "Limousine Sài Gòn - Mũi Né" [ref=e271] [cursor=pointer]:
                  - /url: limousine-sai-gon-mui-ne
              - paragraph [ref=e273]: Đi du lịch đông người mà chọn nhầm dòng xe chật chội, thiếu chỗ để hành lý hay xe cũ hôi hám sẽ làm chuyến đi mất vui ngay từ lúc xuất phát.
              - paragraph [ref=e274]:
                - generic [ref=e275]: Liên hệ
              - link "Thuê xe ngay" [ref=e276] [cursor=pointer]:
                - /url: limousine-sai-gon-mui-ne
                - generic [ref=e277]: Thuê xe ngay
          - generic [ref=e280]:
            - link "Limousine Sài Gòn - Phan Thiết" [ref=e282] [cursor=pointer]:
              - /url: limousine-sai-gon-phan-thiet
            - generic [ref=e283]:
              - heading "Limousine Sài Gòn - Phan Thiết" [level=3] [ref=e285]:
                - link "Limousine Sài Gòn - Phan Thiết" [ref=e286] [cursor=pointer]:
                  - /url: limousine-sai-gon-phan-thiet
              - paragraph [ref=e288]: Đi du lịch đông người mà chọn nhầm dòng xe chật chội, thiếu chỗ để hành lý hay xe cũ hôi hám sẽ làm chuyến đi mất vui ngay từ lúc xuất phát.
              - paragraph [ref=e289]:
                - generic [ref=e290]: Liên hệ
              - link "Thuê xe ngay" [ref=e291] [cursor=pointer]:
                - /url: limousine-sai-gon-phan-thiet
                - generic [ref=e292]: Thuê xe ngay
          - generic [ref=e295]:
            - link "Thuê xe khánh hòa đi phú yên" [ref=e297] [cursor=pointer]:
              - /url: thue-xe-khanh-hoa-di-phu-yen
            - generic [ref=e298]:
              - heading "Thuê xe khánh hòa đi phú yên" [level=3] [ref=e300]:
                - link "Thuê xe khánh hòa đi phú yên" [ref=e301] [cursor=pointer]:
                  - /url: thue-xe-khanh-hoa-di-phu-yen
              - paragraph [ref=e303]: Đi du lịch đông người mà chọn nhầm dòng xe chật chội, thiếu chỗ để hành lý hay xe cũ hôi hám sẽ làm chuyến đi mất vui ngay từ lúc xuất phát.
              - paragraph [ref=e304]:
                - generic [ref=e305]: Liên hệ
              - link "Thuê xe ngay" [ref=e306] [cursor=pointer]:
                - /url: thue-xe-khanh-hoa-di-phu-yen
                - generic [ref=e307]: Thuê xe ngay
      - generic [ref=e310]:
        - heading "Lên Lịch Chuyến Đi Trong Nháy Mắt 4 Bước Đặt Xe Nhanh Chóng & Dễ Dàng" [level=2] [ref=e312]
        - generic [ref=e313]:
          - generic:
            - generic:
              - generic: "01"
              - generic:
                - heading "Gọi điện trực tiếp" [level=3]
              - generic: Liên hệ Hotline 0785 555 299 để gặp tổng đài viên tư vấn và hỗ trợ đặt xe nhanh chóng.
          - generic:
            - generic:
              - generic: "02"
              - generic:
                - heading "Đặt xe trên website" [level=3]
              - generic: Lựa chọn dòng xe, lịch trình phù hợp và hoàn tất đặt xe dễ dàng ngay trên hệ thống website.
          - generic:
            - generic:
              - generic: "03"
              - generic:
                - heading "Chat trực tuyến" [level=3]
              - generic: Nhắn tin qua Zalo/Livechat để nhận báo giá chi tiết và hỗ trợ giải đáp thắc mắc 24/7.
          - generic:
            - generic:
              - generic: "04"
              - generic:
                - heading "Đặt trực tiếp văn phòng" [level=3]
              - generic: Ghé thăm văn phòng công ty để trao đổi trực tiếp, làm thủ tục và hoàn tất hợp đồng.
      - generic [ref=e315]:
        - heading "Khách hàng nói gì về chúng tôi" [level=2] [ref=e317]
        - generic [ref=e318]:
          - generic [ref=e321]:
            - generic [ref=e323]:
              - generic [ref=e327]:
                - heading "Anh Minh Trí" [level=3] [ref=e328]
                - paragraph [ref=e329]: Khách du lịch (TP.HCM)
              - paragraph [ref=e330]: Đặt xe đi du lịch cho cả gia đình rất nhanh chóng. Xe sạch sẽ, thơm tho, tài xế lái xe an toàn và rất nhiệt tình
            - generic [ref=e332]:
              - generic [ref=e336]:
                - heading "Anh Minh Trí" [level=3] [ref=e337]
                - paragraph [ref=e338]: Khách du lịch (TP.HCM)
              - paragraph [ref=e339]: Đặt xe đi du lịch cho cả gia đình rất nhanh chóng. Xe sạch sẽ, thơm tho, tài xế lái xe an toàn và rất nhiệt tình
            - generic [ref=e341]:
              - generic [ref=e345]:
                - heading "Anh Minh Trí" [level=3] [ref=e346]
                - paragraph [ref=e347]: Khách du lịch (TP.HCM)
              - paragraph [ref=e348]: Đặt xe đi du lịch cho cả gia đình rất nhanh chóng. Xe sạch sẽ, thơm tho, tài xế lái xe an toàn và rất nhiệt tình
            - generic [ref=e350]:
              - generic [ref=e354]:
                - heading "Anh Minh Trí" [level=3] [ref=e355]
                - paragraph [ref=e356]: Khách du lịch (TP.HCM)
              - paragraph [ref=e357]: Đặt xe đi du lịch cho cả gia đình rất nhanh chóng. Xe sạch sẽ, thơm tho, tài xế lái xe an toàn và rất nhiệt tình
            - generic [ref=e359]:
              - generic [ref=e363]:
                - heading "Anh Minh Trí" [level=3] [ref=e364]
                - paragraph [ref=e365]: Khách du lịch (TP.HCM)
              - paragraph [ref=e366]: Đặt xe đi du lịch cho cả gia đình rất nhanh chóng. Xe sạch sẽ, thơm tho, tài xế lái xe an toàn và rất nhiệt tình
          - generic:
            - button [ref=e367] [cursor=pointer]:
              - img [ref=e368]
            - button [ref=e371] [cursor=pointer]:
              - img [ref=e372]
      - generic [ref=e376]:
        - heading "Đối tác khách hàng" [level=2] [ref=e378]
        - generic:
          - generic:
            - generic:
              - generic:
                - link "Công Hợp Transport":
                  - /url: ""
                  - generic:
                    - img "Công Hợp Transport"
              - generic:
                - link "Công Hợp Transport":
                  - /url: ""
                  - generic:
                    - img "Công Hợp Transport"
              - generic:
                - link "Công Hợp Transport":
                  - /url: ""
                  - generic:
                    - img "Công Hợp Transport"
              - generic:
                - link "Công Hợp Transport":
                  - /url: ""
                  - generic:
                    - img "Công Hợp Transport"
              - generic:
                - link "Công Hợp Transport":
                  - /url: ""
                  - generic:
                    - img "Công Hợp Transport"
              - generic:
                - link "Công Hợp Transport":
                  - /url: ""
                  - generic:
                    - img "Công Hợp Transport"
              - generic:
                - link "Công Hợp Transport":
                  - /url: ""
                  - generic:
                    - img "Công Hợp Transport"
              - generic:
                - link "Công Hợp Transport":
                  - /url: ""
                  - generic:
                    - img "Công Hợp Transport"
            - generic:
              - generic:
                - link:
                  - /url: ""
                  - generic:
                    - img
              - generic:
                - link:
                  - /url: ""
                  - generic:
                    - img
              - generic:
                - link:
                  - /url: ""
                  - generic:
                    - img
              - generic:
                - link:
                  - /url: ""
                  - generic:
                    - img
              - generic:
                - link:
                  - /url: ""
                  - generic:
                    - img
              - generic:
                - link:
                  - /url: ""
                  - generic:
                    - img
              - generic:
                - link:
                  - /url: ""
                  - generic:
                    - img
              - generic:
                - link:
                  - /url: ""
                  - generic:
                    - img
      - generic [ref=e382]:
        - generic:
          - generic:
            - heading "Hãy trải nghiệm ngay dịch vụ của chúng tôi" [level=2]
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic:
                    - generic:
                      - generic: Họ và tên *
                      - textbox "Họ và tên *":
                        - /placeholder: Nhập họ và tên
                - generic:
                  - generic:
                    - generic:
                      - generic: Điện thoại *
                      - textbox "Điện thoại *":
                        - /placeholder: Nhập số điện thoại
              - generic:
                - generic:
                  - generic: Nội dung *
                  - textbox "Nội dung *":
                    - /placeholder: Bạn cần tư vấn gì ...
              - button "gửi thông tin liên hệ ngay":
                - generic:
                  - img
                - generic: gửi thông tin liên hệ ngay
      - generic:
        - generic:
          - generic:
            - generic:
              - paragraph: "\"Với hệ thống xe đời mới đa dạng từ 4 đến 45 chỗ, cùng đội ngũ tài xế giàu kinh nghiệm, tận tâm và am hiểu đường xá, chúng tôi tự hào đã và đang đồng hành cùng hàng ngàn cá nhân lẫn doanh nghiệp trên khắp cả nước. Sự hài lòng của bạn sau mỗi chuyến hành trình chính là thước đo thành công và là động lực lớn nhất để chúng tôi liên tục nâng cấp chất lượng dịch vụ mỗi ngày.\"Với hệ thống xe đời mới đa dạng từ 4 đến 45 chỗ, cùng đội ngũ tài xế giàu kinh nghiệm, tận tâm và am hiểu đường xá, chúng tôi tự hào đã và đang đồng hành cùng hàng ngàn cá nhân lẫn doanh nghiệp trên khắp cả nước. Sự hài lòng của bạn sau mỗi chuyến hành trình chính là thước đo thành công và là động lực lớn nhất để chúng tôi liên tục nâng cấp chất lượng dịch vụ mỗi ngày.\""
              - generic:
                - generic:
                  - link "Xem tất cả bài viết":
                    - /url: javascript:;
                    - generic:
                      - text: Xem tất cả bài viết
                      - img
    - generic:
      - generic:
        - generic:
          - generic:
            - generic:
              - paragraph: Thông tin liên hệ
              - generic:
                - paragraph:
                  - text: "Địa chỉ: 111 Nguyễn Thị Minh Khai, TT Phước Dân Ninh Phước, Ninh Thuận"
                  - text: "Hotline: 0785555299"
                  - text: "Email: thuexekhanhhoa.com@gmail.com"
                  - text: "Website:"
                  - link "www.thuexekhanhhoa.com":
                    - /url: https://www.google.com/search?q=https%3A%2F%2Fwww.thuexekhanhhoa.com
                  - text: "Giờ làm việc: Thứ 2 - Chủ nhật 7:30 - 20:00"
            - generic:
              - generic:
                - generic:
                  - paragraph: Truy cập nhanh
                  - list:
                    - listitem:
                      - link "Trang chủ":
                        - /url: "#"
                    - listitem:
                      - link "Về chúng tôi":
                        - /url: gioi-thieu
                    - listitem:
                      - link "Dịch vụ":
                        - /url: dich-vu
                    - listitem:
                      - link "Tuyển dụng":
                        - /url: tuyen-dung
                    - listitem:
                      - link "Tin tức":
                        - /url: tin-tuc
                - generic:
                  - paragraph: Chính sách chúng tôi
                  - list:
                    - listitem:
                      - link "Chính sách bảo mật":
                        - /url: chinh-sach-bao-mat
                    - listitem:
                      - link "Chính sách đặt xe":
                        - /url: chinh-sach-dat-xe
                    - listitem:
                      - link "Chính sách huỷ xe":
                        - /url: chinh-sach-huy-xe
                    - listitem:
                      - link "Hướng dẫn thanh toán":
                        - /url: huong-dan-thanh-toan
                    - listitem:
                      - link "Chính sách bảo mật thông tin":
                        - /url: chinh-sach-bao-mat-thong-tin
                    - listitem:
                      - link "Giải quyết tranh chấp":
                        - /url: giai-quyet-tranh-chap
                - generic:
                  - paragraph: Các dòng xe
                  - list:
                    - listitem:
                      - link "Xe 4 chỗ":
                        - /url: xe-4-cho
                    - listitem:
                      - link "Xe 7 chỗ":
                        - /url: xe-7-cho
                    - listitem:
                      - link "Xe MPV - Canival":
                        - /url: xe-mpv-canival
                    - listitem:
                      - link "Xe 9 chỗ Limousine":
                        - /url: xe-9-cho-limousine
                    - listitem:
                      - link "Xe 12 chỗ Limousine":
                        - /url: xe-12-cho-limousine
      - generic:
        - generic:
          - generic:
            - generic: Copyright ©2026 Thuê Xe Khánh Hoà. All Right Reserved. Thiết kế web MIMA
            - generic: "Đang online: 1272 | Hôm nay: 13 | Tổng truy cập: 99"
    - generic [ref=e383]:
      - 'link "Call me: 0888080138" [ref=e384] [cursor=pointer]':
        - /url: tel:0888080138
        - img [ref=e388]
        - generic [ref=e391]: "Call me: 0888080138"
      - 'link "Zalo: 0888080138" [ref=e392] [cursor=pointer]':
        - /url: https://zalo.me/0888080138
        - img [ref=e396]
        - generic [ref=e397]: "Zalo: 0888080138"
    - generic [ref=e399]:
      - img "thumb" [ref=e400]
      - generic [ref=e401]:
        - generic [ref=e402]: Chị Bùi Thanh Hằng
        - generic [ref=e403]:
          - text: Vừa đặt
          - link "Đã thuê xe 7 chỗ Xpander tự lái cuối tuần" [ref=e404] [cursor=pointer]:
            - /url: ""
        - generic [ref=e405]: 1 tiếng
      - generic [ref=e406] [cursor=pointer]: ×
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
              - generic: "81"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 81/100
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
          - generic: "21"
          - generic: Tổng tiêu chí
        - generic:
          - generic: ✅ 17
          - generic: Đạt
        - generic:
          - generic: ❌ 4
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: /index.php
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e407]:
      - generic [ref=e408]: "❌ Chi tiết lỗi cần khắc phục (4/21):"
      - generic [ref=e409]:
        - generic [ref=e410]:
          - generic [ref=e411]: 1. Thẻ Title
          - generic [ref=e412]: 1 lỗi
        - generic [ref=e413]:
          - strong [ref=e415]: "Title phải có nội dung (hiện tại: 0 ký tự)"
          - generic [ref=e416]: ⚠️ Title tag không tồn tại hoặc rỗng!
      - generic [ref=e417]:
        - generic [ref=e418]:
          - generic [ref=e419]: 3. Heading (H1-H6)
          - generic [ref=e420]: 1 lỗi
        - generic [ref=e421]:
          - strong [ref=e423]: Heading phân cấp hợp lệ (1 lỗi)
          - generic [ref=e424]: "⚠️ Heading phân cấp sai: Nhảy cấp từ H1 → H3 (\"Giảm giá 5% ( Báo giá qua Zalo )\")"
      - generic [ref=e425]:
        - generic [ref=e426]:
          - generic [ref=e427]: 8. Tốc độ & Core Web Vitals
          - generic [ref=e428]: 2 lỗi
        - generic [ref=e429]:
          - strong [ref=e431]: "[📱 MOBILE (ƯU TIÊN)] Tổng điểm Performance: 58/100 (≥ 60)"
          - generic [ref=e432]: ⚠️ [📱 MOBILE (ƯU TIÊN)] Điểm Performance 58/100 dưới ngưỡng 60. Phân tích chi tiết LCP/CLS/INP bên dưới...
        - generic [ref=e433]:
          - strong [ref=e435]: "[📱 MOBILE (ƯU TIÊN)] LCP (Largest Contentful Paint): 7749ms (< 2500ms)"
          - generic [ref=e436]: "⚠️ [📱 MOBILE (ƯU TIÊN)] LCP quá cao: 7749ms (chuẩn: < 2.5s) → Thủ phạm LCP:"
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 81/100 dưới ngưỡng 96%. Có 4/21 tiêu chí không đạt.
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