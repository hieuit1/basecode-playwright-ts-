# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin/project.spec.ts >> Project Management Tests >> Add project should fail with không nhập tiêu đề
- Location: tests/admin/project.spec.ts:24:17

# Error details

```
Error: locator.isVisible: Error: strict mode violation: locator('//a[@title=\'Dự án\']') resolved to 2 elements:
    1) <a title="Dự án" class="nav-link " href="news?act=man&type=du-an">…</a> aka getByRole('link', { name: 'Dự án' }).first()
    2) <a title="Dự án" class="nav-link " href="seopage?act=update&type=du-an">…</a> aka getByRole('link', { name: 'Dự án' }).nth(1)

Call log:
    - checking visibility of locator('//a[@title=\'Dự án\']')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - paragraph [ref=e10]: Please wait...
  - generic [ref=e11]:
    - navigation [ref=e12]:
      - list [ref=e13]:
        - listitem [ref=e14]:
          - link "" [ref=e15] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e16]: 
        - listitem [ref=e17]:
          - generic [ref=e19]: Xin chào, admin!
      - list [ref=e20]:
        - link " Hỗ trợ" [ref=e21] [cursor=pointer]:
          - /url: tel:0909035333
          - generic [ref=e22]: 
          - text: Hỗ trợ
        - listitem [ref=e23]:
          - link "" [ref=e24] [cursor=pointer]:
            - /url: ../
            - generic [ref=e25]: 
        - listitem [ref=e26]:
          - link " 8" [ref=e27] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e28]: 
            - generic [ref=e29]: "8"
          - text:    
        - listitem [ref=e30]:
          - link "" [ref=e31] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e32]: 
          - text:   
        - listitem [ref=e33]:
          - generic [ref=e36] [cursor=pointer]:
            - text: Nhà quản trị
            - paragraph [ref=e37]: Administrator
          - text:    
    - complementary [ref=e38]:
      - link [ref=e39] [cursor=pointer]:
        - /url: index.php
      - navigation [ref=e41]:
        - menu [ref=e42]:
          - listitem [ref=e43]:
            - link " Bảng điều khiển" [ref=e44] [cursor=pointer]:
              - /url: index.php
              - generic [ref=e45]: 
              - paragraph [ref=e46]: Bảng điều khiển
          - listitem [ref=e47]:
            - link " Group Giới Thiệu " [ref=e48] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e49]: 
              - paragraph [ref=e50]:
                - text: Group Giới Thiệu
                - generic [ref=e51]: 
            - text:          
          - listitem [ref=e52]:
            - link " Group Sản Phẩm " [ref=e53] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e54]: 
              - paragraph [ref=e55]:
                - text: Group Sản Phẩm
                - generic [ref=e56]: 
            - text:        
          - listitem [ref=e57]:
            - link " Quản lý Mã giảm giá" [ref=e58] [cursor=pointer]:
              - /url: discount?act=man
              - generic [ref=e59]: 
              - paragraph [ref=e60]: Quản lý Mã giảm giá
          - listitem [ref=e61]:
            - link " Quản lý bài viết " [ref=e62] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e63]: 
              - paragraph [ref=e64]:
                - text: Quản lý bài viết
                - generic [ref=e65]: 
            - text:       
          - listitem [ref=e66]:
            - link " Quản lý đơn hàng" [ref=e67] [cursor=pointer]:
              - /url: order?act=man
              - generic [ref=e68]: 
              - paragraph [ref=e69]: Quản lý đơn hàng
          - listitem [ref=e70]:
            - link " Quản lý tags " [ref=e71] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e72]: 
              - paragraph [ref=e73]:
                - text: Quản lý tags
                - generic [ref=e74]: 
          - listitem [ref=e75]:
            - link " Quản lý nhận tin " [ref=e76] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e77]: 
              - paragraph [ref=e78]:
                - text: Quản lý nhận tin
                - generic [ref=e79]: 
            - text:  
          - listitem [ref=e80]:
            - link " Quản lý trang tĩnh " [ref=e81] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e82]: 
              - paragraph [ref=e83]:
                - text: Quản lý trang tĩnh
                - generic [ref=e84]: 
            - text:   
          - listitem [ref=e85]:
            - link " Quản lý hình ảnh - video " [ref=e86] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e87]: 
              - paragraph [ref=e88]:
                - text: Quản lý hình ảnh - video
                - generic [ref=e89]: 
            - text:           
          - listitem [ref=e90]:
            - link " Quản lý seo page " [ref=e91] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e92]: 
              - paragraph [ref=e93]:
                - text: Quản lý seo page
                - generic [ref=e94]: 
            - text:      
          - listitem [ref=e95]:
            - link " Thiết lập thông tin" [ref=e96] [cursor=pointer]:
              - /url: setting?act=update
              - generic [ref=e97]: 
              - paragraph [ref=e98]: Thiết lập thông tin
    - generic [ref=e99]:
      - generic [ref=e101]:
        - heading "Bảng điều khiển" [level=5] [ref=e102]
        - generic [ref=e103]:
          - link " Cấu hình website Xem thêm" [ref=e105] [cursor=pointer]:
            - /url: setting?act=update
            - generic [ref=e107]: 
            - generic [ref=e108]:
              - generic [ref=e109]: Cấu hình website
              - generic [ref=e110]: Xem thêm
          - link " Quản lý tài khoản Xem thêm" [ref=e112] [cursor=pointer]:
            - /url: user?act=info_admin
            - generic [ref=e114]: 
            - generic [ref=e115]:
              - generic [ref=e116]: Quản lý tài khoản
              - generic [ref=e117]: Xem thêm
          - link " Đổi mật khẩu Xem thêm" [ref=e119] [cursor=pointer]:
            - /url: user?act=info_admin&changepass=1
            - generic [ref=e121]: 
            - generic [ref=e122]:
              - generic [ref=e123]: Đổi mật khẩu
              - generic [ref=e124]: Xem thêm
          - link " Thư liên hệ Xem thêm" [ref=e126] [cursor=pointer]:
            - /url: contact?act=man
            - generic [ref=e128]: 
            - generic [ref=e129]:
              - generic [ref=e130]: Thư liên hệ
              - generic [ref=e131]: Xem thêm
      - generic [ref=e134]:
        - generic [ref=e136]:
          - heading "Thống kê truy cập online" [level=5] [ref=e138]
          - generic [ref=e140]:
            - paragraph [ref=e141]:
              - text: Đang online
              - generic [ref=e142]: "1571"
            - generic [ref=e143]:
              - paragraph [ref=e144]:
                - text: "Online:"
                - strong [ref=e146]: "1571"
              - paragraph [ref=e147]:
                - text: "Tuần:"
                - strong [ref=e149]: "111"
              - paragraph [ref=e150]:
                - text: "Tháng:"
                - strong [ref=e152]: "213"
              - paragraph [ref=e153]:
                - text: "Tổng:"
                - strong [ref=e155]: "312"
        - generic [ref=e159]:
          - heading "Thống kê truy cập tháng 08/2026 (213 lượt)" [level=5] [ref=e160]
          - generic [ref=e161]:
            - generic [ref=e163]: 
            - combobox [ref=e166]:
              - option "Chọn tháng"
              - option "Tháng 1"
              - option "Tháng 2"
              - option "Tháng 3"
              - option "Tháng 4"
              - option "Tháng 5"
              - option "Tháng 6"
              - option "Tháng 7"
              - option "Tháng 8" [selected]
              - option "Tháng 9"
              - option "Tháng 10"
              - option "Tháng 11"
              - option "Tháng 12"
            - combobox [ref=e169]:
              - option "Chọn năm"
              - option "Năm 2000"
              - option "Năm 2001"
              - option "Năm 2002"
              - option "Năm 2003"
              - option "Năm 2004"
              - option "Năm 2005"
              - option "Năm 2006"
              - option "Năm 2007"
              - option "Năm 2008"
              - option "Năm 2009"
              - option "Năm 2010"
              - option "Năm 2011"
              - option "Năm 2012"
              - option "Năm 2013"
              - option "Năm 2014"
              - option "Năm 2015"
              - option "Năm 2016"
              - option "Năm 2017"
              - option "Năm 2018"
              - option "Năm 2019"
              - option "Năm 2020"
              - option "Năm 2021"
              - option "Năm 2022"
              - option "Năm 2023"
              - option "Năm 2024"
              - option "Năm 2025"
              - option "Năm 2026" [selected]
              - option "Năm 2027"
              - option "Năm 2028"
              - option "Năm 2029"
              - option "Năm 2030"
              - option "Năm 2031"
              - option "Năm 2032"
              - option "Năm 2033"
              - option "Năm 2034"
              - option "Năm 2035"
              - option "Năm 2036"
              - option "Năm 2037"
              - option "Năm 2038"
              - option "Năm 2039"
              - option "Năm 2040"
              - option "Năm 2041"
              - option "Năm 2042"
              - option "Năm 2043"
              - option "Năm 2044"
              - option "Năm 2045"
              - option "Năm 2046"
            - button "Thống Kê" [ref=e172] [cursor=pointer]
      - generic [ref=e176]:
        - heading "Thống kê lượt nhấp (click) traffic 30 ngày gần nhất" [level=5] [ref=e177]
        - generic [ref=e178]:
          - generic [ref=e180]:
            - generic [ref=e182]: 
            - heading "Hotline" [level=5] [ref=e183]
            - generic [ref=e184]: "0"
          - generic [ref=e186]:
            - generic [ref=e188]: 
            - heading "Zalo" [level=5] [ref=e189]
            - generic [ref=e190]: "0"
          - generic [ref=e192]:
            - generic [ref=e194]: 
            - heading "Liên hệ" [level=5] [ref=e195]
            - generic [ref=e196]: "4"
          - generic [ref=e198]:
            - generic [ref=e200]: 
            - heading "Đơn hàng" [level=5] [ref=e201]
            - generic [ref=e202]: "33"
      - generic [ref=e207]:
        - generic [ref=e208]:
          - heading "Thống kê truy cập trình duyệt 30 ngày gần nhất" [level=5] [ref=e210]
          - list [ref=e212]:
            - listitem [ref=e213]:
              - paragraph [ref=e214]:
                - img "Chrome" [ref=e215]
                - text: Chrome
              - paragraph [ref=e216]: "149"
            - listitem [ref=e217]:
              - paragraph [ref=e218]:
                - img "Edge" [ref=e219]
                - text: Microsoft Edge
              - paragraph [ref=e220]: "83"
            - listitem [ref=e221]:
              - paragraph [ref=e222]:
                - img "Internet Explorer" [ref=e223]
                - text: Internet Explorer
              - paragraph [ref=e224]: "0"
            - listitem [ref=e225]:
              - paragraph [ref=e226]:
                - img "Firefox" [ref=e227]
                - text: Mozilla Firefox
              - paragraph [ref=e228]: "0"
            - listitem [ref=e229]:
              - paragraph [ref=e230]:
                - img "Safari" [ref=e231]
                - text: Safari
              - paragraph [ref=e232]: "0"
            - listitem [ref=e233]:
              - paragraph [ref=e234]:
                - img "Opera" [ref=e235]
                - text: Opera
              - paragraph [ref=e236]: "0"
            - listitem [ref=e237]:
              - paragraph [ref=e238]:
                - img "Khác" [ref=e239]
                - text: Khác
              - paragraph [ref=e240]: "20"
        - generic [ref=e241]:
          - heading "Thống kê số lượng truy cập theo thiết bị 30 ngày gần nhất" [level=5] [ref=e243]
          - generic [ref=e246]:
            - generic [ref=e249]:
              - generic [ref=e250]:
                - img "Desktop" [ref=e251]
                - generic [ref=e252]: Desktop
              - heading "98%" [level=5] [ref=e253]
              - paragraph [ref=e254]: 248 lượt truy cập
            - generic [ref=e257]:
              - generic [ref=e258]:
                - img "Mobile" [ref=e259]
                - generic [ref=e260]: Mobile
              - heading "2%" [level=5] [ref=e261]
              - paragraph [ref=e262]: 4 lượt truy cập
        - generic [ref=e263]:
          - heading "Thống kê IP truy cập web 30 ngày gần nhất" [level=5] [ref=e265]
          - generic [ref=e266]:
            - generic [ref=e267]:
              - generic [ref=e268]:
                - generic [ref=e269]: 
                - strong [ref=e270]: 1.53.97.29
              - generic [ref=e272]: 84 lượt
            - generic [ref=e273]:
              - generic [ref=e274]:
                - generic [ref=e275]: 
                - strong [ref=e276]: ::1
              - generic [ref=e278]: 57 lượt
            - generic [ref=e279]:
              - generic [ref=e280]:
                - generic [ref=e281]: 
                - strong [ref=e282]: 171.250.163.213
              - generic [ref=e284]: 43 lượt
            - generic [ref=e285]:
              - generic [ref=e286]:
                - generic [ref=e287]: 
                - strong [ref=e288]: 51.8.152.226
              - generic [ref=e290]: 9 lượt
            - generic [ref=e291]:
              - generic [ref=e292]:
                - generic [ref=e293]: 
                - strong [ref=e294]: 172.182.243.72
              - generic [ref=e296]: 7 lượt
            - generic [ref=e297]:
              - generic [ref=e298]:
                - generic [ref=e299]: 
                - strong [ref=e300]: 103.199.56.37
              - generic [ref=e302]: 6 lượt
            - generic [ref=e303]:
              - generic [ref=e304]:
                - generic [ref=e305]: 
                - strong [ref=e306]: 74.249.78.34
              - generic [ref=e308]: 3 lượt
            - generic [ref=e309]:
              - generic [ref=e310]:
                - generic [ref=e311]: 
                - strong [ref=e312]: 171.250.163.246
              - generic [ref=e314]: 3 lượt
            - generic [ref=e315]:
              - generic [ref=e316]:
                - generic [ref=e317]: 
                - strong [ref=e318]: 171.251.233.186
              - generic [ref=e320]: 3 lượt
            - generic [ref=e321]:
              - generic [ref=e322]:
                - generic [ref=e323]: 
                - strong [ref=e324]: 173.252.105.67
              - generic [ref=e326]: 2 lượt
      - generic [ref=e331]:
        - generic [ref=e333]:
          - heading "Số người dùng theo Mã quốc gia" [level=5] [ref=e335]:
            - text: Số người dùng theo
            - link "Mã quốc gia" [ref=e336] [cursor=pointer]:
              - /url: "#"
          - table [ref=e337]:
            - rowgroup [ref=e338]:
              - row "QUỐC GIA LƯỢNG TRUY CẬP" [ref=e339]:
                - columnheader "QUỐC GIA" [ref=e340]
                - columnheader "LƯỢNG TRUY CẬP" [ref=e341]
            - rowgroup [ref=e342]:
              - row "Vietnam 151 (48.4%)" [ref=e343]:
                - cell "Vietnam" [ref=e344]
                - cell "151 (48.4%)" [ref=e345]: 151 (48.4%)
              - row "Unknown 140 (44.87%)" [ref=e348]:
                - cell "Unknown" [ref=e349]
                - cell "140 (44.87%)" [ref=e350]: 140 (44.87%)
              - row "United States 21 (6.73%)" [ref=e353]:
                - cell "United States" [ref=e354]
                - cell "21 (6.73%)" [ref=e355]: 21 (6.73%)
        - generic [ref=e359]:
          - heading "Số người dùng theo Mã thành phố" [level=5] [ref=e361]:
            - text: Số người dùng theo
            - link "Mã thành phố" [ref=e362] [cursor=pointer]:
              - /url: "#"
          - table [ref=e363]:
            - rowgroup [ref=e364]:
              - row "THÀNH PHỐ LƯỢNG TRUY CẬP" [ref=e365]:
                - columnheader "THÀNH PHỐ" [ref=e366]
                - columnheader "LƯỢNG TRUY CẬP" [ref=e367]
            - rowgroup [ref=e368]:
              - row "Unknown 140 (46.05%)" [ref=e369]:
                - cell "Unknown" [ref=e370]
                - cell "140 (46.05%)" [ref=e371]: 140 (46.05%)
              - row "Quận Hai 78 (25.66%)" [ref=e374]:
                - cell "Quận Hai" [ref=e375]
                - cell "78 (25.66%)" [ref=e376]: 78 (25.66%)
              - row "Ho Chi Minh City 56 (18.42%)" [ref=e379]:
                - cell "Ho Chi Minh City" [ref=e380]
                - cell "56 (18.42%)" [ref=e381]: 56 (18.42%)
              - row "Thủ Đức 6 (1.97%)" [ref=e384]:
                - cell "Thủ Đức" [ref=e385]
                - cell "6 (1.97%)" [ref=e386]: 6 (1.97%)
              - row "Altoona 5 (1.64%)" [ref=e389]:
                - cell "Altoona" [ref=e390]
                - cell "5 (1.64%)" [ref=e391]: 5 (1.64%)
              - row "Hanoi 5 (1.64%)" [ref=e394]:
                - cell "Hanoi" [ref=e395]
                - cell "5 (1.64%)" [ref=e396]: 5 (1.64%)
              - row "Boydton 5 (1.64%)" [ref=e399]:
                - cell "Boydton" [ref=e400]
                - cell "5 (1.64%)" [ref=e401]: 5 (1.64%)
              - row "Quận Mười 4 (1.32%)" [ref=e404]:
                - cell "Quận Mười" [ref=e405]
                - cell "4 (1.32%)" [ref=e406]: 4 (1.32%)
              - row "Springfield 3 (0.99%)" [ref=e409]:
                - cell "Springfield" [ref=e410]
                - cell "3 (0.99%)" [ref=e411]: 3 (0.99%)
              - row "Gallatin 2 (0.66%)" [ref=e414]:
                - cell "Gallatin" [ref=e415]
                - cell "2 (0.66%)" [ref=e416]: 2 (0.66%)
    - contentinfo [ref=e419]:
      - paragraph [ref=e422]:
        - strong [ref=e424]: Công Ty TNHH Thương Mại Dịch Vụ MIMA
        - text: MST
        - strong [ref=e425]: ":"
        - text: "0318672839"
        - strong [ref=e426]: "Địa chỉ:"
        - link [ref=e427] [cursor=pointer]:
          - /url: https://maps.app.goo.gl/rA8evCuRwT3Go6bR9
          - text: 31/3B Ấp Thới Tứ 1, Xã Đông Thạnh, TP Hồ Chí Minh
        - text: ", Việt Nam"
        - strong [ref=e428]: "Hotline:"
        - text: 0909 035 333
        - strong [ref=e429]: "Website:"
        - link [ref=e430] [cursor=pointer]:
          - /url: https://mimadigi.com
          - text: https://
        - link [ref=e431] [cursor=pointer]:
          - /url: https://mimadigi.com
          - text: mimadigi.com
        - strong [ref=e432]: "Email:"
        - text: info@mimadigi.com
        - link [ref=e433] [cursor=pointer]:
          - /url: //www.dmca.com/Protection/Status.aspx?ID=2f39ff2a-7db5-4e53-9bb6-15ee8957080c&refurl=https://mimadigi.com/
          - img [ref=e434]
        - link [ref=e435] [cursor=pointer]:
          - /url: http://online.gov.vn/Website/chi-tiet-134906
          - img [ref=e436]
  - generic [ref=e437]:
    - generic [ref=e438]: Tùy chỉnh
    - generic [ref=e440]:
      - generic [ref=e441]:
        - heading "Slidebar" [level=4] [ref=e442]
        - generic [ref=e443]:
          - button [ref=e444] [cursor=pointer]
          - button [ref=e445] [cursor=pointer]
          - button [ref=e446] [cursor=pointer]
          - button [ref=e447] [cursor=pointer]
          - button [ref=e448] [cursor=pointer]
          - button [ref=e449] [cursor=pointer]
          - button [ref=e450] [cursor=pointer]
          - button [ref=e451] [cursor=pointer]
          - button [ref=e452] [cursor=pointer]
          - button [ref=e453] [cursor=pointer]
          - button [ref=e454] [cursor=pointer]
          - button [ref=e455] [cursor=pointer]
          - button [ref=e456] [cursor=pointer]
          - button [ref=e457] [cursor=pointer]
          - button [ref=e458] [cursor=pointer]
          - button [ref=e459] [cursor=pointer]
      - generic [ref=e460]:
        - heading "Navbar Header" [level=4] [ref=e461]
        - generic [ref=e462]:
          - button [ref=e463] [cursor=pointer]
          - button [ref=e464] [cursor=pointer]
          - button [ref=e465] [cursor=pointer]
          - button [ref=e466] [cursor=pointer]
          - button [ref=e467] [cursor=pointer]
          - button [ref=e468] [cursor=pointer]
          - button [ref=e469] [cursor=pointer]
          - button [ref=e470] [cursor=pointer]
          - button [ref=e471] [cursor=pointer]
          - button [ref=e472] [cursor=pointer]
          - button [ref=e473] [cursor=pointer]
          - button [ref=e474] [cursor=pointer]
          - button [ref=e475] [cursor=pointer]
          - button [ref=e476] [cursor=pointer]
          - button [ref=e477] [cursor=pointer]
          - button [ref=e478] [cursor=pointer]
      - generic [ref=e479]:
        - heading "Light mode" [level=4] [ref=e480]
        - generic [ref=e482]:
          - generic [ref=e483]:
            - generic [ref=e484] [cursor=pointer]:
              - generic:
                - generic:
                  - img "Light"
            - generic [ref=e485]: Light
          - generic [ref=e486]:
            - generic [ref=e487] [cursor=pointer]:
              - generic:
                - generic:
                  - img "Dark"
            - generic [ref=e488]: Dark
          - generic [ref=e489]:
            - generic [ref=e490] [cursor=pointer]:
              - generic:
                - generic:
                  - img "System"
            - generic [ref=e491]: System
      - generic [ref=e492]:
        - heading "Themes" [level=4] [ref=e493]
        - generic [ref=e495]:
          - generic [ref=e496]:
            - generic [ref=e497] [cursor=pointer]:
              - generic:
                - generic:
                  - img "Default"
            - generic [ref=e498]: Default
          - generic [ref=e499]:
            - generic [ref=e500] [cursor=pointer]:
              - generic:
                - generic:
                  - img "Bordered"
            - generic [ref=e501]: Bordered
          - generic [ref=e502]:
            - generic [ref=e503] [cursor=pointer]:
              - generic:
                - generic:
                  - img "Semi Dark"
            - generic [ref=e504]: Semi Dark
    - generic [ref=e506] [cursor=pointer]: 
```

