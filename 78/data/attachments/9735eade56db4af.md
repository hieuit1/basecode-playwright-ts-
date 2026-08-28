# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Test News Title 1787196680043 (/test-news-title-1787196680043)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 87/100 dưới ngưỡng 96%. Có 2/15 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e6]:
      - link "CÔNG TY TNHH CUNG ỨNG NỘI THẤT HÂN DI" [ref=e8] [cursor=pointer]:
        - /url: https://code3.mimadigi.vn/2026/august/happylearning/
        - img "CÔNG TY TNHH CUNG ỨNG NỘI THẤT HÂN DI" [ref=e9]
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "Trang chủ" [ref=e13] [cursor=pointer]:
            - /url: ""
        - listitem [ref=e14]:
          - link "Về happy learning việt" [ref=e15] [cursor=pointer]:
            - /url: gioi-thieu
        - listitem [ref=e16]:
          - link "Khóa học" [ref=e17] [cursor=pointer]:
            - /url: khoa-hoc
        - listitem [ref=e18]:
          - link "Tin tức" [ref=e19] [cursor=pointer]:
            - /url: tin-tuc
        - listitem [ref=e20]:
          - link "Liên hệ tư vấn" [ref=e21] [cursor=pointer]:
            - /url: lien-he
        - listitem [ref=e22]:
          - generic:
            - generic:
              - img "HAPPYLEARNING VIỆT" [ref=e24]
              - link "HOTLINE 0934.004.552" [ref=e26] [cursor=pointer]:
                - /url: tel:0934.004.552
                - paragraph [ref=e27]: HOTLINE
                - paragraph [ref=e28]: 0934.004.552
    - list [ref=e31]:
      - listitem [ref=e32]:
        - link "Trang chủ" [ref=e33] [cursor=pointer]:
          - /url: https://code3.mimadigi.vn/2026/august/happylearning/
          - img [ref=e34]
          - generic [ref=e36]: Trang chủ
      - listitem [ref=e37]:
        - text: /
        - link "Tin tức" [ref=e38] [cursor=pointer]:
          - /url: https://code3.mimadigi.vn/2026/august/happylearning/tin-tuc
      - listitem [ref=e39]:
        - text: /
        - link "Test News Title 1787196680043" [ref=e40] [cursor=pointer]:
          - /url: https://code3.mimadigi.vn/2026/august/happylearning/test-news-title-1787196680043
    - generic [ref=e43]:
      - generic [ref=e44]:
        - generic [ref=e46]: Test News Title 1787196680043
        - generic [ref=e48]:
          - generic [ref=e49]:
            - paragraph [ref=e50]: Đây là nội dung chi tiết của bài viết được tự động tạo bởi Playwright automation script vào lúc 1787196680043.
            - paragraph [ref=e51]
            - paragraph [ref=e52]: "Phần 1: Tổng quan về hệ thống và công nghệ"
            - paragraph [ref=e53]: Hệ thống đang tích hợp các giải pháp công nghệ hiện đại nhằm nâng cao trải nghiệm người dùng. Việc kiểm thử với một đoạn văn bản dài giúp đảm bảo trình soạn thảo Rich Text Editor (TinyMCE/CKEditor) hoạt động ổn định, không bị lỗi font chữ hay rớt dòng ngẫu nhiên.
            - paragraph [ref=e54]
            - paragraph [ref=e55]: "Phần 2: Thông số kỹ thuật và ứng dụng thực tế"
            - paragraph [ref=e56]: "- Kiểm tra khả năng hiển thị các ký tự đặc biệt, dấu câu tiếng Việt đầy đủ."
            - paragraph [ref=e57]: "- Kiểm tra tính ổn định của cơ sở dữ liệu khi lưu trữ các bài viết có dung lượng text lớn."
            - paragraph [ref=e58]: "- Đảm bảo khi hiển thị ra ngoài trang Client (/tin-tuc), toàn bộ nội dung này được render chính xác 100% so với những gì admin đã nhập."
          - generic [ref=e59]:
            - generic [ref=e60]: Chia sẻ
            - generic [ref=e63]:
              - link "Facebook" [ref=e64] [cursor=pointer]:
                - /url: https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcode3.mimadigi.vn%2F2026%2Faugust%2Fhappylearning%2Ftest-news-title-1787196680043
                - img
              - link "Zalo" [ref=e65] [cursor=pointer]:
                - /url: https://sp.zalo.me/plugins/share?href=https%3A%2F%2Fcode3.mimadigi.vn%2F2026%2Faugust%2Fhappylearning%2Ftest-news-title-1787196680043&oaid=0934.004.552&layout=3&color=blue&customize=false
                - img:
                  - generic: Zalo
              - link "X (Twitter)" [ref=e66] [cursor=pointer]:
                - /url: https://twitter.com/intent/tweet?url=https%3A%2F%2Fcode3.mimadigi.vn%2F2026%2Faugust%2Fhappylearning%2Ftest-news-title-1787196680043&text=Test%20News%20Title%201787196680043
                - img
              - link "Telegram" [ref=e67] [cursor=pointer]:
                - /url: https://t.me/share/url?url=https%3A%2F%2Fcode3.mimadigi.vn%2F2026%2Faugust%2Fhappylearning%2Ftest-news-title-1787196680043&text=Test%20News%20Title%201787196680043
                - img
              - button "Sao chép liên kết" [ref=e68] [cursor=pointer]:
                - img
              - link "Email" [ref=e69] [cursor=pointer]:
                - /url: mailto:?subject=Test%20News%20Title%201787196680043&body=Test%20News%20Title%201787196680043%20https%3A%2F%2Fcode3.mimadigi.vn%2F2026%2Faugust%2Fhappylearning%2Ftest-news-title-1787196680043
                - img
              - button "Xem thêm" [ref=e70] [cursor=pointer]:
                - img
      - generic [ref=e72]:
        - paragraph [ref=e75]: BÀI VIẾT MỚI
        - generic [ref=e76]:
          - generic [ref=e78]:
            - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723 (1) (1) (1) (1) (1) (1)" [ref=e80] [cursor=pointer]:
              - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787901404723-1-1-1-1-1-1
              - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723 (1) (1) (1) (1) (1) (1)" [ref=e81]
            - generic [ref=e82]:
              - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723 (1) (1) (1) (1) (1) (1)" [level=3] [ref=e83]:
                - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723 (1) (1) (1) (1) (1) (1)" [ref=e84] [cursor=pointer]:
                  - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787901404723-1-1-1-1-1-1
              - generic [ref=e85]: Fri 28, 2026
          - generic [ref=e87]:
            - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723 (1) (1) (1) (1) (1)" [ref=e89] [cursor=pointer]:
              - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787901404723-1-1-1-1-1
              - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723 (1) (1) (1) (1) (1)" [ref=e90]
            - generic [ref=e91]:
              - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723 (1) (1) (1) (1) (1)" [level=3] [ref=e92]:
                - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723 (1) (1) (1) (1) (1)" [ref=e93] [cursor=pointer]:
                  - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787901404723-1-1-1-1-1
              - generic [ref=e94]: Fri 28, 2026
          - generic [ref=e96]:
            - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723 (1) (1) (1) (1)" [ref=e98] [cursor=pointer]:
              - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787901404723-1-1-1-1
              - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723 (1) (1) (1) (1)" [ref=e99]
            - generic [ref=e100]:
              - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723 (1) (1) (1) (1)" [level=3] [ref=e101]:
                - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723 (1) (1) (1) (1)" [ref=e102] [cursor=pointer]:
                  - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787901404723-1-1-1-1
              - generic [ref=e103]: Fri 28, 2026
          - generic [ref=e105]:
            - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723 (1) (1) (1)" [ref=e107] [cursor=pointer]:
              - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787901404723-1-1-1
              - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723 (1) (1) (1)" [ref=e108]
            - generic [ref=e109]:
              - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723 (1) (1) (1)" [level=3] [ref=e110]:
                - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723 (1) (1) (1)" [ref=e111] [cursor=pointer]:
                  - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787901404723-1-1-1
              - generic [ref=e112]: Fri 28, 2026
          - generic [ref=e114]:
            - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723 (1) (1)" [ref=e116] [cursor=pointer]:
              - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787901404723-1-1
              - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723 (1) (1)" [ref=e117]
            - generic [ref=e118]:
              - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723 (1) (1)" [level=3] [ref=e119]:
                - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723 (1) (1)" [ref=e120] [cursor=pointer]:
                  - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787901404723-1-1
              - generic [ref=e121]: Fri 28, 2026
          - generic [ref=e123]:
            - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723 (1)" [ref=e125] [cursor=pointer]:
              - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787901404723-1
              - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723 (1)" [ref=e126]
            - generic [ref=e127]:
              - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723 (1)" [level=3] [ref=e128]:
                - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723 (1)" [ref=e129] [cursor=pointer]:
                  - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787901404723-1
              - generic [ref=e130]: Fri 28, 2026
          - generic [ref=e132]:
            - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723" [ref=e134] [cursor=pointer]:
              - /url: tin-tuc-loadtest-1787901404723
              - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723" [ref=e135]
            - generic [ref=e136]:
              - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723" [level=3] [ref=e137]:
                - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723" [ref=e138] [cursor=pointer]:
                  - /url: tin-tuc-loadtest-1787901404723
              - generic [ref=e139]: Fri 28, 2026
          - generic [ref=e141]:
            - link "Test News Title 1787901301745" [ref=e143] [cursor=pointer]:
              - /url: test-news-title-1787901301745
              - img "Test News Title 1787901301745" [ref=e144]
            - generic [ref=e145]:
              - heading "Test News Title 1787901301745" [level=3] [ref=e146]:
                - link "Test News Title 1787901301745" [ref=e147] [cursor=pointer]:
                  - /url: test-news-title-1787901301745
              - generic [ref=e148]: Fri 28, 2026
          - generic [ref=e150]:
            - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787196781246 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e152] [cursor=pointer]:
              - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787196781246-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
              - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787196781246 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e153]
            - generic [ref=e154]:
              - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787196781246 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e155]:
                - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787196781246 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e156] [cursor=pointer]:
                  - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787196781246-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
              - generic [ref=e157]: Thu 20, 2026
          - generic [ref=e159]:
            - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787196781246 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e161] [cursor=pointer]:
              - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787196781246-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
              - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787196781246 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e162]
            - generic [ref=e163]:
              - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787196781246 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e164]:
                - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787196781246 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e165] [cursor=pointer]:
                  - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787196781246-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
              - generic [ref=e166]: Thu 20, 2026
    - generic [ref=e167]:
      - 'link "Call me: 0934.004.552" [ref=e168] [cursor=pointer]':
        - /url: tel:0934004552
        - img [ref=e172]
        - generic [ref=e175]: "Call me: 0934.004.552"
      - 'link "Zalo: 0934.004.552" [ref=e176] [cursor=pointer]':
        - /url: https://zalo.me/0934004552
        - img [ref=e180]
        - generic [ref=e182]: "Zalo: 0934.004.552"
  - contentinfo [ref=e183]:
    - generic [ref=e186]:
      - generic [ref=e190]:
        - tablist [ref=e192]:
          - tab "VỀ HAPPY LEARNING VIỆT" [selected] [ref=e193] [cursor=pointer]:
            - generic [ref=e194]: VỀ HAPPY LEARNING VIỆT
          - tab "KHÓA HỌC" [ref=e195] [cursor=pointer]:
            - generic [ref=e196]: KHÓA HỌC
        - tabpanel "VỀ HAPPY LEARNING VIỆT" [ref=e199]:
          - list [ref=e201]:
            - listitem [ref=e202]:
              - link "KHÓA HỌC" [ref=e203] [cursor=pointer]:
                - /url: khoa-hoc
            - listitem [ref=e204]:
              - link "test" [ref=e205] [cursor=pointer]:
                - /url: test
            - listitem [ref=e206]:
              - link "CỜ VUA - GLOBAL CHESS" [ref=e207] [cursor=pointer]:
                - /url: co-vua-global-chess
            - listitem [ref=e208]:
              - link "CÔNG NGHỆ - HAPPY AI & ROBOTIC" [ref=e209] [cursor=pointer]:
                - /url: cong-nghe-happy-ai-robotic
            - listitem [ref=e210]:
              - link "HỘI HOẠ - GLOBAL ART" [ref=e211] [cursor=pointer]:
                - /url: hoi-hoa-global-art
            - listitem [ref=e212]:
              - link "ÂM NHẠC VÀ VẬN ĐỘNG - HAPPY MUSIC & DANCE" [ref=e213] [cursor=pointer]:
                - /url: am-nhac-va-van-dong-happy-music-dance
            - listitem [ref=e214]:
              - link "LUYỆN THI CÁC MÔN" [ref=e215] [cursor=pointer]:
                - /url: luyen-thi-cac-mon
          - generic [ref=e216]:
            - paragraph [ref=e217]: "HAPPY LEARNING VIET là hệ sinh thái giáo dục gồm hai thế mạnh đào tạo chính là NGOẠI NGỮ và PHÁT TRIỂN TƯ DUY SÁNG TẠO cho trẻ em, người lớn qua các môn:"
            - paragraph [ref=e218]: "- Tiếng Anh - Tiếng Hoa"
            - paragraph [ref=e219]: "- Hội Hoạ và Mỹ Thuật."
            - paragraph [ref=e220]: "- Âm nhạc và vận động."
            - paragraph [ref=e221]: "- Cờ vua, AI & Robotic."
            - paragraph [ref=e222]: "- Các chương trình Workshop, hoạt động ngoại khoá..."
            - paragraph [ref=e223]: Với cơ sở vật chất tiện nghi, hiện đại, đội ngũ nhiều chuyên gia, giáo viên có trình độ chuyên môn cao, phương pháp giảng dạy độc quyền HAPPY TEACHING (HT) sẽ giúp người học lĩnh hội kiến thức hiệu quả và vui vẻ với các trải nghiệm học tập suốt đời.
      - generic [ref=e224]:
        - paragraph [ref=e226]: THEO DÕI HAPPY LEARNING VIỆT TẠI
        - generic [ref=e227]:
          - link "HAPPYLEARNING VIỆT" [ref=e228] [cursor=pointer]:
            - /url: https://zalo.me/0986363885
            - img "HAPPYLEARNING VIỆT" [ref=e229]
          - link "HAPPYLEARNING VIỆT" [ref=e230] [cursor=pointer]:
            - /url: ""
            - img "HAPPYLEARNING VIỆT" [ref=e231]
          - link "HAPPYLEARNING VIỆT" [ref=e232] [cursor=pointer]:
            - /url: https://www.facebook.com/happyenglish.every
            - img "HAPPYLEARNING VIỆT" [ref=e233]
          - link "HAPPYLEARNING VIỆT" [ref=e234] [cursor=pointer]:
            - /url: ""
            - img "HAPPYLEARNING VIỆT" [ref=e235]
          - link "HAPPYLEARNING VIỆT" [ref=e236] [cursor=pointer]:
            - /url: ""
            - img "HAPPYLEARNING VIỆT" [ref=e237]
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
              - generic: "87"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 87/100
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
          - generic: "15"
          - generic: Tổng tiêu chí
        - generic:
          - generic: ✅ 13
          - generic: Đạt
        - generic:
          - generic: ❌ 2
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: Test News Title 1787196680043
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e238]:
      - generic [ref=e239]: "❌ Chi tiết lỗi cần khắc phục (2/15):"
      - generic [ref=e240]:
        - generic [ref=e241]:
          - generic [ref=e242]: 3. Heading (H1-H6)
          - generic [ref=e243]: 1 lỗi
        - generic [ref=e244]:
          - strong [ref=e246]: Heading phân cấp hợp lệ (1 lỗi)
          - generic [ref=e247]: "⚠️ Heading phân cấp sai: Nhảy cấp từ H1 → H3 (\"[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787901404723 (1) (1) (1) (1) (1) (1)\")"
      - generic [ref=e248]:
        - generic [ref=e249]:
          - generic [ref=e250]: 6. Liên kết (Links)
          - generic [ref=e251]: 1 lỗi
        - generic [ref=e252]:
          - strong [ref=e254]: "Không có broken links (lỗi: 3/33)"
          - generic [ref=e255]: "⚠️ Broken links: fb-messenger://share?link=https%3A%2F%2Fcode3.mimadigi.vn%2F2026%2Faugust%2Fhappylearning%2Ftest-news-title-1787196680043 (status: 0), sms:?body=Test%20News%20Title%201787196680043%20htt..."
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 87/100 dưới ngưỡng 96%. Có 2/15 tiêu chí không đạt.
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