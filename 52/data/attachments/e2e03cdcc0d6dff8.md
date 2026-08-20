# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin/news.spec.ts >> News Management Tests >> Bulk insert 35 news via Copy and verify Load More on website
- Location: tests/admin/news.spec.ts:134:13

# Error details

```
Error: Lỗi: Bấm Xem thêm nhưng số lượng Tin tức không tăng sau 30s! (Ban đầu: 34)

Lỗi: Bấm Xem thêm nhưng số lượng Tin tức không tăng sau 30s! (Ban đầu: 34)

expect(received).toBeGreaterThan(expected)

Expected: > 34
Received:   34

Call Log:
- Timeout 30000ms exceeded while waiting on the predicate
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
          - /url: " "
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
            - link " Quản lý Thư viện ảnh " [ref=e39] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e40]: 
              - paragraph [ref=e41]:
                - text: Quản lý Thư viện ảnh
                - generic [ref=e42]: 
            - text:  
          - listitem [ref=e43]:
            - link " Quản lý Khóa học " [ref=e44] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e45]: 
              - paragraph [ref=e46]:
                - text: Quản lý Khóa học
                - generic [ref=e47]: 
            - text:   
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
                - link " Hệ thống" [ref=e59] [cursor=pointer]:
                  - /url: news?act=man&type=he-thong
                  - generic [ref=e60]: 
                  - paragraph [ref=e61]: Hệ thống
              - listitem [ref=e62]:
                - link " Giới thiệu" [ref=e63] [cursor=pointer]:
                  - /url: news?act=man&type=gioi-thieu
                  - generic [ref=e64]: 
                  - paragraph [ref=e65]: Giới thiệu
              - listitem [ref=e66]:
                - link " Hành trình" [ref=e67] [cursor=pointer]:
                  - /url: news?act=man&type=hanh-trinh
                  - generic [ref=e68]: 
                  - paragraph [ref=e69]: Hành trình
              - listitem [ref=e70]:
                - link " Đội ngũ" [ref=e71] [cursor=pointer]:
                  - /url: news?act=man&type=doi-ngu
                  - generic [ref=e72]: 
                  - paragraph [ref=e73]: Đội ngũ
              - listitem [ref=e74]:
                - link " Giáo viên" [ref=e75] [cursor=pointer]:
                  - /url: news?act=man&type=giao-vien
                  - generic [ref=e76]: 
                  - paragraph [ref=e77]: Giáo viên
              - listitem [ref=e78]:
                - link " Chất luọng" [ref=e79] [cursor=pointer]:
                  - /url: news?act=man&type=chat-luong
                  - generic [ref=e80]: 
                  - paragraph [ref=e81]: Chất luọng
              - listitem [ref=e82]:
                - link " Khách hàng" [ref=e83] [cursor=pointer]:
                  - /url: news?act=man&type=khach-hang
                  - generic [ref=e84]: 
                  - paragraph [ref=e85]: Khách hàng
          - listitem [ref=e86]:
            - link " Quản lý nhận tin " [active] [ref=e87] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e88]: 
              - paragraph [ref=e89]:
                - text: Quản lý nhận tin
                - generic [ref=e90]: 
            - list [ref=e91]:
              - listitem [ref=e92]:
                - link " Đăng ký nhận tin" [ref=e93] [cursor=pointer]:
                  - /url: newsletter?act=man&type=newsletter
                  - generic [ref=e94]: 
                  - paragraph [ref=e95]: Đăng ký nhận tin
          - listitem [ref=e96]:
            - link " Quản lý trang tĩnh " [ref=e97] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e98]: 
              - paragraph [ref=e99]:
                - text: Quản lý trang tĩnh
                - generic [ref=e100]: 
            - text:    
          - listitem [ref=e101]:
            - link " Quản lý hình ảnh - video " [ref=e102] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e103]: 
              - paragraph [ref=e104]:
                - text: Quản lý hình ảnh - video
                - generic [ref=e105]: 
            - text:      
          - listitem [ref=e106]:
            - link " Quản lý seo page " [ref=e107] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e108]: 
              - paragraph [ref=e109]:
                - text: Quản lý seo page
                - generic [ref=e110]: 
            - text:     
          - listitem [ref=e111]:
            - link " Thiết lập thông tin" [ref=e112] [cursor=pointer]:
              - /url: setting?act=update
              - generic [ref=e113]: 
              - paragraph [ref=e114]: Thiết lập thông tin
    - generic [ref=e115]:
      - generic [ref=e117]:
        - heading "Bảng điều khiển" [level=5] [ref=e118]
        - generic [ref=e119]:
          - link " Cấu hình website Xem thêm" [ref=e121] [cursor=pointer]:
            - /url: setting?act=update
            - generic [ref=e123]: 
            - generic [ref=e124]:
              - generic [ref=e125]: Cấu hình website
              - generic [ref=e126]: Xem thêm
          - link " Quản lý tài khoản Xem thêm" [ref=e128] [cursor=pointer]:
            - /url: user?act=info_admin
            - generic [ref=e130]: 
            - generic [ref=e131]:
              - generic [ref=e132]: Quản lý tài khoản
              - generic [ref=e133]: Xem thêm
          - link " Đổi mật khẩu Xem thêm" [ref=e135] [cursor=pointer]:
            - /url: user?act=info_admin&changepass=1
            - generic [ref=e137]: 
            - generic [ref=e138]:
              - generic [ref=e139]: Đổi mật khẩu
              - generic [ref=e140]: Xem thêm
          - link " Thư liên hệ Xem thêm" [ref=e142] [cursor=pointer]:
            - /url: contact?act=man
            - generic [ref=e144]: 
            - generic [ref=e145]:
              - generic [ref=e146]: Thư liên hệ
              - generic [ref=e147]: Xem thêm
      - generic [ref=e150]:
        - generic [ref=e152]:
          - heading "Thống kê truy cập online" [level=5] [ref=e154]
          - generic [ref=e156]:
            - generic [ref=e157]:
              - img [ref=e160]:
                - generic [ref=e165]:
                  - generic: "20"
                  - generic: "83"
                  - generic: "136"
              - paragraph [ref=e172]:
                - text: Đang online
                - generic [ref=e173]: "2142"
            - generic [ref=e174]:
              - paragraph [ref=e175]:
                - text: "Đang online:"
                - strong [ref=e177]: "2142"
              - paragraph [ref=e178]:
                - text: "Trong tuần:"
                - strong [ref=e180]: "20"
              - paragraph [ref=e181]:
                - text: "Trong tháng:"
                - strong [ref=e183]: "83"
              - paragraph [ref=e184]:
                - text: "Tổng truy cập:"
                - strong [ref=e186]: "136"
        - generic [ref=e189]:
          - generic [ref=e190]:
            - heading "Thống kê truy cập tháng 08/2026" [level=5] [ref=e191]
            - generic [ref=e192]:
              - generic [ref=e194]: 
              - combobox [ref=e197]:
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
              - combobox [ref=e200]:
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
                  - generic: "30"
                  - generic: "24"
                  - generic: "18"
                  - generic: "12"
                  - generic: "6"
                  - generic: "0"
            - generic [ref=e281]:
              - generic:
                - generic "Download SVG"
                - generic "Download PNG"
      - generic [ref=e284]:
        - generic [ref=e286]:
          - generic [ref=e288]: 
          - heading "Hotline" [level=5] [ref=e289]
          - generic [ref=e290]: "2"
        - generic [ref=e292]:
          - generic [ref=e294]: 
          - heading "Zalo" [level=5] [ref=e295]
          - generic [ref=e296]: "2"
        - generic [ref=e298]:
          - generic [ref=e300]: 
          - heading "Liên hệ" [level=5] [ref=e301]
          - generic [ref=e302]: "14"
      - generic [ref=e307]:
        - generic [ref=e308]:
          - heading "Thống kê truy cập trình duyệt" [level=5] [ref=e310]
          - list [ref=e312]:
            - listitem [ref=e313]:
              - paragraph [ref=e314]:
                - img "Chrome" [ref=e315]
                - text: Chrome
              - paragraph [ref=e316]: "81"
            - listitem [ref=e317]:
              - paragraph [ref=e318]:
                - img "Edge" [ref=e319]
                - text: Microsoft Edge
              - paragraph [ref=e320]: "35"
            - listitem [ref=e321]:
              - paragraph [ref=e322]:
                - img "Internet Explorer" [ref=e323]
                - text: Internet Explorer
              - paragraph [ref=e324]: "0"
            - listitem [ref=e325]:
              - paragraph [ref=e326]:
                - img "Firefox" [ref=e327]
                - text: Mozilla Firefox
              - paragraph [ref=e328]: "0"
            - listitem [ref=e329]:
              - paragraph [ref=e330]:
                - img "Safari" [ref=e331]
                - text: Safari
              - paragraph [ref=e332]: "8"
            - listitem [ref=e333]:
              - paragraph [ref=e334]:
                - img "Opera" [ref=e335]
                - text: Opera
              - paragraph [ref=e336]: "0"
            - listitem [ref=e337]:
              - paragraph [ref=e338]:
                - img "Khác" [ref=e339]
                - text: Khác
              - paragraph [ref=e340]: "12"
        - generic [ref=e341]:
          - heading "Thống kê số lượng truy cập theo thiết bị" [level=5] [ref=e343]
          - generic [ref=e346]:
            - generic [ref=e349]:
              - generic [ref=e350]:
                - img "Desktop" [ref=e351]
                - generic [ref=e352]: Desktop
              - heading "94%" [level=5] [ref=e353]
              - paragraph [ref=e354]: 128 lượt truy cập
            - generic [ref=e357]:
              - generic [ref=e358]:
                - img "Mobile" [ref=e359]
                - generic [ref=e360]: Mobile
              - heading "6%" [level=5] [ref=e361]
              - paragraph [ref=e362]: 8 lượt truy cập
        - generic [ref=e363]:
          - heading "Thống kê IP truy cập web" [level=5] [ref=e365]
          - generic [ref=e366]:
            - generic [ref=e367]:
              - generic [ref=e368]:
                - generic [ref=e369]: 
                - strong [ref=e370]: ::1
              - generic [ref=e372]: 84 lượt
            - generic [ref=e373]:
              - generic [ref=e374]:
                - generic [ref=e375]: 
                - strong [ref=e376]: 1.53.97.29
              - generic [ref=e378]: 26 lượt
            - generic [ref=e379]:
              - generic [ref=e380]:
                - generic [ref=e381]: 
                - strong [ref=e382]: 116.108.138.57
              - generic [ref=e384]: 4 lượt
            - generic [ref=e385]:
              - generic [ref=e386]:
                - generic [ref=e387]: 
                - strong [ref=e388]: 1.53.235.181
              - generic [ref=e390]: 3 lượt
            - generic [ref=e391]:
              - generic [ref=e392]:
                - generic [ref=e393]: 
                - strong [ref=e394]: 173.252.83.20
              - generic [ref=e396]: 1 lượt
            - generic [ref=e397]:
              - generic [ref=e398]:
                - generic [ref=e399]: 
                - strong [ref=e400]: 173.252.87.5
              - generic [ref=e402]: 1 lượt
            - generic [ref=e403]:
              - generic [ref=e404]:
                - generic [ref=e405]: 
                - strong [ref=e406]: 173.252.87.54
              - generic [ref=e408]: 1 lượt
            - generic [ref=e409]:
              - generic [ref=e410]:
                - generic [ref=e411]: 
                - strong [ref=e412]: 52.179.88.121
              - generic [ref=e414]: 1 lượt
            - generic [ref=e415]:
              - generic [ref=e416]:
                - generic [ref=e417]: 
                - strong [ref=e418]: 118.68.85.78
              - generic [ref=e420]: 1 lượt
            - generic [ref=e421]:
              - generic [ref=e422]:
                - generic [ref=e423]: 
                - strong [ref=e424]: 15.235.162.58
              - generic [ref=e426]: 1 lượt
      - generic [ref=e431]:
        - generic [ref=e433]:
          - heading "Số người dùng theo Mã quốc gia" [level=5] [ref=e435]:
            - text: Số người dùng theo
            - link "Mã quốc gia" [ref=e436] [cursor=pointer]:
              - /url: "#"
          - table [ref=e437]:
            - rowgroup [ref=e438]:
              - row "QUỐC GIA LƯỢNG TRUY CẬP" [ref=e439]:
                - columnheader "QUỐC GIA" [ref=e440]
                - columnheader "LƯỢNG TRUY CẬP" [ref=e441]
            - rowgroup [ref=e442]:
              - row "Unknown 83 (61.48%)" [ref=e443]:
                - cell "Unknown" [ref=e444]
                - cell "83 (61.48%)" [ref=e445]: 83 (61.48%)
              - row "Vietnam 37 (27.41%)" [ref=e448]:
                - cell "Vietnam" [ref=e449]
                - cell "37 (27.41%)" [ref=e450]: 37 (27.41%)
              - row "United States 14 (10.37%)" [ref=e453]:
                - cell "United States" [ref=e454]
                - cell "14 (10.37%)" [ref=e455]: 14 (10.37%)
              - row "Singapore 1 (0.74%)" [ref=e458]:
                - cell "Singapore" [ref=e459]
                - cell "1 (0.74%)" [ref=e460]: 1 (0.74%)
        - generic [ref=e464]:
          - heading "Số người dùng theo Mã thành phố" [level=5] [ref=e466]:
            - text: Số người dùng theo
            - link "Mã thành phố" [ref=e467] [cursor=pointer]:
              - /url: "#"
          - table [ref=e468]:
            - rowgroup [ref=e469]:
              - row "THÀNH PHỐ LƯỢNG TRUY CẬP" [ref=e470]:
                - columnheader "THÀNH PHỐ" [ref=e471]
                - columnheader "LƯỢNG TRUY CẬP" [ref=e472]
            - rowgroup [ref=e473]:
              - row "Unknown 83 (63.85%)" [ref=e474]:
                - cell "Unknown" [ref=e475]
                - cell "83 (63.85%)" [ref=e476]: 83 (63.85%)
              - row "Quận Hai 25 (19.23%)" [ref=e479]:
                - cell "Quận Hai" [ref=e480]
                - cell "25 (19.23%)" [ref=e481]: 25 (19.23%)
              - row "Ho Chi Minh City 10 (7.69%)" [ref=e484]:
                - cell "Ho Chi Minh City" [ref=e485]
                - cell "10 (7.69%)" [ref=e486]: 10 (7.69%)
              - row "Boydton 3 (2.31%)" [ref=e489]:
                - cell "Boydton" [ref=e490]
                - cell "3 (2.31%)" [ref=e491]: 3 (2.31%)
              - row "Fort Worth 2 (1.54%)" [ref=e494]:
                - cell "Fort Worth" [ref=e495]
                - cell "2 (1.54%)" [ref=e496]: 2 (1.54%)
              - row "Social Circle 2 (1.54%)" [ref=e499]:
                - cell "Social Circle" [ref=e500]
                - cell "2 (1.54%)" [ref=e501]: 2 (1.54%)
              - row "Springfield 2 (1.54%)" [ref=e504]:
                - cell "Springfield" [ref=e505]
                - cell "2 (1.54%)" [ref=e506]: 2 (1.54%)
              - row "Phoenix 1 (0.77%)" [ref=e509]:
                - cell "Phoenix" [ref=e510]
                - cell "1 (0.77%)" [ref=e511]: 1 (0.77%)
              - row "Chicago 1 (0.77%)" [ref=e514]:
                - cell "Chicago" [ref=e515]
                - cell "1 (0.77%)" [ref=e516]: 1 (0.77%)
              - row "Des Moines 1 (0.77%)" [ref=e519]:
                - cell "Des Moines" [ref=e520]
                - cell "1 (0.77%)" [ref=e521]: 1 (0.77%)
    - contentinfo [ref=e524]:
      - paragraph [ref=e527]:
        - strong [ref=e529]: Công Ty TNHH Thương Mại Dịch Vụ MIMA
        - text: MST
        - strong [ref=e530]: ":"
        - text: "0318672839"
        - strong [ref=e531]: "Địa chỉ:"
        - link [ref=e532] [cursor=pointer]:
          - /url: https://maps.app.goo.gl/rA8evCuRwT3Go6bR9
          - text: 31/3B Ấp Thới Tứ 1, Xã Đông Thạnh, TP Hồ Chí Minh
        - text: ", Việt Nam"
        - strong [ref=e533]: "Hotline:"
        - text: 0909 035 333
        - strong [ref=e534]: "Website:"
        - link [ref=e535] [cursor=pointer]:
          - /url: https://mimadigi.com
          - text: https://
        - link [ref=e536] [cursor=pointer]:
          - /url: https://mimadigi.com
          - text: mimadigi.com
        - strong [ref=e537]: "Email:"
        - text: info@mimadigi.com
        - link [ref=e538] [cursor=pointer]:
          - /url: //www.dmca.com/Protection/Status.aspx?ID=2f39ff2a-7db5-4e53-9bb6-15ee8957080c&refurl=https://mimadigi.com/
          - img [ref=e539]
        - link [ref=e540] [cursor=pointer]:
          - /url: http://online.gov.vn/Website/chi-tiet-134906
          - img [ref=e541]
  - generic [ref=e542]:
    - generic [ref=e543]: Tùy chỉnh
    - generic [ref=e545]:
      - generic [ref=e546]:
        - heading "Slidebar" [level=4] [ref=e547]
        - generic [ref=e548]:
          - button [ref=e549] [cursor=pointer]
          - button [ref=e550] [cursor=pointer]
          - button [ref=e551] [cursor=pointer]
          - button [ref=e552] [cursor=pointer]
          - button [ref=e553] [cursor=pointer]
          - button [ref=e554] [cursor=pointer]
          - button [ref=e555] [cursor=pointer]
          - button [ref=e556] [cursor=pointer]
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
          - button [ref=e578] [cursor=pointer]
          - button [ref=e579] [cursor=pointer]
          - button [ref=e580] [cursor=pointer]
          - button [ref=e581] [cursor=pointer]
          - button [ref=e582] [cursor=pointer]
          - button [ref=e583] [cursor=pointer]
          - button [ref=e584] [cursor=pointer]
          - button [ref=e585] [cursor=pointer]
      - generic [ref=e586]:
        - heading "Light mode" [level=4] [ref=e587]
        - generic [ref=e589]:
          - generic [ref=e590]:
            - img "Light" [ref=e594] [cursor=pointer]
            - generic [ref=e595]: Light
          - generic [ref=e596]:
            - img "Dark" [ref=e600] [cursor=pointer]
            - generic [ref=e601]: Dark
          - generic [ref=e602]:
            - img "System" [ref=e606] [cursor=pointer]
            - generic [ref=e607]: System
      - generic [ref=e608]:
        - heading "Themes" [level=4] [ref=e609]
        - generic [ref=e611]:
          - generic [ref=e612]:
            - img "Default" [ref=e616] [cursor=pointer]
            - generic [ref=e617]: Default
          - generic [ref=e618]:
            - img "Bordered" [ref=e622] [cursor=pointer]
            - generic [ref=e623]: Bordered
          - generic [ref=e624]:
            - img "Semi Dark" [ref=e628] [cursor=pointer]
            - generic [ref=e629]: Semi Dark
    - generic [ref=e631] [cursor=pointer]: 
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
      |                    ^ Error: Lỗi: Bấm Xem thêm nhưng số lượng Tin tức không tăng sau 30s! (Ban đầu: 34)
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
  220 |                     const baseUrl = process.env.BASE_URL?.endsWith('/') ? process.env.BASE_URL : process.env.BASE_URL + '/';
  221 |                     await page.goto(baseUrl + 'madmin/index.php');
  222 |                     await pageObj.gotoAdminMenu();
  223 | 
  224 |                     await pageObj.deleteArticlesWithPrefix(bulkPrefix);
  225 |                 });
  226 |             }
  227 |         }
  228 |     }
```