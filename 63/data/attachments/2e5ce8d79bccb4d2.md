# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web/cart.spec.ts >> Cart Feature Tests >> TC-05: Thêm nhiều sản phẩm (3-5 SP) vào giỏ hàng
- Location: tests/web/cart.spec.ts:236:13

# Error details

```
Error: Giỏ hàng phải có ít nhất 3 sản phẩm!

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 3
Received:    2
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e4]:
    - generic [ref=e6]:
      - link "CÔNG TY TNHH CFURNI" [ref=e8] [cursor=pointer]:
        - /url: https://code2.mimadigi.vn/2026/august/cfurni_111926w/
        - img "CÔNG TY TNHH CFURNI" [ref=e9]
      - link "Danh Mục" [ref=e12] [cursor=pointer]:
        - /url: javascript:;
        - img [ref=e13]
        - text: Danh Mục
      - generic [ref=e19]:
        - textbox "Tìm kiếm sản phẩm...." [ref=e20]
        - button [ref=e21] [cursor=pointer]:
          - img [ref=e22]
      - generic [ref=e24]:
        - img [ref=e25]
        - generic [ref=e28]:
          - text: Hotline
          - link "0932 67 82 67" [ref=e29] [cursor=pointer]:
            - /url: tel:0932678267
      - generic [ref=e31]:
        - img [ref=e32]
        - generic [ref=e35]:
          - text: Hệ thống
          - generic "Map" [ref=e36]: CFURNI
      - link "Giỏ hàng 2" [ref=e38] [cursor=pointer]:
        - /url: gio-hang
        - img [ref=e39]
        - generic [ref=e43]:
          - generic [ref=e44]: Giỏ hàng
          - generic [ref=e45]: "2"
    - list [ref=e49]:
      - listitem [ref=e50]:
        - link "Bàn ăn" [ref=e51] [cursor=pointer]:
          - /url: ban-an
      - listitem [ref=e52]:
        - link "Bàn sofa" [ref=e53] [cursor=pointer]:
          - /url: ban-sofa
      - listitem [ref=e54]:
        - link "Ghế ăn" [ref=e55] [cursor=pointer]:
          - /url: ghe-an
      - listitem [ref=e56]:
        - link "Sofa đẹp" [ref=e57] [cursor=pointer]:
          - /url: sofa-dep
      - listitem [ref=e58]:
        - link "Văn phòng" [ref=e59] [cursor=pointer]:
          - /url: van-phong
      - listitem [ref=e60]:
        - link "Hàng giải trí" [ref=e61] [cursor=pointer]:
          - /url: hang-giai-tri
      - listitem [ref=e62]:
        - link "Thảm sofa" [ref=e63] [cursor=pointer]:
          - /url: tham-sofa
      - listitem [ref=e64]:
        - link "Phòng ngủ" [ref=e65] [cursor=pointer]:
          - /url: phong-ngu1
      - listitem [ref=e66]:
        - link "Thi công phòng bếp" [ref=e67] [cursor=pointer]:
          - /url: thi-cong-phong-bep
  - list [ref=e70]:
    - listitem [ref=e71]:
      - link "Trang chủ" [ref=e72] [cursor=pointer]:
        - /url: https://code2.mimadigi.vn/2026/august/cfurni_111926w/
        - img [ref=e73]
        - generic [ref=e75]: Trang chủ
    - listitem [ref=e76]:
      - text: /
      - link "Giỏ hàng" [ref=e77] [cursor=pointer]:
        - /url: https://code2.mimadigi.vn/2026/august/cfurni_111926w/gio-hang
  - generic [ref=e81]:
    - generic [ref=e83]:
      - paragraph [ref=e84]: "Giỏ hàng của bạn:"
      - generic [ref=e85]:
        - generic [ref=e87]:
          - generic [ref=e88]: Hình ảnh
          - generic [ref=e89]: Tên sản phẩm
          - generic [ref=e90]: Số lượng
          - generic [ref=e91]: Thành tiền
        - generic [ref=e93]:
          - link "Bàn tab XALAX" [ref=e95] [cursor=pointer]:
            - /url: ban-tab-xalax
            - img "Bàn tab XALAX" [ref=e96]
          - generic [ref=e97]:
            - heading "Bàn tab XALAX" [level=3] [ref=e98]:
              - link "Bàn tab XALAX" [ref=e99] [cursor=pointer]:
                - /url: ban-tab-xalax
            - generic [ref=e100] [cursor=pointer]: Xóa
          - generic [ref=e103]:
            - generic [ref=e104] [cursor=pointer]: "-"
            - spinbutton [ref=e105]: "1"
            - generic [ref=e106] [cursor=pointer]: +
          - paragraph [ref=e108]: 2.190.000đ
        - generic [ref=e110]:
          - link "Bàn sofa CALIBER" [ref=e112] [cursor=pointer]:
            - /url: ban-sofa-caliber
            - img "Bàn sofa CALIBER" [ref=e113]
          - generic [ref=e114]:
            - heading "Bàn sofa CALIBER" [level=3] [ref=e115]:
              - link "Bàn sofa CALIBER" [ref=e116] [cursor=pointer]:
                - /url: ban-sofa-caliber
            - generic [ref=e117] [cursor=pointer]: Xóa
          - generic [ref=e120]:
            - generic [ref=e121] [cursor=pointer]: "-"
            - spinbutton [ref=e122]: "1"
            - generic [ref=e123] [cursor=pointer]: +
          - paragraph [ref=e125]: 7.500.000đ
      - generic [ref=e126]:
        - generic [ref=e127]:
          - textbox "Nhập mã ưu đãi" [ref=e128]
          - button "Áp dụng" [ref=e129] [cursor=pointer]
        - generic [ref=e130]:
          - paragraph [ref=e131]: "Ưu đãi:"
          - paragraph [ref=e132]: 0đ
        - generic [ref=e133]:
          - paragraph [ref=e134]: "Tổng tiền:"
          - paragraph [ref=e135]: 9.690.000đ
    - generic [ref=e137]:
      - paragraph [ref=e138]: "Hình thức thanh toán:"
      - generic [ref=e139]:
        - generic [ref=e141] [cursor=pointer]:
          - radio "Thanh toán bằng chuyển khoản" [ref=e142]
          - text: Thanh toán bằng chuyển khoản
        - generic [ref=e144] [cursor=pointer]:
          - radio "Thanh toán COD" [ref=e145]
          - text: Thanh toán COD
      - paragraph [ref=e146]: "Thông tin giao hàng:"
      - generic [ref=e147]:
        - generic [ref=e148]:
          - generic [ref=e150]:
            - textbox "Họ và tên" [ref=e151]
            - generic: Họ và tên
          - generic [ref=e153]:
            - textbox "Điện thoại" [ref=e154]
            - generic: Điện thoại
        - generic [ref=e156]:
          - textbox "Email" [ref=e157]
          - generic: Email
        - generic [ref=e158]:
          - generic [ref=e159]:
            - combobox [ref=e160] [cursor=pointer]
            - combobox "Tỉnh/thành phố" [ref=e163] [cursor=pointer]:
              - textbox "Tỉnh/thành phố" [ref=e164]
          - generic [ref=e165]:
            - combobox [ref=e166] [cursor=pointer]
            - combobox "Phường/xã" [ref=e169] [cursor=pointer]:
              - textbox "Phường/xã" [ref=e170]
        - generic [ref=e172]:
          - textbox "Địa chỉ" [ref=e173]
          - generic: Địa chỉ
        - generic [ref=e175]:
          - textbox "Yêu cầu khác (không bắt buộc)" [ref=e176]
          - generic: Yêu cầu khác (không bắt buộc)
      - button "Thanh toán" [ref=e177] [cursor=pointer]
  - generic [ref=e182]:
    - generic [ref=e184]:
      - paragraph [ref=e185]:
        - img "Xưởng & Showroom" [ref=e186]
      - generic [ref=e187]:
        - heading "Xưởng & Showroom" [level=3] [ref=e188]
        - paragraph [ref=e189]: Đặt lịch xe trực tiếp sản phẩm
    - generic [ref=e191]:
      - paragraph [ref=e192]:
        - img "Bảo hành khung 10 năm" [ref=e193]
      - generic [ref=e194]:
        - heading "Bảo hành khung 10 năm" [level=3] [ref=e195]
        - paragraph [ref=e196]: Khung gỗ sồi chắc chắn
    - generic [ref=e198]:
      - paragraph [ref=e199]:
        - img "Mút Coolsafe 4 năm" [ref=e200]
      - generic [ref=e201]:
        - heading "Mút Coolsafe 4 năm" [level=3] [ref=e202]
        - paragraph [ref=e203]: Chống cháy đạt tiêu chuẩn
    - generic [ref=e205]:
      - paragraph [ref=e206]:
        - img "Chứng chỉ EQ vật liệu" [ref=e207]
      - generic [ref=e208]:
        - heading "Chứng chỉ EQ vật liệu" [level=3] [ref=e209]
        - paragraph [ref=e210]: An toàn cho trẻ con & thai phụ
    - generic [ref=e212]:
      - paragraph [ref=e213]:
        - img "10,000+ khách hàng" [ref=e214]
      - generic [ref=e215]:
        - heading "10,000+ khách hàng" [level=3] [ref=e216]
        - paragraph [ref=e217]: Đánh giá tốt trên website
  - generic [ref=e218]:
    - generic [ref=e221]:
      - generic [ref=e222]:
        - link "CÔNG TY TNHH CFURNI" [ref=e223] [cursor=pointer]:
          - /url: https://code2.mimadigi.vn/2026/august/cfurni_111926w/
          - img "CÔNG TY TNHH CFURNI" [ref=e224]
        - paragraph [ref=e225]: CÔNG TY TNHH CFURNI
        - table [ref=e227]:
          - rowgroup [ref=e228]:
            - 'row "MST: 0313344129 - Sở kế hoạch và đầu tư TP.HCM cấp ngày 13/7/2015. Office: 198 Đường Số 10, Phường Thông Tây Hội, TP.HCM Showroom 1: 41 Đường A4, Phường Bảy Hiền, TP.HCM Showroom 2: 66A đường A4 (khu K300), Phường Bảy Hiền, TP.HCM Xưởng 1: 25/5A đường số 610, xã Phú Hòa Đông, TP.HCM Xưởng 2: C7C Phạm Hùng, xã Bình Hưng, TP.HCM Email: Cfurni168@gmail.com Web: www.cfurni.vn Facebook: Nội Thất Cfurni Phone: 0932 67 82 67 - 0902 34 93 94" [ref=e229]':
              - 'cell "MST: 0313344129 - Sở kế hoạch và đầu tư TP.HCM cấp ngày 13/7/2015. Office: 198 Đường Số 10, Phường Thông Tây Hội, TP.HCM Showroom 1: 41 Đường A4, Phường Bảy Hiền, TP.HCM Showroom 2: 66A đường A4 (khu K300), Phường Bảy Hiền, TP.HCM Xưởng 1: 25/5A đường số 610, xã Phú Hòa Đông, TP.HCM Xưởng 2: C7C Phạm Hùng, xã Bình Hưng, TP.HCM Email: Cfurni168@gmail.com Web: www.cfurni.vn Facebook: Nội Thất Cfurni Phone: 0932 67 82 67 - 0902 34 93 94" [ref=e230]':
                - paragraph [ref=e231]:
                  - text: "MST: 0313344129 - Sở kế hoạch và đầu tư TP.HCM cấp ngày 13/7/2015."
                  - text: "Office: 198 Đường Số 10, Phường Thông Tây Hội, TP.HCM"
                - paragraph [ref=e232]: "Showroom 1: 41 Đường A4, Phường Bảy Hiền, TP.HCM"
                - paragraph [ref=e233]: "Showroom 2: 66A đường A4 (khu K300), Phường Bảy Hiền, TP.HCM"
                - paragraph [ref=e234]: "Xưởng 1: 25/5A đường số 610, xã Phú Hòa Đông, TP.HCM"
                - paragraph [ref=e235]: "Xưởng 2: C7C Phạm Hùng, xã Bình Hưng, TP.HCM"
                - paragraph [ref=e236]:
                  - text: "Email: Cfurni168@gmail.com"
                  - text: "Web: www.cfurni.vn"
                - paragraph [ref=e237]:
                  - 'link "Facebook: Nội Thất Cfurni" [ref=e238] [cursor=pointer]':
                    - /url: https://www.facebook.com/noithatcfurni/
                - paragraph [ref=e239]: "Phone: 0932 67 82 67 - 0902 34 93 94"
        - paragraph [ref=e240]: Theo dõi chúng tôi tại
        - generic [ref=e241]:
          - link "Facebook" [ref=e242] [cursor=pointer]:
            - /url: https://www.facebook.com/noithatcfurni
            - img "Facebook" [ref=e243]
          - link "Messenger" [ref=e244] [cursor=pointer]:
            - /url: ""
            - img "Messenger" [ref=e245]
          - link "Instargam" [ref=e246] [cursor=pointer]:
            - /url: https://www.instagram.com/cfurni.vn?igsh=cnNhNG43aGhhbzJs
            - img "Instargam" [ref=e247]
          - link "TikTok" [ref=e248] [cursor=pointer]:
            - /url: https://www.tiktok.com/@noithatcfurni?_r=1&_t=ZS-98xhhbBhQua
            - img "TikTok" [ref=e249]
          - link "Youtube" [ref=e250] [cursor=pointer]:
            - /url: https://youtube.com/@noithatcfurni?si=HxSvpE0k9CoN2tWr
            - img "Youtube" [ref=e251]
      - img "CÔNG TY TNHH CFURNI" [ref=e254]
    - generic [ref=e257]:
      - generic [ref=e258]:
        - paragraph [ref=e259]: Truy cập nhanh
        - list [ref=e260]:
          - listitem [ref=e261]:
            - link "Giới thiệu" [ref=e262] [cursor=pointer]:
              - /url: gioi-thieu
          - listitem [ref=e263]:
            - link "Sản phẩm" [ref=e264] [cursor=pointer]:
              - /url: san-pham
          - listitem [ref=e265]:
            - link "Dự án" [ref=e266] [cursor=pointer]:
              - /url: du-an
          - listitem [ref=e267]:
            - link "Tuyển dụng" [ref=e268] [cursor=pointer]:
              - /url: tuyen-dung
          - listitem [ref=e269]:
            - link "Liên hệ" [ref=e270] [cursor=pointer]:
              - /url: lien-he
      - generic [ref=e271]:
        - paragraph [ref=e272]: Giải pháp
        - list [ref=e273]:
          - listitem [ref=e274]:
            - link "Phòng khách" [ref=e275] [cursor=pointer]:
              - /url: phong-khach
          - listitem [ref=e276]:
            - link "Phòng ăn" [ref=e277] [cursor=pointer]:
              - /url: phong-an
          - listitem [ref=e278]:
            - link "Phòng ngủ" [ref=e279] [cursor=pointer]:
              - /url: phong-ngu
          - listitem [ref=e280]:
            - link "Phòng làm việc" [ref=e281] [cursor=pointer]:
              - /url: phong-lam-viec
      - generic [ref=e282]:
        - paragraph [ref=e283]: Chính sách hỗ trợ
        - list [ref=e284]:
          - listitem [ref=e285]:
            - link "Chính sách đổi trả" [ref=e286] [cursor=pointer]:
              - /url: chinh-sach-doi-tra
          - listitem [ref=e287]:
            - link "Chính sách bảo hành" [ref=e288] [cursor=pointer]:
              - /url: chinh-sach-bao-hanh
          - listitem [ref=e289]:
            - link "Chính sách giao hàng" [ref=e290] [cursor=pointer]:
              - /url: chinh-sach-giao-hang
          - listitem [ref=e291]:
            - link "Chính sách thanh toán" [ref=e292] [cursor=pointer]:
              - /url: chinh-sach-thanh-toan
          - listitem [ref=e293]:
            - link "Chính sách xử lý khiếu nại" [ref=e294] [cursor=pointer]:
              - /url: chinh-sach-xu-ly-khieu-nai
          - listitem [ref=e295]:
            - link "Bảo mật thông tin khách hàng" [ref=e296] [cursor=pointer]:
              - /url: bao-mat-thong-tin-khach-hang
      - generic [ref=e297]:
        - paragraph [ref=e298]: Hotline
        - paragraph [ref=e300]:
          - text: Tư vấn bán hàng
          - text: 0932 67 82 67
          - text: Chăm sóc khách hàng
          - text: 0902 34 93 94
        - link "http://online.gov.vn/nen-tang/4b688d70-4fe8-4619-a929-3c859c5d4206" [ref=e301] [cursor=pointer]:
          - /url: ""
          - img "http://online.gov.vn/nen-tang/4b688d70-4fe8-4619-a929-3c859c5d4206" [ref=e302]
    - generic [ref=e305]:
      - generic [ref=e306]: Copyright ©2026 Công Ty TNHH CFURNI. Thiết kế Web MIMA
      - generic [ref=e307]:
        - generic [ref=e308]:
          - text: "Đang online:"
          - generic [ref=e309]: "22"
        - generic [ref=e310]: "|"
        - generic [ref=e311]:
          - text: "Hôm nay:"
          - generic [ref=e312]: "6"
        - generic [ref=e313]: "|"
        - generic [ref=e314]:
          - text: "Tổng truy cập:"
          - generic [ref=e315]: "359"
  - generic [ref=e316]:
    - link "Map" [ref=e317] [cursor=pointer]:
      - /url: https://maps.app.goo.gl/JD2W7Ho6mb8Hrmsw6
      - img [ref=e321]
    - 'link "Call me: 0932 67 82 67" [ref=e324] [cursor=pointer]':
      - /url: tel:0932678267
      - img [ref=e328]
      - generic [ref=e331]: "Call me: 0932 67 82 67"
    - 'link "Zalo: 0932 67 82 67" [ref=e332] [cursor=pointer]':
      - /url: https://zalo.me/0932678267
      - img [ref=e336]
      - generic [ref=e337]: "Zalo: 0932 67 82 67"
```

