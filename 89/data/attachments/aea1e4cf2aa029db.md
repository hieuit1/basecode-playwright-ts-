# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web/contract.spec.ts >> Contract Feature Tests >> Submit form should fail with sai định dạng email
- Location: tests/web/contract.spec.ts:48:9

# Error details

```
TimeoutError: locator.hover: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('//button[contains(text(),\'Gửi\')]')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e6]:
      - link "Công Hợp Transport" [ref=e7] [cursor=pointer]:
        - /url: https://thuexekhanhhoa.com/
        - img "Công Hợp Transport" [ref=e8]
      - list
      - generic [ref=e9]:
        - link "Hotline" [ref=e10] [cursor=pointer]:
          - /url: tel:0785555299
          - img "Hotline" [ref=e11]
        - link "0785 555 299" [ref=e13] [cursor=pointer]:
          - /url: tel:0785555299
      - link "Menu" [ref=e15] [cursor=pointer]:
        - /url: "#menu"
    - list [ref=e19]:
      - listitem [ref=e20]:
        - link "Trang chủ" [ref=e21] [cursor=pointer]:
          - /url: https://thuexekhanhhoa.com/
          - generic [ref=e22]: Trang chủ
      - listitem [ref=e23]:
        - text: /
        - link "Liên hệ" [ref=e24] [cursor=pointer]:
          - /url: https://thuexekhanhhoa.com/lien-he
    - generic [ref=e29]:
      - generic [ref=e31]: Liên hệ
      - tablist [ref=e32]
      - generic [ref=e33]:
        - tabpanel [ref=e36]:
          - generic [ref=e37]:
            - paragraph [ref=e38]: "Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Nếu bạn có bất kỳ câu hỏi, yêu cầu báo giá hoặc cần tư vấn dịch vụ, hãy liên hệ với chúng tôi qua các thông tin dưới đây:"
            - paragraph [ref=e39]:
              - generic [ref=e40]:
                - strong [ref=e41]: "📍 Địa chỉ:"
                - text: 111 Nguyễn Thị Minh Khai, TT Phước Dân Ninh Phước, Ninh Thuận
            - paragraph [ref=e42]:
              - strong [ref=e44]: "📞 Hotline: 0785555299"
            - paragraph [ref=e45]:
              - generic [ref=e46]:
                - strong [ref=e47]: "📧 Email:"
                - text: thuexekhanhhoa.com@gmail.com
            - paragraph [ref=e48]: Bạn cũng có thể gửi tin nhắn nhanh qua biểu mẫu liên hệ và chúng tôi sẽ phản hồi trong thời gian sớm nhất.
            - paragraph [ref=e49]:
              - strong [ref=e51]: Cảm ơn bạn đã tin tưởng và lựa chọn dịch vụ của chúng tôi!
        - generic [ref=e52]:
          - generic [ref=e53]:
            - generic [ref=e55]:
              - generic [ref=e56]: Họ và tên *
              - textbox "Họ và tên *" [ref=e57]:
                - /placeholder: Họ và tên
                - text: Nguyen Van B
            - generic [ref=e59]:
              - generic [ref=e60]: Số điện thoại *
              - textbox "Số điện thoại *" [ref=e61]:
                - /placeholder: Số điện thoại
                - text: "0796625425"
            - generic [ref=e63]:
              - generic [ref=e64]: Địa chỉ *
              - textbox "Địa chỉ *" [ref=e65]:
                - /placeholder: Địa chỉ
                - text: 456 Avenue, City
            - generic [ref=e67]:
              - generic [ref=e68]: Email *
              - textbox "Email *" [ref=e69]:
                - /placeholder: Email
                - text: invalid-email-format
          - generic [ref=e71]:
            - generic [ref=e72]: Chủ đề *
            - textbox "Chủ đề *" [ref=e73]:
              - /placeholder: Dịch vụ quan tâm
              - text: Test Subject
          - generic [ref=e75]:
            - generic [ref=e76]: Nội dung *
            - textbox "Nội dung *" [active] [ref=e77]:
              - /placeholder: Nội dung
              - text: This is a test content for invalid email.
          - generic [ref=e78]:
            - button "Gửi liên hệ" [ref=e79] [cursor=pointer]:
              - img [ref=e81]
              - generic [ref=e84]: Gửi liên hệ
            - button "Nhập lại" [ref=e85] [cursor=pointer]
      - iframe [ref=e87]:
        
    - generic:
      - generic:
        - generic:
          - generic:
            - generic:
              - paragraph: Thông tin liên hệ
              - generic:
                - paragraph:
                  - generic:
                    - text: "Địa chỉ: 111 Nguyễn Thị Minh Khai, TT Phước Dân Ninh Phước, Ninh Thuận"
                    - text: "Hotline: 0785555299"
                    - text: "Email: thuexekhanhhoa.com@gmail.com"
                    - text: "Website:"
                    - link "thuexekhanhhoa.com":
                      - /url: https://thuexekhanhhoa.com/
                    - text: "Giờ làm việc: Thứ 2 - Chủ nhật 7:30 - 20:00"
            - generic:
              - generic:
                - generic:
                  - paragraph: Truy cập nhanh
                  - list:
                    - listitem:
                      - link "Trang chủ":
                        - /url: "#"
                    - listitem:
                      - link "Về chúng tôi":
                        - /url: gioi-thieu
                    - listitem:
                      - link "Dịch vụ":
                        - /url: dich-vu
                    - listitem:
                      - link "Tuyển dụng":
                        - /url: tuyen-dung
                    - listitem:
                      - link "Tin tức":
                        - /url: tin-tuc
                - generic:
                  - paragraph: Chính sách chúng tôi
                  - list:
                    - listitem:
                      - link "Chính sách bảo mật":
                        - /url: chinh-sach-bao-mat
                    - listitem:
                      - link "Chính sách đặt xe":
                        - /url: chinh-sach-dat-xe
                    - listitem:
                      - link "Chính sách huỷ xe":
                        - /url: chinh-sach-huy-xe
                    - listitem:
                      - link "Hướng dẫn thanh toán":
                        - /url: huong-dan-thanh-toan
                    - listitem:
                      - link "Chính sách bảo mật thông tin":
                        - /url: chinh-sach-bao-mat-thong-tin
                    - listitem:
                      - link "Giải quyết tranh chấp":
                        - /url: giai-quyet-tranh-chap
                - generic:
                  - paragraph: Các dòng xe
                  - list
      - generic:
        - generic:
          - generic:
            - generic: Copyright ©2026 Thuê Xe Khánh Hoà. Thiết kế web MIMA
            - generic:
              - generic: "Đang online: 1965"
              - text: "|"
              - generic: "Hôm nay: 148"
              - text: "|"
              - generic: "Tổng truy cập: 2002"
    - text: 
  - img "Go Top" [ref=e89] [cursor=pointer]
```

