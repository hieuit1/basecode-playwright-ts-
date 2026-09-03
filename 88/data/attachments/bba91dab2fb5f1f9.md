# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web/search.spec.ts >> Search Feature Tests >> Search form successfully finds product using dynamic keyword from homepage
- Location: tests/web/search.spec.ts:25:13

# Error details

```
TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
Call log:
  - waiting for locator('//div[@id=\'search-result\']') to be visible

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - generic [ref=e6]:
      - paragraph [ref=e7]:
        - generic [ref=e8]: “Công Ty TNHH Ngân Nhân Phát – Uy tín tạo giá trị, vững bước tương lai.”
      - generic [ref=e9]:
        - paragraph [ref=e10]:
          - text: "Email:"
          - link "caonghia163@gmail.com" [ref=e11] [cursor=pointer]:
            - /url: mailto:caonghia163@gmail.com
        - paragraph [ref=e12]:
          - text: "Hotline:"
          - link "0908.589877" [ref=e13] [cursor=pointer]:
            - /url: tel:0908589877
    - list [ref=e17]:
      - listitem [ref=e18]:
        - link "Trang chủ" [ref=e19] [cursor=pointer]:
          - /url: https://phutungmayin.com/
      - listitem [ref=e20]:
        - link "Giới thiệu" [ref=e21] [cursor=pointer]:
          - /url: gioi-thieu
      - listitem [ref=e22]:
        - link "Sản phẩm" [ref=e23] [cursor=pointer]:
          - /url: san-pham
      - listitem [ref=e24]:
        - link "Phụ Tùng Máy In Công NghiệpTại TP.HCM_Công Ty TNHH Ngân Nhân Phát" [ref=e25] [cursor=pointer]:
          - /url: https://phutungmayin.com/
          - img "Phụ Tùng Máy In Công NghiệpTại TP.HCM_Công Ty TNHH Ngân Nhân Phát" [ref=e26]
      - listitem [ref=e27]:
        - link "Dịch vụ" [ref=e28] [cursor=pointer]:
          - /url: dich-vu
      - listitem [ref=e29]:
        - link "Tin tức" [ref=e30] [cursor=pointer]:
          - /url: tin-tuc
      - listitem [ref=e31]:
        - link "Liên hệ" [ref=e32] [cursor=pointer]:
          - /url: lien-he
      - listitem [ref=e33]:
        - link [ref=e34] [cursor=pointer]:
          - /url: javascript:void();
        - textbox "Nhập từ khóa cần tìm..." [active]: "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1788407259773 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
    - text:  
  - generic [ref=e35]:
    - generic [ref=e38]:
      - link "Phụ Tùng Máy In Công NghiệpTại TP.HCM_Công Ty TNHH Ngân Nhân Phát" [ref=e41] [cursor=pointer]:
        - /url: ""
        - img "Phụ Tùng Máy In Công NghiệpTại TP.HCM_Công Ty TNHH Ngân Nhân Phát" [ref=e43]
      - link "Phụ Tùng Máy In Công NghiệpTại TP.HCM_Công Ty TNHH Ngân Nhân Phát" [ref=e46] [cursor=pointer]:
        - /url: ""
        - img "Phụ Tùng Máy In Công NghiệpTại TP.HCM_Công Ty TNHH Ngân Nhân Phát" [ref=e48]
      - link [ref=e51] [cursor=pointer]:
        - /url: ""
      - link [ref=e55] [cursor=pointer]:
        - /url: ""
      - link [ref=e59] [cursor=pointer]:
        - /url: ""
      - link [ref=e63] [cursor=pointer]:
        - /url: ""
      - link [ref=e67] [cursor=pointer]:
        - /url: ""
      - link [ref=e71] [cursor=pointer]:
        - /url: ""
      - link [ref=e75] [cursor=pointer]:
        - /url: ""
      - link [ref=e79] [cursor=pointer]:
        - /url: ""
      - link [ref=e83] [cursor=pointer]:
        - /url: ""
      - link [ref=e87] [cursor=pointer]:
        - /url: ""
      - link [ref=e91] [cursor=pointer]:
        - /url: ""
      - link [ref=e95] [cursor=pointer]:
        - /url: ""
    - generic:
      - button [ref=e97] [cursor=pointer]:
        - img [ref=e98]
      - button [ref=e101] [cursor=pointer]:
        - img [ref=e102]
  - generic [ref=e105]:
    - generic [ref=e107]:
      - heading "Sản phẩm mới nhất" [level=2] [ref=e109]
      - generic [ref=e110]:
        - generic [ref=e113]:
          - generic [ref=e115]:
            - link "H9" [ref=e117] [cursor=pointer]:
              - /url: h9
              - img "H9" [ref=e118]
            - heading "H9" [level=3] [ref=e119]:
              - link "H9" [ref=e120] [cursor=pointer]:
                - /url: h9
            - generic [ref=e122]: Liên hệ
          - generic [ref=e124]:
            - link "H8" [ref=e126] [cursor=pointer]:
              - /url: h8
              - img "H8" [ref=e127]
            - heading "H8" [level=3] [ref=e128]:
              - link "H8" [ref=e129] [cursor=pointer]:
                - /url: h8
            - generic [ref=e131]: Liên hệ
          - generic [ref=e133]:
            - link "H13" [ref=e135] [cursor=pointer]:
              - /url: h13
              - img "H13" [ref=e136]
            - heading "H13" [level=3] [ref=e137]:
              - link "H13" [ref=e138] [cursor=pointer]:
                - /url: h13
            - generic [ref=e140]: Liên hệ
          - generic [ref=e142]:
            - link "H1" [ref=e144] [cursor=pointer]:
              - /url: h1
              - img "H1" [ref=e145]
            - heading "H1" [level=3] [ref=e146]:
              - link "H1" [ref=e147] [cursor=pointer]:
                - /url: h1
            - generic [ref=e149]: Liên hệ
          - generic [ref=e151]:
            - link "H26" [ref=e153] [cursor=pointer]:
              - /url: h26
              - img "H26" [ref=e154]
            - heading "H26" [level=3] [ref=e155]:
              - link "H26" [ref=e156] [cursor=pointer]:
                - /url: h26
            - generic [ref=e158]: Liên hệ
          - generic [ref=e160]:
            - link "H25" [ref=e162] [cursor=pointer]:
              - /url: h25
            - heading "H25" [level=3] [ref=e163]:
              - link "H25" [ref=e164] [cursor=pointer]:
                - /url: h25
            - generic [ref=e166]: Liên hệ
          - generic [ref=e168]:
            - link "H24" [ref=e170] [cursor=pointer]:
              - /url: h24
            - heading "H24" [level=3] [ref=e171]:
              - link "H24" [ref=e172] [cursor=pointer]:
                - /url: h24
            - generic [ref=e174]: Liên hệ
          - generic [ref=e176]:
            - link "H22" [ref=e178] [cursor=pointer]:
              - /url: h22
            - heading "H22" [level=3] [ref=e179]:
              - link "H22" [ref=e180] [cursor=pointer]:
                - /url: h22
            - generic [ref=e182]: Liên hệ
          - generic [ref=e184]:
            - link "H21" [ref=e186] [cursor=pointer]:
              - /url: h21
            - heading "H21" [level=3] [ref=e187]:
              - link "H21" [ref=e188] [cursor=pointer]:
                - /url: h21
            - generic [ref=e190]: Liên hệ
          - generic [ref=e192]:
            - link "H20" [ref=e194] [cursor=pointer]:
              - /url: h20
            - heading "H20" [level=3] [ref=e195]:
              - link "H20" [ref=e196] [cursor=pointer]:
                - /url: h20
            - generic [ref=e198]: Liên hệ
        - generic:
          - button [ref=e199] [cursor=pointer]
          - button [ref=e200] [cursor=pointer]
    - generic [ref=e201]:
      - generic [ref=e204]:
        - link "CÔNG TY TNHH NGÂN NHÂN PHÁT" [ref=e206] [cursor=pointer]:
          - /url: gioi-thieu
          - img "CÔNG TY TNHH NGÂN NHÂN PHÁT" [ref=e207]
        - generic [ref=e208]:
          - paragraph [ref=e209]: Giới thiệu về
          - heading "CÔNG TY TNHH NGÂN NHÂN PHÁT" [level=2] [ref=e210]
          - paragraph [ref=e212]:
            - generic [ref=e213]: "Với bề dày kinh nghiệm làm máy in phun mã số công nghiệp từ những năm 1999 đến nay chúng tôi đã trở thành đối tác tin cậy của các công ty có sử dụng máy in phun hiệu : Domino , Hitachi , Linx , Video jet , Markem – Imaje , Leibinger , Willett , Citronix , EBS , Hailek , Shenou SOP , EC jet , Fast jet , Best Code , Zanasi , Hi -Coder , Matthews , Rottweil , KGK , Saturn , Docod , Troy , Somi jet , Lead tech , My Coding , Smart jet ..... Nhập thêm dữ liệu"
          - paragraph [ref=e214]:
            - link "Xem thêm" [ref=e215] [cursor=pointer]:
              - /url: gioi-thieu
        - generic [ref=e216]:
          - generic [ref=e217]:
            - img "Sản Phẩm Chất Lượng" [ref=e219]
            - generic [ref=e220]:
              - generic [ref=e221]: Sản Phẩm Chất Lượng
              - generic [ref=e222]: Chúng tôi cam kết chất lượng sản phẩm tốt nhất.
          - generic [ref=e225]:
            - generic [ref=e226]: Giao Hàng Nhanh Chóng
            - generic [ref=e227]: Giao hàng trong vòng 24 giờ kể từ khi nhận được đơn đặt hàng.
          - generic [ref=e230]:
            - generic [ref=e231]: Hỗ Trợ Tận Nơi
            - generic [ref=e232]: Dịch vụ kỹ thuật luôn hổ trợ 24/24.
          - generic [ref=e235]:
            - generic [ref=e236]: Giá Cả Cạnh Tranh
            - generic [ref=e237]: Giá cả rẻ hơn các hãng máy in đang cung cấp tại Việt Nam.
      - generic [ref=e239]:
        - generic [ref=e240]:
          - heading "Tất cả sản phẩm" [level=2] [ref=e242]
          - generic [ref=e247]:
            - generic [ref=e249] [cursor=pointer]: Tất cả
            - generic [ref=e251] [cursor=pointer]: Phụ tùng của Máy In Phun hiệu Hitachi
            - generic [ref=e253] [cursor=pointer]: Phụ tùng của Máy In Phun hiệu Domino
            - generic [ref=e255] [cursor=pointer]: Phụ tùng của Máy in phun hiệu Video jet VJ
            - generic [ref=e257] [cursor=pointer]: Phụ tùng của máy in phun hiệu Linx
            - generic [ref=e259] [cursor=pointer]: Phụ tùng của Máy in phun hiệu Markem - Imaje
            - generic [ref=e261] [cursor=pointer]: Phụ tùng của máy in phun hiệu Citronix
            - generic [ref=e263] [cursor=pointer]: Phụ tùng của Máy in phun hiệu Leibinger
            - generic [ref=e265] [cursor=pointer]: Phụ tùng máy in hiệu ZANASI
            - generic [ref=e267] [cursor=pointer]: Phụ tùng của máy in phun hiệu SUNSTONE
            - generic [ref=e269] [cursor=pointer]: Phụ tùng của máy in phun hiệu Fast jet
            - generic [ref=e271] [cursor=pointer]: Phụ tùng của máy in phun hiệu Rotweil
            - generic [ref=e273] [cursor=pointer]: Phụ tùng của Máy in phun hiệu Video jet Excel
            - generic [ref=e275] [cursor=pointer]: Máy in phun hiệu EBS model 6500
            - generic [ref=e277] [cursor=pointer]: Phụ tùng của Máy in phun công nghiệp hiệu KGK
            - generic [ref=e279] [cursor=pointer]: Phụ tùng của Máy in phun hiệu Willett
        - generic [ref=e281]:
          - generic [ref=e282]:
            - generic:
              - link:
                - /url: ""
          - generic [ref=e284]:
            - generic:
              - generic:
                - generic:
                  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1788407259773 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1788407259773-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                    - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1788407259773 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
                - heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1788407259773 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1788407259773 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1788407259773-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                - generic:
                  - generic: 90.000đ
                  - generic: 100.000đ
            - generic:
              - generic:
                - generic:
                  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1788407259773 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1788407259773-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                    - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1788407259773 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
                - heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1788407259773 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1788407259773 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1788407259773-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                - generic:
                  - generic: 90.000đ
                  - generic: 100.000đ
            - generic:
              - generic:
                - generic:
                  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1788407259773 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1788407259773-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                    - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1788407259773 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
                - heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1788407259773 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1788407259773 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1788407259773-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                - generic:
                  - generic: 90.000đ
                  - generic: 100.000đ
            - generic:
              - generic:
                - generic:
                  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1788407259773 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1788407259773-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                    - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1788407259773 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
                - heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1788407259773 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1788407259773 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1788407259773-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                - generic:
                  - generic: 90.000đ
                  - generic: 100.000đ
            - generic:
              - generic:
                - generic:
                  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1788407259773 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1788407259773-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                    - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1788407259773 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
                - heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1788407259773 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1788407259773 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1788407259773-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                - generic:
                  - generic: 90.000đ
                  - generic: 100.000đ
            - generic:
              - generic:
                - generic:
                  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1788407259773 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1788407259773-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                    - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1788407259773 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
                - heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1788407259773 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1788407259773 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1788407259773-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                - generic:
                  - generic: 90.000đ
                  - generic: 100.000đ
        - paragraph [ref=e285]:
          - link "Xem thêm" [ref=e286] [cursor=pointer]:
            - /url: san-pham
      - generic [ref=e291]:
        - link "Phụ Tùng Máy In Công NghiệpTại TP.HCM_Công Ty TNHH Ngân Nhân Phát" [ref=e294] [cursor=pointer]:
          - /url: ""
          - img "Phụ Tùng Máy In Công NghiệpTại TP.HCM_Công Ty TNHH Ngân Nhân Phát" [ref=e295]
        - link "Phụ Tùng Máy In Công NghiệpTại TP.HCM_Công Ty TNHH Ngân Nhân Phát" [ref=e298] [cursor=pointer]:
          - /url: ""
          - img "Phụ Tùng Máy In Công NghiệpTại TP.HCM_Công Ty TNHH Ngân Nhân Phát" [ref=e299]
    - generic [ref=e301]:
      - generic:
        - heading "DỊCH VỤ HỖ TRỢ" [level=2]
        - text: Chúng tôi luôn dành mọi nỗ lực để hoàn thành các công trình đảm bảo
      - generic:
        - generic:
          - generic:
            - generic:
              - generic:
                - generic:
                  - paragraph:
                    - link "Dịch Vụ Cho Thuê Máy In Công Nghiệp|Công ty TNHH Ngân Nhân Phát":
                      - /url: dich-vu-cho-thue-may-in-cong-nghiepcong-ty-tnhh-ngan-nhan-phat
                      - img "Dịch Vụ Cho Thuê Máy In Công Nghiệp|Công ty TNHH Ngân Nhân Phát"
                  - generic:
                    - heading "Dịch Vụ Cho Thuê Máy In Công Nghiệp|Công ty TNHH Ngân Nhân Phát" [level=3]:
                      - link "Dịch Vụ Cho Thuê Máy In Công Nghiệp|Công ty TNHH Ngân Nhân Phát":
                        - /url: dich-vu-cho-thue-may-in-cong-nghiepcong-ty-tnhh-ngan-nhan-phat
                    - paragraph: Cho thuê máy in công nghiệp uy tín tại Ngân Nhân Phát. Tiết kiệm chi phí, thiết bị hiện đại, hỗ trợ 24/7. Liên hệ ngay để tối ưu dây chuyền in ấn sản phẩm.
              - generic:
                - generic:
                  - paragraph:
                    - link "Dịch Vụ Sửa Chữa Và Bảo Trì Máy In Công Nghiệp":
                      - /url: dich-vu-sua-chua-va-bao-tri-may-in-cong-nghiep
                      - img "Dịch Vụ Sửa Chữa Và Bảo Trì Máy In Công Nghiệp"
                  - generic:
                    - heading "Dịch Vụ Sửa Chữa Và Bảo Trì Máy In Công Nghiệp" [level=3]:
                      - link "Dịch Vụ Sửa Chữa Và Bảo Trì Máy In Công Nghiệp":
                        - /url: dich-vu-sua-chua-va-bao-tri-may-in-cong-nghiep
                    - paragraph: Chúng tôi cung cấp dịch vụ sửa chữa và bảo trì chuyên sâu cho các dòng máy in công nghiệp từ các thương hiệu hàng đầu từ kiểm tra định kỳ, bảo trì phòng ngừa,...
              - generic:
                - generic:
                  - paragraph:
                    - link "Cung Cấp Mực In & Dung Môi Chính Hãng|Công Ty TNHH Ngân Nhân Phát":
                      - /url: cung-cap-muc-in-dung-moi-chinh-hangcong-ty-tnhh-ngan-nhan-phat
                      - img "Cung Cấp Mực In & Dung Môi Chính Hãng|Công Ty TNHH Ngân Nhân Phát"
                  - generic:
                    - heading "Cung Cấp Mực In & Dung Môi Chính Hãng|Công Ty TNHH Ngân Nhân Phát" [level=3]:
                      - link "Cung Cấp Mực In & Dung Môi Chính Hãng|Công Ty TNHH Ngân Nhân Phát":
                        - /url: cung-cap-muc-in-dung-moi-chinh-hangcong-ty-tnhh-ngan-nhan-phat
                    - paragraph: Mực in và dung môi là yếu tố cốt lõi quyết định chất lượng bản in và hiệu suất hoạt động của các máy in phun công nghiệp. Ngân Nhân Phát chuyên cung cấp...
              - generic:
                - generic:
                  - paragraph:
                    - link "Thay thế lọc mực định kỳ cho máy in phun hiệu Video jet model 1880":
                      - /url: thay-the-loc-muc-dinh-ky-cho-may-in-phun-hieu-video-jet-model-1880
                      - img "Thay thế lọc mực định kỳ cho máy in phun hiệu Video jet model 1880"
                  - generic:
                    - heading "Thay thế lọc mực định kỳ cho máy in phun hiệu Video jet model 1880" [level=3]:
                      - link "Thay thế lọc mực định kỳ cho máy in phun hiệu Video jet model 1880":
                        - /url: thay-the-loc-muc-dinh-ky-cho-may-in-phun-hieu-video-jet-model-1880
                    - paragraph: Thay thế lọc mực định kỳ cho máy in phun hiệu Video jet model 1880
              - generic:
                - generic:
                  - paragraph:
                    - link "Hướng dẫn thay thế ITM 02 cho máy in phun hiệu Domino model AX350":
                      - /url: huong-dan-thay-the-itm-02-cho-may-in-phun-hieu-domino-model-ax350
                  - generic:
                    - heading "Hướng dẫn thay thế ITM 02 cho máy in phun hiệu Domino model AX350" [level=3]:
                      - link "Hướng dẫn thay thế ITM 02 cho máy in phun hiệu Domino model AX350":
                        - /url: huong-dan-thay-the-itm-02-cho-may-in-phun-hieu-domino-model-ax350
                    - paragraph: Hướng dẫn thay thế ITM 02 cho máy in phun hiệu Domino model AX350
              - generic:
                - generic:
                  - paragraph:
                    - link "Máy in phun ST100":
                      - /url: may-in-phun-st100
                  - generic:
                    - heading "Máy in phun ST100" [level=3]:
                      - link "Máy in phun ST100":
                        - /url: may-in-phun-st100
                    - paragraph: Máy in ST100 được thiết kế để đáp ứng các yêu cầu khắt khe trong môi trường sản xuất công nghiệp. Sử dụng công nghệ in phun liên tục (CIJ), ST100 mang đến...
              - generic:
                - generic:
                  - paragraph:
                    - link "Tặng thêm 1 năm bảo hành khi mua máy in mới":
                      - /url: tang-them-1-nam-bao-hanh-khi-mua-may-in-moi
                  - generic:
                    - heading "Tặng thêm 1 năm bảo hành khi mua máy in mới" [level=3]:
                      - link "Tặng thêm 1 năm bảo hành khi mua máy in mới":
                        - /url: tang-them-1-nam-bao-hanh-khi-mua-may-in-moi
                    - paragraph: Ưa đãi cho khách hàng khi mua máy in mới tại Công ty Ngân Nhân Phát của chúng tôi
              - generic:
                - generic:
                  - paragraph:
                    - link "Thay lọc mực định kỳ miễn phí khi mua mực in – dung môi":
                      - /url: thay-loc-muc-dinh-ky-mien-phi-khi-mua-muc-in-dung-moi
                  - generic:
                    - heading "Thay lọc mực định kỳ miễn phí khi mua mực in – dung môi" [level=3]:
                      - link "Thay lọc mực định kỳ miễn phí khi mua mực in – dung môi":
                        - /url: thay-loc-muc-dinh-ky-mien-phi-khi-mua-muc-in-dung-moi
                    - paragraph: "Dịch vụ tận nơi khách hàng: kỹ thuật Công ty đến kiểm tra sửa lỗi tận nơi khách hàng, nếu khắc phục được tại chỗ sẽ báo phí tương ứng ."
              - generic:
                - generic:
                  - paragraph:
                    - link "Cho thuê máy in dài hạn hoặc chạy theo lô hàng":
                      - /url: cho-thue-may-in-dai-han-hoac-chay-theo-lo-hang
                  - generic:
                    - heading "Cho thuê máy in dài hạn hoặc chạy theo lô hàng" [level=3]:
                      - link "Cho thuê máy in dài hạn hoặc chạy theo lô hàng":
                        - /url: cho-thue-may-in-dai-han-hoac-chay-theo-lo-hang
                    - paragraph: Chuyên cung cấp máy in và cho thuê máy in dài hạn , ngắn hạn hoặc in theo lô hàng với chi phí thấp nhất ! Cho thuê từ 1 máy đến nhiều máy => Với đội ngũ nhân viên ....
              - generic:
                - generic:
                  - paragraph:
                    - link "Dịch vụ sửa chữa 24/7":
                      - /url: dich-vu-sua-chua-247
                  - generic:
                    - heading "Dịch vụ sửa chữa 24/7" [level=3]:
                      - link "Dịch vụ sửa chữa 24/7":
                        - /url: dich-vu-sua-chua-247
                    - paragraph: Dịch vụ sửa máy in tận nơi 24/24 chúng tôi phục vụ cho tất cả các khu vực Củ Chi, TPHCM, Long An.... Có nhiều chi nhánh luôn sẵn sàng chỉ cần khách gọi là có mặt.
    - generic [ref=e303]:
      - generic [ref=e304]:
        - heading "Đăng ký nhận tin" [level=2]
        - generic: Để được chúng tôi tư vấn và cùng với bạn hợp tác thiết kế thành công
        - paragraph: Bạn cũng có thể liên hệ với chúng tôi theo form khi nhấn vào nút “Đăng Ký" bên dưới
      - generic [ref=e305]:
        - generic [ref=e306]:
          - generic [ref=e307]:
            - generic:
              - textbox "Họ tên"
            - generic:
              - textbox "Email"
          - generic [ref=e308]:
            - generic:
              - spinbutton
            - generic:
              - textbox "Địa chỉ"
          - generic:
            - generic:
              - textbox "Nội dung"
        - generic [ref=e309]:
          - generic:
            - button "Đăng ký ngay"
      - list:
        - listitem:
          - link:
            - /url: https://www.facebook.com/profile.php?id=61571802610387&ref=embed_page
        - listitem:
          - link:
            - /url: https://zalo.me/0908589877
        - listitem:
          - link:
            - /url: https://www.tiktok.com/@nghia.cao90?_r=1&_d=secCgYIASAHKAESPgo8dfCBj1W6MqFesvHJ1IpDQktB7%2FboK05GsbOW%2BKEJ4jxHEd1QOf119UkeT8jWSg48BixjG3B9zLanqUxGGgA%3D&checksum=efdf4558130926519cf167efe74caee247efc0d8e971c4d5f0c343fdfacac56b&sec_uid=MS4wLjABAAAA3B6GvGBOjCIdCDqGOnh2wz4kuqnVZd4BeBabv507oBGy2YNpq3Jr_VbfAM5icrYL&sec_user_id=MS4wLjABAAAA3B6GvGBOjCIdCDqGOnh2wz4kuqnVZd4BeBabv507oBGy2YNpq3Jr_VbfAM5icrYL&share_app_id=1180&share_author_id=7413716049362011141&share_link_id=CCF409FE-5B32-419D-A444-70C6EB9831B6&sharer_language=vi&social_share_type=4&source=h5_t&timestamp=1740110423&tt_from=copy&u_code=eg6kf7ake5737f&ug_btm=b0%2Cb0&user_id=7413716049362011141&utm_campaign=client_share&utm_medium=ios&utm_source=copy
        - listitem:
          - link:
            - /url: https://www.youtube.com/@caonghia5657
    - generic [ref=e311]:
      - generic:
        - generic:
          - generic:
            - heading "TIN TỨC & SỰ KIỆN" [level=2]
          - generic:
            - generic:
              - generic:
                - link "Dung môi S1018 chuyên dùng cho máy in phun công nghiệp hiệu Hitachi model UX":
                  - /url: dung-moi-s1018-chuyen-dung-cho-may-in-phun-cong-nghiep-hieu-hitachi-model-ux
              - generic:
                - heading "Dung môi S1018 chuyên dùng cho máy in phun công nghiệp hiệu Hitachi model UX" [level=3]:
                  - link "Dung môi S1018 chuyên dùng cho máy in phun công nghiệp hiệu Hitachi model UX":
                    - /url: dung-moi-s1018-chuyen-dung-cho-may-in-phun-cong-nghiep-hieu-hitachi-model-ux
                - paragraph: 28/08/2026 08:49 AM
                - paragraph: Chuyên dùng cho máy in phun công nghiệp hiệu Hitachi model UX trong dây chuyền sản xuất công nghiệp hiện đại, hệ thống máy in phun date code (máy in phun chữ nhỏ - CIJ) đóng vai trò quyết định đến tiến độ đóng gói và xuất xưởng hàng hóa.
            - generic:
              - generic:
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - generic:
                          - link "5 dấu hiệu cho thấy máy in phun công nghiệp cần thay phụ tùng":
                            - /url: 5-dau-hieu-cho-thay-may-in-phun-cong-nghiep-can-thay-phu-tung
                            - img "5 dấu hiệu cho thấy máy in phun công nghiệp cần thay phụ tùng"
                          - generic:
                            - heading "5 dấu hiệu cho thấy máy in phun công nghiệp cần thay phụ tùng" [level=3]:
                              - link "5 dấu hiệu cho thấy máy in phun công nghiệp cần thay phụ tùng":
                                - /url: 5-dau-hieu-cho-thay-may-in-phun-cong-nghiep-can-thay-phu-tung
                    - generic:
                      - generic:
                        - generic:
                          - link "Mực in IC-2BK124":
                            - /url: muc-in-2bk124
                            - img "Mực in IC-2BK124"
                          - generic:
                            - heading "Mực in IC-2BK124" [level=3]:
                              - link "Mực in IC-2BK124":
                                - /url: muc-in-2bk124
                    - generic:
                      - generic:
                        - generic:
                          - link "Mực in IC-2BK106 dùng cho máy in hiệu Domino model AX 150 , 350":
                            - /url: muc-in-ic-2bk106-dung-cho-may-in-hieu-domino-model-ax-150-350
                            - img "Mực in IC-2BK106 dùng cho máy in hiệu Domino model AX 150 , 350"
                          - generic:
                            - heading "Mực in IC-2BK106 dùng cho máy in hiệu Domino model AX 150 , 350" [level=3]:
                              - link "Mực in IC-2BK106 dùng cho máy in hiệu Domino model AX 150 , 350":
                                - /url: muc-in-ic-2bk106-dung-cho-may-in-hieu-domino-model-ax-150-350
                    - generic:
                      - generic:
                        - generic:
                          - link "Phụ tùng máy in phun WILLETT - Hàng chính hãng, bảo hành đầy đủ":
                            - /url: phu-tung-may-in-phun-willett
                          - generic:
                            - heading "Phụ tùng máy in phun WILLETT - Hàng chính hãng, bảo hành đầy đủ" [level=3]:
                              - link "Phụ tùng máy in phun WILLETT - Hàng chính hãng, bảo hành đầy đủ":
                                - /url: phu-tung-may-in-phun-willett
                    - generic:
                      - generic:
                        - generic:
                          - link "Cung cấp phụ tùng máy in phun Rotweil đầy đủ, giá cạnh tranh tại TP.HCM":
                            - /url: phu-tung-may-in-phun-rotweil
                          - generic:
                            - heading "Cung cấp phụ tùng máy in phun Rotweil đầy đủ, giá cạnh tranh tại TP.HCM" [level=3]:
                              - link "Cung cấp phụ tùng máy in phun Rotweil đầy đủ, giá cạnh tranh tại TP.HCM":
                                - /url: phu-tung-may-in-phun-rotweil
                    - generic:
                      - generic:
                        - generic:
                          - link "Mua phụ tùng máy in phun FAST JET chính hãng, giá tốt - Ngân Nhân Phát":
                            - /url: phu-tung-may-in-phun-fast-jet
                          - generic:
                            - heading "Mua phụ tùng máy in phun FAST JET chính hãng, giá tốt - Ngân Nhân Phát" [level=3]:
                              - link "Mua phụ tùng máy in phun FAST JET chính hãng, giá tốt - Ngân Nhân Phát":
                                - /url: phu-tung-may-in-phun-fast-jet
                    - generic:
                      - generic:
                        - generic:
                          - link "Phụ tùng máy in phun SUNSTONE - Giải pháp thay thế tối ưu thiết bị in":
                            - /url: phu-tung-may-in-phun-sunstone
                          - generic:
                            - heading "Phụ tùng máy in phun SUNSTONE - Giải pháp thay thế tối ưu thiết bị in" [level=3]:
                              - link "Phụ tùng máy in phun SUNSTONE - Giải pháp thay thế tối ưu thiết bị in":
                                - /url: phu-tung-may-in-phun-sunstone
                    - generic:
                      - generic:
                        - generic:
                          - link "Tổng hợp phụ tùng máy in phun ZANASI - Cung cấp chính hãng, giá tốt":
                            - /url: phu-tung-may-in-phun-zanasi-chinh-hang
                          - generic:
                            - heading "Tổng hợp phụ tùng máy in phun ZANASI - Cung cấp chính hãng, giá tốt" [level=3]:
                              - link "Tổng hợp phụ tùng máy in phun ZANASI - Cung cấp chính hãng, giá tốt":
                                - /url: phu-tung-may-in-phun-zanasi-chinh-hang
                    - generic:
                      - generic:
                        - generic:
                          - link "Phụ tùng máy in phun LEIBINGER chính hãng - Đảm bảo hoạt động ổn định, bền bỉ":
                            - /url: phu-tung-may-in-phun-leibinger-chinh-hang
                          - generic:
                            - heading "Phụ tùng máy in phun LEIBINGER chính hãng - Đảm bảo hoạt động ổn định, bền bỉ" [level=3]:
                              - link "Phụ tùng máy in phun LEIBINGER chính hãng - Đảm bảo hoạt động ổn định, bền bỉ":
                                - /url: phu-tung-may-in-phun-leibinger-chinh-hang
        - generic:
          - generic:
            - heading "Video Clip" [level=2]
          - generic:
            - iframe [ref=e312]:
              - generic [active] [ref=f3e1]:
                - generic "YouTube Video Player" [ref=f3e3]
                - generic [ref=f3e5]:
                  - generic:
                    - generic:
                      - button "Play video" [ref=f3e10] [cursor=pointer]
                      - button "Hide player controls" [ref=f3e12] [cursor=pointer]
                      - generic [ref=f3e14]:
                        - generic [ref=f3e19]:
                          - generic [ref=f3e20]:
                            - link "Triển lãm EMA Việt Nam" [ref=f3e21] [cursor=pointer]:
                              - /url: https://www.youtube.com/watch?v=-2nzrE-DDbU
                            - link "PHƯƠNG LÂM" [ref=f3e22] [cursor=pointer]:
                              - /url: /channel/UC4PNDlY4Xm5nymYqd3z8seA
                              - generic [ref=f3e23]: PHƯƠNG LÂM
                          - generic [ref=f3e24]:
                            - button [ref=f3e25] [cursor=pointer]
                            - generic [ref=f3e27]:
                              - generic: PHƯƠNG LÂM
                              - generic: 3 subscribers
                        - generic [ref=f3e28]:
                          - button "Copy link" [ref=f3e31] [cursor=pointer]:
                            - generic [ref=f3e35]:
                              - img
                          - link "Watch on YouTube" [ref=f3e42] [cursor=pointer]:
                            - /url: https://www.youtube.com/watch?v=-2nzrE-DDbU
                            - generic [ref=f3e45]:
                              - text: Watch on
                              - img [ref=f3e47]:
                                - generic [ref=f3e49]:
                                  - img
            - combobox:
              - option "Triển lãm EMA Việt Nam" [selected]
              - option "Công ty Ngân Nhân Phát chuyên cung cấp máy in phun"
              - option "Chuyên cung máy in, mực in, dung môi và phụ tùng cho các loại máy in phun mã số công nghiệp tại thị trường Việt Nam"
              - option "Thay M6 cho máy in Markem 9029"
              - option "Máy in Domino và phụ tùng - mực in - dung môi"
              - option "VIDEO CLIPS 6 PHÚT MÁY ST100 IN PHUN DATE LÊN SẢN PHẨM"
              - option "Máy in phun hiệu HITACHI model PXR"
              - option "CÔNG TY TNHH MTV NGÂN NHÂN PHÁT"
              - option "Mực in và dung môi máy in hiệu HITACHI model UX"
              - option "Máy in phun hiệu Hitachi model PB in được 2 dòng chữ"
              - option "Phụ tùng cho máy in phun hiệu Hitachi"
              - option "Máy in phun hiệu Hitachi đang in phun lên ống nhựa"
              - option "Mực in phun hiệu Video Jet đã qua sử dụng chất lượng còn được 80%. Bảo hành 12 tháng"
              - option "Mực in và dung môi dùng cho các loại máy in phun mã số công nghiệp"
              - 'option "Nguyên lý in phun công nghệ CIJ: Continous Ink Jet"'
              - option "Máy in phun hiệu EBS model 6500"
    - generic [ref=e315]:
      - paragraph [ref=e316]:
        - text: Trong hoạt động sản xuất bao bì và in ấn thương mại, việc duy trì hệ thống máy móc vận hành liên tục, ổn định là yếu tố quyết định đến biên lợi nhuận của doanh nghiệp. Để giải quyết bài toán hao mòn linh kiện cơ khí chính xác, việc tìm kiếm một nhà cung cấp phụ tùng máy in công nghiệp uy tín là mối quan tâm hàng đầu của các nhà xưởng tại miền Nam. Hiểu rõ nhu cầu đó,
        - link "CÔNG TY TNHH NGÂN NHÂN PHÁT" [ref=e317] [cursor=pointer]:
          - /url: https://phutungmayin.com/dich-vu-cho-thue-may-in-cong-nghiepcong-ty-tnhh-ngan-nhan-phat
        - text: tự hào là đơn vị tiên phong chuyên cung cấp các giải pháp vật tư, phụ tùng máy in công nghiệp chất lượng cao tại TP.HCM, đồng hành cùng sự phát triển bền vững của ngành in Việt Nam.
      - heading "Tổng quan về ngành in ấn công nghiệp và nhu cầu phụ tùng chất lượng cao" [level=2] [ref=e318]
      - paragraph [ref=e319]: Ngành in ấn công nghiệp tại Việt Nam, đặc biệt là tại khu vực kinh tế trọng điểm phía Nam như TP.HCM, Bình Dương và Đồng Nai, đang chứng kiến sự tăng trưởng vượt bậc. Từ sản xuất bao bì giấy, bao bì nhựa mềm phức hợp cho đến nhãn mác decal và các ấn phẩm truyền thông, tất cả đều đòi hỏi công nghệ in hiện đại với tốc độ cực cao. Để đáp ứng tiến độ giao hàng và tiêu chuẩn chất lượng khắt khe từ các đối tác quốc tế, các nhà xưởng phải vận hành máy in liên tục 24/7.
      - paragraph [ref=e320]: Quá trình vận hành với cường độ cao khiến các chi tiết cơ khí, linh kiện điện tử và các bộ phận tiếp xúc trực tiếp với mực in, hóa chất chịu áp lực mài mòn rất lớn. Chỉ một sự cố nhỏ ở bánh răng, dao gạt mực hay trục anilox cũng có thể khiến toàn bộ dây chuyền trị giá hàng triệu USD phải dừng hoạt động. Thời gian dừng máy (downtime) ngoài ý muốn không chỉ gây lãng phí nhân công mà còn làm chậm tiến độ đơn hàng, ảnh hưởng trực tiếp đến uy tín của nhà in.
      - paragraph [ref=e321]: Do đó, việc tiếp cận nguồn phụ tùng thay thế chất lượng cao, đúng thông số kỹ thuật và có sẵn tại địa bàn TP.HCM là giải pháp sống còn giúp các doanh nghiệp tối ưu hóa chi phí vận hành và bảo vệ tuổi thọ máy móc lâu dài.
      - heading "Giới thiệu về Công Ty TNHH Ngân Nhân Phát" [level=2] [ref=e322]
      - paragraph [ref=e323]:
        - link "Công Ty TNHH Ngân Nhân Phát" [ref=e324] [cursor=pointer]:
          - /url: https://phutungmayin.com/dich-vu-cho-thue-may-in-cong-nghiepcong-ty-tnhh-ngan-nhan-phat
        - text: là thương hiệu uy tín chuyên nhập khẩu, phân phối và gia công các loại phụ tùng máy in công nghiệp tại thị trường TP.HCM và các tỉnh lân cận. Chúng tôi ra đời với sứ mệnh mang đến giải pháp kỹ thuật toàn diện, giúp các nhà in giải quyết triệt để những khó khăn về linh kiện thay thế.
      - paragraph [ref=e325]: Với triết lý kinh doanh đặt chất lượng sản phẩm và lợi ích của khách hàng lên hàng đầu, Ngân Nhân Phát không ngừng tìm kiếm và hợp tác với các nhà sản xuất phụ tùng gốc (OEM) uy tín từ Đức, Nhật Bản, Đài Loan và Hàn Quốc. Chúng tôi cam kết cung cấp những sản phẩm đạt tiêu chuẩn kỹ thuật nghiêm ngặt, có độ bền cơ học cao và khả năng tương thích hoàn hảo với nhiều dòng máy in phổ biến hiện nay.
      - paragraph [ref=e326]: Đội ngũ nhân sự của Ngân Nhân Phát là những kỹ sư, kỹ thuật viên giàu kinh nghiệm trong ngành cơ khí ngành in. Chúng tôi không chỉ bán hàng, mà còn mang lại dịch vụ tư vấn kỹ thuật chuyên sâu, giúp khách hàng xác định chính xác nguyên nhân hư hỏng và lựa chọn giải pháp thay thế tối ưu nhất về mặt chi phí.
      - heading "Các dòng sản phẩm phụ tùng máy in công nghiệp chủ lực tại Ngân Nhân Phát" [level=2] [ref=e327]
      - paragraph [ref=e328]: Để phục vụ đa dạng nhu cầu của các nhà xưởng, Ngân Nhân Phát xây dựng danh mục sản phẩm phong phú, bao phủ hầu hết các công nghệ in ấn phổ biến hiện nay.
      - heading "Phụ tùng cho máy in Offset" [level=3] [ref=e329]
      - paragraph [ref=e330]: "Công nghệ in Offset vẫn là lựa chọn hàng đầu cho các đơn hàng in ấn bao bì giấy, hộp giấy và catalogue số lượng lớn nhờ chất lượng hình ảnh sắc nét. Ngân Nhân Phát cung cấp đầy đủ các linh kiện thay thế cho các dòng máy Offset nổi tiếng như Heidelberg, Komori, Ryobi, Mitsubishi, Roland:"
      - list [ref=e331]:
        - listitem [ref=e332]:
          - strong [ref=e333]: "Núm hút cao su và bộ phận nạp liệu:"
          - text: Đảm bảo quá trình cấp giấy diễn ra trơn tru, không bị kẹt giấy hoặc nạp đúp, ngay cả ở tốc độ cao.
        - listitem [ref=e334]:
          - strong [ref=e335]: "Tay nhíp kẹp giấy (Grippers):"
          - text: Gia công chính xác từ hợp kim chịu lực, đảm bảo định vị tờ in chuẩn xác tuyệt đối qua từng đơn vị màu.
        - listitem [ref=e336]:
          - strong [ref=e337]: "Lô cao su và lô sàn (Ink & Water Rollers):"
          - text: Chịu dung môi hóa chất tốt, độ đàn hồi ổn định giúp truyền mực và nước đồng đều lên bản in.
        - listitem [ref=e338]:
          - strong [ref=e339]: "Cao su bọc trục ép (Blankets):"
          - text: Có khả năng phục hồi nhanh sau mỗi lượt ép, giảm thiểu hiện tượng bẹp lún, cho hạt tram tròn trịa.
      - heading "Linh kiện máy in Flexo" [level=3] [ref=e340]
      - paragraph [ref=e341]: "In Flexo là công nghệ chủ lực trong sản xuất thùng carton, nhãn mác dạng cuộn và bao bì nhựa mỏng. Chúng tôi cung cấp các linh kiện then chốt giúp nâng cao chất lượng bản in Flexo:"
      - list [ref=e342]:
        - listitem [ref=e343]:
          - strong [ref=e344]: "Dao gạt mực (Doctor Blades):"
          - text: Nhập khẩu từ các thương hiệu hàng đầu, làm bằng thép cacbon hoặc thép không gỉ cao cấp, có độ dẻo dai và khả năng chống mài mòn vượt trội.
        - listitem [ref=e345]:
          - strong [ref=e346]: "Băng keo dán bản (Plate Mounting Tape):"
          - text: Các dòng băng keo xốp chuyên dụng với độ dày và độ đàn hồi đa dạng, giúp cố định bản in photopolymer chắc chắn và giảm rung chấn khi trục quay.
        - listitem [ref=e347]:
          - strong [ref=e348]: "Bơm màng khí nén truyền mực:"
          - text: Đảm bảo dòng mực tuần hoàn liên tục, không bị khô hay tạo bọt khí trong máng mực.
      - heading "Thiết bị máy in ống đồng" [level=3] [ref=e349]
      - paragraph [ref=e350]: "Đối với ngành in bao bì nhựa mềm phức hợp, máy in ống đồng đóng vai trò chủ đạo nhờ tốc độ cực nhanh và khả năng tái tạo màu sắc đồng đều trên hàng triệu sản phẩm. Các linh kiện dành cho dòng máy này đòi hỏi tính chính xác cơ học và khả năng chịu dung môi hóa học rất cao:"
      - list [ref=e351]:
        - listitem [ref=e352]:
          - strong [ref=e353]: "Lô ép cao su (Impression Rollers):"
          - text: Kháng dung môi tuyệt đối (Toluene, Ethyl Acetate), độ cứng Shore A được hiệu chuẩn chính xác để ép đều mực từ các trục khắc trục đồng lên màng nhựa.
        - listitem [ref=e354]:
          - strong [ref=e355]: "Hệ thống đầu sấy và đèn UV:"
          - text: Đảm bảo dung môi bay hơi nhanh chóng hoặc mực UV đóng rắn tức thì ở tốc độ xả màng cao.
        - listitem [ref=e356]:
          - strong [ref=e357]: "Cảm biến chồng màu (Register Sensors):"
          - text: Hệ thống quang học nhạy bén giúp định vị và tự động hiệu chỉnh độ lệch màu giữa các ụ in, giảm thiểu hao hụt phế liệu tối đa.
      - heading "Phụ tùng máy in phun kỹ thuật số khổ lớn" [level=3] [ref=e358]
      - paragraph [ref=e359]: "Phục vụ cho phân khúc quảng cáo, in bạt, in canvas và tem nhãn số lượng nhỏ, Ngân Nhân Phát cung cấp các linh kiện tiêu hao và linh kiện điện tử cho máy in phun kỹ thuật số:"
      - list [ref=e360]:
        - listitem [ref=e361]:
          - strong [ref=e362]: "Đầu phun (Printheads):"
          - text: Các dòng đầu phun Epson, Kyocera, Ricoh chính hãng, cho độ phân giải cao và tuổi thọ hoạt động bền bỉ.
        - listitem [ref=e363]:
          - strong [ref=e364]: "Hệ thống lọc mực và dây dẫn:"
          - text: Ngăn ngừa cặn bẩn bám vào đầu phun, hạn chế tối đa tình trạng nghẹt mực, đứt nét khi đang in.
      - heading "Chi tiết các linh kiện cơ-điện-tử chính trong hệ thống máy in" [level=2] [ref=e365]
      - paragraph [ref=e366]: Để hiểu rõ hơn về chất lượng sản phẩm mà Ngân Nhân Phát cung cấp, chúng ta hãy đi sâu phân tích kỹ thuật của các bộ phận cốt lõi thường xuyên cần bảo dưỡng và thay thế trong hệ thống máy in công nghiệp.
      - heading "Dao gạt mực (Doctor Blades) - \"Trái tim\" của hệ thống phân phối mực" [level=3] [ref=e367]
      - paragraph [ref=e368]: Trong cả công nghệ in Flexo và in ống đồng, dao gạt mực chịu trách nhiệm gạt sạch lớp mực thừa trên bề mặt trục anilox hoặc trục bản in, chỉ để lại lượng mực chính xác trong các giếng mực (cells). Nếu chất lượng dao gạt không tốt, bề mặt trục sẽ bị xước, dẫn đến hiện tượng lem mực, sọc mực trên thành phẩm.
      - paragraph [ref=e369]: "Ngân Nhân Phát cung cấp các loại dao gạt mực với nhiều biên dạng lưỡi dao khác nhau (Lamella, Bevel, Rounded) phù hợp với từng yêu cầu in ấn cụ thể. Vật liệu làm dao được tuyển chọn kỹ lưỡng:"
      - list [ref=e370]:
        - listitem [ref=e371]:
          - strong [ref=e372]: "Thép Carbon tinh khiết:"
          - text: Độ cứng đồng đều, tự mài mòn mịn màng trong quá trình ma sát, giúp bảo vệ trục in không bị trầy xước sâu.
        - listitem [ref=e373]:
          - strong [ref=e374]: "Thép không gỉ (Stainless Steel):"
          - text: Lựa chọn tối ưu khi sử dụng mực nước hoặc mực chứa axit nhẹ, ngăn ngừa hoàn toàn hiện tượng rỉ sét gây bẩn mực.
        - listitem [ref=e375]:
          - strong [ref=e376]: "Dao phủ gốm (Ceramic Coated):"
          - text: Dòng sản phẩm cao cấp nhất với lớp phủ siêu cứng ở phần lưỡi dao, giúp kéo dài tuổi thọ sử dụng lên gấp nhiều lần so với dao thông thường, đặc biệt thích hợp cho các đơn hàng chạy liên tục dài ngày.
      - heading "Trục Anilox và công nghệ kiểm soát lượng mực truyền" [level=3] [ref=e377]
      - paragraph [ref=e378]: Trục Anilox được ví như chiếc thước đo mực của máy in Flexo. Lượng mực truyền lên bản in phụ thuộc hoàn toàn vào thể tích chứa mực (Cell Volume - BCM) và mật độ dòng tram (LPI) trên bề mặt trục. Sau một thời gian hoạt động, các lỗ chứa mực này dễ bị bám cặn mực khô hoặc bị mài mòn do ma sát với dao gạt.
      - paragraph [ref=e379]: Chúng tôi cung cấp dịch vụ phân phối các dòng trục Anilox bọc gốm khắc laser độ chính xác cao. Lớp gốm oxit crom siêu cứng được phun phủ bằng công nghệ plasma, sau đó dùng chùm tia laser để khắc các lỗ chứa mực với hình dáng tối ưu (vạn năng, lục giác hoặc lượn sóng) giúp truyền mực đều đặn, giảm thiểu hiện tượng bắn mực ở tốc độ cao.
      - heading "Lô cao su và Trục ép - Độ đàn hồi và khả năng kháng hóa chất" [level=3] [ref=e380]
      - paragraph [ref=e381]: Trục lô cao su trong máy in không chỉ làm nhiệm vụ truyền mực, truyền nước mà còn trực tiếp tham gia vào quá trình ép in. Do đó, hai chỉ số quan trọng nhất của lô cao su là độ cứng bề mặt (đo bằng thang Shore A) và độ bền hóa học.
      - paragraph [ref=e382]: Sản phẩm lô cao su do Ngân Nhân Phát phân phối và gia công bọc lại đều sử dụng các hợp chất cao su kỹ thuật cao nhập khẩu (như NBR, EPDM, Silicone, Polyurethane). Các hợp chất này được nghiên cứu kỹ lưỡng để không bị trương nở, co rút hay nứt nẻ khi tiếp xúc liên tục với các loại hóa chất tẩy rửa mạnh, cồn isopropyl (IPA), mực UV hay dung môi hữu cơ.
      - heading "Dịch vụ kỹ thuật toàn diện từ Ngân Nhân Phát" [level=2] [ref=e383]
      - paragraph [ref=e384]: Không chỉ dừng lại ở vai trò của một đơn vị thương mại, Ngân Nhân Phát định vị mình là một đối tác kỹ thuật thực thụ của các nhà in. Chúng tôi hiểu rằng, việc mua đúng phụ tùng mới chỉ là một nửa chặng đường; nửa còn lại là làm sao để lắp đặt, vận hành và bảo dưỡng chúng đúng cách nhằm đạt hiệu suất cao nhất.
      - heading "Tư vấn kỹ thuật và lựa chọn linh kiện thay thế chuẩn xác" [level=3] [ref=e385]
      - paragraph [ref=e386]: Nhiều dòng máy in cũ hoặc máy in nhập khẩu nguyên chiếc từ nước ngoài thường gặp khó khăn trong việc tra cứu mã phụ tùng hoặc không còn linh kiện chính hãng từ nhà sản xuất. Đội ngũ kỹ sư của chúng tôi sẽ đến trực tiếp nhà xưởng để đo đạc thông số, kiểm tra bản vẽ kỹ thuật và tư vấn loại phụ tùng thay thế tương đương (aftermarket) có chất lượng tương đương hoặc vượt trội, đảm bảo lắp đặt vừa vặn và vận hành ổn định.
      - heading "Gia công và phục hồi rulo, trục ép theo yêu cầu" [level=3] [ref=e387]
      - paragraph [ref=e388]: "Đối với các loại lô cao su, trục kim loại có kích thước đặc thù hoặc chi phí mua mới quá cao, Ngân Nhân Phát cung cấp dịch vụ gia công chế tạo mới và phục hồi rulo cũ:"
      - list [ref=e389]:
        - listitem [ref=e390]:
          - strong [ref=e391]: "Mài và sửa tâm trục:"
          - text: Đảm bảo độ đồng tâm tuyệt đối, loại bỏ hiện tượng đảo trục gây rung lắc máy khi chạy tốc độ cao.
        - listitem [ref=e392]:
          - strong [ref=e393]: "Bọc lại cao su chất lượng cao:"
          - text: Loại bỏ lớp cao su cũ đã chai cứng, bọc lại lớp cao su mới với độ cứng Shore A chính xác theo yêu cầu kỹ thuật của từng lô (lô mực, lô nước, lô ép).
        - listitem [ref=e394]:
          - strong [ref=e395]: "Mạ chrome cứng bề mặt:"
          - text: Tăng cường độ cứng, khả năng chống mài mòn và chống bám dính cho các trục kim loại dẫn giấy, dẫn màng.
      - heading "Hỗ trợ kỹ thuật khẩn cấp và bảo dưỡng định kỳ" [level=3] [ref=e396]
      - paragraph [ref=e397]: Chúng tôi thấu hiểu áp lực tiến độ của các nhà xưởng sản xuất. Khi xảy ra sự cố kỹ thuật nghiêm trọng liên quan đến phụ tùng, Ngân Nhân Phát luôn sẵn sàng hỗ trợ giao hàng nhanh hỏa tốc tại TP.HCM và cử kỹ thuật viên hỗ trợ chẩn đoán từ xa hoặc trực tiếp tại hiện trường để đưa máy in trở lại hoạt động trong thời gian ngắn nhất.
      - heading "Giải pháp tối ưu chi phí vận hành cho doanh nghiệp in ấn" [level=2] [ref=e398]
      - paragraph [ref=e399]: Trong bối cảnh cạnh tranh giá cả gay gắt của ngành in hiện nay, việc tối ưu hóa chi phí sản xuất là bài toán đau đầu của các nhà quản lý xưởng. Nhiều đơn vị thường chọn mua phụ tùng giá rẻ, không rõ nguồn gốc để tiết kiệm chi phí ban đầu. Tuy nhiên, đây là một sai lầm phổ biến dẫn đến "lợi bất cập hại".
      - paragraph [ref=e400]: Phụ tùng kém chất lượng thường có độ bền thấp, dễ hư hỏng đột xuất, buộc nhà xưởng phải dừng máy liên tục để thay thế. Chi phí nhân công dừng máy, phế liệu phát sinh do máy chạy thử và rủi ro hỏng hóc lan sang các bộ phận đắt tiền khác sẽ lớn hơn rất nhiều so với khoản tiền tiết kiệm được từ việc mua linh kiện giá rẻ.
      - paragraph [ref=e401]: Ngân Nhân Phát mang đến giải pháp tối ưu tổng chi phí sở hữu (Total Cost of Ownership - TCO) bằng cách cung cấp các sản phẩm phụ tùng có độ bền vượt trội với mức giá hợp lý nhất. Việc sử dụng linh kiện chất lượng cao giúp kéo dài chu kỳ bảo dưỡng, giảm số lần dừng máy ngoài ý muốn, từ đó nâng cao sản lượng thực tế và bảo vệ giá trị khấu hao của máy in.
      - paragraph [ref=e402]: Bên cạnh đó, chúng tôi còn hỗ trợ các doanh nghiệp xây dựng kế hoạch dự phòng vật tư tiêu hao (như dao gạt mực, núm hút, dây curoa, vòng bi) một cách khoa học, tránh tình trạng tồn kho quá nhiều gây ứ đọng vốn, nhưng vẫn đảm bảo luôn có sẵn linh kiện thay thế ngay lập tức khi cần thiết.
      - heading "Cam kết chất lượng và uy tín thương hiệu Ngân Nhân Phát" [level=2] [ref=e403]
      - paragraph [ref=e404]: "Với nhiều năm hoạt động trong ngành cung cấp phụ tùng máy in công nghiệp tại TP.HCM, Ngân Nhân Phát đã xây dựng được niềm tin vững chắc đối với hàng trăm khách hàng là các nhà in từ quy mô vừa và nhỏ đến các tập đoàn bao bì lớn. Sự tin tưởng đó được xây dựng dựa trên những cam kết vàng:"
      - list [ref=e405]:
        - listitem [ref=e406]:
          - strong [ref=e407]: "Chất lượng được kiểm chứng:"
          - text: 100% sản phẩm do chúng tôi cung cấp đều trải qua quy trình kiểm tra chất lượng nghiêm ngặt về kích thước hình học, độ cứng vật liệu và độ hoàn thiện bề mặt trước khi bàn giao cho khách hàng.
        - listitem [ref=e408]:
          - strong [ref=e409]: "Chính sách bảo hành rõ ràng:"
          - text: Chúng tôi áp dụng chính sách bảo hành chính hãng và hỗ trợ đổi trả linh hoạt đối với các sản phẩm có lỗi từ nhà sản xuất, mang lại sự an tâm tuyệt đối cho người sử dụng.
        - listitem [ref=e410]:
          - strong [ref=e411]: "Giá cả cạnh tranh và minh bạch:"
          - text: Nhờ mối quan hệ hợp tác trực tiếp với các nhà sản xuất quốc tế không qua trung gian, Ngân Nhân Phát cam kết mang đến mức giá tối ưu nhất cho khách hàng.
        - listitem [ref=e412]:
          - strong [ref=e413]: "Dịch vụ tận tâm:"
          - text: Đội ngũ tư vấn viên và kỹ thuật viên luôn lắng nghe, thấu hiểu khó khăn của khách hàng và phục vụ với thái độ chuyên nghiệp, nhiệt tình nhất.
      - paragraph [ref=e414]: Nếu doanh nghiệp của bạn đang gặp khó khăn trong việc tìm kiếm nguồn phụ tùng máy in công nghiệp chất lượng cao, thường xuyên đối mặt với sự cố dừng máy ngoài ý muốn hoặc muốn tìm kiếm một đối tác kỹ thuật tin cậy để tối ưu hóa quy trình sản xuất, hãy liên hệ ngay với Ngân Nhân Phát. Chúng tôi luôn sẵn sàng đồng hành và mang đến những giải pháp đột phá nhất cho nhà xưởng của bạn.
      - paragraph [ref=e415]:
        - strong [ref=e416]: "Thông tin liên hệ chi tiết:"
      - paragraph [ref=e417]:
        - strong [ref=e418]: Phụ Tùng Máy In Công Nghiệp Tại TP.HCM_Công Ty TNHH Ngân Nhân Phát
        - text: "Địa chỉ: 410/3C, Đường tỉnh lộ 8, Ấp 20, xã Phú Hoà Đông, Tp.HCM"
        - text: "Hotline: 0908589877"
        - text: "Điện thoại: 0908589877"
        - text: "Email: caonghia163@gmail.com"
      - link "Xem thêm" [ref=e421] [cursor=pointer]:
        - /url: javascript:;
        - generic [ref=e422]:
          - text: Xem thêm
          - img [ref=e423]: 
  - generic [ref=e432]:
    - generic [ref=e434]:
      - generic [ref=e435]:
        - paragraph [ref=e436]: Thông tin liên hệ
        - paragraph [ref=e437]: CÔNG TY TNHH NGÂN NHÂN PHÁT
        - generic [ref=e438]:
          - paragraph [ref=e439]:
            - generic [ref=e441]:
              - strong [ref=e442]: "Địa chỉ:"
              - text: 410/3C, Tỉnh lộ 8, Tổ 7, Ấp 20, xã Phú Hoà Đông , Tp.HCM
          - paragraph [ref=e443]:
            - generic [ref=e445]:
              - strong [ref=e446]: "Email:"
              - text: caonghia163@gmail.com
          - paragraph [ref=e447]:
            - generic [ref=e449]:
              - strong [ref=e450]: "Phòng trưng bày sản phẩm:"
              - text: 79 Trương Định , phường Bến Thành , Tp.HCM
          - paragraph [ref=e451]:
            - generic [ref=e453]:
              - strong [ref=e454]: "VPGD:"
              - text: 82/2 Đường 494 , Khu Phố 14 , phường Tăng Nhơn Phú , Tp.HCM
          - paragraph [ref=e455]:
            - generic [ref=e457]:
              - strong [ref=e458]: "VPGD:"
              - text: Số 50 Hương lộ 15, ấp Ngãi Hiệp, xã Hưng Mỹ , tỉnh Vĩnh Long
          - paragraph [ref=e459]:
            - generic [ref=e461]:
              - strong [ref=e462]: VPGD
              - text: ": Lô 117A đường Bàu Mạc 8, phường Liên Chiểu, Thành phố Đà Nẵng"
          - paragraph [ref=e463]:
            - generic [ref=e465]:
              - strong [ref=e466]: "Hotlines:"
              - text: 0908.589877 - 0909.589877 - 0936.589877- 0938.589877
          - paragraph [ref=e467]:
            - generic [ref=e469]:
              - text: "website :"
              - link "phutungmayin.com" [ref=e470] [cursor=pointer]:
                - /url: https://phutungmayin.com/
              - text: "- mucindungmoi.com"
      - link "Phụ Tùng Máy In Công NghiệpTại TP.HCM_Công Ty TNHH Ngân Nhân Phát" [ref=e472] [cursor=pointer]:
        - /url: https://phutungmayin.com/
        - img "Phụ Tùng Máy In Công NghiệpTại TP.HCM_Công Ty TNHH Ngân Nhân Phát" [ref=e473]
      - generic [ref=e474]:
        - paragraph [ref=e475]: Truy cập nhanh
        - list [ref=e476]:
          - listitem [ref=e477]:
            - link "Trang chủ" [ref=e478] [cursor=pointer]:
              - /url: https://phutungmayin.com/
          - listitem [ref=e479]:
            - link "Giới thiệu" [ref=e480] [cursor=pointer]:
              - /url: gioi-thieu
          - listitem [ref=e481]:
            - link "Sản phẩm" [ref=e482] [cursor=pointer]:
              - /url: san-pham
          - listitem [ref=e483]:
            - link "Dịch vụ" [ref=e484] [cursor=pointer]:
              - /url: dich-vu
          - listitem [ref=e485]:
            - link "Tin tức" [ref=e486] [cursor=pointer]:
              - /url: tin-tuc
          - listitem [ref=e487]:
            - link "Liên hệ" [ref=e488] [cursor=pointer]:
              - /url: lien-he
    - generic [ref=e490]:
      - list [ref=e491]:
        - listitem [ref=e492]:
          - link [ref=e493] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61571802610387&ref=embed_page
        - listitem [ref=e494]:
          - link [ref=e495] [cursor=pointer]:
            - /url: https://zalo.me/0908589877
        - listitem [ref=e496]:
          - link [ref=e497] [cursor=pointer]:
            - /url: https://www.tiktok.com/@nghia.cao90?_r=1&_d=secCgYIASAHKAESPgo8dfCBj1W6MqFesvHJ1IpDQktB7%2FboK05GsbOW%2BKEJ4jxHEd1QOf119UkeT8jWSg48BixjG3B9zLanqUxGGgA%3D&checksum=efdf4558130926519cf167efe74caee247efc0d8e971c4d5f0c343fdfacac56b&sec_uid=MS4wLjABAAAA3B6GvGBOjCIdCDqGOnh2wz4kuqnVZd4BeBabv507oBGy2YNpq3Jr_VbfAM5icrYL&sec_user_id=MS4wLjABAAAA3B6GvGBOjCIdCDqGOnh2wz4kuqnVZd4BeBabv507oBGy2YNpq3Jr_VbfAM5icrYL&share_app_id=1180&share_author_id=7413716049362011141&share_link_id=CCF409FE-5B32-419D-A444-70C6EB9831B6&sharer_language=vi&social_share_type=4&source=h5_t&timestamp=1740110423&tt_from=copy&u_code=eg6kf7ake5737f&ug_btm=b0%2Cb0&user_id=7413716049362011141&utm_campaign=client_share&utm_medium=ios&utm_source=copy
        - listitem [ref=e498]:
          - link [ref=e499] [cursor=pointer]:
            - /url: https://www.youtube.com/@caonghia5657
      - generic [ref=e500]: Copyright © CÔNG TY TNHH NGÂN NHÂN PHÁT. All rights reserved. Thiêt kế web MIMA
  - generic [ref=e501]:
    - 'link "Call me: 0908589877" [ref=e502] [cursor=pointer]':
      - /url: tel:0908589877
      - img [ref=e504]
      - generic: "Call me: 0908589877"
    - 'link "Zalo: 0908589877" [ref=e507] [cursor=pointer]':
      - /url: https://zalo.me/0908589877
      - img [ref=e509]
      - generic: "Zalo: 0908589877"
  - text: 
```

