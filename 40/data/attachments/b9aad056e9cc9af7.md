# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Dịch vụ (/dich-vu)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 81/100 dưới ngưỡng 96%. Có 4/21 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e7]:
      - link "Viên Mộc Decor - Thiết Kế Bàn Trà Đạo" [ref=e8] [cursor=pointer]:
        - /url: https://code5.mimadigi.vn/2026/august/trancongvinh_111726W/
        - img "Viên Mộc Decor - Thiết Kế Bàn Trà Đạo" [ref=e9]
      - list [ref=e10]:
        - listitem [ref=e11]:
          - link "Trang chủ" [ref=e12] [cursor=pointer]:
            - /url: ""
        - listitem [ref=e13]:
          - link "Về viên mộc" [ref=e14] [cursor=pointer]:
            - /url: ve-vien-moc
        - listitem [ref=e15]:
          - link "Dịch vụ" [ref=e16] [cursor=pointer]:
            - /url: dich-vu
            - text: Dịch vụ
            - img [ref=e17]
        - listitem [ref=e19]:
          - link "Sản phẩm" [ref=e20] [cursor=pointer]:
            - /url: san-pham
            - text: Sản phẩm
            - img [ref=e21]
        - listitem [ref=e23]:
          - link "Dự án" [ref=e24] [cursor=pointer]:
            - /url: du-an
            - text: Dự án
            - img [ref=e25]
        - listitem [ref=e27]:
          - link "Tin tức" [ref=e28] [cursor=pointer]:
            - /url: tin-tuc
        - listitem [ref=e29]:
          - link "Liên hệ" [ref=e30] [cursor=pointer]:
            - /url: lien-he
      - generic [ref=e32]:
        - searchbox "Nhập từ khóa..."
        - button "Search" [ref=e33] [cursor=pointer]:
          - img [ref=e34]
      - link "0938830339" [ref=e38] [cursor=pointer]:
        - /url: tel:0938830339
        - img [ref=e39]
        - text: "0938830339"
    - list [ref=e44]:
      - listitem [ref=e45]:
        - link "Trang chủ" [ref=e46] [cursor=pointer]:
          - /url: https://code5.mimadigi.vn/2026/august/trancongvinh_111726W/
          - generic [ref=e47]: Trang chủ
      - listitem [ref=e48]:
        - text: /
        - link "Dịch vụ" [ref=e49] [cursor=pointer]:
          - /url: https://code5.mimadigi.vn/2026/august/trancongvinh_111726W/dich-vu
          - generic [ref=e50]: Dịch vụ
    - generic [ref=e54]:
      - generic [ref=e56]: Dịch vụ
      - generic [ref=e58]:
        - generic [ref=e60]:
          - paragraph [ref=e61]:
            - link "Dịch vụ thiết kế 1" [ref=e62] [cursor=pointer]:
              - /url: dich-vu-thiet-ke-1
              - img "Dịch vụ thiết kế 1" [ref=e63]
          - heading "Dịch vụ thiết kế 1" [level=3] [ref=e65]:
            - link "Dịch vụ thiết kế 1" [ref=e66] [cursor=pointer]:
              - /url: dich-vu-thiet-ke-1
        - generic [ref=e68]:
          - paragraph [ref=e69]:
            - link "Dịch vụ thiết kế 2" [ref=e70] [cursor=pointer]:
              - /url: dich-vu-thiet-ke-2
              - img "Dịch vụ thiết kế 2" [ref=e71]
          - heading "Dịch vụ thiết kế 2" [level=3] [ref=e73]:
            - link "Dịch vụ thiết kế 2" [ref=e74] [cursor=pointer]:
              - /url: dich-vu-thiet-ke-2
        - generic [ref=e76]:
          - paragraph [ref=e77]:
            - link "Dịch vụ thiết kế 3" [ref=e78] [cursor=pointer]:
              - /url: dich-vu-thiet-ke-3
              - img "Dịch vụ thiết kế 3" [ref=e79]
          - heading "Dịch vụ thiết kế 3" [level=3] [ref=e81]:
            - link "Dịch vụ thiết kế 3" [ref=e82] [cursor=pointer]:
              - /url: dich-vu-thiet-ke-3
        - generic [ref=e84]:
          - paragraph [ref=e85]:
            - link "Dịch vụ thiết kế 4" [ref=e86] [cursor=pointer]:
              - /url: dich-vu-thiet-ke-4
              - img "Dịch vụ thiết kế 4" [ref=e87]
          - heading "Dịch vụ thiết kế 4" [level=3] [ref=e89]:
            - link "Dịch vụ thiết kế 4" [ref=e90] [cursor=pointer]:
              - /url: dich-vu-thiet-ke-4
        - generic [ref=e92]:
          - paragraph [ref=e93]:
            - link "Dịch vụ thiết kế 5" [ref=e94] [cursor=pointer]:
              - /url: dich-vu-thiet-ke-5
              - img "Dịch vụ thiết kế 5" [ref=e95]
          - heading "Dịch vụ thiết kế 5" [level=3] [ref=e97]:
            - link "Dịch vụ thiết kế 5" [ref=e98] [cursor=pointer]:
              - /url: dich-vu-thiet-ke-5
        - generic [ref=e100]:
          - paragraph [ref=e101]:
            - link "Dịch vụ thiết kế 6" [ref=e102] [cursor=pointer]:
              - /url: dich-vu-thiet-ke-6
              - img "Dịch vụ thiết kế 6" [ref=e103]
          - heading "Dịch vụ thiết kế 6" [level=3] [ref=e105]:
            - link "Dịch vụ thiết kế 6" [ref=e106] [cursor=pointer]:
              - /url: dich-vu-thiet-ke-6
        - generic [ref=e108]:
          - paragraph [ref=e109]:
            - link "Dịch vụ thiết kế 7" [ref=e110] [cursor=pointer]:
              - /url: dich-vu-thiet-ke-7
              - img "Dịch vụ thiết kế 7" [ref=e111]
          - heading "Dịch vụ thiết kế 7" [level=3] [ref=e113]:
            - link "Dịch vụ thiết kế 7" [ref=e114] [cursor=pointer]:
              - /url: dich-vu-thiet-ke-7
        - generic [ref=e116]:
          - paragraph [ref=e117]:
            - link "Dịch vụ thiết kế 8" [ref=e118] [cursor=pointer]:
              - /url: dich-vu-thiet-ke-8
              - img "Dịch vụ thiết kế 8" [ref=e119]
          - heading "Dịch vụ thiết kế 8" [level=3] [ref=e121]:
            - link "Dịch vụ thiết kế 8" [ref=e122] [cursor=pointer]:
              - /url: dich-vu-thiet-ke-8
        - generic [ref=e124]:
          - paragraph [ref=e125]:
            - link "Dịch vụ thiết kế 9" [ref=e126] [cursor=pointer]:
              - /url: dich-vu-thiet-ke-9
              - img "Dịch vụ thiết kế 9" [ref=e127]
          - heading "Dịch vụ thiết kế 9" [level=3] [ref=e129]:
            - link "Dịch vụ thiết kế 9" [ref=e130] [cursor=pointer]:
              - /url: dich-vu-thiet-ke-9
        - generic:
          - generic:
            - paragraph:
              - link "Dịch vụ thiết kế 10":
                - /url: dich-vu-thiet-ke-10
                - img "Dịch vụ thiết kế 10"
            - generic:
              - heading "Dịch vụ thiết kế 10" [level=3]:
                - link "Dịch vụ thiết kế 10":
                  - /url: dich-vu-thiet-ke-10
        - generic:
          - generic:
            - paragraph:
              - link "Dịch vụ thiết kế 11":
                - /url: dich-vu-thiet-ke-11
                - img "Dịch vụ thiết kế 11"
            - generic:
              - heading "Dịch vụ thiết kế 11" [level=3]:
                - link "Dịch vụ thiết kế 11":
                  - /url: dich-vu-thiet-ke-11
        - generic:
          - generic:
            - paragraph:
              - link "Dịch vụ thiết kế 12":
                - /url: dich-vu-thiet-ke-12
                - img "Dịch vụ thiết kế 12"
            - generic:
              - heading "Dịch vụ thiết kế 12" [level=3]:
                - link "Dịch vụ thiết kế 12":
                  - /url: dich-vu-thiet-ke-12
        - generic:
          - generic:
            - paragraph:
              - link "Dịch vụ thiết kế 13":
                - /url: dich-vu-thiet-ke-13
                - img "Dịch vụ thiết kế 13"
            - generic:
              - heading "Dịch vụ thiết kế 13" [level=3]:
                - link "Dịch vụ thiết kế 13":
                  - /url: dich-vu-thiet-ke-13
        - generic:
          - generic:
            - paragraph:
              - link "Dịch vụ thiết kế 14":
                - /url: dich-vu-thiet-ke-14
                - img "Dịch vụ thiết kế 14"
            - generic:
              - heading "Dịch vụ thiết kế 14" [level=3]:
                - link "Dịch vụ thiết kế 14":
                  - /url: dich-vu-thiet-ke-14
        - generic:
          - generic:
            - paragraph:
              - link "Dịch vụ thiết kế 15":
                - /url: dich-vu-thiet-ke-15
                - img "Dịch vụ thiết kế 15"
            - generic:
              - heading "Dịch vụ thiết kế 15" [level=3]:
                - link "Dịch vụ thiết kế 15":
                  - /url: dich-vu-thiet-ke-15
        - generic:
          - generic:
            - paragraph:
              - link "Dịch vụ thiết kế 16":
                - /url: dich-vu-thiet-ke-16
                - img "Dịch vụ thiết kế 16"
            - generic:
              - heading "Dịch vụ thiết kế 16" [level=3]:
                - link "Dịch vụ thiết kế 16":
                  - /url: dich-vu-thiet-ke-16
        - generic:
          - generic:
            - paragraph:
              - link "Dịch vụ thiết kế 17":
                - /url: dich-vu-thiet-ke-17
                - img "Dịch vụ thiết kế 17"
            - generic:
              - heading "Dịch vụ thiết kế 17" [level=3]:
                - link "Dịch vụ thiết kế 17":
                  - /url: dich-vu-thiet-ke-17
        - generic:
          - generic:
            - paragraph:
              - link "Dịch vụ thiết kế 18":
                - /url: dich-vu-thiet-ke-18
                - img "Dịch vụ thiết kế 18"
            - generic:
              - heading "Dịch vụ thiết kế 18" [level=3]:
                - link "Dịch vụ thiết kế 18":
                  - /url: dich-vu-thiet-ke-18
        - generic:
          - generic:
            - paragraph:
              - link "Dịch vụ thiết kế 19":
                - /url: dich-vu-thiet-ke-19
                - img "Dịch vụ thiết kế 19"
            - generic:
              - heading "Dịch vụ thiết kế 19" [level=3]:
                - link "Dịch vụ thiết kế 19":
                  - /url: dich-vu-thiet-ke-19
        - generic:
          - generic:
            - paragraph:
              - link "Dịch vụ thiết kế 20":
                - /url: dich-vu-thiet-ke-20
                - img "Dịch vụ thiết kế 20"
            - generic:
              - heading "Dịch vụ thiết kế 20" [level=3]:
                - link "Dịch vụ thiết kế 20":
                  - /url: dich-vu-thiet-ke-20
        - generic:
          - generic:
            - paragraph:
              - link "Dịch vụ thiết kế 21":
                - /url: dich-vu-thiet-ke-21
                - img "Dịch vụ thiết kế 21"
            - generic:
              - heading "Dịch vụ thiết kế 21" [level=3]:
                - link "Dịch vụ thiết kế 21":
                  - /url: dich-vu-thiet-ke-21
        - generic:
          - generic:
            - paragraph:
              - link "Dịch vụ thiết kế 22":
                - /url: dich-vu-thiet-ke-22
                - img "Dịch vụ thiết kế 22"
            - generic:
              - heading "Dịch vụ thiết kế 22" [level=3]:
                - link "Dịch vụ thiết kế 22":
                  - /url: dich-vu-thiet-ke-22
        - generic:
          - generic:
            - paragraph:
              - link "Dịch vụ thiết kế 23":
                - /url: dich-vu-thiet-ke-23
                - img "Dịch vụ thiết kế 23"
            - generic:
              - heading "Dịch vụ thiết kế 23" [level=3]:
                - link "Dịch vụ thiết kế 23":
                  - /url: dich-vu-thiet-ke-23
        - generic:
          - generic:
            - paragraph:
              - link "Dịch vụ thiết kế 24":
                - /url: dich-vu-thiet-ke-24
                - img "Dịch vụ thiết kế 24"
            - generic:
              - heading "Dịch vụ thiết kế 24" [level=3]:
                - link "Dịch vụ thiết kế 24":
                  - /url: dich-vu-thiet-ke-24
        - generic:
          - generic:
            - paragraph:
              - link "Dịch vụ thiết kế 25":
                - /url: dich-vu-thiet-ke-25
                - img "Dịch vụ thiết kế 25"
            - generic:
              - heading "Dịch vụ thiết kế 25" [level=3]:
                - link "Dịch vụ thiết kế 25":
                  - /url: dich-vu-thiet-ke-25
        - generic:
          - generic:
            - paragraph:
              - link "Dịch vụ thiết kế 26":
                - /url: dich-vu-thiet-ke-26
                - img "Dịch vụ thiết kế 26"
            - generic:
              - heading "Dịch vụ thiết kế 26" [level=3]:
                - link "Dịch vụ thiết kế 26":
                  - /url: dich-vu-thiet-ke-26
        - generic:
          - generic:
            - paragraph:
              - link "Dịch vụ thiết kế 27":
                - /url: dich-vu-thiet-ke-27
                - img "Dịch vụ thiết kế 27"
            - generic:
              - heading "Dịch vụ thiết kế 27" [level=3]:
                - link "Dịch vụ thiết kế 27":
                  - /url: dich-vu-thiet-ke-27
        - generic:
          - generic:
            - paragraph:
              - link "Dịch vụ thiết kế 28":
                - /url: dich-vu-thiet-ke-28
                - img "Dịch vụ thiết kế 28"
            - generic:
              - heading "Dịch vụ thiết kế 28" [level=3]:
                - link "Dịch vụ thiết kế 28":
                  - /url: dich-vu-thiet-ke-28
        - generic:
          - generic:
            - paragraph:
              - link "Dịch vụ thiết kế 29":
                - /url: dich-vu-thiet-ke-29
                - img "Dịch vụ thiết kế 29"
            - generic:
              - heading "Dịch vụ thiết kế 29" [level=3]:
                - link "Dịch vụ thiết kế 29":
                  - /url: dich-vu-thiet-ke-29
        - generic:
          - generic:
            - paragraph:
              - link "Dịch vụ thiết kế 30":
                - /url: dich-vu-thiet-ke-30
                - img "Dịch vụ thiết kế 30"
            - generic:
              - heading "Dịch vụ thiết kế 30" [level=3]:
                - link "Dịch vụ thiết kế 30":
                  - /url: dich-vu-thiet-ke-30
      - link "Xem thêm 5 Dịch vụ" [ref=e132] [cursor=pointer]:
        - /url: javascript:void(0)
        - img [ref=e134]
        - generic [ref=e137]: Xem thêm 5 Dịch vụ
    - generic:
      - generic:
        - generic:
          - generic:
            - generic: ĐẶT LỊCH TƯ VẤN
            - generic:
              - heading "Liên hệ tư vấn & Báo giá" [level=2]
            - generic: Chào mừng bạn đến với Viên Mộc Decor – xưởng chuyên chế tác nội thất và đồ trang trí từ gỗ lũa, gỗ tự nhiên. Mỗi sản phẩm đều mang vẻ đẹp nguyên bản, truyền tải thông điệp của từng cá nhân sở hữu,....
            - generic:
              - generic:
                - generic:
                  - generic:
                    - generic:
                      - generic:
                        - img
                      - textbox "Họ và tên"
                  - generic:
                    - generic:
                      - generic:
                        - img
                      - textbox "Vui lòng nhập đúng số điện thoại":
                        - /placeholder: Số điện thoại
                - generic:
                  - generic:
                    - img
                  - textbox "Nội dung"
                - button "Gửi thông tin liên hệ"
              - generic:
                - generic:
                  - text: "Hoặc gọi:"
                  - link "0938 830 339":
                    - /url: tel:0938830339
                - text: •
                - generic:
                  - text: "Zalo:"
                  - link "0902 555 933":
                    - /url: https://zalo.me/0902555933
    - generic [ref=e138]:
      - generic:
        - generic:
          - generic:
            - link "Viên Mộc Decor - Thiết Kế Bàn Trà Đạo":
              - /url: https://code5.mimadigi.vn/2026/august/trancongvinh_111726W/
              - img "Viên Mộc Decor - Thiết Kế Bàn Trà Đạo"
          - generic:
            - generic:
              - generic: Thông tin liên hệ
              - generic:
                - paragraph:
                  - strong: VIÊN MỘC DECOR
                - paragraph:
                  - strong: 298 Bà Điểm 4, Ấp Tiền Lân, xã Bà Điểm, TPHCM
                - paragraph:
                  - strong: "Hotline: 0938 830 339"
                - paragraph:
                  - strong: "Zalo:"
                  - link "0902 555 933":
                    - /url: https://zalo.me/0902555933
                - paragraph:
                  - strong: "Email:"
                  - link "vienmoc79@gmail.com":
                    - /url: http://vienmoc79@gmail.com
                - paragraph:
                  - strong: "Website:"
                  - link "www.xuonggonoithatsaigon.com":
                    - /url: http://www.xuonggonoithatsaigon.com
              - generic: Mạng xã hội
              - generic:
                - link "Facebook":
                  - /url: https://www.facebook.com/xuonggoluasaigon?locale=vi_VN
                  - img "Facebook"
                - link "Message":
                  - /url: https://www.facebook.com/xuonggoluasaigon?locale=vi_VN
                  - img "Message"
                - link "Instargam":
                  - /url: ""
                  - img "Instargam"
                - link "Tiktok":
                  - /url: https://www.tiktok.com/@thietkedecorbantradao?lang=hu-HU
                  - img "Tiktok"
                - link "Youtobe":
                  - /url: ""
                  - img "Youtobe"
            - generic:
              - generic:
                - generic:
                  - generic: Truy cập nhanh
                  - list:
                    - listitem:
                      - link "Trang chủ":
                        - /url: ""
                    - listitem:
                      - link "Về viên mộc":
                        - /url: ve-vien-moc
                    - listitem:
                      - link "Dịch vụ":
                        - /url: dich-vu
                    - listitem:
                      - link "Tin tức":
                        - /url: tin-tuc
                    - listitem:
                      - link "Liên hệ":
                        - /url: lien-he
                - generic:
                  - generic: Sản phẩm
                  - list:
                    - listitem:
                      - link "Bàn trà đạo":
                        - /url: ban-tra-dao
                    - listitem:
                      - link "Bàn trà thủy sinh":
                        - /url: ban-tra-thuy-sinh
                    - listitem:
                      - link "Bàn trà phong thủy":
                        - /url: ban-tra-phong-thuy
                - generic:
                  - generic: Dịch vụ
                  - list:
                    - listitem:
                      - link "Thi công cảnh quan sân vườn":
                        - /url: canh-quan-san-vuon
                    - listitem:
                      - link "Thiết kế phòng trà đạo":
                        - /url: thiet-ke-phong-tra-dao
                    - listitem:
                      - link "Thi công & Chế tác mộc":
                        - /url: thi-cong-che-tac-moc
      - generic [ref=e142]:
        - text: Copyright ©2026 Viên Mộc. All Right Reserved.
        - generic [ref=e143]: Thiết kế web MIMA
    - generic [ref=e144]:
      - 'link "Call me: 0938830339" [ref=e145] [cursor=pointer]':
        - /url: tel:0938830339
        - img [ref=e149]
        - generic [ref=e152]: "Call me: 0938830339"
      - 'link "Zalo: 0902555933" [ref=e153] [cursor=pointer]':
        - /url: https://zalo.me/0902555933
        - img [ref=e157]
        - generic [ref=e158]: "Zalo: 0902555933"
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
              - generic: "81"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 81/100
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
          - generic: ✅ 17
          - generic: Đạt
        - generic:
          - generic: ❌ 4
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: Dịch vụ
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e159]:
      - generic [ref=e160]: "❌ Chi tiết lỗi cần khắc phục (4/21):"
      - generic [ref=e161]:
        - generic [ref=e162]:
          - generic [ref=e163]: 6. Liên kết (Links)
          - generic [ref=e164]: 1 lỗi
        - generic [ref=e165]:
          - strong [ref=e167]: "Không có broken links (lỗi: 2/56)"
          - generic [ref=e168]: "⚠️ Broken links: http://vienmoc79@gmail.com (status: 0), http://www.xuonggonoithatsaigon.com (status: 0)"
      - generic [ref=e169]:
        - generic [ref=e170]:
          - generic [ref=e171]: 8. Tốc độ & Core Web Vitals
          - generic [ref=e172]: 3 lỗi
        - generic [ref=e173]:
          - strong [ref=e175]: "[📱 MOBILE (ƯU TIÊN)] Tổng điểm Performance: 34/100 (≥ 60)"
          - generic [ref=e176]: ⚠️ [📱 MOBILE (ƯU TIÊN)] Điểm Performance 34/100 dưới ngưỡng 60. Phân tích chi tiết LCP/CLS/INP bên dưới...
        - generic [ref=e177]:
          - strong [ref=e179]: "[📱 MOBILE (ƯU TIÊN)] LCP (Largest Contentful Paint): 11041ms (< 2500ms)"
          - generic [ref=e180]:
            - text: "⚠️ [📱 MOBILE (ƯU TIÊN)] LCP quá cao: 11041ms (chuẩn: < 2.5s) → Thủ phạm LCP:"
            - strong [ref=e182]: "[📱 MOBILE (ƯU TIÊN)] CLS (Cumulative Layout Shift): 0.597 (< 0.1)"
            - generic [ref=e183]:
              - text: "⚠️ [📱 MOBILE (ƯU TIÊN)] CLS quá cao: 0.597 (chuẩn: < 0.1) → Thủ phạm CLS: -"
              - generic: "-"
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 81/100 dưới ngưỡng 96%. Có 4/21 tiêu chí không đạt.
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