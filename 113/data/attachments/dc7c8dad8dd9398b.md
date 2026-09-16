# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Giải pháp (/giai-phap)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 85/100 dưới ngưỡng 96%. Có 3/20 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link "Tối ưu 30% chi phí vận hành & Tự động hóa báo cáo tài chính." [ref=e9] [cursor=pointer]:
        - /url: https://apps.apple.com/us/iphone/apps
      - generic [ref=e12]:
        - link "KIỂM TOÁN ICMA" [ref=e13] [cursor=pointer]:
          - /url: https://code4.mimadigi.vn/2026/september/icma_109626W/
          - img "KIỂM TOÁN ICMA" [ref=e14]
        - list [ref=e16]:
          - listitem [ref=e17]:
            - link "Trang chủ" [ref=e18] [cursor=pointer]:
              - /url: https://code4.mimadigi.vn/2026/september/icma_109626W/
          - listitem [ref=e19]:
            - link "Giới thiệu" [ref=e20] [cursor=pointer]:
              - /url: gioi-thieu
          - listitem [ref=e21]:
            - link "Dịch vụ" [ref=e22] [cursor=pointer]:
              - /url: dich-vu
          - listitem [ref=e23]:
            - link "Giải pháp" [ref=e24] [cursor=pointer]:
              - /url: giai-phap
          - listitem [ref=e25]:
            - link "Bảng giá" [ref=e26] [cursor=pointer]:
              - /url: bang-gia
          - listitem [ref=e27]:
            - link "Tài nguyên" [ref=e28] [cursor=pointer]:
              - /url: tai-nguyen
          - listitem [ref=e29]:
            - link "Liên hệ" [ref=e30] [cursor=pointer]:
              - /url: lien-he
        - generic [ref=e31]:
          - link "Đăng ký tư vấn" [ref=e32] [cursor=pointer]:
            - /url: javascript:;
          - button "Tiếng Việt" [ref=e34] [cursor=pointer]:
            - img "Tiếng Việt" [ref=e35]
    - list [ref=e38]:
      - listitem [ref=e39]:
        - link "Trang chủ" [ref=e40] [cursor=pointer]:
          - /url: https://code4.mimadigi.vn/2026/september/icma_109626W/
          - generic [ref=e41]: Trang chủ
      - listitem [ref=e42]:
        - text: /
        - link "Giải pháp" [ref=e43] [cursor=pointer]:
          - /url: https://code4.mimadigi.vn/2026/september/icma_109626W/giai-phap
    - generic [ref=e45]:
      - generic [ref=e47]: Giải pháp
      - generic [ref=e49]:
        - article [ref=e51]:
          - link "Kế toán và những sai sót doanh nghiệp thường gặp Kế toán và những sai sót doanh nghiệp thường gặp" [ref=e53] [cursor=pointer]:
            - /url: ke-toan-va-nhung-sai-sot-doanh-nghiep-thuong-gap
            - img "Kế toán và những sai sót doanh nghiệp thường gặp Kế toán và những sai sót doanh nghiệp thường gặp" [ref=e54]
          - generic [ref=e55]:
            - heading "Kế toán và những sai sót doanh nghiệp thường gặp Kế toán và những sai sót doanh nghiệp thường gặp" [level=3] [ref=e56]:
              - link "Kế toán và những sai sót doanh nghiệp thường gặp Kế toán và những sai sót doanh nghiệp thường gặp" [ref=e57] [cursor=pointer]:
                - /url: ke-toan-va-nhung-sai-sot-doanh-nghiep-thuong-gap
            - paragraph [ref=e58]: Kế toán là chiếc la bàn định hướng dòng tiền cho các doanh nghiệp thiết kế nội thất và thi công xây dựng. Bài viết này vạch trần những sai sót tài chính phổ biến, từ đó gợi ý giải pháp giúp chủ doanh nghiệp quản lý hiệu quả và thúc đẩy tăng trưởng bền vững.
        - article [ref=e60]:
          - link "Kế toán Thuế và Tài chính khi doanh nghiệp IPO" [ref=e62] [cursor=pointer]:
            - /url: ke-toan-thue-va-tai-chinh-khi-doanh-nghiep-ipo
            - img "Kế toán Thuế và Tài chính khi doanh nghiệp IPO" [ref=e63]
          - generic [ref=e64]:
            - heading "Kế toán Thuế và Tài chính khi doanh nghiệp IPO" [level=3] [ref=e65]:
              - link "Kế toán Thuế và Tài chính khi doanh nghiệp IPO" [ref=e66] [cursor=pointer]:
                - /url: ke-toan-thue-va-tai-chinh-khi-doanh-nghiep-ipo
            - paragraph [ref=e67]: Kế toán là nền tảng cốt lõi giúp các doanh nghiệp thiết kế nội thất và thi công xây dựng chuẩn hóa dòng tiền, tối ưu chi phí và minh bạch tài chính để sẵn sàng bứt phá cho hành trình IPO đầy khát vọng.
        - article [ref=e69]:
          - link "CFO và M&A có vai trò gì trong thương vụ" [ref=e71] [cursor=pointer]:
            - /url: cfo-va-ma-co-vai-tro-gi-trong-thuong-vu
            - img "CFO và M&A có vai trò gì trong thương vụ" [ref=e72]
          - generic [ref=e73]:
            - heading "CFO và M&A có vai trò gì trong thương vụ" [level=3] [ref=e74]:
              - link "CFO và M&A có vai trò gì trong thương vụ" [ref=e75] [cursor=pointer]:
                - /url: cfo-va-ma-co-vai-tro-gi-trong-thuong-vu
            - paragraph [ref=e76]: CFO và M&A là hai yếu tố then chốt quyết định thành công của bất kỳ thương vụ nào trong lĩnh vực thi công nội thất và xây dựng, từ việc lập kế hoạch tài chính, tối ưu chi phí đến việc mở rộng quy mô qua các thương vụ sáp nhập. Bài viết sẽ phân tích sâu vai trò của chúng, cung cấp góc nhìn thực tiễn cho doanh nghiệp muốn nâng tầm dịch vụ kế toán, thuế, KTQT, Kiểm toán và Tài chính.
        - article [ref=e78]:
          - link "IPO doanh nghiệp cần chuẩn bị tài chính thế nào" [ref=e80] [cursor=pointer]:
            - /url: ipo-doanh-nghiep-can-chuan-bi-tai-chinh-the-nao
            - img "IPO doanh nghiệp cần chuẩn bị tài chính thế nào" [ref=e81]
          - generic [ref=e82]:
            - heading "IPO doanh nghiệp cần chuẩn bị tài chính thế nào" [level=3] [ref=e83]:
              - link "IPO doanh nghiệp cần chuẩn bị tài chính thế nào" [ref=e84] [cursor=pointer]:
                - /url: ipo-doanh-nghiep-can-chuan-bi-tai-chinh-the-nao
            - paragraph [ref=e85]: Kế toán là nền tảng giúp doanh nghiệp thiết kế nội thất và thi công xây dựng chuẩn hóa số liệu tài chính trước hành trình IPO đầy khát vọng. Việc minh bạch dòng tiền và tối ưu cấu trúc vốn từ sớm là chìa khóa cốt lõi mở ra cánh cửa thành công trên sàn chứng khoán.
        - article [ref=e87]:
          - link "IPO và quy trình đưa doanh nghiệp lên sàn" [ref=e89] [cursor=pointer]:
            - /url: ipo-va-quy-trinh-dua-doanh-nghiep-len-san
            - img "IPO và quy trình đưa doanh nghiệp lên sàn" [ref=e90]
          - generic [ref=e91]:
            - heading "IPO và quy trình đưa doanh nghiệp lên sàn" [level=3] [ref=e92]:
              - link "IPO và quy trình đưa doanh nghiệp lên sàn" [ref=e93] [cursor=pointer]:
                - /url: ipo-va-quy-trinh-dua-doanh-nghiep-len-san
            - paragraph [ref=e94]: Kế toán là nền tảng vững chắc giúp doanh nghiệp nội thất và xây dựng chuẩn bị bước ngoặt quan trọng khi tiến tới IPO, từ việc xây dựng báo cáo tài chính chuẩn đến việc duy trì tính minh bạch trước nhà đầu tư; bài viết sẽ dẫn bạn qua từng giai đoạn, nhấn mạnh vai trò của dịch vụ Kế toán, Thuế, KTQT, CFO, Kiểm toán, Tài chính, M&A và cách triển khai chiến lược IPO thành công.
        - article [ref=e96]:
          - link "IPO là gì và điều kiện doanh nghiệp cần chuẩn bị" [ref=e98] [cursor=pointer]:
            - /url: ipo-la-gi-va-dieu-kien-doanh-nghiep-can-chuan-bi
            - img "IPO là gì và điều kiện doanh nghiệp cần chuẩn bị" [ref=e99]
          - generic [ref=e100]:
            - heading "IPO là gì và điều kiện doanh nghiệp cần chuẩn bị" [level=3] [ref=e101]:
              - link "IPO là gì và điều kiện doanh nghiệp cần chuẩn bị" [ref=e102] [cursor=pointer]:
                - /url: ipo-la-gi-va-dieu-kien-doanh-nghiep-can-chuan-bi
            - paragraph [ref=e103]: IPO là bước ngoặt vĩ đại giúp doanh nghiệp thiết kế nội thất và thi công xây dựng bứt phá giới hạn, vươn tầm thành tập đoàn đại chúng quy mô lớn. Hành trình này đòi hỏi sự chuẩn bị khốc liệt về tài chính, quản trị và một chiến lược minh bạch, vững chắc ngay từ ban đầu.
        - generic:
          - article:
            - generic:
              - link "M&A cần lưu ý gì khi định giá doanh nghiệp":
                - /url: ma-can-luu-y-gi-khi-dinh-gia-doanh-nghiep
            - generic:
              - heading "M&A cần lưu ý gì khi định giá doanh nghiệp" [level=3]:
                - link "M&A cần lưu ý gì khi định giá doanh nghiệp":
                  - /url: ma-can-luu-y-gi-khi-dinh-gia-doanh-nghiep
              - paragraph: M&A là chìa khóa mở ra chương mới đầy khát vọng cho các doanh nghiệp thiết kế nội thất và thi công xây dựng muốn bứt phá quy mô. Để đạt được một thương vụ thành công, việc định giá doanh nghiệp chính xác chính là bệ phóng giúp các bên kiến tạo nên những giá trị bền vững cho tương lai.
        - generic:
          - article:
            - generic:
              - link "M&A là gì và những điều doanh nghiệp cần biết":
                - /url: ma-la-gi-va-nhung-dieu-doanh-nghiep-can-biet
            - generic:
              - heading "M&A là gì và những điều doanh nghiệp cần biết" [level=3]:
                - link "M&A là gì và những điều doanh nghiệp cần biết":
                  - /url: ma-la-gi-va-nhung-dieu-doanh-nghiep-can-biet
              - paragraph: Kế toán là nền tảng tài chính vững chắc giúp các doanh nghiệp trong lĩnh vực thi công nội thất và xây dựng duy trì sức khỏe tài chính, tối ưu chi phí và đưa ra quyết định chiến lược. Bài viết sẽ giải thích M&A là gì, tại sao doanh nghiệp cần nắm vững các quy trình kế toán, thuế, KTQT, CFO, kiểm toán, tài chính, và chuẩn bị IPO.
        - generic:
          - article:
            - generic:
              - link "Tài chính doanh nghiệp cần theo dõi những chỉ số nào":
                - /url: tai-chinh-doanh-nghiep-can-theo-doi-nhung-chi-so-nao
            - generic:
              - heading "Tài chính doanh nghiệp cần theo dõi những chỉ số nào" [level=3]:
                - link "Tài chính doanh nghiệp cần theo dõi những chỉ số nào":
                  - /url: tai-chinh-doanh-nghiep-can-theo-doi-nhung-chi-so-nao
              - paragraph: Tài chính doanh nghiệp là la bàn dẫn đường giúp các công ty thiết kế nội thất và thi công xây dựng định hình tương lai vững chắc. Việc kiểm soát tốt các chỉ số tài chính không chỉ bảo vệ dòng vốn mà còn tạo đà bứt phá cho những công trình biểu tượng.
        - generic:
          - article:
            - generic:
              - link "Tài chính doanh nghiệp và cách quản lý dòng tiền":
                - /url: tai-chinh-doanh-nghiep-va-cach-quan-ly-dong-tien
            - generic:
              - heading "Tài chính doanh nghiệp và cách quản lý dòng tiền" [level=3]:
                - link "Tài chính doanh nghiệp và cách quản lý dòng tiền":
                  - /url: tai-chinh-doanh-nghiep-va-cach-quan-ly-dong-tien
              - paragraph: Kế toán là nền tảng quyết định sức khỏe tài chính của doanh nghiệp, đặc biệt trong ngành nội thất và xây dựng, nơi dòng tiền biến động nhanh và chi phí dự án cao. Bài viết sẽ khám phá cách quản lý dòng tiền hiệu quả, vai trò của dịch vụ kế toán, thuế, kiểm toán, và CFO trong việc tối ưu hoá lợi nhuận, đồng thời đưa ra các bước thực tiễn để doanh nghiệp duy trì ổn định tài chính và phát triển bền vững.
        - generic:
          - article:
            - generic:
              - link "Kiểm toán báo cáo tài chính gồm những gì":
                - /url: kiem-toan-bao-cao-tai-chinh-gom-nhung-gi
            - generic:
              - heading "Kiểm toán báo cáo tài chính gồm những gì" [level=3]:
                - link "Kiểm toán báo cáo tài chính gồm những gì":
                  - /url: kiem-toan-bao-cao-tai-chinh-gom-nhung-gi
              - paragraph: Kế toán là nền tảng quan trọng giúp doanh nghiệp nội thất và xây dựng kiểm soát tài chính, đồng thời là tiền đề để thực hiện kiểm toán báo cáo tài chính một cách chính xác và minh bạch. Bài viết sẽ giải thích chi tiết kiểm toán báo cáo tài chính gồm những gì, quy trình, yếu tố then chốt và cách kết hợp dịch vụ kế toán, thuế, tài chính để tối ưu hoá hoạt động kinh doanh.
        - generic:
          - article:
            - generic:
              - link "Kiểm toán là gì và doanh nghiệp cần biết gì":
                - /url: kiem-toan-la-gi-va-doanh-nghiep-can-biet-gi
            - generic:
              - heading "Kiểm toán là gì và doanh nghiệp cần biết gì" [level=3]:
                - link "Kiểm toán là gì và doanh nghiệp cần biết gì":
                  - /url: kiem-toan-la-gi-va-doanh-nghiep-can-biet-gi
              - paragraph: Kiểm toán là quy trình quan trọng giúp doanh nghiệp ngành thiết kế nội thất và thi công xây dựng minh bạch hóa tài chính. Việc thấu hiểu bản chất và tầm quan trọng của nó sẽ bảo vệ giá trị doanh nghiệp, giúp bạn tự tin hơn trong các chiến lược phát triển dài hạn cũng như quản trị rủi ro.
      - link "Xem thêm 8 Bài viết" [ref=e105] [cursor=pointer]:
        - /url: javascript:void(0)
        - text: Xem thêm
        - generic [ref=e106]: "8"
        - text: Bài viết
    - generic [ref=e108]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - link "KIỂM TOÁN ICMA" [ref=e113] [cursor=pointer]:
            - /url: https://code4.mimadigi.vn/2026/september/icma_109626W/
            - img "KIỂM TOÁN ICMA" [ref=e114]
          - paragraph [ref=e115]: Công Ty TNHH Tư vấn và Kiểm toán ICMA
          - paragraph [ref=e116]:
            - strong [ref=e117]: "Trụ sở chính:"
            - text: Lầu 7, Victory Tower - 12 Tân Trào, Phường Tân Mỹ (Quận 7), TP.HCM, Việt Nam
          - list [ref=e118]:
            - listitem [ref=e119]:
              - img [ref=e120]
              - link "icma.contacts@icma.com.vn" [ref=e123] [cursor=pointer]:
                - /url: mailto:icma.contacts@icma.com.vn
            - listitem [ref=e124]:
              - img [ref=e125]
              - generic [ref=e128]:
                - text: "Tư vấn bán hàng:"
                - link "0938 082 628" [ref=e129] [cursor=pointer]:
                  - /url: tel:0938082628
            - listitem [ref=e130]:
              - img [ref=e131]
              - link "icma.com.vn" [ref=e134] [cursor=pointer]:
                - /url: https://icma.com.vn
          - paragraph [ref=e136]: "Giấy CNĐKKD: 0312165374 - Ngày cấp lần đầu 27/02/2013 Cơ quan cấp: Phòng Đăng ký kinh doanh - Sở Kế hoạch và Đầu tư TP. HCM"
        - generic [ref=e138]:
          - generic [ref=e139]:
            - paragraph [ref=e140]: Dịch vụ
            - list [ref=e141]:
              - listitem [ref=e142]:
                - link "Dịch vụ Kế toán tư vấn thuế" [ref=e143] [cursor=pointer]:
                  - /url: dich-vu-ke-toan-tu-van-thue
          - generic [ref=e144]:
            - paragraph [ref=e145]: Liên kết
            - list [ref=e146]:
              - listitem [ref=e147]:
                - link "Facebook" [ref=e148] [cursor=pointer]:
                  - /url: ""
              - listitem [ref=e149]:
                - link "Message" [ref=e150] [cursor=pointer]:
                  - /url: ""
              - listitem [ref=e151]:
                - link "Instargam" [ref=e152] [cursor=pointer]:
                  - /url: ""
              - listitem [ref=e153]:
                - link "Tiktok" [ref=e154] [cursor=pointer]:
                  - /url: https://vt.tiktok.com/ZS9nuW1De/
              - listitem [ref=e155]:
                - link "Youtobe" [ref=e156] [cursor=pointer]:
                  - /url: ""
          - generic [ref=e157]:
            - paragraph [ref=e158]: Truy cập nhanh
            - list [ref=e159]:
              - listitem [ref=e160]:
                - link "Trang chủ" [ref=e161] [cursor=pointer]:
                  - /url: https://code4.mimadigi.vn/2026/september/icma_109626W/
              - listitem [ref=e162]:
                - link "Giới thiệu" [ref=e163] [cursor=pointer]:
                  - /url: gioi-thieu
              - listitem [ref=e164]:
                - link "Bảng giá" [ref=e165] [cursor=pointer]:
                  - /url: bang-gia
              - listitem [ref=e166]:
                - link "Tài nguyên" [ref=e167] [cursor=pointer]:
                  - /url: tai-nguyen
              - listitem [ref=e168]:
                - link "Liên hệ" [ref=e169] [cursor=pointer]:
                  - /url: lien-he
      - generic [ref=e173]: Copyright @ 2026 Công Ty TNHH Tư vấn và Kiểm toán ICMA. All Right Reserved. Thiết kế Web MIMA
    - generic [ref=e174]:
      - link "Messenger" [ref=e175] [cursor=pointer]:
        - /url: ""
        - img [ref=e179]
        - generic [ref=e180]: Messenger
      - 'link "Zalo: 0938 082 628" [ref=e181] [cursor=pointer]':
        - /url: https://zalo.me/0938082628
        - img [ref=e185]
        - generic [ref=e186]: "Zalo: 0938 082 628"
      - 'link "Email: icma.contacts@icma.com.vn" [ref=e187] [cursor=pointer]':
        - /url: mailto:icma.contacts@icma.com.vn
        - img [ref=e191]
        - generic [ref=e192]: "Email: icma.contacts@icma.com.vn"
      - 'link "Call me: 0938 082 628" [ref=e193] [cursor=pointer]':
        - /url: tel:0938082628
        - img [ref=e197]
        - generic [ref=e200]: "Call me: 0938 082 628"
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
          - strong: Giải pháp
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e201]:
      - generic [ref=e202]: "❌ Chi tiết lỗi cần khắc phục (3/20):"
      - generic [ref=e203]:
        - generic [ref=e204]:
          - generic [ref=e205]: 3. Heading (H1-H6)
          - generic [ref=e206]: 1 lỗi
        - generic [ref=e207]:
          - strong [ref=e209]: Heading phân cấp hợp lệ (1 lỗi)
          - generic [ref=e210]: "⚠️ Heading phân cấp sai: Nhảy cấp từ H3 → H5 (\"Đăng ký nhận tư vấn\")"
      - generic [ref=e211]:
        - generic [ref=e212]:
          - generic [ref=e213]: 8. Tốc độ & Core Web Vitals
          - generic [ref=e214]: 2 lỗi
        - generic [ref=e215]:
          - strong [ref=e217]: "[📱 MOBILE (ƯU TIÊN)] Tổng điểm Performance: 56/100 (≥ 60)"
          - generic [ref=e218]: ⚠️ [📱 MOBILE (ƯU TIÊN)] Điểm Performance 56/100 dưới ngưỡng 60. Phân tích chi tiết LCP/CLS/INP bên dưới...
        - generic [ref=e219]:
          - strong [ref=e221]: "[📱 MOBILE (ƯU TIÊN)] LCP (Largest Contentful Paint): 12754ms (< 2500ms)"
          - generic [ref=e222]: "⚠️ [📱 MOBILE (ƯU TIÊN)] LCP quá cao: 12754ms (chuẩn: < 2.5s) → Thủ phạm LCP:"
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