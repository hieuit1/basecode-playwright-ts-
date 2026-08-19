# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: https://code5.mimadigi.vn/2026/august/trancongvinh_111726W/ (/index.php)
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
    - generic [ref=e45]:
      - button "Previous" [ref=e46] [cursor=pointer]: ←Previous
      - listbox [ref=e48]:
        - option [ref=e49]:
          - link [ref=e50] [cursor=pointer]:
            - /url: ""
            - img [ref=e52]
        - option "Viên Mộc Decor - Thiết Kế Bàn Trà Đạo" [ref=e53]:
          - link "Viên Mộc Decor - Thiết Kế Bàn Trà Đạo" [ref=e54] [cursor=pointer]:
            - /url: ""
            - img "Viên Mộc Decor - Thiết Kế Bàn Trà Đạo" [ref=e56]
        - option [ref=e57]:
          - link [ref=e58] [cursor=pointer]:
            - /url: ""
            - img [ref=e60]
        - option [ref=e61]:
          - link [ref=e62] [cursor=pointer]:
            - /url: ""
            - img [ref=e64]
      - button "Next" [ref=e65] [cursor=pointer]: →Next
    - generic [ref=e66]:
      - generic [ref=e67]:
        - generic [ref=e70]:
          - generic [ref=e71]: Về Thương Hiệu Viên Mộc
          - heading "Chạm Khắc Không Gian Tinh Hoa" [level=2] [ref=e73]
          - generic [ref=e74]:
            - paragraph [ref=e75]: "\"Tại Viên Mộc, chúng tôi tin rằng bàn trà không chỉ là một món nội thất, mà là 'trái tim' kết nối những khoảng lặng bình yên trong tâm hồn. Lấy cảm hứng từ chất liệu gỗ tự nhiên bền bỉ và triết lý Wabi-Sabi tinh tế, mỗi sản phẩm bàn trà đạo của Viên Mộc đều được chế tác thủ công tỉ mỉ, mang lại vẻ đẹp nguyên bản và không gian thưởng trà chuẩn mực cho ngôi nhà bạn.\""
            - paragraph [ref=e76]: "\"Tại Viên Mộc, chúng tôi tin rằng bàn trà không chỉ là một món nội thất, mà là 'trái tim' kết nối những khoảng lặng bình yên trong tâm hồn. Lấy cảm hứng từ chất liệu gỗ tự nhiên bền bỉ và triết lý Wabi-Sabi tinh tế, mỗi sản phẩm bàn trà đạo của Viên Mộc đều được chế tác thủ công tỉ mỉ, mang lại vẻ đẹp nguyên bản và không gian thưởng trà chuẩn mực cho ngôi nhà bạn.\""
            - paragraph [ref=e77]
            - paragraph [ref=e78]
          - link "Tìm hiểu câu chuyện" [ref=e79] [cursor=pointer]:
            - /url: ve-vien-moc
            - img [ref=e81]
            - generic [ref=e84]: Tìm hiểu câu chuyện
        - img "Chạm Khắc Không Gian Tinh Hoa" [ref=e86]
      - generic [ref=e88]:
        - generic [ref=e89]: BỘ SƯU TẬP & DỰ ÁN
        - heading "Không Gian Trà Đạo" [level=2] [ref=e91]
        - generic [ref=e92]:
          - generic [ref=e93]:
            - generic:
              - paragraph:
                - link "du-an-phong-tra-10":
                  - /url: du-an-phong-tra-10
              - generic:
                - heading "du-an-phong-tra-10" [level=3]:
                  - link "du-an-phong-tra-10":
                    - /url: du-an-phong-tra-10
          - generic [ref=e94]:
            - generic:
              - paragraph:
                - link "Dự án phòng trà 1":
                  - /url: du-an-phong-tra-1
              - generic:
                - heading "Dự án phòng trà 1" [level=3]:
                  - link "Dự án phòng trà 1":
                    - /url: du-an-phong-tra-1
          - generic [ref=e95]:
            - generic:
              - paragraph:
                - link "Dự án phong trà 2":
                  - /url: du-an-phong-tra-2
              - generic:
                - heading "Dự án phong trà 2" [level=3]:
                  - link "Dự án phong trà 2":
                    - /url: du-an-phong-tra-2
          - generic [ref=e96]:
            - generic:
              - paragraph:
                - link "Dự án phòng trà 3":
                  - /url: du-an-phong-tra-3
              - generic:
                - heading "Dự án phòng trà 3" [level=3]:
                  - link "Dự án phòng trà 3":
                    - /url: du-an-phong-tra-3
          - generic [ref=e97]:
            - generic:
              - paragraph:
                - link "Dự án phòng trà 4":
                  - /url: du-an-phong-tra-4
              - generic:
                - heading "Dự án phòng trà 4" [level=3]:
                  - link "Dự án phòng trà 4":
                    - /url: du-an-phong-tra-4
          - generic [ref=e98]:
            - generic:
              - paragraph:
                - link "Dự án phòng trà 5":
                  - /url: du-an-phong-tra-5
              - generic:
                - heading "Dự án phòng trà 5" [level=3]:
                  - link "Dự án phòng trà 5":
                    - /url: du-an-phong-tra-5
        - link "Xem tất cả các dự án" [ref=e100] [cursor=pointer]:
          - /url: du-an
          - img [ref=e102]
          - generic [ref=e105]: Xem tất cả các dự án
      - generic [ref=e107]:
        - generic [ref=e108]: GIẢI PHÁP KHÔNG GIAN
        - heading "Nâng Tầm Không Gian Thưởng Trà" [level=2] [ref=e110]
        - generic [ref=e113]:
          - generic [ref=e115]:
            - link "Thiết kế phòng trà đạo" [ref=e116] [cursor=pointer]:
              - /url: thiet-ke-phong-tra-dao
            - heading "Thiết kế phòng trà đạo" [level=3] [ref=e117]:
              - link "Thiết kế phòng trà đạo" [ref=e118] [cursor=pointer]:
                - /url: thiet-ke-phong-tra-dao
          - generic [ref=e120]:
            - link "Thi công & Chế tác mộc" [ref=e121] [cursor=pointer]:
              - /url: thi-cong-che-tac-moc
            - heading "Thi công & Chế tác mộc" [level=3] [ref=e122]:
              - link "Thi công & Chế tác mộc" [ref=e123] [cursor=pointer]:
                - /url: thi-cong-che-tac-moc
          - generic [ref=e125]:
            - link "Thi công cảnh quan sân vườn" [ref=e126] [cursor=pointer]:
              - /url: canh-quan-san-vuon
            - heading "Thi công cảnh quan sân vườn" [level=3] [ref=e127]:
              - link "Thi công cảnh quan sân vườn" [ref=e128] [cursor=pointer]:
                - /url: canh-quan-san-vuon
          - generic [ref=e130]:
            - link "Thiết kế phòng trà đạo" [ref=e131] [cursor=pointer]:
              - /url: thiet-ke-phong-tra-dao
            - heading "Thiết kế phòng trà đạo" [level=3] [ref=e132]:
              - link "Thiết kế phòng trà đạo" [ref=e133] [cursor=pointer]:
                - /url: thiet-ke-phong-tra-dao
          - generic [ref=e135]:
            - link "Thi công & Chế tác mộc" [ref=e136] [cursor=pointer]:
              - /url: thi-cong-che-tac-moc
            - heading "Thi công & Chế tác mộc" [level=3] [ref=e137]:
              - link "Thi công & Chế tác mộc" [ref=e138] [cursor=pointer]:
                - /url: thi-cong-che-tac-moc
          - generic [ref=e140]:
            - link "Thi công cảnh quan sân vườn" [ref=e141] [cursor=pointer]:
              - /url: canh-quan-san-vuon
            - heading "Thi công cảnh quan sân vườn" [level=3] [ref=e142]:
              - link "Thi công cảnh quan sân vườn" [ref=e143] [cursor=pointer]:
                - /url: canh-quan-san-vuon
          - generic [ref=e145]:
            - link "Thiết kế phòng trà đạo" [ref=e146] [cursor=pointer]:
              - /url: thiet-ke-phong-tra-dao
            - heading "Thiết kế phòng trà đạo" [level=3] [ref=e147]:
              - link "Thiết kế phòng trà đạo" [ref=e148] [cursor=pointer]:
                - /url: thiet-ke-phong-tra-dao
        - link "Xem tất cả dịch vụ trọn gói" [ref=e150] [cursor=pointer]:
          - /url: dich-vu
          - img [ref=e152]
          - generic [ref=e155]: Xem tất cả dịch vụ trọn gói
      - generic [ref=e157]:
        - generic [ref=e158]: GÓC THƯỞNG TRÀ
        - heading "Kiến Thức & Văn Hóa Trà Đạo" [level=2] [ref=e160]
        - generic [ref=e161]:
          - generic:
            - 'link "Đặc Quyền Của Sự Bình Yên: Nghệ Thuật Bài Trí Phòng Trà Tại Gia"':
              - /url: dac-quyen-cua-su-binh-yen-nghe-thuat-bai-tri-phong-tra-tai-gia
              - 'heading "Đặc Quyền Của Sự Bình Yên: Nghệ Thuật Bài Trí Phòng Trà Tại Gia" [level=2]'
          - generic:
            - generic:
              - generic:
                - link "Cách Chọn Chất Liệu Gỗ Cho Bàn Trà Đạo Trường Tồn":
                  - /url: cach-chon-chat-lieu-go-cho-ban-tra-dao-truong-ton
                  - heading "Cách Chọn Chất Liệu Gỗ Cho Bàn Trà Đạo Trường Tồn" [level=2]:
                    - generic: Cách Chọn Chất Liệu Gỗ Cho Bàn Trà Đạo Trường Tồn
              - generic:
                - link "Triết Lý Wabi-Sabi Trong Thiết Kế Nội Thất Phòng Trà Hiện Đại":
                  - /url: triet-ly-wabi-sabi-trong-thiet-ke-noi-that-phong-tra-hien-dai
                  - heading "Triết Lý Wabi-Sabi Trong Thiết Kế Nội Thất Phòng Trà Hiện Đại" [level=2]:
                    - generic: Triết Lý Wabi-Sabi Trong Thiết Kế Nội Thất Phòng Trà Hiện Đại
              - generic:
                - link "Nghệ Thuật Chọn Ấm Chén & Phụ Kiện Hài Hòa Với Bàn":
                  - /url: nghe-thuat-chon-am-chen-phu-kien-hai-hoa-voi-ban
                  - heading "Nghệ Thuật Chọn Ấm Chén & Phụ Kiện Hài Hòa Với Bàn" [level=2]:
                    - generic: Nghệ Thuật Chọn Ấm Chén & Phụ Kiện Hài Hòa Với Bàn
              - generic:
                - link "Hướng Dẫn Bảo Quản & Chăm Sóc Bàn Trà Gỗ Tự Nhiên":
                  - /url: huong-dan-bao-quan-cham-soc-ban-tra-go-tu-nhien
                  - heading "Hướng Dẫn Bảo Quản & Chăm Sóc Bàn Trà Gỗ Tự Nhiên" [level=2]:
                    - generic: Hướng Dẫn Bảo Quản & Chăm Sóc Bàn Trà Gỗ Tự Nhiên
        - link "Xem tất cả tin tức" [ref=e163] [cursor=pointer]:
          - /url: tin-tuc
          - img [ref=e165]
          - generic [ref=e168]: Xem tất cả tin tức
      - generic [ref=e170]:
        - generic [ref=e171]: CẢM NHẬN KHÁCH HÀNG
        - heading "Khách Hàng Nói Gì Về Viên Mộc" [level=2] [ref=e173]
        - generic [ref=e176]:
          - generic [ref=e178]:
            - generic [ref=e180]: Đến với Viên Mộc, tôi hoàn toàn bị chinh phục bởi độ hoàn thiện tỉ mỉ và cái 'hồn' trong từng đường nét."
            - generic [ref=e181]:
              - heading "Anh Trần Quốc Minh" [level=3] [ref=e182]
              - paragraph [ref=e183]: Chủ căn biệt thự tại KĐT Vinhomes
          - generic [ref=e185]:
            - generic [ref=e187]: Viên Mộc đã thiết kế cho tôi một không gian phòng trà Wabi-Sabi cực kỳ tĩnh lặng, giúp tôi luôn tìm lại sự cân bằng sau mỗi ngày làm việc căng thẳng."
            - generic [ref=e188]:
              - heading "Chị Nguyễn Thu Thảo" [level=3] [ref=e189]
              - paragraph [ref=e190]: Sưu tầm trà & Chủ nhân Tiệm Trà An
          - generic [ref=e192]:
            - generic [ref=e194]: Điểm tôi ưng ý nhất ở Viên Mộc là chất lượng gỗ tự nhiên cao cấp, xử lý chống mối mọt cong vênh rất tốt cùng sự tận tâm của các nghệ nhân.
            - generic [ref=e195]:
              - heading "Bác Hoàng Kim Long" [level=3] [ref=e196]
              - paragraph [ref=e197]: Thành viên Hội Trà Đạo
      - generic [ref=e199]:
        - generic [ref=e200]: ĐỐI TÁC
        - heading "Đồng hành cùng viên mộc" [level=2] [ref=e202]
        - generic [ref=e205]:
          - link [ref=e207] [cursor=pointer]:
            - /url: ""
          - link [ref=e210] [cursor=pointer]:
            - /url: ""
          - link [ref=e213] [cursor=pointer]:
            - /url: ""
          - link [ref=e216] [cursor=pointer]:
            - /url: ""
          - link [ref=e219] [cursor=pointer]:
            - /url: ""
          - link [ref=e222] [cursor=pointer]:
            - /url: ""
          - link [ref=e225] [cursor=pointer]:
            - /url: ""
          - link [ref=e228] [cursor=pointer]:
            - /url: ""
          - link [ref=e231] [cursor=pointer]:
            - /url: ""
          - link [ref=e234] [cursor=pointer]:
            - /url: ""
      - generic [ref=e239]:
        - paragraph [ref=e240]: "\"Tại Viên Mộc, chúng tôi tin rằng bàn trà không chỉ là một món nội thất, mà là 'trái tim' kết nối những khoảng lặng bình yên trong tâm hồn. Lấy cảm hứng từ chất liệu gỗ tự nhiên bền bỉ và triết lý Wabi-Sabi tinh tế, mỗi sản phẩm bàn trà đạo của Viên Mộc đều được chế tác thủ công tỉ mỉ, mang lại vẻ đẹp nguyên bản và không gian thưởng trà chuẩn mực cho ngôi nhà bạn.\"\"Tại Viên Mộc, chúng tôi tin rằng bàn trà không chỉ là một món nội thất, mà là 'trái tim' kết nối những khoảng lặng bình yên trong tâm hồn. Lấy cảm hứng từ chất liệu gỗ tự nhiên bền bỉ và triết lý Wabi-Sabi tinh tế, mỗi sản phẩm bàn trà đạo của Viên Mộc đều được chế tác thủ công tỉ mỉ, mang lại vẻ đẹp nguyên bản và không gian thưởng trà chuẩn mực cho ngôi nhà bạn.\"\"Tại Viên Mộc, chúng tôi tin rằng bàn trà không chỉ là một món nội thất, mà là 'trái tim' kết nối những khoảng lặng bình yên trong tâm hồn. Lấy cảm hứng từ chất liệu gỗ tự nhiên bền bỉ và triết lý Wabi-Sabi tinh tế, mỗi sản phẩm bàn trà đạo của Viên Mộc đều được chế tác thủ công tỉ mỉ, mang lại vẻ đẹp nguyên bản và không gian thưởng trà chuẩn mực cho ngôi nhà bạn.\""
        - paragraph [ref=e241]: "\"Tại Viên Mộc, chúng tôi tin rằng bàn trà không chỉ là một món nội thất, mà là 'trái tim' kết nối những khoảng lặng bình yên trong tâm hồn. Lấy cảm hứng từ chất liệu gỗ tự nhiên bền bỉ và triết lý Wabi-Sabi tinh tế, mỗi sản phẩm bàn trà đạo của Viên Mộc đều được chế tác thủ công tỉ mỉ, mang lại vẻ đẹp nguyên bản và không gian thưởng trà chuẩn mực cho ngôi nhà bạn.\"\"Tại Viên Mộc, chúng tôi tin rằng bàn trà không chỉ là một món nội thất, mà là 'trái tim' kết nối những khoảng lặng bình yên trong tâm hồn. Lấy cảm hứng từ chất liệu gỗ tự nhiên bền bỉ và triết lý Wabi-Sabi tinh tế, mỗi sản phẩm bàn trà đạo của Viên Mộc đều được chế tác thủ công tỉ mỉ, mang lại vẻ đẹp nguyên bản và không gian thưởng trà chuẩn mực cho ngôi nhà bạn.\"\"Tại Viên Mộc, chúng tôi tin rằng bàn trà không chỉ là một món nội thất, mà là 'trái tim' kết nối những khoảng lặng bình yên trong tâm hồn. Lấy cảm hứng từ chất liệu gỗ tự nhiên bền bỉ và triết lý Wabi-Sabi tinh tế, mỗi sản phẩm bàn trà đạo của Viên Mộc đều được chế tác thủ công tỉ mỉ, mang lại vẻ đẹp nguyên bản và không gian thưởng trà chuẩn mực cho ngôi nhà bạn.\""
        - paragraph [ref=e242]: "\"Tại Viên Mộc, chúng tôi tin rằng bàn trà không chỉ là một món nội thất, mà là 'trái tim' kết nối những khoảng lặng bình yên trong tâm hồn. Lấy cảm hứng từ chất liệu gỗ tự nhiên bền bỉ và triết lý Wabi-Sabi tinh tế, mỗi sản phẩm bàn trà đạo của Viên Mộc đều được chế tác thủ công tỉ mỉ, mang lại vẻ đẹp nguyên bản và không gian thưởng trà chuẩn mực cho ngôi nhà bạn.\"\"Tại Viên Mộc, chúng tôi tin rằng bàn trà không chỉ là một món nội thất, mà là 'trái tim' kết nối những khoảng lặng bình yên trong tâm hồn. Lấy cảm hứng từ chất liệu gỗ tự nhiên bền bỉ và triết lý Wabi-Sabi tinh tế, mỗi sản phẩm bàn trà đạo của Viên Mộc đều được chế tác thủ công tỉ mỉ, mang lại vẻ đẹp nguyên bản và không gian thưởng trà chuẩn mực cho ngôi nhà bạn.\"\"Tại Viên Mộc, chúng tôi tin rằng bàn trà không chỉ là một món nội thất, mà là 'trái tim' kết nối những khoảng lặng bình yên trong tâm hồn. Lấy cảm hứng từ chất liệu gỗ tự nhiên bền bỉ và triết lý Wabi-Sabi tinh tế, mỗi sản phẩm bàn trà đạo của Viên Mộc đều được chế tác thủ công tỉ mỉ, mang lại vẻ đẹp nguyên bản và không gian thưởng trà chuẩn mực cho ngôi nhà bạn.\""
        - paragraph [ref=e243]: "\"Tại Viên Mộc, chúng tôi tin rằng bàn trà không chỉ là một món nội thất, mà là 'trái tim' kết nối những khoảng lặng bình yên trong tâm hồn. Lấy cảm hứng từ chất liệu gỗ tự nhiên bền bỉ và triết lý Wabi-Sabi tinh tế, mỗi sản phẩm bàn trà đạo của Viên Mộc đều được chế tác thủ công tỉ mỉ, mang lại vẻ đẹp nguyên bản và không gian thưởng trà chuẩn mực cho ngôi nhà bạn.\"\"Tại Viên Mộc, chúng tôi tin rằng bàn trà không chỉ là một món nội thất, mà là 'trái tim' kết nối những khoảng lặng bình yên trong tâm hồn. Lấy cảm hứng từ chất liệu gỗ tự nhiên bền bỉ và triết lý Wabi-Sabi tinh tế, mỗi sản phẩm bàn trà đạo của Viên Mộc đều được chế tác thủ công tỉ mỉ, mang lại vẻ đẹp nguyên bản và không gian thưởng trà chuẩn mực cho ngôi nhà bạn.\"\"Tại Viên Mộc, chúng tôi tin rằng bàn trà không chỉ là một món nội thất, mà là 'trái tim' kết nối những khoảng lặng bình yên trong tâm hồn. Lấy cảm hứng từ chất liệu gỗ tự nhiên bền bỉ và triết lý Wabi-Sabi tinh tế, mỗi sản phẩm bàn trà đạo của Viên Mộc đều được chế tác thủ công tỉ mỉ, mang lại vẻ đẹp nguyên bản và không gian thưởng trà chuẩn mực cho ngôi nhà bạn.\""
        - link "Xem thêm bài viết" [ref=e246] [cursor=pointer]:
          - /url: javascript:;
          - img [ref=e248]
          - generic [ref=e251]: Xem thêm bài viết
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
    - generic [ref=e252]:
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
      - generic [ref=e256]:
        - text: Copyright ©2026 Viên Mộc. All Right Reserved.
        - generic [ref=e257]: Thiết kế web MIMA
    - generic [ref=e258]:
      - 'link "Call me: 0938830339" [ref=e259] [cursor=pointer]':
        - /url: tel:0938830339
        - img [ref=e263]
        - generic [ref=e266]: "Call me: 0938830339"
      - 'link "Zalo: 0902555933" [ref=e267] [cursor=pointer]':
        - /url: https://zalo.me/0902555933
        - img [ref=e271]
        - generic [ref=e272]: "Zalo: 0902555933"
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
          - strong: https://code5.mimadigi.vn/2026/august/trancongvinh_111726W/
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e273]:
      - generic [ref=e274]: "❌ Chi tiết lỗi cần khắc phục (4/21):"
      - generic [ref=e275]:
        - generic [ref=e276]:
          - generic [ref=e277]: 1. Thẻ Title
          - generic [ref=e278]: 1 lỗi
        - generic [ref=e279]:
          - strong [ref=e281]: "Title phải có nội dung (hiện tại: 0 ký tự)"
          - generic [ref=e282]: ⚠️ Title tag không tồn tại hoặc rỗng!
      - generic [ref=e283]:
        - generic [ref=e284]:
          - generic [ref=e285]: 6. Liên kết (Links)
          - generic [ref=e286]: 1 lỗi
        - generic [ref=e287]:
          - strong [ref=e289]: "Không có broken links (lỗi: 2/31)"
          - generic [ref=e290]: "⚠️ Broken links: http://vienmoc79@gmail.com (status: 0), http://www.xuonggonoithatsaigon.com (status: 0)"
      - generic [ref=e291]:
        - generic [ref=e292]:
          - generic [ref=e293]: 8. Tốc độ & Core Web Vitals
          - generic [ref=e294]: 2 lỗi
        - generic [ref=e295]:
          - strong [ref=e297]: "[📱 MOBILE (ƯU TIÊN)] Tổng điểm Performance: 56/100 (≥ 60)"
          - generic [ref=e298]: ⚠️ [📱 MOBILE (ƯU TIÊN)] Điểm Performance 56/100 dưới ngưỡng 60. Phân tích chi tiết LCP/CLS/INP bên dưới...
        - generic [ref=e299]:
          - strong [ref=e301]: "[📱 MOBILE (ƯU TIÊN)] LCP (Largest Contentful Paint): 10283ms (< 2500ms)"
          - generic [ref=e302]: "⚠️ [📱 MOBILE (ƯU TIÊN)] LCP quá cao: 10283ms (chuẩn: < 2.5s) → Thủ phạm LCP:"
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