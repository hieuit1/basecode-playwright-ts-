# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin/project.spec.ts >> Project Management Tests >> Add project successfully and verify on website
- Location: tests/admin/project.spec.ts:70:13

# Error details

```
Error: Không tìm thấy bài viết 'Dự án Automation 1789782899012' trên các trang: du-an
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
        - listitem [ref=e12]:
          - link "Đổi giao diện sáng tối" [ref=e13] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e14]: 
            - generic [ref=e15]: 
        - listitem [ref=e16]:
          - link " Hỗ trợ" [ref=e17] [cursor=pointer]:
            - /url: tel:0909035333
            - generic [ref=e18]: 
            - generic [ref=e19]: Hỗ trợ
        - listitem [ref=e20]:
          - link "" [ref=e21] [cursor=pointer]:
            - /url: ../
            - generic [ref=e22]: 
        - listitem [ref=e23]:
          - link " 8" [ref=e24] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e25]: 
            - generic [ref=e26]: "8"
          - text:   
        - listitem [ref=e27]:
          - generic [ref=e30] [cursor=pointer]:
            - generic [ref=e31]: Nhà quản trị
            - paragraph [ref=e32]: Administrator
          - text:    
    - complementary [ref=e33]:
      - link [ref=e34] [cursor=pointer]:
        - /url: index.php
      - navigation [ref=e36]:
        - menu [ref=e37]:
          - listitem [ref=e38]:
            - link " Bảng điều khiển" [ref=e39] [cursor=pointer]:
              - /url: index.php
              - generic [ref=e40]: 
              - paragraph [ref=e41]: Bảng điều khiển
          - listitem [ref=e42]:
            - link " Group Giới Thiệu " [ref=e43] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e44]: 
              - paragraph [ref=e45]:
                - text: Group Giới Thiệu
                - generic [ref=e46]: 
            - text:      
          - listitem [ref=e47]:
            - link " Quản lý Sản phẩm " [ref=e48] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e49]: 
              - paragraph [ref=e50]:
                - text: Quản lý Sản phẩm
                - generic [ref=e51]: 
            - text:    
          - listitem [ref=e52]:
            - link " Quản lý bài viết " [ref=e53] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e54]: 
              - paragraph [ref=e55]:
                - text: Quản lý bài viết
                - generic [ref=e56]: 
            - list [ref=e57]:
              - listitem [ref=e58]:
                - link " Tin tức" [ref=e59] [cursor=pointer]:
                  - /url: news?act=man&type=tin-tuc
                  - generic [ref=e60]: 
                  - paragraph [ref=e61]: Tin tức
              - listitem [ref=e62]:
                - link " Dự án" [ref=e63] [cursor=pointer]:
                  - /url: news?act=man&type=du-an
                  - generic [ref=e64]: 
                  - paragraph [ref=e65]: Dự án
              - listitem [ref=e66]:
                - link " Chính sách" [ref=e67] [cursor=pointer]:
                  - /url: news?act=man&type=chinh-sach
                  - generic [ref=e68]: 
                  - paragraph [ref=e69]: Chính sách
              - listitem [ref=e70]:
                - link " Hình thức thanh toán" [ref=e71] [cursor=pointer]:
                  - /url: news?act=man&type=hinh-thuc-thanh-toan
                  - generic [ref=e72]: 
                  - paragraph [ref=e73]: Hình thức thanh toán
          - listitem [ref=e74]:
            - link " Quản lý đơn hàng" [ref=e75] [cursor=pointer]:
              - /url: order?act=man
              - generic [ref=e76]: 
              - paragraph [ref=e77]: Quản lý đơn hàng
          - listitem [ref=e78]:
            - link " Quản lý nhận tin " [ref=e79] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e80]: 
              - paragraph [ref=e81]:
                - text: Quản lý nhận tin
                - generic [ref=e82]: 
            - text: 
          - listitem [ref=e83]:
            - link " Quản lý trang tĩnh " [ref=e84] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e85]: 
              - paragraph [ref=e86]:
                - text: Quản lý trang tĩnh
                - generic [ref=e87]: 
            - text:    
          - listitem [ref=e88]:
            - link " Quản lý hình ảnh - video " [ref=e89] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e90]: 
              - paragraph [ref=e91]:
                - text: Quản lý hình ảnh - video
                - generic [ref=e92]: 
            - text:        
          - listitem [ref=e93]:
            - link " Quản lý user " [ref=e94] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e95]: 
              - paragraph [ref=e96]:
                - text: Quản lý user
                - generic [ref=e97]: 
          - listitem [ref=e98]:
            - link " Quản lý seo page " [ref=e99] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e100]: 
              - paragraph [ref=e101]:
                - text: Quản lý seo page
                - generic [ref=e102]: 
            - text:      
          - listitem [ref=e103]:
            - link " Thiết lập thông tin" [ref=e104] [cursor=pointer]:
              - /url: setting?act=update
              - generic [ref=e105]: 
              - paragraph [ref=e106]: Thiết lập thông tin
    - generic [ref=e107]:
      - list [ref=e111]:
        - listitem [ref=e112]:
          - link "Bảng điều khiển" [ref=e113] [cursor=pointer]:
            - /url: index.php
        - listitem [ref=e114]: / Dự án
      - generic [ref=e115]:
        - generic [ref=e116]:
          - link "+ Thêm mới" [ref=e117] [cursor=pointer]:
            - /url: news?act=add&type=du-an
            - generic [ref=e118]: +
            - text: Thêm mới
          - generic "Xóa tất cả" [ref=e119] [cursor=pointer]:
            - generic [ref=e120]: 
            - text: Xóa tất cả
          - generic [ref=e122]:
            - searchbox "Tìm kiếm" [ref=e123]
            - button "" [ref=e125] [cursor=pointer]:
              - generic [ref=e126]: 
          - generic [ref=e127]: Có (7) Dự án
        - generic [ref=e128]:
          - heading "Danh sách Dự án" [level=3] [ref=e130]
          - table [ref=e132]:
            - rowgroup [ref=e133]:
              - row "STT Hình Tiêu đề Noindex Nổi bật Hiển thị Thao tác" [ref=e134]:
                - columnheader [ref=e135]:
                  - checkbox [ref=e137] [cursor=pointer]
                - columnheader "STT" [ref=e139]
                - columnheader "Hình" [ref=e140]
                - columnheader "Tiêu đề" [ref=e141]
                - columnheader "Noindex" [ref=e142]
                - columnheader "Nổi bật" [ref=e143]
                - columnheader "Hiển thị" [ref=e144]
                - columnheader "Thao tác" [ref=e145]
            - rowgroup [ref=e146]:
              - row "1 Project test __william__ Project test __william__  View  Edit  Copy  Delete   " [ref=e147]:
                - cell [ref=e148]:
                  - checkbox [ref=e150] [cursor=pointer]
                - cell "1" [ref=e152]:
                  - spinbutton [ref=e153]: "1"
                - cell "Project test __william__" [ref=e154]:
                  - link "Project test __william__" [ref=e155] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=89
                    - img "Project test __william__" [ref=e156]
                - cell "Project test __william__  View  Edit  Copy  Delete" [ref=e157]:
                  - link "Project test __william__" [ref=e158] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=89
                  - generic [ref=e159]:
                    - link " View" [ref=e160] [cursor=pointer]:
                      - /url: https://code7.mimadigi.vn/2026_09/trantiendung_115926w/project-test-william
                      - generic [ref=e161]: 
                      - text: View
                    - link " Edit" [ref=e162] [cursor=pointer]:
                      - /url: news?act=edit&type=du-an&id=89
                      - generic [ref=e163]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e164] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e165]: 
                        - text: Copy
                      - text:  
                    - generic "Project test __william__" [ref=e166] [cursor=pointer]:
                      - generic [ref=e167]: 
                      - text: Delete
                - cell [ref=e168]:
                  - checkbox [ref=e170] [cursor=pointer]
                - cell [ref=e172]:
                  - checkbox [ref=e174] [cursor=pointer]
                - cell [ref=e176]:
                  - checkbox [checked] [ref=e178] [cursor=pointer]
                - cell "  " [ref=e180]:
                  - generic [ref=e181]:
                    - link "" [ref=e182] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e183]: 
                    - text:  
                  - link "" [ref=e184] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=89
                    - generic [ref=e185]: 
                  - generic "Xóa" [ref=e186]:
                    - generic [ref=e187]: 
              - row "1 Minimalist Modern Kitchen Minimalist Modern Kitchen  View  Edit  Copy  Delete   " [ref=e188]:
                - cell [ref=e189]:
                  - checkbox [ref=e191] [cursor=pointer]
                - cell "1" [ref=e193]:
                  - spinbutton [ref=e194]: "1"
                - cell "Minimalist Modern Kitchen" [ref=e195]:
                  - link "Minimalist Modern Kitchen" [ref=e196] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=75
                    - img "Minimalist Modern Kitchen" [ref=e197]
                - cell "Minimalist Modern Kitchen  View  Edit  Copy  Delete" [ref=e198]:
                  - link "Minimalist Modern Kitchen" [ref=e199] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=75
                  - generic [ref=e200]:
                    - link " View" [ref=e201] [cursor=pointer]:
                      - /url: https://code7.mimadigi.vn/2026_09/trantiendung_115926w/minimalist-modern-kitchen
                      - generic [ref=e202]: 
                      - text: View
                    - link " Edit" [ref=e203] [cursor=pointer]:
                      - /url: news?act=edit&type=du-an&id=75
                      - generic [ref=e204]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e205] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e206]: 
                        - text: Copy
                      - text:  
                    - generic "Minimalist Modern Kitchen" [ref=e207] [cursor=pointer]:
                      - generic [ref=e208]: 
                      - text: Delete
                - cell [ref=e209]:
                  - checkbox [ref=e211] [cursor=pointer]
                - cell [ref=e213]:
                  - checkbox [ref=e215] [cursor=pointer]
                - cell [ref=e217]:
                  - checkbox [checked] [ref=e219] [cursor=pointer]
                - cell "  " [ref=e221]:
                  - generic [ref=e222]:
                    - link "" [ref=e223] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e224]: 
                    - text:  
                  - link "" [ref=e225] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=75
                    - generic [ref=e226]: 
                  - generic "Xóa" [ref=e227]:
                    - generic [ref=e228]: 
              - row "2 Contemporary Open Kitchen Contemporary Open Kitchen  View  Edit  Copy  Delete   " [ref=e229]:
                - cell [ref=e230]:
                  - checkbox [ref=e232] [cursor=pointer]
                - cell "2" [ref=e234]:
                  - spinbutton [ref=e235]: "2"
                - cell "Contemporary Open Kitchen" [ref=e236]:
                  - link "Contemporary Open Kitchen" [ref=e237] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=76
                    - img "Contemporary Open Kitchen" [ref=e238]
                - cell "Contemporary Open Kitchen  View  Edit  Copy  Delete" [ref=e239]:
                  - link "Contemporary Open Kitchen" [ref=e240] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=76
                  - generic [ref=e241]:
                    - link " View" [ref=e242] [cursor=pointer]:
                      - /url: https://code7.mimadigi.vn/2026_09/trantiendung_115926w/contemporary-open-kitchen
                      - generic [ref=e243]: 
                      - text: View
                    - link " Edit" [ref=e244] [cursor=pointer]:
                      - /url: news?act=edit&type=du-an&id=76
                      - generic [ref=e245]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e246] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e247]: 
                        - text: Copy
                      - text:  
                    - generic "Contemporary Open Kitchen" [ref=e248] [cursor=pointer]:
                      - generic [ref=e249]: 
                      - text: Delete
                - cell [ref=e250]:
                  - checkbox [ref=e252] [cursor=pointer]
                - cell [ref=e254]:
                  - checkbox [ref=e256] [cursor=pointer]
                - cell [ref=e258]:
                  - checkbox [checked] [ref=e260] [cursor=pointer]
                - cell "  " [ref=e262]:
                  - generic [ref=e263]:
                    - link "" [ref=e264] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e265]: 
                    - text:  
                  - link "" [ref=e266] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=76
                    - generic [ref=e267]: 
                  - generic "Xóa" [ref=e268]:
                    - generic [ref=e269]: 
              - row "3 Japandi Style Kitchen Warm wood, quiet tones, and a calm mix of Japanese and Scandinavian design. Japandi Style Kitchen Warm wood, quiet tones, and a calm mix of Japanese and Scandinavian design.  View  Edit  Copy  Delete   " [ref=e270]:
                - cell [ref=e271]:
                  - checkbox [ref=e273] [cursor=pointer]
                - cell "3" [ref=e275]:
                  - spinbutton [ref=e276]: "3"
                - cell "Japandi Style Kitchen Warm wood, quiet tones, and a calm mix of Japanese and Scandinavian design." [ref=e277]:
                  - link "Japandi Style Kitchen Warm wood, quiet tones, and a calm mix of Japanese and Scandinavian design." [ref=e278] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=77
                    - img "Japandi Style Kitchen Warm wood, quiet tones, and a calm mix of Japanese and Scandinavian design." [ref=e279]
                - cell "Japandi Style Kitchen Warm wood, quiet tones, and a calm mix of Japanese and Scandinavian design.  View  Edit  Copy  Delete" [ref=e280]:
                  - link "Japandi Style Kitchen Warm wood, quiet tones, and a calm mix of Japanese and Scandinavian design." [ref=e281] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=77
                  - generic [ref=e282]:
                    - link " View" [ref=e283] [cursor=pointer]:
                      - /url: https://code7.mimadigi.vn/2026_09/trantiendung_115926w/japandi-style-kitchen
                      - generic [ref=e284]: 
                      - text: View
                    - link " Edit" [ref=e285] [cursor=pointer]:
                      - /url: news?act=edit&type=du-an&id=77
                      - generic [ref=e286]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e287] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e288]: 
                        - text: Copy
                      - text:  
                    - generic "Japandi Style Kitchen Warm wood, quiet tones, and a calm mix of Japanese and Scandinavian design." [ref=e289] [cursor=pointer]:
                      - generic [ref=e290]: 
                      - text: Delete
                - cell [ref=e291]:
                  - checkbox [ref=e293] [cursor=pointer]
                - cell [ref=e295]:
                  - checkbox [checked] [ref=e297] [cursor=pointer]
                - cell [ref=e299]:
                  - checkbox [checked] [ref=e301] [cursor=pointer]
                - cell "  " [ref=e303]:
                  - generic [ref=e304]:
                    - link "" [ref=e305] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e306]: 
                    - text:  
                  - link "" [ref=e307] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=77
                    - generic [ref=e308]: 
                  - generic "Xóa" [ref=e309]:
                    - generic [ref=e310]: 
              - row "4 Industrial Luxury Kitchen Industrial Luxury Kitchen  View  Edit  Copy  Delete   " [ref=e311]:
                - cell [ref=e312]:
                  - checkbox [ref=e314] [cursor=pointer]
                - cell "4" [ref=e316]:
                  - spinbutton [ref=e317]: "4"
                - cell "Industrial Luxury Kitchen" [ref=e318]:
                  - link "Industrial Luxury Kitchen" [ref=e319] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=78
                    - img "Industrial Luxury Kitchen" [ref=e320]
                - cell "Industrial Luxury Kitchen  View  Edit  Copy  Delete" [ref=e321]:
                  - link "Industrial Luxury Kitchen" [ref=e322] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=78
                  - generic [ref=e323]:
                    - link " View" [ref=e324] [cursor=pointer]:
                      - /url: https://code7.mimadigi.vn/2026_09/trantiendung_115926w/industrial-luxury-kitchen
                      - generic [ref=e325]: 
                      - text: View
                    - link " Edit" [ref=e326] [cursor=pointer]:
                      - /url: news?act=edit&type=du-an&id=78
                      - generic [ref=e327]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e328] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e329]: 
                        - text: Copy
                      - text:  
                    - generic "Industrial Luxury Kitchen" [ref=e330] [cursor=pointer]:
                      - generic [ref=e331]: 
                      - text: Delete
                - cell [ref=e332]:
                  - checkbox [ref=e334] [cursor=pointer]
                - cell [ref=e336]:
                  - checkbox [ref=e338] [cursor=pointer]
                - cell [ref=e340]:
                  - checkbox [checked] [ref=e342] [cursor=pointer]
                - cell "  " [ref=e344]:
                  - generic [ref=e345]:
                    - link "" [ref=e346] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e347]: 
                    - text:  
                  - link "" [ref=e348] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=78
                    - generic [ref=e349]: 
                  - generic "Xóa" [ref=e350]:
                    - generic [ref=e351]: 
              - row "5 Classic Wooden Kitchen Classic Wooden Kitchen  View  Edit  Copy  Delete   " [ref=e352]:
                - cell [ref=e353]:
                  - checkbox [ref=e355] [cursor=pointer]
                - cell "5" [ref=e357]:
                  - spinbutton [ref=e358]: "5"
                - cell "Classic Wooden Kitchen" [ref=e359]:
                  - link "Classic Wooden Kitchen" [ref=e360] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=79
                    - img "Classic Wooden Kitchen" [ref=e361]
                - cell "Classic Wooden Kitchen  View  Edit  Copy  Delete" [ref=e362]:
                  - link "Classic Wooden Kitchen" [ref=e363] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=79
                  - generic [ref=e364]:
                    - link " View" [ref=e365] [cursor=pointer]:
                      - /url: https://code7.mimadigi.vn/2026_09/trantiendung_115926w/classic-wooden-kitchen
                      - generic [ref=e366]: 
                      - text: View
                    - link " Edit" [ref=e367] [cursor=pointer]:
                      - /url: news?act=edit&type=du-an&id=79
                      - generic [ref=e368]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e369] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e370]: 
                        - text: Copy
                      - text:  
                    - generic "Classic Wooden Kitchen" [ref=e371] [cursor=pointer]:
                      - generic [ref=e372]: 
                      - text: Delete
                - cell [ref=e373]:
                  - checkbox [ref=e375] [cursor=pointer]
                - cell [ref=e377]:
                  - checkbox [checked] [ref=e379] [cursor=pointer]
                - cell [ref=e381]:
                  - checkbox [checked] [ref=e383] [cursor=pointer]
                - cell "  " [ref=e385]:
                  - generic [ref=e386]:
                    - link "" [ref=e387] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e388]: 
                    - text:  
                  - link "" [ref=e389] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=79
                    - generic [ref=e390]: 
                  - generic "Xóa" [ref=e391]:
                    - generic [ref=e392]: 
              - row "6 Smart Modular Kitchen Smart Modular Kitchen  View  Edit  Copy  Delete   " [ref=e393]:
                - cell [ref=e394]:
                  - checkbox [ref=e396] [cursor=pointer]
                - cell "6" [ref=e398]:
                  - spinbutton [ref=e399]: "6"
                - cell "Smart Modular Kitchen" [ref=e400]:
                  - link "Smart Modular Kitchen" [ref=e401] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=80
                    - img "Smart Modular Kitchen" [ref=e402]
                - cell "Smart Modular Kitchen  View  Edit  Copy  Delete" [ref=e403]:
                  - link "Smart Modular Kitchen" [ref=e404] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=80
                  - generic [ref=e405]:
                    - link " View" [ref=e406] [cursor=pointer]:
                      - /url: https://code7.mimadigi.vn/2026_09/trantiendung_115926w/smart-modular-kitchen
                      - generic [ref=e407]: 
                      - text: View
                    - link " Edit" [ref=e408] [cursor=pointer]:
                      - /url: news?act=edit&type=du-an&id=80
                      - generic [ref=e409]: 
                      - text: Edit
                    - generic:
                      - link " Copy" [ref=e410] [cursor=pointer]:
                        - /url: "#"
                        - generic [ref=e411]: 
                        - text: Copy
                      - text:  
                    - generic "Smart Modular Kitchen" [ref=e412] [cursor=pointer]:
                      - generic [ref=e413]: 
                      - text: Delete
                - cell [ref=e414]:
                  - checkbox [ref=e416] [cursor=pointer]
                - cell [ref=e418]:
                  - checkbox [checked] [ref=e420] [cursor=pointer]
                - cell [ref=e422]:
                  - checkbox [checked] [ref=e424] [cursor=pointer]
                - cell "  " [ref=e426]:
                  - generic [ref=e427]:
                    - link "" [ref=e428] [cursor=pointer]:
                      - /url: "#"
                      - generic [ref=e429]: 
                    - text:  
                  - link "" [ref=e430] [cursor=pointer]:
                    - /url: news?act=edit&type=du-an&id=80
                    - generic [ref=e431]: 
                  - generic "Xóa" [ref=e432]:
                    - generic [ref=e433]: 
        - generic [ref=e434]:
          - link "+ Thêm mới" [ref=e435] [cursor=pointer]:
            - /url: news?act=add&type=du-an
            - generic [ref=e436]: +
            - text: Thêm mới
          - generic "Xóa tất cả" [ref=e437] [cursor=pointer]:
            - generic [ref=e438]: 
            - text: Xóa tất cả
    - contentinfo [ref=e439]:
      - paragraph [ref=e442]:
        - strong [ref=e444]: Công Ty TNHH Thương Mại Dịch Vụ MIMA
        - text: MST
        - strong [ref=e445]: ":"
        - text: "0318672839"
        - strong [ref=e446]: "Địa chỉ:"
        - link [ref=e447] [cursor=pointer]:
          - /url: https://maps.app.goo.gl/rA8evCuRwT3Go6bR9
          - text: 31/3B Ấp Thới Tứ 1, Xã Đông Thạnh, TP Hồ Chí Minh
        - text: ", Việt Nam"
        - strong [ref=e448]: "Hotline:"
        - text: 0909 035 333
        - strong [ref=e449]: "Website:"
        - link [ref=e450] [cursor=pointer]:
          - /url: https://mimadigi.com
          - text: https://
        - link [ref=e451] [cursor=pointer]:
          - /url: https://mimadigi.com
          - text: mimadigi.com
        - strong [ref=e452]: "Email:"
        - text: info@mimadigi.com
        - link [ref=e453] [cursor=pointer]:
          - /url: //www.dmca.com/Protection/Status.aspx?ID=2f39ff2a-7db5-4e53-9bb6-15ee8957080c&refurl=https://mimadigi.com/
          - img [ref=e454]
        - link [ref=e455] [cursor=pointer]:
          - /url: http://online.gov.vn/Website/chi-tiet-134906
          - img [ref=e456]
  - generic [ref=e457]:
    - generic [ref=e458]: Giao diện
    - generic [ref=e460]:
      - generic [ref=e461]:
        - heading "Chế độ" [level=4] [ref=e462]
        - generic [ref=e464]:
          - generic [ref=e465]:
            - generic [ref=e468] [cursor=pointer]:
              - img "Sáng"
            - generic [ref=e469]: Sáng
          - generic [ref=e470]:
            - generic [ref=e473] [cursor=pointer]:
              - img "Tối"
            - generic [ref=e474]: Tối
          - generic [ref=e475]:
            - generic [ref=e478] [cursor=pointer]:
              - img "Hệ thống"
            - generic [ref=e479]: Hệ thống
      - generic [ref=e480]:
        - heading "Bố cục" [level=4] [ref=e481]
        - generic [ref=e483]:
          - generic [ref=e484]:
            - generic [ref=e487] [cursor=pointer]:
              - img "Mặc định"
            - generic [ref=e488]: Mặc định
          - generic [ref=e489]:
            - generic [ref=e492] [cursor=pointer]:
              - img "Semi Dark"
            - generic [ref=e493]: Semi Dark
    - generic "Tùy chỉnh giao diện" [ref=e494] [cursor=pointer]:
      - generic [ref=e495]: 
```

