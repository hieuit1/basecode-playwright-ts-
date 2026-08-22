# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web/search.spec.ts >> Search Feature Tests >> Search should handle từ khóa chỉ có 1 khoảng trắng
- Location: tests/web/search.spec.ts:98:17

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 30
```

# Page snapshot

```yaml
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
        - textbox "Tìm kiếm sản phẩm...." [ref=e20]
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
  - list [ref=e70]:
    - listitem [ref=e71]:
      - link "Trang chủ" [ref=e72] [cursor=pointer]:
        - /url: https://code2.mimadigi.vn/2026/august/cfurni_111926w/
        - img [ref=e73]
        - generic [ref=e75]: Trang chủ
    - listitem [ref=e76]:
      - text: /
      - link "Sản phẩm" [ref=e77] [cursor=pointer]:
        - /url: https://code2.mimadigi.vn/2026/august/cfurni_111926w/san-pham
  - generic [ref=e81]:
    - heading "Sản phẩm" [level=2] [ref=e83]
    - generic [ref=e84]:
      - generic [ref=e85]:
        - generic [ref=e87]:
          - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1787364264012" [ref=e89] [cursor=pointer]:
            - /url: san-pham-loadtest-1787364264012
            - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1787364264012" [ref=e90]
          - generic [ref=e91]:
            - heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1787364264012" [level=3] [ref=e92]:
              - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1787364264012" [ref=e93] [cursor=pointer]:
                - /url: san-pham-loadtest-1787364264012
            - paragraph [ref=e94]:
              - generic [ref=e95]: 90.000đ
              - generic [ref=e96]: "-10%"
              - generic [ref=e97]: 100.000đ
        - generic [ref=e99]:
          - link "Ghế CF KATAKANA" [ref=e101] [cursor=pointer]:
            - /url: ghe-cf-katakana
            - img "Ghế CF KATAKANA" [ref=e102]
          - generic [ref=e103]:
            - heading "Ghế CF KATAKANA" [level=3] [ref=e104]:
              - link "Ghế CF KATAKANA" [ref=e105] [cursor=pointer]:
                - /url: ghe-cf-katakana
            - paragraph [ref=e106]:
              - generic [ref=e107]: 920.000đ
        - generic [ref=e109]:
          - link "Ghế ngoài trời AV09" [ref=e111] [cursor=pointer]:
            - /url: ghe-ngoai-troi-av09
            - img "Ghế ngoài trời AV09" [ref=e112]
          - generic [ref=e113]:
            - heading "Ghế ngoài trời AV09" [level=3] [ref=e114]:
              - link "Ghế ngoài trời AV09" [ref=e115] [cursor=pointer]:
                - /url: ghe-ngoai-troi-av09
            - paragraph [ref=e116]:
              - generic [ref=e117]: 1.950.000đ
        - generic [ref=e119]:
          - link "KỆ XEGON" [ref=e121] [cursor=pointer]:
            - /url: ke-xegon
            - img "KỆ XEGON" [ref=e122]
          - generic [ref=e123]:
            - heading "KỆ XEGON" [level=3] [ref=e124]:
              - link "KỆ XEGON" [ref=e125] [cursor=pointer]:
                - /url: ke-xegon
            - paragraph [ref=e126]:
              - generic [ref=e127]: Liên hệ
        - generic [ref=e129]:
          - link "Kệ Trang Trí BARA" [ref=e131] [cursor=pointer]:
            - /url: ke-trang-tri-bara
            - img "Kệ Trang Trí BARA" [ref=e132]
          - generic [ref=e133]:
            - heading "Kệ Trang Trí BARA" [level=3] [ref=e134]:
              - link "Kệ Trang Trí BARA" [ref=e135] [cursor=pointer]:
                - /url: ke-trang-tri-bara
            - paragraph [ref=e136]:
              - generic [ref=e137]: Liên hệ
        - generic [ref=e139]:
          - link "Kệ Trang Trí" [ref=e141] [cursor=pointer]:
            - /url: ke-trang-tri1
            - img "Kệ Trang Trí" [ref=e142]
          - generic [ref=e143]:
            - heading "Kệ Trang Trí" [level=3] [ref=e144]:
              - link "Kệ Trang Trí" [ref=e145] [cursor=pointer]:
                - /url: ke-trang-tri1
            - paragraph [ref=e146]:
              - generic [ref=e147]: Liên hệ
        - generic [ref=e149]:
          - link "Kệ Tầng MION" [ref=e151] [cursor=pointer]:
            - /url: ke-tang-mion
            - img "Kệ Tầng MION" [ref=e152]
          - generic [ref=e153]:
            - heading "Kệ Tầng MION" [level=3] [ref=e154]:
              - link "Kệ Tầng MION" [ref=e155] [cursor=pointer]:
                - /url: ke-tang-mion
            - paragraph [ref=e156]:
              - generic [ref=e157]: Liên hệ
        - generic [ref=e159]:
          - link "KỆ FONUN" [ref=e161] [cursor=pointer]:
            - /url: ke-fonun
            - img "KỆ FONUN" [ref=e162]
          - generic [ref=e163]:
            - heading "KỆ FONUN" [level=3] [ref=e164]:
              - link "KỆ FONUN" [ref=e165] [cursor=pointer]:
                - /url: ke-fonun
            - paragraph [ref=e166]:
              - generic [ref=e167]: Liên hệ
        - generic [ref=e169]:
          - link "Ghế quầy OPAL 34" [ref=e171] [cursor=pointer]:
            - /url: ghe-quay-opal-34
            - img "Ghế quầy OPAL 34" [ref=e172]
          - generic [ref=e173]:
            - heading "Ghế quầy OPAL 34" [level=3] [ref=e174]:
              - link "Ghế quầy OPAL 34" [ref=e175] [cursor=pointer]:
                - /url: ghe-quay-opal-34
            - paragraph [ref=e176]:
              - generic [ref=e177]: 950.000.950đ
        - generic [ref=e179]:
          - link "Ghế OAKA QB02" [ref=e181] [cursor=pointer]:
            - /url: ghe-oaka-qb02
            - img "Ghế OAKA QB02" [ref=e182]
          - generic [ref=e183]:
            - heading "Ghế OAKA QB02" [level=3] [ref=e184]:
              - link "Ghế OAKA QB02" [ref=e185] [cursor=pointer]:
                - /url: ghe-oaka-qb02
            - paragraph [ref=e186]:
              - generic [ref=e187]: 1.950.000đ
        - generic [ref=e189]:
          - link "Ghế bar OPUL" [ref=e191] [cursor=pointer]:
            - /url: ghe-bar-opul
            - img "Ghế bar OPUL" [ref=e192]
          - generic [ref=e193]:
            - heading "Ghế bar OPUL" [level=3] [ref=e194]:
              - link "Ghế bar OPUL" [ref=e195] [cursor=pointer]:
                - /url: ghe-bar-opul
            - paragraph [ref=e196]:
              - generic [ref=e197]: 990.000đ
        - generic [ref=e199]:
          - link "Ghế bar FESTO 252" [ref=e201] [cursor=pointer]:
            - /url: ghe-bar-festo-252
            - img "Ghế bar FESTO 252" [ref=e202]
          - generic [ref=e203]:
            - heading "Ghế bar FESTO 252" [level=3] [ref=e204]:
              - link "Ghế bar FESTO 252" [ref=e205] [cursor=pointer]:
                - /url: ghe-bar-festo-252
            - paragraph [ref=e206]:
              - generic [ref=e207]: 1.260.000đ
        - generic [ref=e209]:
          - link "Ghế bar 2511C" [ref=e211] [cursor=pointer]:
            - /url: ghe-bar-2511c
            - img "Ghế bar 2511C" [ref=e212]
          - generic [ref=e213]:
            - heading "Ghế bar 2511C" [level=3] [ref=e214]:
              - link "Ghế bar 2511C" [ref=e215] [cursor=pointer]:
                - /url: ghe-bar-2511c
            - paragraph [ref=e216]:
              - generic [ref=e217]: 940.000đ
        - generic [ref=e219]:
          - link "Bàn CONSOLE 128" [ref=e221] [cursor=pointer]:
            - /url: ban-console-128
            - img "Bàn CONSOLE 128" [ref=e222]
          - generic [ref=e223]:
            - heading "Bàn CONSOLE 128" [level=3] [ref=e224]:
              - link "Bàn CONSOLE 128" [ref=e225] [cursor=pointer]:
                - /url: ban-console-128
            - paragraph [ref=e226]:
              - generic [ref=e227]: 13.500.000đ
        - generic [ref=e229]:
          - link "Bàn CONSOLE 127" [ref=e231] [cursor=pointer]:
            - /url: ban-console-127
            - img "Bàn CONSOLE 127" [ref=e232]
          - generic [ref=e233]:
            - heading "Bàn CONSOLE 127" [level=3] [ref=e234]:
              - link "Bàn CONSOLE 127" [ref=e235] [cursor=pointer]:
                - /url: ban-console-127
            - paragraph [ref=e236]:
              - generic [ref=e237]: 15.900.000đ
        - generic [ref=e239]:
          - link "Bàn CONSOLE 126" [ref=e241] [cursor=pointer]:
            - /url: ban-console-126
            - img "Bàn CONSOLE 126" [ref=e242]
          - generic [ref=e243]:
            - heading "Bàn CONSOLE 126" [level=3] [ref=e244]:
              - link "Bàn CONSOLE 126" [ref=e245] [cursor=pointer]:
                - /url: ban-console-126
            - paragraph [ref=e246]:
              - generic [ref=e247]: 12.900.000đ
        - generic [ref=e249]:
          - link "Bàn CONSOLE 124" [ref=e251] [cursor=pointer]:
            - /url: ban-console-124
            - img "Bàn CONSOLE 124" [ref=e252]
          - generic [ref=e253]:
            - heading "Bàn CONSOLE 124" [level=3] [ref=e254]:
              - link "Bàn CONSOLE 124" [ref=e255] [cursor=pointer]:
                - /url: ban-console-124
            - paragraph [ref=e256]:
              - generic [ref=e257]: 17.500.000đ
        - generic [ref=e259]:
          - link "Bàn CONSOLE 115" [ref=e261] [cursor=pointer]:
            - /url: ban-console-115
            - img "Bàn CONSOLE 115" [ref=e262]
          - generic [ref=e263]:
            - heading "Bàn CONSOLE 115" [level=3] [ref=e264]:
              - link "Bàn CONSOLE 115" [ref=e265] [cursor=pointer]:
                - /url: ban-console-115
            - paragraph [ref=e266]:
              - generic [ref=e267]: 13.900.000đ
        - generic [ref=e269]:
          - link "Bàn Tab MUSE" [ref=e271] [cursor=pointer]:
            - /url: ban-tab-muse
            - img "Bàn Tab MUSE" [ref=e272]
          - generic [ref=e273]:
            - heading "Bàn Tab MUSE" [level=3] [ref=e274]:
              - link "Bàn Tab MUSE" [ref=e275] [cursor=pointer]:
                - /url: ban-tab-muse
            - paragraph [ref=e276]:
              - generic [ref=e277]: 6.500.000đ
        - generic [ref=e279]:
          - link "Bàn nhựa A809" [ref=e281] [cursor=pointer]:
            - /url: ban-nhua-a809
            - img "Bàn nhựa A809" [ref=e282]
          - generic [ref=e283]:
            - heading "Bàn nhựa A809" [level=3] [ref=e284]:
              - link "Bàn nhựa A809" [ref=e285] [cursor=pointer]:
                - /url: ban-nhua-a809
            - paragraph [ref=e286]:
              - generic [ref=e287]: 1.220.000đ
        - generic [ref=e289]:
          - link "Bàn CF HURI B31A" [ref=e291] [cursor=pointer]:
            - /url: ban-cf-huri-b31a
            - img "Bàn CF HURI B31A" [ref=e292]
          - generic [ref=e293]:
            - heading "Bàn CF HURI B31A" [level=3] [ref=e294]:
              - link "Bàn CF HURI B31A" [ref=e295] [cursor=pointer]:
                - /url: ban-cf-huri-b31a
            - paragraph [ref=e296]:
              - generic [ref=e297]: 1.880.000đ
        - generic [ref=e299]:
          - link "Bàn CF HERU B16" [ref=e301] [cursor=pointer]:
            - /url: ban-cf-heru-b16
            - img "Bàn CF HERU B16" [ref=e302]
          - generic [ref=e303]:
            - heading "Bàn CF HERU B16" [level=3] [ref=e304]:
              - link "Bàn CF HERU B16" [ref=e305] [cursor=pointer]:
                - /url: ban-cf-heru-b16
            - paragraph [ref=e306]:
              - generic [ref=e307]: 2.870.000đ
        - generic [ref=e309]:
          - link "Bàn cafe S134T" [ref=e311] [cursor=pointer]:
            - /url: ban-cafe-s134t
            - img "Bàn cafe S134T" [ref=e312]
          - generic [ref=e313]:
            - heading "Bàn cafe S134T" [level=3] [ref=e314]:
              - link "Bàn cafe S134T" [ref=e315] [cursor=pointer]:
                - /url: ban-cafe-s134t
            - paragraph [ref=e316]:
              - generic [ref=e317]: 1.450.000đ
        - generic [ref=e319]:
          - link "Bàn Bar T02-10" [ref=e321] [cursor=pointer]:
            - /url: ban-bar-t02-10
            - img "Bàn Bar T02-10" [ref=e322]
          - generic [ref=e323]:
            - heading "Bàn Bar T02-10" [level=3] [ref=e324]:
              - link "Bàn Bar T02-10" [ref=e325] [cursor=pointer]:
                - /url: ban-bar-t02-10
            - paragraph [ref=e326]:
              - generic [ref=e327]: 1.840.000đ
        - generic [ref=e329]:
          - link "Bàn Bar LULY" [ref=e331] [cursor=pointer]:
            - /url: ban-bar-luly
            - img "Bàn Bar LULY" [ref=e332]
          - generic [ref=e333]:
            - heading "Bàn Bar LULY" [level=3] [ref=e334]:
              - link "Bàn Bar LULY" [ref=e335] [cursor=pointer]:
                - /url: ban-bar-luly
            - paragraph [ref=e336]:
              - generic [ref=e337]: 2.490.000đ
        - generic [ref=e339]:
          - link "Bàn Bar Livo" [ref=e341] [cursor=pointer]:
            - /url: ban-bar-livo
            - img "Bàn Bar Livo" [ref=e342]
          - generic [ref=e343]:
            - heading "Bàn Bar Livo" [level=3] [ref=e344]:
              - link "Bàn Bar Livo" [ref=e345] [cursor=pointer]:
                - /url: ban-bar-livo
            - paragraph [ref=e346]:
              - generic [ref=e347]: 2.490.000đ
        - generic [ref=e349]:
          - link "Bàn bar CANFA B30A" [ref=e351] [cursor=pointer]:
            - /url: ban-bar-canfa-b30a
            - img "Bàn bar CANFA B30A" [ref=e352]
          - generic [ref=e353]:
            - heading "Bàn bar CANFA B30A" [level=3] [ref=e354]:
              - link "Bàn bar CANFA B30A" [ref=e355] [cursor=pointer]:
                - /url: ban-bar-canfa-b30a
            - paragraph [ref=e356]:
              - generic [ref=e357]: 2.650.000đ
        - generic [ref=e359]:
          - link "Bàn Bar BECARO" [ref=e361] [cursor=pointer]:
            - /url: ban-bar-becaro
            - img "Bàn Bar BECARO" [ref=e362]
          - generic [ref=e363]:
            - heading "Bàn Bar BECARO" [level=3] [ref=e364]:
              - link "Bàn Bar BECARO" [ref=e365] [cursor=pointer]:
                - /url: ban-bar-becaro
            - paragraph [ref=e366]:
              - generic [ref=e367]: 11.020.000đ
        - generic [ref=e369]:
          - link "Bàn tab XALAX" [ref=e371] [cursor=pointer]:
            - /url: ban-tab-xalax
            - img "Bàn tab XALAX" [ref=e372]
          - generic [ref=e373]:
            - heading "Bàn tab XALAX" [level=3] [ref=e374]:
              - link "Bàn tab XALAX" [ref=e375] [cursor=pointer]:
                - /url: ban-tab-xalax
            - paragraph [ref=e376]:
              - generic [ref=e377]: 2.190.000đ
        - generic [ref=e379]:
          - link "Bàn tab VYNAL" [ref=e381] [cursor=pointer]:
            - /url: ban-tab-vynal
            - img "Bàn tab VYNAL" [ref=e382]
          - generic [ref=e383]:
            - heading "Bàn tab VYNAL" [level=3] [ref=e384]:
              - link "Bàn tab VYNAL" [ref=e385] [cursor=pointer]:
                - /url: ban-tab-vynal
            - paragraph [ref=e386]:
              - generic [ref=e387]: 3.990.000đ
      - link "Xem thêm (55) sản phẩm" [ref=e389] [cursor=pointer]:
        - /url: javascript:;
        - text: Xem thêm
        - generic [ref=e390]: (55)
        - text: sản phẩm
  - generic [ref=e395]:
    - generic [ref=e397]:
      - paragraph [ref=e398]:
        - img "Xưởng & Showroom" [ref=e399]
      - generic [ref=e400]:
        - heading "Xưởng & Showroom" [level=3] [ref=e401]
        - paragraph [ref=e402]: Đặt lịch xe trực tiếp sản phẩm
    - generic [ref=e404]:
      - paragraph [ref=e405]:
        - img "Bảo hành khung 10 năm" [ref=e406]
      - generic [ref=e407]:
        - heading "Bảo hành khung 10 năm" [level=3] [ref=e408]
        - paragraph [ref=e409]: Khung gỗ sồi chắc chắn
    - generic [ref=e411]:
      - paragraph [ref=e412]:
        - img "Mút Coolsafe 4 năm" [ref=e413]
      - generic [ref=e414]:
        - heading "Mút Coolsafe 4 năm" [level=3] [ref=e415]
        - paragraph [ref=e416]: Chống cháy đạt tiêu chuẩn
    - generic [ref=e418]:
      - paragraph [ref=e419]:
        - img "Chứng chỉ EQ vật liệu" [ref=e420]
      - generic [ref=e421]:
        - heading "Chứng chỉ EQ vật liệu" [level=3] [ref=e422]
        - paragraph [ref=e423]: An toàn cho trẻ con & thai phụ
    - generic [ref=e425]:
      - paragraph [ref=e426]:
        - img "10,000+ khách hàng" [ref=e427]
      - generic [ref=e428]:
        - heading "10,000+ khách hàng" [level=3] [ref=e429]
        - paragraph [ref=e430]: Đánh giá tốt trên website
  - generic [ref=e431]:
    - generic [ref=e434]:
      - generic [ref=e435]:
        - link "CÔNG TY TNHH CFURNI" [ref=e436] [cursor=pointer]:
          - /url: https://code2.mimadigi.vn/2026/august/cfurni_111926w/
          - img "CÔNG TY TNHH CFURNI" [ref=e437]
        - paragraph [ref=e438]: CÔNG TY TNHH CFURNI
        - table [ref=e440]:
          - rowgroup [ref=e441]:
            - 'row "MST: 0313344129 - Sở kế hoạch và đầu tư TP.HCM cấp ngày 13/7/2015. Office: 198 Đường Số 10, Phường Thông Tây Hội, TP.HCM Showroom 1: 41 Đường A4, Phường Bảy Hiền, TP.HCM Showroom 2: 66A đường A4 (khu K300), Phường Bảy Hiền, TP.HCM Xưởng 1: 25/5A đường số 610, xã Phú Hòa Đông, TP.HCM Xưởng 2: C7C Phạm Hùng, xã Bình Hưng, TP.HCM Email: Cfurni168@gmail.com Web: www.cfurni.vn Facebook: Nội Thất Cfurni Phone: 0932 67 82 67 - 0902 34 93 94" [ref=e442]':
              - 'cell "MST: 0313344129 - Sở kế hoạch và đầu tư TP.HCM cấp ngày 13/7/2015. Office: 198 Đường Số 10, Phường Thông Tây Hội, TP.HCM Showroom 1: 41 Đường A4, Phường Bảy Hiền, TP.HCM Showroom 2: 66A đường A4 (khu K300), Phường Bảy Hiền, TP.HCM Xưởng 1: 25/5A đường số 610, xã Phú Hòa Đông, TP.HCM Xưởng 2: C7C Phạm Hùng, xã Bình Hưng, TP.HCM Email: Cfurni168@gmail.com Web: www.cfurni.vn Facebook: Nội Thất Cfurni Phone: 0932 67 82 67 - 0902 34 93 94" [ref=e443]':
                - paragraph [ref=e444]:
                  - text: "MST: 0313344129 - Sở kế hoạch và đầu tư TP.HCM cấp ngày 13/7/2015."
                  - text: "Office: 198 Đường Số 10, Phường Thông Tây Hội, TP.HCM"
                - paragraph [ref=e445]: "Showroom 1: 41 Đường A4, Phường Bảy Hiền, TP.HCM"
                - paragraph [ref=e446]: "Showroom 2: 66A đường A4 (khu K300), Phường Bảy Hiền, TP.HCM"
                - paragraph [ref=e447]: "Xưởng 1: 25/5A đường số 610, xã Phú Hòa Đông, TP.HCM"
                - paragraph [ref=e448]: "Xưởng 2: C7C Phạm Hùng, xã Bình Hưng, TP.HCM"
                - paragraph [ref=e449]:
                  - text: "Email: Cfurni168@gmail.com"
                  - text: "Web: www.cfurni.vn"
                - paragraph [ref=e450]:
                  - 'link "Facebook: Nội Thất Cfurni" [ref=e451] [cursor=pointer]':
                    - /url: https://www.facebook.com/noithatcfurni/
                - paragraph [ref=e452]: "Phone: 0932 67 82 67 - 0902 34 93 94"
        - paragraph [ref=e453]: Theo dõi chúng tôi tại
        - generic [ref=e454]:
          - link "Facebook" [ref=e455] [cursor=pointer]:
            - /url: https://www.facebook.com/noithatcfurni
            - img "Facebook" [ref=e456]
          - link "Messenger" [ref=e457] [cursor=pointer]:
            - /url: ""
            - img "Messenger" [ref=e458]
          - link "Instargam" [ref=e459] [cursor=pointer]:
            - /url: https://www.instagram.com/cfurni.vn?igsh=cnNhNG43aGhhbzJs
            - img "Instargam" [ref=e460]
          - link "TikTok" [ref=e461] [cursor=pointer]:
            - /url: https://www.tiktok.com/@noithatcfurni?_r=1&_t=ZS-98xhhbBhQua
            - img "TikTok" [ref=e462]
          - link "Youtube" [ref=e463] [cursor=pointer]:
            - /url: https://youtube.com/@noithatcfurni?si=HxSvpE0k9CoN2tWr
            - img "Youtube" [ref=e464]
      - img "CÔNG TY TNHH CFURNI" [ref=e467]
    - generic [ref=e470]:
      - generic [ref=e471]:
        - paragraph [ref=e472]: Truy cập nhanh
        - list [ref=e473]:
          - listitem [ref=e474]:
            - link "Giới thiệu" [ref=e475] [cursor=pointer]:
              - /url: gioi-thieu
          - listitem [ref=e476]:
            - link "Sản phẩm" [ref=e477] [cursor=pointer]:
              - /url: san-pham
          - listitem [ref=e478]:
            - link "Dự án" [ref=e479] [cursor=pointer]:
              - /url: du-an
          - listitem [ref=e480]:
            - link "Tuyển dụng" [ref=e481] [cursor=pointer]:
              - /url: tuyen-dung
          - listitem [ref=e482]:
            - link "Liên hệ" [ref=e483] [cursor=pointer]:
              - /url: lien-he
      - generic [ref=e484]:
        - paragraph [ref=e485]: Giải pháp
        - list [ref=e486]:
          - listitem [ref=e487]:
            - link "Phòng khách" [ref=e488] [cursor=pointer]:
              - /url: phong-khach
          - listitem [ref=e489]:
            - link "Phòng ăn" [ref=e490] [cursor=pointer]:
              - /url: phong-an
          - listitem [ref=e491]:
            - link "Phòng ngủ" [ref=e492] [cursor=pointer]:
              - /url: phong-ngu
          - listitem [ref=e493]:
            - link "Phòng làm việc" [ref=e494] [cursor=pointer]:
              - /url: phong-lam-viec
      - generic [ref=e495]:
        - paragraph [ref=e496]: Chính sách hỗ trợ
        - list [ref=e497]:
          - listitem [ref=e498]:
            - link "Chính sách đổi trả" [ref=e499] [cursor=pointer]:
              - /url: chinh-sach-doi-tra
          - listitem [ref=e500]:
            - link "Chính sách bảo hành" [ref=e501] [cursor=pointer]:
              - /url: chinh-sach-bao-hanh
          - listitem [ref=e502]:
            - link "Chính sách giao hàng" [ref=e503] [cursor=pointer]:
              - /url: chinh-sach-giao-hang
          - listitem [ref=e504]:
            - link "Chính sách thanh toán" [ref=e505] [cursor=pointer]:
              - /url: chinh-sach-thanh-toan
          - listitem [ref=e506]:
            - link "Chính sách xử lý khiếu nại" [ref=e507] [cursor=pointer]:
              - /url: chinh-sach-xu-ly-khieu-nai
          - listitem [ref=e508]:
            - link "Bảo mật thông tin khách hàng" [ref=e509] [cursor=pointer]:
              - /url: bao-mat-thong-tin-khach-hang
      - generic [ref=e510]:
        - paragraph [ref=e511]: Hotline
        - paragraph [ref=e513]:
          - text: Tư vấn bán hàng
          - text: 0932 67 82 67
          - text: Chăm sóc khách hàng
          - text: 0902 34 93 94
        - link "http://online.gov.vn/nen-tang/4b688d70-4fe8-4619-a929-3c859c5d4206" [ref=e514] [cursor=pointer]:
          - /url: ""
          - img "http://online.gov.vn/nen-tang/4b688d70-4fe8-4619-a929-3c859c5d4206" [ref=e515]
    - generic [ref=e518]:
      - generic [ref=e519]: Copyright ©2026 Công Ty TNHH CFURNI. Thiết kế Web MIMA
      - generic [ref=e520]:
        - generic [ref=e521]:
          - text: "Đang online:"
          - generic [ref=e522]: "1410"
        - generic [ref=e523]: "|"
        - generic [ref=e524]:
          - text: "Hôm nay:"
          - generic [ref=e525]: "11"
        - generic [ref=e526]: "|"
        - generic [ref=e527]:
          - text: "Tổng truy cập:"
          - generic [ref=e528]: "321"
  - generic [ref=e529]:
    - link "Map" [ref=e530] [cursor=pointer]:
      - /url: https://maps.app.goo.gl/JD2W7Ho6mb8Hrmsw6
      - img [ref=e534]
    - 'link "Call me: 0932 67 82 67" [ref=e537] [cursor=pointer]':
      - /url: tel:0932678267
      - img [ref=e541]
      - generic [ref=e544]: "Call me: 0932 67 82 67"
    - 'link "Zalo: 0932 67 82 67" [ref=e545] [cursor=pointer]':
      - /url: https://zalo.me/0932678267
      - img [ref=e549]
      - generic [ref=e550]: "Zalo: 0932 67 82 67"
