# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin/blog.spec.ts >> Blog Management Tests >> Add blog successfully and verify on website
- Location: tests/admin/blog.spec.ts:68:13

# Error details

```
Error: Không tìm thấy bài viết 'Blog Automation 1786575844095' trên các trang: blog
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
          - link " 0" [ref=e18] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e19]: 
            - generic [ref=e20]: "0"
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
            - text:   
          - listitem [ref=e43]:
            - link " Quản lý Sản phẩm " [ref=e44] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e45]: 
              - paragraph [ref=e46]:
                - text: Quản lý Sản phẩm
                - generic [ref=e47]: 
            - text:  
          - listitem [ref=e48]:
            - link " Quản lý Thư viện ảnh " [ref=e49] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e50]: 
              - paragraph [ref=e51]:
                - text: Quản lý Thư viện ảnh
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
                - link " BLOG" [ref=e65] [cursor=pointer]:
                  - /url: news?act=man&type=tin-tuc
                  - generic [ref=e66]: 
                  - paragraph [ref=e67]: BLOG
              - listitem [ref=e68]:
                - link " Dự án" [ref=e69] [cursor=pointer]:
                  - /url: news?act=man&type=du-an
                  - generic [ref=e70]: 
                  - paragraph [ref=e71]: Dự án
              - listitem [ref=e72]:
                - link " Câu hỏi thường gặp" [ref=e73] [cursor=pointer]:
                  - /url: news?act=man&type=cau-hoi
                  - generic [ref=e74]: 
                  - paragraph [ref=e75]: Câu hỏi thường gặp
              - listitem [ref=e76]:
                - link " Tiêu chí" [ref=e77] [cursor=pointer]:
                  - /url: news?act=man&type=tieu-chi
                  - generic [ref=e78]: 
                  - paragraph [ref=e79]: Tiêu chí
              - listitem [ref=e80]:
                - link " Văn hoá doanh nghiệp" [ref=e81] [cursor=pointer]:
                  - /url: news?act=man&type=van-hoa
                  - generic [ref=e82]: 
                  - paragraph [ref=e83]: Văn hoá doanh nghiệp
              - listitem [ref=e84]:
                - link " Chính sách" [ref=e85] [cursor=pointer]:
                  - /url: news?act=man&type=chinh-sach
                  - generic [ref=e86]: 
                  - paragraph [ref=e87]: Chính sách
              - listitem [ref=e88]:
                - link " Hệ thống xưởng in" [ref=e89] [cursor=pointer]:
                  - /url: news?act=man&type=xuong-in
                  - generic [ref=e90]: 
                  - paragraph [ref=e91]: Hệ thống xưởng in
          - listitem [ref=e92]:
            - link " Quản lý tags " [ref=e93] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e94]: 
              - paragraph [ref=e95]:
                - text: Quản lý tags
                - generic [ref=e96]: 
            - text: 
          - listitem [ref=e97]:
            - link " Quản lý nhận tin " [ref=e98] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e99]: 
              - paragraph [ref=e100]:
                - text: Quản lý nhận tin
                - generic [ref=e101]: 
            - text:  
          - listitem [ref=e102]:
            - link " Quản lý trang tĩnh " [ref=e103] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e104]: 
              - paragraph [ref=e105]:
                - text: Quản lý trang tĩnh
                - generic [ref=e106]: 
            - text:    
          - listitem [ref=e107]:
            - link " Quản lý hình ảnh - video " [ref=e108] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e109]: 
              - paragraph [ref=e110]:
                - text: Quản lý hình ảnh - video
                - generic [ref=e111]: 
            - text:          
          - listitem [ref=e112]:
            - link " Quản lý seo page " [ref=e113] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e114]: 
              - paragraph [ref=e115]:
                - text: Quản lý seo page
                - generic [ref=e116]: 
            - text:      
          - listitem [ref=e117]:
            - link " Thiết lập thông tin" [ref=e118] [cursor=pointer]:
              - /url: setting?act=update
              - generic [ref=e119]: 
              - paragraph [ref=e120]: Thiết lập thông tin
    - generic [ref=e121]:
      - list [ref=e125]:
        - listitem [ref=e126]:
          - link "Bảng điều khiển" [ref=e127] [cursor=pointer]:
            - /url: index.php
        - listitem [ref=e128]: / BLOG
      - generic [ref=e129]:
        - generic [ref=e130]:
          - link "+ Thêm mới" [ref=e131] [cursor=pointer]:
            - /url: news?act=add&type=tin-tuc
            - generic [ref=e132]: +
            - text: Thêm mới
          - generic "Xóa tất cả" [ref=e133] [cursor=pointer]:
            - generic [ref=e134]: 
            - text: Xóa tất cả
          - generic [ref=e136]:
            - searchbox "Tìm kiếm" [ref=e137]
            - button "" [ref=e139] [cursor=pointer]:
              - generic [ref=e140]: 
          - generic [ref=e141]: Có (95) BLOG
        - generic [ref=e142]:
          - heading "Danh sách BLOG" [level=3] [ref=e144]
          - table [ref=e146]:
            - rowgroup [ref=e147]:
              - row "STT Hình Tiêu đề Nổi bật Hiển thị Thao tác" [ref=e148]:
                - columnheader [ref=e149]:
                  - checkbox [ref=e151] [cursor=pointer]
                - columnheader "STT" [ref=e153]
                - columnheader "Hình" [ref=e154]
                - columnheader "Tiêu đề" [ref=e155]
                - columnheader "Nổi bật" [ref=e156]
                - columnheader "Hiển thị" [ref=e157]
                - columnheader "Thao tác" [ref=e158]
            - rowgroup [ref=e159]:
              - row "0 [AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) [AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete   " [ref=e160]:
                - cell [ref=e161]:
                  - checkbox [ref=e163] [cursor=pointer]
                - cell "0" [ref=e165]:
                  - spinbutton [ref=e166]: "0"
                - cell "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e167]:
                  - link "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e168] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11274
                    - img "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e169]
                - cell "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete" [ref=e170]:
                  - link "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e171] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11274
                  - generic [ref=e172]:
                    - link " View" [ref=e173] [cursor=pointer]:
                      - /url: https://inuvgiare24h.vn/auto-test-blog-loadtest-1786529092062-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                      - generic [ref=e174]: 
                      - text: View
                    - link " Edit" [ref=e175] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=11274
                      - generic [ref=e176]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e177] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e178]: 
                        - text: Copy
                      - text:  
                    - generic "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e179] [cursor=pointer]:
                      - generic [ref=e180]: 
                      - text: Delete
                - cell [ref=e181]:
                  - checkbox [ref=e183] [cursor=pointer]
                - cell [ref=e185]:
                  - checkbox [checked] [ref=e187] [cursor=pointer]
                - cell "  " [ref=e189]:
                  - generic [ref=e190]:
                    - link "" [ref=e191] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e192]: 
                    - text:  
                  - link "" [ref=e193] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11274
                    - generic [ref=e194]: 
                  - generic "Xóa" [ref=e195]:
                    - generic [ref=e196]: 
              - row "0 [AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) [AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete   " [ref=e197]:
                - cell [ref=e198]:
                  - checkbox [ref=e200] [cursor=pointer]
                - cell "0" [ref=e202]:
                  - spinbutton [ref=e203]: "0"
                - cell "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e204]:
                  - link "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e205] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11273
                    - img "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e206]
                - cell "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete" [ref=e207]:
                  - link "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e208] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11273
                  - generic [ref=e209]:
                    - link " View" [ref=e210] [cursor=pointer]:
                      - /url: https://inuvgiare24h.vn/auto-test-blog-loadtest-1786529092062-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                      - generic [ref=e211]: 
                      - text: View
                    - link " Edit" [ref=e212] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=11273
                      - generic [ref=e213]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e214] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e215]: 
                        - text: Copy
                      - text:  
                    - generic "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e216] [cursor=pointer]:
                      - generic [ref=e217]: 
                      - text: Delete
                - cell [ref=e218]:
                  - checkbox [ref=e220] [cursor=pointer]
                - cell [ref=e222]:
                  - checkbox [checked] [ref=e224] [cursor=pointer]
                - cell "  " [ref=e226]:
                  - generic [ref=e227]:
                    - link "" [ref=e228] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e229]: 
                    - text:  
                  - link "" [ref=e230] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11273
                    - generic [ref=e231]: 
                  - generic "Xóa" [ref=e232]:
                    - generic [ref=e233]: 
              - row "0 [AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) [AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete   " [ref=e234]:
                - cell [ref=e235]:
                  - checkbox [ref=e237] [cursor=pointer]
                - cell "0" [ref=e239]:
                  - spinbutton [ref=e240]: "0"
                - cell "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e241]:
                  - link "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e242] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11272
                    - img "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e243]
                - cell "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete" [ref=e244]:
                  - link "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e245] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11272
                  - generic [ref=e246]:
                    - link " View" [ref=e247] [cursor=pointer]:
                      - /url: https://inuvgiare24h.vn/auto-test-blog-loadtest-1786529092062-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                      - generic [ref=e248]: 
                      - text: View
                    - link " Edit" [ref=e249] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=11272
                      - generic [ref=e250]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e251] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e252]: 
                        - text: Copy
                      - text:  
                    - generic "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e253] [cursor=pointer]:
                      - generic [ref=e254]: 
                      - text: Delete
                - cell [ref=e255]:
                  - checkbox [ref=e257] [cursor=pointer]
                - cell [ref=e259]:
                  - checkbox [checked] [ref=e261] [cursor=pointer]
                - cell "  " [ref=e263]:
                  - generic [ref=e264]:
                    - link "" [ref=e265] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e266]: 
                    - text:  
                  - link "" [ref=e267] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11272
                    - generic [ref=e268]: 
                  - generic "Xóa" [ref=e269]:
                    - generic [ref=e270]: 
              - row "0 [AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) [AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete   " [ref=e271]:
                - cell [ref=e272]:
                  - checkbox [ref=e274] [cursor=pointer]
                - cell "0" [ref=e276]:
                  - spinbutton [ref=e277]: "0"
                - cell "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e278]:
                  - link "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e279] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11271
                    - img "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e280]
                - cell "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete" [ref=e281]:
                  - link "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e282] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11271
                  - generic [ref=e283]:
                    - link " View" [ref=e284] [cursor=pointer]:
                      - /url: https://inuvgiare24h.vn/auto-test-blog-loadtest-1786529092062-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                      - generic [ref=e285]: 
                      - text: View
                    - link " Edit" [ref=e286] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=11271
                      - generic [ref=e287]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e288] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e289]: 
                        - text: Copy
                      - text:  
                    - generic "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e290] [cursor=pointer]:
                      - generic [ref=e291]: 
                      - text: Delete
                - cell [ref=e292]:
                  - checkbox [ref=e294] [cursor=pointer]
                - cell [ref=e296]:
                  - checkbox [checked] [ref=e298] [cursor=pointer]
                - cell "  " [ref=e300]:
                  - generic [ref=e301]:
                    - link "" [ref=e302] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e303]: 
                    - text:  
                  - link "" [ref=e304] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11271
                    - generic [ref=e305]: 
                  - generic "Xóa" [ref=e306]:
                    - generic [ref=e307]: 
              - row "0 [AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) [AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete   " [ref=e308]:
                - cell [ref=e309]:
                  - checkbox [ref=e311] [cursor=pointer]
                - cell "0" [ref=e313]:
                  - spinbutton [ref=e314]: "0"
                - cell "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e315]:
                  - link "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e316] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11270
                    - img "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e317]
                - cell "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete" [ref=e318]:
                  - link "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e319] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11270
                  - generic [ref=e320]:
                    - link " View" [ref=e321] [cursor=pointer]:
                      - /url: https://inuvgiare24h.vn/auto-test-blog-loadtest-1786529092062-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                      - generic [ref=e322]: 
                      - text: View
                    - link " Edit" [ref=e323] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=11270
                      - generic [ref=e324]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e325] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e326]: 
                        - text: Copy
                      - text:  
                    - generic "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e327] [cursor=pointer]:
                      - generic [ref=e328]: 
                      - text: Delete
                - cell [ref=e329]:
                  - checkbox [ref=e331] [cursor=pointer]
                - cell [ref=e333]:
                  - checkbox [checked] [ref=e335] [cursor=pointer]
                - cell "  " [ref=e337]:
                  - generic [ref=e338]:
                    - link "" [ref=e339] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e340]: 
                    - text:  
                  - link "" [ref=e341] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11270
                    - generic [ref=e342]: 
                  - generic "Xóa" [ref=e343]:
                    - generic [ref=e344]: 
              - row "0 [AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) [AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete   " [ref=e345]:
                - cell [ref=e346]:
                  - checkbox [ref=e348] [cursor=pointer]
                - cell "0" [ref=e350]:
                  - spinbutton [ref=e351]: "0"
                - cell "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e352]:
                  - link "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e353] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11269
                    - img "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e354]
                - cell "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete" [ref=e355]:
                  - link "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e356] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11269
                  - generic [ref=e357]:
                    - link " View" [ref=e358] [cursor=pointer]:
                      - /url: https://inuvgiare24h.vn/auto-test-blog-loadtest-1786529092062-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                      - generic [ref=e359]: 
                      - text: View
                    - link " Edit" [ref=e360] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=11269
                      - generic [ref=e361]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e362] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e363]: 
                        - text: Copy
                      - text:  
                    - generic "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e364] [cursor=pointer]:
                      - generic [ref=e365]: 
                      - text: Delete
                - cell [ref=e366]:
                  - checkbox [ref=e368] [cursor=pointer]
                - cell [ref=e370]:
                  - checkbox [checked] [ref=e372] [cursor=pointer]
                - cell "  " [ref=e374]:
                  - generic [ref=e375]:
                    - link "" [ref=e376] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e377]: 
                    - text:  
                  - link "" [ref=e378] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11269
                    - generic [ref=e379]: 
                  - generic "Xóa" [ref=e380]:
                    - generic [ref=e381]: 
              - row "0 [AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) [AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete   " [ref=e382]:
                - cell [ref=e383]:
                  - checkbox [ref=e385] [cursor=pointer]
                - cell "0" [ref=e387]:
                  - spinbutton [ref=e388]: "0"
                - cell "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e389]:
                  - link "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e390] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11268
                    - img "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e391]
                - cell "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete" [ref=e392]:
                  - link "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e393] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11268
                  - generic [ref=e394]:
                    - link " View" [ref=e395] [cursor=pointer]:
                      - /url: https://inuvgiare24h.vn/auto-test-blog-loadtest-1786529092062-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                      - generic [ref=e396]: 
                      - text: View
                    - link " Edit" [ref=e397] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=11268
                      - generic [ref=e398]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e399] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e400]: 
                        - text: Copy
                      - text:  
                    - generic "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e401] [cursor=pointer]:
                      - generic [ref=e402]: 
                      - text: Delete
                - cell [ref=e403]:
                  - checkbox [ref=e405] [cursor=pointer]
                - cell [ref=e407]:
                  - checkbox [checked] [ref=e409] [cursor=pointer]
                - cell "  " [ref=e411]:
                  - generic [ref=e412]:
                    - link "" [ref=e413] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e414]: 
                    - text:  
                  - link "" [ref=e415] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11268
                    - generic [ref=e416]: 
                  - generic "Xóa" [ref=e417]:
                    - generic [ref=e418]: 
              - row "0 [AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) [AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete   " [ref=e419]:
                - cell [ref=e420]:
                  - checkbox [ref=e422] [cursor=pointer]
                - cell "0" [ref=e424]:
                  - spinbutton [ref=e425]: "0"
                - cell "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e426]:
                  - link "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e427] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11267
                    - img "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e428]
                - cell "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete" [ref=e429]:
                  - link "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e430] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11267
                  - generic [ref=e431]:
                    - link " View" [ref=e432] [cursor=pointer]:
                      - /url: https://inuvgiare24h.vn/auto-test-blog-loadtest-1786529092062-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                      - generic [ref=e433]: 
                      - text: View
                    - link " Edit" [ref=e434] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=11267
                      - generic [ref=e435]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e436] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e437]: 
                        - text: Copy
                      - text:  
                    - generic "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e438] [cursor=pointer]:
                      - generic [ref=e439]: 
                      - text: Delete
                - cell [ref=e440]:
                  - checkbox [ref=e442] [cursor=pointer]
                - cell [ref=e444]:
                  - checkbox [checked] [ref=e446] [cursor=pointer]
                - cell "  " [ref=e448]:
                  - generic [ref=e449]:
                    - link "" [ref=e450] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e451]: 
                    - text:  
                  - link "" [ref=e452] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11267
                    - generic [ref=e453]: 
                  - generic "Xóa" [ref=e454]:
                    - generic [ref=e455]: 
              - row "0 [AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) [AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete   " [ref=e456]:
                - cell [ref=e457]:
                  - checkbox [ref=e459] [cursor=pointer]
                - cell "0" [ref=e461]:
                  - spinbutton [ref=e462]: "0"
                - cell "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e463]:
                  - link "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e464] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11266
                    - img "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e465]
                - cell "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete" [ref=e466]:
                  - link "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e467] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11266
                  - generic [ref=e468]:
                    - link " View" [ref=e469] [cursor=pointer]:
                      - /url: https://inuvgiare24h.vn/auto-test-blog-loadtest-1786529092062-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                      - generic [ref=e470]: 
                      - text: View
                    - link " Edit" [ref=e471] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=11266
                      - generic [ref=e472]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e473] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e474]: 
                        - text: Copy
                      - text:  
                    - generic "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e475] [cursor=pointer]:
                      - generic [ref=e476]: 
                      - text: Delete
                - cell [ref=e477]:
                  - checkbox [ref=e479] [cursor=pointer]
                - cell [ref=e481]:
                  - checkbox [checked] [ref=e483] [cursor=pointer]
                - cell "  " [ref=e485]:
                  - generic [ref=e486]:
                    - link "" [ref=e487] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e488]: 
                    - text:  
                  - link "" [ref=e489] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11266
                    - generic [ref=e490]: 
                  - generic "Xóa" [ref=e491]:
                    - generic [ref=e492]: 
              - row "0 [AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) [AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete   " [ref=e493]:
                - cell [ref=e494]:
                  - checkbox [ref=e496] [cursor=pointer]
                - cell "0" [ref=e498]:
                  - spinbutton [ref=e499]: "0"
                - cell "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e500]:
                  - link "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e501] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11265
                    - img "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e502]
                - cell "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)  View  Edit  Copy  Delete" [ref=e503]:
                  - link "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e504] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11265
                  - generic [ref=e505]:
                    - link " View" [ref=e506] [cursor=pointer]:
                      - /url: https://inuvgiare24h.vn/auto-test-blog-loadtest-1786529092062-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                      - generic [ref=e507]: 
                      - text: View
                    - link " Edit" [ref=e508] [cursor=pointer]:
                      - /url: news?act=edit&type=tin-tuc&id=11265
                      - generic [ref=e509]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e510] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e511]: 
                        - text: Copy
                      - text:  
                    - generic "[AUTO-TEST] Blog LoadTest 1786529092062 (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)" [ref=e512] [cursor=pointer]:
                      - generic [ref=e513]: 
                      - text: Delete
                - cell [ref=e514]:
                  - checkbox [ref=e516] [cursor=pointer]
                - cell [ref=e518]:
                  - checkbox [checked] [ref=e520] [cursor=pointer]
                - cell "  " [ref=e522]:
                  - generic [ref=e523]:
                    - link "" [ref=e524] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e525]: 
                    - text:  
                  - link "" [ref=e526] [cursor=pointer]:
                    - /url: news?act=edit&type=tin-tuc&id=11265
                    - generic [ref=e527]: 
                  - generic "Xóa" [ref=e528]:
                    - generic [ref=e529]: 
        - list [ref=e531]:
          - listitem [ref=e532]:
            - generic [ref=e533]: Page 1 / 10
          - listitem [ref=e534]:
            - generic [ref=e535]: "1"
          - listitem [ref=e536]:
            - link "2" [ref=e537] [cursor=pointer]:
              - /url: news?act=man&type=tin-tuc&p=2
          - listitem [ref=e538]:
            - link "3" [ref=e539] [cursor=pointer]:
              - /url: news?act=man&type=tin-tuc&p=3
          - listitem [ref=e540]:
            - link "4" [ref=e541] [cursor=pointer]:
              - /url: news?act=man&type=tin-tuc&p=4
          - listitem [ref=e542]:
            - link "5" [ref=e543] [cursor=pointer]:
              - /url: news?act=man&type=tin-tuc&p=5
          - listitem [ref=e544]:
            - link "6" [ref=e545] [cursor=pointer]:
              - /url: news?act=man&type=tin-tuc&p=6
          - listitem [ref=e546]:
            - link "7" [ref=e547] [cursor=pointer]:
              - /url: news?act=man&type=tin-tuc&p=7
          - listitem [ref=e548]:
            - link "8" [ref=e549] [cursor=pointer]:
              - /url: news?act=man&type=tin-tuc&p=8
          - listitem [ref=e550]:
            - link "9" [ref=e551] [cursor=pointer]:
              - /url: news?act=man&type=tin-tuc&p=9
          - listitem [ref=e552]:
            - link "10" [ref=e553] [cursor=pointer]:
              - /url: news?act=man&type=tin-tuc&p=10
          - listitem [ref=e554]:
            - link "Next" [ref=e555] [cursor=pointer]:
              - /url: news?act=man&type=tin-tuc&p=2
          - listitem [ref=e556]:
            - link "Last" [ref=e557] [cursor=pointer]:
              - /url: news?act=man&type=tin-tuc&p=10
        - generic [ref=e558]:
          - link "+ Thêm mới" [ref=e559] [cursor=pointer]:
            - /url: news?act=add&type=tin-tuc
            - generic [ref=e560]: +
            - text: Thêm mới
          - generic "Xóa tất cả" [ref=e561] [cursor=pointer]:
            - generic [ref=e562]: 
            - text: Xóa tất cả
    - contentinfo [ref=e563]:
      - paragraph [ref=e566]:
        - strong [ref=e568]: Công Ty TNHH Thương Mại Dịch Vụ MIMA
        - text: MST
        - strong [ref=e569]: ":"
        - text: "0318672839"
        - strong [ref=e570]: "Địa chỉ:"
        - link [ref=e571] [cursor=pointer]:
          - /url: https://maps.app.goo.gl/rA8evCuRwT3Go6bR9
          - text: 31/3B Ấp Thới Tứ 1, Xã Đông Thạnh, TP Hồ Chí Minh
        - text: ", Việt Nam"
        - strong [ref=e572]: "Hotline:"
        - text: 0909 035 333
        - strong [ref=e573]: "Website:"
        - link [ref=e574] [cursor=pointer]:
          - /url: https://mimadigi.com
          - text: https://
        - link [ref=e575] [cursor=pointer]:
          - /url: https://mimadigi.com
          - text: mimadigi.com
        - strong [ref=e576]: "Email:"
        - text: info@mimadigi.com
        - link [ref=e577] [cursor=pointer]:
          - /url: //www.dmca.com/Protection/Status.aspx?ID=2f39ff2a-7db5-4e53-9bb6-15ee8957080c&refurl=https://mimadigi.com/
          - img [ref=e578]
        - link [ref=e579] [cursor=pointer]:
          - /url: http://online.gov.vn/Website/chi-tiet-134906
          - img [ref=e580]
  - generic [ref=e581]:
    - generic [ref=e582]: Tùy chỉnh
    - generic [ref=e584]:
      - generic [ref=e585]:
        - heading "Slidebar" [level=4] [ref=e586]
        - generic [ref=e587]:
          - button [ref=e588] [cursor=pointer]
          - button [ref=e589] [cursor=pointer]
          - button [ref=e590] [cursor=pointer]
          - button [ref=e591] [cursor=pointer]
          - button [ref=e592] [cursor=pointer]
          - button [ref=e593] [cursor=pointer]
          - button [ref=e594] [cursor=pointer]
          - button [ref=e595] [cursor=pointer]
          - button [ref=e596] [cursor=pointer]
          - button [ref=e597] [cursor=pointer]
          - button [ref=e598] [cursor=pointer]
          - button [ref=e599] [cursor=pointer]
          - button [ref=e600] [cursor=pointer]
          - button [ref=e601] [cursor=pointer]
          - button [ref=e602] [cursor=pointer]
          - button [ref=e603] [cursor=pointer]
      - generic [ref=e604]:
        - heading "Navbar Header" [level=4] [ref=e605]
        - generic [ref=e606]:
          - button [ref=e607] [cursor=pointer]
          - button [ref=e608] [cursor=pointer]
          - button [ref=e609] [cursor=pointer]
          - button [ref=e610] [cursor=pointer]
          - button [ref=e611] [cursor=pointer]
          - button [ref=e612] [cursor=pointer]
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
      - generic [ref=e623]:
        - heading "Light mode" [level=4] [ref=e624]
        - generic [ref=e626]:
          - generic [ref=e627]:
            - img "Light" [ref=e631] [cursor=pointer]
            - generic [ref=e632]: Light
          - generic [ref=e633]:
            - img "Dark" [ref=e637] [cursor=pointer]
            - generic [ref=e638]: Dark
          - generic [ref=e639]:
            - img "System" [ref=e643] [cursor=pointer]
            - generic [ref=e644]: System
      - generic [ref=e645]:
        - heading "Themes" [level=4] [ref=e646]
        - generic [ref=e648]:
          - generic [ref=e649]:
            - img "Default" [ref=e653] [cursor=pointer]
            - generic [ref=e654]: Default
          - generic [ref=e655]:
            - img "Bordered" [ref=e659] [cursor=pointer]
            - generic [ref=e660]: Bordered
          - generic [ref=e661]:
            - img "Semi Dark" [ref=e665] [cursor=pointer]
            - generic [ref=e666]: Semi Dark
    - generic [ref=e668] [cursor=pointer]: 
  - img
```

