# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: https://code2.mimadigi.vn/2026/august/cfurni_111926w/ (/index.php)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 76/100 dưới ngưỡng 96%. Có 5/21 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e6]:
        - link "CÔNG TY TNHH CFURNI" [ref=e8] [cursor=pointer]:
          - /url: https://code2.mimadigi.vn/2026/august/cfurni_111926w/
          - img "CÔNG TY TNHH CFURNI" [ref=e9]
        - link "Danh Mục" [ref=e12] [cursor=pointer]:
          - /url: javascript:;
          - img [ref=e13]
          - text: Danh Mục
        - generic [ref=e19]:
          - textbox "Tìm kiếm sản" [ref=e20]:
            - /placeholder: "Tìm kiếm sản "
          - button [ref=e21] [cursor=pointer]:
            - img [ref=e22]
        - generic [ref=e24]:
          - img [ref=e25]
          - generic [ref=e28]:
            - text: Hotline
            - link "0932 67 82 67" [ref=e29] [cursor=pointer]:
              - /url: tel:0932678267
        - generic [ref=e31]:
          - img [ref=e32]
          - generic [ref=e35]:
            - text: Hệ thống
            - generic "Map" [ref=e36]: CFURNI
        - link "Giỏ hàng 0" [ref=e38] [cursor=pointer]:
          - /url: gio-hang
          - img [ref=e39]
          - generic [ref=e43]:
            - generic [ref=e44]: Giỏ hàng
            - generic [ref=e45]: "0"
      - list [ref=e49]:
        - listitem [ref=e50]:
          - link "Bàn ăn" [ref=e51] [cursor=pointer]:
            - /url: ban-an
        - listitem [ref=e52]:
          - link "Bàn sofa" [ref=e53] [cursor=pointer]:
            - /url: ban-sofa
        - listitem [ref=e54]:
          - link "Ghế ăn" [ref=e55] [cursor=pointer]:
            - /url: ghe-an
        - listitem [ref=e56]:
          - link "Sofa đẹp" [ref=e57] [cursor=pointer]:
            - /url: sofa-dep
        - listitem [ref=e58]:
          - link "Văn phòng" [ref=e59] [cursor=pointer]:
            - /url: van-phong
        - listitem [ref=e60]:
          - link "Hàng giải trí" [ref=e61] [cursor=pointer]:
            - /url: hang-giai-tri
        - listitem [ref=e62]:
          - link "Thảm sofa" [ref=e63] [cursor=pointer]:
            - /url: tham-sofa
        - listitem [ref=e64]:
          - link "Phòng ngủ" [ref=e65] [cursor=pointer]:
            - /url: phong-ngu1
        - listitem [ref=e66]:
          - link "Thi công phòng bếp" [ref=e67] [cursor=pointer]:
            - /url: thi-cong-phong-bep
    - generic [ref=e71]:
      - button "Previous" [ref=e72] [cursor=pointer]: ←Previous
      - listbox [ref=e74]:
        - option [ref=e75]
        - option [ref=e78]:
          - link [ref=e79] [cursor=pointer]:
            - /url: ""
            - img [ref=e80]
      - button "Next" [ref=e81] [cursor=pointer]: →Next
    - generic [ref=e82]:
      - generic [ref=e86]:
        - generic [ref=e87]:
          - group "1 / 45" [ref=e88]:
            - link "Bàn giám đốc Bàn giám đốc" [ref=e89] [cursor=pointer]:
              - /url: ban-giam-doc
              - paragraph [ref=e90]:
                - img "Bàn giám đốc" [ref=e91]
              - heading "Bàn giám đốc" [level=3] [ref=e93]
          - group "2 / 45" [ref=e94]:
            - link "Bàn trang điểm Bàn trang điểm" [ref=e95] [cursor=pointer]:
              - /url: ban-trang-diem
              - paragraph [ref=e96]:
                - img "Bàn trang điểm" [ref=e97]
              - heading "Bàn trang điểm" [level=3] [ref=e99]
          - group "3 / 45" [ref=e100]:
            - link "Ghế quầy bar Ghế quầy bar" [ref=e101] [cursor=pointer]:
              - /url: ghe-quay-bar
              - paragraph [ref=e102]:
                - img "Ghế quầy bar" [ref=e103]
              - heading "Ghế quầy bar" [level=3] [ref=e105]
          - group "4 / 45" [ref=e106]:
            - link "Bàn quầy bar Bàn quầy bar" [ref=e107] [cursor=pointer]:
              - /url: ban-quay-bar
              - paragraph [ref=e108]:
                - img "Bàn quầy bar" [ref=e109]
              - heading "Bàn quầy bar" [level=3] [ref=e111]
          - group "5 / 45" [ref=e112]:
            - link "Kệ trang trí Kệ trang trí" [ref=e113] [cursor=pointer]:
              - /url: ke-trang-tri
              - paragraph [ref=e114]:
                - img "Kệ trang trí" [ref=e115]
              - heading "Kệ trang trí" [level=3] [ref=e117]
          - group "6 / 45" [ref=e118]:
            - link "Ghế cafe gỗ Ghế cafe gỗ" [ref=e119] [cursor=pointer]:
              - /url: ghe-cafe-go
              - paragraph [ref=e120]:
                - img "Ghế cafe gỗ" [ref=e121]
              - heading "Ghế cafe gỗ" [level=3] [ref=e123]
          - group "7 / 45" [ref=e124]:
            - link "Bàn cafe Bàn cafe" [ref=e125] [cursor=pointer]:
              - /url: ban-cafe
              - paragraph [ref=e126]:
                - img "Bàn cafe" [ref=e127]
              - heading "Bàn cafe" [level=3] [ref=e129]
          - group "8 / 45" [ref=e130]:
            - link "Ghế cafe ngoài trời Ghế cafe ngoài trời" [ref=e131] [cursor=pointer]:
              - /url: ghe-cafe-ngoai-troi
              - paragraph [ref=e132]:
                - img "Ghế cafe ngoài trời" [ref=e133]
              - heading "Ghế cafe ngoài trời" [level=3] [ref=e135]
          - group "9 / 45" [ref=e136]:
            - link "Ghế cafe nhựa" [ref=e137] [cursor=pointer]:
              - /url: ghe-cafe-nhua
              - paragraph [ref=e138]
              - heading "Ghế cafe nhựa" [level=3] [ref=e140]
          - group "10 / 45" [ref=e141]:
            - link "Bàn Console" [ref=e142] [cursor=pointer]:
              - /url: ban-console
              - paragraph [ref=e143]
              - heading "Bàn Console" [level=3] [ref=e145]
          - group "11 / 45" [ref=e146]:
            - link "Bàn sofa chân gỗ" [ref=e147] [cursor=pointer]:
              - /url: ban-sofa-chan-go
              - paragraph [ref=e148]
              - heading "Bàn sofa chân gỗ" [level=3] [ref=e150]
          - group "12 / 45" [ref=e151]:
            - link "Bàn sofa nhựa đúc" [ref=e152] [cursor=pointer]:
              - /url: ban-sofa-nhua-duc
              - paragraph [ref=e153]
              - heading "Bàn sofa nhựa đúc" [level=3] [ref=e155]
          - group "13 / 45" [ref=e156]:
            - link "Bàn sofa chân sắt" [ref=e157] [cursor=pointer]:
              - /url: ban-sofa-chan-sat
              - paragraph [ref=e158]
              - heading "Bàn sofa chân sắt" [level=3] [ref=e160]
          - group "14 / 45" [ref=e161]:
            - link "Bàn sofa tab" [ref=e162] [cursor=pointer]:
              - /url: ban-sofa-tab
              - paragraph [ref=e163]
              - heading "Bàn sofa tab" [level=3] [ref=e165]
          - group "15 / 45" [ref=e166]:
            - link "Bàn sofa chân inox" [ref=e167] [cursor=pointer]:
              - /url: ban-sofa-chan-inox
              - paragraph [ref=e168]
              - heading "Bàn sofa chân inox" [level=3] [ref=e170]
          - group "16 / 45" [ref=e171]:
            - link "Sofa thư giãn" [ref=e172] [cursor=pointer]:
              - /url: sofa-thu-gian
              - paragraph [ref=e173]
              - heading "Sofa thư giãn" [level=3] [ref=e175]
          - group "17 / 45" [ref=e176]:
            - link "Bàn ăn chân gỗ" [ref=e177] [cursor=pointer]:
              - /url: ban-an-chan-go
              - paragraph [ref=e178]
              - heading "Bàn ăn chân gỗ" [level=3] [ref=e180]
          - group "18 / 45" [ref=e181]:
            - link "Bàn học và ghế học" [ref=e182] [cursor=pointer]:
              - /url: ban-hoc-va-ghe-hoc
              - paragraph [ref=e183]
              - heading "Bàn học và ghế học" [level=3] [ref=e185]
          - group "19 / 45" [ref=e186]:
            - link "Ghế trang điểm" [ref=e187] [cursor=pointer]:
              - /url: ghe-trang-diem
              - paragraph [ref=e188]
              - heading "Ghế trang điểm" [level=3] [ref=e190]
          - group "20 / 45" [ref=e191]:
            - link "Sofa băng" [ref=e192] [cursor=pointer]:
              - /url: sofa-bang
              - paragraph [ref=e193]
              - heading "Sofa băng" [level=3] [ref=e195]
          - group "21 / 45" [ref=e196]:
            - link "Bàn ăn chân inox" [ref=e197] [cursor=pointer]:
              - /url: ban-an-chan-inox
              - paragraph [ref=e198]
              - heading "Bàn ăn chân inox" [level=3] [ref=e200]
          - group "22 / 45" [ref=e201]:
            - link "Bàn họp" [ref=e202] [cursor=pointer]:
              - /url: ban-hop
              - paragraph [ref=e203]
              - heading "Bàn họp" [level=3] [ref=e205]
          - group "23 / 45" [ref=e206]:
            - link "Giường gỗ" [ref=e207] [cursor=pointer]:
              - /url: giuong-go
              - paragraph [ref=e208]
              - heading "Giường gỗ" [level=3] [ref=e210]
          - group "24 / 45" [ref=e211]:
            - link "Sofa bệt và bed Sofa bệt và bed" [ref=e212] [cursor=pointer]:
              - /url: sofa-bet-va-bed
              - paragraph [ref=e213]:
                - img "Sofa bệt và bed" [ref=e214]
              - heading "Sofa bệt và bed" [level=3] [ref=e216]
          - group "25 / 45" [ref=e217]:
            - link "Bàn ăn chân thép sơn Bàn ăn chân thép sơn" [ref=e218] [cursor=pointer]:
              - /url: ban-an-chan-thep-son
              - paragraph [ref=e219]:
                - img "Bàn ăn chân thép sơn" [ref=e220]
              - heading "Bàn ăn chân thép sơn" [level=3] [ref=e222]
          - group "26 / 45" [ref=e223]:
            - link "Bàn văn phòng Bàn văn phòng" [ref=e224] [cursor=pointer]:
              - /url: ban-van-phong
              - paragraph [ref=e225]:
                - img "Bàn văn phòng" [ref=e226]
              - heading "Bàn văn phòng" [level=3] [ref=e228]
          - group "27 / 45" [ref=e229]:
            - link "Giường ngủ bé cưng Giường ngủ bé cưng" [ref=e230] [cursor=pointer]:
              - /url: giuong-ngu-be-cung
              - paragraph [ref=e231]:
                - img "Giường ngủ bé cưng" [ref=e232]
              - heading "Giường ngủ bé cưng" [level=3] [ref=e234]
          - group "28 / 45" [ref=e235]:
            - link "Sofa đôn Sofa đôn" [ref=e236] [cursor=pointer]:
              - /url: sofa-don
              - paragraph [ref=e237]:
                - img "Sofa đôn" [ref=e238]
              - heading "Sofa đôn" [level=3] [ref=e240]
          - group "29 / 45" [ref=e241]:
            - link "Băng chờ Băng chờ" [ref=e242] [cursor=pointer]:
              - /url: bang-cho
              - paragraph [ref=e243]:
                - img "Băng chờ" [ref=e244]
              - heading "Băng chờ" [level=3] [ref=e246]
          - group "30 / 45" [ref=e247]:
            - link "Chân bàn rời Chân bàn rời" [ref=e248] [cursor=pointer]:
              - /url: chan-ban-roi
              - paragraph [ref=e249]:
                - img "Chân bàn rời" [ref=e250]
              - heading "Chân bàn rời" [level=3] [ref=e252]
          - group "31 / 45" [ref=e253]:
            - link "Giường ngủ bọc nệm Giường ngủ bọc nệm" [ref=e254] [cursor=pointer]:
              - /url: giuong-ngu-boc-nem
              - paragraph [ref=e255]:
                - img "Giường ngủ bọc nệm" [ref=e256]
              - heading "Giường ngủ bọc nệm" [level=3] [ref=e258]
          - group "32 / 45" [ref=e259]:
            - link "Sofa đơn (1 người ngồi)" [ref=e260] [cursor=pointer]:
              - /url: sofa-don-1-nguoi-ngoi
              - paragraph [ref=e261]
              - heading "Sofa đơn (1 người ngồi)" [level=3] [ref=e263]
          - group "33 / 45" [ref=e264]:
            - link "Bàn ăn mở rộng" [ref=e265] [cursor=pointer]:
              - /url: ban-an-mo-rong
              - paragraph [ref=e266]
              - heading "Bàn ăn mở rộng" [level=3] [ref=e268]
          - group "34 / 45" [ref=e269]:
            - link "Ghế giám đốc" [ref=e270] [cursor=pointer]:
              - /url: ghe-giam-doc
              - paragraph [ref=e271]
              - heading "Ghế giám đốc" [level=3] [ref=e273]
          - group "35 / 45" [ref=e274]:
            - link "Giường cổ điển" [ref=e275] [cursor=pointer]:
              - /url: giuong-co-dien
              - paragraph [ref=e276]
              - heading "Giường cổ điển" [level=3] [ref=e278]
          - group "36 / 45" [ref=e279]:
            - link "Sofa góc (L)" [ref=e280] [cursor=pointer]:
              - /url: sofa-goc-l
              - paragraph [ref=e281]
              - heading "Sofa góc (L)" [level=3] [ref=e283]
          - group "37 / 45" [ref=e284]:
            - link "Ghế hội trường" [ref=e285] [cursor=pointer]:
              - /url: ghe-hoi-truong
              - paragraph [ref=e286]
              - heading "Ghế hội trường" [level=3] [ref=e288]
          - group "38 / 45" [ref=e289]:
            - link "Kệ giày" [ref=e290] [cursor=pointer]:
              - /url: ke-giay
              - paragraph [ref=e291]
              - heading "Kệ giày" [level=3] [ref=e293]
          - group "39 / 45" [ref=e294]:
            - link "Ghế trưởng phòng" [ref=e295] [cursor=pointer]:
              - /url: ghe-truong-phong
              - paragraph [ref=e296]
              - heading "Ghế trưởng phòng" [level=3] [ref=e298]
          - group "40 / 45" [ref=e299]:
            - link "Kệ tivi" [ref=e300] [cursor=pointer]:
              - /url: ke-tivi
              - paragraph [ref=e301]
              - heading "Kệ tivi" [level=3] [ref=e303]
          - group "41 / 45" [ref=e304]:
            - link "Ghế văn phòng" [ref=e305] [cursor=pointer]:
              - /url: ghe-van-phong
              - paragraph [ref=e306]
              - heading "Ghế văn phòng" [level=3] [ref=e308]
          - group "42 / 45" [ref=e309]:
            - link "Tab đầu giường" [ref=e310] [cursor=pointer]:
              - /url: tab-dau-giuong
              - paragraph [ref=e311]
              - heading "Tab đầu giường" [level=3] [ref=e313]
          - group "43 / 45" [ref=e314]:
            - link "Tủ hồ sơ" [ref=e315] [cursor=pointer]:
              - /url: tu-ho-so
              - paragraph [ref=e316]
              - heading "Tủ hồ sơ" [level=3] [ref=e318]
          - group "44 / 45" [ref=e319]:
            - link "Tủ áo" [ref=e320] [cursor=pointer]:
              - /url: tu-ao
              - paragraph [ref=e321]
              - heading "Tủ áo" [level=3] [ref=e323]
          - group "45 / 45" [ref=e324]:
            - link "Tủ văn phòng" [ref=e325] [cursor=pointer]:
              - /url: tu-van-phong
              - paragraph [ref=e326]
              - heading "Tủ văn phòng" [level=3] [ref=e328]
        - button "Previous slide" [disabled] [ref=e329] [cursor=pointer]
        - button "Next slide" [ref=e331] [cursor=pointer]
      - generic [ref=e335]:
        - link "CÔNG TY TNHH CFURNI" [ref=e336] [cursor=pointer]:
          - /url: ""
          - img "CÔNG TY TNHH CFURNI" [ref=e337]
        - link "CÔNG TY TNHH CFURNI" [ref=e338] [cursor=pointer]:
          - /url: ""
          - img "CÔNG TY TNHH CFURNI" [ref=e339]
      - generic [ref=e341]:
        - img "CÔNG TY TNHH CFURNI" [ref=e345]
        - generic [ref=e347]:
          - generic [ref=e349]:
            - link "Bàn ăn LYSAY" [ref=e351] [cursor=pointer]:
              - /url: ban-an-lysay
            - generic [ref=e352]:
              - heading "Bàn ăn LYSAY" [level=3] [ref=e353]:
                - link "Bàn ăn LYSAY" [ref=e354] [cursor=pointer]:
                  - /url: ban-an-lysay
              - paragraph [ref=e355]:
                - generic [ref=e356]: 6.000.000đ
          - generic [ref=e358]:
            - link "Bàn ăn OLIVER" [ref=e360] [cursor=pointer]:
              - /url: ban-an-oliver
            - generic [ref=e361]:
              - heading "Bàn ăn OLIVER" [level=3] [ref=e362]:
                - link "Bàn ăn OLIVER" [ref=e363] [cursor=pointer]:
                  - /url: ban-an-oliver
              - paragraph [ref=e364]:
                - generic [ref=e365]: 8.700.000đ
          - generic [ref=e367]:
            - link "Bàn ăn ATRUM T111" [ref=e369] [cursor=pointer]:
              - /url: ban-an-atrum-t111
            - generic [ref=e370]:
              - heading "Bàn ăn ATRUM T111" [level=3] [ref=e371]:
                - link "Bàn ăn ATRUM T111" [ref=e372] [cursor=pointer]:
                  - /url: ban-an-atrum-t111
              - paragraph [ref=e373]:
                - generic [ref=e374]: 12.300.000đ
          - generic [ref=e376]:
            - link "Bàn ăn HAFMUN" [ref=e378] [cursor=pointer]:
              - /url: ban-an-hafmun
            - generic [ref=e379]:
              - heading "Bàn ăn HAFMUN" [level=3] [ref=e380]:
                - link "Bàn ăn HAFMUN" [ref=e381] [cursor=pointer]:
                  - /url: ban-an-hafmun
              - paragraph [ref=e382]:
                - generic [ref=e383]: 9.900.000đ
          - generic [ref=e385]:
            - link "Bàn ăn ELIP IRON" [ref=e387] [cursor=pointer]:
              - /url: ban-an-elip-iron
            - generic [ref=e388]:
              - heading "Bàn ăn ELIP IRON" [level=3] [ref=e389]:
                - link "Bàn ăn ELIP IRON" [ref=e390] [cursor=pointer]:
                  - /url: ban-an-elip-iron
              - paragraph [ref=e391]:
                - generic [ref=e392]: 9.870.000đ
          - generic [ref=e394]:
            - link "Bàn ăn HOURGLASS B78" [ref=e396] [cursor=pointer]:
              - /url: ban-an-hourglass-b78
            - generic [ref=e397]:
              - heading "Bàn ăn HOURGLASS B78" [level=3] [ref=e398]:
                - link "Bàn ăn HOURGLASS B78" [ref=e399] [cursor=pointer]:
                  - /url: ban-an-hourglass-b78
              - paragraph [ref=e400]:
                - generic [ref=e401]: 5.250.000đ
          - generic [ref=e403]:
            - link "Bàn ăn LOUISE" [ref=e405] [cursor=pointer]:
              - /url: ban-an-louise
            - generic [ref=e406]:
              - heading "Bàn ăn LOUISE" [level=3] [ref=e407]:
                - link "Bàn ăn LOUISE" [ref=e408] [cursor=pointer]:
                  - /url: ban-an-louise
              - paragraph [ref=e409]:
                - generic [ref=e410]: 5.880.000đ
          - generic [ref=e412]:
            - link "Bàn ăn LYSAY" [ref=e414] [cursor=pointer]:
              - /url: ban-an-lysay1
            - generic [ref=e415]:
              - heading "Bàn ăn LYSAY" [level=3] [ref=e416]:
                - link "Bàn ăn LYSAY" [ref=e417] [cursor=pointer]:
                  - /url: ban-an-lysay1
              - paragraph [ref=e418]:
                - generic [ref=e419]: 2.940.000đ
          - generic [ref=e421]:
            - link "Bàn ăn VOTUER BA16" [ref=e423] [cursor=pointer]:
              - /url: ban-an-votuer-ba16
            - generic [ref=e424]:
              - heading "Bàn ăn VOTUER BA16" [level=3] [ref=e425]:
                - link "Bàn ăn VOTUER BA16" [ref=e426] [cursor=pointer]:
                  - /url: ban-an-votuer-ba16
              - paragraph [ref=e427]:
                - generic [ref=e428]: 11.130.000đ
          - generic [ref=e430]:
            - link "Ghế ăn VANTA" [ref=e432] [cursor=pointer]:
              - /url: ghe-an-vanta
            - generic [ref=e433]:
              - heading "Ghế ăn VANTA" [level=3] [ref=e434]:
                - link "Ghế ăn VANTA" [ref=e435] [cursor=pointer]:
                  - /url: ghe-an-vanta
              - paragraph [ref=e436]:
                - generic [ref=e437]: 3.460.000đ
      - generic [ref=e440]:
        - generic [ref=e441]:
          - heading "Bàn ăn" [level=2] [ref=e442]
          - generic [ref=e443]:
            - button "Bàn ăn chân gỗ" [ref=e445] [cursor=pointer]
            - button "Bàn ăn chân inox" [ref=e447] [cursor=pointer]
            - button "Bàn ăn chân thép sơn" [ref=e449] [cursor=pointer]
            - button "Chân bàn rời" [ref=e451] [cursor=pointer]
            - button "Bàn ăn mở rộng" [ref=e453] [cursor=pointer]
        - generic [ref=e455]:
          - generic:
            - generic:
              - generic:
                - link "Bàn ăn MAPLE":
                  - /url: ban-an-maple
              - generic:
                - heading "Bàn ăn MAPLE" [level=3]:
                  - link "Bàn ăn MAPLE":
                    - /url: ban-an-maple
                - paragraph:
                  - generic: 9.870.000đ
          - generic:
            - generic:
              - generic:
                - link "Bàn ăn CODY 625":
                  - /url: ban-an-cody-625
              - generic:
                - heading "Bàn ăn CODY 625" [level=3]:
                  - link "Bàn ăn CODY 625":
                    - /url: ban-an-cody-625
                - paragraph:
                  - generic: 5.500.000đ
          - generic:
            - generic:
              - generic:
                - link "Bàn ăn STANDAR":
                  - /url: ban-an-standar
              - generic:
                - heading "Bàn ăn STANDAR" [level=3]:
                  - link "Bàn ăn STANDAR":
                    - /url: ban-an-standar
                - paragraph:
                  - generic: 4.520.000đ
          - generic:
            - generic:
              - generic:
                - link "Bàn ăn ELEVEN":
                  - /url: ban-an-eleven
              - generic:
                - heading "Bàn ăn ELEVEN" [level=3]:
                  - link "Bàn ăn ELEVEN":
                    - /url: ban-an-eleven
                - paragraph:
                  - generic: 7.500.000đ
          - generic:
            - generic:
              - generic:
                - link "Bàn ăn CONCORDE":
                  - /url: ban-an-concorde
              - generic:
                - heading "Bàn ăn CONCORDE" [level=3]:
                  - link "Bàn ăn CONCORDE":
                    - /url: ban-an-concorde
                - paragraph:
                  - generic: 5.250.000đ
        - link "Xem thêm sản phẩm" [ref=e457] [cursor=pointer]:
          - /url: ban-an
      - generic [ref=e460]:
        - generic [ref=e461]:
          - heading "Bàn sofa" [level=2] [ref=e462]
          - generic [ref=e463]:
            - button "Bàn sofa chân gỗ" [ref=e465] [cursor=pointer]
            - button "Bàn sofa nhựa đúc" [ref=e467] [cursor=pointer]
            - button "Bàn sofa chân sắt" [ref=e469] [cursor=pointer]
            - button "Bàn sofa tab" [ref=e471] [cursor=pointer]
            - button "Bàn sofa chân inox" [ref=e473] [cursor=pointer]
        - generic [ref=e475]:
          - generic:
            - generic:
              - generic:
                - link "Bàn sofa E-101":
                  - /url: ban-sofa-e-101
              - generic:
                - heading "Bàn sofa E-101" [level=3]:
                  - link "Bàn sofa E-101":
                    - /url: ban-sofa-e-101
                - paragraph:
                  - generic: 5.660.000đ
          - generic:
            - generic:
              - generic:
                - link "Bàn Sofa HAWAI E155V":
                  - /url: ban-sofa-hawai-e155v
              - generic:
                - heading "Bàn Sofa HAWAI E155V" [level=3]:
                  - link "Bàn Sofa HAWAI E155V":
                    - /url: ban-sofa-hawai-e155v
                - paragraph:
                  - generic: 6.900.000đ
          - generic:
            - generic:
              - generic:
                - link "Bàn sofa MEIKO":
                  - /url: ban-sofa-meiko
              - generic:
                - heading "Bàn sofa MEIKO" [level=3]:
                  - link "Bàn sofa MEIKO":
                    - /url: ban-sofa-meiko
                - paragraph:
                  - generic: 7.250.000đ
          - generic:
            - generic:
              - generic:
                - link "Bàn sofa THING":
                  - /url: ban-sofa-thing
              - generic:
                - heading "Bàn sofa THING" [level=3]:
                  - link "Bàn sofa THING":
                    - /url: ban-sofa-thing
                - paragraph:
                  - generic: 6.890.000đ
          - generic:
            - generic:
              - generic:
                - link "Bàn sofa WOODLYN 988":
                  - /url: ban-sofa-woodlyn-988
              - generic:
                - heading "Bàn sofa WOODLYN 988" [level=3]:
                  - link "Bàn sofa WOODLYN 988":
                    - /url: ban-sofa-woodlyn-988
                - paragraph:
                  - generic: 6.290.000đ
        - link "Xem thêm sản phẩm" [ref=e477] [cursor=pointer]:
          - /url: ban-sofa
      - generic [ref=e480]:
        - generic [ref=e481]:
          - heading "Ghế ăn" [level=2] [ref=e482]
          - button "Tất cả" [ref=e485] [cursor=pointer]
        - generic [ref=e487]:
          - generic:
            - generic:
              - generic:
                - link "Ghế ăn KIWI":
                  - /url: ghe-an-kiwi
              - generic:
                - heading "Ghế ăn KIWI" [level=3]:
                  - link "Ghế ăn KIWI":
                    - /url: ghe-an-kiwi
                - paragraph:
                  - generic: 1.390.000đ
          - generic:
            - generic:
              - generic:
                - link "Ghế ăn LLAC":
                  - /url: ghe-an-llac
              - generic:
                - heading "Ghế ăn LLAC" [level=3]:
                  - link "Ghế ăn LLAC":
                    - /url: ghe-an-llac
                - paragraph:
                  - generic: 1.250.000đ
          - generic:
            - generic:
              - generic:
                - link "Ghế ăn LYRA":
                  - /url: ghe-an-lyra
              - generic:
                - heading "Ghế ăn LYRA" [level=3]:
                  - link "Ghế ăn LYRA":
                    - /url: ghe-an-lyra
                - paragraph:
                  - generic: 1.145.000đ
          - generic:
            - generic:
              - generic:
                - link "Ghế ăn MEENIE":
                  - /url: ghe-an-meenie
              - generic:
                - heading "Ghế ăn MEENIE" [level=3]:
                  - link "Ghế ăn MEENIE":
                    - /url: ghe-an-meenie
                - paragraph:
                  - generic: 1.350.000đ
          - generic:
            - generic:
              - generic:
                - link "Ghế ăn VANTA":
                  - /url: ghe-an-vanta
              - generic:
                - heading "Ghế ăn VANTA" [level=3]:
                  - link "Ghế ăn VANTA":
                    - /url: ghe-an-vanta
                - paragraph:
                  - generic: 3.460.000đ
        - link "Xem thêm sản phẩm" [ref=e489] [cursor=pointer]:
          - /url: ghe-an
      - generic [ref=e492]:
        - generic [ref=e493]:
          - heading "Sofa đẹp" [level=2] [ref=e494]
          - generic [ref=e495]:
            - button "Sofa thư giãn" [ref=e497] [cursor=pointer]
            - button "Sofa băng" [ref=e499] [cursor=pointer]
            - button "Sofa bệt và bed" [ref=e501] [cursor=pointer]
            - button "Sofa đôn" [ref=e503] [cursor=pointer]
            - button "Sofa đơn (1 người ngồi)" [ref=e505] [cursor=pointer]
            - button "Sofa góc (L)" [ref=e507] [cursor=pointer]
        - generic [ref=e509]:
          - generic:
            - generic:
              - generic:
                - link "Ghế ROOVY":
                  - /url: ghe-roovy
              - generic:
                - heading "Ghế ROOVY" [level=3]:
                  - link "Ghế ROOVY":
                    - /url: ghe-roovy
                - paragraph:
                  - generic: 8.500.000đ
          - generic:
            - generic:
              - generic:
                - link "Ghế thư giãn JT-137#":
                  - /url: ghe-thu-gian-jt-137
              - generic:
                - heading "Ghế thư giãn JT-137#" [level=3]:
                  - link "Ghế thư giãn JT-137#":
                    - /url: ghe-thu-gian-jt-137
                - paragraph:
                  - generic: 6.500.000đ
          - generic:
            - generic:
              - generic:
                - link "Ghế thư giãn MAMA CHAIR":
                  - /url: ghe-thu-gian-mama-chair
              - generic:
                - heading "Ghế thư giãn MAMA CHAIR" [level=3]:
                  - link "Ghế thư giãn MAMA CHAIR":
                    - /url: ghe-thu-gian-mama-chair
                - paragraph:
                  - generic: 9.900.000đ
          - generic:
            - generic:
              - generic:
                - link "Ghế thư giãn ROMA":
                  - /url: ghe-thu-gian-roma
              - generic:
                - heading "Ghế thư giãn ROMA" [level=3]:
                  - link "Ghế thư giãn ROMA":
                    - /url: ghe-thu-gian-roma
                - paragraph:
                  - generic: 8.290.000đ
          - generic:
            - generic:
              - generic:
                - link "Ghế thư giãn SENO":
                  - /url: sofa-thu-gian-seno
              - generic:
                - heading "Ghế thư giãn SENO" [level=3]:
                  - link "Ghế thư giãn SENO":
                    - /url: sofa-thu-gian-seno
                - paragraph:
                  - generic: 6.500.000đ
        - link "Xem thêm sản phẩm" [ref=e511] [cursor=pointer]:
          - /url: sofa-dep
      - generic [ref=e514]:
        - generic [ref=e515]:
          - heading "Văn phòng" [level=2] [ref=e516]
          - generic [ref=e517]:
            - button "Bàn giám đốc" [ref=e519] [cursor=pointer]
            - button "Bàn học và ghế học" [ref=e521] [cursor=pointer]
            - button "Bàn họp" [ref=e523] [cursor=pointer]
            - button "Bàn văn phòng" [ref=e525] [cursor=pointer]
            - button "Băng chờ" [ref=e527] [cursor=pointer]
            - button "Ghế giám đốc" [ref=e529] [cursor=pointer]
            - button "Ghế hội trường" [ref=e531] [cursor=pointer]
            - button "Ghế trưởng phòng" [ref=e533] [cursor=pointer]
            - button "Ghế văn phòng" [ref=e535] [cursor=pointer]
            - button "Tủ hồ sơ" [ref=e537] [cursor=pointer]
            - button "Tủ văn phòng" [ref=e539] [cursor=pointer]
        - alert [ref=e541]:
          - strong [ref=e542]: Sản phẩm đang cập nhận
        - link "Xem thêm sản phẩm" [ref=e544] [cursor=pointer]:
          - /url: van-phong
      - generic [ref=e547]:
        - generic [ref=e548]:
          - heading "Hàng giải trí" [level=2] [ref=e549]
          - generic [ref=e550]:
            - button "Ghế quầy bar" [ref=e552] [cursor=pointer]
            - button "Bàn quầy bar" [ref=e554] [cursor=pointer]
            - button "Kệ trang trí" [ref=e556] [cursor=pointer]
            - button "Ghế cafe gỗ" [ref=e558] [cursor=pointer]
            - button "Bàn cafe" [ref=e560] [cursor=pointer]
            - button "Ghế cafe ngoài trời" [ref=e562] [cursor=pointer]
            - button "Ghế cafe nhựa" [ref=e564] [cursor=pointer]
            - button "Bàn Console" [ref=e566] [cursor=pointer]
        - generic [ref=e568]:
          - generic:
            - generic:
              - generic:
                - link "Ghế quầy OPAL 34":
                  - /url: ghe-quay-opal-34
              - generic:
                - heading "Ghế quầy OPAL 34" [level=3]:
                  - link "Ghế quầy OPAL 34":
                    - /url: ghe-quay-opal-34
                - paragraph:
                  - generic: 950.000.950đ
          - generic:
            - generic:
              - generic:
                - link "Ghế OAKA QB02":
                  - /url: ghe-oaka-qb02
              - generic:
                - heading "Ghế OAKA QB02" [level=3]:
                  - link "Ghế OAKA QB02":
                    - /url: ghe-oaka-qb02
                - paragraph:
                  - generic: 1.950.000đ
          - generic:
            - generic:
              - generic:
                - link "Ghế bar OPUL":
                  - /url: ghe-bar-opul
              - generic:
                - heading "Ghế bar OPUL" [level=3]:
                  - link "Ghế bar OPUL":
                    - /url: ghe-bar-opul
                - paragraph:
                  - generic: 990.000đ
          - generic:
            - generic:
              - generic:
                - link "Ghế bar FESTO 252":
                  - /url: ghe-bar-festo-252
              - generic:
                - heading "Ghế bar FESTO 252" [level=3]:
                  - link "Ghế bar FESTO 252":
                    - /url: ghe-bar-festo-252
                - paragraph:
                  - generic: 1.260.000đ
          - generic:
            - generic:
              - generic:
                - link "Ghế bar 2511C":
                  - /url: ghe-bar-2511c
              - generic:
                - heading "Ghế bar 2511C" [level=3]:
                  - link "Ghế bar 2511C":
                    - /url: ghe-bar-2511c
                - paragraph:
                  - generic: 940.000đ
        - link "Xem thêm sản phẩm" [ref=e570] [cursor=pointer]:
          - /url: hang-giai-tri
      - generic [ref=e573]:
        - generic [ref=e574]:
          - heading "Thảm sofa" [level=2] [ref=e575]
          - button "Tất cả" [ref=e578] [cursor=pointer]
        - alert [ref=e580]:
          - strong [ref=e581]: Sản phẩm đang cập nhận
        - link "Xem thêm sản phẩm" [ref=e583] [cursor=pointer]:
          - /url: tham-sofa
      - generic [ref=e586]:
        - generic [ref=e587]:
          - heading "Phòng ngủ" [level=2] [ref=e588]
          - generic [ref=e589]:
            - button "Bàn trang điểm" [ref=e591] [cursor=pointer]
            - button "Ghế trang điểm" [ref=e593] [cursor=pointer]
            - button "Giường gỗ" [ref=e595] [cursor=pointer]
            - button "Giường ngủ bé cưng" [ref=e597] [cursor=pointer]
            - button "Giường ngủ bọc nệm" [ref=e599] [cursor=pointer]
            - button "Giường cổ điển" [ref=e601] [cursor=pointer]
            - button "Kệ giày" [ref=e603] [cursor=pointer]
            - button "Kệ tivi" [ref=e605] [cursor=pointer]
            - button "Tab đầu giường" [ref=e607] [cursor=pointer]
            - button "Tủ áo" [ref=e609] [cursor=pointer]
        - alert [ref=e611]:
          - strong [ref=e612]: Sản phẩm đang cập nhận
        - link "Xem thêm sản phẩm" [ref=e614] [cursor=pointer]:
          - /url: phong-ngu1
      - generic [ref=e617]:
        - generic [ref=e618]:
          - heading "Thi công phòng bếp" [level=2] [ref=e619]
          - button "Tất cả" [ref=e622] [cursor=pointer]
        - alert [ref=e624]:
          - strong [ref=e625]: Sản phẩm đang cập nhận
        - link "Xem thêm sản phẩm" [ref=e627] [cursor=pointer]:
          - /url: thi-cong-phong-bep
      - generic [ref=e629]:
        - generic [ref=e630]:
          - heading "Dự án nổi bật" [level=2] [ref=e633]
          - link "Xem tất cả dự án" [ref=e635] [cursor=pointer]:
            - /url: du-an
        - list [ref=e636]:
          - listitem [ref=e637] [cursor=pointer]:
            - heading "Tĩnh lặng house 3 (1) (1) (1)" [level=3] [ref=e638]
            - paragraph [ref=e642]: Tĩnh lặng house 3 (1) (1) (1)
          - listitem [ref=e643] [cursor=pointer]:
            - heading "Tĩnh lặng house 3 (1) (1)" [level=3] [ref=e644]
            - paragraph [ref=e648]: Tĩnh lặng house 3 (1) (1)
          - listitem [ref=e649] [cursor=pointer]:
            - heading "Tĩnh lặng house 3 (1)" [level=3] [ref=e650]
            - paragraph [ref=e654]: Tĩnh lặng house 3 (1)
          - listitem [ref=e655] [cursor=pointer]:
            - heading "Tĩnh lặng house 2 (1)" [level=3] [ref=e656]
            - paragraph [ref=e660]: Tĩnh lặng house 2 (1)
          - listitem [ref=e661] [cursor=pointer]:
            - heading "Tĩnh lặng house 3" [level=3] [ref=e662]
            - paragraph [ref=e666]: Tĩnh lặng house 3
          - listitem [ref=e667] [cursor=pointer]:
            - heading "Tĩnh lặng house 2" [level=3] [ref=e668]
            - paragraph [ref=e672]: Tĩnh lặng house 2
          - listitem [ref=e673] [cursor=pointer]:
            - heading "Tĩnh lặng house" [level=3] [ref=e674]
            - paragraph [ref=e678]: Tĩnh lặng house
      - generic [ref=e680]:
        - heading "Kiến thức & Tin tức" [level=2] [ref=e682]
        - generic [ref=e683]:
          - generic [ref=e684]:
            - generic:
              - paragraph:
                - link "Cách chọn bàn ăn phong cách hiện đại":
                  - /url: chon-ban-an-phong-cach-hien-dai
              - generic:
                - heading "Cách chọn bàn ăn phong cách hiện đại" [level=3]:
                  - link "Cách chọn bàn ăn phong cách hiện đại":
                    - /url: chon-ban-an-phong-cach-hien-dai
          - generic [ref=e685]:
            - generic:
              - paragraph:
                - 'link "Lionel Messi vs Cristiano Ronaldo: Ai mới thực sự là ông vua của các danh hiệu?"':
                  - /url: lionel-messi-vs-cristiano-ronaldo-ai-moi-thuc-su-la-ong-vua-cua-cac-danh-hieu
              - generic:
                - 'heading "Lionel Messi vs Cristiano Ronaldo: Ai mới thực sự là ông vua của các danh hiệu?" [level=3]':
                  - 'link "Lionel Messi vs Cristiano Ronaldo: Ai mới thực sự là ông vua của các danh hiệu?"':
                    - /url: lionel-messi-vs-cristiano-ronaldo-ai-moi-thuc-su-la-ong-vua-cua-cac-danh-hieu
                - paragraph: Cuộc so kè danh hiệu giữa Messi và Ronaldo lại nóng lên khi CR7 vừa vô địch Saudi Pro League, chấm dứt cơn khát danh hiệu kéo dài 5 năm.
          - generic [ref=e686]:
            - generic:
              - paragraph:
                - link "Cúp C2 là gì? Tất tần tật về Europa League":
                  - /url: cup-c2-la-gi-tat-tan-tat-ve-europa-league
              - generic:
                - heading "Cúp C2 là gì? Tất tần tật về Europa League" [level=3]:
                  - link "Cúp C2 là gì? Tất tần tật về Europa League":
                    - /url: cup-c2-la-gi-tat-tan-tat-ve-europa-league
                - paragraph: Bên cạnh ánh hào quang rực rỡ của UEFA Champions League (Cúp C1), bóng đá châu Âu còn sở hữu một giải đấu thường niên danh giá không kém phần kịch tính và hấp dẫn
          - generic [ref=e687]:
            - generic:
              - paragraph:
                - link "Tìm Hiểu Giải Cúp C1 Là Gì?":
                  - /url: tim-hieu-giai-cup-c1-la-gi
              - generic:
                - heading "Tìm Hiểu Giải Cúp C1 Là Gì?" [level=3]:
                  - link "Tìm Hiểu Giải Cúp C1 Là Gì?":
                    - /url: tim-hieu-giai-cup-c1-la-gi
                - paragraph: Giải bóng đá cúp C1 là gì? Đây là 1 giải đấu bóng đá thuộc các CLB và có tính cạnh tranh chẳng thua kém WC đâu nhé. Lịch sử ghi nhận rất nhiều trận đấu kinh điển được ra đời từ chính giải đấu này đấy. Cùng tìm hiểu ngay nào!
          - generic [ref=e688]:
            - generic:
              - paragraph:
                - link "Cúp C3 tên chính thức hiện tại là UEFA":
                  - /url: cup-c3-la-gi
              - generic:
                - heading "Cúp C3 tên chính thức hiện tại là UEFA" [level=3]:
                  - link "Cúp C3 tên chính thức hiện tại là UEFA":
                    - /url: cup-c3-la-gi
                - paragraph: Cúp C3 là giải đấu cấp câu lạc bộ thứ ba của châu Âu với tên chính thức hiện tại là UEFA Conference League. Nó dành cho các đội không đủ điều kiện dự Champions League hoặc Europa League.
        - link "Xem tất cả tin tức" [ref=e690] [cursor=pointer]:
          - /url: tin-tuc
      - generic [ref=e693]:
        - heading "Hãy để lại thông tin để nhận báo giá tư vấn sản phẩm" [level=2] [ref=e695]
        - generic [ref=e697]:
          - textbox "Nhập địa chỉ email của bạn" [ref=e700]
          - button "Gửi thông tin ngay" [ref=e701] [cursor=pointer]
    - generic [ref=e706]:
      - generic [ref=e708]:
        - paragraph [ref=e709]
        - generic [ref=e710]:
          - heading "Xưởng & Showroom" [level=3] [ref=e711]
          - paragraph [ref=e712]: Đặt lịch xe trực tiếp sản phẩm
      - generic [ref=e714]:
        - paragraph [ref=e715]
        - generic [ref=e716]:
          - heading "Bảo hành khung 10 năm" [level=3] [ref=e717]
          - paragraph [ref=e718]: Khung gỗ sồi chắc chắn
      - generic [ref=e720]:
        - paragraph [ref=e721]
        - generic [ref=e722]:
          - heading "Mút Coolsafe 4 năm" [level=3] [ref=e723]
          - paragraph [ref=e724]: Chống cháy đạt tiêu chuẩn
      - generic [ref=e726]:
        - paragraph [ref=e727]
        - generic [ref=e728]:
          - heading "Chứng chỉ EQ vật liệu" [level=3] [ref=e729]
          - paragraph [ref=e730]: An toàn cho trẻ con & thai phụ
      - generic [ref=e732]:
        - paragraph [ref=e733]
        - generic [ref=e734]:
          - heading "10,000+ khách hàng" [level=3] [ref=e735]
          - paragraph [ref=e736]: Đánh giá tốt trên website
    - generic [ref=e737]:
      - generic [ref=e741]:
        - link "CÔNG TY TNHH CFURNI" [ref=e742] [cursor=pointer]:
          - /url: https://code2.mimadigi.vn/2026/august/cfurni_111926w/
          - img "CÔNG TY TNHH CFURNI" [ref=e743]
        - paragraph [ref=e744]: CÔNG TY TNHH CFURNI
        - table [ref=e746]:
          - rowgroup [ref=e747]:
            - 'row "MST: 0313344129 - Sở kế hoạch và đầu tư TP.HCM cấp ngày 13/7/2015. Office: 198 Đường Số 10, Phường Thông Tây Hội, TP.HCM Showroom 1: 41 Đường A4, Phường Bảy Hiền, TP.HCM Showroom 2: 66A đường A4 (khu K300), Phường Bảy Hiền, TP.HCM Xưởng 1: 25/5A đường số 610, xã Phú Hòa Đông, TP.HCM Xưởng 2: C7C Phạm Hùng, xã Bình Hưng, TP.HCM Email: Cfurni168@gmail.com Web: www.cfurni.vn Facebook: Nội Thất Cfurni Phone: 0932 67 82 67 - 0902 34 93 94" [ref=e748]':
              - 'cell "MST: 0313344129 - Sở kế hoạch và đầu tư TP.HCM cấp ngày 13/7/2015. Office: 198 Đường Số 10, Phường Thông Tây Hội, TP.HCM Showroom 1: 41 Đường A4, Phường Bảy Hiền, TP.HCM Showroom 2: 66A đường A4 (khu K300), Phường Bảy Hiền, TP.HCM Xưởng 1: 25/5A đường số 610, xã Phú Hòa Đông, TP.HCM Xưởng 2: C7C Phạm Hùng, xã Bình Hưng, TP.HCM Email: Cfurni168@gmail.com Web: www.cfurni.vn Facebook: Nội Thất Cfurni Phone: 0932 67 82 67 - 0902 34 93 94" [ref=e749]':
                - paragraph [ref=e750]:
                  - text: "MST: 0313344129 - Sở kế hoạch và đầu tư TP.HCM cấp ngày 13/7/2015."
                  - text: "Office: 198 Đường Số 10, Phường Thông Tây Hội, TP.HCM"
                - paragraph [ref=e751]: "Showroom 1: 41 Đường A4, Phường Bảy Hiền, TP.HCM"
                - paragraph [ref=e752]: "Showroom 2: 66A đường A4 (khu K300), Phường Bảy Hiền, TP.HCM"
                - paragraph [ref=e753]: "Xưởng 1: 25/5A đường số 610, xã Phú Hòa Đông, TP.HCM"
                - paragraph [ref=e754]: "Xưởng 2: C7C Phạm Hùng, xã Bình Hưng, TP.HCM"
                - paragraph [ref=e755]:
                  - text: "Email: Cfurni168@gmail.com"
                  - text: "Web: www.cfurni.vn"
                - paragraph [ref=e756]:
                  - 'link "Facebook: Nội Thất Cfurni" [ref=e757] [cursor=pointer]':
                    - /url: https://www.facebook.com/noithatcfurni/
                - paragraph [ref=e758]: "Phone: 0932 67 82 67 - 0902 34 93 94"
        - paragraph [ref=e759]: Theo dõi chúng tôi tại
        - generic [ref=e760]:
          - link "Facebook" [ref=e761] [cursor=pointer]:
            - /url: https://www.facebook.com/noithatcfurni
            - img "Facebook" [ref=e762]
          - link "Messenger" [ref=e763] [cursor=pointer]:
            - /url: ""
            - img "Messenger" [ref=e764]
          - link "Instargam" [ref=e765] [cursor=pointer]:
            - /url: https://www.instagram.com/cfurni.vn?igsh=cnNhNG43aGhhbzJs
            - img "Instargam" [ref=e766]
          - link "TikTok" [ref=e767] [cursor=pointer]:
            - /url: https://www.tiktok.com/@noithatcfurni?_r=1&_t=ZS-98xhhbBhQua
            - img "TikTok" [ref=e768]
          - link "Youtube" [ref=e769] [cursor=pointer]:
            - /url: https://youtube.com/@noithatcfurni?si=HxSvpE0k9CoN2tWr
            - img "Youtube" [ref=e770]
      - generic [ref=e775]:
        - generic [ref=e776]:
          - paragraph [ref=e777]: Truy cập nhanh
          - list [ref=e778]:
            - listitem [ref=e779]:
              - link "Giới thiệu" [ref=e780] [cursor=pointer]:
                - /url: gioi-thieu
            - listitem [ref=e781]:
              - link "Sản phẩm" [ref=e782] [cursor=pointer]:
                - /url: san-pham
            - listitem [ref=e783]:
              - link "Dự án" [ref=e784] [cursor=pointer]:
                - /url: du-an
            - listitem [ref=e785]:
              - link "Tuyển dụng" [ref=e786] [cursor=pointer]:
                - /url: tuyen-dung
            - listitem [ref=e787]:
              - link "Liên hệ" [ref=e788] [cursor=pointer]:
                - /url: lien-he
        - generic [ref=e789]:
          - paragraph [ref=e790]: Giải pháp
          - list [ref=e791]:
            - listitem [ref=e792]:
              - link "Phòng khách" [ref=e793] [cursor=pointer]:
                - /url: phong-khach
            - listitem [ref=e794]:
              - link "Phòng ăn" [ref=e795] [cursor=pointer]:
                - /url: phong-an
            - listitem [ref=e796]:
              - link "Phòng ngủ" [ref=e797] [cursor=pointer]:
                - /url: phong-ngu
            - listitem [ref=e798]:
              - link "Phòng làm việc" [ref=e799] [cursor=pointer]:
                - /url: phong-lam-viec
        - generic [ref=e800]:
          - paragraph [ref=e801]: Chính sách hỗ trợ
          - list [ref=e802]:
            - listitem [ref=e803]:
              - link "Chính sách đổi trả" [ref=e804] [cursor=pointer]:
                - /url: chinh-sach-doi-tra
            - listitem [ref=e805]:
              - link "Chính sách bảo hành" [ref=e806] [cursor=pointer]:
                - /url: chinh-sach-bao-hanh
            - listitem [ref=e807]:
              - link "Chính sách giao hàng" [ref=e808] [cursor=pointer]:
                - /url: chinh-sach-giao-hang
            - listitem [ref=e809]:
              - link "Chính sách thanh toán" [ref=e810] [cursor=pointer]:
                - /url: chinh-sach-thanh-toan
            - listitem [ref=e811]:
              - link "Chính sách xử lý khiếu nại" [ref=e812] [cursor=pointer]:
                - /url: chinh-sach-xu-ly-khieu-nai
            - listitem [ref=e813]:
              - link "Bảo mật thông tin khách hàng" [ref=e814] [cursor=pointer]:
                - /url: bao-mat-thong-tin-khach-hang
        - generic [ref=e815]:
          - paragraph [ref=e816]: Hotline
          - paragraph [ref=e818]:
            - text: Tư vấn bán hàng
            - text: 0932 67 82 67
            - text: Chăm sóc khách hàng
            - text: 0902 34 93 94
          - link "http://online.gov.vn/nen-tang/4b688d70-4fe8-4619-a929-3c859c5d4206" [ref=e819] [cursor=pointer]:
            - /url: ""
            - img "http://online.gov.vn/nen-tang/4b688d70-4fe8-4619-a929-3c859c5d4206" [ref=e820]
      - generic [ref=e823]:
        - generic [ref=e824]: Copyright ©2026 Công Ty TNHH CFURNI. Thiết kế Web MIMA
        - generic [ref=e825]:
          - generic [ref=e826]:
            - text: "Đang online:"
            - generic [ref=e827]: "22"
          - generic [ref=e828]: "|"
          - generic [ref=e829]:
            - text: "Hôm nay:"
            - generic [ref=e830]: "2"
          - generic [ref=e831]: "|"
          - generic [ref=e832]:
            - text: "Tổng truy cập:"
            - generic [ref=e833]: "378"
    - generic [ref=e834]:
      - link "Map" [ref=e835] [cursor=pointer]:
        - /url: https://maps.app.goo.gl/JD2W7Ho6mb8Hrmsw6
        - img [ref=e839]
      - 'link "Call me: 0932 67 82 67" [ref=e842] [cursor=pointer]':
        - /url: tel:0932678267
        - img [ref=e846]
        - generic [ref=e849]: "Call me: 0932 67 82 67"
      - 'link "Zalo: 0932 67 82 67" [ref=e850] [cursor=pointer]':
        - /url: https://zalo.me/0932678267
        - img [ref=e854]
        - generic [ref=e855]: "Zalo: 0932 67 82 67"
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
              - generic: "76"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 76/100
          - generic:
            - generic: "Đánh giá:"
            - strong: 🟡 KHÁ
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
          - generic: ✅ 16
          - generic: Đạt
        - generic:
          - generic: ❌ 5
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: https://code2.mimadigi.vn/2026/august/cfurni_111926w/
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e856]:
      - generic [ref=e857]: "❌ Chi tiết lỗi cần khắc phục (5/21):"
      - generic [ref=e858]:
        - generic [ref=e859]:
          - generic [ref=e860]: 1. Thẻ Title
          - generic [ref=e861]: 1 lỗi
        - generic [ref=e862]:
          - strong [ref=e864]: "Title phải có nội dung (hiện tại: 0 ký tự)"
          - generic [ref=e865]: ⚠️ Title tag không tồn tại hoặc rỗng!
      - generic [ref=e866]:
        - generic [ref=e867]:
          - generic [ref=e868]: 6. Liên kết (Links)
          - generic [ref=e869]: 1 lỗi
        - generic [ref=e870]:
          - strong [ref=e872]: "Không có broken links (lỗi: 5/96)"
          - generic [ref=e873]: "⚠️ Broken links: he-thong-cua-hang (status: 404), phong-khach (status: 404), phong-ngu (status: 404), phong-an (status: 404), phong-lam-viec (status: 404)"
      - generic [ref=e874]:
        - generic [ref=e875]:
          - generic [ref=e876]: 8. Tốc độ & Core Web Vitals
          - generic [ref=e877]: 3 lỗi
        - generic [ref=e878]:
          - strong [ref=e880]: "[📱 MOBILE (ƯU TIÊN)] Tổng điểm Performance: 45/100 (≥ 60)"
          - generic [ref=e881]: ⚠️ [📱 MOBILE (ƯU TIÊN)] Điểm Performance 45/100 dưới ngưỡng 60. Phân tích chi tiết LCP/CLS/INP bên dưới...
        - generic [ref=e882]:
          - strong [ref=e884]: "[📱 MOBILE (ƯU TIÊN)] LCP (Largest Contentful Paint): 9413ms (< 2500ms)"
          - generic [ref=e885]:
            - text: "⚠️ [📱 MOBILE (ƯU TIÊN)] LCP quá cao: 9413ms (chuẩn: < 2.5s) → Thủ phạm LCP:"
            - img
            - strong [ref=e887]: "[📱 MOBILE (ƯU TIÊN)] CLS (Cumulative Layout Shift): 0.211 (< 0.1)"
            - generic [ref=e888]:
              - text: "⚠️ [📱 MOBILE (ƯU TIÊN)] CLS quá cao: 0.211 (chuẩn: < 0.1) → Thủ phạm CLS: -"
              - generic [ref=e889]:
                - text: "-"
                - generic [ref=e890]: "[Vấn đề]: Các phần tử (không ..."
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 76/100 dưới ngưỡng 96%. Có 5/21 tiêu chí không đạt.
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