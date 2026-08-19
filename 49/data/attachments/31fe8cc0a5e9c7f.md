# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web/search.spec.ts >> Search Feature Tests >> Search form successfully finds product using dynamic keyword from homepage
- Location: tests/web/search.spec.ts:25:13

# Error details

```
Error: Không thể trích xuất được từ khóa sản phẩm nào từ trang /san-pham!
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e7]:
      - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e9] [cursor=pointer]:
        - /url: https://nhahangtieccuoinambo.vn/
        - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e10]
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link [ref=e13] [cursor=pointer]:
            - /url: ""
        - listitem [ref=e15]:
          - link "Giới thiệu" [ref=e16] [cursor=pointer]:
            - /url: gioi-thieu
        - listitem [ref=e17]:
          - link "Dịch vụ" [ref=e18] [cursor=pointer]:
            - /url: dich-vu
        - listitem [ref=e19]:
          - link "Menu" [ref=e20] [cursor=pointer]:
            - /url: menu
        - listitem [ref=e21]:
          - link "Tiệc cưới - báo hỷ" [ref=e22] [cursor=pointer]:
            - /url: tiec-cuoi-bao-hy
        - listitem [ref=e23]:
          - link "Liên hệ" [ref=e24] [cursor=pointer]:
            - /url: lien-he
        - listitem [ref=e25]:
          - link "Blog" [ref=e26] [cursor=pointer]:
            - /url: blog
        - listitem [ref=e27]:
          - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e28]
          - combobox [ref=e29]:
            - option "VN" [selected]
            - option "EN"
            - option "CN"
            - option "JA"
            - option "KO"
            - option "FR"
    - generic [ref=e33]:
      - button "Previous" [ref=e34] [cursor=pointer]: ←Previous
      - listbox [ref=e36]:
        - option [ref=e37]
        - option [ref=e40]:
          - link [ref=e41] [cursor=pointer]:
            - /url: ""
            - img [ref=e43]
        - option [ref=e44]:
          - link [ref=e45] [cursor=pointer]:
            - /url: ""
            - img [ref=e47]
        - option [ref=e48]:
          - link [ref=e49] [cursor=pointer]:
            - /url: ""
            - img [ref=e51]
      - button "Next" [ref=e52] [cursor=pointer]: →Next
    - generic [ref=e53]:
      - generic [ref=e55]:
        - generic [ref=e56]:
          - generic [ref=e57]: WEDDING NAM BỘ
          - paragraph [ref=e58]: Nhà Hàng Tiệc Cưới
        - generic:
          - paragraph:
            - generic:
              - generic: Nhà Hàng Tiệc Cưới Nam Bộ được thiết kế với phong cách hiện đại và tinh tế, đáp ứng nhu cầu của mọi loại hình sự kiện từ tiệc cưới hoành tráng, liên hoan công ty đến những bữa tiệc sinh nhật, họp mặt gia đình ấm cúng.
          - paragraph:
            - generic:
              - generic:
                - generic: Hãy để Nhà hàng Tiệc cưới Nam Bộ biến ngày trọng đại của bạn trở thành một kỷ niệm khó quên! 🎉💍✨
          - link "Xem thêm" [ref=e59] [cursor=pointer]:
            - /url: gioi-thieu
            - generic [ref=e60]: Xem thêm
            - img [ref=e61]
        - generic [ref=e63]:
          - generic [ref=e67]:
            - paragraph [ref=e68]: Phục vụ
            - text: 24/7
          - generic [ref=e72]:
            - paragraph [ref=e73]: Email
            - text: namboaucowedding@gmail.com
          - generic [ref=e77]:
            - paragraph [ref=e78]: Open
            - text: 8H-23H HẰNG NGÀY
      - generic [ref=e80]:
        - generic [ref=e81]:
          - generic [ref=e82]:
            - heading "Dịch vụ của chúng tôi" [level=2] [ref=e83]
            - paragraph [ref=e84]: Nơi chắp cánh tình yêu
          - paragraph [ref=e86]: Với hệ thống sảnh tiệc đẳng cấp cùng thiết bị âm thanh ánh sáng tiêu chuẩn rạp hát, Nhà Hàng Tiệc Cưới Nam Bộ là địa điểm tổ chức sự kiện lý tưởng đáp ứng mọi nhu cầu tổ chức hội nghị, hội thảo, tiệc cưới, tiệc cá nhân đến các sự kiện tầm cỡ.
        - generic [ref=e87]:
          - img "Tiệc Cưới" [ref=e89]
          - generic [ref=e90]:
            - generic [ref=e91]: Wedding
            - heading "Tiệc Cưới" [level=3] [ref=e92]
            - paragraph [ref=e94]: Mỗi tiệc cưới tại Nhà Hàng Nam Bộ không chỉ là một bữa tiệc, mà còn là một câu chuyện được kể, một hành trình kỷ niệm được vun đắp, là nơi lưu giữ những cảm xúc trân quý và những thông điệp mà cô dâu chú rể muốn gửi gắm và sẻ chia.
            - link "Tìm hiểu thêm Xem thêm" [ref=e95] [cursor=pointer]:
              - /url: tiec-cuoi-bao-hy
              - text: Tìm hiểu thêm
              - img "Xem thêm" [ref=e96]
      - list [ref=e100]:
        - listitem [ref=e101] [cursor=pointer]:
          - generic [ref=e103]:
            - paragraph [ref=e104]: Hall
            - generic [ref=e105]: SẢNH PHONG LAN
        - listitem [ref=e106] [cursor=pointer]:
          - generic [ref=e108]:
            - paragraph [ref=e109]: Hall
            - generic [ref=e110]: SẢNH CÁT TƯỜNG
        - listitem [ref=e111] [cursor=pointer]:
          - generic [ref=e113]:
            - paragraph [ref=e114]: Hall
            - generic [ref=e115]: SẢNH TÌNH YÊU
        - listitem [ref=e116] [cursor=pointer]:
          - generic [ref=e118]:
            - paragraph [ref=e119]: Hall
            - generic [ref=e120]: SẢNH UYÊN ƯƠNG
        - listitem [ref=e121] [cursor=pointer]:
          - generic [ref=e123]:
            - paragraph [ref=e124]: Hall
            - generic [ref=e125]: SẢNH NHẬT NGUYỆT
        - listitem [ref=e126] [cursor=pointer]:
          - generic [ref=e128]:
            - paragraph [ref=e129]: Hall
            - generic [ref=e130]: SẢNH HỒNG NGỌC
        - listitem [ref=e131] [cursor=pointer]:
          - generic [ref=e133]:
            - paragraph [ref=e134]: Hall
            - generic [ref=e135]: SẢNH NỮ HOÀNG
        - listitem [ref=e136] [cursor=pointer]:
          - generic [ref=e138]:
            - paragraph [ref=e139]: Hall
            - generic [ref=e140]: SẢNH KIM CƯƠNG
        - listitem [ref=e141] [cursor=pointer]:
          - generic [ref=e143]:
            - paragraph [ref=e144]: Hall
            - generic [ref=e145]: SẢNH MAI VÀNG
        - listitem [ref=e146] [cursor=pointer]:
          - generic [ref=e148]:
            - paragraph [ref=e149]: Hall
            - generic [ref=e150]: SẢNH HOA HỒNG
      - generic [ref=e153]:
        - generic [ref=e154]:
          - heading "TRẢI NGHIỆM ẨM THỰC" [level=2] [ref=e155]
          - paragraph [ref=e156]: Nơi chắp cánh tình yêu
          - paragraph [ref=e158]: Thực đơn tiệc cưới tại Nam Bộ được chia thành nhiều menu khác nhau, với giá tiệc cưới ưu đãi, đáp ứng được nhu cầu của tất cả các cặp đôi. Từ những món khai vị nhẹ nhàng, tươi mát đến những món chính đậm đà, thơm ngon, kèm theo đó là tráng miệng ngọt ngào, hấp dẫn.
          - link "Xem thêm" [ref=e159] [cursor=pointer]:
            - /url: gioi-thieu
            - generic [ref=e160]: Xem thêm
            - img [ref=e161]
          - generic [ref=e163]:
            - heading "Set Menu Tiệc" [level=4] [ref=e164]:
              - link "Set Menu Tiệc" [ref=e165] [cursor=pointer]:
                - /url: set-menu-tiec
            - heading "Set Menu Bàn Tròn" [level=4] [ref=e166]:
              - link "Set Menu Bàn Tròn" [ref=e167] [cursor=pointer]:
                - /url: menu-mon-le
            - heading "Dịch Vụ Tiệc Cưới" [level=4] [ref=e168]:
              - link "Dịch Vụ Tiệc Cưới" [ref=e169] [cursor=pointer]:
                - /url: dich-vu-tiec-cuoi
        - generic [ref=e170]:
          - img "TRẢI NGHIỆM ẨM THỰC" [ref=e171]
          - link "View Gallery" [ref=e173] [cursor=pointer]:
            - /url: menu
      - generic [ref=e176]:
        - generic [ref=e178]:
          - generic [ref=e180]:
            - paragraph [ref=e181]
            - heading "SET MENU 4" [level=4] [ref=e183]
          - generic [ref=e185]:
            - paragraph [ref=e186]
            - heading "SET MENU 3" [level=4] [ref=e188]
          - generic [ref=e190]:
            - paragraph [ref=e191]
            - heading "SET MENU 2" [level=4] [ref=e193]
          - generic [ref=e195]:
            - paragraph [ref=e196]
            - heading "SET MENU 1" [level=4] [ref=e198]
          - generic [ref=e200]:
            - paragraph [ref=e201]
            - heading "SET MENU 5" [level=4] [ref=e203]
        - generic [ref=e204]:
          - button [ref=e205] [cursor=pointer]
          - button [ref=e207] [cursor=pointer]
      - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e210]
      - generic [ref=e212]:
        - heading "Video của chúng tôi" [level=2] [ref=e214]
        - generic [ref=e215]:
          - paragraph [ref=e218] [cursor=pointer]:
            - generic "Nhà Hàng Nam Bộ" [ref=e219]
          - generic [ref=e220]:
            - generic [ref=e221]:
              - paragraph [ref=e223] [cursor=pointer]:
                - generic "Nhà Hàng Nam Bộ" [ref=e224]
              - generic [ref=e225]: Nhà Hàng Nam Bộ
            - generic [ref=e226]:
              - paragraph [ref=e228] [cursor=pointer]:
                - generic "Nhà Hàng Tiệc Cưới Nam Bộ Âu Cơ" [ref=e229]
              - generic [ref=e230]: Nhà Hàng Tiệc Cưới Nam Bộ Âu Cơ
            - generic [ref=e231]:
              - paragraph [ref=e233] [cursor=pointer]:
                - generic "Top 5 Nhà Hàng Tiệc Cưới Ở TP.HCM" [ref=e234]
              - generic [ref=e235]: Top 5 Nhà Hàng Tiệc Cưới Ở TP.HCM
            - generic [ref=e236]:
              - paragraph [ref=e238] [cursor=pointer]:
                - generic "BỐI CẢNH NHÀ HÀNG TIỆC CƯỚI" [ref=e239]
              - generic [ref=e240]: BỐI CẢNH NHÀ HÀNG TIỆC CƯỚI
            - generic [ref=e241]:
              - paragraph [ref=e243] [cursor=pointer]:
                - generic "REVIEW NHÀ HÀNG TIỆC CƯỚI NAM BỘ" [ref=e244]
              - generic [ref=e245]: REVIEW NHÀ HÀNG TIỆC CƯỚI NAM BỘ
            - paragraph [ref=e248] [cursor=pointer]
      - generic [ref=e253]:
        - generic [ref=e254]:
          - generic [ref=e255]: Sảnh tiệc
          - heading "Thanh Lịch, Hiện Đại" [level=3] [ref=e256]
          - paragraph [ref=e258]: Sảnh tiệc của Nhà Hàng Nam Bộ có thiết kế hiện đại, được lấy cảm hứng từ bốn mùa trong năm và một mùa lễ hội với không gian rộng lớn và trần cao thoáng đăng, sẽ là nơi lưu giữ những khoảnh khắc đẹp nhất của mọi sự kiện
          - link "Tìm hiểu thêm Xem thêm" [ref=e259] [cursor=pointer]:
            - /url: sanh-tiec
            - text: Tìm hiểu thêm
            - img "Xem thêm" [ref=e260]
        - generic [ref=e262]:
          - generic [ref=e263]:
            - button [ref=e264] [cursor=pointer]:
              - img [ref=e265]
            - listbox [ref=e268]:
              - link [ref=e270] [cursor=pointer]:
                - /url: thumbs/650x450x1/upload/product/sanh-hoa-hong-lung-1-7030.png
                - img [ref=e271]
              - option "SẢNH PHONG LAN" [ref=e272]:
                - link "SẢNH PHONG LAN" [ref=e273] [cursor=pointer]:
                  - /url: thumbs/650x450x1/upload/product/plan-4-1739171453_1775017805002.jpg
                  - img "SẢNH PHONG LAN" [ref=e274]
              - option [ref=e275]:
                - link [ref=e276] [cursor=pointer]:
                  - /url: thumbs/650x450x1/upload/product/sanh-nhat-nguyet-3-1739171425_1775017787931.jpg
                  - img [ref=e277]
              - option [ref=e278]:
                - link [ref=e279] [cursor=pointer]:
                  - /url: thumbs/650x450x1/upload/product/sanh-tinh-yeu-7-1-4100.png
                  - img [ref=e280]
              - option [ref=e281]:
                - link [ref=e282] [cursor=pointer]:
                  - /url: thumbs/650x450x1/upload/product/sanh-uyen-uong-sanh-6-1-6631.png
                  - img [ref=e283]
              - option [ref=e284]:
                - link [ref=e285] [cursor=pointer]:
                  - /url: thumbs/650x450x1/upload/product/sanh-nhhatnguyett-1739171388_1775017749289.jpg
                  - img [ref=e286]
              - option [ref=e287]:
                - link [ref=e288] [cursor=pointer]:
                  - /url: thumbs/650x450x1/upload/product/sanh-hong-ngoc-2-1739171110_1775017736346.jpg
                  - img [ref=e289]
              - option [ref=e290]:
                - link [ref=e291] [cursor=pointer]:
                  - /url: thumbs/650x450x1/upload/product/sanh-nu-hoang-3-1-7125.png
                  - img [ref=e292]
              - option [ref=e293]:
                - link [ref=e294] [cursor=pointer]:
                  - /url: thumbs/650x450x1/upload/product/sanh-kcuong-1739171049_1775017701552.jpg
                  - img [ref=e295]
              - option [ref=e296]:
                - link [ref=e297] [cursor=pointer]:
                  - /url: thumbs/650x450x1/upload/product/sanh-mai-vang-1-8438.png
                  - img [ref=e298]
              - option [ref=e299]:
                - link [ref=e300] [cursor=pointer]:
                  - /url: thumbs/650x450x1/upload/product/sanh-hoa-hong-lung-1-7030.png
                  - img [ref=e301]
              - link [ref=e303] [cursor=pointer]:
                - /url: thumbs/650x450x1/upload/product/plan-4-1739171453_1775017805002.jpg
                - img [ref=e304]
            - button [ref=e305] [cursor=pointer]:
              - img [ref=e306]
          - listbox [ref=e311]:
            - option "SẢNH PHONG LAN" [ref=e312]:
              - link "SẢNH PHONG LAN" [ref=e313] [cursor=pointer]:
                - /url: javascript:;
                - img "SẢNH PHONG LAN" [ref=e314]
            - option "SẢNH CÁT TƯỜNG" [ref=e315]:
              - link "SẢNH CÁT TƯỜNG" [ref=e316] [cursor=pointer]:
                - /url: javascript:;
                - img "SẢNH CÁT TƯỜNG" [ref=e317]
            - option "SẢNH TÌNH YÊU" [ref=e318]:
              - link "SẢNH TÌNH YÊU" [ref=e319] [cursor=pointer]:
                - /url: javascript:;
                - img "SẢNH TÌNH YÊU" [ref=e320]
            - option "SẢNH UYÊN ƯƠNG" [ref=e321]:
              - link "SẢNH UYÊN ƯƠNG" [ref=e322] [cursor=pointer]:
                - /url: javascript:;
                - img "SẢNH UYÊN ƯƠNG" [ref=e323]
            - option [ref=e324]:
              - link [ref=e325] [cursor=pointer]:
                - /url: javascript:;
                - img [ref=e326]
            - option [ref=e327]:
              - link [ref=e328] [cursor=pointer]:
                - /url: javascript:;
                - img [ref=e329]
            - option [ref=e330]:
              - link [ref=e331] [cursor=pointer]:
                - /url: javascript:;
                - img [ref=e332]
            - option [ref=e333]:
              - link [ref=e334] [cursor=pointer]:
                - /url: javascript:;
                - img [ref=e335]
            - option [ref=e336]:
              - link [ref=e337] [cursor=pointer]:
                - /url: javascript:;
                - img [ref=e338]
            - option [ref=e339]:
              - link [ref=e340] [cursor=pointer]:
                - /url: javascript:;
                - img [ref=e341]
      - generic [ref=e346]:
        - paragraph [ref=e347]: Đặt Tiệc Nam Bộ
        - paragraph [ref=e349]: Nam Bộ là địa điểm linh hoạt, phù hợp với tiệc cưới, tiệc cá nhân và sự kiện công ty. Với không gian đa dạng, ẩm thực đặc sắc và dịch vụ chuyên nghiệp, Nam Bộ mang đến trải nghiệm độc đáo và đáng nhớ.
        - generic [ref=e351]:
          - generic [ref=e352]:
            - textbox "Nhập họ tên" [ref=e354]
            - textbox [ref=e356]:
              - /placeholder: Chọn ngày tháng năm
          - generic [ref=e357]:
            - spinbutton [ref=e359]
            - spinbutton [ref=e361]
          - textbox "Yêu cầu" [ref=e363]
          - generic [ref=e364]:
            - checkbox "Chụp ảnh cùng ekip trương trình Chụp ảnh cùng ekip trương trình" [ref=e365]
            - generic [ref=e366]: Chụp ảnh cùng ekip trương trình
          - button "Gửi thông tin" [ref=e368] [cursor=pointer]
        - text: Booking
      - generic [ref=e370]:
        - heading "Câu hỏi thường gặp" [level=2] [ref=e372]
        - generic [ref=e373]:
          - generic [ref=e375]:
            - heading "Nhà hàng có chỗ đậu xe và thuận tiện di chuyển không?" [level=3] [ref=e377]:
              - button "Nhà hàng có chỗ đậu xe và thuận tiện di chuyển không?" [ref=e378] [cursor=pointer]
            - heading "Nhà hàng có hỗ trợ thử món trước khi đặt tiệc không?" [level=3] [ref=e380]:
              - button "Nhà hàng có hỗ trợ thử món trước khi đặt tiệc không?" [ref=e381] [cursor=pointer]
            - heading "Làm sao để đặt tiệc tại Nhà Hàng Tiệc Cưới Nam Bộ?" [level=3] [ref=e383]:
              - button "Làm sao để đặt tiệc tại Nhà Hàng Tiệc Cưới Nam Bộ?" [ref=e384] [cursor=pointer]
            - heading "Thực đơn tại Nhà Hàng Tiệc Cưới Nam Bộ có đa dạng không?" [level=3] [ref=e386]:
              - button "Thực đơn tại Nhà Hàng Tiệc Cưới Nam Bộ có đa dạng không?" [ref=e387] [cursor=pointer]
            - heading "Nhà hàng có hỗ trợ trang trí và tổ chức trọn gói không?" [level=3] [ref=e389]:
              - button "Nhà hàng có hỗ trợ trang trí và tổ chức trọn gói không?" [ref=e390] [cursor=pointer]
            - heading "Không gian tại nhà hàng có phù hợp cho tiệc lớn không?" [level=3] [ref=e392]:
              - button "Không gian tại nhà hàng có phù hợp cho tiệc lớn không?" [ref=e393] [cursor=pointer]
            - heading "Nhà Hàng Tiệc Cưới Nam Bộ có những loại hình tiệc nào?" [level=3] [ref=e395]:
              - button "Nhà Hàng Tiệc Cưới Nam Bộ có những loại hình tiệc nào?" [ref=e396] [cursor=pointer]
          - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e398]
        - generic [ref=e401]:
          - heading "Nhà Hàng Tiệc Cưới Nam Bộ – Mọi Khoảnh Khắc Thành Kỷ Niệm Tuyệt Vời" [level=2] [ref=e402]:
            - generic [ref=e405]: Nhà Hàng Tiệc Cưới Nam Bộ – Mọi Khoảnh Khắc Thành Kỷ Niệm Tuyệt Vời
          - paragraph [ref=e406]:
            - generic [ref=e409]: Nằm ngay trung tâm quận Tân Phú, Nhà Hàng Tiệc Cưới Nam Bộ tự hào là một trong những địa điểm tổ chức tiệc cưới và sự kiện hàng đầu tại TP.HCM. Với tổng diện tích hơn 9.000m², bao gồm 10 sảnh cưới sang trọng, nhà hàng sân vườn thoáng mát cùng hệ thống phòng VIP hiện đại, nơi đây hứa hẹn mang lại những trải nghiệm đáng nhớ cho khách hàng trong ngày trọng đại.
          - paragraph [ref=e410]:
            - img "Nhà Hàng Tiệc Cưới Nam Bộ – Mọi Khoảnh Khắc Thành Kỷ Niệm Tuyệt Vời" [ref=e414]
          - heading "Không Gian Sang Trọng và Đa Dạng" [level=2] [ref=e415]:
            - generic [ref=e418]: Không Gian Sang Trọng và Đa Dạng
          - paragraph [ref=e419]:
            - generic [ref=e422]: Nhà Hàng Tiệc Cưới Nam Bộ được thiết kế với phong cách hiện đại và tinh tế, đáp ứng nhu cầu của mọi loại hình sự kiện từ tiệc cưới hoành tráng, liên hoan công ty đến những bữa tiệc sinh nhật, họp mặt gia đình ấm cúng.
          - paragraph [ref=e423]:
            - generic [ref=e426]: • 10 sảnh cưới với quy mô đa dạng, được trang bị hệ thống ánh sáng và âm thanh đỉnh cao, mang đến không gian hoàn hảo cho các buổi lễ. Mỗi sảnh cưới đều được bài trí cẩn thận để phù hợp với phong cách của từng cặp đôi.
          - paragraph [ref=e427]:
            - generic [ref=e430]: • Nhà hàng sân vườn xanh mát, gần gũi với thiên nhiên, tạo nên không khí trong lành, thư thái cho các buổi tiệc ngoài trời.
          - paragraph [ref=e431]:
            - generic [ref=e434]: • Hệ thống phòng VIP riêng biệt, lý tưởng cho các sự kiện nhỏ gọn và cần sự riêng tư.
          - heading "Tinh Hoa Ẩm Thực Đồng Quê Nam Bộ" [level=2] [ref=e435]:
            - generic [ref=e438]: Tinh Hoa Ẩm Thực Đồng Quê Nam Bộ
          - paragraph [ref=e439]:
            - img "Tinh Hoa Ẩm Thực Đồng Quê Nam Bộ" [ref=e444]
          - paragraph [ref=e445]:
            - generic [ref=e448]: Thương hiệu Làng Nướng Nam Bộ, một phần không thể thiếu của nhà hàng, đã được đông đảo thực khách biết đến và yêu thích. Với nhiều năm kinh nghiệm trong việc phục vụ các món ăn dân dã đậm chất đồng quê Nam Bộ, chúng tôi cam kết mang đến những hương vị đặc trưng khó quên.
          - paragraph [ref=e449]:
            - generic [ref=e452]: "• Thực đơn đa dạng: Từ các món ăn truyền thống như cá kho tộ, lẩu mắm đến những món ăn hiện đại được chế biến sáng tạo, phù hợp với mọi khẩu vị."
          - paragraph [ref=e453]:
            - generic [ref=e456]: "• Nguyên liệu tươi ngon: Được chọn lọc kỹ lưỡng mỗi ngày, đảm bảo mang đến sự an tâm và hài lòng cho khách hàng."
          - paragraph [ref=e457]:
            - generic [ref=e460]: "• Đội ngũ đầu bếp danh tiếng: Không ngừng sáng tạo và chăm chút từng món ăn để đáp ứng mọi yêu cầu của thực khách."
          - heading "Dịch Vụ Chuyên Nghiệp – Mang Đến Sự Hoàn Hảo Cho Ngày Trọng Đại" [level=2] [ref=e461]:
            - generic [ref=e464]: Dịch Vụ Chuyên Nghiệp – Mang Đến Sự Hoàn Hảo Cho Ngày Trọng Đại
          - paragraph [ref=e465]:
            - generic [ref=e467]: Nhà Hàng Tiệc Cưới Nam Bộ luôn đặt sự hài lòng của khách hàng lên hàng đầu. Với đội ngũ nhân viên được đào tạo bài bản, giàu kinh nghiệm, chúng tôi tự tin mang đến cho bạn những dịch vụ hoàn hảo nhất.
          - paragraph [ref=e468]:
            - img "Dịch Vụ Chuyên Nghiệp – Mang Đến Sự Hoàn Hảo Cho Ngày Trọng Đại" [ref=e469]
          - heading "Dịch vụ nổi bật:" [level=2] [ref=e470]:
            - generic [ref=e473]: "Dịch vụ nổi bật:"
          - paragraph [ref=e474]:
            - generic [ref=e477]: "• Tổ chức nghi lễ trang trọng: Hệ thống âm thanh, ánh sáng và màn hình hiện đại giúp tái hiện mọi khoảnh khắc trọng đại một cách hoàn hảo nhất."
          - paragraph [ref=e478]:
            - generic [ref=e481]: "• Nhân viên phục vụ tận tâm: Từ khâu đón khách đến phục vụ bàn, mọi chi tiết nhỏ nhất đều được thực hiện chu đáo và chuyên nghiệp."
          - paragraph [ref=e482]:
            - generic [ref=e485]: "• Phong cách tổ chức linh hoạt: Bạn có thể lựa chọn giữa các phong cách trang trọng, hoành tráng hay nhẹ nhàng, ấm cúng. Chúng tôi sẵn sàng tùy chỉnh theo ý muốn của bạn để tạo nên một buổi tiệc trọn vẹn."
          - heading "Những Lý Do Khiến Nhà Hàng Tiệc Cưới Nam Bộ Là Sự Lựa Chọn Hoàn Hảo" [level=2] [ref=e486]:
            - generic [ref=e489]: Những Lý Do Khiến Nhà Hàng Tiệc Cưới Nam Bộ Là Sự Lựa Chọn Hoàn Hảo
          - paragraph [ref=e490]:
            - img "Những Lý Do Khiến Nhà Hàng Tiệc Cưới Nam Bộ Là Sự Lựa Chọn Hoàn Hảo" [ref=e495]
          - paragraph [ref=e496]:
            - generic [ref=e499]: "• Thương hiệu uy tín: Nhà Hàng Tiệc Cưới Nam Bộ được đăng ký nhãn hiệu độc quyền, khẳng định sự chuyên nghiệp và đáng tin cậy."
          - paragraph [ref=e500]:
            - generic [ref=e503]: "• Không gian đẳng cấp: Sảnh tiệc hiện đại, không gian sân vườn xanh mát, phù hợp với mọi nhu cầu tổ chức sự kiện."
          - paragraph [ref=e504]:
            - generic [ref=e507]: "• Ẩm thực tinh tế: Sự kết hợp hoàn hảo giữa hương vị truyền thống và hiện đại, mang đến những bữa tiệc ấn tượng."
          - paragraph [ref=e508]:
            - generic [ref=e511]: "• Dịch vụ hoàn hảo: Đội ngũ nhân viên tận tâm, nghi lễ tổ chức chuyên nghiệp, mọi thứ đều được thực hiện với tiêu chuẩn cao nhất."
          - heading "Cảm Nhận Sự Đặc Biệt Từ Nam Bộ" [level=2] [ref=e512]:
            - generic [ref=e515]: Cảm Nhận Sự Đặc Biệt Từ Nam Bộ
          - paragraph [ref=e516]:
            - img "Cảm Nhận Sự Đặc Biệt Từ Nam Bộ" [ref=e521]
          - paragraph [ref=e522]:
            - generic [ref=e524]: Chúng tôi tin rằng mỗi sự kiện, mỗi tiệc cưới không chỉ là một buổi tiệc mà còn là khoảnh khắc đáng nhớ trong cuộc đời bạn. Vì vậy, chúng tôi cam kết mang đến những trải nghiệm hoàn hảo nhất, từ không gian, ẩm thực đến phong cách phục vụ.
          - paragraph [ref=e525]:
            - generic [ref=e528]: Hãy để Nhà Hàng Tiệc Cưới Nam Bộ đồng hành cùng bạn, biến ngày trọng đại thành kỷ niệm đáng nhớ mãi mãi!
          - heading "Liên hệ ngay hôm nay để được tư vấn:" [level=2] [ref=e529]:
            - generic [ref=e532]: "Liên hệ ngay hôm nay để được tư vấn:"
          - paragraph [ref=e533]:
            - generic [ref=e536]: "• Địa chỉ: 615A Âu Cơ, P. Hòa Thạnh, Q. Tân Phú, TP.HCM."
          - paragraph [ref=e537]:
            - generic [ref=e540]: "• Điện thoại: 08 3973 5424."
          - paragraph [ref=e541]:
            - generic [ref=e544]: Nhà Hàng Tiệc Cưới Nam Bộ – Nơi Tình Yêu Thăng Hoa và Hạnh Phúc Bắt Đầu!
          - link "Xem thêm bài viết" [ref=e547] [cursor=pointer]:
            - /url: javascript:;
            - generic [ref=e548]:
              - text: Xem thêm bài viết
              - img [ref=e549]
    - generic [ref=e557]:
      - list [ref=e559]:
        - listitem [ref=e560]:
          - link "Garden" [ref=e561] [cursor=pointer]:
            - /url: garden
        - listitem [ref=e562]:
          - link "Wedding" [ref=e563] [cursor=pointer]:
            - /url: wedding
        - listitem [ref=e564]:
          - link "Khuyến mãi" [ref=e565] [cursor=pointer]:
            - /url: khuyen-mai
        - listitem [ref=e566]:
          - link "Sảnh tiệc" [ref=e567] [cursor=pointer]:
            - /url: sanh-tiec
        - listitem [ref=e568]:
          - link "Blog" [ref=e569] [cursor=pointer]:
            - /url: blog
        - listitem [ref=e570]:
          - link "Liên hệ" [ref=e571] [cursor=pointer]:
            - /url: lien-he
        - listitem [ref=e572]:
          - link "Tuyển dụng" [ref=e573] [cursor=pointer]:
            - /url: tuyen-dung
      - generic [ref=e576]:
        - generic [ref=e577]:
          - paragraph [ref=e578]: Nhà Hàng Tiệc Cưới Nam Bộ
          - generic [ref=e579]:
            - paragraph [ref=e580]: 615A Âu Cơ, P. Hòa Thạnh, Quận Tân Phú, TP.HCM
            - paragraph [ref=e581]: "Hotline tư vấn: 094 963 61 66"
            - paragraph [ref=e582]: "Giờ mở cửa: 8h30 - 22h30 hằng ngày"
            - paragraph [ref=e583]:
              - text: "Email:"
              - link "namboaucowedding@gmail.com" [ref=e584] [cursor=pointer]:
                - /url: http://namboaucowedding@gmail.com
          - paragraph [ref=e585]: Mạng xã hội
          - generic [ref=e586]:
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e587] [cursor=pointer]:
              - /url: https://www.facebook.com/weddingnambo/?locale=vi_VN
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e588]
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e589] [cursor=pointer]:
              - /url: ""
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e590]
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e591] [cursor=pointer]:
              - /url: https://www.tiktok.com/@nambo.wedding
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e592]
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e593] [cursor=pointer]:
              - /url: ""
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e594]
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e595] [cursor=pointer]:
              - /url: ""
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e596]
        - paragraph [ref=e599]: Chứng chỉ
        - generic [ref=e600]:
          - paragraph [ref=e601]: Fanpage
          - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e602] [cursor=pointer]:
            - /url: ""
            - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e603]
      - generic [ref=e606]:
        - generic [ref=e607]: ©2026. Nhà Hàng Tiệc Cưới Nam Bộ. Thiết kế Web MIMA
        - generic [ref=e608]:
          - generic [ref=e609]:
            - text: "Đang online:"
            - generic [ref=e610]: "1112"
          - generic [ref=e611]: "|"
          - generic [ref=e612]:
            - text: "Hôm nay:"
            - generic [ref=e613]: "54"
          - generic [ref=e614]: "|"
          - generic [ref=e615]:
            - text: "Tổng truy cập:"
            - generic [ref=e616]: "29691"
    - generic [ref=e620]:
      - 'link "Call me: 094 963 61 66" [ref=e621] [cursor=pointer]':
        - /url: tel:0949636166
        - img [ref=e625]
        - generic [ref=e628]: "Call me: 094 963 61 66"
      - 'link "Zalo: 094 963 61 66" [ref=e629] [cursor=pointer]':
        - /url: https://zalo.me/0949636166
        - img [ref=e633]
        - generic [ref=e634]: "Zalo: 094 963 61 66"
    - dialog [ref=e635]:
      - document:
        - generic [ref=e637]:
          - button "Close" [ref=e638] [cursor=pointer]
          - link "Popup" [ref=e639] [cursor=pointer]:
            - /url: ""
            - img "Popup" [ref=e640]
  - img [ref=e644]
```

