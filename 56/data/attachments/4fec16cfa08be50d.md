# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin/news.spec.ts >> News Management Tests >> Add news should fail with không nhập tiêu đề
- Location: tests/admin/news.spec.ts:24:17

# Error details

```
TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('xpath=(//input[@id=\'slugvi\'])[1]') to be visible

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
          - link " 13" [ref=e18] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e19]: 
            - generic [ref=e20]: "13"
          - text:   
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
            - text:       
          - listitem [ref=e43]:
            - link " Quản lý Đặt món " [ref=e44] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e45]: 
              - paragraph [ref=e46]:
                - text: Quản lý Đặt món
                - generic [ref=e47]: 
            - text:  
          - listitem [ref=e48]:
            - link " Quản lý Phòng vip/sảnh " [ref=e49] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e50]: 
              - paragraph [ref=e51]:
                - text: Quản lý Phòng vip/sảnh
                - generic [ref=e52]: 
            - text: 
          - listitem [ref=e53]:
            - link " Quản lý bài viết " [ref=e54] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e55]: 
              - paragraph [ref=e56]:
                - text: Quản lý bài viết
                - generic [ref=e57]: 
            - text:      
          - listitem [ref=e58]:
            - link " Quản lý đơn hàng" [ref=e59] [cursor=pointer]:
              - /url: order?act=man
              - generic [ref=e60]: 
              - paragraph [ref=e61]: Quản lý đơn hàng
          - listitem [ref=e62]:
            - link " Quản lý nhận tin " [ref=e63] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e64]: 
              - paragraph [ref=e65]:
                - text: Quản lý nhận tin
                - generic [ref=e66]: 
            - text: 
          - listitem [ref=e67]:
            - link " Quản lý trang tĩnh " [ref=e68] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e69]: 
              - paragraph [ref=e70]:
                - text: Quản lý trang tĩnh
                - generic [ref=e71]: 
            - text:   
          - listitem [ref=e72]:
            - link " Quản lý hình ảnh - video " [ref=e73] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e74]: 
              - paragraph [ref=e75]:
                - text: Quản lý hình ảnh - video
                - generic [ref=e76]: 
            - text:                   
          - listitem [ref=e77]:
            - link " Quản lý seo page " [ref=e78] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e79]: 
              - paragraph [ref=e80]:
                - text: Quản lý seo page
                - generic [ref=e81]: 
            - text:        
          - listitem [ref=e82]:
            - link " Thiết lập thông tin" [ref=e83] [cursor=pointer]:
              - /url: setting?act=update
              - generic [ref=e84]: 
              - paragraph [ref=e85]: Thiết lập thông tin
    - generic [ref=e86]:
      - generic [ref=e88]:
        - heading "Bảng điều khiển" [level=5] [ref=e89]
        - generic [ref=e90]:
          - link " Cấu hình website Xem thêm" [ref=e92] [cursor=pointer]:
            - /url: setting?act=update
            - generic [ref=e94]: 
            - generic [ref=e95]:
              - generic [ref=e96]: Cấu hình website
              - generic [ref=e97]: Xem thêm
          - link " Quản lý tài khoản Xem thêm" [ref=e99] [cursor=pointer]:
            - /url: user?act=info_admin
            - generic [ref=e101]: 
            - generic [ref=e102]:
              - generic [ref=e103]: Quản lý tài khoản
              - generic [ref=e104]: Xem thêm
          - link " Đổi mật khẩu Xem thêm" [ref=e106] [cursor=pointer]:
            - /url: user?act=info_admin&changepass=1
            - generic [ref=e108]: 
            - generic [ref=e109]:
              - generic [ref=e110]: Đổi mật khẩu
              - generic [ref=e111]: Xem thêm
          - link " Thư liên hệ Xem thêm" [ref=e113] [cursor=pointer]:
            - /url: contact?act=man
            - generic [ref=e115]: 
            - generic [ref=e116]:
              - generic [ref=e117]: Thư liên hệ
              - generic [ref=e118]: Xem thêm
      - generic [ref=e121]:
        - generic [ref=e123]:
          - heading "Thống kê truy cập online" [level=5] [ref=e125]
          - generic [ref=e127]:
            - generic [ref=e128]:
              - img [ref=e131]:
                - generic [ref=e136]:
                  - generic: "6429"
                  - generic: "55369"
              - paragraph [ref=e143]:
                - text: Đang online
                - generic [ref=e144]: "221"
            - generic [ref=e145]:
              - paragraph [ref=e146]:
                - text: "Đang online:"
                - strong [ref=e148]: "221"
              - paragraph [ref=e149]:
                - text: "Trong tuần:"
                - strong [ref=e151]: "1494"
              - paragraph [ref=e152]:
                - text: "Trong tháng:"
                - strong [ref=e154]: "6429"
              - paragraph [ref=e155]:
                - text: "Tổng truy cập:"
                - strong [ref=e157]: "55369"
        - generic [ref=e160]:
          - generic [ref=e161]:
            - heading "Thống kê truy cập tháng 08/2026" [level=5] [ref=e162]
            - generic [ref=e163]:
              - generic [ref=e165]: 
              - generic [ref=e167]:
                - combobox [ref=e168]
                - combobox "Tháng 8" [ref=e171] [cursor=pointer]:
                  - textbox "Tháng 8" [ref=e172]
              - generic [ref=e174]:
                - combobox [ref=e175]
                - combobox "Năm 2026" [ref=e178] [cursor=pointer]:
                  - textbox "Năm 2026" [ref=e179]
              - button "Thống Kê" [ref=e182] [cursor=pointer]
          - generic [ref=e186]:
            - img [ref=e187]:
              - generic [ref=e188]:
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
                  - generic: "700"
                  - generic: "600"
                  - generic: "500"
                  - generic: "400"
                  - generic: "300"
                  - generic: "200"
                  - generic: "100"
                  - generic: "0"
            - generic [ref=e262]:
              - generic:
                - generic "Download SVG"
                - generic "Download PNG"
      - generic [ref=e265]:
        - generic [ref=e267]:
          - generic [ref=e269]: 
          - heading "Hotline" [level=5] [ref=e270]
          - generic [ref=e271]: "447"
        - generic [ref=e273]:
          - generic [ref=e275]: 
          - heading "Zalo" [level=5] [ref=e276]
          - generic [ref=e277]: "346"
        - generic [ref=e279]:
          - generic [ref=e281]: 
          - heading "Liên hệ" [level=5] [ref=e282]
          - generic [ref=e283]: "34"
        - generic [ref=e285]:
          - generic [ref=e287]: 
          - heading "Đơn hàng" [level=5] [ref=e288]
          - generic [ref=e289]: "105"
      - generic [ref=e294]:
        - generic [ref=e295]:
          - heading "Thống kê truy cập trình duyệt" [level=5] [ref=e297]
          - list [ref=e299]:
            - listitem [ref=e300]:
              - paragraph [ref=e301]:
                - img "Chrome" [ref=e302]
                - text: Chrome
              - paragraph [ref=e303]: "24642"
            - listitem [ref=e304]:
              - paragraph [ref=e305]:
                - img "Edge" [ref=e306]
                - text: Microsoft Edge
              - paragraph [ref=e307]: "477"
            - listitem [ref=e308]:
              - paragraph [ref=e309]:
                - img "Internet Explorer" [ref=e310]
                - text: Internet Explorer
              - paragraph [ref=e311]: "237"
            - listitem [ref=e312]:
              - paragraph [ref=e313]:
                - img "Firefox" [ref=e314]
                - text: Mozilla Firefox
              - paragraph [ref=e315]: "587"
            - listitem [ref=e316]:
              - paragraph [ref=e317]:
                - img "Safari" [ref=e318]
                - text: Safari
              - paragraph [ref=e319]: "14986"
            - listitem [ref=e320]:
              - paragraph [ref=e321]:
                - img "Opera" [ref=e322]
                - text: Opera
              - paragraph [ref=e323]: "259"
            - listitem [ref=e324]:
              - paragraph [ref=e325]:
                - img "Khác" [ref=e326]
                - text: Khác
              - paragraph [ref=e327]: "14181"
        - generic [ref=e328]:
          - heading "Thống kê số lượng truy cập theo thiết bị" [level=5] [ref=e330]
          - generic [ref=e333]:
            - generic [ref=e336]:
              - generic [ref=e337]:
                - img "Desktop" [ref=e338]
                - generic [ref=e339]: Desktop
              - heading "61%" [level=5] [ref=e340]
              - paragraph [ref=e341]: 33985 lượt truy cập
            - generic [ref=e344]:
              - generic [ref=e345]:
                - img "Mobile" [ref=e346]
                - generic [ref=e347]: Mobile
              - heading "39%" [level=5] [ref=e348]
              - paragraph [ref=e349]: 21384 lượt truy cập
        - generic [ref=e350]:
          - heading "Thống kê IP truy cập web" [level=5] [ref=e352]
          - generic [ref=e353]:
            - generic [ref=e354]:
              - generic [ref=e355]:
                - generic [ref=e356]: 
                - strong [ref=e357]: 162.120.184.63
              - generic [ref=e359]: 1317 lượt
            - generic [ref=e360]:
              - generic [ref=e361]:
                - generic [ref=e362]: 
                - strong [ref=e363]: 162.120.184.47
              - generic [ref=e365]: 1292 lượt
            - generic [ref=e366]:
              - generic [ref=e367]:
                - generic [ref=e368]: 
                - strong [ref=e369]: 162.120.184.46
              - generic [ref=e371]: 1179 lượt
            - generic [ref=e372]:
              - generic [ref=e373]:
                - generic [ref=e374]: 
                - strong [ref=e375]: 72.14.201.157
              - generic [ref=e377]: 1126 lượt
            - generic [ref=e378]:
              - generic [ref=e379]:
                - generic [ref=e380]: 
                - strong [ref=e381]: 72.14.201.156
              - generic [ref=e383]: 965 lượt
            - generic [ref=e384]:
              - generic [ref=e385]:
                - generic [ref=e386]: 
                - strong [ref=e387]: 72.14.201.135
              - generic [ref=e389]: 954 lượt
            - generic [ref=e390]:
              - generic [ref=e391]:
                - generic [ref=e392]: 
                - strong [ref=e393]: 193.186.4.135
              - generic [ref=e395]: 753 lượt
            - generic [ref=e396]:
              - generic [ref=e397]:
                - generic [ref=e398]: 
                - strong [ref=e399]: 193.186.4.157
              - generic [ref=e401]: 705 lượt
            - generic [ref=e402]:
              - generic [ref=e403]:
                - generic [ref=e404]: 
                - strong [ref=e405]: 193.186.4.156
              - generic [ref=e407]: 687 lượt
            - generic [ref=e408]:
              - generic [ref=e409]:
                - generic [ref=e410]: 
                - strong [ref=e411]: 216.244.66.245
              - generic [ref=e413]: 528 lượt
      - generic [ref=e418]:
        - generic [ref=e420]:
          - heading "Số người dùng theo Mã quốc gia" [level=5] [ref=e422]:
            - text: Số người dùng theo
            - link "Mã quốc gia" [ref=e423] [cursor=pointer]:
              - /url: "#"
          - table [ref=e424]:
            - rowgroup [ref=e425]:
              - row "QUỐC GIA LƯỢNG TRUY CẬP" [ref=e426]:
                - columnheader "QUỐC GIA" [ref=e427]
                - columnheader "LƯỢNG TRUY CẬP" [ref=e428]
            - rowgroup [ref=e429]:
              - row "United States 15930 (31.85%)" [ref=e430]:
                - cell "United States" [ref=e431]
                - cell "15930 (31.85%)" [ref=e432]: 15930 (31.85%)
              - row "Vietnam 15183 (30.35%)" [ref=e435]:
                - cell "Vietnam" [ref=e436]
                - cell "15183 (30.35%)" [ref=e437]: 15183 (30.35%)
              - row "Unknown 11468 (22.93%)" [ref=e440]:
                - cell "Unknown" [ref=e441]
                - cell "11468 (22.93%)" [ref=e442]: 11468 (22.93%)
              - row "Singapore 2080 (4.16%)" [ref=e445]:
                - cell "Singapore" [ref=e446]
                - cell "2080 (4.16%)" [ref=e447]: 2080 (4.16%)
              - row "China 1622 (3.24%)" [ref=e450]:
                - cell "China" [ref=e451]
                - cell "1622 (3.24%)" [ref=e452]: 1622 (3.24%)
              - row "Canada 993 (1.99%)" [ref=e455]:
                - cell "Canada" [ref=e456]
                - cell "993 (1.99%)" [ref=e457]: 993 (1.99%)
              - row "Germany 757 (1.51%)" [ref=e460]:
                - cell "Germany" [ref=e461]
                - cell "757 (1.51%)" [ref=e462]: 757 (1.51%)
              - row "France 751 (1.5%)" [ref=e465]:
                - cell "France" [ref=e466]
                - cell "751 (1.5%)" [ref=e467]: 751 (1.5%)
              - row "Brazil 664 (1.33%)" [ref=e470]:
                - cell "Brazil" [ref=e471]
                - cell "664 (1.33%)" [ref=e472]: 664 (1.33%)
              - row "Japan 575 (1.15%)" [ref=e475]:
                - cell "Japan" [ref=e476]
                - cell "575 (1.15%)" [ref=e477]: 575 (1.15%)
        - generic [ref=e481]:
          - heading "Số người dùng theo Mã thành phố" [level=5] [ref=e483]:
            - text: Số người dùng theo
            - link "Mã thành phố" [ref=e484] [cursor=pointer]:
              - /url: "#"
          - table [ref=e485]:
            - rowgroup [ref=e486]:
              - row "THÀNH PHỐ LƯỢNG TRUY CẬP" [ref=e487]:
                - columnheader "THÀNH PHỐ" [ref=e488]
                - columnheader "LƯỢNG TRUY CẬP" [ref=e489]
            - rowgroup [ref=e490]:
              - row "Unknown 11468 (32.19%)" [ref=e491]:
                - cell "Unknown" [ref=e492]
                - cell "11468 (32.19%)" [ref=e493]: 11468 (32.19%)
              - row "Hanoi 8369 (23.49%)" [ref=e496]:
                - cell "Hanoi" [ref=e497]
                - cell "8369 (23.49%)" [ref=e498]: 8369 (23.49%)
              - row "Ho Chi Minh City 5291 (14.85%)" [ref=e501]:
                - cell "Ho Chi Minh City" [ref=e502]
                - cell "5291 (14.85%)" [ref=e503]: 5291 (14.85%)
              - row "Ashburn 2485 (6.98%)" [ref=e506]:
                - cell "Ashburn" [ref=e507]
                - cell "2485 (6.98%)" [ref=e508]: 2485 (6.98%)
              - row "Singapore 2080 (5.84%)" [ref=e511]:
                - cell "Singapore" [ref=e512]
                - cell "2080 (5.84%)" [ref=e513]: 2080 (5.84%)
              - row "Santa Clara 1822 (5.11%)" [ref=e516]:
                - cell "Santa Clara" [ref=e517]
                - cell "1822 (5.11%)" [ref=e518]: 1822 (5.11%)
              - row "Boydton 1690 (4.74%)" [ref=e521]:
                - cell "Boydton" [ref=e522]
                - cell "1690 (4.74%)" [ref=e523]: 1690 (4.74%)
              - row "San Antonio 1034 (2.9%)" [ref=e526]:
                - cell "San Antonio" [ref=e527]
                - cell "1034 (2.9%)" [ref=e528]: 1034 (2.9%)
              - row "Láng Thượng 698 (1.96%)" [ref=e531]:
                - cell "Láng Thượng" [ref=e532]
                - cell "698 (1.96%)" [ref=e533]: 698 (1.96%)
              - row "Beauharnois 685 (1.92%)" [ref=e536]:
                - cell "Beauharnois" [ref=e537]
                - cell "685 (1.92%)" [ref=e538]: 685 (1.92%)
    - contentinfo [ref=e541]:
      - paragraph [ref=e544]:
        - strong [ref=e546]: Công Ty TNHH Thương Mại Dịch Vụ MIMA
        - text: MST
        - strong [ref=e547]: ":"
        - text: "0318672839"
        - strong [ref=e548]: "Địa chỉ:"
        - link [ref=e549] [cursor=pointer]:
          - /url: https://maps.app.goo.gl/rA8evCuRwT3Go6bR9
          - text: 31/3B Ấp Thới Tứ 1, Xã Đông Thạnh, TP Hồ Chí Minh
        - text: ", Việt Nam"
        - strong [ref=e550]: "Hotline:"
        - text: 0909 035 333
        - strong [ref=e551]: "Website:"
        - link [ref=e552] [cursor=pointer]:
          - /url: https://mimadigi.com
          - text: https://
        - link [ref=e553] [cursor=pointer]:
          - /url: https://mimadigi.com
          - text: mimadigi.com
        - strong [ref=e554]: "Email:"
        - text: info@mimadigi.com
        - link [ref=e555] [cursor=pointer]:
          - /url: //www.dmca.com/Protection/Status.aspx?ID=2f39ff2a-7db5-4e53-9bb6-15ee8957080c&refurl=https://mimadigi.com/
          - img [ref=e556]
        - link [ref=e557] [cursor=pointer]:
          - /url: http://online.gov.vn/Website/chi-tiet-134906
          - img [ref=e558]
  - generic [ref=e559]:
    - generic [ref=e560]: Tùy chỉnh
    - generic [ref=e562]:
      - generic [ref=e563]:
        - heading "Slidebar" [level=4] [ref=e564]
        - generic [ref=e565]:
          - button [ref=e566] [cursor=pointer]
          - button [ref=e567] [cursor=pointer]
          - button [ref=e568] [cursor=pointer]
          - button [ref=e569] [cursor=pointer]
          - button [ref=e570] [cursor=pointer]
          - button [ref=e571] [cursor=pointer]
          - button [ref=e572] [cursor=pointer]
          - button [ref=e573] [cursor=pointer]
          - button [ref=e575] [cursor=pointer]
          - button [ref=e576] [cursor=pointer]
          - button [ref=e577] [cursor=pointer]
          - button [ref=e578] [cursor=pointer]
          - button [ref=e579] [cursor=pointer]
          - button [ref=e580] [cursor=pointer]
          - button [ref=e581] [cursor=pointer]
          - button [ref=e582] [cursor=pointer]
      - generic [ref=e583]:
        - heading "Navbar Header" [level=4] [ref=e584]
        - generic [ref=e585]:
          - button [ref=e586] [cursor=pointer]
          - button [ref=e587] [cursor=pointer]
          - button [ref=e588] [cursor=pointer]
          - button [ref=e589] [cursor=pointer]
          - button [ref=e590] [cursor=pointer]
          - button [ref=e591] [cursor=pointer]
          - button [ref=e592] [cursor=pointer]
          - button [ref=e593] [cursor=pointer]
          - button [ref=e595] [cursor=pointer]
          - button [ref=e596] [cursor=pointer]
          - button [ref=e597] [cursor=pointer]
          - button [ref=e598] [cursor=pointer]
          - button [ref=e599] [cursor=pointer]
          - button [ref=e600] [cursor=pointer]
          - button [ref=e601] [cursor=pointer]
          - button [ref=e602] [cursor=pointer]
      - generic [ref=e603]:
        - heading "Light mode" [level=4] [ref=e604]
        - generic [ref=e606]:
          - generic [ref=e607]:
            - img "Light" [ref=e611] [cursor=pointer]
            - generic [ref=e612]: Light
          - generic [ref=e613]:
            - img "Dark" [ref=e617] [cursor=pointer]
            - generic [ref=e618]: Dark
          - generic [ref=e619]:
            - img "System" [ref=e623] [cursor=pointer]
            - generic [ref=e624]: System
      - generic [ref=e625]:
        - heading "Themes" [level=4] [ref=e626]
        - generic [ref=e628]:
          - generic [ref=e629]:
            - img "Default" [ref=e633] [cursor=pointer]
            - generic [ref=e634]: Default
          - generic [ref=e635]:
            - img "Bordered" [ref=e639] [cursor=pointer]
            - generic [ref=e640]: Bordered
          - generic [ref=e641]:
            - img "Semi Dark" [ref=e645] [cursor=pointer]
            - generic [ref=e646]: Semi Dark
    - generic [ref=e648] [cursor=pointer]: 
  - img
  - img
```

