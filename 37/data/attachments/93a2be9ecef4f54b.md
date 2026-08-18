# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin/news.spec.ts >> News Management Tests >> Bulk insert 35 news via Copy and verify Load More on website
- Location: tests/admin/news.spec.ts:132:13

# Error details

```
Error: Lỗi nghiêm trọng: Không tìm thấy nút 'Xem thêm' phân trang ở cuối màn hình dù đã có hơn 30 Tin tức!

expect(locator).toBeVisible() failed

Locator: locator('//a[contains(text(),\'Xem thêm\')]')
Expected: visible
Error: strict mode violation: locator('//a[contains(text(),\'Xem thêm\')]') resolved to 41 elements:
    1) <a class="btn-post" href="auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787038495145-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1">…</a> aka getByRole('link', { name: 'Xem thêm' }).first()
    2) <a class="btn-post" href="auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787038495145-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1">…</a> aka getByRole('link', { name: 'Xem thêm' }).nth(1)
    3) <a class="btn-post" href="auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787038495145-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1">…</a> aka getByRole('link', { name: 'Xem thêm' }).nth(2)
    4) <a class="btn-post" href="auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787038495145-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1">…</a> aka getByRole('link', { name: 'Xem thêm' }).nth(3)
    5) <a class="btn-post" href="auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787038495145-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1">…</a> aka getByRole('link', { name: 'Xem thêm' }).nth(4)
    6) <a class="btn-post" href="auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787038495145-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1">…</a> aka getByRole('link', { name: 'Xem thêm' }).nth(5)
    7) <a class="btn-post" href="auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787038495145-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1">…</a> aka locator('div:nth-child(7) > .news-item > .info > .btn-post')
    8) <a class="btn-post" href="auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787038495145-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1">…</a> aka locator('div:nth-child(8) > .news-item > .info > .btn-post')
    9) <a class="btn-post" href="auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787038495145-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1">…</a> aka locator('div:nth-child(9) > .news-item > .info > .btn-post')
    10) <a class="btn-post" href="auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787038495145-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1">…</a> aka locator('div:nth-child(10) > .news-item > .info > .btn-post')
    ...

Call log:
  - Lỗi nghiêm trọng: Không tìm thấy nút 'Xem thêm' phân trang ở cuối màn hình dù đã có hơn 30 Tin tức! with timeout 10000ms
  - waiting for locator('//a[contains(text(),\'Xem thêm\')]')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
          - link " 16" [ref=e18] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e19]: 
            - generic [ref=e20]: "16"
          - text:    
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
            - text:       
          - listitem [ref=e43]:
            - link " Group Sản Phẩm " [ref=e44] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e45]: 
              - paragraph [ref=e46]:
                - text: Group Sản Phẩm
                - generic [ref=e47]: 
            - text:     
          - listitem [ref=e48]:
            - link " Quản lý Thư viện ảnh " [ref=e49] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e50]: 
              - paragraph [ref=e51]:
                - text: Quản lý Thư viện ảnh
                - generic [ref=e52]: 
            - text: 
          - listitem [ref=e53]:
            - link " Quản lý bài viết " [ref=e54] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e55]: 
              - paragraph [ref=e56]:
                - text: Quản lý bài viết
                - generic [ref=e57]: 
            - list [ref=e58]:
              - listitem [ref=e59]:
                - link " Dịch vụ" [ref=e60] [cursor=pointer]:
                  - /url: news?act=man&type=dich-vu
                  - generic [ref=e61]: 
                  - paragraph [ref=e62]: Dịch vụ
              - listitem [ref=e63]:
                - link " Tin tức" [ref=e64] [cursor=pointer]:
                  - /url: news?act=man&type=tin-tuc
                  - generic [ref=e65]: 
                  - paragraph [ref=e66]: Tin tức
              - listitem [ref=e67]:
                - link " Bảng giá sỉ" [ref=e68] [cursor=pointer]:
                  - /url: news?act=man&type=bang-gia-si
                  - generic [ref=e69]: 
                  - paragraph [ref=e70]: Bảng giá sỉ
              - listitem [ref=e71]:
                - link " Khách hàng" [ref=e72] [cursor=pointer]:
                  - /url: news?act=man&type=khach-hang
                  - generic [ref=e73]: 
                  - paragraph [ref=e74]: Khách hàng
              - listitem [ref=e75]:
                - link " Vì sao chọn chúng tôi" [ref=e76] [cursor=pointer]:
                  - /url: news?act=man&type=vi-sao
                  - generic [ref=e77]: 
                  - paragraph [ref=e78]: Vì sao chọn chúng tôi
              - listitem [ref=e79]:
                - link " Tiêu chí" [ref=e80] [cursor=pointer]:
                  - /url: news?act=man&type=tieu-chi
                  - generic [ref=e81]: 
                  - paragraph [ref=e82]: Tiêu chí
              - listitem [ref=e83]:
                - link " Đơn hàng ảo" [ref=e84] [cursor=pointer]:
                  - /url: news?act=man&type=don-hang-ao
                  - generic [ref=e85]: 
                  - paragraph [ref=e86]: Đơn hàng ảo
              - listitem [ref=e87]:
                - link " Chính sách" [ref=e88] [cursor=pointer]:
                  - /url: news?act=man&type=chinh-sach
                  - generic [ref=e89]: 
                  - paragraph [ref=e90]: Chính sách
              - listitem [ref=e91]:
                - link " Hình thức thanh toán" [ref=e92] [cursor=pointer]:
                  - /url: news?act=man&type=hinh-thuc-thanh-toan
                  - generic [ref=e93]: 
                  - paragraph [ref=e94]: Hình thức thanh toán
          - listitem [ref=e95]:
            - link " Quản lý đơn hàng" [ref=e96] [cursor=pointer]:
              - /url: order?act=man
              - generic [ref=e97]: 
              - paragraph [ref=e98]: Quản lý đơn hàng
          - listitem [ref=e99]:
            - link " Quản lý nhận tin " [ref=e100] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e101]: 
              - paragraph [ref=e102]:
                - text: Quản lý nhận tin
                - generic [ref=e103]: 
            - text:  
          - listitem [ref=e104]:
            - link " Quản lý trang tĩnh " [ref=e105] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e106]: 
              - paragraph [ref=e107]:
                - text: Quản lý trang tĩnh
                - generic [ref=e108]: 
            - text:    
          - listitem [ref=e109]:
            - link " Quản lý hình ảnh - video " [ref=e110] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e111]: 
              - paragraph [ref=e112]:
                - text: Quản lý hình ảnh - video
                - generic [ref=e113]: 
            - text:          
          - listitem [ref=e114]:
            - link " Quản lý seo page " [ref=e115] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e116]: 
              - paragraph [ref=e117]:
                - text: Quản lý seo page
                - generic [ref=e118]: 
            - text:      
          - listitem [ref=e119]:
            - link " Thiết lập thông tin" [ref=e120] [cursor=pointer]:
              - /url: setting?act=update
              - generic [ref=e121]: 
              - paragraph [ref=e122]: Thiết lập thông tin
    - generic [ref=e123]:
      - list [ref=e127]:
        - listitem [ref=e128]:
          - link "Bảng điều khiển" [ref=e129] [cursor=pointer]:
            - /url: index.php
        - listitem [ref=e130]: / Tin tức
      - generic [ref=e131]:
        - generic [ref=e132]:
          - link "+ Thêm mới" [ref=e133] [cursor=pointer]:
            - /url: news?act=add&type=tin-tuc
            - generic [ref=e134]: +
            - text: Thêm mới
          - generic "Xóa tất cả" [ref=e135] [cursor=pointer]:
            - generic [ref=e136]: 
            - text: Xóa tất cả
          - generic [ref=e138]:
            - searchbox "Tìm kiếm" [ref=e139]
            - button "" [ref=e141] [cursor=pointer]:
              - generic [ref=e142]: 
          - generic [ref=e143]: Có (24) Tin tức
        - generic [ref=e144]:
          - heading "Danh sách Tin tức" [level=3] [ref=e146]
          - table [ref=e148]:
            - rowgroup [ref=e149]:
              - row "STT Hình Tiêu đề Nổi bật Hiển thị noindex Thao tác" [ref=e150]:
                - columnheader [ref=e151]:
                  - checkbox [ref=e153] [cursor=pointer]
                - columnheader "STT" [ref=e155]
                - columnheader "Hình" [ref=e156]
                - columnheader "Tiêu đề" [ref=e157]
                - columnheader "Nổi bật" [ref=e158]
                - columnheader "Hiển thị" [ref=e159]
                - columnheader "noindex" [ref=e160]
                - columnheader "Thao tác" [ref=e161]
            - rowgroup [ref=e162]:
              - row "1 Đồng phục võ thuật cao cấp đâu là tiêu chí đáng quan tâm Đồng phục võ thuật cao cấp đâu là tiêu chí đáng quan tâm  View  Edit  Copy  Delete   " [ref=e163]:
                - cell [ref=e164]:
                  - checkbox [ref=e166] [cursor=pointer]
                - cell "1" [ref=e168]:
                  - spinbutton [ref=e169]: "1"
                - cell "Đồng phục võ thuật cao cấp đâu là tiêu chí đáng quan tâm" [ref=e170]:
                  - link "Đồng phục võ thuật cao cấp đâu là tiêu chí đáng quan tâm" [ref=e171] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=66
                    - img "Đồng phục võ thuật cao cấp đâu là tiêu chí đáng quan tâm" [ref=e172]
                - cell "Đồng phục võ thuật cao cấp đâu là tiêu chí đáng quan tâm  View  Edit  Copy  Delete" [ref=e173]:
                  - link "Đồng phục võ thuật cao cấp đâu là tiêu chí đáng quan tâm" [ref=e174] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=66
                  - generic [ref=e175]:
                    - link " View" [ref=e176] [cursor=pointer]:
                      - /url: https://vophucthieudan.com/dong-phuc-vo-thuat-cao-cap-dau-la-tieu-chi-dang-quan-tam
                      - generic [ref=e177]: 
                      - text: View
                    - link " Edit" [ref=e178] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=66
                      - generic [ref=e179]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e180] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e181]: 
                        - text: Copy
                      - text:  
                    - generic "Đồng phục võ thuật cao cấp đâu là tiêu chí đáng quan tâm" [ref=e182] [cursor=pointer]:
                      - generic [ref=e183]: 
                      - text: Delete
                - cell [ref=e184]:
                  - checkbox [ref=e186] [cursor=pointer]
                - cell [ref=e188]:
                  - checkbox [checked] [ref=e190] [cursor=pointer]
                - cell [ref=e192]:
                  - checkbox [checked] [ref=e194] [cursor=pointer]
                - cell "  " [ref=e196]:
                  - generic [ref=e197]:
                    - link "" [ref=e198] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e199]: 
                    - text:  
                  - link "" [ref=e200] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=66
                    - generic [ref=e201]: 
                  - generic "Xóa" [ref=e202]:
                    - generic [ref=e203]: 
              - row "1 Nhà cung cấp đồng phục võ thuật kinh nghiệm chọn đối tác Nhà cung cấp đồng phục võ thuật kinh nghiệm chọn đối tác  View  Edit  Copy  Delete   " [ref=e204]:
                - cell [ref=e205]:
                  - checkbox [ref=e207] [cursor=pointer]
                - cell "1" [ref=e209]:
                  - spinbutton [ref=e210]: "1"
                - cell "Nhà cung cấp đồng phục võ thuật kinh nghiệm chọn đối tác" [ref=e211]:
                  - link "Nhà cung cấp đồng phục võ thuật kinh nghiệm chọn đối tác" [ref=e212] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=65
                    - img "Nhà cung cấp đồng phục võ thuật kinh nghiệm chọn đối tác" [ref=e213]
                - cell "Nhà cung cấp đồng phục võ thuật kinh nghiệm chọn đối tác  View  Edit  Copy  Delete" [ref=e214]:
                  - link "Nhà cung cấp đồng phục võ thuật kinh nghiệm chọn đối tác" [ref=e215] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=65
                  - generic [ref=e216]:
                    - link " View" [ref=e217] [cursor=pointer]:
                      - /url: https://vophucthieudan.com/nha-cung-cap-dong-phuc-vo-thuat-kinh-nghiem-chon-doi-tac
                      - generic [ref=e218]: 
                      - text: View
                    - link " Edit" [ref=e219] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=65
                      - generic [ref=e220]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e221] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e222]: 
                        - text: Copy
                      - text:  
                    - generic "Nhà cung cấp đồng phục võ thuật kinh nghiệm chọn đối tác" [ref=e223] [cursor=pointer]:
                      - generic [ref=e224]: 
                      - text: Delete
                - cell [ref=e225]:
                  - checkbox [ref=e227] [cursor=pointer]
                - cell [ref=e229]:
                  - checkbox [checked] [ref=e231] [cursor=pointer]
                - cell [ref=e233]:
                  - checkbox [ref=e235] [cursor=pointer]
                - cell "  " [ref=e237]:
                  - generic [ref=e238]:
                    - link "" [ref=e239] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e240]: 
                    - text:  
                  - link "" [ref=e241] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=65
                    - generic [ref=e242]: 
                  - generic "Xóa" [ref=e243]:
                    - generic [ref=e244]: 
              - row "1 Xưởng sản xuất đồng phục võ thuật tiêu chí chọn xưởng uy tín Xưởng sản xuất đồng phục võ thuật tiêu chí chọn xưởng uy tín  View  Edit  Copy  Delete   " [ref=e245]:
                - cell [ref=e246]:
                  - checkbox [ref=e248] [cursor=pointer]
                - cell "1" [ref=e250]:
                  - spinbutton [ref=e251]: "1"
                - cell "Xưởng sản xuất đồng phục võ thuật tiêu chí chọn xưởng uy tín" [ref=e252]:
                  - link "Xưởng sản xuất đồng phục võ thuật tiêu chí chọn xưởng uy tín" [ref=e253] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=64
                    - img "Xưởng sản xuất đồng phục võ thuật tiêu chí chọn xưởng uy tín" [ref=e254]
                - cell "Xưởng sản xuất đồng phục võ thuật tiêu chí chọn xưởng uy tín  View  Edit  Copy  Delete" [ref=e255]:
                  - link "Xưởng sản xuất đồng phục võ thuật tiêu chí chọn xưởng uy tín" [ref=e256] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=64
                  - generic [ref=e257]:
                    - link " View" [ref=e258] [cursor=pointer]:
                      - /url: https://vophucthieudan.com/xuong-san-xuat-dong-phuc-vo-thuat-tieu-chi-chon-xuong-uy-tin
                      - generic [ref=e259]: 
                      - text: View
                    - link " Edit" [ref=e260] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=64
                      - generic [ref=e261]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e262] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e263]: 
                        - text: Copy
                      - text:  
                    - generic "Xưởng sản xuất đồng phục võ thuật tiêu chí chọn xưởng uy tín" [ref=e264] [cursor=pointer]:
                      - generic [ref=e265]: 
                      - text: Delete
                - cell [ref=e266]:
                  - checkbox [ref=e268] [cursor=pointer]
                - cell [ref=e270]:
                  - checkbox [checked] [ref=e272] [cursor=pointer]
                - cell [ref=e274]:
                  - checkbox [ref=e276] [cursor=pointer]
                - cell "  " [ref=e278]:
                  - generic [ref=e279]:
                    - link "" [ref=e280] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e281]: 
                    - text:  
                  - link "" [ref=e282] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=64
                    - generic [ref=e283]: 
                  - generic "Xóa" [ref=e284]:
                    - generic [ref=e285]: 
              - row "1 Bảo hộ võ thuật cách chọn đúng kích thước khi luyện tập Bảo hộ võ thuật cách chọn đúng kích thước khi luyện tập  View  Edit  Copy  Delete   " [ref=e286]:
                - cell [ref=e287]:
                  - checkbox [ref=e289] [cursor=pointer]
                - cell "1" [ref=e291]:
                  - spinbutton [ref=e292]: "1"
                - cell "Bảo hộ võ thuật cách chọn đúng kích thước khi luyện tập" [ref=e293]:
                  - link "Bảo hộ võ thuật cách chọn đúng kích thước khi luyện tập" [ref=e294] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=63
                    - img "Bảo hộ võ thuật cách chọn đúng kích thước khi luyện tập" [ref=e295]
                - cell "Bảo hộ võ thuật cách chọn đúng kích thước khi luyện tập  View  Edit  Copy  Delete" [ref=e296]:
                  - link "Bảo hộ võ thuật cách chọn đúng kích thước khi luyện tập" [ref=e297] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=63
                  - generic [ref=e298]:
                    - link " View" [ref=e299] [cursor=pointer]:
                      - /url: https://vophucthieudan.com/bao-ho-vo-thuat-cach-chon-dung-kich-thuoc-khi-luyen-tap
                      - generic [ref=e300]: 
                      - text: View
                    - link " Edit" [ref=e301] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=63
                      - generic [ref=e302]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e303] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e304]: 
                        - text: Copy
                      - text:  
                    - generic "Bảo hộ võ thuật cách chọn đúng kích thước khi luyện tập" [ref=e305] [cursor=pointer]:
                      - generic [ref=e306]: 
                      - text: Delete
                - cell [ref=e307]:
                  - checkbox [ref=e309] [cursor=pointer]
                - cell [ref=e311]:
                  - checkbox [checked] [ref=e313] [cursor=pointer]
                - cell [ref=e315]:
                  - checkbox [ref=e317] [cursor=pointer]
                - cell "  " [ref=e319]:
                  - generic [ref=e320]:
                    - link "" [ref=e321] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e322]: 
                    - text:  
                  - link "" [ref=e323] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=63
                    - generic [ref=e324]: 
                  - generic "Xóa" [ref=e325]:
                    - generic [ref=e326]: 
              - row "1 Bảo hộ võ thuật những món đồ cần thiết khi tập đối kháng Bảo hộ võ thuật những món đồ cần thiết khi tập đối kháng  View  Edit  Copy  Delete   " [ref=e327]:
                - cell [ref=e328]:
                  - checkbox [ref=e330] [cursor=pointer]
                - cell "1" [ref=e332]:
                  - spinbutton [ref=e333]: "1"
                - cell "Bảo hộ võ thuật những món đồ cần thiết khi tập đối kháng" [ref=e334]:
                  - link "Bảo hộ võ thuật những món đồ cần thiết khi tập đối kháng" [ref=e335] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=62
                    - img "Bảo hộ võ thuật những món đồ cần thiết khi tập đối kháng" [ref=e336]
                - cell "Bảo hộ võ thuật những món đồ cần thiết khi tập đối kháng  View  Edit  Copy  Delete" [ref=e337]:
                  - link "Bảo hộ võ thuật những món đồ cần thiết khi tập đối kháng" [ref=e338] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=62
                  - generic [ref=e339]:
                    - link " View" [ref=e340] [cursor=pointer]:
                      - /url: https://vophucthieudan.com/bao-ho-vo-thuat-nhung-mon-do-can-thiet-khi-tap-doi-khang
                      - generic [ref=e341]: 
                      - text: View
                    - link " Edit" [ref=e342] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=62
                      - generic [ref=e343]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e344] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e345]: 
                        - text: Copy
                      - text:  
                    - generic "Bảo hộ võ thuật những món đồ cần thiết khi tập đối kháng" [ref=e346] [cursor=pointer]:
                      - generic [ref=e347]: 
                      - text: Delete
                - cell [ref=e348]:
                  - checkbox [ref=e350] [cursor=pointer]
                - cell [ref=e352]:
                  - checkbox [checked] [ref=e354] [cursor=pointer]
                - cell [ref=e356]:
                  - checkbox [ref=e358] [cursor=pointer]
                - cell "  " [ref=e360]:
                  - generic [ref=e361]:
                    - link "" [ref=e362] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e363]: 
                    - text:  
                  - link "" [ref=e364] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=62
                    - generic [ref=e365]: 
                  - generic "Xóa" [ref=e366]:
                    - generic [ref=e367]: 
              - row "1 Dụng cụ võ thuật cách chọn đồ tập phù hợp từng môn Dụng cụ võ thuật cách chọn đồ tập phù hợp từng môn  View  Edit  Copy  Delete   " [ref=e368]:
                - cell [ref=e369]:
                  - checkbox [ref=e371] [cursor=pointer]
                - cell "1" [ref=e373]:
                  - spinbutton [ref=e374]: "1"
                - cell "Dụng cụ võ thuật cách chọn đồ tập phù hợp từng môn" [ref=e375]:
                  - link "Dụng cụ võ thuật cách chọn đồ tập phù hợp từng môn" [ref=e376] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=61
                    - img "Dụng cụ võ thuật cách chọn đồ tập phù hợp từng môn" [ref=e377]
                - cell "Dụng cụ võ thuật cách chọn đồ tập phù hợp từng môn  View  Edit  Copy  Delete" [ref=e378]:
                  - link "Dụng cụ võ thuật cách chọn đồ tập phù hợp từng môn" [ref=e379] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=61
                  - generic [ref=e380]:
                    - link " View" [ref=e381] [cursor=pointer]:
                      - /url: https://vophucthieudan.com/dung-cu-vo-thuat-cach-chon-do-tap-phu-hop-tung-mon
                      - generic [ref=e382]: 
                      - text: View
                    - link " Edit" [ref=e383] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=61
                      - generic [ref=e384]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e385] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e386]: 
                        - text: Copy
                      - text:  
                    - generic "Dụng cụ võ thuật cách chọn đồ tập phù hợp từng môn" [ref=e387] [cursor=pointer]:
                      - generic [ref=e388]: 
                      - text: Delete
                - cell [ref=e389]:
                  - checkbox [ref=e391] [cursor=pointer]
                - cell [ref=e393]:
                  - checkbox [checked] [ref=e395] [cursor=pointer]
                - cell [ref=e397]:
                  - checkbox [ref=e399] [cursor=pointer]
                - cell "  " [ref=e401]:
                  - generic [ref=e402]:
                    - link "" [ref=e403] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e404]: 
                    - text:  
                  - link "" [ref=e405] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=61
                    - generic [ref=e406]: 
                  - generic "Xóa" [ref=e407]:
                    - generic [ref=e408]: 
              - row "1 Dụng cụ võ thuật 7 món cần có cho người mới tập Dụng cụ võ thuật 7 món cần có cho người mới tập  View  Edit  Copy  Delete   " [ref=e409]:
                - cell [ref=e410]:
                  - checkbox [ref=e412] [cursor=pointer]
                - cell "1" [ref=e414]:
                  - spinbutton [ref=e415]: "1"
                - cell "Dụng cụ võ thuật 7 món cần có cho người mới tập" [ref=e416]:
                  - link "Dụng cụ võ thuật 7 món cần có cho người mới tập" [ref=e417] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=60
                    - img "Dụng cụ võ thuật 7 món cần có cho người mới tập" [ref=e418]
                - cell "Dụng cụ võ thuật 7 món cần có cho người mới tập  View  Edit  Copy  Delete" [ref=e419]:
                  - link "Dụng cụ võ thuật 7 món cần có cho người mới tập" [ref=e420] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=60
                  - generic [ref=e421]:
                    - link " View" [ref=e422] [cursor=pointer]:
                      - /url: https://vophucthieudan.com/dung-cu-vo-thuat-7-mon-can-co-cho-nguoi-moi-tap
                      - generic [ref=e423]: 
                      - text: View
                    - link " Edit" [ref=e424] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=60
                      - generic [ref=e425]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e426] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e427]: 
                        - text: Copy
                      - text:  
                    - generic "Dụng cụ võ thuật 7 món cần có cho người mới tập" [ref=e428] [cursor=pointer]:
                      - generic [ref=e429]: 
                      - text: Delete
                - cell [ref=e430]:
                  - checkbox [ref=e432] [cursor=pointer]
                - cell [ref=e434]:
                  - checkbox [checked] [ref=e436] [cursor=pointer]
                - cell [ref=e438]:
                  - checkbox [ref=e440] [cursor=pointer]
                - cell "  " [ref=e442]:
                  - generic [ref=e443]:
                    - link "" [ref=e444] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e445]: 
                    - text:  
                  - link "" [ref=e446] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=60
                    - generic [ref=e447]: 
                  - generic "Xóa" [ref=e448]:
                    - generic [ref=e449]: 
              - row "1 In thêu logo đồng phục võ thuật xu hướng thiết kế mới In thêu logo đồng phục võ thuật xu hướng thiết kế mới  View  Edit  Copy  Delete   " [ref=e450]:
                - cell [ref=e451]:
                  - checkbox [ref=e453] [cursor=pointer]
                - cell "1" [ref=e455]:
                  - spinbutton [ref=e456]: "1"
                - cell "In thêu logo đồng phục võ thuật xu hướng thiết kế mới" [ref=e457]:
                  - link "In thêu logo đồng phục võ thuật xu hướng thiết kế mới":
                    - /url: news?act=edit&type=tin-tuc&id=59
                    - img "In thêu logo đồng phục võ thuật xu hướng thiết kế mới"
                - cell "In thêu logo đồng phục võ thuật xu hướng thiết kế mới  View  Edit  Copy  Delete" [ref=e458]:
                  - link "In thêu logo đồng phục võ thuật xu hướng thiết kế mới" [ref=e459] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=59
                  - generic [ref=e460]:
                    - link " View" [ref=e461] [cursor=pointer]:
                      - /url: https://vophucthieudan.com/in-theu-logo-dong-phuc-vo-thuat-xu-huong-thiet-ke-moi
                      - generic [ref=e462]: 
                      - text: View
                    - link " Edit" [ref=e463] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=59
                      - generic [ref=e464]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e465] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e466]: 
                        - text: Copy
                      - text:  
                    - generic "In thêu logo đồng phục võ thuật xu hướng thiết kế mới" [ref=e467] [cursor=pointer]:
                      - generic [ref=e468]: 
                      - text: Delete
                - cell [ref=e469]:
                  - checkbox [ref=e471] [cursor=pointer]
                - cell [ref=e473]:
                  - checkbox [checked] [ref=e475] [cursor=pointer]
                - cell [ref=e477]:
                  - checkbox [ref=e479] [cursor=pointer]
                - cell "  " [ref=e481]:
                  - generic [ref=e482]:
                    - link "" [ref=e483] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e484]: 
                    - text:  
                  - link "" [ref=e485] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=59
                    - generic [ref=e486]: 
                  - generic "Xóa" [ref=e487]:
                    - generic [ref=e488]: 
              - row "1 In thêu logo đồng phục võ thuật nên chọn in hay thêu In thêu logo đồng phục võ thuật nên chọn in hay thêu  View  Edit  Copy  Delete   " [ref=e489]:
                - cell [ref=e490]:
                  - checkbox [ref=e492] [cursor=pointer]
                - cell "1" [ref=e494]:
                  - spinbutton [ref=e495]: "1"
                - cell "In thêu logo đồng phục võ thuật nên chọn in hay thêu" [ref=e496]:
                  - link "In thêu logo đồng phục võ thuật nên chọn in hay thêu" [ref=e497] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=58
                    - img "In thêu logo đồng phục võ thuật nên chọn in hay thêu" [ref=e498]
                - cell "In thêu logo đồng phục võ thuật nên chọn in hay thêu  View  Edit  Copy  Delete" [ref=e499]:
                  - link "In thêu logo đồng phục võ thuật nên chọn in hay thêu" [ref=e500] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=58
                  - generic [ref=e501]:
                    - link " View" [ref=e502] [cursor=pointer]:
                      - /url: https://vophucthieudan.com/in-theu-logo-dong-phuc-vo-thuat-nen-chon-in-hay-theu
                      - generic [ref=e503]: 
                      - text: View
                    - link " Edit" [ref=e504] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=58
                      - generic [ref=e505]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e506] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e507]: 
                        - text: Copy
                      - text:  
                    - generic "In thêu logo đồng phục võ thuật nên chọn in hay thêu" [ref=e508] [cursor=pointer]:
                      - generic [ref=e509]: 
                      - text: Delete
                - cell [ref=e510]:
                  - checkbox [ref=e512] [cursor=pointer]
                - cell [ref=e514]:
                  - checkbox [checked] [ref=e516] [cursor=pointer]
                - cell [ref=e518]:
                  - checkbox [ref=e520] [cursor=pointer]
                - cell "  " [ref=e522]:
                  - generic [ref=e523]:
                    - link "" [ref=e524] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e525]: 
                    - text:  
                  - link "" [ref=e526] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=58
                    - generic [ref=e527]: 
                  - generic "Xóa" [ref=e528]:
                    - generic [ref=e529]: 
              - row "1 May đồng phục võ thuật theo yêu cầu lưu ý trước khi đặt May đồng phục võ thuật theo yêu cầu lưu ý trước khi đặt  View  Edit  Copy  Delete   " [ref=e530]:
                - cell [ref=e531]:
                  - checkbox [ref=e533] [cursor=pointer]
                - cell "1" [ref=e535]:
                  - spinbutton [ref=e536]: "1"
                - cell "May đồng phục võ thuật theo yêu cầu lưu ý trước khi đặt" [ref=e537]:
                  - link "May đồng phục võ thuật theo yêu cầu lưu ý trước khi đặt":
                    - /url: news?act=edit&type=tin-tuc&id=57
                    - img "May đồng phục võ thuật theo yêu cầu lưu ý trước khi đặt"
                - cell "May đồng phục võ thuật theo yêu cầu lưu ý trước khi đặt  View  Edit  Copy  Delete" [ref=e538]:
                  - link "May đồng phục võ thuật theo yêu cầu lưu ý trước khi đặt" [ref=e539] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=57
                  - generic [ref=e540]:
                    - link " View" [ref=e541] [cursor=pointer]:
                      - /url: https://vophucthieudan.com/may-dong-phuc-vo-thuat-theo-yeu-cau-luu-y-truoc-khi-dat
                      - generic [ref=e542]: 
                      - text: View
                    - link " Edit" [ref=e543] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=57
                      - generic [ref=e544]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e545] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e546]: 
                        - text: Copy
                      - text:  
                    - generic "May đồng phục võ thuật theo yêu cầu lưu ý trước khi đặt" [ref=e547] [cursor=pointer]:
                      - generic [ref=e548]: 
                      - text: Delete
                - cell [ref=e549]:
                  - checkbox [ref=e551] [cursor=pointer]
                - cell [ref=e553]:
                  - checkbox [checked] [ref=e555] [cursor=pointer]
                - cell [ref=e557]:
                  - checkbox [ref=e559] [cursor=pointer]
                - cell "  " [ref=e561]:
                  - generic [ref=e562]:
                    - link "" [ref=e563] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e564]: 
                    - text:  
                  - link "" [ref=e565] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=57
                    - generic [ref=e566]: 
                  - generic "Xóa" [ref=e567]:
                    - generic [ref=e568]: 
        - list [ref=e570]:
          - listitem [ref=e571]:
            - generic [ref=e572]: Page 1 / 3
          - listitem [ref=e573]:
            - generic [ref=e574]: "1"
          - listitem [ref=e575]:
            - link "2" [ref=e576] [cursor=pointer]:
              - /url: news?act=man&type=tin-tuc&p=2
          - listitem [ref=e577]:
            - link "3" [ref=e578] [cursor=pointer]:
              - /url: news?act=man&type=tin-tuc&p=3
          - listitem [ref=e579]:
            - link "Next" [ref=e580] [cursor=pointer]:
              - /url: news?act=man&type=tin-tuc&p=2
          - listitem [ref=e581]:
            - link "Last" [ref=e582] [cursor=pointer]:
              - /url: news?act=man&type=tin-tuc&p=3
        - generic [ref=e583]:
          - link "+ Thêm mới" [ref=e584] [cursor=pointer]:
            - /url: news?act=add&type=tin-tuc
            - generic [ref=e585]: +
            - text: Thêm mới
          - generic "Xóa tất cả" [ref=e586] [cursor=pointer]:
            - generic [ref=e587]: 
            - text: Xóa tất cả
    - contentinfo [ref=e588]:
      - paragraph [ref=e591]:
        - strong [ref=e593]: Công Ty TNHH Thương Mại Dịch Vụ MIMA
        - text: MST
        - strong [ref=e594]: ":"
        - text: "0318672839"
        - strong [ref=e595]: "Địa chỉ:"
        - link [ref=e596] [cursor=pointer]:
          - /url: https://maps.app.goo.gl/rA8evCuRwT3Go6bR9
          - text: 31/3B Ấp Thới Tứ 1, Xã Đông Thạnh, TP Hồ Chí Minh
        - text: ", Việt Nam"
        - strong [ref=e597]: "Hotline:"
        - text: 0909 035 333
        - strong [ref=e598]: "Website:"
        - link [ref=e599] [cursor=pointer]:
          - /url: https://mimadigi.com
          - text: https://
        - link [ref=e600] [cursor=pointer]:
          - /url: https://mimadigi.com
          - text: mimadigi.com
        - strong [ref=e601]: "Email:"
        - text: info@mimadigi.com
        - link [ref=e602] [cursor=pointer]:
          - /url: //www.dmca.com/Protection/Status.aspx?ID=2f39ff2a-7db5-4e53-9bb6-15ee8957080c&refurl=https://mimadigi.com/
          - img [ref=e603]
        - link [ref=e604] [cursor=pointer]:
          - /url: http://online.gov.vn/Website/chi-tiet-134906
          - img [ref=e605]
  - generic [ref=e606]:
    - generic [ref=e607]: Tùy chỉnh
    - generic [ref=e609]:
      - generic [ref=e610]:
        - heading "Slidebar" [level=4] [ref=e611]
        - generic [ref=e612]:
          - button [ref=e613] [cursor=pointer]
          - button [ref=e614] [cursor=pointer]
          - button [ref=e615] [cursor=pointer]
          - button [ref=e616] [cursor=pointer]
          - button [ref=e617] [cursor=pointer]
          - button [ref=e618] [cursor=pointer]
          - button [ref=e619] [cursor=pointer]
          - button [ref=e620] [cursor=pointer]
          - button [ref=e621] [cursor=pointer]
          - button [ref=e622] [cursor=pointer]
          - button [ref=e623] [cursor=pointer]
          - button [ref=e624] [cursor=pointer]
          - button [ref=e625] [cursor=pointer]
          - button [ref=e626] [cursor=pointer]
          - button [ref=e627] [cursor=pointer]
          - button [ref=e628] [cursor=pointer]
      - generic [ref=e629]:
        - heading "Navbar Header" [level=4] [ref=e630]
        - generic [ref=e631]:
          - button [ref=e632] [cursor=pointer]
          - button [ref=e633] [cursor=pointer]
          - button [ref=e634] [cursor=pointer]
          - button [ref=e635] [cursor=pointer]
          - button [ref=e636] [cursor=pointer]
          - button [ref=e637] [cursor=pointer]
          - button [ref=e638] [cursor=pointer]
          - button [ref=e639] [cursor=pointer]
          - button [ref=e640] [cursor=pointer]
          - button [ref=e641] [cursor=pointer]
          - button [ref=e642] [cursor=pointer]
          - button [ref=e643] [cursor=pointer]
          - button [ref=e644] [cursor=pointer]
          - button [ref=e645] [cursor=pointer]
          - button [ref=e646] [cursor=pointer]
          - button [ref=e647] [cursor=pointer]
      - generic [ref=e648]:
        - heading "Light mode" [level=4] [ref=e649]
        - generic [ref=e651]:
          - generic [ref=e652]:
            - img "Light" [ref=e656] [cursor=pointer]
            - generic [ref=e657]: Light
          - generic [ref=e658]:
            - img "Dark" [ref=e662] [cursor=pointer]
            - generic [ref=e663]: Dark
          - generic [ref=e664]:
            - img "System" [ref=e668] [cursor=pointer]
            - generic [ref=e669]: System
      - generic [ref=e670]:
        - heading "Themes" [level=4] [ref=e671]
        - generic [ref=e673]:
          - generic [ref=e674]:
            - img "Default" [ref=e678] [cursor=pointer]
            - generic [ref=e679]: Default
          - generic [ref=e680]:
            - img "Bordered" [ref=e684] [cursor=pointer]
            - generic [ref=e685]: Bordered
          - generic [ref=e686]:
            - img "Semi Dark" [ref=e690] [cursor=pointer]
            - generic [ref=e691]: Semi Dark
    - generic [ref=e693] [cursor=pointer]: 
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
  130 |                 const afterLoadCount = await pageObj.getClientArticleCount(bulkPrefix);
  131 | 
  132 |                 // Bắt lỗi: Tổng số bài viết phải lớn hơn 30 hoặc 32
  133 |                 expect(
  134 |                     afterLoadCount,
  135 |                     `Lỗi: Tổng số ${itemTypeLabel} hiển thị (${afterLoadCount}) chưa vượt quá ngưỡng phân trang (30 bài)!`
  136 |                 ).toBeGreaterThan(30);
  137 | 
  138 |                 await TestHelper.takeScreenshot(page, `Đã load thêm ${itemTypeLabel} thành công`);
  139 |             });
  140 |         } finally {
  141 |             if (isCreated) {
  142 |                 await test.step(`bước 6: Dọn rác (Cleanup An Toàn Tuyệt Đối)`, async () => {
  143 |                     const baseUrl = process.env.BASE_URL?.endsWith('/') ? process.env.BASE_URL : process.env.BASE_URL + '/';
  144 |                     await page.goto(baseUrl + 'madmin/index.php');
  145 |                     await pageObj.gotoAdminMenu();
  146 | 
  147 |                     await pageObj.deleteArticlesWithPrefix(bulkPrefix);
  148 |                 });
  149 |             }
  150 |         }
  151 |     }
  152 | 
  153 |     /**
  154 |      * Shared helper to run bulk insert MANUALLY and pagination test across different modules
  155 |      */
  156 |     static async runManualBulkPaginationTest(
  157 |         page: Page,
  158 |         pageObj: any,
  159 |         baseTitle: string,
  160 |         baseSlug: string,
  161 |         imagePath: string,
  162 |         bulkPrefix: string,
  163 |         itemTypeLabel: string,
  164 |         options?: {
  165 |             addCount?: number,
  166 |             beforeSaveAction?: () => Promise<void>,
  167 |             desc?: string,
  168 |             content?: string,
  169 |             enData?: any
  170 |         }
  171 |     ) {
  172 |         const addCount = options?.addCount ?? 35;
  173 | 
  174 |         await test.step(`bước 1: Điều hướng đến trang admin quản lý ${itemTypeLabel}`, async () => {
  175 |             await pageObj.gotoAdminMenu();
  176 |         });
  177 | 
  178 |         // Với thêm thủ công, ta không cần thêm 1 bài gốc rồi copy 34 lần, mà có thể thêm trực tiếp addCount lần (hoặc giống logic cũ)
  179 |         await test.step(`bước 2 & 3: Thêm mới thủ công ${addCount} ${itemTypeLabel}`, async () => {
  180 |             if (options?.beforeSaveAction) {
  181 |                 await options.beforeSaveAction();
  182 |             }
  183 |             await pageObj.addBulkArticlesManually(
  184 |                 addCount,
  185 |                 baseTitle,
  186 |                 baseSlug,
  187 |                 options?.desc || `Mô tả cho ${itemTypeLabel} bulk test`,
  188 |                 options?.content || `Nội dung chi tiết cho ${itemTypeLabel} bulk test`,
  189 |                 imagePath,
  190 |                 options?.enData
  191 |             );
  192 |         });
  193 | 
  194 |         let isCreated = true;
  195 |         try {
  196 |             await test.step(`bước 4: Kiểm tra nút 'Xem thêm' hiển thị ngoài Website`, async () => {
  197 |                 const baseUrl = process.env.BASE_URL?.endsWith('/') ? process.env.BASE_URL : process.env.BASE_URL + '/';
  198 |                 await page.goto(baseUrl + pageObj['clientUrl']);
  199 | 
  200 |                 await pageObj.scrollToBottom();
  201 | 
  202 |                 await expect(
  203 |                     pageObj.loadMoreBtn,
  204 |                     `Lỗi nghiêm trọng: Không tìm thấy nút 'Xem thêm' phân trang ở cuối màn hình dù đã có hơn 30 ${itemTypeLabel}!`
  205 |                 ).toBeVisible({ timeout: 10000 });
  206 | 
  207 |                 await TestHelper.takeScreenshot(page, 'Nút Xem thêm hiển thị');
  208 |             });
  209 | 
  210 |             await test.step(`bước 5: Click nút Xem thêm và kiểm tra dữ liệu load thêm`, async () => {
  211 |                 const initialCount = await pageObj.getClientArticleCount(bulkPrefix);
  212 | 
```