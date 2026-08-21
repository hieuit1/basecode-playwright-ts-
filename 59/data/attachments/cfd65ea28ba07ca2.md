# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Vì sao nên chọn nhà hàng tiệc cưới Tân Phú? (/vi-sao-nen-chon-nha-hang-tiec-cuoi-tan-phu)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 87/100 dưới ngưỡng 96%. Có 2/15 tiêu chí không đạt.
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
    - list [ref=e32]:
      - listitem [ref=e33]:
        - link "Trang chủ" [ref=e34] [cursor=pointer]:
          - /url: https://nhahangtieccuoinambo.vn/
          - img [ref=e35]
          - generic [ref=e37]: Trang chủ
      - listitem [ref=e38]:
        - text: /
        - link "Blog" [ref=e39] [cursor=pointer]:
          - /url: https://nhahangtieccuoinambo.vn/blog
      - listitem [ref=e40]:
        - text: /
        - link "Vì sao nên chọn nhà hàng tiệc cưới Tân Phú?" [ref=e41] [cursor=pointer]:
          - /url: https://nhahangtieccuoinambo.vn/vi-sao-nen-chon-nha-hang-tiec-cuoi-tan-phu
    - generic [ref=e43]:
      - generic [ref=e45]:
        - generic [ref=e47]: Vì sao nên chọn nhà hàng tiệc cưới Tân Phú?
        - generic [ref=e48]:
          - img [ref=e49]
          - generic [ref=e52]: 179 Lượt xem
        - generic [ref=e54]:
          - generic [ref=e55] [cursor=pointer]:
            - img [ref=e56]
            - text: Mục lục
            - img [ref=e59]
          - text: ▾ ▾ ▾ ▾
        - text: ▾ ▾ ▾ ▾
        - generic [ref=e61]:
          - paragraph [ref=e62]:
            - text: "Lựa chọn một địa điểm tổ chức tiệc cưới không chỉ là việc tìm kiếm một không gian đẹp, mà còn là hành trình kiến tạo nên những khoảnh khắc thiêng liêng, khắc sâu trong tâm trí của cô dâu chú rể và toàn thể khách mời. Tại khu vực Tân Phú sầm uất, có một cái tên đang dần khẳng định vị thế và trở thành điểm đến mơ ước của nhiều cặp đôi:"
            - link "nhà hàng tiệc cưới Tân Phú" [ref=e63] [cursor=pointer]:
              - /url: https://nhahangtieccuoinambo.vn/top-nha-hang-tiec-cuoi-tan-phu-dep-gia-tot-2026
            - text: . Bài viết này sẽ cùng bạn khám phá những lý do vì sao nơi đây lại xứng đáng là lựa chọn hoàn hảo cho ngày trọng đại của mình, nơi tình yêu thăng hoa trong không gian lãng mạn và dịch vụ chuyên nghiệp.
          - heading "Kiến Trúc Độc Đáo, Không Gian Mở Đầy Thơ Mộng" [level=2] [ref=e64]
          - paragraph [ref=e65]:
            - text: Ấn tượng đầu tiên khi nhắc đến
            - strong [ref=e66]: nhà hàng tiệc cưới Tân Phú
            - text: "chính là kiến trúc độc đáo và không gian được chăm chút tỉ mỉ. Nơi đây không chỉ đơn thuần là một sảnh tiệc, mà còn là một bức tranh nghệ thuật, nơi sự sang trọng hòa quyện cùng nét mộc mạc, gần gũi. Bạn có thể lựa chọn một trong hai phong cách nổi bật: Sảnh tiệc hiện đại lộng lẫy hay không gian Garden lãng mạn."
          - paragraph [ref=e67]:
            - img "Kiến Trúc Độc Đáo, Không Gian Mở Đầy Thơ Mộng" [ref=e68]
          - heading "Sảnh Tiệc Hiện Đại – Nơi Đẳng Cấp Lên Ngôi" [level=3] [ref=e69]
          - paragraph [ref=e70]: Với những ai yêu thích sự tinh tế, sang trọng và đẳng cấp, sảnh tiệc hiện đại của nhà hàng tiệc cưới Tân Phú chắc chắn sẽ làm hài lòng. Lấy cảm hứng từ những kiến trúc châu Âu cổ điển pha lẫn nét hiện đại, sảnh tiệc được trang hoàng lộng lẫy với hệ thống đèn chùm pha lê lung linh, những bộ bàn ghế bọc da cao cấp, và các chi tiết trang trí được tuyển chọn kỹ lưỡng. Không gian rộng rãi, thoáng đãng cùng sức chứa linh hoạt, phù hợp cho cả những tiệc cưới thân mật lẫn quy mô lớn, đảm bảo mọi khách mời đều cảm thấy thoải mái và ấn tượng.
          - heading "Không Gian Garden – Lãng Mạn Như Chuyện Cổ Tích" [level=3] [ref=e71]
          - paragraph [ref=e72]: Nếu mơ ước về một đám cưới ngoài trời, giữa thiên nhiên trong lành và đầy thơ mộng, thì khu vực Garden của nhà hàng tiệc cưới Tân Phú chính là câu trả lời hoàn hảo. Được thiết kế như một khu vườn cổ tích thu nhỏ, nơi đây bao phủ bởi sắc xanh mướt của cây cỏ, rực rỡ của hoa lá và lung linh của ánh đèn trang trí. Không gian mở này mang đến sự gần gũi, ấm cúng, tạo cảm giác như bạn đang tổ chức một bữa tiệc riêng tư ngay tại khu vườn nhà mình. Âm nhạc nhẹ nhàng, ánh nến lung linh, và bầu không khí trong lành sẽ cùng bạn tạo nên một lễ cưới khó quên, đầy cảm xúc.
          - heading "Thực Đơn Đa Dạng, Hương Vị Tinh Tế" [level=2] [ref=e73]
          - paragraph [ref=e74]:
            - text: Ẩm thực luôn đóng vai trò quan trọng trong bất kỳ buổi tiệc nào, và
            - link "nhà hàng tiệc cưới Tân Phú" [ref=e75] [cursor=pointer]:
              - /url: https://nhahangtieccuoinambo.vn/top-nha-hang-tiec-cuoi-tan-phu-dep-gia-tot-2026
            - text: hiểu rõ điều đó. Với đội ngũ đầu bếp giàu kinh nghiệm, nhà hàng mang đến một thực đơn phong phú, kết hợp hài hòa giữa tinh hoa ẩm thực Á – Âu, cùng những món ăn đậm đà hương vị truyền thống Việt Nam. Mỗi món ăn không chỉ được chăm chút về hương vị mà còn được trình bày đẹp mắt, góp phần nâng tầm trải nghiệm ẩm thực cho khách mời.
          - paragraph [ref=e76]:
            - img "Thực Đơn Đa Dạng, Hương Vị Tinh Tế" [ref=e77]
          - heading "Sự Kết Hợp Hoàn Hảo Giữa Truyền Thống và Hiện Đại" [level=3] [ref=e78]
          - paragraph [ref=e79]: Bạn có thể lựa chọn những món ăn quen thuộc như Gà quay, Vịt quay, các món hải sản tươi sống được chế biến cầu kỳ, hay khám phá những hương vị mới lạ từ các món ăn Âu như Bò bít tết, Sườn cừu nướng, Salad tươi mát. Đặc biệt, nhà hàng luôn ưu tiên sử dụng nguyên liệu tươi ngon, an toàn, đảm bảo mang đến những món ăn chất lượng nhất. Thực đơn có thể được tùy chỉnh theo yêu cầu riêng của từng cặp đôi, giúp ngày vui thêm trọn vẹn và mang đậm dấu ấn cá nhân.
          - heading "Trải Nghiệm Dịch Vụ Chu Đáo, Chuyên Nghiệp" [level=3] [ref=e80]
          - paragraph [ref=e81]: Sự thành công của một buổi tiệc cưới không chỉ đến từ không gian và ẩm thực, mà còn phụ thuộc rất nhiều vào chất lượng dịch vụ. Tại nhà hàng tiệc cưới Tân Phú, đội ngũ nhân viên chuyên nghiệp, tận tâm và giàu kinh nghiệm luôn sẵn sàng hỗ trợ bạn trong suốt quá trình chuẩn bị và diễn ra buổi lễ.
          - heading "Đội Ngũ Nhân Viên Tận Tâm, Hỗ Trợ Tối Đa" [level=3] [ref=e82]
          - paragraph [ref=e83]: Từ khâu tư vấn, lên kế hoạch, trang trí, cho đến việc điều phối chương trình trong ngày cưới, đội ngũ của nhà hàng sẽ đồng hành cùng bạn, đảm bảo mọi thứ diễn ra suôn sẻ và hoàn hảo nhất. Sự nhiệt tình, chu đáo và khả năng xử lý tình huống linh hoạt của nhân viên sẽ giúp cô dâu chú rể giảm bớt gánh nặng, để họ có thể tập trung tận hưởng trọn vẹn niềm vui của ngày trọng đại.
          - heading "Gói Dịch Vụ Linh Hoạt, Phù Hợp Mọi Ngân Sách" [level=3] [ref=e84]
          - paragraph [ref=e85]: Nhà hàng tiệc cưới Tân Phú cung cấp các gói dịch vụ đa dạng, được thiết kế để phù hợp với nhiều nhu cầu và ngân sách khác nhau. Từ các gói tiệc cơ bản đến những gói cao cấp, mọi chi tiết đều được tính toán kỹ lưỡng, mang lại giá trị tốt nhất cho khách hàng. Sự minh bạch trong báo giá và cam kết về chất lượng dịch vụ sẽ giúp bạn hoàn toàn yên tâm khi lựa chọn.
          - paragraph [ref=e86]:
            - img "Gói Dịch Vụ Linh Hoạt, Phù Hợp Mọi Ngân Sách" [ref=e87]
          - heading "Giá Cả Cạnh Tranh, Chất Lượng Vượt Trội" [level=2] [ref=e88]
          - paragraph [ref=e89]:
            - text: Một trong những yếu tố quan trọng khi đưa ra quyết định là vấn đề chi phí. Nhà hàng tiệc cưới Tân Phú tự hào mang đến các dịch vụ chất lượng cao với mức giá cạnh tranh, đảm bảo mang lại sự hài lòng tối đa cho các cặp đôi. Việc lựa chọn một
            - strong [ref=e90]: nhà hàng tiệc cưới Tân Phú
            - text: uy tín không chỉ giúp bạn sở hữu một không gian đẹp, món ăn ngon, dịch vụ chuyên nghiệp mà còn tối ưu hóa chi phí cho ngày vui trọng đại.
          - heading "Minh Bạch Và Hợp Lý" [level=3] [ref=e91]
          - paragraph [ref=e92]: Nhà hàng cam kết mang đến bảng giá chi tiết, minh bạch, không phát sinh chi phí ẩn. Mọi dịch vụ đều được công khai rõ ràng, giúp bạn dễ dàng hoạch định ngân sách. Giá cả hợp lý nhưng không hề ảnh hưởng đến chất lượng, đó là cam kết mà nhà hàng luôn duy trì.
          - heading "Đầu Tư Cho Ngày Hạnh Phúc" [level=3] [ref=e93]
          - paragraph [ref=e94]:
            - text: Lựa chọn
            - strong [ref=e95]: nhà hàng tiệc cưới Tân Phú
            - text: là một khoản đầu tư xứng đáng cho ngày hạnh phúc. Nơi đây không chỉ cung cấp một địa điểm tổ chức, mà còn mang đến trải nghiệm trọn vẹn, từ không gian lãng mạn, ẩm thực tinh tế đến dịch vụ chuyên nghiệp, tất cả hòa quyện để tạo nên một buổi tiệc cưới đáng nhớ, là khởi đầu tuyệt vời cho hành trình hôn nhân.
          - paragraph [ref=e96]:
            - img "Giá Cả Cạnh Tranh, Chất Lượng Vượt Trội" [ref=e97]
          - heading "Vị Trí Nhà hàng tiệc cưới Tân Phú Thuận Lợi, Dễ Dàng Di Chuyển" [level=2] [ref=e98]
          - paragraph [ref=e99]: Tọa lạc tại vị trí đắc địa, dễ dàng di chuyển và có chỗ đậu xe thuận tiện, nhà hàng tiệc cưới Tân Phú là điểm đến lý tưởng cho mọi khách mời, dù họ đến từ khu vực nào của thành phố.
          - heading "Tiện Lợi Cho Khách Mời" [level=3] [ref=e100]
          - paragraph [ref=e101]: Nằm trên trục đường chính, việc tìm đến nhà hàng trở nên dễ dàng. Khu vực đỗ xe rộng rãi, đáp ứng nhu cầu của đông đảo khách mời, giúp mọi người đến tham dự buổi lễ một cách thoải mái và thuận tiện nhất.
          - paragraph [ref=e102]:
            - text: Với không gian độc đáo, ẩm thực tinh tế, dịch vụ chuyên nghiệp và mức giá cạnh tranh,
            - strong [ref=e103]:
              - link "nhà hàng tiệc cưới Tân Phú" [ref=e104] [cursor=pointer]:
                - /url: https://nhahangtieccuoinambo.vn/top-nha-hang-tiec-cuoi-tan-phu-dep-gia-tot-2026
            - text: xứng đáng là lựa chọn hàng đầu cho các cặp đôi đang tìm kiếm một địa điểm hoàn hảo để bắt đầu cuộc sống hôn nhân. Hãy để chúng tôi góp phần kiến tạo nên ngày vui trọn vẹn, hạnh phúc và đầy ý nghĩa nhất dành cho bạn.
          - paragraph [ref=e105]:
            - img "Vị Trí Nhà hàng tiệc cưới Tân Phú Thuận Lợi, Dễ Dàng Di Chuyển" [ref=e106]
          - paragraph [ref=e107]: "Thông tin liên hệ:"
          - paragraph [ref=e108]: DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ
          - paragraph [ref=e109]: "Địa chỉ: 615A Âu Cơ, P. Hòa Thạnh, Quận Tân Phú, TP.HCM"
          - paragraph [ref=e110]: "Hotline: 094 963 61 66"
          - paragraph [ref=e111]: "Điện thoại: 094 963 61 66"
          - paragraph [ref=e112]: "Email: namboaucowedding@gmail.com"
          - paragraph [ref=e113]: "Website: nhahangtieccuoinambo.vn"
      - heading "Các Blog khác" [level=2] [ref=e115]
      - generic [ref=e116]:
        - generic:
          - generic:
            - paragraph:
              - link "Blog Automation 1787287278192":
                - /url: blog-test-1787287278192
            - generic:
              - heading "Blog Automation 1787287278192" [level=3]:
                - link "Blog Automation 1787287278192":
                  - /url: blog-test-1787287278192
              - paragraph: Đây là đoạn mô tả ngắn về blog được tự động tạo lúc 1787287278192.
              - link "Xem chi tiết":
                - /url: blog-test-1787287278192
                - text: Xem chi tiết
        - generic:
          - generic:
            - paragraph:
              - link "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - generic:
              - heading "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                - link "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                  - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
              - paragraph: Mô tả cho Blog bulk test
              - link "Xem chi tiết":
                - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                - text: Xem chi tiết
        - generic:
          - generic:
            - paragraph:
              - link "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - generic:
              - heading "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                - link "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                  - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
              - paragraph: Mô tả cho Blog bulk test
              - link "Xem chi tiết":
                - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                - text: Xem chi tiết
        - generic:
          - generic:
            - paragraph:
              - link "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - generic:
              - heading "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                - link "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                  - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
              - paragraph: Mô tả cho Blog bulk test
              - link "Xem chi tiết":
                - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                - text: Xem chi tiết
        - generic:
          - generic:
            - paragraph:
              - link "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - generic:
              - heading "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                - link "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                  - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
              - paragraph: Mô tả cho Blog bulk test
              - link "Xem chi tiết":
                - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                - text: Xem chi tiết
        - generic:
          - generic:
            - paragraph:
              - link "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - generic:
              - heading "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                - link "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                  - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
              - paragraph: Mô tả cho Blog bulk test
              - link "Xem chi tiết":
                - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                - text: Xem chi tiết
        - generic:
          - generic:
            - paragraph:
              - link "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - generic:
              - heading "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                - link "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                  - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
              - paragraph: Mô tả cho Blog bulk test
              - link "Xem chi tiết":
                - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                - text: Xem chi tiết
        - generic:
          - generic:
            - paragraph:
              - link "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - generic:
              - heading "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                - link "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                  - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
              - paragraph: Mô tả cho Blog bulk test
              - link "Xem chi tiết":
                - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                - text: Xem chi tiết
        - generic:
          - generic:
            - paragraph:
              - link "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - generic:
              - heading "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                - link "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                  - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
              - paragraph: Mô tả cho Blog bulk test
              - link "Xem chi tiết":
                - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                - text: Xem chi tiết
        - generic:
          - generic:
            - paragraph:
              - link "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - generic:
              - heading "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                - link "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                  - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
              - paragraph: Mô tả cho Blog bulk test
              - link "Xem chi tiết":
                - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                - text: Xem chi tiết
    - generic [ref=e117]:
      - list [ref=e119]:
        - listitem [ref=e120]:
          - link "Garden" [ref=e121] [cursor=pointer]:
            - /url: garden
        - listitem [ref=e122]:
          - link "Wedding" [ref=e123] [cursor=pointer]:
            - /url: wedding
        - listitem [ref=e124]:
          - link "Khuyến mãi" [ref=e125] [cursor=pointer]:
            - /url: khuyen-mai
        - listitem [ref=e126]:
          - link "Sảnh tiệc" [ref=e127] [cursor=pointer]:
            - /url: sanh-tiec
        - listitem [ref=e128]:
          - link "Blog" [ref=e129] [cursor=pointer]:
            - /url: blog
        - listitem [ref=e130]:
          - link "Liên hệ" [ref=e131] [cursor=pointer]:
            - /url: lien-he
        - listitem [ref=e132]:
          - link "Tuyển dụng" [ref=e133] [cursor=pointer]:
            - /url: tuyen-dung
      - generic [ref=e136]:
        - generic [ref=e137]:
          - paragraph [ref=e138]: Nhà Hàng Tiệc Cưới Nam Bộ
          - generic [ref=e139]:
            - paragraph [ref=e140]: 615A Âu Cơ, P. Hòa Thạnh, Quận Tân Phú, TP.HCM
            - paragraph [ref=e141]: "Hotline tư vấn: 094 963 61 66"
            - paragraph [ref=e142]: "Giờ mở cửa: 8h30 - 22h30 hằng ngày"
            - paragraph [ref=e143]:
              - text: "Email:"
              - link "namboaucowedding@gmail.com" [ref=e144] [cursor=pointer]:
                - /url: http://namboaucowedding@gmail.com
          - paragraph [ref=e145]: Mạng xã hội
          - generic [ref=e146]:
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e147] [cursor=pointer]:
              - /url: https://www.facebook.com/weddingnambo/?locale=vi_VN
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e148]
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e149] [cursor=pointer]:
              - /url: ""
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e150]
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e151] [cursor=pointer]:
              - /url: https://www.tiktok.com/@nambo.wedding
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e152]
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e153] [cursor=pointer]:
              - /url: ""
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e154]
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e155] [cursor=pointer]:
              - /url: ""
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e156]
        - paragraph [ref=e159]: Chứng chỉ
        - generic [ref=e160]:
          - paragraph [ref=e161]: Fanpage
          - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e162] [cursor=pointer]:
            - /url: ""
            - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e163]
      - generic [ref=e166]:
        - generic [ref=e167]: ©2026. Nhà Hàng Tiệc Cưới Nam Bộ. Thiết kế Web MIMA
        - generic [ref=e168]:
          - generic [ref=e169]:
            - text: "Đang online:"
            - generic [ref=e170]: "357"
          - generic [ref=e171]: "|"
          - generic [ref=e172]:
            - text: "Hôm nay:"
            - generic [ref=e173]: "52"
          - generic [ref=e174]: "|"
          - generic [ref=e175]:
            - text: "Tổng truy cập:"
            - generic [ref=e176]: "29866"
    - generic [ref=e180]:
      - 'link "Call me: 094 963 61 66" [ref=e181] [cursor=pointer]':
        - /url: tel:0949636166
        - img [ref=e185]
        - generic [ref=e188]: "Call me: 094 963 61 66"
      - 'link "Zalo: 094 963 61 66" [ref=e189] [cursor=pointer]':
        - /url: https://zalo.me/0949636166
        - img [ref=e193]
        - generic [ref=e194]: "Zalo: 094 963 61 66"
  - img [ref=e197]
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
              - generic: "87"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 87/100
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
          - generic: "15"
          - generic: Tổng tiêu chí
        - generic:
          - generic: ✅ 13
          - generic: Đạt
        - generic:
          - generic: ❌ 2
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: Vì sao nên chọn nhà hàng tiệc cưới Tân Phú?
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e199]:
      - generic [ref=e200]: "❌ Chi tiết lỗi cần khắc phục (2/15):"
      - generic [ref=e201]:
        - generic [ref=e202]:
          - generic [ref=e203]: 5. Hình ảnh
          - generic [ref=e204]: 1 lỗi
        - generic [ref=e205]:
          - strong [ref=e207]: "100% ảnh có thuộc tính alt (thiếu: 1/33)"
          - generic [ref=e208]: "⚠️ Có 1 hình ảnh thiếu thuộc tính 'alt'. VD: https://fonts.gstatic.com/s/i/productlogos/translate/v14/24px.svg"
      - generic [ref=e209]:
        - generic [ref=e210]:
          - generic [ref=e211]: 6. Liên kết (Links)
          - generic [ref=e212]: 1 lỗi
        - generic [ref=e213]:
          - strong [ref=e215]: "Không có broken links (lỗi: 2/31)"
          - generic [ref=e216]: "⚠️ Broken links: tin-tuc (status: 404), http://namboaucowedding@gmail.com (status: 0)"
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 87/100 dưới ngưỡng 96%. Có 2/15 tiêu chí không đạt.
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