```

# Test source

```ts
  42  |                     dynamicKeyword = await searchPage.getDynamicKeywordFromHome();
  43  |                     console.log(`Từ khóa ngẫu nhiên đã cào được: "${dynamicKeyword}"`);
  44  |                 });
  45  | 
  46  |                 await test.step(`2 Nhập từ khóa "${dynamicKeyword}" vào thanh search`, async () => {
  47  |                     await searchPage.searchKeyword(dynamicKeyword);
  48  |                 });
  49  | 
  50  |                 await test.step("3 Kiểm tra kết quả tìm kiếm (Hỗ trợ 2 trường hợp)", async () => {
  51  |                     // Kiểm tra xem web có nút search không
  52  |                     const hasSearchButton = await searchPage.searchButton.isVisible({ timeout: 2000 }).catch(() => false);
  53  | 
  54  |                     if (hasSearchButton) {
  55  |                         // Trương hợp 2: Web mới (Click button -> Chuyển sang trang kết quả)
  56  |                         await Promise.all([
  57  |                             page.waitForNavigation({ waitUntil: 'domcontentloaded' }).catch(() => { }),
  58  |                             searchPage.searchButton.click()
  59  |                         ]);
  60  | 
  61  |                         await TestHelper.takeScreenshot(page, 'Trang kết quả tìm kiếm');
  62  | 
  63  |                         const searchChunk = dynamicKeyword.substring(0, 15).toLowerCase();
  64  |                         const isProductVisible = await page.locator(`text=${searchChunk}`).first().isVisible({ timeout: 5000 }).catch(() => false);
  65  | 
  66  |                         if (!isProductVisible) {
  67  |                             const allText = await page.locator('body').innerText();
  68  |                             expect(allText.toLowerCase()).toContain(searchChunk);
  69  |                         } else {
  70  |                             expect(isProductVisible).toBeTruthy();
  71  |                         }
  72  |                     } else {
  73  |                         // Trường hợp 1: Web cũ (Dropdown AJAX)
  74  |                         await searchPage.waitForDropdown();
  75  |                         await TestHelper.takeScreenshot(page, 'Kết quả tìm kiếm hiển thị dropdown');
  76  | 
  77  |                         const resultItems = searchPage.getResultItems();
  78  |                         const count = await resultItems.count();
  79  |                         expect(count).toBeGreaterThan(0);
  80  | 
  81  |                         let foundMatch = false;
  82  |                         for (let i = 0; i < count; i++) {
  83  |                             const title = await resultItems.nth(i).getAttribute('title');
  84  |                             const searchChunk = dynamicKeyword.substring(0, 15).toLowerCase();
  85  |                             if (title && title.toLowerCase().includes(searchChunk)) {
  86  |                                 foundMatch = true;
  87  |                                 break;
  88  |                             }
  89  |                         }
  90  |                         expect(foundMatch).toBeTruthy();
  91  |                     }
  92  |                 });
  93  |             }
  94  |         );
  95  | 
  96  |         // ==================== DATA-DRIVEN NEGATIVE TEST CASES ====================
  97  |         invalidSearchCases.forEach((data) => {
  98  |             test(
  99  |                 `Search should handle ${data.scenario}`,
  100 |                 {
  101 |                     tag: [
  102 |                         `@priority:${data.priority}`,
  103 |                         "@regression",
  104 |                         "@negative",
  105 |                     ],
  106 |                     annotation: [{ type: "severity", description: data.severity }],
  107 |                 },
  108 |                 async ({ page }) => {
  109 |                     await allure.story(`Invalid Search: ${data.scenario.toUpperCase()}`);
  110 | 
  111 |                     await test.step(`Nhập từ khóa: '${data.keyword}'`, async () => {
  112 |                         await searchPage.searchKeyword(data.keyword);
  113 |                     });
  114 | 
  115 |                     await test.step("Xác nhận hệ thống xử lý đúng (không trả về kết quả)", async () => {
  116 |                         await TestHelper.delay(page, 1000);
  117 | 
  118 |                         const hasSearchButton = await searchPage.searchButton.isVisible({ timeout: 1000 }).catch(() => false);
  119 | 
  120 |                         if (hasSearchButton) {
  121 |                             // Nhấn tìm kiếm
  122 |                             await searchPage.searchButton.click();
  123 | 
  124 |                             // Bắt lỗi khoảng trắng / rỗng (Một số web sẽ báo lỗi, một số web sẽ cho qua và trả về 0 kết quả)
  125 |                             let shouldCheckZeroProducts = true;
  126 |                             if (data.keyword.trim() === "") {
  127 |                                 const emptyMsg = page.locator("//div[contains(text(),'Chưa nhập từ khóa tìm kiếm')]");
  128 |                                 const isMsgVisible = await emptyMsg.isVisible({ timeout: 2000 }).catch(() => false);
  129 |                                 if (isMsgVisible) {
  130 |                                     await expect(emptyMsg).toBeVisible();
  131 |                                     shouldCheckZeroProducts = false;
  132 |                                 }
  133 |                             }
  134 | 
  135 |                             if (shouldCheckZeroProducts) {
  136 |                                 await page.waitForLoadState('domcontentloaded').catch(() => { });
  137 |                                 await TestHelper.delay(page, 2000);
  138 | 
  139 |                                 const products = searchPage.getProductElementsOnPage();
  140 |                                 const productCount = await products.count();
  141 | 
> 142 |                                 expect(productCount).toBe(0);
      |                                                      ^ Error: expect(received).toBe(expected) // Object.is equality
  143 |                             }
  144 | 
  145 |                         } else {
  146 |                             const isVisible = await searchPage.searchResultDropdown.isVisible();
  147 | 
  148 |                             if (isVisible) {
  149 |                                 const count = await searchPage.getResultItems().count();
  150 |                                 expect(count).toBe(0);
  151 |                             }
  152 |                         }
  153 | 
  154 |                         await TestHelper.takeScreenshot(page, `Kết quả tìm kiếm cho ${data.scenario}`);
  155 |                     });
  156 |                 }
  157 |             );
  158 |         });
  159 |     });
  160 | }
  161 | 
```