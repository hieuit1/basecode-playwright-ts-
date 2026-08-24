# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Thi công Cột Cờ Inox Ngoài Trời Đồng Nai (/thi-cong-cot-co-inox-ngoai-troi-dong-nai)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 87/100 dưới ngưỡng 96%. Có 2/15 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - list [ref=e5]:
      - listitem [ref=e6]:
        - img [ref=e7]
        - generic [ref=e10]: Số 68B/H2, tổ 15, khu phố 14, Phường Tam Hiệp, TP Đồng Nai (Công ty) --- D18A Tổ 3 Khu P. 4, Trấn Biên, TP Đồng Nai (Xưởng)
      - listitem [ref=e11]:
        - img [ref=e12]
        - link "quangcaotrungson1518@gmail.com" [ref=e15] [cursor=pointer]:
          - /url: mailto:quangcaotrungson1518@gmail.com
    - generic [ref=e19]:
      - link "BẢNG HIỆU ĐẸP 247" [ref=e20] [cursor=pointer]:
        - /url: https://code6.mimadigi.vn/2026/august/haiyen_112526W/
        - img "BẢNG HIỆU ĐẸP 247" [ref=e21]
      - list [ref=e22]:
        - listitem [ref=e23]:
          - link "Trang chủ" [ref=e24] [cursor=pointer]:
            - /url: ""
        - listitem [ref=e25]:
          - link "Giới thiệu" [ref=e26] [cursor=pointer]:
            - /url: gioi-thieu
        - listitem [ref=e27]:
          - link "Dịch vụ" [ref=e28] [cursor=pointer]:
            - /url: dich-vu
            - text: Dịch vụ
            - img [ref=e29]
        - listitem [ref=e31]:
          - link "May cờ" [ref=e32] [cursor=pointer]:
            - /url: may-co
            - text: May cờ
            - img [ref=e33]
        - listitem [ref=e35]:
          - link "Công trình" [ref=e36] [cursor=pointer]:
            - /url: cong-trinh
        - listitem [ref=e37]:
          - link "Tin tức" [ref=e38] [cursor=pointer]:
            - /url: tin-tuc
        - listitem [ref=e39]:
          - link "Liên hệ" [ref=e40] [cursor=pointer]:
            - /url: lien-he
        - listitem [ref=e41]:
          - link "0778889559" [ref=e42] [cursor=pointer]:
            - /url: tel:0778889559
            - img [ref=e43]
            - generic [ref=e45]: "0778889559"
    - list [ref=e48]:
      - listitem [ref=e49]:
        - link "Trang chủ" [ref=e50] [cursor=pointer]:
          - /url: https://code6.mimadigi.vn/2026/august/haiyen_112526W/
          - generic [ref=e51]: Trang chủ
      - listitem [ref=e52]:
        - text: /
        - link "May cờ" [ref=e53] [cursor=pointer]:
          - /url: https://code6.mimadigi.vn/2026/august/haiyen_112526W/may-co
      - listitem [ref=e54]:
        - text: /
        - link "CỜ CỘT CỜ" [ref=e55] [cursor=pointer]:
          - /url: https://code6.mimadigi.vn/2026/august/haiyen_112526W/co-cot-co
      - listitem [ref=e56]:
        - text: /
        - link "Thi công Cột Cờ Inox Ngoài Trời Đồng Nai" [ref=e57] [cursor=pointer]:
          - /url: https://code6.mimadigi.vn/2026/august/haiyen_112526W/thi-cong-cot-co-inox-ngoai-troi-dong-nai
    - generic [ref=e58]:
      - generic [ref=e61]:
        - listbox [ref=e66]:
          - option "Thi công Cột Cờ Inox Ngoài Trời Đồng Nai" [ref=e67]:
            - link "Thi công Cột Cờ Inox Ngoài Trời Đồng Nai" [ref=e68] [cursor=pointer]:
              - /url: upload/news/co-cot-co-4-5535.jpg
              - img "Thi công Cột Cờ Inox Ngoài Trời Đồng Nai" [ref=e69]
        - generic [ref=e70]:
          - list [ref=e71]:
            - generic [ref=e72]: Thi công Cột Cờ Inox Ngoài Trời Đồng Nai
            - listitem [ref=e73]:
              - generic [ref=e74]: "Giá: Liên hệ"
              - generic [ref=e75]:
                - generic [ref=e76]:
                  - generic [ref=e77]: "Chia sẻ:"
                  - list [ref=e79]:
                    - listitem [ref=e80]:
                      - link "Chia sẻ Facebook" [ref=e81] [cursor=pointer]:
                        - /url: https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcode6.mimadigi.vn%2F2026%2Faugust%2Fhaiyen_112526W%2Fthi-cong-cot-co-inox-ngoai-troi-dong-nai
                        - img "facebook" [ref=e82]
                    - listitem [ref=e83]:
                      - button "Sao chép để chia sẻ qua Zalo" [ref=e84] [cursor=pointer]:
                        - img "zalo" [ref=e85]
                    - listitem [ref=e86]:
                      - button "Sao chép liên kết" [ref=e87] [cursor=pointer]:
                        - img [ref=e88]
                        - img [ref=e90]
                    - listitem [ref=e92]:
                      - button "Xem thêm" [ref=e93] [cursor=pointer]:
                        - img [ref=e94]
                - generic [ref=e96]:
                  - img [ref=e97]
                  - text: 11 Lượt xem
            - listitem [ref=e100]:
              - generic [ref=e101]:
                - heading "Mô tả dịch vụ" [level=3] [ref=e102]
                - paragraph [ref=e104]:
                  - text: Giữa dải đất Đồng Nai đầy nắng gió và đang chuyển mình mạnh mẽ từng ngày, hình ảnh lá cờ Tổ quốc hay lá cờ doanh nghiệp tung bay kiêu hãnh trên nền trời xanh luôn khơi dậy một niềm tự hào mãnh liệt. Để lá cờ ấy luôn giữ vững vị thế hiên ngang trước mọi giông bão, dịch vụ thi công
                  - link "Cột Cờ Inox" [ref=e105] [cursor=pointer]:
                    - /url: https://banghieudep247.com/
                    - strong [ref=e106]: Cột Cờ Inox
                  - text: ngoài trời tại Đồng Nai của Bảng Hiệu Đẹp 247 ra đời như một giải pháp kiến tạo nên những cột mốc kiêu hãnh, đồng hành cùng sự phát triển thịnh vượng của các cơ quan, xí nghiệp và trường học.
          - generic [ref=e107]:
            - link "Liên hệ Zalo" [ref=e108] [cursor=pointer]:
              - /url: https://zalo.me/0778889559
              - img [ref=e109]
              - text: Liên hệ Zalo
            - link "0778889559" [ref=e114] [cursor=pointer]:
              - /url: tel:0778889559
              - img [ref=e115]
              - text: "0778889559"
      - generic [ref=e121]:
        - heading "Chi tiết dịch vụ" [level=2] [ref=e124]
        - generic [ref=e126]:
          - generic [ref=e127] [cursor=pointer]:
            - img [ref=e128]
            - text: Mục lục
            - img [ref=e131]
          - text: ▾
        - text: ▾
        - generic [ref=e134]:
          - paragraph [ref=e135]:
            - text: Giữa dải đất Đồng Nai đầy nắng gió và đang chuyển mình mạnh mẽ từng ngày, hình ảnh lá cờ Tổ quốc hay lá cờ doanh nghiệp tung bay kiêu hãnh trên nền trời xanh luôn khơi dậy một niềm tự hào mãnh liệt. Để lá cờ ấy luôn giữ vững vị thế hiên ngang trước mọi giông bão, dịch vụ thi công
            - link "Cột Cờ Inox" [ref=e136] [cursor=pointer]:
              - /url: https://banghieudep247.com/
              - strong [ref=e137]: Cột Cờ Inox
            - text: ngoài trời tại Đồng Nai của Bảng Hiệu Đẹp 247 ra đời như một giải pháp kiến tạo nên những cột mốc kiêu hãnh, đồng hành cùng sự phát triển thịnh vượng của các cơ quan, xí nghiệp và trường học.
          - paragraph [ref=e138]:
            - img "cot-co-inox" [ref=e139]
          - heading "Biểu tượng của sự vững chãi và khát vọng vươn xa" [level=2] [ref=e140]
          - paragraph [ref=e141]: Một cột cờ đứng vững giữa đất trời không đơn thuần là một kết cấu kim loại vô tri. Đó là nơi gửi gắm niềm tin, là lời khẳng định về chủ quyền, thương hiệu và uy tín của một tập thể. Mỗi buổi sáng, khi ánh nắng đầu tiên chiếu rọi vào lá cờ đỏ sao vàng hay lá cờ mang logo doanh nghiệp bay phấp phới, đó cũng là lúc năng lượng tích cực và khát vọng chinh phục được đánh thức.
          - paragraph [ref=e142]: Tại các khu công nghiệp lớn ở Biên Hòa, Nhơn Trạch hay Long Thành, một cột cờ inox sáng bóng, thẳng tắp đặt ngay trước cổng nhà máy chính là lời chào trang trọng nhất gửi tới đối tác và khách hàng. Nó thể hiện sự chuyên nghiệp, quy mô và cam kết phát triển bền vững của doanh nghiệp trên mảnh đất Đồng Nai đầy tiềm năng.
          - heading "Tại sao Cột Cờ Inox ngoài trời là lựa chọn tối ưu?" [level=2] [ref=e143]
          - paragraph [ref=e144]: Khí hậu miền Nam nói chung và Đồng Nai nói riêng có hai mùa mưa nắng rõ rệt, kèm theo độ ẩm cao và những cơn giông bất chợt. Do đó, việc lựa chọn vật liệu thi công ngoài trời đòi hỏi sự tính toán kỹ lưỡng về độ bền vật lý lẫn tính thẩm mỹ lâu dài.
          - heading "Chất liệu Inox 304 và 316 thách thức thời gian" [level=3] [ref=e145]
          - paragraph [ref=e146]: Bảng Hiệu Đẹp 247 sử dụng nguồn vật liệu inox cao cấp, chủ yếu là Inox 304 và Inox 316. Đây là những dòng thép không gỉ có khả năng chống ăn mòn cực tốt, không bị oxy hóa bởi nước mưa hay sương muối. Dưới ánh nắng gắt, bề mặt cột cờ vẫn giữ được độ sáng bóng tự nhiên, không cần tốn chi phí sơn sửa hay bảo dưỡng định kỳ như cột sắt truyền thống.
          - heading "Khả năng chịu lực và kháng gió vượt trội" [level=3] [ref=e147]
          - paragraph [ref=e148]: Thân cột cờ được thiết kế theo dạng côn (thuôn nhỏ dần từ gốc lên ngọn) giúp phân tán lực gió hiệu quả. Các mối hàn được xử lý bằng công nghệ hàn TIG hiện đại, đảm bảo sự liên kết hoàn hảo, không để lại vết nứt hay khe hở. Nhờ vậy, hệ thống cột cờ có thể chịu được sức gió giật mạnh trong những mùa mưa bão tại Đồng Nai.
          - heading "Thiết kế ròng rọc thông minh chống rối dây" [level=3] [ref=e149]
          - paragraph [ref=e150]:
            - text: Nỗi ám ảnh lớn nhất khi sử dụng cột cờ truyền thống là tiếng lách cách của dây cáp va đập vào thân cột hoặc tình trạng lá cờ bị quấn chặt vào đỉnh cột khi đổi hướng gió. Hệ thống
            - strong [ref=e151]: Cột Cờ Inox
            - text: thế hệ mới tích hợp ròng rọc quay 360 độ ở đỉnh cột và dây cáp đi âm bên trong thân cột. Cải tiến này giúp lá cờ luôn bay tự do theo chiều gió, đồng thời triệt tiêu hoàn toàn tiếng ồn khó chịu.
          - heading "Giải pháp nhận diện thương hiệu toàn diện từ Bảng Hiệu Đẹp 247" [level=2] [ref=e152]
          - paragraph [ref=e153]: Không chỉ dừng lại ở việc thi công cột cờ, Bảng Hiệu Đẹp 247 mang đến cho quý khách hàng tại Đồng Nai một hệ sinh thái dịch vụ quảng cáo và trang trí trọn gói. Chúng tôi thấu hiểu rằng, một không gian mặt tiền hoàn hảo cần sự kết hợp hài hòa giữa cột cờ uy nghiêm và hệ thống bảng hiệu chuyên nghiệp.
          - list [ref=e154]:
            - listitem [ref=e155]:
              - strong [ref=e156]: "Sản xuất và may cờ chuyên nghiệp:"
              - text: Chúng tôi cung cấp đầy đủ các loại cờ chất lượng cao từ dịch vụ may cờ, in cờ phướn, cờ giọt nước, cờ lông vũ, cờ hình chữ nhật cho đến cờ bất động sản và cờ quảng cáo. Chất liệu vải cờ dai, bền màu dưới nắng mưa, đường may sắc sảo giúp lá cờ luôn tung bay mềm mại.
            - listitem [ref=e157]:
              - strong [ref=e158]: "Hệ thống bảng hiệu quảng cáo ngoài trời:"
              - text: Để đồng bộ với khu vực cột cờ, chúng tôi nhận thiết kế và thi công pano ngoài trời, bảng hiệu alu chữ nổi, biển inox ăn mòn, biển in hạt Hiflex chất lượng cao.
            - listitem [ref=e159]:
              - strong [ref=e160]: "Ánh sáng đêm ấn tượng:"
              - text: Kết hợp công nghệ led hắt sáng, trần xuyên sáng, hộp đèn và bảng đèn led giúp toàn bộ khuôn viên doanh nghiệp nổi bật rực rỡ khi màn đêm buông xuống.
            - listitem [ref=e161]:
              - strong [ref=e162]: "Chữ và logo quảng cáo tinh xảo:"
              - text: Nhận gia công chữ nổi bằng inox, mica, alu gắn trực tiếp lên bệ cột cờ hoặc mảng tường phía sau để tăng cường nhận diện thương hiệu.
          - heading "Quy trình thi công Cột Cờ Inox chuyên nghiệp tại Đồng Nai" [level=2] [ref=e163]
          - paragraph [ref=e164]: "Để đảm bảo an toàn tuyệt đối và tính thẩm mỹ cao nhất, mỗi công trình cột cờ do Bảng Hiệu Đẹp 247 thực hiện đều trải qua quy trình kiểm soát nghiêm ngặt:"
          - list [ref=e165]:
            - listitem [ref=e166]:
              - strong [ref=e167]: "Khảo sát địa hình thực tế:"
              - text: Đội ngũ kỹ sư trực tiếp đến công trình để đo đạc, kiểm tra chất đất, hướng gió và không gian xung quanh để tư vấn chiều cao cột cờ phù hợp (thường từ 6m đến 12m hoặc cao hơn tùy quy mô công trình).
            - listitem [ref=e168]:
              - strong [ref=e169]: "Thiết kế bản vẽ kỹ thuật:"
              - text: Lên bản vẽ chi tiết về móng cột cờ, độ dày thân ống inox, hệ thống ròng rọc âm và bệ đỡ móng.
            - listitem [ref=e170]:
              - strong [ref=e171]: "Gia công chế tác tại xưởng:"
              - text: Quá trình cắt, uốn, hàn và đánh bóng inox được thực hiện bằng máy móc bán tự động tại nhà xưởng hiện đại của chúng tôi tại Biên Hòa, đảm bảo độ chính xác đến từng milimet.
            - listitem [ref=e172]:
              - strong [ref=e173]: "Đổ bê tông móng và đặt bulong neo:"
              - text: Phần móng được tính toán kỹ lưỡng về khối lượng bê tông và sắt thép chịu lực để làm bệ đỡ vững chắc cho toàn bộ thân cột.
            - listitem [ref=e174]:
              - strong [ref=e175]: "Lắp dựng và bàn giao:"
              - text: Sử dụng xe cẩu chuyên dụng để dựng cột cờ vào đúng vị trí, căn chỉnh độ thẳng đứng bằng máy laser, tiến hành luồn dây cáp, treo thử cờ và bàn giao cho khách hàng.
          - heading "Khát vọng đồng hành cùng sự thịnh vượng của bạn" [level=2] [ref=e176]
          - paragraph [ref=e177]: Mỗi công trình cột cờ inox ngoài trời được dựng lên là thêm một lời khẳng định về sự chuyên nghiệp và khát vọng vươn tầm của doanh nghiệp. Bảng Hiệu Đẹp 247 tự hào là người thợ thầm lặng, tỉ mỉ trong từng mối hàn, chăm chút cho từng đường kim mũi chỉ trên những lá cờ, với mong muốn mang lại sự hài lòng tuyệt đối cho quý khách hàng tại Đồng Nai.
          - paragraph [ref=e178]: Hãy để chúng tôi cùng bạn đặt nền móng cho những biểu tượng của sự thành công và lòng tự hào ngay hôm nay!
          - paragraph [ref=e179]:
            - strong [ref=e180]: "THÔNG TIN LIÊN HỆ CHI TIẾT:"
            - strong [ref=e181]: BẢNG HIỆU ĐẸP 247
            - text: "Địa chỉ công ty: Số 68B/H2, tổ 15, khu phố 14, Phường Tam Hiệp, TP Đồng Nai"
            - text: "Địa chỉ xưởng sản xuất: D18A Tổ 3 Khu P. 4, Trấn Biên, TP Đồng Nai"
            - text: "Hotline hỗ trợ 24/7: 0778889559"
            - text: "Điện thoại: 0778889559"
            - text: "Email tiếp nhận thông tin: quangcaotrungson1518@gmail.com"
            - text: "Website chính thức: banghieudepbienhoa.com"
          - link "Xem thêm bài viết" [ref=e184] [cursor=pointer]:
            - /url: javascript:;
            - generic [ref=e185]:
              - text: Xem thêm bài viết
              - img [ref=e186]
    - generic [ref=e189]:
      - generic [ref=e192]:
        - generic [ref=e193]:
          - link "BẢNG HIỆU ĐẸP 247" [ref=e194] [cursor=pointer]:
            - /url: https://code6.mimadigi.vn/2026/august/haiyen_112526W/
            - img "BẢNG HIỆU ĐẸP 247" [ref=e195]
          - paragraph [ref=e196]: CÔNG TY MAY CỜ HẢI YẾN
          - paragraph [ref=e198]: Chuyên thiết kế và thi công bảng hiệu quảng cáo, mang đến giải pháp sáng tạo, chuyên nghiệp, bền đẹp, giúp thương hiệu nổi bật và thu hút khách hàng.
          - paragraph [ref=e199]: Theo dõi chúng tôi tại
          - generic [ref=e200]:
            - link "Facebook" [ref=e201] [cursor=pointer]:
              - /url: ""
              - img "Facebook" [ref=e202]
            - link "Message" [ref=e203] [cursor=pointer]:
              - /url: ""
              - img "Message" [ref=e204]
        - generic [ref=e206]:
          - generic [ref=e207]:
            - paragraph [ref=e208]: Dịch vụ
            - list [ref=e209]:
              - listitem [ref=e210]:
                - link "xưởng in cờ phướn giá tốt đồng nai" [ref=e211] [cursor=pointer]:
                  - /url: xuong-in-co-phuon-gia-tot-dong-nai
              - listitem [ref=e212]:
                - link "LED HẮT SÁNG" [ref=e213] [cursor=pointer]:
                  - /url: led-hat-sang
              - listitem [ref=e214]:
                - link "TRẦN XUYÊN SÁNG" [ref=e215] [cursor=pointer]:
                  - /url: tran-xuyen-sang
              - listitem [ref=e216]:
                - link "PANO NGOÀI TRỜI" [ref=e217] [cursor=pointer]:
                  - /url: pano-ngoai-troi
              - listitem [ref=e218]:
                - link "BẢNG HIỆU ALU CHỮ NỔI" [ref=e219] [cursor=pointer]:
                  - /url: bang-hieu-alu-chu-noi
              - listitem [ref=e220]:
                - link "CHỮ NỔI INOX" [ref=e221] [cursor=pointer]:
                  - /url: chu-noi-inox
              - listitem [ref=e222]:
                - link "BẢNG HIỆU BẠT HIFLEX" [ref=e223] [cursor=pointer]:
                  - /url: bang-hieu-bat-hiflex
              - listitem [ref=e224]:
                - link "HỘP ĐÈN 3M" [ref=e225] [cursor=pointer]:
                  - /url: hop-den-3m
              - listitem [ref=e226]:
                - link "BẢNG ĐÈN LED" [ref=e227] [cursor=pointer]:
                  - /url: bang-den-led
              - listitem [ref=e228]:
                - link "CHỮ NỔI MICA" [ref=e229] [cursor=pointer]:
                  - /url: chu-noi-mica
          - generic [ref=e230]:
            - paragraph [ref=e231]: Thông tin liên hệ
            - generic [ref=e232]:
              - paragraph [ref=e233]:
                - strong [ref=e234]: "Địa chỉ:"
              - paragraph [ref=e235]:
                - strong [ref=e236]: "1. Công ty:"
                - text: Số 68B/H2 Tổ 15, Khu phố 14, P. Tam Hiệp, TP. Đồng Nai
              - paragraph [ref=e237]:
                - strong [ref=e238]: "2. Xưởng:"
                - text: D18A Tổ 3, Khu phố 4, P. Trấn Biên, TP. Đồng Nai
              - paragraph [ref=e239]:
                - strong [ref=e240]: "Hotline:"
                - text: 077.888.9559
              - paragraph [ref=e241]:
                - strong [ref=e242]: "Email:"
                - text: quangcaotrungson1518@gmail.com
              - paragraph [ref=e243]:
                - strong [ref=e244]: "Website:"
                - text: www.banghieudepbienhoa.com
      - generic [ref=e248]: Copyright ©2026 Web Mima. All Rights Reserved. Thiết kế Web MIMA
    - generic [ref=e249]:
      - 'link "Call me: 0778889559" [ref=e250] [cursor=pointer]':
        - /url: tel:0778889559
        - img [ref=e254]
        - generic [ref=e257]: "Call me: 0778889559"
      - 'link "Zalo: 0778889559" [ref=e258] [cursor=pointer]':
        - /url: https://zalo.me/0778889559
        - img [ref=e262]
        - generic [ref=e263]: "Zalo: 0778889559"
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
          - strong: Thi công Cột Cờ Inox Ngoài Trời Đồng Nai
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e264]:
      - generic [ref=e265]: "❌ Chi tiết lỗi cần khắc phục (2/15):"
      - generic [ref=e266]:
        - generic [ref=e267]:
          - generic [ref=e268]: 3. Heading (H1-H6)
          - generic [ref=e269]: 1 lỗi
        - generic [ref=e270]:
          - strong [ref=e272]: Heading phân cấp hợp lệ (1 lỗi)
          - generic [ref=e273]: "⚠️ Heading phân cấp sai: Nhảy cấp từ H1 → H3 (\"Mô tả dịch vụ\")"
      - generic [ref=e274]:
        - generic [ref=e275]:
          - generic [ref=e276]: 6. Liên kết (Links)
          - generic [ref=e277]: 1 lỗi
        - generic [ref=e278]:
          - strong [ref=e280]: "Không có broken links (lỗi: 2/32)"
          - generic [ref=e281]: "⚠️ Broken links: fb-messenger://share/?link=https%3A%2F%2Fcode6.mimadigi.vn%2F2026%2Faugust%2Fhaiyen_112526W%2Fthi-cong-cot-co-inox-ngoai-troi-dong-nai (status: 0), sms:?&body=Thi%20c%C3%B4ng%20C%E1%BB%9..."
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