# Test source

```ts
  32  |         if (baseUrl.endsWith('/')) {
  33  |             baseUrl = baseUrl.slice(0, -1);
  34  |         }
  35  | 
  36  |         // Ưu tiên thử vào /index.php trước
  37  |         const indexUrl = baseUrl.endsWith('.php') ? baseUrl : `${baseUrl}/index.php`;
  38  | 
  39  |         try {
  40  |             const response = await this.page.goto(indexUrl);
  41  |             await this.page.waitForLoadState("domcontentloaded");
  42  | 
  43  |             // Nếu web trả về 404 (Không tìm thấy index.php)
  44  |             if (response && response.status() === 404) {
  45  |                 console.log(`[THÔNG BÁO] Không tìm thấy /index.php, chuyển hướng về link gốc...`);
  46  |                 await this.page.goto(`${baseUrl}/`);
  47  |                 await this.page.waitForLoadState("domcontentloaded");
  48  |             }
  49  |         } catch (error) {
  50  |             // Nếu lỗi mạng (không truy cập được), thử lại link gốc
  51  |             console.log(`[THÔNG BÁO] Lỗi khi truy cập /index.php, thử lại link gốc...`);
  52  |             await this.page.goto(`${baseUrl}/`);
  53  |             await this.page.waitForLoadState("domcontentloaded");
  54  |         }
  55  |     }
  56  | 
  57  |     /**
  58  |      * Lấy động một từ khóa (tên sản phẩm) từ trang Sản Phẩm.
  59  |      * Tự động điều hướng sang /san-pham để lấy tên sản phẩm chuẩn nhất, sau đó quay lại trang chủ.
  60  |      */
  61  |     async getDynamicKeywordFromHome(): Promise<string> {
  62  |         let baseUrl = process.env.BASE_URL || '';
  63  | 
  64  |         let origin = '';
  65  |         try {
  66  |             origin = new URL(baseUrl.startsWith('http') ? baseUrl : `https://${baseUrl}`).origin;
  67  |         } catch (e) {
  68  |             origin = baseUrl.split('/index.php')[0]; // fallback nếu URL invalid
  69  |             if (origin.endsWith('/')) origin = origin.slice(0, -1);
  70  |         }
  71  | 
  72  |         // Điều hướng sang trang danh sách sản phẩm để cào cho chuẩn xác
  73  |         const productPageUrl = `${origin}/san-pham`;
  74  |         console.log(`Đang truy cập ${productPageUrl} để cào tên sản phẩm...`);
  75  | 
  76  |         try {
  77  |             await this.page.goto(productPageUrl);
  78  |             await this.page.waitForLoadState("domcontentloaded");
  79  |         } catch (e) {
  80  |             console.log("Lỗi khi truy cập /san-pham, sẽ cố gắng cào từ trang hiện tại.");
  81  |         }
  82  | 
  83  |         const keyword = await this.page.evaluate(() => {
  84  |             // 1. Ưu tiên tìm theo các class/tag phổ biến của tên sản phẩm trên trang /san-pham
  85  |             const commonProductSelectors = [
  86  |                 '.product-name', '.product-title', '.title-product',
  87  |                 'h3.title', '.item-title', 'h3 > a', 'h2 > a', '.name-product'
  88  |             ];
  89  | 
  90  |             for (const selector of commonProductSelectors) {
  91  |                 const elements = document.querySelectorAll(selector);
  92  |                 for (const element of Array.from(elements)) {
  93  |                     if (element && element.textContent) {
  94  |                         const text = element.textContent.trim();
  95  |                         // Tránh các nút bấm mua hàng hay tiêu đề linh tinh
  96  |                         if (text.length > 5 && !text.toLowerCase().includes('chi tiết') && !text.toLowerCase().includes('mua ngay')) {
  97  |                             return text;
  98  |                         }
  99  |                     }
  100 |                 }
  101 |             }
  102 | 
  103 |             // 2. Fallback duyệt thẻ <a> 
  104 |             const links = Array.from(document.querySelectorAll('a'));
  105 |             const ignoreWords = [
  106 |                 'trang chủ', 'giới thiệu', 'liên hệ', 'tin tức',
  107 |                 'đăng nhập', 'đăng ký', 'giỏ hàng', 'xem thêm',
  108 |                 'chi tiết', 'danh mục', 'sản phẩm', 'khuyến mãi'
  109 |             ];
  110 | 
  111 |             for (const link of links) {
  112 |                 const text = link.textContent?.trim() || "";
  113 |                 const textLower = text.toLowerCase();
  114 | 
  115 |                 if (text.length > 10 && text.length < 80) {
  116 |                     const isSystemLink = ignoreWords.some(ignore => textLower.includes(ignore));
  117 |                     if (!isSystemLink) {
  118 |                         return text;
  119 |                     }
  120 |                 }
  121 |             }
  122 |             return "";
  123 |         });
  124 | 
  125 |         // QUAN TRỌNG: Lấy xong thì phải quay lại trang chủ (hoặc trang index.php) để thực hiện kịch bản test search
  126 |         console.log("Đã lấy được từ khóa, đang quay lại trang chủ...");
  127 |         const homeUrl = baseUrl.endsWith('.php') ? baseUrl : `${origin}/index.php`;
  128 |         await this.page.goto(homeUrl).catch(() => this.page.goto(origin));
  129 |         await this.page.waitForLoadState("domcontentloaded");
  130 | 
  131 |         if (!keyword) {
> 132 |             throw new Error("Không thể trích xuất được từ khóa sản phẩm nào từ trang /san-pham!");
      |                   ^ Error: Không thể trích xuất được từ khóa sản phẩm nào từ trang /san-pham!
  133 |         }
  134 | 
  135 |         return keyword;
  136 |     }
  137 | 
  138 |     /**
  139 |      * Nhập từ khóa vào ô tìm kiếm
  140 |      */
  141 |     async searchKeyword(keyword: string) {
  142 |         // Trường hợp 1 & 2: Kiểm tra xem ô input có sẵn sàng chưa
  143 |         const isInputVisible = await this.searchInput.first().isVisible({ timeout: 2000 }).catch(() => false);
  144 | 
  145 |         if (!isInputVisible) {
  146 |             // Trường hợp 2: Ô tìm kiếm bị ẩn, phải rê chuột (hover) hoặc click vào icon kính lúp mới hiện ra
  147 |             console.log("Ô tìm kiếm đang bị ẩn, thử tìm và tương tác với icon search hoặc vùng chứa (container)...");
  148 | 
  149 |             // 1. Thử hover vào các vùng chứa (container) search phổ biến trước (thường dùng CSS :hover)
  150 |             const searchContainers = this.page.locator('.search, .search-box, .search-container, .header-search, .search-wrapper, .search-form');
  151 |             const containerCount = await searchContainers.count();
  152 |             for (let i = 0; i < containerCount; i++) {
  153 |                 const container = searchContainers.nth(i);
  154 |                 if (await container.isVisible().catch(() => false)) {
  155 |                     await container.hover({ force: true }).catch(() => { });
  156 |                     await this.page.waitForTimeout(300);
  157 |                     if (await this.searchInput.first().isVisible().catch(() => false)) return this.fillSearchAndSubmit(keyword);
  158 |                 }
  159 |             }
  160 | 
  161 |             // 2. Thử hover/click vào các nút hoặc icon search phổ biến
  162 |             const searchToggleIcons = this.page.locator(
  163 |                 '.fa-search, .icon-search, [class*="search-icon"], [class*="icon-search"], ' +
  164 |                 'i.search, svg.search, .search-toggle, .search-btn, .header-search-icon, .icon-magnifier, span.search'
  165 |             );
  166 | 
  167 |             const iconCount = await searchToggleIcons.count();
  168 |             for (let i = 0; i < iconCount; i++) {
  169 |                 const icon = searchToggleIcons.nth(i);
  170 |                 if (await icon.isVisible().catch(() => false)) {
  171 |                     // Thử rê chuột (hover)
  172 |                     await icon.hover({ force: true }).catch(() => { });
  173 |                     await this.page.waitForTimeout(300);
  174 |                     if (await this.searchInput.first().isVisible().catch(() => false)) return this.fillSearchAndSubmit(keyword);
  175 | 
  176 |                     // Nếu vẫn chưa hiện, thử click
  177 |                     await icon.click({ force: true }).catch(() => { });
  178 |                     await this.page.waitForTimeout(300);
  179 |                     if (await this.searchInput.first().isVisible().catch(() => false)) return this.fillSearchAndSubmit(keyword);
  180 |                 }
  181 |             }
  182 | 
  183 |             // 3. Fallback bạo lực: Ép buộc hiện input bằng JavaScript nếu UI chặn
  184 |             console.log("Thử dùng JavaScript để ép hiển thị ô input...");
  185 |             await this.searchInput.first().evaluate((node: HTMLElement) => {
  186 |                 node.style.display = 'block';
  187 |                 node.style.visibility = 'visible';
  188 |                 node.style.opacity = '1';
  189 |                 if (node.parentElement) {
  190 |                     node.parentElement.style.display = 'block';
  191 |                     node.parentElement.style.visibility = 'visible';
  192 |                 }
  193 |             }).catch(() => { });
  194 |             await this.page.waitForTimeout(500);
  195 |         }
  196 | 
  197 |         // Đợi chắc chắn ô input phải hiện lên trước khi gõ
  198 |         await this.fillSearchAndSubmit(keyword);
  199 |     }
  200 | 
  201 |     /**
  202 |      * Hàm phụ trợ dùng để nhập và submit search (dùng chung cho các nhánh phía trên)
  203 |      */
  204 |     private async fillSearchAndSubmit(keyword: string) {
  205 |         const targetInput = this.searchInput.first();
  206 | 
  207 |         // Đợi 2s xem input có tự hiện lên không
  208 |         await targetInput.waitFor({ state: 'visible', timeout: 2000 }).catch(() => { });
  209 | 
  210 |         try {
  211 |             // Dùng { force: true } và giới hạn thời gian cực ngắn để tránh bị treo 15s
  212 |             await targetInput.fill(keyword, { force: true, timeout: 1000 });
  213 |             await targetInput.pressSequentially(' ', { delay: 100 });
  214 |             await this.page.keyboard.press('Backspace');
  215 |         } catch (error) {
  216 |             console.log("Playwright fill thất bại, chuyển sang ép buộc gõ bằng JavaScript nguyên thủy...");
  217 | 
  218 |             // Dùng page.evaluate thay vì locator.evaluate để tránh việc Playwright ngầm đợi element
  219 |             const inputSelector = "input#keyword, input[name='keyword'], input[type='search'], input[name='q'], input[name='search']";
  220 | 
  221 |             await this.page.evaluate(({ selector, text }) => {
  222 |                 const node = document.querySelector(selector) as HTMLInputElement;
  223 |                 if (node) {
  224 |                     node.value = text;
  225 |                     node.dispatchEvent(new Event('input', { bubbles: true }));
  226 |                     node.dispatchEvent(new Event('change', { bubbles: true }));
  227 |                     node.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true, key: ' ' }));
  228 |                 } else {
  229 |                     console.error("Không tìm thấy thẻ input nào trên DOM để bơm chữ!");
  230 |                 }
  231 |             }, { selector: inputSelector, text: keyword });
  232 | 
```