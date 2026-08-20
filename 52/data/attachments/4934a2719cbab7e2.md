# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: HỌC PIANO: KHÔNG BAO GIỜ LÀ QUÁ MUỘN ĐỂ BẮT ĐẦU! (/hoc-piano-khong-bao-gio-la-qua-muon-de-bat-dau-2)
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
        - 'link "HỌC PIANO: KHÔNG BAO GIỜ LÀ QUÁ MUỘN ĐỂ BẮT ĐẦU!" [ref=e42] [cursor=pointer]':
          - /url: https://code3.mimadigi.vn/2026/august/happylearning/hoc-piano-khong-bao-gio-la-qua-muon-de-bat-dau-2
    - generic [ref=e45]:
      - generic [ref=e46]:
        - generic [ref=e48]: "HỌC PIANO: KHÔNG BAO GIỜ LÀ QUÁ MUỘN ĐỂ BẮT ĐẦU!"
        - generic [ref=e51] [cursor=pointer]:
          - img [ref=e52]
          - text: Mục lục
          - img [ref=e55]
        - generic [ref=e59]:
          - 'heading "1. Bí quyết thành công: Tư duy và sự kiên trì" [level=3] [ref=e60]':
            - strong [ref=e62]: "1. Bí quyết thành công: Tư duy và sự kiên trì"
          - paragraph [ref=e63]: Người lớn có lợi thế về tư duy logic, khả năng tập trung và sự kiên trì vượt trội. Bạn có thể hiểu nhanh các kiến thức nhạc lý, cấu trúc bài hát và áp dụng một cách có hệ thống. Điều này giúp bạn rút ngắn đáng kể thời gian học so với trẻ em. Việc duy trì thói quen luyện tập cũng trở nên dễ dàng hơn khi bạn có mục tiêu rõ ràng.
          - 'heading "2. Lợi ích bất ngờ: Giảm căng thẳng, tăng sự tập trung" [level=3] [ref=e64]':
            - strong [ref=e66]: "2. Lợi ích bất ngờ: Giảm căng thẳng, tăng sự tập trung"
          - paragraph [ref=e67]: Sau một ngày làm việc căng thẳng, việc ngồi xuống và thả hồn vào những phím đàn trắng đen là một liệu pháp tuyệt vời. Âm nhạc giúp giải phóng những áp lực, mang lại cảm giác thư giãn và bình yên cho tâm hồn. Ngoài ra, việc đọc nốt nhạc, phối hợp tay trái và tay phải còn giúp cải thiện sự phối hợp não bộ, tăng cường khả năng tập trung và ghi nhớ.
          - heading "3. Lộ trình học linh hoạt, phù hợp với mọi người" [level=3] [ref=e68]:
            - strong [ref=e70]: 3. Lộ trình học linh hoạt, phù hợp với mọi người
          - paragraph [ref=e71]:
            - generic [ref=e72]:
              - text: Tại
              - strong [ref=e73]: Happy Learning Viet
              - text: ", chúng tôi hiểu rõ những bận rộn của người trưởng thành. Vì vậy, chúng tôi thiết kế các khóa học với lộ trình học linh hoạt, từ cơ bản đến nâng cao. Bạn có thể chọn lịch học phù hợp với thời gian cá nhân và được hướng dẫn bởi các giáo viên giàu kinh nghiệm, tận tâm. Chúng tôi tập trung vào việc giúp bạn chơi được những bản nhạc mình yêu thích một cách nhanh chóng, thay vì chỉ học lý thuyết khô khan."
          - heading "4. Cơ hội để kết nối và thể hiện bản thân" [level=3] [ref=e74]:
            - strong [ref=e76]: 4. Cơ hội để kết nối và thể hiện bản thân
          - paragraph [ref=e77]: Piano không chỉ là một sở thích cá nhân. Đó còn là một cách để kết nối với những người có cùng đam mê. Bạn có thể chơi đàn cho gia đình, bạn bè nghe, hoặc tham gia vào các buổi biểu diễn nhỏ, các buổi tiệc cuối tuần để thể hiện tài năng và sự tiến bộ của mình. Đó là một niềm tự hào không hề nhỏ!
          - heading "Bạn đã sẵn sàng để biến ước mơ thành sự thật chưa?" [level=3] [ref=e78]:
            - strong [ref=e80]: Bạn đã sẵn sàng để biến ước mơ thành sự thật chưa?
          - paragraph [ref=e81]:
            - generic [ref=e82]:
              - text: Đừng để những định kiến về tuổi tác cản trở bạn. Hãy lắng nghe tiếng gọi của âm nhạc và cho mình một cơ hội để tỏa sáng trên phím đàn. Hãy để
              - strong [ref=e83]: Happy Learning Viet
              - text: trở thành người bạn đồng hành của bạn trên hành trình chinh phục những bản nhạc tuyệt vời!
          - paragraph [ref=e84]
          - paragraph [ref=e85]:
            - generic [ref=e86]:
              - text: 👉
              - strong [ref=e87]: Đăng ký buổi học thử MIỄN PHÍ ngay hôm nay để trải nghiệm môi trường học tập chuyên nghiệp và truyền cảm hứng!
      - generic [ref=e89]:
        - paragraph [ref=e92]: BÀI VIẾT MỚI
        - generic [ref=e93]:
          - generic [ref=e95]:
            - link "NÂNG TẦM SỰ NGHIỆP VỚI KHÓA HỌC TIẾNG ANH - TRUNG ONLINE DÀNH CHO SINH VIÊN VÀ NGƯỜI BẬN RỘN" [ref=e97] [cursor=pointer]:
              - /url: nang-tam-su-nghiep-voi-khoa-hoc-tieng-anh-trung-online-danh-cho-sinh-vien-va-nguoi-ban-ron-2
              - img "NÂNG TẦM SỰ NGHIỆP VỚI KHÓA HỌC TIẾNG ANH - TRUNG ONLINE DÀNH CHO SINH VIÊN VÀ NGƯỜI BẬN RỘN" [ref=e98]
            - generic [ref=e99]:
              - heading "NÂNG TẦM SỰ NGHIỆP VỚI KHÓA HỌC TIẾNG ANH - TRUNG ONLINE DÀNH CHO SINH VIÊN VÀ NGƯỜI BẬN RỘN" [level=3] [ref=e100]:
                - link "NÂNG TẦM SỰ NGHIỆP VỚI KHÓA HỌC TIẾNG ANH - TRUNG ONLINE DÀNH CHO SINH VIÊN VÀ NGƯỜI BẬN RỘN" [ref=e101] [cursor=pointer]:
                  - /url: nang-tam-su-nghiep-voi-khoa-hoc-tieng-anh-trung-online-danh-cho-sinh-vien-va-nguoi-ban-ron-2
              - generic [ref=e102]: Thu 23, 2026
          - generic [ref=e104]:
            - link "RỘN RÀNG TUYỂN SINH CÁC LỚP TIẾNG ANH - TIẾNG TRUNG TẠI QUẬN 6 & BÌNH TÂN | HAPPY LEARNING VIỆT" [ref=e106] [cursor=pointer]:
              - /url: ron-rang-tuyen-sinh-cac-lop-tieng-anh-tieng-trung-tai-quan-6-binh-tan-happy-learning-viet-2
              - img "RỘN RÀNG TUYỂN SINH CÁC LỚP TIẾNG ANH - TIẾNG TRUNG TẠI QUẬN 6 & BÌNH TÂN | HAPPY LEARNING VIỆT" [ref=e107]
            - generic [ref=e108]:
              - heading "RỘN RÀNG TUYỂN SINH CÁC LỚP TIẾNG ANH - TIẾNG TRUNG TẠI QUẬN 6 & BÌNH TÂN | HAPPY LEARNING VIỆT" [level=3] [ref=e109]:
                - link "RỘN RÀNG TUYỂN SINH CÁC LỚP TIẾNG ANH - TIẾNG TRUNG TẠI QUẬN 6 & BÌNH TÂN | HAPPY LEARNING VIỆT" [ref=e110] [cursor=pointer]:
                  - /url: ron-rang-tuyen-sinh-cac-lop-tieng-anh-tieng-trung-tai-quan-6-binh-tan-happy-learning-viet-2
              - generic [ref=e111]: Sun 19, 2026
          - generic [ref=e113]:
            - link "CHINH PHỤC TIẾNG TRUNG – MỞ RỘNG CƠ HỘI NGHỀ NGHIỆP CÙNG HAPPY LEARNING VIỆT" [ref=e115] [cursor=pointer]:
              - /url: chinh-phuc-tieng-trung-mo-rong-co-hoi-nghe-nghiep-cung-happy-learning-viet-2
              - img "CHINH PHỤC TIẾNG TRUNG – MỞ RỘNG CƠ HỘI NGHỀ NGHIỆP CÙNG HAPPY LEARNING VIỆT" [ref=e116]
            - generic [ref=e117]:
              - heading "CHINH PHỤC TIẾNG TRUNG – MỞ RỘNG CƠ HỘI NGHỀ NGHIỆP CÙNG HAPPY LEARNING VIỆT" [level=3] [ref=e118]:
                - link "CHINH PHỤC TIẾNG TRUNG – MỞ RỘNG CƠ HỘI NGHỀ NGHIỆP CÙNG HAPPY LEARNING VIỆT" [ref=e119] [cursor=pointer]:
                  - /url: chinh-phuc-tieng-trung-mo-rong-co-hoi-nghe-nghiep-cung-happy-learning-viet-2
              - generic [ref=e120]: Tue 05, 2026
          - generic [ref=e122]:
            - 'link "HAPPY LEARNING VIỆT: NƠI KHƠI NGUỒN TÀI NĂNG – GIÚP CON TỰ TIN VÀ TẬP TRUNG TOÀN DIỆN" [ref=e124] [cursor=pointer]':
              - /url: happy-learning-viet-lop-nang-khieu-cho-be-quan-6-binh-tan-2
              - 'img "HAPPY LEARNING VIỆT: NƠI KHƠI NGUỒN TÀI NĂNG – GIÚP CON TỰ TIN VÀ TẬP TRUNG TOÀN DIỆN" [ref=e125]'
            - generic [ref=e126]:
              - 'heading "HAPPY LEARNING VIỆT: NƠI KHƠI NGUỒN TÀI NĂNG – GIÚP CON TỰ TIN VÀ TẬP TRUNG TOÀN DIỆN" [level=3] [ref=e127]':
                - 'link "HAPPY LEARNING VIỆT: NƠI KHƠI NGUỒN TÀI NĂNG – GIÚP CON TỰ TIN VÀ TẬP TRUNG TOÀN DIỆN" [ref=e128] [cursor=pointer]':
                  - /url: happy-learning-viet-lop-nang-khieu-cho-be-quan-6-binh-tan-2
              - generic [ref=e129]: Thu 16, 2026
          - generic [ref=e131]:
            - link "HAPPY SUMMER 2026 - GLOBAL EXPLORER" [ref=e133] [cursor=pointer]:
              - /url: cung-nhau-ta-di-nam-chau-bon-be-he-nay-con-khong-chi-kham-pha-con-sang-tao-the-hien-the-gioi-2
              - img "HAPPY SUMMER 2026 - GLOBAL EXPLORER" [ref=e134]
            - generic [ref=e135]:
              - heading "HAPPY SUMMER 2026 - GLOBAL EXPLORER" [level=3] [ref=e136]:
                - link "HAPPY SUMMER 2026 - GLOBAL EXPLORER" [ref=e137] [cursor=pointer]:
                  - /url: cung-nhau-ta-di-nam-chau-bon-be-he-nay-con-khong-chi-kham-pha-con-sang-tao-the-hien-the-gioi-2
              - generic [ref=e138]: Thu 26, 2026
          - generic [ref=e140]:
            - link "Hội thảo chương trình Song bằng Phổ thông Mỹ – lộ trình học tập chuẩn quốc tế ngay tại Việt Nam." [ref=e142] [cursor=pointer]:
              - /url: hoi-thao-chuong-trinh-song-bang-pho-thong-my-lo-trinh-hoc-tap-chuan-quoc-te-ngay-tai-viet-nam-2
              - img "Hội thảo chương trình Song bằng Phổ thông Mỹ – lộ trình học tập chuẩn quốc tế ngay tại Việt Nam." [ref=e143]
            - generic [ref=e144]:
              - heading "Hội thảo chương trình Song bằng Phổ thông Mỹ – lộ trình học tập chuẩn quốc tế ngay tại Việt Nam." [level=3] [ref=e145]:
                - link "Hội thảo chương trình Song bằng Phổ thông Mỹ – lộ trình học tập chuẩn quốc tế ngay tại Việt Nam." [ref=e146] [cursor=pointer]:
                  - /url: hoi-thao-chuong-trinh-song-bang-pho-thong-my-lo-trinh-hoc-tap-chuan-quoc-te-ngay-tai-viet-nam-2
              - generic [ref=e147]: Thu 26, 2026
          - generic [ref=e149]:
            - 'link "LÌ XÌ GẤP ĐÔI - NIỀM VUI NHÂN BỘI: CÙNG HAPPY LEARNING VIỆT KHỞI ĐẦU NĂM MỚI RỰC RỠ" [ref=e151] [cursor=pointer]':
              - /url: li-xi-gap-doi-niem-vui-nhan-boi-cung-happy-learning-viet-khoi-dau-nam-moi-ruc-ro-2
              - 'img "LÌ XÌ GẤP ĐÔI - NIỀM VUI NHÂN BỘI: CÙNG HAPPY LEARNING VIỆT KHỞI ĐẦU NĂM MỚI RỰC RỠ" [ref=e152]'
            - generic [ref=e153]:
              - 'heading "LÌ XÌ GẤP ĐÔI - NIỀM VUI NHÂN BỘI: CÙNG HAPPY LEARNING VIỆT KHỞI ĐẦU NĂM MỚI RỰC RỠ" [level=3] [ref=e154]':
                - 'link "LÌ XÌ GẤP ĐÔI - NIỀM VUI NHÂN BỘI: CÙNG HAPPY LEARNING VIỆT KHỞI ĐẦU NĂM MỚI RỰC RỠ" [ref=e155] [cursor=pointer]':
                  - /url: li-xi-gap-doi-niem-vui-nhan-boi-cung-happy-learning-viet-khoi-dau-nam-moi-ruc-ro-2
              - generic [ref=e156]: Fri 27, 2026
          - generic [ref=e158]:
            - 'link "Robotics Cho Bé 4+: Biến Trí Tưởng Tượng Thành Những Cỗ Máy Thông Minh" [ref=e160] [cursor=pointer]':
              - /url: robotics-cho-be-4-bien-tri-tuong-tuong-thanh-nhung-co-may-thong-minh-2
              - 'img "Robotics Cho Bé 4+: Biến Trí Tưởng Tượng Thành Những Cỗ Máy Thông Minh" [ref=e161]'
            - generic [ref=e162]:
              - 'heading "Robotics Cho Bé 4+: Biến Trí Tưởng Tượng Thành Những Cỗ Máy Thông Minh" [level=3] [ref=e163]':
                - 'link "Robotics Cho Bé 4+: Biến Trí Tưởng Tượng Thành Những Cỗ Máy Thông Minh" [ref=e164] [cursor=pointer]':
                  - /url: robotics-cho-be-4-bien-tri-tuong-tuong-thanh-nhung-co-may-thong-minh-2
              - generic [ref=e165]: Thu 29, 2026
          - generic [ref=e167]:
            - link "Khóa Học Cờ Vua Cho Trẻ Từ 4 Tuổi – Đặt Nền Móng Cho Tư Duy Chiến Thuật" [ref=e169] [cursor=pointer]:
              - /url: khoa-hoc-co-vua-cho-tre-tu-4-tuoi-dat-nen-mong-cho-tu-duy-chien-thuat-2
              - img "Khóa Học Cờ Vua Cho Trẻ Từ 4 Tuổi – Đặt Nền Móng Cho Tư Duy Chiến Thuật" [ref=e170]
            - generic [ref=e171]:
              - heading "Khóa Học Cờ Vua Cho Trẻ Từ 4 Tuổi – Đặt Nền Móng Cho Tư Duy Chiến Thuật" [level=3] [ref=e172]:
                - link "Khóa Học Cờ Vua Cho Trẻ Từ 4 Tuổi – Đặt Nền Móng Cho Tư Duy Chiến Thuật" [ref=e173] [cursor=pointer]:
                  - /url: khoa-hoc-co-vua-cho-tre-tu-4-tuoi-dat-nen-mong-cho-tu-duy-chien-thuat-2
              - generic [ref=e174]: Wed 28, 2026
          - generic [ref=e176]:
            - link "LỚP HỌC PIANO CHO BÉ | HAPPY LEARNING VIỆT" [ref=e178] [cursor=pointer]:
              - /url: lop-hoc-piano-cho-be-tai-happy-learning-viet
              - img "LỚP HỌC PIANO CHO BÉ | HAPPY LEARNING VIỆT" [ref=e179]
            - generic [ref=e180]:
              - heading "LỚP HỌC PIANO CHO BÉ | HAPPY LEARNING VIỆT" [level=3] [ref=e181]:
                - link "LỚP HỌC PIANO CHO BÉ | HAPPY LEARNING VIỆT" [ref=e182] [cursor=pointer]:
                  - /url: lop-hoc-piano-cho-be-tai-happy-learning-viet
              - generic [ref=e183]: Mon 05, 2026
    - generic [ref=e184]:
      - 'link "Call me: 0934.004.552" [ref=e185] [cursor=pointer]':
        - /url: tel:0934004552
        - img [ref=e189]
        - generic [ref=e192]: "Call me: 0934.004.552"
      - 'link "Zalo: 0934.004.552" [ref=e193] [cursor=pointer]':
        - /url: https://zalo.me/0934004552
        - img [ref=e197]
        - generic [ref=e199]: "Zalo: 0934.004.552"
  - contentinfo [ref=e200]:
    - generic [ref=e203]:
      - generic [ref=e207]:
        - tablist [ref=e209]:
          - tab "VỀ HAPPY LEARNING VIỆT" [selected] [ref=e210] [cursor=pointer]:
            - generic [ref=e211]: VỀ HAPPY LEARNING VIỆT
          - tab "KHÓA HỌC" [ref=e212] [cursor=pointer]:
            - generic [ref=e213]: KHÓA HỌC
        - tabpanel "VỀ HAPPY LEARNING VIỆT" [ref=e216]:
          - list [ref=e218]:
            - listitem [ref=e219]:
              - link "KHÓA HỌC" [ref=e220] [cursor=pointer]:
                - /url: khoa-hoc
            - listitem [ref=e221]:
              - link "test" [ref=e222] [cursor=pointer]:
                - /url: test
            - listitem [ref=e223]:
              - link "CỜ VUA - GLOBAL CHESS" [ref=e224] [cursor=pointer]:
                - /url: co-vua-global-chess
            - listitem [ref=e225]:
              - link "CÔNG NGHỆ - HAPPY AI & ROBOTIC" [ref=e226] [cursor=pointer]:
                - /url: cong-nghe-happy-ai-robotic
            - listitem [ref=e227]:
              - link "HỘI HOẠ - GLOBAL ART" [ref=e228] [cursor=pointer]:
                - /url: hoi-hoa-global-art
            - listitem [ref=e229]:
              - link "ÂM NHẠC VÀ VẬN ĐỘNG - HAPPY MUSIC & DANCE" [ref=e230] [cursor=pointer]:
                - /url: am-nhac-va-van-dong-happy-music-dance
            - listitem [ref=e231]:
              - link "LUYỆN THI CÁC MÔN" [ref=e232] [cursor=pointer]:
                - /url: luyen-thi-cac-mon
          - generic [ref=e233]:
            - paragraph [ref=e234]: "HAPPY LEARNING VIET là hệ sinh thái giáo dục gồm hai thế mạnh đào tạo chính là NGOẠI NGỮ và PHÁT TRIỂN TƯ DUY SÁNG TẠO cho trẻ em, người lớn qua các môn:"
            - paragraph [ref=e235]: "- Tiếng Anh - Tiếng Hoa"
            - paragraph [ref=e236]: "- Hội Hoạ và Mỹ Thuật."
            - paragraph [ref=e237]: "- Âm nhạc và vận động."
            - paragraph [ref=e238]: "- Cờ vua, AI & Robotic."
            - paragraph [ref=e239]: "- Các chương trình Workshop, hoạt động ngoại khoá..."
            - paragraph [ref=e240]: Với cơ sở vật chất tiện nghi, hiện đại, đội ngũ nhiều chuyên gia, giáo viên có trình độ chuyên môn cao, phương pháp giảng dạy độc quyền HAPPY TEACHING (HT) sẽ giúp người học lĩnh hội kiến thức hiệu quả và vui vẻ với các trải nghiệm học tập suốt đời.
      - generic [ref=e241]:
        - paragraph [ref=e243]: THEO DÕI HAPPY LEARNING VIỆT TẠI
        - generic [ref=e244]:
          - link "HAPPYLEARNING VIỆT" [ref=e245] [cursor=pointer]:
            - /url: https://zalo.me/0986363885
            - img "HAPPYLEARNING VIỆT" [ref=e246]
          - link "HAPPYLEARNING VIỆT" [ref=e247] [cursor=pointer]:
            - /url: ""
            - img "HAPPYLEARNING VIỆT" [ref=e248]
          - link "HAPPYLEARNING VIỆT" [ref=e249] [cursor=pointer]:
            - /url: https://www.facebook.com/happyenglish.every
            - img "HAPPYLEARNING VIỆT" [ref=e250]
          - link "HAPPYLEARNING VIỆT" [ref=e251] [cursor=pointer]:
            - /url: ""
            - img "HAPPYLEARNING VIỆT" [ref=e252]
          - link "HAPPYLEARNING VIỆT" [ref=e253] [cursor=pointer]:
            - /url: ""
            - img "HAPPYLEARNING VIỆT" [ref=e254]
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
          - strong: "HỌC PIANO: KHÔNG BAO GIỜ LÀ QUÁ MUỘN ĐỂ BẮT ĐẦU!"
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e255]:
      - generic [ref=e256]: "❌ Chi tiết lỗi cần khắc phục (1/15):"
      - generic [ref=e257]:
        - generic [ref=e258]:
          - generic [ref=e259]: 3. Heading (H1-H6)
          - generic [ref=e260]: 1 lỗi
        - generic [ref=e261]:
          - strong [ref=e263]: Heading phân cấp hợp lệ (1 lỗi)
          - generic [ref=e264]: "⚠️ Heading phân cấp sai: Nhảy cấp từ H1 → H3 (\"1. Bí quyết thành công: Tư duy và sự kiên trì\")"
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