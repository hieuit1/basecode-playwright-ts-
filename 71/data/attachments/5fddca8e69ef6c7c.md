# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin/news.spec.ts >> News Management Tests >> Bulk insert 35 news via Copy and verify Load More on website
- Location: tests/admin/news.spec.ts:134:13

# Error details

```
Test timeout of 600000ms exceeded.
```

```
Error: page.waitForLoadState: Test timeout of 600000ms exceeded.
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
          - link " 5" [ref=e18] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e19]: 
            - generic [ref=e20]: "5"
          - text:    
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
            - text:     
          - listitem [ref=e43]:
            - link " Quản lý Loại xe " [ref=e44] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e45]: 
              - paragraph [ref=e46]:
                - text: Quản lý Loại xe
                - generic [ref=e47]: 
            - text:  
          - listitem [ref=e48]:
            - link " Quản lý Bảng giá " [ref=e49] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e50]: 
              - paragraph [ref=e51]:
                - text: Quản lý Bảng giá
                - generic [ref=e52]: 
            - text: 
          - listitem [ref=e53]:
            - link " Quản lý Dịch vụ " [ref=e54] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e55]: 
              - paragraph [ref=e56]:
                - text: Quản lý Dịch vụ
                - generic [ref=e57]: 
            - text:   
          - listitem [ref=e58]:
            - link " Quản lý bài viết " [ref=e59] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e60]: 
              - paragraph [ref=e61]:
                - text: Quản lý bài viết
                - generic [ref=e62]: 
            - list [ref=e63]:
              - listitem [ref=e64]:
                - link " Tin tức" [ref=e65] [cursor=pointer]:
                  - /url: news?act=man&type=tin-tuc
                  - generic [ref=e66]: 
                  - paragraph [ref=e67]: Tin tức
              - listitem [ref=e68]:
                - link " Tuyến nổi bật" [ref=e69] [cursor=pointer]:
                  - /url: news?act=man&type=tuyen-noi-bat
                  - generic [ref=e70]: 
                  - paragraph [ref=e71]: Tuyến nổi bật
              - listitem [ref=e72]:
                - link " Quy trình làm việc" [ref=e73] [cursor=pointer]:
                  - /url: news?act=man&type=quytrinhlamviec
                  - generic [ref=e74]: 
                  - paragraph [ref=e75]: Quy trình làm việc
              - listitem [ref=e76]:
                - link " Tuyển dụng" [ref=e77] [cursor=pointer]:
                  - /url: news?act=man&type=tuyen-dung
                  - generic [ref=e78]: 
                  - paragraph [ref=e79]: Tuyển dụng
              - listitem [ref=e80]:
                - link " Feedback khách hàng" [ref=e81] [cursor=pointer]:
                  - /url: news?act=man&type=khach-hang
                  - generic [ref=e82]: 
                  - paragraph [ref=e83]: Feedback khách hàng
              - listitem [ref=e84]:
                - link " Thông số" [ref=e85] [cursor=pointer]:
                  - /url: news?act=man&type=thong-so
                  - generic [ref=e86]: 
                  - paragraph [ref=e87]: Thông số
              - listitem [ref=e88]:
                - link " Vì sao chọn chúng tôi" [ref=e89] [cursor=pointer]:
                  - /url: news?act=man&type=vi-sao
                  - generic [ref=e90]: 
                  - paragraph [ref=e91]: Vì sao chọn chúng tôi
              - listitem [ref=e92]:
                - link " Đơn hàng ảo" [ref=e93] [cursor=pointer]:
                  - /url: news?act=man&type=don-hang-ao
                  - generic [ref=e94]: 
                  - paragraph [ref=e95]: Đơn hàng ảo
              - listitem [ref=e96]:
                - link " Chính sách" [ref=e97] [cursor=pointer]:
                  - /url: news?act=man&type=chinh-sach
                  - generic [ref=e98]: 
                  - paragraph [ref=e99]: Chính sách
          - listitem [ref=e100]:
            - link " Quản lý nhận tin " [ref=e101] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e102]: 
              - paragraph [ref=e103]:
                - text: Quản lý nhận tin
                - generic [ref=e104]: 
            - text:   
          - listitem [ref=e105]:
            - link " Quản lý trang tĩnh " [ref=e106] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e107]: 
              - paragraph [ref=e108]:
                - text: Quản lý trang tĩnh
                - generic [ref=e109]: 
            - text:   
          - listitem [ref=e110]:
            - link " Quản lý hình ảnh - video " [ref=e111] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e112]: 
              - paragraph [ref=e113]:
                - text: Quản lý hình ảnh - video
                - generic [ref=e114]: 
            - text:        
          - listitem [ref=e115]:
            - link " Quản lý seo page " [ref=e116] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e117]: 
              - paragraph [ref=e118]:
                - text: Quản lý seo page
                - generic [ref=e119]: 
            - text:         
          - listitem [ref=e120]:
            - link " Thiết lập thông tin" [ref=e121] [cursor=pointer]:
              - /url: setting?act=update
              - generic [ref=e122]: 
              - paragraph [ref=e123]: Thiết lập thông tin
    - generic [ref=e124]:
      - list [ref=e128]:
        - listitem [ref=e129]:
          - link "Bảng điều khiển" [ref=e130] [cursor=pointer]:
            - /url: index.php
        - listitem [ref=e131]: / Tin tức
      - generic [ref=e132]:
        - generic [ref=e133]:
          - link "+ Thêm mới" [ref=e134] [cursor=pointer]:
            - /url: news?act=add&type=tin-tuc
            - generic [ref=e135]: +
            - text: Thêm mới
          - generic "Xóa tất cả" [ref=e136] [cursor=pointer]:
            - generic [ref=e137]: 
            - text: Xóa tất cả
          - generic [ref=e139]:
            - searchbox "Tìm kiếm" [ref=e140]
            - button "" [ref=e142] [cursor=pointer]:
              - generic [ref=e143]: 
          - generic [ref=e144]: Có (56) Tin tức
        - generic [ref=e145]:
          - heading "Danh sách Tin tức" [level=3] [ref=e147]
          - table [ref=e149]:
            - rowgroup [ref=e150]:
              - row "STT Hình Tiêu đề Nổi bật Hiển thị noindex Thao tác" [ref=e151]:
                - columnheader [ref=e152]:
                  - checkbox [ref=e154] [cursor=pointer]
                - columnheader "STT" [ref=e156]
                - columnheader "Hình" [ref=e157]
                - columnheader "Tiêu đề" [ref=e158]
                - columnheader "Nổi bật" [ref=e159]
                - columnheader "Hiển thị" [ref=e160]
                - columnheader "noindex" [ref=e161]
                - columnheader "Thao tác" [ref=e162]
            - rowgroup [ref=e163]:
              - row "0 [AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) [AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete   " [ref=e164]:
                - cell [ref=e165]:
                  - checkbox [ref=e167] [cursor=pointer]
                - cell "0" [ref=e169]:
                  - spinbutton [ref=e170]: "0"
                - cell "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e171]:
                  - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e172] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=165
                    - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e173]
                - cell "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete" [ref=e174]:
                  - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e175] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=165
                  - generic [ref=e176]:
                    - link " View" [ref=e177] [cursor=pointer]:
                      - /url: https://code5.mimadigi.vn/2026/july/thuexe_toconghop_000426W/auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787720255786-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                      - generic [ref=e178]: 
                      - text: View
                    - link " Edit" [ref=e179] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=165
                      - generic [ref=e180]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e181] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e182]: 
                        - text: Copy
                      - text:  
                    - generic "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e183] [cursor=pointer]:
                      - generic [ref=e184]: 
                      - text: Delete
                - cell [ref=e185]:
                  - checkbox [ref=e187] [cursor=pointer]
                - cell [ref=e189]:
                  - checkbox [checked] [ref=e191] [cursor=pointer]
                - cell [ref=e193]:
                  - checkbox [ref=e195] [cursor=pointer]
                - cell "  " [ref=e197]:
                  - generic [ref=e198]:
                    - link "" [ref=e199] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e200]: 
                    - text:  
                  - link "" [ref=e201] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=165
                    - generic [ref=e202]: 
                  - generic "Xóa" [ref=e203]:
                    - generic [ref=e204]: 
              - row "0 [AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) [AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete   " [ref=e205]:
                - cell [ref=e206]:
                  - checkbox [ref=e208] [cursor=pointer]
                - cell "0" [ref=e210]:
                  - spinbutton [ref=e211]: "0"
                - cell "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e212]:
                  - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e213] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=163
                    - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e214]
                - cell "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete" [ref=e215]:
                  - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e216] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=163
                  - generic [ref=e217]:
                    - link " View" [ref=e218] [cursor=pointer]:
                      - /url: https://code5.mimadigi.vn/2026/july/thuexe_toconghop_000426W/auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787720255786-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                      - generic [ref=e219]: 
                      - text: View
                    - link " Edit" [ref=e220] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=163
                      - generic [ref=e221]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e222] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e223]: 
                        - text: Copy
                      - text:  
                    - generic "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e224] [cursor=pointer]:
                      - generic [ref=e225]: 
                      - text: Delete
                - cell [ref=e226]:
                  - checkbox [ref=e228] [cursor=pointer]
                - cell [ref=e230]:
                  - checkbox [checked] [ref=e232] [cursor=pointer]
                - cell [ref=e234]:
                  - checkbox [ref=e236] [cursor=pointer]
                - cell "  " [ref=e238]:
                  - generic [ref=e239]:
                    - link "" [ref=e240] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e241]: 
                    - text:  
                  - link "" [ref=e242] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=163
                    - generic [ref=e243]: 
                  - generic "Xóa" [ref=e244]:
                    - generic [ref=e245]: 
              - row "0 [AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) [AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete   " [ref=e246]:
                - cell [ref=e247]:
                  - checkbox [ref=e249] [cursor=pointer]
                - cell "0" [ref=e251]:
                  - spinbutton [ref=e252]: "0"
                - cell "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e253]:
                  - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e254] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=161
                    - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e255]
                - cell "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete" [ref=e256]:
                  - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e257] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=161
                  - generic [ref=e258]:
                    - link " View" [ref=e259] [cursor=pointer]:
                      - /url: https://code5.mimadigi.vn/2026/july/thuexe_toconghop_000426W/auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787720255786-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                      - generic [ref=e260]: 
                      - text: View
                    - link " Edit" [ref=e261] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=161
                      - generic [ref=e262]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e263] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e264]: 
                        - text: Copy
                      - text:  
                    - generic "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e265] [cursor=pointer]:
                      - generic [ref=e266]: 
                      - text: Delete
                - cell [ref=e267]:
                  - checkbox [ref=e269] [cursor=pointer]
                - cell [ref=e271]:
                  - checkbox [checked] [ref=e273] [cursor=pointer]
                - cell [ref=e275]:
                  - checkbox [ref=e277] [cursor=pointer]
                - cell "  " [ref=e279]:
                  - generic [ref=e280]:
                    - link "" [ref=e281] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e282]: 
                    - text:  
                  - link "" [ref=e283] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=161
                    - generic [ref=e284]: 
                  - generic "Xóa" [ref=e285]:
                    - generic [ref=e286]: 
              - row "0 [AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) [AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete   " [ref=e287]:
                - cell [ref=e288]:
                  - checkbox [ref=e290] [cursor=pointer]
                - cell "0" [ref=e292]:
                  - spinbutton [ref=e293]: "0"
                - cell "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e294]:
                  - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e295] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=159
                    - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e296]
                - cell "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete" [ref=e297]:
                  - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e298] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=159
                  - generic [ref=e299]:
                    - link " View" [ref=e300] [cursor=pointer]:
                      - /url: https://code5.mimadigi.vn/2026/july/thuexe_toconghop_000426W/auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787720255786-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                      - generic [ref=e301]: 
                      - text: View
                    - link " Edit" [ref=e302] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=159
                      - generic [ref=e303]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e304] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e305]: 
                        - text: Copy
                      - text:  
                    - generic "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e306] [cursor=pointer]:
                      - generic [ref=e307]: 
                      - text: Delete
                - cell [ref=e308]:
                  - checkbox [ref=e310] [cursor=pointer]
                - cell [ref=e312]:
                  - checkbox [checked] [ref=e314] [cursor=pointer]
                - cell [ref=e316]:
                  - checkbox [ref=e318] [cursor=pointer]
                - cell "  " [ref=e320]:
                  - generic [ref=e321]:
                    - link "" [ref=e322] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e323]: 
                    - text:  
                  - link "" [ref=e324] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=159
                    - generic [ref=e325]: 
                  - generic "Xóa" [ref=e326]:
                    - generic [ref=e327]: 
              - row "0 [AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) [AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete   " [ref=e328]:
                - cell [ref=e329]:
                  - checkbox [ref=e331] [cursor=pointer]
                - cell "0" [ref=e333]:
                  - spinbutton [ref=e334]: "0"
                - cell "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e335]:
                  - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e336] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=157
                    - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e337]
                - cell "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete" [ref=e338]:
                  - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e339] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=157
                  - generic [ref=e340]:
                    - link " View" [ref=e341] [cursor=pointer]:
                      - /url: https://code5.mimadigi.vn/2026/july/thuexe_toconghop_000426W/auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787720255786-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                      - generic [ref=e342]: 
                      - text: View
                    - link " Edit" [ref=e343] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=157
                      - generic [ref=e344]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e345] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e346]: 
                        - text: Copy
                      - text:  
                    - generic "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e347] [cursor=pointer]:
                      - generic [ref=e348]: 
                      - text: Delete
                - cell [ref=e349]:
                  - checkbox [ref=e351] [cursor=pointer]
                - cell [ref=e353]:
                  - checkbox [checked] [ref=e355] [cursor=pointer]
                - cell [ref=e357]:
                  - checkbox [ref=e359] [cursor=pointer]
                - cell "  " [ref=e361]:
                  - generic [ref=e362]:
                    - link "" [ref=e363] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e364]: 
                    - text:  
                  - link "" [ref=e365] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=157
                    - generic [ref=e366]: 
                  - generic "Xóa" [ref=e367]:
                    - generic [ref=e368]: 
              - row "0 [AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) [AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete   " [ref=e369]:
                - cell [ref=e370]:
                  - checkbox [ref=e372] [cursor=pointer]
                - cell "0" [ref=e374]:
                  - spinbutton [ref=e375]: "0"
                - cell "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e376]:
                  - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e377] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=155
                    - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e378]
                - cell "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete" [ref=e379]:
                  - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e380] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=155
                  - generic [ref=e381]:
                    - link " View" [ref=e382] [cursor=pointer]:
                      - /url: https://code5.mimadigi.vn/2026/july/thuexe_toconghop_000426W/auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787720255786-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                      - generic [ref=e383]: 
                      - text: View
                    - link " Edit" [ref=e384] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=155
                      - generic [ref=e385]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e386] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e387]: 
                        - text: Copy
                      - text:  
                    - generic "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e388] [cursor=pointer]:
                      - generic [ref=e389]: 
                      - text: Delete
                - cell [ref=e390]:
                  - checkbox [ref=e392] [cursor=pointer]
                - cell [ref=e394]:
                  - checkbox [checked] [ref=e396] [cursor=pointer]
                - cell [ref=e398]:
                  - checkbox [ref=e400] [cursor=pointer]
                - cell "  " [ref=e402]:
                  - generic [ref=e403]:
                    - link "" [ref=e404] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e405]: 
                    - text:  
                  - link "" [ref=e406] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=155
                    - generic [ref=e407]: 
                  - generic "Xóa" [ref=e408]:
                    - generic [ref=e409]: 
              - row "0 [AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) [AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete   " [ref=e410]:
                - cell [ref=e411]:
                  - checkbox [ref=e413] [cursor=pointer]
                - cell "0" [ref=e415]:
                  - spinbutton [ref=e416]: "0"
                - cell "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e417]:
                  - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e418] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=153
                    - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e419]
                - cell "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete" [ref=e420]:
                  - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e421] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=153
                  - generic [ref=e422]:
                    - link " View" [ref=e423] [cursor=pointer]:
                      - /url: https://code5.mimadigi.vn/2026/july/thuexe_toconghop_000426W/auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787720255786-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                      - generic [ref=e424]: 
                      - text: View
                    - link " Edit" [ref=e425] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=153
                      - generic [ref=e426]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e427] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e428]: 
                        - text: Copy
                      - text:  
                    - generic "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e429] [cursor=pointer]:
                      - generic [ref=e430]: 
                      - text: Delete
                - cell [ref=e431]:
                  - checkbox [ref=e433] [cursor=pointer]
                - cell [ref=e435]:
                  - checkbox [checked] [ref=e437] [cursor=pointer]
                - cell [ref=e439]:
                  - checkbox [ref=e441] [cursor=pointer]
                - cell "  " [ref=e443]:
                  - generic [ref=e444]:
                    - link "" [ref=e445] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e446]: 
                    - text:  
                  - link "" [ref=e447] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=153
                    - generic [ref=e448]: 
                  - generic "Xóa" [ref=e449]:
                    - generic [ref=e450]: 
              - row "0 [AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) [AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete   " [ref=e451]:
                - cell [ref=e452]:
                  - checkbox [ref=e454] [cursor=pointer]
                - cell "0" [ref=e456]:
                  - spinbutton [ref=e457]: "0"
                - cell "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e458]:
                  - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e459] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=151
                    - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e460]
                - cell "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete" [ref=e461]:
                  - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e462] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=151
                  - generic [ref=e463]:
                    - link " View" [ref=e464] [cursor=pointer]:
                      - /url: https://code5.mimadigi.vn/2026/july/thuexe_toconghop_000426W/auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787720255786-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                      - generic [ref=e465]: 
                      - text: View
                    - link " Edit" [ref=e466] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=151
                      - generic [ref=e467]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e468] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e469]: 
                        - text: Copy
                      - text:  
                    - generic "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e470] [cursor=pointer]:
                      - generic [ref=e471]: 
                      - text: Delete
                - cell [ref=e472]:
                  - checkbox [ref=e474] [cursor=pointer]
                - cell [ref=e476]:
                  - checkbox [checked] [ref=e478] [cursor=pointer]
                - cell [ref=e480]:
                  - checkbox [ref=e482] [cursor=pointer]
                - cell "  " [ref=e484]:
                  - generic [ref=e485]:
                    - link "" [ref=e486] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e487]: 
                    - text:  
                  - link "" [ref=e488] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=151
                    - generic [ref=e489]: 
                  - generic "Xóa" [ref=e490]:
                    - generic [ref=e491]: 
              - row "0 [AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) [AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete   " [ref=e492]:
                - cell [ref=e493]:
                  - checkbox [ref=e495] [cursor=pointer]
                - cell "0" [ref=e497]:
                  - spinbutton [ref=e498]: "0"
                - cell "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e499]:
                  - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e500] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=149
                    - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e501]
                - cell "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete" [ref=e502]:
                  - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e503] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=149
                  - generic [ref=e504]:
                    - link " View" [ref=e505] [cursor=pointer]:
                      - /url: https://code5.mimadigi.vn/2026/july/thuexe_toconghop_000426W/auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787720255786-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                      - generic [ref=e506]: 
                      - text: View
                    - link " Edit" [ref=e507] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=149
                      - generic [ref=e508]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e509] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e510]: 
                        - text: Copy
                      - text:  
                    - generic "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e511] [cursor=pointer]:
                      - generic [ref=e512]: 
                      - text: Delete
                - cell [ref=e513]:
                  - checkbox [ref=e515] [cursor=pointer]
                - cell [ref=e517]:
                  - checkbox [checked] [ref=e519] [cursor=pointer]
                - cell [ref=e521]:
                  - checkbox [ref=e523] [cursor=pointer]
                - cell "  " [ref=e525]:
                  - generic [ref=e526]:
                    - link "" [ref=e527] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e528]: 
                    - text:  
                  - link "" [ref=e529] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=149
                    - generic [ref=e530]: 
                  - generic "Xóa" [ref=e531]:
                    - generic [ref=e532]: 
              - row "0 [AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) [AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete   " [ref=e533]:
                - cell [ref=e534]:
                  - checkbox [ref=e536] [cursor=pointer]
                - cell "0" [ref=e538]:
                  - spinbutton [ref=e539]: "0"
                - cell "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e540]:
                  - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e541] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=147
                    - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e542]
                - cell "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete" [ref=e543]:
                  - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e544] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=147
                  - generic [ref=e545]:
                    - link " View" [ref=e546] [cursor=pointer]:
                      - /url: https://code5.mimadigi.vn/2026/july/thuexe_toconghop_000426W/auto-test-tin-tuc-thuc-hien-qua-trinh-loadtest-1787720255786-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                      - generic [ref=e547]: 
                      - text: View
                    - link " Edit" [ref=e548] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=147
                      - generic [ref=e549]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e550] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e551]: 
                        - text: Copy
                      - text:  
                    - generic "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1787720255786 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e552] [cursor=pointer]:
                      - generic [ref=e553]: 
                      - text: Delete
                - cell [ref=e554]:
                  - checkbox [ref=e556] [cursor=pointer]
                - cell [ref=e558]:
                  - checkbox [checked] [ref=e560] [cursor=pointer]
                - cell [ref=e562]:
                  - checkbox [ref=e564] [cursor=pointer]
                - cell "  " [ref=e566]:
                  - generic [ref=e567]:
                    - link "" [ref=e568] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e569]: 
                    - text:  
                  - link "" [ref=e570] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=147
                    - generic [ref=e571]: 
                  - generic "Xóa" [ref=e572]:
                    - generic [ref=e573]: 
        - list [ref=e575]:
          - listitem [ref=e576]:
            - generic [ref=e577]: Page 1 / 6
          - listitem [ref=e578]:
            - generic [ref=e579]: "1"
          - listitem [ref=e580]:
            - link "2" [ref=e581] [cursor=pointer]:
              - /url: news?act=man&type=tin-tuc&p=2
          - listitem [ref=e582]:
            - link "3" [ref=e583] [cursor=pointer]:
              - /url: news?act=man&type=tin-tuc&p=3
          - listitem [ref=e584]:
            - link "4" [ref=e585] [cursor=pointer]:
              - /url: news?act=man&type=tin-tuc&p=4
          - listitem [ref=e586]:
            - link "5" [ref=e587] [cursor=pointer]:
              - /url: news?act=man&type=tin-tuc&p=5
          - listitem [ref=e588]:
            - link "6" [ref=e589] [cursor=pointer]:
              - /url: news?act=man&type=tin-tuc&p=6
          - listitem [ref=e590]:
            - link "Next" [ref=e591] [cursor=pointer]:
              - /url: news?act=man&type=tin-tuc&p=2
          - listitem [ref=e592]:
            - link "Last" [ref=e593] [cursor=pointer]:
              - /url: news?act=man&type=tin-tuc&p=6
        - generic [ref=e594]:
          - link "+ Thêm mới" [ref=e595] [cursor=pointer]:
            - /url: news?act=add&type=tin-tuc
            - generic [ref=e596]: +
            - text: Thêm mới
          - generic "Xóa tất cả" [ref=e597] [cursor=pointer]:
            - generic [ref=e598]: 
            - text: Xóa tất cả
    - contentinfo [ref=e599]:
      - paragraph [ref=e602]:
        - strong [ref=e604]: Công Ty TNHH Thương Mại Dịch Vụ MIMA
        - text: MST
        - strong [ref=e605]: ":"
        - text: "0318672839"
        - strong [ref=e606]: "Địa chỉ:"
        - link [ref=e607] [cursor=pointer]:
          - /url: https://maps.app.goo.gl/rA8evCuRwT3Go6bR9
          - text: 31/3B Ấp Thới Tứ 1, Xã Đông Thạnh, TP Hồ Chí Minh
        - text: ", Việt Nam"
        - strong [ref=e608]: "Hotline:"
        - text: 0909 035 333
        - strong [ref=e609]: "Website:"
        - link [ref=e610] [cursor=pointer]:
          - /url: https://mimadigi.com
          - text: https://
        - link [ref=e611] [cursor=pointer]:
          - /url: https://mimadigi.com
          - text: mimadigi.com
        - strong [ref=e612]: "Email:"
        - text: info@mimadigi.com
        - link [ref=e613] [cursor=pointer]:
          - /url: //www.dmca.com/Protection/Status.aspx?ID=2f39ff2a-7db5-4e53-9bb6-15ee8957080c&refurl=https://mimadigi.com/
          - img [ref=e614]
        - link [ref=e615] [cursor=pointer]:
          - /url: http://online.gov.vn/Website/chi-tiet-134906
          - img [ref=e616]
  - generic [ref=e617]:
    - generic [ref=e618]: Tùy chỉnh
    - generic [ref=e620]:
      - generic [ref=e621]:
        - heading "Slidebar" [level=4] [ref=e622]
        - generic [ref=e623]:
          - button [ref=e624] [cursor=pointer]
          - button [ref=e625] [cursor=pointer]
          - button [ref=e626] [cursor=pointer]
          - button [ref=e627] [cursor=pointer]
          - button [ref=e628] [cursor=pointer]
          - button [ref=e629] [cursor=pointer]
          - button [ref=e630] [cursor=pointer]
          - button [ref=e631] [cursor=pointer]
          - button [ref=e632] [cursor=pointer]
          - button [ref=e633] [cursor=pointer]
          - button [ref=e634] [cursor=pointer]
          - button [ref=e635] [cursor=pointer]
          - button [ref=e636] [cursor=pointer]
          - button [ref=e637] [cursor=pointer]
          - button [ref=e638] [cursor=pointer]
          - button [ref=e639] [cursor=pointer]
      - generic [ref=e640]:
        - heading "Navbar Header" [level=4] [ref=e641]
        - generic [ref=e642]:
          - button [ref=e643] [cursor=pointer]
          - button [ref=e644] [cursor=pointer]
          - button [ref=e645] [cursor=pointer]
          - button [ref=e646] [cursor=pointer]
          - button [ref=e647] [cursor=pointer]
          - button [ref=e648] [cursor=pointer]
          - button [ref=e649] [cursor=pointer]
          - button [ref=e650] [cursor=pointer]
          - button [ref=e651] [cursor=pointer]
          - button [ref=e652] [cursor=pointer]
          - button [ref=e653] [cursor=pointer]
          - button [ref=e654] [cursor=pointer]
          - button [ref=e655] [cursor=pointer]
          - button [ref=e656] [cursor=pointer]
          - button [ref=e657] [cursor=pointer]
          - button [ref=e658] [cursor=pointer]
      - generic [ref=e659]:
        - heading "Light mode" [level=4] [ref=e660]
        - generic [ref=e662]:
          - generic [ref=e663]:
            - generic [ref=e664] [cursor=pointer]:
              - generic:
                - generic:
                  - img "Light"
            - generic [ref=e665]: Light
          - generic [ref=e666]:
            - generic [ref=e667] [cursor=pointer]:
              - generic:
                - generic:
                  - img "Dark"
            - generic [ref=e668]: Dark
          - generic [ref=e669]:
            - generic [ref=e670] [cursor=pointer]:
              - generic:
                - generic:
                  - img "System"
            - generic [ref=e671]: System
      - generic [ref=e672]:
        - heading "Themes" [level=4] [ref=e673]
        - generic [ref=e675]:
          - generic [ref=e676]:
            - generic [ref=e677] [cursor=pointer]:
              - generic:
                - generic:
                  - img "Default"
            - generic [ref=e678]: Default
          - generic [ref=e679]:
            - generic [ref=e680] [cursor=pointer]:
              - generic:
                - generic:
                  - img "Bordered"
            - generic [ref=e681]: Bordered
          - generic [ref=e682]:
            - generic [ref=e683] [cursor=pointer]:
              - generic:
                - generic:
                  - img "Semi Dark"
            - generic [ref=e684]: Semi Dark
    - generic [ref=e686] [cursor=pointer]: 
```

