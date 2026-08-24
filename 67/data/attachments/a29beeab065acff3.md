# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web/search.spec.ts >> Search Feature Tests >> Search form successfully finds product using dynamic keyword from homepage
- Location: tests/web/search.spec.ts:25:13

# Error details

```
TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
Call log:
  - waiting for locator('//div[@id=\'search-result\']') to be visible
    14 × locator resolved to hidden <div id="search-result"></div>

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
    - generic [ref=e49]:
      - button "Previous" [ref=e50] [cursor=pointer]: ←Previous
      - listbox [ref=e52]:
        - option [ref=e53]:
          - link [ref=e54] [cursor=pointer]:
            - /url: ""
            - img [ref=e56]
        - option [ref=e57]:
          - link [ref=e58] [cursor=pointer]:
            - /url: ""
            - img [ref=e60]
        - option "BẢNG HIỆU ĐẸP 247" [ref=e61]:
          - link "BẢNG HIỆU ĐẸP 247" [ref=e62] [cursor=pointer]:
            - /url: ""
            - img "BẢNG HIỆU ĐẸP 247" [ref=e64]
        - option [ref=e65]:
          - link [ref=e66] [cursor=pointer]:
            - /url: ""
            - img [ref=e68]
      - button "Next" [ref=e69] [cursor=pointer]: →Next
    - generic [ref=e70]:
      - generic [ref=e75]:
        - generic [ref=e77]:
          - paragraph [ref=e78]:
            - img "Đa dạng dịch vụ" [ref=e79]
          - generic [ref=e80]:
            - heading "Đa dạng dịch vụ" [level=3] [ref=e81]
            - paragraph [ref=e82]: Đáp ứng trọn gói mọi nhu cầu về bảng hiệu quảng cáo
        - generic [ref=e84]:
          - paragraph [ref=e85]:
            - img "Khảo sát nhanh" [ref=e86]
          - generic [ref=e87]:
            - heading "Khảo sát nhanh" [level=3] [ref=e88]
            - paragraph [ref=e89]: Khảo sát tận nơi nhanh chóng, tư vấn phương án phù hợp
        - generic [ref=e91]:
          - paragraph [ref=e92]:
            - img "Thiết kế 2D & 3D" [ref=e93]
          - generic [ref=e94]:
            - heading "Thiết kế 2D & 3D" [level=3] [ref=e95]
            - paragraph [ref=e96]: Hình ảnh trực quan, dễ dàng hình dung trước khi thi công
        - generic [ref=e98]:
          - paragraph [ref=e99]:
            - img "Hậu mãi tốt" [ref=e100]
          - generic [ref=e101]:
            - heading "Hậu mãi tốt" [level=3] [ref=e102]
            - paragraph [ref=e103]: Bảo hành rõ ràng, hỗ trợ tận tâm sau bàn giao.
      - generic [ref=e105]:
        - heading "Dịch vụ chính" [level=2] [ref=e107]
        - img [ref=e109]
        - generic [ref=e116]: Chất Lượng – Sắc Nét – Bền Đẹp
        - generic [ref=e117]:
          - generic [ref=e119]:
            - generic [ref=e120]:
              - link "LED HẮT SÁNG" [ref=e121] [cursor=pointer]:
                - /url: led-hat-sang
                - img "LED HẮT SÁNG" [ref=e122]
              - generic [ref=e123]:
                - generic [ref=e124]:
                  - img [ref=e125]
                  - text: banghieudepbienhoa.com
                - link "0778889559" [ref=e129] [cursor=pointer]:
                  - /url: tel:0778889559
                  - img [ref=e130]
                  - text: "0778889559"
            - generic [ref=e134]:
              - heading "LED HẮT SÁNG" [level=3] [ref=e135]:
                - link "LED HẮT SÁNG" [ref=e136] [cursor=pointer]:
                  - /url: led-hat-sang
              - paragraph [ref=e138]: Bảng Hiệu Đẹp 247 chuyên thiết kế, gia công và thi công bảng hiệu quảng cáo theo yêu cầu, phù hợp cho cửa hàng, doanh nghiệp, showroom, nhà hàng và nhiều mô hình kinh doanh khác. Cung cấp đa dạng sản phẩm như bảng hiệu Alu, Hiflex, Mica, chữ nổi, hộp đèn, LED với nhiều kiểu dáng và kích thước. Quy trình chuyên nghiệp từ khảo sát, tư vấn, thiết kế 2D/3D đến thi công, đảm bảo thẩm mỹ, chất lượng, độ bền và chi phí hợp lý.
          - generic [ref=e140]:
            - generic [ref=e141]:
              - link "TRẦN XUYÊN SÁNG" [ref=e142] [cursor=pointer]:
                - /url: tran-xuyen-sang
                - img "TRẦN XUYÊN SÁNG" [ref=e143]
              - generic [ref=e144]:
                - generic [ref=e145]:
                  - img [ref=e146]
                  - text: banghieudepbienhoa.com
                - link "0778889559" [ref=e150] [cursor=pointer]:
                  - /url: tel:0778889559
                  - img [ref=e151]
                  - text: "0778889559"
            - heading "TRẦN XUYÊN SÁNG" [level=3] [ref=e156]:
              - link "TRẦN XUYÊN SÁNG" [ref=e157] [cursor=pointer]:
                - /url: tran-xuyen-sang
          - generic [ref=e160]:
            - generic [ref=e161]:
              - link "PANO NGOÀI TRỜI" [ref=e162] [cursor=pointer]:
                - /url: pano-ngoai-troi
                - img "PANO NGOÀI TRỜI" [ref=e163]
              - generic [ref=e164]:
                - generic [ref=e165]:
                  - img [ref=e166]
                  - text: banghieudepbienhoa.com
                - link "0778889559" [ref=e170] [cursor=pointer]:
                  - /url: tel:0778889559
                  - img [ref=e171]
                  - text: "0778889559"
            - heading "PANO NGOÀI TRỜI" [level=3] [ref=e176]:
              - link "PANO NGOÀI TRỜI" [ref=e177] [cursor=pointer]:
                - /url: pano-ngoai-troi
          - generic [ref=e180]:
            - generic [ref=e181]:
              - link "BẢNG HIỆU ALU CHỮ NỔI" [ref=e182] [cursor=pointer]:
                - /url: bang-hieu-alu-chu-noi
                - img "BẢNG HIỆU ALU CHỮ NỔI" [ref=e183]
              - generic [ref=e184]:
                - generic [ref=e185]:
                  - img [ref=e186]
                  - text: banghieudepbienhoa.com
                - link "0778889559" [ref=e190] [cursor=pointer]:
                  - /url: tel:0778889559
                  - img [ref=e191]
                  - text: "0778889559"
            - generic [ref=e195]:
              - heading "BẢNG HIỆU ALU CHỮ NỔI" [level=3] [ref=e196]:
                - link "BẢNG HIỆU ALU CHỮ NỔI" [ref=e197] [cursor=pointer]:
                  - /url: bang-hieu-alu-chu-noi
              - paragraph [ref=e199]: Bảng Hiệu Đẹp 247 chuyên thiết kế, gia công và thi công bảng hiệu quảng cáo theo yêu cầu, phù hợp cho cửa hàng, doanh nghiệp, showroom, nhà hàng và nhiều mô hình kinh doanh khác. Cung cấp đa dạng sản phẩm như bảng hiệu Alu, Hiflex, Mica, chữ nổi, hộp đèn, LED với nhiều kiểu dáng và kích thước. Quy trình chuyên nghiệp từ khảo sát, tư vấn, thiết kế 2D/3D đến thi công, đảm bảo thẩm mỹ, chất lượng, độ bền và chi phí hợp lý.
          - generic [ref=e201]:
            - generic [ref=e202]:
              - link "CHỮ NỔI INOX" [ref=e203] [cursor=pointer]:
                - /url: chu-noi-inox
                - img "CHỮ NỔI INOX" [ref=e204]
              - generic [ref=e205]:
                - generic [ref=e206]:
                  - img [ref=e207]
                  - text: banghieudepbienhoa.com
                - link "0778889559" [ref=e211] [cursor=pointer]:
                  - /url: tel:0778889559
                  - img [ref=e212]
                  - text: "0778889559"
            - heading "CHỮ NỔI INOX" [level=3] [ref=e217]:
              - link "CHỮ NỔI INOX" [ref=e218] [cursor=pointer]:
                - /url: chu-noi-inox
          - generic [ref=e221]:
            - generic [ref=e222]:
              - link "BẢNG HIỆU BẠT HIFLEX" [ref=e223] [cursor=pointer]:
                - /url: bang-hieu-bat-hiflex
                - img "BẢNG HIỆU BẠT HIFLEX" [ref=e224]
              - generic [ref=e225]:
                - generic [ref=e226]:
                  - img [ref=e227]
                  - text: banghieudepbienhoa.com
                - link "0778889559" [ref=e231] [cursor=pointer]:
                  - /url: tel:0778889559
                  - img [ref=e232]
                  - text: "0778889559"
            - heading "BẢNG HIỆU BẠT HIFLEX" [level=3] [ref=e237]:
              - link "BẢNG HIỆU BẠT HIFLEX" [ref=e238] [cursor=pointer]:
                - /url: bang-hieu-bat-hiflex
        - link "Xem tất cả dịch vụ" [ref=e241] [cursor=pointer]:
          - /url: dich-vu
          - generic [ref=e242]: Xem tất cả dịch vụ
          - img [ref=e243]
      - generic [ref=e247]:
        - heading "May cờ" [level=2] [ref=e249]
        - img [ref=e251]
        - generic [ref=e258]: Chất Lượng – Sắc Nét – Bền Đẹp
        - generic [ref=e259]:
          - generic [ref=e261]:
            - link "IN CỜ PHƯỚN" [ref=e263] [cursor=pointer]:
              - /url: in-co-phuon
              - img "IN CỜ PHƯỚN" [ref=e264]
            - generic [ref=e265]:
              - heading "IN CỜ PHƯỚN" [level=3] [ref=e266]:
                - link "IN CỜ PHƯỚN" [ref=e267] [cursor=pointer]:
                  - /url: in-co-phuon
              - paragraph [ref=e269]: In cờ phướn sắc nét, màu sắc nổi bật, phù hợp quảng bá sự kiện và thương hiệu.
          - generic [ref=e271]:
            - link "CỜ GIỌT NƯỚC" [ref=e273] [cursor=pointer]:
              - /url: co-giot-nuoc
              - img "CỜ GIỌT NƯỚC" [ref=e274]
            - generic [ref=e275]:
              - heading "CỜ GIỌT NƯỚC" [level=3] [ref=e276]:
                - link "CỜ GIỌT NƯỚC" [ref=e277] [cursor=pointer]:
                  - /url: co-giot-nuoc
              - paragraph [ref=e279]: Thiết kế, in cờ giọt nước nổi bật, bền đẹp, phù hợp các chương trình và hoạt động quảng cáo
          - generic [ref=e281]:
            - link "CỜ LÔNG VŨ" [ref=e283] [cursor=pointer]:
              - /url: co-long-vu
              - img "CỜ LÔNG VŨ" [ref=e284]
            - generic [ref=e285]:
              - heading "CỜ LÔNG VŨ" [level=3] [ref=e286]:
                - link "CỜ LÔNG VŨ" [ref=e287] [cursor=pointer]:
                  - /url: co-long-vu
              - paragraph [ref=e289]: Cờ lông vũ nổi bật, dễ thu hút ánh nhìn, phù hợp quảng cáo ngoài trời và sự kiện
          - generic [ref=e291]:
            - link "CỜ HÌNH CHỮ NHẬT" [ref=e293] [cursor=pointer]:
              - /url: co-hinh-chu-nhat
              - img "CỜ HÌNH CHỮ NHẬT" [ref=e294]
            - generic [ref=e295]:
              - heading "CỜ HÌNH CHỮ NHẬT" [level=3] [ref=e296]:
                - link "CỜ HÌNH CHỮ NHẬT" [ref=e297] [cursor=pointer]:
                  - /url: co-hinh-chu-nhat
              - paragraph [ref=e299]: In cờ chữ nhật theo yêu cầu, đa dạng kích thước, hình ảnh sắc nét và bền màu
          - generic [ref=e301]:
            - link "CỜ BẤT ĐỘNG SẢN" [ref=e303] [cursor=pointer]:
              - /url: co-bat-dong-san
              - img "CỜ BẤT ĐỘNG SẢN" [ref=e304]
            - generic [ref=e305]:
              - heading "CỜ BẤT ĐỘNG SẢN" [level=3] [ref=e306]:
                - link "CỜ BẤT ĐỘNG SẢN" [ref=e307] [cursor=pointer]:
                  - /url: co-bat-dong-san
              - paragraph [ref=e309]: Cờ quảng cáo nổi bật, dễ nhận diện, phù hợp đặt tại các dự án và khu vực kinh doanh
          - generic [ref=e311]:
            - link "CỜ CỘT CỜ" [ref=e313] [cursor=pointer]:
              - /url: co-cot-co
              - img "CỜ CỘT CỜ" [ref=e314]
            - generic [ref=e315]:
              - heading "CỜ CỘT CỜ" [level=3] [ref=e316]:
                - link "CỜ CỘT CỜ" [ref=e317] [cursor=pointer]:
                  - /url: co-cot-co
              - paragraph [ref=e319]: Cờ cột cờ bền đẹp, hình ảnh sắc nét, phù hợp sử dụng cho công trình và doanh nghiệp
        - link "Xem tất cả" [ref=e321] [cursor=pointer]:
          - /url: may-co
          - generic [ref=e322]: Xem tất cả
          - img [ref=e323]
      - generic [ref=e327]:
        - heading "Công trình thực tế" [level=2] [ref=e329]
        - img [ref=e331]
        - generic [ref=e338]: Kiến Tạo Dấu Ấn – Nâng Tầm Thương Hiệu
        - generic [ref=e339]:
          - generic [ref=e340]:
            - link "King BBQ (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) King BBQ (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e341] [cursor=pointer]:
              - /url: king-bbq-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
              - img "King BBQ (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e342]
              - heading "King BBQ (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e345]
            - generic [ref=e346]:
              - link "King BBQ (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) King BBQ (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e347] [cursor=pointer]:
                - /url: king-bbq-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                - img "King BBQ (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e348]
                - heading "King BBQ (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e351]
              - link "King BBQ (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) King BBQ (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e352] [cursor=pointer]:
                - /url: king-bbq-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                - img "King BBQ (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e353]
                - heading "King BBQ (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e356]
          - generic [ref=e357]:
            - link "King BBQ (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) King BBQ (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e358] [cursor=pointer]:
              - /url: king-bbq-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
              - img "King BBQ (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e359]
              - heading "King BBQ (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e362]
            - generic [ref=e363]:
              - link "King BBQ (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) King BBQ (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e364] [cursor=pointer]:
                - /url: king-bbq-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                - img "King BBQ (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e365]
                - heading "King BBQ (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e368]
              - link "King BBQ (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) King BBQ (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e369] [cursor=pointer]:
                - /url: king-bbq-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                - img "King BBQ (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e370]
                - heading "King BBQ (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e373]
      - generic [ref=e375]:
        - heading "Tin tức" [level=2] [ref=e377]
        - generic [ref=e380]:
          - generic [ref=e382]:
            - paragraph [ref=e383]:
              - link "Quy trình thiết kế và thi công bảng hiệu chuyên nghiệp ... (1) (1) (1)" [ref=e384] [cursor=pointer]:
                - /url: quy-trinh-thiet-ke-va-thi-cong-bang-hieu-chuyen-nghiep-1-1-1
            - heading "Quy trình thiết kế và thi công bảng hiệu chuyên nghiệp ... (1) (1) (1)" [level=3] [ref=e386]:
              - link "Quy trình thiết kế và thi công bảng hiệu chuyên nghiệp ... (1) (1) (1)" [ref=e387] [cursor=pointer]:
                - /url: quy-trinh-thiet-ke-va-thi-cong-bang-hieu-chuyen-nghiep-1-1-1
          - generic [ref=e389]:
            - paragraph [ref=e390]:
              - link "Quy trình thiết kế và thi công bảng hiệu chuyên nghiệp ... (1) (1)" [ref=e391] [cursor=pointer]:
                - /url: quy-trinh-thiet-ke-va-thi-cong-bang-hieu-chuyen-nghiep-1-1
            - heading "Quy trình thiết kế và thi công bảng hiệu chuyên nghiệp ... (1) (1)" [level=3] [ref=e393]:
              - link "Quy trình thiết kế và thi công bảng hiệu chuyên nghiệp ... (1) (1)" [ref=e394] [cursor=pointer]:
                - /url: quy-trinh-thiet-ke-va-thi-cong-bang-hieu-chuyen-nghiep-1-1
          - generic [ref=e396]:
            - paragraph [ref=e397]:
              - link "Quy trình thiết kế và thi công bảng hiệu chuyên nghiệp ... (1)" [ref=e398] [cursor=pointer]:
                - /url: quy-trinh-thiet-ke-va-thi-cong-bang-hieu-chuyen-nghiep-1
            - heading "Quy trình thiết kế và thi công bảng hiệu chuyên nghiệp ... (1)" [level=3] [ref=e400]:
              - link "Quy trình thiết kế và thi công bảng hiệu chuyên nghiệp ... (1)" [ref=e401] [cursor=pointer]:
                - /url: quy-trinh-thiet-ke-va-thi-cong-bang-hieu-chuyen-nghiep-1
          - generic [ref=e403]:
            - paragraph [ref=e404]:
              - link "Quy trình thiết kế và thi công bảng hiệu chuyên nghiệp ..." [ref=e405] [cursor=pointer]:
                - /url: quy-trinh-thiet-ke-va-thi-cong-bang-hieu-chuyen-nghiep
            - heading "Quy trình thiết kế và thi công bảng hiệu chuyên nghiệp ..." [level=3] [ref=e407]:
              - link "Quy trình thiết kế và thi công bảng hiệu chuyên nghiệp ..." [ref=e408] [cursor=pointer]:
                - /url: quy-trinh-thiet-ke-va-thi-cong-bang-hieu-chuyen-nghiep
          - generic [ref=e410]:
            - paragraph [ref=e411]:
              - link "Những mẫu bảng hiệu quảng cáo được ưa chuộng hiện ..." [ref=e412] [cursor=pointer]:
                - /url: nhung-mau-bang-hieu-quang-cao-duoc-ua-chuong-hien
            - heading "Những mẫu bảng hiệu quảng cáo được ưa chuộng hiện ..." [level=3] [ref=e414]:
              - link "Những mẫu bảng hiệu quảng cáo được ưa chuộng hiện ..." [ref=e415] [cursor=pointer]:
                - /url: nhung-mau-bang-hieu-quang-cao-duoc-ua-chuong-hien
          - generic [ref=e417]:
            - paragraph [ref=e418]:
              - link "Bảng hiệu quảng cáo – Giải pháp nâng tầm nhận ..." [ref=e419] [cursor=pointer]:
                - /url: bang-hieu-quang-cao-giai-phap-nang-tam-nhan
            - heading "Bảng hiệu quảng cáo – Giải pháp nâng tầm nhận ..." [level=3] [ref=e421]:
              - link "Bảng hiệu quảng cáo – Giải pháp nâng tầm nhận ..." [ref=e422] [cursor=pointer]:
                - /url: bang-hieu-quang-cao-giai-phap-nang-tam-nhan
        - generic:
          - button [ref=e423] [cursor=pointer]:
            - img [ref=e424]
          - button [ref=e427] [cursor=pointer]:
            - img [ref=e428]
        - link "Xem tất cả bài viết" [ref=e432] [cursor=pointer]:
          - /url: tin-tuc
          - generic [ref=e433]: Xem tất cả bài viết
          - img [ref=e434]
      - generic [ref=e438]:
        - heading "Đánh giá của khách hàng" [level=2] [ref=e440]
        - generic [ref=e443]:
          - generic [ref=e446]:
            - img [ref=e448]
            - generic [ref=e450]:
              - img "Nguyễn Minh Anh" [ref=e452]
              - generic [ref=e453]:
                - heading "Nguyễn Minh Anh" [level=3] [ref=e454]
                - generic [ref=e455]: Chủ cửa hàng
            - generic [ref=e456]: “Bảng hiệu được thiết kế rất đẹp, đúng với mong muốn của cửa hàng. Đội ngũ tư vấn nhiệt tình, thi công nhanh và sản phẩm hoàn thiện rất sắc nét.”
          - generic [ref=e459]:
            - img [ref=e461]
            - generic [ref=e463]:
              - img "Trần Quốc Huy" [ref=e465]
              - generic [ref=e466]:
                - heading "Trần Quốc Huy" [level=3] [ref=e467]
                - generic [ref=e468]: Giám đốc doanh nghiệp
            - generic [ref=e469]: “Tôi khá hài lòng với chất lượng bảng hiệu. Từ khâu khảo sát, thiết kế đến lắp đặt đều chuyên nghiệp, đúng tiến độ và chi phí hợp lý.”
          - generic [ref=e472]:
            - img [ref=e474]
            - generic [ref=e476]:
              - img "Lê Hoàng Nam" [ref=e478]
              - generic [ref=e479]:
                - heading "Lê Hoàng Nam" [level=3] [ref=e480]
                - generic [ref=e481]: Chủ doanh nghiệp
            - generic [ref=e482]: “Dịch vụ tốt, nhân viên hỗ trợ nhiệt tình và bảng hiệu hoàn thiện đẹp hơn mong đợi. Đặc biệt phần chữ và màu sắc rất nổi bật, nhìn chuyên nghiệp.”
          - generic [ref=e485]:
            - img [ref=e487]
            - generic [ref=e489]:
              - img "Nguyễn Minh Anh" [ref=e491]
              - generic [ref=e492]:
                - heading "Nguyễn Minh Anh" [level=3] [ref=e493]
                - generic [ref=e494]: Chủ cửa hàng
            - generic [ref=e495]: “Bảng hiệu được thiết kế rất đẹp, đúng với mong muốn của cửa hàng. Đội ngũ tư vấn nhiệt tình, thi công nhanh và sản phẩm hoàn thiện rất sắc nét.”
          - generic [ref=e498]:
            - img [ref=e500]
            - generic [ref=e502]:
              - img "Trần Quốc Huy" [ref=e504]
              - generic [ref=e505]:
                - heading "Trần Quốc Huy" [level=3] [ref=e506]
                - generic [ref=e507]: Giám đốc doanh nghiệp
            - generic [ref=e508]: “Tôi khá hài lòng với chất lượng bảng hiệu. Từ khâu khảo sát, thiết kế đến lắp đặt đều chuyên nghiệp, đúng tiến độ và chi phí hợp lý.”
          - generic [ref=e511]:
            - img [ref=e513]
            - generic [ref=e515]:
              - img "Lê Hoàng Nam" [ref=e517]
              - generic [ref=e518]:
                - heading "Lê Hoàng Nam" [level=3] [ref=e519]
                - generic [ref=e520]: Chủ doanh nghiệp
            - generic [ref=e521]: “Dịch vụ tốt, nhân viên hỗ trợ nhiệt tình và bảng hiệu hoàn thiện đẹp hơn mong đợi. Đặc biệt phần chữ và màu sắc rất nổi bật, nhìn chuyên nghiệp.”
          - generic [ref=e524]:
            - img [ref=e526]
            - generic [ref=e528]:
              - img "Nguyễn Minh Anh" [ref=e530]
              - generic [ref=e531]:
                - heading "Nguyễn Minh Anh" [level=3] [ref=e532]
                - generic [ref=e533]: Chủ cửa hàng
            - generic [ref=e534]: “Bảng hiệu được thiết kế rất đẹp, đúng với mong muốn của cửa hàng. Đội ngũ tư vấn nhiệt tình, thi công nhanh và sản phẩm hoàn thiện rất sắc nét.”
          - generic [ref=e537]:
            - img [ref=e539]
            - generic [ref=e541]:
              - img "Trần Quốc Huy" [ref=e543]
              - generic [ref=e544]:
                - heading "Trần Quốc Huy" [level=3] [ref=e545]
                - generic [ref=e546]: Giám đốc doanh nghiệp
            - generic [ref=e547]: “Tôi khá hài lòng với chất lượng bảng hiệu. Từ khâu khảo sát, thiết kế đến lắp đặt đều chuyên nghiệp, đúng tiến độ và chi phí hợp lý.”
          - generic [ref=e550]:
            - img [ref=e552]
            - generic [ref=e554]:
              - img "Lê Hoàng Nam" [ref=e556]
              - generic [ref=e557]:
                - heading "Lê Hoàng Nam" [level=3] [ref=e558]
                - generic [ref=e559]: Chủ doanh nghiệp
            - generic [ref=e560]: “Dịch vụ tốt, nhân viên hỗ trợ nhiệt tình và bảng hiệu hoàn thiện đẹp hơn mong đợi. Đặc biệt phần chữ và màu sắc rất nổi bật, nhìn chuyên nghiệp.”
      - heading "đối tác" [level=2] [ref=e564]
    - generic [ref=e592]:
      - generic [ref=e595]:
        - generic [ref=e596]:
          - link "BẢNG HIỆU ĐẸP 247" [ref=e597] [cursor=pointer]:
            - /url: https://code6.mimadigi.vn/2026/august/haiyen_112526W/
            - img "BẢNG HIỆU ĐẸP 247" [ref=e598]
          - paragraph [ref=e599]: CÔNG TY MAY CỜ HẢI YẾN
          - paragraph [ref=e601]: Chuyên thiết kế và thi công bảng hiệu quảng cáo, mang đến giải pháp sáng tạo, chuyên nghiệp, bền đẹp, giúp thương hiệu nổi bật và thu hút khách hàng.
          - paragraph [ref=e602]: Theo dõi chúng tôi tại
          - generic [ref=e603]:
            - link "Facebook" [ref=e604] [cursor=pointer]:
              - /url: ""
              - img "Facebook" [ref=e605]
            - link "Message" [ref=e606] [cursor=pointer]:
              - /url: ""
              - img "Message" [ref=e607]
        - generic [ref=e609]:
          - generic [ref=e610]:
            - paragraph [ref=e611]: Dịch vụ
            - list [ref=e612]:
              - listitem [ref=e613]:
                - link "xưởng in cờ phướn giá tốt đồng nai" [ref=e614] [cursor=pointer]:
                  - /url: xuong-in-co-phuon-gia-tot-dong-nai
              - listitem [ref=e615]:
                - link "LED HẮT SÁNG" [ref=e616] [cursor=pointer]:
                  - /url: led-hat-sang
              - listitem [ref=e617]:
                - link "TRẦN XUYÊN SÁNG" [ref=e618] [cursor=pointer]:
                  - /url: tran-xuyen-sang
              - listitem [ref=e619]:
                - link "PANO NGOÀI TRỜI" [ref=e620] [cursor=pointer]:
                  - /url: pano-ngoai-troi
              - listitem [ref=e621]:
                - link "BẢNG HIỆU ALU CHỮ NỔI" [ref=e622] [cursor=pointer]:
                  - /url: bang-hieu-alu-chu-noi
              - listitem [ref=e623]:
                - link "CHỮ NỔI INOX" [ref=e624] [cursor=pointer]:
                  - /url: chu-noi-inox
              - listitem [ref=e625]:
                - link "BẢNG HIỆU BẠT HIFLEX" [ref=e626] [cursor=pointer]:
                  - /url: bang-hieu-bat-hiflex
              - listitem [ref=e627]:
                - link "HỘP ĐÈN 3M" [ref=e628] [cursor=pointer]:
                  - /url: hop-den-3m
              - listitem [ref=e629]:
                - link "BẢNG ĐÈN LED" [ref=e630] [cursor=pointer]:
                  - /url: bang-den-led
              - listitem [ref=e631]:
                - link "CHỮ NỔI MICA" [ref=e632] [cursor=pointer]:
                  - /url: chu-noi-mica
          - generic [ref=e633]:
            - paragraph [ref=e634]: Thông tin liên hệ
            - generic [ref=e635]:
              - paragraph [ref=e636]:
                - strong [ref=e637]: "Địa chỉ:"
              - paragraph [ref=e638]:
                - strong [ref=e639]: "1. Công ty:"
                - text: Số 68B/H2 Tổ 15, Khu phố 14, P. Tam Hiệp, TP. Đồng Nai
              - paragraph [ref=e640]:
                - strong [ref=e641]: "2. Xưởng:"
                - text: D18A Tổ 3, Khu phố 4, P. Trấn Biên, TP. Đồng Nai
              - paragraph [ref=e642]:
                - strong [ref=e643]: "Hotline:"
                - text: 077.888.9559
              - paragraph [ref=e644]:
                - strong [ref=e645]: "Email:"
                - text: quangcaotrungson1518@gmail.com
              - paragraph [ref=e646]:
                - strong [ref=e647]: "Website:"
                - text: www.banghieudepbienhoa.com
      - generic [ref=e651]: Copyright ©2026 Web Mima. All Rights Reserved. Thiết kế Web MIMA
    - generic [ref=e652]:
      - 'link "Call me: 0778889559" [ref=e653] [cursor=pointer]':
        - /url: tel:0778889559
        - img [ref=e657]
        - generic [ref=e660]: "Call me: 0778889559"
      - 'link "Zalo: 0778889559" [ref=e661] [cursor=pointer]':
        - /url: https://zalo.me/0778889559
        - img [ref=e665]
        - generic [ref=e666]: "Zalo: 0778889559"
  - img "Go Top" [ref=e668] [cursor=pointer]
```

