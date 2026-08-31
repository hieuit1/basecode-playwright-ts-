# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin/news.spec.ts >> News Management Tests >> Bulk insert 35 news via Copy and verify Load More on website
- Location: tests/admin/news.spec.ts:134:13

# Error details

```
Error: Lỗi nghiêm trọng: Không tìm thấy nút 'Xem thêm' phân trang ở cuối màn hình dù đã có hơn 30 Tin tức!

expect(locator).toBeVisible() failed

Locator: locator('//a[contains(text(),\'Xem thêm\')]')
Expected: visible
Error: strict mode violation: locator('//a[contains(text(),\'Xem thêm\')]') resolved to 8 elements:
    1) <a class="more d-inline-flex align-items-center gap-1 fs-16" href="auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788151002183-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1" title="[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788151002183 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)">…</a> aka getByRole('link', { name: 'Xem thêm', description: '[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788151002183 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)' })
    2) <a class="more d-inline-flex align-items-center gap-1 fs-16" href="auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788151002183-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1" title="[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788151002183 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)">…</a> aka getByRole('link', { name: 'Xem thêm', description: '[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788151002183 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)', exact: true })
    3) <a class="more d-inline-flex align-items-center gap-1 fs-16" href="auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788151002183-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1" title="[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788151002183 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)">…</a> aka getByRole('link', { name: 'Xem thêm', description: '[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788151002183 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)', exact: true })
    4) <a class="more d-inline-flex align-items-center gap-1 fs-16" href="auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788151002183-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1" title="[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788151002183 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)">…</a> aka getByRole('link', { name: 'Xem thêm', description: '[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788151002183 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)', exact: true })
    5) <a class="more d-inline-flex align-items-center gap-1 fs-16" href="auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788151002183-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1" title="[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788151002183 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)">…</a> aka getByRole('link', { name: 'Xem thêm', description: '[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788151002183 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)', exact: true })
    6) <a class="more d-inline-flex align-items-center gap-1 fs-16" href="auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788151002183-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1" title="[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788151002183 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)">…</a> aka getByRole('link', { name: 'Xem thêm', description: '[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788151002183 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)', exact: true })
    7) <a class="more d-inline-flex align-items-center gap-1 fs-16" href="auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788151002183-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1" title="[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788151002183 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)">…</a> aka getByRole('link', { name: 'Xem thêm', description: '[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788151002183 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)', exact: true })
    8) <a class="more d-inline-flex align-items-center gap-1 fs-16" href="auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1788151002183-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1" title="[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788151002183 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)">…</a> aka getByRole('link', { name: 'Xem thêm', description: '[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1788151002183 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)', exact: true })

Call log:
  - Lỗi nghiêm trọng: Không tìm thấy nút 'Xem thêm' phân trang ở cuối màn hình dù đã có hơn 30 Tin tức! with timeout 10000ms
  - waiting for locator('//a[contains(text(),\'Xem thêm\')]')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - navigation [ref=e3]:
      - list [ref=e4]:
        - listitem [ref=e5]:
          - link "" [ref=e6] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e7]: 
        - listitem [ref=e8]:
          - generic [ref=e10]: Xin chào, admin!
      - list [ref=e11]:
        - link " Hỗ trợ" [ref=e12] [cursor=pointer]:
          - /url: tel:0909035333
          - generic [ref=e13]: 
          - text: Hỗ trợ
        - listitem [ref=e14]:
          - link "" [ref=e15] [cursor=pointer]:
            - /url: ../
            - generic [ref=e16]: 
        - listitem [ref=e17]:
          - link " 3" [ref=e18] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e19]: 
            - generic [ref=e20]: "3"
          - text:   
        - listitem [ref=e21]:
          - link "" [ref=e22] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e23]: 
          - text:   
        - listitem [ref=e24]:
          - generic [ref=e27] [cursor=pointer]:
            - text: Nhà quản trị
            - paragraph [ref=e28]: Administrator
          - text:    
    - complementary [ref=e29]:
      - link [ref=e30] [cursor=pointer]:
        - /url: index.php
      - navigation [ref=e32]:
        - menu [ref=e33]:
          - listitem [ref=e34]:
            - link " Bảng điều khiển" [ref=e35] [cursor=pointer]:
              - /url: index.php
              - generic [ref=e36]: 
              - paragraph [ref=e37]: Bảng điều khiển
          - listitem [ref=e38]:
            - link " Group Giới Thiệu " [ref=e39] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e40]: 
              - paragraph [ref=e41]:
                - text: Group Giới Thiệu
                - generic [ref=e42]: 
            - text:         
          - listitem [ref=e43]:
            - link " Quản lý Dịch vụ " [ref=e44] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e45]: 
              - paragraph [ref=e46]:
                - text: Quản lý Dịch vụ
                - generic [ref=e47]: 
            - text:  
          - listitem [ref=e48]:
            - link " Quản lý bài viết " [ref=e49] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e50]: 
              - paragraph [ref=e51]:
                - text: Quản lý bài viết
                - generic [ref=e52]: 
            - list [ref=e53]:
              - listitem [ref=e54]:
                - link " Tin tức" [ref=e55] [cursor=pointer]:
                  - /url: news?act=man&type=tin-tuc
                  - generic [ref=e56]: 
                  - paragraph [ref=e57]: Tin tức
              - listitem [ref=e58]:
                - link " Vì sao chọn chúng tôi" [ref=e59] [cursor=pointer]:
                  - /url: news?act=man&type=vi-sao
                  - generic [ref=e60]: 
                  - paragraph [ref=e61]: Vì sao chọn chúng tôi
              - listitem [ref=e62]:
                - link " Câu hỏi thường gặp" [ref=e63] [cursor=pointer]:
                  - /url: news?act=man&type=cau-hoi
                  - generic [ref=e64]: 
                  - paragraph [ref=e65]: Câu hỏi thường gặp
              - listitem [ref=e66]:
                - link " Tiêu chí" [ref=e67] [cursor=pointer]:
                  - /url: news?act=man&type=tieu-chi
                  - generic [ref=e68]: 
                  - paragraph [ref=e69]: Tiêu chí
              - listitem [ref=e70]:
                - link " Chính sách" [ref=e71] [cursor=pointer]:
                  - /url: news?act=man&type=chinh-sach
                  - generic [ref=e72]: 
                  - paragraph [ref=e73]: Chính sách
          - listitem [ref=e74]:
            - link " Quản lý nhận tin " [active] [ref=e75] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e76]: 
              - paragraph [ref=e77]:
                - text: Quản lý nhận tin
                - generic [ref=e78]: 
            - list [ref=e79]:
              - listitem [ref=e80]:
                - link " Đăng ký nhận tin" [ref=e81] [cursor=pointer]:
                  - /url: newsletter?act=man&type=newsletter
                  - generic [ref=e82]: 
                  - paragraph [ref=e83]: Đăng ký nhận tin
              - listitem [ref=e84]:
                - link " Đăng ký tư vấn" [ref=e85] [cursor=pointer]:
                  - /url: newsletter?act=man&type=tu-van
                  - generic [ref=e86]: 
                  - paragraph [ref=e87]: Đăng ký tư vấn
          - listitem [ref=e88]:
            - link " Quản lý trang tĩnh " [ref=e89] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e90]: 
              - paragraph [ref=e91]:
                - text: Quản lý trang tĩnh
                - generic [ref=e92]: 
            - text:   
          - listitem [ref=e93]:
            - link " Quản lý hình ảnh - video " [ref=e94] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e95]: 
              - paragraph [ref=e96]:
                - text: Quản lý hình ảnh - video
                - generic [ref=e97]: 
            - text:        
          - listitem [ref=e98]:
            - link " Quản lý seo page " [ref=e99] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e100]: 
              - paragraph [ref=e101]:
                - text: Quản lý seo page
                - generic [ref=e102]: 
            - text:     
          - listitem [ref=e103]:
            - link " Thiết lập thông tin" [ref=e104] [cursor=pointer]:
              - /url: setting?act=update
              - generic [ref=e105]: 
              - paragraph [ref=e106]: Thiết lập thông tin
    - generic [ref=e107]:
      - generic [ref=e109]:
        - heading "Bảng điều khiển" [level=5] [ref=e110]
        - generic [ref=e111]:
          - link " Cấu hình website Xem thêm" [ref=e113] [cursor=pointer]:
            - /url: setting?act=update
            - generic [ref=e115]: 
            - generic [ref=e116]:
              - generic [ref=e117]: Cấu hình website
              - generic [ref=e118]: Xem thêm
          - link " Quản lý tài khoản Xem thêm" [ref=e120] [cursor=pointer]:
            - /url: user?act=info_admin
            - generic [ref=e122]: 
            - generic [ref=e123]:
              - generic [ref=e124]: Quản lý tài khoản
              - generic [ref=e125]: Xem thêm
          - link " Đổi mật khẩu Xem thêm" [ref=e127] [cursor=pointer]:
            - /url: user?act=info_admin&changepass=1
            - generic [ref=e129]: 
            - generic [ref=e130]:
              - generic [ref=e131]: Đổi mật khẩu
              - generic [ref=e132]: Xem thêm
          - link " Thư liên hệ Xem thêm" [ref=e134] [cursor=pointer]:
            - /url: contact?act=man
            - generic [ref=e136]: 
            - generic [ref=e137]:
              - generic [ref=e138]: Thư liên hệ
              - generic [ref=e139]: Xem thêm
      - generic [ref=e142]:
        - generic [ref=e144]:
          - heading "Thống kê truy cập online" [level=5] [ref=e146]
          - generic [ref=e148]:
            - generic [ref=e149]:
              - img [ref=e152]:
                - generic [ref=e157]:
                  - generic: "102"
                  - generic: "124"
              - paragraph [ref=e164]:
                - text: Đang online
                - generic [ref=e165]: "424"
            - generic [ref=e166]:
              - paragraph [ref=e167]:
                - text: "Online:"
                - strong [ref=e169]: "424"
              - paragraph [ref=e170]:
                - text: "Tuần:"
                - strong [ref=e172]: "5"
              - paragraph [ref=e173]:
                - text: "Tháng:"
                - strong [ref=e175]: "102"
              - paragraph [ref=e176]:
                - text: "Tổng:"
                - strong [ref=e178]: "124"
        - generic [ref=e181]:
          - generic [ref=e182]:
            - heading "Thống kê truy cập tháng 08/2026" [level=5] [ref=e183]
            - generic [ref=e184]:
              - generic [ref=e186]: 
              - generic [ref=e188]:
                - combobox [ref=e189]
                - combobox "Tháng 8" [ref=e192] [cursor=pointer]:
                  - textbox "Tháng 8" [ref=e193]
              - generic [ref=e195]:
                - combobox [ref=e196]
                - combobox "Năm 2026" [ref=e199] [cursor=pointer]:
                  - textbox "Năm 2026" [ref=e200]
              - button "Thống Kê" [ref=e203] [cursor=pointer]
          - generic [ref=e207]:
            - img [ref=e208]:
              - generic [ref=e209]:
                - generic:
                  - generic:
                    - generic "D1"
                    - generic "D2"
                    - generic "D3"
                    - generic "D4"
                    - generic "D5"
                    - generic "D6"
                    - generic "D7"
                    - generic "D8"
                    - generic "D9"
                    - generic "D10"
                    - generic "D11"
                    - generic "D12"
                    - generic "D13"
                    - generic "D14"
                    - generic "D15"
                    - generic "D16"
                    - generic "D17"
                    - generic "D18"
                    - generic "D19"
                    - generic "D20"
                    - generic "D21"
                    - generic "D22"
                    - generic "D23"
                    - generic "D24"
                    - generic "D25"
                    - generic "D26"
                    - generic "D27"
                    - generic "D28"
                    - generic "D29"
                    - generic "D30"
                    - generic "D31"
              - generic:
                - generic:
                  - generic: "45"
                  - generic: "36"
                  - generic: "27"
                  - generic: "18"
                  - generic: "9"
                  - generic: "0"
            - generic [ref=e281]:
              - generic:
                - generic "Download SVG"
                - generic "Download PNG"
      - generic [ref=e283]:
        - heading "Thống kê traffic" [level=5] [ref=e284]
        - generic [ref=e285]:
          - generic [ref=e287]:
            - generic [ref=e289]: 
            - heading "Hotline" [level=5] [ref=e290]
            - generic [ref=e291]: "1"
          - generic [ref=e293]:
            - generic [ref=e295]: 
            - heading "Zalo" [level=5] [ref=e296]
            - generic [ref=e297]: "0"
          - generic [ref=e299]:
            - generic [ref=e301]: 
            - heading "Liên hệ" [level=5] [ref=e302]
            - generic [ref=e303]: "11"
      - generic [ref=e305]:
        - generic [ref=e306]:
          - heading "Top 100 thứ hạng từ khóa" [level=5] [ref=e307]
          - generic [ref=e308]:
            - generic [ref=e309]: "Dữ liệu cập nhật theo GSC (có thể trễ 1–2 ngày): 2026-08-31"
            - button "Cập nhật" [ref=e310] [cursor=pointer]
        - table [ref=e312]:
          - rowgroup [ref=e313]:
            - row "STT Từ khóa Lượt nhấp Thứ hạng Lượt hiển thị Link top" [ref=e314]:
              - columnheader "STT" [ref=e315]
              - columnheader "Từ khóa" [ref=e316]
              - columnheader "Lượt nhấp" [ref=e317]
              - columnheader "Thứ hạng" [ref=e318]
              - columnheader "Lượt hiển thị" [ref=e319]
              - columnheader "Link top" [ref=e320]
          - rowgroup [ref=e321]:
            - row "Chưa có dữ liệu" [ref=e322]:
              - cell "Chưa có dữ liệu" [ref=e323]
      - generic [ref=e328]:
        - generic [ref=e329]:
          - heading "Thống kê truy cập trình duyệt" [level=5] [ref=e331]
          - list [ref=e333]:
            - listitem [ref=e334]:
              - paragraph [ref=e335]:
                - img "Chrome" [ref=e336]
                - text: Chrome
              - paragraph [ref=e337]: "103"
            - listitem [ref=e338]:
              - paragraph [ref=e339]:
                - img "Edge" [ref=e340]
                - text: Microsoft Edge
              - paragraph [ref=e341]: "13"
            - listitem [ref=e342]:
              - paragraph [ref=e343]:
                - img "Internet Explorer" [ref=e344]
                - text: Internet Explorer
              - paragraph [ref=e345]: "0"
            - listitem [ref=e346]:
              - paragraph [ref=e347]:
                - img "Firefox" [ref=e348]
                - text: Mozilla Firefox
              - paragraph [ref=e349]: "0"
            - listitem [ref=e350]:
              - paragraph [ref=e351]:
                - img "Safari" [ref=e352]
                - text: Safari
              - paragraph [ref=e353]: "6"
            - listitem [ref=e354]:
              - paragraph [ref=e355]:
                - img "Opera" [ref=e356]
                - text: Opera
              - paragraph [ref=e357]: "0"
            - listitem [ref=e358]:
              - paragraph [ref=e359]:
                - img "Khác" [ref=e360]
                - text: Khác
              - paragraph [ref=e361]: "2"
        - generic [ref=e362]:
          - heading "Thống kê số lượng truy cập theo thiết bị" [level=5] [ref=e364]
          - generic [ref=e367]:
            - generic [ref=e370]:
              - generic [ref=e371]:
                - img "Desktop" [ref=e372]
                - generic [ref=e373]: Desktop
              - heading "95%" [level=5] [ref=e374]
              - paragraph [ref=e375]: 118 lượt truy cập
            - generic [ref=e378]:
              - generic [ref=e379]:
                - img "Mobile" [ref=e380]
                - generic [ref=e381]: Mobile
              - heading "5%" [level=5] [ref=e382]
              - paragraph [ref=e383]: 6 lượt truy cập
        - generic [ref=e384]:
          - heading "Thống kê IP truy cập web" [level=5] [ref=e386]
          - generic [ref=e387]:
            - generic [ref=e388]:
              - generic [ref=e389]:
                - generic [ref=e390]: 
                - strong [ref=e391]: ::1
              - generic [ref=e393]: 45 lượt
            - generic [ref=e394]:
              - generic [ref=e395]:
                - generic [ref=e396]: 
                - strong [ref=e397]: 171.250.163.213
              - generic [ref=e399]: 19 lượt
            - generic [ref=e400]:
              - generic [ref=e401]:
                - generic [ref=e402]: 
                - strong [ref=e403]: 42.113.171.169
              - generic [ref=e405]: 13 lượt
            - generic [ref=e406]:
              - generic [ref=e407]:
                - generic [ref=e408]: 
                - strong [ref=e409]: 171.250.4.7
              - generic [ref=e411]: 11 lượt
            - generic [ref=e412]:
              - generic [ref=e413]:
                - generic [ref=e414]: 
                - strong [ref=e415]: 171.247.187.217
              - generic [ref=e417]: 11 lượt
            - generic [ref=e418]:
              - generic [ref=e419]:
                - generic [ref=e420]: 
                - strong [ref=e421]: 1.53.97.29
              - generic [ref=e423]: 8 lượt
            - generic [ref=e424]:
              - generic [ref=e425]:
                - generic [ref=e426]: 
                - strong [ref=e427]: 116.108.161.226
              - generic [ref=e429]: 5 lượt
            - generic [ref=e430]:
              - generic [ref=e431]:
                - generic [ref=e432]: 
                - strong [ref=e433]: 171.255.61.19
              - generic [ref=e435]: 2 lượt
            - generic [ref=e436]:
              - generic [ref=e437]:
                - generic [ref=e438]: 
                - strong [ref=e439]: 49.213.78.10
              - generic [ref=e441]: 1 lượt
            - generic [ref=e442]:
              - generic [ref=e443]:
                - generic [ref=e444]: 
                - strong [ref=e445]: 118.68.211.52
              - generic [ref=e447]: 1 lượt
      - generic [ref=e452]:
        - generic [ref=e454]:
          - heading "Số người dùng theo Mã quốc gia" [level=5] [ref=e456]:
            - text: Số người dùng theo
            - link "Mã quốc gia" [ref=e457] [cursor=pointer]:
              - /url: "#"
          - table [ref=e458]:
            - rowgroup [ref=e459]:
              - row "QUỐC GIA LƯỢNG TRUY CẬP" [ref=e460]:
                - columnheader "QUỐC GIA" [ref=e461]
                - columnheader "LƯỢNG TRUY CẬP" [ref=e462]
            - rowgroup [ref=e463]:
              - row "Vietnam 76 (61.29%)" [ref=e464]:
                - cell "Vietnam" [ref=e465]
                - cell "76 (61.29%)" [ref=e466]: 76 (61.29%)
              - row "Unknown 46 (37.1%)" [ref=e469]:
                - cell "Unknown" [ref=e470]
                - cell "46 (37.1%)" [ref=e471]: 46 (37.1%)
              - row "United States 2 (1.61%)" [ref=e474]:
                - cell "United States" [ref=e475]
                - cell "2 (1.61%)" [ref=e476]: 2 (1.61%)
        - generic [ref=e480]:
          - heading "Số người dùng theo Mã thành phố" [level=5] [ref=e482]:
            - text: Số người dùng theo
            - link "Mã thành phố" [ref=e483] [cursor=pointer]:
              - /url: "#"
          - table [ref=e484]:
            - rowgroup [ref=e485]:
              - row "THÀNH PHỐ LƯỢNG TRUY CẬP" [ref=e486]:
                - columnheader "THÀNH PHỐ" [ref=e487]
                - columnheader "LƯỢNG TRUY CẬP" [ref=e488]
            - rowgroup [ref=e489]:
              - row "Unknown 46 (37.1%)" [ref=e490]:
                - cell "Unknown" [ref=e491]
                - cell "46 (37.1%)" [ref=e492]: 46 (37.1%)
              - row "Ho Chi Minh City 36 (29.03%)" [ref=e495]:
                - cell "Ho Chi Minh City" [ref=e496]
                - cell "36 (29.03%)" [ref=e497]: 36 (29.03%)
              - row "Hanoi 20 (16.13%)" [ref=e500]:
                - cell "Hanoi" [ref=e501]
                - cell "20 (16.13%)" [ref=e502]: 20 (16.13%)
              - row "Quận Phú Nhuận 11 (8.87%)" [ref=e505]:
                - cell "Quận Phú Nhuận" [ref=e506]
                - cell "11 (8.87%)" [ref=e507]: 11 (8.87%)
              - row "Quận Hai 8 (6.45%)" [ref=e510]:
                - cell "Quận Hai" [ref=e511]
                - cell "8 (6.45%)" [ref=e512]: 8 (6.45%)
              - row "Boydton 2 (1.61%)" [ref=e515]:
                - cell "Boydton" [ref=e516]
                - cell "2 (1.61%)" [ref=e517]: 2 (1.61%)
              - row "Quận Mười 1 (0.81%)" [ref=e520]:
                - cell "Quận Mười" [ref=e521]
                - cell "1 (0.81%)" [ref=e522]: 1 (0.81%)
    - contentinfo [ref=e525]:
      - paragraph [ref=e528]:
        - strong [ref=e530]: Công Ty TNHH Thương Mại Dịch Vụ MIMA
        - text: MST
        - strong [ref=e531]: ":"
        - text: "0318672839"
        - strong [ref=e532]: "Địa chỉ:"
        - link [ref=e533] [cursor=pointer]:
          - /url: https://maps.app.goo.gl/rA8evCuRwT3Go6bR9
          - text: 31/3B Ấp Thới Tứ 1, Xã Đông Thạnh, TP Hồ Chí Minh
        - text: ", Việt Nam"
        - strong [ref=e534]: "Hotline:"
        - text: 0909 035 333
        - strong [ref=e535]: "Website:"
        - link [ref=e536] [cursor=pointer]:
          - /url: https://mimadigi.com
          - text: https://
        - link [ref=e537] [cursor=pointer]:
          - /url: https://mimadigi.com
          - text: mimadigi.com
        - strong [ref=e538]: "Email:"
        - text: info@mimadigi.com
        - link [ref=e539] [cursor=pointer]:
          - /url: //www.dmca.com/Protection/Status.aspx?ID=2f39ff2a-7db5-4e53-9bb6-15ee8957080c&refurl=https://mimadigi.com/
          - img [ref=e540]
        - link [ref=e541] [cursor=pointer]:
          - /url: http://online.gov.vn/Website/chi-tiet-134906
          - img [ref=e542]
  - generic [ref=e543]:
    - generic [ref=e544]: Tùy chỉnh
    - generic [ref=e546]:
      - generic [ref=e547]:
        - heading "Slidebar" [level=4] [ref=e548]
        - generic [ref=e549]:
          - button [ref=e550] [cursor=pointer]
          - button [ref=e551] [cursor=pointer]
          - button [ref=e552] [cursor=pointer]
          - button [ref=e553] [cursor=pointer]
          - button [ref=e554] [cursor=pointer]
          - button [ref=e555] [cursor=pointer]
          - button [ref=e556] [cursor=pointer]
          - button [ref=e557] [cursor=pointer]
          - button [ref=e558] [cursor=pointer]
          - button [ref=e559] [cursor=pointer]
          - button [ref=e560] [cursor=pointer]
          - button [ref=e561] [cursor=pointer]
          - button [ref=e562] [cursor=pointer]
          - button [ref=e563] [cursor=pointer]
          - button [ref=e564] [cursor=pointer]
          - button [ref=e565] [cursor=pointer]
      - generic [ref=e566]:
        - heading "Navbar Header" [level=4] [ref=e567]
        - generic [ref=e568]:
          - button [ref=e569] [cursor=pointer]
          - button [ref=e570] [cursor=pointer]
          - button [ref=e571] [cursor=pointer]
          - button [ref=e572] [cursor=pointer]
          - button [ref=e573] [cursor=pointer]
          - button [ref=e574] [cursor=pointer]
          - button [ref=e575] [cursor=pointer]
          - button [ref=e576] [cursor=pointer]
          - button [ref=e577] [cursor=pointer]
          - button [ref=e578] [cursor=pointer]
          - button [ref=e579] [cursor=pointer]
          - button [ref=e580] [cursor=pointer]
          - button [ref=e581] [cursor=pointer]
          - button [ref=e582] [cursor=pointer]
          - button [ref=e583] [cursor=pointer]
          - button [ref=e584] [cursor=pointer]
      - generic [ref=e585]:
        - heading "Light mode" [level=4] [ref=e586]
        - generic [ref=e588]:
          - generic [ref=e589]:
            - img "Light" [ref=e593] [cursor=pointer]
            - generic [ref=e594]: Light
          - generic [ref=e595]:
            - img "Dark" [ref=e599] [cursor=pointer]
            - generic [ref=e600]: Dark
          - generic [ref=e601]:
            - img "System" [ref=e605] [cursor=pointer]
            - generic [ref=e606]: System
      - generic [ref=e607]:
        - heading "Themes" [level=4] [ref=e608]
        - generic [ref=e610]:
          - generic [ref=e611]:
            - img "Default" [ref=e615] [cursor=pointer]
            - generic [ref=e616]: Default
          - generic [ref=e617]:
            - img "Bordered" [ref=e621] [cursor=pointer]
            - generic [ref=e622]: Bordered
          - generic [ref=e623]:
            - img "Semi Dark" [ref=e627] [cursor=pointer]
            - generic [ref=e628]: Semi Dark
    - generic [ref=e630] [cursor=pointer]: 
  - img
  - img
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
      |                   ^ Error: Lỗi nghiêm trọng: Không tìm thấy nút 'Xem thêm' phân trang ở cuối màn hình dù đã có hơn 30 Tin tức!
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