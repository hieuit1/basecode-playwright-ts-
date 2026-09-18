# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Hãng Asama (/hang-asama)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 86/100 dưới ngưỡng 96%. Có 2/14 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - link "Thế giới xe đạp Việt" [ref=e5] [cursor=pointer]:
      - /url: /
      - img "Thế giới xe đạp Việt" [ref=e6]
    - generic [ref=e7]:
      - generic [ref=e9]:
        - link "Thế giới xe đạp Việt" [ref=e11] [cursor=pointer]:
          - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/
          - img "Thế giới xe đạp Việt" [ref=e12]
        - list [ref=e15]:
          - listitem [ref=e16]:
            - link "Thế giới xe đạp Việt" [ref=e17] [cursor=pointer]:
              - /url: gioi-thieu
              - text: Giới thiệu
          - listitem [ref=e18]:
            - link "Thế giới xe đạp Việt" [ref=e19] [cursor=pointer]:
              - /url: khuyen-mai
              - text: Khuyến mãi
          - listitem [ref=e20]:
            - link "Thế giới xe đạp Việt" [ref=e21] [cursor=pointer]:
              - /url: uu-dai
              - text: Ưu đãi
          - listitem [ref=e22]:
            - link "Thế giới xe đạp Việt" [ref=e23] [cursor=pointer]:
              - /url: thuong-hieu
              - text: Thương hiệu
          - listitem [ref=e24]:
            - link "Thế giới xe đạp Việt" [ref=e25] [cursor=pointer]:
              - /url: huong-dan
              - text: Hướng dẫn
          - listitem [ref=e26]:
            - link "Thế giới xe đạp Việt" [ref=e27] [cursor=pointer]:
              - /url: tin-tuc
              - text: Tin tức
          - listitem [ref=e28]:
            - link "Thế giới xe đạp Việt" [ref=e29] [cursor=pointer]:
              - /url: lien-he
              - text: Liên hệ
        - generic [ref=e31]:
          - img [ref=e32]
          - generic [ref=e35]:
            - generic [ref=e36]: Hệ thống
            - generic "Map" [ref=e37]: showroom
        - link "Giỏ hàng 0" [ref=e40] [cursor=pointer]:
          - /url: gio-hang
          - img [ref=e41]
          - generic [ref=e46]:
            - generic [ref=e47]: Giỏ hàng
            - generic [ref=e48]: "0"
      - generic [ref=e51]:
        - link "THẾ GIỚI XE ĐẠP VŨNG TÀU" [ref=e53] [cursor=pointer]:
          - /url: san-pham
          - img [ref=e54]
          - paragraph [ref=e55]: Danh mục sản phẩm
        - generic [ref=e57]:
          - link "Tags xe đua" [ref=e59] [cursor=pointer]:
            - /url: tags-xe-dua
          - link "Tags xe đoàn" [ref=e61] [cursor=pointer]:
            - /url: tags-xe-doan
          - link "Xe đạp cao cấp" [ref=e63] [cursor=pointer]:
            - /url: xe-dap-cao-cap
          - link "Xe đạp giá tốt" [ref=e65] [cursor=pointer]:
            - /url: xe-dap-gia-tot
        - generic [ref=e67]:
          - textbox "Tìm kiếm sản phẩm...." [ref=e68]
          - button [ref=e69] [cursor=pointer]
    - list [ref=e73]:
      - listitem [ref=e74]:
        - link "Trang chủ" [ref=e75] [cursor=pointer]:
          - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/
          - img [ref=e76]
          - generic [ref=e78]: Trang chủ
      - listitem [ref=e79]:
        - text: /
        - link "Hãng Asama" [ref=e80] [cursor=pointer]:
          - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/hang-asama
    - generic [ref=e81]:
      - generic [ref=e84]:
        - generic [ref=e85]:
          - heading "Hãng Asama" [level=2] [ref=e87]
          - paragraph [ref=e89]:
            - strong [ref=e90]: ASAMA
            - text: là thương hiệu xe đạp có nguồn gốc từ Đài Loan, với lịch sử phát triển từ năm
            - strong [ref=e91]: "1954"
            - text: . Tại Việt Nam, ASAMA chính thức hoạt động từ
            - strong [ref=e92]: năm 2000
            - text: với nhà máy tại Khu công nghiệp Sóng Thần 2, Dĩ An, Bình Dương. Đến năm 2004, ASAMA bắt đầu xây dựng và phát triển thương hiệu xe đạp tại thị trường Việt Nam, cung cấp đa dạng các dòng xe từ
            - strong [ref=e93]: xe thành phố, xe trẻ em, xe dã ngoại đến xe đạp địa hình, xe đua, BMX, Fixie và xe đạp điện
        - generic [ref=e95]:
          - img "Logo Hãng Asama" [ref=e97]
          - img "Hãng Asama" [ref=e99]
      - generic [ref=e102]:
        - button "Tổng quan" [ref=e103] [cursor=pointer]:
          - generic [ref=e104]: Tổng quan
        - button "Sản phẩm" [ref=e105] [cursor=pointer]:
          - generic [ref=e106]: Sản phẩm
        - button "Khách hàng" [ref=e107] [cursor=pointer]:
          - generic [ref=e108]: Khách hàng
        - button "Chính sách" [ref=e109] [cursor=pointer]:
          - generic [ref=e110]: Chính sách
      - generic [ref=e112]:
        - generic [ref=e116]:
          - paragraph [ref=e117]:
            - strong [ref=e118]: ASAMA
            - text: là một thương hiệu xe đạp có nguồn gốc từ Đài Loan và đã có quá trình phát triển lâu dài trong ngành công nghiệp xe đạp. Với hệ thống sản xuất tại nhiều quốc gia, ASAMA hiện cung cấp các sản phẩm cho nhiều thị trường trên thế giới.
          - paragraph [ref=e119]: Tại Việt Nam, ASAMA đã xây dựng nhà máy và phát triển thương hiệu trong hơn hai thập kỷ, trở thành một cái tên quen thuộc với người sử dụng xe đạp ở nhiều độ tuổi.
          - heading "ASAMA có nguồn gốc từ đâu?" [level=2] [ref=e120]
          - paragraph [ref=e121]:
            - text: Tên gọi
            - strong [ref=e122]: ASAMA
            - text: được lấy cảm hứng từ
            - strong [ref=e123]: núi lửa Asama tại Nhật Bản
            - text: . Tuy nhiên, điều này không có nghĩa ASAMA là thương hiệu xe đạp Nhật Bản.
          - paragraph [ref=e124]:
            - text: Theo thông tin từ ASAMA Việt Nam, tập đoàn có nguồn gốc phát triển tại Đài Loan. Công ty
            - strong [ref=e125]: Yuh Jiun Industrial
            - text: được thành lập năm
            - strong [ref=e126]: "1972"
            - text: và trở thành một trong những cơ sở sản xuất quan trọng của tập đoàn ASAMA. Trong khi đó, lịch sử hoạt động của tập đoàn được thương hiệu giới thiệu từ năm
            - strong [ref=e127]: "1954"
            - text: .
          - paragraph [ref=e128]:
            - text: "Đây là điểm cần phân biệt khi tìm hiểu thương hiệu:"
            - strong [ref=e129]: ASAMA có nguồn gốc Đài Loan, tên thương hiệu lấy cảm hứng từ Nhật Bản
            - text: ", chứ không phải thương hiệu xe đạp Nhật Bản."
          - heading "ASAMA tại Việt Nam từ năm 2000" [level=2] [ref=e130]
          - paragraph [ref=e131]:
            - text: ASAMA Việt Nam chính thức đi vào hoạt động từ
            - strong [ref=e132]: năm 2000
            - text: ", đặt nhà máy tại"
            - strong [ref=e133]: Khu công nghiệp Sóng Thần 2, Dĩ An, Bình Dương
            - text: .
          - paragraph [ref=e134]:
            - text: Nhà máy có diện tích khoảng
            - strong [ref=e135]: 70.000 m²
            - text: ", thực hiện các hoạt động sản xuất và lắp ráp xe đạp, đồng thời sản xuất linh kiện và phụ tùng xe đạp. Theo ASAMA, cơ sở tại Việt Nam cũng tham gia sản xuất OEM cho một số thương hiệu xe đạp quốc tế."
          - paragraph [ref=e136]:
            - text: Đến
            - strong [ref=e137]: năm 2004
            - text: ", ASAMA Việt Nam chính thức xây dựng và phát triển thương hiệu xe đạp ASAMA trên thị trường Việt Nam. Đây là dấu mốc quan trọng, đưa ASAMA từ vai trò sản xuất trở thành một thương hiệu được người tiêu dùng trong nước nhận biết trực tiếp."
          - paragraph [ref=e138]: Sau hơn 20 năm hoạt động tại Việt Nam, ASAMA tiếp tục nghiên cứu và phát triển các sản phẩm phù hợp với nhu cầu sử dụng của người Việt.
          - heading "Hệ thống sản xuất của ASAMA" [level=2] [ref=e139]
          - paragraph [ref=e140]:
            - text: Theo thông tin doanh nghiệp công bố, tập đoàn ASAMA hiện có
            - strong [ref=e141]: 3 nhà máy tại Đài Loan, Việt Nam và Campuchia
            - text: ", cùng các văn phòng đại diện tại Canada và Nhật Bản."
          - paragraph [ref=e142]:
            - text: Tổng diện tích hệ thống nhà máy khoảng
            - strong [ref=e143]: 300.000 m²
            - text: ", với khoảng"
            - strong [ref=e144]: 4.000 nhân viên
            - text: và năng lực sản xuất hơn
            - strong [ref=e145]: 1 triệu xe đạp mỗi năm
            - text: phục vụ các thị trường Bắc Mỹ, Tây Âu và châu Á.
          - paragraph [ref=e146]: Quy mô này cho thấy ASAMA không chỉ tập trung vào thị trường Việt Nam mà còn tham gia vào chuỗi cung ứng xe đạp quốc tế.
          - heading "Các dòng xe đạp ASAMA tại Việt Nam" [level=2] [ref=e147]
          - paragraph [ref=e148]: Một trong những điểm mạnh của ASAMA là danh mục sản phẩm khá rộng, phục vụ nhiều nhóm người dùng.
          - heading "Xe đạp thành phố" [level=3] [ref=e149]
          - paragraph [ref=e150]:
            - strong [ref=e151]: Xe đạp thành phố ASAMA
            - text: hướng đến nhu cầu đi lại hàng ngày trong đô thị.
          - paragraph [ref=e152]: Thiết kế thường ưu tiên sự tiện dụng, tư thế ngồi thoải mái và khả năng sử dụng linh hoạt cho những quãng đường trong thành phố.
          - paragraph [ref=e153]: Đây là nhóm xe phù hợp với người đi làm, người đi học hoặc những người muốn sử dụng xe đạp như một phương tiện vận động nhẹ nhàng hàng ngày.
          - heading "Xe đạp địa hình" [level=3] [ref=e154]
          - paragraph [ref=e155]:
            - text: Đối với người yêu thích vận động và khám phá,
            - strong [ref=e156]: xe đạp địa hình ASAMA
            - text: là một trong những nhóm sản phẩm đáng chú ý.
          - paragraph [ref=e157]: Xe được thiết kế để sử dụng trên đường hỗn hợp và những địa hình phức tạp hơn xe thành phố. Tùy từng model, xe có thể sử dụng khung hợp kim nhôm, hệ thống nhiều cấp số và phuộc giảm xóc.
          - paragraph [ref=e158]: ASAMA hiện phân loại sản phẩm theo nhiều nhu cầu sử dụng, trong đó có đường bằng phẳng, đường kết hợp và địa hình phức tạp.
          - heading "Xe đạp đường trường" [level=3] [ref=e159]
          - paragraph [ref=e160]:
            - text: ASAMA cũng phát triển các mẫu
            - strong [ref=e161]: xe đạp đua/xe đạp đường trường
            - text: dành cho người quan tâm đến tốc độ và hiệu suất đạp.
          - paragraph [ref=e162]: Nhóm xe này phù hợp với người thường xuyên tập luyện, đạp xe đường dài hoặc tham gia các hoạt động thể thao bằng xe đạp.
          - heading "Xe đạp dã ngoại" [level=3] [ref=e163]
          - paragraph [ref=e164]:
            - strong [ref=e165]: Xe đạp dã ngoại
            - text: hướng đến những chuyến đi thư giãn, khám phá và vận động ngoài trời.
          - paragraph [ref=e166]: Đây là nhóm xe nằm giữa nhu cầu đi lại hàng ngày và những chuyến đạp xe dài hơn, phù hợp với người muốn sử dụng xe cho các hoạt động cuối tuần hoặc các chuyến đi cùng gia đình, bạn bè.
          - heading "Xe đạp trẻ em" [level=3] [ref=e167]
          - paragraph [ref=e168]: ASAMA có nhiều sản phẩm dành cho trẻ em với kích thước khác nhau.
          - paragraph [ref=e169]: Danh mục xe hiện có các mẫu dành cho trẻ từ những độ tuổi khác nhau, giúp phụ huynh lựa chọn xe dựa trên chiều cao, độ tuổi và khả năng điều khiển của trẻ.
          - heading "BMX và Fixie" [level=3] [ref=e170]
          - paragraph [ref=e171]:
            - text: ASAMA cũng phát triển nhóm
            - strong [ref=e172]: xe BMX và Fixie
            - text: ", hướng đến những người trẻ yêu thích phong cách xe đạp cá tính và nghệ thuật đường phố."
          - paragraph [ref=e173]: BMX phù hợp với các hoạt động vận động và kỹ thuật xe, trong khi Fixie mang phong cách tối giản, phù hợp với nhu cầu sử dụng trong đô thị.
          - heading "Xe đạp điện" [level=3] [ref=e174]
          - paragraph [ref=e175]:
            - text: Bên cạnh xe đạp truyền thống, ASAMA còn có
            - strong [ref=e176]: dòng xe đạp điện
            - text: ", mở rộng lựa chọn cho người dùng muốn kết hợp giữa đạp xe và hỗ trợ từ động cơ điện."
          - paragraph [ref=e177]
          - heading "ASAMA và thị trường xe đạp Việt Nam" [level=1] [ref=e178]
          - paragraph [ref=e179]: Sau khi chính thức hoạt động tại Việt Nam từ năm 2000 và phát triển thương hiệu từ năm 2004, ASAMA đã có thời gian dài xây dựng thị trường trong nước.
          - paragraph [ref=e180]:
            - text: Một dấu ấn đáng chú ý là ASAMA Việt Nam cho biết thương hiệu đã được khách hàng bình chọn và công nhận danh hiệu
            - strong [ref=e181]: Hàng Việt Nam Chất Lượng Cao trong nhiều năm, từ năm 2013 đến nay
            - text: .
          - paragraph [ref=e182]:
            - text: Đây là yếu tố giúp ASAMA tạo được lợi thế về nhận diện tại Việt Nam, đặc biệt với nhóm khách hàng ưu tiên thương hiệu có
            - strong [ref=e183]: sản xuất và hoạt động lâu năm trong nước
            - text: .
          - heading "ASAMA – Hành trình hơn 20 năm tại Việt Nam" [level=1] [ref=e184]
          - paragraph [ref=e185]: Từ một thương hiệu có nguồn gốc Đài Loan, ASAMA đã xây dựng được nền tảng sản xuất tại Việt Nam và phát triển thành một thương hiệu quen thuộc trên thị trường xe đạp trong nước.
          - paragraph [ref=e186]:
            - text: Với nhà máy tại Dĩ An, danh mục sản phẩm đa dạng và kinh nghiệm lâu năm trong ngành,
            - strong [ref=e187]: ASAMA tiếp tục hướng đến việc mang đến những chiếc xe phù hợp với nhiều nhu cầu sử dụng – từ đi lại hàng ngày, rèn luyện sức khỏe đến thể thao và khám phá
            - text: .
          - link "Xem thêm bài viết" [ref=e190] [cursor=pointer]:
            - /url: javascript:;
            - text: Xem thêm bài viết
        - generic [ref=e197]:
          - generic [ref=e199]:
            - paragraph [ref=e200]: 70 + năm
            - generic [ref=e201]: Lịch sử
          - generic [ref=e203]:
            - paragraph [ref=e204]: 3 +
            - generic [ref=e205]: Thị trường quốc tế
          - generic [ref=e207]:
            - paragraph [ref=e208]: 1 + triệu xe
            - generic [ref=e209]: Quy mô sản xuất
      - generic [ref=e212]:
        - heading "Các sản phẩm của Hãng Asama" [level=2] [ref=e214]
        - tablist "Lọc sản phẩm theo danh mục" [ref=e215]:
          - tab "Tất cả" [selected] [ref=e216] [cursor=pointer]
          - tab "Xe Đạp Trẻ Em" [ref=e217] [cursor=pointer]
          - tab "Xe Đạp Địa Hình" [ref=e218] [cursor=pointer]
          - tab "Xe Đạp Đường Phố" [ref=e219] [cursor=pointer]
          - tab "Xe đạp gấp" [ref=e220] [cursor=pointer]
        - generic [ref=e221]:
          - generic [ref=e222]:
            - generic:
              - generic:
                - generic: "-1%"
                - link "Thế giới xe đạp Việt":
                  - /url: xe-dap-duong-pho-asama-pu-27-banh-27-inches
                  - generic:
                    - img "Xe đạp đường phố Asama PU 27 - Bánh 27 Inches"
              - generic:
                - heading "Thế giới xe đạp Việt" [level=3]:
                  - link "Thế giới xe đạp Việt":
                    - /url: xe-dap-duong-pho-asama-pu-27-banh-27-inches
                    - text: Xe đạp đường phố Asama PU 27 - Bánh 27 Inches
                - generic:
                  - paragraph:
                    - generic: 4.350.000đ
                  - paragraph:
                    - generic: 4.400.000đ
                - generic:
                  - button "Thêm vào giỏ hàng":
                    - link:
                      - /url: xe-dap-duong-pho-asama-pu-27-banh-27-inches
                  - button "Mua ngay":
                    - link "Mua ngay":
                      - /url: xe-dap-duong-pho-asama-pu-27-banh-27-inches
          - generic [ref=e223]:
            - generic:
              - generic:
                - generic: "-2%"
                - link "Thế giới xe đạp Việt":
                  - /url: xe-dap-dia-hinh-asama-trkfl2602-banh-26-inches
                  - generic:
                    - img "Xe đạp địa hình Asama TRKFL2602 - Bánh 26 Inches"
              - generic:
                - heading "Thế giới xe đạp Việt" [level=3]:
                  - link "Thế giới xe đạp Việt":
                    - /url: xe-dap-dia-hinh-asama-trkfl2602-banh-26-inches
                    - text: Xe đạp địa hình Asama TRKFL2602 - Bánh 26 Inches
                - generic:
                  - paragraph:
                    - generic: 4.800.000đ
                  - paragraph:
                    - generic: 4.900.000đ
                - generic:
                  - button "Thêm vào giỏ hàng":
                    - link:
                      - /url: xe-dap-dia-hinh-asama-trkfl2602-banh-26-inches
                  - button "Mua ngay":
                    - link "Mua ngay":
                      - /url: xe-dap-dia-hinh-asama-trkfl2602-banh-26-inches
          - generic [ref=e224]:
            - generic:
              - generic:
                - generic: "-2%"
                - link "Thế giới xe đạp Việt":
                  - /url: xe-dap-dia-hinh-asama-2605-banh-26-inches
                  - generic:
                    - img "Xe đạp địa hình Asama 2605 -Bánh 26 Inches"
              - generic:
                - heading "Thế giới xe đạp Việt" [level=3]:
                  - link "Thế giới xe đạp Việt":
                    - /url: xe-dap-dia-hinh-asama-2605-banh-26-inches
                    - text: Xe đạp địa hình Asama 2605 -Bánh 26 Inches
                - generic:
                  - paragraph:
                    - generic: 6.200.000đ
                  - paragraph:
                    - generic: 6.300.000đ
                - generic:
                  - button "Thêm vào giỏ hàng":
                    - link:
                      - /url: xe-dap-dia-hinh-asama-2605-banh-26-inches
                  - button "Mua ngay":
                    - link "Mua ngay":
                      - /url: xe-dap-dia-hinh-asama-2605-banh-26-inches
          - generic [ref=e225]:
            - generic:
              - generic:
                - link "Thế giới xe đạp Việt":
                  - /url: xe-dap-tre-em-asama-kzb-151802-banh-18-inches
                  - generic:
                    - img "Xe đạp trẻ em Asama KZB 151802- Bánh 18 Inches"
              - generic:
                - heading "Thế giới xe đạp Việt" [level=3]:
                  - link "Thế giới xe đạp Việt":
                    - /url: xe-dap-tre-em-asama-kzb-151802-banh-18-inches
                    - text: Xe đạp trẻ em Asama KZB 151802- Bánh 18 Inches
                - generic:
                  - paragraph:
                    - generic: 3.500.000đ
                - generic:
                  - button "Thêm vào giỏ hàng":
                    - link:
                      - /url: xe-dap-tre-em-asama-kzb-151802-banh-18-inches
                  - button "Mua ngay":
                    - link "Mua ngay":
                      - /url: xe-dap-tre-em-asama-kzb-151802-banh-18-inches
          - generic [ref=e226]:
            - generic:
              - generic:
                - generic: "-2%"
                - link "Thế giới xe đạp Việt":
                  - /url: xe-dap-duong-pho-asama-trkfl-2601-banh-26-inches
                  - generic:
                    - img "Xe đạp đường phố Asama TRKFL 2601-Bánh 26 Inches"
              - generic:
                - heading "Thế giới xe đạp Việt" [level=3]:
                  - link "Thế giới xe đạp Việt":
                    - /url: xe-dap-duong-pho-asama-trkfl-2601-banh-26-inches
                    - text: Xe đạp đường phố Asama TRKFL 2601-Bánh 26 Inches
                - generic:
                  - paragraph:
                    - generic: 4.400.000đ
                  - paragraph:
                    - generic: 4.500.000đ
                - generic:
                  - button "Thêm vào giỏ hàng":
                    - link:
                      - /url: xe-dap-duong-pho-asama-trkfl-2601-banh-26-inches
                  - button "Mua ngay":
                    - link "Mua ngay":
                      - /url: xe-dap-duong-pho-asama-trkfl-2601-banh-26-inches
          - generic [ref=e227]:
            - generic:
              - generic:
                - generic: "-2%"
                - link "Thế giới xe đạp Việt":
                  - /url: xe-dap-gap-asama-fdb2001-banh-20-inches
                  - generic:
                    - img "Xe đạp gấp Asama FDB2001 - Bánh 20 Inches"
              - generic:
                - heading "Thế giới xe đạp Việt" [level=3]:
                  - link "Thế giới xe đạp Việt":
                    - /url: xe-dap-gap-asama-fdb2001-banh-20-inches
                    - text: Xe đạp gấp Asama FDB2001 - Bánh 20 Inches
                - generic:
                  - paragraph:
                    - generic: 5.500.000đ
                  - paragraph:
                    - generic: 5.600.000đ
                - generic:
                  - button "Thêm vào giỏ hàng":
                    - link:
                      - /url: xe-dap-gap-asama-fdb2001-banh-20-inches
                  - button "Mua ngay":
                    - link "Mua ngay":
                      - /url: xe-dap-gap-asama-fdb2001-banh-20-inches
          - generic [ref=e228]:
            - generic:
              - generic:
                - generic: "-5%"
                - link "Thế giới xe đạp Việt":
                  - /url: xe-dap-duong-pho-asama-27-sw2702-banh-27-inches
                  - generic:
                    - img "Xe đạp đường phố Asama 27 SW2702-Bánh 27 Inches"
              - generic:
                - heading "Thế giới xe đạp Việt" [level=3]:
                  - link "Thế giới xe đạp Việt":
                    - /url: xe-dap-duong-pho-asama-27-sw2702-banh-27-inches
                    - text: Xe đạp đường phố Asama 27 SW2702-Bánh 27 Inches
                - generic:
                  - paragraph:
                    - generic: 3.950.000đ
                  - paragraph:
                    - generic: 4.150.000đ
                - generic:
                  - button "Thêm vào giỏ hàng":
                    - link:
                      - /url: xe-dap-duong-pho-asama-27-sw2702-banh-27-inches
                  - button "Mua ngay":
                    - link "Mua ngay":
                      - /url: xe-dap-duong-pho-asama-27-sw2702-banh-27-inches
      - region "CÁC KHÁCH HÀNG CỦA THƯƠNG HIỆU" [ref=e229]:
        - heading "CÁC KHÁCH HÀNG CỦA THƯƠNG HIỆU" [level=2] [ref=e232]
        - generic [ref=e233]:
          - generic [ref=e235]:
            - generic [ref=e236]:
              - link "Hãng Asama" [ref=e237] [cursor=pointer]:
                - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/upload/product/khach-hang-asama4-594312.jpg
                - img "Hãng Asama" [ref=e238]
              - link "Hãng Asama" [ref=e239] [cursor=pointer]:
                - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/upload/product/khach-hang-asama13-142510.jpg
                - img "Hãng Asama" [ref=e240]
              - link "Hãng Asama" [ref=e241] [cursor=pointer]:
                - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/upload/product/khach-hang-asama17-58578.jpg
                - img "Hãng Asama" [ref=e242]
              - link "Hãng Asama" [ref=e243] [cursor=pointer]:
                - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/upload/product/khach-hang-asama12-1224.jpg
                - img "Hãng Asama" [ref=e244]
              - link "Hãng Asama" [ref=e245] [cursor=pointer]:
                - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/upload/product/khach-hang-asama22-55534.jpg
                - img "Hãng Asama" [ref=e246]
              - link "Hãng Asama" [ref=e247] [cursor=pointer]:
                - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/upload/product/khach-hang-asama23-33312.jpg
                - img "Hãng Asama" [ref=e248]
            - generic [ref=e249]:
              - link [ref=e250] [cursor=pointer]:
                - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/upload/product/khach-hang-asama4-594312.jpg
                - img [ref=e251]
              - link [ref=e252] [cursor=pointer]:
                - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/upload/product/khach-hang-asama13-142510.jpg
                - img [ref=e253]
              - link [ref=e254] [cursor=pointer]:
                - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/upload/product/khach-hang-asama17-58578.jpg
                - img [ref=e255]
              - link [ref=e256] [cursor=pointer]:
                - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/upload/product/khach-hang-asama12-1224.jpg
                - img [ref=e257]
              - link [ref=e258] [cursor=pointer]:
                - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/upload/product/khach-hang-asama22-55534.jpg
                - img [ref=e259]
              - link [ref=e260] [cursor=pointer]:
                - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/upload/product/khach-hang-asama23-33312.jpg
                - img [ref=e261]
          - generic [ref=e263]:
            - generic [ref=e264]:
              - link "Hãng Asama" [ref=e265] [cursor=pointer]:
                - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/upload/product/khach-hang-asama11-771411.jpg
                - img "Hãng Asama" [ref=e266]
              - link "Hãng Asama" [ref=e267] [cursor=pointer]:
                - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/upload/product/khach-hang-asama16-65989.jpg
                - img "Hãng Asama" [ref=e268]
              - link "Hãng Asama" [ref=e269] [cursor=pointer]:
                - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/upload/product/khach-hang-asama18-97727.jpg
                - img "Hãng Asama" [ref=e270]
              - link "Hãng Asama" [ref=e271] [cursor=pointer]:
                - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/upload/product/khach-hang-asama20-72185.jpg
                - img "Hãng Asama" [ref=e272]
              - link "Hãng Asama" [ref=e273] [cursor=pointer]:
                - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/upload/product/khach-hang-asama22-23693.jpg
                - img "Hãng Asama" [ref=e274]
              - link "Hãng Asama" [ref=e275] [cursor=pointer]:
                - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/upload/product/khach-hang-asama24-39951.jpg
                - img "Hãng Asama" [ref=e276]
            - generic [ref=e277]:
              - link [ref=e278] [cursor=pointer]:
                - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/upload/product/khach-hang-asama11-771411.jpg
                - img [ref=e279]
              - link [ref=e280] [cursor=pointer]:
                - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/upload/product/khach-hang-asama16-65989.jpg
                - img [ref=e281]
              - link [ref=e282] [cursor=pointer]:
                - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/upload/product/khach-hang-asama18-97727.jpg
                - img [ref=e283]
              - link [ref=e284] [cursor=pointer]:
                - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/upload/product/khach-hang-asama20-72185.jpg
                - img [ref=e285]
              - link [ref=e286] [cursor=pointer]:
                - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/upload/product/khach-hang-asama22-23693.jpg
                - img [ref=e287]
              - link [ref=e288] [cursor=pointer]:
                - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/upload/product/khach-hang-asama24-39951.jpg
                - img [ref=e289]
      - region "CHÍNH SÁCH CỦA THƯƠNG HIỆU" [ref=e290]:
        - generic [ref=e291]:
          - heading "CHÍNH SÁCH CỦA THƯƠNG HIỆU" [level=2] [ref=e293]
          - generic [ref=e294]:
            - tablist "Chính sách của thương hiệu" [ref=e295]:
              - tab "Chính sách bảo hành" [selected] [ref=e296] [cursor=pointer]
              - tab "Chính sách bảo dưỡng" [ref=e297] [cursor=pointer]
              - tab "Hướng dẫn sử dụng" [ref=e298] [cursor=pointer]
            - tabpanel "Chính sách bảo hành" [ref=e300]:
              - heading "Chính sách bảo hành" [level=3] [ref=e301]
              - paragraph [ref=e303]:
                - text: Các sản phẩm ASAMA chính hãng được hỗ trợ bảo hành đối với lỗi kỹ thuật thuộc trách nhiệm của nhà sản xuất theo điều kiện của từng dòng sản phẩm và đơn vị phân phối. Thời hạn cụ thể nên căn cứ vào phiếu bảo hành đi kèm xe. ASAMA là thương hiệu có lịch sử từ
                - strong [ref=e304]: "1954"
                - text: và sản phẩm đạt nhiều chứng nhận như ISO 9001, JIS, CPSA và SG Mark.
    - generic [ref=e306]:
      - heading "HỆ THỐNG CỬA HÀNG" [level=2] [ref=e308]
      - generic [ref=e309]:
        - iframe [ref=e313]:
          
        - generic [ref=e315]:
          - article [ref=e316] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 345 NGUYỄN AN NINH CHI NHÁNH 02 - VŨNG TÀU" [ref=e317]:
              - img "THẾ GIỚI XE ĐẠP 345 NGUYỄN AN NINH CHI NHÁNH 02 - VŨNG TÀU" [ref=e318]
            - generic [ref=e319]:
              - heading "THẾ GIỚI XE ĐẠP 345 NGUYỄN AN NINH CHI NHÁNH 02 - VŨNG TÀU" [level=3] [ref=e320]
              - generic [ref=e321]:
                - paragraph [ref=e322]:
                  - strong [ref=e323]: "Địa chỉ:"
                  - text: 345 Nguyễn An Ninh, Phường Tam Thắng, Thành phố Hồ Chí Minh(Gần Coopmart)
                - paragraph [ref=e324]:
                  - strong [ref=e325]: "Điện thoại:"
                  - text: 0886.172.172
                - paragraph [ref=e326]:
                  - strong [ref=e327]: "FB:"
                  - link "Thế giới xe đạp Vũng Tàu" [ref=e328]:
                    - /url: https://www.facebook.com/hethongbanlexedapuytinnhatvungtau
                - paragraph [ref=e329]
              - link "Chỉ đường" [ref=e330]:
                - /url: https://maps.app.goo.gl/RZagH1T316P3r4Ri9
                - text: Chỉ đường
          - article [ref=e332] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 323 NGUYỄN AN NINH CHI NHÁNH 07 - VŨNG TÀU" [ref=e333]:
              - img "THẾ GIỚI XE ĐẠP 323 NGUYỄN AN NINH CHI NHÁNH 07 - VŨNG TÀU" [ref=e334]
            - generic [ref=e335]:
              - heading "THẾ GIỚI XE ĐẠP 323 NGUYỄN AN NINH CHI NHÁNH 07 - VŨNG TÀU" [level=3] [ref=e336]
              - generic [ref=e337]:
                - paragraph [ref=e338]:
                  - strong [ref=e339]: "Địa chỉ:"
                  - text: 323/7A, 323 Nguyễn An Ninh, Tam Thắng, Hồ Chí Minh
                - paragraph [ref=e340]:
                  - strong [ref=e341]: "Điện thoại:"
                  - text: 0359.52.72.72
                - paragraph [ref=e342]:
                  - strong [ref=e343]: "FB:"
                  - link "Trung tâm xe điện thông minh" [ref=e344]:
                    - /url: https://www.facebook.com/xedienthongminh323
              - link "Chỉ đường" [ref=e345]:
                - /url: https://maps.app.goo.gl/Rqg7Pg3BfQJWzsib7
                - text: Chỉ đường
          - article [ref=e347] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 763A BÌNH GIÃ CHI NHÁNH 09 - VŨNG TÀU" [ref=e348]:
              - img "THẾ GIỚI XE ĐẠP 763A BÌNH GIÃ CHI NHÁNH 09 - VŨNG TÀU" [ref=e349]
            - generic [ref=e350]:
              - heading "THẾ GIỚI XE ĐẠP 763A BÌNH GIÃ CHI NHÁNH 09 - VŨNG TÀU" [level=3] [ref=e351]
              - generic [ref=e352]:
                - paragraph [ref=e353]:
                  - strong [ref=e354]: "Địa chỉ:"
                  - text: 763 Bình Giã, Phường Rạch Dừa, Thành phố Hồ Chí Minh(Gần chợ Lưu Chí Hiếu)
                - paragraph [ref=e355]:
                  - strong [ref=e356]: "Điện thoại:"
                  - text: 0797.172.172
                - paragraph [ref=e357]:
                  - strong [ref=e358]: "FB:"
                  - link "Thế giới xe đạp Yadea" [ref=e359]:
                    - /url: https://www.facebook.com/profile.php?id=100093542268533
              - link "Chỉ đường" [ref=e360]:
                - /url: https://maps.app.goo.gl/HwHwTDP3VJtoDcLr5
                - text: Chỉ đường
          - article [ref=e362] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 679 30/4 CHI NHÁNH 01 - VŨNG TÀU" [ref=e363]:
              - img "THẾ GIỚI XE ĐẠP 679 30/4 CHI NHÁNH 01 - VŨNG TÀU" [ref=e364]
            - generic [ref=e365]:
              - heading "THẾ GIỚI XE ĐẠP 679 30/4 CHI NHÁNH 01 - VŨNG TÀU" [level=3] [ref=e366]
              - generic [ref=e367]:
                - paragraph [ref=e368]:
                  - strong [ref=e369]: "Địa chỉ:"
                  - text: 679 Đường 30/4, Phường Rạch Dừa, Thành phố Hồ Chí Minh(Gần nhà hàng tiệc cưới Hải Phương)
                - paragraph [ref=e370]:
                  - strong [ref=e371]: "Điện thoại:"
                  - text: 0866.650.650
                - paragraph [ref=e372]:
                  - strong [ref=e373]: "FB:"
                  - link "Thế giới xe đạp 679" [ref=e374]:
                    - /url: https://www.facebook.com/Th%E1%BA%BF-gi%E1%BB%9Bi-xe-%C4%91%E1%BA%A1p-679-102705888542682
              - link "Chỉ đường" [ref=e375]:
                - /url: https://maps.app.goo.gl/mANCNhqQ5iL8d5pC8
                - text: Chỉ đường
          - article [ref=e377] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 577 CMT8 CHI NHÁNH 5 - BÀ RỊA" [ref=e378]:
              - img "THẾ GIỚI XE ĐẠP 577 CMT8 CHI NHÁNH 5 - BÀ RỊA" [ref=e379]
            - generic [ref=e380]:
              - heading "THẾ GIỚI XE ĐẠP 577 CMT8 CHI NHÁNH 5 - BÀ RỊA" [level=3] [ref=e381]
              - generic [ref=e382]:
                - paragraph [ref=e383]:
                  - strong [ref=e384]: "Địa chỉ:"
                  - text: 557 Cách Mạng Tháng Tám, Phường Bà Rịa, Thành phố Hồ Chí Minh
                - paragraph [ref=e385]: "Hotline/Zalo: 0877.272.272"
                - paragraph [ref=e386]:
                  - strong [ref=e387]: "FB:"
                  - link "Xe điện Pega Bà Rịa" [ref=e388]:
                    - /url: https://www.facebook.com/thegioixedapbaria
              - link "Chỉ đường" [ref=e389]:
                - /url: https://maps.app.goo.gl/afG5G5LoHUNGeYYQA
                - text: Chỉ đường
          - article [ref=e391] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP TÂN HÒA PHÚ MỸ CHI NHÁNH 06 - BÀ RỊA" [ref=e392]:
              - img "THẾ GIỚI XE ĐẠP TÂN HÒA PHÚ MỸ CHI NHÁNH 06 - BÀ RỊA" [ref=e393]
            - generic [ref=e394]:
              - heading "THẾ GIỚI XE ĐẠP TÂN HÒA PHÚ MỸ CHI NHÁNH 06 - BÀ RỊA" [level=3] [ref=e395]
              - generic [ref=e396]:
                - paragraph [ref=e397]:
                  - strong [ref=e398]: "Địa chỉ:"
                  - text: 252 Quốc lộ 51 ( Ngã 3 Hội Bài) Tân Hòa, Phường Tân Hòa, Thành phố Hồ Chí Minh
                - paragraph [ref=e399]:
                  - strong [ref=e400]: "Điện thoại:"
                  - text: 0868.272.272
                - paragraph [ref=e401]:
                  - strong [ref=e402]: "FB:"
                  - link "Thế giới xe đạp Phú Mỹ" [ref=e403]:
                    - /url: https://www.facebook.com/thegioixedapphumy
              - link "Chỉ đường" [ref=e404]:
                - /url: https://maps.app.goo.gl/XSDAfwsyt8yX6VwF8
                - text: Chỉ đường
          - article [ref=e406] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP MỸ XUÂN 1 CHI NHÁNH 03 - BÀ RỊA" [ref=e407]:
              - img "THẾ GIỚI XE ĐẠP MỸ XUÂN 1 CHI NHÁNH 03 - BÀ RỊA" [ref=e408]
            - generic [ref=e409]:
              - heading "THẾ GIỚI XE ĐẠP MỸ XUÂN 1 CHI NHÁNH 03 - BÀ RỊA" [level=3] [ref=e410]
              - generic [ref=e411]:
                - paragraph [ref=e412]:
                  - strong [ref=e413]: "Địa chỉ:"
                  - text: Quốc lộ 51, KP Thị Vải, Phường Phú Mỹ, Thành phố Hồ Chí Minh(Gần ngã ba Mỹ Xuân)
                - paragraph [ref=e414]:
                  - strong [ref=e415]: "Điện thoại:"
                  - text: 0836.72.79.79
                - paragraph [ref=e416]:
                  - strong [ref=e417]: "FB:"
                  - link "Thế giới xe đạp đúng giá - đúng chất lượng" [ref=e418]:
                    - /url: https://www.facebook.com/Th%E1%BA%BF-Gi%E1%BB%9Bi-Xe-%C4%90%E1%BA%A1p-%C4%91%C3%BAng-gi%C3%A1-%C4%91%C3%BAng-ch%E1%BA%A5t-l%C6%B0%E1%BB%A3ng-344114132875576
              - link "Chỉ đường" [ref=e419]:
                - /url: https://maps.app.goo.gl/M9L7pGwwX1j6MvUy7
                - text: Chỉ đường
          - article [ref=e421] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP VIỆT KIỀU MỸ XUÂN 2 CHI NHÁNH 08 - BÀ RỊA" [ref=e422]:
              - img "THẾ GIỚI XE ĐẠP VIỆT KIỀU MỸ XUÂN 2 CHI NHÁNH 08 - BÀ RỊA" [ref=e423]
            - generic [ref=e424]:
              - heading "THẾ GIỚI XE ĐẠP VIỆT KIỀU MỸ XUÂN 2 CHI NHÁNH 08 - BÀ RỊA" [level=3] [ref=e425]
              - generic [ref=e426]:
                - paragraph [ref=e427]:
                  - strong [ref=e428]: "Địa chỉ:"
                  - text: QL51( đầu chợ Việt Kiều) khu phố Mỹ Thạnh, Phường Phú Mỹ, Thành phố Hồ Chí Minh
                - paragraph [ref=e429]:
                  - strong [ref=e430]: "Hotline:"
                  - text: 0856.772.772
                - paragraph [ref=e431]:
                  - strong [ref=e432]: "FB:"
                  - link "Thế giới xe đạp Việt Kiều" [ref=e433]:
                    - /url: https://www.facebook.com/profile.php?id=100082745725802
              - link "Chỉ đường" [ref=e434]:
                - /url: https://maps.app.goo.gl/H5s9NK3PHh3huhP8A
                - text: Chỉ đường
          - article [ref=e436] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 198 HÙNG VƯƠNG CHI NHÁNH 04 - NHƠN TRẠCH ĐỒNG NAI" [ref=e437]:
              - img "THẾ GIỚI XE ĐẠP 198 HÙNG VƯƠNG CHI NHÁNH 04 - NHƠN TRẠCH ĐỒNG NAI" [ref=e438]
            - generic [ref=e439]:
              - heading "THẾ GIỚI XE ĐẠP 198 HÙNG VƯƠNG CHI NHÁNH 04 - NHƠN TRẠCH ĐỒNG NAI" [level=3] [ref=e440]
              - generic [ref=e441]:
                - paragraph [ref=e442]:
                  - strong [ref=e443]: "Địa chỉ:"
                  - text: 198 Đ. Hùng Vương, Phường Nhơn Trạch, TP Đồng Nai
                - paragraph [ref=e444]:
                  - strong [ref=e445]: "Điện thoại:"
                  - text: 0855.387.345
                - paragraph [ref=e446]:
                  - strong [ref=e447]: "FB:"
                  - link "Thế giới xe đạp Nhơn Trạch" [ref=e448]:
                    - /url: https://www.facebook.com/Th%E1%BA%BF-gi%E1%BB%9Bi-xe-%C4%91%E1%BA%A1p-Nh%C6%A1n-Tr%E1%BA%A1ch-103768937916334
              - link "Chỉ đường" [ref=e449]:
                - /url: https://maps.app.goo.gl/nTJy6foVA54ykiZB7
                - text: Chỉ đường
          - article [ref=e451] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 19 ĐỒNG KHỞI CHI NHÁNH 10 - ĐỒNG NAI" [ref=e452]:
              - img "THẾ GIỚI XE ĐẠP 19 ĐỒNG KHỞI CHI NHÁNH 10 - ĐỒNG NAI" [ref=e453]
            - generic [ref=e454]:
              - heading "THẾ GIỚI XE ĐẠP 19 ĐỒNG KHỞI CHI NHÁNH 10 - ĐỒNG NAI" [level=3] [ref=e455]
              - generic [ref=e456]:
                - paragraph [ref=e457]:
                  - strong [ref=e458]: "Địa chỉ:"
                  - text: 19 Đ. Đồng Khởi, Phường Tam Hiệp, TP Đồng Nai
                - paragraph [ref=e459]:
                  - strong [ref=e460]: "Điện thoại:"
                  - text: 0385.21.21.68
                - paragraph [ref=e461]:
                  - strong [ref=e462]: "FB:"
                  - link "Thế Giới Xe Đạp 19 Đồng Khởi" [ref=e463]:
                    - /url: https://www.facebook.com/profile.php?id=61562540870293
              - link "Chỉ đường" [ref=e464]:
                - /url: https://maps.app.goo.gl/cbjJXzqqnsvBbLha6
                - text: Chỉ đường
          - article [ref=e466] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 32 ĐỒNG KHỞI CHI NHÁNH 11 - ĐỒNG NAI" [ref=e467]:
              - img "THẾ GIỚI XE ĐẠP 32 ĐỒNG KHỞI CHI NHÁNH 11 - ĐỒNG NAI" [ref=e468]
            - generic [ref=e469]:
              - heading "THẾ GIỚI XE ĐẠP 32 ĐỒNG KHỞI CHI NHÁNH 11 - ĐỒNG NAI" [level=3] [ref=e470]
              - generic [ref=e471]:
                - paragraph [ref=e472]:
                  - strong [ref=e473]: "Địa chỉ:"
                  - text: 32-34 Đồng Khởi, phường Tam Hiệp, TP Đồng Nai (đi qua bệnh viện Đồng Nai về hướng Amata khoảng 200m)
                - paragraph [ref=e474]:
                  - strong [ref=e475]: "Điện thoại:"
                  - text: 0372.59.59.89
                - paragraph [ref=e476]:
                  - strong [ref=e477]: "FB:"
                  - link "Thế giới xe đạp Đồng Khởi -Biên Hoà" [ref=e478]:
                    - /url: https://www.facebook.com/profile.php?id=61575874576218
              - link "Chỉ đường" [ref=e479]:
                - /url: https://maps.app.goo.gl/bV9nDyQCXvxkSkXe9
                - text: Chỉ đường
          - article [ref=e481] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 262 30/4 CHI NHÁNH 13 - THỦ DẦU MỘT BÌNH DƯƠNG" [ref=e482]:
              - img "THẾ GIỚI XE ĐẠP 262 30/4 CHI NHÁNH 13 - THỦ DẦU MỘT BÌNH DƯƠNG" [ref=e483]
            - generic [ref=e484]:
              - heading "THẾ GIỚI XE ĐẠP 262 30/4 CHI NHÁNH 13 - THỦ DẦU MỘT BÌNH DƯƠNG" [level=3] [ref=e485]
              - generic [ref=e486]:
                - paragraph [ref=e487]:
                  - strong [ref=e488]: "Địa chỉ:"
                  - text: 262, Đ.30/4, P. Chánh Nghĩa, Phường Thủ Dầu Một, Thành phố Hồ Chí Minh
                - paragraph [ref=e489]:
                  - strong [ref=e490]: "Điện thoại:"
                  - text: 0862.725.472
                - paragraph [ref=e491]:
                  - strong [ref=e492]: "FB:"
                  - link "Thế giới xe đạp Thủ Một Dầu Bình Dương" [ref=e493]:
                    - /url: https://www.facebook.com/profile.php?id=61576103733740
              - link "Chỉ đường" [ref=e494]:
                - /url: https://maps.app.goo.gl/jdqQjYYni1XyVh2VA
                - text: Chỉ đường
          - article [ref=e496] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 24 NGUYỄN AN NINH CHI NHÁNH 14 - DĨ AN BÌNH DƯƠNG" [ref=e497]:
              - img "THẾ GIỚI XE ĐẠP 24 NGUYỄN AN NINH CHI NHÁNH 14 - DĨ AN BÌNH DƯƠNG" [ref=e498]
            - generic [ref=e499]:
              - heading "THẾ GIỚI XE ĐẠP 24 NGUYỄN AN NINH CHI NHÁNH 14 - DĨ AN BÌNH DƯƠNG" [level=3] [ref=e500]
              - generic [ref=e501]:
                - paragraph [ref=e502]:
                  - strong [ref=e503]: "Địa chỉ:"
                  - text: 24 Nguyễn An Ninh, Phường Dĩ An, Thành phố Hồ Chí Minh
                - paragraph [ref=e504]:
                  - strong [ref=e505]: "Điện thoại:"
                  - text: 0862.726.472
                - paragraph [ref=e506]:
                  - strong [ref=e507]: "Facebook:"
                  - strong [ref=e508]
                  - link "Thế Giới Xe Đạp Dĩ An - Bình Dương" [ref=e509]:
                    - /url: https://www.facebook.com/profile.php?id=61576318119691
              - link "Chỉ đường" [ref=e510]:
                - /url: https://maps.app.goo.gl/8HGnHtxL6vfWoCx49
                - text: Chỉ đường
      - generic [ref=e512]:
        - article [ref=e514]:
          - img "Bảo Hành Chính Hãng (1) (1) Khung hợp kim bền bỉ" [ref=e516]
          - heading "Bảo Hành Chính Hãng (1) (1) Khung hợp kim bền bỉ" [level=3] [ref=e517]
          - paragraph [ref=e518]: Khung hợp kim bền bỉ Khung hợp kim bền bỉ Khung hợp kim bền bỉ
        - article [ref=e520]:
          - img "Bảo Hành Chính Hãng (1)" [ref=e522]
          - heading "Bảo Hành Chính Hãng (1)" [level=3] [ref=e523]
          - paragraph [ref=e524]: Khung hợp kim bền bỉ
        - article [ref=e526]:
          - img "Bảo Hành Chính Hãng" [ref=e528]
          - heading "Bảo Hành Chính Hãng" [level=3] [ref=e529]
          - paragraph [ref=e530]: Khung hợp kim bền bỉ
        - article [ref=e532]:
          - img "Đổi Trả Hàng 3 Ngày" [ref=e534]
          - heading "Đổi Trả Hàng 3 Ngày" [level=3] [ref=e535]
        - article [ref=e537]:
          - img "Vận chuyển miễn phí < 50km" [ref=e539]
          - heading "Vận chuyển miễn phí < 50km" [level=3] [ref=e540]
    - generic [ref=e541]:
      - generic [ref=e543]:
        - generic [ref=e544]:
          - generic [ref=e546]:
            - link "Thế giới xe đạp Việt" [ref=e547] [cursor=pointer]:
              - /url: /
              - img "Thế giới xe đạp Việt" [ref=e548]
            - heading "Thế giới xe đạp Việt" [level=2] [ref=e549]
            - generic [ref=e550]:
              - paragraph [ref=e551]:
                - strong [ref=e552]: CÔNG TY TNHH TM & DV GIẢI TRÍ TÂN TRƯỜNG GIANG
              - paragraph [ref=e553]:
                - strong [ref=e554]: "Địa chỉ:"
                - text: 345 Nguyễn An Ninh, Phường Tam Thắng, Thành phố Hồ Chí Minh, Việt Nam
              - paragraph [ref=e555]:
                - strong [ref=e556]: "GPKD số:"
                - text: "3502329410"
              - paragraph [ref=e557]:
                - strong [ref=e558]: "Ngày cấp:"
                - text: 08/03/2017
              - paragraph [ref=e559]:
                - strong [ref=e560]: "Nơi cấp:"
                - text: Thuế cơ sở 24 TP Hồ Chí Minh
            - paragraph [ref=e561]: Theo dõi chúng tôi tại
            - generic [ref=e562]:
              - link "Thế giới xe đạp Việt" [ref=e563] [cursor=pointer]:
                - /url: ""
                - img "Thế giới xe đạp Việt" [ref=e564]
              - link "Thế giới xe đạp Việt" [ref=e565] [cursor=pointer]:
                - /url: ""
                - img "Thế giới xe đạp Việt" [ref=e566]
              - link "Thế giới xe đạp Việt" [ref=e567] [cursor=pointer]:
                - /url: ""
                - img "Thế giới xe đạp Việt" [ref=e568]
              - link "Thế giới xe đạp Việt" [ref=e569] [cursor=pointer]:
                - /url: ""
                - img "Thế giới xe đạp Việt" [ref=e570]
              - link "Thế giới xe đạp Việt" [ref=e571] [cursor=pointer]:
                - /url: ""
                - img "Thế giới xe đạp Việt" [ref=e572]
          - link "Thế giới xe đạp Việt" [ref=e574] [cursor=pointer]:
            - /url: javascript:;
            - img "Thế giới xe đạp Việt" [ref=e575]
        - generic [ref=e576]:
          - generic [ref=e577]:
            - heading "Xe Đạp Trẻ Em" [level=3] [ref=e578]:
              - link "Xe Đạp Trẻ Em" [ref=e579] [cursor=pointer]:
                - /url: xe-dap-tre-em
            - list [ref=e580]:
              - listitem [ref=e581]:
                - link "Size 12 (2-4 tuổi)" [ref=e582] [cursor=pointer]:
                  - /url: size-12-2-4-tuoi
              - listitem [ref=e583]:
                - link "Size 14 (3-5 tuổi)" [ref=e584] [cursor=pointer]:
                  - /url: size-14-3-5-tuoi
              - listitem [ref=e585]:
                - link "Size 16 (4-7 tuổi)" [ref=e586] [cursor=pointer]:
                  - /url: size-16-4-7-tuoi
              - listitem [ref=e587]:
                - link "Size 18 (6-8 tuổi)" [ref=e588] [cursor=pointer]:
                  - /url: size-18-6-8-tuoi
              - listitem [ref=e589]:
                - link "Size 20 (7-9 tuổi)" [ref=e590] [cursor=pointer]:
                  - /url: size-20-7-9-tuoi
              - listitem [ref=e591]:
                - link "Size 22 (8-10 tuổi)" [ref=e592] [cursor=pointer]:
                  - /url: size-22-8-10-tuoi
          - generic [ref=e593]:
            - heading "Xe Đạp Địa Hình" [level=3] [ref=e594]:
              - link "Xe Đạp Địa Hình" [ref=e595] [cursor=pointer]:
                - /url: xe-dap-dia-hinh
            - list [ref=e596]:
              - listitem [ref=e597]:
                - link "Bánh 29" [ref=e598] [cursor=pointer]:
                  - /url: banh-29-inches
              - listitem [ref=e599]:
                - link "Bánh 27.5" [ref=e600] [cursor=pointer]:
                  - /url: banh-275
              - listitem [ref=e601]:
                - link "Bánh 24" [ref=e602] [cursor=pointer]:
                  - /url: banh-24
              - listitem [ref=e603]:
                - link "Bánh 26" [ref=e604] [cursor=pointer]:
                  - /url: banh-26
          - generic [ref=e605]:
            - heading "Xe Đạp Đua" [level=3] [ref=e606]:
              - link "Xe Đạp Đua" [ref=e607] [cursor=pointer]:
                - /url: xe-dap-dua
            - list
          - generic [ref=e608]:
            - heading "Xe Đạp Đường Phố" [level=3] [ref=e609]:
              - link "Xe Đạp Đường Phố" [ref=e610] [cursor=pointer]:
                - /url: xe-dap-duong-pho
            - list [ref=e611]:
              - listitem [ref=e612]:
                - link "Bánh 27 Inches" [ref=e613] [cursor=pointer]:
                  - /url: banh-27-inches
              - listitem [ref=e614]:
                - link "Bánh 26 inches" [ref=e615] [cursor=pointer]:
                  - /url: banh-26-inches
              - listitem [ref=e616]:
                - link "Bánh 700C" [ref=e617] [cursor=pointer]:
                  - /url: banh-700c
          - generic [ref=e618]:
            - heading "Xe Đạp Nữ" [level=3] [ref=e619]:
              - link "Xe Đạp Nữ" [ref=e620] [cursor=pointer]:
                - /url: xe-dap-nu
            - list [ref=e621]:
              - listitem [ref=e622]:
                - link "Bánh 26 Inch" [ref=e623] [cursor=pointer]:
                  - /url: banh-26-inch
              - listitem [ref=e624]:
                - link "Bánh 24 Inch" [ref=e625] [cursor=pointer]:
                  - /url: banh-24-inches
          - generic [ref=e626]:
            - heading "Xe Đạp Điện" [level=3] [ref=e627]:
              - link "Xe Đạp Điện" [ref=e628] [cursor=pointer]:
                - /url: xe-dap-dien
            - list
          - generic [ref=e629]:
            - heading "Xe Điện" [level=3] [ref=e630]:
              - link "Xe Điện" [ref=e631] [cursor=pointer]:
                - /url: xe-dien
            - list [ref=e632]:
              - listitem [ref=e633]:
                - link "Xe điện Yadea" [ref=e634] [cursor=pointer]:
                  - /url: xe-dien-yadea
          - generic [ref=e635]:
            - heading "XE ĐIỆN SCOOTER" [level=3] [ref=e636]:
              - link "XE ĐIỆN SCOOTER" [ref=e637] [cursor=pointer]:
                - /url: xe-dien-scooter
            - list
          - generic [ref=e638]:
            - heading "Xe đạp trợ lực" [level=3] [ref=e639]:
              - link "Xe đạp trợ lực" [ref=e640] [cursor=pointer]:
                - /url: xe-dap-tro-luc
            - list [ref=e641]:
              - listitem [ref=e642]:
                - link "Bánh 27.5 inches" [ref=e643] [cursor=pointer]:
                  - /url: banh-275-inches
          - generic [ref=e644]:
            - heading "Xe đạp gấp" [level=3] [ref=e645]:
              - link "Xe đạp gấp" [ref=e646] [cursor=pointer]:
                - /url: xe-dap-gap
            - list [ref=e647]:
              - listitem [ref=e648]:
                - link "Bánh 16 Inches" [ref=e649] [cursor=pointer]:
                  - /url: banh-16-inches
              - listitem [ref=e650]:
                - link "Bánh 20 Inches" [ref=e651] [cursor=pointer]:
                  - /url: size-banh-20-inches
          - generic [ref=e652]:
            - heading "Phụ kiện" [level=3] [ref=e653]:
              - link "Phụ kiện" [ref=e654] [cursor=pointer]:
                - /url: phu-kien
            - list [ref=e655]:
              - listitem [ref=e656]:
                - link "Đèn xe đạp" [ref=e657] [cursor=pointer]:
                  - /url: den-xe-dap
              - listitem [ref=e658]:
                - link "Đồ bảo hộ" [ref=e659] [cursor=pointer]:
                  - /url: do-bao-ho
              - listitem [ref=e660]:
                - link "Vỏ bọc tay nắm xe đạp" [ref=e661] [cursor=pointer]:
                  - /url: vo-boc-tay-nam-xe-dap
              - listitem [ref=e662]:
                - link "Mũ bảo hiểm" [ref=e663] [cursor=pointer]:
                  - /url: mu-bao-hiem
      - generic [ref=e667]: Copyright ©2026 Thế giới xe đạp Việt. Thiết kế web MIMA
    - generic [ref=e668]:
      - 'link "Call me: 0868 55 88 11" [ref=e669] [cursor=pointer]':
        - /url: tel:0868558811
        - img [ref=e673]
        - generic [ref=e676]: "Call me: 0868 55 88 11"
      - 'link "Zalo: 0868 55 88 11" [ref=e677] [cursor=pointer]':
        - /url: https://zalo.me/0868558811
        - img [ref=e681]
        - generic [ref=e683]: "Zalo: 0868 55 88 11"
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
              - generic: "86"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 86/100
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
          - generic: "14"
          - generic: Tổng tiêu chí
        - generic:
          - generic: ✅ 12
          - generic: Đạt
        - generic:
          - generic: ❌ 2
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: Hãng Asama
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e684]:
      - generic [ref=e685]: "❌ Chi tiết lỗi cần khắc phục (2/14):"
      - generic [ref=e686]:
        - generic [ref=e687]:
          - generic [ref=e688]: 3. Heading (H1-H6)
          - generic [ref=e689]: 1 lỗi
        - generic [ref=e690]:
          - strong [ref=e692]: "Trang có đúng 1 thẻ H1 (hiện tại: 3 thẻ)"
          - generic [ref=e693]: ⚠️ Trang có 3 thẻ H1, bắt buộc đúng 1 thẻ duy nhất!
      - generic [ref=e694]:
        - generic [ref=e695]:
          - generic [ref=e696]: 6. Liên kết (Links)
          - generic [ref=e697]: 1 lỗi
        - generic [ref=e698]:
          - strong [ref=e700]: "Không có broken links (lỗi: 1/100)"
          - generic [ref=e701]: "⚠️ Broken links: / (status: 0)"
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 86/100 dưới ngưỡng 96%. Có 2/14 tiêu chí không đạt.
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