# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: CHÍNH SÁCH BẢO MẬT THÔNG TIN (/chinh-sach-bao-mat-thong-tin-khach-hang)
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
        - link "CHÍNH SÁCH BẢO MẬT THÔNG TIN" [ref=e80] [cursor=pointer]:
          - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/chinh-sach-bao-mat-thong-tin-khach-hang
    - generic [ref=e83]:
      - generic [ref=e84]:
        - generic [ref=e86]: CHÍNH SÁCH BẢO MẬT THÔNG TIN
        - generic [ref=e87]:
          - img [ref=e88]
          - generic [ref=e91]: 83 Lượt xem
        - generic [ref=e94]:
          - paragraph [ref=e95]:
            - generic [ref=e96]:
              - text: Chính sách bảo mật
              - strong [ref=e97]: "a. Mục đích và phạm vi thu thập:"
          - paragraph [ref=e98]:
            - generic [ref=e99]:
              - text: "- Việc thu thập dữ liệu chủ yếu trên website www.thegioixedapviet.com bao gồm: Họ Tên, Email, Điện thoại, Địa chỉ khách hàng. Đây là các thông tin mà trang web www.thegioixedapviet.com cần khách hàng cung cấp bắt buộc khi đặt hàng tại website hoặc gửi thông tin nhờ tư vấn và để trang web www.thegioixedapviet.com liên hệ xác nhận lại với khách hàng trên website nhằm đảm bảo quyền lợi cho khách hàng."
              - text: "- Khách hàng sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt động sử dụng dịch vụ dưới thông tin mà mình cung cấp và hộp thư điện tử của mình. Ngoài ra, khách hàng có trách nhiệm thông báo kịp thời cho webiste www.thegioixedapviet.com về những hành vi sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của bên thứ ba để có biện pháp giải quyết phù hợp."
          - paragraph [ref=e100]:
            - strong [ref=e102]: "b. Phạm vi sử dụng thông tin:"
          - paragraph [ref=e103]: "- Công ty sử dụng thông tin cá nhân của khách hàng cung cấp để;"
          - paragraph [ref=e104]: "- Xác nhận thông tin sản phẩm đã mua trên website và địa chỉ giao hàng"
          - paragraph [ref=e105]:
            - generic [ref=e106]:
              - text: "- Cung cấp thông tin về sản phẩm đến khách hàng nếu có yêu cầu từ khách hàng;"
              - text: "- Giải đáp, phản hồi thắc mắc của khách hàng;"
              - text: "- Công ty không sử dụng thông tin cá nhân của khách hàng ngoài mục đích trên ;"
              - text: "- Trong trường hợp có yêu cầu của cơ quan tư pháp bao gồm: Viện kiểm sát, tòa án, cơ quan công an điều tra liên quan đến hành vi vi phạm pháp luật nào đó của khách hàng."
          - paragraph [ref=e107]:
            - strong [ref=e109]: "c. Thời gian lưu trữ thông tin:"
          - paragraph [ref=e110]: Dữ liệu cá nhân của khách hàng sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ. Còn lại trong mọi trường hợp thông tin cá nhân thành viên sẽ được bảo mật trên máy chủ của www.thegioixedapviet.com.
          - paragraph [ref=e111]:
            - strong [ref=e113]: "d. Địa chỉ của đơn vị thu thập và quản lý thông tin cá nhân:"
          - paragraph [ref=e114]
          - paragraph [ref=e115]:
            - strong [ref=e117]: CÔNG TY TNHH TM & DV GIẢI TRÍ TÂN TRƯỜNG GIANG
          - paragraph [ref=e118]:
            - generic [ref=e119]:
              - strong [ref=e120]: "Địa chỉ:"
              - text: 345 Nguyễn An Ninh, Phường Tam Thắng, Thành phố Hồ Chí Minh, Việt Nam
          - paragraph [ref=e121]:
            - generic [ref=e122]:
              - strong [ref=e123]: "Email:"
              - text: thegioixedapceo@gmail.com
          - paragraph [ref=e124]:
            - generic [ref=e125]:
              - strong [ref=e126]: "Hotline:"
              - text: 0988 453 333
          - paragraph [ref=e127]:
            - generic [ref=e128]:
              - strong [ref=e129]: "Website:"
              - text: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w
          - paragraph [ref=e130]:
            - generic [ref=e131]:
              - strong [ref=e132]: "Giấy Phép Kinh Doanh số:"
              - text: "3502329410"
          - paragraph [ref=e133]:
            - generic [ref=e134]:
              - strong [ref=e135]: "Ngày cấp:"
              - text: 08/03/2017
          - paragraph [ref=e136]:
            - generic [ref=e137]:
              - strong [ref=e138]: "Nơi cấp:"
              - text: Thuế cơ sở 24 TP Hồ Chí Minh
          - paragraph [ref=e139]:
            - strong [ref=e141]: "e. Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu cá nhân của mình:"
          - paragraph [ref=e142]:
            - generic [ref=e143]:
              - text: Khách hàng có quyền tự kiểm tra, cập nhật, điều chỉnh hoặc hủy bỏ thông tin cá nhân của mình bằng cách liên hệ yêu cầu với ban quản trị website www.thegioixedapviet.com thực hiện việc này.
              - text: Khách hàng có quyền gửi phản hồi về việc lộ thông tin cá nhân cho bên thứ ba đến
              - strong [ref=e144]: CÔNG TY TNHH TM & DV GIẢI TRÍ TÂN TRƯỜNG GIANG
              - text: . Khi tiếp nhận những phản hồi này, Công ty sẽ xác nhận lại thông tin, trường hợp đúng như phản ánh của khách hàng tùy theo mức độ, Công ty sẽ có những biện pháp xử lý kịp thời.
          - paragraph [ref=e145]:
            - strong [ref=e147]: "f. Cam kết bảo mật thông tin cá nhân khách hàng:"
          - paragraph [ref=e148]:
            - generic [ref=e149]:
              - text: Thông tin cá nhân của khách hàng trên website www.thegioixedapviet.com được
              - strong [ref=e150]: CÔNG TY TNHH TM & DV GIẢI TRÍ TÂN TRƯỜNG GIANG
              - text: cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân của công ty.
          - paragraph [ref=e151]:
            - generic [ref=e152]:
              - text: "- Việc thu thập và sử dụng thông tin của mỗi khách hàng chỉ được thực hiện khi có sự đồng ý của khách hàng đó trừ những trường hợp pháp luật có quy định khác."
              - text: "- Không sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên thứ 3 nào về thông tin cá nhân của khách hàng khi không có sự cho phép đồng ý từ khách hàng."
              - text: "- Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát dữ liệu cá nhân của khách hàng,"
              - strong [ref=e153]: CÔNG TY TNHH TM & DV GIẢI TRÍ TÂN TRƯỜNG GIANG
              - text: sẽ có trách nhiệm thông báo vụ việc cho cơ quan chức năng điều tra xử lý kịp thời và thông báo cho khách hàng được biết.
      - generic [ref=e155]:
        - heading "Tin liên quan" [level=3] [ref=e157]
        - link "Thế giới xe đạp Việt" [ref=e160] [cursor=pointer]:
          - /url: phuong-thuc-thanh-toan
          - img "Thế giới xe đạp Việt" [ref=e162]
          - generic [ref=e163]:
            - heading "PHƯƠNG THỨC THANH TOÁN" [level=3] [ref=e164]
            - paragraph
        - link "Thế giới xe đạp Việt" [ref=e166] [cursor=pointer]:
          - /url: chinh-sach-bao-hanh
          - img "Thế giới xe đạp Việt" [ref=e168]
          - heading "CHÍNH SÁCH BẢO HÀNH SẢN PHẨM" [level=3] [ref=e170]
        - link "Thế giới xe đạp Việt" [ref=e172] [cursor=pointer]:
          - /url: chinh-sach-doi-tra
          - img "Thế giới xe đạp Việt" [ref=e174]
          - heading "CHÍNH SÁCH GIAO HÀNG VÀ VẬN CHUYỂN" [level=3] [ref=e176]
        - link "Thế giới xe đạp Việt" [ref=e178] [cursor=pointer]:
          - /url: chinh-sach-doi-tra-va-hoan-tien
          - img "Thế giới xe đạp Việt" [ref=e180]
          - heading "CHÍNH SÁCH ĐỔI TRẢ VÀ HOÀN TIỀN" [level=3] [ref=e182]
    - generic [ref=e184]:
      - heading "HỆ THỐNG CỬA HÀNG" [level=2] [ref=e186]
      - generic [ref=e187]:
        - iframe [ref=e191]:
          
        - generic [ref=e193]:
          - article [ref=e194] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 345 NGUYỄN AN NINH CHI NHÁNH 02 - VŨNG TÀU" [ref=e195]:
              - img "THẾ GIỚI XE ĐẠP 345 NGUYỄN AN NINH CHI NHÁNH 02 - VŨNG TÀU" [ref=e196]
            - generic [ref=e197]:
              - heading "THẾ GIỚI XE ĐẠP 345 NGUYỄN AN NINH CHI NHÁNH 02 - VŨNG TÀU" [level=3] [ref=e198]
              - generic [ref=e199]:
                - paragraph [ref=e200]:
                  - strong [ref=e201]: "Địa chỉ:"
                  - text: 345 Nguyễn An Ninh, Phường Tam Thắng, Thành phố Hồ Chí Minh(Gần Coopmart)
                - paragraph [ref=e202]:
                  - strong [ref=e203]: "Điện thoại:"
                  - text: 0886.172.172
                - paragraph [ref=e204]:
                  - strong [ref=e205]: "FB:"
                  - link "Thế giới xe đạp Vũng Tàu" [ref=e206]:
                    - /url: https://www.facebook.com/hethongbanlexedapuytinnhatvungtau
                - paragraph [ref=e207]
              - link "Chỉ đường" [ref=e208]:
                - /url: https://maps.app.goo.gl/RZagH1T316P3r4Ri9
                - text: Chỉ đường
          - article [ref=e210] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 323 NGUYỄN AN NINH CHI NHÁNH 07 - VŨNG TÀU" [ref=e211]:
              - img "THẾ GIỚI XE ĐẠP 323 NGUYỄN AN NINH CHI NHÁNH 07 - VŨNG TÀU" [ref=e212]
            - generic [ref=e213]:
              - heading "THẾ GIỚI XE ĐẠP 323 NGUYỄN AN NINH CHI NHÁNH 07 - VŨNG TÀU" [level=3] [ref=e214]
              - generic [ref=e215]:
                - paragraph [ref=e216]:
                  - strong [ref=e217]: "Địa chỉ:"
                  - text: 323/7A, 323 Nguyễn An Ninh, Tam Thắng, Hồ Chí Minh
                - paragraph [ref=e218]:
                  - strong [ref=e219]: "Điện thoại:"
                  - text: 0359.52.72.72
                - paragraph [ref=e220]:
                  - strong [ref=e221]: "FB:"
                  - link "Trung tâm xe điện thông minh" [ref=e222]:
                    - /url: https://www.facebook.com/xedienthongminh323
              - link "Chỉ đường" [ref=e223]:
                - /url: https://maps.app.goo.gl/Rqg7Pg3BfQJWzsib7
                - text: Chỉ đường
          - article [ref=e225] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 763A BÌNH GIÃ CHI NHÁNH 09 - VŨNG TÀU" [ref=e226]:
              - img "THẾ GIỚI XE ĐẠP 763A BÌNH GIÃ CHI NHÁNH 09 - VŨNG TÀU" [ref=e227]
            - generic [ref=e228]:
              - heading "THẾ GIỚI XE ĐẠP 763A BÌNH GIÃ CHI NHÁNH 09 - VŨNG TÀU" [level=3] [ref=e229]
              - generic [ref=e230]:
                - paragraph [ref=e231]:
                  - strong [ref=e232]: "Địa chỉ:"
                  - text: 763 Bình Giã, Phường Rạch Dừa, Thành phố Hồ Chí Minh(Gần chợ Lưu Chí Hiếu)
                - paragraph [ref=e233]:
                  - strong [ref=e234]: "Điện thoại:"
                  - text: 0797.172.172
                - paragraph [ref=e235]:
                  - strong [ref=e236]: "FB:"
                  - link "Thế giới xe đạp Yadea" [ref=e237]:
                    - /url: https://www.facebook.com/profile.php?id=100093542268533
              - link "Chỉ đường" [ref=e238]:
                - /url: https://maps.app.goo.gl/HwHwTDP3VJtoDcLr5
                - text: Chỉ đường
          - article [ref=e240] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 679 30/4 CHI NHÁNH 01 - VŨNG TÀU" [ref=e241]:
              - img "THẾ GIỚI XE ĐẠP 679 30/4 CHI NHÁNH 01 - VŨNG TÀU" [ref=e242]
            - generic [ref=e243]:
              - heading "THẾ GIỚI XE ĐẠP 679 30/4 CHI NHÁNH 01 - VŨNG TÀU" [level=3] [ref=e244]
              - generic [ref=e245]:
                - paragraph [ref=e246]:
                  - strong [ref=e247]: "Địa chỉ:"
                  - text: 679 Đường 30/4, Phường Rạch Dừa, Thành phố Hồ Chí Minh(Gần nhà hàng tiệc cưới Hải Phương)
                - paragraph [ref=e248]:
                  - strong [ref=e249]: "Điện thoại:"
                  - text: 0866.650.650
                - paragraph [ref=e250]:
                  - strong [ref=e251]: "FB:"
                  - link "Thế giới xe đạp 679" [ref=e252]:
                    - /url: https://www.facebook.com/Th%E1%BA%BF-gi%E1%BB%9Bi-xe-%C4%91%E1%BA%A1p-679-102705888542682
              - link "Chỉ đường" [ref=e253]:
                - /url: https://maps.app.goo.gl/mANCNhqQ5iL8d5pC8
                - text: Chỉ đường
          - article [ref=e255] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 577 CMT8 CHI NHÁNH 5 - BÀ RỊA" [ref=e256]:
              - img "THẾ GIỚI XE ĐẠP 577 CMT8 CHI NHÁNH 5 - BÀ RỊA" [ref=e257]
            - generic [ref=e258]:
              - heading "THẾ GIỚI XE ĐẠP 577 CMT8 CHI NHÁNH 5 - BÀ RỊA" [level=3] [ref=e259]
              - generic [ref=e260]:
                - paragraph [ref=e261]:
                  - strong [ref=e262]: "Địa chỉ:"
                  - text: 557 Cách Mạng Tháng Tám, Phường Bà Rịa, Thành phố Hồ Chí Minh
                - paragraph [ref=e263]: "Hotline/Zalo: 0877.272.272"
                - paragraph [ref=e264]:
                  - strong [ref=e265]: "FB:"
                  - link "Xe điện Pega Bà Rịa" [ref=e266]:
                    - /url: https://www.facebook.com/thegioixedapbaria
              - link "Chỉ đường" [ref=e267]:
                - /url: https://maps.app.goo.gl/afG5G5LoHUNGeYYQA
                - text: Chỉ đường
          - article [ref=e269] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP TÂN HÒA PHÚ MỸ CHI NHÁNH 06 - BÀ RỊA" [ref=e270]:
              - img "THẾ GIỚI XE ĐẠP TÂN HÒA PHÚ MỸ CHI NHÁNH 06 - BÀ RỊA" [ref=e271]
            - generic [ref=e272]:
              - heading "THẾ GIỚI XE ĐẠP TÂN HÒA PHÚ MỸ CHI NHÁNH 06 - BÀ RỊA" [level=3] [ref=e273]
              - generic [ref=e274]:
                - paragraph [ref=e275]:
                  - strong [ref=e276]: "Địa chỉ:"
                  - text: 252 Quốc lộ 51 ( Ngã 3 Hội Bài) Tân Hòa, Phường Tân Hòa, Thành phố Hồ Chí Minh
                - paragraph [ref=e277]:
                  - strong [ref=e278]: "Điện thoại:"
                  - text: 0868.272.272
                - paragraph [ref=e279]:
                  - strong [ref=e280]: "FB:"
                  - link "Thế giới xe đạp Phú Mỹ" [ref=e281]:
                    - /url: https://www.facebook.com/thegioixedapphumy
              - link "Chỉ đường" [ref=e282]:
                - /url: https://maps.app.goo.gl/XSDAfwsyt8yX6VwF8
                - text: Chỉ đường
          - article [ref=e284] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP MỸ XUÂN 1 CHI NHÁNH 03 - BÀ RỊA" [ref=e285]:
              - img "THẾ GIỚI XE ĐẠP MỸ XUÂN 1 CHI NHÁNH 03 - BÀ RỊA" [ref=e286]
            - generic [ref=e287]:
              - heading "THẾ GIỚI XE ĐẠP MỸ XUÂN 1 CHI NHÁNH 03 - BÀ RỊA" [level=3] [ref=e288]
              - generic [ref=e289]:
                - paragraph [ref=e290]:
                  - strong [ref=e291]: "Địa chỉ:"
                  - text: Quốc lộ 51, KP Thị Vải, Phường Phú Mỹ, Thành phố Hồ Chí Minh(Gần ngã ba Mỹ Xuân)
                - paragraph [ref=e292]:
                  - strong [ref=e293]: "Điện thoại:"
                  - text: 0836.72.79.79
                - paragraph [ref=e294]:
                  - strong [ref=e295]: "FB:"
                  - link "Thế giới xe đạp đúng giá - đúng chất lượng" [ref=e296]:
                    - /url: https://www.facebook.com/Th%E1%BA%BF-Gi%E1%BB%9Bi-Xe-%C4%90%E1%BA%A1p-%C4%91%C3%BAng-gi%C3%A1-%C4%91%C3%BAng-ch%E1%BA%A5t-l%C6%B0%E1%BB%A3ng-344114132875576
              - link "Chỉ đường" [ref=e297]:
                - /url: https://maps.app.goo.gl/M9L7pGwwX1j6MvUy7
                - text: Chỉ đường
          - article [ref=e299] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP VIỆT KIỀU MỸ XUÂN 2 CHI NHÁNH 08 - BÀ RỊA" [ref=e300]:
              - img "THẾ GIỚI XE ĐẠP VIỆT KIỀU MỸ XUÂN 2 CHI NHÁNH 08 - BÀ RỊA" [ref=e301]
            - generic [ref=e302]:
              - heading "THẾ GIỚI XE ĐẠP VIỆT KIỀU MỸ XUÂN 2 CHI NHÁNH 08 - BÀ RỊA" [level=3] [ref=e303]
              - generic [ref=e304]:
                - paragraph [ref=e305]:
                  - strong [ref=e306]: "Địa chỉ:"
                  - text: QL51( đầu chợ Việt Kiều) khu phố Mỹ Thạnh, Phường Phú Mỹ, Thành phố Hồ Chí Minh
                - paragraph [ref=e307]:
                  - strong [ref=e308]: "Hotline:"
                  - text: 0856.772.772
                - paragraph [ref=e309]:
                  - strong [ref=e310]: "FB:"
                  - link "Thế giới xe đạp Việt Kiều" [ref=e311]:
                    - /url: https://www.facebook.com/profile.php?id=100082745725802
              - link "Chỉ đường" [ref=e312]:
                - /url: https://maps.app.goo.gl/H5s9NK3PHh3huhP8A
                - text: Chỉ đường
          - article [ref=e314] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 198 HÙNG VƯƠNG CHI NHÁNH 04 - NHƠN TRẠCH ĐỒNG NAI" [ref=e315]:
              - img "THẾ GIỚI XE ĐẠP 198 HÙNG VƯƠNG CHI NHÁNH 04 - NHƠN TRẠCH ĐỒNG NAI" [ref=e316]
            - generic [ref=e317]:
              - heading "THẾ GIỚI XE ĐẠP 198 HÙNG VƯƠNG CHI NHÁNH 04 - NHƠN TRẠCH ĐỒNG NAI" [level=3] [ref=e318]
              - generic [ref=e319]:
                - paragraph [ref=e320]:
                  - strong [ref=e321]: "Địa chỉ:"
                  - text: 198 Đ. Hùng Vương, Phường Nhơn Trạch, TP Đồng Nai
                - paragraph [ref=e322]:
                  - strong [ref=e323]: "Điện thoại:"
                  - text: 0855.387.345
                - paragraph [ref=e324]:
                  - strong [ref=e325]: "FB:"
                  - link "Thế giới xe đạp Nhơn Trạch" [ref=e326]:
                    - /url: https://www.facebook.com/Th%E1%BA%BF-gi%E1%BB%9Bi-xe-%C4%91%E1%BA%A1p-Nh%C6%A1n-Tr%E1%BA%A1ch-103768937916334
              - link "Chỉ đường" [ref=e327]:
                - /url: https://maps.app.goo.gl/nTJy6foVA54ykiZB7
                - text: Chỉ đường
          - article [ref=e329] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 19 ĐỒNG KHỞI CHI NHÁNH 10 - ĐỒNG NAI" [ref=e330]:
              - img "THẾ GIỚI XE ĐẠP 19 ĐỒNG KHỞI CHI NHÁNH 10 - ĐỒNG NAI" [ref=e331]
            - generic [ref=e332]:
              - heading "THẾ GIỚI XE ĐẠP 19 ĐỒNG KHỞI CHI NHÁNH 10 - ĐỒNG NAI" [level=3] [ref=e333]
              - generic [ref=e334]:
                - paragraph [ref=e335]:
                  - strong [ref=e336]: "Địa chỉ:"
                  - text: 19 Đ. Đồng Khởi, Phường Tam Hiệp, TP Đồng Nai
                - paragraph [ref=e337]:
                  - strong [ref=e338]: "Điện thoại:"
                  - text: 0385.21.21.68
                - paragraph [ref=e339]:
                  - strong [ref=e340]: "FB:"
                  - link "Thế Giới Xe Đạp 19 Đồng Khởi" [ref=e341]:
                    - /url: https://www.facebook.com/profile.php?id=61562540870293
              - link "Chỉ đường" [ref=e342]:
                - /url: https://maps.app.goo.gl/cbjJXzqqnsvBbLha6
                - text: Chỉ đường
          - article [ref=e344] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 32 ĐỒNG KHỞI CHI NHÁNH 11 - ĐỒNG NAI" [ref=e345]:
              - img "THẾ GIỚI XE ĐẠP 32 ĐỒNG KHỞI CHI NHÁNH 11 - ĐỒNG NAI" [ref=e346]
            - generic [ref=e347]:
              - heading "THẾ GIỚI XE ĐẠP 32 ĐỒNG KHỞI CHI NHÁNH 11 - ĐỒNG NAI" [level=3] [ref=e348]
              - generic [ref=e349]:
                - paragraph [ref=e350]:
                  - strong [ref=e351]: "Địa chỉ:"
                  - text: 32-34 Đồng Khởi, phường Tam Hiệp, TP Đồng Nai (đi qua bệnh viện Đồng Nai về hướng Amata khoảng 200m)
                - paragraph [ref=e352]:
                  - strong [ref=e353]: "Điện thoại:"
                  - text: 0372.59.59.89
                - paragraph [ref=e354]:
                  - strong [ref=e355]: "FB:"
                  - link "Thế giới xe đạp Đồng Khởi -Biên Hoà" [ref=e356]:
                    - /url: https://www.facebook.com/profile.php?id=61575874576218
              - link "Chỉ đường" [ref=e357]:
                - /url: https://maps.app.goo.gl/bV9nDyQCXvxkSkXe9
                - text: Chỉ đường
          - article [ref=e359] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 262 30/4 CHI NHÁNH 13 - THỦ DẦU MỘT BÌNH DƯƠNG" [ref=e360]:
              - img "THẾ GIỚI XE ĐẠP 262 30/4 CHI NHÁNH 13 - THỦ DẦU MỘT BÌNH DƯƠNG" [ref=e361]
            - generic [ref=e362]:
              - heading "THẾ GIỚI XE ĐẠP 262 30/4 CHI NHÁNH 13 - THỦ DẦU MỘT BÌNH DƯƠNG" [level=3] [ref=e363]
              - generic [ref=e364]:
                - paragraph [ref=e365]:
                  - strong [ref=e366]: "Địa chỉ:"
                  - text: 262, Đ.30/4, P. Chánh Nghĩa, Phường Thủ Dầu Một, Thành phố Hồ Chí Minh
                - paragraph [ref=e367]:
                  - strong [ref=e368]: "Điện thoại:"
                  - text: 0862.725.472
                - paragraph [ref=e369]:
                  - strong [ref=e370]: "FB:"
                  - link "Thế giới xe đạp Thủ Một Dầu Bình Dương" [ref=e371]:
                    - /url: https://www.facebook.com/profile.php?id=61576103733740
              - link "Chỉ đường" [ref=e372]:
                - /url: https://maps.app.goo.gl/jdqQjYYni1XyVh2VA
                - text: Chỉ đường
          - article [ref=e374] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 24 NGUYỄN AN NINH CHI NHÁNH 14 - DĨ AN BÌNH DƯƠNG" [ref=e375]:
              - img "THẾ GIỚI XE ĐẠP 24 NGUYỄN AN NINH CHI NHÁNH 14 - DĨ AN BÌNH DƯƠNG" [ref=e376]
            - generic [ref=e377]:
              - heading "THẾ GIỚI XE ĐẠP 24 NGUYỄN AN NINH CHI NHÁNH 14 - DĨ AN BÌNH DƯƠNG" [level=3] [ref=e378]
              - generic [ref=e379]:
                - paragraph [ref=e380]:
                  - strong [ref=e381]: "Địa chỉ:"
                  - text: 24 Nguyễn An Ninh, Phường Dĩ An, Thành phố Hồ Chí Minh
                - paragraph [ref=e382]:
                  - strong [ref=e383]: "Điện thoại:"
                  - text: 0862.726.472
                - paragraph [ref=e384]:
                  - strong [ref=e385]: "Facebook:"
                  - strong [ref=e386]
                  - link "Thế Giới Xe Đạp Dĩ An - Bình Dương" [ref=e387]:
                    - /url: https://www.facebook.com/profile.php?id=61576318119691
              - link "Chỉ đường" [ref=e388]:
                - /url: https://maps.app.goo.gl/8HGnHtxL6vfWoCx49
                - text: Chỉ đường
      - generic [ref=e390]:
        - article [ref=e392]:
          - img "Bảo Hành Chính Hãng" [ref=e394]
          - heading "Bảo Hành Chính Hãng" [level=3] [ref=e395]
          - paragraph [ref=e396]: Khung hợp kim bền bỉ
        - article [ref=e398]:
          - img "Đổi Trả Hàng 3 Ngày" [ref=e400]
          - heading "Đổi Trả Hàng 3 Ngày" [level=3] [ref=e401]
        - article [ref=e403]:
          - img "Vận chuyển miễn phí < 50km" [ref=e405]
          - heading "Vận chuyển miễn phí < 50km" [level=3] [ref=e406]
        - article [ref=e408]:
          - img "Thanh Toán COD" [ref=e410]
          - heading "Thanh Toán COD" [level=3] [ref=e411]
        - article [ref=e413]:
          - img "Hỗ Trợ 24/7" [ref=e415]
          - heading "Hỗ Trợ 24/7" [level=3] [ref=e416]
    - generic [ref=e417]:
      - generic [ref=e419]:
        - generic [ref=e420]:
          - generic [ref=e422]:
            - link "Thế giới xe đạp Việt" [ref=e423] [cursor=pointer]:
              - /url: /
              - img "Thế giới xe đạp Việt" [ref=e424]
            - heading "Thế giới xe đạp Việt" [level=2] [ref=e425]
            - generic [ref=e426]:
              - paragraph [ref=e427]:
                - strong [ref=e428]: CÔNG TY TNHH TM & DV GIẢI TRÍ TÂN TRƯỜNG GIANG
              - paragraph [ref=e429]:
                - strong [ref=e430]: "Địa chỉ:"
                - text: 345 Nguyễn An Ninh, Phường Tam Thắng, Thành phố Hồ Chí Minh, Việt Nam
              - paragraph [ref=e431]:
                - strong [ref=e432]: "GPKD số:"
                - text: "3502329410"
              - paragraph [ref=e433]:
                - strong [ref=e434]: "Ngày cấp:"
                - text: 08/03/2017
              - paragraph [ref=e435]:
                - strong [ref=e436]: "Nơi cấp:"
                - text: Thuế cơ sở 24 TP Hồ Chí Minh
            - paragraph [ref=e437]: Theo dõi chúng tôi tại
            - generic [ref=e438]:
              - link "Thế giới xe đạp Việt" [ref=e439] [cursor=pointer]:
                - /url: ""
                - img "Thế giới xe đạp Việt" [ref=e440]
              - link "Thế giới xe đạp Việt" [ref=e441] [cursor=pointer]:
                - /url: ""
                - img "Thế giới xe đạp Việt" [ref=e442]
              - link "Thế giới xe đạp Việt" [ref=e443] [cursor=pointer]:
                - /url: ""
                - img "Thế giới xe đạp Việt" [ref=e444]
              - link "Thế giới xe đạp Việt" [ref=e445] [cursor=pointer]:
                - /url: ""
                - img "Thế giới xe đạp Việt" [ref=e446]
              - link "Thế giới xe đạp Việt" [ref=e447] [cursor=pointer]:
                - /url: ""
                - img "Thế giới xe đạp Việt" [ref=e448]
          - link "Thế giới xe đạp Việt" [ref=e450] [cursor=pointer]:
            - /url: javascript:;
            - img "Thế giới xe đạp Việt" [ref=e451]
        - generic [ref=e452]:
          - generic [ref=e453]:
            - heading "Xe Đạp Trẻ Em" [level=3] [ref=e454]:
              - link "Xe Đạp Trẻ Em" [ref=e455] [cursor=pointer]:
                - /url: xe-dap-tre-em
            - list [ref=e456]:
              - listitem [ref=e457]:
                - link "Size 12 (2-4 tuổi)" [ref=e458] [cursor=pointer]:
                  - /url: size-12-2-4-tuoi
              - listitem [ref=e459]:
                - link "Size 14 (3-5 tuổi)" [ref=e460] [cursor=pointer]:
                  - /url: size-14-3-5-tuoi
              - listitem [ref=e461]:
                - link "Size 16 (4-7 tuổi)" [ref=e462] [cursor=pointer]:
                  - /url: size-16-4-7-tuoi
              - listitem [ref=e463]:
                - link "Size 18 (6-8 tuổi)" [ref=e464] [cursor=pointer]:
                  - /url: size-18-6-8-tuoi
              - listitem [ref=e465]:
                - link "Size 20 (7-9 tuổi)" [ref=e466] [cursor=pointer]:
                  - /url: size-20-7-9-tuoi
              - listitem [ref=e467]:
                - link "Size 22 (8-10 tuổi)" [ref=e468] [cursor=pointer]:
                  - /url: size-22-8-10-tuoi
          - generic [ref=e469]:
            - heading "Xe Đạp Địa Hình" [level=3] [ref=e470]:
              - link "Xe Đạp Địa Hình" [ref=e471] [cursor=pointer]:
                - /url: xe-dap-dia-hinh
            - list [ref=e472]:
              - listitem [ref=e473]:
                - link "Bánh 29" [ref=e474] [cursor=pointer]:
                  - /url: banh-29-inches
              - listitem [ref=e475]:
                - link "Bánh 27.5" [ref=e476] [cursor=pointer]:
                  - /url: banh-275
              - listitem [ref=e477]:
                - link "Bánh 24" [ref=e478] [cursor=pointer]:
                  - /url: banh-24
              - listitem [ref=e479]:
                - link "Bánh 26" [ref=e480] [cursor=pointer]:
                  - /url: banh-26
          - generic [ref=e481]:
            - heading "Xe Đạp Đua" [level=3] [ref=e482]:
              - link "Xe Đạp Đua" [ref=e483] [cursor=pointer]:
                - /url: xe-dap-dua
            - list
          - generic [ref=e484]:
            - heading "Xe Đạp Đường Phố" [level=3] [ref=e485]:
              - link "Xe Đạp Đường Phố" [ref=e486] [cursor=pointer]:
                - /url: xe-dap-duong-pho
            - list [ref=e487]:
              - listitem [ref=e488]:
                - link "Bánh 27 Inches" [ref=e489] [cursor=pointer]:
                  - /url: banh-27-inches
              - listitem [ref=e490]:
                - link "Bánh 26 inches" [ref=e491] [cursor=pointer]:
                  - /url: banh-26-inches
              - listitem [ref=e492]:
                - link "Bánh 700C" [ref=e493] [cursor=pointer]:
                  - /url: banh-700c
          - generic [ref=e494]:
            - heading "Xe Đạp Nữ" [level=3] [ref=e495]:
              - link "Xe Đạp Nữ" [ref=e496] [cursor=pointer]:
                - /url: xe-dap-nu
            - list [ref=e497]:
              - listitem [ref=e498]:
                - link "Bánh 26 Inch" [ref=e499] [cursor=pointer]:
                  - /url: banh-26-inch
              - listitem [ref=e500]:
                - link "Bánh 24 Inch" [ref=e501] [cursor=pointer]:
                  - /url: banh-24-inches
          - generic [ref=e502]:
            - heading "Xe Đạp Điện" [level=3] [ref=e503]:
              - link "Xe Đạp Điện" [ref=e504] [cursor=pointer]:
                - /url: xe-dap-dien
            - list
          - generic [ref=e505]:
            - heading "Xe Điện" [level=3] [ref=e506]:
              - link "Xe Điện" [ref=e507] [cursor=pointer]:
                - /url: xe-dien
            - list [ref=e508]:
              - listitem [ref=e509]:
                - link "Xe điện Yadea" [ref=e510] [cursor=pointer]:
                  - /url: xe-dien-yadea
          - generic [ref=e511]:
            - heading "XE ĐIỆN SCOOTER" [level=3] [ref=e512]:
              - link "XE ĐIỆN SCOOTER" [ref=e513] [cursor=pointer]:
                - /url: xe-dien-scooter
            - list
          - generic [ref=e514]:
            - heading "Xe đạp trợ lực" [level=3] [ref=e515]:
              - link "Xe đạp trợ lực" [ref=e516] [cursor=pointer]:
                - /url: xe-dap-tro-luc
            - list [ref=e517]:
              - listitem [ref=e518]:
                - link "Bánh 27.5 inches" [ref=e519] [cursor=pointer]:
                  - /url: banh-275-inches
          - generic [ref=e520]:
            - heading "Xe đạp gấp" [level=3] [ref=e521]:
              - link "Xe đạp gấp" [ref=e522] [cursor=pointer]:
                - /url: xe-dap-gap
            - list [ref=e523]:
              - listitem [ref=e524]:
                - link "Bánh 16 Inches" [ref=e525] [cursor=pointer]:
                  - /url: banh-16-inches
              - listitem [ref=e526]:
                - link "Bánh 20 Inches" [ref=e527] [cursor=pointer]:
                  - /url: size-banh-20-inches
          - generic [ref=e528]:
            - heading "Phụ kiện" [level=3] [ref=e529]:
              - link "Phụ kiện" [ref=e530] [cursor=pointer]:
                - /url: phu-kien
            - list [ref=e531]:
              - listitem [ref=e532]:
                - link "Đèn xe đạp" [ref=e533] [cursor=pointer]:
                  - /url: den-xe-dap
              - listitem [ref=e534]:
                - link "Đồ bảo hộ" [ref=e535] [cursor=pointer]:
                  - /url: do-bao-ho
              - listitem [ref=e536]:
                - link "Vỏ bọc tay nắm xe đạp" [ref=e537] [cursor=pointer]:
                  - /url: vo-boc-tay-nam-xe-dap
              - listitem [ref=e538]:
                - link "Mũ bảo hiểm" [ref=e539] [cursor=pointer]:
                  - /url: mu-bao-hiem
      - generic [ref=e543]: Copyright ©2026 Thế giới xe đạp Việt. Thiết kế web MIMA
    - generic [ref=e544]:
      - 'link "Call me: 0868 55 88 11" [ref=e545] [cursor=pointer]':
        - /url: tel:0868558811
        - img [ref=e549]
        - generic [ref=e552]: "Call me: 0868 55 88 11"
      - 'link "Zalo: 0868 55 88 11" [ref=e553] [cursor=pointer]':
        - /url: https://zalo.me/0868558811
        - img [ref=e557]
        - generic [ref=e559]: "Zalo: 0868 55 88 11"
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
          - strong: CHÍNH SÁCH BẢO MẬT THÔNG TIN
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e560]:
      - generic [ref=e561]: "❌ Chi tiết lỗi cần khắc phục (2/14):"
      - generic [ref=e562]:
        - generic [ref=e563]:
          - generic [ref=e564]: 3. Heading (H1-H6)
          - generic [ref=e565]: 1 lỗi
        - generic [ref=e566]:
          - strong [ref=e568]: Heading phân cấp hợp lệ (1 lỗi)
          - generic [ref=e569]: "⚠️ Heading phân cấp sai: Nhảy cấp từ H1 → H3 (\"Tin liên quan\")"
      - generic [ref=e570]:
        - generic [ref=e571]:
          - generic [ref=e572]: 6. Liên kết (Links)
          - generic [ref=e573]: 1 lỗi
        - generic [ref=e574]:
          - strong [ref=e576]: "Không có broken links (lỗi: 1/98)"
          - generic [ref=e577]: "⚠️ Broken links: / (status: 0)"
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