# Test source

```ts
  1   | import { Page, Locator } from "@playwright/test";
  2   | 
  3   | export class BasePage {
  4   |     constructor(protected page: Page) { }
  5   | 
  6   |     // ===== CÁC HELPER DÙNG CHUNG CHO CHỨC NĂNG =====
  7   | 
  8   |     // Hàm điều hướng chung
  9   |     async navigateTo(url: string): Promise<void> {
  10  |         await this.page.goto(url, { waitUntil: "domcontentloaded" });
  11  |     }
  12  | 
  13  |     // Hàm click an toàn kèm cơ chế đợi phần tử sẵn sàng hiển thị
  14  |     async clickOn(selector: string | Locator): Promise<void> {
  15  |         const element = typeof selector === "string" ? this.page.locator(selector) : selector;
  16  |         await element.waitFor({ state: "visible" });
  17  |         await element.click();
  18  |     }
  19  | 
  20  |     // Hàm điền dữ liệu an toàn vào các ô nhập liệu
  21  |     async typeInto(selector: string | Locator, text: string): Promise<void> {
  22  |         const element = typeof selector === "string" ? this.page.locator(selector) : selector;
> 23  |         await element.waitFor({ state: "visible" });
      |                       ^ TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
  24  |         await element.fill(text);
  25  |     }
  26  | 
  27  |     // Lấy nội dung text của một phần tử giao diện
  28  |     async getElementText(selector: string | Locator): Promise<string> {
  29  |         const element = typeof selector === "string" ? this.page.locator(selector) : selector;
  30  |         await element.waitFor({ state: "visible" });
  31  |         return (await element.textContent())?.trim() || "";
  32  |     }
  33  | 
  34  |     // Chọn giá trị trong thẻ select (dropdown)
  35  |     async selectOption(selector: string | Locator, value: string | { value?: string, label?: string, index?: number }): Promise<void> {
  36  |         const element = typeof selector === "string" ? this.page.locator(selector) : selector;
  37  |         await element.waitFor({ state: "visible" });
  38  |         await element.selectOption(value);
  39  |     }
  40  | 
  41  |     // Hover chuột vào một phần tử
  42  |     async hoverOn(selector: string | Locator): Promise<void> {
  43  |         const element = typeof selector === "string" ? this.page.locator(selector) : selector;
  44  |         await element.waitFor({ state: "visible" });
  45  |         await element.hover();
  46  |     }
  47  | 
  48  |     // Upload file
  49  |     async uploadFile(selector: string | Locator, filePath: string | string[]): Promise<void> {
  50  |         const element = typeof selector === "string" ? this.page.locator(selector) : selector;
  51  |         await element.setInputFiles(filePath);
  52  |     }
  53  | 
  54  |     // Check vào checkbox hoặc radio button
  55  |     async checkElement(selector: string | Locator): Promise<void> {
  56  |         const element = typeof selector === "string" ? this.page.locator(selector) : selector;
  57  |         await element.waitFor({ state: "visible" });
  58  |         await element.check();
  59  |     }
  60  | 
  61  |     // Bỏ check checkbox
  62  |     async uncheckElement(selector: string | Locator): Promise<void> {
  63  |         const element = typeof selector === "string" ? this.page.locator(selector) : selector;
  64  |         await element.waitFor({ state: "visible" });
  65  |         await element.uncheck();
  66  |     }
  67  | 
  68  |     // ===== CÁC HELPER DÙNG CHUNG CHO SEO =====
  69  | 
  70  |     // Lấy nội dung thuộc tính meta tag theo name hoặc property
  71  |     async getMetaContent(nameOrProperty: string): Promise<string | null> {
  72  |         return await this.page.evaluate((attr) => {
  73  |             const meta = document.querySelector(
  74  |                 `meta[name="${attr}"], meta[property="${attr}"]`
  75  |             );
  76  |             return meta ? (meta.getAttribute("content") ?? "") : null;
  77  |         }, nameOrProperty);
  78  |     }
  79  | 
  80  |     // Lấy text content của tất cả elements matching selector
  81  |     async getAllElementsText(selector: string): Promise<string[]> {
  82  |         return await this.page.locator(selector).allTextContents();
  83  |     }
  84  | 
  85  |     // Lấy URL hiện tại của trang
  86  |     getCurrentUrl(): string {
  87  |         return this.page.url();
  88  |     }
  89  | 
  90  |     // Kiểm tra HTTP status code của một URL (dùng cho robots.txt, sitemap, broken links)
  91  |     async checkUrlStatus(url: string): Promise<number> {
  92  |         try {
  93  |             // Thử bằng HEAD request trước để tiết kiệm băng thông và tăng tốc độ
  94  |             const response = await this.page.request.head(url, { timeout: 10000 });
  95  |             let status = response.status();
  96  | 
  97  |             // Fallback sang GET nếu HEAD trả về lỗi (nhiều server/WAF chặn HEAD request hoặc trả về 404/405)
  98  |             if (status >= 400) {
  99  |                 const getResponse = await this.page.request.get(url, { timeout: 10000 });
  100 |                 status = getResponse.status();
  101 |             }
  102 |             return status;
  103 |         } catch {
  104 |             try {
  105 |                 // Fallback sang GET request nếu HEAD throw error (như timeout hoặc lỗi mạng)
  106 |                 const response = await this.page.request.get(url, { timeout: 10000 });
  107 |                 return response.status();
  108 |             } catch {
  109 |                 return 0;
  110 |             }
  111 |         }
  112 |     }
  113 | }
```