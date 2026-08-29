# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: May cờ (/may-co)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 86/100 dưới ngưỡng 96%. Có 3/21 tiêu chí không đạt.
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
        - link "xuanhieu.mima@gmail.com" [ref=e15] [cursor=pointer]:
          - /url: mailto:xuanhieu.mima@gmail.com
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
    - generic [ref=e57]:
      - generic [ref=e58]:
        - link "IN CỜ PHƯỚN" [ref=e59] [cursor=pointer]:
          - /url: in-co-phuon
        - link "CỜ GIỌT NƯỚC" [ref=e60] [cursor=pointer]:
          - /url: co-giot-nuoc
        - link "CỜ LÔNG VŨ" [ref=e61] [cursor=pointer]:
          - /url: co-long-vu
        - link "CỜ HÌNH CHỮ NHẬT" [ref=e62] [cursor=pointer]:
          - /url: co-hinh-chu-nhat
        - link "CỜ BẤT ĐỘNG SẢN" [ref=e63] [cursor=pointer]:
          - /url: co-bat-dong-san
        - link "CỜ CỘT CỜ" [ref=e64] [cursor=pointer]:
          - /url: co-cot-co
      - heading "Tất cả May cờ" [level=2] [ref=e65]
      - generic [ref=e67]:
        - generic [ref=e69]:
          - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e71] [cursor=pointer]:
            - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e72]
          - generic [ref=e73]:
            - heading "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e74]:
              - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e75] [cursor=pointer]:
                - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph [ref=e77]: In cờ phướn sắc nét, màu sắc nổi bật, phù hợp quảng bá sự kiện và thương hiệu.
        - generic [ref=e79]:
          - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e81] [cursor=pointer]:
            - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e82]
          - generic [ref=e83]:
            - heading "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e84]:
              - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e85] [cursor=pointer]:
                - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph [ref=e87]: In cờ phướn sắc nét, màu sắc nổi bật, phù hợp quảng bá sự kiện và thương hiệu.
        - generic [ref=e89]:
          - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e91] [cursor=pointer]:
            - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e92]
          - generic [ref=e93]:
            - heading "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e94]:
              - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e95] [cursor=pointer]:
                - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph [ref=e97]: In cờ phướn sắc nét, màu sắc nổi bật, phù hợp quảng bá sự kiện và thương hiệu.
        - generic [ref=e99]:
          - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e101] [cursor=pointer]:
            - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e102]
          - generic [ref=e103]:
            - heading "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e104]:
              - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e105] [cursor=pointer]:
                - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph [ref=e107]: In cờ phướn sắc nét, màu sắc nổi bật, phù hợp quảng bá sự kiện và thương hiệu.
        - generic [ref=e109]:
          - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e111] [cursor=pointer]:
            - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e112]
          - generic [ref=e113]:
            - heading "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e114]:
              - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e115] [cursor=pointer]:
                - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph [ref=e117]: In cờ phướn sắc nét, màu sắc nổi bật, phù hợp quảng bá sự kiện và thương hiệu.
        - generic [ref=e119]:
          - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e121] [cursor=pointer]:
            - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - img "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e122]
          - generic [ref=e123]:
            - heading "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3] [ref=e124]:
              - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e125] [cursor=pointer]:
                - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
            - paragraph [ref=e127]: In cờ phướn sắc nét, màu sắc nổi bật, phù hợp quảng bá sự kiện và thương hiệu.
        - generic [ref=e128]:
          - generic:
            - generic:
              - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                - img "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
            - generic:
              - heading "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                  - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1-1-1-1-1-1-1-1
              - generic:
                - paragraph: In cờ phướn sắc nét, màu sắc nổi bật, phù hợp quảng bá sự kiện và thương hiệu.
        - generic [ref=e129]:
          - generic:
            - generic:
              - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1-1-1-1-1-1-1
                - img "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
            - generic:
              - heading "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                  - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1-1-1-1-1-1-1
              - generic:
                - paragraph: In cờ phướn sắc nét, màu sắc nổi bật, phù hợp quảng bá sự kiện và thương hiệu.
        - generic [ref=e130]:
          - generic:
            - generic:
              - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1-1-1-1-1-1
                - img "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
            - generic:
              - heading "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                  - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1-1-1-1-1-1
        - generic [ref=e131]:
          - generic:
            - generic:
              - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1-1-1-1-1
                - img "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
            - generic:
              - heading "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                  - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1-1-1-1-1
        - generic [ref=e132]:
          - generic:
            - generic:
              - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1-1-1-1
                - img "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
            - generic:
              - heading "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                  - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1-1-1-1
        - generic [ref=e133]:
          - generic:
            - generic:
              - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1-1-1
                - img "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1)"
            - generic:
              - heading "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1) (1)":
                  - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1-1-1
        - generic [ref=e134]:
          - generic:
            - generic:
              - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1)":
                - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1-1
            - generic:
              - heading "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1) (1)":
                  - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1-1
        - generic [ref=e135]:
          - generic:
            - generic:
              - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1)":
                - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1
            - generic:
              - heading "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1)" [level=3]:
                - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1) (1)":
                  - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1-1
        - generic [ref=e136]:
          - generic:
            - generic:
              - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1)":
                - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1
            - generic:
              - heading "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1)" [level=3]:
                - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1) (1)":
                  - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1-1
        - generic [ref=e137]:
          - generic:
            - generic:
              - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1)":
                - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1
            - generic:
              - heading "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1)" [level=3]:
                - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1) (1)":
                  - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1-1
        - generic [ref=e138]:
          - generic:
            - generic:
              - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1)":
                - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1
            - generic:
              - heading "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1)" [level=3]:
                - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1) (1)":
                  - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1-1
        - generic [ref=e139]:
          - generic:
            - generic:
              - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1)":
                - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1
            - generic:
              - heading "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1)" [level=3]:
                - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1) (1)":
                  - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1-1
        - generic [ref=e140]:
          - generic:
            - generic:
              - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1)":
                - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1
            - generic:
              - heading "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1)" [level=3]:
                - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1) (1)":
                  - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1-1
        - generic [ref=e141]:
          - generic:
            - generic:
              - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1)":
                - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1
            - generic:
              - heading "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1)" [level=3]:
                - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật (1)":
                  - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat-1
        - generic [ref=e142]:
          - generic:
            - generic:
              - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật":
                - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat
            - generic:
              - heading "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật" [level=3]:
                - link "Cờ Lưu Niệm Dùng Để Trao Tặng Hình Chữ Nhật":
                  - /url: co-luu-niem-dung-de-trao-tang-hinh-chu-nhat
        - generic [ref=e143]:
          - generic:
            - generic:
              - link "Cờ hình chữ nhật phổ biến đồng nai":
                - /url: co-hinh-chu-nhat-pho-bien-dong-nai
            - generic:
              - heading "Cờ hình chữ nhật phổ biến đồng nai" [level=3]:
                - link "Cờ hình chữ nhật phổ biến đồng nai":
                  - /url: co-hinh-chu-nhat-pho-bien-dong-nai
              - generic:
                - paragraph: Đồng Nai đang vươn mình mạnh mẽ với hàng loạt khu công nghiệp sầm uất, các dự án đô thị hiện đại và những sự kiện kinh tế quy mô lớn. Giữa nhịp sống năng động ấy, việc khẳng định bản sắc thương hiệu thông qua các công cụ truyền thông trực quan trở nên cần thiết hơn bao giờ hết.
        - generic [ref=e144]:
          - generic:
            - generic:
              - link "mẫu cờ quảng cáo Lông Vũ Đồng Nai":
                - /url: mau-co-quang-cao-long-vu-dong-nai
            - generic:
              - heading "mẫu cờ quảng cáo Lông Vũ Đồng Nai" [level=3]:
                - link "mẫu cờ quảng cáo Lông Vũ Đồng Nai":
                  - /url: mau-co-quang-cao-long-vu-dong-nai
              - generic:
                - paragraph: Hiện nay, thị trường ghi nhận sự đa dạng về kiểu dáng và kích thước của các loại cờ quảng cáo. Tùy thuộc vào không gian mặt tiền và thông điệp muốn truyền tải, doanh nghiệp có thể lựa chọn những thiết kế phù hợp nhất.
        - generic [ref=e145]:
          - generic:
            - generic:
              - link "Bán buôn cờ lông vũ giá rẻ đồng nai":
                - /url: ban-buon-co-long-vu-gia-re-dong-nai
            - generic:
              - heading "Bán buôn cờ lông vũ giá rẻ đồng nai" [level=3]:
                - link "Bán buôn cờ lông vũ giá rẻ đồng nai":
                  - /url: ban-buon-co-long-vu-gia-re-dong-nai
              - generic:
                - paragraph: Giữa nhịp sống năng động và sự vươn mình mạnh mẽ của các doanh nghiệp tại Đồng Nai, việc định vị thương hiệu trên thị trường trở nên đầy thách thức. Làm thế nào để cửa hàng hay sự kiện của bạn thu hút ánh nhìn của khách hàng lướt qua chỉ trong vòng 3 giây ngắn ngủi? Câu trả lời nằm ở sự chuyển động mềm dẻo nhưng đầy uy lực của những lá cờ quảng cáo.
        - generic [ref=e146]:
          - generic:
            - generic:
              - link "Cờ Phướn Giọt Nước Gía Rẻ Đồng Nai":
                - /url: co-phuon-giot-nuoc-gia-re-dong-nai
            - generic:
              - heading "Cờ Phướn Giọt Nước Gía Rẻ Đồng Nai" [level=3]:
                - link "Cờ Phướn Giọt Nước Gía Rẻ Đồng Nai":
                  - /url: co-phuon-giot-nuoc-gia-re-dong-nai
              - generic:
                - paragraph: Tại Đồng Nai, việc sở hữu một bộ nhận diện thương hiệu ngoài trời năng động, tiết kiệm chi phí nhưng mang lại hiệu ứng thị giác mạnh mẽ đang trở thành chìa khóa mở lối thành công cho hàng nghìn doanh nghiệp lớn nhỏ. Hãy cùng khám phá giải pháp quảng cáo đầy sáng tạo này để thổi luồng sinh khí mới vào hoạt động kinh doanh của bạn.
        - generic [ref=e147]:
          - generic:
            - generic:
              - link "Bảng giá cờ giọt lệ 2026":
                - /url: bang-gia-co-giot-le-2026
            - generic:
              - heading "Bảng giá cờ giọt lệ 2026" [level=3]:
                - link "Bảng giá cờ giọt lệ 2026":
                  - /url: bang-gia-co-giot-le-2026
              - generic:
                - paragraph: Mỗi thương hiệu đều mang trong mình một câu chuyện riêng, và cách bạn đưa câu chuyện đó ra thế giới quyết định sự chú ý của khách hàng. Hãy tưởng tượng những dải màu sắc rực rỡ uyển chuyển lay động trước gió, thu hút mọi ánh nhìn của người qua đường một cách tự nhiên và đầy cuốn hút.
        - generic [ref=e148]:
          - generic:
            - generic:
              - link "Báo Giá Cột Cờ Inox ngoài trời Đồng Nai":
                - /url: bao-gia-cot-co-inox-ngoai-troi-dong-nai
            - generic:
              - heading "Báo Giá Cột Cờ Inox ngoài trời Đồng Nai" [level=3]:
                - link "Báo Giá Cột Cờ Inox ngoài trời Đồng Nai":
                  - /url: bao-gia-cot-co-inox-ngoai-troi-dong-nai
              - generic:
                - paragraph:
                  - text: Mỗi buổi sáng, khi những tia nắng đầu tiên trải dài trên các khu công nghiệp năng động tại Biên Hòa, hình ảnh lá cờ Tổ quốc cùng lá cờ doanh nghiệp kiêu hãnh tung bay trước gió luôn mang lại nguồn cảm hứng vô tận về sự phát triển và lòng tự hào sâu sắc. Để dựng xây nên biểu tượng uy nghi ấy, việc tìm kiếm một đơn vị cung cấp
                  - strong:
                    - text: B
                    - link "áo Giá Cột Cờ Inox":
                      - /url: https://code6.mimadigi.vn/2026/august/haiyen_112526W/led-hat-sang
                  - link:
                    - /url: https://code6.mimadigi.vn/2026/august/haiyen_112526W/led-hat-sang
                  - text: ngoài trời uy tín tại Đồng Nai chính là bước khởi đầu vững chắc cho mọi công trình.
        - generic [ref=e149]:
          - generic:
            - generic:
              - link "Cột cờ inox 304 tiêu chuẩn cao 6 mét":
                - /url: cot-co-inox-304-tieu-chuan-cao-6-met
            - generic:
              - heading "Cột cờ inox 304 tiêu chuẩn cao 6 mét" [level=3]:
                - link "Cột cờ inox 304 tiêu chuẩn cao 6 mét":
                  - /url: cot-co-inox-304-tieu-chuan-cao-6-met
              - generic:
                - paragraph: Cột cờ không đơn thuần là một thanh kim loại dựng đứng đón gió, mà là nơi gửi gắm tinh thần, bản sắc và sự chuyên nghiệp của một tập thể. Với chiều cao 6 mét – kích thước chuẩn mực về cả mặt phong thủy lẫn tỷ lệ kiến trúc – sản phẩm này cực kỳ phù hợp cho các không gian như trước sảnh tòa nhà, văn phòng đại diện, nhà máy, trường học, hay các khu tưởng niệm.
        - generic [ref=e150]:
          - generic:
            - generic:
              - link "Cột Cờ Inox Chất Lượng Đồng Nai":
                - /url: cot-co-inox-chat-luong-dong-nai
            - generic:
              - heading "Cột Cờ Inox Chất Lượng Đồng Nai" [level=3]:
                - link "Cột Cờ Inox Chất Lượng Đồng Nai":
                  - /url: cot-co-inox-chat-luong-dong-nai
              - generic:
                - paragraph:
                  - text: Trong lĩnh vực truyền thông ngoài trời, cột cờ kết hợp hài hòa với hệ thống
                  - strong: bảng hiệu quảng cáo
                  - text: mặt tiền giúp tối ưu hóa khả năng nhận diện. Khi các loại
                  - strong: cờ quảng cáo
                  - text: hay
                  - strong: cờ cột cờ
                  - text: được thiết kế tinh tế, chau chuốt tung bay đồng điệu, toàn bộ không gian của doanh nghiệp sẽ trở nên bề thế, uy tín hơn hẳn trong mắt đối tác lẫn khách hàng ghé thăm.
        - generic [ref=e151]:
          - generic:
            - generic:
              - link "Thi công Cột Cờ Inox Ngoài Trời Đồng Nai":
                - /url: thi-cong-cot-co-inox-ngoai-troi-dong-nai
            - generic:
              - heading "Thi công Cột Cờ Inox Ngoài Trời Đồng Nai" [level=3]:
                - link "Thi công Cột Cờ Inox Ngoài Trời Đồng Nai":
                  - /url: thi-cong-cot-co-inox-ngoai-troi-dong-nai
              - generic:
                - paragraph:
                  - text: Giữa dải đất Đồng Nai đầy nắng gió và đang chuyển mình mạnh mẽ từng ngày, hình ảnh lá cờ Tổ quốc hay lá cờ doanh nghiệp tung bay kiêu hãnh trên nền trời xanh luôn khơi dậy một niềm tự hào mãnh liệt. Để lá cờ ấy luôn giữ vững vị thế hiên ngang trước mọi giông bão, dịch vụ thi công
                  - link "Cột Cờ Inox":
                    - /url: https://banghieudep247.com/
                    - strong: Cột Cờ Inox
                  - text: ngoài trời tại Đồng Nai của Bảng Hiệu Đẹp 247 ra đời như một giải pháp kiến tạo nên những cột mốc kiêu hãnh, đồng hành cùng sự phát triển thịnh vượng của các cơ quan, xí nghiệp và trường học.
      - link "Xem thêm 1 May cờ" [ref=e153] [cursor=pointer]:
        - /url: javascript:void(0)
        - text: Xem thêm
        - generic [ref=e154]: "1"
        - text: May cờ
    - generic [ref=e155]:
      - generic [ref=e158]:
        - generic [ref=e159]:
          - link "BẢNG HIỆU ĐẸP 247" [ref=e160] [cursor=pointer]:
            - /url: https://code6.mimadigi.vn/2026/august/haiyen_112526W/
            - img "BẢNG HIỆU ĐẸP 247" [ref=e161]
          - paragraph [ref=e162]: CÔNG TY MAY CỜ HẢI YẾN
          - generic [ref=e163]:
            - paragraph [ref=e164]: Thông tin liên hệ
            - paragraph [ref=e165]:
              - strong [ref=e166]: "Địa chỉ:"
            - paragraph [ref=e167]:
              - strong [ref=e168]: "1. Công ty:"
              - text: Số 68B/H2 Tổ 15, Khu phố 14, P. Tam Hiệp, TP. Đồng Nai
            - paragraph [ref=e169]:
              - strong [ref=e170]: "2. Xưởng:"
              - text: D18A Tổ 3, Khu phố 4, P. Trấn Biên, TP. Đồng Nai
            - paragraph [ref=e171]:
              - strong [ref=e172]: "Hotline:"
              - text: 077.888.9559
            - paragraph [ref=e173]:
              - strong [ref=e174]: "Email:"
              - text: quangcaotrungson1518@gmail.com
            - paragraph [ref=e175]:
              - strong [ref=e176]: "Website:"
              - text: www.banghieudepbienhoa.com
          - paragraph [ref=e177]: Theo dõi chúng tôi tại
          - generic [ref=e178]:
            - link "Facebook" [ref=e179] [cursor=pointer]:
              - /url: ""
              - img "Facebook" [ref=e180]
            - link "Message" [ref=e181] [cursor=pointer]:
              - /url: ""
              - img "Message" [ref=e182]
        - generic [ref=e184]:
          - generic [ref=e185]:
            - paragraph [ref=e186]: Dịch vụ
            - list [ref=e187]:
              - listitem [ref=e188]:
                - link "LED HẮT SÁNG" [ref=e189] [cursor=pointer]:
                  - /url: led-hat-sang
              - listitem [ref=e190]:
                - link "TRẦN XUYÊN SÁNG" [ref=e191] [cursor=pointer]:
                  - /url: tran-xuyen-sang
              - listitem [ref=e192]:
                - link "PANO NGOÀI TRỜI" [ref=e193] [cursor=pointer]:
                  - /url: pano-ngoai-troi
              - listitem [ref=e194]:
                - link "BẢNG HIỆU ALU CHỮ NỔI" [ref=e195] [cursor=pointer]:
                  - /url: bang-hieu-alu-chu-noi
              - listitem [ref=e196]:
                - link "CHỮ NỔI INOX" [ref=e197] [cursor=pointer]:
                  - /url: chu-noi-inox
              - listitem [ref=e198]:
                - link "BẢNG HIỆU BẠT HIFLEX" [ref=e199] [cursor=pointer]:
                  - /url: bang-hieu-bat-hiflex
              - listitem [ref=e200]:
                - link "HỘP ĐÈN 3M" [ref=e201] [cursor=pointer]:
                  - /url: hop-den-3m
              - listitem [ref=e202]:
                - link "BẢNG ĐÈN LED" [ref=e203] [cursor=pointer]:
                  - /url: bang-den-led
              - listitem [ref=e204]:
                - link "CHỮ NỔI MICA" [ref=e205] [cursor=pointer]:
                  - /url: chu-noi-mica
          - generic [ref=e206]:
            - paragraph [ref=e207]: Thông tin liên hệ
            - generic [ref=e208]:
              - paragraph [ref=e209]:
                - strong [ref=e210]: "Địa chỉ:"
              - paragraph [ref=e211]:
                - strong [ref=e212]: "1. Công ty:"
                - text: Số 68B/H2 Tổ 15, Khu phố 14, P. Tam Hiệp, TP. Đồng Nai
              - paragraph [ref=e213]:
                - strong [ref=e214]: "2. Xưởng:"
                - text: D18A Tổ 3, Khu phố 4, P. Trấn Biên, TP. Đồng Nai
              - paragraph [ref=e215]:
                - strong [ref=e216]: "Hotline:"
                - text: 077.888.9559
              - paragraph [ref=e217]:
                - strong [ref=e218]: "Email:"
                - text: quangcaotrungson1518@gmail.com
              - paragraph [ref=e219]:
                - strong [ref=e220]: "Website:"
                - text: www.banghieudepbienhoa.com
      - generic [ref=e224]: Copyright ©2026 Web Mima. All Rights Reserved. Thiết kế Web MIMA
    - generic [ref=e225]:
      - 'link "Call me: 0778889559" [ref=e226] [cursor=pointer]':
        - /url: tel:0778889559
        - img [ref=e230]
        - generic [ref=e233]: "Call me: 0778889559"
      - 'link "Zalo: 0778889559" [ref=e234] [cursor=pointer]':
        - /url: https://zalo.me/0778889559
        - img [ref=e238]
        - generic [ref=e239]: "Zalo: 0778889559"
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
              - generic: "86"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 86/100
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
          - generic: ✅ 18
          - generic: Đạt
        - generic:
          - generic: ❌ 3
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: May cờ
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e240]:
      - generic [ref=e241]: "❌ Chi tiết lỗi cần khắc phục (3/21):"
      - generic [ref=e242]:
        - generic [ref=e243]:
          - generic [ref=e244]: 6. Liên kết (Links)
          - generic [ref=e245]: 1 lỗi
        - generic [ref=e246]:
          - strong [ref=e248]: "Không có broken links (lỗi: 1/59)"
          - generic [ref=e249]: "⚠️ Broken links: https://banghieudep247.com/ (status: 0)"
      - generic [ref=e250]:
        - generic [ref=e251]:
          - generic [ref=e252]: 8. Tốc độ & Core Web Vitals
          - generic [ref=e253]: 2 lỗi
        - generic [ref=e254]:
          - strong [ref=e256]: "[📱 MOBILE (ƯU TIÊN)] Tổng điểm Performance: 57/100 (≥ 60)"
          - generic [ref=e257]: ⚠️ [📱 MOBILE (ƯU TIÊN)] Điểm Performance 57/100 dưới ngưỡng 60. Phân tích chi tiết LCP/CLS/INP bên dưới...
        - generic [ref=e258]:
          - strong [ref=e260]: "[📱 MOBILE (ƯU TIÊN)] LCP (Largest Contentful Paint): 8402ms (< 2500ms)"
          - generic [ref=e261]: "⚠️ [📱 MOBILE (ƯU TIÊN)] LCP quá cao: 8402ms (chuẩn: < 2.5s) → Thủ phạm LCP:"
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 86/100 dưới ngưỡng 96%. Có 3/21 tiêu chí không đạt.
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