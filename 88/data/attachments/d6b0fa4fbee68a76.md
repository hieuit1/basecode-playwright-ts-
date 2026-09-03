# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Tin tức (/tin-tuc)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 81/100 dưới ngưỡng 96%. Có 4/21 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e6]:
        - paragraph [ref=e7]:
          - generic [ref=e8]: “Công Ty TNHH Ngân Nhân Phát – Uy tín tạo giá trị, vững bước tương lai.”
        - generic [ref=e9]:
          - paragraph [ref=e10]:
            - text: "Email:"
            - link "caonghia163@gmail.com" [ref=e11] [cursor=pointer]:
              - /url: mailto:caonghia163@gmail.com
          - paragraph [ref=e12]:
            - text: "Hotline:"
            - link "0908.589877" [ref=e13] [cursor=pointer]:
              - /url: tel:0908589877
      - list [ref=e17]:
        - listitem [ref=e18]:
          - link "Trang chủ" [ref=e19] [cursor=pointer]:
            - /url: https://phutungmayin.com/
        - listitem [ref=e20]:
          - link "Giới thiệu" [ref=e21] [cursor=pointer]:
            - /url: gioi-thieu
        - listitem [ref=e22]:
          - link "Sản phẩm" [ref=e23] [cursor=pointer]:
            - /url: san-pham
        - listitem [ref=e24]:
          - link "Phụ Tùng Máy In Công NghiệpTại TP.HCM_Công Ty TNHH Ngân Nhân Phát" [ref=e25] [cursor=pointer]:
            - /url: https://phutungmayin.com/
            - img "Phụ Tùng Máy In Công NghiệpTại TP.HCM_Công Ty TNHH Ngân Nhân Phát" [ref=e26]
        - listitem [ref=e27]:
          - link "Dịch vụ" [ref=e28] [cursor=pointer]:
            - /url: dich-vu
        - listitem [ref=e29]:
          - link "Tin tức" [ref=e30] [cursor=pointer]:
            - /url: tin-tuc
        - listitem [ref=e31]:
          - link "Liên hệ" [ref=e32] [cursor=pointer]:
            - /url: lien-he
        - listitem [ref=e33]:
          - link [ref=e34] [cursor=pointer]:
            - /url: javascript:void();
          - textbox "Nhập từ khóa cần tìm..."
      - text:  
    - list [ref=e37]:
      - listitem [ref=e38]:
        - link "Trang chủ" [ref=e39] [cursor=pointer]:
          - /url: https://phutungmayin.com/
          - generic [ref=e40]: Trang chủ
      - listitem [ref=e41]:
        - text: "|"
        - link "Tin tức" [ref=e42] [cursor=pointer]:
          - /url: https://phutungmayin.com/tin-tuc
    - generic [ref=e44]:
      - generic [ref=e46]: Tin tức
      - generic [ref=e48]:
        - generic [ref=e49]:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e50] [cursor=pointer]:
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e51]
          - generic [ref=e52]:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e53]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e54] [cursor=pointer]:
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph [ref=e55]: Mô tả cho Tin tức bulk test
        - generic [ref=e56]:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e57] [cursor=pointer]:
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e58]
          - generic [ref=e59]:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e60]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e61] [cursor=pointer]:
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph [ref=e62]: Mô tả cho Tin tức bulk test
        - generic [ref=e63]:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e64] [cursor=pointer]:
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e65]
          - generic [ref=e66]:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e67]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e68] [cursor=pointer]:
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph [ref=e69]: Mô tả cho Tin tức bulk test
        - generic [ref=e70]:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e71] [cursor=pointer]:
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e72]
          - generic [ref=e73]:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e74]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e75] [cursor=pointer]:
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph [ref=e76]: Mô tả cho Tin tức bulk test
        - generic [ref=e77]:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e78] [cursor=pointer]:
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e79]
          - generic [ref=e80]:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e81]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e82] [cursor=pointer]:
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph [ref=e83]: Mô tả cho Tin tức bulk test
        - generic [ref=e84]:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e85] [cursor=pointer]:
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e86]
          - generic [ref=e87]:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e88]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e89] [cursor=pointer]:
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph [ref=e90]: Mô tả cho Tin tức bulk test
        - generic [ref=e91]:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e92] [cursor=pointer]:
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e93]
          - generic [ref=e94]:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e95]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e96] [cursor=pointer]:
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph [ref=e97]: Mô tả cho Tin tức bulk test
        - generic [ref=e98]:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e99] [cursor=pointer]:
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e100]
          - generic [ref=e101]:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e102]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e103] [cursor=pointer]:
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph [ref=e104]: Mô tả cho Tin tức bulk test
        - generic [ref=e105]:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e106] [cursor=pointer]:
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e107]
          - generic [ref=e108]:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e109]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e110] [cursor=pointer]:
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph [ref=e111]: Mô tả cho Tin tức bulk test
        - generic [ref=e112]:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e113] [cursor=pointer]:
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e114]
          - generic [ref=e115]:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e116]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e117] [cursor=pointer]:
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph [ref=e118]: Mô tả cho Tin tức bulk test
        - generic:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
          - generic:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph: Mô tả cho Tin tức bulk test
        - generic:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
          - generic:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph: Mô tả cho Tin tức bulk test
        - generic:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
          - generic:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph: Mô tả cho Tin tức bulk test
        - generic:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
          - generic:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph: Mô tả cho Tin tức bulk test
        - generic:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
          - generic:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph: Mô tả cho Tin tức bulk test
        - generic:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
          - generic:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph: Mô tả cho Tin tức bulk test
        - generic:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
          - generic:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph: Mô tả cho Tin tức bulk test
        - generic:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
          - generic:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph: Mô tả cho Tin tức bulk test
        - generic:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
          - generic:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph: Mô tả cho Tin tức bulk test
        - generic:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
          - generic:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph: Mô tả cho Tin tức bulk test
        - generic:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
          - generic:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph: Mô tả cho Tin tức bulk test
        - generic:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
          - generic:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph: Mô tả cho Tin tức bulk test
        - generic:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1
            - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
          - generic:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph: Mô tả cho Tin tức bulk test
        - generic:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1
            - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
          - generic:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1
            - paragraph: Mô tả cho Tin tức bulk test
        - generic:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1
            - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
          - generic:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1
            - paragraph: Mô tả cho Tin tức bulk test
        - generic:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1)":
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1
            - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1)"
          - generic:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1
            - paragraph: Mô tả cho Tin tức bulk test
        - generic:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1)":
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1
          - generic:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1
            - paragraph: Mô tả cho Tin tức bulk test
        - generic:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1)":
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1
          - generic:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1)" [level=3]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1
            - paragraph: Mô tả cho Tin tức bulk test
        - generic:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1)":
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1
          - generic:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1)" [level=3]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1) (1)":
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1
            - paragraph: Mô tả cho Tin tức bulk test
        - generic:
          - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1)":
            - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1
          - generic:
            - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1)" [level=3]:
              - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788407210476 (1) (1) (1) (1) (1)":
                - /url: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1
            - paragraph: Mô tả cho Tin tức bulk test
      - link "Xem thêm 151 bài viết" [ref=e121] [cursor=pointer]:
        - /url: javascript:;
        - generic [ref=e122]: Xem thêm 151 bài viết
    - generic [ref=e130]:
      - generic [ref=e132]:
        - generic [ref=e133]:
          - paragraph [ref=e134]: Thông tin liên hệ
          - paragraph [ref=e135]: CÔNG TY TNHH NGÂN NHÂN PHÁT
          - generic [ref=e136]:
            - paragraph [ref=e137]:
              - generic [ref=e139]:
                - strong [ref=e140]: "Địa chỉ:"
                - text: 410/3C, Tỉnh lộ 8, Tổ 7, Ấp 20, xã Phú Hoà Đông , Tp.HCM
            - paragraph [ref=e141]:
              - generic [ref=e143]:
                - strong [ref=e144]: "Email:"
                - text: caonghia163@gmail.com
            - paragraph [ref=e145]:
              - generic [ref=e147]:
                - strong [ref=e148]: "Phòng trưng bày sản phẩm:"
                - text: 79 Trương Định , phường Bến Thành , Tp.HCM
            - paragraph [ref=e149]:
              - generic [ref=e151]:
                - strong [ref=e152]: "VPGD:"
                - text: 82/2 Đường 494 , Khu Phố 14 , phường Tăng Nhơn Phú , Tp.HCM
            - paragraph [ref=e153]:
              - generic [ref=e155]:
                - strong [ref=e156]: "VPGD:"
                - text: Số 50 Hương lộ 15, ấp Ngãi Hiệp, xã Hưng Mỹ , tỉnh Vĩnh Long
            - paragraph [ref=e157]:
              - generic [ref=e159]:
                - strong [ref=e160]: VPGD
                - text: ": Lô 117A đường Bàu Mạc 8, phường Liên Chiểu, Thành phố Đà Nẵng"
            - paragraph [ref=e161]:
              - generic [ref=e163]:
                - strong [ref=e164]: "Hotlines:"
                - text: 0908.589877 - 0909.589877 - 0936.589877- 0938.589877
            - paragraph [ref=e165]:
              - generic [ref=e167]:
                - text: "website :"
                - link "phutungmayin.com" [ref=e168] [cursor=pointer]:
                  - /url: https://phutungmayin.com/
                - text: "- mucindungmoi.com"
        - link "Phụ Tùng Máy In Công NghiệpTại TP.HCM_Công Ty TNHH Ngân Nhân Phát" [ref=e170] [cursor=pointer]:
          - /url: https://phutungmayin.com/
          - img "Phụ Tùng Máy In Công NghiệpTại TP.HCM_Công Ty TNHH Ngân Nhân Phát" [ref=e171]
        - generic [ref=e172]:
          - paragraph [ref=e173]: Truy cập nhanh
          - list [ref=e174]:
            - listitem [ref=e175]:
              - link "Trang chủ" [ref=e176] [cursor=pointer]:
                - /url: https://phutungmayin.com/
            - listitem [ref=e177]:
              - link "Giới thiệu" [ref=e178] [cursor=pointer]:
                - /url: gioi-thieu
            - listitem [ref=e179]:
              - link "Sản phẩm" [ref=e180] [cursor=pointer]:
                - /url: san-pham
            - listitem [ref=e181]:
              - link "Dịch vụ" [ref=e182] [cursor=pointer]:
                - /url: dich-vu
            - listitem [ref=e183]:
              - link "Tin tức" [ref=e184] [cursor=pointer]:
                - /url: tin-tuc
            - listitem [ref=e185]:
              - link "Liên hệ" [ref=e186] [cursor=pointer]:
                - /url: lien-he
      - generic [ref=e188]:
        - list [ref=e189]:
          - listitem [ref=e190]:
            - link [ref=e191] [cursor=pointer]:
              - /url: https://www.facebook.com/profile.php?id=61571802610387&ref=embed_page
          - listitem [ref=e192]:
            - link [ref=e193] [cursor=pointer]:
              - /url: https://zalo.me/0908589877
          - listitem [ref=e194]:
            - link [ref=e195] [cursor=pointer]:
              - /url: https://www.tiktok.com/@nghia.cao90?_r=1&_d=secCgYIASAHKAESPgo8dfCBj1W6MqFesvHJ1IpDQktB7%2FboK05GsbOW%2BKEJ4jxHEd1QOf119UkeT8jWSg48BixjG3B9zLanqUxGGgA%3D&checksum=efdf4558130926519cf167efe74caee247efc0d8e971c4d5f0c343fdfacac56b&sec_uid=MS4wLjABAAAA3B6GvGBOjCIdCDqGOnh2wz4kuqnVZd4BeBabv507oBGy2YNpq3Jr_VbfAM5icrYL&sec_user_id=MS4wLjABAAAA3B6GvGBOjCIdCDqGOnh2wz4kuqnVZd4BeBabv507oBGy2YNpq3Jr_VbfAM5icrYL&share_app_id=1180&share_author_id=7413716049362011141&share_link_id=CCF409FE-5B32-419D-A444-70C6EB9831B6&sharer_language=vi&social_share_type=4&source=h5_t&timestamp=1740110423&tt_from=copy&u_code=eg6kf7ake5737f&ug_btm=b0%2Cb0&user_id=7413716049362011141&utm_campaign=client_share&utm_medium=ios&utm_source=copy
          - listitem [ref=e196]:
            - link [ref=e197] [cursor=pointer]:
              - /url: https://www.youtube.com/@caonghia5657
        - generic [ref=e198]: Copyright © CÔNG TY TNHH NGÂN NHÂN PHÁT. All rights reserved. Thiêt kế web MIMA
    - generic [ref=e199]:
      - 'link "Call me: 0908589877" [ref=e200] [cursor=pointer]':
        - /url: tel:0908589877
        - img [ref=e202]
        - generic: "Call me: 0908589877"
      - 'link "Zalo: 0908589877" [ref=e205] [cursor=pointer]':
        - /url: https://zalo.me/0908589877
        - img [ref=e207]
        - generic: "Zalo: 0908589877"
    - text: 
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
          - strong: Tin tức
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e209]:
      - generic [ref=e210]: "❌ Chi tiết lỗi cần khắc phục (4/21):"
      - generic [ref=e211]:
        - generic [ref=e212]:
          - generic [ref=e213]: 6. Liên kết (Links)
          - generic [ref=e214]: 1 lỗi
        - generic [ref=e215]:
          - strong [ref=e217]: "Không có broken links (lỗi: 30/56)"
          - generic [ref=e218]: "⚠️ Broken links: auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788407210476-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1 (status: 404), auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1..."
      - generic [ref=e219]:
        - generic [ref=e220]:
          - generic [ref=e221]: 8. Tốc độ & Core Web Vitals
          - generic [ref=e222]: 3 lỗi
        - generic [ref=e223]:
          - strong [ref=e225]: "[📱 MOBILE (ƯU TIÊN)] Tổng điểm Performance: 44/100 (≥ 60)"
          - generic [ref=e226]: ⚠️ [📱 MOBILE (ƯU TIÊN)] Điểm Performance 44/100 dưới ngưỡng 60. Phân tích chi tiết LCP/CLS/INP bên dưới...
        - generic [ref=e227]:
          - strong [ref=e229]: "[📱 MOBILE (ƯU TIÊN)] LCP (Largest Contentful Paint): 6191ms (< 2500ms)"
          - generic [ref=e230]: "⚠️ [📱 MOBILE (ƯU TIÊN)] LCP quá cao: 6191ms (chuẩn: < 2.5s) → Thủ phạm LCP:"
          - generic [ref=e231]:
            - strong [ref=e233]: "[📱 MOBILE (ƯU TIÊN)] CLS (Cumulative Layout Shift): 0.719 (< 0.1)"
            - generic [ref=e234]: "⚠️ [📱 MOBILE (ƯU TIÊN)] CLS quá cao: 0.719 (chuẩn: < 0.1) → Thủ phạm CLS: -"
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