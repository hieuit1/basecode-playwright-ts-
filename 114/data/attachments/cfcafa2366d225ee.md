# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: /index.php (/index.php)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 80/100 dưới ngưỡng 96%. Có 4/20 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e5]:
      - paragraph [ref=e6]:
        - img [ref=e7]
        - generic [ref=e10]: Số L22-23, đường N1, Khu phố 1, Phường Trấn Biên, Đồng Nai
      - paragraph [ref=e11]:
        - img [ref=e12]
        - 'link "Email: datnt04.mima@gmail.com" [ref=e15] [cursor=pointer]':
          - /url: mailto:datnt04.mima@gmail.com
    - generic [ref=e19]:
      - link "Lorem Ipsum" [ref=e20] [cursor=pointer]:
        - /url: https://code6.mimadigi.vn/2026/september/phuongvinh_115626w/
        - img "Lorem Ipsum" [ref=e21]
      - list [ref=e22]:
        - listitem [ref=e23]:
          - link "Trang chủ" [ref=e24] [cursor=pointer]:
            - /url: https://code6.mimadigi.vn/2026/september/phuongvinh_115626w/
        - listitem [ref=e25]:
          - link "Về chúng tôi" [ref=e26] [cursor=pointer]:
            - /url: gioi-thieu
        - listitem [ref=e27]:
          - link "Dịch vụ" [ref=e28] [cursor=pointer]:
            - /url: dich-vu
            - text: Dịch vụ
            - img [ref=e29]
        - listitem [ref=e31]:
          - link "Thông tin" [ref=e32] [cursor=pointer]:
            - /url: tin-tuc
        - listitem [ref=e33]:
          - link "Album" [ref=e34] [cursor=pointer]:
            - /url: thu-vien-anh
        - listitem [ref=e35]:
          - link "Liên hệ" [ref=e36] [cursor=pointer]:
            - /url: lien-he
        - listitem [ref=e37]:
          - link "Về CEO" [ref=e38] [cursor=pointer]:
            - /url: ve-ceo
      - link "0888 080 138" [ref=e40] [cursor=pointer]:
        - /url: tel:0888080138
        - img [ref=e41]
        - generic [ref=e44]: 0888 080 138
    - generic [ref=e48]:
      - text: ←
      - listbox [ref=e50]:
        - option [ref=e51]:
          - link [ref=e52] [cursor=pointer]:
            - /url: ""
            - img [ref=e54]
        - option [ref=e55]:
          - link [ref=e56] [cursor=pointer]:
            - /url: ""
            - img [ref=e58]
        - option "Lorem Ipsum" [ref=e59]:
          - link "Lorem Ipsum" [ref=e60] [cursor=pointer]:
            - /url: ""
            - img "Lorem Ipsum" [ref=e62]
      - text: →
    - generic [ref=e63]:
      - generic [ref=e66]:
        - img "Nguyễn Trần Bích Phượng" [ref=e68]
        - generic:
          - paragraph: Founder
          - heading "Nguyễn Trần Bích Phượng" [level=2]
          - generic:
            - paragraph: Luật sư Nguyễn Trần Bích Phượng là Sáng lập viên kiêm Luật sư Điều hành của Công ty Luật Phượng Vinh. Với hơn 15 năm kinh nghiệm hoạt động trong lĩnh vực Tư vấn Doanh nghiệp, Đầu tư và Giải quyết tranh chấp thương mại, Luật sư Phượng cùng các cộng sự đã hỗ trợ thành công hàng trăm doanh nghiệp trong và ngoài nước an tâm vận hành và bảo vệ tối đa quyền lợi hợp pháp.
            - paragraph: Với phương châm "Tận tâm – Chuẩn mực – Hiệu quả", Luật sư Nguyễn Trần Bích Phượng thành lập Luật Phượng Vinh nhằm mang đến giải pháp pháp lý toàn diện và tối ưu nhất cho khách hàng. Chúng tôi đồng hành cùng cá nhân và doanh nghiệp trong việc phòng ngừa rủi ro pháp lý, tháo gỡ khó khăn và bảo vệ quyền lợi hợp pháp trong mọi vụ việc.
          - generic:
            - link "Về Luật Phượng Vinh":
              - /url: gioi-thieu
              - img
              - generic: Về Luật Phượng Vinh
          - 'link "Liên hệ ngay: 0888 080 138"':
            - /url: tel:0888080138
            - img
            - generic: "Liên hệ ngay: 0888 080 138"
      - generic [ref=e70]:
        - generic [ref=e72]:
          - heading "Dịch vụ ly hôn" [level=2] [ref=e73]
          - paragraph [ref=e75]: Tư vấn và thực hiện thủ tục ly hôn thuận tình, đơn phương nhanh chóng, bảo mật. Hỗ trợ giải quyết tối ưu các tranh chấp về quyền nuôi con, phân chia tài sản chung và nghĩa vụ tài chính. Đồng hành cùng khách hàng tháo gỡ khó khăn pháp lý trong hôn nhân. Chúng tôi cung cấp giải pháp trọn gói từ soạn thảo hồ sơ
          - link "Xem dịch vụ" [ref=e76] [cursor=pointer]:
            - /url: dich-vu-ly-hon
            - img [ref=e78]
            - generic [ref=e80]: Xem dịch vụ
        - img "Dịch vụ ly hôn" [ref=e82]
        - generic [ref=e84]:
          - heading "Tư vấn pháp luật" [level=2] [ref=e85]
          - paragraph [ref=e87]: Cung cấp giải pháp tư vấn pháp lý chuyên sâu cho cá nhân và doanh nghiệp. Hỗ trợ soát xét hợp đồng, giải quyết tranh chấp Dân sự, Đất đai, Dân sự và định hướng phòng ngừa rủi ro pháp lý tối ưu. Giúp khách hàng nắm rõ quy định hiện hành, đưa ra quyết định an toàn và xử lý vướng mắc pháp lý một cách hiệu quả nhất.
          - link "Xem dịch vụ" [ref=e88] [cursor=pointer]:
            - /url: tu-van-phap-luat
            - img [ref=e90]
            - generic [ref=e92]: Xem dịch vụ
      - generic [ref=e94]:
        - heading "Các Dịch Vụ" [level=2] [ref=e96]
        - generic [ref=e97]:
          - generic:
            - paragraph:
              - link "Tư vấn pháp luật cho cá nhân":
                - /url: tu-van-phap-luat-cho-ca-nhan
            - generic:
              - heading "Tư vấn pháp luật cho cá nhân" [level=3]:
                - link "Tư vấn pháp luật cho cá nhân":
                  - /url: tu-van-phap-luat-cho-ca-nhan
              - generic: Đồng hành cùng khách hàng tháo gỡ khó khăn pháp lý trong mọi lĩnh vực đời sống và kinh doanh.
          - generic:
            - paragraph:
              - link "Tư vấn pháp luật cho cá nhân (1)":
                - /url: tu-van-phap-luat-cho-ca-nhan-1
            - generic:
              - heading "Tư vấn pháp luật cho cá nhân (1)" [level=3]:
                - link "Tư vấn pháp luật cho cá nhân (1)":
                  - /url: tu-van-phap-luat-cho-ca-nhan-1
              - generic: Đồng hành cùng khách hàng tháo gỡ khó khăn pháp lý trong mọi lĩnh vực đời sống và kinh doanh.
          - generic:
            - paragraph:
              - link "Tư vấn pháp luật cho cá nhân (1) (1)":
                - /url: tu-van-phap-luat-cho-ca-nhan-1-1
            - generic:
              - heading "Tư vấn pháp luật cho cá nhân (1) (1)" [level=3]:
                - link "Tư vấn pháp luật cho cá nhân (1) (1)":
                  - /url: tu-van-phap-luat-cho-ca-nhan-1-1
              - generic: Đồng hành cùng khách hàng tháo gỡ khó khăn pháp lý trong mọi lĩnh vực đời sống và kinh doanh.
          - generic:
            - paragraph:
              - link "Tư vấn pháp luật cho cá nhân (1) (1) (1)":
                - /url: tu-van-phap-luat-cho-ca-nhan-1-1-1
            - generic:
              - heading "Tư vấn pháp luật cho cá nhân (1) (1) (1)" [level=3]:
                - link "Tư vấn pháp luật cho cá nhân (1) (1) (1)":
                  - /url: tu-van-phap-luat-cho-ca-nhan-1-1-1
              - generic: Đồng hành cùng khách hàng tháo gỡ khó khăn pháp lý trong mọi lĩnh vực đời sống và kinh doanh.
          - generic:
            - paragraph:
              - link "Tư vấn pháp luật cho cá nhân (1) (1) (1) (1)":
                - /url: tu-van-phap-luat-cho-ca-nhan-1-1-1-1
            - generic:
              - heading "Tư vấn pháp luật cho cá nhân (1) (1) (1) (1)" [level=3]:
                - link "Tư vấn pháp luật cho cá nhân (1) (1) (1) (1)":
                  - /url: tu-van-phap-luat-cho-ca-nhan-1-1-1-1
              - generic: Đồng hành cùng khách hàng tháo gỡ khó khăn pháp lý trong mọi lĩnh vực đời sống và kinh doanh.
          - generic:
            - paragraph:
              - link "Tư vấn pháp luật cho cá nhân (1) (1) (1) (1) (1)":
                - /url: tu-van-phap-luat-cho-ca-nhan-1-1-1-1-1
            - generic:
              - heading "Tư vấn pháp luật cho cá nhân (1) (1) (1) (1) (1)" [level=3]:
                - link "Tư vấn pháp luật cho cá nhân (1) (1) (1) (1) (1)":
                  - /url: tu-van-phap-luat-cho-ca-nhan-1-1-1-1-1
              - generic: Đồng hành cùng khách hàng tháo gỡ khó khăn pháp lý trong mọi lĩnh vực đời sống và kinh doanh.
      - generic [ref=e100]:
        - generic [ref=e101]:
          - heading "Kết Nối Cùng Chuyên Gia Lắng Nghe Thấu Hiểu & Bảo Vệ Quyền Lợi" [level=2] [ref=e102]:
            - text: Kết Nối Cùng Chuyên Gia
            - text: Lắng Nghe Thấu Hiểu & Bảo Vệ Quyền Lợi
          - list [ref=e103]:
            - listitem [ref=e104]:
              - img "Cam kết" [ref=e106]
              - generic [ref=e107]: Đội ngũ Luật sư dày dặn kinh nghiệm thực chiến.
            - listitem [ref=e108]:
              - img "Cam kết" [ref=e110]
              - generic [ref=e111]: Cam kết bảo mật tuyệt đối mọi thông tin hồ sơ.
            - listitem [ref=e112]:
              - img "Cam kết" [ref=e114]
              - generic [ref=e115]: Giải pháp pháp lý tối ưu, giúp tiết kiệm thời gian.
            - listitem [ref=e116]:
              - img "Cam kết" [ref=e118]
              - generic [ref=e119]: Chi phí dịch vụ minh bạch, không phát sinh.
            - listitem [ref=e120]:
              - img "Cam kết" [ref=e122]
              - generic [ref=e123]: Luôn lắng nghe và hỗ trợ khách hàng tận tâm 24/7.
        - generic [ref=e125]:
          - generic [ref=e126]: Đăng ký tư vấn ngay !!
          - generic [ref=e127]:
            - generic [ref=e128]:
              - generic [ref=e129]:
                - text: Họ và tên
                - emphasis [ref=e130]: "*"
              - textbox "Họ và tên *" [ref=e131]:
                - /placeholder: Nhập họ và tên ...
            - generic [ref=e132]:
              - generic [ref=e133]:
                - text: Số điện thoại
                - emphasis [ref=e134]: "*"
              - textbox "Số điện thoại *" [ref=e135]:
                - /placeholder: Nhập số điện thoại
            - generic [ref=e136]:
              - generic [ref=e137]:
                - text: Email
                - emphasis [ref=e138]: "*"
              - textbox "Email *" [ref=e139]:
                - /placeholder: Nhập email
            - generic [ref=e140]:
              - generic [ref=e141]:
                - text: Dịch vụ cần tư vấn
                - emphasis [ref=e142]: "*"
              - combobox "Dịch vụ cần tư vấn *" [ref=e143]:
                - option "Chọn dịch vụ" [selected]
                - option "Dịch vụ ly hôn"
                - option "Pháp lý văn bản"
                - option "Tư vấn pháp luật"
                - option "Pháp nhân đại diện"
                - option "Thành lập cty hộ Kinh doanh"
                - option "Soạn thảo văn bản Review hợp đồng"
            - generic [ref=e144]:
              - generic [ref=e145]: Ghi chú
              - textbox "Ghi chú" [ref=e146]:
                - /placeholder: Lời nhắn
            - button "Nhận tư vấn ngay" [ref=e147] [cursor=pointer]
      - generic [ref=e149]:
        - heading "Bài Viết Tin Tức" [level=2] [ref=e151]
        - generic [ref=e152]:
          - generic [ref=e153]:
            - 'link "Cập nhật chính sách Thuế mới nhất: Doanh nghiệp cần lưu ý những thay đổi quan trọng nào?" [ref=e154] [cursor=pointer]':
              - /url: cap-nhat-chinh-sach-thue-moi-nhat-doanh-nghiep-can-luu-y-nhung-thay-doi-quan-trong-nao
            - 'heading "Cập nhật chính sách Thuế mới nhất: Doanh nghiệp cần lưu ý những thay đổi quan trọng nào?" [level=3] [ref=e155]':
              - 'link "Cập nhật chính sách Thuế mới nhất: Doanh nghiệp cần lưu ý những thay đổi quan trọng nào?" [ref=e156] [cursor=pointer]':
                - /url: cap-nhat-chinh-sach-thue-moi-nhat-doanh-nghiep-can-luu-y-nhung-thay-doi-quan-trong-nao
          - generic [ref=e157]:
            - generic:
              - paragraph:
                - 'link "Điều kiện & thủ tục ly hôn thuận tình năm 2026: Hướng dẫn chi tiết."':
                  - /url: dieu-kien-thu-tuc-ly-hon-thuan-tinh-nam-2026-huong-dan-chi-tiet
              - generic:
                - 'heading "Điều kiện & thủ tục ly hôn thuận tình năm 2026: Hướng dẫn chi tiết." [level=3]':
                  - 'link "Điều kiện & thủ tục ly hôn thuận tình năm 2026: Hướng dẫn chi tiết."':
                    - /url: dieu-kien-thu-tuc-ly-hon-thuan-tinh-nam-2026-huong-dan-chi-tiet
            - generic:
              - paragraph:
                - 'link "Điều kiện & thủ tục ly hôn thuận tình năm 2026: Hướng dẫn chi tiết. (1) (1)"':
                  - /url: dieu-kien-amp-thu-tuc-ly-hon-thuan-tinh-nam-2026-huong-dan-chi-tiet-1-1
              - generic:
                - 'heading "Điều kiện & thủ tục ly hôn thuận tình năm 2026: Hướng dẫn chi tiết. (1) (1)" [level=3]':
                  - 'link "Điều kiện & thủ tục ly hôn thuận tình năm 2026: Hướng dẫn chi tiết. (1) (1)"':
                    - /url: dieu-kien-amp-thu-tuc-ly-hon-thuan-tinh-nam-2026-huong-dan-chi-tiet-1-1
            - generic:
              - paragraph:
                - 'link "Điều kiện & thủ tục ly hôn thuận tình năm 2026: Hướng dẫn chi tiết. (1)"':
                  - /url: dieu-kien-amp-thu-tuc-ly-hon-thuan-tinh-nam-2026-huong-dan-chi-tiet-1
              - generic:
                - 'heading "Điều kiện & thủ tục ly hôn thuận tình năm 2026: Hướng dẫn chi tiết. (1)" [level=3]':
                  - 'link "Điều kiện & thủ tục ly hôn thuận tình năm 2026: Hướng dẫn chi tiết. (1)"':
                    - /url: dieu-kien-amp-thu-tuc-ly-hon-thuan-tinh-nam-2026-huong-dan-chi-tiet-1
            - generic:
              - paragraph:
                - 'link "Điều kiện & thủ tục ly hôn thuận tình năm 2026: Hướng dẫn chi tiết. (1) (1) (1)"':
                  - /url: dieu-kien-amp-thu-tuc-ly-hon-thuan-tinh-nam-2026-huong-dan-chi-tiet-1-1-1
              - generic:
                - 'heading "Điều kiện & thủ tục ly hôn thuận tình năm 2026: Hướng dẫn chi tiết. (1) (1) (1)" [level=3]':
                  - 'link "Điều kiện & thủ tục ly hôn thuận tình năm 2026: Hướng dẫn chi tiết. (1) (1) (1)"':
                    - /url: dieu-kien-amp-thu-tuc-ly-hon-thuan-tinh-nam-2026-huong-dan-chi-tiet-1-1-1
        - link "Xem tất cả bài viết" [ref=e159] [cursor=pointer]:
          - /url: tin-tuc
          - img [ref=e161]
          - generic [ref=e163]: Xem tất cả bài viết
      - generic [ref=e165]:
        - heading "Tiêu Chí" [level=2] [ref=e167]
        - generic [ref=e168]:
          - generic [ref=e169]:
            - paragraph [ref=e170]
            - heading "Bảo mật tuyệt đối" [level=3] [ref=e171]
            - generic [ref=e172]: Cam kết giữ bí mật hoàn toàn thông tin cá nhân, tài liệu và hồ sơ vụ việc của khách hàng theo đúng quy chuẩn đạo đức nghề nghiệp luật sư.
          - generic [ref=e173]:
            - paragraph [ref=e174]
            - heading "Chuyên nghiệp & Tận tâm" [level=3] [ref=e175]
            - generic [ref=e176]: Đội ngũ luật sư giàu kinh nghiệm, luôn lắng nghe, thấu hiểu và đặt lợi ích hợp pháp của khách hàng lên hàng đầu trong mọi tình huống.
          - generic [ref=e177]:
            - paragraph [ref=e178]
            - heading "Giải pháp tối ưu" [level=3] [ref=e179]
            - generic [ref=e180]: Nghiên cứu kỹ lưỡng từng hồ sơ để đưa ra phương án pháp lý an toàn, tiết kiệm chi phí và thời gian tối đa cho khách hàng.
          - generic [ref=e181]:
            - paragraph [ref=e182]
            - heading "Minh bạch & Rõ ràng" [level=3] [ref=e183]
            - generic [ref=e184]: Mọi chi phí dịch vụ, tiến trình xử lý công việc và khả năng thành công của vụ việc đều được tư vấn minh bạch, rõ ràng ngay từ đầu.
      - generic [ref=e186]:
        - heading "Khách Hàng Nói Gì Về Chúng Tôi" [level=2] [ref=e188]
        - generic [ref=e191]:
          - generic [ref=e193]:
            - generic [ref=e194]:
              - img "Trích dẫn" [ref=e195]
              - generic [ref=e196]:
                - img [ref=e197]
                - img [ref=e199]
                - img [ref=e201]
                - img [ref=e203]
                - img [ref=e205]
            - generic [ref=e207]: Luật Phượng Vinh hỗ trợ công ty tôi soát xét toàn bộ hợp đồng thương mại rất tỉ mỉ. Các rủi ro pháp lý được dự báo chính xác giúp chúng tôi yên tâm ký kết với đối tác. Cảm ơn Luật sư Phượng và các cộng sự
            - generic [ref=e208]:
              - paragraph [ref=e209]
              - generic [ref=e210]:
                - heading "Chị Nguyễn Thanh Vân" [level=3] [ref=e211]
                - paragraph [ref=e212]: Khách hàng cá nhân
          - generic [ref=e214]:
            - generic [ref=e215]:
              - img "Trích dẫn" [ref=e216]
              - generic [ref=e217]:
                - img [ref=e218]
                - img [ref=e220]
                - img [ref=e222]
                - img [ref=e224]
                - img [ref=e226]
            - generic [ref=e228]: Tôi từng rất hoang mang khi gặp vướng mắc về thủ tục ly hôn và tranh chấp tài sản. Được Luật sư tư vấn tận tình, tháo gỡ từng nút thắt và đại diện bảo vệ quyền lợi hợp pháp, mọi việc đã diễn ra vô cùng suôn sẻ.
            - generic [ref=e229]:
              - paragraph [ref=e230]
              - generic [ref=e231]:
                - heading "Ông Hoàng Quốc Việt" [level=3] [ref=e232]
                - paragraph [ref=e233]: CEO Chuỗi Bán lẻ (Đồng Nai)
          - generic [ref=e235]:
            - generic [ref=e236]:
              - img "Trích dẫn" [ref=e237]
              - generic [ref=e238]:
                - img [ref=e239]
                - img [ref=e241]
                - img [ref=e243]
                - img [ref=e245]
                - img [ref=e247]
            - generic [ref=e249]: Luật Phượng Vinh hỗ trợ công ty tôi soát xét toàn bộ hợp đồng thương mại rất tỉ mỉ. Các rủi ro pháp lý được dự báo chính xác giúp chúng tôi yên tâm ký kết với đối tác. Cảm ơn Luật sư Phượng và các cộng sự
            - generic [ref=e250]:
              - paragraph [ref=e251]
              - generic [ref=e252]:
                - heading "Chị Nguyễn Thanh Vân (1)" [level=3] [ref=e253]
                - paragraph
          - generic [ref=e255]:
            - generic [ref=e256]:
              - img "Trích dẫn" [ref=e257]
              - generic [ref=e258]:
                - img [ref=e259]
                - img [ref=e261]
                - img [ref=e263]
                - img [ref=e265]
                - img [ref=e267]
            - generic [ref=e269]: Tôi từng rất hoang mang khi gặp vướng mắc về thủ tục ly hôn và tranh chấp tài sản. Được Luật sư tư vấn tận tình, tháo gỡ từng nút thắt và đại diện bảo vệ quyền lợi hợp pháp, mọi việc đã diễn ra vô cùng suôn sẻ.
            - generic [ref=e270]:
              - paragraph [ref=e271]
              - generic [ref=e272]:
                - heading "Ông Hoàng Quốc Việt (1)" [level=3] [ref=e273]
                - paragraph
      - generic [ref=e276]:
        - paragraph [ref=e277]: Trong bối cảnh kinh tế và hệ thống pháp luật liên tục thay đổi, việc nắm rõ quy định để phòng ngừa rủi ro là yếu tố then chốt giúp cá nhân và doanh nghiệp an tâm phát triển. Công ty Luật TNHH MTV Phượng Vinh tự hào là đơn vị tư vấn pháp lý chuyên nghiệp, uy tín hàng đầu tại Đồng Nai và các tỉnh lân cận, mang đến giải pháp toàn diện cho mọi vấn đề pháp lý của bạn.
        - link "Xem tất cả bài viết" [ref=e280] [cursor=pointer]:
          - /url: javascript:;
          - generic [ref=e281]:
            - text: Xem tất cả bài viết
            - img [ref=e282]
    - generic [ref=e285]:
      - generic [ref=e286]:
        - generic [ref=e287]:
          - link "Lorem Ipsum" [ref=e288] [cursor=pointer]:
            - /url: https://code6.mimadigi.vn/2026/september/phuongvinh_115626w/
            - img "Lorem Ipsum" [ref=e289]
          - generic [ref=e290]:
            - link "Facebook" [ref=e291] [cursor=pointer]:
              - /url: ""
            - link "Message" [ref=e292] [cursor=pointer]:
              - /url: ""
            - link "Instargam" [ref=e293] [cursor=pointer]:
              - /url: ""
            - link "Tiktok" [ref=e294] [cursor=pointer]:
              - /url: https://vt.tiktok.com/ZS9nuW1De/
            - link "Youtobe" [ref=e295] [cursor=pointer]:
              - /url: ""
            - link "Shoppee" [ref=e296] [cursor=pointer]:
              - /url: https://s.shopee.vn/2LO7k4zLQF
        - generic [ref=e297]:
          - generic [ref=e298]: Thông tin liên hệ
          - paragraph [ref=e300]: "Chi nhánh 2 Công ty TNHH Cung Ứng Nội Thất Hân Di - Mã số chi nhánh: 0315524871-002 - Ngày cấp: 24/11/2022 - Địa chỉ: 314 Trần Thị Năm, Khu phố 9, Phường Trung Mỹ Tây, Thành phố Hồ Chí Minh, Việt Nam - Người đại diện theo pháp luật: Ngô Kim Sang - Điện thoại: 0934004552"
        - generic [ref=e301]:
          - generic [ref=e302]: Về Phượng Vinh
          - list [ref=e303]:
            - listitem [ref=e304]:
              - link "Trang chủ" [ref=e305] [cursor=pointer]:
                - /url: https://code6.mimadigi.vn/2026/september/phuongvinh_115626w/
            - listitem [ref=e306]:
              - link "Về chúng tôi" [ref=e307] [cursor=pointer]:
                - /url: gioi-thieu
            - listitem [ref=e308]:
              - link "Thông tin" [ref=e309] [cursor=pointer]:
                - /url: tin-tuc
            - listitem [ref=e310]:
              - link "Album" [ref=e311] [cursor=pointer]:
                - /url: thu-vien-anh
            - listitem [ref=e312]:
              - link "Về CEO" [ref=e313] [cursor=pointer]:
                - /url: ve-ceo
            - listitem [ref=e314]:
              - link "Liên hệ" [ref=e315] [cursor=pointer]:
                - /url: lien-he
        - generic [ref=e316]:
          - generic [ref=e317]: Dịch vụ
          - list [ref=e318]:
            - listitem [ref=e319]:
              - link "Dịch vụ ly hôn" [ref=e320] [cursor=pointer]:
                - /url: dich-vu-ly-hon
            - listitem [ref=e321]:
              - link "Pháp lý văn bản" [ref=e322] [cursor=pointer]:
                - /url: phap-ly-van-ban
            - listitem [ref=e323]:
              - link "Tư vấn pháp luật" [ref=e324] [cursor=pointer]:
                - /url: tu-van-phap-luat
            - listitem [ref=e325]:
              - link "Pháp nhân đại diện" [ref=e326] [cursor=pointer]:
                - /url: phap-nhan-dai-dien
            - listitem [ref=e327]:
              - link "Thành lập cty hộ Kinh doanh" [ref=e328] [cursor=pointer]:
                - /url: thanh-lap-cty-ho-kinh-doanh
            - listitem [ref=e329]:
              - link "Soạn thảo văn bản Review hợp đồng" [ref=e330] [cursor=pointer]:
                - /url: soan-thao-van-ban-review-hop-dong
      - generic [ref=e331]:
        - generic [ref=e332]:
          - generic [ref=e333]: CÔNG TY LUẬT TRÁCH NHIỆM HỮU HẠN MỘT THÀNH VIÊN PHƯỢNG VINH
          - generic [ref=e334]:
            - text: MST 3604083212 cấp ngày 06/02/2026 cấp bởi Sở Tư Pháp TP Đồng Nai
            - text: Bản quyền thuộc về Phượng Vinh ©2026. Thiết kế web MIMA.
        - generic [ref=e335]:
          - generic [ref=e336]: Hỗ trợ khách hàng
          - list [ref=e337]:
            - listitem [ref=e338]:
              - link "Câu hỏi thường gặp" [ref=e339] [cursor=pointer]:
                - /url: cau-hoi-thuong-gap
            - listitem [ref=e340]:
              - link "Chính sách & Điều khoản" [ref=e341] [cursor=pointer]:
                - /url: chinh-sach-dieu-khoan
        - generic [ref=e342]:
          - generic [ref=e343]: Giờ làm việc
          - list [ref=e344]:
            - listitem [ref=e345]: T2 - CN, 8:00 đến 17:30
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
              - generic: "80"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 80/100
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
          - generic: "20"
          - generic: Tổng tiêu chí
        - generic:
          - generic: ✅ 16
          - generic: Đạt
        - generic:
          - generic: ❌ 4
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: /index.php
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e346]:
      - generic [ref=e347]: "❌ Chi tiết lỗi cần khắc phục (4/20):"
      - generic [ref=e348]:
        - generic [ref=e349]:
          - generic [ref=e350]: 1. Thẻ Title
          - generic [ref=e351]: 1 lỗi
        - generic [ref=e352]:
          - strong [ref=e354]: "Title phải có nội dung (hiện tại: 0 ký tự)"
          - generic [ref=e355]: ⚠️ Title tag không tồn tại hoặc rỗng!
      - generic [ref=e356]:
        - generic [ref=e357]:
          - generic [ref=e358]: 8. Tốc độ & Core Web Vitals
          - generic [ref=e359]: 3 lỗi
        - generic [ref=e360]:
          - strong [ref=e362]: "[📱 MOBILE (ƯU TIÊN)] Tổng điểm Performance: 41/100 (≥ 60)"
          - generic [ref=e363]: ⚠️ [📱 MOBILE (ƯU TIÊN)] Điểm Performance 41/100 dưới ngưỡng 60. Phân tích chi tiết LCP/CLS/INP bên dưới...
        - generic [ref=e364]:
          - strong [ref=e366]: "[📱 MOBILE (ƯU TIÊN)] LCP (Largest Contentful Paint): 13816ms (< 2500ms)"
          - generic [ref=e367]:
            - text: "⚠️ [📱 MOBILE (ƯU TIÊN)] LCP quá cao: 13816ms (chuẩn: < 2.5s) → Thủ phạm LCP:"
            - strong [ref=e369]: "[📱 MOBILE (ƯU TIÊN)] CLS (Cumulative Layout Shift): 0.311 (< 0.1)"
            - generic [ref=e370]:
              - text: "⚠️ [📱 MOBILE (ƯU TIÊN)] CLS quá cao: 0.311 (chuẩn: < 0.1) → Thủ phạm CLS: -"
              - generic [ref=e371]: "[Vấn đề]: Các phần tử (không phải ảnh có sẵn width/height rõ rà..."
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 80/100 dưới ngưỡng 96%. Có 4/20 tiêu chí không đạt.
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