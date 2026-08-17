# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: OK Vet (/index.php)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 89/100 dưới ngưỡng 96%. Có 2/18 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e6]:
      - link "OK VET" [ref=e8] [cursor=pointer]:
        - /url: https://okvet.com.vn/
        - img "OK VET" [ref=e9]
      - generic [ref=e10]:
        - link "Danh mục" [ref=e12] [cursor=pointer]:
          - /url: javascript:;
          - img [ref=e13]
          - generic [ref=e18]: Danh mục
          - img [ref=e19]
        - list [ref=e21]:
          - listitem [ref=e22]:
            - link "Trang chủ" [ref=e23] [cursor=pointer]:
              - /url: https://okvet.com.vn/
          - listitem [ref=e24]:
            - link "Giới thiệu" [ref=e25] [cursor=pointer]:
              - /url: gioi-thieu
          - listitem [ref=e26]:
            - link "Dịch vụ" [ref=e27] [cursor=pointer]:
              - /url: dich-vu
          - listitem [ref=e28]:
            - link "Tin tức" [ref=e29] [cursor=pointer]:
              - /url: tin-tuc
          - listitem [ref=e30]:
            - link "Liên hệ" [ref=e31] [cursor=pointer]:
              - /url: lien-he
      - link "0396433411" [ref=e34] [cursor=pointer]:
        - /url: tel:0396433411
        - img [ref=e35]
        - text: "0396433411"
    - listbox [ref=e43]:
      - option "OK VET" [ref=e44]:
        - link "OK VET" [ref=e45] [cursor=pointer]:
          - /url: ""
          - img "OK VET" [ref=e47]
    - generic [ref=e48]:
      - generic [ref=e51]:
        - generic [ref=e53]:
          - img "Giao hàng tận nơi" [ref=e55]
          - heading "Giao hàng tận nơi" [level=3] [ref=e56]
        - generic [ref=e58]:
          - img "Giá cạnh tranh" [ref=e60]
          - heading "Giá cạnh tranh" [level=3] [ref=e61]
        - generic [ref=e63]:
          - img "Đảm bảo chất lượng" [ref=e65]
          - heading "Đảm bảo chất lượng" [level=3] [ref=e66]
      - generic [ref=e68]:
        - heading "Bạn đang cần tư vấn mua sản phẩm thuốc thú y nào?" [level=2] [ref=e70]
        - generic [ref=e71]:
          - link "THUỐC THÚ Y OK VET THUỐC THÚ Y OK VET":
            - /url: thuoc-thu-y-ok-vet
            - generic:
              - img "THUỐC THÚ Y OK VET"
              - generic: THUỐC THÚ Y OK VET
          - link "THUỐC THÚ Y KHÁC THUỐC THÚ Y KHÁC":
            - /url: thuoc-thu-y-khac
            - generic:
              - img "THUỐC THÚ Y KHÁC"
              - generic: THUỐC THÚ Y KHÁC
      - heading "Sản phẩm" [level=2] [ref=e73]
      - generic [ref=e78]:
        - generic [ref=e79]:
          - heading "THUỐC THÚ Y OK VET" [level=3] [ref=e80]
          - link "Xem tất cả sản phẩm" [ref=e81] [cursor=pointer]:
            - /url: thuoc-thu-y-ok-vet
            - generic [ref=e82]: Xem tất cả sản phẩm
            - img [ref=e83]
        - generic [ref=e94]:
          - generic:
            - generic:
              - generic:
                - link "OK ATP EXTRA-100ml":
                  - /url: ok-atp-extra-100ml
              - generic:
                - heading "OK ATP EXTRA-100ml" [level=3]:
                  - link "OK ATP EXTRA-100ml":
                    - /url: ok-atp-extra-100ml
                - paragraph:
                  - generic: "Giá:"
                  - generic: 150.000đ
          - generic:
            - generic:
              - generic:
                - link "OK AMOGEN LA-100ml":
                  - /url: ok-amogen-la-100ml
              - generic:
                - heading "OK AMOGEN LA-100ml" [level=3]:
                  - link "OK AMOGEN LA-100ml":
                    - /url: ok-amogen-la-100ml
                - paragraph:
                  - generic: "Giá:"
                  - generic: 160.000đ
          - generic:
            - generic:
              - generic:
                - link "OK ANALGIN+C 20ML":
                  - /url: ok-analginc-20ml
              - generic:
                - heading "OK ANALGIN+C 20ML" [level=3]:
                  - link "OK ANALGIN+C 20ML":
                    - /url: ok-analginc-20ml
                - paragraph:
                  - generic: "Giá:"
                  - generic: 15.000đ
          - generic:
            - generic:
              - generic:
                - link "Dung Dịch Bổ Sung HI-TOXIN":
                  - /url: dung-dich-bo-sung-hi-toxin
              - generic:
                - heading "Dung Dịch Bổ Sung HI-TOXIN" [level=3]:
                  - link "Dung Dịch Bổ Sung HI-TOXIN":
                    - /url: dung-dich-bo-sung-hi-toxin
                - paragraph:
                  - generic: "Giá:"
                  - generic: Liên hệ
      - generic [ref=e96]:
        - heading "Tại sao chọn ok vet" [level=2] [ref=e98]
        - generic [ref=e99]:
          - generic [ref=e100]:
            - generic:
              - generic:
                - heading "Hệ Thống Đại Lý Cả Nước" [level=3]
                - generic: Hệ thống đại lý rộng khắp, kết nối người chăn nuôi với các giải pháp thú y chất lượng.
            - generic:
              - generic:
                - heading "Nguồn Gốc Rõ Ràng" [level=3]
                - generic: Sản phẩm có nguồn gốc rõ ràng, đảm bảo chất lượng.
          - img "OK VET" [ref=e103]
          - generic [ref=e104]:
            - generic:
              - generic:
                - heading "Nhiều Năm Kinh Nghiệm" [level=3]
                - generic: Nhiều năm kinh nghiệm, mang đến giải pháp thú y chất lượng và đáng tin cậy.
            - generic:
              - generic:
                - heading "Chăm Sóc Tận Tình" [level=3]
                - generic: Đội ngũ tư vấn tận tâm, luôn sẵn sàng hỗ trợ khách hàng.
      - generic [ref=e107]:
        - generic [ref=e109]:
          - heading "ĐĂNG KÝ LÀM ĐẠI LÝ" [level=2] [ref=e111]
          - generic [ref=e113]:
            - generic [ref=e115]:
              - generic [ref=e116]: Họ Và Tên
              - textbox "Họ Và Tên" [ref=e117]:
                - /placeholder: Nhập họ và tên của bạn
            - generic [ref=e119]:
              - generic [ref=e120]: Điện Thoại
              - textbox "Điện Thoại" [ref=e121]:
                - /placeholder: Nhập số điện thoại
            - generic [ref=e123]:
              - generic [ref=e124]: Email
              - textbox "Email" [ref=e125]:
                - /placeholder: Nhập email của bạn
            - generic [ref=e127]:
              - generic [ref=e128]: Khu Vực
              - textbox "Khu Vực" [ref=e129]:
                - /placeholder: Nhập khu vực của bạn
            - generic [ref=e131]:
              - generic [ref=e132]: Nội Dung
              - textbox "Nội Dung" [ref=e133]:
                - /placeholder: Nhập nội dung...
            - button "Gửi Thông Tin Đăng Ký Ngay" [ref=e135] [cursor=pointer]:
              - img [ref=e136]
              - generic [ref=e139]: Gửi Thông Tin Đăng Ký Ngay
        - img "OK VET" [ref=e141]
      - generic [ref=e143]:
        - heading "Kiến thức chăn nuôi" [level=2] [ref=e145]
        - generic [ref=e146]:
          - generic:
            - generic:
              - paragraph:
                - link "Thuốc cho thú cưng Lưu ý khi chăm sóc chó mèo suy nhược":
                  - /url: thuoc-cho-thu-cung-luu-y-khi-cham-soc-cho-meo-suy-nhuoc
              - generic:
                - heading "Thuốc cho thú cưng Lưu ý khi chăm sóc chó mèo suy nhược" [level=3]:
                  - link "Thuốc cho thú cưng Lưu ý khi chăm sóc chó mèo suy nhược":
                    - /url: thuoc-cho-thu-cung-luu-y-khi-cham-soc-cho-meo-suy-nhuoc
                - paragraph: Để giúp các bé vượt qua giai đoạn khó khăn này, việc lựa chọn đúng loại Thuốc cho thú cưng kết hợp cùng chế độ chăm sóc khoa học, đong đầy tình yêu thương là chìa khóa giúp phục hồi sinh lực nhanh chóng.
                - link "Xem thêm bài viết":
                  - /url: thuoc-cho-thu-cung-luu-y-khi-cham-soc-cho-meo-suy-nhuoc
                  - text: Xem thêm bài viết
                  - img
          - generic:
            - generic:
              - paragraph:
                - link "Thuốc cho thú cưng Cách bảo quản thuốc đúng tại nhà":
                  - /url: thuoc-cho-thu-cung-cach-bao-quan-thuoc-dung-tai-nha
              - generic:
                - heading "Thuốc cho thú cưng Cách bảo quản thuốc đúng tại nhà" [level=3]:
                  - link "Thuốc cho thú cưng Cách bảo quản thuốc đúng tại nhà":
                    - /url: thuoc-cho-thu-cung-cach-bao-quan-thuoc-dung-tai-nha
                - paragraph: "Khi những người bạn nhỏ này không may đổ bệnh, việc tìm kiếm và sử dụng Thuốc cho thú cưng chất lượng trở thành ưu tiên hàng đầu của mỗi người chủ. Thế nhưng, có một mắt xích cực kỳ quan trọng thường bị bỏ qua: cách chúng ta bảo quản những liều thuốc ấy tại nhà."
                - link "Xem thêm bài viết":
                  - /url: thuoc-cho-thu-cung-cach-bao-quan-thuoc-dung-tai-nha
                  - text: Xem thêm bài viết
                  - img
          - generic:
            - generic:
              - paragraph:
                - link "Thuốc cho thú cưng Dấu hiệu thú cưng cần được chăm sóc":
                  - /url: thuoc-cho-thu-cung-dau-hieu-thu-cung-can-duoc-cham-soc
              - generic:
                - heading "Thuốc cho thú cưng Dấu hiệu thú cưng cần được chăm sóc" [level=3]:
                  - link "Thuốc cho thú cưng Dấu hiệu thú cưng cần được chăm sóc":
                    - /url: thuoc-cho-thu-cung-dau-hieu-thu-cung-can-duoc-cham-soc
                - paragraph: Việc nhận biết sớm các dấu hiệu bất thường và chuẩn bị sẵn sàng nguồn thuốc cho thú cưng chất lượng là chìa khóa vàng giúp bảo vệ sức khỏe và kéo dài những khoảnh khắc hạnh phúc bên người bạn nhỏ này.
                - link "Xem thêm bài viết":
                  - /url: thuoc-cho-thu-cung-dau-hieu-thu-cung-can-duoc-cham-soc
                  - text: Xem thêm bài viết
                  - img
        - link "Xem tất cả bài viết" [ref=e148] [cursor=pointer]:
          - /url: kien-thuc
          - text: Xem tất cả bài viết
          - img [ref=e149]
      - generic [ref=e153]:
        - heading "ĐỐI TÁC" [level=2] [ref=e155]
        - generic [ref=e156]:
          - link:
            - /url: ""
            - paragraph
          - link:
            - /url: ""
            - paragraph
          - link:
            - /url: ""
            - paragraph
          - link:
            - /url: ""
            - paragraph
          - link:
            - /url: ""
            - paragraph
          - link:
            - /url: ""
            - paragraph
    - generic [ref=e157]:
      - generic [ref=e160]:
        - generic [ref=e162]:
          - link "OK VET" [ref=e163] [cursor=pointer]:
            - /url: https://okvet.com.vn/
            - img "OK VET" [ref=e164]
          - heading "Thông tin liên hệ" [level=2] [ref=e165]
          - list [ref=e166]:
            - listitem [ref=e167]:
              - img [ref=e169]
              - generic [ref=e171]: Số 549, Đường Tỉnh 825, Ấp Sò Đo, Xã Hậu Nghĩa, Tây Ninh
            - listitem [ref=e172]:
              - img [ref=e174]
              - generic [ref=e176]: "Hotline: 0396433411"
            - listitem [ref=e177]:
              - img [ref=e179]
              - generic [ref=e181]: "Email: okvet2024@gmail.com"
            - listitem [ref=e182]:
              - img [ref=e184]
              - generic [ref=e186]: "Website: https://okvet.com.vn"
        - generic [ref=e188]:
          - heading "Sản phẩm" [level=2] [ref=e189]
          - list [ref=e190]:
            - listitem [ref=e191]:
              - link "THUỐC THÚ Y OK VET" [ref=e192] [cursor=pointer]:
                - /url: thuoc-thu-y-ok-vet
            - listitem [ref=e193]:
              - link "THUỐC THÚ Y KHÁC" [ref=e194] [cursor=pointer]:
                - /url: thuoc-thu-y-khac
        - generic [ref=e196]:
          - heading "Chính sách hỗ trợ" [level=2] [ref=e197]
          - list [ref=e198]:
            - listitem [ref=e199]:
              - link "Chính sách bảo mật thông tin" [ref=e200] [cursor=pointer]:
                - /url: chinh-sach-bao-mat-thong-tin
            - listitem [ref=e201]:
              - link "Chính sách đổi trả & hoàn tiền" [ref=e202] [cursor=pointer]:
                - /url: chinh-sach-doi-tra-hoan-tien
            - listitem [ref=e203]:
              - link "Chính sách giao hàng" [ref=e204] [cursor=pointer]:
                - /url: chinh-sach-giao-hang
            - listitem [ref=e205]:
              - link "Chính sách mua hàng" [ref=e206] [cursor=pointer]:
                - /url: chinh-sach-mua-hang
        - generic [ref=e208]:
          - heading "Giới thiệu" [level=2] [ref=e209]
          - generic [ref=e210]:
            - paragraph [ref=e211]:
              - generic [ref=e212]:
                - strong [ref=e213]: Mã số thuế
                - text: ": 1102051703"
            - paragraph [ref=e214]:
              - generic [ref=e215]:
                - strong [ref=e216]: Hotline
                - text: ": 0396433411"
            - paragraph [ref=e217]:
              - generic [ref=e218]:
                - strong [ref=e219]: Địa chỉ
                - text: ": Số 549, Đường Tỉnh 825, Ấp Sò Đo, Xã Hậu Nghĩa, Tây Ninh"
          - heading "Mạng xã hội" [level=2] [ref=e220]
          - generic [ref=e221]:
            - link "Facebook" [ref=e222] [cursor=pointer]:
              - /url: ""
              - img "Facebook" [ref=e223]
            - link "Message" [ref=e224] [cursor=pointer]:
              - /url: ""
              - img "Message" [ref=e225]
            - link "Instargam" [ref=e226] [cursor=pointer]:
              - /url: ""
              - img "Instargam" [ref=e227]
            - link "zalo" [ref=e228] [cursor=pointer]:
              - /url: ""
              - img "zalo" [ref=e229]
      - generic [ref=e232]: © Copyright 2026 OK VET Thiết kế Web MIMA
    - generic [ref=e233]:
      - 'link "Call me: 0396433411" [ref=e234] [cursor=pointer]':
        - /url: tel:0396433411
        - img [ref=e238]
        - generic [ref=e241]: "Call me: 0396433411"
      - 'link "Zalo: 0396433411" [ref=e242] [cursor=pointer]':
        - /url: https://zalo.me/0396433411
        - img [ref=e246]
        - generic [ref=e248]: "Zalo: 0396433411"
  - generic:
    - generic:
      - generic: 🎯 BÁO CÁO SEO AUDIT CHUYÊN SÂU
      - generic: SEO Báo cáo (Tự động)
    - generic:
      - generic: ══ KẾT QUẢ CHẤM ĐIỂM SEO ══
      - generic:
        - generic:
          - generic:
            - generic:
              - generic: "89"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 89/100
          - generic:
            - generic: "Đánh giá:"
            - strong: 🟢 TỐT
          - generic:
            - generic: "Ngưỡng đạt:"
            - generic: 70%
          - generic:
            - generic: "Kết quả:"
            - generic: ✅ PASS
      - generic:
        - generic:
          - generic: "18"
          - generic: Tổng tiêu chí
        - generic:
          - generic: ✅ 16
          - generic: Đạt
        - generic:
          - generic: ❌ 2
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: OK Vet
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e249]:
      - generic [ref=e250]: "❌ Chi tiết lỗi cần khắc phục (2/18):"
      - generic [ref=e251]:
        - generic [ref=e252]:
          - generic [ref=e253]: 3. Heading (H1-H6)
          - generic [ref=e254]: 1 lỗi
        - generic [ref=e255]:
          - strong [ref=e257]: Heading phân cấp hợp lệ (1 lỗi)
          - generic [ref=e258]: "⚠️ Heading phân cấp sai: Nhảy cấp từ H1 → H3 (\"Giao hàng tận nơi\")"
      - generic [ref=e259]:
        - generic [ref=e260]:
          - generic [ref=e261]: 6. Liên kết (Links)
          - generic [ref=e262]: 1 lỗi
        - generic [ref=e263]:
          - strong [ref=e265]: "Không có broken links (lỗi: 1/30)"
          - generic [ref=e266]: "⚠️ Broken links: kien-thuc (status: 404)"
