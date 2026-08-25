# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Kệ console trang trí giá tốt kho hàng bình dương (/ke-console-trang-tri-gia-tot-kho-hang-binh-duong)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 93/100 dưới ngưỡng 96%. Có 1/15 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e6]:
        - generic [ref=e9]:
          - group "1 / 2" [ref=e10]:
            - generic [ref=e11]:
              - img "mail3" [ref=e12]
              - paragraph [ref=e13]: Tổ 3, KP Khánh Tân, Phường Tân Hiệp, HCM
          - group "2 / 2" [ref=e14]:
            - generic [ref=e15]:
              - img "mail3" [ref=e16]
              - paragraph [ref=e17]: Tổ 3, KP Khánh Tân, Phường Tân Hiệp, HCM
        - generic [ref=e18]:
          - img "mail3" [ref=e19]
          - 'link "Phone: 0972 197 911 - 0349 308 368" [ref=e20] [cursor=pointer]':
            - /url: tel:0972 197 911
            - paragraph [ref=e21]: "Phone: 0972 197 911 - 0349 308 368"
        - generic [ref=e22]:
          - img "mail3" [ref=e23]
          - link "nguyetdoan01986@gmail.com" [ref=e24] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e25]: nguyetdoan01986@gmail.com
        - generic [ref=e26]:
          - link "Zalo" [ref=e27] [cursor=pointer]:
            - /url: ""
            - img "Zalo" [ref=e28]
          - link "NỘI THẤT HOÀNG NHÂN" [ref=e29] [cursor=pointer]:
            - /url: ""
            - img "NỘI THẤT HOÀNG NHÂN" [ref=e30]
          - link "Facebook" [ref=e31] [cursor=pointer]:
            - /url: ""
            - img "Facebook" [ref=e32]
          - link "NỘI THẤT HOÀNG NHÂN" [ref=e33] [cursor=pointer]:
            - /url: ""
            - img "NỘI THẤT HOÀNG NHÂN" [ref=e34]
          - link "NỘI THẤT HOÀNG NHÂN" [ref=e35] [cursor=pointer]:
            - /url: ""
            - img "NỘI THẤT HOÀNG NHÂN" [ref=e36]
      - navigation [ref=e40]:
        - link "NỘI THẤT HOÀNG NHÂN" [ref=e41] [cursor=pointer]:
          - /url: https://noithathoangnhan.com/
          - img "NỘI THẤT HOÀNG NHÂN" [ref=e42]
        - list [ref=e43]:
          - listitem [ref=e44]:
            - link "Trang chủ" [ref=e45] [cursor=pointer]:
              - /url: ""
          - listitem [ref=e46]:
            - link "Giới thiệu" [ref=e47] [cursor=pointer]:
              - /url: gioi-thieu
          - listitem [ref=e48]:
            - link "Sản phẩm" [ref=e49] [cursor=pointer]:
              - /url: san-pham
          - listitem [ref=e50]:
            - link "Tin tức" [ref=e51] [cursor=pointer]:
              - /url: tin-tuc
          - listitem [ref=e52]:
            - link "Liên hệ" [ref=e53] [cursor=pointer]:
              - /url: lien-he
          - generic [ref=e54]:
            - textbox "" [ref=e55]:
              - /placeholder: Tên sản phẩm...
            - generic [ref=e57] [cursor=pointer]: 
  - list [ref=e60]:
    - listitem [ref=e61]:
      - link "Trang chủ" [ref=e62] [cursor=pointer]:
        - /url: https://noithathoangnhan.com/
        - img [ref=e63]
        - generic [ref=e65]: Trang chủ
    - listitem [ref=e66]:
      - text: /
      - link "Sản phẩm" [ref=e67] [cursor=pointer]:
        - /url: https://noithathoangnhan.com/san-pham
    - listitem [ref=e68]:
      - text: /
      - link "Tủ / Kệ" [ref=e69] [cursor=pointer]:
        - /url: https://noithathoangnhan.com/tu
    - listitem [ref=e70]:
      - text: /
      - link "Kệ console trang trí giá tốt kho hàng bình dương" [ref=e71] [cursor=pointer]:
        - /url: https://noithathoangnhan.com/ke-console-trang-tri-gia-tot-kho-hang-binh-duong
  - generic [ref=e72]:
    - generic [ref=e75]:
      - generic [ref=e77]:
        - listbox [ref=e80]:
          - option "Kệ console trang trí giá tốt kho hàng bình dương" [ref=e81]:
            - link "Kệ console trang trí giá tốt kho hàng bình dương" [ref=e82] [cursor=pointer]:
              - /url: watermark/product/710x440x2/upload/product/z7216450260832a927881c210d90e96fc07d653e2e44c2-1762941328.jpg
              - img "Kệ console trang trí giá tốt kho hàng bình dương" [ref=e83]
        - listbox [ref=e87]:
          - option "Kệ console trang trí giá tốt kho hàng bình dương" [ref=e88]:
            - link "Kệ console trang trí giá tốt kho hàng bình dương" [ref=e89] [cursor=pointer]:
              - /url: javascript:;
              - img "Kệ console trang trí giá tốt kho hàng bình dương" [ref=e90]
      - list [ref=e92]:
        - generic [ref=e93]: Kệ console trang trí giá tốt kho hàng bình dương
        - listitem [ref=e94]:
          - paragraph [ref=e95]: "Giá:"
          - generic [ref=e96]: 1.350.000đ 2.500.000đ
        - listitem [ref=e97]:
          - paragraph [ref=e99]: Tìm kiếm kệ console trang trí giá tốt nhất tại kho hàng Bình Dương? Khám phá các mẫu kệ đa dạng, chất liệu bền đẹp, phong cách thiết kế độc đáo. Tư vấn chọn kệ phù hợp không gian, địa chỉ mua uy tín, chính sách bảo hành tốt nhất.
        - generic [ref=e100]: "Lượt xem: 1757"
    - generic [ref=e105]:
      - generic [ref=e107]: Thông tin về sản phẩm
      - generic [ref=e109]:
        - generic [ref=e110] [cursor=pointer]:
          - img [ref=e111]
          - text: Mục lục
          - img [ref=e114]
        - text: ▾ ▾ ▾ ▾
      - text: ▾ ▾ ▾ ▾
      - generic [ref=e117]:
        - heading "Kệ Console Trang Trí Giá Tốt Kho Hàng Bình Dương" [level=2] [ref=e118]
        - heading "Tổng quan về kệ console trang trí và lợi ích tại Bình Dương" [level=2] [ref=e119]
        - heading "Kệ console là gì? Tìm hiểu về công dụng và tính thẩm mỹ" [level=3] [ref=e120]
        - paragraph [ref=e121]:
          - generic [ref=e122]:
            - text: Kệ console, hay còn gọi là bàn console, là một món đồ nội thất đa năng, thường được đặt sát tường và có thiết kế thanh mảnh.
            - emphasis [ref=e123]: Kệ console trang trí giá tốt kho hàng bình dương
            - text: mang đến nhiều công dụng, từ việc làm điểm nhấn trang trí cho không gian đến việc cung cấp nơi để đồ tiện lợi. Về tính thẩm mỹ, kệ console có thể mang nhiều phong cách khác nhau, từ hiện đại, tối giản đến cổ điển, tân cổ điển, phù hợp với nhiều không gian sống.
        - list [ref=e124]:
          - listitem [ref=e125]:
            - strong [ref=e127]: "Công dụng:"
            - list [ref=e128]:
              - listitem [ref=e129]: Trang trí phòng khách, phòng ngủ, hành lang.
              - listitem [ref=e130]: Đặt đồ trang trí như lọ hoa, khung ảnh, đèn bàn.
              - listitem [ref=e131]: Lưu trữ đồ dùng cá nhân, chìa khóa, thư từ.
              - listitem [ref=e132]: Tạo điểm nhấn cho không gian.
          - listitem [ref=e133]:
            - strong [ref=e135]: "Tính thẩm mỹ:"
            - list [ref=e136]:
              - listitem [ref=e137]: Đa dạng phong cách thiết kế.
              - listitem [ref=e138]: "Chất liệu phong phú: gỗ, kim loại, kính."
              - listitem [ref=e139]: Màu sắc đa dạng, dễ phối hợp với nội thất.
        - heading "Ưu điểm khi sử dụng kệ console trang trí trong không gian sống" [level=3] [ref=e140]
        - paragraph [ref=e141]: "Việc sử dụng kệ console trang trí mang lại nhiều ưu điểm vượt trội cho không gian sống:"
        - list [ref=e142]:
          - listitem [ref=e143]:
            - generic [ref=e144]:
              - strong [ref=e145]: "Tiết kiệm không gian:"
              - text: Thiết kế nhỏ gọn, không chiếm nhiều diện tích.
          - listitem [ref=e146]:
            - generic [ref=e147]:
              - strong [ref=e148]: "Tăng tính thẩm mỹ:"
              - text: Làm đẹp không gian, tạo điểm nhấn ấn tượng.
          - listitem [ref=e149]:
            - generic [ref=e150]:
              - strong [ref=e151]: "Đa năng:"
              - text: Vừa trang trí, vừa lưu trữ đồ dùng.
          - listitem [ref=e152]:
            - generic [ref=e153]:
              - strong [ref=e154]: "Dễ dàng di chuyển:"
              - text: Trọng lượng nhẹ, dễ dàng thay đổi vị trí.
          - listitem [ref=e155]:
            - generic [ref=e156]:
              - strong [ref=e157]: "Phù hợp với nhiều phong cách:"
              - text: Dễ dàng lựa chọn kệ console phù hợp với phong cách nội thất của căn nhà bạn.
        - heading "Tại sao nên chọn mua kệ console giá tốt tại kho hàng Bình Dương?" [level=3] [ref=e158]
        - paragraph [ref=e159]:
          - generic [ref=e160]:
            - text: Việc mua
            - emphasis [ref=e161]: kệ console trang trí giá tốt kho hàng bình dương
            - text: mang lại nhiều lợi ích thiết thực. Các kho hàng thường có nguồn hàng trực tiếp từ nhà sản xuất hoặc nhập khẩu, giúp giảm thiểu chi phí trung gian.
            - emphasis [ref=e162]: Kệ console trang trí giá tốt kho hàng bình dương
            - text: thường có nhiều chương trình khuyến mãi, giảm giá hấp dẫn, đặc biệt là khi mua số lượng lớn. Ngoài ra, bạn có thể trực tiếp xem và kiểm tra chất lượng sản phẩm trước khi mua.
        - heading "Các loại kệ console trang trí phổ biến tại kho hàng Bình Dương" [level=2] [ref=e163]
        - 'heading "Phân loại kệ console theo chất liệu: Gỗ tự nhiên, gỗ công nghiệp, kim loại,..." [level=3] [ref=e164]'
        - list [ref=e165]:
          - listitem [ref=e166]:
            - generic [ref=e167]:
              - strong [ref=e168]: "Kệ console gỗ tự nhiên:"
              - text: Mang vẻ đẹp sang trọng, ấm cúng, độ bền cao. Thường được làm từ gỗ sồi, gỗ óc chó, gỗ xoan đào.
          - listitem [ref=e169]:
            - generic [ref=e170]:
              - strong [ref=e171]: "Kệ console gỗ công nghiệp:"
              - text: Giá thành rẻ hơn gỗ tự nhiên, đa dạng về mẫu mã và màu sắc. Thường được làm từ MDF, MFC.
          - listitem [ref=e172]:
            - generic [ref=e173]:
              - strong [ref=e174]: "Kệ console kim loại:"
              - text: Phong cách hiện đại, mạnh mẽ, độ bền cao, chịu lực tốt. Thường được làm từ sắt, thép.
          - listitem [ref=e175]:
            - generic [ref=e176]:
              - strong [ref=e177]: "Kệ console kết hợp:"
              - text: Kết hợp nhiều chất liệu khác nhau như gỗ và kim loại, tạo nên vẻ đẹp độc đáo, ấn tượng.
        - 'heading "Phân loại kệ console theo phong cách thiết kế: Hiện đại, tân cổ điển, tối giản,..." [level=3] [ref=e178]'
        - paragraph [ref=e179]:
          - img "kệ console trang trí giá tốt kho hàng bình dương" [ref=e181]
        - list [ref=e182]:
          - listitem [ref=e183]:
            - generic [ref=e184]:
              - strong [ref=e185]: "Kệ console hiện đại:"
              - text: Thiết kế đơn giản, tinh tế, sử dụng màu sắc trung tính. Phù hợp với không gian sống trẻ trung, năng động.
          - listitem [ref=e186]:
            - generic [ref=e187]:
              - strong [ref=e188]: "Kệ console tân cổ điển:"
              - text: Thiết kế cầu kỳ, hoa văn tinh xảo, sử dụng màu sắc trầm ấm. Phù hợp với không gian sống sang trọng, quý phái.
          - listitem [ref=e189]:
            - generic [ref=e190]:
              - strong [ref=e191]: "Kệ console tối giản:"
              - text: Thiết kế đơn giản đến mức tối đa, không có chi tiết thừa. Phù hợp với không gian sống hiện đại, yêu thích sự tối giản.
          - listitem [ref=e192]:
            - generic [ref=e193]:
              - strong [ref=e194]: "Kệ console vintage:"
              - text: Thiết kế mang hơi hướng cổ điển, sử dụng màu sắc hoài cổ. Phù hợp với không gian sống cá tính, độc đáo.
        - 'heading "Phân loại kệ console theo vị trí đặt: Phòng khách, phòng ngủ, hành lang,..." [level=3] [ref=e195]'
        - list [ref=e196]:
          - listitem [ref=e197]:
            - generic [ref=e198]:
              - strong [ref=e199]: "Kệ console phòng khách:"
              - text: Thường được đặt ở sảnh vào hoặc phía sau sofa, dùng để trang trí và đặt đồ.
              - emphasis [ref=e200]: Kệ console trang trí giá tốt kho hàng bình dương
              - text: là lựa chọn ưu tiên.
          - listitem [ref=e201]:
            - generic [ref=e202]:
              - strong [ref=e203]: "Kệ console phòng ngủ:"
              - text: Thường được đặt ở đầu giường hoặc cuối giường, dùng để đặt đèn ngủ, sách báo.
          - listitem [ref=e204]:
            - generic [ref=e205]:
              - strong [ref=e206]: "Kệ console hành lang:"
              - text: Thường được đặt ở hành lang hẹp, dùng để trang trí và tạo điểm nhấn.
          - listitem [ref=e207]:
            - generic [ref=e208]:
              - strong [ref=e209]: "Kệ console phòng ăn:"
              - text: Có thể được sử dụng như một bàn buffet nhỏ để bày biện thức ăn, đồ uống.
        - heading "Bí quyết lựa chọn kệ console trang trí phù hợp với không gian" [level=2] [ref=e210]
        - heading "Xác định kích thước và kiểu dáng kệ phù hợp với diện tích phòng" [level=3] [ref=e211]
        - paragraph [ref=e212]:
          - generic [ref=e213]:
            - text: Trước khi mua
            - link "kệ console trang trí giá tốt kho hàng bình dương" [ref=e214] [cursor=pointer]:
              - /url: http://kệ console trang trí giá tốt kho hàng bình dương
              - emphasis [ref=e215]: kệ console trang trí giá tốt kho hàng bình dương
            - text: ", bạn cần đo đạc diện tích phòng và xác định vị trí đặt kệ. Kệ console nên có kích thước phù hợp với diện tích phòng, tránh chọn kệ quá lớn hoặc quá nhỏ. Kiểu dáng kệ cũng cần phù hợp với phong cách nội thất của căn phòng. Ví dụ, phòng khách rộng có thể chọn kệ console dáng dài, còn phòng ngủ nhỏ nên chọn kệ console dáng ngắn."
        - heading "Lựa chọn màu sắc và chất liệu kệ hài hòa với nội thất tổng thể" [level=3] [ref=e216]
        - paragraph [ref=e217]: Màu sắc và chất liệu của kệ console cần hài hòa với màu sắc và chất liệu của các món đồ nội thất khác trong phòng. Nếu phòng khách có tông màu sáng, bạn có thể chọn kệ console có màu sắc tương đồng hoặc tương phản nhẹ để tạo điểm nhấn. Nếu phòng khách có tông màu tối, bạn nên chọn kệ console có màu sắc tươi sáng để làm sáng không gian.
        - heading "Cân nhắc phong thủy khi chọn mua và bố trí kệ console" [level=3] [ref=e218]
        - paragraph [ref=e219]: Theo phong thủy, kệ console nên được đặt ở vị trí tốt, đón ánh sáng tự nhiên và không bị chắn bởi các vật cản. Kệ console nên có hình dáng cân đối, không bị méo mó. Bạn cũng nên chọn màu sắc và chất liệu kệ phù hợp với mệnh của gia chủ.
        - heading "Địa chỉ mua kệ console trang trí giá tốt, uy tín tại kho hàng Bình Dương" [level=2] [ref=e220]
        - 'heading "Lợi ích khi mua hàng trực tiếp tại kho: Mẫu mã đa dạng, giá cả cạnh tranh" [level=3] [ref=e221]'
        - paragraph [ref=e222]:
          - generic [ref=e223]:
            - text: Mua
            - emphasis [ref=e224]: kệ console trang trí giá tốt kho hàng bình dương
            - text: "trực tiếp tại kho mang lại nhiều lợi ích, bao gồm:"
        - list [ref=e225]:
          - listitem [ref=e226]:
            - generic [ref=e227]:
              - strong [ref=e228]: "Mẫu mã đa dạng:"
              - text: Kho hàng thường có nhiều mẫu mã kệ console khác nhau, từ kiểu dáng, chất liệu đến màu sắc.
          - listitem [ref=e229]:
            - generic [ref=e230]:
              - strong [ref=e231]: "Giá cả cạnh tranh:"
              - text: Kho hàng thường có giá tốt hơn so với các cửa hàng bán lẻ vì không phải chịu chi phí thuê mặt bằng cao.
          - listitem [ref=e232]:
            - generic [ref=e233]:
              - strong [ref=e234]: "Kiểm tra chất lượng:"
              - text: Bạn có thể trực tiếp xem và kiểm tra chất lượng sản phẩm trước khi mua.
          - listitem [ref=e235]:
            - generic [ref=e236]:
              - strong [ref=e237]: "Tư vấn chuyên nghiệp:"
              - text: Nhân viên kho hàng thường có kinh nghiệm và kiến thức về sản phẩm, có thể tư vấn cho bạn lựa chọn được sản phẩm phù hợp.
        - heading "Kinh nghiệm chọn nhà cung cấp kệ console uy tín, chất lượng" [level=3] [ref=e238]
        - paragraph [ref=e239]:
          - img "kệ console trang trí giá tốt kho hàng bình dương" [ref=e240]
        - paragraph [ref=e241]:
          - generic [ref=e242]:
            - text: Để chọn được nhà cung cấp
            - emphasis [ref=e243]: kệ console trang trí giá tốt kho hàng bình dương
            - text: "uy tín, chất lượng, bạn nên:"
        - list [ref=e244]:
          - listitem [ref=e245]:
            - generic [ref=e246]:
              - strong [ref=e247]: "Tìm hiểu thông tin:"
              - text: Tìm hiểu thông tin về nhà cung cấp trên mạng, xem đánh giá của khách hàng.
          - listitem [ref=e248]:
            - generic [ref=e249]:
              - strong [ref=e250]: "Tham khảo ý kiến:"
              - text: Tham khảo ý kiến của bạn bè, người thân đã từng mua kệ console.
          - listitem [ref=e251]:
            - generic [ref=e252]:
              - strong [ref=e253]: "Xem xét mẫu mã:"
              - text: Đến trực tiếp kho hàng để xem xét mẫu mã sản phẩm, kiểm tra chất lượng.
          - listitem [ref=e254]:
            - generic [ref=e255]:
              - strong [ref=e256]: "So sánh giá cả:"
              - text: So sánh giá cả của nhiều nhà cung cấp khác nhau để chọn được sản phẩm có giá tốt nhất.
          - listitem [ref=e257]:
            - generic [ref=e258]:
              - strong [ref=e259]: "Hỏi về chính sách:"
              - text: Hỏi về chính sách bảo hành, đổi trả sản phẩm.
        - heading "Chính sách bảo hành, vận chuyển và lắp đặt kệ console tại Bình Dương" [level=3] [ref=e260]
        - paragraph [ref=e261]:
          - generic [ref=e262]:
            - text: Khi mua
            - emphasis [ref=e263]: kệ console trang trí giá tốt kho hàng bình dương
            - text: ", bạn nên hỏi kỹ về chính sách bảo hành, vận chuyển và lắp đặt. Chính sách bảo hành sẽ giúp bạn yên tâm hơn về chất lượng sản phẩm. Dịch vụ vận chuyển và lắp đặt sẽ giúp bạn tiết kiệm thời gian và công sức."
            - emphasis [ref=e264]: Kệ console trang trí giá tốt kho hàng bình dương
            - text: với chính sách tốt là sự lựa chọn hoàn hảo.
        - paragraph [ref=e265]:
          - generic [ref=e266]:
            - emphasis [ref=e267]: Kệ console trang trí giá tốt kho hàng bình dương
            - text: luôn sẵn sàng phục vụ nhu cầu của bạn.
            - emphasis [ref=e268]: Kệ console trang trí giá tốt kho hàng bình dương
            - text: là giải pháp tối ưu cho không gian sống của bạn.
            - emphasis [ref=e269]: Kệ console trang trí giá tốt kho hàng bình dương
            - text: "- lựa chọn thông minh cho mọi nhà."
    - generic [ref=e271]:
      - generic [ref=e273]: Sản phẩm cùng loại
      - generic [ref=e276]:
        - generic [ref=e278]:
          - generic:
            - link "Bộ 3 ghế sofa phòng khách hiện đại Bình Dương":
              - /url: bo-3-ghe-sofa-phong-khach-hien-dai-binh-duong
              - img "Bộ 3 ghế sofa phòng khách hiện đại Bình Dương"
          - generic [ref=e279]:
            - heading "Bộ 3 ghế sofa phòng khách hiện đại Bình Dương" [level=3] [ref=e280]:
              - link "Bộ 3 ghế sofa phòng khách hiện đại Bình Dương" [ref=e281] [cursor=pointer]:
                - /url: bo-3-ghe-sofa-phong-khach-hien-dai-binh-duong
            - paragraph [ref=e282]:
              - generic [ref=e283]: "Giá:"
              - generic [ref=e284]: Liên hệ
        - generic [ref=e286]:
          - generic:
            - link "Bàn Ghế Mây Nhựa đẹp Bình Dương":
              - /url: ban-ghe-may-nhua-dep-binh-duong
              - img "Bàn Ghế Mây Nhựa đẹp Bình Dương"
          - generic [ref=e287]:
            - heading "Bàn Ghế Mây Nhựa đẹp Bình Dương" [level=3] [ref=e288]:
              - link "Bàn Ghế Mây Nhựa đẹp Bình Dương" [ref=e289] [cursor=pointer]:
                - /url: ban-ghe-may-nhua-dep-binh-duong
            - paragraph [ref=e290]:
              - generic [ref=e291]: "Giá:"
              - generic [ref=e292]: Liên hệ
        - generic [ref=e294]:
          - generic:
            - link "Ghế mây cói tựa lưng ngoài trời giá rẻ tại TPHCM":
              - /url: ghe-may-coi-tua-lung-ngoai-troi-gia-re-tai-tphcm
              - img "Ghế mây cói tựa lưng ngoài trời giá rẻ tại TPHCM"
          - generic [ref=e295]:
            - heading "Ghế mây cói tựa lưng ngoài trời giá rẻ tại TPHCM" [level=3] [ref=e296]:
              - link "Ghế mây cói tựa lưng ngoài trời giá rẻ tại TPHCM" [ref=e297] [cursor=pointer]:
                - /url: ghe-may-coi-tua-lung-ngoai-troi-gia-re-tai-tphcm
            - paragraph [ref=e298]:
              - generic [ref=e299]: "Giá:"
              - generic [ref=e300]: Liên hệ
        - generic [ref=e302]:
          - generic:
            - link "Ghế đua đưa giá rẻ tại bình dương":
              - /url: ghe-dua-dua-gia-re-tai-binh-duong
              - img "Ghế đua đưa giá rẻ tại bình dương"
          - generic [ref=e303]:
            - heading "Ghế đua đưa giá rẻ tại bình dương" [level=3] [ref=e304]:
              - link "Ghế đua đưa giá rẻ tại bình dương" [ref=e305] [cursor=pointer]:
                - /url: ghe-dua-dua-gia-re-tai-binh-duong
            - paragraph [ref=e306]:
              - generic [ref=e307]: "Giá:"
              - generic [ref=e308]: 2.200.000đ
              - generic [ref=e309]: 2.800.000đ
        - generic [ref=e311]:
          - generic:
            - link "ghế bench chất lượng giá rẻ tại HCM":
              - /url: ghe-bench-chat-luong-gia-re-tai-hcm
              - img "ghế bench chất lượng giá rẻ tại HCM"
          - generic [ref=e312]:
            - heading "ghế bench chất lượng giá rẻ tại HCM" [level=3] [ref=e313]:
              - link "ghế bench chất lượng giá rẻ tại HCM" [ref=e314] [cursor=pointer]:
                - /url: ghe-bench-chat-luong-gia-re-tai-hcm
            - paragraph [ref=e315]:
              - generic [ref=e316]: "Giá:"
              - generic [ref=e317]: Liên hệ
        - generic [ref=e319]:
          - generic:
            - link "Ghế bench oval chất lượng giá rẻ tại bình TPHCM":
              - /url: ghe-bench-oval-chat-luong-gia-re-tai-binh-tphcm
              - img "Ghế bench oval chất lượng giá rẻ tại bình TPHCM"
          - generic [ref=e320]:
            - heading "Ghế bench oval chất lượng giá rẻ tại bình TPHCM" [level=3] [ref=e321]:
              - link "Ghế bench oval chất lượng giá rẻ tại bình TPHCM" [ref=e322] [cursor=pointer]:
                - /url: ghe-bench-oval-chat-luong-gia-re-tai-binh-tphcm
            - paragraph [ref=e323]:
              - generic [ref=e324]: "Giá:"
              - generic [ref=e325]: Liên hệ
        - generic [ref=e327]:
          - generic:
            - link "Ghế bench đẹp giá rẻ tại sài gòn":
              - /url: ghe-bench-dep-gia-re-tai-sai-gon
              - img "Ghế bench đẹp giá rẻ tại sài gòn"
          - generic [ref=e328]:
            - heading "Ghế bench đẹp giá rẻ tại sài gòn" [level=3] [ref=e329]:
              - link "Ghế bench đẹp giá rẻ tại sài gòn" [ref=e330] [cursor=pointer]:
                - /url: ghe-bench-dep-gia-re-tai-sai-gon
            - paragraph [ref=e331]:
              - generic [ref=e332]: "Giá:"
              - generic [ref=e333]: Liên hệ
        - generic [ref=e335]:
          - generic:
            - link "Kệ góc giá rẻ tại xưởng bình dương":
              - /url: ke-goc-gia-re-tai-xuong-binh-duong
              - img "Kệ góc giá rẻ tại xưởng bình dương"
          - generic [ref=e336]:
            - heading "Kệ góc giá rẻ tại xưởng bình dương" [level=3] [ref=e337]:
              - link "Kệ góc giá rẻ tại xưởng bình dương" [ref=e338] [cursor=pointer]:
                - /url: ke-goc-gia-re-tai-xuong-binh-duong
            - paragraph [ref=e339]:
              - generic [ref=e340]: "Giá:"
              - generic [ref=e341]: 550.000đ
              - generic [ref=e342]: 950.000đ
      - generic:
        - button [ref=e343] [cursor=pointer]:
          - img [ref=e344]
        - button [ref=e347] [cursor=pointer]:
          - img [ref=e348]
  - generic [ref=e351]:
    - generic [ref=e353]:
      - generic [ref=e354]:
        - heading "Nội Thất Hoàng Nhân" [level=3] [ref=e356]
        - generic [ref=e357]:
          - paragraph [ref=e359]: Tổ 3, KP Khánh Tân, Phường Tân Hiệp, HCM
          - paragraph [ref=e361]: 0972 197 911 - 0349 308 368
          - paragraph [ref=e363]: nguyetdoan01986@gmail.com
          - paragraph [ref=e365]: www.noithathoangnhan.com
      - generic [ref=e366]:
        - heading "Chính sách" [level=4] [ref=e368]
        - generic [ref=e369]:
          - link "Chính sách kiểm hàng" [ref=e370] [cursor=pointer]:
            - /url: chinh-sach-kiem-hang
          - link "Chính sách đổi trả và hoàn tiền" [ref=e371] [cursor=pointer]:
            - /url: chinh-sach-doi-tra-va-hoan-tien
          - link "Chính sách bảo mật thông tin" [ref=e372] [cursor=pointer]:
            - /url: chinh-sach-bao-mat-thong-tin
          - link "Chính sách xử lý khiếu nại" [ref=e373] [cursor=pointer]:
            - /url: chinh-sach-xu-ly-khieu-nai
          - link "Chính sách vận chuyển và giao nhận" [ref=e374] [cursor=pointer]:
            - /url: chinh-sach-van-chuyen-va-giao-nhan
      - generic [ref=e375]:
        - heading "Follow ttb" [level=4] [ref=e377]
        - generic [ref=e378]:
          - link "Zalo Zalo" [ref=e379] [cursor=pointer]:
            - /url: ""
            - img "Zalo" [ref=e380]
            - heading "Zalo" [level=3] [ref=e381]
          - link "NỘI THẤT HOÀNG NHÂN" [ref=e382] [cursor=pointer]:
            - /url: ""
            - img "NỘI THẤT HOÀNG NHÂN" [ref=e383]
            - heading [level=3]
          - link "Facebook Facebook" [ref=e384] [cursor=pointer]:
            - /url: https://www.facebook.com/people/N%E1%BB%99i-Th%E1%BA%A5t-Ho%C3%A0ng-Nh%C3%A2n/61576681655135/?ref=embed_page#
            - img "Facebook" [ref=e385]
            - heading "Facebook" [level=3] [ref=e386]
          - link "NỘI THẤT HOÀNG NHÂN" [ref=e387] [cursor=pointer]:
            - /url: ""
            - img "NỘI THẤT HOÀNG NHÂN" [ref=e388]
            - heading [level=3]
          - link "NỘI THẤT HOÀNG NHÂN" [ref=e389] [cursor=pointer]:
            - /url: ""
            - img "NỘI THẤT HOÀNG NHÂN" [ref=e390]
            - heading [level=3]
          - link "address1 Xem bản đồ" [ref=e391] [cursor=pointer]:
            - /url: https://maps.app.goo.gl/rE4kiNK5CaLc22VBA
            - img "address1" [ref=e392]
            - heading "Xem bản đồ" [level=3] [ref=e393]
    - generic [ref=e397]: Thiết Kế. Thiết Kế Web MIMA
  - generic [ref=e398]:
    - 'link "Call me: 0972 197 911" [ref=e399] [cursor=pointer]':
      - /url: tel:0972197911
      - img [ref=e403]
      - generic [ref=e406]: "Call me: 0972 197 911"
    - 'link "Zalo: 0972 197 911" [ref=e407] [cursor=pointer]':
      - /url: https://zalo.me/0972197911
      - img [ref=e411]
      - generic [ref=e413]: "Zalo: 0972 197 911"
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
          - strong: Kệ console trang trí giá tốt kho hàng bình dương
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e414]:
      - generic [ref=e415]: "❌ Chi tiết lỗi cần khắc phục (1/15):"
      - generic [ref=e416]:
        - generic [ref=e417]:
          - generic [ref=e418]: 6. Liên kết (Links)
          - generic [ref=e419]: 1 lỗi
        - generic [ref=e420]:
          - strong [ref=e422]: "Không có broken links (lỗi: 1/33)"
          - generic [ref=e423]: "⚠️ Broken links: http://kệ console trang trí giá tốt kho hàng bình dương (status: 0)"
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