# Test source

```ts
  460 |                     const articleItem = this.page.getByText(title, { exact: false }).first();
  461 |                     await articleItem.waitFor({ state: 'visible', timeout: 5000 });
  462 |                     found = true;
  463 |                     break;
  464 | 
  465 |                 } catch (error) {
  466 |                     // Tiếp tục vòng lặp thử URL tiếp theo
  467 |                 }
  468 |             }
  469 | 
  470 |             if (!found) {
  471 |                 throw new Error(`Không tìm thấy bài viết '${title}' trên các trang: ${urlsToTry.join(', ')}`);
  472 |             }
  473 |         });
  474 |     }
  475 | 
  476 |     async deleteArticle(title: string) {
  477 |         await test.step(`Xóa bài viết '${title}' trong Admin`, async () => {
  478 |             const dialogHandler = async (dialog: any) => {
  479 |                 await dialog.accept();
  480 |             };
  481 |             this.page.on('dialog', dialogHandler);
  482 | 
  483 |             // Thực hiện tìm kiếm bài viết trước để đảm bảo bài viết nằm ở trang 1 (Tránh lỗi do Bulk Test đẩy bài viết sang trang 2)
  484 |             try {
  485 |                 const searchInput = this.page.locator("input[placeholder*='Tìm kiếm' i], input#keyword, input[name='keyword']").first();
  486 |                 const searchBtn = this.page.locator("button, a").filter({ has: this.page.locator(".fa-search") }).first();
  487 | 
  488 |                 if (await searchInput.isVisible({ timeout: this.ELEMENT_DETECT_TIMEOUT })) {
  489 |                     await searchInput.fill(title);
  490 |                     if (await searchBtn.isVisible({ timeout: this.ELEMENT_DETECT_TIMEOUT })) {
  491 |                         await Promise.all([
  492 |                             this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 5000 }).catch(() => { }),
  493 |                             searchBtn.click()
  494 |                         ]);
  495 |                     } else {
  496 |                         await Promise.all([
  497 |                             this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 5000 }).catch(() => { }),
  498 |                             searchInput.press('Enter')
  499 |                         ]);
  500 |                     }
  501 |                     await TestHelper.delay(this.page, 1000);
  502 |                 }
  503 |             } catch (error) {
  504 |                 // Bỏ qua nếu không tìm thấy thanh tìm kiếm
  505 |             }
  506 | 
  507 |             // Đợi bảng dữ liệu load xong trước khi tìm row
  508 |             await this.tableRows.first().waitFor({ state: 'visible', timeout: 10000 }).catch(() => { });
  509 |             await TestHelper.delay(this.page, 500);
  510 | 
  511 |             const rowLocator = this.page.locator('tr').filter({ hasText: title }).first();
  512 | 
  513 |             try {
  514 |                 // Chờ thẻ tr xuất hiện
  515 |                 await rowLocator.waitFor({ state: 'attached', timeout: 5000 });
  516 | 
  517 |                 // Dùng CSS Selector tìm đúng thẻ <a> bọc ngoài icon trash
  518 |                 const deleteBtn = rowLocator.locator("a").filter({ has: this.page.locator(".fa-trash-alt, .fa-trash") }).first();
  519 |                 await deleteBtn.waitFor({ state: 'visible', timeout: 3000 });
  520 |                 await deleteBtn.click({ force: true });
  521 |             } catch (error) {
  522 |                 // Fallback cho giao diện dạng list (div, li)
  523 |                 const itemLocator = this.page.locator('div, li').filter({ hasText: title }).first();
  524 |                 await itemLocator.waitFor({ state: 'attached', timeout: 3000 }).catch(() => { });
  525 | 
  526 |                 const deleteBtn = itemLocator.locator("a").filter({ has: this.page.locator(".fa-trash-alt, .fa-trash") }).first();
  527 |                 if (await deleteBtn.isVisible().catch(() => false) || await deleteBtn.count() > 0) {
  528 |                     await deleteBtn.click({ force: true }).catch(() => { });
  529 |                 } else {
  530 |                     console.log(`Bỏ qua: Không tìm thấy nút xóa cho bài viết '${title}' (có thể đã bị xóa hoặc không tồn tại)`);
  531 |                 }
  532 |             }
  533 | 
  534 |             // Chờ modal xác nhận (SweetAlert) nếu có
  535 |             await this.confirmDeleteButton.waitFor({ state: 'visible', timeout: 5000 }).catch(() => { });
  536 |             if (await this.confirmDeleteButton.isVisible()) {
  537 |                 // Click Đồng ý và đợi load lại bảng để chắc chắn server đã xử lý xóa
  538 |                 await Promise.all([
  539 |                     this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 }).catch(() => {
  540 |                         // Fallback nếu web dùng AJAX để xóa thay vì reload trang
  541 |                         return this.page.waitForLoadState('networkidle', { timeout: 3000 }).catch(() => { });
  542 |                     }),
  543 |                     this.confirmDeleteButton.click({ force: true })
  544 |                 ]);
  545 |             }
  546 | 
  547 |             await TestHelper.delay(this.page, 2000);
  548 | 
  549 |             this.page.off('dialog', dialogHandler);
  550 |         });
  551 |     }
  552 | 
  553 |     async deleteArticlesWithPrefix(prefix: string) {
  554 |         await test.step(`Xóa hàng loạt các bài viết có tiền tố '${prefix}'`, async () => {
  555 |             let hasItemsToDelete = true;
  556 |             let emptyChecks = 0; // Đếm số lần không tìm thấy dữ liệu để retry
  557 | 
  558 |             while (hasItemsToDelete && emptyChecks < 3) {
  559 |                 // Đợi cho mạng ổn định một chút phòng trường hợp AJAX đang tải dữ liệu bảng mới
> 560 |                 await this.page.waitForLoadState('domcontentloaded');
      |                                 ^ Error: page.waitForLoadState: Test timeout of 600000ms exceeded.
  561 |                 await TestHelper.delay(this.page, 1500); // Thêm lại delay cứng nhỏ vì nếu web dùng AJAX thì loadState không bắt được
  562 | 
  563 |                 hasItemsToDelete = false;
  564 |                 const rows = await this.tableRows.all();
  565 |                 let clickedCount = 0;
  566 | 
  567 |                 for (const row of rows) {
  568 |                     const rowText = await row.innerText().catch(() => ""); // Bắt lỗi lỡ DOM bị detached
  569 | 
  570 |                     if (rowText.includes(prefix)) {
  571 |                         const rowCheckbox = row.locator('.select-checkbox').first();
  572 |                         if (await rowCheckbox.count() > 0) {
  573 |                             const isChecked = await rowCheckbox.evaluate((node: HTMLInputElement) => node.checked).catch(() => false);
  574 |                             if (!isChecked) {
  575 |                                 await rowCheckbox.evaluate((node: HTMLElement) => node.click()).catch(() => { });
  576 |                             }
  577 |                             clickedCount++;
  578 |                             hasItemsToDelete = true;
  579 |                         }
  580 |                     }
  581 |                 }
  582 | 
  583 |                 if (clickedCount > 0) {
  584 |                     emptyChecks = 0; // Đã tìm thấy và xóa, reset lại biến đếm
  585 |                     const dialogHandler = async (dialog: any) => {
  586 |                         await dialog.accept();
  587 |                     };
  588 |                     this.page.on('dialog', dialogHandler);
  589 | 
  590 |                     // Click xóa hàng loạt
  591 |                     await this.bulkDeleteBtn.evaluate((el: HTMLElement) => el.click());
  592 |                     await this.confirmDeleteButton.waitFor({ state: 'visible', timeout: 1500 }).catch(() => { });
  593 | 
  594 |                     if (await this.confirmDeleteButton.isVisible().catch(() => false)) {
  595 |                         // Click Đồng ý và đợi load lại bảng
  596 |                         await Promise.all([
  597 |                             this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 }).catch(() => { }),
  598 |                             this.confirmDeleteButton.click({ force: true }).catch(() => { })
  599 |                         ]);
  600 |                     } else {
  601 |                         await this.page.waitForLoadState('domcontentloaded', { timeout: 5000 }).catch(() => { });
  602 |                     }
  603 | 
  604 |                     this.page.off('dialog', dialogHandler);
  605 | 
  606 |                     // Thêm khoảng nghỉ sau khi xác nhận xóa để hệ thống server/AJAX kịp xử lý xong
  607 |                     await TestHelper.delay(this.page, 2000);
  608 |                 } else {
  609 |                     // Nếu không tìm thấy, có thể là do AJAX load chậm, ta tăng biến đếm và thử lại thay vì thoát luôn
  610 |                     emptyChecks++;
  611 |                     if (emptyChecks < 3) {
  612 |                         hasItemsToDelete = true; // Tiếp tục vòng lặp để thử lại
  613 |                         console.log(`Chưa thấy bài viết nào chứa '${prefix}', thử lại lần ${emptyChecks}...`);
  614 |                     }
  615 |                 }
  616 |             }
  617 |         });
  618 |     }
  619 | 
  620 |     async copyFirstItemAndShow(): Promise<boolean> {
  621 |         const MAX_COPY_RETRIES = 3;
  622 | 
  623 |         for (let attempt = 1; attempt <= MAX_COPY_RETRIES; attempt++) {
  624 |             const dialogHandler = async (dialog: any) => {
  625 |                 await dialog.accept();
  626 |             };
  627 |             this.page.on('dialog', dialogHandler);
  628 | 
  629 |             try {
  630 |                 // Đảm bảo đang ở trang danh sách trước khi thao tác copy
  631 |                 const isAtListBeforeCopy = await this.addNewButton.waitFor({ state: 'visible', timeout: 3000 }).then(() => true).catch(() => false);
  632 |                 if (!isAtListBeforeCopy) {
  633 |                     console.log(`⚠ Lần thử ${attempt}: Không ở trang danh sách trước khi copy, đang vào lại qua menu...`);
  634 |                     if (typeof (this as any).gotoAdminMenu === 'function') {
  635 |                         await (this as any).gotoAdminMenu();
  636 |                     }
  637 |                     await this.addNewButton.waitFor({ state: 'visible', timeout: 5000 }).catch(() => { });
  638 |                 }
  639 | 
  640 |                 const copyBtn = this.page.locator("a.copy-now").first();
  641 | 
  642 |                 // Mở dropdown bằng vòng lặp thử lại (tránh trường hợp JS chưa nhận click)
  643 |                 let copyVisible = false;
  644 |                 for (let i = 0; i < 3; i++) {
  645 |                     await this.firstCopyDropdownBtn.click({ force: true }).catch(() => { });
  646 |                     await copyBtn.waitFor({ state: 'visible', timeout: 500 }).catch(() => { });
  647 |                     if (await copyBtn.isVisible().catch(() => false)) {
  648 |                         copyVisible = true;
  649 |                         break;
  650 |                     }
  651 |                 }
  652 | 
  653 |                 if (!copyVisible) {
  654 |                     console.log(`⚠ Lần thử ${attempt}/${MAX_COPY_RETRIES}: Không tìm thấy nút Copy (Dropdown không hiển thị).`);
  655 |                     this.page.off('dialog', dialogHandler);
  656 | 
  657 |                     if (attempt < MAX_COPY_RETRIES) {
  658 |                         // Quay lại trang danh sách qua menu và thử lại
  659 |                         console.log(`   → Đang tự động quay lại trang danh sách để thử lại...`);
  660 |                         if (typeof (this as any).gotoAdminMenu === 'function') {
```