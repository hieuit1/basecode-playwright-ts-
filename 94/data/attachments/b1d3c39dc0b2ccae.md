# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin/product.spec.ts >> Product Management Tests >> Bulk insert 35 products via Copy and verify Load More on website
- Location: tests/admin/product.spec.ts:147:13

# Error details

```
Error: Lỗi nghiêm trọng: Không tìm thấy nút 'Xem thêm' phân trang ở cuối màn hình dù đã có hơn 30 Sản phẩm!

expect(locator).toBeVisible() failed

Locator: locator('[id^=\'btn-xemthem\']').filter({ visible: true }).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Lỗi nghiêm trọng: Không tìm thấy nút 'Xem thêm' phân trang ở cuối màn hình dù đã có hơn 30 Sản phẩm! with timeout 10000ms
  - waiting for locator('[id^=\'btn-xemthem\']').filter({ visible: true }).first()

```

```yaml
- text: CÔNG TY TNHH SÂM CAO CẤP CHUẨN HÀN ACT
- link "CÔNG TY TNHH SÂM CAO CẤP CHUẨN HÀN ACT":
  - /url: https://code6.mimadigi.vn/2026/august/samcaocap_113426w/
  - img "CÔNG TY TNHH SÂM CAO CẤP CHUẨN HÀN ACT"
- list:
  - listitem:
    - link "Trang chủ":
      - /url: https://code6.mimadigi.vn/2026/august/samcaocap_113426w/
  - listitem:
    - link "Giới thiệu":
      - /url: gioi-thieu
  - listitem:
    - link "Sản phẩm":
      - /url: san-pham
      - text: Sản phẩm
      - img
  - listitem:
    - link "Khuyến mãi":
      - /url: khuyen-mai
  - listitem:
    - link "Tin tức":
      - /url: tin-tuc
  - listitem:
    - link "Liên hệ":
      - /url: lien-he
  - listitem:
    - link "0888 080 138":
      - /url: tel:0888080138
      - img
      - text: 0888 080 138
- list:
  - listitem:
    - link "Trang chủ":
      - /url: https://code6.mimadigi.vn/2026/august/samcaocap_113426w/
      - img
      - text: Trang chủ
  - listitem:
    - link "Sản phẩm":
      - /url: https://code6.mimadigi.vn/2026/august/samcaocap_113426w/san-pham
- heading "Tất cả Sản phẩm" [level=2]
- link "Nhân sâm hàn quốc":
  - /url: nhan-sam-han-quoc
- link "Tinh dầu thông đỏ":
  - /url: tinh-dau-thong-do
- link "An cung bổ não":
  - /url: an-cung-bo-nao
- link "Đông trùng hạ thảo":
  - /url: dong-trung-ha-thao
- link "Nấm Linh Chi":
  - /url: nam-linh-chi
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1) (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1)":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1)"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1)" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586 (1)":
    - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: auto-test-san-pham-thuc-hien-qua-trinh-loadtest-1789354347586-1
- link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586":
  - /url: san-pham-loadtest-1789354347586
  - img "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586"
- heading "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586" [level=3]:
  - link "[AUTO-TEST] Sản phẩm thực hiện quá trình LoadTest 1789354347586":
    - /url: san-pham-loadtest-1789354347586
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: san-pham-loadtest-1789354347586
- link "Cao hồng sâm 365 Hàn Quốc – 4 hũ x 240g":
  - /url: cao-hong-sam-365-han-quoc-4-hu-x-240g
  - img "Cao hồng sâm 365 Hàn Quốc – 4 hũ x 240g"
- heading "Cao hồng sâm 365 Hàn Quốc – 4 hũ x 240g" [level=3]:
  - link "Cao hồng sâm 365 Hàn Quốc – 4 hũ x 240g":
    - /url: cao-hong-sam-365-han-quoc-4-hu-x-240g
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: cao-hong-sam-365-han-quoc-4-hu-x-240g
- link "Cao Hồng Sâm Cô Đặc KGC Extract Balance – 200g":
  - /url: cao-hong-sam-co-dac-kgc-extract-balance-200g
  - img "Cao Hồng Sâm Cô Đặc KGC Extract Balance – 200g"
- heading "Cao Hồng Sâm Cô Đặc KGC Extract Balance – 200g" [level=3]:
  - link "Cao Hồng Sâm Cô Đặc KGC Extract Balance – 200g":
    - /url: cao-hong-sam-co-dac-kgc-extract-balance-200g
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: cao-hong-sam-co-dac-kgc-extract-balance-200g
- link "Lương sâm nguyên củ KGC Jung Kwan Jang – 300g – 19 củ":
  - /url: luong-sam-nguyen-cu-kgc-jung-kwan-jang-300g-19-cu
  - img "Lương sâm nguyên củ KGC Jung Kwan Jang – 300g – 19 củ"
- heading "Lương sâm nguyên củ KGC Jung Kwan Jang – 300g – 19 củ" [level=3]:
  - link "Lương sâm nguyên củ KGC Jung Kwan Jang – 300g – 19 củ":
    - /url: luong-sam-nguyen-cu-kgc-jung-kwan-jang-300g-19-cu
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: luong-sam-nguyen-cu-kgc-jung-kwan-jang-300g-19-cu
- link "Hồng sâm thái lát tẩm mật ong Mugunghwa – 12 gói x 20g":
  - /url: hong-sam-thai-lat-tam-mat-ong-mugunghwa-12-goi-x-20g
  - img "Hồng sâm thái lát tẩm mật ong Mugunghwa – 12 gói x 20g"
- heading "Hồng sâm thái lát tẩm mật ong Mugunghwa – 12 gói x 20g" [level=3]:
  - link "Hồng sâm thái lát tẩm mật ong Mugunghwa – 12 gói x 20g":
    - /url: hong-sam-thai-lat-tam-mat-ong-mugunghwa-12-goi-x-20g
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: hong-sam-thai-lat-tam-mat-ong-mugunghwa-12-goi-x-20g
- link "Tinh chất hồng sâm nhung hươu Cheonnok Extract KGC – 2 hũ x 180g":
  - /url: tinh-chat-hong-sam-nhung-huou-cheonnok-extract-kgc-2-hu-x-180g
  - img "Tinh chất hồng sâm nhung hươu Cheonnok Extract KGC – 2 hũ x 180g"
- heading "Tinh chất hồng sâm nhung hươu Cheonnok Extract KGC – 2 hũ x 180g" [level=3]:
  - link "Tinh chất hồng sâm nhung hươu Cheonnok Extract KGC – 2 hũ x 180g":
    - /url: tinh-chat-hong-sam-nhung-huou-cheonnok-extract-kgc-2-hu-x-180g
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: tinh-chat-hong-sam-nhung-huou-cheonnok-extract-kgc-2-hu-x-180g
- link "Tinh chất bổ dược tăng lực Hwangjin – 60 ống x 20ml":
  - /url: tinh-chat-bo-duoc-tang-luc-hwangjin-60-ong-x-20ml
  - img "Tinh chất bổ dược tăng lực Hwangjin – 60 ống x 20ml"
- heading "Tinh chất bổ dược tăng lực Hwangjin – 60 ống x 20ml" [level=3]:
  - link "Tinh chất bổ dược tăng lực Hwangjin – 60 ống x 20ml":
    - /url: tinh-chat-bo-duoc-tang-luc-hwangjin-60-ong-x-20ml
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: tinh-chat-bo-duoc-tang-luc-hwangjin-60-ong-x-20ml
- link "Thiên sâm củ khô Dragon King – 300g – 10 củ":
  - /url: thien-sam-cu-kho-dragon-king-300g-10-cu
  - img "Thiên sâm củ khô Dragon King – 300g – 10 củ"
- heading "Thiên sâm củ khô Dragon King – 300g – 10 củ" [level=3]:
  - link "Thiên sâm củ khô Dragon King – 300g – 10 củ":
    - /url: thien-sam-cu-kho-dragon-king-300g-10-cu
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: thien-sam-cu-kho-dragon-king-300g-10-cu
- link "Hồng sâm cắt lát tẩm mật ong KGC – 6 gói x 20g":
  - /url: hong-sam-cat-lat-tam-mat-ong-kgc-6-goi-x-20g
  - img "Hồng sâm cắt lát tẩm mật ong KGC – 6 gói x 20g"
- heading "Hồng sâm cắt lát tẩm mật ong KGC – 6 gói x 20g" [level=3]:
  - link "Hồng sâm cắt lát tẩm mật ong KGC – 6 gói x 20g":
    - /url: hong-sam-cat-lat-tam-mat-ong-kgc-6-goi-x-20g
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: hong-sam-cat-lat-tam-mat-ong-kgc-6-goi-x-20g
- link "Kẹo Hồng Sâm ACHIMMADANG":
  - /url: keo-hong-sam-achimmadang
  - img "Kẹo Hồng Sâm ACHIMMADANG"
- heading "Kẹo Hồng Sâm ACHIMMADANG" [level=3]:
  - link "Kẹo Hồng Sâm ACHIMMADANG":
    - /url: keo-hong-sam-achimmadang
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: keo-hong-sam-achimmadang
- link "Nấm linh chi Achimmadang – 1KG (4-5 Cánh)":
  - /url: nam-linh-chi-achimmadang-1kg-4-5-canh
  - img "Nấm linh chi Achimmadang – 1KG (4-5 Cánh)"
- heading "Nấm linh chi Achimmadang – 1KG (4-5 Cánh)" [level=3]:
  - link "Nấm linh chi Achimmadang – 1KG (4-5 Cánh)":
    - /url: nam-linh-chi-achimmadang-1kg-4-5-canh
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: nam-linh-chi-achimmadang-1kg-4-5-canh
- link "Nấm linh chi Achimmadang – 1KG (9-12 Cánh)":
  - /url: nam-linh-chi-achimmadang-1kg-9-12-canh
  - img "Nấm linh chi Achimmadang – 1KG (9-12 Cánh)"
- heading "Nấm linh chi Achimmadang – 1KG (9-12 Cánh)" [level=3]:
  - link "Nấm linh chi Achimmadang – 1KG (9-12 Cánh)":
    - /url: nam-linh-chi-achimmadang-1kg-9-12-canh
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: nam-linh-chi-achimmadang-1kg-9-12-canh
- link "Viên thiên sâm đông trùng hạ thảo Kingsize – 180 viên":
  - /url: vien-thien-sam-dong-trung-ha-thao-kingsize-180-vien
  - img "Viên thiên sâm đông trùng hạ thảo Kingsize – 180 viên"
- heading "Viên thiên sâm đông trùng hạ thảo Kingsize – 180 viên" [level=3]:
  - link "Viên thiên sâm đông trùng hạ thảo Kingsize – 180 viên":
    - /url: vien-thien-sam-dong-trung-ha-thao-kingsize-180-vien
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: vien-thien-sam-dong-trung-ha-thao-kingsize-180-vien
- link "Tinh chất đông trùng hạ thảo Mugunghwa – 6 gói x 30ml":
  - /url: tinh-chat-dong-trung-ha-thao-mugunghwa-6-goi-x-30ml
  - img "Tinh chất đông trùng hạ thảo Mugunghwa – 6 gói x 30ml"
- heading "Tinh chất đông trùng hạ thảo Mugunghwa – 6 gói x 30ml" [level=3]:
  - link "Tinh chất đông trùng hạ thảo Mugunghwa – 6 gói x 30ml":
    - /url: tinh-chat-dong-trung-ha-thao-mugunghwa-6-goi-x-30ml
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: tinh-chat-dong-trung-ha-thao-mugunghwa-6-goi-x-30ml
- link "An cung Mugunghwa – 60 viên":
  - /url: an-cung-mugunghwa-60-vien
  - img "An cung Mugunghwa – 60 viên"
- heading "An cung Mugunghwa – 60 viên" [level=3]:
  - link "An cung Mugunghwa – 60 viên":
    - /url: an-cung-mugunghwa-60-vien
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: an-cung-mugunghwa-60-vien
- link "An cung rồng vàng Daehan Jinbodan – 60 viên":
  - /url: an-cung-rong-vang-daehan-jinbodan-60-vien
  - img "An cung rồng vàng Daehan Jinbodan – 60 viên"
- heading "An cung rồng vàng Daehan Jinbodan – 60 viên" [level=3]:
  - link "An cung rồng vàng Daehan Jinbodan – 60 viên":
    - /url: an-cung-rong-vang-daehan-jinbodan-60-vien
- paragraph: "Giá: Liên hệ"
- link "Chọn mua":
  - /url: an-cung-rong-vang-daehan-jinbodan-60-vien
- link "Xem thêm 5 sản phẩm":
  - /url: javascript:;
- textbox "Email"
- button "Đăng Ký"
- text: Theo Dõi Chúng Tôi Tại
- link "Facebook":
  - /url: ""
  - img "Facebook"
- link "Message":
  - /url: ""
  - img "Message"
- link "Instargam":
  - /url: ""
  - img "Instargam"
- link "Tiktok":
  - /url: https://vt.tiktok.com/ZS9nuW1De/
  - img "Tiktok"
- link "Youtobe":
  - /url: ""
  - img "Youtobe"
- link "Shoppee":
  - /url: https://s.shopee.vn/2LO7k4zLQF
  - img "Shoppee"
- link "CÔNG TY TNHH SÂM CAO CẤP CHUẨN HÀN ACT":
  - /url: https://code6.mimadigi.vn/2026/august/samcaocap_113426w/
  - img "CÔNG TY TNHH SÂM CAO CẤP CHUẨN HÀN ACT"
- paragraph: Thông Tin Liên Hệ
- list:
  - listitem: "Địa chỉ: Số L22-23, đường N1, Khu phố 1, Phường Trấn Biên, Đồng Nai"
  - listitem:
    - text: "Hotline:"
    - link "0888 080 138":
      - /url: tel:0888080138
  - listitem:
    - text: "Email:"
    - link "hoahd98.mima@gmail.com":
      - /url: mailto:hoahd98.mima@gmail.com
- paragraph: Danh Mục Sản Phẩm
- list:
  - listitem:
    - link "Nhân sâm hàn quốc":
      - /url: nhan-sam-han-quoc
  - listitem:
    - link "Tinh dầu thông đỏ":
      - /url: tinh-dau-thong-do
  - listitem:
    - link "An cung bổ não":
      - /url: an-cung-bo-nao
  - listitem:
    - link "Đông trùng hạ thảo":
      - /url: dong-trung-ha-thao
  - listitem:
    - link "Nấm Linh Chi":
      - /url: nam-linh-chi
- paragraph: Chính Sách
- list
- text: Copyright @ 2026 CÔNG TY TNHH SÂM CAO CẤP CHUẨN HÀN ACT. All Right Reserved. Thiết kế Web MIMA
- 'link "Call me: 0888080138"':
  - /url: tel:0888080138
  - img
  - text: "Call me: 0888080138"
- 'link "Zalo: 0888080138"':
  - /url: https://zalo.me/0888080138
  - img
  - text: "Zalo: 0888080138"
- img "Go Top"
```