# Test source

```ts
  3   | 
  4   | export class ContractPage extends BasePage {
  5   |     // Locators
  6   |     readonly fullnameInput: Locator;
  7   |     readonly phoneInput: Locator;
  8   |     readonly addressInput: Locator;
  9   |     readonly emailInput: Locator;
  10  |     readonly subjectInput: Locator;
  11  |     readonly contentTextarea: Locator;
  12  |     readonly sendButton: Locator;
  13  |     readonly resetButton: Locator;
  14  |     readonly successMessage: Locator;
  15  |     readonly dashboardElement: Locator;
  16  |     readonly notificationDropdown: Locator;
  17  |     readonly contactLink: Locator;
  18  |     readonly selectAllCheckbox: Locator;
  19  |     readonly deleteAllButton: Locator;
  20  |     readonly confirmDeleteButton: Locator;
  21  | 
  22  |     constructor(page: Page) {
  23  |         super(page);
  24  |         this.fullnameInput = page.locator("//input[@id='fullname-contact']");
  25  |         this.phoneInput = page.locator("//input[@id='phone-contact']");
  26  |         this.addressInput = page.locator("//input[@id='address-contact']");
  27  |         this.emailInput = page.locator("//input[@id='email-contact']");
  28  |         this.subjectInput = page.locator("//input[@id='subject-contact']");
  29  |         this.contentTextarea = page.locator("//textarea[@id='content-contact']");
  30  |         this.sendButton = page.locator("//button[contains(text(),'Gửi')]");
  31  |         this.resetButton = page.locator("//button[contains(text(),'Nhập lại')]");
  32  |         this.successMessage = page.locator("//div[@id='alert']");
  33  |         this.dashboardElement = page.locator("//span[@class='text-split']");
  34  |         this.notificationDropdown = page.locator("//li[@class='nav-item dropdown']//a[@class='nav-link']");
  35  |         this.contactLink = page.locator("//a[contains(text(),'Liên hệ')]");
  36  |         this.selectAllCheckbox = page.locator("//input[@id='selectall-checkbox']");
  37  |         this.deleteAllButton = page.locator("//div[@class='card-footer text-sm']//a[@id='delete-all']");
  38  |         this.confirmDeleteButton = page.locator("//button[contains(text(),'Đồng ý')]");
  39  |     }
  40  | 
  41  |     // Điền dữ liệu vào form liên hệ (Cố tình làm chậm để lừa reCAPTCHA)
  42  |     async fillContactForm(fullname: string, phone: string, address: string, email: string, subject: string, content: string) {
  43  |         await test.step(`Điền thông tin liên hệ: ${fullname}`, async () => {
  44  |             const typingDelay = 50; // Delay 50ms giữa mỗi lần gõ phím (giống người thật)
  45  |             const fieldDelay = 300; // Nghỉ 300ms giữa việc chuyển sang ô tiếp theo
  46  | 
  47  |             if (fullname) {
  48  |                 await this.fullnameInput.click();
  49  |                 await this.fullnameInput.pressSequentially(fullname, { delay: typingDelay });
  50  |                 await this.page.waitForTimeout(fieldDelay);
  51  |             }
  52  |             if (phone) {
  53  |                 await this.phoneInput.click();
  54  |                 await this.phoneInput.pressSequentially(phone, { delay: typingDelay });
  55  |                 await this.page.waitForTimeout(fieldDelay);
  56  |             }
  57  |             if (address) {
  58  |                 await this.addressInput.click();
  59  |                 await this.addressInput.pressSequentially(address, { delay: typingDelay });
  60  |                 await this.page.waitForTimeout(fieldDelay);
  61  |             }
  62  |             if (email) {
  63  |                 await this.emailInput.click();
  64  |                 await this.emailInput.pressSequentially(email, { delay: typingDelay });
  65  |                 await this.page.waitForTimeout(fieldDelay);
  66  |             }
  67  |             if (subject) {
  68  |                 await this.subjectInput.click();
  69  |                 await this.subjectInput.pressSequentially(subject, { delay: typingDelay });
  70  |                 await this.page.waitForTimeout(fieldDelay);
  71  |             }
  72  |             if (content) {
  73  |                 await this.contentTextarea.click();
  74  |                 await this.contentTextarea.pressSequentially(content, { delay: typingDelay });
  75  |                 await this.page.waitForTimeout(fieldDelay);
  76  |             }
  77  | 
  78  |         });
  79  |     }
  80  |     async fillContactFormNe(fullname: string, phone: string, address: string, email: string, subject: string, content: string) {
  81  |         await test.step(`Điền thông tin liên hệ: ${fullname}`, async () => {
  82  |             if (fullname) { await this.fullnameInput.fill(fullname); }
  83  |             if (phone) { await this.phoneInput.fill(phone); }
  84  |             if (address) { await this.addressInput.fill(address); }
  85  |             if (email) { await this.emailInput.fill(email); }
  86  |             if (subject) { await this.subjectInput.fill(subject); }
  87  |             if (content) { await this.contentTextarea.fill(content); }
  88  |         });
  89  |     }
  90  | 
  91  |     async gotoContactPage() {
  92  |         const baseUrl = process.env.BASE_URL?.endsWith('/') ? process.env.BASE_URL : process.env.BASE_URL + '/';
  93  |         await this.page.goto(baseUrl + 'lien-he');
  94  |     }
  95  | 
  96  |     // Bấm nút Gửi
  97  |     async clickSend() {
  98  |         await test.step("Bấm nút Gửi", async () => {
  99  |             // Đợi 2.5 giây để mô phỏng người dùng đọc lại form và chờ reCAPTCHA load token ngầm xong
  100 |             await this.page.waitForTimeout(3000);
  101 | 
  102 |             // Từ từ rê chuột vào nút Gửi giống người thật
> 103 |             await this.sendButton.hover({ force: true });
      |                                   ^ TimeoutError: locator.hover: Timeout 30000ms exceeded.
  104 |             await this.page.waitForTimeout(1000); // Khựng lại nửa giây trước khi bấm
  105 | 
  106 |             await this.clickOn(this.sendButton);
  107 |         });
  108 |     }
  109 | 
  110 |     async clickReset() {
  111 |         await test.step("Bấm nút Nhập lại", async () => {
  112 |             await this.clickOn(this.resetButton);
  113 |         });
  114 |     }
  115 | 
  116 |     async goToContactManagement() {
  117 |         await test.step("Mở danh sách Liên hệ từ thông báo", async () => {
  118 |             await this.clickOn(this.notificationDropdown);
  119 |             await this.clickOn(this.contactLink);
  120 |         });
  121 |     }
  122 | 
  123 |     getContactRow(uniqueName: string): Locator {
  124 |         return this.page.getByText(uniqueName).first();
  125 |     }
  126 | 
  127 |     async verifyContactExists(uniqueName: string) {
  128 |         await test.step(`Xác nhận liên hệ có tên '${uniqueName}' xuất hiện trong Admin`, async () => {
  129 |             const targetCell = this.getContactRow(uniqueName);
  130 |             await targetCell.waitFor({ state: 'visible', timeout: 10000 });
  131 |         });
  132 |     }
  133 |     async deleteContact() {
  134 |         await test.step(`Xóa liên hệ`, async () => {
  135 |             await this.clickOn(this.selectAllCheckbox);
  136 |             await this.clickOn(this.deleteAllButton);
  137 |             await this.clickOn(this.confirmDeleteButton);
  138 |         });
  139 |     }
  140 | 
  141 | }
  142 | 
```