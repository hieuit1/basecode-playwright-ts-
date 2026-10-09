# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Tin tức (/tin-tuc)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 90/100 dưới ngưỡng 96%. Có 2/20 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - 'link " Hotline: 0905255605" [ref=e8] [cursor=pointer]':
            - /url: tel:0905255605
            - generic [ref=e9]: 
            - generic [ref=e10]: "Hotline: 0905255605"
          - 'link " Email: ngobac05@gmail.com" [ref=e11] [cursor=pointer]':
            - /url: mailto:ngobac05@gmail.com
            - generic [ref=e12]: 
            - generic [ref=e13]: "Email: ngobac05@gmail.com"
        - list [ref=e14]:
          - listitem [ref=e15]:
            - link "Trang chủ" [ref=e16] [cursor=pointer]:
              - /url: https://code5.mimadigi.vn/2026/september/daiphongglass_117826CW/
              - img "Trang chủ" [ref=e17]
          - listitem [ref=e18]:
            - link "Giới thiệu" [ref=e19] [cursor=pointer]:
              - /url: gioi-thieu
          - listitem [ref=e20]:
            - link "Dịch vụ" [ref=e21] [cursor=pointer]:
              - /url: dich-vu
          - listitem [ref=e22]:
            - link "Dự án" [ref=e23] [cursor=pointer]:
              - /url: du-an
      - link "Công Ty Tnhh Đại Phong Glass" [ref=e25] [cursor=pointer]:
        - /url: https://code5.mimadigi.vn/2026/september/daiphongglass_117826CW/
        - img "Công Ty Tnhh Đại Phong Glass" [ref=e26]
      - generic [ref=e27]:
        - generic [ref=e29]:
          - generic [ref=e30]: Liên kết nhanh
          - link "Công Ty Tnhh Đại Phong Glass" [ref=e31] [cursor=pointer]:
            - /url: https://zalo.me/0905255605
            - img "Công Ty Tnhh Đại Phong Glass" [ref=e32]
          - link "Công Ty Tnhh Đại Phong Glass" [ref=e33] [cursor=pointer]:
            - /url: ""
            - img "Công Ty Tnhh Đại Phong Glass" [ref=e34]
          - link "Công Ty Tnhh Đại Phong Glass" [ref=e35] [cursor=pointer]:
            - /url: ""
            - img "Công Ty Tnhh Đại Phong Glass" [ref=e36]
          - link "Facebook" [ref=e37] [cursor=pointer]:
            - /url: https://www.facebook.com/people/%C4%90%E1%BA%A1i-Phong-Glass/100083582822010/?mibextid=wwXIfr&rdid=le37wptt5Rhs9aou&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Gs32u7qyH%2F%3Fmibextid%3DwwXIfr
            - img "Facebook" [ref=e38]
        - list [ref=e39]:
          - listitem [ref=e40]:
            - link "Sản phẩm" [ref=e41] [cursor=pointer]:
              - /url: san-pham
          - listitem [ref=e42]:
            - link "Tin tức" [ref=e43] [cursor=pointer]:
              - /url: tin-tuc
          - listitem [ref=e44]:
            - link "Liên hệ" [ref=e45] [cursor=pointer]:
              - /url: lien-he
          - listitem [ref=e46]:
            - generic [ref=e47]:
              - paragraph [ref=e48] [cursor=pointer]:
                - generic [ref=e49]: 
              - generic [ref=e50]:
                - paragraph [ref=e51] [cursor=pointer]:
                  - generic [ref=e52]: 
                - textbox "Tìm kiếm"
      - text:   
    - list [ref=e55]:
      - listitem [ref=e56]:
        - link "Trang chủ" [ref=e57] [cursor=pointer]:
          - /url: https://code5.mimadigi.vn/2026/september/daiphongglass_117826CW/
          - img [ref=e58]
          - generic [ref=e60]: Trang chủ
      - listitem [ref=e61]:
        - text: /
        - link "Tin tức" [ref=e62] [cursor=pointer]:
          - /url: https://code5.mimadigi.vn/2026/september/daiphongglass_117826CW/tin-tuc
    - generic [ref=e66]:
      - generic [ref=e68]: Tin tức
      - generic [ref=e70]:
        - link "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1791538135166 [AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1791538135166 Mô tả cho Tin tức bulk test" [ref=e72] [cursor=pointer]:
          - /url: tin-tuc-loadtest-1791538135166
          - generic [ref=e73]:
            - img "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1791538135166" [ref=e75]
            - generic [ref=e76]:
              - heading "[AUTO-TEST] Tin tức thực hiện quá trình LoadTest 1791538135166" [level=3] [ref=e77]
              - paragraph [ref=e78]: Mô tả cho Tin tức bulk test
        - link "Test News Title 1791538013294 Test News Title 1791538013294 Đây là đoạn mô tả ngắn được tự động tạo lúc 1791538013294 nhằm kiểm thử độ hiển thị của giao diện thẻ bài viết trên hệ thống. Đoạn văn này đủ dài để kiểm tra xem layout card tin tức có bị lệch dòng hay cắt chữ (truncate) không đúng định dạng hay không." [ref=e80] [cursor=pointer]:
          - /url: test-news-title-1791538013294
          - generic [ref=e81]:
            - img "Test News Title 1791538013294" [ref=e83]
            - generic [ref=e84]:
              - heading "Test News Title 1791538013294" [level=3] [ref=e85]
              - paragraph [ref=e86]: Đây là đoạn mô tả ngắn được tự động tạo lúc 1791538013294 nhằm kiểm thử độ hiển thị của giao diện thẻ bài viết trên hệ thống. Đoạn văn này đủ dài để kiểm tra xem layout card tin tức có bị lệch dòng hay cắt chữ (truncate) không đúng định dạng hay không.
        - link "Kinh Nghiệm Chọn Đơn Vị Thi Công Nhôm Kính Uy Tín Kinh Nghiệm Chọn Đơn Vị Thi Công Nhôm Kính Uy Tín" [ref=e88] [cursor=pointer]:
          - /url: kinh-nghiem-chon-don-vi-thi-cong-nhom-kinh-uy-tin
          - generic [ref=e89]:
            - img "Kinh Nghiệm Chọn Đơn Vị Thi Công Nhôm Kính Uy Tín" [ref=e91]
            - generic [ref=e92]:
              - heading "Kinh Nghiệm Chọn Đơn Vị Thi Công Nhôm Kính Uy Tín" [level=3] [ref=e93]
              - paragraph
        - link "Những Xu Hướng Thiết Kế Mặt Tiền Kính Trong Kiến Trúc Những Xu Hướng Thiết Kế Mặt Tiền Kính Trong Kiến Trúc" [ref=e95] [cursor=pointer]:
          - /url: nhung-xu-huong-thiet-ke-mat-tien-kinh-trong-kien-truc
          - generic [ref=e96]:
            - img "Những Xu Hướng Thiết Kế Mặt Tiền Kính Trong Kiến Trúc" [ref=e98]
            - generic [ref=e99]:
              - heading "Những Xu Hướng Thiết Kế Mặt Tiền Kính Trong Kiến Trúc" [level=3] [ref=e100]
              - paragraph
        - link "Ứng Dụng Vật Liệu Nhôm Kính Trong Kiến Trúc Xanh Ứng Dụng Vật Liệu Nhôm Kính Trong Kiến Trúc Xanh" [ref=e102] [cursor=pointer]:
          - /url: ung-dung-vat-lieu-nhom-kinh-trong-kien-truc-xanh
          - generic [ref=e103]:
            - img "Ứng Dụng Vật Liệu Nhôm Kính Trong Kiến Trúc Xanh" [ref=e105]
            - generic [ref=e106]:
              - heading "Ứng Dụng Vật Liệu Nhôm Kính Trong Kiến Trúc Xanh" [level=3] [ref=e107]
              - paragraph
        - link "Các Yếu Tố Cần Xem Xét Khi Lập Ngân Sách Nhôm Kính Các Yếu Tố Cần Xem Xét Khi Lập Ngân Sách Nhôm Kính" [ref=e109] [cursor=pointer]:
          - /url: cac-yeu-to-can-xem-xet-khi-lap-ngan-sach-nhom-kinh
          - generic [ref=e110]:
            - img "Các Yếu Tố Cần Xem Xét Khi Lập Ngân Sách Nhôm Kính" [ref=e112]
            - generic [ref=e113]:
              - heading "Các Yếu Tố Cần Xem Xét Khi Lập Ngân Sách Nhôm Kính" [level=3] [ref=e114]
              - paragraph
        - link "Cách Vệ Sinh Kính Đúng Cách Để Hạn Chế Trầy Xước Cách Vệ Sinh Kính Đúng Cách Để Hạn Chế Trầy Xước" [ref=e116] [cursor=pointer]:
          - /url: cach-ve-sinh-kinh-dung-cach-de-han-che-tray-xuoc
          - generic [ref=e117]:
            - img "Cách Vệ Sinh Kính Đúng Cách Để Hạn Chế Trầy Xước" [ref=e119]
            - generic [ref=e120]:
              - heading "Cách Vệ Sinh Kính Đúng Cách Để Hạn Chế Trầy Xước" [level=3] [ref=e121]
              - paragraph
        - link "Những Lưu Ý Khi Thiết Kế Hệ Cửa Kính Cho Nhà Phố Những Lưu Ý Khi Thiết Kế Hệ Cửa Kính Cho Nhà Phố" [ref=e123] [cursor=pointer]:
          - /url: nhung-luu-y-khi-thiet-ke-he-cua-kinh-cho-nha-pho
          - generic [ref=e124]:
            - img "Những Lưu Ý Khi Thiết Kế Hệ Cửa Kính Cho Nhà Phố" [ref=e126]
            - generic [ref=e127]:
              - heading "Những Lưu Ý Khi Thiết Kế Hệ Cửa Kính Cho Nhà Phố" [level=3] [ref=e128]
              - paragraph
      - link "Xem thêm 27 bài viết" [ref=e131] [cursor=pointer]:
        - /url: javascript:void(0)
        - generic [ref=e132]:
          - text: Xem thêm
          - generic [ref=e133]: "27"
          - text: bài viết
          - img [ref=e134]
    - 'link " Hotline: 0905255605" [ref=e149] [cursor=pointer]':
      - /url: tel:0905255605
      - generic [ref=e150]: 
      - generic: "Hotline: 0905255605"
    - generic [ref=e151]:
      - 'link "Zalo: 0905255605" [ref=e152] [cursor=pointer]':
        - /url: https://zalo.me/0905255605
        - img [ref=e156]
        - generic [ref=e157]: "Zalo: 0905255605"
      - link "Facebook" [ref=e158] [cursor=pointer]:
        - /url: https://www.facebook.com/people/%C4%90%E1%BA%A1i-Phong-Glass/100083582822010/?mibextid=wwXIfr&rdid=le37wptt5Rhs9aou&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Gs32u7qyH%2F%3Fmibextid%3DwwXIfr
        - img [ref=e162]
  - contentinfo [ref=e163]:
    - generic [ref=e166]:
      - generic [ref=e167]:
        - generic [ref=e168]: CÔNG TY TNHH ĐẠI PHONG GLASS
        - generic [ref=e170]:
          - paragraph [ref=e171]: "Địa chỉ : 129/100, LIÊN KHU 5-6, BÌNH TÂN, TP.HCM"
          - paragraph [ref=e172]: "Điện thoại : 0905255605"
          - paragraph [ref=e173]: "Email : ngobac05@gmail.com"
          - paragraph [ref=e174]:
            - generic [ref=e175]:
              - text: "Website :"
              - link "nhomkinhdaiphong.com" [ref=e176] [cursor=pointer]:
                - /url: https://code5.mimadigi.vn/2026/september/daiphongglass_117826CW/
        - generic [ref=e177]: Liên kết nhanh
        - generic [ref=e178]:
          - link "Công Ty Tnhh Đại Phong Glass" [ref=e179] [cursor=pointer]:
            - /url: https://zalo.me/0905255605
            - img "Công Ty Tnhh Đại Phong Glass" [ref=e180]
          - link "Công Ty Tnhh Đại Phong Glass" [ref=e181] [cursor=pointer]:
            - /url: ""
            - img "Công Ty Tnhh Đại Phong Glass" [ref=e182]
          - link "Công Ty Tnhh Đại Phong Glass" [ref=e183] [cursor=pointer]:
            - /url: ""
            - img "Công Ty Tnhh Đại Phong Glass" [ref=e184]
          - link "Facebook" [ref=e185] [cursor=pointer]:
            - /url: https://www.facebook.com/people/%C4%90%E1%BA%A1i-Phong-Glass/100083582822010/?mibextid=wwXIfr&rdid=le37wptt5Rhs9aou&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Gs32u7qyH%2F%3Fmibextid%3DwwXIfr
            - img "Facebook" [ref=e186]
      - generic [ref=e187]:
        - generic [ref=e188]: Chính sách hỗ trợ
        - list [ref=e189]:
          - listitem [ref=e190]:
            - link "CHÍNH SÁCH HỖ TRỢ" [ref=e191] [cursor=pointer]:
              - /url: chinh-sach-ho-tro
          - listitem [ref=e192]:
            - link "CHÍNH SÁCH VẬN CHUYỂN" [ref=e193] [cursor=pointer]:
              - /url: chinh-sach-van-chuyen
          - listitem [ref=e194]:
            - link "CHÍNH SÁCH TƯ VẤN" [ref=e195] [cursor=pointer]:
              - /url: chinh-sach-tu-van
          - listitem [ref=e196]:
            - link "CHÍNH SÁCH BẢO MẬT" [ref=e197] [cursor=pointer]:
              - /url: chinh-sach-van-chuyen-va-giao-hang
          - listitem [ref=e198]:
            - link "CHÍNH SÁCH BẢO HÀNH" [ref=e199] [cursor=pointer]:
              - /url: chinh-sach-bao-hanh
      - generic [ref=e200]:
        - generic [ref=e201]: Truy cập nhanh
        - list [ref=e202]:
          - listitem [ref=e203]:
            - link "Trang chủ" [ref=e204] [cursor=pointer]:
              - /url: https://code5.mimadigi.vn/2026/september/daiphongglass_117826CW/
          - listitem [ref=e205]:
            - link "Giới thiệu" [ref=e206] [cursor=pointer]:
              - /url: gioi-thieu
          - listitem [ref=e207]:
            - link "Dịch vụ" [ref=e208] [cursor=pointer]:
              - /url: dich-vu
          - listitem [ref=e209]:
            - link "Dự án" [ref=e210] [cursor=pointer]:
              - /url: du-an
          - listitem [ref=e211]:
            - link "Sản phẩm" [ref=e212] [cursor=pointer]:
              - /url: san-pham
          - listitem [ref=e213]:
            - link "Tin tức" [ref=e214] [cursor=pointer]:
              - /url: tin-tuc
          - listitem [ref=e215]:
            - link "Liên hệ" [ref=e216] [cursor=pointer]:
              - /url: lien-he
    - generic [ref=e219]:
      - paragraph [ref=e220]: © Copyright CÔNG TY TNHH ĐẠI PHONG GLASS. Thiết kế web MIMA
      - generic [ref=e221]:
        - generic [ref=e222]: "Đang online: 434"
        - generic [ref=e223]: "| Hôm nay: 13"
        - generic [ref=e224]: "| Tổng truy cập: 89"
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
              - generic: "90"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 90/100
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
          - generic: "20"
          - generic: Tổng tiêu chí
        - generic:
          - generic: ✅ 18
          - generic: Đạt
        - generic:
          - generic: ❌ 2
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: Tin tức
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e225]:
      - generic [ref=e226]: "❌ Chi tiết lỗi cần khắc phục (2/20):"
      - generic [ref=e227]:
        - generic [ref=e228]:
          - generic [ref=e229]: 8. Tốc độ & Core Web Vitals
          - generic [ref=e230]: 2 lỗi
        - generic [ref=e231]:
          - strong [ref=e233]: "[📱 MOBILE (ƯU TIÊN)] Tổng điểm Performance: 57/100 (≥ 60)"
          - generic [ref=e234]: ⚠️ [📱 MOBILE (ƯU TIÊN)] Điểm Performance 57/100 dưới ngưỡng 60. Phân tích chi tiết LCP/CLS/INP bên dưới...
        - generic [ref=e235]:
          - strong [ref=e237]: "[📱 MOBILE (ƯU TIÊN)] LCP (Largest Contentful Paint): 15401ms (< 2500ms)"
          - generic [ref=e238]: "⚠️ [📱 MOBILE (ƯU TIÊN)] LCP quá cao: 15401ms (chuẩn: < 2.5s) → Thủ phạm LCP:"
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 90/100 dưới ngưỡng 96%. Có 2/20 tiêu chí không đạt.
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