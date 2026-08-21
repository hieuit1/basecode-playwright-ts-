# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: So sánh nhà hàng tiệc cưới TP.HCM dễ hiểu nhất (/so-sanh-nha-hang-tiec-cuoi-tphcm-de-hieu-nhat)
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
        - link "So sánh nhà hàng tiệc cưới TP.HCM dễ hiểu nhất" [ref=e41] [cursor=pointer]:
          - /url: https://nhahangtieccuoinambo.vn/so-sanh-nha-hang-tiec-cuoi-tphcm-de-hieu-nhat
    - generic [ref=e43]:
      - generic [ref=e45]:
        - generic [ref=e47]: So sánh nhà hàng tiệc cưới TP.HCM dễ hiểu nhất
        - generic [ref=e48]:
          - img [ref=e49]
          - generic [ref=e52]: 175 Lượt xem
        - generic [ref=e54]:
          - generic [ref=e55] [cursor=pointer]:
            - img [ref=e56]
            - text: Mục lục
            - img [ref=e59]
          - text: ▾ ▾
        - text: ▾ ▾
        - generic [ref=e61]:
          - paragraph [ref=e62]:
            - text: Tìm kiếm một
            - strong [ref=e63]:
              - link "nhà hàng tiệc cưới TP.HCM" [ref=e64] [cursor=pointer]:
                - /url: https://nhahangtieccuoinambo.vn/nha-hang-tiec-cuoi-tphcm-nao-dang-chon-nhat
            - text: ưng ý giữa vô vàn lựa chọn đôi khi khiến các cặp đôi cảm thấy choáng ngợp và bối rối. Mỗi nơi lại mang một phong cách, một câu chuyện riêng, hứa hẹn kiến tạo nên ngày trọng đại đáng nhớ. Bài viết này sẽ dẫn lối bạn khám phá những điểm nhấn khác biệt, giúp hành trình lựa chọn trở nên dễ dàng và tràn đầy cảm hứng hơn bao giờ hết, để ngày hạnh phúc của bạn thực sự trở nên hoàn hảo.
          - heading "Tiêu chí vàng khi lựa chọn nhà hàng tiệc cưới TP.HCM" [level=2] [ref=e65]
          - paragraph [ref=e66]:
            - text: Để có một buổi tiệc cưới trọn vẹn, việc lựa chọn đúng
            - strong [ref=e67]: nhà hàng tiệc cưới TP.HCM
            - text: "là bước đầu tiên và quan trọng nhất. Dưới đây là những tiêu chí \"vàng\" bạn không nên bỏ qua:"
          - list [ref=e68]:
            - listitem [ref=e69]:
              - strong [ref=e70]: "Vị trí và Không gian:"
              - text: Ưu tiên nhà hàng có vị trí thuận tiện, dễ di chuyển cho khách mời, đồng thời không gian phải phù hợp với phong cách tiệc cưới bạn mong muốn (hiện đại, lãng mạn, cổ điển, sân vườn...).
            - listitem [ref=e71]:
              - strong [ref=e72]: "Sức chứa:"
              - text: Đảm bảo sức chứa của sảnh tiệc đủ lớn để đón tiếp toàn bộ khách mời của bạn một cách thoải mái nhất.
            - listitem [ref=e73]:
              - strong [ref=e74]: "Thực đơn:"
              - text: Thực đơn đa dạng, phong phú với các món ăn ngon, đảm bảo vệ sinh an toàn thực phẩm và có thể tùy chỉnh theo yêu cầu.
            - listitem [ref=e75]:
              - strong [ref=e76]: "Dịch vụ và Nhân sự:"
              - text: Đội ngũ nhân viên chuyên nghiệp, nhiệt tình, có kinh nghiệm tổ chức tiệc cưới sẽ giúp buổi tiệc diễn ra suôn sẻ.
            - listitem [ref=e77]:
              - strong [ref=e78]: "Chi phí:"
              - text: Lập kế hoạch ngân sách rõ ràng và lựa chọn nhà hàng có mức giá phù hợp với khả năng tài chính của bạn.
            - listitem [ref=e79]:
              - strong [ref=e80]: "Uy tín và Đánh giá:"
              - text: Tham khảo ý kiến, đánh giá từ những cặp đôi đã từng tổ chức tiệc tại nhà hàng để có cái nhìn khách quan nhất.
          - heading "Khám phá sự đa dạng của các loại hình nhà hàng tiệc cưới tại TP.HCM" [level=2] [ref=e81]
          - paragraph [ref=e82]:
            - img "Khám phá sự đa dạng của các loại hình nhà hàng tiệc cưới tại TP.HCM" [ref=e83]
          - paragraph [ref=e84]:
            - text: Thành phố Hồ Chí Minh mang đến một bức tranh đa sắc màu về các loại hình
            - strong [ref=e85]:
              - link "nhà hàng tiệc cưới TP.HCM" [ref=e86] [cursor=pointer]:
                - /url: https://nhahangtieccuoinambo.vn/nha-hang-tiec-cuoi-tphcm-nao-dang-chon-nhat
            - text: ", đáp ứng mọi nhu cầu và sở thích của các cặp đôi."
          - heading "Nhà hàng tiệc cưới sang trọng, hiện đại" [level=3] [ref=e87]
          - paragraph [ref=e88]: Đây là lựa chọn phổ biến cho những ai yêu thích sự lộng lẫy, đẳng cấp. Các nhà hàng này thường sở hữu sảnh tiệc rộng lớn, được trang trí cầu kỳ với hệ thống âm thanh, ánh sáng hiện đại. Không gian phù hợp cho những đám cưới quy mô, mang tầm vóc.
          - heading "Nhà hàng tiệc cưới phong cách sân vườn (Garden Wedding)" [level=3] [ref=e89]
          - paragraph [ref=e90]: Nếu bạn mơ về một đám cưới lãng mạn, gần gũi với thiên nhiên, thì các nhà hàng tiệc cưới phong cách sân vườn chính là câu trả lời. Tận hưởng không khí trong lành, khung cảnh xanh mát, những ánh đèn lung linh huyền ảo, buổi tiệc sẽ trở nên thật sự thơ mộng và đáng nhớ. Phong cách này đặc biệt phù hợp cho những cặp đôi yêu thích sự tinh tế và lãng mạn.
          - heading "Nhà hàng tiệc cưới theo chủ đề" [level=3] [ref=e91]
          - paragraph [ref=e92]: Để đám cưới thêm phần độc đáo, nhiều nhà hàng cung cấp dịch vụ trang trí theo các chủ đề riêng biệt như vintage, bohemian, công chúa, hoàng gia... Bạn có thể thỏa sức sáng tạo và biến ý tưởng của mình thành hiện thực.
          - heading "Nhà hàng tiệc cưới với view thành phố" [level=3] [ref=e93]
          - paragraph [ref=e94]: Sở hữu tầm nhìn toàn cảnh thành phố lung linh về đêm, những nhà hàng này mang đến một không gian tiệc cưới vừa sang trọng, hiện đại, vừa có chút lãng mạn và ấn tượng. Đây sẽ là background tuyệt vời cho những bức ảnh cưới của bạn.
          - paragraph [ref=e95]:
            - img "Khám phá sự đa dạng của các loại hình nhà hàng tiệc cưới tại TP.HCM" [ref=e96]
          - heading "Bí quyết \"săn\" ưu đãi khi đặt tiệc cưới" [level=2] [ref=e97]
          - paragraph [ref=e98]: "Chi phí luôn là một yếu tố quan trọng. Đừng ngần ngại tìm hiểu và \"săn\" những chương trình ưu đãi hấp dẫn để tối ưu hóa ngân sách của mình:"
          - list [ref=e99]:
            - listitem [ref=e100]:
              - strong [ref=e101]: "Đặt tiệc sớm:"
              - text: Nhiều nhà hàng có chính sách giảm giá hoặc tặng kèm dịch vụ cho các cặp đôi đặt tiệc trước từ 6 tháng đến 1 năm.
            - listitem [ref=e102]:
              - strong [ref=e103]: "Lễ ngoài giờ/ngày thường:"
              - text: Tổ chức tiệc vào các ngày trong tuần hoặc giờ không phải giờ cao điểm (trưa, chiều) thường có mức giá ưu đãi hơn.
            - listitem [ref=e104]:
              - strong [ref=e105]: "Combo dịch vụ:"
              - text: Một số nhà hàng có các gói combo bao gồm cả trang trí, MC, âm thanh, ánh sáng... với mức giá cạnh tranh.
            - listitem [ref=e106]:
              - strong [ref=e107]: "Theo dõi chương trình khuyến mãi:"
              - text: Cập nhật website, fanpage của nhà hàng để không bỏ lỡ các chương trình khuyến mãi đặc biệt.
          - heading "Nhà hàng Tiệc Cưới Làng Nướng Nam Bộ - Nơi chắp cánh cho tình yêu" [level=2] [ref=e108]
          - paragraph [ref=e109]:
            - text: Giữa lòng Sài Gòn nhộn nhịp,
            - strong [ref=e110]: Nhà hàng Tiệc Cưới Làng Nướng Nam Bộ
            - text: tựa như một ốc đảo xanh mát, mang đến một không gian tiệc cưới độc đáo, giao thoa giữa nét truyền thống mộc mạc và sự sang trọng tinh tế. Với kinh nghiệm lâu năm trong lĩnh vực tổ chức sự kiện, chúng tôi hiểu rằng ngày cưới là khoảnh khắc thiêng liêng và ý nghĩa nhất, chính vì vậy, đội ngũ của chúng tôi luôn tận tâm kiến tạo nên một buổi tiệc hoàn hảo, đúng như những gì bạn hằng mơ ước.
          - paragraph [ref=e111]:
            - img "Nhà hàng Tiệc Cưới Làng Nướng Nam Bộ - Nơi chắp cánh cho tình yêu" [ref=e112]
          - paragraph [ref=e113]: "Chúng tôi mang đến hai phong cách chủ đạo, đáp ứng đa dạng nhu cầu của các cặp đôi:"
          - heading "Phong cách Sân Vườn Lãng Mạn" [level=3] [ref=e114]
          - paragraph [ref=e115]: Tận hưởng không gian ngoài trời thoáng đãng, tràn ngập sắc xanh của cây cỏ, điểm xuyết bởi những ánh đèn lung linh huyền ảo. Tiếng nhạc du dương, hương hoa thoang thoảng, không khí trong lành sẽ là nền tảng hoàn hảo cho một câu chuyện tình yêu ngọt ngào được viết tiếp trong ngày trọng đại. Đặc biệt phù hợp cho những ai yêu thích sự lãng mạn, gần gũi với thiên nhiên và mong muốn một đám cưới mang đậm dấu ấn cá nhân.
          - heading "Phong cách Hội trường Sang trọng" [level=3] [ref=e116]
          - paragraph [ref=e117]: Với những sảnh tiệc được thiết kế tinh tế, sang trọng, hệ thống âm thanh, ánh sáng hiện đại, Nhà hàng Tiệc Cưới Làng Nướng Nam Bộ sẵn sàng mang đến một buổi tiệc đẳng cấp và ấn tượng. Không gian này phù hợp cho những đám cưới quy mô, đề cao sự trang trọng và chuyên nghiệp.
          - paragraph [ref=e118]: Thực đơn tại Nhà hàng Tiệc Cưới Làng Nướng Nam Bộ được xây dựng đa dạng, từ những món ăn mang đậm hương vị truyền thống Nam Bộ đến các món Âu tinh tế, đảm bảo làm hài lòng khẩu vị của mọi thực khách. Chúng tôi cam kết sử dụng nguyên liệu tươi ngon, chế biến bởi đội ngũ đầu bếp giàu kinh nghiệm, mang đến trải nghiệm ẩm thực tuyệt vời nhất.
          - paragraph [ref=e119]:
            - img "Phong cách Sân Vườn Lãng Mạn" [ref=e120]
          - paragraph [ref=e121]: Đến với Nhà hàng Tiệc Cưới Làng Nướng Nam Bộ, bạn không chỉ nhận được một địa điểm tổ chức tiệc cưới, mà còn là sự đồng hành, tư vấn nhiệt tình từ đội ngũ chuyên nghiệp, giúp bạn giải tỏa mọi lo lắng, để bạn hoàn toàn tập trung tận hưởng niềm hạnh phúc trọn vẹn trong ngày trọng đại.
          - paragraph [ref=e122]:
            - text: Việc lựa chọn một
            - strong [ref=e123]:
              - link "nhà hàng tiệc cưới TP.HCM" [ref=e124] [cursor=pointer]:
                - /url: https://nhahangtieccuoinambo.vn/nha-hang-tiec-cuoi-tphcm-nao-dang-chon-nhat
            - text: phù hợp là một hành trình đầy cảm xúc. Hy vọng với những chia sẻ trên, bạn đã có thêm những thông tin hữu ích và định hướng rõ ràng hơn cho ngày trọng đại của mình. Hãy để tình yêu dẫn lối, để bạn tìm thấy nơi chốn hoàn hảo nhất, nơi khởi đầu cho một hành trình hôn nhân hạnh phúc viên mãn.
          - paragraph [ref=e125]:
            - img "Phong cách Hội trường Sang trọng" [ref=e126]
          - generic [ref=e127]:
            - strong [ref=e128]: DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ
            - text: "Địa chỉ: 615A Âu Cơ, P. Hòa Thạnh, Quận Tân Phú, TP.HCM"
            - text: "Hotline: 094 963 61 66"
            - text: "Điện thoại: 094 963 61 66"
            - text: "Email: namboaucowedding@gmail.com"
            - text: "Website: nhahangtieccuoinambo.vn"
      - heading "Các Blog khác" [level=2] [ref=e130]
      - generic [ref=e131]:
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
        - generic:
          - generic:
            - paragraph:
              - link "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - generic:
              - heading "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                - link "[AUTO-TEST] Blog LoadTest 1787181811925 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                  - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
              - paragraph: Mô tả cho Blog bulk test
              - link "Xem chi tiết":
                - /url: auto-test-blog-loadtest-1787181811925-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                - text: Xem chi tiết
    - generic [ref=e132]:
      - list [ref=e134]:
        - listitem [ref=e135]:
          - link "Garden" [ref=e136] [cursor=pointer]:
            - /url: garden
        - listitem [ref=e137]:
          - link "Wedding" [ref=e138] [cursor=pointer]:
            - /url: wedding
        - listitem [ref=e139]:
          - link "Khuyến mãi" [ref=e140] [cursor=pointer]:
            - /url: khuyen-mai
        - listitem [ref=e141]:
          - link "Sảnh tiệc" [ref=e142] [cursor=pointer]:
            - /url: sanh-tiec
        - listitem [ref=e143]:
          - link "Blog" [ref=e144] [cursor=pointer]:
            - /url: blog
        - listitem [ref=e145]:
          - link "Liên hệ" [ref=e146] [cursor=pointer]:
            - /url: lien-he
        - listitem [ref=e147]:
          - link "Tuyển dụng" [ref=e148] [cursor=pointer]:
            - /url: tuyen-dung
      - generic [ref=e151]:
        - generic [ref=e152]:
          - paragraph [ref=e153]: Nhà Hàng Tiệc Cưới Nam Bộ
          - generic [ref=e154]:
            - paragraph [ref=e155]: 615A Âu Cơ, P. Hòa Thạnh, Quận Tân Phú, TP.HCM
            - paragraph [ref=e156]: "Hotline tư vấn: 094 963 61 66"
            - paragraph [ref=e157]: "Giờ mở cửa: 8h30 - 22h30 hằng ngày"
            - paragraph [ref=e158]:
              - text: "Email:"
              - link "namboaucowedding@gmail.com" [ref=e159] [cursor=pointer]:
                - /url: http://namboaucowedding@gmail.com
          - paragraph [ref=e160]: Mạng xã hội
          - generic [ref=e161]:
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e162] [cursor=pointer]:
              - /url: https://www.facebook.com/weddingnambo/?locale=vi_VN
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e163]
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e164] [cursor=pointer]:
              - /url: ""
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e165]
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e166] [cursor=pointer]:
              - /url: https://www.tiktok.com/@nambo.wedding
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e167]
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e168] [cursor=pointer]:
              - /url: ""
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e169]
            - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e170] [cursor=pointer]:
              - /url: ""
              - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e171]
        - paragraph [ref=e174]: Chứng chỉ
        - generic [ref=e175]:
          - paragraph [ref=e176]: Fanpage
          - link "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e177] [cursor=pointer]:
            - /url: ""
            - img "DỊCH VỤ NHÀ HÀNG LÀNG NƯỚNG NAM BỘ" [ref=e178]
      - generic [ref=e181]:
        - generic [ref=e182]: ©2026. Nhà Hàng Tiệc Cưới Nam Bộ. Thiết kế Web MIMA
        - generic [ref=e183]:
          - generic [ref=e184]:
            - text: "Đang online:"
            - generic [ref=e185]: "291"
          - generic [ref=e186]: "|"
          - generic [ref=e187]:
            - text: "Hôm nay:"
            - generic [ref=e188]: "52"
          - generic [ref=e189]: "|"
          - generic [ref=e190]:
            - text: "Tổng truy cập:"
            - generic [ref=e191]: "29866"
    - generic [ref=e195]:
      - 'link "Call me: 094 963 61 66" [ref=e196] [cursor=pointer]':
        - /url: tel:0949636166
        - img [ref=e200]
        - generic [ref=e203]: "Call me: 094 963 61 66"
      - 'link "Zalo: 094 963 61 66" [ref=e204] [cursor=pointer]':
        - /url: https://zalo.me/0949636166
        - img [ref=e208]
        - generic [ref=e209]: "Zalo: 094 963 61 66"
  - img [ref=e212]
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
          - strong: So sánh nhà hàng tiệc cưới TP.HCM dễ hiểu nhất
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e214]:
      - generic [ref=e215]: "❌ Chi tiết lỗi cần khắc phục (2/15):"
      - generic [ref=e216]:
        - generic [ref=e217]:
          - generic [ref=e218]: 5. Hình ảnh
          - generic [ref=e219]: 1 lỗi
        - generic [ref=e220]:
          - strong [ref=e222]: "100% ảnh có thuộc tính alt (thiếu: 1/33)"
          - generic [ref=e223]: "⚠️ Có 1 hình ảnh thiếu thuộc tính 'alt'. VD: https://fonts.gstatic.com/s/i/productlogos/translate/v14/24px.svg"
      - generic [ref=e224]:
        - generic [ref=e225]:
          - generic [ref=e226]: 6. Liên kết (Links)
          - generic [ref=e227]: 1 lỗi
        - generic [ref=e228]:
          - strong [ref=e230]: "Không có broken links (lỗi: 2/31)"
          - generic [ref=e231]: "⚠️ Broken links: tin-tuc (status: 404), http://namboaucowedding@gmail.com (status: 0)"
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