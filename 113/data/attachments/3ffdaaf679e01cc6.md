# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Kế toán (/ke-toan)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 93/100 dưới ngưỡng 96%. Có 1/14 tiêu chí không đạt.
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
        - link "Tài nguyên" [ref=e43] [cursor=pointer]:
          - /url: https://code4.mimadigi.vn/2026/september/icma_109626W/tai-nguyen
      - listitem [ref=e44]:
        - text: /
        - link "Kế toán" [ref=e45] [cursor=pointer]:
          - /url: https://code4.mimadigi.vn/2026/september/icma_109626W/ke-toan
    - generic [ref=e47]:
      - generic [ref=e49]: Kế toán
      - generic [ref=e51]:
        - article [ref=e53]:
          - link "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e55] [cursor=pointer]:
            - /url: cap-nhat-chinh-sach-thue-2026-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e56]
          - generic [ref=e57]:
            - heading "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e58]:
              - link "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e59] [cursor=pointer]:
                - /url: cap-nhat-chinh-sach-thue-2026-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph [ref=e60]: Những thay đổi quan trọng doanh nghiệp cần biết.
        - article [ref=e62]:
          - link "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e64] [cursor=pointer]:
            - /url: cap-nhat-chinh-sach-thue-2026-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e65]
          - generic [ref=e66]:
            - heading "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e67]:
              - link "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e68] [cursor=pointer]:
                - /url: cap-nhat-chinh-sach-thue-2026-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph [ref=e69]: Những thay đổi quan trọng doanh nghiệp cần biết.
        - article [ref=e71]:
          - link "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e73] [cursor=pointer]:
            - /url: cap-nhat-chinh-sach-thue-2026-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e74]
          - generic [ref=e75]:
            - heading "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e76]:
              - link "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e77] [cursor=pointer]:
                - /url: cap-nhat-chinh-sach-thue-2026-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph [ref=e78]: Những thay đổi quan trọng doanh nghiệp cần biết.
        - article [ref=e80]:
          - link "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e82] [cursor=pointer]:
            - /url: cap-nhat-chinh-sach-thue-2026-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e83]
          - generic [ref=e84]:
            - heading "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e85]:
              - link "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e86] [cursor=pointer]:
                - /url: cap-nhat-chinh-sach-thue-2026-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph [ref=e87]: Những thay đổi quan trọng doanh nghiệp cần biết.
        - article [ref=e89]:
          - link "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e91] [cursor=pointer]:
            - /url: cap-nhat-chinh-sach-thue-2026-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e92]
          - generic [ref=e93]:
            - heading "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e94]:
              - link "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e95] [cursor=pointer]:
                - /url: cap-nhat-chinh-sach-thue-2026-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph [ref=e96]: Những thay đổi quan trọng doanh nghiệp cần biết.
        - article [ref=e98]:
          - link "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e100] [cursor=pointer]:
            - /url: cap-nhat-chinh-sach-thue-2026-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e101]
          - generic [ref=e102]:
            - heading "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e103]:
              - link "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e104] [cursor=pointer]:
                - /url: cap-nhat-chinh-sach-thue-2026-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph [ref=e105]: Những thay đổi quan trọng doanh nghiệp cần biết.
        - generic:
          - article:
            - generic:
              - link "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: cap-nhat-chinh-sach-thue-2026-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - generic:
              - heading "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                - link "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                  - /url: cap-nhat-chinh-sach-thue-2026-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
              - paragraph: Những thay đổi quan trọng doanh nghiệp cần biết.
        - generic:
          - article:
            - generic:
              - link "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: cap-nhat-chinh-sach-thue-2026-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - generic:
              - heading "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                - link "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                  - /url: cap-nhat-chinh-sach-thue-2026-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
              - paragraph: Những thay đổi quan trọng doanh nghiệp cần biết.
        - generic:
          - article:
            - generic:
              - link "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: cap-nhat-chinh-sach-thue-2026-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - generic:
              - heading "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                - link "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                  - /url: cap-nhat-chinh-sach-thue-2026-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
              - paragraph: Những thay đổi quan trọng doanh nghiệp cần biết.
        - generic:
          - article:
            - generic:
              - link "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: cap-nhat-chinh-sach-thue-2026-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - generic:
              - heading "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                - link "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                  - /url: cap-nhat-chinh-sach-thue-2026-1-1-1-1-1-1-1-1-1-1-1-1-1-1
              - paragraph: Những thay đổi quan trọng doanh nghiệp cần biết.
        - generic:
          - article:
            - generic:
              - link "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: cap-nhat-chinh-sach-thue-2026-1-1-1-1-1-1-1-1-1-1-1-1-1
            - generic:
              - heading "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                - link "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                  - /url: cap-nhat-chinh-sach-thue-2026-1-1-1-1-1-1-1-1-1-1-1-1-1
              - paragraph: Những thay đổi quan trọng doanh nghiệp cần biết.
        - generic:
          - article:
            - generic:
              - link "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: cap-nhat-chinh-sach-thue-2026-1-1-1-1-1-1-1-1-1-1-1-1
            - generic:
              - heading "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                - link "Cập nhật chính sách thuế 2026 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                  - /url: cap-nhat-chinh-sach-thue-2026-1-1-1-1-1-1-1-1-1-1-1-1
              - paragraph: Những thay đổi quan trọng doanh nghiệp cần biết.
      - link "Xem thêm 11 Bài viết" [ref=e107] [cursor=pointer]:
        - /url: javascript:void(0)
        - text: Xem thêm
        - generic [ref=e108]: "11"
        - text: Bài viết
      - generic [ref=e110]:
        - paragraph [ref=e111]: Kế toánKế toánKế toánKế toánKế toánKế toánKế toánKế toánKế toánKế toánKế toánKế toánKế toánKế toánKế toánKế toánKế toánKế toánKế toánKế toánKế toánKế toánKế toánKế toánKế toánKế toánKế toánKế toánKế toánKế toánKế toánKế toán
        - link "Xem thêm" [ref=e113] [cursor=pointer]:
          - /url: javascript:;
          - generic [ref=e114]:
            - text: Xem thêm
            - img [ref=e115]
    - generic [ref=e117]:
      - generic [ref=e120]:
        - generic [ref=e121]:
          - link "KIỂM TOÁN ICMA" [ref=e122] [cursor=pointer]:
            - /url: https://code4.mimadigi.vn/2026/september/icma_109626W/
            - img "KIỂM TOÁN ICMA" [ref=e123]
          - paragraph [ref=e124]: Công Ty TNHH Tư vấn và Kiểm toán ICMA
          - paragraph [ref=e125]:
            - strong [ref=e126]: "Trụ sở chính:"
            - text: Lầu 7, Victory Tower - 12 Tân Trào, Phường Tân Mỹ (Quận 7), TP.HCM, Việt Nam
          - list [ref=e127]:
            - listitem [ref=e128]:
              - img [ref=e129]
              - link "icma.contacts@icma.com.vn" [ref=e132] [cursor=pointer]:
                - /url: mailto:icma.contacts@icma.com.vn
            - listitem [ref=e133]:
              - img [ref=e134]
              - generic [ref=e137]:
                - text: "Tư vấn bán hàng:"
                - link "0938 082 628" [ref=e138] [cursor=pointer]:
                  - /url: tel:0938082628
            - listitem [ref=e139]:
              - img [ref=e140]
              - link "icma.com.vn" [ref=e143] [cursor=pointer]:
                - /url: https://icma.com.vn
          - paragraph [ref=e145]: "Giấy CNĐKKD: 0312165374 - Ngày cấp lần đầu 27/02/2013 Cơ quan cấp: Phòng Đăng ký kinh doanh - Sở Kế hoạch và Đầu tư TP. HCM"
        - generic [ref=e147]:
          - generic [ref=e148]:
            - paragraph [ref=e149]: Dịch vụ
            - list [ref=e150]:
              - listitem [ref=e151]:
                - link "Dịch vụ Kế toán tư vấn thuế" [ref=e152] [cursor=pointer]:
                  - /url: dich-vu-ke-toan-tu-van-thue
          - generic [ref=e153]:
            - paragraph [ref=e154]: Liên kết
            - list [ref=e155]:
              - listitem [ref=e156]:
                - link "Facebook" [ref=e157] [cursor=pointer]:
                  - /url: ""
              - listitem [ref=e158]:
                - link "Message" [ref=e159] [cursor=pointer]:
                  - /url: ""
              - listitem [ref=e160]:
                - link "Instargam" [ref=e161] [cursor=pointer]:
                  - /url: ""
              - listitem [ref=e162]:
                - link "Tiktok" [ref=e163] [cursor=pointer]:
                  - /url: https://vt.tiktok.com/ZS9nuW1De/
              - listitem [ref=e164]:
                - link "Youtobe" [ref=e165] [cursor=pointer]:
                  - /url: ""
          - generic [ref=e166]:
            - paragraph [ref=e167]: Truy cập nhanh
            - list [ref=e168]:
              - listitem [ref=e169]:
                - link "Trang chủ" [ref=e170] [cursor=pointer]:
                  - /url: https://code4.mimadigi.vn/2026/september/icma_109626W/
              - listitem [ref=e171]:
                - link "Giới thiệu" [ref=e172] [cursor=pointer]:
                  - /url: gioi-thieu
              - listitem [ref=e173]:
                - link "Bảng giá" [ref=e174] [cursor=pointer]:
                  - /url: bang-gia
              - listitem [ref=e175]:
                - link "Tài nguyên" [ref=e176] [cursor=pointer]:
                  - /url: tai-nguyen
              - listitem [ref=e177]:
                - link "Liên hệ" [ref=e178] [cursor=pointer]:
                  - /url: lien-he
      - generic [ref=e182]: Copyright @ 2026 Công Ty TNHH Tư vấn và Kiểm toán ICMA. All Right Reserved. Thiết kế Web MIMA
    - generic [ref=e183]:
      - link "Messenger" [ref=e184] [cursor=pointer]:
        - /url: ""
        - img [ref=e188]
        - generic [ref=e189]: Messenger
      - 'link "Zalo: 0938 082 628" [ref=e190] [cursor=pointer]':
        - /url: https://zalo.me/0938082628
        - img [ref=e194]
        - generic [ref=e195]: "Zalo: 0938 082 628"
      - 'link "Email: icma.contacts@icma.com.vn" [ref=e196] [cursor=pointer]':
        - /url: mailto:icma.contacts@icma.com.vn
        - img [ref=e200]
        - generic [ref=e201]: "Email: icma.contacts@icma.com.vn"
      - 'link "Call me: 0938 082 628" [ref=e202] [cursor=pointer]':
        - /url: tel:0938082628
        - img [ref=e206]
        - generic [ref=e209]: "Call me: 0938 082 628"
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
          - generic: "14"
          - generic: Tổng tiêu chí
        - generic:
          - generic: ✅ 13
          - generic: Đạt
        - generic:
          - generic: ❌ 1
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: Kế toán
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e210]:
      - generic [ref=e211]: "❌ Chi tiết lỗi cần khắc phục (1/14):"
      - generic [ref=e212]:
        - generic [ref=e213]:
          - generic [ref=e214]: 3. Heading (H1-H6)
          - generic [ref=e215]: 1 lỗi
        - generic [ref=e216]:
          - strong [ref=e218]: Heading phân cấp hợp lệ (1 lỗi)
          - generic [ref=e219]: "⚠️ Heading phân cấp sai: Nhảy cấp từ H3 → H5 (\"Đăng ký nhận tư vấn\")"
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 93/100 dưới ngưỡng 96%. Có 1/14 tiêu chí không đạt.
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