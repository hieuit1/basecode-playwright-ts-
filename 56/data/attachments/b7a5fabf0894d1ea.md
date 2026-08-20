# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: CÁ BÓP NẤU LẨU THÁI (/ca-bop-nau-lau-thai)
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
      - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e8] [cursor=pointer]:
        - /url: https://langnuongnambo.vn/
        - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e9]
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "Trang chủ" [ref=e13] [cursor=pointer]:
            - /url: ""
        - listitem [ref=e14]:
          - link "Giới thiệu" [ref=e15] [cursor=pointer]:
            - /url: gioi-thieu
        - listitem [ref=e16]:
          - link "Thực đơn" [ref=e17] [cursor=pointer]:
            - /url: thuc-don
        - listitem [ref=e18]:
          - link "Dịch vụ" [ref=e19] [cursor=pointer]:
            - /url: dich-vu
        - listitem [ref=e20]:
          - link "Đặt món" [ref=e21] [cursor=pointer]:
            - /url: dat-mon
        - listitem [ref=e22]:
          - link "Phòng vip/sảnh" [ref=e23] [cursor=pointer]:
            - /url: phong-vip-sanh
        - listitem [ref=e24]:
          - link "Tin tức" [ref=e25] [cursor=pointer]:
            - /url: tin-tuc
        - listitem [ref=e26]:
          - link "Tuyển dụng" [ref=e27] [cursor=pointer]:
            - /url: tuyen-dung
        - listitem [ref=e28]:
          - link "Liên hệ" [ref=e29] [cursor=pointer]:
            - /url: lien-he
        - link "Đặt bàn" [ref=e32] [cursor=pointer]:
          - /url: tel:0985170767
        - listitem [ref=e33]:
          - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN 0" [ref=e34] [cursor=pointer]:
            - /url: gio-hang
            - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e35]
            - generic [ref=e36]: "0"
    - list [ref=e39]:
      - listitem [ref=e40]:
        - link "Trang chủ" [ref=e41] [cursor=pointer]:
          - /url: https://langnuongnambo.vn/
          - img [ref=e42]
          - generic [ref=e44]: Trang chủ
      - listitem [ref=e45]:
        - text: /
        - link "Đặt món" [ref=e46] [cursor=pointer]:
          - /url: https://langnuongnambo.vn/dat-mon
      - listitem [ref=e47]:
        - text: /
        - link "Món mới" [ref=e48] [cursor=pointer]:
          - /url: https://langnuongnambo.vn/mon-chinh
      - listitem [ref=e49]:
        - text: /
        - link "CÁ BÓP NẤU LẨU THÁI" [ref=e50] [cursor=pointer]:
          - /url: https://langnuongnambo.vn/ca-bop-nau-lau-thai
    - generic [ref=e51]:
      - generic [ref=e54]:
        - generic [ref=e56]:
          - listbox [ref=e60]:
            - option "CÁ BÓP NẤU LẨU THÁI" [ref=e61]:
              - link "CÁ BÓP NẤU LẨU THÁI" [ref=e62] [cursor=pointer]:
                - /url: javascript:;
                - img "CÁ BÓP NẤU LẨU THÁI" [ref=e63]
          - listbox [ref=e66]:
            - option "CÁ BÓP NẤU LẨU THÁI" [ref=e67]:
              - link "CÁ BÓP NẤU LẨU THÁI" [ref=e68] [cursor=pointer]:
                - /url: thumbs/550x480x2/upload/product/z6167736182742dcda7e5685e971eeffc206b1db234e4d-17352232181770101323741-5247.jpg
                - img "CÁ BÓP NẤU LẨU THÁI" [ref=e69]
        - list [ref=e71]:
          - heading "CÁ BÓP NẤU LẨU THÁI" [level=3] [ref=e72]
          - listitem [ref=e73]:
            - paragraph [ref=e75]: Món cá bóp nấu lẩu Thái tại Làng Nướng Nam Bộ là sự kết hợp hoàn hảo giữa hương vị tươi ngon của biển cả và sự quyến rũ của ẩm thực Thái Lan. Được chế biến với những nguyên liệu tươi sống, gia vị đậm đà và một chút cay nồng, món ăn này chắc chắn sẽ chinh phục được những tín đồ ẩm thực khó tính.
          - listitem [ref=e76]:
            - generic [ref=e77]: "Giá sản phẩm:"
            - generic [ref=e78]: "Liên hệ: 0985 1707 67"
          - listitem [ref=e80]:
            - generic [ref=e81]: "Số lượng:"
            - generic [ref=e83]:
              - generic [ref=e84] [cursor=pointer]: "-"
              - spinbutton [ref=e85]: "1"
              - generic [ref=e86] [cursor=pointer]: +
          - listitem [ref=e87]:
            - generic [ref=e88]:
              - generic [ref=e90] [cursor=pointer]: Mua ngay
              - generic [ref=e91] [cursor=pointer]:
                - img [ref=e92]
                - generic [ref=e95]: Thêm vào giỏ
      - generic [ref=e100]:
        - heading "Chi tiết sản phẩm" [level=5] [ref=e103]
        - generic [ref=e105]:
          - generic [ref=e106]:
            - paragraph [ref=e107]: Cá Bóp Nấu Lẩu Thái – Hương Vị Đậm Đà Tại Làng Nướng Nam Bộ
            - paragraph [ref=e108]: Món cá bóp nấu lẩu Thái tại Làng Nướng Nam Bộ là sự kết hợp hoàn hảo giữa hương vị tươi ngon của biển cả và sự quyến rũ của ẩm thực Thái Lan. Được chế biến với những nguyên liệu tươi sống, gia vị đậm đà và một chút cay nồng, món ăn này chắc chắn sẽ chinh phục được những tín đồ ẩm thực khó tính.
            - paragraph [ref=e109]: Hương Vị Tươi Ngon Của Cá Bóp
            - paragraph [ref=e110]: Cá bóp là một loại cá có thịt chắc, ngọt và ít xương, được lựa chọn kỹ càng tại Làng Nướng Nam Bộ. Khi chế biến lẩu, cá bóp được cắt thành miếng vừa ăn, giữ nguyên độ tươi ngon và ngọt tự nhiên. Thịt cá khi chín mềm nhưng vẫn giữ được độ dai, tạo cảm giác ăn cực kỳ thú vị và dễ chịu
            - paragraph [ref=e111]: Nước lẩu Thái chính là điểm nhấn đặc biệt của món ăn này. Được nấu từ các nguyên liệu đặc trưng như sả, riềng, lá chanh, me chua và nước cốt dừa, nước lẩu có màu sắc hấp dẫn và hương vị chua cay đặc trưng. Vị chua của me kết hợp với vị cay của ớt và hương thơm của sả tạo nên một nồi lẩu thơm lừng, kích thích vị giác.
            - paragraph [ref=e112]: Sự Kết Hợp Hoàn Hảo Của Các Nguyên Liệu
            - paragraph [ref=e113]: Ngoài cá bóp, lẩu Thái tại Làng Nướng Nam Bộ còn có sự kết hợp của nhiều nguyên liệu phong phú như nấm, rau củ tươi ngon, đậu hũ, và các loại gia vị Thái truyền thống. Tất cả các nguyên liệu đều được chế biến kỹ càng và tươi mới, đảm bảo mang đến cho thực khách một món lẩu không chỉ ngon miệng mà còn bổ dưỡng.
            - paragraph [ref=e114]: Nước lẩu không chỉ được nấu từ nguyên liệu tươi mà còn được gia giảm sao cho hài hòa, không quá chua cũng không quá cay, để thực khách có thể thưởng thức món ăn một cách trọn vẹn. Khi kết hợp với các loại rau sống và đồ nhúng, món lẩu Thái này mang lại sự tươi mới và hấp dẫn, khiến ai cũng phải “thưởng thức một lần là nhớ mãi”.
            - paragraph [ref=e115]: Không Gian Đậm Chất Nam Bộ
            - paragraph [ref=e116]: Thưởng thức món cá bóp nấu lẩu Thái tại Làng Nướng Nam Bộ, thực khách không chỉ được trải nghiệm hương vị tuyệt vời mà còn được đắm mình trong không gian ấm cúng, dễ chịu. Phong cách bài trí của nhà hàng mang đậm nét văn hóa Nam Bộ, tạo nên một không gian vừa thân mật, vừa sang trọng. Đây là nơi lý tưởng để tụ tập bạn bè, gia đình hay tổ chức những bữa tiệc sum vầy.
            - paragraph [ref=e117]: Món Ăn Phù Hợp Mọi Dịp
            - paragraph [ref=e118]: Lẩu Thái cá bóp tại Làng Nướng Nam Bộ không chỉ là một món ăn bổ dưỡng mà còn rất thích hợp cho các bữa tiệc tụ họp. Món ăn này dễ dàng làm hài lòng mọi thực khách, từ người yêu thích món ăn cay, đến những ai muốn thưởng thức món ăn mới lạ và độc đáo.
            - paragraph [ref=e119]: Kết Luận
            - paragraph [ref=e120]: Với cá bóp nấu lẩu Thái tại Làng Nướng Nam Bộ, bạn sẽ có cơ hội trải nghiệm một món ăn đầy đủ hương vị chua, cay, ngọt, mặn, và đậm đà, mang đến một cảm giác hài lòng tuyệt vời. Đừng bỏ lỡ cơ hội thưởng thức món ăn này khi ghé thăm nhà hàng, để cảm nhận trọn vẹn sự phong phú và tinh tế trong từng miếng cá và nước lẩu.
            - generic [ref=e121]: Xem thêm
          - link "Xem thêm bài viết" [ref=e124] [cursor=pointer]:
            - /url: javascript:;
            - generic [ref=e125]:
              - text: Xem thêm bài viết
              - img [ref=e126]
      - generic [ref=e135]:
        - heading "Có thể bạn sẽ thích" [level=3] [ref=e137]
        - generic [ref=e140]:
          - generic [ref=e142]:
            - link "BÒ SỐT RƯỢU VANG" [ref=e144] [cursor=pointer]:
              - /url: bo-sot-ruou-vang
              - img "BÒ SỐT RƯỢU VANG" [ref=e145]
            - generic [ref=e146]:
              - heading "BÒ SỐT RƯỢU VANG" [level=3] [ref=e147]:
                - link "BÒ SỐT RƯỢU VANG" [ref=e148] [cursor=pointer]:
                  - /url: bo-sot-ruou-vang
              - paragraph [ref=e149]:
                - generic [ref=e150]: "Giá: Liên hệ"
          - generic [ref=e152]:
            - link "MÌ XÁ XÍU DẦU HÀO" [ref=e154] [cursor=pointer]:
              - /url: mi-xa-xiu-dau-hao
              - img "MÌ XÁ XÍU DẦU HÀO" [ref=e155]
            - generic [ref=e156]:
              - heading "MÌ XÁ XÍU DẦU HÀO" [level=3] [ref=e157]:
                - link "MÌ XÁ XÍU DẦU HÀO" [ref=e158] [cursor=pointer]:
                  - /url: mi-xa-xiu-dau-hao
              - paragraph [ref=e159]:
                - generic [ref=e160]: "Giá: Liên hệ"
          - generic [ref=e162]:
            - link "LẨU CÁ TẦM MĂNG CHUA" [ref=e164] [cursor=pointer]:
              - /url: lau-ca-tam-mang-chua
              - img "LẨU CÁ TẦM MĂNG CHUA" [ref=e165]
            - generic [ref=e166]:
              - heading "LẨU CÁ TẦM MĂNG CHUA" [level=3] [ref=e167]:
                - link "LẨU CÁ TẦM MĂNG CHUA" [ref=e168] [cursor=pointer]:
                  - /url: lau-ca-tam-mang-chua
              - paragraph [ref=e169]:
                - generic [ref=e170]: "Giá: Liên hệ"
          - generic [ref=e172]:
            - link "MIẾN XÀO CUA" [ref=e174] [cursor=pointer]:
              - /url: mien-xao-cua
              - img "MIẾN XÀO CUA" [ref=e175]
            - generic [ref=e176]:
              - heading "MIẾN XÀO CUA" [level=3] [ref=e177]:
                - link "MIẾN XÀO CUA" [ref=e178] [cursor=pointer]:
                  - /url: mien-xao-cua
              - paragraph [ref=e179]:
                - generic [ref=e180]: "Giá: Liên hệ"
          - generic [ref=e182]:
            - link "UDON XÀO HẢI SẢN" [ref=e184] [cursor=pointer]:
              - /url: udon-xao-hai-san
              - img "UDON XÀO HẢI SẢN" [ref=e185]
            - generic [ref=e186]:
              - heading "UDON XÀO HẢI SẢN" [level=3] [ref=e187]:
                - link "UDON XÀO HẢI SẢN" [ref=e188] [cursor=pointer]:
                  - /url: udon-xao-hai-san
              - paragraph [ref=e189]:
                - generic [ref=e190]: "Giá: Liên hệ"
          - generic [ref=e192]:
            - link "CƠM CÁ CHIÊN MẶN GÀ XÉ" [ref=e194] [cursor=pointer]:
              - /url: com-ca-chien-man-ga-xe
              - img "CƠM CÁ CHIÊN MẶN GÀ XÉ" [ref=e195]
            - generic [ref=e196]:
              - heading "CƠM CÁ CHIÊN MẶN GÀ XÉ" [level=3] [ref=e197]:
                - link "CƠM CÁ CHIÊN MẶN GÀ XÉ" [ref=e198] [cursor=pointer]:
                  - /url: com-ca-chien-man-ga-xe
              - paragraph [ref=e199]:
                - generic [ref=e200]: "Giá: Liên hệ"
          - generic [ref=e202]:
            - link "LẨU HẢI SẢN" [ref=e204] [cursor=pointer]:
              - /url: lau-hai-san
              - img "LẨU HẢI SẢN" [ref=e205]
            - generic [ref=e206]:
              - heading "LẨU HẢI SẢN" [level=3] [ref=e207]:
                - link "LẨU HẢI SẢN" [ref=e208] [cursor=pointer]:
                  - /url: lau-hai-san
              - paragraph [ref=e209]:
                - generic [ref=e210]: "Giá: Liên hệ"
          - generic [ref=e212]:
            - link "GÀ TIỀM ỚT HIỂM" [ref=e214] [cursor=pointer]:
              - /url: ga-tiem-ot-hiem
            - generic [ref=e215]:
              - heading "GÀ TIỀM ỚT HIỂM" [level=3] [ref=e216]:
                - link "GÀ TIỀM ỚT HIỂM" [ref=e217] [cursor=pointer]:
                  - /url: ga-tiem-ot-hiem
              - paragraph [ref=e218]:
                - generic [ref=e219]: "Giá: Liên hệ"
        - generic:
          - button [ref=e220] [cursor=pointer]:
            - img [ref=e221]
          - button [ref=e224] [cursor=pointer]:
            - img [ref=e225]
    - generic [ref=e228]:
      - generic [ref=e231]:
        - generic [ref=e232]:
          - generic [ref=e233]:
            - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e234] [cursor=pointer]:
              - /url: https://langnuongnambo.vn/
              - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e235]
            - paragraph [ref=e236]: LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN
          - paragraph [ref=e237]:
            - strong [ref=e238]: LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN
          - paragraph [ref=e239]:
            - generic [ref=e240]:
              - strong [ref=e241]: "Địa chỉ:"
              - link "14A Dương Đức Hiền, Tây Thạnh, Tân Phú, Tp.HCM, Việt Nam" [ref=e242] [cursor=pointer]:
                - /url: https://www.google.com/maps/place/?cid=5624610190095411286
          - paragraph [ref=e243]
          - paragraph [ref=e244]:
            - generic [ref=e245]:
              - strong [ref=e246]: "Holine:"
              - link "0985 1707 67" [ref=e247] [cursor=pointer]:
                - /url: https://zalo.me/0985170767
          - paragraph [ref=e248]
          - paragraph [ref=e249]:
            - generic [ref=e250]:
              - strong [ref=e251]: "Email:"
              - text: nhahanglangnuongnambo@gmail.com
          - paragraph [ref=e252]
          - paragraph [ref=e253]:
            - generic [ref=e254]:
              - strong [ref=e255]: "Fanpage:"
              - link "Nhà Hàng Làng Nướng Nam Bộ" [ref=e256] [cursor=pointer]:
                - /url: https://www.facebook.com/langnuongnambo.tp/
          - paragraph [ref=e257]
          - paragraph [ref=e258]:
            - generic [ref=e259]:
              - strong [ref=e260]: "Website:"
              - link "langnuongnambo.vn" [ref=e261] [cursor=pointer]:
                - /url: https://langnuongnambo.vn/
          - generic [ref=e262]:
            - paragraph [ref=e263]: Theo dõi chúng tôi tại
            - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e264] [cursor=pointer]:
              - /url: ""
              - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e265]
            - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e266] [cursor=pointer]:
              - /url: ""
              - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e267]
            - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e268] [cursor=pointer]:
              - /url: ""
              - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e269]
            - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e270] [cursor=pointer]:
              - /url: ""
              - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e271]
            - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e272] [cursor=pointer]:
              - /url: ""
              - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e273]
        - generic [ref=e275]:
          - generic [ref=e276]:
            - paragraph [ref=e277]: Về chúng tôi
            - list [ref=e278]:
              - listitem [ref=e279]:
                - link "Trang chủ" [ref=e280] [cursor=pointer]:
                  - /url: https://langnuongnambo.vn/
              - listitem [ref=e281]:
                - link "Giới thiệu" [ref=e282] [cursor=pointer]:
                  - /url: gioi-thieu
              - listitem [ref=e283]:
                - link "Thực đơn" [ref=e284] [cursor=pointer]:
                  - /url: thuc-don
              - listitem [ref=e285]:
                - link "Dịch vụ" [ref=e286] [cursor=pointer]:
                  - /url: dich-vu
              - listitem [ref=e287]:
                - link "Đặt món" [ref=e288] [cursor=pointer]:
                  - /url: dat-mon
              - listitem [ref=e289]:
                - link "Phòng vip/sảnh" [ref=e290] [cursor=pointer]:
                  - /url: phong-vip-sanh
              - listitem [ref=e291]:
                - link "Tuyển dụng" [ref=e292] [cursor=pointer]:
                  - /url: tuyen-dung
              - listitem [ref=e293]:
                - link "Tin tức" [ref=e294] [cursor=pointer]:
                  - /url: tin-tuc
              - listitem [ref=e295]:
                - link "Liên hệ" [ref=e296] [cursor=pointer]:
                  - /url: lien-he
          - generic [ref=e297]:
            - paragraph [ref=e298]: Dịch vụ
            - list [ref=e299]:
              - listitem [ref=e300]:
                - link "Tổ chức liên hoan" [ref=e301] [cursor=pointer]:
                  - /url: to-chuc-lien-hoan
              - listitem [ref=e302]:
                - link "Tổ chức họp mặt" [ref=e303] [cursor=pointer]:
                  - /url: to-chuc-hop-mat
              - listitem [ref=e304]:
                - link "Tổ chức thôi nôi" [ref=e305] [cursor=pointer]:
                  - /url: to-chuc-thoi-noi
              - listitem [ref=e306]:
                - link "Tổ chức tân niên" [ref=e307] [cursor=pointer]:
                  - /url: to-chuc-tan-nien
              - listitem [ref=e308]:
                - link "Tổ chức tất niên" [ref=e309] [cursor=pointer]:
                  - /url: to-chuc-tat-nien
          - generic [ref=e310]:
            - paragraph [ref=e311]: Thực đơn
            - list [ref=e312]:
              - listitem [ref=e313]:
                - link "MENU TIỆC LẺ ( 3-4 người)" [ref=e314] [cursor=pointer]:
                  - /url: menu-tiec-le-3-4-nguoi
              - listitem [ref=e315]:
                - link "SET MENU CÁC MÓN ( 10 người )" [ref=e316] [cursor=pointer]:
                  - /url: set-menu-cac-mon-10-nguoi
              - listitem [ref=e317]:
                - link "SET MENU ĐẶT TIỆC ( 10 người)" [ref=e318] [cursor=pointer]:
                  - /url: set-menu-dat-tiec-10-nguoi
      - generic [ref=e322]: Copyright ©2026 LÀNG NƯỚNG NAM BỘ. All Rights Reserved. Thiết kế Web MIMA
    - generic [ref=e323]:
      - 'link "Call me: 0985 1707 67" [ref=e324] [cursor=pointer]':
        - /url: tel:0985170767
        - img [ref=e328]
        - generic [ref=e331]: "Call me: 0985 1707 67"
      - 'link "Zalo: 0985 1707 67" [ref=e332] [cursor=pointer]':
        - /url: https://zalo.me/0985170767
        - img [ref=e336]
        - generic [ref=e337]: "Zalo: 0985 1707 67"
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
          - strong: CÁ BÓP NẤU LẨU THÁI
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e338]:
      - generic [ref=e339]: "❌ Chi tiết lỗi cần khắc phục (1/15):"
      - generic [ref=e340]:
        - generic [ref=e341]:
          - generic [ref=e342]: 3. Heading (H1-H6)
          - generic [ref=e343]: 1 lỗi
        - generic [ref=e344]:
          - strong [ref=e346]: Heading phân cấp hợp lệ (2 lỗi)
          - generic [ref=e347]: "⚠️ Heading phân cấp sai: Nhảy cấp từ H1 → H3 (\"CÁ BÓP NẤU LẨU THÁI\"); Nhảy cấp từ H3 → H5 (\"Chi tiết sản phẩm\")"
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