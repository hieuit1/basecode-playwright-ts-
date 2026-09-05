# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin/project.spec.ts >> Project Management Tests >> Bulk insert 35 projects via Copy and verify Load More on website
- Location: tests/admin/project.spec.ts:133:13

# Error details

```
Error: Lỗi: Bấm Xem thêm nhưng số lượng Dự án không tăng sau 30s! (Ban đầu: 35)

Lỗi: Bấm Xem thêm nhưng số lượng Dự án không tăng sau 30s! (Ban đầu: 35)

expect(received).toBeGreaterThan(expected)

Expected: > 35
Received:   35

Call Log:
- Timeout 30000ms exceeded while waiting on the predicate
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
          - /url: " "
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
          - text:  
        - listitem [ref=e21]:
          - link "" [ref=e22] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e23]: 
          - text:    
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
            - text:        
          - listitem [ref=e43]:
            - link " Group Sản Phẩm " [ref=e44] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e45]: 
              - paragraph [ref=e46]:
                - text: Group Sản Phẩm
                - generic [ref=e47]: 
            - text:      
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
                - link " Tin tức" [ref=e60] [cursor=pointer]:
                  - /url: news?act=man&type=tin-tuc
                  - generic [ref=e61]: 
                  - paragraph [ref=e62]: Tin tức
              - listitem [ref=e63]:
                - link " Nhà cung cấp" [ref=e64] [cursor=pointer]:
                  - /url: news?act=man&type=nha-cung-cap
                  - generic [ref=e65]: 
                  - paragraph [ref=e66]: Nhà cung cấp
              - listitem [ref=e67]:
                - link " Thông điệp" [ref=e68] [cursor=pointer]:
                  - /url: news?act=man&type=thong-diep
                  - generic [ref=e69]: 
                  - paragraph [ref=e70]: Thông điệp
              - listitem [ref=e71]:
                - link " Dự án" [ref=e72] [cursor=pointer]:
                  - /url: news?act=man&type=du-an
                  - generic [ref=e73]: 
                  - paragraph [ref=e74]: Dự án
              - listitem [ref=e75]:
                - link " Góc kỹ thuật" [ref=e76] [cursor=pointer]:
                  - /url: news?act=man&type=goc-ky-thuat
                  - generic [ref=e77]: 
                  - paragraph [ref=e78]: Góc kỹ thuật
              - listitem [ref=e79]:
                - link " Quy trình ITT" [ref=e80] [cursor=pointer]:
                  - /url: news?act=man&type=quy-trinh
                  - generic [ref=e81]: 
                  - paragraph [ref=e82]: Quy trình ITT
              - listitem [ref=e83]:
                - link " Dịch vụ ITT" [ref=e84] [cursor=pointer]:
                  - /url: news?act=man&type=dich-vu-itt
                  - generic [ref=e85]: 
                  - paragraph [ref=e86]: Dịch vụ ITT
              - listitem [ref=e87]:
                - link " Về ITT" [ref=e88] [cursor=pointer]:
                  - /url: news?act=man&type=ve-itt
                  - generic [ref=e89]: 
                  - paragraph [ref=e90]: Về ITT
              - listitem [ref=e91]:
                - link " Phương châm" [ref=e92] [cursor=pointer]:
                  - /url: news?act=man&type=phuong-cham
                  - generic [ref=e93]: 
                  - paragraph [ref=e94]: Phương châm
              - listitem [ref=e95]:
                - link " Lĩnh vực" [ref=e96] [cursor=pointer]:
                  - /url: news?act=man&type=linh-vuc
                  - generic [ref=e97]: 
                  - paragraph [ref=e98]: Lĩnh vực
              - listitem [ref=e99]:
                - link " Chính sách" [ref=e100] [cursor=pointer]:
                  - /url: news?act=man&type=chinh-sach
                  - generic [ref=e101]: 
                  - paragraph [ref=e102]: Chính sách
          - listitem [ref=e103]:
            - link " Quản lý nhận tin " [ref=e104] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e105]: 
              - paragraph [ref=e106]:
                - text: Quản lý nhận tin
                - generic [ref=e107]: 
            - text: 
          - listitem [ref=e108]:
            - link " Quản lý trang tĩnh " [ref=e109] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e110]: 
              - paragraph [ref=e111]:
                - text: Quản lý trang tĩnh
                - generic [ref=e112]: 
            - text:          
          - listitem [ref=e113]:
            - link " Quản lý hình ảnh - video " [ref=e114] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e115]: 
              - paragraph [ref=e116]:
                - text: Quản lý hình ảnh - video
                - generic [ref=e117]: 
            - text:            
          - listitem [ref=e118]:
            - link " Quản lý seo page " [ref=e119] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e120]: 
              - paragraph [ref=e121]:
                - text: Quản lý seo page
                - generic [ref=e122]: 
            - text:       
          - listitem [ref=e123]:
            - link " Thiết lập thông tin" [ref=e124] [cursor=pointer]:
              - /url: setting?act=update
              - generic [ref=e125]: 
              - paragraph [ref=e126]: Thiết lập thông tin
    - generic [ref=e127]:
      - list [ref=e131]:
        - listitem [ref=e132]:
          - link "Bảng điều khiển" [ref=e133] [cursor=pointer]:
            - /url: index.php
        - listitem [ref=e134]: / Dự án
      - generic [ref=e135]:
        - generic [ref=e136]:
          - link "+ Thêm mới" [ref=e137] [cursor=pointer]:
            - /url: news?act=add&type=du-an
            - generic [ref=e138]: +
            - text: Thêm mới
          - generic "Xóa tất cả" [ref=e139] [cursor=pointer]:
            - generic [ref=e140]: 
            - text: Xóa tất cả
          - generic [ref=e142]:
            - searchbox "Tìm kiếm" [ref=e143]
            - button "" [ref=e145] [cursor=pointer]:
              - generic [ref=e146]: 
        - generic [ref=e147]:
          - heading "Danh sách Dự án" [level=3] [ref=e149]
          - table [ref=e151]:
            - rowgroup [ref=e152]:
              - row "STT Hình Tiêu đề Trang chủ Đang thi công Đã thi công Hiển thị Noindex Thao tác" [ref=e153]:
                - columnheader [ref=e154]:
                  - checkbox [ref=e156] [cursor=pointer]
                - columnheader "STT" [ref=e158]
                - columnheader "Hình" [ref=e159]
                - columnheader "Tiêu đề" [ref=e160]
                - columnheader "Trang chủ" [ref=e161]
                - columnheader "Đang thi công" [ref=e162]
                - columnheader "Đã thi công" [ref=e163]
                - columnheader "Hiển thị" [ref=e164]
                - columnheader "Noindex" [ref=e165]
                - columnheader "Thao tác" [ref=e166]
            - rowgroup [ref=e167]:
              - row "0 Dự án nhà máy lọc hóa dầu (1) (1) (1) Dự án nhà máy lọc hóa dầu (1) (1) (1)  View  Edit  Copy  Delete   " [ref=e168]:
                - cell [ref=e169]:
                  - checkbox [ref=e171] [cursor=pointer]
                - cell "0" [ref=e173]:
                  - spinbutton [ref=e174]: "0"
                - cell "Dự án nhà máy lọc hóa dầu (1) (1) (1)" [ref=e175]:
                  - link "Dự án nhà máy lọc hóa dầu (1) (1) (1)" [ref=e176] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=118
                    - img "Dự án nhà máy lọc hóa dầu (1) (1) (1)" [ref=e177]
                - cell "Dự án nhà máy lọc hóa dầu (1) (1) (1)  View  Edit  Copy  Delete" [ref=e178]:
                  - link "Dự án nhà máy lọc hóa dầu (1) (1) (1)" [ref=e179] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=118
                  - generic [ref=e180]:
                    - link " View" [ref=e181] [cursor=pointer]:
                      - /url: https://code3.mimadigi.vn/2026/august/kythuatquocte_109926w/du-an-nha-may-loc-hoa-dau-1-1-1
                      - generic [ref=e182]: 
                      - text: View
                    - link " Edit" [ref=e183] [cursor=pointer]:
                      - /url: news?act=edit&type=du-an&id=118
                      - generic [ref=e184]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e185] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e186]: 
                        - text: Copy
                      - text:  
                    - generic "Dự án nhà máy lọc hóa dầu (1) (1) (1)" [ref=e187] [cursor=pointer]:
                      - generic [ref=e188]: 
                      - text: Delete
                - cell [ref=e189]:
                  - checkbox [ref=e191] [cursor=pointer]
                - cell [ref=e193]:
                  - checkbox [ref=e195] [cursor=pointer]
                - cell [ref=e197]:
                  - checkbox [ref=e199] [cursor=pointer]
                - cell [ref=e201]:
                  - checkbox [checked] [ref=e203] [cursor=pointer]
                - cell [ref=e205]:
                  - checkbox [ref=e207] [cursor=pointer]
                - cell "  " [ref=e209]:
                  - generic [ref=e210]:
                    - link "" [ref=e211] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e212]: 
                    - text:  
                  - link "" [ref=e213] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=118
                    - generic [ref=e214]: 
                  - generic "Xóa" [ref=e215]:
                    - generic [ref=e216]: 
              - row "0 Dự án nhà máy lọc hóa dầu (1) (1) Dự án nhà máy lọc hóa dầu (1) (1)  View  Edit  Copy  Delete   " [ref=e217]:
                - cell [ref=e218]:
                  - checkbox [ref=e220] [cursor=pointer]
                - cell "0" [ref=e222]:
                  - spinbutton [ref=e223]: "0"
                - cell "Dự án nhà máy lọc hóa dầu (1) (1)" [ref=e224]:
                  - link "Dự án nhà máy lọc hóa dầu (1) (1)" [ref=e225] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=117
                    - img "Dự án nhà máy lọc hóa dầu (1) (1)" [ref=e226]
                - cell "Dự án nhà máy lọc hóa dầu (1) (1)  View  Edit  Copy  Delete" [ref=e227]:
                  - link "Dự án nhà máy lọc hóa dầu (1) (1)" [ref=e228] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=117
                  - generic [ref=e229]:
                    - link " View" [ref=e230] [cursor=pointer]:
                      - /url: https://code3.mimadigi.vn/2026/august/kythuatquocte_109926w/du-an-nha-may-loc-hoa-dau-1-1
                      - generic [ref=e231]: 
                      - text: View
                    - link " Edit" [ref=e232] [cursor=pointer]:
                      - /url: news?act=edit&type=du-an&id=117
                      - generic [ref=e233]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e234] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e235]: 
                        - text: Copy
                      - text:  
                    - generic "Dự án nhà máy lọc hóa dầu (1) (1)" [ref=e236] [cursor=pointer]:
                      - generic [ref=e237]: 
                      - text: Delete
                - cell [ref=e238]:
                  - checkbox [ref=e240] [cursor=pointer]
                - cell [ref=e242]:
                  - checkbox [ref=e244] [cursor=pointer]
                - cell [ref=e246]:
                  - checkbox [ref=e248] [cursor=pointer]
                - cell [ref=e250]:
                  - checkbox [checked] [ref=e252] [cursor=pointer]
                - cell [ref=e254]:
                  - checkbox [ref=e256] [cursor=pointer]
                - cell "  " [ref=e258]:
                  - generic [ref=e259]:
                    - link "" [ref=e260] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e261]: 
                    - text:  
                  - link "" [ref=e262] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=117
                    - generic [ref=e263]: 
                  - generic "Xóa" [ref=e264]:
                    - generic [ref=e265]: 
              - row "0 Dự án nhà máy lọc hóa dầu (1) Dự án nhà máy lọc hóa dầu (1)  View  Edit  Copy  Delete   " [ref=e266]:
                - cell [ref=e267]:
                  - checkbox [ref=e269] [cursor=pointer]
                - cell "0" [ref=e271]:
                  - spinbutton [ref=e272]: "0"
                - cell "Dự án nhà máy lọc hóa dầu (1)" [ref=e273]:
                  - link "Dự án nhà máy lọc hóa dầu (1)" [ref=e274] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=116
                    - img "Dự án nhà máy lọc hóa dầu (1)" [ref=e275]
                - cell "Dự án nhà máy lọc hóa dầu (1)  View  Edit  Copy  Delete" [ref=e276]:
                  - link "Dự án nhà máy lọc hóa dầu (1)" [ref=e277] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=116
                  - generic [ref=e278]:
                    - link " View" [ref=e279] [cursor=pointer]:
                      - /url: https://code3.mimadigi.vn/2026/august/kythuatquocte_109926w/du-an-nha-may-loc-hoa-dau-1
                      - generic [ref=e280]: 
                      - text: View
                    - link " Edit" [ref=e281] [cursor=pointer]:
                      - /url: news?act=edit&type=du-an&id=116
                      - generic [ref=e282]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e283] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e284]: 
                        - text: Copy
                      - text:  
                    - generic "Dự án nhà máy lọc hóa dầu (1)" [ref=e285] [cursor=pointer]:
                      - generic [ref=e286]: 
                      - text: Delete
                - cell [ref=e287]:
                  - checkbox [ref=e289] [cursor=pointer]
                - cell [ref=e291]:
                  - checkbox [ref=e293] [cursor=pointer]
                - cell [ref=e295]:
                  - checkbox [ref=e297] [cursor=pointer]
                - cell [ref=e299]:
                  - checkbox [checked] [ref=e301] [cursor=pointer]
                - cell [ref=e303]:
                  - checkbox [ref=e305] [cursor=pointer]
                - cell "  " [ref=e307]:
                  - generic [ref=e308]:
                    - link "" [ref=e309] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e310]: 
                    - text:  
                  - link "" [ref=e311] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=116
                    - generic [ref=e312]: 
                  - generic "Xóa" [ref=e313]:
                    - generic [ref=e314]: 
              - row "11 Dự án nhà máy lọc hóa dầu Dự án nhà máy lọc hóa dầu  View  Edit  Copy  Delete   " [ref=e315]:
                - cell [ref=e316]:
                  - checkbox [ref=e318] [cursor=pointer]
                - cell "11" [ref=e320]:
                  - spinbutton [ref=e321]: "11"
                - cell "Dự án nhà máy lọc hóa dầu" [ref=e322]:
                  - link "Dự án nhà máy lọc hóa dầu" [ref=e323] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=11
                    - img "Dự án nhà máy lọc hóa dầu" [ref=e324]
                - cell "Dự án nhà máy lọc hóa dầu  View  Edit  Copy  Delete" [ref=e325]:
                  - link "Dự án nhà máy lọc hóa dầu" [ref=e326] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=11
                  - generic [ref=e327]:
                    - link " View" [ref=e328] [cursor=pointer]:
                      - /url: https://code3.mimadigi.vn/2026/august/kythuatquocte_109926w/du-an-nha-may-loc-hoa-dau
                      - generic [ref=e329]: 
                      - text: View
                    - link " Edit" [ref=e330] [cursor=pointer]:
                      - /url: news?act=edit&type=du-an&id=11
                      - generic [ref=e331]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e332] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e333]: 
                        - text: Copy
                      - text:  
                    - generic "Dự án nhà máy lọc hóa dầu" [ref=e334] [cursor=pointer]:
                      - generic [ref=e335]: 
                      - text: Delete
                - cell [ref=e336]:
                  - checkbox [checked] [ref=e338] [cursor=pointer]
                - cell [ref=e340]:
                  - checkbox [ref=e342] [cursor=pointer]
                - cell [ref=e344]:
                  - checkbox [ref=e346] [cursor=pointer]
                - cell [ref=e348]:
                  - checkbox [checked] [ref=e350] [cursor=pointer]
                - cell [ref=e352]:
                  - checkbox [ref=e354] [cursor=pointer]
                - cell "  " [ref=e356]:
                  - generic [ref=e357]:
                    - link "" [ref=e358] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e359]: 
                    - text:  
                  - link "" [ref=e360] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=11
                    - generic [ref=e361]: 
                  - generic "Xóa" [ref=e362]:
                    - generic [ref=e363]: 
              - row "12 Dự án sân bay Dự án sân bay  View  Edit  Copy  Delete   " [ref=e364]:
                - cell [ref=e365]:
                  - checkbox [ref=e367] [cursor=pointer]
                - cell "12" [ref=e369]:
                  - spinbutton [ref=e370]: "12"
                - cell "Dự án sân bay" [ref=e371]:
                  - link "Dự án sân bay" [ref=e372] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=12
                    - img "Dự án sân bay" [ref=e373]
                - cell "Dự án sân bay  View  Edit  Copy  Delete" [ref=e374]:
                  - link "Dự án sân bay" [ref=e375] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=12
                  - generic [ref=e376]:
                    - link " View" [ref=e377] [cursor=pointer]:
                      - /url: https://code3.mimadigi.vn/2026/august/kythuatquocte_109926w/du-an-san-bay
                      - generic [ref=e378]: 
                      - text: View
                    - link " Edit" [ref=e379] [cursor=pointer]:
                      - /url: news?act=edit&type=du-an&id=12
                      - generic [ref=e380]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e381] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e382]: 
                        - text: Copy
                      - text:  
                    - generic "Dự án sân bay" [ref=e383] [cursor=pointer]:
                      - generic [ref=e384]: 
                      - text: Delete
                - cell [ref=e385]:
                  - checkbox [checked] [ref=e387] [cursor=pointer]
                - cell [ref=e389]:
                  - checkbox [ref=e391] [cursor=pointer]
                - cell [ref=e393]:
                  - checkbox [ref=e395] [cursor=pointer]
                - cell [ref=e397]:
                  - checkbox [checked] [ref=e399] [cursor=pointer]
                - cell [ref=e401]:
                  - checkbox [ref=e403] [cursor=pointer]
                - cell "  " [ref=e405]:
                  - generic [ref=e406]:
                    - link "" [ref=e407] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e408]: 
                    - text:  
                  - link "" [ref=e409] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=12
                    - generic [ref=e410]: 
                  - generic "Xóa" [ref=e411]:
                    - generic [ref=e412]: 
              - row "13 Dự án nhà máy giấy Dự án nhà máy giấy  View  Edit  Copy  Delete   " [ref=e413]:
                - cell [ref=e414]:
                  - checkbox [ref=e416] [cursor=pointer]
                - cell "13" [ref=e418]:
                  - spinbutton [ref=e419]: "13"
                - cell "Dự án nhà máy giấy" [ref=e420]:
                  - link "Dự án nhà máy giấy" [ref=e421] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=13
                    - img "Dự án nhà máy giấy" [ref=e422]
                - cell "Dự án nhà máy giấy  View  Edit  Copy  Delete" [ref=e423]:
                  - link "Dự án nhà máy giấy" [ref=e424] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=13
                  - generic [ref=e425]:
                    - link " View" [ref=e426] [cursor=pointer]:
                      - /url: https://code3.mimadigi.vn/2026/august/kythuatquocte_109926w/du-an-nha-may-giay
                      - generic [ref=e427]: 
                      - text: View
                    - link " Edit" [ref=e428] [cursor=pointer]:
                      - /url: news?act=edit&type=du-an&id=13
                      - generic [ref=e429]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e430] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e431]: 
                        - text: Copy
                      - text:  
                    - generic "Dự án nhà máy giấy" [ref=e432] [cursor=pointer]:
                      - generic [ref=e433]: 
                      - text: Delete
                - cell [ref=e434]:
                  - checkbox [checked] [ref=e436] [cursor=pointer]
                - cell [ref=e438]:
                  - checkbox [ref=e440] [cursor=pointer]
                - cell [ref=e442]:
                  - checkbox [ref=e444] [cursor=pointer]
                - cell [ref=e446]:
                  - checkbox [checked] [ref=e448] [cursor=pointer]
                - cell [ref=e450]:
                  - checkbox [ref=e452] [cursor=pointer]
                - cell "  " [ref=e454]:
                  - generic [ref=e455]:
                    - link "" [ref=e456] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e457]: 
                    - text:  
                  - link "" [ref=e458] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=13
                    - generic [ref=e459]: 
                  - generic "Xóa" [ref=e460]:
                    - generic [ref=e461]: 
              - row "14 Dự án nhà máy bia Dự án nhà máy bia  View  Edit  Copy  Delete   " [ref=e462]:
                - cell [ref=e463]:
                  - checkbox [ref=e465] [cursor=pointer]
                - cell "14" [ref=e467]:
                  - spinbutton [ref=e468]: "14"
                - cell "Dự án nhà máy bia" [ref=e469]:
                  - link "Dự án nhà máy bia" [ref=e470] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=14
                    - img "Dự án nhà máy bia" [ref=e471]
                - cell "Dự án nhà máy bia  View  Edit  Copy  Delete" [ref=e472]:
                  - link "Dự án nhà máy bia" [ref=e473] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=14
                  - generic [ref=e474]:
                    - link " View" [ref=e475] [cursor=pointer]:
                      - /url: https://code3.mimadigi.vn/2026/august/kythuatquocte_109926w/du-an-nha-may-bia
                      - generic [ref=e476]: 
                      - text: View
                    - link " Edit" [ref=e477] [cursor=pointer]:
                      - /url: news?act=edit&type=du-an&id=14
                      - generic [ref=e478]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e479] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e480]: 
                        - text: Copy
                      - text:  
                    - generic "Dự án nhà máy bia" [ref=e481] [cursor=pointer]:
                      - generic [ref=e482]: 
                      - text: Delete
                - cell [ref=e483]:
                  - checkbox [checked] [ref=e485] [cursor=pointer]
                - cell [ref=e487]:
                  - checkbox [checked] [ref=e489] [cursor=pointer]
                - cell [ref=e491]:
                  - checkbox [checked] [ref=e493] [cursor=pointer]
                - cell [ref=e495]:
                  - checkbox [checked] [ref=e497] [cursor=pointer]
                - cell [ref=e499]:
                  - checkbox [ref=e501] [cursor=pointer]
                - cell "  " [ref=e503]:
                  - generic [ref=e504]:
                    - link "" [ref=e505] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e506]: 
                    - text:  
                  - link "" [ref=e507] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=14
                    - generic [ref=e508]: 
                  - generic "Xóa" [ref=e509]:
                    - generic [ref=e510]: 
              - row "15 Dự án nhà máy điện Dự án nhà máy điện  View  Edit  Copy  Delete   " [ref=e511]:
                - cell [ref=e512]:
                  - checkbox [ref=e514] [cursor=pointer]
                - cell "15" [ref=e516]:
                  - spinbutton [ref=e517]: "15"
                - cell "Dự án nhà máy điện" [ref=e518]:
                  - link "Dự án nhà máy điện" [ref=e519] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=15
                    - img "Dự án nhà máy điện" [ref=e520]
                - cell "Dự án nhà máy điện  View  Edit  Copy  Delete" [ref=e521]:
                  - link "Dự án nhà máy điện" [ref=e522] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=15
                  - generic [ref=e523]:
                    - link " View" [ref=e524] [cursor=pointer]:
                      - /url: https://code3.mimadigi.vn/2026/august/kythuatquocte_109926w/du-an-nha-may-dien
                      - generic [ref=e525]: 
                      - text: View
                    - link " Edit" [ref=e526] [cursor=pointer]:
                      - /url: news?act=edit&type=du-an&id=15
                      - generic [ref=e527]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e528] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e529]: 
                        - text: Copy
                      - text:  
                    - generic "Dự án nhà máy điện" [ref=e530] [cursor=pointer]:
                      - generic [ref=e531]: 
                      - text: Delete
                - cell [ref=e532]:
                  - checkbox [checked] [ref=e534] [cursor=pointer]
                - cell [ref=e536]:
                  - checkbox [checked] [ref=e538] [cursor=pointer]
                - cell [ref=e540]:
                  - checkbox [checked] [ref=e542] [cursor=pointer]
                - cell [ref=e544]:
                  - checkbox [checked] [ref=e546] [cursor=pointer]
                - cell [ref=e548]:
                  - checkbox [ref=e550] [cursor=pointer]
                - cell "  " [ref=e552]:
                  - generic [ref=e553]:
                    - link "" [ref=e554] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e555]: 
                    - text:  
                  - link "" [ref=e556] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=15
                    - generic [ref=e557]: 
                  - generic "Xóa" [ref=e558]:
                    - generic [ref=e559]: 
        - generic [ref=e560]:
          - link "+ Thêm mới" [ref=e561] [cursor=pointer]:
            - /url: news?act=add&type=du-an
            - generic [ref=e562]: +
            - text: Thêm mới
          - generic "Xóa tất cả" [ref=e563] [cursor=pointer]:
            - generic [ref=e564]: 
            - text: Xóa tất cả
    - contentinfo [ref=e565]:
      - paragraph [ref=e568]:
        - strong [ref=e570]: Công Ty TNHH Thương Mại Dịch Vụ MIMA
        - text: MST
        - strong [ref=e571]: ":"
        - text: "0318672839"
        - strong [ref=e572]: "Địa chỉ:"
        - link [ref=e573] [cursor=pointer]:
          - /url: https://maps.app.goo.gl/rA8evCuRwT3Go6bR9
          - text: 31/3B Ấp Thới Tứ 1, Xã Đông Thạnh, TP Hồ Chí Minh
        - text: ", Việt Nam"
        - strong [ref=e574]: "Hotline:"
        - text: 0909 035 333
        - strong [ref=e575]: "Website:"
        - link [ref=e576] [cursor=pointer]:
          - /url: https://mimadigi.com
          - text: https://
        - link [ref=e577] [cursor=pointer]:
          - /url: https://mimadigi.com
          - text: mimadigi.com
        - strong [ref=e578]: "Email:"
        - text: info@mimadigi.com
        - link [ref=e579] [cursor=pointer]:
          - /url: //www.dmca.com/Protection/Status.aspx?ID=2f39ff2a-7db5-4e53-9bb6-15ee8957080c&refurl=https://mimadigi.com/
          - img [ref=e580]
        - link [ref=e581] [cursor=pointer]:
          - /url: http://online.gov.vn/Website/chi-tiet-134906
          - img [ref=e582]
  - generic [ref=e583]:
    - generic [ref=e584]: Tùy chỉnh
    - generic [ref=e586]:
      - generic [ref=e587]:
        - heading "Slidebar" [level=4] [ref=e588]
        - generic [ref=e589]:
          - button [ref=e590] [cursor=pointer]
          - button [ref=e591] [cursor=pointer]
          - button [ref=e592] [cursor=pointer]
          - button [ref=e593] [cursor=pointer]
          - button [ref=e594] [cursor=pointer]
          - button [ref=e595] [cursor=pointer]
          - button [ref=e596] [cursor=pointer]
          - button [ref=e597] [cursor=pointer]
          - button [ref=e599] [cursor=pointer]
          - button [ref=e600] [cursor=pointer]
          - button [ref=e601] [cursor=pointer]
          - button [ref=e602] [cursor=pointer]
          - button [ref=e603] [cursor=pointer]
          - button [ref=e604] [cursor=pointer]
          - button [ref=e605] [cursor=pointer]
          - button [ref=e606] [cursor=pointer]
      - generic [ref=e607]:
        - heading "Navbar Header" [level=4] [ref=e608]
        - generic [ref=e609]:
          - button [ref=e610] [cursor=pointer]
          - button [ref=e611] [cursor=pointer]
          - button [ref=e612] [cursor=pointer]
          - button [ref=e613] [cursor=pointer]
          - button [ref=e614] [cursor=pointer]
          - button [ref=e615] [cursor=pointer]
          - button [ref=e616] [cursor=pointer]
          - button [ref=e617] [cursor=pointer]
          - button [ref=e619] [cursor=pointer]
          - button [ref=e620] [cursor=pointer]
          - button [ref=e621] [cursor=pointer]
          - button [ref=e622] [cursor=pointer]
          - button [ref=e623] [cursor=pointer]
          - button [ref=e624] [cursor=pointer]
          - button [ref=e625] [cursor=pointer]
          - button [ref=e626] [cursor=pointer]
      - generic [ref=e627]:
        - heading "Light mode" [level=4] [ref=e628]
        - generic [ref=e630]:
          - generic [ref=e631]:
            - img "Light" [ref=e635] [cursor=pointer]
            - generic [ref=e636]: Light
          - generic [ref=e637]:
            - img "Dark" [ref=e641] [cursor=pointer]
            - generic [ref=e642]: Dark
          - generic [ref=e643]:
            - img "System" [ref=e647] [cursor=pointer]
            - generic [ref=e648]: System
      - generic [ref=e649]:
        - heading "Themes" [level=4] [ref=e650]
        - generic [ref=e652]:
          - generic [ref=e653]:
            - img "Default" [ref=e657] [cursor=pointer]
            - generic [ref=e658]: Default
          - generic [ref=e659]:
            - img "Bordered" [ref=e663] [cursor=pointer]
            - generic [ref=e664]: Bordered
          - generic [ref=e665]:
            - img "Semi Dark" [ref=e669] [cursor=pointer]
            - generic [ref=e670]: Semi Dark
    - generic [ref=e672] [cursor=pointer]: 
  - img
```

# Test source

```ts
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
  112 |                 ).toBeVisible({ timeout: 10000 });
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
> 128 |                 }).toBeGreaterThan(initialCount);
      |                    ^ Error: Lỗi: Bấm Xem thêm nhưng số lượng Dự án không tăng sau 30s! (Ban đầu: 35)
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
  213 |                 }).toBeGreaterThan(initialCount);
  214 | 
  215 |                 await TestHelper.takeScreenshot(page, `Đã load thêm ${itemTypeLabel} thành công`);
  216 |             });
  217 |         } finally {
  218 |             if (isCreated) {
  219 |                 await test.step(`bước 6: Dọn rác (Cleanup An Toàn Tuyệt Đối)`, async () => {
  220 |                     // const baseUrl = process.env.BASE_URL?.endsWith('/') ? process.env.BASE_URL : process.env.BASE_URL + '/';
  221 |                     // await page.goto(baseUrl + 'madmin/index.php');
  222 |                     // await pageObj.gotoAdminMenu();
  223 | 
  224 |                     // await pageObj.deleteArticlesWithPrefix(bulkPrefix);
  225 |                 });
  226 |             }
  227 |         }
  228 |     }
```