# Test source

```ts
  143 | 
  144 |         if (!isInputVisible) {
  145 |             // Trường hợp 2: Ô tìm kiếm bị ẩn, phải rê chuột (hover) hoặc click vào icon kính lúp mới hiện ra
  146 |             console.log("Ô tìm kiếm đang bị ẩn, thử tìm và tương tác với icon search hoặc vùng chứa (container)...");
  147 | 
  148 |             // 1. Thử hover vào các vùng chứa (container) search phổ biến trước (thường dùng CSS :hover)
  149 |             const searchContainers = this.page.locator('.search, .search-box, .search-container, .header-search, .search-wrapper, .search-form');
  150 |             const containerCount = await searchContainers.count();
  151 |             for (let i = 0; i < containerCount; i++) {
  152 |                 const container = searchContainers.nth(i);
  153 |                 if (await container.isVisible().catch(() => false)) {
  154 |                     await container.hover({ force: true }).catch(() => { });
  155 |                     await this.page.waitForTimeout(300);
  156 |                     if (await this.searchInput.first().isVisible().catch(() => false)) return this.fillSearchAndSubmit(keyword);
  157 |                 }
  158 |             }
  159 | 
  160 |             // 2. Thử hover/click vào các nút hoặc icon search phổ biến
  161 |             const searchToggleIcons = this.page.locator(
  162 |                 '.fa-search, .icon-search, [class*="search-icon"], [class*="icon-search"], ' +
  163 |                 'i.search, svg.search, .search-toggle, .search-btn, .btn-search, .header-search-icon, .icon-magnifier, span.search, ' +
  164 |                 '.bi-search, button[onclick*="onSearch"]'
  165 |             );
  166 | 
  167 |             const iconCount = await searchToggleIcons.count();
  168 |             for (let i = 0; i < iconCount; i++) {
  169 |                 const icon = searchToggleIcons.nth(i);
  170 |                 if (await icon.isVisible().catch(() => false)) {
  171 |                     // Thử rê chuột (hover)
  172 |                     await icon.hover({ force: true }).catch(() => { });
  173 |                     await this.page.waitForTimeout(300);
  174 |                     if (await this.searchInput.first().isVisible().catch(() => false)) return this.fillSearchAndSubmit(keyword);
  175 | 
  176 |                     // Nếu vẫn chưa hiện, thử click
  177 |                     await icon.click({ force: true }).catch(() => { });
  178 |                     await this.page.waitForTimeout(300);
  179 |                     if (await this.searchInput.first().isVisible().catch(() => false)) return this.fillSearchAndSubmit(keyword);
  180 |                 }
  181 |             }
  182 | 
  183 |             // 3. Fallback bạo lực: Ép buộc hiện input bằng JavaScript nếu UI chặn
  184 |             console.log("Thử dùng JavaScript để ép hiển thị ô input...");
  185 |             await this.searchInput.first().evaluate((node: HTMLElement) => {
  186 |                 node.style.display = 'block';
  187 |                 node.style.visibility = 'visible';
  188 |                 node.style.opacity = '1';
  189 |                 if (node.parentElement) {
  190 |                     node.parentElement.style.display = 'block';
  191 |                     node.parentElement.style.visibility = 'visible';
  192 |                 }
  193 |             }).catch(() => { });
  194 |             await this.page.waitForTimeout(500);
  195 |         }
  196 | 
  197 |         // Đợi chắc chắn ô input phải hiện lên trước khi gõ
  198 |         await this.fillSearchAndSubmit(keyword);
  199 |     }
  200 | 
  201 |     /**
  202 |      * Hàm phụ trợ dùng để nhập và submit search (dùng chung cho các nhánh phía trên)
  203 |      */
  204 |     private async fillSearchAndSubmit(keyword: string) {
  205 |         const targetInput = this.searchInput.first();
  206 | 
  207 |         // Đợi 2s xem input có tự hiện lên không
  208 |         await targetInput.waitFor({ state: 'visible', timeout: 2000 }).catch(() => { });
  209 | 
  210 |         try {
  211 |             // Dùng { force: true } và giới hạn thời gian cực ngắn để tránh bị treo 15s
  212 |             await targetInput.fill(keyword, { force: true, timeout: 1000 });
  213 |             await targetInput.pressSequentially(' ', { delay: 100 });
  214 |             await this.page.keyboard.press('Backspace');
  215 |         } catch (error) {
  216 |             console.log("Playwright fill thất bại, chuyển sang ép buộc gõ bằng JavaScript nguyên thủy...");
  217 | 
  218 |             // Dùng page.evaluate thay vì locator.evaluate để tránh việc Playwright ngầm đợi element
  219 |             const inputSelector = "input#keyword, input[name='keyword'], input[type='search'], input[name='q'], input[name='search']";
  220 | 
  221 |             await this.page.evaluate(({ selector, text }) => {
  222 |                 const node = document.querySelector(selector) as HTMLInputElement;
  223 |                 if (node) {
  224 |                     node.value = text;
  225 |                     node.dispatchEvent(new Event('input', { bubbles: true }));
  226 |                     node.dispatchEvent(new Event('change', { bubbles: true }));
  227 |                     node.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true, key: ' ' }));
  228 |                 } else {
  229 |                     console.error("Không tìm thấy thẻ input nào trên DOM để bơm chữ!");
  230 |                 }
  231 |             }, { selector: inputSelector, text: keyword });
  232 | 
  233 |             // Bấm thêm dấu backspace và Enter từ phía page
  234 |             await this.page.keyboard.press('Backspace').catch(() => { });
  235 |             await this.page.keyboard.press('Enter').catch(() => { });
  236 |         }
  237 |     }
  238 | 
  239 |     /**
  240 |      * Chờ dropdown search xuất hiện
  241 |      */
  242 |     async waitForDropdown() {
> 243 |         await this.searchResultDropdown.waitFor({ state: 'visible', timeout: 5000 });
      |                                         ^ TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
  244 |     }
  245 | 
  246 |     /**
  247 |      * Lấy danh sách các phần tử chứa kết quả sản phẩm trong dropdown
  248 |      * (Hỗ trợ thẻ a, li, hoặc các div có class thông dụng)
  249 |      */
  250 |     getResultItems(): Locator {
  251 |         return this.searchResultDropdown.locator("a, li, .search-item, .result-item, .autocomplete-suggestion, .item");
  252 |     }
  253 | 
  254 |     /**
  255 |      * Lấy danh sách các thẻ sản phẩm hiển thị trên trang kết quả.
  256 |      * Dùng một list các class CSS phổ biến nhất trong giới thiết kế web.
  257 |      * Cực kỳ hiệu quả cho bài toán multi-tenant.
  258 |      */
  259 |     getProductElementsOnPage(): Locator {
  260 |         return this.page.locator('.product-item, .item-product, .product-card, .col-product, article.product, .product-block, .product-grid-item, .item-box, .product, .name-product');
  261 |     }
  262 | }
  263 | 
```