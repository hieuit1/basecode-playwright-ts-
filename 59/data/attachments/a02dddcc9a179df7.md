# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web/search.spec.ts >> Search Feature Tests >> Search should handle từ khóa chứa toàn ký tự đặc biệt
- Location: tests/web/search.spec.ts:98:17

# Error details

```
Error: locator.isVisible: Error: strict mode violation: locator('//div[@id=\'search-result\']') resolved to 2 elements:
    1) <div id="search-result"></div> aka locator('#search-result').first()
    2) <div id="search-result"></div> aka locator('#search-result').nth(1)

Call log:
    - checking visibility of locator('//div[@id=\'search-result\']')

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
            - text: Dịch vụ
            - img [ref=e19]
        - listitem [ref=e21]:
          - link "Menu" [ref=e22] [cursor=pointer]:
            - /url: menu
          - img [ref=e23]
        - listitem [ref=e25]:
          - link "Tiệc cưới - báo hỷ" [ref=e26] [cursor=pointer]:
            - /url: tiec-cuoi-bao-hy
        - listitem [ref=e27]:
          - link "Liên hệ" [ref=e28] [cursor=pointer]:
            - /url: lien-he
        - listitem [ref=e29]:
          - link "Blog" [ref=e30] [cursor=pointer]:
            - /url: blog
        - listitem [ref=e31]:
          - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e32]
          - combobox [ref=e33]:
            - option "VN" [selected]
            - option "EN"
            - option "CN"
            - option "JA"
            - option "KO"
            - option "FR"
    - generic [ref=e37]:
      - button "Previous" [ref=e38] [cursor=pointer]: ←Previous
      - listbox [ref=e40]:
        - option [ref=e41]
        - option [ref=e44]:
          - link [ref=e45] [cursor=pointer]:
            - /url: ""
            - img [ref=e47]
        - option [ref=e48]:
          - link [ref=e49] [cursor=pointer]:
            - /url: ""
            - img [ref=e51]
        - option [ref=e52]:
          - link [ref=e53] [cursor=pointer]:
            - /url: ""
            - img [ref=e55]
      - button "Next" [ref=e56] [cursor=pointer]: →Next
    - generic [ref=e57]:
      - generic [ref=e59]:
        - generic [ref=e60]:
          - generic [ref=e61]: WEDDING NAM BỘ
          - paragraph [ref=e62]: Nhà Hàng Tiệc Cưới
        - generic [ref=e63]:
          - paragraph [ref=e64]:
            - generic [ref=e66]: Nhà Hàng Tiệc Cưới Nam Bộ được thiết kế với phong cách hiện đại và tinh tế, đáp ứng nhu cầu của mọi loại hình sự kiện từ tiệc cưới hoành tráng, liên hoan công ty đến những bữa tiệc sinh nhật, họp mặt gia đình ấm cúng.
          - paragraph [ref=e67]:
            - generic [ref=e70]: Hãy để Nhà hàng Tiệc cưới Nam Bộ biến ngày trọng đại của bạn trở thành một kỷ niệm khó quên! 🎉💍✨
          - link "Xem thêm" [ref=e71] [cursor=pointer]:
            - /url: gioi-thieu
            - generic [ref=e72]: Xem thêm
            - img [ref=e73]
        - generic [ref=e75]:
          - generic [ref=e79]:
            - paragraph [ref=e80]: Phục vụ
            - text: 24/7
          - generic [ref=e84]:
            - paragraph [ref=e85]: Email
            - text: namboaucowedding@gmail.com
          - generic [ref=e89]:
            - paragraph [ref=e90]: Open
            - text: 8H-23H HẰNG NGÀY
      - generic [ref=e92]:
        - generic [ref=e93]:
          - generic [ref=e94]:
            - heading "Dịch vụ của chúng tôi" [level=2] [ref=e95]
            - paragraph [ref=e96]: Nơi chắp cánh tình yêu
          - paragraph [ref=e98]: Với hệ thống sảnh tiệc đẳng cấp cùng thiết bị âm thanh ánh sáng tiêu chuẩn rạp hát, Nhà Hàng Tiệc Cưới Nam Bộ là địa điểm tổ chức sự kiện lý tưởng đáp ứng mọi nhu cầu tổ chức hội nghị, hội thảo, tiệc cưới, tiệc cá nhân đến các sự kiện tầm cỡ.
        - generic [ref=e99]:
          - img "Tiệc Cưới" [ref=e101]
          - generic [ref=e102]:
            - generic [ref=e103]: Wedding
            - heading "Tiệc Cưới" [level=3] [ref=e104]
            - paragraph [ref=e106]: Mỗi tiệc cưới tại Nhà Hàng Nam Bộ không chỉ là một bữa tiệc, mà còn là một câu chuyện được kể, một hành trình kỷ niệm được vun đắp, là nơi lưu giữ những cảm xúc trân quý và những thông điệp mà cô dâu chú rể muốn gửi gắm và sẻ chia.
            - link "Tìm hiểu thêm Xem thêm" [ref=e107] [cursor=pointer]:
              - /url: tiec-cuoi-bao-hy
              - text: Tìm hiểu thêm
              - img "Xem thêm" [ref=e108]
      - list [ref=e112]:
        - listitem [ref=e113] [cursor=pointer]:
          - generic [ref=e115]:
            - paragraph [ref=e116]: Hall
            - generic [ref=e117]: SẢNH PHONG LAN
        - listitem [ref=e118] [cursor=pointer]:
          - generic [ref=e120]:
            - paragraph [ref=e121]: Hall
            - generic [ref=e122]: SẢNH CÁT TƯỜNG
        - listitem [ref=e123] [cursor=pointer]:
          - generic [ref=e125]:
            - paragraph [ref=e126]: Hall
            - generic [ref=e127]: SẢNH TÌNH YÊU
        - listitem [ref=e128] [cursor=pointer]:
          - generic [ref=e130]:
            - paragraph [ref=e131]: Hall
            - generic [ref=e132]: SẢNH UYÊN ƯƠNG
        - listitem [ref=e133] [cursor=pointer]:
          - generic [ref=e135]:
            - paragraph [ref=e136]: Hall
            - generic [ref=e137]: SẢNH NHẬT NGUYỆT
        - listitem [ref=e138] [cursor=pointer]:
          - generic [ref=e140]:
            - paragraph [ref=e141]: Hall
            - generic [ref=e142]: SẢNH HỒNG NGỌC
        - listitem [ref=e143] [cursor=pointer]:
          - generic [ref=e145]:
            - paragraph [ref=e146]: Hall
            - generic [ref=e147]: SẢNH NỮ HOÀNG
        - listitem [ref=e148] [cursor=pointer]:
          - generic [ref=e150]:
            - paragraph [ref=e151]: Hall
            - generic [ref=e152]: SẢNH KIM CƯƠNG
        - listitem [ref=e153] [cursor=pointer]:
          - generic [ref=e155]:
            - paragraph [ref=e156]: Hall
            - generic [ref=e157]: SẢNH MAI VÀNG
        - listitem [ref=e158] [cursor=pointer]:
          - generic [ref=e160]:
            - paragraph [ref=e161]: Hall
            - generic [ref=e162]: SẢNH HOA HỒNG
      - generic [ref=e165]:
        - generic [ref=e166]:
          - heading "TRẢI NGHIỆM ẨM THỰC" [level=2] [ref=e167]
          - paragraph [ref=e168]: Nơi chắp cánh tình yêu
          - paragraph [ref=e170]: Thực đơn tiệc cưới tại Nam Bộ được chia thành nhiều menu khác nhau, với giá tiệc cưới ưu đãi, đáp ứng được nhu cầu của tất cả các cặp đôi. Từ những món khai vị nhẹ nhàng, tươi mát đến những món chính đậm đà, thơm ngon, kèm theo đó là tráng miệng ngọt ngào, hấp dẫn.
          - link "Xem thêm" [ref=e171] [cursor=pointer]:
            - /url: gioi-thieu
            - generic [ref=e172]: Xem thêm
            - img [ref=e173]
          - generic [ref=e175]:
            - heading "Set Menu Tiệc" [level=4] [ref=e176]:
              - link "Set Menu Tiệc" [ref=e177] [cursor=pointer]:
                - /url: set-menu-tiec
            - heading "Set Menu Bàn Tròn" [level=4] [ref=e178]:
              - link "Set Menu Bàn Tròn" [ref=e179] [cursor=pointer]:
                - /url: menu-mon-le
            - heading "Dịch Vụ Tiệc Cưới" [level=4] [ref=e180]:
              - link "Dịch Vụ Tiệc Cưới" [ref=e181] [cursor=pointer]:
                - /url: dich-vu-tiec-cuoi
        - generic [ref=e182]:
          - img "TRẢI NGHIỆM ẨM THỰC" [ref=e183]
          - link "View Gallery" [ref=e185] [cursor=pointer]:
            - /url: menu
      - generic [ref=e188]:
        - generic [ref=e190]:
          - generic [ref=e192]:
            - paragraph [ref=e193]
            - heading "SET MENU 4" [level=4] [ref=e195]
          - generic [ref=e197]:
            - paragraph [ref=e198]
            - heading "SET MENU 3" [level=4] [ref=e200]
          - generic [ref=e202]:
            - paragraph [ref=e203]
            - heading "SET MENU 2" [level=4] [ref=e205]
          - generic [ref=e207]:
            - paragraph [ref=e208]
            - heading "SET MENU 1" [level=4] [ref=e210]
          - generic [ref=e212]:
            - paragraph [ref=e213]
            - heading "SET MENU 5" [level=4] [ref=e215]
        - generic [ref=e216]:
          - button [ref=e217] [cursor=pointer]
          - button [ref=e219] [cursor=pointer]
      - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e222]
      - generic [ref=e224]:
        - heading "Video của chúng tôi" [level=2] [ref=e226]
        - generic [ref=e227]:
          - paragraph [ref=e230] [cursor=pointer]:
            - generic "Nhà Hàng Nam Bộ" [ref=e231]
          - generic [ref=e232]:
            - generic [ref=e233]:
              - paragraph [ref=e235] [cursor=pointer]:
                - generic "Nhà Hàng Nam Bộ" [ref=e236]
              - generic [ref=e237]: Nhà Hàng Nam Bộ
            - generic [ref=e238]:
              - paragraph [ref=e240] [cursor=pointer]:
                - generic "Nhà Hàng Tiệc Cưới Nam Bộ Âu Cơ" [ref=e241]
              - generic [ref=e242]: Nhà Hàng Tiệc Cưới Nam Bộ Âu Cơ
            - generic [ref=e243]:
              - paragraph [ref=e245] [cursor=pointer]:
                - generic "Top 5 Nhà Hàng Tiệc Cưới Ở TP.HCM" [ref=e246]
              - generic [ref=e247]: Top 5 Nhà Hàng Tiệc Cưới Ở TP.HCM
            - generic [ref=e248]:
              - paragraph [ref=e250] [cursor=pointer]:
                - generic "BỐI CẢNH NHÀ HÀNG TIỆC CƯỚI" [ref=e251]
              - generic [ref=e252]: BỐI CẢNH NHÀ HÀNG TIỆC CƯỚI
            - generic [ref=e253]:
              - paragraph [ref=e255] [cursor=pointer]:
                - generic "REVIEW NHÀ HÀNG TIỆC CƯỚI NAM BỘ" [ref=e256]
              - generic [ref=e257]: REVIEW NHÀ HÀNG TIỆC CƯỚI NAM BỘ
            - paragraph [ref=e260] [cursor=pointer]
      - generic [ref=e265]:
        - generic [ref=e266]:
          - generic [ref=e267]: Sảnh tiệc
          - heading "Thanh Lịch, Hiện Đại" [level=3] [ref=e268]
          - paragraph [ref=e270]: Sảnh tiệc của Nhà Hàng Nam Bộ có thiết kế hiện đại, được lấy cảm hứng từ bốn mùa trong năm và một mùa lễ hội với không gian rộng lớn và trần cao thoáng đăng, sẽ là nơi lưu giữ những khoảnh khắc đẹp nhất của mọi sự kiện
          - link "Tìm hiểu thêm Xem thêm" [ref=e271] [cursor=pointer]:
            - /url: sanh-tiec
            - text: Tìm hiểu thêm
            - img "Xem thêm" [ref=e272]
        - generic [ref=e274]:
          - generic [ref=e275]:
            - button [ref=e276] [cursor=pointer]:
              - img [ref=e277]
            - listbox [ref=e280]:
              - link [ref=e282] [cursor=pointer]:
                - /url: thumbs/650x450x1/upload/product/sanh-hoa-hong-lung-1-7030.png
                - img [ref=e283]
              - option "SẢNH PHONG LAN" [ref=e284]:
                - link "SẢNH PHONG LAN" [ref=e285] [cursor=pointer]:
                  - /url: thumbs/650x450x1/upload/product/plan-4-1739171453_1775017805002.jpg
                  - img "SẢNH PHONG LAN" [ref=e286]
              - option [ref=e287]:
                - link [ref=e288] [cursor=pointer]:
                  - /url: thumbs/650x450x1/upload/product/sanh-nhat-nguyet-3-1739171425_1775017787931.jpg
                  - img [ref=e289]
              - option [ref=e290]:
                - link [ref=e291] [cursor=pointer]:
                  - /url: thumbs/650x450x1/upload/product/sanh-tinh-yeu-7-1-4100.png
                  - img [ref=e292]
              - option [ref=e293]:
                - link [ref=e294] [cursor=pointer]:
                  - /url: thumbs/650x450x1/upload/product/sanh-uyen-uong-sanh-6-1-6631.png
                  - img [ref=e295]
              - option [ref=e296]:
                - link [ref=e297] [cursor=pointer]:
                  - /url: thumbs/650x450x1/upload/product/sanh-nhhatnguyett-1739171388_1775017749289.jpg
                  - img [ref=e298]
              - option [ref=e299]:
                - link [ref=e300] [cursor=pointer]:
                  - /url: thumbs/650x450x1/upload/product/sanh-hong-ngoc-2-1739171110_1775017736346.jpg
                  - img [ref=e301]
              - option [ref=e302]:
                - link [ref=e303] [cursor=pointer]:
                  - /url: thumbs/650x450x1/upload/product/sanh-nu-hoang-3-1-7125.png
                  - img [ref=e304]
              - option [ref=e305]:
                - link [ref=e306] [cursor=pointer]:
                  - /url: thumbs/650x450x1/upload/product/sanh-kcuong-1739171049_1775017701552.jpg
                  - img [ref=e307]
              - option [ref=e308]:
                - link [ref=e309] [cursor=pointer]:
                  - /url: thumbs/650x450x1/upload/product/sanh-mai-vang-1-8438.png
                  - img [ref=e310]
              - option [ref=e311]:
                - link [ref=e312] [cursor=pointer]:
                  - /url: thumbs/650x450x1/upload/product/sanh-hoa-hong-lung-1-7030.png
                  - img [ref=e313]
              - link [ref=e315] [cursor=pointer]:
                - /url: thumbs/650x450x1/upload/product/plan-4-1739171453_1775017805002.jpg
                - img [ref=e316]
            - button [ref=e317] [cursor=pointer]:
              - img [ref=e318]
          - listbox [ref=e323]:
            - option "SẢNH PHONG LAN" [ref=e324]:
              - link "SẢNH PHONG LAN" [ref=e325] [cursor=pointer]:
                - /url: javascript:;
                - img "SẢNH PHONG LAN" [ref=e326]
            - option "SẢNH CÁT TƯỜNG" [ref=e327]:
              - link "SẢNH CÁT TƯỜNG" [ref=e328] [cursor=pointer]:
                - /url: javascript:;
                - img "SẢNH CÁT TƯỜNG" [ref=e329]
            - option "SẢNH TÌNH YÊU" [ref=e330]:
              - link "SẢNH TÌNH YÊU" [ref=e331] [cursor=pointer]:
                - /url: javascript:;
                - img "SẢNH TÌNH YÊU" [ref=e332]
            - option "SẢNH UYÊN ƯƠNG" [ref=e333]:
              - link "SẢNH UYÊN ƯƠNG" [ref=e334] [cursor=pointer]:
                - /url: javascript:;
                - img "SẢNH UYÊN ƯƠNG" [ref=e335]
            - option [ref=e336]:
              - link [ref=e337] [cursor=pointer]:
                - /url: javascript:;
                - img [ref=e338]
            - option [ref=e339]:
              - link [ref=e340] [cursor=pointer]:
                - /url: javascript:;
                - img [ref=e341]
            - option [ref=e342]:
              - link [ref=e343] [cursor=pointer]:
                - /url: javascript:;
                - img [ref=e344]
            - option [ref=e345]:
              - link [ref=e346] [cursor=pointer]:
                - /url: javascript:;
                - img [ref=e347]
            - option [ref=e348]:
              - link [ref=e349] [cursor=pointer]:
                - /url: javascript:;
                - img [ref=e350]
            - option [ref=e351]:
              - link [ref=e352] [cursor=pointer]:
                - /url: javascript:;
                - img [ref=e353]
      - generic [ref=e358]:
        - paragraph [ref=e359]: Đặt Tiệc Nam Bộ
        - paragraph [ref=e361]: Nam Bộ là địa điểm linh hoạt, phù hợp với tiệc cưới, tiệc cá nhân và sự kiện công ty. Với không gian đa dạng, ẩm thực đặc sắc và dịch vụ chuyên nghiệp, Nam Bộ mang đến trải nghiệm độc đáo và đáng nhớ.
        - generic [ref=e363]:
          - generic [ref=e364]:
            - textbox "Nhập họ tên" [ref=e366]
            - textbox [ref=e368]:
              - /placeholder: Chọn ngày tháng năm
          - generic [ref=e369]:
            - textbox "Số điện thoại gồm 10 chữ số, bắt đầu bằng 0" [ref=e371]:
              - /placeholder: Nhập số điện thoại
            - spinbutton [ref=e373]
          - textbox "Yêu cầu" [ref=e375]
          - generic [ref=e376]:
            - checkbox "Chụp ảnh cùng ekip trương trình Chụp ảnh cùng ekip trương trình" [ref=e377]
            - generic [ref=e378]: Chụp ảnh cùng ekip trương trình
          - button "Gửi thông tin" [ref=e380] [cursor=pointer]
        - text: Booking
      - generic [ref=e382]:
        - heading "Câu hỏi thường gặp" [level=2] [ref=e384]
        - generic [ref=e385]:
          - generic [ref=e387]:
            - heading "Nhà hàng có chỗ đậu xe và thuận tiện di chuyển không?" [level=3] [ref=e389]:
              - button "Nhà hàng có chỗ đậu xe và thuận tiện di chuyển không?" [ref=e390] [cursor=pointer]
            - heading "Nhà hàng có hỗ trợ thử món trước khi đặt tiệc không?" [level=3] [ref=e392]:
              - button "Nhà hàng có hỗ trợ thử món trước khi đặt tiệc không?" [ref=e393] [cursor=pointer]
            - heading "Làm sao để đặt tiệc tại Nhà Hàng Tiệc Cưới Nam Bộ?" [level=3] [ref=e395]:
              - button "Làm sao để đặt tiệc tại Nhà Hàng Tiệc Cưới Nam Bộ?" [ref=e396] [cursor=pointer]
            - heading "Thực đơn tại Nhà Hàng Tiệc Cưới Nam Bộ có đa dạng không?" [level=3] [ref=e398]:
              - button "Thực đơn tại Nhà Hàng Tiệc Cưới Nam Bộ có đa dạng không?" [ref=e399] [cursor=pointer]
            - heading "Nhà hàng có hỗ trợ trang trí và tổ chức trọn gói không?" [level=3] [ref=e401]:
              - button "Nhà hàng có hỗ trợ trang trí và tổ chức trọn gói không?" [ref=e402] [cursor=pointer]
            - heading "Không gian tại nhà hàng có phù hợp cho tiệc lớn không?" [level=3] [ref=e404]:
              - button "Không gian tại nhà hàng có phù hợp cho tiệc lớn không?" [ref=e405] [cursor=pointer]
            - heading "Nhà Hàng Tiệc Cưới Nam Bộ có những loại hình tiệc nào?" [level=3] [ref=e407]:
              - button "Nhà Hàng Tiệc Cưới Nam Bộ có những loại hình tiệc nào?" [ref=e408] [cursor=pointer]
          - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e410]
        - generic [ref=e413]:
          - heading "Nhà Hàng Tiệc Cưới Nam Bộ – Mọi Khoảnh Khắc Thành Kỷ Niệm Tuyệt Vời" [level=2] [ref=e414]:
            - generic [ref=e417]: Nhà Hàng Tiệc Cưới Nam Bộ – Mọi Khoảnh Khắc Thành Kỷ Niệm Tuyệt Vời
          - paragraph [ref=e418]:
            - generic [ref=e421]: Nằm ngay trung tâm quận Tân Phú, Nhà Hàng Tiệc Cưới Nam Bộ tự hào là một trong những địa điểm tổ chức tiệc cưới và sự kiện hàng đầu tại TP.HCM. Với tổng diện tích hơn 9.000m², bao gồm 10 sảnh cưới sang trọng, nhà hàng sân vườn thoáng mát cùng hệ thống phòng VIP hiện đại, nơi đây hứa hẹn mang lại những trải nghiệm đáng nhớ cho khách hàng trong ngày trọng đại.
          - paragraph [ref=e422]:
            - img "Nhà Hàng Tiệc Cưới Nam Bộ – Mọi Khoảnh Khắc Thành Kỷ Niệm Tuyệt Vời" [ref=e426]
          - heading "Không Gian Sang Trọng và Đa Dạng" [level=2] [ref=e427]:
            - generic [ref=e430]: Không Gian Sang Trọng và Đa Dạng
          - paragraph [ref=e431]:
            - generic [ref=e434]: Nhà Hàng Tiệc Cưới Nam Bộ được thiết kế với phong cách hiện đại và tinh tế, đáp ứng nhu cầu của mọi loại hình sự kiện từ tiệc cưới hoành tráng, liên hoan công ty đến những bữa tiệc sinh nhật, họp mặt gia đình ấm cúng.
          - paragraph [ref=e435]:
            - generic [ref=e438]: • 10 sảnh cưới với quy mô đa dạng, được trang bị hệ thống ánh sáng và âm thanh đỉnh cao, mang đến không gian hoàn hảo cho các buổi lễ. Mỗi sảnh cưới đều được bài trí cẩn thận để phù hợp với phong cách của từng cặp đôi.
          - paragraph [ref=e439]:
            - generic [ref=e442]: • Nhà hàng sân vườn xanh mát, gần gũi với thiên nhiên, tạo nên không khí trong lành, thư thái cho các buổi tiệc ngoài trời.
          - paragraph [ref=e443]:
            - generic [ref=e446]: • Hệ thống phòng VIP riêng biệt, lý tưởng cho các sự kiện nhỏ gọn và cần sự riêng tư.
          - heading "Tinh Hoa Ẩm Thực Đồng Quê Nam Bộ" [level=2] [ref=e447]:
            - generic [ref=e450]: Tinh Hoa Ẩm Thực Đồng Quê Nam Bộ
          - paragraph [ref=e451]:
            - img "Tinh Hoa Ẩm Thực Đồng Quê Nam Bộ" [ref=e456]
          - paragraph [ref=e457]:
            - generic [ref=e460]: Thương hiệu Làng Nướng Nam Bộ, một phần không thể thiếu của nhà hàng, đã được đông đảo thực khách biết đến và yêu thích. Với nhiều năm kinh nghiệm trong việc phục vụ các món ăn dân dã đậm chất đồng quê Nam Bộ, chúng tôi cam kết mang đến những hương vị đặc trưng khó quên.
          - paragraph [ref=e461]:
            - generic [ref=e464]: "• Thực đơn đa dạng: Từ các món ăn truyền thống như cá kho tộ, lẩu mắm đến những món ăn hiện đại được chế biến sáng tạo, phù hợp với mọi khẩu vị."
          - paragraph [ref=e465]:
            - generic [ref=e468]: "• Nguyên liệu tươi ngon: Được chọn lọc kỹ lưỡng mỗi ngày, đảm bảo mang đến sự an tâm và hài lòng cho khách hàng."
          - paragraph [ref=e469]:
            - generic [ref=e472]: "• Đội ngũ đầu bếp danh tiếng: Không ngừng sáng tạo và chăm chút từng món ăn để đáp ứng mọi yêu cầu của thực khách."
          - heading "Dịch Vụ Chuyên Nghiệp – Mang Đến Sự Hoàn Hảo Cho Ngày Trọng Đại" [level=2] [ref=e473]:
            - generic [ref=e476]: Dịch Vụ Chuyên Nghiệp – Mang Đến Sự Hoàn Hảo Cho Ngày Trọng Đại
          - paragraph [ref=e477]:
            - generic [ref=e479]: Nhà Hàng Tiệc Cưới Nam Bộ luôn đặt sự hài lòng của khách hàng lên hàng đầu. Với đội ngũ nhân viên được đào tạo bài bản, giàu kinh nghiệm, chúng tôi tự tin mang đến cho bạn những dịch vụ hoàn hảo nhất.
          - paragraph [ref=e480]:
            - img "Dịch Vụ Chuyên Nghiệp – Mang Đến Sự Hoàn Hảo Cho Ngày Trọng Đại" [ref=e481]
          - heading "Dịch vụ nổi bật:" [level=2] [ref=e482]:
            - generic [ref=e485]: "Dịch vụ nổi bật:"
          - paragraph [ref=e486]:
            - generic [ref=e489]: "• Tổ chức nghi lễ trang trọng: Hệ thống âm thanh, ánh sáng và màn hình hiện đại giúp tái hiện mọi khoảnh khắc trọng đại một cách hoàn hảo nhất."
          - paragraph [ref=e490]:
            - generic [ref=e493]: "• Nhân viên phục vụ tận tâm: Từ khâu đón khách đến phục vụ bàn, mọi chi tiết nhỏ nhất đều được thực hiện chu đáo và chuyên nghiệp."
          - paragraph [ref=e494]:
            - generic [ref=e497]: "• Phong cách tổ chức linh hoạt: Bạn có thể lựa chọn giữa các phong cách trang trọng, hoành tráng hay nhẹ nhàng, ấm cúng. Chúng tôi sẵn sàng tùy chỉnh theo ý muốn của bạn để tạo nên một buổi tiệc trọn vẹn."
          - heading "Những Lý Do Khiến Nhà Hàng Tiệc Cưới Nam Bộ Là Sự Lựa Chọn Hoàn Hảo" [level=2] [ref=e498]:
            - generic [ref=e501]: Những Lý Do Khiến Nhà Hàng Tiệc Cưới Nam Bộ Là Sự Lựa Chọn Hoàn Hảo
          - paragraph [ref=e502]:
            - img "Những Lý Do Khiến Nhà Hàng Tiệc Cưới Nam Bộ Là Sự Lựa Chọn Hoàn Hảo" [ref=e507]
          - paragraph [ref=e508]:
            - generic [ref=e511]: "• Thương hiệu uy tín: Nhà Hàng Tiệc Cưới Nam Bộ được đăng ký nhãn hiệu độc quyền, khẳng định sự chuyên nghiệp và đáng tin cậy."
          - paragraph [ref=e512]:
            - generic [ref=e515]: "• Không gian đẳng cấp: Sảnh tiệc hiện đại, không gian sân vườn xanh mát, phù hợp với mọi nhu cầu tổ chức sự kiện."
          - paragraph [ref=e516]:
            - generic [ref=e519]: "• Ẩm thực tinh tế: Sự kết hợp hoàn hảo giữa hương vị truyền thống và hiện đại, mang đến những bữa tiệc ấn tượng."
          - paragraph [ref=e520]:
            - generic [ref=e523]: "• Dịch vụ hoàn hảo: Đội ngũ nhân viên tận tâm, nghi lễ tổ chức chuyên nghiệp, mọi thứ đều được thực hiện với tiêu chuẩn cao nhất."
          - heading "Cảm Nhận Sự Đặc Biệt Từ Nam Bộ" [level=2] [ref=e524]:
            - generic [ref=e527]: Cảm Nhận Sự Đặc Biệt Từ Nam Bộ
          - paragraph [ref=e528]:
            - img "Cảm Nhận Sự Đặc Biệt Từ Nam Bộ" [ref=e533]
          - paragraph [ref=e534]:
            - generic [ref=e536]: Chúng tôi tin rằng mỗi sự kiện, mỗi tiệc cưới không chỉ là một buổi tiệc mà còn là khoảnh khắc đáng nhớ trong cuộc đời bạn. Vì vậy, chúng tôi cam kết mang đến những trải nghiệm hoàn hảo nhất, từ không gian, ẩm thực đến phong cách phục vụ.
          - paragraph [ref=e537]:
            - generic [ref=e540]: Hãy để Nhà Hàng Tiệc Cưới Nam Bộ đồng hành cùng bạn, biến ngày trọng đại thành kỷ niệm đáng nhớ mãi mãi!
          - heading "Liên hệ ngay hôm nay để được tư vấn:" [level=2] [ref=e541]:
            - generic [ref=e544]: "Liên hệ ngay hôm nay để được tư vấn:"
          - paragraph [ref=e545]:
            - generic [ref=e548]: "• Địa chỉ: 615A Âu Cơ, P. Hòa Thạnh, Q. Tân Phú, TP.HCM."
          - paragraph [ref=e549]:
            - generic [ref=e552]: "• Điện thoại: 08 3973 5424."
          - paragraph [ref=e553]:
            - generic [ref=e556]: Nhà Hàng Tiệc Cưới Nam Bộ – Nơi Tình Yêu Thăng Hoa và Hạnh Phúc Bắt Đầu!
          - link "Xem thêm bài viết" [ref=e559] [cursor=pointer]:
            - /url: javascript:;
            - generic [ref=e560]:
              - text: Xem thêm bài viết
              - img [ref=e561]
    - generic [ref=e569]:
      - list [ref=e571]:
        - listitem [ref=e572]:
          - link "Garden" [ref=e573] [cursor=pointer]:
            - /url: garden
        - listitem [ref=e574]:
          - link "Wedding" [ref=e575] [cursor=pointer]:
            - /url: wedding
        - listitem [ref=e576]:
          - link "Khuyến mãi" [ref=e577] [cursor=pointer]:
            - /url: khuyen-mai
        - listitem [ref=e578]:
          - link "Sảnh tiệc" [ref=e579] [cursor=pointer]:
            - /url: sanh-tiec
        - listitem [ref=e580]:
          - link "Blog" [ref=e581] [cursor=pointer]:
            - /url: blog
        - listitem [ref=e582]:
          - link "Liên hệ" [ref=e583] [cursor=pointer]:
            - /url: lien-he
        - listitem [ref=e584]:
          - link "Tuyển dụng" [ref=e585] [cursor=pointer]:
            - /url: tuyen-dung
      - generic [ref=e588]:
        - generic [ref=e589]:
          - paragraph [ref=e590]: Nhà Hàng Tiệc Cưới Nam Bộ
          - generic [ref=e591]:
            - paragraph [ref=e592]: 615A Âu Cơ, P. Hòa Thạnh, Quận Tân Phú, TP.HCM
            - paragraph [ref=e593]: "Hotline tư vấn: 094 963 61 66"
            - paragraph [ref=e594]: "Giờ mở cửa: 8h30 - 22h30 hằng ngày"
            - paragraph [ref=e595]:
              - text: "Email:"
              - link "namboaucowedding@gmail.com" [ref=e596] [cursor=pointer]:
                - /url: http://namboaucowedding@gmail.com
          - paragraph [ref=e597]: Mạng xã hội
          - generic [ref=e598]:
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e599] [cursor=pointer]:
              - /url: https://www.facebook.com/weddingnambo/?locale=vi_VN
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e600]
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e601] [cursor=pointer]:
              - /url: ""
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e602]
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e603] [cursor=pointer]:
              - /url: https://www.tiktok.com/@nambo.wedding
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e604]
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e605] [cursor=pointer]:
              - /url: ""
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e606]
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e607] [cursor=pointer]:
              - /url: ""
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e608]
        - paragraph [ref=e611]: Chứng chỉ
        - generic [ref=e612]:
          - paragraph [ref=e613]: Fanpage
          - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e614] [cursor=pointer]:
            - /url: ""
            - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e615]
      - generic [ref=e618]:
        - generic [ref=e619]: ©2026. Nhà Hàng Tiệc Cưới Nam Bộ. Thiết kế Web MIMA
        - generic [ref=e620]:
          - generic [ref=e621]:
            - text: "Đang online:"
            - generic [ref=e622]: "1153"
          - generic [ref=e623]: "|"
          - generic [ref=e624]:
            - text: "Hôm nay:"
            - generic [ref=e625]: "53"
          - generic [ref=e626]: "|"
          - generic [ref=e627]:
            - text: "Tổng truy cập:"
            - generic [ref=e628]: "29867"
    - generic [ref=e632]:
      - 'link "Call me: 094 963 61 66" [ref=e633] [cursor=pointer]':
        - /url: tel:0949636166
        - img [ref=e637]
        - generic [ref=e640]: "Call me: 094 963 61 66"
      - 'link "Zalo: 094 963 61 66" [ref=e641] [cursor=pointer]':
        - /url: https://zalo.me/0949636166
        - img [ref=e645]
        - generic [ref=e646]: "Zalo: 094 963 61 66"
  - img [ref=e649]
  - img "Go Top" [ref=e652] [cursor=pointer]
```

