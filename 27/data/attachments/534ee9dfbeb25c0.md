# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Về chúng tôi (/ve-chung-toi)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 93/100 dưới ngưỡng 96%. Có 1/15 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e7]:
      - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e9] [cursor=pointer]:
        - /url: https://cuanhomtruotquay.vn/
        - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e10]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link "Trang chủ" [ref=e14] [cursor=pointer]:
            - /url: ""
        - listitem [ref=e15]:
          - link "Giới thiệu" [ref=e16] [cursor=pointer]:
            - /url: gioi-thieu
        - listitem [ref=e17]:
          - link "Dịch vụ" [ref=e18] [cursor=pointer]:
            - /url: dich-vu
            - text: Dịch vụ
            - img [ref=e19]
        - listitem [ref=e21]:
          - link "Sản phẩm" [ref=e22] [cursor=pointer]:
            - /url: san-pham
            - text: Sản phẩm
            - img [ref=e23]
        - listitem [ref=e25]:
          - link "Dự án" [ref=e26] [cursor=pointer]:
            - /url: du-an
        - listitem [ref=e27]:
          - link "Tin tức" [ref=e28] [cursor=pointer]:
            - /url: tin-tuc
        - listitem [ref=e29]:
          - link "Liên hệ" [ref=e30] [cursor=pointer]:
            - /url: lien-he
        - listitem [ref=e31]:
          - generic [ref=e32]:
            - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e33]
            - link "0387 191 399" [ref=e34] [cursor=pointer]:
              - /url: tel:0387 191 399
    - list [ref=e37]:
      - listitem [ref=e38]:
        - link "Trang chủ" [ref=e39] [cursor=pointer]:
          - /url: https://cuanhomtruotquay.vn/
          - img [ref=e40]
          - generic [ref=e42]: Trang chủ
      - listitem [ref=e43]:
        - text: /
        - link "Sản phẩm" [ref=e44] [cursor=pointer]:
          - /url: https://cuanhomtruotquay.vn/san-pham
      - listitem [ref=e45]:
        - text: /
        - link "Về chúng tôi" [ref=e46] [cursor=pointer]:
          - /url: https://cuanhomtruotquay.vn/ve-chung-toi
    - generic [ref=e47]:
      - generic [ref=e50]:
        - generic [ref=e52]:
          - listbox [ref=e56]:
            - option "Về chúng tôi" [ref=e57]:
              - link "Về chúng tôi" [ref=e58] [cursor=pointer]:
                - /url: javascript:;
                - img "Về chúng tôi" [ref=e59]
          - listbox [ref=e62]:
            - option "Về chúng tôi" [ref=e63]:
              - link "Về chúng tôi" [ref=e64] [cursor=pointer]:
                - /url: upload/product/
                - img "Về chúng tôi" [ref=e65]
        - generic [ref=e66]:
          - list [ref=e67]:
            - generic [ref=e68]: Về chúng tôi
            - listitem [ref=e69]:
              - generic [ref=e70]:
                - generic [ref=e71]: Mô tả sản phẩm
                - paragraph [ref=e72]: â
            - listitem [ref=e73]:
              - generic [ref=e74]:
                - text: "Liên hệ ngay:"
                - link "0387 191 399" [ref=e75] [cursor=pointer]:
                  - /url: tel:0387 191 399
                  - generic [ref=e76]: 0387 191 399
          - generic [ref=e77]:
            - paragraph [ref=e78]: Hãy để lại thông tin để được tư vấn miễn phí
            - generic [ref=e79]:
              - generic [ref=e80]:
                - textbox "Họ và tên" [ref=e83]
                - textbox "Số điện thoại" [ref=e86]
              - generic [ref=e87]:
                - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e88]
                - button "Gửi thông tin liên hệ" [ref=e89] [cursor=pointer]
      - generic [ref=e91]:
        - generic [ref=e92]: Thông tin bài viết
        - generic [ref=e97]:
          - generic [ref=e98]:
            - heading "tin tức mới nhất" [level=2] [ref=e100]
            - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e101] [cursor=pointer]:
              - /url: Bếp điện Hân Di kết hợp công nghệ và thiết kế
              - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e102]
            - generic [ref=e103]:
              - link "Bếp điện Hân Di kết hợp công nghệ và thiết kế" [ref=e104] [cursor=pointer]:
                - /url: bep-dien-han-di-ket-hop-cong-nghe-va-thiet-ke
                - heading "Bếp điện Hân Di kết hợp công nghệ và thiết kế" [level=3] [ref=e105]
              - generic [ref=e106]: Bếp điện Hân Di kết hợp công nghệ và thiết kế tinh tế giúp tiết kiệm thời gian, năng lượng và tạo không gian bếp sang trọng. Khám phá ngay tính năng vượt trội và sự tiện nghi
              - link "Xem thêm NHÔM KÍNH ĐĂNG KHOA" [ref=e107] [cursor=pointer]:
                - /url: bep-dien-han-di-ket-hop-cong-nghe-va-thiet-ke
                - generic [ref=e108]:
                  - text: Xem thêm
                  - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e109]
          - generic [ref=e110]:
            - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e111] [cursor=pointer]:
              - /url: Phụ kiện cửa an toàn và tiện nghi
              - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e112]
            - generic [ref=e113]:
              - link "Phụ kiện cửa an toàn và tiện nghi" [ref=e114] [cursor=pointer]:
                - /url: phu-kien-cua-an-toan-va-tien-nghi
                - heading "Phụ kiện cửa an toàn và tiện nghi" [level=3] [ref=e115]
              - generic [ref=e116]: Phụ kiện cửa an toàn và tiện nghi của Hân Di mang đến giải pháp bảo vệ và tiện lợi cho ngôi nhà. Chọn ngay các sản phẩm chất lượng, bền bỉ và thiết kế đẹp mắt
              - link "Xem thêm NHÔM KÍNH ĐĂNG KHOA" [ref=e117] [cursor=pointer]:
                - /url: phu-kien-cua-an-toan-va-tien-nghi
                - generic [ref=e118]:
                  - text: Xem thêm
                  - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e119]
    - generic [ref=e120]:
      - generic [ref=e125]:
        - generic [ref=e126]:
          - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e127] [cursor=pointer]:
            - /url: https://cuanhomtruotquay.vn/
            - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e128]
          - generic [ref=e129]: XingFa Đăng Khoa mang đến những giải pháp nhôm kính chất lượng, kiến tạo không gian hiện đại, bền vững và nâng tầm giá trị cho mọi công trình.
          - paragraph [ref=e130]: THEO DÕI CHÚNG TÔI TẠI
          - generic [ref=e131]:
            - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e132] [cursor=pointer]:
              - /url: https://cuanhomtruotquay.vn/dich-vu
              - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e133]
            - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e134] [cursor=pointer]:
              - /url: ""
              - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e135]
            - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e136] [cursor=pointer]:
              - /url: ""
              - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e137]
            - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e138] [cursor=pointer]:
              - /url: ""
              - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e139]
            - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e140] [cursor=pointer]:
              - /url: ""
              - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e141]
        - generic [ref=e142]:
          - paragraph [ref=e143]: Sản phẩm
          - list [ref=e144]:
            - listitem [ref=e145]:
              - link "Cửa trượt quay" [ref=e146] [cursor=pointer]:
                - /url: cua-truot-quay
            - listitem [ref=e147]:
              - link "Cửa full phào" [ref=e148] [cursor=pointer]:
                - /url: cua-full-phao
            - listitem [ref=e149]:
              - link "Hệ cửa sổ giấu rèm" [ref=e150] [cursor=pointer]:
                - /url: he-cua-so-giau-rem
            - listitem [ref=e151]:
              - link "Cầu thang kính" [ref=e152] [cursor=pointer]:
                - /url: cau-thang-kinh
            - listitem [ref=e153]:
              - link "Cửa nhôm" [ref=e154] [cursor=pointer]:
                - /url: cua-nhom
        - generic [ref=e155]:
          - paragraph [ref=e156]: Dịch vụ
          - list [ref=e157]:
            - listitem [ref=e158]:
              - link "Thi công cửa full phào" [ref=e159] [cursor=pointer]:
                - /url: thi-cong-cua-full-phao
            - listitem [ref=e160]:
              - link "Thi công cửa nhôm trượt quay" [ref=e161] [cursor=pointer]:
                - /url: thi-cong-cua-nhom-truot-quay
        - generic [ref=e162]:
          - paragraph [ref=e163]: Thông tin liên hệ
          - paragraph [ref=e165]:
            - generic [ref=e166]: "Địa chỉ: 31/3 Thới Tứ, Tam Thôn, Hóc Môn"
            - generic [ref=e167]: "Tel: 0387191399"
            - generic [ref=e168]: "Email:"
            - link "khoanguyenksk@gmail.com" [ref=e169] [cursor=pointer]:
              - /url: mailto:khoanguyenksk@gmail.com
              - generic [ref=e176]: khoanguyenksk@gmail.com
      - generic [ref=e185]: Copyright ©2026 NHÔM KÍNH ĐĂNG KHOA. All Rights Reserved. Thiết kế Web MIMA
    - generic [ref=e186]:
      - 'link "Call me: 0387 191 399" [ref=e187] [cursor=pointer]':
        - /url: tel:0387191399
        - img [ref=e191]
        - generic [ref=e194]: "Call me: 0387 191 399"
      - 'link "Zalo: 0387191399" [ref=e195] [cursor=pointer]':
        - /url: https://zalo.me/0387191399
        - img [ref=e199]
        - generic [ref=e201]: "Zalo: 0387191399"
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
              - generic: "93"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 93/100
          - generic:
            - generic: "Đánh giá:"
            - strong: 💎 XUẤT SẮC
          - generic:
            - generic: "Ngưỡng đạt:"
            - generic: 70%
          - generic:
            - generic: "Kết quả:"
            - generic: ✅ PASS
      - generic:
        - generic:
          - generic: "15"
          - generic: Tổng tiêu chí
        - generic:
          - generic: ✅ 14
          - generic: Đạt
        - generic:
          - generic: ❌ 1
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: Về chúng tôi
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e202]:
      - generic [ref=e203]: "❌ Chi tiết lỗi cần khắc phục (1/15):"
      - generic [ref=e204]:
        - generic [ref=e205]:
          - generic [ref=e206]: 6. Liên kết (Links)
          - generic [ref=e207]: 1 lỗi
        - generic [ref=e208]:
          - strong [ref=e210]: "Không có broken links (lỗi: 3/20)"
          - generic [ref=e211]: "⚠️ Broken links: Phụ kiện cửa an toàn và tiện nghi (status: 404), upload/product/ (status: 404), Bếp điện Hân Di kết hợp công nghệ và thiết kế (status: 404)"
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 93/100 dưới ngưỡng 96%. Có 1/15 tiêu chí không đạt.
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