# Test source

```ts
  372 |             // ===== PHẦN NỘI DUNG SẢN PHẨM (EN) — chỉ chạy nếu có enData =====
  373 |             if (hasEnData) {
  374 |                 const contentTabEnVisible = await this.contentTabEn.isVisible({ timeout: this.ELEMENT_DETECT_TIMEOUT }).catch(() => false);
  375 |                 if (contentTabEnVisible) {
  376 |                     await this.clickOn(this.contentTabEn);
  377 | 
  378 |                     if (enData?.titleEn) await this.typeInto(this.titleEnInput, enData.titleEn);
  379 | 
  380 |                     if (enData?.descEn) {
  381 |                         try {
  382 |                             await this.descEnHtml.fill(enData.descEn, { timeout: this.ELEMENT_DETECT_TIMEOUT });
  383 |                         } catch (e) {
  384 |                             try {
  385 |                                 await this.descEnTextarea.fill(enData.descEn, { timeout: this.ELEMENT_DETECT_TIMEOUT });
  386 |                             } catch (err) {
  387 |                                 console.log('CẢNH BÁO: Không thể fill desc EN qua frameLocator, bỏ qua.');
  388 |                             }
  389 |                         }
  390 |                     }
  391 | 
  392 |                     if (enData?.contentEn) {
  393 |                         try {
  394 |                             await this.contentEnHtml.fill(enData.contentEn, { timeout: this.ELEMENT_DETECT_TIMEOUT });
  395 |                         } catch (e) {
  396 |                             // Fallback nếu CKEditor EN chưa khởi tạo
  397 |                             console.log('CẢNH BÁO: Không thể fill content EN qua frameLocator, bỏ qua.');
  398 |                         }
  399 |                     }
  400 | 
  401 |                     if (enData?.thongsoEn) {
  402 |                         try {
  403 |                             await this.thongsoEnHtml.fill(enData.thongsoEn, { timeout: this.ELEMENT_DETECT_TIMEOUT });
  404 |                         } catch (e) {
  405 |                             console.log('CẢNH BÁO: Không thể fill thongso EN qua frameLocator, bỏ qua.');
  406 |                         }
  407 |                     }
  408 |                 }
  409 |             }
  410 | 
  411 |             // ===== PHẦN HÌNH ẢNH (không có tab ngôn ngữ) =====
  412 |             if (imagePath) {
  413 |                 if (await this.imageUploadButton.isVisible({ timeout: this.ELEMENT_DETECT_TIMEOUT }).catch(() => false)) {
  414 |                     try {
  415 |                         const fileChooserPromise = this.page.waitForEvent('filechooser', { timeout: 5000 });
  416 |                         await this.clickOn(this.imageUploadButton);
  417 |                         const fileChooser = await fileChooserPromise;
  418 |                         await fileChooser.setFiles(imagePath);
  419 |                         await this.page.waitForLoadState('networkidle', { timeout: this.UPLOAD_SETTLE_TIMEOUT }).catch(() => { });
  420 |                     } catch (e) {
  421 |                         console.log('CẢNH BÁO: Không thể upload hình ảnh, bỏ qua.');
  422 |                     }
  423 |                 }
  424 |             }
  425 | 
  426 |             if (galleryPaths && galleryPaths.length > 0) {
  427 |                 if (await this.galleryUploadButton.first().isVisible({ timeout: this.ELEMENT_DETECT_TIMEOUT }).catch(() => false)) {
  428 |                     try {
  429 |                         const fileChooserPromise = this.page.waitForEvent('filechooser', { timeout: 5000 });
  430 |                         await this.clickOn(this.galleryUploadButton.first());
  431 |                         const fileChooser = await fileChooserPromise;
  432 |                         await fileChooser.setFiles(galleryPaths);
  433 |                         await this.page.waitForLoadState('networkidle', { timeout: this.UPLOAD_SETTLE_TIMEOUT }).catch(() => { });
  434 |                     } catch (e) {
  435 |                         console.log('CẢNH BÁO: Không thể upload thư viện ảnh, bỏ qua.');
  436 |                     }
  437 |                 }
  438 |             }
  439 | 
  440 |             await this.clickOn(this.saveButton);
  441 |         });
  442 |     }
  443 | 
  444 |     async verifyAdminSuccess() {
  445 |         await test.step("Xác nhận thông báo lưu thành công trong Admin", async () => {
  446 |             // Đợi navigation hoàn tất trước (server xử lý save + redirect)
  447 |             await this.page.waitForLoadState('domcontentloaded', { timeout: this.ADMIN_ACTION_TIMEOUT }).catch(() => { });
  448 |             await this.successAdminMessage.waitFor({ state: 'visible', timeout: this.ADMIN_ACTION_TIMEOUT });
  449 |         });
  450 |     }
  451 | 
  452 |     async verifyOnWebsite(title: string) {
  453 |         await test.step(`Kiểm tra bài viết '${title}' hiển thị trên trang web`, async () => {
  454 |             const baseUrl = process.env.BASE_URL?.endsWith('/') ? process.env.BASE_URL : process.env.BASE_URL + '/';
  455 |             const urlsToTry = Array.isArray(this.clientUrl) ? this.clientUrl : [this.clientUrl];
  456 |             let found = false;
  457 | 
  458 |             for (const url of urlsToTry) {
  459 |                 try {
  460 |                     await this.page.goto(baseUrl + url);
  461 |                     const articleItem = this.page.getByText(title, { exact: false }).first();
  462 |                     await articleItem.waitFor({ state: 'visible', timeout: 5000 });
  463 |                     found = true;
  464 |                     break;
  465 | 
  466 |                 } catch (error) {
  467 |                     // Tiếp tục vòng lặp thử URL tiếp theo
  468 |                 }
  469 |             }
  470 | 
  471 |             if (!found) {
> 472 |                 throw new Error(`Không tìm thấy bài viết '${title}' trên các trang: ${urlsToTry.join(', ')}`);
      |                       ^ Error: Không tìm thấy bài viết 'Dự án Automation 1789782899012' trên các trang: du-an
  473 |             }
  474 |         });
  475 |     }
  476 | 
  477 |     async deleteArticle(title: string) {
  478 |         await test.step(`Xóa bài viết '${title}' trong Admin`, async () => {
  479 |             const dialogHandler = async (dialog: any) => {
  480 |                 await dialog.accept();
  481 |             };
  482 |             this.page.on('dialog', dialogHandler);
  483 | 
  484 |             // Thực hiện tìm kiếm bài viết trước để đảm bảo bài viết nằm ở trang 1 (Tránh lỗi do Bulk Test đẩy bài viết sang trang 2)
  485 |             try {
  486 |                 const searchInput = this.page.locator("input[placeholder*='Tìm kiếm' i], input#keyword, input[name='keyword']").first();
  487 |                 const searchBtn = this.page.locator("button, a").filter({ has: this.page.locator(".fa-search") }).first();
  488 | 
  489 |                 if (await searchInput.isVisible({ timeout: this.ELEMENT_DETECT_TIMEOUT })) {
  490 |                     await searchInput.fill(title);
  491 |                     if (await searchBtn.isVisible({ timeout: this.ELEMENT_DETECT_TIMEOUT })) {
  492 |                         await Promise.all([
  493 |                             this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 5000 }).catch(() => { }),
  494 |                             searchBtn.click()
  495 |                         ]);
  496 |                     } else {
  497 |                         await Promise.all([
  498 |                             this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 5000 }).catch(() => { }),
  499 |                             searchInput.press('Enter')
  500 |                         ]);
  501 |                     }
  502 |                     await TestHelper.delay(this.page, 1000);
  503 |                 }
  504 |             } catch (error) {
  505 |                 // Bỏ qua nếu không tìm thấy thanh tìm kiếm
  506 |             }
  507 | 
  508 |             // Đợi bảng dữ liệu load xong trước khi tìm row
  509 |             await this.tableRows.first().waitFor({ state: 'visible', timeout: 10000 }).catch(() => { });
  510 |             await TestHelper.delay(this.page, 500);
  511 | 
  512 |             const rowLocator = this.page.locator('tr').filter({ hasText: title }).first();
  513 | 
  514 |             try {
  515 |                 // Chờ thẻ tr xuất hiện
  516 |                 await rowLocator.waitFor({ state: 'attached', timeout: 5000 });
  517 | 
  518 |                 // Dùng CSS Selector tìm đúng thẻ <a> bọc ngoài icon trash
  519 |                 const deleteBtn = rowLocator.locator("a").filter({ has: this.page.locator(".fa-trash-alt, .fa-trash") }).first();
  520 |                 await deleteBtn.waitFor({ state: 'visible', timeout: 3000 });
  521 |                 await deleteBtn.click({ force: true });
  522 |             } catch (error) {
  523 |                 // Fallback cho giao diện dạng list (div, li)
  524 |                 const itemLocator = this.page.locator('div, li').filter({ hasText: title }).first();
  525 |                 await itemLocator.waitFor({ state: 'attached', timeout: 3000 }).catch(() => { });
  526 | 
  527 |                 const deleteBtn = itemLocator.locator("a").filter({ has: this.page.locator(".fa-trash-alt, .fa-trash") }).first();
  528 |                 if (await deleteBtn.isVisible().catch(() => false) || await deleteBtn.count() > 0) {
  529 |                     await deleteBtn.click({ force: true }).catch(() => { });
  530 |                 } else {
  531 |                     console.log(`Bỏ qua: Không tìm thấy nút xóa cho bài viết '${title}' (có thể đã bị xóa hoặc không tồn tại)`);
  532 |                 }
  533 |             }
  534 | 
  535 |             // Chờ modal xác nhận (SweetAlert) nếu có
  536 |             await this.confirmDeleteButton.waitFor({ state: 'visible', timeout: 5000 }).catch(() => { });
  537 |             if (await this.confirmDeleteButton.isVisible()) {
  538 |                 // Click Đồng ý và đợi load lại bảng để chắc chắn server đã xử lý xóa
  539 |                 await Promise.all([
  540 |                     this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 }).catch(() => {
  541 |                         // Fallback nếu web dùng AJAX để xóa thay vì reload trang
  542 |                         return this.page.waitForLoadState('networkidle', { timeout: 3000 }).catch(() => { });
  543 |                     }),
  544 |                     this.confirmDeleteButton.click({ force: true })
  545 |                 ]);
  546 |             }
  547 | 
  548 |             await TestHelper.delay(this.page, 2000);
  549 | 
  550 |             this.page.off('dialog', dialogHandler);
  551 |         });
  552 |     }
  553 | 
  554 |     async deleteArticlesWithPrefix(prefix: string) {
  555 |         await test.step(`Xóa hàng loạt các bài viết có tiền tố '${prefix}'`, async () => {
  556 |             let hasItemsToDelete = true;
  557 |             let emptyChecks = 0; // Đếm số lần không tìm thấy dữ liệu để retry
  558 | 
  559 |             while (hasItemsToDelete && emptyChecks < 3) {
  560 |                 // Đợi cho mạng ổn định một chút phòng trường hợp AJAX đang tải dữ liệu bảng mới
  561 |                 await this.page.waitForLoadState('domcontentloaded');
  562 |                 await TestHelper.delay(this.page, 1500); // Thêm lại delay cứng nhỏ vì nếu web dùng AJAX thì loadState không bắt được
  563 | 
  564 |                 hasItemsToDelete = false;
  565 |                 const rows = await this.tableRows.all();
  566 |                 let clickedCount = 0;
  567 | 
  568 |                 for (const row of rows) {
  569 |                     const rowText = await row.innerText().catch(() => ""); // Bắt lỗi lỡ DOM bị detached
  570 | 
  571 |                     if (rowText.includes(prefix)) {
  572 |                         const rowCheckbox = row.locator('.select-checkbox').first();
```