# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: LẨU HẢI SẢN (/lau-hai-san)
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
        - link "LẨU HẢI SẢN" [ref=e50] [cursor=pointer]:
          - /url: https://langnuongnambo.vn/lau-hai-san
    - generic [ref=e51]:
      - generic [ref=e54]:
        - generic [ref=e56]:
          - listbox [ref=e60]:
            - option "LẨU HẢI SẢN" [ref=e61]:
              - link "LẨU HẢI SẢN" [ref=e62] [cursor=pointer]:
                - /url: javascript:;
                - img "LẨU HẢI SẢN" [ref=e63]
            - option "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e64]:
              - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e65] [cursor=pointer]:
                - /url: javascript:;
                - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e66]
          - generic [ref=e67]:
            - button [ref=e68] [cursor=pointer]:
              - img [ref=e69]
            - listbox [ref=e72]:
              - link [ref=e74] [cursor=pointer]:
                - /url: thumbs/550x480x2/upload/product/z6167736182742dcda7e5685e971eeffc206b1db234e4d-17352232181770101323828-8985.jpg
                - img [ref=e75]
              - option "LẨU HẢI SẢN" [ref=e76]:
                - link "LẨU HẢI SẢN" [ref=e77] [cursor=pointer]:
                  - /url: thumbs/550x480x2/upload/product/z616773610746057ce13dd0a536092a96637d2b4c859f0-17351948251770101268910-3944.jpg
                  - img "LẨU HẢI SẢN" [ref=e78]
              - option [ref=e79]:
                - link [ref=e80] [cursor=pointer]:
                  - /url: thumbs/550x480x2/upload/product/z6167736182742dcda7e5685e971eeffc206b1db234e4d-17352232181770101323828-8985.jpg
                  - img [ref=e81]
              - link [ref=e83] [cursor=pointer]:
                - /url: thumbs/550x480x2/upload/product/z616773610746057ce13dd0a536092a96637d2b4c859f0-17351948251770101268910-3944.jpg
                - img [ref=e84]
            - button [ref=e85] [cursor=pointer]:
              - img [ref=e86]
        - list [ref=e89]:
          - heading "LẨU HẢI SẢN" [level=3] [ref=e90]
          - listitem [ref=e91]:
            - paragraph [ref=e93]: Lẩu hải sản là một trong những món ăn được yêu thích tại Làng Nướng Nam Bộ, mang đến hương vị tươi ngon đặc trưng của biển cả, kết hợp với phong cách chế biến đậm chất Nam Bộ. Đây là lựa chọn hoàn hảo cho những bữa tiệc quây quần cùng gia đình và bạn bè.
          - listitem [ref=e94]:
            - generic [ref=e95]: "Giá sản phẩm:"
            - generic [ref=e96]: "Liên hệ: 0985 1707 67"
          - listitem [ref=e98]:
            - generic [ref=e99]: "Số lượng:"
            - generic [ref=e101]:
              - generic [ref=e102] [cursor=pointer]: "-"
              - spinbutton [ref=e103]: "1"
              - generic [ref=e104] [cursor=pointer]: +
          - listitem [ref=e105]:
            - generic [ref=e106]:
              - generic [ref=e108] [cursor=pointer]: Mua ngay
              - generic [ref=e109] [cursor=pointer]:
                - img [ref=e110]
                - generic [ref=e113]: Thêm vào giỏ
      - generic [ref=e118]:
        - heading "Chi tiết sản phẩm" [level=5] [ref=e121]
        - generic [ref=e124] [cursor=pointer]:
          - img [ref=e125]
          - text: Mục lục
          - img [ref=e128]
        - generic [ref=e131]:
          - generic [ref=e132]:
            - heading "Món Lẩu Hải Sản tại Làng Nướng Nam Bộ" [level=2] [ref=e133]:
              - emphasis [ref=e137]: Món Lẩu Hải Sản tại Làng Nướng Nam Bộ
            - paragraph [ref=e138]:
              - generic [ref=e140]: Lẩu hải sản là một trong những món ăn được yêu thích tại Làng Nướng Nam Bộ, mang đến hương vị tươi ngon đặc trưng của biển cả, kết hợp với phong cách chế biến đậm chất Nam Bộ. Đây là lựa chọn hoàn hảo cho những bữa tiệc quây quần cùng gia đình và bạn bè.
            - paragraph [ref=e141]:
              - emphasis [ref=e145]: Hương vị biển cả
            - paragraph [ref=e146]:
              - generic [ref=e148]: Món lẩu hải sản tại đây được chế biến từ các loại hải sản tươi sống như tôm, mực, nghêu, cua, và cá. Từng nguyên liệu được chọn lọc kỹ lưỡng, đảm bảo độ tươi ngon và chất lượng cao. Nước lẩu đậm đà, được nấu từ xương hầm và các loại gia vị như sả, gừng, tỏi, cùng một chút vị chua nhẹ của cà chua và dứa, mang đến hương vị cân bằng và dễ chịu.
            - paragraph [ref=e149]:
              - emphasis [ref=e154]: Đặc trưng phong cách Nam Bộ
            - paragraph [ref=e155]:
              - generic [ref=e157]: Nước lẩu hải sản tại Làng Nướng Nam Bộ mang đậm phong cách miền Nam, với sự hòa quyện giữa vị ngọt tự nhiên của hải sản tươi và hương thơm của các loại rau gia vị như ngò gai, rau om, và hành lá. Món lẩu thường được ăn kèm với bún tươi hoặc mì, cùng các loại rau xanh như rau muống, cải thảo, và bắp chuối bào, tạo nên sự hòa hợp giữa hương vị và màu sắc.
            - paragraph [ref=e158]:
              - emphasis [ref=e163]: Không gian ấm cúng
            - paragraph [ref=e164]:
              - generic [ref=e166]: Không chỉ ngon, lẩu hải sản còn là món ăn góp phần tạo nên không khí gắn kết trong các bữa tiệc. Tại Làng Nướng Nam Bộ, không gian thoáng mát và thiết kế gần gũi với thiên nhiên giúp thực khách thưởng thức món ăn trong cảm giác thư giãn và thoải mái.
            - paragraph [ref=e167]:
              - emphasis [ref=e172]: Sự lựa chọn lý tưởng
            - paragraph [ref=e173]:
              - generic [ref=e175]: Lẩu hải sản tại đây phù hợp với mọi dịp, từ những bữa ăn gia đình, liên hoan bạn bè đến những buổi gặp mặt đối tác. Hương vị thanh ngọt, cay nhẹ và sự phong phú trong nguyên liệu khiến món ăn này trở thành một trong những món “best-seller” tại nhà hàng.
            - paragraph [ref=e176]:
              - generic [ref=e178]: Hãy ghé Làng Nướng Nam Bộ để thưởng thức món lẩu hải sản, cảm nhận sự tươi ngon trong từng miếng hải sản và tận hưởng bữa ăn trọn vẹn đậm chất Nam Bộ.
            - paragraph [ref=e179]
            - paragraph [ref=e180]: Thông tin liên hệ
            - paragraph [ref=e181]:
              - strong [ref=e182]: LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN
            - paragraph [ref=e183]:
              - strong [ref=e184]: "Địa chỉ:"
              - link "14A Dương Đức Hiền, Tây Thạnh, Tân Phú, Tp.HCM, Việt Nam" [ref=e185] [cursor=pointer]:
                - /url: https://www.google.com/maps/place/?cid=5624610190095411286
            - paragraph [ref=e186]:
              - strong [ref=e187]: "Holine:"
              - link "0985 1707 67" [ref=e188] [cursor=pointer]:
                - /url: https://zalo.me/0985170767
            - paragraph [ref=e189]:
              - strong [ref=e190]: "Email:"
              - text: nhahanglangnuongnambo@gmail.com
            - paragraph [ref=e191]:
              - strong [ref=e192]: "Fanpage:"
              - link "Nhà Hàng Làng Nướng Nam Bộ" [ref=e193] [cursor=pointer]:
                - /url: https://www.facebook.com/langnuongnambo.tp/
            - paragraph [ref=e194]:
              - strong [ref=e195]: "Website:"
              - link "www.langnuongnambo.vn" [ref=e196] [cursor=pointer]:
                - /url: https://langnuongnambo.vn/
            - generic [ref=e197]: Xem thêm
          - link "Xem thêm bài viết" [ref=e200] [cursor=pointer]:
            - /url: javascript:;
            - generic [ref=e201]:
              - text: Xem thêm bài viết
              - img [ref=e202]
      - generic [ref=e211]:
        - heading "Có thể bạn sẽ thích" [level=3] [ref=e213]
        - generic [ref=e216]:
          - generic [ref=e218]:
            - link "CÁ BÓP NẤU LẨU THÁI" [ref=e220] [cursor=pointer]:
              - /url: ca-bop-nau-lau-thai
            - generic [ref=e221]:
              - heading "CÁ BÓP NẤU LẨU THÁI" [level=3] [ref=e222]:
                - link "CÁ BÓP NẤU LẨU THÁI" [ref=e223] [cursor=pointer]:
                  - /url: ca-bop-nau-lau-thai
              - paragraph [ref=e224]:
                - generic [ref=e225]: "Giá: Liên hệ"
          - generic [ref=e227]:
            - link "BÒ SỐT RƯỢU VANG" [ref=e229] [cursor=pointer]:
              - /url: bo-sot-ruou-vang
            - generic [ref=e230]:
              - heading "BÒ SỐT RƯỢU VANG" [level=3] [ref=e231]:
                - link "BÒ SỐT RƯỢU VANG" [ref=e232] [cursor=pointer]:
                  - /url: bo-sot-ruou-vang
              - paragraph [ref=e233]:
                - generic [ref=e234]: "Giá: Liên hệ"
          - generic [ref=e236]:
            - link "MÌ XÁ XÍU DẦU HÀO" [ref=e238] [cursor=pointer]:
              - /url: mi-xa-xiu-dau-hao
            - generic [ref=e239]:
              - heading "MÌ XÁ XÍU DẦU HÀO" [level=3] [ref=e240]:
                - link "MÌ XÁ XÍU DẦU HÀO" [ref=e241] [cursor=pointer]:
                  - /url: mi-xa-xiu-dau-hao
              - paragraph [ref=e242]:
                - generic [ref=e243]: "Giá: Liên hệ"
          - generic [ref=e245]:
            - link "LẨU CÁ TẦM MĂNG CHUA" [ref=e247] [cursor=pointer]:
              - /url: lau-ca-tam-mang-chua
            - generic [ref=e248]:
              - heading "LẨU CÁ TẦM MĂNG CHUA" [level=3] [ref=e249]:
                - link "LẨU CÁ TẦM MĂNG CHUA" [ref=e250] [cursor=pointer]:
                  - /url: lau-ca-tam-mang-chua
              - paragraph [ref=e251]:
                - generic [ref=e252]: "Giá: Liên hệ"
          - generic [ref=e254]:
            - link "MIẾN XÀO CUA" [ref=e256] [cursor=pointer]:
              - /url: mien-xao-cua
            - generic [ref=e257]:
              - heading "MIẾN XÀO CUA" [level=3] [ref=e258]:
                - link "MIẾN XÀO CUA" [ref=e259] [cursor=pointer]:
                  - /url: mien-xao-cua
              - paragraph [ref=e260]:
                - generic [ref=e261]: "Giá: Liên hệ"
          - generic [ref=e263]:
            - link "UDON XÀO HẢI SẢN" [ref=e265] [cursor=pointer]:
              - /url: udon-xao-hai-san
            - generic [ref=e266]:
              - heading "UDON XÀO HẢI SẢN" [level=3] [ref=e267]:
                - link "UDON XÀO HẢI SẢN" [ref=e268] [cursor=pointer]:
                  - /url: udon-xao-hai-san
              - paragraph [ref=e269]:
                - generic [ref=e270]: "Giá: Liên hệ"
          - generic [ref=e272]:
            - link "CƠM CÁ CHIÊN MẶN GÀ XÉ" [ref=e274] [cursor=pointer]:
              - /url: com-ca-chien-man-ga-xe
            - generic [ref=e275]:
              - heading "CƠM CÁ CHIÊN MẶN GÀ XÉ" [level=3] [ref=e276]:
                - link "CƠM CÁ CHIÊN MẶN GÀ XÉ" [ref=e277] [cursor=pointer]:
                  - /url: com-ca-chien-man-ga-xe
              - paragraph [ref=e278]:
                - generic [ref=e279]: "Giá: Liên hệ"
          - generic [ref=e281]:
            - link "GÀ TIỀM ỚT HIỂM" [ref=e283] [cursor=pointer]:
              - /url: ga-tiem-ot-hiem
            - generic [ref=e284]:
              - heading "GÀ TIỀM ỚT HIỂM" [level=3] [ref=e285]:
                - link "GÀ TIỀM ỚT HIỂM" [ref=e286] [cursor=pointer]:
                  - /url: ga-tiem-ot-hiem
              - paragraph [ref=e287]:
                - generic [ref=e288]: "Giá: Liên hệ"
        - generic:
          - button [ref=e289] [cursor=pointer]:
            - img [ref=e290]
          - button [ref=e293] [cursor=pointer]:
            - img [ref=e294]
    - generic [ref=e297]:
      - generic [ref=e300]:
        - generic [ref=e301]:
          - generic [ref=e302]:
            - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e303] [cursor=pointer]:
              - /url: https://langnuongnambo.vn/
              - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e304]
            - paragraph [ref=e305]: LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN
          - paragraph [ref=e306]:
            - strong [ref=e307]: LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN
          - paragraph [ref=e308]:
            - generic [ref=e309]:
              - strong [ref=e310]: "Địa chỉ:"
              - link "14A Dương Đức Hiền, Tây Thạnh, Tân Phú, Tp.HCM, Việt Nam" [ref=e311] [cursor=pointer]:
                - /url: https://www.google.com/maps/place/?cid=5624610190095411286
          - paragraph [ref=e312]
          - paragraph [ref=e313]:
            - generic [ref=e314]:
              - strong [ref=e315]: "Holine:"
              - link "0985 1707 67" [ref=e316] [cursor=pointer]:
                - /url: https://zalo.me/0985170767
          - paragraph [ref=e317]
          - paragraph [ref=e318]:
            - generic [ref=e319]:
              - strong [ref=e320]: "Email:"
              - text: nhahanglangnuongnambo@gmail.com
          - paragraph [ref=e321]
          - paragraph [ref=e322]:
            - generic [ref=e323]:
              - strong [ref=e324]: "Fanpage:"
              - link "Nhà Hàng Làng Nướng Nam Bộ" [ref=e325] [cursor=pointer]:
                - /url: https://www.facebook.com/langnuongnambo.tp/
          - paragraph [ref=e326]
          - paragraph [ref=e327]:
            - generic [ref=e328]:
              - strong [ref=e329]: "Website:"
              - link "langnuongnambo.vn" [ref=e330] [cursor=pointer]:
                - /url: https://langnuongnambo.vn/
          - generic [ref=e331]:
            - paragraph [ref=e332]: Theo dõi chúng tôi tại
            - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e333] [cursor=pointer]:
              - /url: ""
              - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e334]
            - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e335] [cursor=pointer]:
              - /url: ""
              - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e336]
            - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e337] [cursor=pointer]:
              - /url: ""
              - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e338]
            - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e339] [cursor=pointer]:
              - /url: ""
              - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e340]
            - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e341] [cursor=pointer]:
              - /url: ""
              - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e342]
        - generic [ref=e344]:
          - generic [ref=e345]:
            - paragraph [ref=e346]: Về chúng tôi
            - list [ref=e347]:
              - listitem [ref=e348]:
                - link "Trang chủ" [ref=e349] [cursor=pointer]:
                  - /url: https://langnuongnambo.vn/
              - listitem [ref=e350]:
                - link "Giới thiệu" [ref=e351] [cursor=pointer]:
                  - /url: gioi-thieu
              - listitem [ref=e352]:
                - link "Thực đơn" [ref=e353] [cursor=pointer]:
                  - /url: thuc-don
              - listitem [ref=e354]:
                - link "Dịch vụ" [ref=e355] [cursor=pointer]:
                  - /url: dich-vu
              - listitem [ref=e356]:
                - link "Đặt món" [ref=e357] [cursor=pointer]:
                  - /url: dat-mon
              - listitem [ref=e358]:
                - link "Phòng vip/sảnh" [ref=e359] [cursor=pointer]:
                  - /url: phong-vip-sanh
              - listitem [ref=e360]:
                - link "Tuyển dụng" [ref=e361] [cursor=pointer]:
                  - /url: tuyen-dung
              - listitem [ref=e362]:
                - link "Tin tức" [ref=e363] [cursor=pointer]:
                  - /url: tin-tuc
              - listitem [ref=e364]:
                - link "Liên hệ" [ref=e365] [cursor=pointer]:
                  - /url: lien-he
          - generic [ref=e366]:
            - paragraph [ref=e367]: Dịch vụ
            - list [ref=e368]:
              - listitem [ref=e369]:
                - link "Tổ chức liên hoan" [ref=e370] [cursor=pointer]:
                  - /url: to-chuc-lien-hoan
              - listitem [ref=e371]:
                - link "Tổ chức họp mặt" [ref=e372] [cursor=pointer]:
                  - /url: to-chuc-hop-mat
              - listitem [ref=e373]:
                - link "Tổ chức thôi nôi" [ref=e374] [cursor=pointer]:
                  - /url: to-chuc-thoi-noi
              - listitem [ref=e375]:
                - link "Tổ chức tân niên" [ref=e376] [cursor=pointer]:
                  - /url: to-chuc-tan-nien
              - listitem [ref=e377]:
                - link "Tổ chức tất niên" [ref=e378] [cursor=pointer]:
                  - /url: to-chuc-tat-nien
          - generic [ref=e379]:
            - paragraph [ref=e380]: Thực đơn
            - list [ref=e381]:
              - listitem [ref=e382]:
                - link "MENU TIỆC LẺ ( 3-4 người)" [ref=e383] [cursor=pointer]:
                  - /url: menu-tiec-le-3-4-nguoi
              - listitem [ref=e384]:
                - link "SET MENU CÁC MÓN ( 10 người )" [ref=e385] [cursor=pointer]:
                  - /url: set-menu-cac-mon-10-nguoi
              - listitem [ref=e386]:
                - link "SET MENU ĐẶT TIỆC ( 10 người)" [ref=e387] [cursor=pointer]:
                  - /url: set-menu-dat-tiec-10-nguoi
      - generic [ref=e391]: Copyright ©2026 LÀNG NƯỚNG NAM BỘ. All Rights Reserved. Thiết kế Web MIMA
    - generic [ref=e392]:
      - 'link "Call me: 0985 1707 67" [ref=e393] [cursor=pointer]':
        - /url: tel:0985170767
        - img [ref=e397]
        - generic [ref=e400]: "Call me: 0985 1707 67"
      - 'link "Zalo: 0985 1707 67" [ref=e401] [cursor=pointer]':
        - /url: https://zalo.me/0985170767
        - img [ref=e405]
        - generic [ref=e406]: "Zalo: 0985 1707 67"
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
          - strong: LẨU HẢI SẢN
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e407]:
      - generic [ref=e408]: "❌ Chi tiết lỗi cần khắc phục (1/15):"
      - generic [ref=e409]:
        - generic [ref=e410]:
          - generic [ref=e411]: 3. Heading (H1-H6)
          - generic [ref=e412]: 1 lỗi
        - generic [ref=e413]:
          - strong [ref=e415]: Heading phân cấp hợp lệ (2 lỗi)
          - generic [ref=e416]: "⚠️ Heading phân cấp sai: Nhảy cấp từ H1 → H3 (\"LẨU HẢI SẢN\"); Nhảy cấp từ H3 → H5 (\"Chi tiết sản phẩm\")"
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