# Test source

```ts
  12  |     }
  13  | 
  14  |     /**
  15  |      * Dừng test một khoảng thời gian (Dùng để xem giao diện hoặc debug)
  16  |      * @param page - Context hiện tại
  17  |      * @param ms - Số mili-giây cần dừng
  18  |      */
  19  |     static async delay(page: Page, ms: number): Promise<void> {
  20  |         await page.waitForTimeout(ms);
  21  |     }
  22  | 
  23  |     /**
  24  |      * Shared helper to run bulk insert and pagination test across different modules
  25  |      */
  26  |     static async runBulkPaginationTest(
  27  |         page: Page,
  28  |         pageObj: any,
  29  |         baseTitle: string,
  30  |         baseSlug: string,
  31  |         imagePath: string,
  32  |         bulkPrefix: string,
  33  |         itemTypeLabel: string,
  34  |         options?: {
  35  |             copyCount?: number,
  36  |             beforeSaveAction?: () => Promise<void>
  37  |         }
  38  |     ) {
  39  |         const copyCount = options?.copyCount ?? 34;
  40  | 
  41  |         await test.step(`bước 1: Điều hướng đến trang admin quản lý ${itemTypeLabel}`, async () => {
  42  |             await pageObj.gotoAdminMenu();
  43  |         });
  44  | 
  45  |         await test.step(`bước 2: Tạo 1 ${itemTypeLabel} gốc`, async () => {
  46  |             if (options?.beforeSaveAction) {
  47  |                 await options.beforeSaveAction();
  48  |             }
  49  |             await pageObj.addArticle(
  50  |                 baseTitle,
  51  |                 baseSlug,
  52  |                 `Mô tả cho ${itemTypeLabel} bulk test`,
  53  |                 `Nội dung chi tiết cho ${itemTypeLabel} bulk test`,
  54  |                 imagePath
  55  |             );
  56  |             await pageObj.verifyAdminSuccess();
  57  | 
  58  |             // Quay về danh sách an toàn trước khi thực hiện bước Copy
  59  |             const fastForwardLink = pageObj.successAdminMessage.locator("//a[contains(text(),'Click vào đây nếu không muốn đợi lâu')]");
  60  |             if (await fastForwardLink.isVisible({ timeout: 1500 }).catch(() => false)) {
  61  |                 await Promise.all([
  62  |                     page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 }).catch(() => { }),
  63  |                     fastForwardLink.click({ force: true })
  64  |                 ]);
  65  |             }
  66  | 
  67  |             // Chờ trang load xong
  68  |             await page.waitForLoadState('domcontentloaded', { timeout: 5000 }).catch(() => { });
  69  | 
  70  |             // Cơ chế chống văng ra Dashboard với retry: nếu bị văng thì tự vào lại qua menu
  71  |             // Thử tối đa 3 lần để đảm bảo đứng đúng trang danh sách trước khi sang bước 3
  72  |             for (let retryCount = 0; retryCount < 3; retryCount++) {
  73  |                 const isAtList = await pageObj.addNewButton.waitFor({ state: 'visible', timeout: 5000 }).then(() => true).catch(() => false);
  74  | 
  75  |                 if (isAtList) {
  76  |                     break; // Đã ở đúng trang danh sách, thoát vòng lặp
  77  |                 }
  78  | 
  79  |                 console.log(`⚠ Lần ${retryCount + 1}: Không thấy trang danh sách sau bước 2, đang tự động vào lại qua menu...`);
  80  | 
  81  |                 // Thử click nút "Thoát" trước
  82  |                 const exitBtn = page.locator("a.btn-danger").filter({ hasText: /Thoát/i }).first();
  83  |                 if (await exitBtn.isVisible().catch(() => false)) {
  84  |                     await Promise.all([
  85  |                         page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 5000 }).catch(() => { }),
  86  |                         exitBtn.click({ force: true })
  87  |                     ]);
  88  |                 } else {
  89  |                     // Nếu web bị lỗi văng ra trang chủ admin, lập tức gọi lại Menu để vào đúng trang
  90  |                     await pageObj.gotoAdminMenu();
  91  |                 }
  92  | 
  93  |                 await TestHelper.delay(page, 1000);
  94  |             }
  95  |         });
  96  | 
  97  |         await test.step(`bước 3: Sử dụng nút Copy nhân bản thêm ${copyCount} ${itemTypeLabel}`, async () => {
  98  |             await pageObj.copyBulkArticles(copyCount);
  99  |         });
  100 | 
  101 |         let isCreated = true;
  102 |         try {
  103 |             await test.step(`bước 4: Kiểm tra nút 'Xem thêm' hiển thị ngoài Website`, async () => {
  104 |                 const baseUrl = process.env.BASE_URL?.endsWith('/') ? process.env.BASE_URL : process.env.BASE_URL + '/';
  105 |                 await page.goto(baseUrl + pageObj['clientUrl']);
  106 | 
  107 |                 await pageObj.scrollToBottom();
  108 | 
  109 |                 await expect(
  110 |                     pageObj.loadMoreBtn,
  111 |                     `Lỗi nghiêm trọng: Không tìm thấy nút 'Xem thêm' phân trang ở cuối màn hình dù đã có hơn 30 ${itemTypeLabel}!`
> 112 |                 ).toBeVisible({ timeout: 10000 });
      |                   ^ Error: Lỗi nghiêm trọng: Không tìm thấy nút 'Xem thêm' phân trang ở cuối màn hình dù đã có hơn 30 Sản phẩm!
  113 | 
  114 |                 await TestHelper.takeScreenshot(page, 'Nút Xem thêm hiển thị');
  115 |             });
  116 | 
  117 |             await test.step(`bước 5: Click nút Xem thêm và kiểm tra dữ liệu load thêm`, async () => {
  118 |                 const initialCount = await pageObj.getClientArticleCount(bulkPrefix);
  119 | 
  120 |                 await pageObj.loadMoreBtn.click();
  121 | 
  122 |                 // CHỜ THÔNG MINH
  123 |                 await expect.poll(async () => {
  124 |                     return await pageObj.getClientArticleCount(bulkPrefix);
  125 |                 }, {
  126 |                     timeout: 30000,
  127 |                     message: `Lỗi: Bấm Xem thêm nhưng số lượng ${itemTypeLabel} không tăng sau 30s! (Ban đầu: ${initialCount})`
  128 |                 }).toBeGreaterThan(initialCount);
  129 | 
  130 |                 await TestHelper.takeScreenshot(page, `Đã load thêm ${itemTypeLabel} thành công`);
  131 |             });
  132 |         } finally {
  133 |             if (isCreated) {
  134 |                 await test.step(`bước 6: Dọn rác (Cleanup An Toàn Tuyệt Đối)`, async () => {
  135 |                     const baseUrl = process.env.BASE_URL?.endsWith('/') ? process.env.BASE_URL : process.env.BASE_URL + '/';
  136 |                     await page.goto(baseUrl + 'madmin/index.php');
  137 |                     await pageObj.gotoAdminMenu();
  138 | 
  139 |                     await pageObj.deleteArticlesWithPrefix(bulkPrefix);
  140 |                 });
  141 |             }
  142 |         }
  143 |     }
  144 | 
  145 |     /**
  146 |      * Shared helper to run bulk insert MANUALLY and pagination test across different modules
  147 |      */
  148 |     static async runManualBulkPaginationTest(
  149 |         page: Page,
  150 |         pageObj: any,
  151 |         baseTitle: string,
  152 |         baseSlug: string,
  153 |         imagePath: string,
  154 |         bulkPrefix: string,
  155 |         itemTypeLabel: string,
  156 |         options?: {
  157 |             addCount?: number,
  158 |             beforeSaveAction?: () => Promise<void>,
  159 |             desc?: string,
  160 |             content?: string,
  161 |             enData?: any
  162 |         }
  163 |     ) {
  164 |         const addCount = options?.addCount ?? 35;
  165 | 
  166 |         await test.step(`bước 1: Điều hướng đến trang admin quản lý ${itemTypeLabel}`, async () => {
  167 |             await pageObj.gotoAdminMenu();
  168 |         });
  169 | 
  170 |         // Với thêm thủ công, ta không cần thêm 1 bài gốc rồi copy 34 lần, mà có thể thêm trực tiếp addCount lần (hoặc giống logic cũ)
  171 |         await test.step(`bước 2 & 3: Thêm mới thủ công ${addCount} ${itemTypeLabel}`, async () => {
  172 |             if (options?.beforeSaveAction) {
  173 |                 await options.beforeSaveAction();
  174 |             }
  175 |             await pageObj.addBulkArticlesManually(
  176 |                 addCount,
  177 |                 baseTitle,
  178 |                 baseSlug,
  179 |                 options?.desc || `Mô tả cho ${itemTypeLabel} bulk test`,
  180 |                 options?.content || `Nội dung chi tiết cho ${itemTypeLabel} bulk test`,
  181 |                 imagePath,
  182 |                 options?.enData
  183 |             );
  184 |         });
  185 | 
  186 |         let isCreated = true;
  187 |         try {
  188 |             await test.step(`bước 4: Kiểm tra nút 'Xem thêm' hiển thị ngoài Website`, async () => {
  189 |                 const baseUrl = process.env.BASE_URL?.endsWith('/') ? process.env.BASE_URL : process.env.BASE_URL + '/';
  190 |                 await page.goto(baseUrl + pageObj['clientUrl']);
  191 | 
  192 |                 await pageObj.scrollToBottom();
  193 | 
  194 |                 await expect(
  195 |                     pageObj.loadMoreBtn,
  196 |                     `Lỗi nghiêm trọng: Không tìm thấy nút 'Xem thêm' phân trang ở cuối màn hình dù đã có hơn 30 ${itemTypeLabel}!`
  197 |                 ).toBeVisible({ timeout: 10000 });
  198 | 
  199 |                 await TestHelper.takeScreenshot(page, 'Nút Xem thêm hiển thị');
  200 |             });
  201 | 
  202 |             await test.step(`bước 5: Click nút Xem thêm và kiểm tra dữ liệu load thêm`, async () => {
  203 |                 const initialCount = await pageObj.getClientArticleCount(bulkPrefix);
  204 | 
  205 |                 await pageObj.loadMoreBtn.click();
  206 | 
  207 |                 // CHỜ THÔNG MINH
  208 |                 await expect.poll(async () => {
  209 |                     return await pageObj.getClientArticleCount(bulkPrefix);
  210 |                 }, {
  211 |                     timeout: 20000,
  212 |                     message: `Lỗi: Bấm Xem thêm nhưng số lượng ${itemTypeLabel} không tăng sau 20s! (Ban đầu: ${initialCount})`
```