# Test source

```ts
  269 | 
  270 |             if (descHtml) {
  271 |                 await this.descviHtml.fill(descHtml);
  272 |             }
  273 | 
  274 |             if (contentHtml) {
  275 |                 try {
  276 |                     await this.contentviHtml.fill(contentHtml, { timeout: 2000 });
  277 |                 } catch (e) {
  278 |                     const frame = this.page.frameLocator("iframe.cke_wysiwyg_frame").first();
  279 |                     await frame.locator("body").fill(contentHtml);
  280 |                 }
  281 |             }
  282 | 
  283 |             if (thongsoHtml) {
  284 |                 await this.thongsoviHtml.fill(thongsoHtml);
  285 |             }
  286 | 
  287 |             // ===== PHẦN NỘI DUNG SẢN PHẨM (EN) — chỉ chạy nếu có enData =====
  288 |             if (hasEnData) {
  289 |                 const contentTabEnVisible = await this.contentTabEn.isVisible({ timeout: 2000 }).catch(() => false);
  290 |                 if (contentTabEnVisible) {
  291 |                     await this.clickOn(this.contentTabEn);
  292 | 
  293 |                     if (enData?.titleEn) await this.typeInto(this.titleEnInput, enData.titleEn);
  294 | 
  295 |                     if (enData?.descEn) {
  296 |                         try {
  297 |                             await this.descEnHtml.fill(enData.descEn, { timeout: 2000 });
  298 |                         } catch (e) {
  299 |                             console.log('CẢNH BÁO: Không thể fill desc EN qua frameLocator, bỏ qua.');
  300 |                         }
  301 |                     }
  302 | 
  303 |                     if (enData?.contentEn) {
  304 |                         try {
  305 |                             await this.contentEnHtml.fill(enData.contentEn, { timeout: 2000 });
  306 |                         } catch (e) {
  307 |                             // Fallback nếu CKEditor EN chưa khởi tạo
  308 |                             console.log('CẢNH BÁO: Không thể fill content EN qua frameLocator, bỏ qua.');
  309 |                         }
  310 |                     }
  311 | 
  312 |                     if (enData?.thongsoEn) {
  313 |                         try {
  314 |                             await this.thongsoEnHtml.fill(enData.thongsoEn, { timeout: 2000 });
  315 |                         } catch (e) {
  316 |                             console.log('CẢNH BÁO: Không thể fill thongso EN qua frameLocator, bỏ qua.');
  317 |                         }
  318 |                     }
  319 |                 }
  320 |             }
  321 | 
  322 |             // ===== PHẦN HÌNH ẢNH (không có tab ngôn ngữ) =====
  323 |             if (imagePath) {
  324 |                 const fileChooserPromise = this.page.waitForEvent('filechooser');
  325 |                 await this.clickOn(this.imageUploadButton);
  326 |                 const fileChooser = await fileChooserPromise;
  327 |                 await fileChooser.setFiles(imagePath);
  328 |                 await TestHelper.delay(this.page, 3000);
  329 |             }
  330 | 
  331 |             if (galleryPaths && galleryPaths.length > 0) {
  332 |                 const fileChooserPromise = this.page.waitForEvent('filechooser');
  333 |                 await this.clickOn(this.galleryUploadButton);
  334 |                 const fileChooser = await fileChooserPromise;
  335 |                 await fileChooser.setFiles(galleryPaths);
  336 |                 await TestHelper.delay(this.page, 3000);
  337 |             }
  338 | 
  339 |             await this.clickOn(this.saveButton);
  340 |         });
  341 |     }
  342 | 
  343 |     async verifyAdminSuccess() {
  344 |         await test.step("Xác nhận thông báo lưu thành công trong Admin", async () => {
  345 |             await this.successAdminMessage.waitFor({ state: 'visible', timeout: 5000 });
  346 |         });
  347 |     }
  348 | 
  349 |     async verifyOnWebsite(title: string) {
  350 |         await test.step(`Kiểm tra bài viết '${title}' hiển thị trên trang web`, async () => {
  351 |             const baseUrl = process.env.BASE_URL?.endsWith('/') ? process.env.BASE_URL : process.env.BASE_URL + '/';
  352 |             const urlsToTry = Array.isArray(this.clientUrl) ? this.clientUrl : [this.clientUrl];
  353 |             let found = false;
  354 | 
  355 |             for (const url of urlsToTry) {
  356 |                 try {
  357 |                     await this.page.goto(baseUrl + url);
  358 |                     const articleItem = this.page.getByText(title, { exact: false }).first();
  359 |                     await articleItem.waitFor({ state: 'visible', timeout: 5000 });
  360 |                     found = true;
  361 |                     break;
  362 | 
  363 |                 } catch (error) {
  364 |                     // Tiếp tục vòng lặp thử URL tiếp theo
  365 |                 }
  366 |             }
  367 | 
  368 |             if (!found) {
> 369 |                 throw new Error(`Không tìm thấy bài viết '${title}' trên các trang: ${urlsToTry.join(', ')}`);
      |                       ^ Error: Không tìm thấy bài viết 'Blog Automation 1786575844095' trên các trang: blog
  370 |             }
  371 |         });
  372 |     }
  373 | 
  374 |     async deleteArticle(title: string) {
  375 |         await test.step(`Xóa bài viết '${title}' trong Admin`, async () => {
  376 |             const dialogHandler = async (dialog: any) => {
  377 |                 await dialog.accept();
  378 |             };
  379 |             this.page.on('dialog', dialogHandler);
  380 | 
  381 |             // Thực hiện tìm kiếm bài viết trước để đảm bảo bài viết nằm ở trang 1 (Tránh lỗi do Bulk Test đẩy bài viết sang trang 2)
  382 |             try {
  383 |                 const searchInput = this.page.locator("input[placeholder*='Tìm kiếm' i], input#keyword, input[name='keyword']").first();
  384 |                 const searchBtn = this.page.locator("button, a").filter({ has: this.page.locator(".fa-search") }).first();
  385 | 
  386 |                 if (await searchInput.isVisible({ timeout: 2000 })) {
  387 |                     await searchInput.fill(title);
  388 |                     if (await searchBtn.isVisible({ timeout: 1000 })) {
  389 |                         await Promise.all([
  390 |                             this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 5000 }).catch(() => { }),
  391 |                             searchBtn.click()
  392 |                         ]);
  393 |                     } else {
  394 |                         await Promise.all([
  395 |                             this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 5000 }).catch(() => { }),
  396 |                             searchInput.press('Enter')
  397 |                         ]);
  398 |                     }
  399 |                     await TestHelper.delay(this.page, 1000);
  400 |                 }
  401 |             } catch (error) {
  402 |                 // Bỏ qua nếu không tìm thấy thanh tìm kiếm
  403 |             }
  404 | 
  405 |             // Đợi bảng dữ liệu load xong trước khi tìm row
  406 |             await this.tableRows.first().waitFor({ state: 'visible', timeout: 10000 }).catch(() => { });
  407 |             await TestHelper.delay(this.page, 500);
  408 | 
  409 |             const rowLocator = this.page.locator('tr').filter({ hasText: title }).first();
  410 | 
  411 |             try {
  412 |                 // Chờ thẻ tr xuất hiện
  413 |                 await rowLocator.waitFor({ state: 'attached', timeout: 5000 });
  414 | 
  415 |                 // Dùng CSS Selector tìm đúng thẻ <a> bọc ngoài icon trash
  416 |                 const deleteBtn = rowLocator.locator("a").filter({ has: this.page.locator(".fa-trash-alt, .fa-trash") }).first();
  417 |                 await deleteBtn.waitFor({ state: 'visible', timeout: 3000 });
  418 |                 await deleteBtn.click({ force: true });
  419 |             } catch (error) {
  420 |                 // Fallback cho giao diện dạng list (div, li)
  421 |                 const itemLocator = this.page.locator('div, li').filter({ hasText: title }).first();
  422 |                 await itemLocator.waitFor({ state: 'attached', timeout: 3000 }).catch(() => { });
  423 | 
  424 |                 const deleteBtn = itemLocator.locator("a").filter({ has: this.page.locator(".fa-trash-alt, .fa-trash") }).first();
  425 |                 if (await deleteBtn.isVisible().catch(() => false) || await deleteBtn.count() > 0) {
  426 |                     await deleteBtn.click({ force: true }).catch(() => { });
  427 |                 } else {
  428 |                     console.log(`Bỏ qua: Không tìm thấy nút xóa cho bài viết '${title}' (có thể đã bị xóa hoặc không tồn tại)`);
  429 |                 }
  430 |             }
  431 | 
  432 |             // Chờ modal xác nhận (SweetAlert) nếu có
  433 |             await this.confirmDeleteButton.waitFor({ state: 'visible', timeout: 5000 }).catch(() => { });
  434 |             if (await this.confirmDeleteButton.isVisible()) {
  435 |                 // Click Đồng ý và đợi load lại bảng để chắc chắn server đã xử lý xóa
  436 |                 await Promise.all([
  437 |                     this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 }).catch(() => {
  438 |                         // Fallback nếu web dùng AJAX để xóa thay vì reload trang
  439 |                         return this.page.waitForLoadState('networkidle', { timeout: 3000 }).catch(() => { });
  440 |                     }),
  441 |                     this.confirmDeleteButton.click({ force: true })
  442 |                 ]);
  443 |             }
  444 | 
  445 |             await TestHelper.delay(this.page, 2000);
  446 | 
  447 |             this.page.off('dialog', dialogHandler);
  448 |         });
  449 |     }
  450 | 
  451 |     async deleteArticlesWithPrefix(prefix: string) {
  452 |         await test.step(`Xóa hàng loạt các bài viết có tiền tố '${prefix}'`, async () => {
  453 |             let hasItemsToDelete = true;
  454 |             let emptyChecks = 0; // Đếm số lần không tìm thấy dữ liệu để retry
  455 | 
  456 |             while (hasItemsToDelete && emptyChecks < 3) {
  457 |                 // Đợi cho mạng ổn định một chút phòng trường hợp AJAX đang tải dữ liệu bảng mới
  458 |                 await this.page.waitForLoadState('domcontentloaded');
  459 |                 await TestHelper.delay(this.page, 1500); // Thêm lại delay cứng nhỏ vì nếu web dùng AJAX thì loadState không bắt được
  460 | 
  461 |                 hasItemsToDelete = false;
  462 |                 const rows = await this.tableRows.all();
  463 |                 let clickedCount = 0;
  464 | 
  465 |                 for (const row of rows) {
  466 |                     const rowText = await row.innerText().catch(() => ""); // Bắt lỗi lỡ DOM bị detached
  467 | 
  468 |                     if (rowText.includes(prefix)) {
  469 |                         const rowCheckbox = row.locator('.select-checkbox').first();
```