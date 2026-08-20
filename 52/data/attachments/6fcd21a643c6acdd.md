# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Robotics Cho Bé 4+: Biến Trí Tưởng Tượng Thành Những Cỗ Máy Thông Minh (/robotics-cho-be-4-bien-tri-tuong-tuong-thanh-nhung-co-may-thong-minh-2)
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
        - link "Khóa học" [ref=e38] [cursor=pointer]:
          - /url: https://code3.mimadigi.vn/2026/august/happylearning/khoa-hoc
      - listitem [ref=e39]:
        - text: /
        - link "KHÓA HỌC" [ref=e40] [cursor=pointer]:
          - /url: https://code3.mimadigi.vn/2026/august/happylearning/khoa-hoc
      - listitem [ref=e41]:
        - text: /
        - 'link "Robotics Cho Bé 4+: Biến Trí Tưởng Tượng Thành Những Cỗ Máy Thông Minh" [ref=e42] [cursor=pointer]':
          - /url: https://code3.mimadigi.vn/2026/august/happylearning/robotics-cho-be-4-bien-tri-tuong-tuong-thanh-nhung-co-may-thong-minh-2
    - generic [ref=e45]:
      - generic [ref=e46]:
        - generic [ref=e48]: "Robotics Cho Bé 4+: Biến Trí Tưởng Tượng Thành Những Cỗ Máy Thông Minh"
        - generic [ref=e51]:
          - paragraph [ref=e52]: Trong thời đại số, hiểu về công nghệ là một lợi thế sinh tồn. Khóa học Robotics tại Happy Learning Việt được thiết kế dành riêng cho các "kỹ sư nhí" bắt đầu hành trình khám phá thế giới STEM (Khoa học - Công nghệ - Kỹ thuật - Toán học).
          - paragraph [ref=e53]
          - paragraph [ref=e54]: Trong thời đại số, hiểu về công nghệ là một lợi thế sinh tồn. Khóa học Robotics tại Happy Learning Việt được thiết kế dành riêng cho các "kỹ sư nhí" bắt đầu hành trình khám phá thế giới STEM (Khoa học - Công nghệ - Kỹ thuật - Toán học).
          - list [ref=e55]:
            - listitem [ref=e56]:
              - strong [ref=e58]: Trẻ học được gì qua từng buổi học?
            - list [ref=e59]:
              - listitem [ref=e60]:
                - generic [ref=e61]:
                  - strong [ref=e62]: "Kỹ năng vận động tinh:"
                  - text: Việc lắp ráp những mảnh ghép nhỏ xíu giúp đôi tay bé trở nên khéo léo và linh hoạt.
              - listitem [ref=e63]:
                - generic [ref=e64]:
                  - strong [ref=e65]: "Tư duy lập trình cơ bản:"
                  - text: Thông qua các câu lệnh dạng kéo thả đơn giản, bé hiểu được logic "Nếu - Thì", nền tảng của mọi ngôn ngữ lập trình.
              - listitem [ref=e66]:
                - generic [ref=e67]:
                  - strong [ref=e68]: "Giải quyết vấn đề:"
                  - text: Khi robot không chạy, bé sẽ phải tự tìm hiểu lý do và sửa chữa, hình thành thói quen chủ động trong cuộc sống.
            - listitem [ref=e69]:
              - generic [ref=e70]:
                - strong [ref=e71]: "Môi trường học tập:"
                - text: Bé được tiếp cận với các bộ kit hiện đại nhất, giáo trình chuẩn quốc tế phù hợp với tư duy của trẻ mầm non.
            - listitem [ref=e72]:
              - generic [ref=e73]:
                - strong [ref=e74]: "Kêu gọi hành động:"
                - text: Ba mẹ muốn con bớt xem iPad và bắt đầu tạo ra những điều kỳ diệu? Hãy đưa con đến với lớp Robotics để thấy đôi mắt con sáng rực khi "đứa con tinh thần" của mình lần đầu chuyển động!
          - generic [ref=e75]: "----------------------------"
          - generic [ref=e77]:
            - img "⭐" [ref=e79]
            - text: 𝐇𝐀𝐏𝐏𝐘 𝐋𝐄𝐀𝐑𝐍𝐈𝐍𝐆 𝐕𝐈𝐄̣̂𝐓 - 𝐍𝐎̛𝐈 Đ𝐀̀𝐎 𝐓𝐀̣𝐎 𝐕𝐀̀ 𝐏𝐇𝐀́𝐓 𝐓𝐑𝐈𝐄̂̉𝐍 𝐍𝐀̆𝐍𝐆 𝐊𝐇𝐈𝐄̂́𝐔 𝐕𝐈𝐄̣̂𝐓
            - img "⭐" [ref=e81]
          - generic [ref=e83]:
            - img "☎" [ref=e85]
            - text: "Hotline: 0963 091 208 - 093 701 78 85 - 0789 059 440 - 0986 363 885"
          - generic [ref=e87]:
            - img "📌" [ref=e89]
            - text: "Hệ thống các cơ sở:"
          - generic [ref=e91]:
            - img "📍" [ref=e93]
            - text: "Trụ sở chính: 811 Hậu Giang, Phường 11 Quận 6, TP.HCM"
          - generic [ref=e95]:
            - img "📍" [ref=e97]
            - text: "Các cơ sở: Quận 6 | Bình Tân | Tân Phú"
          - generic [ref=e99]:
            - img "👍" [ref=e101]
            - text: "Fanpage:"
            - link "https://www.facebook.com/happyenglish.every" [ref=e103] [cursor=pointer]:
              - /url: https://www.facebook.com/happyenglish.every?__cft__[0]=AZUf3SiDRmartNCw52oPOGktfsXnTkFBrd61tdbZ_YkfIyn54D7CrsV5KRZmPzDDoDOJjXf61gBOkrqqopvtr2rUvOAnzuU9uuqC569-2Qt20BLQNdPPSfDInuRC5GcfwNBOxGvB4MDu8XtnPDQezX_YMXrc6TqM6AuRxN20kGC3p4RZepg2d5RMPmE7Z-0zpUo&__tn__=-]K-R
              - generic [ref=e104]: https://www.facebook.com/happyenglish.every
      - generic [ref=e106]:
        - paragraph [ref=e109]: BÀI VIẾT MỚI
        - generic [ref=e110]:
          - generic [ref=e112]:
            - link "NÂNG TẦM SỰ NGHIỆP VỚI KHÓA HỌC TIẾNG ANH - TRUNG ONLINE DÀNH CHO SINH VIÊN VÀ NGƯỜI BẬN RỘN" [ref=e114] [cursor=pointer]:
              - /url: nang-tam-su-nghiep-voi-khoa-hoc-tieng-anh-trung-online-danh-cho-sinh-vien-va-nguoi-ban-ron-2
              - img "NÂNG TẦM SỰ NGHIỆP VỚI KHÓA HỌC TIẾNG ANH - TRUNG ONLINE DÀNH CHO SINH VIÊN VÀ NGƯỜI BẬN RỘN" [ref=e115]
            - generic [ref=e116]:
              - heading "NÂNG TẦM SỰ NGHIỆP VỚI KHÓA HỌC TIẾNG ANH - TRUNG ONLINE DÀNH CHO SINH VIÊN VÀ NGƯỜI BẬN RỘN" [level=3] [ref=e117]:
                - link "NÂNG TẦM SỰ NGHIỆP VỚI KHÓA HỌC TIẾNG ANH - TRUNG ONLINE DÀNH CHO SINH VIÊN VÀ NGƯỜI BẬN RỘN" [ref=e118] [cursor=pointer]:
                  - /url: nang-tam-su-nghiep-voi-khoa-hoc-tieng-anh-trung-online-danh-cho-sinh-vien-va-nguoi-ban-ron-2
              - generic [ref=e119]: Thu 23, 2026
          - generic [ref=e121]:
            - link "RỘN RÀNG TUYỂN SINH CÁC LỚP TIẾNG ANH - TIẾNG TRUNG TẠI QUẬN 6 & BÌNH TÂN | HAPPY LEARNING VIỆT" [ref=e123] [cursor=pointer]:
              - /url: ron-rang-tuyen-sinh-cac-lop-tieng-anh-tieng-trung-tai-quan-6-binh-tan-happy-learning-viet-2
              - img "RỘN RÀNG TUYỂN SINH CÁC LỚP TIẾNG ANH - TIẾNG TRUNG TẠI QUẬN 6 & BÌNH TÂN | HAPPY LEARNING VIỆT" [ref=e124]
            - generic [ref=e125]:
              - heading "RỘN RÀNG TUYỂN SINH CÁC LỚP TIẾNG ANH - TIẾNG TRUNG TẠI QUẬN 6 & BÌNH TÂN | HAPPY LEARNING VIỆT" [level=3] [ref=e126]:
                - link "RỘN RÀNG TUYỂN SINH CÁC LỚP TIẾNG ANH - TIẾNG TRUNG TẠI QUẬN 6 & BÌNH TÂN | HAPPY LEARNING VIỆT" [ref=e127] [cursor=pointer]:
                  - /url: ron-rang-tuyen-sinh-cac-lop-tieng-anh-tieng-trung-tai-quan-6-binh-tan-happy-learning-viet-2
              - generic [ref=e128]: Sun 19, 2026
          - generic [ref=e130]:
            - link "CHINH PHỤC TIẾNG TRUNG – MỞ RỘNG CƠ HỘI NGHỀ NGHIỆP CÙNG HAPPY LEARNING VIỆT" [ref=e132] [cursor=pointer]:
              - /url: chinh-phuc-tieng-trung-mo-rong-co-hoi-nghe-nghiep-cung-happy-learning-viet-2
              - img "CHINH PHỤC TIẾNG TRUNG – MỞ RỘNG CƠ HỘI NGHỀ NGHIỆP CÙNG HAPPY LEARNING VIỆT" [ref=e133]
            - generic [ref=e134]:
              - heading "CHINH PHỤC TIẾNG TRUNG – MỞ RỘNG CƠ HỘI NGHỀ NGHIỆP CÙNG HAPPY LEARNING VIỆT" [level=3] [ref=e135]:
                - link "CHINH PHỤC TIẾNG TRUNG – MỞ RỘNG CƠ HỘI NGHỀ NGHIỆP CÙNG HAPPY LEARNING VIỆT" [ref=e136] [cursor=pointer]:
                  - /url: chinh-phuc-tieng-trung-mo-rong-co-hoi-nghe-nghiep-cung-happy-learning-viet-2
              - generic [ref=e137]: Tue 05, 2026
          - generic [ref=e139]:
            - 'link "HAPPY LEARNING VIỆT: NƠI KHƠI NGUỒN TÀI NĂNG – GIÚP CON TỰ TIN VÀ TẬP TRUNG TOÀN DIỆN" [ref=e141] [cursor=pointer]':
              - /url: happy-learning-viet-lop-nang-khieu-cho-be-quan-6-binh-tan-2
              - 'img "HAPPY LEARNING VIỆT: NƠI KHƠI NGUỒN TÀI NĂNG – GIÚP CON TỰ TIN VÀ TẬP TRUNG TOÀN DIỆN" [ref=e142]'
            - generic [ref=e143]:
              - 'heading "HAPPY LEARNING VIỆT: NƠI KHƠI NGUỒN TÀI NĂNG – GIÚP CON TỰ TIN VÀ TẬP TRUNG TOÀN DIỆN" [level=3] [ref=e144]':
                - 'link "HAPPY LEARNING VIỆT: NƠI KHƠI NGUỒN TÀI NĂNG – GIÚP CON TỰ TIN VÀ TẬP TRUNG TOÀN DIỆN" [ref=e145] [cursor=pointer]':
                  - /url: happy-learning-viet-lop-nang-khieu-cho-be-quan-6-binh-tan-2
              - generic [ref=e146]: Thu 16, 2026
          - generic [ref=e148]:
            - link "HAPPY SUMMER 2026 - GLOBAL EXPLORER" [ref=e150] [cursor=pointer]:
              - /url: cung-nhau-ta-di-nam-chau-bon-be-he-nay-con-khong-chi-kham-pha-con-sang-tao-the-hien-the-gioi-2
              - img "HAPPY SUMMER 2026 - GLOBAL EXPLORER" [ref=e151]
            - generic [ref=e152]:
              - heading "HAPPY SUMMER 2026 - GLOBAL EXPLORER" [level=3] [ref=e153]:
                - link "HAPPY SUMMER 2026 - GLOBAL EXPLORER" [ref=e154] [cursor=pointer]:
                  - /url: cung-nhau-ta-di-nam-chau-bon-be-he-nay-con-khong-chi-kham-pha-con-sang-tao-the-hien-the-gioi-2
              - generic [ref=e155]: Thu 26, 2026
          - generic [ref=e157]:
            - link "Hội thảo chương trình Song bằng Phổ thông Mỹ – lộ trình học tập chuẩn quốc tế ngay tại Việt Nam." [ref=e159] [cursor=pointer]:
              - /url: hoi-thao-chuong-trinh-song-bang-pho-thong-my-lo-trinh-hoc-tap-chuan-quoc-te-ngay-tai-viet-nam-2
              - img "Hội thảo chương trình Song bằng Phổ thông Mỹ – lộ trình học tập chuẩn quốc tế ngay tại Việt Nam." [ref=e160]
            - generic [ref=e161]:
              - heading "Hội thảo chương trình Song bằng Phổ thông Mỹ – lộ trình học tập chuẩn quốc tế ngay tại Việt Nam." [level=3] [ref=e162]:
                - link "Hội thảo chương trình Song bằng Phổ thông Mỹ – lộ trình học tập chuẩn quốc tế ngay tại Việt Nam." [ref=e163] [cursor=pointer]:
                  - /url: hoi-thao-chuong-trinh-song-bang-pho-thong-my-lo-trinh-hoc-tap-chuan-quoc-te-ngay-tai-viet-nam-2
              - generic [ref=e164]: Thu 26, 2026
          - generic [ref=e166]:
            - 'link "LÌ XÌ GẤP ĐÔI - NIỀM VUI NHÂN BỘI: CÙNG HAPPY LEARNING VIỆT KHỞI ĐẦU NĂM MỚI RỰC RỠ" [ref=e168] [cursor=pointer]':
              - /url: li-xi-gap-doi-niem-vui-nhan-boi-cung-happy-learning-viet-khoi-dau-nam-moi-ruc-ro-2
              - 'img "LÌ XÌ GẤP ĐÔI - NIỀM VUI NHÂN BỘI: CÙNG HAPPY LEARNING VIỆT KHỞI ĐẦU NĂM MỚI RỰC RỠ" [ref=e169]'
            - generic [ref=e170]:
              - 'heading "LÌ XÌ GẤP ĐÔI - NIỀM VUI NHÂN BỘI: CÙNG HAPPY LEARNING VIỆT KHỞI ĐẦU NĂM MỚI RỰC RỠ" [level=3] [ref=e171]':
                - 'link "LÌ XÌ GẤP ĐÔI - NIỀM VUI NHÂN BỘI: CÙNG HAPPY LEARNING VIỆT KHỞI ĐẦU NĂM MỚI RỰC RỠ" [ref=e172] [cursor=pointer]':
                  - /url: li-xi-gap-doi-niem-vui-nhan-boi-cung-happy-learning-viet-khoi-dau-nam-moi-ruc-ro-2
              - generic [ref=e173]: Fri 27, 2026
          - generic [ref=e175]:
            - link "Khóa Học Cờ Vua Cho Trẻ Từ 4 Tuổi – Đặt Nền Móng Cho Tư Duy Chiến Thuật" [ref=e177] [cursor=pointer]:
              - /url: khoa-hoc-co-vua-cho-tre-tu-4-tuoi-dat-nen-mong-cho-tu-duy-chien-thuat-2
              - img "Khóa Học Cờ Vua Cho Trẻ Từ 4 Tuổi – Đặt Nền Móng Cho Tư Duy Chiến Thuật" [ref=e178]
            - generic [ref=e179]:
              - heading "Khóa Học Cờ Vua Cho Trẻ Từ 4 Tuổi – Đặt Nền Móng Cho Tư Duy Chiến Thuật" [level=3] [ref=e180]:
                - link "Khóa Học Cờ Vua Cho Trẻ Từ 4 Tuổi – Đặt Nền Móng Cho Tư Duy Chiến Thuật" [ref=e181] [cursor=pointer]:
                  - /url: khoa-hoc-co-vua-cho-tre-tu-4-tuoi-dat-nen-mong-cho-tu-duy-chien-thuat-2
              - generic [ref=e182]: Wed 28, 2026
          - generic [ref=e184]:
            - link "LỚP HỌC PIANO CHO BÉ | HAPPY LEARNING VIỆT" [ref=e186] [cursor=pointer]:
              - /url: lop-hoc-piano-cho-be-tai-happy-learning-viet
              - img "LỚP HỌC PIANO CHO BÉ | HAPPY LEARNING VIỆT" [ref=e187]
            - generic [ref=e188]:
              - heading "LỚP HỌC PIANO CHO BÉ | HAPPY LEARNING VIỆT" [level=3] [ref=e189]:
                - link "LỚP HỌC PIANO CHO BÉ | HAPPY LEARNING VIỆT" [ref=e190] [cursor=pointer]:
                  - /url: lop-hoc-piano-cho-be-tai-happy-learning-viet
              - generic [ref=e191]: Mon 05, 2026
          - generic [ref=e193]:
            - link "HỌC TIẾNG ANH TỪ NHỎ - NỀN TẢNG VỮNG CHẮC CHO TƯƠNG LAI TRẺ" [ref=e195] [cursor=pointer]:
              - /url: hoc-tieng-anh-tu-nho-nen-tang-vung-chac-cho-tuong-lai-tre-2-2
              - img "HỌC TIẾNG ANH TỪ NHỎ - NỀN TẢNG VỮNG CHẮC CHO TƯƠNG LAI TRẺ" [ref=e196]
            - generic [ref=e197]:
              - heading "HỌC TIẾNG ANH TỪ NHỎ - NỀN TẢNG VỮNG CHẮC CHO TƯƠNG LAI TRẺ" [level=3] [ref=e198]:
                - link "HỌC TIẾNG ANH TỪ NHỎ - NỀN TẢNG VỮNG CHẮC CHO TƯƠNG LAI TRẺ" [ref=e199] [cursor=pointer]:
                  - /url: hoc-tieng-anh-tu-nho-nen-tang-vung-chac-cho-tuong-lai-tre-2-2
              - generic [ref=e200]: Fri 02, 2026
    - generic [ref=e201]:
      - 'link "Call me: 0934.004.552" [ref=e202] [cursor=pointer]':
        - /url: tel:0934004552
        - img [ref=e206]
        - generic [ref=e209]: "Call me: 0934.004.552"
      - 'link "Zalo: 0934.004.552" [ref=e210] [cursor=pointer]':
        - /url: https://zalo.me/0934004552
        - img [ref=e214]
        - generic [ref=e216]: "Zalo: 0934.004.552"
  - contentinfo [ref=e217]:
    - generic [ref=e220]:
      - generic [ref=e224]:
        - tablist [ref=e226]:
          - tab "VỀ HAPPY LEARNING VIỆT" [selected] [ref=e227] [cursor=pointer]:
            - generic [ref=e228]: VỀ HAPPY LEARNING VIỆT
          - tab "KHÓA HỌC" [ref=e229] [cursor=pointer]:
            - generic [ref=e230]: KHÓA HỌC
        - tabpanel "VỀ HAPPY LEARNING VIỆT" [ref=e233]:
          - list [ref=e235]:
            - listitem [ref=e236]:
              - link "KHÓA HỌC" [ref=e237] [cursor=pointer]:
                - /url: khoa-hoc
            - listitem [ref=e238]:
              - link "test" [ref=e239] [cursor=pointer]:
                - /url: test
            - listitem [ref=e240]:
              - link "CỜ VUA - GLOBAL CHESS" [ref=e241] [cursor=pointer]:
                - /url: co-vua-global-chess
            - listitem [ref=e242]:
              - link "CÔNG NGHỆ - HAPPY AI & ROBOTIC" [ref=e243] [cursor=pointer]:
                - /url: cong-nghe-happy-ai-robotic
            - listitem [ref=e244]:
              - link "HỘI HOẠ - GLOBAL ART" [ref=e245] [cursor=pointer]:
                - /url: hoi-hoa-global-art
            - listitem [ref=e246]:
              - link "ÂM NHẠC VÀ VẬN ĐỘNG - HAPPY MUSIC & DANCE" [ref=e247] [cursor=pointer]:
                - /url: am-nhac-va-van-dong-happy-music-dance
            - listitem [ref=e248]:
              - link "LUYỆN THI CÁC MÔN" [ref=e249] [cursor=pointer]:
                - /url: luyen-thi-cac-mon
          - generic [ref=e250]:
            - paragraph [ref=e251]: "HAPPY LEARNING VIET là hệ sinh thái giáo dục gồm hai thế mạnh đào tạo chính là NGOẠI NGỮ và PHÁT TRIỂN TƯ DUY SÁNG TẠO cho trẻ em, người lớn qua các môn:"
            - paragraph [ref=e252]: "- Tiếng Anh - Tiếng Hoa"
            - paragraph [ref=e253]: "- Hội Hoạ và Mỹ Thuật."
            - paragraph [ref=e254]: "- Âm nhạc và vận động."
            - paragraph [ref=e255]: "- Cờ vua, AI & Robotic."
            - paragraph [ref=e256]: "- Các chương trình Workshop, hoạt động ngoại khoá..."
            - paragraph [ref=e257]: Với cơ sở vật chất tiện nghi, hiện đại, đội ngũ nhiều chuyên gia, giáo viên có trình độ chuyên môn cao, phương pháp giảng dạy độc quyền HAPPY TEACHING (HT) sẽ giúp người học lĩnh hội kiến thức hiệu quả và vui vẻ với các trải nghiệm học tập suốt đời.
      - generic [ref=e258]:
        - paragraph [ref=e260]: THEO DÕI HAPPY LEARNING VIỆT TẠI
        - generic [ref=e261]:
          - link "HAPPYLEARNING VIỆT" [ref=e262] [cursor=pointer]:
            - /url: https://zalo.me/0986363885
            - img "HAPPYLEARNING VIỆT" [ref=e263]
          - link "HAPPYLEARNING VIỆT" [ref=e264] [cursor=pointer]:
            - /url: ""
            - img "HAPPYLEARNING VIỆT" [ref=e265]
          - link "HAPPYLEARNING VIỆT" [ref=e266] [cursor=pointer]:
            - /url: https://www.facebook.com/happyenglish.every
            - img "HAPPYLEARNING VIỆT" [ref=e267]
          - link "HAPPYLEARNING VIỆT" [ref=e268] [cursor=pointer]:
            - /url: ""
            - img "HAPPYLEARNING VIỆT" [ref=e269]
          - link "HAPPYLEARNING VIỆT" [ref=e270] [cursor=pointer]:
            - /url: ""
            - img "HAPPYLEARNING VIỆT" [ref=e271]
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
          - strong: "Robotics Cho Bé 4+: Biến Trí Tưởng Tượng Thành Những Cỗ Máy Thông Minh"
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e272]:
      - generic [ref=e273]: "❌ Chi tiết lỗi cần khắc phục (1/15):"
      - generic [ref=e274]:
        - generic [ref=e275]:
          - generic [ref=e276]: 3. Heading (H1-H6)
          - generic [ref=e277]: 1 lỗi
        - generic [ref=e278]:
          - strong [ref=e280]: Heading phân cấp hợp lệ (1 lỗi)
          - generic [ref=e281]: "⚠️ Heading phân cấp sai: Nhảy cấp từ H1 → H3 (\"NÂNG TẦM SỰ NGHIỆP VỚI KHÓA HỌC TIẾNG ANH - TRUNG ONLINE DÀNH CHO SINH VIÊN VÀ NGƯỜI BẬN RỘN\")"
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