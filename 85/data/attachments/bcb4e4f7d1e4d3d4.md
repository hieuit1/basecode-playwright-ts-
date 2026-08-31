# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Xử lý chất thải rắn công nghiệp (/xu-ly-chat-thai-ran-cong-nghiep-1)
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
      - generic [ref=e8]:
        - link "CÔNG TY PHẾ LIỆU LỘC PHÁT TÀI" [ref=e9] [cursor=pointer]:
          - /url: https://code4.mimadigi.vn/2026/august/vutienngoc_112226W/
          - img "CÔNG TY PHẾ LIỆU LỘC PHÁT TÀI" [ref=e10]
        - link "Công ty phế liệu Lộc Phát Tài" [ref=e11] [cursor=pointer]:
          - /url: https://code4.mimadigi.vn/2026/august/vutienngoc_112226W/
          - generic [ref=e12]: Công ty phế liệu
          - generic [ref=e13]: Lộc Phát Tài
      - list [ref=e15]:
        - listitem [ref=e16]:
          - link "Trang Chủ" [ref=e17] [cursor=pointer]:
            - /url: https://code4.mimadigi.vn/2026/august/vutienngoc_112226W/
        - listitem [ref=e18]:
          - link "Giới Thiệu" [ref=e19] [cursor=pointer]:
            - /url: gioi-thieu
        - listitem [ref=e20]:
          - link "Dịch Vụ Thu Mua Phế Liệu" [ref=e21] [cursor=pointer]:
            - /url: dich-vu
            - text: Dịch Vụ Thu Mua Phế Liệu
            - img [ref=e22]
        - listitem [ref=e24]:
          - link "Tin Tức" [ref=e25] [cursor=pointer]:
            - /url: tin-tuc
        - listitem [ref=e26]:
          - link "Liên Hệ" [ref=e27] [cursor=pointer]:
            - /url: lien-he
      - generic [ref=e29]:
        - img [ref=e31]
        - generic [ref=e36]:
          - generic [ref=e37]: Hotline
          - link "0983627556" [ref=e38] [cursor=pointer]:
            - /url: tel:0983627556
    - list [ref=e41]:
      - listitem [ref=e42]:
        - link "Trang chủ" [ref=e43] [cursor=pointer]:
          - /url: https://code4.mimadigi.vn/2026/august/vutienngoc_112226W/
          - img [ref=e44]
          - generic [ref=e46]: Trang chủ
      - listitem [ref=e47]:
        - text: /
        - link "Tin tức" [ref=e48] [cursor=pointer]:
          - /url: https://code4.mimadigi.vn/2026/august/vutienngoc_112226W/tin-tuc
      - listitem [ref=e49]:
        - text: /
        - link "Xử lý chất thải rắn công nghiệp" [ref=e50] [cursor=pointer]:
          - /url: https://code4.mimadigi.vn/2026/august/vutienngoc_112226W/xu-ly-chat-thai-ran-cong-nghiep-1
    - generic [ref=e54]:
      - generic [ref=e55]:
        - heading "Xử lý chất thải rắn công nghiệp" [level=1] [ref=e57]
        - generic [ref=e58]:
          - generic [ref=e60]: 3 Lượt xem
          - generic [ref=e62]: "Ngày đăng: 30/08/2026"
        - generic [ref=e64]:
          - generic [ref=e65] [cursor=pointer]: Mục lục
          - text: ▾
        - generic [ref=e68]:
          - heading "Xử lý chất thải rắn công nghiệp" [level=2] [ref=e69]
          - paragraph [ref=e70]:
            - text: Mỗi mét vuông nhà xưởng cũ hay mỗi tấn phế liệu kim loại bị bỏ lại không chỉ là một bài toán chi phí mà còn là cơ hội để chúng ta định hình lại tương lai của môi trường. Hành trình xanh hóa nền sản xuất hiện đại bắt đầu từ những hành động thực tế nhất, nơi mà việc
            - link "Xử lý chất thải rắn công nghiệp" [ref=e71] [cursor=pointer]:
              - /url: https://code4.mimadigi.vn/2026/august/vutienngoc_112226W/xu-ly-chat-thai-ran-cong-nghiep
            - text: không đơn thuần là dọn dẹp, mà là một cuộc hồi sinh cho nguồn tài nguyên quý giá. Bằng cách thay đổi góc nhìn, biến những khối sắt vụn, máy móc rệu rã thành động lực cho nền kinh tế tuần hoàn, chúng ta đang cùng nhau tạo dựng một nền công nghiệp sạch và bền vững hơn.
          - heading "Bản đồ tài nguyên ẩn giấu dưới lớp bụi nhà xưởng" [level=2] [ref=e72]
          - paragraph [ref=e73]: Khi bước vào một khu nhà xưởng cũ chuẩn bị giải phóng mặt bằng, nhiều người chỉ thấy sự hoang tàn, những đống đổ nát và bụi bặm. Nhưng với những người làm trong ngành môi trường, đó là một mỏ tài nguyên khổng lồ đang chờ được khai phá. Những bộ khung nhà xưởng bằng thép, những đường ống đồng gỉ sét, hay hệ thống máy móc cũ kỹ lỗi thời đều mang trong mình một vòng đời mới đầy hứa hẹn.
          - paragraph [ref=e74]:
            - img "Xử lý chất thải rắn công nghiệp" [ref=e75]
          - paragraph [ref=e76]: Nếu bị bỏ quên hoặc chôn lấp sai cách, chúng nhanh chóng trở thành tác nhân gây ô nhiễm nghiêm trọng. Dầu máy rò rỉ thấm vào lòng đất, kim loại nặng bị oxy hóa theo nước mưa ngấm vào nguồn nước ngầm, gây ra những hệ lụy khôn lường cho sức khỏe cộng đồng. Ngược lại, khi được phân loại và thu hồi đúng quy chuẩn, phế liệu kim loại trở thành nguyên liệu đầu vào chất lượng cao cho ngành luyện kim. Phương thức này giúp cắt giảm hàng triệu tấn khí thải carbon so với việc khai thác quặng mỏ tự nhiên. Việc tái chế cứu rỗi môi trường, đồng thời đem lại giá trị kinh tế trực tiếp cho doanh nghiệp thông qua các hoạt động thanh lý.
          - 'heading "Giải pháp tuần hoàn: Khơi thông dòng chảy của phế liệu" [level=2] [ref=e77]'
          - paragraph [ref=e78]: Để giải quyết triệt để bài toán rác thải tại các khu sản xuất, cần có một quy trình phối hợp nhịp nhàng giữa nhiều dịch vụ chuyên nghiệp. Từ khâu thu mua phế liệu, tháo dỡ máy móc cho đến dọn dẹp mặt bằng, tất cả phải được vận hành như một chuỗi mắt xích khép kín, an toàn và tối ưu.
          - heading "Thu mua máy móc cũ và phế liệu kim loại" [level=3] [ref=e79]
          - paragraph [ref=e80]: Những dây chuyền sản xuất sau nhiều năm cống hiến đã đến lúc cần được thay thế để nhường chỗ cho công nghệ mới. Việc giữ lại những cỗ máy cồng kềnh, hoạt động kém hiệu quả chỉ làm lãng phí không gian nhà xưởng và tiêu tốn năng lượng vận hành. Dịch vụ thu mua máy móc cũ giúp doanh nghiệp nhanh chóng giải phóng mặt bằng, thu hồi một phần vốn đáng kể để tái đầu tư vào hệ thống máy móc hiện đại, tiết kiệm điện năng hơn.
          - paragraph [ref=e81]: Bên cạnh đó, các loại phế liệu kim loại như sắt, đồng, nhôm, inox phát sinh trong quá trình sản xuất hàng ngày cũng cần được gom tụ và xử lý liên tục. Việc tích trữ phế liệu quá lâu không chỉ làm giảm giá trị của vật liệu do tác động của thời tiết mà còn làm tăng nguy cơ cháy nổ, mất an toàn lao động tại khu vực sản xuất.
          - heading "Thanh lý nhà xưởng toàn diện" [level=3] [ref=e82]
          - paragraph [ref=e83]: Khi một dự án kết thúc hoặc doanh nghiệp có nhu cầu dịch chuyển cơ cấu, việc thanh lý nhà xưởng quy mô lớn là một thử thách thực sự. Quá trình này đòi hỏi năng lực tháo dỡ an toàn, trang thiết bị chuyên dụng và đội ngũ nhân sự giàu kinh nghiệm thực tế. Thay vì tự loay hoay với hàng trăm tấn xà bần, sắt thép và rác thải hỗn hợp, việc hợp tác với đơn vị chuyên nghiệp đảm bảo toàn bộ công trình được hạ giải an toàn, đúng tiến độ và tối ưu hóa giá trị thu hồi từ phế liệu xây dựng.
          - heading "Quy trình xử lý chất thải rắn công nghiệp an toàn và bền vững" [level=2] [ref=e84]:
            - link "Quy trình xử lý chất thải rắn công nghiệp an toàn và bền vững" [ref=e85] [cursor=pointer]:
              - /url: https://code4.mimadigi.vn/2026/august/vutienngoc_112226W/tin-tuc
          - paragraph [ref=e86]: "Một quy trình chuẩn hóa không chỉ bảo vệ môi trường mà còn tối đa hóa lợi ích cho doanh nghiệp. Các bước thực hiện cần được giám sát chặt chẽ từ đầu đến cuối:"
          - list [ref=e87]:
            - listitem [ref=e88]:
              - strong [ref=e89]: "Khảo sát và phân loại tại nguồn:"
              - text: Đây là bước then chốt nhằm tách biệt rõ ràng các nhóm phế liệu có thể tái chế (như kim loại, nhựa, giấy) và nhóm chất thải nguy hại cần xử lý đặc biệt (như pin, linh kiện điện tử, dầu mỡ công nghiệp).
            - listitem [ref=e90]:
              - strong [ref=e91]: "Thu gom và vận chuyển chuyên dụng:"
              - text: Sử dụng các phương tiện vận chuyển được cấp phép, đảm bảo không rò rỉ chất thải hay phát tán bụi mịn ra môi trường xung quanh trong suốt quá trình di chuyển.
            - listitem [ref=e92]:
              - strong [ref=e93]: "Tái chế và xử lý triệt để:"
              - text: Phế liệu kim loại và máy móc cũ được đưa vào dây chuyền tái chế để tạo ra phôi nguyên liệu mới. Những phần chất thải không thể tái chế sẽ được xử lý bằng các công nghệ tiên tiến như thiêu đốt phát điện hoặc hóa rắn an toàn.
            - listitem [ref=e94]:
              - strong [ref=e95]: "Xử lý vệ sinh khu công nghiệp, nhà xưởng:"
              - text: Sau khi di dời rác thải, toàn bộ mặt bằng được phun rửa, xử lý hóa chất tồn dư để trả lại môi trường sạch sẽ, sẵn sàng cho các hoạt động sản xuất tiếp theo.
          - heading "Chọn Lộc Phát Tài – Chọn giải pháp bền vững cho tương lai" [level=2] [ref=e96]:
            - link "Chọn Lộc Phát Tài – Chọn giải pháp bền vững cho tương lai" [ref=e97] [cursor=pointer]:
              - /url: https://code4.mimadigi.vn/2026/august/vutienngoc_112226W/tin-tuc
          - paragraph [ref=e98]: Thấu hiểu những trăn trở của doanh nghiệp trong việc giải quyết bài toán rác thải và mặt bằng, Công ty Phế liệu Lộc Phát Tài tự hào là người bạn đồng hành tin cậy trên mọi nẻo đường phát triển. Chúng tôi không chỉ dừng lại ở việc thu mua phế liệu thông thường mà hướng tới việc cung cấp các giải pháp môi trường toàn diện và bền vững.
          - paragraph [ref=e99]:
            - img "Xử lý chất thải rắn công nghiệp" [ref=e100]
          - paragraph [ref=e101]: Với hệ thống trang thiết bị hiện đại, đội ngũ nhân viên lành nghề và quy trình làm việc chuẩn hóa, Lộc Phát Tài cam kết mang lại dịch vụ tối ưu từ khâu tháo dỡ, thu mua đến dọn dẹp vệ sinh mặt bằng. Chúng tôi tin rằng, mỗi hành động nhỏ trong việc xử lý rác thải đúng cách hôm nay chính là viên gạch nền móng xây dựng nên một tương lai xanh, thịnh vượng và bền vững cho thế hệ mai sau.
          - paragraph [ref=e102]: Hãy cùng Lộc Phát Tài biến những gánh nặng chất thải thành nguồn tài nguyên quý giá, thúc đẩy sự phát triển xanh cho doanh nghiệp của bạn ngay hôm nay.
          - paragraph [ref=e103]:
            - strong [ref=e104]: CÔNG TY PHẾ LIỆU LỘC PHÁT TÀI
            - text: "Địa chỉ: Ngã Tư DJ5 NJ17, khu công nghiệp, Thới Hòa, Hồ Chí Minh, Việt Nam"
            - text: "Hotline: 0983627556"
            - text: "Điện thoại: 0983627556"
            - text: "Email: ngoc0971844898a@gmail.com"
      - generic [ref=e106]:
        - heading "Bài viết khác" [level=2] [ref=e108]
        - generic [ref=e109]:
          - generic [ref=e111]:
            - paragraph [ref=e112]:
              - link "Thu mua nhôm số lượng lớn" [ref=e113] [cursor=pointer]:
                - /url: thu-mua-nhom-so-luong-lon
                - img "Thu mua nhôm số lượng lớn" [ref=e114]
            - generic [ref=e115]:
              - heading "Thu mua nhôm số lượng lớn" [level=3] [ref=e116]:
                - link "Thu mua nhôm số lượng lớn" [ref=e117] [cursor=pointer]:
                  - /url: thu-mua-nhom-so-luong-lon
              - paragraph [ref=e118]: Doanh nghiệp của bạn đang tồn đọng số lượng lớn nhôm phế liệu sau các dự án xây dựng, chế tạo máy hoặc nâng cấp hệ thống nhà xưởng? Việc lưu kho bãi quá lâu không chỉ lãng phí không gian diện tích mà còn làm hao hụt giá trị kinh tế của vật liệu theo thời gian.
              - link "Xem thêm" [ref=e119] [cursor=pointer]:
                - /url: thu-mua-nhom-so-luong-lon
                - text: Xem thêm
          - generic [ref=e122]:
            - paragraph [ref=e123]:
              - link "Thu mua nhôm công nghiệp" [ref=e124] [cursor=pointer]:
                - /url: thu-mua-nhom-cong-nghiep
                - img "Thu mua nhôm công nghiệp" [ref=e125]
            - generic [ref=e126]:
              - heading "Thu mua nhôm công nghiệp" [level=3] [ref=e127]:
                - link "Thu mua nhôm công nghiệp" [ref=e128] [cursor=pointer]:
                  - /url: thu-mua-nhom-cong-nghiep
              - paragraph [ref=e129]: Những thanh nhôm định hình, những tấm vỏ máy hay dầm kèo nhà xưởng sau khi hoàn thành sứ mệnh của mình thường bị coi là phế thải nằm im lìm nơi góc tối. Thế nhưng, tại các nhà máy và công trình, hành trình của chúng chưa hề kết thúc.
              - link "Xem thêm" [ref=e130] [cursor=pointer]:
                - /url: thu-mua-nhom-cong-nghiep
                - text: Xem thêm
          - generic [ref=e132]:
            - generic:
              - paragraph:
                - link "Thu mua nhôm phế liệu giá cao":
                  - /url: thu-mua-nhom-phe-lieu-gia-cao
                  - img "Thu mua nhôm phế liệu giá cao"
              - generic:
                - heading "Thu mua nhôm phế liệu giá cao" [level=3]:
                  - link "Thu mua nhôm phế liệu giá cao":
                    - /url: thu-mua-nhom-phe-lieu-gia-cao
                - paragraph: Mỗi mảnh nhôm cũ, từ thanh cửa hỏng đến những chi tiết máy móc rỉ sét xưởng cơ khí thải ra, không bao giờ là điểm cuối của một vòng đời. Chúng là khởi đầu cho một hành trình tái sinh kỳ diệu.
                - link "Xem thêm":
                  - /url: thu-mua-nhom-phe-lieu-gia-cao
                  - text: Xem thêm
          - generic [ref=e133]:
            - generic:
              - paragraph:
                - link "Công ty thu mua đồng":
                  - /url: cong-ty-thu-mua-dong
              - generic:
                - heading "Công ty thu mua đồng" [level=3]:
                  - link "Công ty thu mua đồng":
                    - /url: cong-ty-thu-mua-dong
                - paragraph: Trong hoạt động sản xuất công nghiệp và xây dựng, phế liệu đồng luôn được định giá rất cao nhờ khả năng tái chế vượt trội mà không bị suy giảm đặc tính vật lý. Việc tìm kiếm một Công ty thu mua đồng uy tín không chỉ giúp doanh nghiệp tối ưu hóa nguồn thu từ phế thải mà còn giải phóng mặt bằng nhanh chóng, đảm bảo an toàn vệ sinh môi trường.
                - link "Xem thêm":
                  - /url: cong-ty-thu-mua-dong
                  - text: Xem thêm
    - generic [ref=e134]:
      - generic [ref=e137]:
        - generic [ref=e138]:
          - link "CÔNG TY PHẾ LIỆU LỘC PHÁT TÀI" [ref=e139] [cursor=pointer]:
            - /url: https://code4.mimadigi.vn/2026/august/vutienngoc_112226W/
            - img "CÔNG TY PHẾ LIỆU LỘC PHÁT TÀI" [ref=e140]
          - paragraph [ref=e141]: CÔNG TY PHẾ LIỆU LỘC PHÁT TÀI
          - generic [ref=e142]:
            - paragraph [ref=e143]: "Địa chỉ: Ngã Tư DJ5 NJ17, khu công nghiệp, Thới Hòa, Hồ Chí Minh, Việt Nam"
            - paragraph [ref=e144]: "Hotline: 0983 627 556"
            - paragraph [ref=e145]: "Zalo: 0983 627 556"
            - paragraph [ref=e146]: "Email: ngoc0971844898a@gmail.com"
            - paragraph [ref=e147]: "Website: thumuaphelieutannoi.vn"
            - paragraph [ref=e148]
          - paragraph [ref=e149]: Mạng xã hội
          - generic [ref=e150]:
            - link "Facebook" [ref=e151] [cursor=pointer]:
              - /url: https://www.facebook.com/profile.php?id=61591701395304&locale=vi_VN
              - img "Facebook" [ref=e152]
            - link "Message" [ref=e153] [cursor=pointer]:
              - /url: https://www.facebook.com/profile.php?id=61591701395304&locale=vi_VN
              - img "Message" [ref=e154]
            - link "Instargam" [ref=e155] [cursor=pointer]:
              - /url: ""
              - img "Instargam" [ref=e156]
            - link "Tiktok" [ref=e157] [cursor=pointer]:
              - /url: https://vt.tiktok.com/ZS9nuW1De/
              - img "Tiktok" [ref=e158]
            - link "Youtobe" [ref=e159] [cursor=pointer]:
              - /url: ""
              - img "Youtobe" [ref=e160]
            - link "Shoppee" [ref=e161] [cursor=pointer]:
              - /url: https://s.shopee.vn/2LO7k4zLQF
              - img "Shoppee" [ref=e162]
        - generic [ref=e163]:
          - paragraph [ref=e164]: Về chúng tôi
          - list [ref=e165]:
            - listitem [ref=e166]:
              - link "Trang chủ" [ref=e167] [cursor=pointer]:
                - /url: https://code4.mimadigi.vn/2026/august/vutienngoc_112226W/
            - listitem [ref=e168]:
              - link "Giới thiệu" [ref=e169] [cursor=pointer]:
                - /url: gioi-thieu
            - listitem [ref=e170]:
              - link "Dịch vụ thu mua phế liệu" [ref=e171] [cursor=pointer]:
                - /url: dich-vu
            - listitem [ref=e172]:
              - link "Tin tức" [ref=e173] [cursor=pointer]:
                - /url: tin-tuc
            - listitem [ref=e174]:
              - link "Liên hệ" [ref=e175] [cursor=pointer]:
                - /url: lien-he
        - generic [ref=e176]:
          - paragraph [ref=e177]: Dịch vụ
          - list [ref=e178]:
            - listitem [ref=e179]:
              - link "Thu Mua Nhà Xưởng" [ref=e180] [cursor=pointer]:
                - /url: thu-mua-nha-xuong
            - listitem [ref=e181]:
              - link "Thu Mua Phế Liệu" [ref=e182] [cursor=pointer]:
                - /url: thu-mua-phe-lieu
            - listitem [ref=e183]:
              - link "Xử Lý Chất Thải Rắn – Thô" [ref=e184] [cursor=pointer]:
                - /url: xu-ly-chat-thai-ran-tho
            - listitem [ref=e185]:
              - link "Thanh Lý Giá Cao" [ref=e186] [cursor=pointer]:
                - /url: thanh-ly-gia-cao
            - listitem [ref=e187]:
              - link "Thu Mua Phế Liệu Đồng" [ref=e188] [cursor=pointer]:
                - /url: thu-mua-phe-lieu-dong
            - listitem [ref=e189]:
              - link "Thu Mua Phế Liệu Nhôm" [ref=e190] [cursor=pointer]:
                - /url: thu-mua-phe-lieu-nhom
            - listitem [ref=e191]:
              - link "Thu Mua Phế Liệu Inox" [ref=e192] [cursor=pointer]:
                - /url: thu-mua-phe-lieu-inox
            - listitem [ref=e193]:
              - link "Thu Mua Phế Liệu Motor" [ref=e194] [cursor=pointer]:
                - /url: thu-mua-phe-lieu-motor
        - generic [ref=e195]:
          - paragraph [ref=e196]: Thông tin liên hệ
          - list [ref=e197]:
            - listitem [ref=e198]:
              - text: "Địa chỉ:"
              - link "Ngã Tư DJ5 NJ17, khu công nghiệp, Thới Hòa, Hồ Chí Minh, Việt Nam" [ref=e199] [cursor=pointer]:
                - /url: https://maps.app.goo.gl/vNoDVU4fiatd2iHE8
            - listitem [ref=e200]:
              - text: "Hotline:"
              - link "0983627556" [ref=e201] [cursor=pointer]:
                - /url: tel:0983627556
            - listitem [ref=e202]:
              - text: "Email:"
              - link "ngoc0971844898a@gmail.com" [ref=e203] [cursor=pointer]:
                - /url: mailto:ngoc0971844898a@gmail.com
      - generic [ref=e206]: Copyright ©2026 Web Mima. All Rights Reserved. Thiết kế Web MIMA
    - generic [ref=e207]:
      - 'link "Call me: 0983627556" [ref=e208] [cursor=pointer]':
        - /url: tel:0983627556
        - img [ref=e212]
        - generic [ref=e215]: "Call me: 0983627556"
      - 'link "Zalo: 0928525779" [ref=e216] [cursor=pointer]':
        - /url: https://zalo.me/0928525779
        - img [ref=e220]
        - generic [ref=e221]: "Zalo: 0928525779"
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
          - strong: Xử lý chất thải rắn công nghiệp
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e222]:
      - generic [ref=e223]: "❌ Chi tiết lỗi cần khắc phục (1/15):"
      - generic [ref=e224]:
        - generic [ref=e225]:
          - generic [ref=e226]: 3. Heading (H1-H6)
          - generic [ref=e227]: 1 lỗi
        - generic [ref=e228]:
          - strong [ref=e230]: "Trang có đúng 1 thẻ H1 (hiện tại: 2 thẻ)"
          - generic [ref=e231]: ⚠️ Trang có 2 thẻ H1, bắt buộc đúng 1 thẻ duy nhất!
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