# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Về chúng tôi (/gioi-thieu)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 89/100 dưới ngưỡng 96%. Có 2/18 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - link "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM" [ref=e5] [cursor=pointer]:
          - /url: https://acquythanhphatdat.com/
          - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM" [ref=e6]
        - link "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM" [ref=e7] [cursor=pointer]:
          - /url: https://acquythanhphatdat.com/
          - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM" [ref=e8]
      - generic [ref=e9]:
        - generic [ref=e10]:
          - textbox "Tìm kiếm..." [ref=e11]
          - button "Tìm kiếm" [ref=e12] [cursor=pointer]:
            - img [ref=e13]
        - generic "Lien ket header" [ref=e15]:
          - link "Google" [ref=e16] [cursor=pointer]:
            - /url: acquythanhphatdat.com/
            - img "Google" [ref=e17]
          - link "Facebook" [ref=e18] [cursor=pointer]:
            - /url: https://www.facebook.com/thanhphatdatgs?locale=vi_VN
            - img "Facebook" [ref=e19]
    - navigation "Main menu" [ref=e20]:
      - list [ref=e21]:
        - listitem [ref=e22]:
          - link "Trang chủ" [ref=e23] [cursor=pointer]:
            - /url: ""
        - listitem [ref=e24]:
          - link "Giới thiệu" [ref=e25] [cursor=pointer]:
            - /url: gioi-thieu
        - listitem [ref=e26]:
          - link "Sản phẩm" [ref=e27] [cursor=pointer]:
            - /url: san-pham
        - listitem [ref=e28]:
          - link "Tin tức" [ref=e29] [cursor=pointer]:
            - /url: tin-tuc
        - listitem [ref=e30]:
          - link "Dịch vụ" [ref=e31] [cursor=pointer]:
            - /url: dich-vu
        - listitem [ref=e32]:
          - link "Liên hệ" [ref=e33] [cursor=pointer]:
            - /url: lien-he
  - generic [ref=e34]:
    - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM" [ref=e36]
    - list [ref=e39]:
      - listitem [ref=e40]:
        - link "Trang chủ" [ref=e41] [cursor=pointer]:
          - /url: https://acquythanhphatdat.com/
          - img [ref=e42]
          - generic [ref=e44]: Trang chủ
      - listitem [ref=e45]:
        - text: /
        - link "Về chúng tôi" [ref=e46] [cursor=pointer]:
          - /url: https://acquythanhphatdat.com/gioi-thieu
    - generic [ref=e47]:
      - heading "Giới thiệu" [level=2] [ref=e51]
      - generic [ref=e53]:
        - generic [ref=e54]:
          - generic [ref=e55]:
            - heading "ẮC QUY THÀNH PHÁT ĐẠT" [level=2] [ref=e57]
            - generic [ref=e58]:
              - paragraph [ref=e59]: Ắc Quy Thành Phát là đơn vị chuyên cung cấp ắc quy ô tô, ắc quy xe máy với đa dạng sản phẩm phù hợp nhiều dòng xe. Chúng tôi luôn chú trọng chất lượng, nguồn gốc sản phẩm và tư vấn đúng nhu cầu, giúp khách hàng dễ dàng lựa chọn loại ắc quy phù hợp, an toàn và tiết kiệm.
              - paragraph [ref=e60]: Với đội ngũ kỹ thuật tận tâm, Ắc Quy Thành Phát cung cấp dịch vụ kiểm tra và thay ắc quy nhanh chóng, chuyên nghiệp. Chúng tôi cam kết mang đến sản phẩm chất lượng cùng dịch vụ uy tín, hỗ trợ khách hàng xử lý nhanh các tình trạng ắc quy hết điện, xe khó khởi động, đồng hành cùng khách hàng trên mọi hành trình.
          - img "ẮC QUY THÀNH PHÁT ĐẠT" [ref=e63]
        - generic [ref=e66]:
          - paragraph [ref=e67]:
            - strong [ref=e68]:
              - emphasis [ref=e69]: Quý khách hàng kính mến!
          - paragraph [ref=e70]:
            - text: Lời đầu tiên,
            - strong [ref=e71]:
              - generic [ref=e72]:
                - link "Công ty TNHH MTV Ắc Quy Thành Phát" [ref=e73] [cursor=pointer]:
                  - /url: https://acquythanhphatdat.com/tin-tuc/dai-ly-ac-quy-tai-quan-thu-duc-tp-ho-chi-minh.html
                - text: Đạt
            - text: xin gửi tới Quý khách hàng lời chúc sức khỏe và lời chào trân trọng nhất. Chúc Quý khách luôn thành công và thịnh vượng.
          - paragraph [ref=e74]:
            - strong [ref=e76]:
              - link "Ắc Quy" [ref=e77] [cursor=pointer]:
                - /url: https://acquythanhphatdat.com/tin-tuc/dai-ly-ac-quy-tai-quan-thu-duc-tp-ho-chi-minh.html
              - text: Thủ Đức, KCN Sóng Thần
            - text: "ra đời với sứ mệnh mang đến cho khách hàng những sản phẩm ắc quy giá rẻ và tốt nhất với cam kết rõ ràng :"
          - list [ref=e78]:
            - listitem [ref=e79]: Sản phẩm chính hãng, rõ nguồn gốc và xuất xứ
            - listitem [ref=e80]: Chất lượng đảm bảo
            - listitem [ref=e81]: Giá cả tốt nhất
            - listitem [ref=e82]: Trải nghiệm mua sắm tiện lợi nhất
            - listitem [ref=e83]: Chính sách bảo hành tốt nhất
            - listitem [ref=e84]: Dịch vụ hoàn hảo nhất
            - listitem [ref=e85]: Giao hàng tận nơi
            - listitem [ref=e86]: Lắp đặt miễn phí
            - listitem [ref=e87]: Cứu hộ ắc quy
          - paragraph [ref=e88]:
            - text: Với mục tiêu vươn lên trở thành cửa hàng đại lý phân phối ắc quy hàng đầu
            - strong [ref=e89]: Thành Phố Hồ Chí Minh
            - text: "có mạng lưới cửa hàng trãi khắp các Quận:"
            - strong [ref=e90]: TP. Thủ Đức,
            - strong [ref=e91]: KCN Sóng Thần 1/2,
            - strong [ref=e92]: Quận 2, Quận 9, Quận 12, ...
          - paragraph [ref=e93]:
            - strong [ref=e94]: "Chi nhánh tại Bình Dương : TP. Dĩ An, Thuận An, Tân Uyên, Thủ Dầu Một Bình Dương"
            - text: ... để đáp ứng được tất cả nhu cầu về điện của mọi cá nhân và tổ chức,
            - strong [ref=e95]: Ắc Quy
            - strong [ref=e96]: Thành Phát Đạt
            - text: luôn không ngừng nỗ lực phấn đấu để trở thành người bạn và cố vấn tin cậy số một của quý khách hàng. Sự tin tưởng của các bạn chính là sức mạnh giúp chúng tôi đạt được mục tiêu lớn ấy.
          - paragraph [ref=e97]: Đại lý ắc quy Tại Thủ Đức, KCN Sóng Thần hân hạnh được phục vụ và đồng hành cùng của Quý khách. Sự an tâm và hài lòng của Quý vị chính là phương châm phục vụ của chúng tôi!
          - paragraph [ref=e98]:
            - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM" [ref=e100]
          - paragraph [ref=e101]
          - paragraph [ref=e102]:
            - link "Ắc Quy Thành Phát Đạt - Bạn của mọi nhà!" [ref=e103] [cursor=pointer]:
              - /url: https://acquythanhphatdat.com/tin-tuc/dai-ly-ac-quy-tai-quan-thu-duc-tp-ho-chi-minh.html
              - strong [ref=e104]:
                - emphasis [ref=e105]: Ắc Quy Thành Phát Đạt - Bạn của mọi nhà!
          - paragraph [ref=e106]
          - link "Xem thêm bài viết" [ref=e108] [cursor=pointer]:
            - /url: javascript:;
            - generic [ref=e109]:
              - generic [ref=e110]: Xem thêm bài viết
              - img [ref=e111]
      - generic:
        - generic:
          - generic:
            - generic:
              - generic:
                - paragraph: 10 +
                - generic: số năm kinh nghiệm
            - generic:
              - generic:
                - paragraph: 1000 +
                - generic: khách hàng
            - generic:
              - generic:
                - paragraph: 34 +
                - generic: giao hàng toàn quốc
            - generic:
              - generic:
                - paragraph: 10 +
                - generic: tư vấn tận tâm
      - generic [ref=e120]:
        - heading "Giá trị cốt lõi" [level=2] [ref=e122]
        - generic [ref=e123]:
          - generic [ref=e126] [cursor=pointer]:
            - img "Chất Lượng" [ref=e128]
            - generic [ref=e129]:
              - heading "Chất Lượng" [level=3] [ref=e130]
              - paragraph [ref=e131]: Đặt chất lượng sản phẩm và dịch vụ làm ưu tiên hàng đầu, đảm bảo mang đến cho khách hàng những sản phẩm ắc quy phù hợp, an toàn và đáng tin cậy.
          - generic [ref=e134] [cursor=pointer]:
            - img "Uy tín -Tận tâm" [ref=e136]
            - generic [ref=e137]:
              - heading "Uy tín -Tận tâm" [level=3] [ref=e138]
              - paragraph [ref=e139]: Luôn trung thực, minh bạch trong tư vấn và phục vụ, lấy sự hài lòng của khách hàng làm nền tảng để xây dựng mối quan hệ lâu dài.
          - generic [ref=e142] [cursor=pointer]:
            - img "Chuyên nghiệp - Hiệu quả" [ref=e144]
            - generic [ref=e145]:
              - heading "Chuyên nghiệp - Hiệu quả" [level=3] [ref=e146]
              - paragraph [ref=e147]: Không ngừng nâng cao chuyên môn, quy trình làm việc và chất lượng phục vụ, mang đến giải pháp ắc quy nhanh chóng, chính xác và hiệu quả.
          - generic [ref=e150] [cursor=pointer]:
            - img "Đổi mới -Phát triển" [ref=e152]
            - generic [ref=e153]:
              - heading "Đổi mới -Phát triển" [level=3] [ref=e154]
              - paragraph [ref=e155]: Chủ động cập nhật công nghệ, đa dạng hóa sản phẩm và cải tiến dịch vụ để đáp ứng tốt hơn nhu cầu ngày càng cao của khách hàng, hướng đến sự phát triển bền vững.
      - generic [ref=e158]:
        - generic:
          - generic:
            - generic:
              - heading "Tầm Nhìn" [level=2]
            - generic:
              - paragraph:
                - strong: Thương hiệu hàng đầu trong lĩnh vực cung cấp và thay thế ắc quy ô tô, xe máy.
              - paragraph: Ắc Quy Thành Phát đặt mục tiêu trở thành thương hiệu hàng đầu trong lĩnh vực cung cấp và thay thế ắc quy ô tô, xe máy, được khách hàng tin tưởng lựa chọn nhờ sản phẩm chất lượng, dịch vụ chuyên nghiệp và giá cả hợp lý.
              - paragraph: Trong tương lai, Ắc Quy Thành Phát hướng đến mở rộng hệ thống dịch vụ, nâng cao chất lượng phục vụ và ứng dụng công nghệ hiện đại, đáp ứng nhanh chóng nhu cầu của khách hàng và xây dựng thương hiệu phát triển bền vững trên thị trường.
      - generic [ref=e161]:
        - generic:
          - generic:
            - generic:
              - heading "Sứ mệnh" [level=2]
            - generic:
              - paragraph:
                - strong: Cung cấp giải pháp nguồn điện chất lượng, ổn định và đáng tin cậy
              - paragraph: Ắc Quy Thành Phát Đạt hướng đến sứ mệnh cung cấp giải pháp nguồn điện chất lượng, ổn định và đáng tin cậy cho khách hàng cá nhân, doanh nghiệp và các phương tiện giao thông. Chúng tôi cam kết lựa chọn và phân phối các sản phẩm ắc quy đạt tiêu chuẩn chất lượng, có nguồn gốc rõ ràng, đáp ứng đa dạng nhu cầu sử dụng với mức giá hợp lý và dịch vụ chuyên nghiệp.
              - paragraph: Lấy chất lượng sản phẩm, sự minh bạch và trải nghiệm khách hàng làm nền tảng phát triển, Thành Phát Đạt không ngừng hoàn thiện quy trình tư vấn, cung cấp và hỗ trợ sau bán hàng. Chúng tôi mong muốn xây dựng mối quan hệ hợp tác lâu dài với khách hàng bằng uy tín, trách nhiệm và sự tận tâm, từng bước khẳng định vị thế là thương hiệu ắc quy chuyên nghiệp và đáng tin cậy trên thị trường.
      - generic:
        - generic:
          - generic:
            - heading "Lịch sử hình thành" [level=2]
          - generic:
            - generic:
              - listbox:
                - option:
                  - generic: "2024"
                - option:
                  - generic: "2025"
                - option:
                  - generic: "2027"
          - generic:
            - generic:
              - listbox:
                - generic:
                  - generic:
                    - generic:
                      - img
                    - generic:
                      - generic:
                        - paragraph: Không ngừng đổi mới và nâng cao năng lực phục vụ, hướng đến mang lại giải pháp ắc quy nhanh chóng, an toàn và hiệu quả. Ắc Quy Thành Phát mong muốn trở thành địa chỉ được khách hàng ưu tiên lựa chọn và đồng hành lâu dài.
                - option "Phát triển bền vững Ắc Quy Thành Phát hướng đến xây dựng thương hiệu phát triển bền vững trong lĩnh vực cung cấp và thay thế ắc quy ô tô, xe máy. Chúng tôi không ngừng hoàn thiện sản phẩm, dịch vụ và quy trình phục vụ nhằm đáp ứng ngày càng tốt hơn nhu cầu của khách hàng.":
                  - generic:
                    - generic:
                      - img "Phát triển bền vững"
                    - generic:
                      - generic:
                        - paragraph: Ắc Quy Thành Phát hướng đến xây dựng thương hiệu phát triển bền vững trong lĩnh vực cung cấp và thay thế ắc quy ô tô, xe máy. Chúng tôi không ngừng hoàn thiện sản phẩm, dịch vụ và quy trình phục vụ nhằm đáp ứng ngày càng tốt hơn nhu cầu của khách hàng.
                - option:
                  - generic:
                    - generic:
                      - img
                    - generic:
                      - generic:
                        - paragraph:
                          - text: Lấy
                          - strong
                          - text: chất lượng sản phẩm và sự hài lòng của khách hàng làm nền tảng phát triển, Ắc Quy Thành Phát cam kết cung cấp các sản phẩm phù hợp, rõ ràng về nguồn gốc và dịch vụ chuyên nghiệp. Qua đó, từng bước xây dựng hình ảnh thương hiệu uy tín và đáng tin cậy trên thị trường.
                - option:
                  - generic:
                    - generic:
                      - img
                    - generic:
                      - generic:
                        - paragraph: Không ngừng đổi mới và nâng cao năng lực phục vụ, hướng đến mang lại giải pháp ắc quy nhanh chóng, an toàn và hiệu quả. Ắc Quy Thành Phát mong muốn trở thành địa chỉ được khách hàng ưu tiên lựa chọn và đồng hành lâu dài.
                - generic:
                  - generic:
                    - generic:
                      - img
                    - generic:
                      - generic:
                        - paragraph: Ắc Quy Thành Phát hướng đến xây dựng thương hiệu phát triển bền vững trong lĩnh vực cung cấp và thay thế ắc quy ô tô, xe máy. Chúng tôi không ngừng hoàn thiện sản phẩm, dịch vụ và quy trình phục vụ nhằm đáp ứng ngày càng tốt hơn nhu cầu của khách hàng.
      - generic [ref=e163]:
        - heading "Dịch vụ nổi bật" [level=2] [ref=e165]
        - generic [ref=e166]:
          - generic:
            - generic:
              - link "CHÍNH SÁCH ĐỔI TRẢ":
                - /url: chinh-sach-doi-tra
              - generic:
                - heading "CHÍNH SÁCH ĐỔI TRẢ" [level=3]:
                  - link "CHÍNH SÁCH ĐỔI TRẢ":
                    - /url: chinh-sach-doi-tra
                - generic: "Ngày Đăng : 01/01/1970 - 8:00 AM"
                - generic: Do đặc thù của từng loại sản phẩm mà chúng tôi có các chính sách đổi hàng hoặc trả lại hàng khác nhau.
                - generic:
                  - link "Xem Tiếp »":
                    - /url: chinh-sach-doi-tra
          - generic:
            - generic:
              - link "CHÍNH SÁCH VỀ SẢN PHẨM KHÁC":
                - /url: chinh-sach-ve-san-pham-khac
              - generic:
                - heading "CHÍNH SÁCH VỀ SẢN PHẨM KHÁC" [level=3]:
                  - link "CHÍNH SÁCH VỀ SẢN PHẨM KHÁC":
                    - /url: chinh-sach-ve-san-pham-khac
                - generic: "Ngày Đăng : 01/01/1970 - 8:00 AM"
                - generic:
                  - link "Xem Tiếp »":
                    - /url: chinh-sach-ve-san-pham-khac
          - generic:
            - generic:
              - link "CHÍNH SÁCH BẢO MẬT THÔNG TIN":
                - /url: chinh-sach-bao-mat-thong-tin
              - generic:
                - heading "CHÍNH SÁCH BẢO MẬT THÔNG TIN" [level=3]:
                  - link "CHÍNH SÁCH BẢO MẬT THÔNG TIN":
                    - /url: chinh-sach-bao-mat-thong-tin
                - generic: "Ngày Đăng : 01/01/1970 - 8:00 AM"
                - generic:
                  - link "Xem Tiếp »":
                    - /url: chinh-sach-bao-mat-thong-tin
          - generic:
            - generic:
              - link "HÌNH THỨC THANH TOÁN":
                - /url: hinh-thuc-thanh-toan
              - generic:
                - heading "HÌNH THỨC THANH TOÁN" [level=3]:
                  - link "HÌNH THỨC THANH TOÁN":
                    - /url: hinh-thuc-thanh-toan
                - generic: "Ngày Đăng : 01/01/1970 - 8:00 AM"
                - generic:
                  - link "Xem Tiếp »":
                    - /url: hinh-thuc-thanh-toan
      - generic:
        - generic:
          - generic:
            - heading "Những đối tác uy tín của chúng tôi" [level=2]
          - generic:
            - generic:
              - generic:
                - generic:
                  - link "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM":
                    - /url: ""
                    - paragraph:
                      - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                - generic:
                  - link "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM":
                    - /url: ""
                    - paragraph:
                      - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                - generic:
                  - link "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM":
                    - /url: ""
                    - paragraph:
                      - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                - generic:
                  - link "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM":
                    - /url: ""
                    - paragraph:
                      - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                - generic:
                  - link "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM":
                    - /url: ""
                    - paragraph:
                      - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                - generic:
                  - link "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM":
                    - /url: ""
                    - paragraph:
                      - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                - generic:
                  - link "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM":
                    - /url: ""
                    - paragraph:
                      - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                - generic:
                  - link "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM":
                    - /url: ""
                    - paragraph:
                      - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                - generic:
                  - link "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM":
                    - /url: ""
                    - paragraph:
                      - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                - generic:
                  - link "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM":
                    - /url: ""
                    - paragraph:
                      - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                - generic:
                  - link "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM":
                    - /url: ""
                    - paragraph:
                      - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                - generic:
                  - link "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM":
                    - /url: ""
                    - paragraph:
                      - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                - generic:
                  - link "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM":
                    - /url: ""
                    - paragraph:
                      - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                - generic:
                  - link "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM":
                    - /url: ""
                    - paragraph:
                      - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                - generic:
                  - link "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM":
                    - /url: ""
                    - paragraph:
                      - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                - generic:
                  - link "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM":
                    - /url: ""
                    - paragraph:
                      - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                - generic:
                  - link "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM":
                    - /url: ""
                    - paragraph:
                      - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                - generic:
                  - link "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM":
                    - /url: ""
                    - paragraph:
                      - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                - generic:
                  - link "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM":
                    - /url: ""
                    - paragraph:
                      - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                - generic:
                  - link "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM":
                    - /url: ""
                    - paragraph:
                      - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
    - generic:
      - generic:
        - generic:
          - generic:
            - generic:
              - generic:
                - paragraph: CÔNG TY TNHH MTV ẮC QUY THÀNH PHÁT ĐẠT
                - generic:
                  - paragraph:
                    - text: "MST: 0313178915 - Người đại diện: Nguyễn Thành Phong"
                    - text: "Địa chỉ: 261 Quốc Lộ 1A, Khu Phố 5, P. Bình Chiểu, TP. Thủ Đức, Tp. Hồ Chí Minh"
                    - text: "CN2: Số 68 đường D2A, KĐT TM&DV Sóng Thần, KP Thống Nhất 1, P. Dĩ An, TP. Dĩ An, Bình Dương"
                    - text: "Điện thoại: 0939 895 896 Mr Phong - 0933 895 896 Mrs Thuý"
                    - text: "Email: thanhphatdatcompany2015@gmail.com"
                    - 'link "Website: https://acquythanhphatdat.com/"':
                      - /url: https://acquythanhphatdat.com/upload/elfinder/logoSaleNoti.png
                  - paragraph:
                    - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                  - paragraph
                - generic: Copyright 2016 © Thanh Phat Dat. All rights reserved. Thiết kế web MIMA
                - generic:
                  - link "Google":
                    - /url: https://acquythanhphatdat.com/
                    - img "Google"
                  - link "Zalo":
                    - /url: https://zalo.me/0933895896
                    - img "Zalo"
                  - link "Facebook":
                    - /url: https://www.facebook.com/thanhphatdatgs/
                    - img "Facebook"
              - generic:
                - generic:
                  - generic:
                    - paragraph: Chính sách hỗ trợ
                    - list:
                      - listitem:
                        - link "Hình thức thanh toán":
                          - /url: hinh-thuc-thanh-toan-2
                      - listitem:
                        - link "Chính sách đổi trả hàng":
                          - /url: chinh-sach-doi-tra-hang
                      - listitem:
                        - link "Chính sách bảo mật":
                          - /url: chinh-sach-bao-mat
                      - listitem:
                        - link "Chính sách mua hàng":
                          - /url: chinh-sach-mua-hang
                  - generic:
                    - paragraph: Truy cập nhanh
                    - list:
                      - listitem:
                        - link "Giới thiệu":
                          - /url: gioi-thieu
                      - listitem:
                        - link "Sản phẩm":
                          - /url: san-pham
                      - listitem:
                        - link "Tin tức":
                          - /url: tin-tuc
                      - listitem:
                        - link "Dịch vụ":
                          - /url: dich-vu
                      - listitem:
                        - link "Liên hệ":
                          - /url: lien-he
                  - generic:
                    - paragraph: Thông kê truy cập
                    - list:
                      - listitem:
                        - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                        - text: "Đang online: 373"
                      - listitem:
                        - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                        - text: "Hôm nay: 2058"
                      - listitem:
                        - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                        - text: "Thống kê tháng : 4896"
                      - listitem:
                        - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                        - text: "Tổng truy cập: 4904"
    - generic [ref=e167]:
      - 'link "Call me: 0933 895 896" [ref=e168] [cursor=pointer]':
        - /url: tel:0933895896
        - img [ref=e172]
        - generic [ref=e175]: "Call me: 0933 895 896"
      - 'link "Zalo: 0888080138" [ref=e176] [cursor=pointer]':
        - /url: https://zalo.me/0888080138
        - img [ref=e180]
        - generic [ref=e181]: "Zalo: 0888080138"
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
              - generic: "89"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 89/100
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
          - generic: "18"
          - generic: Tổng tiêu chí
        - generic:
          - generic: ✅ 16
          - generic: Đạt
        - generic:
          - generic: ❌ 2
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: Về chúng tôi
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e182]:
      - generic [ref=e183]: "❌ Chi tiết lỗi cần khắc phục (2/18):"
      - generic [ref=e184]:
        - generic [ref=e185]:
          - generic [ref=e186]: 6. Liên kết (Links)
          - generic [ref=e187]: 1 lỗi
        - generic [ref=e188]:
          - strong [ref=e190]: "Không có broken links (lỗi: 2/33)"
          - generic [ref=e191]: "⚠️ Broken links: https://acquythanhphatdat.com/tin-tuc/dai-ly-ac-quy-tai-quan-thu-duc-tp-ho-chi-minh.html (status: 404), acquythanhphatdat.com/ (status: 404)"
      - generic [ref=e192]:
        - generic [ref=e193]:
          - generic [ref=e194]: 9. Bảo mật
          - generic [ref=e195]: 1 lỗi
        - generic [ref=e196]:
          - strong [ref=e198]: "Mixed Content: 1 tài nguyên HTTP"
          - generic [ref=e199]: "⚠️ Phát hiện 1 tài nguyên HTTP trên HTTPS: http://acquythanhphatdat.com/upload/images/2021-10-18.png"
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 89/100 dưới ngưỡng 96%. Có 2/18 tiêu chí không đạt.
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