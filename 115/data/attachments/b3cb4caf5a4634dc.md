# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Size 18 (6-8 tuổi) (/size-18-6-8-tuoi)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 93/100 dưới ngưỡng 96%. Có 1/14 tiêu chí không đạt.
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
          - textbox "Tìm" [ref=e68]:
            - /placeholder: "Tìm "
          - button [ref=e69] [cursor=pointer]
    - list [ref=e73]:
      - listitem [ref=e74]:
        - link "Trang chủ" [ref=e75] [cursor=pointer]:
          - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/
          - img [ref=e76]
          - generic [ref=e78]: Trang chủ
      - listitem [ref=e79]:
        - text: /
        - link "Sản phẩm" [ref=e80] [cursor=pointer]:
          - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/san-pham
      - listitem [ref=e81]:
        - text: /
        - link "Xe Đạp Trẻ Em" [ref=e82] [cursor=pointer]:
          - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/xe-dap-tre-em
      - listitem [ref=e83]:
        - text: /
        - link "Size 18 (6-8 tuổi)" [ref=e84] [cursor=pointer]:
          - /url: https://code2.mimadigi.vn/2026/august/tantruonggiang_111426w/size-18-6-8-tuoi
    - generic [ref=e85]:
      - generic [ref=e87]:
        - link "Thế giới xe đạp Việt" [ref=e89] [cursor=pointer]:
          - /url: ""
          - img "Thế giới xe đạp Việt" [ref=e90]
        - link "Thế giới xe đạp Việt" [ref=e92] [cursor=pointer]:
          - /url: ""
          - img "Thế giới xe đạp Việt" [ref=e93]
      - generic [ref=e96]:
        - heading "Thương hiệu" [level=2] [ref=e98]
        - generic [ref=e99]:
          - link "Hãng Giant" [ref=e100] [cursor=pointer]:
            - /url: hang-giant
            - paragraph [ref=e101]:
              - img "Hãng Giant" [ref=e102]
          - link "Hãng Thống Nhất" [ref=e103] [cursor=pointer]:
            - /url: hang-thong-nhat
            - paragraph [ref=e104]:
              - img "Hãng Thống Nhất" [ref=e105]
          - link "Hãng Java" [ref=e106] [cursor=pointer]:
            - /url: hang-java
            - paragraph [ref=e107]:
              - img "Hãng Java" [ref=e108]
          - link "Hãng Hitasa" [ref=e109] [cursor=pointer]:
            - /url: hang-hitasa
            - paragraph [ref=e110]:
              - img "Hãng Hitasa" [ref=e111]
          - link "Hãng SAVA" [ref=e112] [cursor=pointer]:
            - /url: hang-sava
            - paragraph [ref=e113]:
              - img "Hãng SAVA" [ref=e114]
          - link "Hãng Asama" [ref=e115] [cursor=pointer]:
            - /url: hang-asama
            - paragraph [ref=e116]:
              - img "Hãng Asama" [ref=e117]
          - link "Hãng Papylus" [ref=e118] [cursor=pointer]:
            - /url: hang-papylus
            - paragraph [ref=e119]:
              - img "Hãng Papylus" [ref=e120]
          - link "Hãng Yadea" [ref=e121] [cursor=pointer]:
            - /url: hang-yadea
            - paragraph [ref=e122]:
              - img "Hãng Yadea" [ref=e123]
          - link "Hãng DK Bike" [ref=e124] [cursor=pointer]:
            - /url: hang-dk-bike
            - paragraph [ref=e125]:
              - img "Hãng DK Bike" [ref=e126]
          - link "Hãng Osakar" [ref=e127] [cursor=pointer]:
            - /url: hang-osakar
            - paragraph [ref=e128]:
              - img "Hãng Osakar" [ref=e129]
          - link "Hãng Hector" [ref=e130] [cursor=pointer]:
            - /url: hang-hector
            - paragraph [ref=e131]:
              - img "Hãng Hector" [ref=e132]
          - link "Hãng Foxy" [ref=e133] [cursor=pointer]:
            - /url: hang-foxy
            - paragraph [ref=e134]:
              - img "Hãng Foxy" [ref=e135]
          - link "Hãng Nesto" [ref=e136] [cursor=pointer]:
            - /url: hang-nesto
            - paragraph [ref=e137]:
              - img "Hãng Nesto" [ref=e138]
          - link "Hãng Raptor" [ref=e139] [cursor=pointer]:
            - /url: hang-raptor
            - paragraph [ref=e140]:
              - img "Hãng Raptor" [ref=e141]
          - link "Hãng Makelen" [ref=e142] [cursor=pointer]:
            - /url: hang-makelen
            - paragraph [ref=e143]:
              - img "Hãng Makelen" [ref=e144]
      - generic [ref=e148]:
        - heading "Size 18 (6-8 tuổi)" [level=2] [ref=e150]
        - generic [ref=e152]:
          - generic [ref=e154] [cursor=pointer]:
            - generic [ref=e155]:
              - generic [ref=e156]: "-7%"
              - link "Thế giới xe đạp Việt" [ref=e157]:
                - /url: xe-dap-tre-em-hector-luna-banh-18
                - img "Xe đạp trẻ em HECTOR LUNA bánh 18" [ref=e159]
            - generic [ref=e160]:
              - heading "Thế giới xe đạp Việt" [level=3] [ref=e161]:
                - link "Thế giới xe đạp Việt" [ref=e162]:
                  - /url: xe-dap-tre-em-hector-luna-banh-18
                  - text: Xe đạp trẻ em HECTOR LUNA bánh 18
              - generic [ref=e163]:
                - paragraph [ref=e164]:
                  - generic [ref=e165]: 1.750.000đ
                - paragraph [ref=e166]:
                  - generic [ref=e167]: 1.890.000đ
              - generic [ref=e168]:
                - button "Thêm vào giỏ hàng" [ref=e169]
                - button "Mua ngay" [ref=e171]
          - generic [ref=e173] [cursor=pointer]:
            - generic [ref=e174]:
              - generic [ref=e175]: "-4%"
              - link "Thế giới xe đạp Việt" [ref=e176]:
                - /url: xe-dap-tre-em-qt-1805-banh-18
                - img "Xe đạp trẻ em QT 1805 bánh 18" [ref=e178]
            - generic [ref=e179]:
              - heading "Thế giới xe đạp Việt" [level=3] [ref=e180]:
                - link "Thế giới xe đạp Việt" [ref=e181]:
                  - /url: xe-dap-tre-em-qt-1805-banh-18
                  - text: Xe đạp trẻ em QT 1805 bánh 18
              - generic [ref=e182]:
                - paragraph [ref=e183]:
                  - generic [ref=e184]: 1.750.000đ
                - paragraph [ref=e185]:
                  - generic [ref=e186]: 1.830.000đ
              - generic [ref=e187]: Bảo hành chính hãng
              - generic [ref=e188]: Bảo trì trọn đời
              - generic [ref=e189]:
                - button "Thêm vào giỏ hàng" [ref=e190]
                - button "Mua ngay" [ref=e192]
          - generic [ref=e194] [cursor=pointer]:
            - link "Thế giới xe đạp Việt" [ref=e196]:
              - /url: xe-dap-tre-em-asama-kzb-151802-banh-18-inches
              - img "Xe đạp trẻ em Asama KZB 151802- Bánh 18 Inches" [ref=e198]
            - generic [ref=e199]:
              - heading "Thế giới xe đạp Việt" [level=3] [ref=e200]:
                - link "Thế giới xe đạp Việt" [ref=e201]:
                  - /url: xe-dap-tre-em-asama-kzb-151802-banh-18-inches
                  - text: Xe đạp trẻ em Asama KZB 151802- Bánh 18 Inches
              - paragraph [ref=e203]:
                - generic [ref=e204]: 3.500.000đ
              - generic [ref=e205]:
                - button "Thêm vào giỏ hàng" [ref=e206]
                - button "Mua ngay" [ref=e208]
    - generic [ref=e210]:
      - heading "HỆ THỐNG CỬA HÀNG" [level=2] [ref=e212]
      - generic [ref=e213]:
        - iframe [ref=e217]:
          - generic [active] [ref=f16e1]:
            - link "Xem đường đi (mở trong thẻ mới)" [ref=f16e6] [cursor=pointer]:
              - /url: https://www.google.com/maps/dir//''/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x31756f91a9eb332b:0x44bde781e44f89eb!3e0?g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF
              - img [ref=f16e10]
            - generic [ref=f16e13]:
              - generic:
                - button "Phím tắt"
              - region "Bản đồ" [ref=f16e14]
              - generic [ref=f16e15]:
                - iframe [ref=f16e55]:
                  
                - button "Các chế độ điều khiển camera trên bản đồ" [ref=f16e57] [cursor=pointer]
                - button "Hiển thị bản đồ phố" [ref=f16e60] [cursor=pointer]:
                  - generic [ref=f16e64]:
                    - region [ref=f16e65]
                    - iframe [ref=f16e71]:
                      
                - img "Google" [ref=f16e73]
                - generic [ref=f16e74]:
                  - button "Phím tắt" [ref=f16e80] [cursor=pointer]
                  - generic [ref=f16e85]: Dữ liệu bản đồ ©2026 Hình ảnh ©2026 Airbus, CNES / Airbus, Maxar Technologies
                  - link "Điều khoản (mở trong thẻ mới)" [ref=f16e90] [cursor=pointer]:
                    - /url: https://www.google.com/intl/vi_US/help/terms_maps.html
                    - text: Điều khoản
                  - link "Báo cáo một lỗi bản đồ (mở trong thẻ mới)" [ref=f16e95] [cursor=pointer]:
                    - /url: https://www.google.com/maps/@10.3678834,107.0853837,16z/data=!3m1!1e3!10m1!1e1!12b1?source=apiv3&rapsrc=apiv3
                    - text: Báo cáo một lỗi bản đồ
        - generic [ref=e219]:
          - article [ref=e220] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 345 NGUYỄN AN NINH CHI NHÁNH 02 - VŨNG TÀU" [ref=e221]:
              - img "THẾ GIỚI XE ĐẠP 345 NGUYỄN AN NINH CHI NHÁNH 02 - VŨNG TÀU" [ref=e222]
            - generic [ref=e223]:
              - heading "THẾ GIỚI XE ĐẠP 345 NGUYỄN AN NINH CHI NHÁNH 02 - VŨNG TÀU" [level=3] [ref=e224]
              - generic [ref=e225]:
                - paragraph [ref=e226]:
                  - strong [ref=e227]: "Địa chỉ:"
                  - text: 345 Nguyễn An Ninh, Phường Tam Thắng, Thành phố Hồ Chí Minh(Gần Coopmart)
                - paragraph [ref=e228]:
                  - strong [ref=e229]: "Điện thoại:"
                  - text: 0886.172.172
                - paragraph [ref=e230]:
                  - strong [ref=e231]: "FB:"
                  - link "Thế giới xe đạp Vũng Tàu" [ref=e232]:
                    - /url: https://www.facebook.com/hethongbanlexedapuytinnhatvungtau
                - paragraph [ref=e233]
              - link "Chỉ đường" [ref=e234]:
                - /url: https://maps.app.goo.gl/RZagH1T316P3r4Ri9
                - text: Chỉ đường
          - article [ref=e236] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 323 NGUYỄN AN NINH CHI NHÁNH 07 - VŨNG TÀU" [ref=e237]:
              - img "THẾ GIỚI XE ĐẠP 323 NGUYỄN AN NINH CHI NHÁNH 07 - VŨNG TÀU" [ref=e238]
            - generic [ref=e239]:
              - heading "THẾ GIỚI XE ĐẠP 323 NGUYỄN AN NINH CHI NHÁNH 07 - VŨNG TÀU" [level=3] [ref=e240]
              - generic [ref=e241]:
                - paragraph [ref=e242]:
                  - strong [ref=e243]: "Địa chỉ:"
                  - text: 323/7A, 323 Nguyễn An Ninh, Tam Thắng, Hồ Chí Minh
                - paragraph [ref=e244]:
                  - strong [ref=e245]: "Điện thoại:"
                  - text: 0359.52.72.72
                - paragraph [ref=e246]:
                  - strong [ref=e247]: "FB:"
                  - link "Trung tâm xe điện thông minh" [ref=e248]:
                    - /url: https://www.facebook.com/xedienthongminh323
              - link "Chỉ đường" [ref=e249]:
                - /url: https://maps.app.goo.gl/Rqg7Pg3BfQJWzsib7
                - text: Chỉ đường
          - article [ref=e251] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 763A BÌNH GIÃ CHI NHÁNH 09 - VŨNG TÀU" [ref=e252]:
              - img "THẾ GIỚI XE ĐẠP 763A BÌNH GIÃ CHI NHÁNH 09 - VŨNG TÀU" [ref=e253]
            - generic [ref=e254]:
              - heading "THẾ GIỚI XE ĐẠP 763A BÌNH GIÃ CHI NHÁNH 09 - VŨNG TÀU" [level=3] [ref=e255]
              - generic [ref=e256]:
                - paragraph [ref=e257]:
                  - strong [ref=e258]: "Địa chỉ:"
                  - text: 763 Bình Giã, Phường Rạch Dừa, Thành phố Hồ Chí Minh(Gần chợ Lưu Chí Hiếu)
                - paragraph [ref=e259]:
                  - strong [ref=e260]: "Điện thoại:"
                  - text: 0797.172.172
                - paragraph [ref=e261]:
                  - strong [ref=e262]: "FB:"
                  - link "Thế giới xe đạp Yadea" [ref=e263]:
                    - /url: https://www.facebook.com/profile.php?id=100093542268533
              - link "Chỉ đường" [ref=e264]:
                - /url: https://maps.app.goo.gl/HwHwTDP3VJtoDcLr5
                - text: Chỉ đường
          - article [ref=e266] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 679 30/4 CHI NHÁNH 01 - VŨNG TÀU" [ref=e267]:
              - img "THẾ GIỚI XE ĐẠP 679 30/4 CHI NHÁNH 01 - VŨNG TÀU" [ref=e268]
            - generic [ref=e269]:
              - heading "THẾ GIỚI XE ĐẠP 679 30/4 CHI NHÁNH 01 - VŨNG TÀU" [level=3] [ref=e270]
              - generic [ref=e271]:
                - paragraph [ref=e272]:
                  - strong [ref=e273]: "Địa chỉ:"
                  - text: 679 Đường 30/4, Phường Rạch Dừa, Thành phố Hồ Chí Minh(Gần nhà hàng tiệc cưới Hải Phương)
                - paragraph [ref=e274]:
                  - strong [ref=e275]: "Điện thoại:"
                  - text: 0866.650.650
                - paragraph [ref=e276]:
                  - strong [ref=e277]: "FB:"
                  - link "Thế giới xe đạp 679" [ref=e278]:
                    - /url: https://www.facebook.com/Th%E1%BA%BF-gi%E1%BB%9Bi-xe-%C4%91%E1%BA%A1p-679-102705888542682
              - link "Chỉ đường" [ref=e279]:
                - /url: https://maps.app.goo.gl/mANCNhqQ5iL8d5pC8
                - text: Chỉ đường
          - article [ref=e281] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 577 CMT8 CHI NHÁNH 5 - BÀ RỊA" [ref=e282]:
              - img "THẾ GIỚI XE ĐẠP 577 CMT8 CHI NHÁNH 5 - BÀ RỊA" [ref=e283]
            - generic [ref=e284]:
              - heading "THẾ GIỚI XE ĐẠP 577 CMT8 CHI NHÁNH 5 - BÀ RỊA" [level=3] [ref=e285]
              - generic [ref=e286]:
                - paragraph [ref=e287]:
                  - strong [ref=e288]: "Địa chỉ:"
                  - text: 557 Cách Mạng Tháng Tám, Phường Bà Rịa, Thành phố Hồ Chí Minh
                - paragraph [ref=e289]: "Hotline/Zalo: 0877.272.272"
                - paragraph [ref=e290]:
                  - strong [ref=e291]: "FB:"
                  - link "Xe điện Pega Bà Rịa" [ref=e292]:
                    - /url: https://www.facebook.com/thegioixedapbaria
              - link "Chỉ đường" [ref=e293]:
                - /url: https://maps.app.goo.gl/afG5G5LoHUNGeYYQA
                - text: Chỉ đường
          - article [ref=e295] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP TÂN HÒA PHÚ MỸ CHI NHÁNH 06 - BÀ RỊA" [ref=e296]:
              - img "THẾ GIỚI XE ĐẠP TÂN HÒA PHÚ MỸ CHI NHÁNH 06 - BÀ RỊA" [ref=e297]
            - generic [ref=e298]:
              - heading "THẾ GIỚI XE ĐẠP TÂN HÒA PHÚ MỸ CHI NHÁNH 06 - BÀ RỊA" [level=3] [ref=e299]
              - generic [ref=e300]:
                - paragraph [ref=e301]:
                  - strong [ref=e302]: "Địa chỉ:"
                  - text: 252 Quốc lộ 51 ( Ngã 3 Hội Bài) Tân Hòa, Phường Tân Hòa, Thành phố Hồ Chí Minh
                - paragraph [ref=e303]:
                  - strong [ref=e304]: "Điện thoại:"
                  - text: 0868.272.272
                - paragraph [ref=e305]:
                  - strong [ref=e306]: "FB:"
                  - link "Thế giới xe đạp Phú Mỹ" [ref=e307]:
                    - /url: https://www.facebook.com/thegioixedapphumy
              - link "Chỉ đường" [ref=e308]:
                - /url: https://maps.app.goo.gl/XSDAfwsyt8yX6VwF8
                - text: Chỉ đường
          - article [ref=e310] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP MỸ XUÂN 1 CHI NHÁNH 03 - BÀ RỊA" [ref=e311]:
              - img "THẾ GIỚI XE ĐẠP MỸ XUÂN 1 CHI NHÁNH 03 - BÀ RỊA" [ref=e312]
            - generic [ref=e313]:
              - heading "THẾ GIỚI XE ĐẠP MỸ XUÂN 1 CHI NHÁNH 03 - BÀ RỊA" [level=3] [ref=e314]
              - generic [ref=e315]:
                - paragraph [ref=e316]:
                  - strong [ref=e317]: "Địa chỉ:"
                  - text: Quốc lộ 51, KP Thị Vải, Phường Phú Mỹ, Thành phố Hồ Chí Minh(Gần ngã ba Mỹ Xuân)
                - paragraph [ref=e318]:
                  - strong [ref=e319]: "Điện thoại:"
                  - text: 0836.72.79.79
                - paragraph [ref=e320]:
                  - strong [ref=e321]: "FB:"
                  - link "Thế giới xe đạp đúng giá - đúng chất lượng" [ref=e322]:
                    - /url: https://www.facebook.com/Th%E1%BA%BF-Gi%E1%BB%9Bi-Xe-%C4%90%E1%BA%A1p-%C4%91%C3%BAng-gi%C3%A1-%C4%91%C3%BAng-ch%E1%BA%A5t-l%C6%B0%E1%BB%A3ng-344114132875576
              - link "Chỉ đường" [ref=e323]:
                - /url: https://maps.app.goo.gl/M9L7pGwwX1j6MvUy7
                - text: Chỉ đường
          - article [ref=e325] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP VIỆT KIỀU MỸ XUÂN 2 CHI NHÁNH 08 - BÀ RỊA" [ref=e326]:
              - img "THẾ GIỚI XE ĐẠP VIỆT KIỀU MỸ XUÂN 2 CHI NHÁNH 08 - BÀ RỊA" [ref=e327]
            - generic [ref=e328]:
              - heading "THẾ GIỚI XE ĐẠP VIỆT KIỀU MỸ XUÂN 2 CHI NHÁNH 08 - BÀ RỊA" [level=3] [ref=e329]
              - generic [ref=e330]:
                - paragraph [ref=e331]:
                  - strong [ref=e332]: "Địa chỉ:"
                  - text: QL51( đầu chợ Việt Kiều) khu phố Mỹ Thạnh, Phường Phú Mỹ, Thành phố Hồ Chí Minh
                - paragraph [ref=e333]:
                  - strong [ref=e334]: "Hotline:"
                  - text: 0856.772.772
                - paragraph [ref=e335]:
                  - strong [ref=e336]: "FB:"
                  - link "Thế giới xe đạp Việt Kiều" [ref=e337]:
                    - /url: https://www.facebook.com/profile.php?id=100082745725802
              - link "Chỉ đường" [ref=e338]:
                - /url: https://maps.app.goo.gl/H5s9NK3PHh3huhP8A
                - text: Chỉ đường
          - article [ref=e340] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 198 HÙNG VƯƠNG CHI NHÁNH 04 - NHƠN TRẠCH ĐỒNG NAI" [ref=e341]:
              - img "THẾ GIỚI XE ĐẠP 198 HÙNG VƯƠNG CHI NHÁNH 04 - NHƠN TRẠCH ĐỒNG NAI" [ref=e342]
            - generic [ref=e343]:
              - heading "THẾ GIỚI XE ĐẠP 198 HÙNG VƯƠNG CHI NHÁNH 04 - NHƠN TRẠCH ĐỒNG NAI" [level=3] [ref=e344]
              - generic [ref=e345]:
                - paragraph [ref=e346]:
                  - strong [ref=e347]: "Địa chỉ:"
                  - text: 198 Đ. Hùng Vương, Phường Nhơn Trạch, TP Đồng Nai
                - paragraph [ref=e348]:
                  - strong [ref=e349]: "Điện thoại:"
                  - text: 0855.387.345
                - paragraph [ref=e350]:
                  - strong [ref=e351]: "FB:"
                  - link "Thế giới xe đạp Nhơn Trạch" [ref=e352]:
                    - /url: https://www.facebook.com/Th%E1%BA%BF-gi%E1%BB%9Bi-xe-%C4%91%E1%BA%A1p-Nh%C6%A1n-Tr%E1%BA%A1ch-103768937916334
              - link "Chỉ đường" [ref=e353]:
                - /url: https://maps.app.goo.gl/nTJy6foVA54ykiZB7
                - text: Chỉ đường
          - article [ref=e355] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 19 ĐỒNG KHỞI CHI NHÁNH 10 - ĐỒNG NAI" [ref=e356]:
              - img "THẾ GIỚI XE ĐẠP 19 ĐỒNG KHỞI CHI NHÁNH 10 - ĐỒNG NAI" [ref=e357]
            - generic [ref=e358]:
              - heading "THẾ GIỚI XE ĐẠP 19 ĐỒNG KHỞI CHI NHÁNH 10 - ĐỒNG NAI" [level=3] [ref=e359]
              - generic [ref=e360]:
                - paragraph [ref=e361]:
                  - strong [ref=e362]: "Địa chỉ:"
                  - text: 19 Đ. Đồng Khởi, Phường Tam Hiệp, TP Đồng Nai
                - paragraph [ref=e363]:
                  - strong [ref=e364]: "Điện thoại:"
                  - text: 0385.21.21.68
                - paragraph [ref=e365]:
                  - strong [ref=e366]: "FB:"
                  - link "Thế Giới Xe Đạp 19 Đồng Khởi" [ref=e367]:
                    - /url: https://www.facebook.com/profile.php?id=61562540870293
              - link "Chỉ đường" [ref=e368]:
                - /url: https://maps.app.goo.gl/cbjJXzqqnsvBbLha6
                - text: Chỉ đường
          - article [ref=e370] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 32 ĐỒNG KHỞI CHI NHÁNH 11 - ĐỒNG NAI" [ref=e371]:
              - img "THẾ GIỚI XE ĐẠP 32 ĐỒNG KHỞI CHI NHÁNH 11 - ĐỒNG NAI" [ref=e372]
            - generic [ref=e373]:
              - heading "THẾ GIỚI XE ĐẠP 32 ĐỒNG KHỞI CHI NHÁNH 11 - ĐỒNG NAI" [level=3] [ref=e374]
              - generic [ref=e375]:
                - paragraph [ref=e376]:
                  - strong [ref=e377]: "Địa chỉ:"
                  - text: 32-34 Đồng Khởi, phường Tam Hiệp, TP Đồng Nai (đi qua bệnh viện Đồng Nai về hướng Amata khoảng 200m)
                - paragraph [ref=e378]:
                  - strong [ref=e379]: "Điện thoại:"
                  - text: 0372.59.59.89
                - paragraph [ref=e380]:
                  - strong [ref=e381]: "FB:"
                  - link "Thế giới xe đạp Đồng Khởi -Biên Hoà" [ref=e382]:
                    - /url: https://www.facebook.com/profile.php?id=61575874576218
              - link "Chỉ đường" [ref=e383]:
                - /url: https://maps.app.goo.gl/bV9nDyQCXvxkSkXe9
                - text: Chỉ đường
          - article [ref=e385] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 262 30/4 CHI NHÁNH 13 - THỦ DẦU MỘT BÌNH DƯƠNG" [ref=e386]:
              - img "THẾ GIỚI XE ĐẠP 262 30/4 CHI NHÁNH 13 - THỦ DẦU MỘT BÌNH DƯƠNG" [ref=e387]
            - generic [ref=e388]:
              - heading "THẾ GIỚI XE ĐẠP 262 30/4 CHI NHÁNH 13 - THỦ DẦU MỘT BÌNH DƯƠNG" [level=3] [ref=e389]
              - generic [ref=e390]:
                - paragraph [ref=e391]:
                  - strong [ref=e392]: "Địa chỉ:"
                  - text: 262, Đ.30/4, P. Chánh Nghĩa, Phường Thủ Dầu Một, Thành phố Hồ Chí Minh
                - paragraph [ref=e393]:
                  - strong [ref=e394]: "Điện thoại:"
                  - text: 0862.725.472
                - paragraph [ref=e395]:
                  - strong [ref=e396]: "FB:"
                  - link "Thế giới xe đạp Thủ Một Dầu Bình Dương" [ref=e397]:
                    - /url: https://www.facebook.com/profile.php?id=61576103733740
              - link "Chỉ đường" [ref=e398]:
                - /url: https://maps.app.goo.gl/jdqQjYYni1XyVh2VA
                - text: Chỉ đường
          - article [ref=e400] [cursor=pointer]:
            - button "Xem bản đồ THẾ GIỚI XE ĐẠP 24 NGUYỄN AN NINH CHI NHÁNH 14 - DĨ AN BÌNH DƯƠNG" [ref=e401]:
              - img "THẾ GIỚI XE ĐẠP 24 NGUYỄN AN NINH CHI NHÁNH 14 - DĨ AN BÌNH DƯƠNG" [ref=e402]
            - generic [ref=e403]:
              - heading "THẾ GIỚI XE ĐẠP 24 NGUYỄN AN NINH CHI NHÁNH 14 - DĨ AN BÌNH DƯƠNG" [level=3] [ref=e404]
              - generic [ref=e405]:
                - paragraph [ref=e406]:
                  - strong [ref=e407]: "Địa chỉ:"
                  - text: 24 Nguyễn An Ninh, Phường Dĩ An, Thành phố Hồ Chí Minh
                - paragraph [ref=e408]:
                  - strong [ref=e409]: "Điện thoại:"
                  - text: 0862.726.472
                - paragraph [ref=e410]:
                  - strong [ref=e411]: "Facebook:"
                  - strong [ref=e412]
                  - link "Thế Giới Xe Đạp Dĩ An - Bình Dương" [ref=e413]:
                    - /url: https://www.facebook.com/profile.php?id=61576318119691
              - link "Chỉ đường" [ref=e414]:
                - /url: https://maps.app.goo.gl/8HGnHtxL6vfWoCx49
                - text: Chỉ đường
      - generic [ref=e416]:
        - article [ref=e418]:
          - img "Bảo Hành Chính Hãng" [ref=e420]
          - heading "Bảo Hành Chính Hãng" [level=3] [ref=e421]
          - paragraph [ref=e422]: Khung hợp kim bền bỉ
        - article [ref=e424]:
          - img "Đổi Trả Hàng 3 Ngày" [ref=e426]
          - heading "Đổi Trả Hàng 3 Ngày" [level=3] [ref=e427]
        - article [ref=e429]:
          - img "Vận chuyển miễn phí < 50km" [ref=e431]
          - heading "Vận chuyển miễn phí < 50km" [level=3] [ref=e432]
        - article [ref=e434]:
          - img "Thanh Toán COD" [ref=e436]
          - heading "Thanh Toán COD" [level=3] [ref=e437]
        - article [ref=e439]:
          - img "Hỗ Trợ 24/7" [ref=e441]
          - heading "Hỗ Trợ 24/7" [level=3] [ref=e442]
    - generic [ref=e443]:
      - generic [ref=e445]:
        - generic [ref=e446]:
          - generic [ref=e448]:
            - link "Thế giới xe đạp Việt" [ref=e449] [cursor=pointer]:
              - /url: /
              - img "Thế giới xe đạp Việt" [ref=e450]
            - heading "Thế giới xe đạp Việt" [level=2] [ref=e451]
            - generic [ref=e452]:
              - paragraph [ref=e453]:
                - strong [ref=e454]: CÔNG TY TNHH TM & DV GIẢI TRÍ TÂN TRƯỜNG GIANG
              - paragraph [ref=e455]:
                - strong [ref=e456]: "Địa chỉ:"
                - text: 345 Nguyễn An Ninh, Phường Tam Thắng, Thành phố Hồ Chí Minh, Việt Nam
              - paragraph [ref=e457]:
                - strong [ref=e458]: "GPKD số:"
                - text: "3502329410"
              - paragraph [ref=e459]:
                - strong [ref=e460]: "Ngày cấp:"
                - text: 08/03/2017
              - paragraph [ref=e461]:
                - strong [ref=e462]: "Nơi cấp:"
                - text: Thuế cơ sở 24 TP Hồ Chí Minh
            - paragraph [ref=e463]: Theo dõi chúng tôi tại
            - generic [ref=e464]:
              - link "Thế giới xe đạp Việt" [ref=e465] [cursor=pointer]:
                - /url: ""
                - img "Thế giới xe đạp Việt" [ref=e466]
              - link "Thế giới xe đạp Việt" [ref=e467] [cursor=pointer]:
                - /url: ""
                - img "Thế giới xe đạp Việt" [ref=e468]
              - link "Thế giới xe đạp Việt" [ref=e469] [cursor=pointer]:
                - /url: ""
                - img "Thế giới xe đạp Việt" [ref=e470]
              - link "Thế giới xe đạp Việt" [ref=e471] [cursor=pointer]:
                - /url: ""
                - img "Thế giới xe đạp Việt" [ref=e472]
              - link "Thế giới xe đạp Việt" [ref=e473] [cursor=pointer]:
                - /url: ""
                - img "Thế giới xe đạp Việt" [ref=e474]
          - link "Thế giới xe đạp Việt" [ref=e476] [cursor=pointer]:
            - /url: javascript:;
            - img "Thế giới xe đạp Việt" [ref=e477]
        - generic [ref=e478]:
          - generic [ref=e479]:
            - heading "Xe Đạp Trẻ Em" [level=3] [ref=e480]:
              - link "Xe Đạp Trẻ Em" [ref=e481] [cursor=pointer]:
                - /url: xe-dap-tre-em
            - list [ref=e482]:
              - listitem [ref=e483]:
                - link "Size 12 (2-4 tuổi)" [ref=e484] [cursor=pointer]:
                  - /url: size-12-2-4-tuoi
              - listitem [ref=e485]:
                - link "Size 14 (3-5 tuổi)" [ref=e486] [cursor=pointer]:
                  - /url: size-14-3-5-tuoi
              - listitem [ref=e487]:
                - link "Size 16 (4-7 tuổi)" [ref=e488] [cursor=pointer]:
                  - /url: size-16-4-7-tuoi
              - listitem [ref=e489]:
                - link "Size 18 (6-8 tuổi)" [ref=e490] [cursor=pointer]:
                  - /url: size-18-6-8-tuoi
              - listitem [ref=e491]:
                - link "Size 20 (7-9 tuổi)" [ref=e492] [cursor=pointer]:
                  - /url: size-20-7-9-tuoi
              - listitem [ref=e493]:
                - link "Size 22 (8-10 tuổi)" [ref=e494] [cursor=pointer]:
                  - /url: size-22-8-10-tuoi
          - generic [ref=e495]:
            - heading "Xe Đạp Địa Hình" [level=3] [ref=e496]:
              - link "Xe Đạp Địa Hình" [ref=e497] [cursor=pointer]:
                - /url: xe-dap-dia-hinh
            - list [ref=e498]:
              - listitem [ref=e499]:
                - link "Bánh 29" [ref=e500] [cursor=pointer]:
                  - /url: banh-29-inches
              - listitem [ref=e501]:
                - link "Bánh 27.5" [ref=e502] [cursor=pointer]:
                  - /url: banh-275
              - listitem [ref=e503]:
                - link "Bánh 24" [ref=e504] [cursor=pointer]:
                  - /url: banh-24
              - listitem [ref=e505]:
                - link "Bánh 26" [ref=e506] [cursor=pointer]:
                  - /url: banh-26
          - generic [ref=e507]:
            - heading "Xe Đạp Đua" [level=3] [ref=e508]:
              - link "Xe Đạp Đua" [ref=e509] [cursor=pointer]:
                - /url: xe-dap-dua
            - list
          - generic [ref=e510]:
            - heading "Xe Đạp Đường Phố" [level=3] [ref=e511]:
              - link "Xe Đạp Đường Phố" [ref=e512] [cursor=pointer]:
                - /url: xe-dap-duong-pho
            - list [ref=e513]:
              - listitem [ref=e514]:
                - link "Bánh 26 inches" [ref=e515] [cursor=pointer]:
                  - /url: banh-26-inches
              - listitem [ref=e516]:
                - link "Bánh 700C" [ref=e517] [cursor=pointer]:
                  - /url: banh-700c
          - generic [ref=e518]:
            - heading "Xe Đạp Nữ" [level=3] [ref=e519]:
              - link "Xe Đạp Nữ" [ref=e520] [cursor=pointer]:
                - /url: xe-dap-nu
            - list [ref=e521]:
              - listitem [ref=e522]:
                - link "Bánh 26 Inch" [ref=e523] [cursor=pointer]:
                  - /url: banh-26-inch
              - listitem [ref=e524]:
                - link "Bánh 24 Inch" [ref=e525] [cursor=pointer]:
                  - /url: banh-24-inches
          - generic [ref=e526]:
            - heading "Xe Đạp Điện" [level=3] [ref=e527]:
              - link "Xe Đạp Điện" [ref=e528] [cursor=pointer]:
                - /url: xe-dap-dien
            - list
          - generic [ref=e529]:
            - heading "Xe Điện" [level=3] [ref=e530]:
              - link "Xe Điện" [ref=e531] [cursor=pointer]:
                - /url: xe-dien
            - list [ref=e532]:
              - listitem [ref=e533]:
                - link "Xe điện Yadea" [ref=e534] [cursor=pointer]:
                  - /url: xe-dien-yadea
          - generic [ref=e535]:
            - heading "XE ĐIỆN SCOOTER" [level=3] [ref=e536]:
              - link "XE ĐIỆN SCOOTER" [ref=e537] [cursor=pointer]:
                - /url: xe-dien-scooter
            - list
          - generic [ref=e538]:
            - heading "Xe đạp trợ lực" [level=3] [ref=e539]:
              - link "Xe đạp trợ lực" [ref=e540] [cursor=pointer]:
                - /url: xe-dap-tro-luc
            - list [ref=e541]:
              - listitem [ref=e542]:
                - link "Bánh 27.5 inches" [ref=e543] [cursor=pointer]:
                  - /url: banh-275-inches
          - generic [ref=e544]:
            - heading "Xe đạp gấp" [level=3] [ref=e545]:
              - link "Xe đạp gấp" [ref=e546] [cursor=pointer]:
                - /url: xe-dap-gap
            - list [ref=e547]:
              - listitem [ref=e548]:
                - link "Bánh 16 Inches" [ref=e549] [cursor=pointer]:
                  - /url: banh-16-inches
              - listitem [ref=e550]:
                - link "Bánh 20 Inches" [ref=e551] [cursor=pointer]:
                  - /url: size-banh-20-inches
          - generic [ref=e552]:
            - heading "Phụ kiện" [level=3] [ref=e553]:
              - link "Phụ kiện" [ref=e554] [cursor=pointer]:
                - /url: phu-kien
            - list [ref=e555]:
              - listitem [ref=e556]:
                - link "Đèn xe đạp" [ref=e557] [cursor=pointer]:
                  - /url: den-xe-dap
              - listitem [ref=e558]:
                - link "Đồ bảo hộ" [ref=e559] [cursor=pointer]:
                  - /url: do-bao-ho
              - listitem [ref=e560]:
                - link "Vỏ bọc tay nắm xe đạp" [ref=e561] [cursor=pointer]:
                  - /url: vo-boc-tay-nam-xe-dap
              - listitem [ref=e562]:
                - link "Mũ bảo hiểm" [ref=e563] [cursor=pointer]:
                  - /url: mu-bao-hiem
      - generic [ref=e567]: Copyright ©2026 Thế giới xe đạp Việt. Thiết kế web MIMA
    - generic [ref=e568]:
      - 'link "Call me: 0868 55 88 11" [ref=e569] [cursor=pointer]':
        - /url: tel:0868558811
        - img [ref=e573]
        - generic [ref=e576]: "Call me: 0868 55 88 11"
      - 'link "Zalo: 0868 55 88 11" [ref=e577] [cursor=pointer]':
        - /url: https://zalo.me/0868558811
        - img [ref=e581]
        - generic [ref=e583]: "Zalo: 0868 55 88 11"
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
          - generic: "14"
          - generic: Tổng tiêu chí
        - generic:
          - generic: ✅ 13
          - generic: Đạt
        - generic:
          - generic: ❌ 1
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: Size 18 (6-8 tuổi)
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e584]:
      - generic [ref=e585]: "❌ Chi tiết lỗi cần khắc phục (1/14):"
      - generic [ref=e586]:
        - generic [ref=e587]:
          - generic [ref=e588]: 6. Liên kết (Links)
          - generic [ref=e589]: 1 lỗi
        - generic [ref=e590]:
          - strong [ref=e592]: "Không có broken links (lỗi: 1/92)"
          - generic [ref=e593]: "⚠️ Broken links: / (status: 0)"
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 93/100 dưới ngưỡng 96%. Có 1/14 tiêu chí không đạt.
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