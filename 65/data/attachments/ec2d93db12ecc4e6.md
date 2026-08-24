# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Tin tức (/tin-tuc)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 75/100 dưới ngưỡng 96%. Có 6/24 tiêu chí không đạt.
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
          - textbox "Tìm" [ref=e20]:
            - /placeholder: "Tìm "
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
        - link "Tin tức" [ref=e77] [cursor=pointer]:
          - /url: https://code2.mimadigi.vn/2026/august/cfurni_111926w/tin-tuc
    - generic [ref=e81]:
      - heading "Tất cả Tin tức" [level=2] [ref=e83]
      - generic [ref=e85]:
        - generic [ref=e87]:
          - paragraph [ref=e88]:
            - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787559552440 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e89] [cursor=pointer]:
              - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787559552440-1-1-1-1-1-1-1-1-1-1
              - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787559552440 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e90]
          - generic [ref=e91]:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787559552440 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e92]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787559552440 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e93] [cursor=pointer]:
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787559552440-1-1-1-1-1-1-1-1-1-1
            - paragraph [ref=e94]: Mô tả cho Tin tức bulk test
        - generic [ref=e96]:
          - paragraph [ref=e97]:
            - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787559552440 (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e98] [cursor=pointer]:
              - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787559552440-1-1-1-1-1-1-1-1-1
              - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787559552440 (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e99]
          - generic [ref=e100]:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787559552440 (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e101]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787559552440 (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e102] [cursor=pointer]:
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787559552440-1-1-1-1-1-1-1-1-1
            - paragraph [ref=e103]: Mô tả cho Tin tức bulk test
        - generic [ref=e105]:
          - paragraph [ref=e106]:
            - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787559552440 (1) (1) (1) (1) (1) (1) (1)" [ref=e107] [cursor=pointer]:
              - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787559552440-1-1-1-1-1-1-1
              - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787559552440 (1) (1) (1) (1) (1) (1) (1)" [ref=e108]
          - generic [ref=e109]:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787559552440 (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e110]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787559552440 (1) (1) (1) (1) (1) (1) (1)" [ref=e111] [cursor=pointer]:
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787559552440-1-1-1-1-1-1-1
            - paragraph [ref=e112]: Mô tả cho Tin tức bulk test
        - generic [ref=e114]:
          - paragraph [ref=e115]:
            - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787559552440 (1) (1) (1) (1) (1) (1)" [ref=e116] [cursor=pointer]:
              - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787559552440-1-1-1-1-1-1
              - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787559552440 (1) (1) (1) (1) (1) (1)" [ref=e117]
          - generic [ref=e118]:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787559552440 (1) (1) (1) (1) (1) (1)" [level=3] [ref=e119]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787559552440 (1) (1) (1) (1) (1) (1)" [ref=e120] [cursor=pointer]:
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787559552440-1-1-1-1-1-1
            - paragraph [ref=e121]: Mô tả cho Tin tức bulk test
        - generic [ref=e123]:
          - paragraph [ref=e124]:
            - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787559552440 (1) (1) (1) (1)" [ref=e125] [cursor=pointer]:
              - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787559552440-1-1-1-1
              - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787559552440 (1) (1) (1) (1)" [ref=e126]
          - generic [ref=e127]:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787559552440 (1) (1) (1) (1)" [level=3] [ref=e128]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787559552440 (1) (1) (1) (1)" [ref=e129] [cursor=pointer]:
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787559552440-1-1-1-1
            - paragraph [ref=e130]: Mô tả cho Tin tức bulk test
        - generic [ref=e132]:
          - paragraph [ref=e133]:
            - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787559552440" [ref=e134] [cursor=pointer]:
              - /url: tin-tuc-loadtest-1787559552440
              - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787559552440" [ref=e135]
          - generic [ref=e136]:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787559552440" [level=3] [ref=e137]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787559552440" [ref=e138] [cursor=pointer]:
                - /url: tin-tuc-loadtest-1787559552440
            - paragraph [ref=e139]: Mô tả cho Tin tức bulk test
        - generic [ref=e140]:
          - generic:
            - paragraph:
              - link "Test News Title 1787559388748":
                - /url: test-news-title-1787559388748
                - img "Test News Title 1787559388748"
            - generic:
              - heading "Test News Title 1787559388748" [level=3]:
                - link "Test News Title 1787559388748":
                  - /url: test-news-title-1787559388748
              - paragraph: Đây là đoạn mô tả ngắn được tự động tạo lúc 1787559388748 nhằm kiểm thử độ hiển thị của giao diện thẻ bài viết trên hệ thống. Đoạn văn này đủ dài để kiểm tra xem layout card tin tức có bị lệch dòng hay cắt chữ (truncate) không đúng định dạng hay không.
        - generic [ref=e141]:
          - generic:
            - paragraph:
              - link "Cách chọn bàn ăn phong cách hiện đại":
                - /url: chon-ban-an-phong-cach-hien-dai
                - img "Cách chọn bàn ăn phong cách hiện đại"
            - generic:
              - heading "Cách chọn bàn ăn phong cách hiện đại" [level=3]:
                - link "Cách chọn bàn ăn phong cách hiện đại":
                  - /url: chon-ban-an-phong-cach-hien-dai
        - generic [ref=e142]:
          - generic:
            - paragraph:
              - link "Công nghệ tự lái hoạt động như thế nào trên xe hiện đại?":
                - /url: cong-nghe-tu-lai-hoat-dong-nhu-the-nao-tren-xe-hien-dai
                - img "Công nghệ tự lái hoạt động như thế nào trên xe hiện đại?"
            - generic:
              - heading "Công nghệ tự lái hoạt động như thế nào trên xe hiện đại?" [level=3]:
                - link "Công nghệ tự lái hoạt động như thế nào trên xe hiện đại?":
                  - /url: cong-nghe-tu-lai-hoat-dong-nhu-the-nao-tren-xe-hien-dai
        - generic [ref=e143]:
          - generic:
            - paragraph:
              - link "Vì sao xe điện đang trở thành xu hướng của ngành ô tô toàn cầu?":
                - /url: vi-sao-xe-dien-dang-tro-thanh-xu-huong-cua-nganh-o-to-toan-cau
                - img "Vì sao xe điện đang trở thành xu hướng của ngành ô tô toàn cầu?"
            - generic:
              - heading "Vì sao xe điện đang trở thành xu hướng của ngành ô tô toàn cầu?" [level=3]:
                - link "Vì sao xe điện đang trở thành xu hướng của ngành ô tô toàn cầu?":
                  - /url: vi-sao-xe-dien-dang-tro-thanh-xu-huong-cua-nganh-o-to-toan-cau
        - generic [ref=e144]:
          - generic:
            - paragraph:
              - 'link "Lionel Messi vs Cristiano Ronaldo: Ai mới thực sự là ông vua của các danh hiệu?"':
                - /url: lionel-messi-vs-cristiano-ronaldo-ai-moi-thuc-su-la-ong-vua-cua-cac-danh-hieu
                - 'img "Lionel Messi vs Cristiano Ronaldo: Ai mới thực sự là ông vua của các danh hiệu?"'
            - generic:
              - 'heading "Lionel Messi vs Cristiano Ronaldo: Ai mới thực sự là ông vua của các danh hiệu?" [level=3]':
                - 'link "Lionel Messi vs Cristiano Ronaldo: Ai mới thực sự là ông vua của các danh hiệu?"':
                  - /url: lionel-messi-vs-cristiano-ronaldo-ai-moi-thuc-su-la-ong-vua-cua-cac-danh-hieu
              - paragraph: Cuộc so kè danh hiệu giữa Messi và Ronaldo lại nóng lên khi CR7 vừa vô địch Saudi Pro League, chấm dứt cơn khát danh hiệu kéo dài 5 năm.
        - generic [ref=e145]:
          - generic:
            - paragraph:
              - link "Cúp C2 là gì? Tất tần tật về Europa League":
                - /url: cup-c2-la-gi-tat-tan-tat-ve-europa-league
                - img "Cúp C2 là gì? Tất tần tật về Europa League"
            - generic:
              - heading "Cúp C2 là gì? Tất tần tật về Europa League" [level=3]:
                - link "Cúp C2 là gì? Tất tần tật về Europa League":
                  - /url: cup-c2-la-gi-tat-tan-tat-ve-europa-league
              - paragraph: Bên cạnh ánh hào quang rực rỡ của UEFA Champions League (Cúp C1), bóng đá châu Âu còn sở hữu một giải đấu thường niên danh giá không kém phần kịch tính và hấp dẫn
        - generic [ref=e146]:
          - generic:
            - paragraph:
              - link "Tìm Hiểu Giải Cúp C1 Là Gì?":
                - /url: tim-hieu-giai-cup-c1-la-gi
                - img "Tìm Hiểu Giải Cúp C1 Là Gì?"
            - generic:
              - heading "Tìm Hiểu Giải Cúp C1 Là Gì?" [level=3]:
                - link "Tìm Hiểu Giải Cúp C1 Là Gì?":
                  - /url: tim-hieu-giai-cup-c1-la-gi
              - paragraph: Giải bóng đá cúp C1 là gì? Đây là 1 giải đấu bóng đá thuộc các CLB và có tính cạnh tranh chẳng thua kém WC đâu nhé. Lịch sử ghi nhận rất nhiều trận đấu kinh điển được ra đời từ chính giải đấu này đấy. Cùng tìm hiểu ngay nào!
        - generic [ref=e147]:
          - generic:
            - paragraph:
              - link "Cúp C3 tên chính thức hiện tại là UEFA":
                - /url: cup-c3-la-gi
                - img "Cúp C3 tên chính thức hiện tại là UEFA"
            - generic:
              - heading "Cúp C3 tên chính thức hiện tại là UEFA" [level=3]:
                - link "Cúp C3 tên chính thức hiện tại là UEFA":
                  - /url: cup-c3-la-gi
              - paragraph: Cúp C3 là giải đấu cấp câu lạc bộ thứ ba của châu Âu với tên chính thức hiện tại là UEFA Conference League. Nó dành cho các đội không đủ điều kiện dự Champions League hoặc Europa League.
        - generic [ref=e148]:
          - generic:
            - paragraph:
              - link "18_100754_ General 1946-7_Vol_2":
                - /url: 18100754-general-1946-7vol2
                - img "18_100754_ General 1946-7_Vol_2"
            - generic:
              - heading "18_100754_ General 1946-7_Vol_2" [level=3]:
                - link "18_100754_ General 1946-7_Vol_2":
                  - /url: 18100754-general-1946-7vol2
              - paragraph: This file contains memorandums and correspondence related to flying disc/saucer sightings and that those are a matter of concern for the Air Materiel Command.
    - generic [ref=e153]:
      - generic [ref=e155]:
        - paragraph [ref=e156]:
          - img "Xưởng & Showroom" [ref=e157]
        - generic [ref=e158]:
          - heading "Xưởng & Showroom" [level=3] [ref=e159]
          - paragraph [ref=e160]: Đặt lịch xe trực tiếp sản phẩm
      - generic [ref=e162]:
        - paragraph [ref=e163]:
          - img "Bảo hành khung 10 năm" [ref=e164]
        - generic [ref=e165]:
          - heading "Bảo hành khung 10 năm" [level=3] [ref=e166]
          - paragraph [ref=e167]: Khung gỗ sồi chắc chắn
      - generic [ref=e169]:
        - paragraph [ref=e170]:
          - img "Mút Coolsafe 4 năm" [ref=e171]
        - generic [ref=e172]:
          - heading "Mút Coolsafe 4 năm" [level=3] [ref=e173]
          - paragraph [ref=e174]: Chống cháy đạt tiêu chuẩn
      - generic [ref=e176]:
        - paragraph [ref=e177]:
          - img "Chứng chỉ EQ vật liệu" [ref=e178]
        - generic [ref=e179]:
          - heading "Chứng chỉ EQ vật liệu" [level=3] [ref=e180]
          - paragraph [ref=e181]: An toàn cho trẻ con & thai phụ
      - generic [ref=e183]:
        - paragraph [ref=e184]:
          - img "10,000+ khách hàng" [ref=e185]
        - generic [ref=e186]:
          - heading "10,000+ khách hàng" [level=3] [ref=e187]
          - paragraph [ref=e188]: Đánh giá tốt trên website
    - generic [ref=e189]:
      - generic [ref=e192]:
        - generic [ref=e193]:
          - link "CÔNG TY TNHH CFURNI" [ref=e194] [cursor=pointer]:
            - /url: https://code2.mimadigi.vn/2026/august/cfurni_111926w/
            - img "CÔNG TY TNHH CFURNI" [ref=e195]
          - paragraph [ref=e196]: CÔNG TY TNHH CFURNI
          - table [ref=e198]:
            - rowgroup [ref=e199]:
              - 'row "MST: 0313344129 - Sở kế hoạch và đầu tư TP.HCM cấp ngày 13/7/2015. Office: 198 Đường Số 10, Phường Thông Tây Hội, TP.HCM Showroom 1: 41 Đường A4, Phường Bảy Hiền, TP.HCM Showroom 2: 66A đường A4 (khu K300), Phường Bảy Hiền, TP.HCM Xưởng 1: 25/5A đường số 610, xã Phú Hòa Đông, TP.HCM Xưởng 2: C7C Phạm Hùng, xã Bình Hưng, TP.HCM Email: Cfurni168@gmail.com Web: www.cfurni.vn Facebook: Nội Thất Cfurni Phone: 0932 67 82 67 - 0902 34 93 94" [ref=e200]':
                - 'cell "MST: 0313344129 - Sở kế hoạch và đầu tư TP.HCM cấp ngày 13/7/2015. Office: 198 Đường Số 10, Phường Thông Tây Hội, TP.HCM Showroom 1: 41 Đường A4, Phường Bảy Hiền, TP.HCM Showroom 2: 66A đường A4 (khu K300), Phường Bảy Hiền, TP.HCM Xưởng 1: 25/5A đường số 610, xã Phú Hòa Đông, TP.HCM Xưởng 2: C7C Phạm Hùng, xã Bình Hưng, TP.HCM Email: Cfurni168@gmail.com Web: www.cfurni.vn Facebook: Nội Thất Cfurni Phone: 0932 67 82 67 - 0902 34 93 94" [ref=e201]':
                  - paragraph [ref=e202]:
                    - text: "MST: 0313344129 - Sở kế hoạch và đầu tư TP.HCM cấp ngày 13/7/2015."
                    - text: "Office: 198 Đường Số 10, Phường Thông Tây Hội, TP.HCM"
                  - paragraph [ref=e203]: "Showroom 1: 41 Đường A4, Phường Bảy Hiền, TP.HCM"
                  - paragraph [ref=e204]: "Showroom 2: 66A đường A4 (khu K300), Phường Bảy Hiền, TP.HCM"
                  - paragraph [ref=e205]: "Xưởng 1: 25/5A đường số 610, xã Phú Hòa Đông, TP.HCM"
                  - paragraph [ref=e206]: "Xưởng 2: C7C Phạm Hùng, xã Bình Hưng, TP.HCM"
                  - paragraph [ref=e207]:
                    - text: "Email: Cfurni168@gmail.com"
                    - text: "Web: www.cfurni.vn"
                  - paragraph [ref=e208]:
                    - 'link "Facebook: Nội Thất Cfurni" [ref=e209] [cursor=pointer]':
                      - /url: https://www.facebook.com/noithatcfurni/
                  - paragraph [ref=e210]: "Phone: 0932 67 82 67 - 0902 34 93 94"
          - paragraph [ref=e211]: Theo dõi chúng tôi tại
          - generic [ref=e212]:
            - link "Facebook" [ref=e213] [cursor=pointer]:
              - /url: https://www.facebook.com/noithatcfurni
              - img "Facebook" [ref=e214]
            - link "Messenger" [ref=e215] [cursor=pointer]:
              - /url: ""
              - img "Messenger" [ref=e216]
            - link "Instargam" [ref=e217] [cursor=pointer]:
              - /url: https://www.instagram.com/cfurni.vn?igsh=cnNhNG43aGhhbzJs
              - img "Instargam" [ref=e218]
            - link "TikTok" [ref=e219] [cursor=pointer]:
              - /url: https://www.tiktok.com/@noithatcfurni?_r=1&_t=ZS-98xhhbBhQua
              - img "TikTok" [ref=e220]
            - link "Youtube" [ref=e221] [cursor=pointer]:
              - /url: https://youtube.com/@noithatcfurni?si=HxSvpE0k9CoN2tWr
              - img "Youtube" [ref=e222]
        - img "CÔNG TY TNHH CFURNI" [ref=e225]
      - generic [ref=e228]:
        - generic [ref=e229]:
          - paragraph [ref=e230]: Truy cập nhanh
          - list [ref=e231]:
            - listitem [ref=e232]:
              - link "Giới thiệu" [ref=e233] [cursor=pointer]:
                - /url: gioi-thieu
            - listitem [ref=e234]:
              - link "Sản phẩm" [ref=e235] [cursor=pointer]:
                - /url: san-pham
            - listitem [ref=e236]:
              - link "Dự án" [ref=e237] [cursor=pointer]:
                - /url: du-an
            - listitem [ref=e238]:
              - link "Tuyển dụng" [ref=e239] [cursor=pointer]:
                - /url: tuyen-dung
            - listitem [ref=e240]:
              - link "Liên hệ" [ref=e241] [cursor=pointer]:
                - /url: lien-he
        - generic [ref=e242]:
          - paragraph [ref=e243]: Giải pháp
          - list [ref=e244]:
            - listitem [ref=e245]:
              - link "Phòng khách" [ref=e246] [cursor=pointer]:
                - /url: phong-khach
            - listitem [ref=e247]:
              - link "Phòng ăn" [ref=e248] [cursor=pointer]:
                - /url: phong-an
            - listitem [ref=e249]:
              - link "Phòng ngủ" [ref=e250] [cursor=pointer]:
                - /url: phong-ngu
            - listitem [ref=e251]:
              - link "Phòng làm việc" [ref=e252] [cursor=pointer]:
                - /url: phong-lam-viec
        - generic [ref=e253]:
          - paragraph [ref=e254]: Chính sách hỗ trợ
          - list [ref=e255]:
            - listitem [ref=e256]:
              - link "Chính sách đổi trả" [ref=e257] [cursor=pointer]:
                - /url: chinh-sach-doi-tra
            - listitem [ref=e258]:
              - link "Chính sách bảo hành" [ref=e259] [cursor=pointer]:
                - /url: chinh-sach-bao-hanh
            - listitem [ref=e260]:
              - link "Chính sách giao hàng" [ref=e261] [cursor=pointer]:
                - /url: chinh-sach-giao-hang
            - listitem [ref=e262]:
              - link "Chính sách thanh toán" [ref=e263] [cursor=pointer]:
                - /url: chinh-sach-thanh-toan
            - listitem [ref=e264]:
              - link "Chính sách xử lý khiếu nại" [ref=e265] [cursor=pointer]:
                - /url: chinh-sach-xu-ly-khieu-nai
            - listitem [ref=e266]:
              - link "Bảo mật thông tin khách hàng" [ref=e267] [cursor=pointer]:
                - /url: bao-mat-thong-tin-khach-hang
        - generic [ref=e268]:
          - paragraph [ref=e269]: Hotline
          - paragraph [ref=e271]:
            - text: Tư vấn bán hàng
            - text: 0932 67 82 67
            - text: Chăm sóc khách hàng
            - text: 0902 34 93 94
          - link "http://online.gov.vn/nen-tang/4b688d70-4fe8-4619-a929-3c859c5d4206" [ref=e272] [cursor=pointer]:
            - /url: ""
            - img "http://online.gov.vn/nen-tang/4b688d70-4fe8-4619-a929-3c859c5d4206" [ref=e273]
      - generic [ref=e276]:
        - generic [ref=e277]: Copyright ©2026 Công Ty TNHH CFURNI. Thiết kế Web MIMA
        - generic [ref=e278]:
          - generic [ref=e279]:
            - text: "Đang online:"
            - generic [ref=e280]: "1875"
          - generic [ref=e281]: "|"
          - generic [ref=e282]:
            - text: "Hôm nay:"
            - generic [ref=e283]: "30"
          - generic [ref=e284]: "|"
          - generic [ref=e285]:
            - text: "Tổng truy cập:"
            - generic [ref=e286]: "450"
    - generic [ref=e287]:
      - link "Map" [ref=e288] [cursor=pointer]:
        - /url: https://maps.app.goo.gl/JD2W7Ho6mb8Hrmsw6
        - img [ref=e292]
      - 'link "Call me: 0932 67 82 67" [ref=e295] [cursor=pointer]':
        - /url: tel:0932678267
        - img [ref=e299]
        - generic [ref=e302]: "Call me: 0932 67 82 67"
      - 'link "Zalo: 0932 67 82 67" [ref=e303] [cursor=pointer]':
        - /url: https://zalo.me/0932678267
        - img [ref=e307]
        - generic [ref=e308]: "Zalo: 0932 67 82 67"
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
              - generic: "75"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 75/100
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
          - generic: "24"
          - generic: Tổng tiêu chí
        - generic:
          - generic: ✅ 18
          - generic: Đạt
        - generic:
          - generic: ❌ 6
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: Tin tức
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e309]:
      - generic [ref=e310]: "❌ Chi tiết lỗi cần khắc phục (6/24):"
      - generic [ref=e311]:
        - generic [ref=e312]:
          - generic [ref=e313]: 6. Liên kết (Links)
          - generic [ref=e314]: 1 lỗi
        - generic [ref=e315]:
          - strong [ref=e317]: "Không có broken links (lỗi: 5/96)"
          - generic [ref=e318]: "⚠️ Broken links: he-thong-cua-hang (status: 404), phong-khach (status: 404), phong-ngu (status: 404), phong-an (status: 404), phong-lam-viec (status: 404)"
      - generic [ref=e319]:
        - generic [ref=e320]:
          - generic [ref=e321]: 8. Tốc độ & Core Web Vitals
          - generic [ref=e322]: 5 lỗi
        - generic [ref=e323]:
          - strong [ref=e325]: "[📱 MOBILE (ƯU TIÊN)] Tổng điểm Performance: 55/100 (≥ 60)"
          - generic [ref=e326]: ⚠️ [📱 MOBILE (ƯU TIÊN)] Điểm Performance 55/100 dưới ngưỡng 60. Phân tích chi tiết LCP/CLS/INP bên dưới...
        - generic [ref=e327]:
          - strong [ref=e329]: "[📱 MOBILE (ƯU TIÊN)] LCP (Largest Contentful Paint): 14123ms (< 2500ms)"
          - generic [ref=e330]:
            - text: "⚠️ [📱 MOBILE (ƯU TIÊN)] LCP quá cao: 14123ms (chuẩn: < 2.5s) → Thủ phạm LCP:"
            - strong [ref=e332]: "[💻 Desktop] Tổng điểm Performance: 50/100 (≥ 60)"
            - generic [ref=e333]: ⚠️ [💻 Desktop] Điểm Performance 50/100 dưới ngưỡng 60. Phân tích chi tiết LCP/CLS/INP bên dưới...
          - generic [ref=e334]:
            - strong [ref=e336]: "[💻 Desktop] LCP (Largest Contentful Paint): 2706ms (< 2500ms)"
            - generic [ref=e337]:
              - text: "⚠️ [💻 Desktop] LCP quá cao: 2706ms (chuẩn: < 2.5s) → Thủ phạm LCP:"
              - strong [ref=e339]: "[💻 Desktop] CLS (Cumulative Layout Shift): 0.512 (< 0.1)"
              - generic [ref=e340]:
                - text: "⚠️ [💻 Desktop] CLS quá cao: 0.512 (chuẩn: < 0.1) → Thủ phạm CLS: -"
                - generic [ref=e341]:
                  - text: "-"
                  - generic [ref=e342]: "[Vấn đề]: Các..."
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 75/100 dưới ngưỡng 96%. Có 6/24 tiêu chí không đạt.
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