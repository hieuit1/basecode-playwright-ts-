# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Dịch vụ thiết kế 1 (/dich-vu-thiet-ke-1)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 93/100 dưới ngưỡng 96%. Có 1/15 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e7]:
      - link "Viên Mộc Decor - Thiết Kế Bàn Trà Đạo" [ref=e8] [cursor=pointer]:
        - /url: https://code5.mimadigi.vn/2026/august/trancongvinh_111726W/
        - img "Viên Mộc Decor - Thiết Kế Bàn Trà Đạo" [ref=e9]
      - list [ref=e10]:
        - listitem [ref=e11]:
          - link "Trang chủ" [ref=e12] [cursor=pointer]:
            - /url: ""
        - listitem [ref=e13]:
          - link "Về viên mộc" [ref=e14] [cursor=pointer]:
            - /url: ve-vien-moc
        - listitem [ref=e15]:
          - link "Dịch vụ" [ref=e16] [cursor=pointer]:
            - /url: dich-vu
            - text: Dịch vụ
            - img [ref=e17]
        - listitem [ref=e19]:
          - link "Sản phẩm" [ref=e20] [cursor=pointer]:
            - /url: san-pham
            - text: Sản phẩm
            - img [ref=e21]
        - listitem [ref=e23]:
          - link "Dự án" [ref=e24] [cursor=pointer]:
            - /url: du-an
            - text: Dự án
            - img [ref=e25]
        - listitem [ref=e27]:
          - link "Tin tức" [ref=e28] [cursor=pointer]:
            - /url: tin-tuc
        - listitem [ref=e29]:
          - link "Liên hệ" [ref=e30] [cursor=pointer]:
            - /url: lien-he
      - generic [ref=e32]:
        - searchbox "Nhập từ khóa..."
        - button "Search" [ref=e33] [cursor=pointer]:
          - img [ref=e34]
      - link "0938830339" [ref=e38] [cursor=pointer]:
        - /url: tel:0938830339
        - img [ref=e39]
        - text: "0938830339"
    - list [ref=e44]:
      - listitem [ref=e45]:
        - link "Trang chủ" [ref=e46] [cursor=pointer]:
          - /url: https://code5.mimadigi.vn/2026/august/trancongvinh_111726W/
          - generic [ref=e47]: Trang chủ
      - listitem [ref=e48]:
        - text: /
        - link "Dịch vụ" [ref=e49] [cursor=pointer]:
          - /url: https://code5.mimadigi.vn/2026/august/trancongvinh_111726W/dich-vu
          - generic [ref=e50]: Dịch vụ
      - listitem [ref=e51]:
        - text: /
        - link "Thiết kế phòng trà đạo" [ref=e52] [cursor=pointer]:
          - /url: https://code5.mimadigi.vn/2026/august/trancongvinh_111726W/thiet-ke-phong-tra-dao
          - generic [ref=e53]: Thiết kế phòng trà đạo
      - listitem [ref=e54]:
        - text: /
        - link "Thiết kế phòng trà 1" [ref=e55] [cursor=pointer]:
          - /url: https://code5.mimadigi.vn/2026/august/trancongvinh_111726W/thiet-ke-phong-tra-1
          - generic [ref=e56]: Thiết kế phòng trà 1
      - listitem [ref=e57]:
        - text: /
        - link "Dịch vụ thiết kế 1" [ref=e58] [cursor=pointer]:
          - /url: https://code5.mimadigi.vn/2026/august/trancongvinh_111726W/dich-vu-thiet-ke-1
          - generic [ref=e59]: Dịch vụ thiết kế 1
    - generic [ref=e62]:
      - generic [ref=e64]: Dịch vụ thiết kế 1
      - list [ref=e66]:
        - listitem [ref=e67]:
          - link "Dịch vụ thiết kế 1" [ref=e68] [cursor=pointer]:
            - /url: https://code5.mimadigi.vn/2026/august/trancongvinh_111726W/upload/news/rectangle-29-3754.png
            - img "Dịch vụ thiết kế 1" [ref=e69]
        - listitem [ref=e70]:
          - link "Dịch vụ thiết kế 1" [ref=e71] [cursor=pointer]:
            - /url: https://code5.mimadigi.vn/2026/august/trancongvinh_111726W/upload/news/rectangle-30-2888.png
            - img "Dịch vụ thiết kế 1" [ref=e72]
        - listitem [ref=e73]:
          - link "Dịch vụ thiết kế 1" [ref=e74] [cursor=pointer]:
            - /url: https://code5.mimadigi.vn/2026/august/trancongvinh_111726W/upload/news/rectangle-32-2632.png
            - img "Dịch vụ thiết kế 1" [ref=e75]
        - listitem [ref=e76]:
          - link "Dịch vụ thiết kế 1" [ref=e77] [cursor=pointer]:
            - /url: https://code5.mimadigi.vn/2026/august/trancongvinh_111726W/upload/news/rectangle-33-6338.png
            - img "Dịch vụ thiết kế 1" [ref=e78]
        - listitem [ref=e79]:
          - link "Dịch vụ thiết kế 1" [ref=e80] [cursor=pointer]:
            - /url: https://code5.mimadigi.vn/2026/august/trancongvinh_111726W/upload/news/rectangle-34-3264.png
            - img "Dịch vụ thiết kế 1" [ref=e81]
        - listitem [ref=e82]:
          - link "Dịch vụ thiết kế 1" [ref=e83] [cursor=pointer]:
            - /url: https://code5.mimadigi.vn/2026/august/trancongvinh_111726W/upload/news/rectangle-35-5930.png
            - img "Dịch vụ thiết kế 1" [ref=e84]
        - listitem [ref=e85]:
          - link "Dịch vụ thiết kế 1" [ref=e86] [cursor=pointer]:
            - /url: https://code5.mimadigi.vn/2026/august/trancongvinh_111726W/upload/news/rectangle-478-6013.png
            - img "Dịch vụ thiết kế 1" [ref=e87]
        - listitem [ref=e88]:
          - link "Dịch vụ thiết kế 1" [ref=e89] [cursor=pointer]:
            - /url: https://code5.mimadigi.vn/2026/august/trancongvinh_111726W/upload/news/rectangle-966-7554.png
            - img "Dịch vụ thiết kế 1" [ref=e90]
        - listitem [ref=e91]:
          - link "Dịch vụ thiết kế 1" [ref=e92] [cursor=pointer]:
            - /url: https://code5.mimadigi.vn/2026/august/trancongvinh_111726W/upload/news/rectangle-967-2141.png
            - img "Dịch vụ thiết kế 1" [ref=e93]
        - listitem [ref=e94]:
          - link "Dịch vụ thiết kế 1" [ref=e95] [cursor=pointer]:
            - /url: https://code5.mimadigi.vn/2026/august/trancongvinh_111726W/upload/news/rectangle-972-8123.png
            - img "Dịch vụ thiết kế 1" [ref=e96]
        - listitem [ref=e97]:
          - link "Dịch vụ thiết kế 1" [ref=e98] [cursor=pointer]:
            - /url: https://code5.mimadigi.vn/2026/august/trancongvinh_111726W/upload/news/rectangle-17-5521.png
            - img "Dịch vụ thiết kế 1" [ref=e99]
        - listitem [ref=e100]:
          - link "Dịch vụ thiết kế 1" [ref=e101] [cursor=pointer]:
            - /url: https://code5.mimadigi.vn/2026/august/trancongvinh_111726W/upload/news/rectangle-14-8967.png
            - img "Dịch vụ thiết kế 1" [ref=e102]
      - generic [ref=e103]:
        - paragraph [ref=e104]: Top 5 Phòng Trà Ca Nhạc Hà Nội/TP.HCM Ấm Cúng Cho Đêm Hẹn Hò [Năm 2026]
        - paragraph [ref=e105]:
          - strong [ref=e106]: Phòng trà ca nhạc
          - text: đang là điểm đến văn hóa lý tưởng cho những ai muốn rời xa sự ồn ào của phố thị để đắm mình vào không gian âm nhạc sống động, mộc mạc và đầy cảm xúc. Nếu bạn đang tìm kiếm một không gian
          - strong [ref=e107]: phòng trà ấm cúng
          - text: ", sở hữu dàn âm thanh đỉnh cao cùng sự góp mặt của các ca sĩ nổi tiếng, hãy khám phá ngay dự án không gian âm nhạc đặc biệt dưới đây."
        - paragraph
        - separator [ref=e108]
        - paragraph
        - paragraph [ref=e109]: 1. Xu hướng giải trí tại phòng trà ca nhạc hiện nay
        - paragraph [ref=e110]: "Sau những giờ làm việc căng thẳng, việc lựa chọn một góc nhỏ yên bình để thưởng thức một ly cocktail, tách trà ấm và lắng nghe những bản tình ca bất hủ là xu hướng của nhiều thế hệ. Không giống như các quán bar sôi động hay quán cà phê náo nhiệt, phòng trà mang đến:"
        - list [ref=e111]:
          - listitem [ref=e112]:
            - strong [ref=e113]: "Không gian kết nối:"
            - text: Nơi khán giả và nghệ sĩ xóa nhòa khoảng cách, dễ dàng tương tác và chia sẻ câu chuyện qua từng bài hát.
          - listitem [ref=e114]:
            - strong [ref=e115]: "Âm nhạc nguyên bản (Live Music):"
            - text: Thưởng thức giọng ca thực lực của ca sĩ kết hợp cùng ban nhạc acoustic live 100%.
          - listitem [ref=e116]:
            - strong [ref=e117]: "Sự thư giãn tuyệt đối:"
            - text: Ánh đèn vàng dịu nhẹ cùng hương tinh dầu tự nhiên giúp xoa dịu tinh thần hiệu quả.
        - paragraph
        - separator [ref=e118]
        - paragraph
        - paragraph [ref=e119]: 2. Điểm tên những dự án phòng trà được yêu thích nhất
        - paragraph [ref=e120]: "Để giúp bạn dễ dàng lựa chọn điểm dừng chân cho buổi tối cuối tuần, dưới đây là bảng so sánh các mô hình phòng trà phổ biến hiện nay:"
        - paragraph
        - table [ref=e121]:
          - rowgroup [ref=e122]:
            - row "Tiêu chí Phòng trà Trữ tình / Bolero Phòng trà Acoustic Hiện đại Phòng trà Đa năng (Concept mới)" [ref=e123]:
              - columnheader "Tiêu chí" [ref=e124]
              - columnheader "Phòng trà Trữ tình / Bolero" [ref=e125]
              - columnheader "Phòng trà Acoustic Hiện đại" [ref=e126]
              - columnheader "Phòng trà Đa năng (Concept mới)" [ref=e127]
            - row "Dòng nhạc chính Nhạc vàng, Nhạc Trịnh, tiền chiến Pop Ballad, Indie, nhạc trẻ Cover Đa dạng theo chủ đề (Jazz, Rock, Pop)" [ref=e128]:
              - cell "Dòng nhạc chính" [ref=e129]:
                - strong [ref=e130]: Dòng nhạc chính
              - cell "Nhạc vàng, Nhạc Trịnh, tiền chiến" [ref=e131]
              - cell "Pop Ballad, Indie, nhạc trẻ Cover" [ref=e132]
              - cell "Đa dạng theo chủ đề (Jazz, Rock, Pop)" [ref=e133]
            - row "Đối tượng khách Trung niên, người mê hoài niệm Giới trẻ, nhân viên văn phòng Mọi đối tượng, khách du lịch" [ref=e134]:
              - cell "Đối tượng khách" [ref=e135]:
                - strong [ref=e136]: Đối tượng khách
              - cell "Trung niên, người mê hoài niệm" [ref=e137]
              - cell "Giới trẻ, nhân viên văn phòng" [ref=e138]
              - cell "Mọi đối tượng, khách du lịch" [ref=e139]
            - row "Không gian Cổ điển, trầm mặc, hoài cổ Hiện đại, tối giản, trẻ trung Sáng tạo, thay đổi linh hoạt theo show" [ref=e140]:
              - cell "Không gian" [ref=e141]:
                - strong [ref=e142]: Không gian
              - cell "Cổ điển, trầm mặc, hoài cổ" [ref=e143]
              - cell "Hiện đại, tối giản, trẻ trung" [ref=e144]
              - cell "Sáng tạo, thay đổi linh hoạt theo show" [ref=e145]
            - row "Chi phí (ước tính) 300.000đ - 1.000.000đ (Tùy ca sĩ) 150.000đ - 400.000đ 200.000đ - 600.000đ" [ref=e146]:
              - cell "Chi phí (ước tính)" [ref=e147]:
                - strong [ref=e148]: Chi phí (ước tính)
              - cell "300.000đ - 1.000.000đ (Tùy ca sĩ)" [ref=e149]
              - cell "150.000đ - 400.000đ" [ref=e150]
              - cell "200.000đ - 600.000đ" [ref=e151]
        - paragraph
        - paragraph
        - separator [ref=e152]
        - paragraph
        - paragraph [ref=e153]: 3. Dự án phòng trà [Tên Phòng Trà Của Bạn] – Đêm nhạc chạm cảm xúc
        - paragraph [ref=e154]:
          - text: Nếu bạn muốn tìm kiếm một trải nghiệm hoàn toàn mới,
          - strong [ref=e155]: "[Tên Phòng Trà Của Bạn]"
          - text: "chính là câu trả lời hoàn hảo. Được thiết kế với định vị trở thành \"Thánh đường âm nhạc thu nhỏ\", dự án của chúng tôi sở hữu những điểm cộng vượt trội:"
        - paragraph
        - paragraph [ref=e156]: 🎼 Hệ thống âm thanh độc quyền
        - paragraph [ref=e157]: Chúng tôi đầu tư dàn loa và thiết bị xử lý âm thanh chuẩn quốc tế. Đảm bảo dù bạn ngồi ở hàng ghế đầu hay góc khuất, âm thanh truyền đến tai vẫn tròn trịa, mịn màng và không bị chói tai.
        - paragraph
        - paragraph [ref=e158]: 🎤 Lịch diễn đa dạng với dàn Line-up chất lượng
        - paragraph [ref=e159]:
          - text: Từ những ngôi sao hạng A đình đám đến các nghệ sĩ Indie tài năng,
          - strong [ref=e160]: "[Tên Phòng Trà Của Bạn]"
          - text: mang đến hơi thở âm nhạc đa màu sắc vào mỗi tối thứ 6, thứ 7 và Chủ Nhật hàng tuần.
        - paragraph
        - paragraph [ref=e161]: 🍹 Menu đồ uống và dịch vụ tinh tế
        - paragraph [ref=e162]: Bên cạnh âm nhạc, thực khách sẽ được thưởng thức menu đồ uống signature được pha chế cầu kỳ cùng các món ăn nhẹ dưỡng nhan, lành mạnh. Đội ngũ nhân viên phục vụ nhẹ nhàng, tinh tế, tôn trọng không gian riêng tư của khách hàng.
        - paragraph
        - separator [ref=e163]
        - paragraph
        - paragraph [ref=e164]: 4. Hướng dẫn đặt chỗ tại [Tên Phòng Trà Của Bạn] để có vị trí đẹp
        - paragraph [ref=e165]: "Các đêm nhạc có sự góp mặt của ca sĩ nổi tiếng thường hết chỗ (sold out) rất nhanh. Bạn nên bỏ túi các lưu ý sau:"
        - list [ref=e166]:
          - listitem [ref=e167]:
            - strong [ref=e168]: "Theo dõi Fanpage:"
            - text: Cập nhật lịch diễn (Line-up) được công bố vào đầu tuần.
          - listitem [ref=e169]:
            - strong [ref=e170]: "Đặt vé sớm:"
            - text: Liên hệ hotline hoặc website trước 3-5 ngày để chọn được vị trí gần sân khấu.
          - listitem [ref=e171]:
            - strong [ref=e172]: "Đến sớm 15 phút:"
            - text: Giúp bạn ổn định chỗ ngồi, gọi nước và không bỏ lỡ phần mở màn của ban nhạc.
        - paragraph
        - separator [ref=e173]
        - paragraph [ref=e174]:
          - strong [ref=e175]: "Thông tin liên hệ:"
        - list [ref=e176]:
          - listitem [ref=e177]:
            - text: 📍
            - strong [ref=e178]: "Địa chỉ:"
            - text: "[Số nhà, Đường, Quận, Thành phố]"
          - listitem [ref=e179]:
            - text: 📞
            - strong [ref=e180]: "Hotline đặt bàn:"
            - text: "[Số điện thoại]"
          - listitem [ref=e181]:
            - text: 🌐
            - strong [ref=e182]: "Website:"
            - text: "[Đường link website của bạn]"
          - listitem [ref=e183]:
            - text: 💬
            - strong [ref=e184]: "Fanpage:"
            - text: "[Tên Fanpage]"
        - paragraph
        - separator [ref=e185]
        - link "Xem thêm bài viết" [ref=e188] [cursor=pointer]:
          - /url: javascript:;
          - img [ref=e190]
          - generic [ref=e193]: Xem thêm bài viết
      - generic [ref=e195]:
        - generic [ref=e197]: Dịch vụ thiết kế 1
        - generic [ref=e200]:
          - generic [ref=e202]:
            - paragraph [ref=e203]:
              - link "Dịch vụ thiết kế 2" [ref=e204] [cursor=pointer]:
                - /url: dich-vu-thiet-ke-2
                - img "Dịch vụ thiết kế 2" [ref=e205]
            - heading "Dịch vụ thiết kế 2" [level=3] [ref=e207]:
              - link "Dịch vụ thiết kế 2" [ref=e208] [cursor=pointer]:
                - /url: dich-vu-thiet-ke-2
          - generic [ref=e210]:
            - paragraph [ref=e211]:
              - link "Dịch vụ thiết kế 3" [ref=e212] [cursor=pointer]:
                - /url: dich-vu-thiet-ke-3
                - img "Dịch vụ thiết kế 3" [ref=e213]
            - heading "Dịch vụ thiết kế 3" [level=3] [ref=e215]:
              - link "Dịch vụ thiết kế 3" [ref=e216] [cursor=pointer]:
                - /url: dich-vu-thiet-ke-3
          - generic [ref=e218]:
            - paragraph [ref=e219]:
              - link "Dịch vụ thiết kế 4" [ref=e220] [cursor=pointer]:
                - /url: dich-vu-thiet-ke-4
                - img "Dịch vụ thiết kế 4" [ref=e221]
            - heading "Dịch vụ thiết kế 4" [level=3] [ref=e223]:
              - link "Dịch vụ thiết kế 4" [ref=e224] [cursor=pointer]:
                - /url: dich-vu-thiet-ke-4
          - generic [ref=e226]:
            - paragraph [ref=e227]:
              - link "Dịch vụ thiết kế 5" [ref=e228] [cursor=pointer]:
                - /url: dich-vu-thiet-ke-5
                - img "Dịch vụ thiết kế 5" [ref=e229]
            - heading "Dịch vụ thiết kế 5" [level=3] [ref=e231]:
              - link "Dịch vụ thiết kế 5" [ref=e232] [cursor=pointer]:
                - /url: dich-vu-thiet-ke-5
          - generic [ref=e234]:
            - paragraph [ref=e235]:
              - link "Dịch vụ thiết kế 6" [ref=e236] [cursor=pointer]:
                - /url: dich-vu-thiet-ke-6
                - img "Dịch vụ thiết kế 6" [ref=e237]
            - heading "Dịch vụ thiết kế 6" [level=3] [ref=e239]:
              - link "Dịch vụ thiết kế 6" [ref=e240] [cursor=pointer]:
                - /url: dich-vu-thiet-ke-6
          - generic [ref=e242]:
            - paragraph [ref=e243]:
              - link "Dịch vụ thiết kế 7" [ref=e244] [cursor=pointer]:
                - /url: dich-vu-thiet-ke-7
                - img "Dịch vụ thiết kế 7" [ref=e245]
            - heading "Dịch vụ thiết kế 7" [level=3] [ref=e247]:
              - link "Dịch vụ thiết kế 7" [ref=e248] [cursor=pointer]:
                - /url: dich-vu-thiet-ke-7
          - generic [ref=e250]:
            - paragraph [ref=e251]:
              - link "Dịch vụ thiết kế 8" [ref=e252] [cursor=pointer]:
                - /url: dich-vu-thiet-ke-8
                - img "Dịch vụ thiết kế 8" [ref=e253]
            - heading "Dịch vụ thiết kế 8" [level=3] [ref=e255]:
              - link "Dịch vụ thiết kế 8" [ref=e256] [cursor=pointer]:
                - /url: dich-vu-thiet-ke-8
          - generic [ref=e258]:
            - paragraph [ref=e259]:
              - link "Dịch vụ thiết kế 9" [ref=e260] [cursor=pointer]:
                - /url: dich-vu-thiet-ke-9
                - img "Dịch vụ thiết kế 9" [ref=e261]
            - heading "Dịch vụ thiết kế 9" [level=3] [ref=e263]:
              - link "Dịch vụ thiết kế 9" [ref=e264] [cursor=pointer]:
                - /url: dich-vu-thiet-ke-9
          - generic [ref=e266]:
            - paragraph [ref=e267]:
              - link "Dịch vụ thiết kế 10" [ref=e268] [cursor=pointer]:
                - /url: dich-vu-thiet-ke-10
                - img "Dịch vụ thiết kế 10" [ref=e269]
            - heading "Dịch vụ thiết kế 10" [level=3] [ref=e271]:
              - link "Dịch vụ thiết kế 10" [ref=e272] [cursor=pointer]:
                - /url: dich-vu-thiet-ke-10
          - generic [ref=e274]:
            - paragraph [ref=e275]:
              - link "Dịch vụ thiết kế 11" [ref=e276] [cursor=pointer]:
                - /url: dich-vu-thiet-ke-11
            - heading "Dịch vụ thiết kế 11" [level=3] [ref=e278]:
              - link "Dịch vụ thiết kế 11" [ref=e279] [cursor=pointer]:
                - /url: dich-vu-thiet-ke-11
        - generic:
          - button [ref=e280] [cursor=pointer]:
            - img [ref=e281]
          - button [ref=e284] [cursor=pointer]:
            - img [ref=e285]
    - generic [ref=e288]:
      - generic [ref=e290]:
        - link "Viên Mộc Decor - Thiết Kế Bàn Trà Đạo" [ref=e292] [cursor=pointer]:
          - /url: https://code5.mimadigi.vn/2026/august/trancongvinh_111726W/
          - img "Viên Mộc Decor - Thiết Kế Bàn Trà Đạo" [ref=e293]
        - generic [ref=e294]:
          - generic [ref=e295]:
            - generic [ref=e296]: Thông tin liên hệ
            - generic [ref=e297]:
              - paragraph [ref=e298]:
                - strong [ref=e299]: VIÊN MỘC DECOR
              - paragraph [ref=e300]:
                - strong [ref=e301]: 298 Bà Điểm 4, Ấp Tiền Lân, xã Bà Điểm, TPHCM
              - paragraph [ref=e302]:
                - strong [ref=e303]: "Hotline: 0938 830 339"
              - paragraph [ref=e304]:
                - strong [ref=e305]: "Zalo:"
                - link "0902 555 933" [ref=e306] [cursor=pointer]:
                  - /url: https://zalo.me/0902555933
              - paragraph [ref=e307]:
                - strong [ref=e308]: "Email:"
                - link "vienmoc79@gmail.com" [ref=e309] [cursor=pointer]:
                  - /url: http://vienmoc79@gmail.com
              - paragraph [ref=e310]:
                - strong [ref=e311]: "Website:"
                - link "www.xuonggonoithatsaigon.com" [ref=e312] [cursor=pointer]:
                  - /url: http://www.xuonggonoithatsaigon.com
            - generic [ref=e313]: Mạng xã hội
            - generic [ref=e314]:
              - link "Facebook" [ref=e315] [cursor=pointer]:
                - /url: https://www.facebook.com/xuonggoluasaigon?locale=vi_VN
                - img "Facebook" [ref=e316]
              - link "Message" [ref=e317] [cursor=pointer]:
                - /url: https://www.facebook.com/xuonggoluasaigon?locale=vi_VN
                - img "Message" [ref=e318]
              - link "Instargam" [ref=e319] [cursor=pointer]:
                - /url: ""
                - img "Instargam" [ref=e320]
              - link "Tiktok" [ref=e321] [cursor=pointer]:
                - /url: https://www.tiktok.com/@thietkedecorbantradao?lang=hu-HU
                - img "Tiktok" [ref=e322]
              - link "Youtobe" [ref=e323] [cursor=pointer]:
                - /url: ""
                - img "Youtobe" [ref=e324]
          - generic [ref=e326]:
            - generic [ref=e327]:
              - generic [ref=e328]: Truy cập nhanh
              - list [ref=e329]:
                - listitem [ref=e330]:
                  - link "Trang chủ" [ref=e331] [cursor=pointer]:
                    - /url: ""
                - listitem [ref=e332]:
                  - link "Về viên mộc" [ref=e333] [cursor=pointer]:
                    - /url: ve-vien-moc
                - listitem [ref=e334]:
                  - link "Dịch vụ" [ref=e335] [cursor=pointer]:
                    - /url: dich-vu
                - listitem [ref=e336]:
                  - link "Tin tức" [ref=e337] [cursor=pointer]:
                    - /url: tin-tuc
                - listitem [ref=e338]:
                  - link "Liên hệ" [ref=e339] [cursor=pointer]:
                    - /url: lien-he
            - generic [ref=e340]:
              - generic [ref=e341]: Sản phẩm
              - list [ref=e342]:
                - listitem [ref=e343]:
                  - link "Bàn trà đạo" [ref=e344] [cursor=pointer]:
                    - /url: ban-tra-dao
                - listitem [ref=e345]:
                  - link "Bàn trà thủy sinh" [ref=e346] [cursor=pointer]:
                    - /url: ban-tra-thuy-sinh
                - listitem [ref=e347]:
                  - link "Bàn trà phong thủy" [ref=e348] [cursor=pointer]:
                    - /url: ban-tra-phong-thuy
            - generic [ref=e349]:
              - generic [ref=e350]: Dịch vụ
              - list [ref=e351]:
                - listitem [ref=e352]:
                  - link "Thi công cảnh quan sân vườn" [ref=e353] [cursor=pointer]:
                    - /url: canh-quan-san-vuon
                - listitem [ref=e354]:
                  - link "Thiết kế phòng trà đạo" [ref=e355] [cursor=pointer]:
                    - /url: thiet-ke-phong-tra-dao
                - listitem [ref=e356]:
                  - link "Thi công & Chế tác mộc" [ref=e357] [cursor=pointer]:
                    - /url: thi-cong-che-tac-moc
      - generic [ref=e361]:
        - text: Copyright ©2026 Viên Mộc. All Right Reserved.
        - generic [ref=e362]: Thiết kế web MIMA
    - generic [ref=e363]:
      - 'link "Call me: 0938830339" [ref=e364] [cursor=pointer]':
        - /url: tel:0938830339
        - img [ref=e368]
        - generic [ref=e371]: "Call me: 0938830339"
      - 'link "Zalo: 0902555933" [ref=e372] [cursor=pointer]':
        - /url: https://zalo.me/0902555933
        - img [ref=e376]
        - generic [ref=e377]: "Zalo: 0902555933"
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
          - strong: Dịch vụ thiết kế 1
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e378]:
      - generic [ref=e379]: "❌ Chi tiết lỗi cần khắc phục (1/15):"
      - generic [ref=e380]:
        - generic [ref=e381]:
          - generic [ref=e382]: 6. Liên kết (Links)
          - generic [ref=e383]: 1 lỗi
        - generic [ref=e384]:
          - strong [ref=e386]: "Không có broken links (lỗi: 3/50)"
          - generic [ref=e387]: "⚠️ Broken links: test-dich-vu-cap-1-1787104334878 (status: 404), http://vienmoc79@gmail.com (status: 0), http://www.xuonggonoithatsaigon.com (status: 0)"
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