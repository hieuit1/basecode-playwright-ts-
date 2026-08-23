# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Sofa đẹp (/sofa-dep)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 93/100 dưới ngưỡng 96%. Có 1/15 tiêu chí không đạt.
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
          - textbox "Tìm kiế" [ref=e20]
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
      - listitem [ref=e78]:
        - text: /
        - link "Sofa đẹp" [ref=e79] [cursor=pointer]:
          - /url: https://code2.mimadigi.vn/2026/august/cfurni_111926w/sofa-dep
    - generic [ref=e83]:
      - heading "Danh mục" [level=2] [ref=e85]
      - generic [ref=e86]:
        - link "Sofa thư giãn Sofa thư giãn" [ref=e88] [cursor=pointer]:
          - /url: sofa-thu-gian
          - paragraph [ref=e89]:
            - img "Sofa thư giãn" [ref=e90]
          - heading "Sofa thư giãn" [level=3] [ref=e91]
        - link "Sofa băng Sofa băng" [ref=e93] [cursor=pointer]:
          - /url: sofa-bang
          - paragraph [ref=e94]:
            - img "Sofa băng" [ref=e95]
          - heading "Sofa băng" [level=3] [ref=e96]
        - link "Sofa bệt và bed Sofa bệt và bed" [ref=e98] [cursor=pointer]:
          - /url: sofa-bet-va-bed
          - paragraph [ref=e99]:
            - img "Sofa bệt và bed" [ref=e100]
          - heading "Sofa bệt và bed" [level=3] [ref=e101]
        - link "Sofa đôn Sofa đôn" [ref=e103] [cursor=pointer]:
          - /url: sofa-don
          - paragraph [ref=e104]:
            - img "Sofa đôn" [ref=e105]
          - heading "Sofa đôn" [level=3] [ref=e106]
        - link "Sofa đơn (1 người ngồi) Sofa đơn (1 người ngồi)" [ref=e108] [cursor=pointer]:
          - /url: sofa-don-1-nguoi-ngoi
          - paragraph [ref=e109]:
            - img "Sofa đơn (1 người ngồi)" [ref=e110]
          - heading "Sofa đơn (1 người ngồi)" [level=3] [ref=e111]
        - link "Sofa góc (L) Sofa góc (L)" [ref=e113] [cursor=pointer]:
          - /url: sofa-goc-l
          - paragraph [ref=e114]:
            - img "Sofa góc (L)" [ref=e115]
          - heading "Sofa góc (L)" [level=3] [ref=e116]
      - heading "Tất cả Sofa đẹp" [level=2] [ref=e118]
      - generic [ref=e120]:
        - generic [ref=e122]:
          - link "Sofa CULLEN" [ref=e124] [cursor=pointer]:
            - /url: sofa-cullen
            - img "Sofa CULLEN" [ref=e125]
          - generic [ref=e126]:
            - heading "Sofa CULLEN" [level=3] [ref=e127]:
              - link "Sofa CULLEN" [ref=e128] [cursor=pointer]:
                - /url: sofa-cullen
            - paragraph [ref=e129]:
              - generic [ref=e130]: 13.800.000đ
        - generic [ref=e132]:
          - link "Sofa DENSO" [ref=e134] [cursor=pointer]:
            - /url: sofa-denso
            - img "Sofa DENSO" [ref=e135]
          - generic [ref=e136]:
            - heading "Sofa DENSO" [level=3] [ref=e137]:
              - link "Sofa DENSO" [ref=e138] [cursor=pointer]:
                - /url: sofa-denso
            - paragraph [ref=e139]:
              - generic [ref=e140]: 12.900.000đ
        - generic [ref=e142]:
          - link "Sofa MARLO" [ref=e144] [cursor=pointer]:
            - /url: sofa-marlo
            - img "Sofa MARLO" [ref=e145]
          - generic [ref=e146]:
            - heading "Sofa MARLO" [level=3] [ref=e147]:
              - link "Sofa MARLO" [ref=e148] [cursor=pointer]:
                - /url: sofa-marlo
            - paragraph [ref=e149]:
              - generic [ref=e150]: 10.900.000đ
        - generic [ref=e152]:
          - link "Sofa SAM" [ref=e154] [cursor=pointer]:
            - /url: sofa-sam
            - img "Sofa SAM" [ref=e155]
          - generic [ref=e156]:
            - heading "Sofa SAM" [level=3] [ref=e157]:
              - link "Sofa SAM" [ref=e158] [cursor=pointer]:
                - /url: sofa-sam
            - paragraph [ref=e159]:
              - generic [ref=e160]: 11.900.000đ
        - generic [ref=e162]:
          - link "Ghế ROOVY" [ref=e164] [cursor=pointer]:
            - /url: ghe-roovy
            - img "Ghế ROOVY" [ref=e165]
          - generic [ref=e166]:
            - heading "Ghế ROOVY" [level=3] [ref=e167]:
              - link "Ghế ROOVY" [ref=e168] [cursor=pointer]:
                - /url: ghe-roovy
            - paragraph [ref=e169]:
              - generic [ref=e170]: 8.500.000đ
        - generic [ref=e172]:
          - link "Ghế thư giãn JT-137#" [ref=e174] [cursor=pointer]:
            - /url: ghe-thu-gian-jt-137
            - img "Ghế thư giãn JT-137#" [ref=e175]
          - generic [ref=e176]:
            - heading "Ghế thư giãn JT-137#" [level=3] [ref=e177]:
              - link "Ghế thư giãn JT-137#" [ref=e178] [cursor=pointer]:
                - /url: ghe-thu-gian-jt-137
            - paragraph [ref=e179]:
              - generic [ref=e180]: 6.500.000đ
        - generic [ref=e182]:
          - link "Ghế thư giãn MAMA CHAIR" [ref=e184] [cursor=pointer]:
            - /url: ghe-thu-gian-mama-chair
            - img "Ghế thư giãn MAMA CHAIR" [ref=e185]
          - generic [ref=e186]:
            - heading "Ghế thư giãn MAMA CHAIR" [level=3] [ref=e187]:
              - link "Ghế thư giãn MAMA CHAIR" [ref=e188] [cursor=pointer]:
                - /url: ghe-thu-gian-mama-chair
            - paragraph [ref=e189]:
              - generic [ref=e190]: 9.900.000đ
        - generic [ref=e192]:
          - link "Ghế thư giãn ROMA" [ref=e194] [cursor=pointer]:
            - /url: ghe-thu-gian-roma
            - img "Ghế thư giãn ROMA" [ref=e195]
          - generic [ref=e196]:
            - heading "Ghế thư giãn ROMA" [level=3] [ref=e197]:
              - link "Ghế thư giãn ROMA" [ref=e198] [cursor=pointer]:
                - /url: ghe-thu-gian-roma
            - paragraph [ref=e199]:
              - generic [ref=e200]: 8.290.000đ
        - generic [ref=e202]:
          - link "Ghế thư giãn SENO" [ref=e204] [cursor=pointer]:
            - /url: sofa-thu-gian-seno
            - img "Ghế thư giãn SENO" [ref=e205]
          - generic [ref=e206]:
            - heading "Ghế thư giãn SENO" [level=3] [ref=e207]:
              - link "Ghế thư giãn SENO" [ref=e208] [cursor=pointer]:
                - /url: sofa-thu-gian-seno
            - paragraph [ref=e209]:
              - generic [ref=e210]: 6.500.000đ
    - generic [ref=e215]:
      - generic [ref=e217]:
        - paragraph [ref=e218]:
          - img "Xưởng & Showroom" [ref=e219]
        - generic [ref=e220]:
          - heading "Xưởng & Showroom" [level=3] [ref=e221]
          - paragraph [ref=e222]: Đặt lịch xe trực tiếp sản phẩm
      - generic [ref=e224]:
        - paragraph [ref=e225]:
          - img "Bảo hành khung 10 năm" [ref=e226]
        - generic [ref=e227]:
          - heading "Bảo hành khung 10 năm" [level=3] [ref=e228]
          - paragraph [ref=e229]: Khung gỗ sồi chắc chắn
      - generic [ref=e231]:
        - paragraph [ref=e232]:
          - img "Mút Coolsafe 4 năm" [ref=e233]
        - generic [ref=e234]:
          - heading "Mút Coolsafe 4 năm" [level=3] [ref=e235]
          - paragraph [ref=e236]: Chống cháy đạt tiêu chuẩn
      - generic [ref=e238]:
        - paragraph [ref=e239]:
          - img "Chứng chỉ EQ vật liệu" [ref=e240]
        - generic [ref=e241]:
          - heading "Chứng chỉ EQ vật liệu" [level=3] [ref=e242]
          - paragraph [ref=e243]: An toàn cho trẻ con & thai phụ
      - generic [ref=e245]:
        - paragraph [ref=e246]:
          - img "10,000+ khách hàng" [ref=e247]
        - generic [ref=e248]:
          - heading "10,000+ khách hàng" [level=3] [ref=e249]
          - paragraph [ref=e250]: Đánh giá tốt trên website
    - generic [ref=e251]:
      - generic [ref=e254]:
        - generic [ref=e255]:
          - link "CÔNG TY TNHH CFURNI" [ref=e256] [cursor=pointer]:
            - /url: https://code2.mimadigi.vn/2026/august/cfurni_111926w/
            - img "CÔNG TY TNHH CFURNI" [ref=e257]
          - paragraph [ref=e258]: CÔNG TY TNHH CFURNI
          - table [ref=e260]:
            - rowgroup [ref=e261]:
              - 'row "MST: 0313344129 - Sở kế hoạch và đầu tư TP.HCM cấp ngày 13/7/2015. Office: 198 Đường Số 10, Phường Thông Tây Hội, TP.HCM Showroom 1: 41 Đường A4, Phường Bảy Hiền, TP.HCM Showroom 2: 66A đường A4 (khu K300), Phường Bảy Hiền, TP.HCM Xưởng 1: 25/5A đường số 610, xã Phú Hòa Đông, TP.HCM Xưởng 2: C7C Phạm Hùng, xã Bình Hưng, TP.HCM Email: Cfurni168@gmail.com Web: www.cfurni.vn Facebook: Nội Thất Cfurni Phone: 0932 67 82 67 - 0902 34 93 94" [ref=e262]':
                - 'cell "MST: 0313344129 - Sở kế hoạch và đầu tư TP.HCM cấp ngày 13/7/2015. Office: 198 Đường Số 10, Phường Thông Tây Hội, TP.HCM Showroom 1: 41 Đường A4, Phường Bảy Hiền, TP.HCM Showroom 2: 66A đường A4 (khu K300), Phường Bảy Hiền, TP.HCM Xưởng 1: 25/5A đường số 610, xã Phú Hòa Đông, TP.HCM Xưởng 2: C7C Phạm Hùng, xã Bình Hưng, TP.HCM Email: Cfurni168@gmail.com Web: www.cfurni.vn Facebook: Nội Thất Cfurni Phone: 0932 67 82 67 - 0902 34 93 94" [ref=e263]':
                  - paragraph [ref=e264]:
                    - text: "MST: 0313344129 - Sở kế hoạch và đầu tư TP.HCM cấp ngày 13/7/2015."
                    - text: "Office: 198 Đường Số 10, Phường Thông Tây Hội, TP.HCM"
                  - paragraph [ref=e265]: "Showroom 1: 41 Đường A4, Phường Bảy Hiền, TP.HCM"
                  - paragraph [ref=e266]: "Showroom 2: 66A đường A4 (khu K300), Phường Bảy Hiền, TP.HCM"
                  - paragraph [ref=e267]: "Xưởng 1: 25/5A đường số 610, xã Phú Hòa Đông, TP.HCM"
                  - paragraph [ref=e268]: "Xưởng 2: C7C Phạm Hùng, xã Bình Hưng, TP.HCM"
                  - paragraph [ref=e269]:
                    - text: "Email: Cfurni168@gmail.com"
                    - text: "Web: www.cfurni.vn"
                  - paragraph [ref=e270]:
                    - 'link "Facebook: Nội Thất Cfurni" [ref=e271] [cursor=pointer]':
                      - /url: https://www.facebook.com/noithatcfurni/
                  - paragraph [ref=e272]: "Phone: 0932 67 82 67 - 0902 34 93 94"
          - paragraph [ref=e273]: Theo dõi chúng tôi tại
          - generic [ref=e274]:
            - link "Facebook" [ref=e275] [cursor=pointer]:
              - /url: https://www.facebook.com/noithatcfurni
              - img "Facebook" [ref=e276]
            - link "Messenger" [ref=e277] [cursor=pointer]:
              - /url: ""
              - img "Messenger" [ref=e278]
            - link "Instargam" [ref=e279] [cursor=pointer]:
              - /url: https://www.instagram.com/cfurni.vn?igsh=cnNhNG43aGhhbzJs
              - img "Instargam" [ref=e280]
            - link "TikTok" [ref=e281] [cursor=pointer]:
              - /url: https://www.tiktok.com/@noithatcfurni?_r=1&_t=ZS-98xhhbBhQua
              - img "TikTok" [ref=e282]
            - link "Youtube" [ref=e283] [cursor=pointer]:
              - /url: https://youtube.com/@noithatcfurni?si=HxSvpE0k9CoN2tWr
              - img "Youtube" [ref=e284]
        - img "CÔNG TY TNHH CFURNI" [ref=e287]
      - generic [ref=e290]:
        - generic [ref=e291]:
          - paragraph [ref=e292]: Truy cập nhanh
          - list [ref=e293]:
            - listitem [ref=e294]:
              - link "Giới thiệu" [ref=e295] [cursor=pointer]:
                - /url: gioi-thieu
            - listitem [ref=e296]:
              - link "Sản phẩm" [ref=e297] [cursor=pointer]:
                - /url: san-pham
            - listitem [ref=e298]:
              - link "Dự án" [ref=e299] [cursor=pointer]:
                - /url: du-an
            - listitem [ref=e300]:
              - link "Tuyển dụng" [ref=e301] [cursor=pointer]:
                - /url: tuyen-dung
            - listitem [ref=e302]:
              - link "Liên hệ" [ref=e303] [cursor=pointer]:
                - /url: lien-he
        - generic [ref=e304]:
          - paragraph [ref=e305]: Giải pháp
          - list [ref=e306]:
            - listitem [ref=e307]:
              - link "Phòng khách" [ref=e308] [cursor=pointer]:
                - /url: phong-khach
            - listitem [ref=e309]:
              - link "Phòng ăn" [ref=e310] [cursor=pointer]:
                - /url: phong-an
            - listitem [ref=e311]:
              - link "Phòng ngủ" [ref=e312] [cursor=pointer]:
                - /url: phong-ngu
            - listitem [ref=e313]:
              - link "Phòng làm việc" [ref=e314] [cursor=pointer]:
                - /url: phong-lam-viec
        - generic [ref=e315]:
          - paragraph [ref=e316]: Chính sách hỗ trợ
          - list [ref=e317]:
            - listitem [ref=e318]:
              - link "Chính sách đổi trả" [ref=e319] [cursor=pointer]:
                - /url: chinh-sach-doi-tra
            - listitem [ref=e320]:
              - link "Chính sách bảo hành" [ref=e321] [cursor=pointer]:
                - /url: chinh-sach-bao-hanh
            - listitem [ref=e322]:
              - link "Chính sách giao hàng" [ref=e323] [cursor=pointer]:
                - /url: chinh-sach-giao-hang
            - listitem [ref=e324]:
              - link "Chính sách thanh toán" [ref=e325] [cursor=pointer]:
                - /url: chinh-sach-thanh-toan
            - listitem [ref=e326]:
              - link "Chính sách xử lý khiếu nại" [ref=e327] [cursor=pointer]:
                - /url: chinh-sach-xu-ly-khieu-nai
            - listitem [ref=e328]:
              - link "Bảo mật thông tin khách hàng" [ref=e329] [cursor=pointer]:
                - /url: bao-mat-thong-tin-khach-hang
        - generic [ref=e330]:
          - paragraph [ref=e331]: Hotline
          - paragraph [ref=e333]:
            - text: Tư vấn bán hàng
            - text: 0932 67 82 67
            - text: Chăm sóc khách hàng
            - text: 0902 34 93 94
          - link "http://online.gov.vn/nen-tang/4b688d70-4fe8-4619-a929-3c859c5d4206" [ref=e334] [cursor=pointer]:
            - /url: ""
            - img "http://online.gov.vn/nen-tang/4b688d70-4fe8-4619-a929-3c859c5d4206" [ref=e335]
      - generic [ref=e338]:
        - generic [ref=e339]: Copyright ©2026 Công Ty TNHH CFURNI. Thiết kế Web MIMA
        - generic [ref=e340]:
          - generic [ref=e341]:
            - text: "Đang online:"
            - generic [ref=e342]: "266"
          - generic [ref=e343]: "|"
          - generic [ref=e344]:
            - text: "Hôm nay:"
            - generic [ref=e345]: "6"
          - generic [ref=e346]: "|"
          - generic [ref=e347]:
            - text: "Tổng truy cập:"
            - generic [ref=e348]: "359"
    - generic [ref=e349]:
      - link "Map" [ref=e350] [cursor=pointer]:
        - /url: https://maps.app.goo.gl/JD2W7Ho6mb8Hrmsw6
        - img [ref=e354]
      - 'link "Call me: 0932 67 82 67" [ref=e357] [cursor=pointer]':
        - /url: tel:0932678267
        - img [ref=e361]
        - generic [ref=e364]: "Call me: 0932 67 82 67"
      - 'link "Zalo: 0932 67 82 67" [ref=e365] [cursor=pointer]':
        - /url: https://zalo.me/0932678267
        - img [ref=e369]
        - generic [ref=e370]: "Zalo: 0932 67 82 67"
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
          - strong: Sofa đẹp
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e371]:
      - generic [ref=e372]: "❌ Chi tiết lỗi cần khắc phục (1/15):"
      - generic [ref=e373]:
        - generic [ref=e374]:
          - generic [ref=e375]: 6. Liên kết (Links)
          - generic [ref=e376]: 1 lỗi
        - generic [ref=e377]:
          - strong [ref=e379]: "Không có broken links (lỗi: 5/81)"
          - generic [ref=e380]: "⚠️ Broken links: he-thong-cua-hang (status: 404), phong-khach (status: 404), phong-ngu (status: 404), phong-an (status: 404), phong-lam-viec (status: 404)"
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