# Test source

```ts
  170 |                     const quantityAfterDecrease = await cartPage.getQuantity();
  171 |                     expect(quantityAfterDecrease, "Số lượng sau khi giảm phải = 1").toBe(1);
  172 |                 });
  173 | 
  174 |                 await test.step("5. Kiểm tra giá quay về giá 1 đơn vị", async () => {
  175 |                     const priceAfterDecrease = await cartPage.getSingleProductPrice();
  176 | 
  177 |                     console.log(`Giá sau giảm: ${priceAfterDecrease.toLocaleString('vi-VN')} đ | Giá 1 đơn vị: ${pricePerUnit.toLocaleString('vi-VN')} đ`);
  178 | 
  179 |                     expect(
  180 |                         Math.abs(priceAfterDecrease - pricePerUnit),
  181 |                         `Giá sau giảm (${priceAfterDecrease}) phải xấp xỉ giá 1 đơn vị (${pricePerUnit})`
  182 |                     ).toBeLessThanOrEqual(1000);
  183 |                 });
  184 | 
  185 |                 await test.step("6. Verify giảm dưới 1 vẫn giữ số lượng = 1", async () => {
  186 |                     await cartPage.decreaseQuantity();
  187 | 
  188 |                     const quantityMin = await cartPage.getQuantity();
  189 |                     expect(quantityMin, "Số lượng không được giảm dưới 1").toBe(1);
  190 |                 });
  191 | 
  192 |                 // Cleanup
  193 |                 await test.step("7. Dọn dẹp giỏ hàng", async () => {
  194 |                     await cartPage.clearCart();
  195 |                 });
  196 |             }
  197 |         );
  198 | 
  199 |         // ==================== TC-04: XÓA SẢN PHẨM KHỎI GIỎ HÀNG ====================
  200 |         test(
  201 |             "TC-04: Xóa sản phẩm khỏi giỏ hàng",
  202 |             {
  203 |                 tag: [
  204 |                     "@priority:high",
  205 |                     "@regression",
  206 |                     "@positive",
  207 |                 ],
  208 |                 annotation: [{ type: "severity", description: "critical" }],
  209 |             },
  210 |             async ({ page }) => {
  211 |                 await allure.story("Delete Product from Cart");
  212 | 
  213 |                 await test.step("1. Thêm 1 sản phẩm vào giỏ hàng", async () => {
  214 |                     await cartPage.addOneProductToCart();
  215 |                 });
  216 | 
  217 |                 await test.step("2. Mở giỏ hàng", async () => {
  218 |                     await cartPage.gotoCart();
  219 | 
  220 |                     const itemCount = await cartPage.getCartItemCount();
  221 |                     expect(itemCount, "Phải có ít nhất 1 SP trong giỏ trước khi xóa").toBeGreaterThanOrEqual(1);
  222 |                 });
  223 | 
  224 |                 await test.step("3. Dọn dẹp giỏ hàng", async () => {
  225 |                     await cartPage.clearCart();
  226 |                 });
  227 | 
  228 |                 await test.step("4. Verify giỏ hàng trống", async () => {
  229 |                     const isEmpty = await cartPage.isCartEmpty();
  230 |                     expect(isEmpty, "Giỏ hàng phải hiển thị message trống sau khi xóa hết SP!").toBeTruthy();
  231 |                 });
  232 |             }
  233 |         );
  234 | 
  235 |         // ==================== TC-05: THÊM 3-5 SẢN PHẨM VÀO GIỎ HÀNG ====================
  236 |         test(
  237 |             "TC-05: Thêm nhiều sản phẩm (3-5 SP) vào giỏ hàng",
  238 |             {
  239 |                 tag: [
  240 |                     "@priority:high",
  241 |                     "@smoke",
  242 |                     "@regression",
  243 |                     "@positive",
  244 |                 ],
  245 |                 annotation: [{ type: "severity", description: "critical" }],
  246 |             },
  247 |             async ({ page }) => {
  248 |                 await allure.story("Add Multiple Products to Cart");
  249 | 
  250 |                 const productCount = cartTestConfig.multiProductCount;
  251 | 
  252 |                 await test.step(`1. Thêm ${productCount} sản phẩm ngẫu nhiên vào giỏ hàng`, async () => {
  253 |                     await cartPage.addMultipleProductsToCart(productCount);
  254 |                 });
  255 | 
  256 |                 await test.step("2. Mở giỏ hàng", async () => {
  257 |                     await cartPage.gotoCart();
  258 |                 });
  259 | 
  260 |                 await test.step(`3. Kiểm tra giỏ hàng có đủ ${productCount} sản phẩm`, async () => {
  261 |                     const isEmpty = await cartPage.isCartEmpty();
  262 |                     expect(isEmpty, "Giỏ hàng không được trống!").toBeFalsy();
  263 | 
  264 |                     const itemCount = await cartPage.getCartItemCount();
  265 |                     console.log(`Số lượng dòng SP trong giỏ: ${itemCount} | Kỳ vọng: ${productCount}`);
  266 | 
  267 |                     expect(
  268 |                         itemCount,
  269 |                         `Giỏ hàng phải có ít nhất ${productCount} sản phẩm!`
> 270 |                     ).toBeGreaterThanOrEqual(productCount);
      |                       ^ Error: Giỏ hàng phải có ít nhất 3 sản phẩm!
  271 |                 });
  272 | 
  273 |                 await test.step("4. Kiểm tra tổng tiền > 0 và hợp lệ", async () => {
  274 |                     const totalPrice = await cartPage.getTotalPrice();
  275 |                     expect(totalPrice, "Tổng tiền phải lớn hơn 0").toBeGreaterThan(0);
  276 | 
  277 |                     // Kiểm tra tổng tiền = tổng các dòng SP
  278 |                     let sumIndividualPrices = 0;
  279 |                     const itemCount = await cartPage.getCartItemCount();
  280 | 
  281 |                     for (let i = 0; i < itemCount; i++) {
  282 |                         const linePrice = await cartPage.getSingleProductPrice(i);
  283 |                         sumIndividualPrices += linePrice;
  284 |                         console.log(`  SP #${i + 1}: ${linePrice.toLocaleString('vi-VN')} đ`);
  285 |                     }
  286 | 
  287 |                     console.log(`  Tổng cộng từng dòng: ${sumIndividualPrices.toLocaleString('vi-VN')} đ`);
  288 |                     console.log(`  Tổng tiền hiển thị: ${totalPrice.toLocaleString('vi-VN')} đ`);
  289 | 
  290 |                     // Cho phép sai số ±5000đ (do nhiều SP có thể có discount rounding)
  291 |                     expect(
  292 |                         Math.abs(totalPrice - sumIndividualPrices),
  293 |                         `Tổng tiền (${totalPrice}) phải xấp xỉ tổng từng dòng (${sumIndividualPrices})`
  294 |                     ).toBeLessThanOrEqual(5000);
  295 |                 });
  296 | 
  297 |                 // Cleanup
  298 |                 await test.step("5. Dọn dẹp giỏ hàng", async () => {
  299 |                     await cartPage.clearCart();
  300 |                 });
  301 |             }
  302 |         );
  303 | 
  304 |         // ==================== TC-06: GIỎ HÀNG TRỐNG (NEGATIVE) ====================
  305 |         test(
  306 |             "TC-06: Giỏ hàng trống khi chưa thêm sản phẩm",
  307 |             {
  308 |                 tag: [
  309 |                     "@priority:medium",
  310 |                     "@regression",
  311 |                     "@negative",
  312 |                 ],
  313 |                 annotation: [{ type: "severity", description: "normal" }],
  314 |             },
  315 |             async ({ page }) => {
  316 |                 await allure.story("Empty Cart Verification");
  317 | 
  318 |                 await test.step("1. Điều hướng về trang chủ", async () => {
  319 |                     await cartPage.gotoHomePage();
  320 |                 });
  321 | 
  322 |                 await test.step("2. Dọn sạch giỏ hàng (nếu đã có SP từ trước)", async () => {
  323 |                     await cartPage.gotoCart();
  324 | 
  325 |                     // Xóa hết SP cũ nếu có
  326 |                     const existingItems = await cartPage.getCartItemCount();
  327 |                     if (existingItems > 0) {
  328 |                         console.log(`Phát hiện ${existingItems} SP cũ trong giỏ, đang dọn dẹp...`);
  329 |                         await cartPage.clearCart();
  330 |                     }
  331 |                 });
  332 | 
  333 |                 await test.step("3. Kiểm tra message giỏ hàng trống", async () => {
  334 |                     const isEmpty = await cartPage.isCartEmpty();
  335 |                     expect(
  336 |                         isEmpty,
  337 |                         "Phải hiển thị message 'Không tồn tại sản phẩm nào trong giỏ hàng !'"
  338 |                     ).toBeTruthy();
  339 |                 });
  340 | 
  341 |                 await test.step("4. Kiểm tra tổng tiền không hiển thị hoặc = 0", async () => {
  342 |                     const isTotalVisible = await cartPage.totalPrice.isVisible({ timeout: 2000 }).catch(() => false);
  343 | 
  344 |                     if (isTotalVisible) {
  345 |                         const totalPrice = await cartPage.getTotalPrice();
  346 |                         expect(totalPrice, "Tổng tiền giỏ hàng trống phải = 0").toBe(0);
  347 |                     } else {
  348 |                         // Tổng tiền không hiển thị khi giỏ trống → OK
  349 |                         console.log('Tổng tiền không hiển thị khi giỏ hàng trống → Hợp lệ.');
  350 |                     }
  351 |                 });
  352 |             }
  353 |         );
  354 |     });
  355 | }
```