```

# Test source

```ts
  103 |         return Math.round((this.passedChecks / this.totalChecks) * 100);
  104 |     }
  105 | 
  106 |     /** Lấy thống kê chi tiết */
  107 |     get stats() {
  108 |         return {
  109 |             total: this.totalChecks,
  110 |             passed: this.passedChecks,
  111 |             failed: this.totalChecks - this.passedChecks,
  112 |             score: this.score,
  113 |             failures: [...this.failures],
  114 |         };
  115 |     }
  116 | 
  117 |     async finalizeScore(page: Page, threshold = 70): Promise<void> {
  118 |         const { total, passed, failed, score, failures } = this.stats;
  119 | 
  120 |         // Xác định trạng thái
  121 |         const isPass = score >= threshold;
  122 |         const statusText = isPass ? "PASS" : "FAIL";
  123 | 
  124 |         // Thang điểm SEO mới
  125 |         let scoreLabel: string;
  126 |         let statusIcon: string;
  127 |         if (score >= 93) {
  128 |             scoreLabel = "XUẤT SẮC";
  129 |             statusIcon = "💎";
  130 |         } else if (score >= 77) {
  131 |             scoreLabel = "TỐT";
  132 |             statusIcon = "🟢";
  133 |         } else if (score >= 65) {
  134 |             scoreLabel = "KHÁ";
  135 |             statusIcon = "🟡";
  136 |         } else if (score >= 50) {
  137 |             scoreLabel = "TRUNG BÌNH";
  138 |             statusIcon = "🟠";
  139 |         } else {
  140 |             scoreLabel = "KÉM";
  141 |             statusIcon = "🔴";
  142 |         }
  143 | 
  144 |         // Tạo báo cáo tổng kết dạng text
  145 |         const summaryLines = [
  146 |             `══════════════════════════════════════`,
  147 |             `   ${statusIcon} KẾT QUẢ CHẤM ĐIỂM SEO`,
  148 |             `══════════════════════════════════════`,
  149 |             `   Điểm số:     ${score}/100`,
  150 |             `   Đánh giá:    ${scoreLabel}`,
  151 |             `   Ngưỡng đạt:  ${threshold}%`,
  152 |             `   Kết quả:     ${statusText}`,
  153 |             `──────────────────────────────────────`,
  154 |             `   Tổng tiêu chí:  ${total}`,
  155 |             `   ✅ Đạt:          ${passed}`,
  156 |             `   ❌ Không đạt:    ${failed}`,
  157 |             `══════════════════════════════════════`,
  158 |         ];
  159 | 
  160 |         if (failures.length > 0) {
  161 |             summaryLines.push(``, `📋 CHI TIẾT LỖI CẦN KHẮC PHỤC (${failed}/${total}):`);
  162 | 
  163 |             // Group errors by their assigned group
  164 |             const groupedFailures = failures.reduce((acc, f) => {
  165 |                 if (!acc[f.group]) acc[f.group] = [];
  166 |                 acc[f.group].push(f);
  167 |                 return acc;
  168 |             }, {} as Record<string, ScorecardFailure[]>);
  169 | 
  170 |             let globalIndex = 1;
  171 |             for (const [group, items] of Object.entries(groupedFailures)) {
  172 |                 summaryLines.push(`--- ${group.toUpperCase()} ---`);
  173 |                 items.forEach((f) => {
  174 |                     summaryLines.push(`   ${globalIndex}. [${f.step}]`);
  175 |                     summaryLines.push(`      → ${f.message}`);
  176 |                     globalIndex++;
  177 |                 });
  178 |             }
  179 |         }
  180 | 
  181 |         const summaryText = summaryLines.join("\n");
  182 | 
  183 |         // Step cuối cùng — hiển thị bảng điểm + quyết định PASS/FAIL
  184 |         await customStep(
  185 |             page,
  186 |             `🏆 Kết quả chấm điểm SEO: ${score}/100 — ${statusText} (${scoreLabel})`,
  187 |             async () => {
  188 |                 // Đính kèm bảng điểm text
  189 |                 await allure.attachment(
  190 |                     "Bảng điểm SEO",
  191 |                     Buffer.from(summaryText, "utf-8"),
  192 |                     "text/plain"
  193 |                 );
  194 | 
  195 |                 // Gắn description vào Test Case trên Allure
  196 |                 await allure.description(
  197 |                     `[${statusText}] Điểm SEO: ${score}/100 | Đạt: ${passed}/${total} tiêu chí | Ngưỡng: ${threshold}%\n\n` +
  198 |                     `${scoreLabel}`
  199 |                 );
  200 | 
  201 |                 // 🚀 ĐÂY LÀ DÒNG DUY NHẤT quyết định Test PASS hay FAIL
  202 |                 if (!isPass) {
> 203 |                     throw new Error(
      |                           ^ Error: ❌ FAIL — Điểm SEO 89/100 dưới ngưỡng 96%. Có 2/18 tiêu chí không đạt.
  204 |                         `❌ FAIL — Điểm SEO ${score}/100 dưới ngưỡng ${threshold}%. ` +
  205 |                         `Có ${failed}/${total} tiêu chí không đạt.`
  206 |                     );
  207 |                 }
  208 |             },
  209 |             { screenshot: true }
  210 |         );
  211 |     }
  212 | }
```