# Test source

```ts
  143 | 
  144 |         if (!isInputVisible) {
  145 |             // Trường hợp 2: Ô tìm kiếm bị ẩn, phải rê chuột (hover) hoặc click vào icon kính lúp mới hiện ra
  146 |             console.log("Ô tìm kiếm đang bị ẩn, thử tìm và tương tác với icon search hoặc vùng chứa (container)...");
  147 | 
  148 |             // 1. Thử hover vào các vùng chứa (container) search phổ biến trước (thường dùng CSS :hover)
  149 |             const searchContainers = this.page.locator('.search, .search-box, .search-container, .header-search, .search-wrapper, .search-form');
  150 |             const containerCount = await searchContainers.count();
  151 |             for (let i = 0; i < containerCount; i++) {
  152 |                 const container = searchContainers.nth(i);
  153 |                 if (await container.isVisible().catch(() => false)) {
  154 |                     await container.hover({ force: true }).catch(() => { });
  155 |                     await this.page.waitForTimeout(300);
  156 |                     if (await this.searchInput.first().isVisible().catch(() => false)) return this.fillSearchAndSubmit(keyword);
  157 |                 }
  158 |             }
  159 | 
  160 |             // 2. Thử hover/click vào các nút hoặc icon search phổ biến
  161 |             const searchToggleIcons = this.page.locator(
  162 |                 '.fa-search, .icon-search, [class*="search-icon"], [class*="icon-search"], ' +
  163 |                 'i.search, svg.search, .search-toggle, .search-btn, .btn-search, .header-search-icon, .icon-magnifier, span.search, ' +
  164 |                 '.bi-search, button[onclick*="onSearch"]'
  165 |             );
  166 | 
  167 |             const iconCount = await searchToggleIcons.count();
  168 |             for (let i = 0; i < iconCount; i++) {
  169 |                 const icon = searchToggleIcons.nth(i);
  170 |                 if (await icon.isVisible().catch(() => false)) {
  171 |                     // Thử rê chuột (hover)
  172 |                     await icon.hover({ force: true }).catch(() => { });
  173 |                     await this.page.waitForTimeout(300);
  174 |                     if (await this.searchInput.first().isVisible().catch(() => false)) return this.fillSearchAndSubmit(keyword);
  175 | 
  176 |                     // Nếu vẫn chưa hiện, thử click
  177 |                     await icon.click({ force: true }).catch(() => { });
  178 |                     await this.page.waitForTimeout(300);
  179 |                     if (await this.searchInput.first().isVisible().catch(() => false)) return this.fillSearchAndSubmit(keyword);
  180 |                 }
  181 |             }
  182 | 
  183 |             // 3. Fallback bạo lực: Ép buộc hiện input bằng JavaScript nếu UI chặn
  184 |             console.log("Thử dùng JavaScript để ép hiển thị ô input...");
  185 |             await this.searchInput.first().evaluate((node: HTMLElement) => {
  186 |                 node.style.display = 'block';
  187 |                 node.style.visibility = 'visible';
  188 |                 node.style.opacity = '1';
  189 |                 if (node.parentElement) {
  190 |                     node.parentElement.style.display = 'block';
  191 |                     node.parentElement.style.visibility = 'visible';
  192 |                 }
  193 |             }).catch(() => { });
  194 |             await this.page.waitForTimeout(500);
  195 |         }
  196 | 
  197 |         // Đợi chắc chắn ô input phải hiện lên trước khi gõ
  198 |         await this.fillSearchAndSubmit(keyword);
  199 |     }
  200 | 
  201 |     /**
  202 |      * Hàm phụ trợ dùng để nhập và submit search (dùng chung cho các nhánh phía trên)
  203 |      */
  204 |     private async fillSearchAndSubmit(keyword: string) {
  205 |         const targetInput = this.searchInput.first();
  206 | 
  207 |         // Đợi 2s xem input có tự hiện lên không
  208 |         await targetInput.waitFor({ state: 'visible', timeout: 2000 }).catch(() => { });
  209 | 
  210 |         try {
  211 |             // Dùng { force: true } và giới hạn thời gian cực ngắn để tránh bị treo 15s
  212 |             await targetInput.fill(keyword, { force: true, timeout: 1000 });
  213 |             await targetInput.pressSequentially(' ', { delay: 100 });
  214 |             await this.page.keyboard.press('Backspace');
  215 |         } catch (error) {
  216 |             console.log("Playwright fill thất bại, chuyển sang ép buộc gõ bằng JavaScript nguyên thủy...");
  217 | 
  218 |             // Dùng page.evaluate thay vì locator.evaluate để tránh việc Playwright ngầm đợi element
  219 |             const inputSelector = "input#keyword, input[name='keyword'], input[type='search'], input[name='q'], input[name='search']";
  220 | 
  221 |             await this.page.evaluate(({ selector, text }) => {
  222 |                 const node = document.querySelector(selector) as HTMLInputElement;
  223 |                 if (node) {
  224 |                     node.value = text;
  225 |                     node.dispatchEvent(new Event('input', { bubbles: true }));
  226 |                     node.dispatchEvent(new Event('change', { bubbles: true }));
  227 |                     node.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true, key: ' ' }));
  228 |                 } else {
  229 |                     console.error("Không tìm thấy thẻ input nào trên DOM để bơm chữ!");
  230 |                 }
  231 |             }, { selector: inputSelector, text: keyword });
  232 | 
  233 |             // Bấm thêm dấu backspace và Enter từ phía page
  234 |             await this.page.keyboard.press('Backspace').catch(() => { });
  235 |             await this.page.keyboard.press('Enter').catch(() => { });
  236 |         }
  237 |     }
  238 | 
  239 |     /**
  240 |      * Chờ dropdown search xuất hiện
  241 |      */
  242 |     async waitForDropdown() {
> 243 |         await this.searchResultDropdown.waitFor({ state: 'visible', timeout: 5000 });
      |                                         ^ TimeoutError: locator.waitFor: Timeout 5000ms exceeded.
  244 |     }
  245 | 
  246 |     /**
  247 |      * Lấy danh sách các phần tử chứa kết quả sản phẩm trong dropdown
  248 |      * (Hỗ trợ thẻ a, li, hoặc các div có class thông dụng)
  249 |      */
  250 |     getResultItems(): Locator {
  251 |         return this.searchResultDropdown.locator("a, li, .search-item, .result-item, .autocomplete-suggestion, .item");
  252 |     }
  253 | 
  254 |     /**
  255 |      * Lấy danh sách các thẻ sản phẩm hiển thị trên trang kết quả.
  256 |      * Dùng một list các class CSS phổ biến nhất trong giới thiết kế web.
  257 |      * Cực kỳ hiệu quả cho bài toán multi-tenant.
  258 |      */
  259 |     getProductElementsOnPage(): Locator {
  260 |         return this.page.locator('.product-item, .item-product, .product-card, .col-product, article.product, .product-block, .product-grid-item, .item-box, .product, .name-product');
  261 |     }
  262 | }
  263 | 
```