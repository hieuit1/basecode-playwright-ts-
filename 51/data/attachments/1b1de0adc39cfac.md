# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Sảnh 3 Lầu 5 (/sanh-3-lau-5)
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
        - link "Phòng vip/Sảnh" [ref=e48] [cursor=pointer]:
          - /url: https://langnuongnambo.vn/phong-vip-sanh
      - listitem [ref=e49]:
        - text: /
        - link "Sảnh 3 Lầu 5" [ref=e50] [cursor=pointer]:
          - /url: https://langnuongnambo.vn/sanh-3-lau-5
    - generic [ref=e51]:
      - generic [ref=e54]:
        - generic [ref=e56]:
          - listbox [ref=e60]:
            - option "Sảnh 3 Lầu 5" [ref=e61]:
              - link "Sảnh 3 Lầu 5" [ref=e62] [cursor=pointer]:
                - /url: javascript:;
                - img "Sảnh 3 Lầu 5" [ref=e63]
            - option "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e64]:
              - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e65] [cursor=pointer]:
                - /url: javascript:;
                - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e66]
            - option "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e67]:
              - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e68] [cursor=pointer]:
                - /url: javascript:;
                - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e69]
            - option "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e70]:
              - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e71] [cursor=pointer]:
                - /url: javascript:;
                - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e72]
            - option "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e73]:
              - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e74] [cursor=pointer]:
                - /url: javascript:;
                - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e75]
            - option [ref=e76]:
              - link [ref=e77] [cursor=pointer]:
                - /url: javascript:;
                - img [ref=e78]
            - option [ref=e79]:
              - link [ref=e80] [cursor=pointer]:
                - /url: javascript:;
                - img [ref=e81]
            - option [ref=e82]:
              - link [ref=e83] [cursor=pointer]:
                - /url: javascript:;
                - img [ref=e84]
            - option [ref=e85]:
              - link [ref=e86] [cursor=pointer]:
                - /url: javascript:;
                - img [ref=e87]
            - option [ref=e88]:
              - link [ref=e89] [cursor=pointer]:
                - /url: javascript:;
                - img [ref=e90]
            - option [ref=e91]:
              - link [ref=e92] [cursor=pointer]:
                - /url: javascript:;
                - img [ref=e93]
            - option [ref=e94]:
              - link [ref=e95] [cursor=pointer]:
                - /url: javascript:;
                - img [ref=e96]
            - option [ref=e97]:
              - link [ref=e98] [cursor=pointer]:
                - /url: javascript:;
                - img [ref=e99]
            - option [ref=e100]:
              - link [ref=e101] [cursor=pointer]:
                - /url: javascript:;
                - img [ref=e102]
          - generic [ref=e103]:
            - button [ref=e104] [cursor=pointer]:
              - img [ref=e105]
            - listbox [ref=e108]:
              - link [ref=e110] [cursor=pointer]:
                - /url: thumbs/550x480x2/upload/product/sanh-3-lau-5-4-5288.png
                - img [ref=e111]
              - option "Sảnh 3 Lầu 5" [ref=e112]:
                - link "Sảnh 3 Lầu 5" [ref=e113] [cursor=pointer]:
                  - /url: thumbs/550x480x2/upload/product/sanh-3-lau-5-1-4700.png
                  - img "Sảnh 3 Lầu 5" [ref=e114]
              - option [ref=e115]:
                - link [ref=e116] [cursor=pointer]:
                  - /url: thumbs/550x480x2/upload/product/sanh-3-lau-5-9-5559.png
                  - img [ref=e117]
              - option [ref=e118]:
                - link [ref=e119] [cursor=pointer]:
                  - /url: thumbs/550x480x2/upload/product/sanh-3-lau-5-2-11-5057.png
                  - img [ref=e120]
              - option [ref=e121]:
                - link [ref=e122] [cursor=pointer]:
                  - /url: thumbs/550x480x2/upload/product/sanh-3-lau-5-7-6263.png
                  - img [ref=e123]
              - option [ref=e124]:
                - link [ref=e125] [cursor=pointer]:
                  - /url: thumbs/550x480x2/upload/product/sanh-3-lau-5-3-5652.png
                  - img [ref=e126]
              - option [ref=e127]:
                - link [ref=e128] [cursor=pointer]:
                  - /url: thumbs/550x480x2/upload/product/sanh-3-lau-56-3225.png
                  - img [ref=e129]
              - option [ref=e130]:
                - link [ref=e131] [cursor=pointer]:
                  - /url: thumbs/550x480x2/upload/product/sanh-3-lau-5-1-8027.png
                  - img [ref=e132]
              - option [ref=e133]:
                - link [ref=e134] [cursor=pointer]:
                  - /url: thumbs/550x480x2/upload/product/sanh-3-lau-5-5-7394.png
                  - img [ref=e135]
              - option [ref=e136]:
                - link [ref=e137] [cursor=pointer]:
                  - /url: thumbs/550x480x2/upload/product/sanh-3-lau-5-10-3468.png
                  - img [ref=e138]
              - option [ref=e139]:
                - link [ref=e140] [cursor=pointer]:
                  - /url: thumbs/550x480x2/upload/product/sanh-3-lau-5-2-6975.png
                  - img [ref=e141]
              - option [ref=e142]:
                - link [ref=e143] [cursor=pointer]:
                  - /url: thumbs/550x480x2/upload/product/sanh-3-lau-5-8-7853.png
                  - img [ref=e144]
              - option [ref=e145]:
                - link [ref=e146] [cursor=pointer]:
                  - /url: thumbs/550x480x2/upload/product/sanh-3-lau-5-12-4477.png
                  - img [ref=e147]
              - option [ref=e148]:
                - link [ref=e149] [cursor=pointer]:
                  - /url: thumbs/550x480x2/upload/product/sanh-3-lau-5-13-9567.png
                  - img [ref=e150]
              - option [ref=e151]:
                - link [ref=e152] [cursor=pointer]:
                  - /url: thumbs/550x480x2/upload/product/sanh-3-lau-5-4-5288.png
                  - img [ref=e153]
              - link [ref=e155] [cursor=pointer]:
                - /url: thumbs/550x480x2/upload/product/sanh-3-lau-5-1-4700.png
                - img [ref=e156]
            - button [ref=e157] [cursor=pointer]:
              - img [ref=e158]
        - list [ref=e161]:
          - heading "Sảnh 3 Lầu 5" [level=3] [ref=e162]
          - listitem [ref=e163]:
            - generic [ref=e164]: "Giá sản phẩm:"
            - generic [ref=e165]: "Liên hệ: 0985 1707 67"
          - generic [ref=e167]:
            - paragraph [ref=e168]: Hãy để lại thông tin để được tư vấn miễn phí
            - generic [ref=e169]:
              - generic [ref=e170]:
                - generic [ref=e172]:
                  - textbox "Họ và tên" [ref=e173]
                  - generic: Họ và tên
                - generic [ref=e175]:
                  - textbox "Điện thoại" [ref=e176]
                  - generic: Điện thoại
              - button "Gửi thông tin liên hệ ngay" [ref=e177] [cursor=pointer]
      - heading "Chi tiết sản phẩm" [level=5] [ref=e185]
      - generic [ref=e187]:
        - heading "Có thể bạn sẽ thích" [level=3] [ref=e189]
        - generic [ref=e192]:
          - generic [ref=e194]:
            - link "Sảnh 2" [ref=e196] [cursor=pointer]:
              - /url: sanh-2
              - img "Sảnh 2" [ref=e197]
            - heading "Sảnh 2" [level=3] [ref=e199]:
              - link "Sảnh 2" [ref=e200] [cursor=pointer]:
                - /url: sanh-2
          - generic [ref=e202]:
            - link "Sảnh 1" [ref=e204] [cursor=pointer]:
              - /url: sanh-1
              - img "Sảnh 1" [ref=e205]
            - heading "Sảnh 1" [level=3] [ref=e207]:
              - link "Sảnh 1" [ref=e208] [cursor=pointer]:
                - /url: sanh-1
          - generic [ref=e210]:
            - link "Lầu 1" [ref=e212] [cursor=pointer]:
              - /url: lau-1
              - img "Lầu 1" [ref=e213]
            - heading "Lầu 1" [level=3] [ref=e215]:
              - link "Lầu 1" [ref=e216] [cursor=pointer]:
                - /url: lau-1
          - generic [ref=e218]:
            - link "Phòng VIP 25" [ref=e220] [cursor=pointer]:
              - /url: phong-vip-25
              - img "Phòng VIP 25" [ref=e221]
            - heading "Phòng VIP 25" [level=3] [ref=e223]:
              - link "Phòng VIP 25" [ref=e224] [cursor=pointer]:
                - /url: phong-vip-25
          - generic [ref=e226]:
            - link "Phòng VIP 24" [ref=e228] [cursor=pointer]:
              - /url: phong-vip-24
              - img "Phòng VIP 24" [ref=e229]
            - heading "Phòng VIP 24" [level=3] [ref=e231]:
              - link "Phòng VIP 24" [ref=e232] [cursor=pointer]:
                - /url: phong-vip-24
          - generic [ref=e234]:
            - link "Phòng VIP 22" [ref=e236] [cursor=pointer]:
              - /url: phong-vip-22
              - img "Phòng VIP 22" [ref=e237]
            - heading "Phòng VIP 22" [level=3] [ref=e239]:
              - link "Phòng VIP 22" [ref=e240] [cursor=pointer]:
                - /url: phong-vip-22
          - generic [ref=e242]:
            - link "Phòng VIP 20" [ref=e244] [cursor=pointer]:
              - /url: phong-vip-20
              - img "Phòng VIP 20" [ref=e245]
            - heading "Phòng VIP 20" [level=3] [ref=e247]:
              - link "Phòng VIP 20" [ref=e248] [cursor=pointer]:
                - /url: phong-vip-20
          - generic [ref=e250]:
            - link "Phòng VIP 19" [ref=e252] [cursor=pointer]:
              - /url: phong-vip-19
            - heading "Phòng VIP 19" [level=3] [ref=e254]:
              - link "Phòng VIP 19" [ref=e255] [cursor=pointer]:
                - /url: phong-vip-19
        - generic:
          - button [ref=e256] [cursor=pointer]:
            - img [ref=e257]
          - button [ref=e260] [cursor=pointer]:
            - img [ref=e261]
    - generic [ref=e264]:
      - generic [ref=e267]:
        - generic [ref=e268]:
          - generic [ref=e269]:
            - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e270] [cursor=pointer]:
              - /url: https://langnuongnambo.vn/
              - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e271]
            - paragraph [ref=e272]: LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN
          - paragraph [ref=e273]:
            - strong [ref=e274]: LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN
          - paragraph [ref=e275]:
            - generic [ref=e276]:
              - strong [ref=e277]: "Địa chỉ:"
              - link "14A Dương Đức Hiền, Tây Thạnh, Tân Phú, Tp.HCM, Việt Nam" [ref=e278] [cursor=pointer]:
                - /url: https://www.google.com/maps/place/?cid=5624610190095411286
          - paragraph [ref=e279]
          - paragraph [ref=e280]:
            - generic [ref=e281]:
              - strong [ref=e282]: "Holine:"
              - link "0985 1707 67" [ref=e283] [cursor=pointer]:
                - /url: https://zalo.me/0985170767
          - paragraph [ref=e284]
          - paragraph [ref=e285]:
            - generic [ref=e286]:
              - strong [ref=e287]: "Email:"
              - text: nhahanglangnuongnambo@gmail.com
          - paragraph [ref=e288]
          - paragraph [ref=e289]:
            - generic [ref=e290]:
              - strong [ref=e291]: "Fanpage:"
              - link "Nhà Hàng Làng Nướng Nam Bộ" [ref=e292] [cursor=pointer]:
                - /url: https://www.facebook.com/langnuongnambo.tp/
          - paragraph [ref=e293]
          - paragraph [ref=e294]:
            - generic [ref=e295]:
              - strong [ref=e296]: "Website:"
              - link "langnuongnambo.vn" [ref=e297] [cursor=pointer]:
                - /url: https://langnuongnambo.vn/
          - generic [ref=e298]:
            - paragraph [ref=e299]: Theo dõi chúng tôi tại
            - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e300] [cursor=pointer]:
              - /url: ""
              - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e301]
            - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e302] [cursor=pointer]:
              - /url: ""
              - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e303]
            - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e304] [cursor=pointer]:
              - /url: ""
              - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e305]
            - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e306] [cursor=pointer]:
              - /url: ""
              - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e307]
            - link "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e308] [cursor=pointer]:
              - /url: ""
              - img "LÀNG NƯỚNG NAM BỘ - DƯƠNG ĐỨC HIỀN" [ref=e309]
        - generic [ref=e311]:
          - generic [ref=e312]:
            - paragraph [ref=e313]: Về chúng tôi
            - list [ref=e314]:
              - listitem [ref=e315]:
                - link "Trang chủ" [ref=e316] [cursor=pointer]:
                  - /url: https://langnuongnambo.vn/
              - listitem [ref=e317]:
                - link "Giới thiệu" [ref=e318] [cursor=pointer]:
                  - /url: gioi-thieu
              - listitem [ref=e319]:
                - link "Thực đơn" [ref=e320] [cursor=pointer]:
                  - /url: thuc-don
              - listitem [ref=e321]:
                - link "Dịch vụ" [ref=e322] [cursor=pointer]:
                  - /url: dich-vu
              - listitem [ref=e323]:
                - link "Đặt món" [ref=e324] [cursor=pointer]:
                  - /url: dat-mon
              - listitem [ref=e325]:
                - link "Phòng vip/sảnh" [ref=e326] [cursor=pointer]:
                  - /url: phong-vip-sanh
              - listitem [ref=e327]:
                - link "Tuyển dụng" [ref=e328] [cursor=pointer]:
                  - /url: tuyen-dung
              - listitem [ref=e329]:
                - link "Tin tức" [ref=e330] [cursor=pointer]:
                  - /url: tin-tuc
              - listitem [ref=e331]:
                - link "Liên hệ" [ref=e332] [cursor=pointer]:
                  - /url: lien-he
          - generic [ref=e333]:
            - paragraph [ref=e334]: Dịch vụ
            - list [ref=e335]:
              - listitem [ref=e336]:
                - link "Tổ chức liên hoan" [ref=e337] [cursor=pointer]:
                  - /url: to-chuc-lien-hoan
              - listitem [ref=e338]:
                - link "Tổ chức họp mặt" [ref=e339] [cursor=pointer]:
                  - /url: to-chuc-hop-mat
              - listitem [ref=e340]:
                - link "Tổ chức thôi nôi" [ref=e341] [cursor=pointer]:
                  - /url: to-chuc-thoi-noi
              - listitem [ref=e342]:
                - link "Tổ chức tân niên" [ref=e343] [cursor=pointer]:
                  - /url: to-chuc-tan-nien
              - listitem [ref=e344]:
                - link "Tổ chức tất niên" [ref=e345] [cursor=pointer]:
                  - /url: to-chuc-tat-nien
          - generic [ref=e346]:
            - paragraph [ref=e347]: Thực đơn
            - list [ref=e348]:
              - listitem [ref=e349]:
                - link "MENU TIỆC LẺ ( 3-4 người)" [ref=e350] [cursor=pointer]:
                  - /url: menu-tiec-le-3-4-nguoi
              - listitem [ref=e351]:
                - link "SET MENU CÁC MÓN ( 10 người )" [ref=e352] [cursor=pointer]:
                  - /url: set-menu-cac-mon-10-nguoi
              - listitem [ref=e353]:
                - link "SET MENU ĐẶT TIỆC ( 10 người)" [ref=e354] [cursor=pointer]:
                  - /url: set-menu-dat-tiec-10-nguoi
      - generic [ref=e358]: Copyright ©2026 LÀNG NƯỚNG NAM BỘ. All Rights Reserved. Thiết kế Web MIMA
    - generic [ref=e359]:
      - 'link "Call me: 0985 1707 67" [ref=e360] [cursor=pointer]':
        - /url: tel:0985170767
        - img [ref=e364]
        - generic [ref=e367]: "Call me: 0985 1707 67"
      - 'link "Zalo: 0985 1707 67" [ref=e368] [cursor=pointer]':
        - /url: https://zalo.me/0985170767
        - img [ref=e372]
        - generic [ref=e373]: "Zalo: 0985 1707 67"
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
          - strong: Sảnh 3 Lầu 5
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e374]:
      - generic [ref=e375]: "❌ Chi tiết lỗi cần khắc phục (1/15):"
      - generic [ref=e376]:
        - generic [ref=e377]:
          - generic [ref=e378]: 3. Heading (H1-H6)
          - generic [ref=e379]: 1 lỗi
        - generic [ref=e380]:
          - strong [ref=e382]: Heading phân cấp hợp lệ (3 lỗi)
          - generic [ref=e383]: "⚠️ Heading phân cấp sai: Nhảy cấp từ H1 → H3 (\"Sảnh 3 Lầu 5\"); Nhảy cấp từ H3 → H5 (\"Chi tiết sản phẩm\"); Nhảy cấp từ H3 → H6 (\"Giỏ hàng của bạn\")"
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