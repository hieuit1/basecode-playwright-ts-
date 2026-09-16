# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: admin/service.spec.ts >> Service Management Tests >> Bulk insert 35 services via Copy and verify Load More on website
- Location: tests/admin/service.spec.ts:132:13

# Error details

```
Error: Lỗi nghiêm trọng: Không tìm thấy nút 'Xem thêm' phân trang ở cuối màn hình dù đã có hơn 30 Dịch vụ!

expect(locator).toBeVisible() failed

Locator: locator('[id^=\'btn-xemthem\']').filter({ visible: true }).first()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Lỗi nghiêm trọng: Không tìm thấy nút 'Xem thêm' phân trang ở cuối màn hình dù đã có hơn 30 Dịch vụ! with timeout 10000ms
  - waiting for locator('[id^=\'btn-xemthem\']').filter({ visible: true }).first()

```

```yaml
- paragraph:
  - img
  - text: Số L22-23, đường N1, Khu phố 1, Phường Trấn Biên, Đồng Nai
- paragraph:
  - img
  - 'link "Email: xuanhieu.mima@gmail.com"':
    - /url: mailto:xuanhieu.mima@gmail.com
- link "Lorem Ipsum":
  - /url: https://code6.mimadigi.vn/2026/september/phuongvinh_115626w/
  - img "Lorem Ipsum"
- list:
  - listitem:
    - link "Trang chủ":
      - /url: https://code6.mimadigi.vn/2026/september/phuongvinh_115626w/
  - listitem:
    - link "Về chúng tôi":
      - /url: gioi-thieu
  - listitem:
    - link "Dịch vụ":
      - /url: dich-vu
      - text: Dịch vụ
      - img
  - listitem:
    - link "Thông tin":
      - /url: tin-tuc
  - listitem:
    - link "Album":
      - /url: thu-vien-anh
  - listitem:
    - link "Liên hệ":
      - /url: lien-he
  - listitem:
    - link "Về CEO":
      - /url: ve-ceo
- link "0888 080 138":
  - /url: tel:0888080138
  - img
  - text: 0888 080 138
- img "Lorem Ipsum"
- list:
  - listitem:
    - link "Trang chủ":
      - /url: https://code6.mimadigi.vn/2026/september/phuongvinh_115626w/
  - listitem:
    - text: /
    - link "Dịch vụ":
      - /url: https://code6.mimadigi.vn/2026/september/phuongvinh_115626w/dich-vu
- heading "Tất cả Dịch vụ" [level=2]
- link "Dịch vụ ly hôn Dịch vụ ly hôn":
  - /url: dich-vu-ly-hon
  - img "Dịch vụ ly hôn"
  - heading "Dịch vụ ly hôn" [level=3]
- link "Pháp lý văn bản Pháp lý văn bản":
  - /url: phap-ly-van-ban
  - img "Pháp lý văn bản"
  - heading "Pháp lý văn bản" [level=3]
- link "Tư vấn pháp luật Tư vấn pháp luật":
  - /url: tu-van-phap-luat
  - img "Tư vấn pháp luật"
  - heading "Tư vấn pháp luật" [level=3]
- link "Pháp nhân đại diện Pháp nhân đại diện":
  - /url: phap-nhan-dai-dien
  - img "Pháp nhân đại diện"
  - heading "Pháp nhân đại diện" [level=3]
- link "Thành lập cty hộ Kinh doanh Thành lập cty hộ Kinh doanh":
  - /url: thanh-lap-cty-ho-kinh-doanh
  - img "Thành lập cty hộ Kinh doanh"
  - heading "Thành lập cty hộ Kinh doanh" [level=3]
- link "Soạn thảo văn bản Review hợp đồng Soạn thảo văn bản Review hợp đồng":
  - /url: soan-thao-van-ban-review-hop-dong
  - img "Soạn thảo văn bản Review hợp đồng"
  - heading "Soạn thảo văn bản Review hợp đồng" [level=3]
- heading "Bài viết mới nhất" [level=2]
- paragraph:
  - 'link "Cập nhật chính sách Thuế mới nhất: Doanh nghiệp cần lưu ý những thay đổi quan trọng nào?"':
    - /url: cap-nhat-chinh-sach-thue-moi-nhat-doanh-nghiep-can-luu-y-nhung-thay-doi-quan-trong-nao
    - 'img "Cập nhật chính sách Thuế mới nhất: Doanh nghiệp cần lưu ý những thay đổi quan trọng nào?"'
- 'heading "Cập nhật chính sách Thuế mới nhất: Doanh nghiệp cần lưu ý những thay đổi quan trọng nào?" [level=3]':
  - 'link "Cập nhật chính sách Thuế mới nhất: Doanh nghiệp cần lưu ý những thay đổi quan trọng nào?"':
    - /url: cap-nhat-chinh-sach-thue-moi-nhat-doanh-nghiep-can-luu-y-nhung-thay-doi-quan-trong-nao
- paragraph:
  - 'link "Điều kiện & thủ tục ly hôn thuận tình năm 2026: Hướng dẫn chi tiết."':
    - /url: dieu-kien-thu-tuc-ly-hon-thuan-tinh-nam-2026-huong-dan-chi-tiet
    - 'img "Điều kiện & thủ tục ly hôn thuận tình năm 2026: Hướng dẫn chi tiết."'
- 'heading "Điều kiện & thủ tục ly hôn thuận tình năm 2026: Hướng dẫn chi tiết." [level=3]':
  - 'link "Điều kiện & thủ tục ly hôn thuận tình năm 2026: Hướng dẫn chi tiết."':
    - /url: dieu-kien-thu-tuc-ly-hon-thuan-tinh-nam-2026-huong-dan-chi-tiet
- paragraph:
  - 'link "Điều kiện & thủ tục ly hôn thuận tình năm 2026: Hướng dẫn chi tiết. (1) (1)"':
    - /url: dieu-kien-amp-thu-tuc-ly-hon-thuan-tinh-nam-2026-huong-dan-chi-tiet-1-1
    - 'img "Điều kiện & thủ tục ly hôn thuận tình năm 2026: Hướng dẫn chi tiết. (1) (1)"'
- 'heading "Điều kiện & thủ tục ly hôn thuận tình năm 2026: Hướng dẫn chi tiết. (1) (1)" [level=3]':
  - 'link "Điều kiện & thủ tục ly hôn thuận tình năm 2026: Hướng dẫn chi tiết. (1) (1)"':
    - /url: dieu-kien-amp-thu-tuc-ly-hon-thuan-tinh-nam-2026-huong-dan-chi-tiet-1-1
- link "Xem thêm bài viết":
  - /url: tin-tuc
  - img
  - text: Xem thêm bài viết
- text: Đăng ký tư vấn ngay !! Họ và tên
- emphasis: "*"
- textbox "Họ và tên *":
  - /placeholder: Nhập họ và tên ...
- text: Số điện thoại
- emphasis: "*"
- textbox "Số điện thoại *":
  - /placeholder: Nhập số điện thoại
- text: Email
- emphasis: "*"
- textbox "Email *":
  - /placeholder: Nhập email
- text: Dịch vụ cần tư vấn
- emphasis: "*"
- combobox "Dịch vụ cần tư vấn *":
  - option "Chọn dịch vụ" [selected]
  - option "Dịch vụ ly hôn"
  - option "Pháp lý văn bản"
  - option "Tư vấn pháp luật"
  - option "Pháp nhân đại diện"
  - option "Thành lập cty hộ Kinh doanh"
  - option "Soạn thảo văn bản Review hợp đồng"
- text: Ghi chú
- textbox "Ghi chú":
  - /placeholder: Lời nhắn
- button "Nhận tư vấn ngay"
- link "Lorem Ipsum":
  - /url: https://code6.mimadigi.vn/2026/september/phuongvinh_115626w/
  - img "Lorem Ipsum"
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
- text: Thông tin liên hệ
- paragraph: "Chi nhánh 2 Công ty TNHH Cung Ứng Nội Thất Hân Di - Mã số chi nhánh: 0315524871-002 - Ngày cấp: 24/11/2022 - Địa chỉ: 314 Trần Thị Năm, Khu phố 9, Phường Trung Mỹ Tây, Thành phố Hồ Chí Minh, Việt Nam - Người đại diện theo pháp luật: Ngô Kim Sang - Điện thoại: 0934004552"
- text: Về Phượng Vinh
- list:
  - listitem:
    - link "Trang chủ":
      - /url: https://code6.mimadigi.vn/2026/september/phuongvinh_115626w/
  - listitem:
    - link "Về chúng tôi":
      - /url: gioi-thieu
  - listitem:
    - link "Thông tin":
      - /url: tin-tuc
  - listitem:
    - link "Album":
      - /url: thu-vien-anh
  - listitem:
    - link "Về CEO":
      - /url: ve-ceo
  - listitem:
    - link "Liên hệ":
      - /url: lien-he
- text: Dịch vụ
- list:
  - listitem:
    - link "Dịch vụ ly hôn":
      - /url: dich-vu-ly-hon
  - listitem:
    - link "Pháp lý văn bản":
      - /url: phap-ly-van-ban
  - listitem:
    - link "Tư vấn pháp luật":
      - /url: tu-van-phap-luat
  - listitem:
    - link "Pháp nhân đại diện":
      - /url: phap-nhan-dai-dien
  - listitem:
    - link "Thành lập cty hộ Kinh doanh":
      - /url: thanh-lap-cty-ho-kinh-doanh
  - listitem:
    - link "Soạn thảo văn bản Review hợp đồng":
      - /url: soan-thao-van-ban-review-hop-dong
- text: CÔNG TY LUẬT TRÁCH NHIỆM HỮU HẠN MỘT THÀNH VIÊN PHƯỢNG VINH MST 3604083212 cấp ngày 06/02/2026 cấp bởi Sở Tư Pháp TP Đồng Nai Bản quyền thuộc về Phượng Vinh ©2026. Thiết kế web MIMA. Hỗ trợ khách hàng
- list:
  - listitem:
    - link "Câu hỏi thường gặp":
      - /url: cau-hoi-thuong-gap
  - listitem:
    - link "Chính sách & Điều khoản":
      - /url: chinh-sach-dieu-khoan
- text: Giờ làm việc
- list:
  - listitem: T2 - CN, 8:00 đến 17:30
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
      |                   ^ Error: Lỗi nghiêm trọng: Không tìm thấy nút 'Xem thêm' phân trang ở cuối màn hình dù đã có hơn 30 Dịch vụ!
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