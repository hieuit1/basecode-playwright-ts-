# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Treo Cờ Phướn Quảng Cáo TPHCM-Treo Nhanh, Chất Lượng (/treo-co-phuon-quang-cao-tphcm-treo-nhanh-chat-luong)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 93/100 dưới ngưỡng 96%. Có 1/15 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5]:
          - link "CÔNG TY TNHH QUẢNG CÁO TRUYỀN THÔNG MINH LỢI" [ref=e7] [cursor=pointer]:
            - /url: ""
            - img "CÔNG TY TNHH QUẢNG CÁO TRUYỀN THÔNG MINH LỢI" [ref=e8]
          - link "CÔNG TY TNHH QUẢNG CÁO TRUYỀN THÔNG MINH LỢI" [ref=e10] [cursor=pointer]:
            - /url: ""
            - img "CÔNG TY TNHH QUẢNG CÁO TRUYỀN THÔNG MINH LỢI" [ref=e11]
        - generic [ref=e12]:
          - img "icon" [ref=e13]
          - generic [ref=e14]:
            - text: Hotline 24/7
            - link "0917.120.838" [ref=e15] [cursor=pointer]:
              - /url: "tel: 0917.120.838"
              - paragraph [ref=e16]: 0917.120.838
        - generic [ref=e17]:
          - img "icon" [ref=e18]
          - generic [ref=e19]:
            - text: email liên hệ
            - link "d.minhloi@gmail.com" [ref=e20] [cursor=pointer]:
              - /url: mailto:d.minhloi@gmail.com
              - paragraph [ref=e21]: d.minhloi@gmail.com
        - generic [ref=e22]:
          - img "icon" [ref=e23]
          - generic [ref=e24]:
            - text: Giờ làm việc
            - paragraph [ref=e25]: 8h00 - 21h00 (Hàng ngày)
        - text:  
      - navigation [ref=e26]:
        - generic [ref=e27]:
          - list [ref=e28]:
            - listitem [ref=e29]:
              - link "Trang chủ" [ref=e30] [cursor=pointer]:
                - /url: ""
            - listitem [ref=e31]:
              - link "Giới thiệu" [ref=e32] [cursor=pointer]:
                - /url: gioi-thieu
            - listitem [ref=e33]:
              - link "Hạng mục thi công" [ref=e34] [cursor=pointer]:
                - /url: hang-muc-thi-cong
            - listitem [ref=e35]:
              - link "Dịch vụ" [ref=e36] [cursor=pointer]:
                - /url: dich-vu
            - listitem [ref=e37]:
              - link "Tuyển dụng" [ref=e38] [cursor=pointer]:
                - /url: tuyen-dung
            - listitem [ref=e39]:
              - link "Tin tức" [ref=e40] [cursor=pointer]:
                - /url: tin-tuc
            - listitem [ref=e41]:
              - link "Liên hệ" [ref=e42] [cursor=pointer]:
                - /url: lien-he
          - generic [ref=e43]:
            - generic [ref=e44]:
              - paragraph [ref=e45] [cursor=pointer]:
                - generic [ref=e46]: 
              - generic [ref=e47]:
                - textbox "Tìm kiếm" [ref=e48]
                - paragraph [ref=e49] [cursor=pointer]:
                  - generic [ref=e50]: 
            - link "Email" [ref=e51] [cursor=pointer]:
              - /url: lien-he
              - img "Email" [ref=e52]
    - text:  
  - img "CÔNG TY TNHH QUẢNG CÁO TRUYỀN THÔNG MINH LỢI" [ref=e54]
  - list [ref=e57]:
    - listitem [ref=e58]:
      - link "Trang chủ" [ref=e59] [cursor=pointer]:
        - /url: https://quangcaominhloi.vn/
        - img [ref=e60]
        - generic [ref=e62]: Trang chủ
    - listitem [ref=e63]:
      - text: /
      - link "Dịch vụ" [ref=e64] [cursor=pointer]:
        - /url: https://quangcaominhloi.vn/dich-vu
    - listitem [ref=e65]:
      - text: /
      - link "Treo Cờ Phướn Quảng Cáo TPHCM-Treo Nhanh, Chất Lượng" [ref=e66] [cursor=pointer]:
        - /url: https://quangcaominhloi.vn/treo-co-phuon-quang-cao-tphcm-treo-nhanh-chat-luong
  - generic [ref=e69]:
    - generic [ref=e70]:
      - generic [ref=e72]: Treo Cờ Phướn Quảng Cáo TPHCM-Treo Nhanh, Chất Lượng
      - generic [ref=e73]:
        - img [ref=e74]
        - generic [ref=e77]: 25 Lượt xem
      - generic [ref=e79]:
        - generic [ref=e80] [cursor=pointer]:
          - img [ref=e81]
          - text: Mục lục
          - img [ref=e84]
        - text: ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾
      - text: ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾
      - generic [ref=e88]:
        - paragraph [ref=e89]:
          - text: Thành phố Hồ Chí Minh với hơn 10 triệu dân và mạng lưới giao thông dày đặc luôn là chiến trường cạnh tranh khốc liệt của các thương hiệu. Giữa hàng loạt phương thức truyền thông số dễ bị lướt qua trên màn hình điện thoại, quảng cáo ngoài trời (OOH) vẫn giữ vững vị thế nhờ khả năng tiếp cận trực tiếp và cưỡng bách thị giác. Trong số đó, dịch vụ
          - strong [ref=e90]:
            - link "treo cờ phướn quảng cáo tphcm" [ref=e91] [cursor=pointer]:
              - /url: https://quangcaominhloi.vn/treo-co-phuon-quang-cao-tphcm-giai-phap-phu-diem-tiep-can-cao
          - text: nổi lên như một giải pháp phân phối hình ảnh thương hiệu ở quy mô lớn, len lỏi vào từng tuyến phố huyết mạch để tiếp cận hàng triệu lượt khách hàng mỗi ngày với chi phí vô cùng tối ưu.
        - heading "Cờ Phướn Quảng Cáo Là Gì? Phân Biệt Cờ Phướn Và Băng Rôn" [level=2] [ref=e92]
        - paragraph [ref=e93]: Nhiều người thường nhầm lẫn giữa hai khái niệm cờ phướn và băng rôn do chúng đều là công cụ quảng cáo ngoài trời bằng vải hoặc bạt. Tuy nhiên, về mặt thiết kế, quy chuẩn thi công và mục đích sử dụng, đây là hai dòng sản phẩm hoàn toàn khác biệt mà doanh nghiệp cần phân biệt rõ để tối ưu hóa chiến dịch truyền thông của mình.
        - heading "Định nghĩa cờ phướn quảng cáo" [level=3] [ref=e94]
        - paragraph [ref=e95]: Cờ phướn (hay còn gọi là banner dọc) là loại cờ có hình chữ nhật đứng, thường được treo dọc theo các cột đèn chiếu sáng, cột điện hoặc thân cây bên lề đường. Kích thước tiêu chuẩn của cờ phướn quảng cáo khá đa dạng, phổ biến nhất là các khổ 30cm x 60cm, 40cm x 80cm, 50cm x 100cm cho đến các khổ lớn hơn như 60cm x 120cm hoặc 80cm x 160cm. Cờ phướn thường chứa các thông tin ngắn gọn như logo thương hiệu, thông điệp cốt lõi, hình ảnh đại diện và thời gian diễn ra chương trình.
        - paragraph [ref=e96]:
          - img "Treo Cờ Phướn Quảng Cáo TPHCM" [ref=e97]
        - heading "Định nghĩa băng rôn quảng cáo" [level=3] [ref=e98]
        - paragraph [ref=e99]: Khác với cờ phướn, băng rôn (hay banner ngang) có thiết kế hình chữ nhật nằm ngang. Chúng thường được căng ngang giữa hai cột điện, hai thân cây hoặc treo trước mặt tiền của các cửa hàng, đại lý, khu vực tổ chức sự kiện. Kích thước băng rôn dao động từ 1m x 5m cho đến 1m x 8m. Diện tích lớn của băng rôn cho phép hiển thị nhiều thông tin chi tiết hơn như chương trình khuyến mãi, danh sách sản phẩm, địa điểm và cách thức tham gia chương trình.
        - heading "Bảng so sánh chi tiết giữa cờ phướn và băng rôn" [level=3] [ref=e100]
        - paragraph [ref=e101]: "Để giúp doanh nghiệp có cái nhìn trực quan và đưa ra lựa chọn phù hợp nhất với ngân sách cũng như mục tiêu chiến dịch, dưới đây là bảng so sánh chi tiết:"
        - list [ref=e102]:
          - listitem [ref=e103]:
            - strong [ref=e104]: "Hướng treo:"
            - text: Cờ phướn treo theo chiều dọc; Băng rôn treo theo chiều ngang.
          - listitem [ref=e105]:
            - strong [ref=e106]: "Vị trí lắp đặt:"
            - text: Cờ phướn được cố định vào các cột dọc sát vỉa hè; Băng rôn được chăng ngang qua đường (hạn chế do quy định đô thị) hoặc treo sát mặt tiền tòa ứng dụng.
          - listitem [ref=e107]:
            - strong [ref=e108]: "Lượng thông tin hiển thị:"
            - text: Cờ phướn tối giản, chỉ tập trung vào nhận diện thương hiệu hoặc một thông điệp cực ngắn; Băng rôn đầy đủ thông tin, chương trình ưu đãi, số điện thoại, địa chỉ.
          - listitem [ref=e109]:
            - strong [ref=e110]: "Độ phủ và mật độ:"
            - text: Cờ phướn thường được treo hàng loạt với số lượng lớn (hàng chục đến hàng trăm cây trên một tuyến đường) tạo hiệu ứng lặp lại liên tục; Băng rôn thường được treo đơn lẻ hoặc với mật độ thưa hơn tại các điểm nút giao thông chính.
        - heading "Các Loại Cờ Phướn Phổ Biến Trên Thị Trường Hiện Nay" [level=2] [ref=e111]
        - paragraph [ref=e112]: Tùy thuộc vào mục đích truyền thông, địa điểm tổ chức và ngân sách của doanh nghiệp, cờ phướn được thiết kế và sản xuất dưới nhiều hình thức khác nhau. Việc chọn đúng loại cờ phướn giúp nâng cao tính thẩm mỹ và kéo dài tuổi thọ cho sản phẩm dưới tác động của thời tiết.
        - heading "Cờ phướn dọc treo cột đèn đường" [level=3] [ref=e113]
        - paragraph [ref=e114]: Đây là loại hình phổ biến nhất trong các chiến dịch quảng bá đô thị tại TPHCM. Cờ phướn được in trên chất liệu bạt chịu lực, hai đầu được xỏ cây gỗ hoặc sắt và cố định chắc chắn vào cột điện, cột đèn bằng dây kẽm hoặc dây rút chuyên dụng. Loại cờ này có ưu điểm là nằm ngay tầm mắt của người tham gia giao thông, xuất hiện nối đuôi nhau tạo ra hiệu ứng ghi nhớ thương hiệu một cách tự nhiên và bền bỉ.
        - paragraph [ref=e115]:
          - img "Treo Cờ Phướn Quảng Cáo TPHCM" [ref=e116]
        - heading "Cờ phướn cánh buồm (Teardrop/Feather Flag)" [level=3] [ref=e117]
        - paragraph [ref=e118]:
          - text: Đúng như tên gọi, loại cờ phướn này có hình dáng uốn lượn mềm mại giống như cánh buồm hoặc giọt nước. Chúng được nâng đỡ bởi một hệ thống cột cờ làm bằng sợi thủy tinh hoặc nhôm có thể uốn cong linh hoạt và cắm trên một đế thép đứng vững chãi. Cờ phướn cánh buồm rất được ưa chuộng tại các sự kiện ngoài trời, bãi biển, các showroom ô tô, khu đô thị mới hoặc dùng trong các hoạt động roadshow quảng cáo nhờ vẻ ngoài sang trọng, hiện đại và luôn bay phất phơ thu hút sự chú ý khi có gió thổi.
          - img "Treo Cờ Phướn Quảng Cáo TPHCM" [ref=e119]
        - heading "Cờ phướn nhiều màu (Cờ chuối)" [level=3] [ref=e120]
        - paragraph [ref=e121]: Đây là loại cờ phướn truyền thống gồm nhiều màu sắc rực rỡ như xanh, đỏ, tím, vàng, cam... thường không in ấn thông tin thương hiệu mà chỉ dùng để tạo không khí lễ hội, trang hoàng đường phố vào các dịp lễ Tết, sự kiện chính trị, ngày kỷ niệm trọng đại của đất nước hoặc các hội chợ thương mại quy mô lớn.
        - heading "Tại Sao Nên Chọn Treo Cờ Phướn Quảng Cáo Tại TPHCM?" [level=2] [ref=e122]
        - paragraph [ref=e123]: Mặc dù ngân sách quảng cáo trực tuyến liên tục tăng cao, hình thức treo cờ phướn ngoài trời tại khu vực TPHCM vẫn giữ vững được sức hút và là sự lựa chọn ưu tiên của nhiều tập đoàn lớn. Điều này xuất phát từ những lợi thế độc quyền mà các kênh quảng cáo khác khó lòng thay thế được.
        - heading "Mật độ giao thông cực cao và tần suất tiếp cận liên tục" [level=3] [ref=e124]
        - paragraph [ref=e125]: TPHCM sở hữu những tuyến đường huyết mạch với hàng trăm ngàn lượt phương tiện qua lại mỗi giờ như Phạm Văn Đồng, Võ Văn Kiệt, Nam Kỳ Khởi Nghĩa, Nguyễn Văn Linh. Khi di chuyển trên đường hoặc những lúc dừng đèn đỏ, người dân có xu hướng quan sát xung quanh một cách tự nhiên. Một hàng cờ phướn được treo đồng bộ, bắt mắt dọc tuyến phố sẽ đập vào mắt người đi đường nhiều lần. Sự lặp đi lặp lại này giúp thương hiệu khắc sâu vào tâm trí khách hàng một cách vô thức.
        - paragraph [ref=e126]:
          - img "Treo Cờ Phướn Quảng Cáo TPHCM" [ref=e127]
        - heading "Khả năng khoanh vùng khu vực mục tiêu chính xác" [level=3] [ref=e128]
        - paragraph [ref=e129]: Nếu quảng cáo trực tuyến đôi khi tiếp cận sai đối tượng do thuật toán hoặc phân vùng quá rộng, thì treo cờ phướn cho phép bạn tiếp cận chính xác vị trí mong muốn. Ví dụ, nếu bạn mở một trung tâm tiếng Anh tại Quận 7, việc treo cờ phướn trên các tuyến đường xung quanh quận 7 và khu vực lân cận như Quận 4, Quận 8 sẽ giúp tiếp cận trực tiếp tệp khách hàng sống và làm việc quanh đó, tránh lãng phí ngân sách cho những khu vực quá xa.
        - heading "Chi phí tiếp cận (CPM) siêu tiết kiệm" [level=3] [ref=e130]
        - paragraph [ref=e131]: So với việc đặt một bảng hiệu tấm lớn (Billboard) hay màn hình LED ngoài trời có giá lên tới hàng chục nghìn USD mỗi tháng, chi phí để triển khai một chiến dịch treo cờ phướn rẻ hơn rất nhiều. Với cùng một khoản ngân sách, doanh nghiệp có thể phủ sóng thương hiệu trên hàng chục tuyến đường lớn nhỏ khác nhau, tiếp cận hàng triệu lượt người xem mỗi ngày trong suốt thời gian diễn ra chiến dịch.
        - heading "Tạo hiệu ứng truyền thông đồng bộ và hoành tráng" [level=3] [ref=e132]
        - paragraph [ref=e133]: Khi hàng trăm lá cờ phướn cùng hiển thị một thông điệp, một màu sắc chủ đạo trải dài trên khắp các ngả đường, nó tạo ra một cảm giác hoành tráng, uy tín cho sự kiện hoặc thương hiệu đó. Khách hàng sẽ có cảm giác đây là một chương trình lớn, một doanh nghiệp quy mô và đáng tin cậy, từ đó thúc đẩy hành vi tìm kiếm thông tin và mua sắm.
        - heading "Kỹ Thuật Lựa Chọn Chất Liệu Và Kích Thước In Cờ Phướn Chuẩn" [level=2] [ref=e134]
        - paragraph [ref=e135]: Để cờ phướn quảng cáo đạt hiệu quả thẩm mỹ cao nhất và không bị rách nát, phai màu trước khi chiến dịch kết thúc, khâu lựa chọn chất liệu và kích thước in ấn đóng vai trò quyết định. Đội ngũ kỹ thuật của Minh Lợi luôn tư vấn kỹ lưỡng cho khách hàng dựa trên các tiêu chí thực tế.
        - paragraph [ref=e136]:
          - img "Treo Cờ Phướn Quảng Cáo TPHCM" [ref=e137]
        - heading "Chất liệu in cờ phướn phổ biến" [level=3] [ref=e138]
        - paragraph [ref=e139]: "Hiện nay, có ba loại chất liệu chính được sử dụng để sản xuất cờ phướn quảng cáo ngoài trời:"
        - list [ref=e140]:
          - listitem [ref=e141]:
            - strong [ref=e142]: "Bạt Hiflex:"
            - text: Đây là chất liệu nhựa PVC có màu trắng sữa, khả năng chịu lực co giãn tốt, chống thấm nước tuyệt đối và giá thành rất rẻ. Để treo ngoài trời lâu ngày, người ta thường dùng loại bạt Hiflex đế xám (bạt hai da) để ngăn ánh sáng xuyên qua từ phía sau, giúp hình ảnh in rõ nét, không bị mờ nhạt khi trời nắng gắt.
          - listitem [ref=e143]:
            - strong [ref=e144]: "Vải Silk (Lụa):"
            - text: Chất liệu này có độ mềm mại, mỏng nhẹ và bay bổng trước gió. Khi in bằng công nghệ kỹ thuật số hoặc in chuyển nhiệt, màu sắc trên vải silk lên rất sống động, mịn màng và sang trọng. Vải silk thường được lựa chọn cho các sự kiện cao cấp, treo trong nhà hoặc các khu vực showroom sang trọng.
          - listitem [ref=e145]:
            - strong [ref=e146]: "Decal hoặc PP ngoài trời:"
            - text: Cho chất lượng in ấn sắc nét đến từng chi tiết nhỏ nhất. Chất liệu PP ngoài trời sau khi in sẽ được cán một lớp màng bóng hoặc màng mờ để bảo vệ mực in khỏi nước mưa và tia cực tím, giúp sản phẩm có độ bền cơ học cao và vẻ ngoài chuyên nghiệp.
        - heading "Kích thước cờ phướn tiêu chuẩn" [level=3] [ref=e147]
        - paragraph [ref=e148]: "Tùy theo quy định của địa phương cũng như vị trí cột treo mà kích thước cờ phướn sẽ được điều chỉnh cho phù hợp để không che khuất tầm nhìn giao thông và đảm bảo mỹ quan đô thị:"
        - list [ref=e149]:
          - listitem [ref=e150]:
            - strong [ref=e151]: "Kích thước nhỏ (treo cột điện nhỏ, ngõ phố):"
            - text: 30cm x 60cm hoặc 40cm x 80cm.
          - listitem [ref=e152]:
            - strong [ref=e153]: "Kích thước trung bình (phổ biến nhất trên các tuyến đường nội thị):"
            - text: 50cm x 100cm hoặc 60cm x 120cm.
          - listitem [ref=e154]:
            - strong [ref=e155]: "Kích thước lớn (treo tại các trục đường lớn, đại lộ):"
            - text: 80cm x 160cm hoặc 80cm x 200cm.
        - heading "Quy Trình Xin Giấy Phép Treo Cờ Phướn Tại TPHCM" [level=2] [ref=e156]
        - paragraph [ref=e157]: Treo cờ phướn quảng cáo ngoài trời là hoạt động chịu sự quản lý nghiêm ngặt của Luật Quảng cáo 2012 và các thông tư ban hành kèm theo. Việc tự ý treo cờ phướn mà không xin phép cơ quan chức năng sẽ dẫn đến hậu quả bị tịch thu sản phẩm, phạt tiền từ vài triệu đến hàng chục triệu đồng và làm ảnh hưởng xấu đến uy tín của thương hiệu.
        - paragraph [ref=e158]:
          - img "Treo Cờ Phướn Quảng Cáo TPHCM" [ref=e159]
        - heading "Hồ sơ cần chuẩn bị xin phép quảng cáo" [level=3] [ref=e160]
        - paragraph [ref=e161]: "Doanh nghiệp muốn thực hiện chiến dịch treo cờ phướn một cách hợp pháp cần chuẩn bị đầy đủ bộ hồ sơ gửi lên Sở Văn hóa và Thể thao TPHCM, bao gồm:"
        - list [ref=e162]:
          - listitem [ref=e163]: Văn bản thông báo sản phẩm quảng cáo (ghi rõ nội dung, thời gian, địa điểm, số lượng cờ phướn).
          - listitem [ref=e164]: Bản sao giấy chứng nhận đăng ký kinh doanh của đơn vị quảng cáo và đơn vị thụ hưởng quảng cáo.
          - listitem [ref=e165]: Bản sao các giấy tờ chứng minh sự hợp chuẩn, hợp quy của sản phẩm, dịch vụ quảng cáo (nếu có quy định).
          - listitem [ref=e166]: Maquet (bản thiết kế) cờ phướn in màu, có chữ ký và đóng dấu của đơn vị đứng tên xin phép.
          - listitem [ref=e167]: Hợp đồng thuê địa điểm hoặc thỏa thuận treo cờ phướn với đơn vị quản lý cột đèn, cột điện (nếu có).
        - heading "Các quy định pháp lý quan trọng cần lưu ý" [level=3] [ref=e168]
        - paragraph [ref=e169]: "Khi thiết kế và lập kế hoạch treo cờ phướn quảng cáo, doanh nghiệp phải tuân thủ nghiêm ngặt các quy định sau để hồ sơ được duyệt nhanh chóng:"
        - list [ref=e170]:
          - listitem [ref=e171]:
            - strong [ref=e172]: "Thời hạn treo:"
            - text: Thời gian treo cờ phướn quảng cáo cho một chiến dịch tối đa không quá 15 ngày. Sau khi hết thời hạn, đơn vị quảng cáo có trách nhiệm tự tháo dỡ toàn bộ sản phẩm.
          - listitem [ref=e173]:
            - strong [ref=e174]: "Nội dung quảng cáo:"
            - text: Phải ghi rõ tên, địa chỉ của đơn vị thực hiện quảng cáo trên phần dưới cùng của lá cờ. Nội dung không được trái với thuần phong mỹ tục, không chứa các từ ngữ so sánh nhất khi chưa có giấy tờ chứng minh hợp pháp.
          - listitem [ref=e175]:
            - strong [ref=e176]: "Vị trí treo:"
            - text: Không được treo cờ phướn chắn ngang đường giao thông, không che khuất đèn tín hiệu, biển báo giao thông hoặc che lấp tầm nhìn của người điều khiển phương tiện.
        - heading "Kinh Nghiệm Triển Khai Chiến Dịch Treo Băng Rôn, Cờ Phướn Đạt Hiệu Quả Tối Đa" [level=2] [ref=e177]
        - paragraph [ref=e178]: Để một chiến dịch treo cờ phướn không chỉ dừng lại ở việc "treo lên cho có" mà thực sự mang lại chuyển đổi, thu hút khách hàng và gia tăng doanh số, doanh nghiệp cần có sự chuẩn bị bài bản và áp dụng những kinh nghiệm thực chiến dưới đây.
        - heading "Xác định đúng tuyến đường và khu vực mục tiêu" [level=3] [ref=e179]
        - paragraph [ref=e180]: "Không phải cứ tuyến đường lớn là sẽ mang lại hiệu quả tốt nhất. Doanh nghiệp cần phân tích hành vi của khách hàng mục tiêu để chọn tuyến đường phù hợp. Ví dụ: Các thương hiệu đồ gia dụng, siêu thị mini nên ưu tiên treo ở các tuyến đường dẫn vào khu dân cư đông đúc; Các chương trình tuyển sinh, khóa học nên treo quanh khu vực trường học, ký túc xá; Các sự kiện âm nhạc, giải trí nên tập trung ở khu vực trung tâm quận 1, quận 3 nơi giới trẻ thường xuyên tụ tập."
        - paragraph [ref=e181]:
          - img "Treo Cờ Phướn Quảng Cáo TPHCM" [ref=e182]
        - heading "Thiết kế thông điệp \"Chạm\" ngay từ cái nhìn đầu tiên" [level=3] [ref=e183]
        - paragraph [ref=e184]: Người đi đường chỉ có từ 2 đến 3 giây để nhìn lướt qua lá cờ phướn của bạn khi họ đang di chuyển. Do đó, thiết kế maquet phải cực kỳ đơn giản nhưng ấn tượng. Hãy sử dụng những tông màu tương phản mạnh (như đỏ - trắng, vàng - đen, xanh dương - trắng), cỡ chữ lớn, dễ đọc từ khoảng cách 10m. Thông điệp quảng cáo không nên vượt quá 6 chữ và hình ảnh minh họa phải trực quan, dễ hiểu.
        - heading "Kiểm soát và bảo trì cờ phướn trong suốt chiến dịch" [level=3] [ref=e185]
        - paragraph [ref=e186]: Thời tiết TPHCM rất thất thường với những cơn mưa rào kèm gió lốc mạnh có thể làm cờ phướn bị rách, rủ xuống hoặc bị bay mất. Bên cạnh đó, tình trạng mất cắp hoặc bị các đơn vị khác tháo dỡ đè lên cũng thường xuyên xảy ra. Do đó, một đơn vị thi công chuyên nghiệp phải có đội ngũ giám sát định kỳ hàng ngày, kịp thời phát hiện sự cố để gia cố, thay mới ngay lập tức, đảm bảo hình ảnh thương hiệu luôn xuất hiện chỉn chu nhất.
        - heading "Kết hợp đa kênh OOH để tạo hiệu ứng cộng hưởng" [level=3] [ref=e187]
        - paragraph [ref=e188]:
          - text: Một chiến dịch truyền thông ngoài trời hoàn hảo nên kết hợp treo cờ phướn với các hình thức khác như chạy
          - strong [ref=e189]: roadshow quảng cáo
          - text: bằng xe máy, xe đạp mang theo cờ phướn đồng bộ quanh các tuyến đường treo cờ. Tại các điểm bán, cửa hàng trưng bày, việc đầu tư
          - strong [ref=e190]: thi công bảng hiệu
          - text: chuyên nghiệp, bắt mắt sẽ là bước đón đầu dòng khách hàng đổ về từ các tuyến đường quảng cáo, giúp hoàn thiện phễu marketing offline của doanh nghiệp.
        - heading "Minh Lợi – Đơn Vị Thi Công Treo Cờ Phướn, Băng Rôn Trọn Gói Uy Tín Tại TPHCM" [level=2] [ref=e191]
        - paragraph [ref=e192]: Với nhiều năm kinh nghiệm thực chiến trong lĩnh vực quảng cáo ngoài trời tại khu vực phía Nam, Công ty TNHH Quảng cáo Truyền thông Minh Lợi tự hào là đối tác tin cậy của hàng trăm doanh nghiệp lớn nhỏ trong các chiến dịch phủ điểm tiếp cận bằng cờ phướn và băng rôn.
        - paragraph [ref=e193]:
          - img "Treo Cờ Phướn Quảng Cáo TPHCM" [ref=e194]
        - heading "Dịch vụ trọn gói từ A đến Z" [level=3] [ref=e195]
        - paragraph [ref=e196]: "Chúng tôi hiểu rằng việc thực hiện một chiến dịch quảng cáo ngoài trời tiêu tốn rất nhiều thời gian và công sức của doanh nghiệp từ khâu thiết kế, in ấn cho đến việc giải quyết các thủ tục pháp lý rắc rối. Chính vì vậy, Minh Lợi cung cấp gói dịch vụ toàn diện bao gồm:"
        - list [ref=e197]:
          - listitem [ref=e198]: Tư vấn lựa chọn tuyến đường đẹp, có lưu lượng giao thông cao và phù hợp với ngân sách.
          - listitem [ref=e199]: Hỗ trợ thiết kế maquet cờ phướn bắt mắt, chuẩn kích thước và đúng quy định của Luật Quảng cáo.
          - listitem [ref=e200]: Đảm nhận toàn bộ quy trình xin giấy phép treo cờ phướn từ khâu soạn hồ sơ đến làm việc với Sở Văn hóa và Thể thao TPHCM.
          - listitem [ref=e201]: In ấn chất lượng cao trên các dòng máy in phun kỹ thuật số hiện đại nhất, đảm bảo màu sắc trung thực, sắc nét và bền bỉ dưới mọi thời tiết.
          - listitem [ref=e202]: Thi công treo lắp nhanh chóng, an toàn bằng đội ngũ thợ lành nghề, trang bị đầy đủ dụng cụ bảo hộ.
          - listitem [ref=e203]: Giám sát, bảo trì, thay mới các lá cờ bị hỏng hóc trong suốt thời gian diễn ra chiến dịch và tiến hành tháo dỡ đúng thời hạn quy định khi chiến dịch kết thúc.
        - heading "Đội ngũ chuyên nghiệp, am hiểu thị trường" [level=3] [ref=e204]
        - paragraph [ref=e205]: Đội ngũ nhân sự của Minh Lợi không chỉ có tay nghề thi công cao mà còn am hiểu sâu sắc về địa bàn TPHCM, từ các ngõ ngách nhỏ đến các đại lộ lớn. Chúng tôi biết rõ tuyến đường nào có mật độ giao thông ra sao, hướng gió thế nào và cột treo nào dễ tiếp cận nhất, giúp chiến dịch của quý khách đạt hiệu quả truyền thông cao nhất.
        - heading "Cam kết chất lượng và tiến độ thi công" [level=3] [ref=e206]
        - paragraph [ref=e207]: Chúng tôi luôn đặt chữ Tín lên hàng đầu. Minh Lợi cam kết thực hiện đúng tiến độ đã thỏa thuận trong hợp đồng, cung cấp đầy đủ hình ảnh nghiệm thu thực tế từng cột treo cho khách hàng theo dõi. Mọi sự cố phát sinh như cờ rách, cờ đổ do mưa bão đều được đội ngũ bảo trì xử lý dứt điểm trong vòng 24 giờ.
        - heading "Báo Giá Dịch Vụ Treo Cờ Phướn Và Băng Rôn TPHCM Mới Nhất" [level=2] [ref=e208]
        - paragraph [ref=e209]: Chi phí cho một chiến dịch treo cờ phướn quảng cáo tại TPHCM phụ thuộc vào nhiều yếu tố khác nhau. Việc nắm rõ các yếu tố này giúp doanh nghiệp dễ dàng cân đối ngân sách và tối ưu hóa chi phí đầu tư.
        - paragraph [ref=e210]:
          - img "Treo Cờ Phướn Quảng Cáo TPHCM" [ref=e211]
        - heading "Các yếu tố ảnh hưởng trực tiếp đến báo giá" [level=3] [ref=e212]
        - paragraph [ref=e213]: "Khi gửi yêu cầu báo giá đến các đơn vị thi công quảng cáo, quý khách cần cung cấp các thông tin cơ bản sau để nhận được mức giá chính xác nhất:"
        - list [ref=e214]:
          - listitem [ref=e215]:
            - strong [ref=e216]: "Số lượng cờ phướn:"
            - text: Chiến dịch có số lượng càng lớn (từ vài trăm đến hàng ngàn lá cờ) thì chi phí in ấn và thi công trên mỗi đơn vị sản phẩm sẽ càng rẻ.
          - listitem [ref=e217]:
            - strong [ref=e218]: "Tuyến đường treo:"
            - text: Các tuyến đường nằm ở khu vực trung tâm quận 1, quận 3, quận 5 hoặc các trục lộ lớn thường có mức phí bản quyền và chi phí xin phép cao hơn so với các tuyến đường ở quận ngoại thành hoặc vùng ven.
          - listitem [ref=e219]:
            - strong [ref=e220]: "Chất liệu và quy cách in:"
            - text: Sử dụng bạt Hiflex thường sẽ có giá rẻ nhất, trong khi in PP ngoài trời cán màng hoặc in vải silk chuyển nhiệt sẽ có giá thành cao hơn đi kèm với tính thẩm mỹ vượt trội.
          - listitem [ref=e221]:
            - strong [ref=e222]: "Thời gian diễn ra chiến dịch:"
            - text: Thời gian treo càng dài thì chi phí bảo trì, giám sát càng tăng.
        - heading "Bảng giá tham khảo dịch vụ treo cờ phướn trọn gói tại TPHCM" [level=3] [ref=e223]
        - paragraph [ref=e224]: "Dưới đây là bảng giá tham khảo dịch vụ treo cờ phướn dọc (kích thước thông dụng 60cm x 120cm hoặc 80cm x 160cm) bao gồm cả in ấn, xin phép và thi công trọn gói tại TPHCM:"
        - list [ref=e225]:
          - listitem [ref=e226]:
            - strong [ref=e227]: "Số lượng dưới 50 cây:"
            - text: Chi phí dao động từ 250.000đ – 320.000đ/cây (Tùy tuyến đường và chất liệu).
          - listitem [ref=e228]:
            - strong [ref=e229]: "Số lượng từ 50 đến 200 cây:"
            - text: Chi phí dao động từ 180.000đ – 240.000đ/cây (Áp dụng ưu đãi chiết khấu số lượng).
          - listitem [ref=e230]:
            - strong [ref=e231]: "Số lượng trên 200 cây:"
            - text: Vui lòng liên hệ trực tiếp hotline 0917.120.838 để nhận mức chiết khấu đặc biệt và chính sách ưu đãi tốt nhất thị trường.
        - heading "Những Dịch Vụ Quảng Cáo Ngoài Trời Khác Tại Minh Lợi" [level=2] [ref=e232]
        - paragraph [ref=e233]: Bên cạnh thế mạnh về dịch vụ treo cờ phướn, băng rôn quảng cáo, Minh Lợi còn cung cấp một hệ sinh thái dịch vụ OOH toàn diện để giúp thương hiệu của bạn tỏa sáng rực rỡ và tiếp cận khách hàng từ mọi góc độ.
        - heading "Thi công bảng hiệu chuyên nghiệp" [level=3] [ref=e234]
        - paragraph [ref=e235]:
          - text: Chúng tôi nhận thiết kế và
          - strong [ref=e236]: thi công bảng hiệu
          - text: mặt tiền cửa hàng, showroom, tòa nhà văn phòng trên nhiều chất liệu cao cấp như Alu, chữ nổi Mica có đèn LED siêu sáng, bảng hiệu bạt Hiflex hộp đèn, bảng hiệu tôn sóng... Đảm bảo tính thẩm mỹ vượt trội, độ bền cao và khả năng nhận diện thương hiệu tuyệt vời vào ban đêm.
        - heading "Tổ chức Roadshow quảng cáo ấn tượng" [level=3] [ref=e237]
        - paragraph [ref=e238]: Roadshow là giải pháp kích hoạt thương hiệu cực kỳ mạnh mẽ. Minh Lợi chuyên tổ chức các chương trình roadshow xe đạp, roadshow xe máy, xe motor phân khối lớn hoặc xe ô tô mui trần, xe tải LED chạy quanh các tuyến phố sầm uất tại TPHCM. Chúng tôi cung cấp dịch vụ trọn gói từ khâu xin phép Sở Văn hóa, thiết kế trang trí xe, tuyển chọn PB/PG chuyên nghiệp, điều phối đoàn chạy và chụp ảnh quay phim báo cáo chiến dịch.
        - heading "Liên Hệ Đơn Vị Treo Cờ Phướn Uy Tín Tại TPHCM" [level=2] [ref=e239]
        - paragraph [ref=e240]: Nếu doanh nghiệp của bạn đang có kế hoạch tung ra sản phẩm mới, khai trương chi nhánh hay tổ chức một sự kiện quy mô lớn tại TPHCM và cần một giải pháp tiếp cận khách hàng nhanh chóng, hiệu quả với chi phí tiết kiệm nhất, hãy liên hệ ngay với Minh Lợi. Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng lắng nghe, tư vấn tận tình và đồng hành cùng sự thành công của quý khách.
        - paragraph [ref=e241]:
          - strong [ref=e242]: CÔNG TY TNHH QUẢNG CÁO TRUYỀN THÔNG MINH LỢI
          - text: "Địa chỉ: 271/10/56 Ngô Chí Quốc, Phường Tam Bình, Thủ Đức, TP.HCM"
          - text: "Hotline: 0917.120.838"
          - text: "Điện thoại: 0917.120.838"
          - text: "Email: d.minhloi@gmail.com"
          - text: "Website: https://quangcaominhloi.vn/"
    - generic [ref=e244]:
      - text: ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾ ▾
      - generic [ref=e246]:
        - heading "Bài viết liên quan" [level=2] [ref=e247]
        - generic [ref=e248]:
          - paragraph [ref=e250]:
            - link "Billboard Quảng Cáo TP.HCM – Giải Pháp OOH Hiệu Quả Cho Doanh Nghiệp" [ref=e251] [cursor=pointer]:
              - /url: billboard-quang-cao-tphcm-giai-phap-ooh-hieu-qua-cho-doanh-nghiep
              - img "Billboard Quảng Cáo TP.HCM – Giải Pháp OOH Hiệu Quả Cho Doanh Nghiệp" [ref=e252]
          - link "Billboard Quảng Cáo TP.HCM – Giải Pháp OOH Hiệu Quả Cho Doanh Nghiệp" [ref=e254] [cursor=pointer]:
            - /url: billboard-quang-cao-tphcm-giai-phap-ooh-hieu-qua-cho-doanh-nghiep
            - heading "Billboard Quảng Cáo TP.HCM – Giải Pháp OOH Hiệu Quả Cho Doanh Nghiệp" [level=3] [ref=e255]
        - generic [ref=e256]:
          - paragraph [ref=e258]:
            - link "Thi Công Pano TPHCM - Pano Quảng Cáo Ngoài Trời" [ref=e259] [cursor=pointer]:
              - /url: thi-cong-pano-tphcm-pano-quang-cao-ngoai-troi
              - img "Thi Công Pano TPHCM - Pano Quảng Cáo Ngoài Trời" [ref=e260]
          - link "Thi Công Pano TPHCM - Pano Quảng Cáo Ngoài Trời" [ref=e262] [cursor=pointer]:
            - /url: thi-cong-pano-tphcm-pano-quang-cao-ngoai-troi
            - heading "Thi Công Pano TPHCM - Pano Quảng Cáo Ngoài Trời" [level=3] [ref=e263]
        - generic [ref=e264]:
          - paragraph [ref=e266]:
            - link "Treo cờ phướn sự kiện TPHCM – Dịch vụ quảng cáo ngoài trời hiệu quả" [ref=e267] [cursor=pointer]:
              - /url: treo-co-phuon-su-kien-tphcm-dich-vu-quang-cao-ngoai-troi-hieu-qua
              - img "Treo cờ phướn sự kiện TPHCM – Dịch vụ quảng cáo ngoài trời hiệu quả" [ref=e268]
          - link "Treo cờ phướn sự kiện TPHCM – Dịch vụ quảng cáo ngoài trời hiệu quả" [ref=e270] [cursor=pointer]:
            - /url: treo-co-phuon-su-kien-tphcm-dich-vu-quang-cao-ngoai-troi-hieu-qua
            - heading "Treo cờ phướn sự kiện TPHCM – Dịch vụ quảng cáo ngoài trời hiệu quả" [level=3] [ref=e271]
        - generic [ref=e272]:
          - paragraph [ref=e274]:
            - link "Dịch Vụ Treo Cờ Phướn TPHCM Uy Tín, Thi Công Nhanh Toàn Thành Phố" [ref=e275] [cursor=pointer]:
              - /url: dich-vu-treo-co-phuon-tphcm-uy-tin-thi-cong-nhanh-toan-thanh-pho
              - img "Dịch Vụ Treo Cờ Phướn TPHCM Uy Tín, Thi Công Nhanh Toàn Thành Phố" [ref=e276]
          - link "Dịch Vụ Treo Cờ Phướn TPHCM Uy Tín, Thi Công Nhanh Toàn Thành Phố" [ref=e278] [cursor=pointer]:
            - /url: dich-vu-treo-co-phuon-tphcm-uy-tin-thi-cong-nhanh-toan-thanh-pho
            - heading "Dịch Vụ Treo Cờ Phướn TPHCM Uy Tín, Thi Công Nhanh Toàn Thành Phố" [level=3] [ref=e279]
        - generic [ref=e280]:
          - paragraph [ref=e282]:
            - link "Thi công bảng hiệu chuỗi cửa hàng CellphoneS - Quảng cáo minh lợi" [ref=e283] [cursor=pointer]:
              - /url: thi-cong-bang-hieu-chuoi-cua-hang-cellphones-quang-cao-minh-loi
              - img "Thi công bảng hiệu chuỗi cửa hàng CellphoneS - Quảng cáo minh lợi" [ref=e284]
          - link "Thi công bảng hiệu chuỗi cửa hàng CellphoneS - Quảng cáo minh lợi" [ref=e286] [cursor=pointer]:
            - /url: thi-cong-bang-hieu-chuoi-cua-hang-cellphones-quang-cao-minh-loi
            - heading "Thi công bảng hiệu chuỗi cửa hàng CellphoneS - Quảng cáo minh lợi" [level=3] [ref=e287]
        - generic [ref=e288]:
          - paragraph [ref=e290]:
            - link "Quảng cáo taxi - Bảng giá quảng cáo taxi mới 2026" [ref=e291] [cursor=pointer]:
              - /url: quang-cao-taxi-bang-gia-quang-cao-taxi-moi-2026
              - img "Quảng cáo taxi - Bảng giá quảng cáo taxi mới 2026" [ref=e292]
          - link "Quảng cáo taxi - Bảng giá quảng cáo taxi mới 2026" [ref=e294] [cursor=pointer]:
            - /url: quang-cao-taxi-bang-gia-quang-cao-taxi-moi-2026
            - heading "Quảng cáo taxi - Bảng giá quảng cáo taxi mới 2026" [level=3] [ref=e295]
        - generic [ref=e296]:
          - paragraph [ref=e298]:
            - link "Chạy Roadshow Điện Máy Xanh - Minh Lợi Event Offline" [ref=e299] [cursor=pointer]:
              - /url: chay-roadshow-dien-may-xanh-minh-loi-event-offline
              - img "Chạy Roadshow Điện Máy Xanh - Minh Lợi Event Offline" [ref=e300]
          - link "Chạy Roadshow Điện Máy Xanh - Minh Lợi Event Offline" [ref=e302] [cursor=pointer]:
            - /url: chay-roadshow-dien-may-xanh-minh-loi-event-offline
            - heading "Chạy Roadshow Điện Máy Xanh - Minh Lợi Event Offline" [level=3] [ref=e303]
        - generic [ref=e304]:
          - paragraph [ref=e306]:
            - link "Thi công quảng cáo ngoài trời tại TP.HCM - Minh Lợi OOH Advertising" [ref=e307] [cursor=pointer]:
              - /url: thi-cong-quang-cao-ngoai-troi-tai-tphcm-minh-loi-ooh-advertising
              - img "Thi công quảng cáo ngoài trời tại TP.HCM - Minh Lợi OOH Advertising" [ref=e308]
          - link "Thi công quảng cáo ngoài trời tại TP.HCM - Minh Lợi OOH Advertising" [ref=e310] [cursor=pointer]:
            - /url: thi-cong-quang-cao-ngoai-troi-tai-tphcm-minh-loi-ooh-advertising
            - heading "Thi công quảng cáo ngoài trời tại TP.HCM - Minh Lợi OOH Advertising" [level=3] [ref=e311]
  - generic [ref=e312]:
    - contentinfo [ref=e313]:
      - generic [ref=e316]:
        - generic [ref=e317]:
          - generic [ref=e318]:
            - link "CÔNG TY TNHH QUẢNG CÁO TRUYỀN THÔNG MINH LỢI" [ref=e320] [cursor=pointer]:
              - /url: ""
              - img "CÔNG TY TNHH QUẢNG CÁO TRUYỀN THÔNG MINH LỢI" [ref=e321]
            - link "CÔNG TY TNHH QUẢNG CÁO TRUYỀN THÔNG MINH LỢI" [ref=e323] [cursor=pointer]:
              - /url: ""
              - img "CÔNG TY TNHH QUẢNG CÁO TRUYỀN THÔNG MINH LỢI" [ref=e324]
          - paragraph [ref=e326]: CÔNG TY TNHH QUẢNG CÁO TRUYỀN THÔNG MINH LỢI là đơn vị chuyên thiết kế, thi công bảng hiệu quảng cáo, in ấn, trang trí mặt tiền và cung cấp giải pháp truyền thông trực quan cho doanh nghiệp, cửa hàng, showroom, spa, salon... Chúng tôi cam kết mang đến dịch vụ trọn gói – chuyên nghiệp – đúng tiến độ, với đội ngũ sáng tạo, thi công lành nghề và hệ thống in ấn hiện đại.
          - link "Email" [ref=e328] [cursor=pointer]:
            - /url: lien-he
            - img "Email" [ref=e329]
        - generic [ref=e330]:
          - generic [ref=e331]: Thông tin liên hệ
          - generic [ref=e332]:
            - paragraph [ref=e333]: "Xưởng sản xuất: 28B2 Đoàn Hoàng Minh, Phường Phú Khương, Tỉnh Vĩnh Long"
            - paragraph [ref=e334]: "VP Hồ Chí Minh: 271/10/56 Ngô Chí Quốc, Phường Tam Bình, Thủ Đức, TP.HCM"
            - paragraph [ref=e335]: "Hotline Tư Vấn: 0917.120.838"
            - paragraph [ref=e336]: "Email: d.minhloi@gmail.com"
            - paragraph [ref=e337]: "Website: https://quangcaominhloi.vn/"
            - paragraph [ref=e338]: "Giờ làm việc: 8h00 - 21h00 (Hàng ngày)"
        - generic [ref=e339]:
          - generic [ref=e340]: Bài viết mới nhất
          - listbox [ref=e343]:
            - generic [ref=e345]:
              - link [ref=e346] [cursor=pointer]:
                - /url: treo-bang-ron-quan-11-quang-cao-khai-truong-chuyen-nghiep
                - img [ref=e348]
              - heading [level=3] [ref=e350]:
                - link [ref=e351] [cursor=pointer]:
                  - /url: treo-bang-ron-quan-11-quang-cao-khai-truong-chuyen-nghiep
                  - text: Treo Băng Rôn Quận 11 – Quảng Cáo Khai Trương Chuyên Nghiệp
            - generic [ref=e353]:
              - link [ref=e354] [cursor=pointer]:
                - /url: treo-bang-ron-quan-6-tphcm-thi-cong-nhanh-gia-hop-ly
                - img [ref=e356]
              - heading [level=3] [ref=e358]:
                - link [ref=e359] [cursor=pointer]:
                  - /url: treo-bang-ron-quan-6-tphcm-thi-cong-nhanh-gia-hop-ly
                  - text: Treo Băng Rôn Quận 6 TP.HCM – Thi Công Nhanh, Giá Hợp Lý
            - generic [ref=e361]:
              - link [ref=e362] [cursor=pointer]:
                - /url: treo-co-phuon-quan-6-quang-ba-thuong-hieu-nhanh-chong
                - img [ref=e364]
              - heading [level=3] [ref=e366]:
                - link [ref=e367] [cursor=pointer]:
                  - /url: treo-co-phuon-quan-6-quang-ba-thuong-hieu-nhanh-chong
                  - text: Treo Cờ Phướn Quận 6 – Quảng Bá Thương Hiệu Nhanh Chóng
            - option [ref=e368]:
              - generic [ref=e369]:
                - link [ref=e370] [cursor=pointer]:
                  - /url: billboard-quang-cao-tphcm-giai-phap-ooh-hieu-qua-cho-doanh-nghiep
                  - img [ref=e372]
                - heading [level=3] [ref=e374]:
                  - link [ref=e375] [cursor=pointer]:
                    - /url: billboard-quang-cao-tphcm-giai-phap-ooh-hieu-qua-cho-doanh-nghiep
                    - text: Billboard Quảng Cáo TP.HCM – Giải Pháp OOH Hiệu Quả Cho Doanh Nghiệp
            - option [ref=e376]:
              - generic [ref=e377]:
                - link [ref=e378] [cursor=pointer]:
                  - /url: thi-cong-pano-tphcm-pano-quang-cao-ngoai-troi
                  - img [ref=e380]
                - heading [level=3] [ref=e382]:
                  - link [ref=e383] [cursor=pointer]:
                    - /url: thi-cong-pano-tphcm-pano-quang-cao-ngoai-troi
                    - text: Thi Công Pano TPHCM - Pano Quảng Cáo Ngoài Trời
            - option [ref=e384]:
              - generic [ref=e385]:
                - link [ref=e386] [cursor=pointer]:
                  - /url: treo-co-phuon-su-kien-tphcm-dich-vu-quang-cao-ngoai-troi-hieu-qua
                  - img [ref=e388]
                - heading [level=3] [ref=e390]:
                  - link [ref=e391] [cursor=pointer]:
                    - /url: treo-co-phuon-su-kien-tphcm-dich-vu-quang-cao-ngoai-troi-hieu-qua
                    - text: Treo cờ phướn sự kiện TPHCM – Dịch vụ quảng cáo ngoài trời hiệu quả
            - option "Dịch Vụ Treo Cờ Phướn TPHCM Uy Tín, Thi Công Nhanh Toàn Thành Phố Dịch Vụ Treo Cờ Phướn TPHCM Uy Tín, Thi Công Nhanh Toàn Thành Phố" [ref=e392]:
              - generic [ref=e393]:
                - link "Dịch Vụ Treo Cờ Phướn TPHCM Uy Tín, Thi Công Nhanh Toàn Thành Phố" [ref=e394] [cursor=pointer]:
                  - /url: dich-vu-treo-co-phuon-tphcm-uy-tin-thi-cong-nhanh-toan-thanh-pho
                  - img "Dịch Vụ Treo Cờ Phướn TPHCM Uy Tín, Thi Công Nhanh Toàn Thành Phố" [ref=e396]
                - heading "Dịch Vụ Treo Cờ Phướn TPHCM Uy Tín, Thi Công Nhanh Toàn Thành Phố" [level=3] [ref=e398]:
                  - link "Dịch Vụ Treo Cờ Phướn TPHCM Uy Tín, Thi Công Nhanh Toàn Thành Phố" [ref=e399] [cursor=pointer]:
                    - /url: dich-vu-treo-co-phuon-tphcm-uy-tin-thi-cong-nhanh-toan-thanh-pho
            - option "Thi công bảng hiệu chuỗi cửa hàng CellphoneS - Quảng cáo minh lợi Thi công bảng hiệu chuỗi cửa hàng CellphoneS - Quảng cáo minh lợi" [ref=e400]:
              - generic [ref=e401]:
                - link "Thi công bảng hiệu chuỗi cửa hàng CellphoneS - Quảng cáo minh lợi" [ref=e402] [cursor=pointer]:
                  - /url: thi-cong-bang-hieu-chuoi-cua-hang-cellphones-quang-cao-minh-loi
                  - img "Thi công bảng hiệu chuỗi cửa hàng CellphoneS - Quảng cáo minh lợi" [ref=e404]
                - heading "Thi công bảng hiệu chuỗi cửa hàng CellphoneS - Quảng cáo minh lợi" [level=3] [ref=e406]:
                  - link "Thi công bảng hiệu chuỗi cửa hàng CellphoneS - Quảng cáo minh lợi" [ref=e407] [cursor=pointer]:
                    - /url: thi-cong-bang-hieu-chuoi-cua-hang-cellphones-quang-cao-minh-loi
            - option "Quảng cáo taxi - Bảng giá quảng cáo taxi mới 2026 Quảng cáo taxi - Bảng giá quảng cáo taxi mới 2026" [ref=e408]:
              - generic [ref=e409]:
                - link "Quảng cáo taxi - Bảng giá quảng cáo taxi mới 2026" [ref=e410] [cursor=pointer]:
                  - /url: quang-cao-taxi-bang-gia-quang-cao-taxi-moi-2026
                  - img "Quảng cáo taxi - Bảng giá quảng cáo taxi mới 2026" [ref=e412]
                - heading "Quảng cáo taxi - Bảng giá quảng cáo taxi mới 2026" [level=3] [ref=e414]:
                  - link "Quảng cáo taxi - Bảng giá quảng cáo taxi mới 2026" [ref=e415] [cursor=pointer]:
                    - /url: quang-cao-taxi-bang-gia-quang-cao-taxi-moi-2026
            - option [ref=e416]:
              - generic [ref=e417]:
                - link [ref=e418] [cursor=pointer]:
                  - /url: chay-roadshow-dien-may-xanh-minh-loi-event-offline
                  - img [ref=e420]
                - heading [level=3] [ref=e422]:
                  - link [ref=e423] [cursor=pointer]:
                    - /url: chay-roadshow-dien-may-xanh-minh-loi-event-offline
                    - text: Chạy Roadshow Điện Máy Xanh - Minh Lợi Event Offline
            - option [ref=e424]:
              - generic [ref=e425]:
                - link [ref=e426] [cursor=pointer]:
                  - /url: thi-cong-quang-cao-ngoai-troi-tai-tphcm-minh-loi-ooh-advertising
                  - img [ref=e428]
                - heading [level=3] [ref=e430]:
                  - link [ref=e431] [cursor=pointer]:
                    - /url: thi-cong-quang-cao-ngoai-troi-tai-tphcm-minh-loi-ooh-advertising
                    - text: Thi công quảng cáo ngoài trời tại TP.HCM - Minh Lợi OOH Advertising
            - option [ref=e432]:
              - generic [ref=e433]:
                - link [ref=e434] [cursor=pointer]:
                  - /url: thiet-ke-thi-cong-chuoi-showroom-toan-quoc-quang-cao-minh-loi
                  - img [ref=e436]
                - heading [level=3] [ref=e438]:
                  - link [ref=e439] [cursor=pointer]:
                    - /url: thiet-ke-thi-cong-chuoi-showroom-toan-quoc-quang-cao-minh-loi
                    - text: Thiết kế & thi công chuỗi showroom toàn quốc - Quảng cáo minh lợi
            - option [ref=e440]:
              - generic [ref=e441]:
                - link [ref=e442] [cursor=pointer]:
                  - /url: thi-cong-bang-hieu-nha-phan-phoi-chuoi-dai-ly-gia-re-tai-tphcm
                  - img [ref=e444]
                - heading [level=3] [ref=e446]:
                  - link [ref=e447] [cursor=pointer]:
                    - /url: thi-cong-bang-hieu-nha-phan-phoi-chuoi-dai-ly-gia-re-tai-tphcm
                    - text: Thi công bảng hiệu nhà phân phối - Chuỗi đại lý giá rẻ tại TP.HCM
            - option [ref=e448]:
              - generic [ref=e449]:
                - link [ref=e450] [cursor=pointer]:
                  - /url: thi-cong-chuoi-bien-hieu-cua-hang-showroom-tai-tphcm
                  - img [ref=e452]
                - heading [level=3] [ref=e454]:
                  - link [ref=e455] [cursor=pointer]:
                    - /url: thi-cong-chuoi-bien-hieu-cua-hang-showroom-tai-tphcm
                    - text: Thi công chuỗi biển hiệu cửa hàng - showroom tại TP.HCM
            - option [ref=e456]:
              - generic [ref=e457]:
                - link [ref=e458] [cursor=pointer]:
                  - /url: thi-cong-bang-hieu-noi-that-toan-quoc
                  - img [ref=e460]
                - heading [level=3] [ref=e462]:
                  - link [ref=e463] [cursor=pointer]:
                    - /url: thi-cong-bang-hieu-noi-that-toan-quoc
                    - text: Thi Công Bảng Hiệu Nội Thất Toàn Quốc
            - option [ref=e464]:
              - generic [ref=e465]:
                - link [ref=e466] [cursor=pointer]:
                  - /url: thi-cong-bang-hieu-thiet-bi-ve-sinh-toan-quoc
                  - img [ref=e468]
                - heading [level=3] [ref=e470]:
                  - link [ref=e471] [cursor=pointer]:
                    - /url: thi-cong-bang-hieu-thiet-bi-ve-sinh-toan-quoc
                    - text: Thi Công Bảng Hiệu Thiết Bị Vệ Sinh Toàn Quốc
            - option [ref=e472]:
              - generic [ref=e473]:
                - link [ref=e474] [cursor=pointer]:
                  - /url: thi-cong-bang-hieu-nha-phan-phoi-gach-men-toan-quoc
                  - img [ref=e476]
                - heading [level=3] [ref=e478]:
                  - link [ref=e479] [cursor=pointer]:
                    - /url: thi-cong-bang-hieu-nha-phan-phoi-gach-men-toan-quoc
                    - text: Thi Công Bảng Hiệu Nhà Phân Phối Gạch Men Toàn Quốc
            - option [ref=e480]:
              - generic [ref=e481]:
                - link [ref=e482] [cursor=pointer]:
                  - /url: thi-cong-bang-hieu-vat-lieu-xay-dung-toan-quoc
                  - img [ref=e484]
                - heading [level=3] [ref=e486]:
                  - link [ref=e487] [cursor=pointer]:
                    - /url: thi-cong-bang-hieu-vat-lieu-xay-dung-toan-quoc
                    - text: Thi Công Bảng Hiệu Vật Liệu Xây Dựng Toàn Quốc
            - option [ref=e488]:
              - generic [ref=e489]:
                - link [ref=e490] [cursor=pointer]:
                  - /url: top-50-mau-bien-hieu-thep-hoa-phat-dep-nhat-2026
                  - img [ref=e492]
                - heading [level=3] [ref=e494]:
                  - link [ref=e495] [cursor=pointer]:
                    - /url: top-50-mau-bien-hieu-thep-hoa-phat-dep-nhat-2026
                    - text: Top 50+ Mẫu Biển Hiệu Thép Hoà Phát Đẹp Nhất 2026
            - option [ref=e496]:
              - generic [ref=e497]:
                - link [ref=e498] [cursor=pointer]:
                  - /url: thi-cong-bang-hieu-nha-phan-phoi-thiet-bi-dien
                  - img [ref=e500]
                - heading [level=3] [ref=e502]:
                  - link [ref=e503] [cursor=pointer]:
                    - /url: thi-cong-bang-hieu-nha-phan-phoi-thiet-bi-dien
                    - text: Thi Công Bảng Hiệu Nhà Phân Phối Thiết Bị Điện
            - option [ref=e504]:
              - generic [ref=e505]:
                - link [ref=e506] [cursor=pointer]:
                  - /url: thi-cong-bang-hieu-nha-phan-phoi-nganh-son
                  - img [ref=e508]
                - heading [level=3] [ref=e510]:
                  - link [ref=e511] [cursor=pointer]:
                    - /url: thi-cong-bang-hieu-nha-phan-phoi-nganh-son
                    - text: Thi Công Bảng Hiệu Nhà Phân Phối Ngành Sơn
            - option [ref=e512]:
              - generic [ref=e513]:
                - link [ref=e514] [cursor=pointer]:
                  - /url: quang-cao-dong-nai-dich-vu-tai-minh-loi-advertising
                  - img [ref=e516]
                - heading [level=3] [ref=e518]:
                  - link [ref=e519] [cursor=pointer]:
                    - /url: quang-cao-dong-nai-dich-vu-tai-minh-loi-advertising
                    - text: Quảng Cáo Đồng Nai – Dịch Vụ Tại Minh Lợi Advertising
            - option [ref=e520]:
              - generic [ref=e521]:
                - link [ref=e522] [cursor=pointer]:
                  - /url: quang-cao-tren-phuong-tien-giao-thong-xu-huong-marketing-trong-2026
                  - img [ref=e524]
                - heading [level=3] [ref=e526]:
                  - link [ref=e527] [cursor=pointer]:
                    - /url: quang-cao-tren-phuong-tien-giao-thong-xu-huong-marketing-trong-2026
                    - text: Quảng Cáo Trên Phương Tiện Giao Thông – Xu Hướng Marketing Trong 2026
            - option [ref=e528]:
              - generic [ref=e529]:
                - link [ref=e530] [cursor=pointer]:
                  - /url: lam-bang-hieu-quang-cao-tai-bien-hoa-quang-cao-minh-loi
                  - img [ref=e532]
                - heading [level=3] [ref=e534]:
                  - link [ref=e535] [cursor=pointer]:
                    - /url: lam-bang-hieu-quang-cao-tai-bien-hoa-quang-cao-minh-loi
                    - text: Làm Bảng Hiệu Quảng Cáo Tại Biên Hòa – Quảng Cáo Minh Lợi
            - option [ref=e536]:
              - generic [ref=e537]:
                - link [ref=e538] [cursor=pointer]:
                  - /url: dich-vu-quang-cao-ngoai-troi-toan-quoc-trien-khai-nhanh-chong
                  - img [ref=e540]
                - heading [level=3] [ref=e542]:
                  - link [ref=e543] [cursor=pointer]:
                    - /url: dich-vu-quang-cao-ngoai-troi-toan-quoc-trien-khai-nhanh-chong
                    - text: Dịch Vụ Quảng Cáo Ngoài Trời Toàn Quốc – Triển Khai Nhanh Chóng
            - option [ref=e544]:
              - generic [ref=e545]:
                - link [ref=e546] [cursor=pointer]:
                  - /url: quang-cao-ngoai-troi-khai-truong-nen-chon-hinh-thuc-nao
                  - img [ref=e548]
                - heading [level=3] [ref=e550]:
                  - link [ref=e551] [cursor=pointer]:
                    - /url: quang-cao-ngoai-troi-khai-truong-nen-chon-hinh-thuc-nao
                    - text: Quảng Cáo Ngoài Trời Khai Trương – Nên Chọn Hình Thức Nào?
            - option [ref=e552]:
              - generic [ref=e553]:
                - link [ref=e554] [cursor=pointer]:
                  - /url: thi-cong-pano-quang-cao-tron-goi-tai-long-an-lh-0917120838
                  - img [ref=e556]
                - heading [level=3] [ref=e558]:
                  - link [ref=e559] [cursor=pointer]:
                    - /url: thi-cong-pano-quang-cao-tron-goi-tai-long-an-lh-0917120838
                    - text: Thi Công Pano Quảng Cáo Trọn Gói Tại Long An - LH 0917.120.838
            - option [ref=e560]:
              - generic [ref=e561]:
                - link [ref=e562] [cursor=pointer]:
                  - /url: pano-ngoai-troi-tai-ca-mau-thi-cong-pano-vi-tri-dep
                  - img [ref=e564]
                - heading [level=3] [ref=e566]:
                  - link [ref=e567] [cursor=pointer]:
                    - /url: pano-ngoai-troi-tai-ca-mau-thi-cong-pano-vi-tri-dep
                    - text: Pano Ngoài Trời Tại Cà Mau – Thi Công Pano Vị Trí Đẹp
            - option [ref=e568]:
              - generic [ref=e569]:
                - link [ref=e570] [cursor=pointer]:
                  - /url: pano-billboard-bac-lieu-giai-phap-ooh-ngoai-troi-hieu-qua
                  - img [ref=e572]
                - heading [level=3] [ref=e574]:
                  - link [ref=e575] [cursor=pointer]:
                    - /url: pano-billboard-bac-lieu-giai-phap-ooh-ngoai-troi-hieu-qua
                    - text: Pano & Billboard Bạc Liêu – Giải Pháp OOH Ngoài Trời Hiệu Quả
            - option [ref=e576]:
              - generic [ref=e577]:
                - link [ref=e578] [cursor=pointer]:
                  - /url: pano-quang-cao-soc-trang-nang-tam-thuong-hieu-voi-chien-dich-ooh
                  - img [ref=e580]
                - heading [level=3] [ref=e582]:
                  - link [ref=e583] [cursor=pointer]:
                    - /url: pano-quang-cao-soc-trang-nang-tam-thuong-hieu-voi-chien-dich-ooh
                    - text: Pano Quảng Cáo Sóc Trăng – Nâng Tầm Thương Hiệu Với Chiến Dịch OOH
            - option [ref=e584]:
              - generic [ref=e585]:
                - link [ref=e586] [cursor=pointer]:
                  - /url: thi-cong-cho-thue-pano-quang-cao-soc-trang-hieu-qua-dai-han
                  - img [ref=e588]
                - heading [level=3] [ref=e590]:
                  - link [ref=e591] [cursor=pointer]:
                    - /url: thi-cong-cho-thue-pano-quang-cao-soc-trang-hieu-qua-dai-han
                    - text: Thi Công & Cho Thuê Pano Quảng Cáo Sóc Trăng – Hiệu Quả Dài Hạn
            - option [ref=e592]:
              - generic [ref=e593]:
                - link [ref=e594] [cursor=pointer]:
                  - /url: billboard-tien-giang-thi-cong-cho-thue-pano-quang-cao-chuyen-nghiep
                  - img [ref=e596]
                - heading [level=3] [ref=e598]:
                  - link [ref=e599] [cursor=pointer]:
                    - /url: billboard-tien-giang-thi-cong-cho-thue-pano-quang-cao-chuyen-nghiep
                    - text: Billboard Tiền Giang – Thi Công & Cho Thuê Pano Quảng Cáo Chuyên Nghiệp
            - option [ref=e600]:
              - generic [ref=e601]:
                - link [ref=e602] [cursor=pointer]:
                  - /url: pano-quang-cao-ben-tre-nhan-dien-thuong-hieu-ngoai-troi-cung-minh-loi-media
                  - img [ref=e604]
                - heading [level=3] [ref=e606]:
                  - link [ref=e607] [cursor=pointer]:
                    - /url: pano-quang-cao-ben-tre-nhan-dien-thuong-hieu-ngoai-troi-cung-minh-loi-media
                    - text: Pano Quảng Cáo Bến Tre – Nhận Diện Thương Hiệu Ngoài Trời Cùng Minh Lợi Media
            - option [ref=e608]:
              - generic [ref=e609]:
                - link [ref=e610] [cursor=pointer]:
                  - /url: cho-thue-pano-quang-cao-tra-vinh-thi-cong-pano-tron-goi
                  - img [ref=e612]
                - heading [level=3] [ref=e614]:
                  - link [ref=e615] [cursor=pointer]:
                    - /url: cho-thue-pano-quang-cao-tra-vinh-thi-cong-pano-tron-goi
                    - text: Cho Thuê Pano Quảng Cáo Trà Vinh – Thi Công Pano Trọn Gói
            - option [ref=e616]:
              - generic [ref=e617]:
                - link [ref=e618] [cursor=pointer]:
                  - /url: pano-billboard-vinh-long-giai-phap-quang-cao-ngoai-troi-hieu-qua
                  - img [ref=e620]
                - heading [level=3] [ref=e622]:
                  - link [ref=e623] [cursor=pointer]:
                    - /url: pano-billboard-vinh-long-giai-phap-quang-cao-ngoai-troi-hieu-qua
                    - text: Pano & Billboard Vĩnh Long – Giải Pháp Quảng Cáo Ngoài Trời Hiệu Quả
            - option [ref=e624]:
              - generic [ref=e625]:
                - link [ref=e626] [cursor=pointer]:
                  - /url: pano-quang-cao-an-giang-thi-cong-cho-thue-billboard-ngoai-troi
                  - img [ref=e628]
                - heading [level=3] [ref=e630]:
                  - link [ref=e631] [cursor=pointer]:
                    - /url: pano-quang-cao-an-giang-thi-cong-cho-thue-billboard-ngoai-troi
                    - text: Pano Quảng Cáo An Giang – Thi Công & Cho Thuê Billboard Ngoài Trời
            - option [ref=e632]:
              - generic [ref=e633]:
                - link [ref=e634] [cursor=pointer]:
                  - /url: pano-quang-cao-dong-thap-thi-cong-pano-quang-cao-ngoai-troi-tai-dong-thap
                  - img [ref=e636]
                - heading [level=3] [ref=e638]:
                  - link [ref=e639] [cursor=pointer]:
                    - /url: pano-quang-cao-dong-thap-thi-cong-pano-quang-cao-ngoai-troi-tai-dong-thap
                    - text: Pano Quảng Cáo Đồng Tháp – Thi Công Pano Quảng Cáo Ngoài Trời Tại Đồng Tháp
            - option [ref=e640]:
              - generic [ref=e641]:
                - link [ref=e642] [cursor=pointer]:
                  - /url: pano-quang-cao-can-tho-thi-cong-cho-thue-pano-ngoai-troi
                  - img [ref=e644]
                - heading [level=3] [ref=e646]:
                  - link [ref=e647] [cursor=pointer]:
                    - /url: pano-quang-cao-can-tho-thi-cong-cho-thue-pano-ngoai-troi
                    - text: Pano Quảng Cáo Cần Thơ – Thi Công & Cho Thuê Pano Ngoài Trời
            - option [ref=e648]:
              - generic [ref=e649]:
                - link [ref=e650] [cursor=pointer]:
                  - /url: dich-vu-treo-co-phuon-toan-quoc-phu-song-chien-dich-hieu-qua
                  - img [ref=e652]
                - heading [level=3] [ref=e654]:
                  - link [ref=e655] [cursor=pointer]:
                    - /url: dich-vu-treo-co-phuon-toan-quoc-phu-song-chien-dich-hieu-qua
                    - text: Dịch Vụ Treo Cờ Phướn Toàn Quốc – Phủ Sóng Chiến Dịch Hiệu Quả
            - option [ref=e656]:
              - generic [ref=e657]:
                - link [ref=e658] [cursor=pointer]:
                  - /url: pano-quang-cao-led-xu-huong-ooh-hien-dai-2026
                  - img [ref=e660]
                - heading [level=3] [ref=e662]:
                  - link [ref=e663] [cursor=pointer]:
                    - /url: pano-quang-cao-led-xu-huong-ooh-hien-dai-2026
                    - text: Pano Quảng Cáo LED – Xu Hướng OOH Hiện Đại 2026
            - option [ref=e664]:
              - generic [ref=e665]:
                - link [ref=e666] [cursor=pointer]:
                  - /url: quang-cao-taxi-gia-bao-nhieu-chi-phi-moi-nhat-2026
                  - img [ref=e668]
                - heading [level=3] [ref=e670]:
                  - link [ref=e671] [cursor=pointer]:
                    - /url: quang-cao-taxi-gia-bao-nhieu-chi-phi-moi-nhat-2026
                    - text: Quảng Cáo Taxi Giá Bao Nhiêu? Chi Phí Mới Nhất 2026
            - option [ref=e672]:
              - generic [ref=e673]:
                - link [ref=e674] [cursor=pointer]:
                  - /url: treo-co-phuon-quan-9-tphcm-thi-cong-nhanh-dung-tien-do
                  - img [ref=e676]
                - heading [level=3] [ref=e678]:
                  - link [ref=e679] [cursor=pointer]:
                    - /url: treo-co-phuon-quan-9-tphcm-thi-cong-nhanh-dung-tien-do
                    - text: Treo Cờ Phướn Quận 9 & TP.HCM – Thi Công Nhanh, Đúng Tiến Độ
            - option [ref=e680]:
              - generic [ref=e681]:
                - link [ref=e682] [cursor=pointer]:
                  - /url: treo-co-phuon-thu-duc-quang-cao-ngoai-troi-tai-tphcm
                  - img [ref=e684]
                - heading [level=3] [ref=e686]:
                  - link [ref=e687] [cursor=pointer]:
                    - /url: treo-co-phuon-thu-duc-quang-cao-ngoai-troi-tai-tphcm
                    - text: Treo Cờ Phướn Thủ Đức – Quảng Cáo Ngoài Trời Tại TP.HCM
            - option [ref=e688]:
              - generic [ref=e689]:
                - link [ref=e690] [cursor=pointer]:
                  - /url: treo-co-phuon-tan-phu-tphcm-quang-ba-chuong-trinh-nhanh-chong
                  - img [ref=e692]
                - heading [level=3] [ref=e694]:
                  - link [ref=e695] [cursor=pointer]:
                    - /url: treo-co-phuon-tan-phu-tphcm-quang-ba-chuong-trinh-nhanh-chong
                    - text: Treo Cờ Phướn Tân Phú TPHCM – Quảng Bá Chương Trình Nhanh Chóng
            - option [ref=e696]:
              - generic [ref=e697]:
                - link [ref=e698] [cursor=pointer]:
                  - /url: treo-bang-ron-tan-binh-tphcm-thu-hut-khach-hang-nhanh-chong
                  - img [ref=e700]
                - heading [level=3] [ref=e702]:
                  - link [ref=e703] [cursor=pointer]:
                    - /url: treo-bang-ron-tan-binh-tphcm-thu-hut-khach-hang-nhanh-chong
                    - text: Treo Băng Rôn Tân Bình, TPHCM – Thu Hút Khách Hàng Nhanh Chóng
            - option [ref=e704]:
              - generic [ref=e705]:
                - link [ref=e706] [cursor=pointer]:
                  - /url: treo-co-phuon-tan-binh-tphcm-giai-phap-quang-cao-hieu-qua
                  - img [ref=e708]
                - heading [level=3] [ref=e710]:
                  - link [ref=e711] [cursor=pointer]:
                    - /url: treo-co-phuon-tan-binh-tphcm-giai-phap-quang-cao-hieu-qua
                    - text: Treo Cờ Phướn Tân Bình TPHCM – Giải Pháp Quảng Cáo Hiệu Quả
            - option [ref=e712]:
              - generic [ref=e713]:
                - link [ref=e714] [cursor=pointer]:
                  - /url: treo-bang-ron-binh-thanh-tphcm-thi-cong-nhanh-ho-tro-tron-goi
                  - img [ref=e716]
                - heading [level=3] [ref=e718]:
                  - link [ref=e719] [cursor=pointer]:
                    - /url: treo-bang-ron-binh-thanh-tphcm-thi-cong-nhanh-ho-tro-tron-goi
                    - text: Treo Băng Rôn Bình Thạnh, TPHCM – Thi Công Nhanh, Hỗ Trợ Trọn Gói
            - option [ref=e720]:
              - generic [ref=e721]:
                - link [ref=e722] [cursor=pointer]:
                  - /url: treo-co-phuon-binh-thanh-tphcm-quang-cao-ngoai-troi-tai-tphcm
                  - img [ref=e724]
                - heading [level=3] [ref=e726]:
                  - link [ref=e727] [cursor=pointer]:
                    - /url: treo-co-phuon-binh-thanh-tphcm-quang-cao-ngoai-troi-tai-tphcm
                    - text: Treo Cờ Phướn Bình Thạnh, TPHCM – Quảng Cáo Ngoài Trời tại TPHCM
            - option [ref=e728]:
              - generic [ref=e729]:
                - link [ref=e730] [cursor=pointer]:
                  - /url: treo-bang-ron-quan-11-quang-cao-khai-truong-chuyen-nghiep
                  - img [ref=e732]
                - heading [level=3] [ref=e734]:
                  - link [ref=e735] [cursor=pointer]:
                    - /url: treo-bang-ron-quan-11-quang-cao-khai-truong-chuyen-nghiep
                    - text: Treo Băng Rôn Quận 11 – Quảng Cáo Khai Trương Chuyên Nghiệp
            - option [ref=e736]:
              - generic [ref=e737]:
                - link [ref=e738] [cursor=pointer]:
                  - /url: treo-bang-ron-quan-6-tphcm-thi-cong-nhanh-gia-hop-ly
                  - img [ref=e740]
                - heading [level=3] [ref=e742]:
                  - link [ref=e743] [cursor=pointer]:
                    - /url: treo-bang-ron-quan-6-tphcm-thi-cong-nhanh-gia-hop-ly
                    - text: Treo Băng Rôn Quận 6 TP.HCM – Thi Công Nhanh, Giá Hợp Lý
            - option [ref=e744]:
              - generic [ref=e745]:
                - link [ref=e746] [cursor=pointer]:
                  - /url: treo-co-phuon-quan-6-quang-ba-thuong-hieu-nhanh-chong
                  - img [ref=e748]
                - heading [level=3] [ref=e750]:
                  - link [ref=e751] [cursor=pointer]:
                    - /url: treo-co-phuon-quan-6-quang-ba-thuong-hieu-nhanh-chong
                    - text: Treo Cờ Phướn Quận 6 – Quảng Bá Thương Hiệu Nhanh Chóng
            - generic [ref=e753]:
              - link [ref=e754] [cursor=pointer]:
                - /url: billboard-quang-cao-tphcm-giai-phap-ooh-hieu-qua-cho-doanh-nghiep
                - img [ref=e756]
              - heading [level=3] [ref=e758]:
                - link [ref=e759] [cursor=pointer]:
                  - /url: billboard-quang-cao-tphcm-giai-phap-ooh-hieu-qua-cho-doanh-nghiep
                  - text: Billboard Quảng Cáo TP.HCM – Giải Pháp OOH Hiệu Quả Cho Doanh Nghiệp
            - generic [ref=e761]:
              - link [ref=e762] [cursor=pointer]:
                - /url: thi-cong-pano-tphcm-pano-quang-cao-ngoai-troi
                - img [ref=e764]
              - heading [level=3] [ref=e766]:
                - link [ref=e767] [cursor=pointer]:
                  - /url: thi-cong-pano-tphcm-pano-quang-cao-ngoai-troi
                  - text: Thi Công Pano TPHCM - Pano Quảng Cáo Ngoài Trời
            - generic [ref=e769]:
              - link [ref=e770] [cursor=pointer]:
                - /url: treo-co-phuon-su-kien-tphcm-dich-vu-quang-cao-ngoai-troi-hieu-qua
                - img [ref=e772]
              - heading [level=3] [ref=e774]:
                - link [ref=e775] [cursor=pointer]:
                  - /url: treo-co-phuon-su-kien-tphcm-dich-vu-quang-cao-ngoai-troi-hieu-qua
                  - text: Treo cờ phướn sự kiện TPHCM – Dịch vụ quảng cáo ngoài trời hiệu quả
    - generic [ref=e778]:
      - generic [ref=e779]: "©2017 Bản quyền thuộc về MINH LỢI ADVERTISEMENT - Website Design: 0832.179.210 ( Mr.Dũng ) . Thiết Kế Web MIMA"
      - generic [ref=e780]:
        - generic [ref=e781]:
          - text: "Đang online:"
          - generic [ref=e782]: "1541"
        - generic [ref=e783]: "|"
        - generic [ref=e784]:
          - text: "Hôm nay:"
          - generic [ref=e785]: "198"
        - generic [ref=e786]: "|"
        - generic [ref=e787]:
          - text: "Tổng truy cập:"
          - generic [ref=e788]: "3921"
  - generic [ref=e789]:
    - 'link "Call me: 0917.120.838" [ref=e790] [cursor=pointer]':
      - /url: tel:0917120838
      - img [ref=e794]
      - generic [ref=e797]: "Call me: 0917.120.838"
    - 'link "Zalo: 0917.120.838" [ref=e798] [cursor=pointer]':
      - /url: https://zalo.me/0917120838
      - img [ref=e802]
      - generic [ref=e804]: "Zalo: 0917.120.838"
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
          - strong: Treo Cờ Phướn Quảng Cáo TPHCM-Treo Nhanh, Chất Lượng
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e805]:
      - generic [ref=e806]: "❌ Chi tiết lỗi cần khắc phục (1/15):"
      - generic [ref=e807]:
        - generic [ref=e808]:
          - generic [ref=e809]: 6. Liên kết (Links)
          - generic [ref=e810]: 1 lỗi
        - generic [ref=e811]:
          - strong [ref=e813]: "Không có broken links (lỗi: 1/61)"
          - generic [ref=e814]: "⚠️ Broken links: https://quangcaominhloi.vn/treo-co-phuon-quang-cao-tphcm-giai-phap-phu-diem-tiep-can-cao (status: 404)"
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