# Test source

```ts
  1   | import { Page, Locator, test } from "@playwright/test";
  2   | import { ArticleBasePage } from "./ArticleBasePage";
  3   | import { TestHelper } from "../../utils/TestHelper";
  4   | 
  5   | export class ProjectPage extends ArticleBasePage {
  6   |     protected parentMenu: Locator;
  7   |     protected subMenu: Locator;
  8   | 
  9   |     constructor(page: Page) {
  10  |         super(page);
  11  | 
  12  |         this.clientUrl = "du-an";
  13  | 
  14  |         // Cấu hình riêng cho mục Dự án
  15  |         this.parentMenu = page.locator("//a[@title='Quản lý bài viết']");
  16  |         this.subMenu = page.locator("//a[@title='Dự án']");
  17  |     }
  18  | 
  19  |     async gotoAdminMenu() {
  20  |         await test.step("Mở menu", async () => {
  21  |             // Đợi parent menu ổn định trước khi thao tác
  22  |             await this.parentMenu.waitFor({ state: 'visible' });
  23  | 
  24  |             // Kiểm tra nếu submenu chưa hiển thị thì mới click parent
> 25  |             if (!(await this.subMenu.isVisible())) {
      |                                      ^ Error: locator.isVisible: Error: strict mode violation: locator('//a[@title=\'Dự án\']') resolved to 2 elements:
  26  |                 await this.parentMenu.click();
  27  |             }
  28  | 
  29  |             // Đợi submenu hiển thị rõ ràng và kết thúc animation
  30  |             await this.subMenu.waitFor({ state: 'visible' });
  31  |             
  32  |             // Dùng click force: true trong trường hợp AdminLTE menu hay bị che lấp nhẹ
  33  |             await Promise.all([
  34  |                 this.page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 10000 }).catch(() => { }),
  35  |                 this.subMenu.click({ force: true })
  36  |             ]);
  37  |         });
  38  |     }
  39  | 
  40  |     // Các hàm bọc (wrapper) để dễ đọc trong spec
  41  |     async gotoAdminProject() {
  42  |         await this.gotoAdminMenu();
  43  |     }
  44  | 
  45  |     async addProject(
  46  |         title: string,
  47  |         slug: string,
  48  |         numb: string,
  49  |         desc: string,
  50  |         content: string,
  51  |         imagePath: string,
  52  |         enData?: {
  53  |             titleEn?: string;
  54  |             slugEn?: string;
  55  |             descEn?: string;
  56  |             contentEn?: string;
  57  |         }
  58  |     ) {
  59  |         await this.addArticle(title, slug, desc, content, imagePath, enData, numb);
  60  |     }
  61  | 
  62  |     // Ghi đè addArticle để dùng cho bulk test (TestHelper gọi hàm này với 5 tham số)
  63  |     // Tự động thêm dữ liệu tiếng Anh vào để test bulk
  64  |     async addArticle(title: string, slug: string, desc: string, content: string, imagePath: string, enData?: any, numb?: string) {
  65  |         // Nếu không có enData (do TestHelper gọi), tự động sinh dữ liệu tiếng Anh
  66  |         if (!enData) {
  67  |             enData = {
  68  |                 titleEn: `${title} EN`,
  69  |                 slugEn: `${slug}-en`,
  70  |                 descEn: `English description for bulk test project`,
  71  |                 contentEn: `English content for bulk test project`,
  72  |             };
  73  |         }
  74  |         await super.addArticle(title, slug, desc, content, imagePath, enData, numb || "0");
  75  |     }
  76  | 
  77  |     async verifyProjectInAdminSuccess() {
  78  |         await this.verifyAdminSuccess();
  79  |     }
  80  | 
  81  |     async verifyProjectOnWebsite(title: string) {
  82  |         await this.verifyOnWebsite(title);
  83  |     }
  84  | 
  85  | 
  86  | 
  87  |     async deleteProject(title: string) {
  88  |         await this.deleteArticle(title);
  89  |     }
  90  | 
  91  |     // ========== Bulk Test Methods ==========
  92  |     async copyBulkProjects(count: number) {
  93  |         await this.copyBulkArticles(count);
  94  |     }
  95  | 
  96  |     async deleteBulkProjects(prefix: string) {
  97  |         await this.deleteArticlesWithPrefix(prefix);
  98  |     }
  99  | }
  100 | 
```