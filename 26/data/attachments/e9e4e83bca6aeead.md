# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Về chúng tôi (/gioi-thieu)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 91/100 dưới ngưỡng 96%. Có 2/22 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]: Bền bỉ mọi cung đường
      - img "Lorem Ipsum" [ref=e6]
      - generic [ref=e7]: Bền bỉ mọi cung đường
      - img "Lorem Ipsum" [ref=e8]
      - generic [ref=e9]: Bền bỉ mọi cung đường
      - img "Lorem Ipsum" [ref=e10]
      - generic [ref=e11]: Bền bỉ mọi cung đường
      - img "Lorem Ipsum" [ref=e12]
      - generic [ref=e13]: Bền bỉ mọi cung đường
      - img "Lorem Ipsum" [ref=e14]
      - generic [ref=e15]: Bền bỉ mọi cung đường
      - img "Lorem Ipsum" [ref=e16]
      - generic [ref=e17]: Bền bỉ mọi cung đường
      - img "Lorem Ipsum" [ref=e18]
      - generic [ref=e19]: Bền bỉ mọi cung đường
      - img "Lorem Ipsum" [ref=e20]
      - generic [ref=e21]: Bền bỉ mọi cung đường
      - img "Lorem Ipsum" [ref=e22]
      - generic [ref=e23]: Bền bỉ mọi cung đường
      - img "Lorem Ipsum" [ref=e24]
    - generic [ref=e27]:
      - link "Lorem Ipsum" [ref=e28] [cursor=pointer]:
        - /url: https://code4.mimadigi.vn/2026/august/buivanquy_111126W/
        - img "Lorem Ipsum" [ref=e29]
      - list [ref=e30]:
        - listitem [ref=e31]:
          - link "Trang chủ" [ref=e32] [cursor=pointer]:
            - /url: https://code4.mimadigi.vn/2026/august/buivanquy_111126W/
        - listitem [ref=e33]:
          - link "Giới thiệu" [ref=e34] [cursor=pointer]:
            - /url: gioi-thieu
        - listitem [ref=e35]:
          - link "Dịch vụ" [ref=e36] [cursor=pointer]:
            - /url: dich-vu
        - listitem [ref=e37]:
          - link "Dự án" [ref=e38] [cursor=pointer]:
            - /url: du-an
        - listitem [ref=e39]:
          - link "Tin tức" [ref=e40] [cursor=pointer]:
            - /url: tin-tuc
        - listitem [ref=e41]:
          - link "Liên hệ" [ref=e42] [cursor=pointer]:
            - /url: lien-he
      - generic [ref=e44]:
        - textbox "Tìm" [ref=e45]
        - button "Tìm kiếm" [ref=e46] [cursor=pointer]:
          - img [ref=e47]
      - link "0888080138" [ref=e48] [cursor=pointer]:
        - /url: tel:0888080138
        - img [ref=e50]
        - generic [ref=e53]: "0888080138"
    - img "Lorem Ipsum" [ref=e55]
    - list [ref=e58]:
      - listitem [ref=e59]:
        - link "Trang chủ" [ref=e60] [cursor=pointer]:
          - /url: https://code4.mimadigi.vn/2026/august/buivanquy_111126W/
          - img [ref=e61]
          - generic [ref=e63]: Trang chủ
      - listitem [ref=e64]:
        - text: /
        - link "Về chúng tôi" [ref=e65] [cursor=pointer]:
          - /url: https://code4.mimadigi.vn/2026/august/buivanquy_111126W/gioi-thieu
    - generic [ref=e66]:
      - generic [ref=e68]:
        - generic [ref=e69]:
          - img
          - generic [ref=e70]:
            - generic [ref=e71]:
              - generic [ref=e72]: ★
              - text: VỀ CHÚNG TÔI
            - heading "Lorem Ipsum là gì?" [level=2] [ref=e73]
            - paragraph [ref=e75]:
              - strong [ref=e76]: Lorem Ipsum
              - text: chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng trong các ứng dụng dàn trang, như Aldus PageMaker.
          - img "Lorem Ipsum là gì?" [ref=e79]
        - generic [ref=e82]:
          - paragraph [ref=e83]:
            - strong [ref=e84]: Lorem Ipsum
            - text: chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng trong các ứng dụng dàn trang, như Aldus PageMaker.
            - strong [ref=e85]: Lorem Ipsum
            - text: chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng trong các ứng dụng dàn trang, như Aldus PageMaker.
            - strong [ref=e86]: Lorem Ipsum
            - text: chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng trong các ứng dụng dàn trang, như Aldus PageMaker.
            - strong [ref=e87]: Lorem Ipsum
            - text: chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng trong các ứng dụng dàn trang, như Aldus PageMaker.
          - link "Xem thêm bài viết" [ref=e90] [cursor=pointer]:
            - /url: javascript:;
            - generic [ref=e91]:
              - text: Xem thêm bài viết
              - img [ref=e92]
      - generic [ref=e96]:
        - generic:
          - heading "Tầm Nhìn" [level=3]
          - generic:
            - heading "Dẫn đầu chuyển đổi số – Nâng tầm thương hiệu Việt" [level=3]:
              - strong: Dẫn đầu chuyển đổi số – Nâng tầm thương hiệu Việt
            - paragraph: MIMA Digi hướng đến trở thành thương hiệu Việt dẫn đầu trong lĩnh vực công nghệ số và marketing toàn diện, là biểu tượng sáng tạo trong thiết kế website và chuyển đổi số. Chúng tôi nỗ lực tạo dựng giá trị bền vững cho doanh nghiệp thông qua các giải pháp số hóa toàn diện, giúp doanh nghiệp Việt vươn tầm quốc tế.
      - generic [ref=e99]:
        - generic:
          - heading "Sứ mệnh" [level=3]
          - generic:
            - heading "Kiến tạo giải pháp số – Gia tăng giá trị bền vững" [level=3]:
              - strong: Kiến tạo giải pháp số – Gia tăng giá trị bền vững
            - paragraph: MIMA Digi không chỉ thiết kế website mà còn kiến tạo giải pháp số toàn diện, giúp doanh nghiệp vận hành, quảng bá và kinh doanh hiệu quả trong môi trường trực tuyến. Chúng tôi mang công nghệ đến gần hơn với doanh nghiệp Việt, bằng dịch vụ chuẩn SEO, marketing thông minh và hạ tầng số ổn định, hướng đến hiệu quả thực tế và giá trị lâu dài.
      - generic [ref=e101]:
        - generic:
          - heading "GIÁ TRỊ CỐT LÕI" [level=2]:
            - img
            - generic: GIÁ TRỊ CỐT LÕI
            - img
        - generic [ref=e102]:
          - generic:
            - generic:
              - generic: "01"
              - generic:
                - heading "Uy Tín" [level=3]
                - paragraph: Luôn giữ cam kết về chất lượng và tiến độ dịch vụ.
            - generic:
              - generic: "02"
              - generic:
                - heading "Chất Lượng" [level=3]
                - paragraph: Đảm bảo mọi hạng mục được thực hiện đúng tiêu chuẩn kỹ thuật.
            - generic:
              - generic: "03"
              - generic:
                - heading "Tận Tâm" [level=3]
                - paragraph: Lắng nghe, tư vấn và phục vụ khách hàng với sự tận tình.
          - generic:
            - generic:
              - generic: "04"
              - generic:
                - heading "Minh Bạch" [level=3]
                - paragraph: Luôn giữ cam kết về chất lượng và tiến độ dịch vụ.
            - generic:
              - generic: "05"
              - generic:
                - heading "Chuyên Nghiệp" [level=3]
                - paragraph: Đảm bảo mọi hạng mục được thực hiện đúng tiêu chuẩn kỹ thuật.
            - generic:
              - generic: "06"
              - generic:
                - heading "Trách Nhiệm" [level=3]
                - paragraph: Lắng nghe, tư vấn và phục vụ khách hàng với sự tận tình.
      - generic [ref=e104]:
        - generic:
          - heading "LỊCH SỬ HÌNH THÀNH" [level=2]:
            - img
            - generic: LỊCH SỬ HÌNH THÀNH
            - img
        - generic:
          - generic:
            - listbox:
              - option "2023":
                - generic: "2023"
              - option "2023-2024":
                - generic: 2023-2024
              - option "2024":
                - generic: "2024"
              - option "2025":
                - generic: "2025"
              - option "2026":
                - generic: "2026"
        - listbox [ref=e107]:
          - generic [ref=e109]:
            - generic:
              - generic:
                - img
            - generic:
              - generic: Không có ai muốn khổ đau cho chính mình
              - generic:
                - paragraph: Trích đoạn chuẩn của Lorem Ipsum được sử dụng từ thế kỉ thứ 16 và được tái bản sau đó cho những người quan tâm đến nó. Đoạn 1.10.32 và 1.10.33 trong cuốn "De Finibus Bonorum et Malorum" của Cicero cũng được tái bản lại theo đúng cấu trúc gốc, kèm theo phiên bản tiếng Anh được dịch bởi H. Rackham vào năm 1914.
          - option "Lorem Ipsum là gì? Lorem Ipsum là gì? Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng trong các ứng dụng dàn trang, như Aldus PageMaker." [ref=e110]:
            - generic [ref=e111]:
              - generic:
                - generic:
                  - img "Lorem Ipsum là gì?"
              - generic:
                - generic: Lorem Ipsum là gì?
                - generic:
                  - paragraph:
                    - strong: Lorem Ipsum
                    - text: chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng trong các ứng dụng dàn trang, như Aldus PageMaker.
          - option [ref=e112]:
            - generic [ref=e113]:
              - generic:
                - generic:
                  - img
              - generic:
                - generic: Tại sao lại sử dụng nó?
                - generic:
                  - paragraph: Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung" là nó khiến văn bản giống thật hơn, bình thường hơn. Nhiều phần mềm thiết kế giao diện web và dàn trang ngày nay đã sử dụng Lorem Ipsum làm đoạn văn bản giả, và nếu bạn thử tìm các đoạn "Lorem ipsum" trên mạng thì sẽ khám phá ra nhiều trang web hiện vẫn đang trong quá trình xây dựng. Có nhiều phiên bản khác nhau đã xuất hiện, đôi khi do vô tình, nhiều khi do cố ý (xen thêm vào những câu hài hước hay thông tục).
          - option [ref=e114]:
            - generic [ref=e115]:
              - generic:
                - generic:
                  - img
              - generic:
                - generic: Nó đến từ đâu?
                - generic:
                  - paragraph: Trái với quan điểm chung của số đông, Lorem Ipsum không phải chỉ là một đoạn văn bản ngẫu nhiên. Người ta tìm thấy nguồn gốc của nó từ những tác phẩm văn học la-tinh cổ điển xuất hiện từ năm 45 trước Công Nguyên, nghĩa là nó đã có khoảng hơn 2000 tuổi. Một giáo sư của trường Hampden-Sydney College (bang Virginia - Mỹ) quan tâm tới một trong những từ la-tinh khó hiểu nhất, "consectetur", trích từ một đoạn của Lorem Ipsum, và đã nghiên cứu tất cả các ứng dụng của từ này trong văn học cổ điển, để từ đó tìm ra nguồn gốc không thể chối cãi của Lorem Ipsum. Thật ra, nó được tìm thấy trong các đoạn 1.10.32 và 1.10.33 của "De Finibus Bonorum et Malorum" (Đỉnh tối thượng của Cái Tốt và Cái Xấu) viết bởi Cicero vào năm 45 trước Công Nguyên. Cuốn sách này là một luận thuyết đạo lí rất phổ biến trong thời kì Phục Hưng. Dòng đầu tiên của Lorem Ipsum, "Lorem ipsum dolor sit amet..." được trích từ một câu trong đoạn thứ 1.10.32.
          - option [ref=e116]:
            - generic [ref=e117]:
              - generic:
                - generic:
                  - img
              - generic:
                - generic: Làm thế nào để có nó?
                - generic:
                  - paragraph: Có rất nhiều biến thể của Lorem Ipsum mà bạn có thể tìm thấy, nhưng đa số được biến đổi bằng cách thêm các yếu tố hài hước, các từ ngẫu nhiên có khi không có vẻ gì là có ý nghĩa. Nếu bạn định sử dụng một đoạn Lorem Ipsum, bạn nên kiểm tra kĩ để chắn chắn là không có gì nhạy cảm được giấu ở giữa đoạn văn bản. Tất cả các công cụ sản xuất văn bản mẫu Lorem Ipsum đều được làm theo cách lặp đi lặp lại các đoạn chữ cho tới đủ thì thôi, khiến cho lipsum.com trở thành công cụ sản xuất Lorem Ipsum đáng giá nhất trên mạng. Trang web này sử dụng hơn 200 từ la-tinh, kết hợp thuần thục nhiều cấu trúc câu để tạo ra văn bản Lorem Ipsum trông có vẻ thật sự hợp lí. Nhờ thế, văn bản Lorem Ipsum được tạo ra mà không cần một sự lặp lại nào, cũng không cần chèn thêm các từ ngữ hóm hỉnh hay thiếu trật tự.
          - option [ref=e118]:
            - generic [ref=e119]:
              - generic:
                - generic:
                  - img
              - generic:
                - generic: Không có ai muốn khổ đau cho chính mình
                - generic:
                  - paragraph: Trích đoạn chuẩn của Lorem Ipsum được sử dụng từ thế kỉ thứ 16 và được tái bản sau đó cho những người quan tâm đến nó. Đoạn 1.10.32 và 1.10.33 trong cuốn "De Finibus Bonorum et Malorum" của Cicero cũng được tái bản lại theo đúng cấu trúc gốc, kèm theo phiên bản tiếng Anh được dịch bởi H. Rackham vào năm 1914.
          - generic [ref=e121]:
            - generic:
              - generic:
                - img
            - generic:
              - generic: Lorem Ipsum là gì?
              - generic:
                - paragraph:
                  - strong: Lorem Ipsum
                  - text: chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng trong các ứng dụng dàn trang, như Aldus PageMaker.
      - generic [ref=e123]:
        - generic:
          - heading "ĐỐI TÁC" [level=2]:
            - img
            - generic: ĐỐI TÁC
            - img
        - generic [ref=e126]:
          - link [ref=e128] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e129]
          - link [ref=e131] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e132]
          - link [ref=e134] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e135]
          - link [ref=e137] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e138]
          - link [ref=e140] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e141]
          - link [ref=e143] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e144]
          - link [ref=e146] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e147]
          - link [ref=e149] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e150]
          - link [ref=e152] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e153]
          - link [ref=e155] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e156]
          - link [ref=e158] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e159]
          - link [ref=e161] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e162]
          - link [ref=e164] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e165]
          - link [ref=e167] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e168]
          - link [ref=e170] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e171]
          - link [ref=e173] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e174]
          - link [ref=e176] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e177]
          - link [ref=e179] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e180]
          - link [ref=e182] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e183]
          - link [ref=e185] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e186]
          - link [ref=e188] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e189]
          - link [ref=e191] [cursor=pointer]:
            - /url: ""
            - paragraph [ref=e192]
      - generic [ref=e194]:
        - generic:
          - heading "TIN TỨC" [level=2]:
            - img
            - generic: TIN TỨC
            - img
        - generic:
          - generic:
            - generic:
              - link "Tin tức 1":
                - /url: tin-tuc-1
              - generic:
                - heading "Tin tức 1" [level=3]:
                  - link "Tin tức 1":
                    - /url: tin-tuc-1
                - paragraph: Mô tả bài tin tức 1
                - generic:
                  - link "Xem thêm":
                    - /url: tin-tuc-1
                    - generic: Xem thêm
                    - img
          - generic:
            - generic:
              - link "Tin tức 2":
                - /url: tin-tuc-2
              - generic:
                - heading "Tin tức 2" [level=3]:
                  - link "Tin tức 2":
                    - /url: tin-tuc-2
                - paragraph: Mô tả bài tin tức 2
                - generic:
                  - link "Xem thêm":
                    - /url: tin-tuc-2
                    - generic: Xem thêm
                    - img
          - generic:
            - generic:
              - link "Tin tức 3":
                - /url: tin-tuc-3
              - generic:
                - heading "Tin tức 3" [level=3]:
                  - link "Tin tức 3":
                    - /url: tin-tuc-3
                - paragraph: Mô tả bài tin tức 3
                - generic:
                  - link "Xem thêm":
                    - /url: tin-tuc-3
                    - generic: Xem thêm
                    - img
        - generic:
          - link "Xem tất cả bài viết":
            - /url: tin-tuc
            - generic: Xem tất cả bài viết
            - generic:
              - img
      - generic [ref=e195]:
        - img "Đăng ký nhận thông tin" [ref=e196]
        - generic [ref=e200]:
          - generic:
            - paragraph: Đăng ký nhận thông tin
            - generic:
              - generic:
                - textbox "Họ và tên*"
              - generic:
                - textbox "Số điện thoại*"
              - generic:
                - textbox "Email*"
              - generic:
                - textbox "Nội dung"
              - button "Gửi thông tin đăng ký ngay":
                - img
                - generic: Gửi thông tin đăng ký ngay
    - generic [ref=e201]:
      - generic [ref=e202]:
        - link "Lorem Ipsum" [ref=e204] [cursor=pointer]:
          - /url: https://code4.mimadigi.vn/2026/august/buivanquy_111126W/
          - img "Lorem Ipsum" [ref=e205]
        - generic [ref=e206]:
          - generic [ref=e207]:
            - paragraph [ref=e208]: Thông tin liên hệ
            - list [ref=e209]:
              - listitem [ref=e210]:
                - 'link "Địa chỉ: Số L22-23, đường N1, Khu phố 1, Phường Trấn Biên, Đồng Nai" [ref=e211] [cursor=pointer]':
                  - /url: https://maps.app.goo.gl/JD2W7Ho6mb8Hrmsw6
                  - img [ref=e212]
                  - generic [ref=e214]: "Địa chỉ: Số L22-23, đường N1, Khu phố 1, Phường Trấn Biên, Đồng Nai"
              - listitem [ref=e215]:
                - 'link "Hotline: 0888080138" [ref=e216] [cursor=pointer]':
                  - /url: tel:0888080138
                  - img [ref=e217]
                  - generic [ref=e220]: "Hotline: 0888080138"
              - listitem [ref=e221]:
                - 'link "Email: hoahd98.mima@gmail.com" [ref=e222] [cursor=pointer]':
                  - /url: mailto:hoahd98.mima@gmail.com
                  - img [ref=e223]
                  - generic [ref=e225]: "Email: hoahd98.mima@gmail.com"
            - paragraph [ref=e226]: Theo dõi chúng tôi tại
            - generic [ref=e227]:
              - link "Facebook" [ref=e228] [cursor=pointer]:
                - /url: ""
                - img "Facebook" [ref=e229]
              - link "Message" [ref=e230] [cursor=pointer]:
                - /url: ""
                - img "Message" [ref=e231]
              - link "Instargam" [ref=e232] [cursor=pointer]:
                - /url: ""
                - img "Instargam" [ref=e233]
              - link "Tiktok" [ref=e234] [cursor=pointer]:
                - /url: https://vt.tiktok.com/ZS9nuW1De/
                - img "Tiktok" [ref=e235]
              - link "Youtobe" [ref=e236] [cursor=pointer]:
                - /url: ""
                - img "Youtobe" [ref=e237]
              - link "Shoppee" [ref=e238] [cursor=pointer]:
                - /url: https://s.shopee.vn/2LO7k4zLQF
                - img "Shoppee" [ref=e239]
          - generic [ref=e240]:
            - paragraph [ref=e241]: Dịch vụ
            - list [ref=e242]:
              - listitem [ref=e243]:
                - link "Danh mục dịch vụ 1" [ref=e244] [cursor=pointer]:
                  - /url: danh-muc-dich-vu-1
              - listitem [ref=e245]:
                - link "Danh mục dịch vụ 2" [ref=e246] [cursor=pointer]:
                  - /url: danh-muc-dich-vu-2
              - listitem [ref=e247]:
                - link "Danh mục dịch vụ 3" [ref=e248] [cursor=pointer]:
                  - /url: danh-muc-dich-vu-3
              - listitem [ref=e249]:
                - link "Danh mục dịch vụ 4" [ref=e250] [cursor=pointer]:
                  - /url: danh-muc-dich-vu-4
              - listitem [ref=e251]:
                - link "Danh mục dịch vụ 5" [ref=e252] [cursor=pointer]:
                  - /url: danh-muc-dich-vu-5
          - generic [ref=e253]:
            - paragraph [ref=e254]: Chính sách & hỗ trợ KH
            - list [ref=e255]:
              - listitem [ref=e256]:
                - link "Tư vấn tận tâm" [ref=e257] [cursor=pointer]:
                  - /url: tu-van-tan-tam
              - listitem [ref=e258]:
                - link "Phụ tùng chính hãng" [ref=e259] [cursor=pointer]:
                  - /url: phu-tung-chinh-hang
              - listitem [ref=e260]:
                - link "Hỗ trợ cứu hộ 24/7" [ref=e261] [cursor=pointer]:
                  - /url: ho-tro-cuu-ho-247
              - listitem [ref=e262]:
                - link "Bảo hành dịch vụ" [ref=e263] [cursor=pointer]:
                  - /url: bao-hanh-dich-vu
              - listitem [ref=e264]:
                - link "Báo giá minh bạch" [ref=e265] [cursor=pointer]:
                  - /url: bao-gia-minh-bach
      - paragraph [ref=e268]: Copyright ©2026 Web Mima. All Rights Reserved. Thiết kế Web MIMA
    - generic [ref=e269]:
      - 'link "Call me: 0888080138" [ref=e270] [cursor=pointer]':
        - /url: tel:0888080138
        - img [ref=e274]
        - generic [ref=e277]: "Call me: 0888080138"
      - 'link "Zalo: 0888080138" [ref=e278] [cursor=pointer]':
        - /url: https://zalo.me/0888080138
        - img [ref=e282]
        - generic [ref=e283]: "Zalo: 0888080138"
      - link "Chỉ đường tới GARA" [ref=e284] [cursor=pointer]:
        - /url: https://maps.app.goo.gl/JD2W7Ho6mb8Hrmsw6
        - img [ref=e288]
        - generic [ref=e290]: Chỉ đường tới GARA
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
              - generic: "91"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 91/100
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
          - generic: "22"
          - generic: Tổng tiêu chí
        - generic:
          - generic: ✅ 20
          - generic: Đạt
        - generic:
          - generic: ❌ 2
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: Về chúng tôi
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e291]:
      - generic [ref=e292]: "❌ Chi tiết lỗi cần khắc phục (2/22):"
      - generic [ref=e293]:
        - generic [ref=e294]:
          - generic [ref=e295]: 8. Tốc độ & Core Web Vitals
          - generic [ref=e296]: 2 lỗi
        - generic [ref=e297]:
          - strong [ref=e299]: "[📱 MOBILE (ƯU TIÊN)] LCP (Largest Contentful Paint): 20186ms (< 2500ms)"
          - generic [ref=e300]:
            - text: "⚠️ [📱 MOBILE (ƯU TIÊN)] LCP quá cao: 20186ms (chuẩn: < 2.5s) → Thủ phạm LCP:"
            - img "Lorem Ipsum" [ref=e301]
            - text: "[Vấn đề]: Tải ản..."
        - generic [ref=e302]:
          - strong [ref=e304]: "[💻 Desktop] LCP (Largest Contentful Paint): 3547ms (< 2500ms)"
          - generic [ref=e305]:
            - text: "⚠️ [💻 Desktop] LCP quá cao: 3547ms (chuẩn: < 2.5s) → Thủ phạm LCP:"
            - img "Lorem Ipsum" [ref=e306]
            - text: "[Vấn đề]: Tải ảnh LCP chậm..."
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 91/100 dưới ngưỡng 96%. Có 2/22 tiêu chí không đạt.
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