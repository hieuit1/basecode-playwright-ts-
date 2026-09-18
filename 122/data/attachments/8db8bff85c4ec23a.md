# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Giới thiệu (/gioi-thieu)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 85/100 dưới ngưỡng 96%. Có 3/20 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e5]:
      - link "Tổng kho ghế massage chính hãng" [ref=e7] [cursor=pointer]:
        - /url: https://code6.mimadigi.vn/2026/september/nguyenchiquyet_113826w/
        - img "Tổng kho ghế massage chính hãng" [ref=e8]
      - generic [ref=e10]:
        - textbox "Bạn đan" [ref=e11]
        - button "Tìm kiếm" [ref=e12] [cursor=pointer]:
          - img "Tìm kiếm" [ref=e13]
      - generic [ref=e16]:
        - img "Hotline" [ref=e17]
        - generic [ref=e18]:
          - generic [ref=e19]: Hotline
          - link "0984235739" [ref=e20] [cursor=pointer]:
            - /url: tel:0984235739
    - generic [ref=e25]:
      - link "Tổng kho ghế massage chính hãng Danh mục sản phẩm" [ref=e27] [cursor=pointer]:
        - /url: javascript:;
        - img "Tổng kho ghế massage chính hãng" [ref=e28]
        - generic [ref=e29]: Danh mục sản phẩm
      - list [ref=e30]:
        - listitem [ref=e31]:
          - link "Trang chủ" [ref=e32] [cursor=pointer]:
            - /url: ""
        - listitem [ref=e33]:
          - link "Giới thiệu" [ref=e34] [cursor=pointer]:
            - /url: gioi-thieu
        - listitem [ref=e35]:
          - link "Bảo hành & sửa chữa" [ref=e36] [cursor=pointer]:
            - /url: bao-hanh-sua-chua
        - listitem [ref=e37]:
          - link "Tin tức" [ref=e38] [cursor=pointer]:
            - /url: tin-tuc
        - listitem [ref=e39]:
          - link "Liên hệ" [ref=e40] [cursor=pointer]:
            - /url: lien-he
    - img "Tổng kho ghế massage chính hãng" [ref=e42]
    - list [ref=e45]:
      - listitem [ref=e46]:
        - link "Trang chủ" [ref=e47] [cursor=pointer]:
          - /url: https://code6.mimadigi.vn/2026/september/nguyenchiquyet_113826w/
          - generic [ref=e48]: Trang chủ
      - listitem [ref=e49]:
        - link "Giới thiệu" [ref=e50] [cursor=pointer]:
          - /url: https://code6.mimadigi.vn/2026/september/nguyenchiquyet_113826w/gioi-thieu
    - generic [ref=e51]:
      - generic [ref=e53]:
        - generic [ref=e54]:
          - generic [ref=e55]:
            - paragraph [ref=e56]: Về chúng tôi
            - generic [ref=e57]:
              - heading "Tổng kho ghế massage chính hãng" [level=2] [ref=e58]
              - generic [ref=e59]:
                - paragraph [ref=e60]: Tổng kho ghế massage chính hãng chuyên cung cấp các sản phẩm chăm sóc sức khỏe và thiết bị luyện tập như ghế massage, máy chạy bộ, dụng cụ thể thao và massage mini.
                - paragraph [ref=e61]: Với sản phẩm chất lượng, công nghệ hiện đại cùng dịch vụ tận tâm, thương hiệu mang đến giải pháp thư giãn và chăm sóc sức khỏe tiện lợi cho mọi gia đình.
                - paragraph [ref=e62]: Tổng kho ghế massage chính hãng chuyên cung cấp các sản phẩm chăm sóc sức khỏe và thiết bị luyện tập như ghế massage, máy chạy bộ, dụng cụ thể thao và massage mini.
                - paragraph [ref=e63]: Với sản phẩm chất lượng, công nghệ hiện đại cùng dịch vụ tận tâm, thương hiệu mang đến giải pháp thư giãn và chăm sóc sức khỏe tiện lợi cho mọi gia đình.
          - generic [ref=e64]:
            - img "Tổng kho ghế massage chính hãng" [ref=e66]
            - img "Tổng kho ghế massage chính hãng" [ref=e68]
            - img "Tổng kho ghế massage chính hãng" [ref=e70]
            - img "Tổng kho ghế massage chính hãng" [ref=e72]
            - img "Tổng kho ghế massage chính hãng" [ref=e74]
        - generic [ref=e75]:
          - generic [ref=e76]:
            - paragraph [ref=e77]:
              - text: Cuộc sống hiện đại với guồng quay công việc bận rộn khiến nhu cầu chăm sóc sức khỏe chủ động ngay tại nhà trở thành ưu tiên hàng đầu của nhiều gia đình. Thấu hiểu điều đó,
              - strong [ref=e78]: Tổng kho ghế massage chính hãng
              - text: ra đời với sứ mệnh mang đến những giải pháp hỗ trợ trị liệu, thư giãn và rèn luyện thể chất tối ưu nhất. Chúng tôi tự hào là đơn vị phân phối trực tiếp các dòng ghế massage cao cấp, máy chạy bộ đa năng cùng hệ thống thiết bị thể thao đạt chuẩn quốc tế, giúp bạn và người thân nâng cao thể trạng một cách toàn diện.
            - heading "Tại sao nên ưu tiên mua sắm tại Tổng kho ghế massage chính hãng?" [level=2] [ref=e79]
            - paragraph [ref=e80]: Việc tìm kiếm một sản phẩm chăm sóc sức khỏe chất lượng giữa hàng ngàn thương hiệu trên thị trường thường khiến người tiêu dùng băn khoăn. Khi lựa chọn mua sắm trực tiếp tại tổng kho của chúng tôi, khách hàng sẽ nhận được những lợi ích thực tế vượt trội.
            - heading "Mức giá tối ưu nhờ mô hình phân phối trực tiếp" [level=3] [ref=e81]
            - paragraph [ref=e82]: Thay vì phải đi qua nhiều tầng trung gian, đại lý phân phối cấp 1, cấp 2 khiến giá thành bị đội lên cao, sản phẩm tại tổng kho được nhập khẩu trực tiếp từ nhà máy của các thương hiệu lớn. Điều này giúp tối ưu hóa chi phí đầu vào, từ đó mang đến mức giá cạnh tranh nhất thị trường kèm theo nhiều chương trình chiết khấu hấp dẫn.
            - heading "Chất lượng sản phẩm được kiểm định nghiêm ngặt" [level=3] [ref=e83]
            - paragraph [ref=e84]: Mọi dòng ghế massage, máy chạy bộ hay thiết bị thể thao trước khi nhập kho và xuất xưởng đều trải qua quy trình kiểm tra kỹ thuật gắt gao. Chúng tôi cam kết cung cấp đầy đủ giấy tờ chứng nhận nguồn gốc xuất xứ (CO) và chứng nhận chất lượng (CQ), tem chống hàng giả, đảm bảo tính minh bạch tuyệt đối.
            - heading "Sẵn kho số lượng lớn với mẫu mã đa dạng" [level=3] [ref=e85]
            - paragraph [ref=e86]: Với diện tích lưu trữ rộng lớn, tổng kho luôn có sẵn hàng trăm mẫu mã sản phẩm khác nhau từ phân khúc bình dân đến siêu cao cấp. Khách hàng có thể dễ dàng trải nghiệm thực tế, so sánh tính năng và đưa ra quyết định mua sắm phù hợp nhất với nhu cầu sử dụng của gia đình.
            - heading "Các dòng sản phẩm chủ đạo được phân phối tại tổng kho" [level=2] [ref=e87]
            - heading "Ghế massage toàn thân – Trị liệu và thư giãn chuyên sâu tại nhà" [level=3] [ref=e88]
            - paragraph [ref=e89]: "Ghế massage không đơn thuần là một thiết bị thư giãn mà đã trở thành trợ lý chăm sóc sức khỏe xương khớp đắc lực cho cả gia đình. Các sản phẩm tại tổng kho sở hữu những công nghệ đột phá hàng đầu hiện nay:"
            - list [ref=e90]:
              - listitem [ref=e91]:
                - strong [ref=e92]: "Công nghệ con lăn 3D, 4D và 5D thông minh:"
                - text: Các đầu con lăn bọc silicon mềm mại, mô phỏng chính xác các động tác day, ấn huyệt, miết, nhào của bàn tay chuyên viên spa.
              - listitem [ref=e93]:
                - strong [ref=e94]: "Hệ thống cảm biến quang học (AI Body Scan):"
                - text: Tự động quét toàn bộ cơ thể để xác định chiều cao, định vị chính xác các huyệt đạo cột sống, từ đó đưa ra bài tập cá nhân hóa tối ưu nhất.
              - listitem [ref=e95]:
                - strong [ref=e96]: "Chế độ massage không trọng lực (Zero Gravity):"
                - text: Đưa cơ thể vào tư thế ngả sâu, giảm tối đa áp lực lên cột sống và các khớp, hỗ trợ tăng lưu thông tuần hoàn máu về tim.
              - listitem [ref=e97]:
                - strong [ref=e98]: "Nhiệt hồng ngoại sưởi ấm:"
                - text: Hệ thống sưởi ấm vùng lưng và bắp chân giúp giãn nở mạch máu, giảm đau nhức xương khớp nhanh chóng, đặc biệt hiệu quả cho người lớn tuổi.
            - paragraph [ref=e99]:
              - text: Trong số các thương hiệu nổi tiếng hiện nay, dòng ghế massage
              - link "Okinawa" [ref=e100] [cursor=pointer]:
                - /url: https://code6.mimadigi.vn/2026/september/nguyenchiquyet_113826w/ghe-massage-pacify-okinawa
              - text: luôn nhận được sự đánh giá cao từ giới chuyên môn và người tiêu dùng nhờ thiết kế tinh xảo cùng hệ thống bài tập chuyên sâu. Bên cạnh đó, phân khúc
              - link "Ghế Massage IHOCO" [ref=e101] [cursor=pointer]:
                - /url: https://code6.mimadigi.vn/2026/september/nguyenchiquyet_113826w/ghe-massage-ihoco-ih1136
              - text: cũng cực kỳ hút khách nhờ sự hài hòa giữa vẻ đẹp sang trọng, nhỏ gọn và tính năng đa dạng, phù hợp với không gian sống hiện đại của các gia đình trẻ.
            - heading "Máy chạy bộ đa năng – Khơi nguồn năng lượng mỗi ngày" [level=3] [ref=e102]
            - paragraph [ref=e103]: Để duy trì vóc dáng săn chắc và hệ tim mạch khỏe mạnh, sở hữu một chiếc máy chạy bộ tại nhà là phương án vô cùng tiện lợi. Tổng kho cung cấp đa dạng các mẫu máy chạy bộ từ đơn năng đến đa năng với công suất mạnh mẽ từ 2.5 HP đến 4.5 HP.
            - paragraph [ref=e104]: "Các dòng máy chạy bộ tại đây được trang bị thảm chạy nhiều lớp chống trượt, hệ thống giảm xóc bằng đệm cao su hoặc lò xo giúp bảo vệ tối đa khớp gối khỏi phản lực khi chạy. Màn hình LCD hiển thị trực quan các thông số: vận tốc, quãng đường, thời gian, nhịp tim và lượng calo tiêu thụ, giúp bạn dễ dàng theo dõi hiệu quả tập luyện."
            - paragraph [ref=e105]:
              - text: Đặc biệt, các dòng máy chạy bộ thương hiệu
              - link "Aguri" [ref=e106] [cursor=pointer]:
                - /url: https://code6.mimadigi.vn/2026/september/nguyenchiquyet_113826w/may-chay-bo-aguri-agt-129l
              - text: luôn được người tiêu dùng ưu tiên chọn lựa bởi độ bền bỉ vượt trội của động cơ, thiết kế khung sườn thép chịu lực chắc chắn cùng các bài tập được lập trình khoa học từ cơ bản đến nâng cao.
            - heading "Thiết bị thể thao chuyên nghiệp cho phòng gym gia đình" [level=3] [ref=e107]
            - paragraph [ref=e108]: "Bên cạnh sản phẩm chủ lực là ghế massage và máy chạy bộ, tổng kho còn cung cấp dải sản phẩm thiết bị thể thao phong phú nhằm phục vụ nhu cầu setup phòng tập tại nhà (Home Gym):"
            - list [ref=e109]:
              - listitem [ref=e110]:
                - strong [ref=e111]: "Xe đạp tập thể dục:"
                - text: Thiết kế nhỏ gọn, dễ dàng điều chỉnh kháng lực cơ học hoặc từ tính, thích hợp cho việc rèn luyện sức bền và phục hồi chức năng xương khớp.
              - listitem [ref=e112]:
                - strong [ref=e113]: "Giàn tạ đa năng:"
                - text: Hỗ trợ hàng chục bài tập chuyên sâu cho các nhóm cơ ngực, vai, lưng, bụng, đùi, giúp phát triển cơ bắp toàn diện ngay tại nhà.
              - listitem [ref=e114]:
                - strong [ref=e115]: "Dụng cụ hỗ trợ tập luyện:"
                - text: Thảm tập yoga, tạ tay, dây kháng lực, máy massage cầm tay đáp ứng mọi nhu cầu rèn luyện thể chất từ cơ bản đến chuyên nghiệp.
            - heading "Dịch vụ sau bán hàng chuyên nghiệp – An tâm trọn vẹn khi sử dụng" [level=2] [ref=e116]
            - paragraph [ref=e117]: Ghế massage và các thiết bị thể thao là những sản phẩm công nghệ có cấu trúc cơ điện phức tạp, cần chế độ chăm sóc và bảo trì bài bản. Hiểu được điều đó, chúng tôi chú trọng xây dựng hệ thống dịch vụ hậu mãi toàn diện với đội ngũ kỹ thuật viên giàu kinh nghiệm.
            - heading "Chế độ bảo hành ghế massage dài hạn" [level=3] [ref=e118]
            - paragraph [ref=e119]: Tất cả sản phẩm mua tại tổng kho đều được áp dụng chính sách bảo hành chính hãng từ 2 đến 6 năm tùy thuộc vào phân khúc sản phẩm. Chúng tôi cam kết thực hiện quy trình bảo hành nhanh chóng, tận nơi tại nhà khách hàng. Đội ngũ kỹ thuật viên luôn sẵn sàng túc trực, tiếp nhận thông tin và xử lý sự cố trong vòng 24h - 48h kể từ khi nhận được yêu cầu.
            - heading "Dịch vụ bảo dưỡng ghế massage định kỳ" [level=3] [ref=e120]
            - paragraph [ref=e121]: "Để đảm bảo thiết bị luôn vận hành êm ái, kéo dài tuổi thọ của da và động cơ, việc bảo dưỡng định kỳ là cực kỳ cần thiết. Tổng kho cung cấp gói dịch vụ bảo dưỡng chuyên nghiệp bao gồm:"
            - list [ref=e122]:
              - listitem [ref=e123]: Vệ sinh sạch sẽ hệ thống da ghế, loại bỏ bụi bẩn và nấm mốc tích tụ lâu ngày.
              - listitem [ref=e124]: Tra dầu bôi trơn chuyên dụng cho hệ thống con lăn, trục ray và các khớp truyền động cơ học.
              - listitem [ref=e125]: Kiểm tra toàn bộ hệ thống túi khí, van hơi và bo mạch điều khiển để phát hiện sớm các nguy cơ hỏng hóc.
            - heading "Dịch vụ sửa chữa ghế massage uy tín, linh kiện chính hãng" [level=3] [ref=e126]
            - paragraph [ref=e127]: Đối với các thiết bị đã qua thời gian dài sử dụng hoặc hết hạn bảo hành, chúng tôi cung cấp dịch vụ sửa chữa chuyên nghiệp với chi phí tối ưu nhất. Các hạng mục sửa chữa bao gồm thay mới da ghế massage cao cấp chống bong tróc, thay thế túi khí bị rò rỉ hơi, sửa chữa hoặc thay thế bo mạch nguồn, bo mạch điều khiển bị lỗi do chập điện hoặc ẩm ướt. Toàn bộ linh kiện thay thế đều cam kết là hàng chính hãng, có nguồn gốc rõ ràng và đi kèm chế độ bảo hành riêng biệt.
            - heading "Hướng dẫn chọn mua thiết bị chăm sóc sức khỏe phù hợp" [level=2] [ref=e128]
            - paragraph [ref=e129]: "Để sở hữu một sản phẩm ưng ý và phát huy tối đa công năng, bạn nên lưu ý một số tiêu chí quan trọng khi lựa chọn:"
            - list [ref=e130]:
              - listitem [ref=e131]:
                - strong [ref=e132]: "Xác định rõ nhu cầu sử dụng:"
                - text: Nếu mua ghế massage cho người cao tuổi, hãy ưu tiên các dòng ghế có con lăn silicon mềm, có chế độ nhiệt hồng ngoại và bài tập kéo giãn nhẹ nhàng. Nếu mua cho người trẻ, người tập thể thao cường độ cao, các dòng ghế có con lăn 4D, 5D lực đấm sâu và mạnh mẽ sẽ là lựa chọn phù hợp hơn.
              - listitem [ref=e133]:
                - strong [ref=e134]: "Cân nhắc diện tích lắp đặt:"
                - text: Hãy đo đạc kỹ vị trí dự kiến đặt máy chạy bộ hoặc ghế massage. Đối với nhà phố hoặc chung cư có diện tích vừa phải, các mẫu ghế massage có tính năng lùi tường tự động (Zero Wall) hoặc máy chạy bộ có thể gấp gọn sẽ giúp tối ưu hóa không gian sống.
              - listitem [ref=e135]:
                - strong [ref=e136]: "Trải nghiệm thực tế trước khi mua:"
                - text: Trăm nghe không bằng một thấy, hãy dành thời gian đến trực tiếp hệ thống showroom hoặc tổng kho để ngồi thử ghế massage hoặc chạy thử máy chạy bộ ít nhất từ 15 đến 20 phút để cảm nhận rõ độ êm ái và tính năng của sản phẩm.
            - heading "Tổng kho ghế massage chính hãng – Điểm đến tin cậy của mọi gia đình" [level=2] [ref=e137]
            - paragraph [ref=e138]: Với nhiều năm hoạt động trong lĩnh vực phân phối thiết bị chăm sóc sức khỏe và thể thao, chúng tôi luôn lấy sự hài lòng của khách hàng làm thước đo cho sự thành công. Tổng kho không chỉ mang đến sản phẩm chất lượng vượt trội, giá thành hợp lý mà còn xây dựng một hệ sinh thái dịch vụ hoàn chỉnh từ khâu tư vấn, vận chuyển, lắp đặt cho đến bảo trì trọn đời.
            - paragraph [ref=e139]: Hãy để chúng tôi đồng hành cùng bạn trên hành trình kiến tạo một cuộc sống khỏe mạnh, tràn đầy năng lượng và hạnh phúc mỗi ngày.
            - paragraph [ref=e140]:
              - strong [ref=e141]: "THÔNG TIN LIÊN HỆ:"
              - strong [ref=e142]: Tổng kho ghế massage chính hãng
              - text: "Địa chỉ: Số 34, Tỉnh Lộ 8, Ấp 10, Xã Phú Hòa Đông, TP Hồ Chí Minh"
              - text: "Hotline: 0984235739"
              - text: "Điện thoại: 0984235739"
              - text: "Email: quyetnguyen718@gmail.com"
          - link "Xem thêm bài viết" [ref=e145] [cursor=pointer]:
            - /url: javascript:;
            - generic [ref=e146]: Xem thêm bài viết
            - img [ref=e147]
      - generic [ref=e151]:
        - generic [ref=e152]:
          - generic [ref=e153]:
            - heading "Tầm Nhìn" [level=2] [ref=e154]
            - generic [ref=e155]:
              - paragraph [ref=e156]: Trở thành thương hiệu uy tín trong lĩnh vực thiết bị chăm sóc sức khỏe và luyện tập tại nhà, mang đến hệ sinh thái sản phẩm đa dạng, chất lượng và ứng dụng công nghệ hiện đại. Không ngừng nâng cao trải nghiệm khách hàng, hướng đến việc xây dựng giải pháp chăm sóc sức khỏe tiện lợi, chủ động và phù hợp cho mọi gia đình.
              - paragraph [ref=e157]
          - img "Tầm Nhìn" [ref=e159]
        - generic [ref=e160]:
          - generic [ref=e161]:
            - heading "Sứ mệnh" [level=2] [ref=e162]
            - paragraph [ref=e164]: Cung cấp các sản phẩm ghế massage, máy chạy bộ, dụng cụ thể thao và massage mini chất lượng, đáp ứng đa dạng nhu cầu thư giãn, vận động và chăm sóc cơ thể. Với sự tận tâm trong tư vấn và dịch vụ, thương hiệu đồng hành cùng khách hàng trong việc xây dựng lối sống khỏe mạnh, tiện nghi và nâng cao chất lượng cuộc sống mỗi ngày.
          - img "Sứ mệnh" [ref=e166]
      - generic [ref=e168]:
        - heading "Giá trị cốt lõi" [level=2] [ref=e170]
        - generic [ref=e171]:
          - generic:
            - img "Chuyên nghiệp" [ref=e173]
            - generic [ref=e174]:
              - heading "Chuyên nghiệp" [level=3] [ref=e175]
              - generic [ref=e176]: Chỉn chu trong sản phẩm và dịch vụ.
          - generic:
            - img "Thấu hiểu" [ref=e178]
            - generic [ref=e179]:
              - heading "Thấu hiểu" [level=3] [ref=e180]
              - generic [ref=e181]: Lắng nghe và đáp ứng đúng nhu cầu.
          - generic:
            - img "Trách nhiệm" [ref=e183]
            - generic [ref=e184]:
              - heading "Trách nhiệm" [level=3] [ref=e185]
              - generic [ref=e186]: Luôn đặt lợi ích khách hàng lên hàng đầu.
          - generic:
            - img "Bền vững" [ref=e188]
            - generic [ref=e189]:
              - heading "Bền vững" [level=3] [ref=e190]
              - generic [ref=e191]: Hướng đến những giá trị lâu dài.
          - generic:
            - img "Chính trực" [ref=e193]
            - generic [ref=e194]:
              - heading "Chính trực" [level=3] [ref=e195]
              - generic [ref=e196]: Minh bạch và trung thực trong mọi hoạt động.
      - generic [ref=e197]:
        - heading "Hình ảnh hoạt động" [level=2] [ref=e200]
        - generic [ref=e201]:
          - generic [ref=e203]:
            - link "test2222 (1) (1) (1) (1)" [ref=e204] [cursor=pointer]:
              - /url: upload/product/
              - img "test2222 (1) (1) (1) (1)" [ref=e205]
            - link "test2222 (1) (1) (1)" [ref=e206] [cursor=pointer]:
              - /url: upload/product/
              - img "test2222 (1) (1) (1)" [ref=e207]
            - link "test2222 (1) (1)" [ref=e208] [cursor=pointer]:
              - /url: upload/product/
              - img "test2222 (1) (1)" [ref=e209]
            - link [ref=e210] [cursor=pointer]:
              - /url: upload/product/
              - img [ref=e211]
            - link [ref=e212] [cursor=pointer]:
              - /url: upload/product/
              - img [ref=e213]
            - link [ref=e214] [cursor=pointer]:
              - /url: upload/product/
              - img [ref=e215]
            - link [ref=e216] [cursor=pointer]:
              - /url: upload/product/
              - img [ref=e217]
            - link [ref=e218] [cursor=pointer]:
              - /url: upload/product/
              - img [ref=e219]
            - link [ref=e220] [cursor=pointer]:
              - /url: upload/product/
              - img [ref=e221]
            - link [ref=e222] [cursor=pointer]:
              - /url: upload/product/
              - img [ref=e223]
            - link [ref=e224] [cursor=pointer]:
              - /url: upload/product/
              - img [ref=e225]
            - link [ref=e226] [cursor=pointer]:
              - /url: upload/product/
              - img [ref=e227]
            - link [ref=e228] [cursor=pointer]:
              - /url: upload/product/
              - img [ref=e229]
            - link [ref=e230] [cursor=pointer]:
              - /url: upload/product/
              - img [ref=e231]
            - link [ref=e232] [cursor=pointer]:
              - /url: upload/product/
              - img [ref=e233]
            - link [ref=e234] [cursor=pointer]:
              - /url: upload/product/
              - img [ref=e235]
            - link [ref=e236] [cursor=pointer]:
              - /url: upload/product/
              - img [ref=e237]
            - link [ref=e238] [cursor=pointer]:
              - /url: upload/product/
              - img [ref=e239]
          - generic [ref=e241]:
            - link "test2222 (1)" [ref=e242] [cursor=pointer]:
              - /url: upload/product/
              - img "test2222 (1)" [ref=e243]
            - link "test2222" [ref=e244] [cursor=pointer]:
              - /url: upload/product/thiet-ke-phong-tra-dao-go-tu-nhien-2-8148.jpg
              - img "test2222" [ref=e245]
            - link [ref=e246] [cursor=pointer]:
              - /url: upload/product/
              - img [ref=e247]
            - link [ref=e248] [cursor=pointer]:
              - /url: upload/product/thiet-ke-phong-tra-dao-go-tu-nhien-2-8148.jpg
              - img [ref=e249]
            - link [ref=e250] [cursor=pointer]:
              - /url: upload/product/
              - img [ref=e251]
            - link [ref=e252] [cursor=pointer]:
              - /url: upload/product/thiet-ke-phong-tra-dao-go-tu-nhien-2-8148.jpg
              - img [ref=e253]
            - link [ref=e254] [cursor=pointer]:
              - /url: upload/product/
              - img [ref=e255]
            - link [ref=e256] [cursor=pointer]:
              - /url: upload/product/thiet-ke-phong-tra-dao-go-tu-nhien-2-8148.jpg
              - img [ref=e257]
            - link [ref=e258] [cursor=pointer]:
              - /url: upload/product/
              - img [ref=e259]
            - link [ref=e260] [cursor=pointer]:
              - /url: upload/product/thiet-ke-phong-tra-dao-go-tu-nhien-2-8148.jpg
              - img [ref=e261]
            - link [ref=e262] [cursor=pointer]:
              - /url: upload/product/
              - img [ref=e263]
            - link [ref=e264] [cursor=pointer]:
              - /url: upload/product/thiet-ke-phong-tra-dao-go-tu-nhien-2-8148.jpg
              - img [ref=e265]
            - link [ref=e266] [cursor=pointer]:
              - /url: upload/product/
              - img [ref=e267]
            - link [ref=e268] [cursor=pointer]:
              - /url: upload/product/thiet-ke-phong-tra-dao-go-tu-nhien-2-8148.jpg
              - img [ref=e269]
            - link [ref=e270] [cursor=pointer]:
              - /url: upload/product/
              - img [ref=e271]
            - link [ref=e272] [cursor=pointer]:
              - /url: upload/product/thiet-ke-phong-tra-dao-go-tu-nhien-2-8148.jpg
              - img [ref=e273]
    - generic [ref=e274]:
      - link "Tổng kho ghế massage chính hãng" [ref=e277] [cursor=pointer]:
        - /url: https://code6.mimadigi.vn/2026/september/nguyenchiquyet_113826w/
        - img "Tổng kho ghế massage chính hãng" [ref=e278]
      - generic [ref=e281]:
        - generic [ref=e282]:
          - paragraph [ref=e283]: Thông tin liên hệ
          - generic [ref=e284]:
            - paragraph [ref=e285]:
              - strong [ref=e286]: "📍 Địa chỉ:"
              - text: Số 34 , tỉnh lộ 15 , ấp 10 , xã Phú Hoà Đông , Tp HCM
              - strong [ref=e287]: "📞 Hotline:"
              - text: 0984 235 739
              - strong [ref=e288]: "📧 Email:"
              - text: quyetnguyen718@gmail.com
            - paragraph [ref=e289]:
              - strong [ref=e290]: "⏰ Thời gian làm việc:"
              - text: 24/7
            - paragraph [ref=e291]:
              - text: "link :"
              - link "link" [ref=e292] [cursor=pointer]:
                - /url: https://code6.mimadigi.vn/2026/september/nguyenchiquyet_113826w/gioi-thieu
        - generic [ref=e294]:
          - paragraph [ref=e295]: Về chúng tôi
          - list [ref=e296]:
            - listitem [ref=e297]:
              - link "Trang chủ" [ref=e298] [cursor=pointer]:
                - /url: https://code6.mimadigi.vn/2026/september/nguyenchiquyet_113826w/
            - listitem [ref=e299]:
              - link "Giới thiệu" [ref=e300] [cursor=pointer]:
                - /url: gioi-thieu
            - listitem [ref=e301]:
              - link "Sản phẩm" [ref=e302] [cursor=pointer]:
                - /url: san-pham
            - listitem [ref=e303]:
              - link "Tin tức" [ref=e304] [cursor=pointer]:
                - /url: tin-tuc
            - listitem [ref=e305]:
              - link "Liên hệ" [ref=e306] [cursor=pointer]:
                - /url: lien-he
        - generic [ref=e307]:
          - paragraph [ref=e308]: Chính sách hỗ trợ
          - list [ref=e309]:
            - listitem [ref=e310]:
              - link "Chính sách bảo hành" [ref=e311] [cursor=pointer]:
                - /url: chinh-sach-bao-hanh
            - listitem [ref=e312]:
              - link "Chính sách đổi trả" [ref=e313] [cursor=pointer]:
                - /url: chinh-sach-doi-tra
            - listitem [ref=e314]:
              - link "Chính sách giao hàng" [ref=e315] [cursor=pointer]:
                - /url: chinh-sach-giao-hang
            - listitem [ref=e316]:
              - link "Thu cũ đổi mới ghế massage" [ref=e317] [cursor=pointer]:
                - /url: thu-cu-doi-moi-ghe-massage
            - listitem [ref=e318]:
              - link "Chính sách bảo mật" [ref=e319] [cursor=pointer]:
                - /url: chinh-sach-bao-mat
        - generic [ref=e320]:
          - paragraph [ref=e321]: Theo dõi chúng tôi tại
          - generic [ref=e322]:
            - link "Facebook" [ref=e323] [cursor=pointer]:
              - /url: https://www.facebook.com/Quyetdeptraj
              - img "Facebook" [ref=e324]
            - link "Message" [ref=e325] [cursor=pointer]:
              - /url: ""
              - img "Message" [ref=e326]
            - link "Instargam" [ref=e327] [cursor=pointer]:
              - /url: ""
              - img "Instargam" [ref=e328]
            - link "Tiktok" [ref=e329] [cursor=pointer]:
              - /url: https://www.tiktok.com/@quyet18190?_r=1&_t=ZS-99kPME0aoTa
              - img "Tiktok" [ref=e330]
            - link "Youtobe" [ref=e331] [cursor=pointer]:
              - /url: ""
              - img "Youtobe" [ref=e332]
      - generic [ref=e335]: Copyright @ 2026 Tổng ghế kho massage chính hãng . All Right Reserved. Thiết kế Web MIMA
    - generic [ref=e336]:
      - 'link "Call me: 0984235739" [ref=e337] [cursor=pointer]':
        - /url: tel:0984235739
        - img [ref=e341]
        - generic [ref=e344]: "Call me: 0984235739"
      - 'link "Zalo: 0984235739" [ref=e345] [cursor=pointer]':
        - /url: https://zalo.me/0984235739
        - img [ref=e349]
        - generic [ref=e350]: "Zalo: 0984235739"
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
              - generic: "85"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 85/100
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
          - generic: ✅ 17
          - generic: Đạt
        - generic:
          - generic: ❌ 3
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: Giới thiệu
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e351]:
      - generic [ref=e352]: "❌ Chi tiết lỗi cần khắc phục (3/20):"
      - generic [ref=e353]:
        - generic [ref=e354]:
          - generic [ref=e355]: 6. Liên kết (Links)
          - generic [ref=e356]: 1 lỗi
        - generic [ref=e357]:
          - strong [ref=e359]: "Không có broken links (lỗi: 1/24)"
          - generic [ref=e360]: "⚠️ Broken links: upload/product/ (status: 403)"
      - generic [ref=e361]:
        - generic [ref=e362]:
          - generic [ref=e363]: 8. Tốc độ & Core Web Vitals
          - generic [ref=e364]: 2 lỗi
        - generic [ref=e365]:
          - strong [ref=e367]: "[📱 MOBILE (ƯU TIÊN)] Tổng điểm Performance: 55/100 (≥ 60)"
          - generic [ref=e368]: ⚠️ [📱 MOBILE (ƯU TIÊN)] Điểm Performance 55/100 dưới ngưỡng 60. Phân tích chi tiết LCP/CLS/INP bên dưới...
        - generic [ref=e369]:
          - strong [ref=e371]: "[📱 MOBILE (ƯU TIÊN)] LCP (Largest Contentful Paint): 13504ms (< 2500ms)"
          - generic [ref=e372]:
            - text: "⚠️ [📱 MOBILE (ƯU TIÊN)] LCP quá cao: 13504ms (chuẩn: < 2.5s) → Thủ phạm LCP:"
            - img "...</div" [ref=e373]
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 85/100 dưới ngưỡng 96%. Có 3/20 tiêu chí không đạt.
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