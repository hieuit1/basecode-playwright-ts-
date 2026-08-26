# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: /index.php (/index.php)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 86/100 dưới ngưỡng 96%. Có 3/21 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e6]:
      - link "Ngọc Xoài Company" [ref=e8] [cursor=pointer]:
        - /url: https://code5.mimadigi.vn/2026/august/ngocxoai_113726W/
        - img "Ngọc Xoài Company" [ref=e9]
      - generic [ref=e11]:
        - textbox "Tìm kiếm..." [ref=e12]
        - paragraph [ref=e13] [cursor=pointer]:
          - generic [ref=e14]: 
      - generic [ref=e15]:
        - img "Email" [ref=e17]
        - generic [ref=e18]: "Email: luom.py.tuyan.phulong@gmail.com"
      - 'link "Hotline Hotline: 0902 217 299" [ref=e19] [cursor=pointer]':
        - /url: "tel:\n                    0902217299"
        - img "Hotline" [ref=e21]
        - generic [ref=e22]:
          - text: "Hotline:"
          - generic [ref=e23]: 0902 217 299
      - link "EN" [ref=e25] [cursor=pointer]:
        - /url: https://code5.mimadigi.vn/2026/august/ngocxoai_113726W/ngon-ngu/en/
    - generic [ref=e26]:
      - generic [ref=e29]:
        - link " Danh mục sản phẩm" [ref=e32] [cursor=pointer]:
          - /url: san-pham
          - generic [ref=e33]: 
          - text: Danh mục sản phẩm
        - list [ref=e35]:
          - listitem
          - listitem [ref=e36]:
            - link "Trang chủ" [ref=e37] [cursor=pointer]:
              - /url: https://code5.mimadigi.vn/2026/august/ngocxoai_113726W/
          - listitem [ref=e38]:
            - link "Giới thiệu" [ref=e39] [cursor=pointer]:
              - /url: gioi-thieu
          - listitem [ref=e40]:
            - link "Dịch vụ" [ref=e41] [cursor=pointer]:
              - /url: dich-vu
          - listitem [ref=e42]:
            - link "Dự án" [ref=e43] [cursor=pointer]:
              - /url: du-an
          - listitem [ref=e44]:
            - link "Đối tác" [ref=e45] [cursor=pointer]:
              - /url: doi-tac
          - listitem [ref=e46]:
            - link "Tuyển dụng" [ref=e47] [cursor=pointer]:
              - /url: tuyen-dung
          - listitem [ref=e48]:
            - link "Tin tức" [ref=e49] [cursor=pointer]:
              - /url: tin-tuc
          - listitem [ref=e50]:
            - link "Liên hệ" [ref=e51] [cursor=pointer]:
              - /url: lien-he
      - text:   
    - generic [ref=e53]:
      - list [ref=e56]:
        - listitem [ref=e57]:
          - link "Thiết bị điện công nghiệp" [ref=e58] [cursor=pointer]:
            - /url: thiet-bi-dien-cong-nghiep
        - listitem [ref=e59]:
          - link "Dụng cụ dùng khí nén" [ref=e60] [cursor=pointer]:
            - /url: dung-cu-dung-khi-nen
        - listitem [ref=e61]:
          - link "Vòng bi (Bạc đạn)" [ref=e62] [cursor=pointer]:
            - /url: vong-bi-bac-dan
        - listitem [ref=e63]:
          - link "Vật tư mài mòn" [ref=e64] [cursor=pointer]:
            - /url: vat-tu-mai-mon
        - listitem [ref=e65]:
          - link "Máy bơm công nghiệp các loại" [ref=e66] [cursor=pointer]:
            - /url: may-bom-cong-nghiep-cac-loai
        - listitem [ref=e67]:
          - link "Vật tư công nghiệp" [ref=e68] [cursor=pointer]:
            - /url: vat-tu-cong-nghiep
        - listitem [ref=e69]:
          - link "Dụng cụ cầm tay dùng điện" [ref=e70] [cursor=pointer]:
            - /url: dung-cu-cam-tay-dung-dien
        - listitem [ref=e71]:
          - link "Vật tư ngành hàn" [ref=e72] [cursor=pointer]:
            - /url: vat-tu-nganh-han
        - listitem [ref=e73]:
          - link "Bảo hộ lao động" [ref=e74] [cursor=pointer]:
            - /url: bao-ho-lao-dong
      - generic [ref=e76]:
        - generic [ref=e79]:
          - link "Slice 12" [ref=e82] [cursor=pointer]:
            - /url: javascript:void(0)
            - img "Slice 12" [ref=e84]
          - link "Slice 11" [ref=e87] [cursor=pointer]:
            - /url: javascript:void(0)
            - img "Slice 11" [ref=e89]
          - link "Slice 10" [ref=e92] [cursor=pointer]:
            - /url: javascript:void(0)
            - img "Slice 10" [ref=e94]
          - link "Slide 9" [ref=e97] [cursor=pointer]:
            - /url: javascript:void(0)
            - img "Slide 9" [ref=e99]
          - link "Slide 9" [ref=e102] [cursor=pointer]:
            - /url: javascript:void(0)
            - img "Slide 9" [ref=e104]
          - link "Slide 8" [ref=e107] [cursor=pointer]:
            - /url: javascript:void(0)
            - img "Slide 8" [ref=e109]
          - link "Slide 4" [ref=e112] [cursor=pointer]:
            - /url: javascript:void(0)
            - img "Slide 4" [ref=e114]
          - link "Slide 1" [ref=e117] [cursor=pointer]:
            - /url: javascript:void(0)
            - img "Slide 1" [ref=e119]
          - link "Slide 2" [ref=e122] [cursor=pointer]:
            - /url: javascript:void(0)
            - img "Slide 2" [ref=e124]
          - link "Slide 4" [ref=e127] [cursor=pointer]:
            - /url: javascript:void(0)
            - img "Slide 4" [ref=e129]
          - link "Slide 3" [ref=e132] [cursor=pointer]:
            - /url: javascript:void(0)
            - img "Slide 3" [ref=e134]
          - link "slider" [ref=e137] [cursor=pointer]:
            - /url: javascript:void(0)
            - img "slider" [ref=e139]
          - link "Slice 12" [ref=e142] [cursor=pointer]:
            - /url: javascript:void(0)
            - img "Slice 12" [ref=e144]
        - generic:
          - button [ref=e145] [cursor=pointer]:
            - img [ref=e146]
          - button [ref=e149] [cursor=pointer]:
            - img [ref=e150]
    - generic [ref=e153]:
      - generic [ref=e156]:
        - generic [ref=e158]:
          - generic [ref=e159]:
            - paragraph [ref=e160]: CÔNG TY TNHH TM DV KỸ THUẬT
            - paragraph [ref=e161]: Ngọc xoài
          - generic [ref=e162]: "Công ty TNHH Thương mại Dịch vụ Kỹ thuật Ngọc Xoài là nhà phân phối chuyên nghiệp thiết bị công nghiệp của các hãng nổi tiếng (ví dụ: Bosch, Mitutoyo, Yamawa…), là nơi mua sắm vật tư thiết bị công nghiệp uy tín hàng đầu. Phương châm kinh doanh của chúng tôi là: UY TÍN HÀNG ĐẦU - CHẤT LƯỢNG ĐẢM BẢO - GIÁ CẢ CẠNH TRANH – GIAO HÀNG NHANH CHÓNG. Chúng tôi luôn lấy tiêu chí \"TẬN TÂM – TÍN NGHĨA\" làm nền tảng phát triển lâu dài và bền vững"
        - generic [ref=e164]:
          - img "Ngọc xoài" [ref=e165]
          - generic [ref=e166]:
            - paragraph [ref=e167]: 10+
            - paragraph [ref=e168]: Năm kinh nghiệm
      - generic [ref=e170]:
        - generic [ref=e171]:
          - heading "Thiết bị điện công nghiệp" [level=2] [ref=e172]
          - paragraph [ref=e173]: Chu Đáo - Tin Cậy
        - generic [ref=e176]:
          - generic:
            - generic:
              - generic:
                - link "Hộp nhựa Boxco IP67, BC-ATP -350X450X220mm":
                  - /url: hop-nhua-boxco-ip67-bc-atp-350x450x220mm
                  - img "Hộp nhựa Boxco IP67, BC-ATP -350X450X220mm"
              - heading "Hộp nhựa Boxco IP67, BC-ATP -350X450X220mm" [level=3]:
                - link "Hộp nhựa Boxco IP67, BC-ATP -350X450X220mm":
                  - /url: hop-nhua-boxco-ip67-bc-atp-350x450x220mm
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
          - generic:
            - generic:
              - generic:
                - link "Relay 840410 S1MN 110VAC 2c/o":
                  - /url: relay-840410-s1mn-110vac-2co
                  - img "Relay 840410 S1MN 110VAC 2c/o"
              - heading "Relay 840410 S1MN 110VAC 2c/o" [level=3]:
                - link "Relay 840410 S1MN 110VAC 2c/o":
                  - /url: relay-840410-s1mn-110vac-2co
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
          - generic:
            - generic:
              - generic:
                - link "Đèn treo trần LED":
                  - /url: den-treo-tran-led
                  - img "Đèn treo trần LED"
              - heading "Đèn treo trần LED" [level=3]:
                - link "Đèn treo trần LED":
                  - /url: den-treo-tran-led
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
          - generic:
            - generic:
              - generic:
                - link "Thiết bị đóng cắt MCB BKN-4P":
                  - /url: thiet-bi-dong-cat-mcb-bkn-4p
                  - img "Thiết bị đóng cắt MCB BKN-4P"
              - heading "Thiết bị đóng cắt MCB BKN-4P" [level=3]:
                - link "Thiết bị đóng cắt MCB BKN-4P":
                  - /url: thiet-bi-dong-cat-mcb-bkn-4p
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
          - generic:
            - generic:
              - generic:
                - link "MCB BKN 2P 32A LS":
                  - /url: mcb-bkn-2p-32a-ls
                  - img "MCB BKN 2P 32A LS"
              - heading "MCB BKN 2P 32A LS" [level=3]:
                - link "MCB BKN 2P 32A LS":
                  - /url: mcb-bkn-2p-32a-ls
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
          - generic:
            - generic:
              - generic:
                - link "CB khối (MCCB) LS ABS1003b-1000A, 65Ka":
                  - /url: cb-khoi-mccb-ls-abs1003b-1000a-65ka
                  - img "CB khối (MCCB) LS ABS1003b-1000A, 65Ka"
              - heading "CB khối (MCCB) LS ABS1003b-1000A, 65Ka" [level=3]:
                - link "CB khối (MCCB) LS ABS1003b-1000A, 65Ka":
                  - /url: cb-khoi-mccb-ls-abs1003b-1000a-65ka
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
          - generic:
            - generic:
              - generic:
                - link "MCCB 3P LS ABS203c 225A (42kA)":
                  - /url: mccb-3p-ls-abs203c-225a-42ka
                  - img "MCCB 3P LS ABS203c 225A (42kA)"
              - heading "MCCB 3P LS ABS203c 225A (42kA)" [level=3]:
                - link "MCCB 3P LS ABS203c 225A (42kA)":
                  - /url: mccb-3p-ls-abs203c-225a-42ka
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
          - generic:
            - generic:
              - generic:
                - link "Dây curoa":
                  - /url: day-curoa
                  - img "Dây curoa"
              - heading "Dây curoa" [level=3]:
                - link "Dây curoa":
                  - /url: day-curoa
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
        - link "Xem thêm " [ref=e179] [cursor=pointer]:
          - /url: thiet-bi-dien-cong-nghiep
          - generic [ref=e180]:
            - text: Xem thêm
            - generic [ref=e181]: 
      - generic [ref=e189]:
        - generic [ref=e190]:
          - heading "Dụng cụ dùng khí nén" [level=2] [ref=e191]
          - paragraph [ref=e192]: Chu Đáo - Tin Cậy
        - generic [ref=e195]:
          - generic:
            - generic:
              - generic:
                - link "Khớp nối kiểu PM (Male)":
                  - /url: khop-noi-kieu-pm-male
                  - img "Khớp nối kiểu PM (Male)"
              - heading "Khớp nối kiểu PM (Male)" [level=3]:
                - link "Khớp nối kiểu PM (Male)":
                  - /url: khop-noi-kieu-pm-male
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
          - generic:
            - generic:
              - generic:
                - link "Khớp nối nhanh kiểu SF":
                  - /url: khop-noi-nhanh-kieu-sf
                  - img "Khớp nối nhanh kiểu SF"
              - heading "Khớp nối nhanh kiểu SF" [level=3]:
                - link "Khớp nối nhanh kiểu SF":
                  - /url: khop-noi-nhanh-kieu-sf
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
          - generic:
            - generic:
              - generic:
                - link "Khớp nối nhanh kiểu SH":
                  - /url: khop-noi-nhanh-kieu-sh
                  - img "Khớp nối nhanh kiểu SH"
              - heading "Khớp nối nhanh kiểu SH" [level=3]:
                - link "Khớp nối nhanh kiểu SH":
                  - /url: khop-noi-nhanh-kieu-sh
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
          - generic:
            - generic:
              - generic:
                - link "Máy vặn vít 1/4":
                  - /url: may-van-vit-14-kawasaki-kpt-85id
                  - img "Máy vặn vít 1/4"
              - heading "Máy vặn vít 1/4\" Kawasaki KPT-85ID" [level=3]:
                - link "Máy vặn vít 1/4\" Kawasaki KPT-85ID":
                  - /url: may-van-vit-14-kawasaki-kpt-85id
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
          - generic:
            - generic:
              - generic:
                - link "Máy vặn vít 1/4":
                  - /url: may-van-vit-14-kawasaki-kpt-12id
                  - img "Máy vặn vít 1/4"
              - heading "Máy vặn vít 1/4\" Kawasaki KPT-12ID" [level=3]:
                - link "Máy vặn vít 1/4\" Kawasaki KPT-12ID":
                  - /url: may-van-vit-14-kawasaki-kpt-12id
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
          - generic:
            - generic:
              - generic:
                - link "Súng vặn bu lông kingtony 1":
                  - /url: sung-van-bu-long-kingtony-1-2440nm-33831-180
                  - img "Súng vặn bu lông kingtony 1"
              - heading "Súng vặn bu lông kingtony 1\" 2440Nm 33831-180" [level=3]:
                - link "Súng vặn bu lông kingtony 1\" 2440Nm 33831-180":
                  - /url: sung-van-bu-long-kingtony-1-2440nm-33831-180
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
          - generic:
            - generic:
              - generic:
                - link "Máy mài khuôn 6mm đầu trụ Kawasaki KPT-NG25A-CR":
                  - /url: may-mai-khuon-6mm-dau-tru-kawasaki-kpt-ng25a-cr
                  - img "Máy mài khuôn 6mm đầu trụ Kawasaki KPT-NG25A-CR"
              - heading "Máy mài khuôn 6mm đầu trụ Kawasaki KPT-NG25A-CR" [level=3]:
                - link "Máy mài khuôn 6mm đầu trụ Kawasaki KPT-NG25A-CR":
                  - /url: may-mai-khuon-6mm-dau-tru-kawasaki-kpt-ng25a-cr
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
          - generic:
            - generic:
              - generic:
                - link "Máy khoan khí nén 3/8”(10mm) Kawasaki KPT-62SD":
                  - /url: may-khoan-khi-nen-3810mm-kawasaki-kpt-62sd
                  - img "Máy khoan khí nén 3/8”(10mm) Kawasaki KPT-62SD"
              - heading "Máy khoan khí nén 3/8”(10mm) Kawasaki KPT-62SD" [level=3]:
                - link "Máy khoan khí nén 3/8”(10mm) Kawasaki KPT-62SD":
                  - /url: may-khoan-khi-nen-3810mm-kawasaki-kpt-62sd
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
        - link "Xem thêm " [ref=e198] [cursor=pointer]:
          - /url: dung-cu-dung-khi-nen
          - generic [ref=e199]:
            - text: Xem thêm
            - generic [ref=e200]: 
      - generic [ref=e208]:
        - generic [ref=e209]:
          - heading "Vật tư mài mòn" [level=2] [ref=e210]
          - paragraph [ref=e211]: Chu Đáo - Tin Cậy
        - generic [ref=e214]:
          - generic:
            - generic:
              - generic:
                - link "MŨI KHOAN RÚT LÕI BÊ TÔNG UNIKA LOẠI DC":
                  - /url: mui-khoan-rut-loi-be-tong-unika-loai-dc
                  - img "MŨI KHOAN RÚT LÕI BÊ TÔNG UNIKA LOẠI DC"
              - heading "MŨI KHOAN RÚT LÕI BÊ TÔNG UNIKA LOẠI DC" [level=3]:
                - link "MŨI KHOAN RÚT LÕI BÊ TÔNG UNIKA LOẠI DC":
                  - /url: mui-khoan-rut-loi-be-tong-unika-loai-dc
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
          - generic:
            - generic:
              - generic:
                - link "MŨI KHOAN RÚT LÕI TƯỜNG GẠCH UNIKA LOẠI VC":
                  - /url: mui-khoan-rut-loi-tuong-gach-unika-loai-vc
                  - img "MŨI KHOAN RÚT LÕI TƯỜNG GẠCH UNIKA LOẠI VC"
              - heading "MŨI KHOAN RÚT LÕI TƯỜNG GẠCH UNIKA LOẠI VC" [level=3]:
                - link "MŨI KHOAN RÚT LÕI TƯỜNG GẠCH UNIKA LOẠI VC":
                  - /url: mui-khoan-rut-loi-tuong-gach-unika-loai-vc
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
          - generic:
            - generic:
              - generic:
                - link "Đĩa đánh bóng nhật bản HF02 Yanase":
                  - /url: dia-danh-bong-nhat-ban-hf02-yanase
                  - img "Đĩa đánh bóng nhật bản HF02 Yanase"
              - heading "Đĩa đánh bóng nhật bản HF02 Yanase" [level=3]:
                - link "Đĩa đánh bóng nhật bản HF02 Yanase":
                  - /url: dia-danh-bong-nhat-ban-hf02-yanase
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
          - generic:
            - generic:
              - generic:
                - link "Đĩa đánh bóng nhật bản TI07 Yanase":
                  - /url: dia-danh-bong-nhat-ban-ti07-yanase
                  - img "Đĩa đánh bóng nhật bản TI07 Yanase"
              - heading "Đĩa đánh bóng nhật bản TI07 Yanase" [level=3]:
                - link "Đĩa đánh bóng nhật bản TI07 Yanase":
                  - /url: dia-danh-bong-nhat-ban-ti07-yanase
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
          - generic:
            - generic:
              - generic:
                - link "Đá cắt kim loại DeWalt DWA8011R 355x3x25.4mm":
                  - /url: da-cat-kim-loai-dewalt-dwa8011r-355x3x254mm
                  - img "Đá cắt kim loại DeWalt DWA8011R 355x3x25.4mm"
              - heading "Đá cắt kim loại DeWalt DWA8011R 355x3x25.4mm" [level=3]:
                - link "Đá cắt kim loại DeWalt DWA8011R 355x3x25.4mm":
                  - /url: da-cat-kim-loai-dewalt-dwa8011r-355x3x254mm
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
          - generic:
            - generic:
              - generic:
                - link "Đá Cắt Kim Cương Kinik":
                  - /url: da-cat-kim-cuong-kinik
                  - img "Đá Cắt Kim Cương Kinik"
              - heading "Đá Cắt Kim Cương Kinik" [level=3]:
                - link "Đá Cắt Kim Cương Kinik":
                  - /url: da-cat-kim-cuong-kinik
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
        - link "Xem thêm " [ref=e217] [cursor=pointer]:
          - /url: vat-tu-mai-mon
          - generic [ref=e218]:
            - text: Xem thêm
            - generic [ref=e219]: 
      - generic [ref=e227]:
        - generic [ref=e228]:
          - heading "Dụng cụ cầm tay dùng điện" [level=2] [ref=e229]
          - paragraph [ref=e230]: Chu Đáo - Tin Cậy
        - generic [ref=e233]:
          - generic:
            - generic:
              - generic:
                - link "Máy khoan bê tông dùng pin Lithium 20V Total TRHLI202287":
                  - /url: may-khoan-be-tong-dung-pin-lithium-20v-total-trhli202287
                  - img "Máy khoan bê tông dùng pin Lithium 20V Total TRHLI202287"
              - heading "Máy khoan bê tông dùng pin Lithium 20V Total TRHLI202287" [level=3]:
                - link "Máy khoan bê tông dùng pin Lithium 20V Total TRHLI202287":
                  - /url: may-khoan-be-tong-dung-pin-lithium-20v-total-trhli202287
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
          - generic:
            - generic:
              - generic:
                - link "Máy Khoan dùng pin Lithium 20V TOTAL TDLI20024":
                  - /url: may-khoan-dung-pin-lithium-20v-total-tdli20024
                  - img "Máy Khoan dùng pin Lithium 20V TOTAL TDLI20024"
              - heading "Máy Khoan dùng pin Lithium 20V TOTAL TDLI20024" [level=3]:
                - link "Máy Khoan dùng pin Lithium 20V TOTAL TDLI20024":
                  - /url: may-khoan-dung-pin-lithium-20v-total-tdli20024
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
          - generic:
            - generic:
              - generic:
                - link "MÁY MÀI GÓC 100MM DÙNG PIN 18V BOSCH GWS 18V-10":
                  - /url: may-mai-goc-100mm-dung-pin-18v-bosch-gws-18v-10
                  - img "MÁY MÀI GÓC 100MM DÙNG PIN 18V BOSCH GWS 18V-10"
              - heading "MÁY MÀI GÓC 100MM DÙNG PIN 18V BOSCH GWS 18V-10" [level=3]:
                - link "MÁY MÀI GÓC 100MM DÙNG PIN 18V BOSCH GWS 18V-10":
                  - /url: may-mai-goc-100mm-dung-pin-18v-bosch-gws-18v-10
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
          - generic:
            - generic:
              - generic:
                - link "Máy mài goc Bosch GWS 7-100ET":
                  - /url: may-mai-goc-bosch-gws-7-100et
                  - img "Máy mài goc Bosch GWS 7-100ET"
              - heading "Máy mài goc Bosch GWS 7-100ET" [level=3]:
                - link "Máy mài goc Bosch GWS 7-100ET":
                  - /url: may-mai-goc-bosch-gws-7-100et
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
          - generic:
            - generic:
              - generic:
                - link "Máy khoan đa năng với hệ thống hút bụi Makita HR2652":
                  - /url: may-khoan-da-nang-voi-he-thong-hut-bui-makita-hr2652
                  - img "Máy khoan đa năng với hệ thống hút bụi Makita HR2652"
              - heading "Máy khoan đa năng với hệ thống hút bụi Makita HR2652" [level=3]:
                - link "Máy khoan đa năng với hệ thống hút bụi Makita HR2652":
                  - /url: may-khoan-da-nang-voi-he-thong-hut-bui-makita-hr2652
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
          - generic:
            - generic:
              - generic:
                - link "Máy khoan Makita DHR242RFJ":
                  - /url: may-khoan-makita-dhr242rfj
                  - img "Máy khoan Makita DHR242RFJ"
              - heading "Máy khoan Makita DHR242RFJ" [level=3]:
                - link "Máy khoan Makita DHR242RFJ":
                  - /url: may-khoan-makita-dhr242rfj
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
          - generic:
            - generic:
              - generic:
                - link "Máy khoan pin Makita 36V":
                  - /url: may-khoan-pin-makita-36v
                  - img "Máy khoan pin Makita 36V"
              - heading "Máy khoan pin Makita 36V" [level=3]:
                - link "Máy khoan pin Makita 36V":
                  - /url: may-khoan-pin-makita-36v
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
          - generic:
            - generic:
              - generic:
                - link "Máy khoan động lực Bosch GSB 550":
                  - /url: may-khoan-dong-luc-bosch-gsb-550
                  - img "Máy khoan động lực Bosch GSB 550"
              - heading "Máy khoan động lực Bosch GSB 550" [level=3]:
                - link "Máy khoan động lực Bosch GSB 550":
                  - /url: may-khoan-dong-luc-bosch-gsb-550
              - paragraph:
                - text: "Giá:"
                - generic: Liên hệ
        - link "Xem thêm " [ref=e236] [cursor=pointer]:
          - /url: dung-cu-cam-tay-dung-dien
          - generic [ref=e237]:
            - text: Xem thêm
            - generic [ref=e238]: 
      - generic [ref=e247]:
        - generic:
          - generic:
            - heading "Dịch vụ nổi bật" [level=2]
            - paragraph: Chu Đáo - Tin Cậy
          - generic:
            - link "Ngọc Xoài Company":
              - /url: dich-vu
              - img "Ngọc Xoài Company"
        - generic:
          - generic:
            - generic:
              - listbox:
                - option:
                  - generic:
                    - generic:
                      - heading [level=3]:
                        - link:
                          - /url: thay-mai-ton-va-xa-go
                          - text: 1. Thay mái tôn và xà gồ
                      - generic: Thay mái tôn và xà gồ
                    - generic:
                      - link:
                        - /url: thay-mai-ton-va-xa-go
                        - img
                - option "2. Vệ sinh nhà xưởng Là một quy trình quan trọng giúp duy trì môi trường làm việc an toàn, sạch sẽ và hiệu quả Vệ sinh nhà xưởng":
                  - generic:
                    - generic:
                      - heading "2. Vệ sinh nhà xưởng" [level=3]:
                        - link "2. Vệ sinh nhà xưởng":
                          - /url: ve-sinh-nha-xuong
                      - generic: Là một quy trình quan trọng giúp duy trì môi trường làm việc an toàn, sạch sẽ và hiệu quả
                    - generic:
                      - link "Vệ sinh nhà xưởng":
                        - /url: ve-sinh-nha-xuong
                        - img "Vệ sinh nhà xưởng"
                - option "3. Chăm sóc cảnh quan Quá trình quản lý và duy trì vẻ đẹp, sức khỏe và chức năng của không gian ngoài trời như vườn, công viên, khuôn viên công cộng hoặc khu vực sân vườn cá nhân Chăm sóc cảnh quan":
                  - generic:
                    - generic:
                      - heading "3. Chăm sóc cảnh quan" [level=3]:
                        - link "3. Chăm sóc cảnh quan":
                          - /url: cham-soc-canh-quan
                      - generic: Quá trình quản lý và duy trì vẻ đẹp, sức khỏe và chức năng của không gian ngoài trời như vườn, công viên, khuôn viên công cộng hoặc khu vực sân vườn cá nhân
                    - generic:
                      - link "Chăm sóc cảnh quan":
                        - /url: cham-soc-canh-quan
                        - img "Chăm sóc cảnh quan"
                - option "4. Cung ứng nhân lực Đây là một trong những phần quan trọng của quản lý nhân sự, đảm bảo rằng các vị trí trong tổ chức được lấp đầy bởi những người lao động phù hợp, với các kỹ năng và kinh nghiệm cần thiết. Cung ứng nhân lực":
                  - generic:
                    - generic:
                      - heading "4. Cung ứng nhân lực" [level=3]:
                        - link "4. Cung ứng nhân lực":
                          - /url: cung-ung-nhan-luc
                      - generic: Đây là một trong những phần quan trọng của quản lý nhân sự, đảm bảo rằng các vị trí trong tổ chức được lấp đầy bởi những người lao động phù hợp, với các kỹ năng và kinh nghiệm cần thiết.
                    - generic:
                      - link "Cung ứng nhân lực":
                        - /url: cung-ung-nhan-luc
                        - img "Cung ứng nhân lực"
                - option "5. Lắp đặt và điều chỉnh thiết bị Là quá trình bao gồm các bước từ chuẩn bị, lắp đặt các thiết bị vào đúng vị trí, đến việc cấu hình và điều chỉnh chúng để hoạt động đúng cách theo yêu cầu Lắp đặt và điều chỉnh thiết bị":
                  - generic:
                    - generic:
                      - heading "5. Lắp đặt và điều chỉnh thiết bị" [level=3]:
                        - link "5. Lắp đặt và điều chỉnh thiết bị":
                          - /url: lap-dat-va-dieu-chinh-thiet-bi
                      - generic: Là quá trình bao gồm các bước từ chuẩn bị, lắp đặt các thiết bị vào đúng vị trí, đến việc cấu hình và điều chỉnh chúng để hoạt động đúng cách theo yêu cầu
                    - generic:
                      - link "Lắp đặt và điều chỉnh thiết bị":
                        - /url: lap-dat-va-dieu-chinh-thiet-bi
                        - img "Lắp đặt và điều chỉnh thiết bị"
      - generic [ref=e249]:
        - generic [ref=e250]:
          - heading "Dự án" [level=2] [ref=e251]
          - paragraph [ref=e252]: Chu Đáo - Tin Cậy
        - generic [ref=e255]:
          - generic [ref=e257]:
            - link "Thay mái tôn và Xà gồ CÔNG TY TRÁCH NHIỆM HỮU HẠN DỆT MAY ECLAT VIỆT NAM." [ref=e259] [cursor=pointer]:
              - /url: thay-mai-ton-va-xa-go-chuyen-nghiep
              - img "Thay mái tôn và Xà gồ CÔNG TY TRÁCH NHIỆM HỮU HẠN DỆT MAY ECLAT VIỆT NAM." [ref=e260]
            - generic [ref=e261]:
              - heading "Thay mái tôn và Xà gồ CÔNG TY TRÁCH NHIỆM HỮU HẠN DỆT MAY ECLAT VIỆT NAM." [level=3] [ref=e262]:
                - link "Thay mái tôn và Xà gồ CÔNG TY TRÁCH NHIỆM HỮU HẠN DỆT MAY ECLAT VIỆT NAM." [ref=e263] [cursor=pointer]:
                  - /url: thay-mai-ton-va-xa-go-chuyen-nghiep
              - generic [ref=e264]: Thay mái tôn và Xà gồ
              - link "Xem thêm" [ref=e266] [cursor=pointer]:
                - /url: thay-mai-ton-va-xa-go-chuyen-nghiep
          - generic [ref=e268]:
            - link "Gia công chế tạo thiết bị cơ khí" [ref=e270] [cursor=pointer]:
              - /url: gia-cong-che-tao-thiet-bi-co-khi
              - img "Gia công chế tạo thiết bị cơ khí" [ref=e271]
            - generic [ref=e272]:
              - heading "Gia công chế tạo thiết bị cơ khí" [level=3] [ref=e273]:
                - link "Gia công chế tạo thiết bị cơ khí" [ref=e274] [cursor=pointer]:
                  - /url: gia-cong-che-tao-thiet-bi-co-khi
              - generic [ref=e275]: Quy trình sản xuất các chi tiết, thiết bị hoặc hệ thống cơ khí nhằm phục vụ cho các ngành công nghiệp khác nhau như ô tô, hàng không, điện lực, nông nghiệp, và xây dựng
              - link "Xem thêm" [ref=e277] [cursor=pointer]:
                - /url: gia-cong-che-tao-thiet-bi-co-khi
          - generic [ref=e279]:
            - link "Cung cấp nguồn nhân lực" [ref=e281] [cursor=pointer]:
              - /url: cung-cap-nguon-nhan-luc
              - img "Cung cấp nguồn nhân lực" [ref=e282]
            - generic [ref=e283]:
              - heading "Cung cấp nguồn nhân lực" [level=3] [ref=e284]:
                - link "Cung cấp nguồn nhân lực" [ref=e285] [cursor=pointer]:
                  - /url: cung-cap-nguon-nhan-luc
              - generic [ref=e286]: Quá trình cung cấp nguồn nhân lực bao gồm việc tuyển dụng, đào tạo và phát triển các kỹ năng của nhân viên nhằm đảm bảo rằng tổ chức có đủ nguồn lực và kỹ năng cần thiết để đáp ứng mục tiêu kinh doanh
              - link "Xem thêm" [ref=e288] [cursor=pointer]:
                - /url: cung-cap-nguon-nhan-luc
          - generic [ref=e290]:
            - link "Thi công và bảo dưỡng cảnh quan Thuận An Bình Dương" [ref=e292] [cursor=pointer]:
              - /url: thi-cong-va-bao-duong-canh-quan-thuan-an-binh-duong
              - img "Thi công và bảo dưỡng cảnh quan Thuận An Bình Dương" [ref=e293]
            - generic [ref=e294]:
              - heading "Thi công và bảo dưỡng cảnh quan Thuận An Bình Dương" [level=3] [ref=e295]:
                - link "Thi công và bảo dưỡng cảnh quan Thuận An Bình Dương" [ref=e296] [cursor=pointer]:
                  - /url: thi-cong-va-bao-duong-canh-quan-thuan-an-binh-duong
              - generic [ref=e297]: Là quy trình quan trọng trong việc xây dựng và duy trì không gian xanh, giúp tạo nên môi trường sống thoải mái và bền vững
              - link "Xem thêm" [ref=e299] [cursor=pointer]:
                - /url: thi-cong-va-bao-duong-canh-quan-thuan-an-binh-duong
          - generic [ref=e301]:
            - link "Thi công và bảo dưỡng cảnh quan Bến Lức" [ref=e303] [cursor=pointer]:
              - /url: thi-cong-va-bao-duong-canh-quan-ben-luc
              - img "Thi công và bảo dưỡng cảnh quan Bến Lức" [ref=e304]
            - generic [ref=e305]:
              - heading "Thi công và bảo dưỡng cảnh quan Bến Lức" [level=3] [ref=e306]:
                - link "Thi công và bảo dưỡng cảnh quan Bến Lức" [ref=e307] [cursor=pointer]:
                  - /url: thi-cong-va-bao-duong-canh-quan-ben-luc
              - generic [ref=e308]: Là quy trình quan trọng trong việc xây dựng và duy trì không gian xanh, giúp tạo nên môi trường sống thoải mái và bền vững
              - link "Xem thêm" [ref=e310] [cursor=pointer]:
                - /url: thi-cong-va-bao-duong-canh-quan-ben-luc
          - generic [ref=e312]:
            - link "Thi công và bảo dưỡng cảnh quan Quận 7" [ref=e314] [cursor=pointer]:
              - /url: thi-cong-va-bao-duong-canh-quan-quan-7
              - img "Thi công và bảo dưỡng cảnh quan Quận 7" [ref=e315]
            - generic [ref=e316]:
              - heading "Thi công và bảo dưỡng cảnh quan Quận 7" [level=3] [ref=e317]:
                - link "Thi công và bảo dưỡng cảnh quan Quận 7" [ref=e318] [cursor=pointer]:
                  - /url: thi-cong-va-bao-duong-canh-quan-quan-7
              - generic [ref=e319]: Quy trình quan trọng trong việc xây dựng và duy trì không gian xanh, giúp tạo nên môi trường sống thoải mái và bền vững
              - link "Xem thêm" [ref=e321] [cursor=pointer]:
                - /url: thi-cong-va-bao-duong-canh-quan-quan-7
      - generic:
        - generic:
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic:
                    - link "NTN":
                      - /url: javascript:;
                      - img "NTN"
                - generic:
                  - generic:
                    - link "KOYO":
                      - /url: javascript:;
                      - img "KOYO"
                - generic:
                  - generic:
                    - link "IKO":
                      - /url: javascript:;
                      - img "IKO"
                - generic:
                  - generic:
                    - link "TIMKEN":
                      - /url: javascript:;
                      - img "TIMKEN"
                - generic:
                  - generic:
                    - link "ASAHI":
                      - /url: javascript:;
                      - img "ASAHI"
                - generic:
                  - generic:
                    - link "NACHI":
                      - /url: javascript:;
                      - img "NACHI"
                - generic:
                  - generic:
                    - link "Total":
                      - /url: javascript:;
                      - img "Total"
                - generic:
                  - generic:
                    - link "Bosch":
                      - /url: javascript:;
                      - img "Bosch"
                - generic:
                  - generic:
                    - link "Makita":
                      - /url: javascript:;
                      - img "Makita"
                - generic:
                  - generic:
                    - link "MITSUBISHI ELECTRIC":
                      - /url: javascript:;
                      - img "MITSUBISHI ELECTRIC"
                - generic:
                  - generic:
                    - link "IDEC":
                      - /url: javascript:;
                      - img "IDEC"
                - generic:
                  - generic:
                    - link "PANASONIC":
                      - /url: javascript:;
                      - img "PANASONIC"
                - generic:
                  - generic:
                    - link "CADIVI":
                      - /url: javascript:;
                      - img "CADIVI"
                - generic:
                  - generic:
                    - link "SINO":
                      - /url: javascript:;
                      - img "SINO"
                - generic:
                  - generic:
                    - link "PARAGON":
                      - /url: javascript:;
                      - img "PARAGON"
                - generic:
                  - generic:
                    - link "PHILIPS":
                      - /url: javascript:;
                      - img "PHILIPS"
                - generic:
                  - generic:
                    - link "MPE":
                      - /url: javascript:;
                      - img "MPE"
                - generic:
                  - generic:
                    - link "Rang Dong":
                      - /url: javascript:;
                      - img "Rang Dong"
                - generic:
                  - generic:
                    - link "SKF":
                      - /url: javascript:;
                      - img "SKF"
                - generic:
                  - generic:
                    - link "NSK":
                      - /url: javascript:;
                      - img "NSK"
                - generic:
                  - generic:
                    - link "NTN":
                      - /url: javascript:;
                      - img "NTN"
                - generic:
                  - generic:
                    - link "KOYO":
                      - /url: javascript:;
                      - img "KOYO"
                - generic:
                  - generic:
                    - link "IKO":
                      - /url: javascript:;
                      - img "IKO"
                - generic:
                  - generic:
                    - link "TIMKEN":
                      - /url: javascript:;
                      - img "TIMKEN"
                - generic:
                  - generic:
                    - link "ASAHI":
                      - /url: javascript:;
                      - img "ASAHI"
                - generic:
                  - generic:
                    - link "NACHI":
                      - /url: javascript:;
                      - img "NACHI"
                - generic:
                  - generic:
                    - link "Total":
                      - /url: javascript:;
                      - img "Total"
                - generic:
                  - generic:
                    - link "Bosch":
                      - /url: javascript:;
                      - img "Bosch"
                - generic:
                  - generic:
                    - link "Makita":
                      - /url: javascript:;
                      - img "Makita"
                - generic:
                  - generic:
                    - link "MITSUBISHI ELECTRIC":
                      - /url: javascript:;
                      - img "MITSUBISHI ELECTRIC"
                - generic:
                  - generic:
                    - link "IDEC":
                      - /url: javascript:;
                      - img "IDEC"
                - generic:
                  - generic:
                    - link "PANASONIC":
                      - /url: javascript:;
                      - img "PANASONIC"
          - generic:
            - button:
              - img
            - button:
              - img
      - generic [ref=e323]:
        - generic:
          - paragraph:
            - strong: V
            - text: ới phương châm
            - strong: UY TÍN CHẤT LƯỢNG
            - text: ","
            - strong: GIÁ CẢ CẠNH TRANH
            - text: và
            - strong: GIAO HÀNG NHANH CHÓNG
            - text: .
            - text: "Đây là nơi mua sắm vật tư thiết bị công nghiệp uy tín hàng đầu chuyên cung cấp các loại máy và phụ tùng máy, thiết bị công trình, thiết bị đo lường, dụng cụ điện, phụ tùng, dụng cụ, vật tư cho các ngành công nghiệp. Đặc biệt là các thiết bị phục vụ các ngành: Xây dựng cầu đường, xây dựng công nghiệp, Cơ khí, Đóng tàu, Lắp ráp - Sửa chữa ôtô - xe máy….Với công ty chữ \"Tín\" luôn được đặt lên hàng đầu. Công ty liên tục có những chính sách khách hàng, chính sách sản phẩm và dịch vụ có tính chất đột phá có tác động mạnh mẽ tới tư duy thương hiệu. Luôn cung cấp hàng hóa chính hãng, có nguồn gốc xuất xứ rõ ràng, bảo đảm chất lượng Sự thành công của Công ty ngày hôm nay có được là nhờ sự ủng hộ và tin tưởng rất lớn từ phía khách hàng, Công ty đề ra mục tiêu phấn đấu ngày càng hoàn thiện hơn nhằm cung cấp đến khách hàng của mình những sản phẩm tốt nhất, dịch vụ chuyên nghiệp nhất, giá cả cạnh tranh nhất."
          - generic:
            - generic:
              - link "Xem thêm bài viết":
                - /url: javascript:;
                - generic:
                  - text: Xem thêm bài viết
                  - img
    - generic [ref=e324]:
      - 'link "Call me: 0902217299" [ref=e325] [cursor=pointer]':
        - /url: tel:0902217299
        - img [ref=e329]
        - generic [ref=e332]: "Call me: 0902217299"
      - 'link "Zalo: 0902217299" [ref=e333] [cursor=pointer]':
        - /url: https://zalo.me/0902217299
        - img [ref=e337]
        - generic [ref=e338]: "Zalo: 0902217299"
  - contentinfo:
    - generic:
      - generic:
        - generic:
          - paragraph: Thông tin liên hệ
          - generic:
            - paragraph:
              - generic:
                - generic:
                  - generic:
                    - strong: CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ KỸ THUẬT NGỌC XOÀI
                - generic:
                  - generic:
                    - text: "Địa chỉ: 24/2/8 Đường Võ Văn Ngân, Khu phố 1, Phường Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam."
                    - text: "Chi nhánh Tỉnh Bà Rịa Vũng Tàu: Đường D10, KP. Mỹ Tân, Phường Phú Mỹ, Thành phố Hồ Chí Minh, Việt Nam."
                    - text: "Hotline: 0902 217 299"
                    - text: "Mail: ngocxoai2023@gmail.com"
                    - text: "Website: ngocxoai.com"
        - generic:
          - paragraph: Truy cập nhanh
          - list:
            - listitem:
              - link "Trang chủ":
                - /url: https://code5.mimadigi.vn/2026/august/ngocxoai_113726W/
            - listitem:
              - link "Giới thiệu":
                - /url: gioi-thieu
            - listitem:
              - link "Dịch vụ":
                - /url: dich-vu
            - listitem:
              - link "Dự án":
                - /url: du-an
            - listitem:
              - link "Đối tác":
                - /url: doi-tac
            - listitem:
              - link "Tuyển dụng":
                - /url: tuyen-dung
            - listitem:
              - link "Tin tức":
                - /url: tin-tuc
            - listitem:
              - link "Liên hệ":
                - /url: lien-he
        - generic:
          - paragraph: Chính sách
          - list:
            - listitem:
              - link "Chính sách bảo mật thông tin khách hàng":
                - /url: chinh-sach-bao-mat-thong-tin-khach-hang
            - listitem:
              - link "Chính sách đổi trả":
                - /url: chinh-sach-doi-tra
            - listitem:
              - link "Thông tin thanh toán":
                - /url: thong-tin-thanh-toan
            - listitem:
              - link "Chính sách bảo trì bảo hành":
                - /url: chinh-sach-bao-tri-bao-hanh
            - listitem:
              - link "Hướng dẫn thanh toán":
                - /url: huong-dan-thanh-toan
          - paragraph: Liên kết MXH
          - list:
            - listitem:
              - link "mxh":
                - /url: " https://www.facebook.com/share/1BxPmATEu6/"
                - img "mxh"
            - listitem:
              - link "mxh":
                - /url: ""
                - img "mxh"
            - listitem:
              - link "mxh":
                - /url: ""
                - img "mxh"
            - listitem:
              - link "mxh":
                - /url: https://zalo.me/0902217299
                - img "mxh"
        - generic:
          - paragraph: Danh mục sản phẩm
          - list:
            - listitem:
              - link "Thiết bị điện công nghiệp":
                - /url: thiet-bi-dien-cong-nghiep
            - listitem:
              - link "Dụng cụ dùng khí nén":
                - /url: dung-cu-dung-khi-nen
            - listitem:
              - link "Vòng bi (Bạc đạn)":
                - /url: vong-bi-bac-dan
            - listitem:
              - link "Vật tư mài mòn":
                - /url: vat-tu-mai-mon
            - listitem:
              - link "Máy bơm công nghiệp các loại":
                - /url: may-bom-cong-nghiep-cac-loai
            - listitem:
              - link "Vật tư công nghiệp":
                - /url: vat-tu-cong-nghiep
          - generic:
            - paragraph: Copyright © Ngọc Xoài Company. Thiết kế Web MIMA
  - img
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
          - generic: "21"
          - generic: Tổng tiêu chí
        - generic:
          - generic: ✅ 18
          - generic: Đạt
        - generic:
          - generic: ❌ 3
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: /index.php
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e340]:
      - generic [ref=e341]: "❌ Chi tiết lỗi cần khắc phục (3/21):"
      - generic [ref=e342]:
        - generic [ref=e343]:
          - generic [ref=e344]: 1. Thẻ Title
          - generic [ref=e345]: 1 lỗi
        - generic [ref=e346]:
          - strong [ref=e348]: "Title phải có nội dung (hiện tại: 0 ký tự)"
          - generic [ref=e349]: ⚠️ Title tag không tồn tại hoặc rỗng!
      - generic [ref=e350]:
        - generic [ref=e351]:
          - generic [ref=e352]: 8. Tốc độ & Core Web Vitals
          - generic [ref=e353]: 2 lỗi
        - generic [ref=e354]:
          - strong [ref=e356]: "[📱 MOBILE (ƯU TIÊN)] Tổng điểm Performance: 55/100 (≥ 60)"
          - generic [ref=e357]: ⚠️ [📱 MOBILE (ƯU TIÊN)] Điểm Performance 55/100 dưới ngưỡng 60. Phân tích chi tiết LCP/CLS/INP bên dưới...
        - generic [ref=e358]:
          - strong [ref=e360]: "[📱 MOBILE (ƯU TIÊN)] LCP (Largest Contentful Paint): 11327ms (< 2500ms)"
          - generic [ref=e361]: "⚠️ [📱 MOBILE (ƯU TIÊN)] LCP quá cao: 11327ms (chuẩn: < 2.5s) → Thủ phạm LCP:"
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 86/100 dưới ngưỡng 96%. Có 3/21 tiêu chí không đạt.
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