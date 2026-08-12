# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Bạt (/bat)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 93/100 dưới ngưỡng 95%. Có 1/15 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e5]:
      - generic [ref=e6]: Ưu Đãi Chiết Khấu Lên Đến 20% Cho Đại Lý & Đơn Vị Thi Công Quảng Cáo Đặt In UV Khổ Lớn
      - generic [ref=e7]: Ưu Đãi Chiết Khấu Lên Đến 20% Cho Đại Lý & Đơn Vị Thi Công Quảng Cáo Đặt In UV Khổ Lớn
      - generic [ref=e8]: Ưu Đãi Chiết Khấu Lên Đến 20% Cho Đại Lý & Đơn Vị Thi Công Quảng Cáo Đặt In UV Khổ Lớn
      - generic [ref=e9]: Ưu Đãi Chiết Khấu Lên Đến 20% Cho Đại Lý & Đơn Vị Thi Công Quảng Cáo Đặt In UV Khổ Lớn
    - generic [ref=e11]:
      - generic [ref=e13]:
        - link "In UV Phúc Sơn" [ref=e15] [cursor=pointer]:
          - /url: https://inuvgiare24h.vn/
          - img "In UV Phúc Sơn" [ref=e16]
        - generic [ref=e17]:
          - list [ref=e18]:
            - listitem [ref=e19]:
              - link "Trang chủ" [ref=e20] [cursor=pointer]:
                - /url: https://inuvgiare24h.vn/
            - listitem [ref=e21]
            - listitem [ref=e22]:
              - link "Giới thiệu" [ref=e23] [cursor=pointer]:
                - /url: gioi-thieu
            - listitem [ref=e24]
            - listitem [ref=e25]:
              - link "Dịch vụ" [ref=e26] [cursor=pointer]:
                - /url: dich-vu
            - listitem [ref=e27]
            - listitem [ref=e28]:
              - link "Sản phẩm" [ref=e29] [cursor=pointer]:
                - /url: san-pham
                - text: Sản phẩm
                - img [ref=e30]
            - listitem [ref=e32]
            - listitem [ref=e33]:
              - link "Dự án" [ref=e34] [cursor=pointer]:
                - /url: du-an
            - listitem [ref=e35]
            - listitem [ref=e36]:
              - link "Blog" [ref=e37] [cursor=pointer]:
                - /url: blog
            - listitem [ref=e38]
            - listitem [ref=e39]:
              - link "Liên hệ" [ref=e40] [cursor=pointer]:
                - /url: lien-he
          - generic [ref=e41]:
            - generic [ref=e42]:
              - img [ref=e43]
              - link "0935 663 007" [ref=e46] [cursor=pointer]:
                - /url: tel:0935663007
            - generic [ref=e47]:
              - link "Tiếng Việt VN" [ref=e48] [cursor=pointer]:
                - /url: https://inuvgiare24h.vn/ngon-ngu/vi/
                - img "Tiếng Việt" [ref=e49]
                - generic [ref=e50]: VN
              - link "Tiếng Anh EN" [ref=e52] [cursor=pointer]:
                - /url: https://inuvgiare24h.vn/ngon-ngu/en/
                - img "Tiếng Anh" [ref=e53]
                - generic [ref=e54]: EN
            - generic [ref=e56]:
              - button "×" [ref=e57] [cursor=pointer]
              - button "Tìm kiếm" [ref=e58] [cursor=pointer]:
                - img [ref=e59]
      - list [ref=e62]:
        - listitem [ref=e63]:
          - link "In UV Khổ Lớn Không Ghép" [ref=e64] [cursor=pointer]:
            - /url: in-uv-kho-lon-khong-ghep
        - listitem [ref=e65]:
          - link "In UV 2 mặt" [ref=e66] [cursor=pointer]:
            - /url: in-uv-2-mat
        - listitem [ref=e67]:
          - link "In UV Mặt Phẳng" [ref=e68] [cursor=pointer]:
            - /url: in-uv-mat-phang
        - listitem [ref=e69]:
          - link "In UV Bạt Hiflex" [ref=e70] [cursor=pointer]:
            - /url: in-uv-bat-hiflex
        - listitem [ref=e71]:
          - link "In Trần Xuyên Sáng" [ref=e72] [cursor=pointer]:
            - /url: in-tran-xuyen-sang
        - listitem [ref=e73]:
          - link "Tất cả sản phẩm" [ref=e74] [cursor=pointer]:
            - /url: san-pham
    - list [ref=e77]:
      - listitem [ref=e78]:
        - link "Trang chủ" [ref=e79] [cursor=pointer]:
          - /url: https://inuvgiare24h.vn/
          - img [ref=e80]
          - generic [ref=e82]: Trang chủ
      - listitem [ref=e83]:
        - text: /
        - link "Sản phẩm" [ref=e84] [cursor=pointer]:
          - /url: https://inuvgiare24h.vn/san-pham
      - listitem [ref=e85]:
        - text: /
        - link "Bạt" [ref=e86] [cursor=pointer]:
          - /url: https://inuvgiare24h.vn/bat
    - generic [ref=e90]:
      - generic [ref=e92]: Bạt
      - generic [ref=e94]:
        - generic [ref=e96]:
          - link "Vải Canvas" [ref=e98] [cursor=pointer]:
            - /url: vai-canvas
            - img "Vải Canvas" [ref=e99]
          - generic [ref=e100]:
            - heading "Vải Canvas" [level=3] [ref=e101]:
              - link "Vải Canvas" [ref=e102] [cursor=pointer]:
                - /url: vai-canvas
            - paragraph [ref=e103]:
              - generic [ref=e104]: 150.000đ
              - generic [ref=e105]: "-25%"
              - generic [ref=e106]: 200.000đ
        - generic [ref=e108]:
          - link "Vải Simili" [ref=e110] [cursor=pointer]:
            - /url: vai-simili
            - img "Vải Simili" [ref=e111]
          - generic [ref=e112]:
            - heading "Vải Simili" [level=3] [ref=e113]:
              - link "Vải Simili" [ref=e114] [cursor=pointer]:
                - /url: vai-simili
            - paragraph [ref=e115]:
              - generic [ref=e116]: Liên hệ
        - generic [ref=e118]:
          - link "Bạt Không Gân" [ref=e120] [cursor=pointer]:
            - /url: bat-khong-gan
            - img "Bạt Không Gân" [ref=e121]
          - generic [ref=e122]:
            - heading "Bạt Không Gân" [level=3] [ref=e123]:
              - link "Bạt Không Gân" [ref=e124] [cursor=pointer]:
                - /url: bat-khong-gan
            - paragraph [ref=e125]:
              - generic [ref=e126]: Liên hệ
        - generic [ref=e128]:
          - link "Bạt Hiflex Mặt Trắng" [ref=e130] [cursor=pointer]:
            - /url: bat-hiflex-mat-trang
            - img "Bạt Hiflex Mặt Trắng" [ref=e131]
          - generic [ref=e132]:
            - heading "Bạt Hiflex Mặt Trắng" [level=3] [ref=e133]:
              - link "Bạt Hiflex Mặt Trắng" [ref=e134] [cursor=pointer]:
                - /url: bat-hiflex-mat-trang
            - paragraph [ref=e135]:
              - generic [ref=e136]: Liên hệ
        - generic [ref=e138]:
          - link "Bạt 2 Da" [ref=e140] [cursor=pointer]:
            - /url: bat-2-da
            - img "Bạt 2 Da" [ref=e141]
          - generic [ref=e142]:
            - heading "Bạt 2 Da" [level=3] [ref=e143]:
              - link "Bạt 2 Da" [ref=e144] [cursor=pointer]:
                - /url: bat-2-da
            - paragraph [ref=e145]:
              - generic [ref=e146]: Liên hệ
        - generic [ref=e148]:
          - link "Bạt 3M" [ref=e150] [cursor=pointer]:
            - /url: bat-3m
            - img "Bạt 3M" [ref=e151]
          - generic [ref=e152]:
            - heading "Bạt 3M" [level=3] [ref=e153]:
              - link "Bạt 3M" [ref=e154] [cursor=pointer]:
                - /url: bat-3m
            - paragraph [ref=e155]:
              - generic [ref=e156]: Liên hệ
      - generic [ref=e158]:
        - paragraph [ref=e159]:
          - text: Khi hoàn thiện một công trình thi công xây dựng hoặc thiết kế nội thất cửa hàng, việc lựa chọn chất liệu làm biển hiệu, vách ngăn hay vật liệu trang trí là bước quyết định diện mạo thương hiệu. Trong đó, các loại
          - strong [ref=e160]: bạt
          - text: in quảng cáo, bạt hiflex hay decal luôn là ưu tiên hàng đầu nhờ giá thành hợp lý, độ bền vượt trội và khả năng hiển thị sắc nét. Việc hiểu rõ đặc tính của từng loại bạt giúp các chủ đầu tư và nhà thầu tối ưu chi phí, đồng thời tăng tính thẩm mỹ cho toàn bộ không gian nội ngoại thất.
        - heading "Phân Loại Các Dòng Bạt In Quảng Cáo Phổ Biến Trên Thị Trường" [level=2] [ref=e161]
        - paragraph [ref=e162]: Hệ thống bảng biển ngoài trời lẫn hộp đèn nội thất hiện đại đều phụ thuộc lớn vào các dòng chất liệu in ấn cốt lõi dưới đây. Mỗi loại vật liệu sở hữu những đặc tính vật lý riêng biệt, phù hợp với từng phương án thi công cụ thể.
        - heading "Bạt Hiflex Xuyên Sáng Và Không Xuyên Sáng" [level=3] [ref=e163]
        - paragraph [ref=e164]: "Hiflex là loại bạt được cấu tạo từ chất liệu nhựa PVC dẻo dai, có màu trắng sữa chủ đạo, khả năng chịu lực co giãn tốt dưới tác động của thời tiết ngoài trời. Dựa vào độ dày và tính chất vật lý, hiflex được chia làm hai nhóm chính:"
        - list [ref=e165]:
          - listitem [ref=e166]:
            - strong [ref=e167]: "Bạt hiflex xuyên sáng:"
            - text: Có độ dày mỏng vừa phải, cho phép ánh sáng từ hệ thống đèn LED hoặc đèn tuýp neon đi xuyên qua tối đa. Loại bạt này chuyên dùng để căng trên khung sắt làm hộp đèn quảng cáo, biển hiệu phát sáng ban đêm cho các cửa hàng thời trang, quán ăn, showroom nội thất.
          - listitem [ref=e168]:
            - strong [ref=e169]: "Bạt hiflex không xuyên sáng:"
            - text: Thường được phủ một lớp màng màu xám hoặc đen ở mặt sau (hay còn gọi là bạt hiflex đế xám/đế đen). Lớp phủ này ngăn chặn hoàn toàn ánh sáng đi qua từ phía sau, giúp hình ảnh in ở mặt trước luôn rõ nét, không bị lộ bóng của khung xương sắt hộp. Loại bạt này cực kỳ thích hợp cho các tấm pano, billboard tấm lớn ngoài trời, backdrop sự kiện ngoài trời có cường độ ánh sáng mạnh chiếu trực tiếp.
        - heading "Bạt 3M Cao Cấp" [level=3] [ref=e170]
        - paragraph [ref=e171]: Nếu phân khúc phổ thông gọi tên Hiflex thì bạt 3M chính là dòng chất liệu đứng đầu ở phân khúc cao cấp. Chất liệu này cho khả năng bám mực vượt trội, đặc biệt khi kết hợp với công nghệ in UV hiện đại. Bạt 3M có độ xuyên sáng hoàn hảo, màu sắc hiển thị chuẩn xác và giữ được độ tươi sáng trong thời gian dài. Khả năng chống chịu thời tiết của bạt 3M cực tốt, không bị mục nát hay bay màu từ 3 đến 5 năm sử dụng ngoài trời. Chất liệu này thường xuất hiện tại các ngân hàng lớn, trung tâm thương mại và các showroom thiết kế nội thất cao cấp đòi hỏi độ nhận diện thương hiệu tuyệt đối.
        - heading "Decal Và PP In Chất Lượng Cao" [level=3] [ref=e172]
        - paragraph [ref=e173]: Bên cạnh các dòng bạt cuộn khổ lớn, decal in và PP (Paper Plastic) cũng là những chất liệu bổ trợ đắc lực trong ngành quảng cáo và trang trí. Decal có sẵn lớp keo dán phía sau, dễ dàng bồi lên các tấm formex, mica hoặc kính để làm tranh treo tường nghệ thuật. Trong khi đó, PP sở hữu bề mặt mịn màng hơn bạt thông thường, cho hình ảnh sắc nét đến từng chi tiết nhỏ, thường dùng làm standee đứng, poster giới thiệu dự án thi công nội thất tại các sảnh văn phòng.
        - heading "Ứng Dụng Của Bạt Trong Thiết Kế Nội Thất Và Thi Công Xây Dựng" [level=2] [ref=e174]
        - paragraph [ref=e175]: "Không chỉ bó hẹp trong lĩnh vực truyền thông, các loại bạt in chất lượng cao ngày nay đang khẳng định vị thế vững chắc trong ngành xây dựng và hoàn thiện không gian sống:"
        - heading "Tạo Điểm Nhấn Cho Không Gian Nội Thất" [level=3] [ref=e176]
        - paragraph [ref=e177]: Trong các văn phòng hiện đại, showroom hay quán cà phê, hộp đèn bạt 3M hoặc bạt hiflex xuyên sáng được ứng dụng như những bức tranh điện cỡ lớn. Chúng cung cấp nguồn ánh sáng dịu nhẹ nhưng vô cùng nổi bật, tạo chiều sâu cho không gian. Ngoài ra, việc sử dụng bạt in họa tiết giả gỗ, giả đá hoặc tranh phong cảnh khổ lớn để làm vách ngăn tạm thời là giải pháp thông minh giúp phân chia các khu vực chức năng nhanh chóng, tiết kiệm tối đa chi phí so với việc xây dựng tường gạch hay vách thạch cao truyền thống.
        - heading "Phục Vụ Công Tác Thi Công Xây Dựng Và An Toàn Công Trình" [level=3] [ref=e178]
        - paragraph [ref=e179]: Tại các công trường xây dựng, bạt khổ lớn không chỉ dùng để che chắn bụi bẩn hay bảo vệ vật liệu xây dựng khỏi nắng mưa. Các nhà thầu chuyên nghiệp thường tận dụng bạt hiflex không xuyên sáng khổ lớn để in ấn phối cảnh 3D của dự án, thông tin nhà thầu, tiến độ công trình để làm hàng rào bao quanh (hoarding). Giải pháp này vừa đảm bảo an toàn lao động, giữ gìn vệ sinh đô thị, vừa là kênh quảng bá dự án trực quan nhất tới khách hàng tiềm năng đi ngang qua khu vực thi công.
        - heading "Tiêu Chí Đánh Giá Bạt In Quảng Cáo Đạt Chuẩn Chất Lượng" [level=2] [ref=e180]
        - paragraph [ref=e181]: "Để sở hữu một thành phẩm in ấn bền đẹp, chịu được áp lực gió và thời tiết khắc nghiệt, người tiêu dùng và các đơn vị thi công cần lưu ý các yếu tố kỹ thuật sau:"
        - list [ref=e182]:
          - listitem [ref=e183]:
            - strong [ref=e184]: "Độ dày của bạt:"
            - text: Bạt quá mỏng dễ bị rách khi có gió lớn, ngược lại bạt quá dày sẽ khó thi công căng phẳng trên khung sắt. Thông thường, độ dày từ 0.32mm đến 0.38mm là lý tưởng cho các nhu cầu làm biển hiệu ngoài trời phổ thông.
          - listitem [ref=e185]:
            - strong [ref=e186]: "Công nghệ in ấn:"
            - text: In mực dầu (Solvent) phù hợp cho các loại bạt ngoài trời ngắn hạn với chi phí tiết kiệm. Trong khi đó, công nghệ in UV trên bạt 3M mang lại độ bền màu gấp nhiều lần, bề mặt tranh mịn màng, không có mùi mực khó chịu, an toàn tuyệt đối khi sử dụng trong phòng kín.
          - listitem [ref=e187]:
            - strong [ref=e188]: "Kết cấu khung xương chịu lực:"
            - text: Bạt luôn cần đi kèm với hệ khung sắt hộp gia cố phía sau. Khung sắt phải được hàn chắc chắn, sơn chống rỉ kỹ lưỡng để tránh tình trạng rỉ sét chảy xuống làm ố vàng bề mặt bạt sau thời gian dài sử dụng ngoài trời.
        - heading "Địa Chỉ Cung Cấp, Thi Công Bạt In Quảng Cáo Uy Tín Tại TP.HCM" [level=2] [ref=e189]
        - paragraph [ref=e190]: Để hiện thực hóa các ý tưởng thiết kế nội thất và quảng cáo ngoài trời một cách trọn vẹn, việc tìm kiếm một đối tác in ấn và thi công chuyên nghiệp là yếu tố quyết định chất lượng thành phẩm cuối cùng.
        - paragraph [ref=e191]: Công ty TNHH Sản xuất Thương mại Dịch vụ và Quảng cáo Phúc Sơn tự hào là đơn vị hàng đầu chuyên cung cấp các giải pháp in ấn bạt hiflex, bạt 3M, decal, PP chất lượng cao tại TP.HCM. Chúng tôi sở hữu hệ thống máy in hiện đại, đáp ứng nhanh chóng mọi yêu cầu về kích thước và số lượng của khách hàng.
        - paragraph [ref=e192]: "Những giá trị vượt trội mà Phúc Sơn mang đến cho khách hàng:"
        - list [ref=e193]:
          - listitem [ref=e194]: Chất liệu đa dạng, nguồn gốc rõ ràng, từ bạt hiflex xuyên sáng, không xuyên sáng đến các dòng bạt 3M cao cấp nhập khẩu trực tiếp.
          - listitem [ref=e195]: Đội ngũ kỹ thuật viên giàu kinh nghiệm, am hiểu sâu về kết cấu thi công xây dựng, đảm bảo các công trình biển hiệu, hộp đèn được lắp đặt an toàn, phẳng phiu, không bị nhăn góc.
          - listitem [ref=e196]: Giá thành cạnh tranh trực tiếp tại xưởng sản xuất, không qua trung gian, giúp tối ưu hóa ngân sách cho các đơn vị thầu thiết kế nội thất và xây dựng.
          - listitem [ref=e197]: Hỗ trợ thiết kế, đo đạc tận nơi và giao hàng đúng tiến độ cam kết.
        - paragraph [ref=e198]: "Quý khách hàng có nhu cầu tư vấn thiết kế, đặt in các loại bạt quảng cáo chất lượng cao vui lòng liên hệ trực tiếp với Phúc Sơn theo thông tin dưới đây để nhận báo giá ưu đãi và nhanh chóng nhất:"
        - paragraph [ref=e199]:
          - strong [ref=e200]: CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ VÀ QUẢNG CÁO PHÚC SƠN
          - text: "Địa chỉ: 160A Tam Bình, Khu phố 2, Phường Tam Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam"
          - text: "Hotline: 0935 663 007"
          - text: "Điện thoại: 0935 663 007"
          - text: "Email: phucsonadv@gmail.com"
        - link "Xem thêm" [ref=e203] [cursor=pointer]:
          - /url: javascript:;
          - generic [ref=e204]:
            - text: Xem thêm
            - img [ref=e205]
    - generic [ref=e213]:
      - generic [ref=e216]:
        - generic [ref=e217]:
          - link "In UV Phúc Sơn" [ref=e218] [cursor=pointer]:
            - /url: https://inuvgiare24h.vn/
            - img "In UV Phúc Sơn" [ref=e219]
          - paragraph [ref=e220]: In UV Phúc Sơn
          - list [ref=e221]:
            - listitem [ref=e222]: "Địa chỉ: 160A Tam Bình, Khu phố 2, Phường Tam Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam"
            - listitem [ref=e223]:
              - text: "Hotline:"
              - link "0935 663 007" [ref=e224] [cursor=pointer]:
                - /url: tel:0935663007
            - listitem [ref=e225]:
              - text: "Email:"
              - link "phucsonadv@gmail.com" [ref=e226] [cursor=pointer]:
                - /url: mailto:phucsonadv@gmail.com
        - generic [ref=e227]:
          - paragraph [ref=e228]: Về chúng tôi
          - list [ref=e229]:
            - listitem [ref=e230]:
              - link "Giới thiệu" [ref=e231] [cursor=pointer]:
                - /url: gioi-thieu
            - listitem [ref=e232]:
              - link "Sản phẩm" [ref=e233] [cursor=pointer]:
                - /url: san-pham
            - listitem [ref=e234]:
              - link "Dự án" [ref=e235] [cursor=pointer]:
                - /url: du-an
            - listitem [ref=e236]:
              - link "Blog" [ref=e237] [cursor=pointer]:
                - /url: blog
            - listitem [ref=e238]:
              - link "Liên hệ" [ref=e239] [cursor=pointer]:
                - /url: lien-he
        - generic [ref=e240]:
          - paragraph [ref=e241]: Dịch vụ nổi bật
          - list [ref=e242]:
            - listitem [ref=e243]:
              - link "In UV Khổ Lớn Không Ghép" [ref=e244] [cursor=pointer]:
                - /url: in-uv-kho-lon-khong-ghep
            - listitem [ref=e245]:
              - link "In UV 2 mặt" [ref=e246] [cursor=pointer]:
                - /url: in-uv-2-mat
            - listitem [ref=e247]:
              - link "In UV Mặt Phẳng" [ref=e248] [cursor=pointer]:
                - /url: in-uv-mat-phang
            - listitem [ref=e249]:
              - link "In UV Bạt Hiflex" [ref=e250] [cursor=pointer]:
                - /url: in-uv-bat-hiflex
            - listitem [ref=e251]:
              - link "In Trần Xuyên Sáng" [ref=e252] [cursor=pointer]:
                - /url: in-tran-xuyen-sang
        - generic [ref=e253]:
          - paragraph [ref=e254]: Chính sách của chúng tôi
          - list [ref=e255]:
            - listitem [ref=e256]:
              - link "Chính sách bảo hành" [ref=e257] [cursor=pointer]:
                - /url: chinh-sach-bao-hanh
            - listitem [ref=e258]:
              - link "Chính sách đổi trả" [ref=e259] [cursor=pointer]:
                - /url: chinh-sach-doi-tra
            - listitem [ref=e260]:
              - link "Chính sách giao hàng" [ref=e261] [cursor=pointer]:
                - /url: chinh-sach-giao-hang
            - listitem [ref=e262]:
              - link "Chính sách bảo mật" [ref=e263] [cursor=pointer]:
                - /url: chinh-sach-bao-mat
            - listitem [ref=e264]:
              - link "Điều khoản sử dụng" [ref=e265] [cursor=pointer]:
                - /url: dieu-khoan-su-dung
      - generic [ref=e268]:
        - generic [ref=e269]:
          - text: Copyright ©2026 In UV Phúc Sơn Thiết kế web
          - link "MIMA" [ref=e270] [cursor=pointer]:
            - /url: https://mimatech.vn
        - generic [ref=e272]:
          - link "face" [ref=e273] [cursor=pointer]:
            - /url: ""
            - img "face" [ref=e274]
          - link "mess" [ref=e275] [cursor=pointer]:
            - /url: ""
            - img "mess" [ref=e276]
          - link "tiktok" [ref=e277] [cursor=pointer]:
            - /url: ""
            - img "tiktok" [ref=e278]
          - link "youtube" [ref=e279] [cursor=pointer]:
            - /url: ""
            - img "youtube" [ref=e280]
          - link "zalo" [ref=e281] [cursor=pointer]:
            - /url: ""
            - img "zalo" [ref=e282]
    - generic [ref=e283]:
      - 'link "Call me: 0935 663 007" [ref=e284] [cursor=pointer]':
        - /url: tel:0935663007
        - img [ref=e288]
        - generic [ref=e291]: "Call me: 0935 663 007"
      - 'link "Zalo: 0935 663 007" [ref=e292] [cursor=pointer]':
        - /url: https://zalo.me/0935663007
        - img [ref=e296]
        - generic [ref=e297]: "Zalo: 0935 663 007"
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
          - strong: Bạt
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e298]:
      - generic [ref=e299]: "❌ Chi tiết lỗi cần khắc phục (1/15):"
      - generic [ref=e300]:
        - generic [ref=e301]:
          - generic [ref=e302]: 3. Heading (H1-H6)
          - generic [ref=e303]: 1 lỗi
        - generic [ref=e304]:
          - strong [ref=e306]: Heading phân cấp hợp lệ (1 lỗi)
          - generic [ref=e307]: "⚠️ Heading phân cấp sai: Nhảy cấp từ H1 → H6 (\"Danh mục\")"
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