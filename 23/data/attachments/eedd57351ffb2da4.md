# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Gia công lắp đặt cửa nhôm (/gia-cong-lap-dat-cua-nhom)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 93/100 dưới ngưỡng 95%. Có 1/15 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e7]:
      - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e9] [cursor=pointer]:
        - /url: https://cuanhomtruotquay.vn/
        - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e10]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link "Trang chủ" [ref=e14] [cursor=pointer]:
            - /url: ""
        - listitem [ref=e15]:
          - link "Giới thiệu" [ref=e16] [cursor=pointer]:
            - /url: gioi-thieu
        - listitem [ref=e17]:
          - link "Dịch vụ" [ref=e18] [cursor=pointer]:
            - /url: dich-vu
            - text: Dịch vụ
            - img [ref=e19]
        - listitem [ref=e21]:
          - link "Sản phẩm" [ref=e22] [cursor=pointer]:
            - /url: san-pham
            - text: Sản phẩm
            - img [ref=e23]
        - listitem [ref=e25]:
          - link "Dự án" [ref=e26] [cursor=pointer]:
            - /url: du-an
        - listitem [ref=e27]:
          - link "Tin tức" [ref=e28] [cursor=pointer]:
            - /url: tin-tuc
        - listitem [ref=e29]:
          - link "Liên hệ" [ref=e30] [cursor=pointer]:
            - /url: lien-he
        - listitem [ref=e31]:
          - generic [ref=e32]:
            - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e33]
            - link "0387 191 399" [ref=e34] [cursor=pointer]:
              - /url: tel:0387 191 399
    - list [ref=e37]:
      - listitem [ref=e38]:
        - link "Trang chủ" [ref=e39] [cursor=pointer]:
          - /url: https://cuanhomtruotquay.vn/
          - img [ref=e40]
          - generic [ref=e42]: Trang chủ
      - listitem [ref=e43]:
        - text: /
        - link "Dịch vụ" [ref=e44] [cursor=pointer]:
          - /url: https://cuanhomtruotquay.vn/dich-vu
      - listitem [ref=e45]:
        - text: /
        - link "Gia công lắp đặt cửa nhôm" [ref=e46] [cursor=pointer]:
          - /url: https://cuanhomtruotquay.vn/gia-cong-lap-dat-cua-nhom
    - generic [ref=e48]:
      - generic [ref=e50]:
        - generic [ref=e52]: Gia công lắp đặt cửa nhôm
        - generic [ref=e53]:
          - img [ref=e54]
          - generic [ref=e57]: 60 Lượt xem
        - generic [ref=e59]:
          - generic [ref=e60] [cursor=pointer]:
            - img [ref=e61]
            - text: Mục lục
            - img [ref=e64]
          - text: ▾ ▾ ▾ ▾
        - text: ▾ ▾ ▾ ▾
        - generic [ref=e68]:
          - paragraph [ref=e69]: Gia công lắp đặt cửa nhôm kính đạt chuẩn không chỉ dừng lại ở việc lựa chọn thương hiệu nhôm danh tiếng. Giá trị cốt lõi nằm ở năng lực thiết kế, độ chính xác trong quá trình sản xuất tại xưởng và kỹ thuật thi công thực tế tại công trình. Dịch vụ gia công lắp đặt cửa nhôm chuyên nghiệp chính là cầu nối biến những thanh profile thô sơ thành những tác phẩm kiến trúc hoàn mỹ, đảm bảo cả tính thẩm mỹ lẫn độ bền hàng thập kỷ.
          - paragraph [ref=e70]:
            - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e71]
          - heading "Xu hướng phát triển của ngành gia công lắp đặt cửa nhôm" [level=2] [ref=e72]
          - paragraph [ref=e73]: Ngành nhôm kính đã trải qua những bước tiến dài về mặt công nghệ vật liệu lẫn giải pháp kiến trúc. Từ những hệ nhôm cỏ mỏng manh, dễ hoen gỉ, thị trường hiện nay đã nhường chỗ cho các dòng nhôm định hình cao cấp có kết cấu khoang rỗng, hệ gân tăng cứng cùng công nghệ sơn tĩnh điện bảo hành lên tới hàng chục năm.
          - paragraph [ref=e74]: Sự thay đổi này đòi hỏi quy trình gia công lắp đặt cửa nhôm phải chuyển mình mạnh mẽ. Các phương pháp thủ công, thô sơ không còn đất diễn khi dung sai cho phép của các hệ nhôm cao cấp hiện nay chỉ được tính bằng milimet. Việc ứng dụng hệ thống máy móc tự động hóa như máy cắt hai đầu CNC, máy ép góc kỹ thuật số là bắt buộc để đảm bảo chất lượng đầu ra.
          - paragraph [ref=e75]:
            - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e76]
          - paragraph [ref=e77]: Người tiêu dùng ngày càng khắt khe hơn trong việc lựa chọn giải pháp cửa cho không gian sống. Họ không chỉ cần một lối đi lại thông thường mà đòi hỏi những bộ cửa có khả năng cách âm vượt trội, cách nhiệt tối ưu, chống chịu được áp lực gió bão lớn và phải đồng điệu với ngôn ngữ thiết kế tổng thể của công trình.
          - heading "Các giải pháp cửa nhôm cao cấp dẫn dắt xu hướng kiến trúc" [level=2] [ref=e78]
          - paragraph [ref=e79]: Để đáp ứng thị hiếu ngày càng cao của các kiến trúc sư và chủ đầu tư, nhiều giải pháp cửa nhôm thế hệ mới đã ra đời. Dưới đây là ba dòng sản phẩm tiêu biểu, kết hợp hoàn hảo giữa công nghệ cơ khí chính xác và nghệ thuật kiến trúc.
          - heading "Cửa trượt quay - Giải pháp tối ưu hóa không gian mở" [level=3] [ref=e80]
          - paragraph [ref=e81]: Cửa trượt quay là một trong những phát kiến đột phá của ngành cửa nhôm kính trong những năm gần đây. Dòng cửa này giải quyết triệt để bài toán diện tích cho các ngôi nhà phố, biệt thự có mặt tiền hẹp hoặc các vị trí cần sự linh hoạt tối đa trong sử dụng.
          - paragraph [ref=e82]:
            - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e83]
          - paragraph [ref=e84]: Cơ chế hoạt động của cửa trượt quay là sự kết hợp thông minh giữa hai quy cách mở trên cùng một bộ cửa. Khi sử dụng bình thường, bạn chỉ cần trượt nhẹ cánh cửa để di chuyển. Khi cần mở rộng tối đa để đón gió hoặc di chuyển đồ đạc lớn, các cánh cửa có thể xoay áp sát vào tường, trả lại 100% diện tích thông thủy cho lối đi.
          - paragraph [ref=e85]: Đặc biệt, hệ cửa trượt quay cao cấp thường được thiết kế không có ray dưới. Điều này giúp loại bỏ hoàn toàn sự vướng víu, tránh tích tụ bụi bẩn ở rãnh trượt và đảm bảo an toàn tuyệt đối cho người già, trẻ nhỏ khi di chuyển qua lại.
          - heading "Cửa Full Phào - Vẻ đẹp tân cổ điển sang trọng và bề thế" [level=3] [ref=e86]
          - paragraph [ref=e87]: Nếu bạn yêu thích phong cách kiến trúc châu Âu cổ điển hay tân cổ điển nhưng e ngại sự cong vênh, mối mọt của cửa gỗ tự nhiên thì cửa Full Phào là sự thay thế hoàn hảo. Dòng sản phẩm này sở hữu hệ thống khuôn phào chỉ nhôm ôm trọn bề dày bức tường, tạo cảm giác dày dặn, uy nghi cho công trình.
          - paragraph [ref=e88]:
            - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e89]
          - paragraph [ref=e90]: Phần phào ôm tường được thiết kế tinh xảo với các đường chỉ chạy dọc thân nhôm, che đi hoàn toàn những khuyết điểm của phần thô xây dựng tại vị trí ô chờ. Cửa Full Phào thường sử dụng các gam màu sang trọng như vân gỗ quý, màu nâu kim sa hay màu vàng champagne, mang lại vẻ đẹp quyền quý không thua kém gì các dòng cửa gỗ phân khúc cao cấp nhất.
          - paragraph [ref=e91]: Bên cạnh yếu tố thẩm mỹ, cấu trúc khoang rỗng dày dặn của hệ nhôm phào chỉ còn mang lại khả năng cách âm, cách nhiệt vô cùng xuất sắc. Đây là sự lựa chọn ưu tiên cho các căn biệt thự tân cổ điển, lâu đài hay các căn hộ cao cấp muốn khẳng định đẳng cấp của gia chủ.
          - heading "Cửa nhôm thủy lực - Sự vững chãi và vận hành êm ái" [level=3] [ref=e92]
          - paragraph [ref=e93]: Cửa nhôm thủy lực là dòng cửa mở quay sử dụng bản lề sàn (bản lề thủy lực) kết hợp với hệ khung nhôm bản lớn cực kỳ dày dặn. Bản cánh của cửa nhôm thủy lực thường có kích thước từ 120mm đến 180mm, độ dày profile nhôm từ 2.0mm đến 4.0mm tại các điểm chịu lực chính.
          - paragraph [ref=e94]: Điểm độc đáo của hệ cửa này là khả năng đóng mở hai chiều linh hoạt nhờ cơ chế hoạt động của pit-tông thủy lực đặt ngầm dưới sàn nhà. Khi mở cửa ra, hệ thống thủy lực sẽ tự động kéo cánh cửa về vị trí đóng ban đầu một cách êm ái, nhẹ nhàng, không gây ra tiếng động va đập mạnh.
          - paragraph [ref=e95]: Bốn góc cánh cửa nhôm thủy lực thường được gia cố bằng các ke đồng đúc nguyên khối kết hợp với công nghệ bơm keo hai thành phần chuyên dụng. Nhờ đó, cửa có khả năng nâng đỡ những tấm kính cường lực, kính hộp có trọng lượng lớn mà không lo bị xệ cánh hay biến dạng theo thời gian. Đây là lựa chọn hàng đầu cho các vị trí đại sảnh, mặt tiền văn phòng, showroom hay cửa chính biệt thự.
          - heading "Quy trình gia công cửa nhôm tiêu chuẩn kỹ thuật cao tại xưởng" [level=2] [ref=e96]
          - paragraph [ref=e97]: Để có được một bộ cửa nhôm vận hành trơn tru tại công trình, mọi công đoạn gia công tại xưởng sản xuất phải tuân thủ nghiêm ngặt theo một quy trình kỹ thuật khép kín. Sự cẩu thả ở bất kỳ bước nào tại xưởng cũng sẽ dẫn đến những sai lệch nghiêm trọng khi lắp đặt thực tế.
          - 'heading "Bước 1: Tiếp nhận thông tin và khảo sát ô chờ thực tế" [level=3] [ref=e98]'
          - paragraph [ref=e99]: Kỹ thuật viên sẽ trực tiếp đến công trình để đo đạc kích thước ô chờ bằng máy cân bằng laser chuyên dụng. Việc đo đạc này cần được thực hiện ở nhiều điểm khác nhau (trên, giữa, dưới, trái, phải) để phát hiện kịp thời các sai lệch về độ nghiêng, độ dốc của tường xây dựng, từ đó đưa ra kích thước sản xuất chính xác nhất.
          - 'heading "Bước 2: Thiết kế bản vẽ kỹ thuật và lập bảng cắt nhôm" [level=3] [ref=e100]'
          - paragraph [ref=e101]: Dựa trên số liệu khảo sát thực tế, bộ phận kỹ thuật sẽ sử dụng phần mềm chuyên dụng để bóc tách bản vẽ chi tiết. Bản vẽ này sẽ thể hiện rõ ràng kích thước khuôn bao, kích thước cánh, vị trí lắp đặt phụ kiện và khe hở tiêu chuẩn để bơm keo bít kín. Từ đó, phần mềm sẽ xuất ra bảng tính toán cắt nhôm tối ưu nhất để tránh lãng phí vật tư.
          - 'heading "Bước 3: Cắt thanh nhôm profile bằng máy chuyên dụng" [level=3] [ref=e102]'
          - paragraph [ref=e103]: Thanh nhôm profile sau khi được kiểm tra bề mặt sẽ được đưa lên máy cắt hai đầu CNC. Máy cắt cần có độ chính xác tuyệt đối với sai số góc cắt không quá 0.1 độ và sai số chiều dài dưới 0.5mm. Góc cắt 45 độ phải đảm bảo độ phẳng mịn, không bị ba-vớ để khi ép góc hai thanh nhôm liên kết khít sát với nhau.
          - 'heading "Bước 4: Phay đố, dập ngàm và khoét lỗ khóa" [level=3] [ref=e104]'
          - paragraph [ref=e105]: Công đoạn phay đầu đố và khoét lỗ lắp đặt phụ kiện (khóa, bản lề, chốt) được thực hiện trên các dòng máy phay, máy dập chuyên dụng hoặc máy CNC trung tâm. Việc khoét khóa bằng máy CNC giúp các lỗ khóa sắc nét, chính xác tuyệt đối, tránh hiện tượng lệch tâm khóa gây kẹt khóa hoặc khó đóng mở khi đưa vào sử dụng.
          - 'heading "Bước 5: Ép góc và liên kết khung" [level=3] [ref=e106]'
          - paragraph [ref=e107]: Đây là công đoạn quyết định đến độ bền kết cấu của bộ cửa nhôm. Hiện nay, các xưởng gia công uy tín thường sử dụng công nghệ ép góc thủy lực kết hợp với ke góc hợp kim nhôm dày dặn và ke nhảy hoặc ke vĩnh cửu. Trước khi ép góc, thợ kỹ thuật sẽ bơm keo chuyên dụng hai thành phần vào khoang nhôm để đảm bảo mối ghép kín khít hoàn toàn, chống thấm nước tuyệt đối.
          - 'heading "Bước 6: Luồn gioăng cao su và lắp ráp phụ kiện" [level=3] [ref=e108]'
          - paragraph [ref=e109]: Hệ thống gioăng cao su EPDM đàn hồi cao được luồn vào các rãnh nhôm một cách cẩn thận, không bị co kéo hay dồn nén quá mức. Tiếp theo, các chi tiết phụ kiện như bản lề, tay nắm, ổ khóa, bánh xe sẽ được định vị và bắt vít inox chống gỉ chắc chắn vào khung nhôm theo đúng sơ đồ kỹ thuật.
          - 'heading "Bước 7: Lắp kính và căn chỉnh cánh cửa tại xưởng" [level=3] [ref=e110]'
          - paragraph [ref=e111]: Kính cường lực hoặc kính hộp sau khi được làm sạch sẽ được đặt vào khung cánh nhôm. Kỹ thuật viên sẽ sử dụng các miếng chêm kính chuyên dụng bằng nhựa cứng để định vị tấm kính đúng trọng tâm chịu lực, ngăn ngừa hiện tượng xệ cánh sau này. Sau khi chêm kính, cửa sẽ được đi keo silicone chuyên dụng hoặc nẹp kính để cố định chắc chắn.
          - 'heading "Bước 8: Kiểm tra chất lượng (QC) và đóng gói thành phẩm" [level=3] [ref=e112]'
          - paragraph [ref=e113]: Bộ phận kiểm định chất lượng sẽ tiến hành kiểm tra tổng thể bộ cửa về kích thước hình học, độ phẳng bề mặt, độ khít của các góc ghép và vận hành thử nghiệm các cơ cấu chuyển động. Chỉ những bộ cửa đạt tiêu chuẩn mới được bọc màng PE chống trầy xước, dán xốp bảo vệ các góc cạnh trước khi vận chuyển đến công trình.
          - heading "Kỹ thuật lắp đặt cửa nhôm chuẩn xác tại công trình" [level=2] [ref=e114]
          - paragraph [ref=e115]: Một bộ cửa nhôm được gia công hoàn hảo tại xưởng vẫn có thể bị hỏng nếu quy trình lắp đặt tại công trình bị thực hiện cẩu thả. Quá trình lắp đặt thực tế đòi hỏi người thợ phải có tay nghề cao, sự tỉ mỉ và tuân thủ nghiêm ngặt các nguyên tắc vật lý kiến trúc.
          - heading "Định vị khung bao và liên kết vào tường" [level=3] [ref=e116]
          - paragraph [ref=e117]: "Khi vận chuyển cửa đến công trình, việc đầu tiên là định vị khung bao vào ô chờ. Thợ lắp đặt sử dụng máy cân bằng laser và quả dọi để căn chỉnh khung bao theo ba trục không gian: thẳng đứng (plumb), nằm ngang (level) và vuông góc (square). Sai lệch cho phép của khung bao so với phương thẳng đứng không được vượt quá 1mm trên mỗi mét chiều cao."
          - paragraph [ref=e118]: Sau khi căn chỉnh chuẩn xác, khung bao sẽ được cố định tạm thời bằng các nêm gỗ hoặc nêm nhựa chuyên dụng. Tiếp theo, thợ sẽ tiến hành khoan lỗ qua khung nhôm vào tường bê tông để bắt vít nở chuyên dụng. Khoảng cách giữa các điểm bắt vít liên kết không được quá 600mm và cách các góc khung không quá 150mm để đảm bảo khung cửa không bị rung lắc hay biến dạng khi có lực tác động mạnh.
          - heading "Lắp đặt cánh cửa và hiệu chỉnh phụ kiện" [level=3] [ref=e119]
          - paragraph [ref=e120]: Sau khi khung bao đã được liên kết chặt chẽ vào tường, cánh cửa sẽ được treo lên khung thông qua hệ thống bản lề. Công đoạn này đòi hỏi sự tinh tế trong việc hiệu chỉnh các ốc vít trên bản lề để cánh cửa đạt được sự cân bằng tuyệt đối. Cửa mở quay khi mở ra ở bất kỳ góc độ nào cũng phải đứng yên tại vị trí đó, không tự động trôi đóng vào hoặc mở ra ngoài.
          - paragraph [ref=e121]:
            - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e122]
          - paragraph [ref=e123]: Đối với hệ cửa trượt hay cửa trượt quay, việc căn chỉnh độ cao của bánh xe và độ phẳng của đường ray là cực kỳ quan trọng. Bánh xe phải tỳ đều lên ray, chuyển động mượt mà, không phát ra tiếng động lạch cạch hay có cảm giác nặng tay khi đẩy cửa.
          - heading "Bơm keo bọt nở và keo silicone bít kín chống thấm" [level=3] [ref=e124]
          - paragraph [ref=e125]: Khoảng hở giữa khung nhôm và tường (thường từ 5mm đến 10mm) cần được xử lý chống thấm triệt để. Trước tiên, thợ kỹ thuật sẽ bơm keo bọt nở (foam) vào đầy khe hở này để tăng khả năng cách âm, cách nhiệt và tạo độ đàn hồi liên kết giữa nhôm và tường xây dựng.
          - paragraph [ref=e126]: Sau khi keo bọt khô, thợ sẽ gạt bỏ phần keo thừa và tiến hành bơm keo silicone chống thấm chuyên dụng (như Apollo A500 hoặc Dow Corning) phủ kín bề mặt bên ngoài. Đường keo silicone phải được đi đều tay, phẳng mịn, không bị bọt khí hay đứt quãng. Đây là lá chắn cuối cùng ngăn không cho nước mưa thẩm thấu từ ngoài vào trong nhà qua các khe hở xây dựng.
          - heading "Tiêu chuẩn nghiệm thu chất lượng công trình cửa nhôm kính" [level=2] [ref=e127]
          - paragraph [ref=e128]: Việc nghiệm thu công trình cửa nhôm cần được thực hiện một cách khách quan dựa trên các tiêu chí kỹ thuật rõ ràng để đảm bảo quyền lợi cho chủ đầu tư cũng như khẳng định uy tín của đơn vị thi công.
          - list [ref=e129]:
            - listitem [ref=e130]:
              - strong [ref=e131]: "Tiêu chuẩn về mặt thẩm mỹ:"
              - text: Bề mặt khung nhôm không bị trầy xước, móp méo hay bám dính keo silicone dư thừa. Các góc ghép kín khít, không có khe hở nhìn thấy bằng mắt thường. Đường keo silicone xung quanh khung bao thẳng hàng, láng mịn và có độ rộng đều nhau.
            - listitem [ref=e132]:
              - strong [ref=e133]: "Tiêu chuẩn về vận hành cơ học:"
              - text: Cánh cửa đóng mở nhẹ nhàng, êm ái, không bị kẹt hay cọ xát vào khung bao. Hệ thống khóa, chốt đa điểm hoạt động trơn tru, tay nắm chắc chắn, không bị rơ lắc. Lực mở cửa nằm trong giới hạn cho phép, không gây khó khăn cho người sử dụng.
            - listitem [ref=e134]:
              - strong [ref=e135]: "Tiêu chuẩn về độ kín khít và chống thấm:"
              - text: Khi đóng cửa, hệ thống gioăng cao su phải ép sát đều xung quanh khung cánh, không có khe hở lọt sáng hay lọt gió. Thử nghiệm phun nước áp lực cao trực tiếp vào các khe cửa bên ngoài không được có hiện tượng rò rỉ hay thẩm thấu nước vào mặt trong của cửa.
          - heading "Các lỗi thường gặp và giải pháp khắc phục trong thi công cửa nhôm" [level=2] [ref=e136]
          - paragraph [ref=e137]: Trong thực tế thi công, nếu đơn vị sản xuất không có đủ kinh nghiệm hoặc quy trình giám sát lỏng lẻo, rất dễ phát sinh các lỗi kỹ thuật ảnh hưởng trực tiếp đến tuổi thọ của bộ cửa.
          - heading "Hiện tượng cửa bị xệ cánh" [level=3] [ref=e138]
          - paragraph [ref=e139]: Đây là lỗi phổ biến nhất ở các dòng cửa mở quay bản lớn. Nguyên nhân chủ yếu do thợ thi công không chêm kính đúng kỹ thuật tại xưởng hoặc sử dụng bản lề không đủ tải trọng so với trọng lượng của cánh cửa. Để khắc phục triệt để, cần tháo nẹp kính ra, dùng nêm nhựa chuyên dụng để kích góc cánh cửa lên cao hơn vị trí cân bằng khoảng 2-3mm rồi chêm chặt tấm kính lại, sau đó tiến hành siết chặt lại hệ thống ốc vít bản lề.
          - heading "Nước mưa thấm qua các góc ghép của khung cửa" [level=3] [ref=e140]
          - paragraph [ref=e141]: Lỗi này phát sinh do quá trình ép góc thanh nhôm không được bơm keo hai thành phần chuyên dụng, hoặc đường keo silicone liên kết giữa khung bao và tường bị bong tróc do co ngót nhiệt. Biện pháp xử lý là phải làm sạch toàn bộ đường keo cũ, dùng máy sấy khô khe hở và tiến hành bơm lại keo silicone chất lượng cao có độ đàn hồi tốt.
          - heading "Khó đóng mở khóa hoặc khóa bị kẹt cứng" [level=3] [ref=e142]
          - paragraph [ref=e143]: Nguyên nhân thường do khung cửa bị biến dạng sau một thời gian sử dụng do tác động của nhiệt độ hoặc do lún công trình dẫn đến các vấu khóa trên khung bao không còn trùng khớp với miệng khóa trên cánh cửa. Kỹ thuật viên cần tiến hành căn chỉnh lại vị trí của các vấu khóa hoặc điều chỉnh độ xệ của cánh cửa để đưa các chi tiết cơ khí về đúng vị trí đồng tâm ban đầu.
          - heading "Nhôm Kính Đăng Khoa - Đơn vị gia công lắp đặt cửa nhôm uy tín chuyên nghiệp" [level=2] [ref=e144]
          - paragraph [ref=e145]: Giữa hàng trăm đơn vị nhôm kính trên thị trường, Nhôm Kính Đăng Khoa tự hào là địa chỉ tin cậy được đông đảo khách hàng và đối tác lựa chọn. Với nhiều năm kinh nghiệm thực chiến trong lĩnh vực thiết kế, gia công và lắp đặt các hệ cửa nhôm kính cao cấp, chúng tôi cam kết mang đến những giải pháp tối ưu nhất cho không gian sống của bạn.
          - paragraph [ref=e146]: Sở hữu nhà xưởng quy mô lớn được trang bị hệ thống máy móc sản xuất hiện đại, đồng bộ cùng đội ngũ thợ kỹ thuật lành nghề, tâm huyết, Nhôm Kính Đăng Khoa luôn kiểm soát chặt chẽ chất lượng sản phẩm từ khâu nhập khẩu nguyên liệu đầu vào cho đến khâu bàn giao hoàn thiện tại công trình. Chúng tôi chuyên sâu các dòng sản phẩm thế hệ mới như cửa trượt quay, cửa Full Phào tân cổ điển và các hệ cửa nhôm thủy lực bản lớn cho biệt thự, nhà phố sang trọng.
          - paragraph [ref=e147]: Đến với Nhôm Kính Đăng Khoa, quý khách hàng không chỉ nhận được những bộ cửa nhôm kính sắc nét trong từng chi tiết mà còn được trải nghiệm dịch vụ chăm sóc khách hàng tận tâm, chính sách bảo hành dài hạn và nhanh chóng. Chúng tôi luôn sẵn sàng đồng hành cùng bạn để kiến tạo nên những công trình bền vững cùng thời gian.
          - paragraph [ref=e148]: "Quý khách hàng có nhu cầu tư vấn, khảo sát và nhận báo giá chi tiết cho dịch vụ gia công lắp đặt cửa nhôm cao cấp, xin vui lòng liên hệ với chúng tôi theo thông tin dưới đây:"
          - paragraph [ref=e149]:
            - strong [ref=e150]: NHÔM KÍNH ĐĂNG KHOA
            - text: "Địa chỉ: 31/3 Thới Tứ, Tam Thôn, Hóc Môn"
            - text: "Hotline: 0387191399"
            - text: "Điện thoại: 0387191399"
            - text: "Email: khoanguyenksk@gmail.com"
            - text: "Website: cuanhomtruotquay.vn"
          - link "Xem thêm NHÔM KÍNH ĐĂNG KHOA" [ref=e153] [cursor=pointer]:
            - /url: javascript:;
            - generic [ref=e154]:
              - text: Xem thêm
              - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e155]
      - generic [ref=e157]: Các Dịch vụ khác
      - generic [ref=e158]:
        - generic:
          - generic:
            - paragraph:
              - link "Cửa sổ giấu rèm":
                - /url: cua-so-giau-rem
                - img "Cửa sổ giấu rèm"
            - generic:
              - heading "Cửa sổ giấu rèm" [level=2]:
                - link "Cửa sổ giấu rèm":
                  - /url: cua-so-giau-rem
              - paragraph: Thi công cửa sổ giấu rèm Hóc Môn
    - generic [ref=e159]:
      - generic [ref=e164]:
        - generic [ref=e165]:
          - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e166] [cursor=pointer]:
            - /url: https://cuanhomtruotquay.vn/
            - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e167]
          - generic [ref=e168]: XingFa Đăng Khoa mang đến những giải pháp nhôm kính chất lượng, kiến tạo không gian hiện đại, bền vững và nâng tầm giá trị cho mọi công trình.
          - paragraph [ref=e169]: THEO DÕI CHÚNG TÔI TẠI
          - generic [ref=e170]:
            - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e171] [cursor=pointer]:
              - /url: ""
              - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e172]
            - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e173] [cursor=pointer]:
              - /url: ""
              - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e174]
            - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e175] [cursor=pointer]:
              - /url: ""
              - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e176]
            - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e177] [cursor=pointer]:
              - /url: ""
              - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e178]
            - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e179] [cursor=pointer]:
              - /url: ""
              - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e180]
        - generic [ref=e181]:
          - paragraph [ref=e182]: Sản phẩm
          - list [ref=e183]:
            - listitem [ref=e184]:
              - link "Cửa trượt quay" [ref=e185] [cursor=pointer]:
                - /url: cua-truot-quay
            - listitem [ref=e186]:
              - link "Cửa full phào" [ref=e187] [cursor=pointer]:
                - /url: cua-full-phao
            - listitem [ref=e188]:
              - link "Hệ cửa sổ giấu rèm" [ref=e189] [cursor=pointer]:
                - /url: he-cua-so-giau-rem
            - listitem [ref=e190]:
              - link "Cầu thang kính" [ref=e191] [cursor=pointer]:
                - /url: cau-thang-kinh
            - listitem [ref=e192]:
              - link "Cửa nhôm" [ref=e193] [cursor=pointer]:
                - /url: cua-nhom
        - generic [ref=e194]:
          - paragraph [ref=e195]: Dịch vụ
          - list [ref=e196]:
            - listitem [ref=e197]:
              - link "Test Dịch vụ cấp 1 1786614854520" [ref=e198] [cursor=pointer]:
                - /url: test-dich-vu-cap-1-1786614854520
            - listitem [ref=e199]:
              - link "Thi công cửa full phào" [ref=e200] [cursor=pointer]:
                - /url: thi-cong-cua-full-phao
            - listitem [ref=e201]:
              - link "Thi công cửa nhôm trượt quay" [ref=e202] [cursor=pointer]:
                - /url: thi-cong-cua-nhom-truot-quay
        - generic [ref=e203]:
          - paragraph [ref=e204]: Thông tin liên hệ
          - paragraph [ref=e206]:
            - generic [ref=e207]: "Địa chỉ: 31/3 Thới Tứ, Tam Thôn, Hóc Môn"
            - generic [ref=e208]: "Tel: 0387191399"
            - generic [ref=e209]: "Email:"
            - link "khoanguyenksk@gmail.com" [ref=e210] [cursor=pointer]:
              - /url: mailto:khoanguyenksk@gmail.com
              - generic [ref=e217]: khoanguyenksk@gmail.com
      - generic [ref=e226]: Copyright ©2026 NHÔM KÍNH ĐĂNG KHOA. All Rights Reserved. Thiết kế Web MIMA
    - generic [ref=e227]:
      - 'link "Call me: 0387 191 399" [ref=e228] [cursor=pointer]':
        - /url: tel:0387191399
        - img [ref=e232]
        - generic [ref=e235]: "Call me: 0387 191 399"
      - 'link "Zalo: 0387191399" [ref=e236] [cursor=pointer]':
        - /url: https://zalo.me/0387191399
        - img [ref=e240]
        - generic [ref=e242]: "Zalo: 0387191399"
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
          - strong: Gia công lắp đặt cửa nhôm
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e243]:
      - generic [ref=e244]: "❌ Chi tiết lỗi cần khắc phục (1/15):"
      - generic [ref=e245]:
        - generic [ref=e246]:
          - generic [ref=e247]: 6. Liên kết (Links)
          - generic [ref=e248]: 1 lỗi
        - generic [ref=e249]:
          - strong [ref=e251]: "Không có broken links (lỗi: 20/37)"
          - generic [ref=e252]: "⚠️ Broken links: khoa-dien-tu-1 (status: 404), khoa-du-lich-1 (status: 404), khoa-tu (status: 404), khoa-phan-the-1 (status: 404), ban-le-bi (status: 404), ray-am (status: 404), ban-le-bat (status: 404),..."
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 93/100 dưới ngưỡng 95%. Có 1/15 tiêu chí không đạt.
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