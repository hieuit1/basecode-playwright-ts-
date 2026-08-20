# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: CƠM CÁ CHIÊN MẶN GÀ XÉ (/com-ca-chien-man-ga-xe)
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
          - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN Giỏ hàng 0" [ref=e34] [cursor=pointer]:
            - /url: gio-hang
            - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e35]
            - generic [ref=e36]:
              - generic [ref=e37]: Giỏ hàng
              - generic [ref=e38]: "0"
    - list [ref=e41]:
      - listitem [ref=e42]:
        - link "Trang chủ" [ref=e43] [cursor=pointer]:
          - /url: https://langnuongnambo.vn/
          - img [ref=e44]
          - generic [ref=e46]: Trang chủ
      - listitem [ref=e47]:
        - text: /
        - link "Đặt món" [ref=e48] [cursor=pointer]:
          - /url: https://langnuongnambo.vn/dat-mon
      - listitem [ref=e49]:
        - text: /
        - link "Món mới" [ref=e50] [cursor=pointer]:
          - /url: https://langnuongnambo.vn/mon-chinh
      - listitem [ref=e51]:
        - text: /
        - link "CƠM CÁ CHIÊN MẶN GÀ XÉ" [ref=e52] [cursor=pointer]:
          - /url: https://langnuongnambo.vn/com-ca-chien-man-ga-xe
    - generic [ref=e53]:
      - generic [ref=e56]:
        - generic [ref=e58]:
          - listbox [ref=e62]:
            - option "CƠM CÁ CHIÊN MẶN GÀ XÉ" [ref=e63]:
              - link "CƠM CÁ CHIÊN MẶN GÀ XÉ" [ref=e64] [cursor=pointer]:
                - /url: javascript:;
                - img "CƠM CÁ CHIÊN MẶN GÀ XÉ" [ref=e65]
          - listbox [ref=e68]:
            - option "CƠM CÁ CHIÊN MẶN GÀ XÉ" [ref=e69]:
              - link "CƠM CÁ CHIÊN MẶN GÀ XÉ" [ref=e70] [cursor=pointer]:
                - /url: thumbs/550x480x2/upload/product/z6167736113491139a57b5b4aa0fe4a812913843d158dd-17351949741770101275523-1151.jpg
                - img "CƠM CÁ CHIÊN MẶN GÀ XÉ" [ref=e71]
        - list [ref=e73]:
          - heading "CƠM CÁ CHIÊN MẶN GÀ XÉ" [level=3] [ref=e74]
          - listitem [ref=e75]:
            - paragraph [ref=e77]: Món cơm cá chiên mặn gà xé là một trong những món ăn giản dị nhưng đầy cuốn hút tại Làng Nướng Nam Bộ. Món ăn này không chỉ mang đến hương vị đậm đà, dân dã mà còn gợi lên nét mộc mạc, gần gũi của ẩm thực miền Nam.
          - listitem [ref=e78]:
            - generic [ref=e79]: "Giá sản phẩm:"
            - generic [ref=e80]: "Liên hệ: 0985 1707 67"
          - listitem [ref=e82]:
            - generic [ref=e83]: "Số lượng:"
            - generic [ref=e85]:
              - generic [ref=e86] [cursor=pointer]: "-"
              - spinbutton [ref=e87]: "1"
              - generic [ref=e88] [cursor=pointer]: +
          - listitem [ref=e89]:
            - generic [ref=e90]:
              - generic [ref=e92] [cursor=pointer]: Mua ngay
              - generic [ref=e93] [cursor=pointer]:
                - img [ref=e94]
                - generic [ref=e97]: Thêm vào giỏ
      - generic [ref=e102]:
        - heading "Chi tiết sản phẩm" [level=5] [ref=e105]
        - generic [ref=e107]:
          - generic [ref=e108]:
            - paragraph [ref=e109]:
              - generic [ref=e112]: Món Cơm Cá Chiên Mặn Gà Xé tại Làng Nướng Nam Bộ
            - paragraph [ref=e113]:
              - generic [ref=e116]: Món cơm cá chiên mặn gà xé là một trong những món ăn giản dị nhưng đầy cuốn hút tại Làng Nướng Nam Bộ. Món ăn này không chỉ mang đến hương vị đậm đà, dân dã mà còn gợi lên nét mộc mạc, gần gũi của ẩm thực miền Nam.
            - paragraph [ref=e117]:
              - generic [ref=e120]: Sự kết hợp hài hòa giữa cá và gà
            - paragraph [ref=e121]:
              - generic [ref=e123]: Món cơm được chế biến từ loại gạo dẻo thơm, nấu vừa chín tới để hạt cơm tơi mềm mà không bị khô. Cá chiên mặn là điểm nhấn, được làm từ loại cá tươi ngon, tẩm ướp gia vị vừa vặn, sau đó chiên giòn vàng ruộm. Phần cá không quá mặn, giữ được độ giòn bên ngoài và mềm ngọt bên trong.
            - paragraph [ref=e124]:
              - generic [ref=e126]: Gà xé trong món ăn là gà ta chắc thịt, được luộc chín mềm, sau đó xé sợi, trộn cùng hành phi thơm lừng và chút tiêu cay nhẹ. Sự hòa quyện giữa gà xé ngọt thịt và cá chiên đậm đà tạo nên một tổng thể hương vị đầy hấp dẫn.
            - paragraph [ref=e127]:
              - generic [ref=e130]: Phần ăn đậm đà, chuẩn vị Nam Bộ
            - paragraph [ref=e131]:
              - generic [ref=e133]: Món ăn được bài trí gọn gàng với cơm trắng, cá chiên và gà xé, kèm theo dưa leo, cà chua tươi và rau thơm. Một chén nước mắm chua ngọt, pha theo công thức đặc biệt của Làng Nướng Nam Bộ, được phục vụ kèm để tăng thêm phần đậm đà.
            - paragraph [ref=e134]:
              - generic [ref=e137]: Không chỉ ngon mà còn tiện lợi
            - paragraph [ref=e138]:
              - generic [ref=e140]: Cơm cá chiên mặn gà xé không chỉ ngon mà còn là món ăn đầy đủ dinh dưỡng, rất phù hợp cho những bữa ăn nhanh gọn, nhưng vẫn đảm bảo chất lượng. Đây là lựa chọn lý tưởng cho những thực khách yêu thích hương vị truyền thống, không cầu kỳ nhưng đủ sức làm hài lòng vị giác.
            - paragraph [ref=e141]:
              - generic [ref=e144]: Phong cách phục vụ
            - paragraph [ref=e145]:
              - generic [ref=e147]: Tại Làng Nướng Nam Bộ, món ăn được phục vụ trong không gian gần gũi, ấm cúng, mang lại cảm giác như đang thưởng thức bữa cơm nhà. Đội ngũ phục vụ chu đáo, nhiệt tình luôn sẵn sàng mang đến trải nghiệm ẩm thực tuyệt vời cho khách hàng.
            - paragraph [ref=e148]:
              - generic [ref=e150]: "Cơm cá chiên mặn gà xé là món ăn hội tụ đủ ba yếu tố: ngon miệng, bổ dưỡng và đậm chất Nam Bộ. Nếu bạn đang tìm kiếm một món ăn truyền thống với hương vị đặc trưng, đây chắc chắn là sự lựa chọn không thể bỏ qua!"
            - paragraph [ref=e151]:
              - generic [ref=e153]: Thông tin liên hệ
            - paragraph [ref=e154]:
              - strong [ref=e158]: LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN
            - paragraph [ref=e159]:
              - generic [ref=e162]:
                - strong [ref=e163]: "Địa chỉ:"
                - link "14A Dương Đức Hiền, Tây Thạnh, Tân Phú, Tp.HCM, Việt Nam" [ref=e164] [cursor=pointer]:
                  - /url: https://www.google.com/maps/place/?cid=5624610190095411286
            - paragraph [ref=e165]:
              - generic [ref=e168]:
                - strong [ref=e169]: "Holine:"
                - link "0985 1707 67" [ref=e170] [cursor=pointer]:
                  - /url: https://zalo.me/0985170767
            - paragraph [ref=e171]:
              - generic [ref=e174]:
                - strong [ref=e175]: "Email:"
                - text: nhahanglangnuongnambo@gmail.com
            - paragraph [ref=e176]:
              - generic [ref=e179]:
                - strong [ref=e180]: "Fanpage:"
                - link "Nhà Hàng Làng Nướng Nam Bộ" [ref=e181] [cursor=pointer]:
                  - /url: https://www.facebook.com/langnuongnambo.tp/
            - paragraph [ref=e182]:
              - generic [ref=e185]:
                - strong [ref=e186]: "Website:"
                - link "www.langnuongnambo.vn" [ref=e187] [cursor=pointer]:
                  - /url: https://langnuongnambo.vn/
            - generic [ref=e188]: Xem thêm
          - link "Xem thêm bài viết" [ref=e191] [cursor=pointer]:
            - /url: javascript:;
            - generic [ref=e192]:
              - text: Xem thêm bài viết
              - img [ref=e193]
      - generic [ref=e202]:
        - heading "Có thể bạn sẽ thích" [level=3] [ref=e204]
        - generic [ref=e207]:
          - generic [ref=e209]:
            - link "CÁ BÓP NẤU LẨU THÁI" [ref=e211] [cursor=pointer]:
              - /url: ca-bop-nau-lau-thai
              - img "CÁ BÓP NẤU LẨU THÁI" [ref=e212]
            - generic [ref=e213]:
              - heading "CÁ BÓP NẤU LẨU THÁI" [level=3] [ref=e214]:
                - link "CÁ BÓP NẤU LẨU THÁI" [ref=e215] [cursor=pointer]:
                  - /url: ca-bop-nau-lau-thai
              - paragraph [ref=e216]:
                - generic [ref=e217]: "Giá: Liên hệ"
          - generic [ref=e219]:
            - link "BÒ SỐT RƯỢU VANG" [ref=e221] [cursor=pointer]:
              - /url: bo-sot-ruou-vang
              - img "BÒ SỐT RƯỢU VANG" [ref=e222]
            - generic [ref=e223]:
              - heading "BÒ SỐT RƯỢU VANG" [level=3] [ref=e224]:
                - link "BÒ SỐT RƯỢU VANG" [ref=e225] [cursor=pointer]:
                  - /url: bo-sot-ruou-vang
              - paragraph [ref=e226]:
                - generic [ref=e227]: "Giá: Liên hệ"
          - generic [ref=e229]:
            - link "MÌ XÁ XÍU DẦU HÀO" [ref=e231] [cursor=pointer]:
              - /url: mi-xa-xiu-dau-hao
              - img "MÌ XÁ XÍU DẦU HÀO" [ref=e232]
            - generic [ref=e233]:
              - heading "MÌ XÁ XÍU DẦU HÀO" [level=3] [ref=e234]:
                - link "MÌ XÁ XÍU DẦU HÀO" [ref=e235] [cursor=pointer]:
                  - /url: mi-xa-xiu-dau-hao
              - paragraph [ref=e236]:
                - generic [ref=e237]: "Giá: Liên hệ"
          - generic [ref=e239]:
            - link "LẨU CÁ TẦM MĂNG CHUA" [ref=e241] [cursor=pointer]:
              - /url: lau-ca-tam-mang-chua
              - img "LẨU CÁ TẦM MĂNG CHUA" [ref=e242]
            - generic [ref=e243]:
              - heading "LẨU CÁ TẦM MĂNG CHUA" [level=3] [ref=e244]:
                - link "LẨU CÁ TẦM MĂNG CHUA" [ref=e245] [cursor=pointer]:
                  - /url: lau-ca-tam-mang-chua
              - paragraph [ref=e246]:
                - generic [ref=e247]: "Giá: Liên hệ"
          - generic [ref=e249]:
            - link "MIẾN XÀO CUA" [ref=e251] [cursor=pointer]:
              - /url: mien-xao-cua
              - img "MIẾN XÀO CUA" [ref=e252]
            - generic [ref=e253]:
              - heading "MIẾN XÀO CUA" [level=3] [ref=e254]:
                - link "MIẾN XÀO CUA" [ref=e255] [cursor=pointer]:
                  - /url: mien-xao-cua
              - paragraph [ref=e256]:
                - generic [ref=e257]: "Giá: Liên hệ"
          - generic [ref=e259]:
            - link "UDON XÀO HẢI SẢN" [ref=e261] [cursor=pointer]:
              - /url: udon-xao-hai-san
              - img "UDON XÀO HẢI SẢN" [ref=e262]
            - generic [ref=e263]:
              - heading "UDON XÀO HẢI SẢN" [level=3] [ref=e264]:
                - link "UDON XÀO HẢI SẢN" [ref=e265] [cursor=pointer]:
                  - /url: udon-xao-hai-san
              - paragraph [ref=e266]:
                - generic [ref=e267]: "Giá: Liên hệ"
          - generic [ref=e269]:
            - link "LẨU HẢI SẢN" [ref=e271] [cursor=pointer]:
              - /url: lau-hai-san
            - generic [ref=e272]:
              - heading "LẨU HẢI SẢN" [level=3] [ref=e273]:
                - link "LẨU HẢI SẢN" [ref=e274] [cursor=pointer]:
                  - /url: lau-hai-san
              - paragraph [ref=e275]:
                - generic [ref=e276]: "Giá: Liên hệ"
          - generic [ref=e278]:
            - link "GÀ TIỀM ỚT HIỂM" [ref=e280] [cursor=pointer]:
              - /url: ga-tiem-ot-hiem
            - generic [ref=e281]:
              - heading "GÀ TIỀM ỚT HIỂM" [level=3] [ref=e282]:
                - link "GÀ TIỀM ỚT HIỂM" [ref=e283] [cursor=pointer]:
                  - /url: ga-tiem-ot-hiem
              - paragraph [ref=e284]:
                - generic [ref=e285]: "Giá: Liên hệ"
        - generic:
          - button [ref=e286] [cursor=pointer]:
            - img [ref=e287]
          - button [ref=e290] [cursor=pointer]:
            - img [ref=e291]
    - generic [ref=e294]:
      - generic [ref=e297]:
        - generic [ref=e298]:
          - generic [ref=e299]:
            - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e300] [cursor=pointer]:
              - /url: https://langnuongnambo.vn/
              - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e301]
            - paragraph [ref=e302]: LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN
          - paragraph [ref=e303]:
            - strong [ref=e304]: LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN
          - paragraph [ref=e305]:
            - generic [ref=e306]:
              - strong [ref=e307]: "Địa chỉ:"
              - link "14A Dương Đức Hiền, Tây Thạnh, Tân Phú, Tp.HCM, Việt Nam" [ref=e308] [cursor=pointer]:
                - /url: https://www.google.com/maps/place/?cid=5624610190095411286
          - paragraph [ref=e309]
          - paragraph [ref=e310]:
            - generic [ref=e311]:
              - strong [ref=e312]: "Holine:"
              - link "0985 1707 67" [ref=e313] [cursor=pointer]:
                - /url: https://zalo.me/0985170767
          - paragraph [ref=e314]
          - paragraph [ref=e315]:
            - generic [ref=e316]:
              - strong [ref=e317]: "Email:"
              - text: nhahanglangnuongnambo@gmail.com
          - paragraph [ref=e318]
          - paragraph [ref=e319]:
            - generic [ref=e320]:
              - strong [ref=e321]: "Fanpage:"
              - link "Nhà Hàng Làng Nướng Nam Bộ" [ref=e322] [cursor=pointer]:
                - /url: https://www.facebook.com/langnuongnambo.tp/
          - paragraph [ref=e323]
          - paragraph [ref=e324]:
            - generic [ref=e325]:
              - strong [ref=e326]: "Website:"
              - link "langnuongnambo.vn" [ref=e327] [cursor=pointer]:
                - /url: https://langnuongnambo.vn/
          - generic [ref=e328]:
            - paragraph [ref=e329]: Theo dõi chúng tôi tại
            - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e330] [cursor=pointer]:
              - /url: ""
              - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e331]
            - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e332] [cursor=pointer]:
              - /url: ""
              - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e333]
            - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e334] [cursor=pointer]:
              - /url: ""
              - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e335]
            - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e336] [cursor=pointer]:
              - /url: ""
              - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e337]
            - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e338] [cursor=pointer]:
              - /url: ""
              - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e339]
        - generic [ref=e341]:
          - generic [ref=e342]:
            - paragraph [ref=e343]: Về chúng tôi
            - list [ref=e344]:
              - listitem [ref=e345]:
                - link "Trang chủ" [ref=e346] [cursor=pointer]:
                  - /url: https://langnuongnambo.vn/
              - listitem [ref=e347]:
                - link "Giới thiệu" [ref=e348] [cursor=pointer]:
                  - /url: gioi-thieu
              - listitem [ref=e349]:
                - link "Thực đơn" [ref=e350] [cursor=pointer]:
                  - /url: thuc-don
              - listitem [ref=e351]:
                - link "Dịch vụ" [ref=e352] [cursor=pointer]:
                  - /url: dich-vu
              - listitem [ref=e353]:
                - link "Đặt món" [ref=e354] [cursor=pointer]:
                  - /url: dat-mon
              - listitem [ref=e355]:
                - link "Phòng vip/sảnh" [ref=e356] [cursor=pointer]:
                  - /url: phong-vip-sanh
              - listitem [ref=e357]:
                - link "Tuyển dụng" [ref=e358] [cursor=pointer]:
                  - /url: tuyen-dung
              - listitem [ref=e359]:
                - link "Tin tức" [ref=e360] [cursor=pointer]:
                  - /url: tin-tuc
              - listitem [ref=e361]:
                - link "Liên hệ" [ref=e362] [cursor=pointer]:
                  - /url: lien-he
          - generic [ref=e363]:
            - paragraph [ref=e364]: Dịch vụ
            - list [ref=e365]:
              - listitem [ref=e366]:
                - link "Tổ chức liên hoan" [ref=e367] [cursor=pointer]:
                  - /url: to-chuc-lien-hoan
              - listitem [ref=e368]:
                - link "Tổ chức họp mặt" [ref=e369] [cursor=pointer]:
                  - /url: to-chuc-hop-mat
              - listitem [ref=e370]:
                - link "Tổ chức thôi nôi" [ref=e371] [cursor=pointer]:
                  - /url: to-chuc-thoi-noi
              - listitem [ref=e372]:
                - link "Tổ chức tân niên" [ref=e373] [cursor=pointer]:
                  - /url: to-chuc-tan-nien
              - listitem [ref=e374]:
                - link "Tổ chức tất niên" [ref=e375] [cursor=pointer]:
                  - /url: to-chuc-tat-nien
          - generic [ref=e376]:
            - paragraph [ref=e377]: Thực đơn
            - list [ref=e378]:
              - listitem [ref=e379]:
                - link "MENU TIỆC LẺ ( 3-4 người)" [ref=e380] [cursor=pointer]:
                  - /url: menu-tiec-le-3-4-nguoi
              - listitem [ref=e381]:
                - link "SET MENU CÁC MÓN ( 10 người )" [ref=e382] [cursor=pointer]:
                  - /url: set-menu-cac-mon-10-nguoi
              - listitem [ref=e383]:
                - link "SET MENU ĐẶT TIỆC ( 10 người)" [ref=e384] [cursor=pointer]:
                  - /url: set-menu-dat-tiec-10-nguoi
      - generic [ref=e388]: Copyright ©2026 LÀNG NƯỚNG NAM BỘ. All Rights Reserved. Thiết kế Web MIMA
    - generic [ref=e389]:
      - 'link "Call me: 0985 1707 67" [ref=e390] [cursor=pointer]':
        - /url: tel:0985170767
        - img [ref=e394]
        - generic [ref=e397]: "Call me: 0985 1707 67"
      - 'link "Zalo: 0985 1707 67" [ref=e398] [cursor=pointer]':
        - /url: https://zalo.me/0985170767
        - img [ref=e402]
        - generic [ref=e403]: "Zalo: 0985 1707 67"
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
          - strong: CƠM CÁ CHIÊN MẶN GÀ XÉ
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e404]:
      - generic [ref=e405]: "❌ Chi tiết lỗi cần khắc phục (1/15):"
      - generic [ref=e406]:
        - generic [ref=e407]:
          - generic [ref=e408]: 3. Heading (H1-H6)
          - generic [ref=e409]: 1 lỗi
        - generic [ref=e410]:
          - strong [ref=e412]: Heading phân cấp hợp lệ (3 lỗi)
          - generic [ref=e413]: "⚠️ Heading phân cấp sai: Nhảy cấp từ H1 → H3 (\"CƠM CÁ CHIÊN MẶN GÀ XÉ\"); Nhảy cấp từ H3 → H5 (\"Chi tiết sản phẩm\"); Nhảy cấp từ H3 → H6 (\"Giỏ hàng của bạn\")"
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