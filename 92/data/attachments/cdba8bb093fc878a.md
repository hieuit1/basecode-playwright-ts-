# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Dự án (/du-an)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 79/100 dưới ngưỡng 96%. Có 5/24 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e6]:
      - link "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e8] [cursor=pointer]:
        - /url: https://code3.mimadigi.vn/2026/august/kythuatquocte_109926w/
        - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e9]
      - generic [ref=e10]:
        - generic [ref=e11]:
          - generic [ref=e12]:
            - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e13]
            - generic [ref=e14]:
              - text: Miền Nam
              - link "0913410044" [ref=e15] [cursor=pointer]:
                - /url: tel:0913410044
          - generic [ref=e16]:
            - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e17]
            - generic [ref=e18]:
              - text: Miền Bắc
              - link "0913410044" [ref=e19] [cursor=pointer]:
                - /url: tel:0913410044
          - generic [ref=e20]:
            - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e21]
            - generic [ref=e22]:
              - text: Miền Trung
              - link "0913410044" [ref=e23] [cursor=pointer]:
                - /url: tel:0913410044
          - generic [ref=e24]:
            - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e25]
            - generic [ref=e26]:
              - text: Email
              - link "xuanhieu.mima@gmail.com" [ref=e27] [cursor=pointer]:
                - /url: mailto:xuanhieu.mima@gmail.com
          - generic [ref=e28]:
            - link "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e29] [cursor=pointer]:
              - /url: ngon-ngu/vi/
              - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e30]
            - link "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e31] [cursor=pointer]:
              - /url: ngon-ngu/en/
              - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e32]
        - list [ref=e33]:
          - listitem [ref=e34]:
            - link "Trang chủ" [ref=e35] [cursor=pointer]:
              - /url: ""
          - listitem [ref=e36]
          - listitem [ref=e37]:
            - link "Giới thiệu" [ref=e38] [cursor=pointer]:
              - /url: gioi-thieu
          - listitem [ref=e39]
          - listitem [ref=e40]:
            - link "Sản phẩm" [ref=e41] [cursor=pointer]:
              - /url: san-pham
              - text: Sản phẩm
              - img [ref=e42]
          - listitem [ref=e44]
          - listitem [ref=e45]:
            - link "Nhà cung cấp" [ref=e46] [cursor=pointer]:
              - /url: nha-cung-cap
          - listitem [ref=e47]
          - listitem [ref=e48]:
            - link "Dự án" [ref=e49] [cursor=pointer]:
              - /url: du-an
          - listitem [ref=e50]
          - listitem [ref=e51]:
            - link "Góc kỹ thuật" [ref=e52] [cursor=pointer]:
              - /url: goc-ky-thuat
          - listitem [ref=e53]
          - listitem [ref=e54]:
            - link "Liên hệ" [ref=e55] [cursor=pointer]:
              - /url: lien-he
          - listitem [ref=e56]
          - listitem [ref=e57]:
            - generic [ref=e58]:
              - paragraph [ref=e59] [cursor=pointer]:
                - img "Search" [ref=e60]
              - generic [ref=e61]:
                - textbox "Nhập từ khóa cần tìm..."
                - paragraph [ref=e62] [cursor=pointer]:
                  - generic [ref=e63]: 
    - list [ref=e66]:
      - listitem [ref=e67]:
        - link "Trang chủ" [ref=e68] [cursor=pointer]:
          - /url: https://code3.mimadigi.vn/2026/august/kythuatquocte_109926w/
          - img [ref=e69]
          - generic [ref=e71]: Trang chủ
      - listitem [ref=e72]:
        - text: /
        - link "Dự án" [ref=e73] [cursor=pointer]:
          - /url: https://code3.mimadigi.vn/2026/august/kythuatquocte_109926w/du-an
    - generic [ref=e74]:
      - generic [ref=e77]:
        - generic [ref=e79]: Dự án
        - generic [ref=e80]:
          - button "Tất cả" [ref=e81] [cursor=pointer]
          - button "Đã thi công" [ref=e82] [cursor=pointer]
          - button "Đang thi công" [ref=e83] [cursor=pointer]
        - generic [ref=e85]:
          - link "Dự án nhà máy lọc hóa dầu (1) (1) (1) Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế Dự án nhà máy lọc hóa dầu (1) (1) (1)" [ref=e87] [cursor=pointer]:
            - /url: du-an-nha-may-loc-hoa-dau-1-1-1
            - img "Dự án nhà máy lọc hóa dầu (1) (1) (1)" [ref=e89]
            - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e91]
            - generic [ref=e92]:
              - heading "Dự án nhà máy lọc hóa dầu (1) (1) (1)" [level=3] [ref=e93]
              - paragraph
          - link "Dự án nhà máy lọc hóa dầu (1) (1) Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế Dự án nhà máy lọc hóa dầu (1) (1)" [ref=e95] [cursor=pointer]:
            - /url: du-an-nha-may-loc-hoa-dau-1-1
            - img "Dự án nhà máy lọc hóa dầu (1) (1)" [ref=e97]
            - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e99]
            - generic [ref=e100]:
              - heading "Dự án nhà máy lọc hóa dầu (1) (1)" [level=3] [ref=e101]
              - paragraph
          - link "Dự án nhà máy lọc hóa dầu (1) Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế Dự án nhà máy lọc hóa dầu (1)" [ref=e103] [cursor=pointer]:
            - /url: du-an-nha-may-loc-hoa-dau-1
            - img "Dự án nhà máy lọc hóa dầu (1)" [ref=e105]
            - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e107]
            - generic [ref=e108]:
              - heading "Dự án nhà máy lọc hóa dầu (1)" [level=3] [ref=e109]
              - paragraph
          - link "Dự án nhà máy lọc hóa dầu Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế Dự án nhà máy lọc hóa dầu" [ref=e111] [cursor=pointer]:
            - /url: du-an-nha-may-loc-hoa-dau
            - img "Dự án nhà máy lọc hóa dầu" [ref=e113]
            - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e115]
            - generic [ref=e116]:
              - heading "Dự án nhà máy lọc hóa dầu" [level=3] [ref=e117]
              - paragraph
          - link "Dự án sân bay Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế Dự án sân bay Tập đoàn Thiên Minh chuyên cung cấp các dịch vụ tư vấn về pháp luật, chủ trương, chính sách đầu tư của Việt Nam nói chung và các chính sách pháp luật liên quan" [ref=e119] [cursor=pointer]:
            - /url: du-an-san-bay
            - img "Dự án sân bay" [ref=e121]
            - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e123]
            - generic [ref=e124]:
              - heading "Dự án sân bay" [level=3] [ref=e125]
              - paragraph [ref=e126]: Tập đoàn Thiên Minh chuyên cung cấp các dịch vụ tư vấn về pháp luật, chủ trương, chính sách đầu tư của Việt Nam nói chung và các chính sách pháp luật liên quan
          - link "Dự án nhà máy giấy Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế Dự án nhà máy giấy Tổng Diện tích đất của cụm công nghiệp theo quy hoạch là 26,5 ha hiện nay đã đền bù GPMB được 60% diện tích khu đất, Thi công xây dựng hạ tầng xong phần hạng m" [ref=e128] [cursor=pointer]:
            - /url: du-an-nha-may-giay
            - img "Dự án nhà máy giấy" [ref=e130]
            - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e132]
            - generic [ref=e133]:
              - heading "Dự án nhà máy giấy" [level=3] [ref=e134]
              - paragraph [ref=e135]: Tổng Diện tích đất của cụm công nghiệp theo quy hoạch là 26,5 ha hiện nay đã đền bù GPMB được 60% diện tích khu đất, Thi công xây dựng hạ tầng xong phần hạng m
          - link "Dự án nhà máy bia Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế Dự án nhà máy bia Theo quy hoạch được Thủ tướng Chính phủ chấp thuận đến năm 2020, tỉnh Hà Nam sẽ phát triển 8 KCN với tổng diện tích là 2.534 ha. Đến thời điểm này, tỉnh có 8 KC" [ref=e137] [cursor=pointer]:
            - /url: du-an-nha-may-bia
            - img "Dự án nhà máy bia" [ref=e139]
            - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e141]
            - generic [ref=e142]:
              - heading "Dự án nhà máy bia" [level=3] [ref=e143]
              - paragraph [ref=e144]: Theo quy hoạch được Thủ tướng Chính phủ chấp thuận đến năm 2020, tỉnh Hà Nam sẽ phát triển 8 KCN với tổng diện tích là 2.534 ha. Đến thời điểm này, tỉnh có 8 KC
          - link "Dự án nhà máy điện Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế Dự án nhà máy điện PGTech là nhà phân phối các loại van công nghiệp và thiết bị cơ điện tại Đà Nẵng và các tỉnh thành trên cả nước và một số nước trong khu vực. Trải qua nhiều dự" [ref=e146] [cursor=pointer]:
            - /url: du-an-nha-may-dien
            - img "Dự án nhà máy điện" [ref=e148]
            - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e150]
            - generic [ref=e151]:
              - heading "Dự án nhà máy điện" [level=3] [ref=e152]
              - paragraph [ref=e153]: PGTech là nhà phân phối các loại van công nghiệp và thiết bị cơ điện tại Đà Nẵng và các tỉnh thành trên cả nước và một số nước trong khu vực. Trải qua nhiều dự
      - generic [ref=e155]:
        - heading "Đối tác & nhà cung cấp" [level=2] [ref=e157]
        - generic [ref=e160]:
          - generic [ref=e162]:
            - link "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e164] [cursor=pointer]:
              - /url: ""
              - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e165]
            - link "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e167] [cursor=pointer]:
              - /url: ""
              - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e168]
          - generic [ref=e170]:
            - link "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e172] [cursor=pointer]:
              - /url: ""
              - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e173]
            - link "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e175] [cursor=pointer]:
              - /url: ""
              - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e176]
          - generic [ref=e178]:
            - link "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e180] [cursor=pointer]:
              - /url: ""
              - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e181]
            - link "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e183] [cursor=pointer]:
              - /url: ""
              - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e184]
          - generic [ref=e186]:
            - link "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e188] [cursor=pointer]:
              - /url: ""
              - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e189]
            - link "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e191] [cursor=pointer]:
              - /url: ""
              - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e192]
          - generic [ref=e194]:
            - link "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e196] [cursor=pointer]:
              - /url: ""
              - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e197]
            - link "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e199] [cursor=pointer]:
              - /url: ""
              - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e200]
          - generic [ref=e202]:
            - link "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e204] [cursor=pointer]:
              - /url: ""
              - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e205]
            - link "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e207] [cursor=pointer]:
              - /url: ""
              - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e208]
          - generic [ref=e210]:
            - link "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e212] [cursor=pointer]:
              - /url: ""
              - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e213]
            - link "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e215] [cursor=pointer]:
              - /url: ""
              - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e216]
          - link "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e220] [cursor=pointer]:
            - /url: ""
            - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e221]
    - generic [ref=e222]:
      - 'link "Call me: 0913410044" [ref=e223] [cursor=pointer]':
        - /url: tel:0913410044
        - img [ref=e227]
        - generic [ref=e230]: "Call me: 0913410044"
      - 'link "Zalo: 0913410044" [ref=e231] [cursor=pointer]':
        - /url: https://zalo.me/0913410044
        - img [ref=e235]
        - generic [ref=e237]: "Zalo: 0913410044"
  - contentinfo [ref=e238]:
    - generic [ref=e239]:
      - generic [ref=e240]:
        - link "Cty TNHH TM Kỹ Thuật Quốc Tế" [ref=e241] [cursor=pointer]:
          - /url: "#"
          - img "Cty TNHH TM Kỹ Thuật Quốc Tế" [ref=e242]
        - img "Mã QR website ITTCO" [ref=e243]
      - generic [ref=e244]:
        - heading "Cty TNHH TM Kỹ Thuật Quốc Tế" [level=2] [ref=e245]
        - paragraph [ref=e246]:
          - text: "Trụ sở: 113 Bình Thới, Phường Phú Thọ, Tp Hồ Chí Minh, Việt Nam"
          - text: "Chi nhánh miền Bắc: Số 15, Ngõ 2, Thọ Tháp, Phường Cầu Giấy, Tp. Hà Nội, Việt Nam"
          - text: "Chi nhánh miền Trung: 77 Trưng Nữ Vương, Phường Hải Châu, Tp. Đà Nẵng, Việt Nam"
          - text: "Thành lập: Năm 2002"
          - text: "Công ty chúng tôi là đại lý uỷ quyền phân phối cho các nhãn hiệu nổi tiếng của Nhật, Đức, Mỹ, Ý, ... như: TOYO, KITZ, ASAHI, LESER, VENN, TOZEN, TLV, US HOSE, IWAKI, VALQUA, YAMAMOTO, WISE,"
      - generic [ref=e247]:
        - heading "Truy cập nhanh" [level=2] [ref=e248]
        - list [ref=e249]:
          - listitem [ref=e250]:
            - link "Giới thiệu" [ref=e251] [cursor=pointer]:
              - /url: gioi-thieu
          - listitem [ref=e252]:
            - link "Sản phẩm" [ref=e253] [cursor=pointer]:
              - /url: san-pham
          - listitem [ref=e254]:
            - link "Nhà cung cấp" [ref=e255] [cursor=pointer]:
              - /url: nha-cung-cap
          - listitem [ref=e256]:
            - link "Dự án" [ref=e257] [cursor=pointer]:
              - /url: du-an
          - listitem [ref=e258]:
            - link "Góc kỹ thuật" [ref=e259] [cursor=pointer]:
              - /url: goc-ky-thuat
          - listitem [ref=e260]:
            - link "Liên hệ" [ref=e261] [cursor=pointer]:
              - /url: lien-he
      - generic [ref=e262]:
        - heading "Chính sách hỗ trợ" [level=2] [ref=e263]
        - list [ref=e264]:
          - listitem [ref=e265]:
            - link "Chính sách bảo mật" [ref=e266] [cursor=pointer]:
              - /url: chinh-sach-bao-mat
          - listitem [ref=e267]:
            - link "Chính sách bảo hành và hoàn trả" [ref=e268] [cursor=pointer]:
              - /url: chinh-sach-bao-hanh-va-hoan-tra
          - listitem [ref=e269]:
            - link "Hướng dẫn mua hàng và Thanh Toán" [ref=e270] [cursor=pointer]:
              - /url: huong-dan-mua-hang-va-thanh-toan
          - listitem [ref=e271]:
            - link "Chính sách vận chuyển và giao nhận" [ref=e272] [cursor=pointer]:
              - /url: chinh-sach-van-chuyen-va-giao-nhan
        - generic [ref=e273]:
          - heading "Kết nối với chúng tôi" [level=2] [ref=e274]
          - generic [ref=e275]:
            - link "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e276] [cursor=pointer]:
              - /url: ""
              - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e277]
            - link "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e278] [cursor=pointer]:
              - /url: ""
              - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e279]
            - link "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e280] [cursor=pointer]:
              - /url: ""
              - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e281]
            - link "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e282] [cursor=pointer]:
              - /url: ""
              - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e283]
            - link "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e284] [cursor=pointer]:
              - /url: ""
              - img "Công Ty TNHH Thương Mại Kỹ Thuật Quốc Tế" [ref=e285]
    - generic [ref=e287]: 2009 Copyright © CÔNG TY TNHH THƯƠNG MẠI KỸ THUẬT QUỐC TẾ. THIẾT KẾ WEB MIMA
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
              - generic: "79"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 79/100
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
          - generic: "24"
          - generic: Tổng tiêu chí
        - generic:
          - generic: ✅ 19
          - generic: Đạt
        - generic:
          - generic: ❌ 5
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: Dự án
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e288]:
      - generic [ref=e289]: "❌ Chi tiết lỗi cần khắc phục (5/24):"
      - generic [ref=e290]:
        - generic [ref=e291]:
          - generic [ref=e292]: 8. Tốc độ & Core Web Vitals
          - generic [ref=e293]: 5 lỗi
        - generic [ref=e294]:
          - strong [ref=e296]: "[📱 MOBILE (ƯU TIÊN)] Tổng điểm Performance: 46/100 (≥ 60)"
          - generic [ref=e297]: ⚠️ [📱 MOBILE (ƯU TIÊN)] Điểm Performance 46/100 dưới ngưỡng 60. Phân tích chi tiết LCP/CLS/INP bên dưới...
        - generic [ref=e298]:
          - strong [ref=e300]: "[📱 MOBILE (ƯU TIÊN)] LCP (Largest Contentful Paint): 16502ms (< 2500ms)"
          - generic [ref=e301]:
            - text: "⚠️ [📱 MOBILE (ƯU TIÊN)] LCP quá cao: 16502ms (chuẩn: < 2.5s) → Thủ phạm LCP:"
            - generic [ref=e302]: "[Vấn đề]: Phần tử LCP là dạng văn bản (Text/Heading), thời gian hiển thị phụ ..."
          - generic [ref=e303]:
            - strong [ref=e305]: "[📱 MOBILE (ƯU TIÊN)] CLS (Cumulative Layout Shift): 0.208 (< 0.1)"
            - generic [ref=e306]:
              - text: "⚠️ [📱 MOBILE (ƯU TIÊN)] CLS quá cao: 0.208 (chuẩn: < 0.1) → Thủ phạm CLS: -"
              - generic [ref=e307]:
                - text: "-"
                - generic [ref=e308]:
                  - strong [ref=e310]: "[💻 Desktop] Tổng điểm Performance: 50/100 (≥ 60)"
                  - generic [ref=e311]: ⚠️ [💻 Desktop] Điểm Performance 50/100 dưới ngưỡng 60. Phân tích chi tiết LCP/CLS/INP bên dưới...
                - generic [ref=e312]:
                  - strong [ref=e314]: "[💻 Desktop] LCP (Largest Contentful Paint): 3243ms (< 2500ms)"
                  - generic [ref=e315]:
                    - text: "⚠️ [💻 Desktop] LCP quá cao: 3243ms (chuẩn: < 2.5s) → Thủ phạm LCP:"
                    - generic [ref=e316]: "[Vấn đề]: Phần tử LCP là dạng văn bản (Text/Heading), thời gian hiển thị phụ thuộc chủ ..."
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 79/100 dưới ngưỡng 96%. Có 5/24 tiêu chí không đạt.
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