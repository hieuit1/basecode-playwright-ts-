# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Máy Sạc Ắc Quy (/may-sac-ac-quy)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 94/100 dưới ngưỡng 96%. Có 1/18 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - link "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM" [ref=e5] [cursor=pointer]:
          - /url: https://acquythanhphatdat.com/
          - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM" [ref=e6]
        - link "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM" [ref=e7] [cursor=pointer]:
          - /url: https://acquythanhphatdat.com/
          - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM" [ref=e8]
      - generic [ref=e9]:
        - generic [ref=e10]:
          - textbox "Tìm kiếm..." [ref=e11]
          - button "Tìm kiếm" [ref=e12] [cursor=pointer]:
            - img [ref=e13]
        - generic "Lien ket header" [ref=e15]:
          - link "Google" [ref=e16] [cursor=pointer]:
            - /url: acquythanhphatdat.com/
            - img "Google" [ref=e17]
          - link "Facebook" [ref=e18] [cursor=pointer]:
            - /url: https://www.facebook.com/thanhphatdatgs?locale=vi_VN
            - img "Facebook" [ref=e19]
    - navigation "Main menu" [ref=e20]:
      - list [ref=e21]:
        - listitem [ref=e22]:
          - link "Trang chủ" [ref=e23] [cursor=pointer]:
            - /url: ""
        - listitem [ref=e24]:
          - link "Giới thiệu" [ref=e25] [cursor=pointer]:
            - /url: gioi-thieu
        - listitem [ref=e26]:
          - link "Sản phẩm" [ref=e27] [cursor=pointer]:
            - /url: san-pham
        - listitem [ref=e28]:
          - link "Tin tức" [ref=e29] [cursor=pointer]:
            - /url: tin-tuc
        - listitem [ref=e30]:
          - link "Dịch vụ" [ref=e31] [cursor=pointer]:
            - /url: dich-vu
        - listitem [ref=e32]:
          - link "Liên hệ" [ref=e33] [cursor=pointer]:
            - /url: lien-he
  - generic [ref=e34]:
    - list [ref=e37]:
      - listitem [ref=e38]:
        - link "Trang chủ" [ref=e39] [cursor=pointer]:
          - /url: https://acquythanhphatdat.com/
          - img [ref=e40]
          - generic [ref=e42]: Trang chủ
      - listitem [ref=e43]:
        - text: /
        - link "Sản phẩm" [ref=e44] [cursor=pointer]:
          - /url: https://acquythanhphatdat.com/san-pham
      - listitem [ref=e45]:
        - text: /
        - link "Máy Sạc Ắc Quy" [ref=e46] [cursor=pointer]:
          - /url: https://acquythanhphatdat.com/may-sac-ac-quy
    - generic [ref=e49]:
      - complementary [ref=e51]:
        - generic [ref=e52]:
          - generic [ref=e53]: Danh mục sản phẩm
          - navigation "Danh mục sản phẩm" [ref=e54]:
            - list [ref=e55]:
              - listitem [ref=e56]:
                - link "Máy Sạc Ắc Quy" [ref=e57] [cursor=pointer]:
                  - /url: may-sac-ac-quy
              - listitem [ref=e58]:
                - link "Ắc Quy Đồng Nai" [ref=e59] [cursor=pointer]:
                  - /url: ac-quy-dong-nai
                - list [ref=e60]:
                  - listitem [ref=e61]:
                    - link "ẮC QUY Ô TÔ ĐỒNG NAI NƯỚC" [ref=e62] [cursor=pointer]:
                      - /url: ac-quy-o-to-dong-nai-nuoc
                  - listitem [ref=e63]:
                    - link "ẮC QUY Ô TÔ ĐỒNG NAI KHÔ" [ref=e64] [cursor=pointer]:
                      - /url: ac-quy-o-to-dong-nai-kho
              - listitem [ref=e65]:
                - link "Ắc Quy GS" [ref=e66] [cursor=pointer]:
                  - /url: ac-quy-gs
                - list [ref=e67]:
                  - listitem [ref=e68]:
                    - link "ẮC QUY Ô TÔ GS NƯỚC" [ref=e69] [cursor=pointer]:
                      - /url: ac-quy-o-to-gs-nuoc
                  - listitem [ref=e70]:
                    - link "ẮC QUY Ô TÔ GS KHÔ" [ref=e71] [cursor=pointer]:
                      - /url: ac-quy-o-to-gs-kho
                  - listitem [ref=e72]:
                    - link "ẮC QUY XE MÁY" [ref=e73] [cursor=pointer]:
                      - /url: ac-quy-xe-may-gs
              - listitem [ref=e74]:
                - link "Ắc Quy Rocket" [ref=e75] [cursor=pointer]:
                  - /url: ac-quy-rocket
                - list [ref=e76]:
                  - listitem [ref=e77]:
                    - link "ẮC QUY ROCKET" [ref=e78] [cursor=pointer]:
                      - /url: ac-quy-rocket-rocket
              - listitem [ref=e79]:
                - link "Ắc Quy Globe" [ref=e80] [cursor=pointer]:
                  - /url: ac-quy-globe
                - list [ref=e81]:
                  - listitem [ref=e82]:
                    - link "ẮC QUY XE MÁY" [ref=e83] [cursor=pointer]:
                      - /url: ac-quy-xe-may-globle
                  - listitem [ref=e84]:
                    - link "ẮC QUY XE ĐẠP ĐIỆN & XE MÁY ĐIỆN" [ref=e85] [cursor=pointer]:
                      - /url: ac-quy-xe-dap-dien-xe-may-dien
                  - listitem [ref=e86]:
                    - link "LƯU TRỮ ĐIỆN UPS+ĐÈN SẠC" [ref=e87] [cursor=pointer]:
                      - /url: luu-tru-dien-upsden-sac
              - listitem [ref=e88]:
                - link "Ắc Quy UPS Trữ Điện & Đèn Sạc" [ref=e89] [cursor=pointer]:
                  - /url: ac-quy-ups-tru-dien-den-sac
              - listitem [ref=e90]:
                - link "Ắc Quy Xe Điện" [ref=e91] [cursor=pointer]:
                  - /url: ac-quy-xe-dien
        - generic [ref=e92]:
          - generic [ref=e93]: Hỗ trợ trực tuyến
          - link "0933 895 896" [ref=e94] [cursor=pointer]:
            - /url: tel:0933895896
          - generic [ref=e95]:
            - generic [ref=e96]:
              - generic [ref=e97]:
                - link "Mr Phong" [ref=e98] [cursor=pointer]:
                  - /url: Skype:thanhphatdatcompany2015?chat
                  - img "Mr Phong" [ref=e99]
                - link "Mr Phong" [ref=e100] [cursor=pointer]:
                  - /url: ymsgr:sendIM?thanhphatdatcompany2015
                  - img "Mr Phong" [ref=e101]
                - generic [ref=e102]: Mr Phong
              - link "Điện thoại 0939 895 896" [ref=e103] [cursor=pointer]:
                - /url: tel:0939895896
                - img "Điện thoại" [ref=e104]
                - generic [ref=e105]: 0939 895 896
            - generic [ref=e106]:
              - generic [ref=e107]:
                - link "Mrs Thuý" [ref=e108] [cursor=pointer]:
                  - /url: Skype:ngocthuynguyen?chat
                  - img "Mrs Thuý" [ref=e109]
                - link "Mrs Thuý" [ref=e110] [cursor=pointer]:
                  - /url: ymsgr:sendIM?tpd.ngocthuy@gmail.com
                  - img "Mrs Thuý" [ref=e111]
                - generic [ref=e112]: Mrs Thuý
              - link "Điện thoại 0933 895 896" [ref=e113] [cursor=pointer]:
                - /url: tel:0933895896
                - img "Điện thoại" [ref=e114]
                - generic [ref=e115]: 0933 895 896
      - generic [ref=e116]:
        - generic [ref=e119]: Máy Sạc Ắc Quy
        - generic [ref=e121]:
          - generic [ref=e123]:
            - link "SẠC NGẮT TỰ ĐỘNG ATP 12V, 24V - 10A, 20A, 30A" [ref=e125] [cursor=pointer]:
              - /url: "sac-ngat-tu-dong-atp-12v-24v-10a-20a-30a "
              - img "SẠC NGẮT TỰ ĐỘNG ATP 12V, 24V - 10A, 20A, 30A" [ref=e126]
            - heading "SẠC NGẮT TỰ ĐỘNG ATP 12V, 24V - 10A, 20A, 30A" [level=3] [ref=e127]:
              - link "SẠC NGẮT TỰ ĐỘNG ATP 12V, 24V - 10A, 20A, 30A" [ref=e128] [cursor=pointer]:
                - /url: sac-ngat-tu-dong-atp-12v-24v-10a-20a-30a
          - generic [ref=e130]:
            - link "MÁY SẠC ẮC QUY HANSHIN 10A (LÕI DÂY ĐỒNG)" [ref=e132] [cursor=pointer]:
              - /url: "may-sac-ac-quy-hanshin-10a-loi-day-dong "
              - img "MÁY SẠC ẮC QUY HANSHIN 10A (LÕI DÂY ĐỒNG)" [ref=e133]
            - heading "MÁY SẠC ẮC QUY HANSHIN 10A (LÕI DÂY ĐỒNG)" [level=3] [ref=e134]:
              - link "MÁY SẠC ẮC QUY HANSHIN 10A (LÕI DÂY ĐỒNG)" [ref=e135] [cursor=pointer]:
                - /url: may-sac-ac-quy-hanshin-10a-loi-day-dong
          - generic [ref=e137]:
            - link "MÁY SẠC ẮC QUY HANSHIN 20A (LÕI DÂY ĐỒNG)" [ref=e139] [cursor=pointer]:
              - /url: "may-sac-ac-quy-hanshin-20a-loi-day-dong "
              - img "MÁY SẠC ẮC QUY HANSHIN 20A (LÕI DÂY ĐỒNG)" [ref=e140]
            - heading "MÁY SẠC ẮC QUY HANSHIN 20A (LÕI DÂY ĐỒNG)" [level=3] [ref=e141]:
              - link "MÁY SẠC ẮC QUY HANSHIN 20A (LÕI DÂY ĐỒNG)" [ref=e142] [cursor=pointer]:
                - /url: may-sac-ac-quy-hanshin-20a-loi-day-dong
          - generic [ref=e144]:
            - link "MÁY SẠC ẮC QUY HANSHIN 20A (LÕI DÂY NHÔM)" [ref=e146] [cursor=pointer]:
              - /url: "may-sac-ac-quy-hanshin-20a-loi-day-nhom "
              - img "MÁY SẠC ẮC QUY HANSHIN 20A (LÕI DÂY NHÔM)" [ref=e147]
            - heading "MÁY SẠC ẮC QUY HANSHIN 20A (LÕI DÂY NHÔM)" [level=3] [ref=e148]:
              - link "MÁY SẠC ẮC QUY HANSHIN 20A (LÕI DÂY NHÔM)" [ref=e149] [cursor=pointer]:
                - /url: may-sac-ac-quy-hanshin-20a-loi-day-nhom
          - generic [ref=e151]:
            - link "MÁY SẠC ẮC QUY HANSHIN 30A (LÕI DÂY ĐỒNG)" [ref=e153] [cursor=pointer]:
              - /url: "may-sac-ac-quy-hanshin-30a-loi-day-dong "
              - img "MÁY SẠC ẮC QUY HANSHIN 30A (LÕI DÂY ĐỒNG)" [ref=e154]
            - heading "MÁY SẠC ẮC QUY HANSHIN 30A (LÕI DÂY ĐỒNG)" [level=3] [ref=e155]:
              - link "MÁY SẠC ẮC QUY HANSHIN 30A (LÕI DÂY ĐỒNG)" [ref=e156] [cursor=pointer]:
                - /url: may-sac-ac-quy-hanshin-30a-loi-day-dong
          - generic [ref=e158]:
            - link "MÁY SẠC ẮC QUY HANSHIN 30A (LÕI DÂY NHÔM)" [ref=e160] [cursor=pointer]:
              - /url: "may-sac-ac-quy-hanshin-30a-loi-day-nhom "
              - img "MÁY SẠC ẮC QUY HANSHIN 30A (LÕI DÂY NHÔM)" [ref=e161]
            - heading "MÁY SẠC ẮC QUY HANSHIN 30A (LÕI DÂY NHÔM)" [level=3] [ref=e162]:
              - link "MÁY SẠC ẮC QUY HANSHIN 30A (LÕI DÂY NHÔM)" [ref=e163] [cursor=pointer]:
                - /url: may-sac-ac-quy-hanshin-30a-loi-day-nhom
          - generic [ref=e165]:
            - link "MÁY SẠC ẮC QUY HANSHIN 50A (LÕI DÂY ĐỒNG)" [ref=e167] [cursor=pointer]:
              - /url: "may-sac-ac-quy-hanshin-50a-loi-day-dong "
              - img "MÁY SẠC ẮC QUY HANSHIN 50A (LÕI DÂY ĐỒNG)" [ref=e168]
            - heading "MÁY SẠC ẮC QUY HANSHIN 50A (LÕI DÂY ĐỒNG)" [level=3] [ref=e169]:
              - link "MÁY SẠC ẮC QUY HANSHIN 50A (LÕI DÂY ĐỒNG)" [ref=e170] [cursor=pointer]:
                - /url: may-sac-ac-quy-hanshin-50a-loi-day-dong
          - generic [ref=e172]:
            - link "MÁY SẠC ẮC QUY HANSHIN 50A (LÕI DÂY NHÔM)" [ref=e174] [cursor=pointer]:
              - /url: "may-sac-ac-quy-hanshin-50a-loi-day-nhom "
              - img "MÁY SẠC ẮC QUY HANSHIN 50A (LÕI DÂY NHÔM)" [ref=e175]
            - heading "MÁY SẠC ẮC QUY HANSHIN 50A (LÕI DÂY NHÔM)" [level=3] [ref=e176]:
              - link "MÁY SẠC ẮC QUY HANSHIN 50A (LÕI DÂY NHÔM)" [ref=e177] [cursor=pointer]:
                - /url: may-sac-ac-quy-hanshin-50a-loi-day-nhom
          - generic [ref=e179]:
            - link "MÁY SẠC ẮC QUY HANSHIN 100A (LÕI DÂY ĐỒNG)" [ref=e181] [cursor=pointer]:
              - /url: "may-sac-ac-quy-hanshin-100a-loi-day-dong "
              - img "MÁY SẠC ẮC QUY HANSHIN 100A (LÕI DÂY ĐỒNG)" [ref=e182]
            - heading "MÁY SẠC ẮC QUY HANSHIN 100A (LÕI DÂY ĐỒNG)" [level=3] [ref=e183]:
              - link "MÁY SẠC ẮC QUY HANSHIN 100A (LÕI DÂY ĐỒNG)" [ref=e184] [cursor=pointer]:
                - /url: may-sac-ac-quy-hanshin-100a-loi-day-dong
          - generic [ref=e185]:
            - generic:
              - generic:
                - link "SẠC ẮC QUY HANSHIN 100A (LÕI DÂY NHÔM)":
                  - /url: "sac-ac-quy-hanshin-100a-loi-day-nhom "
                  - img "SẠC ẮC QUY HANSHIN 100A (LÕI DÂY NHÔM)"
              - heading "SẠC ẮC QUY HANSHIN 100A (LÕI DÂY NHÔM)" [level=3]:
                - link "SẠC ẮC QUY HANSHIN 100A (LÕI DÂY NHÔM)":
                  - /url: sac-ac-quy-hanshin-100a-loi-day-nhom
          - generic [ref=e186]:
            - generic:
              - generic:
                - link "INTERVER 500A":
                  - /url: "interver-500a "
                  - img "INTERVER 500A"
              - heading "INTERVER 500A" [level=3]:
                - link "INTERVER 500A":
                  - /url: interver-500a
          - generic [ref=e187]:
            - generic:
              - generic:
                - link "INTERVER 1000A":
                  - /url: "interver-1000a "
                  - img "INTERVER 1000A"
              - heading "INTERVER 1000A" [level=3]:
                - link "INTERVER 1000A":
                  - /url: interver-1000a
    - generic:
      - generic:
        - generic:
          - generic:
            - generic:
              - generic:
                - paragraph: CÔNG TY TNHH MTV ẮC QUY THÀNH PHÁT ĐẠT
                - generic:
                  - paragraph:
                    - text: "MST: 0313178915 - Người đại diện: Nguyễn Thành Phong"
                    - text: "Địa chỉ: 261 Quốc Lộ 1A, Khu Phố 5, P. Bình Chiểu, TP. Thủ Đức, Tp. Hồ Chí Minh"
                    - text: "CN2: Số 68 đường D2A, KĐT TM&DV Sóng Thần, KP Thống Nhất 1, P. Dĩ An, TP. Dĩ An, Bình Dương"
                    - text: "Điện thoại: 0939 895 896 Mr Phong - 0933 895 896 Mrs Thuý"
                    - text: "Email: thanhphatdatcompany2015@gmail.com"
                    - 'link "Website: https://acquythanhphatdat.com/"':
                      - /url: https://acquythanhphatdat.com/upload/elfinder/logoSaleNoti.png
                  - paragraph:
                    - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                  - paragraph
                - generic: Copyright 2016 © Thanh Phat Dat. All rights reserved. Thiết kế web MIMA
                - generic:
                  - link "Google":
                    - /url: https://acquythanhphatdat.com/
                    - img "Google"
                  - link "Zalo":
                    - /url: https://zalo.me/0933895896
                    - img "Zalo"
                  - link "Facebook":
                    - /url: https://www.facebook.com/thanhphatdatgs/
                    - img "Facebook"
              - generic:
                - generic:
                  - generic:
                    - paragraph: Chính sách hỗ trợ
                    - list:
                      - listitem:
                        - link "Hình thức thanh toán":
                          - /url: hinh-thuc-thanh-toan-2
                      - listitem:
                        - link "Chính sách đổi trả hàng":
                          - /url: chinh-sach-doi-tra-hang
                      - listitem:
                        - link "Chính sách bảo mật":
                          - /url: chinh-sach-bao-mat
                      - listitem:
                        - link "Chính sách mua hàng":
                          - /url: chinh-sach-mua-hang
                  - generic:
                    - paragraph: Truy cập nhanh
                    - list:
                      - listitem:
                        - link "Giới thiệu":
                          - /url: gioi-thieu
                      - listitem:
                        - link "Sản phẩm":
                          - /url: san-pham
                      - listitem:
                        - link "Tin tức":
                          - /url: tin-tuc
                      - listitem:
                        - link "Dịch vụ":
                          - /url: dich-vu
                      - listitem:
                        - link "Liên hệ":
                          - /url: lien-he
                  - generic:
                    - paragraph: Thông kê truy cập
                    - list:
                      - listitem:
                        - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                        - text: "Đang online: 321"
                      - listitem:
                        - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                        - text: "Hôm nay: 2058"
                      - listitem:
                        - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                        - text: "Thống kê tháng : 4896"
                      - listitem:
                        - img "CỬA HÀNG BÁN ẮC QUY Ô TÔ TẠI THỦ ĐỨC, KCN SÓNG THẦN HCM"
                        - text: "Tổng truy cập: 4904"
    - generic [ref=e189]:
      - 'link "Call me: 0933 895 896" [ref=e190] [cursor=pointer]':
        - /url: tel:0933895896
        - img [ref=e194]
        - generic [ref=e197]: "Call me: 0933 895 896"
      - 'link "Zalo: 0888080138" [ref=e198] [cursor=pointer]':
        - /url: https://zalo.me/0888080138
        - img [ref=e202]
        - generic [ref=e203]: "Zalo: 0888080138"
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
              - generic: "94"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 94/100
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
          - generic: "18"
          - generic: Tổng tiêu chí
        - generic:
          - generic: ✅ 17
          - generic: Đạt
        - generic:
          - generic: ❌ 1
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: Máy Sạc Ắc Quy
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e204]:
      - generic [ref=e205]: "❌ Chi tiết lỗi cần khắc phục (1/18):"
      - generic [ref=e206]:
        - generic [ref=e207]:
          - generic [ref=e208]: 6. Liên kết (Links)
          - generic [ref=e209]: 1 lỗi
        - generic [ref=e210]:
          - strong [ref=e212]: "Không có broken links (lỗi: 5/44)"
          - generic [ref=e213]: "⚠️ Broken links: acquythanhphatdat.com/ (status: 404), Skype:thanhphatdatcompany2015?chat (status: 0), ymsgr:sendIM?thanhphatdatcompany2015 (status: 0), Skype:ngocthuynguyen?chat (status: 0), ymsgr:sendI..."
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 94/100 dưới ngưỡng 96%. Có 1/18 tiêu chí không đạt.
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