# Test source

```ts
  46  |                 await test.step(`2 Nhập từ khóa "${dynamicKeyword}" vào thanh search`, async () => {
  47  |                     await searchPage.searchKeyword(dynamicKeyword);
  48  |                 });
  49  | 
  50  |                 await test.step("3 Kiểm tra kết quả tìm kiếm (Hỗ trợ 2 trường hợp)", async () => {
  51  |                     // Kiểm tra xem web có nút search không
  52  |                     const hasSearchButton = await searchPage.searchButton.isVisible({ timeout: 2000 }).catch(() => false);
  53  | 
  54  |                     if (hasSearchButton) {
  55  |                         // Trương hợp 2: Web mới (Click button -> Chuyển sang trang kết quả)
  56  |                         await Promise.all([
  57  |                             page.waitForNavigation({ waitUntil: 'domcontentloaded' }).catch(() => { }),
  58  |                             searchPage.searchButton.click()
  59  |                         ]);
  60  | 
  61  |                         await TestHelper.takeScreenshot(page, 'Trang kết quả tìm kiếm');
  62  | 
  63  |                         const searchChunk = dynamicKeyword.substring(0, 15).toLowerCase();
  64  |                         const isProductVisible = await page.locator(`text=${searchChunk}`).first().isVisible({ timeout: 5000 }).catch(() => false);
  65  | 
  66  |                         if (!isProductVisible) {
  67  |                             const allText = await page.locator('body').innerText();
  68  |                             expect(allText.toLowerCase()).toContain(searchChunk);
  69  |                         } else {
  70  |                             expect(isProductVisible).toBeTruthy();
  71  |                         }
  72  |                     } else {
  73  |                         // Trường hợp 1: Web cũ (Dropdown AJAX)
  74  |                         await searchPage.waitForDropdown();
  75  |                         await TestHelper.takeScreenshot(page, 'Kết quả tìm kiếm hiển thị dropdown');
  76  | 
  77  |                         const resultItems = searchPage.getResultItems();
  78  |                         const count = await resultItems.count();
  79  |                         expect(count).toBeGreaterThan(0);
  80  | 
  81  |                         let foundMatch = false;
  82  |                         for (let i = 0; i < count; i++) {
  83  |                             const title = await resultItems.nth(i).getAttribute('title');
  84  |                             const searchChunk = dynamicKeyword.substring(0, 15).toLowerCase();
  85  |                             if (title && title.toLowerCase().includes(searchChunk)) {
  86  |                                 foundMatch = true;
  87  |                                 break;
  88  |                             }
  89  |                         }
  90  |                         expect(foundMatch).toBeTruthy();
  91  |                     }
  92  |                 });
  93  |             }
  94  |         );
  95  | 
  96  |         // ==================== DATA-DRIVEN NEGATIVE TEST CASES ====================
  97  |         invalidSearchCases.forEach((data) => {
  98  |             test(
  99  |                 `Search should handle ${data.scenario}`,
  100 |                 {
  101 |                     tag: [
  102 |                         `@priority:${data.priority}`,
  103 |                         "@regression",
  104 |                         "@negative",
  105 |                     ],
  106 |                     annotation: [{ type: "severity", description: data.severity }],
  107 |                 },
  108 |                 async ({ page }) => {
  109 |                     await allure.story(`Invalid Search: ${data.scenario.toUpperCase()}`);
  110 | 
  111 |                     await test.step(`Nhập từ khóa: '${data.keyword}'`, async () => {
  112 |                         await searchPage.searchKeyword(data.keyword);
  113 |                     });
  114 | 
  115 |                     await test.step("Xác nhận hệ thống xử lý đúng (không trả về kết quả)", async () => {
  116 |                         await TestHelper.delay(page, 1000);
  117 | 
  118 |                         const hasSearchButton = await searchPage.searchButton.isVisible({ timeout: 1000 }).catch(() => false);
  119 | 
  120 |                         if (hasSearchButton) {
  121 |                             // Nhấn tìm kiếm
  122 |                             await searchPage.searchButton.click();
  123 | 
  124 |                             // Bắt lỗi khoảng trắng / rỗng (Một số web sẽ báo lỗi, một số web sẽ cho qua và trả về 0 kết quả)
  125 |                             let shouldCheckZeroProducts = true;
  126 |                             if (data.keyword.trim() === "") {
  127 |                                 const emptyMsg = page.locator("//div[contains(text(),'Chưa nhập từ khóa tìm kiếm')]");
  128 |                                 const isMsgVisible = await emptyMsg.isVisible({ timeout: 2000 }).catch(() => false);
  129 |                                 if (isMsgVisible) {
  130 |                                     await expect(emptyMsg).toBeVisible();
  131 |                                     shouldCheckZeroProducts = false;
  132 |                                 }
  133 |                             }
  134 | 
  135 |                             if (shouldCheckZeroProducts) {
  136 |                                 await page.waitForLoadState('domcontentloaded').catch(() => { });
  137 |                                 await TestHelper.delay(page, 2000);
  138 | 
  139 |                                 const products = searchPage.getProductElementsOnPage();
  140 |                                 const productCount = await products.count();
  141 | 
  142 |                                 expect(productCount).toBe(0);
  143 |                             }
  144 | 
  145 |                         } else {
> 146 |                             const isVisible = await searchPage.searchResultDropdown.isVisible();
      |                                                                                     ^ Error: locator.isVisible: Error: strict mode violation: locator('//div[@id=\'search-result\']') resolved to 2 elements:
  147 | 
  148 |                             if (isVisible) {
  149 |                                 const count = await searchPage.getResultItems().count();
  150 |                                 expect(count).toBe(0);
  151 |                             }
  152 |                         }
  153 | 
  154 |                         await TestHelper.takeScreenshot(page, `Kết quả tìm kiếm cho ${data.scenario}`);
  155 |                     });
  156 |                 }
  157 |             );
  158 |         });
  159 |     });
  160 | }
  161 | 
```