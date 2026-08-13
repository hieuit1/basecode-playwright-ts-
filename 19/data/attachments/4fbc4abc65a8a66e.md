# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Dịch vụ (/dich-vu)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 82/100 dưới ngưỡng 95%. Có 4/22 tiêu chí không đạt.
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
        - link "Dịch vụ" [ref=e44] [cursor=pointer]:
          - /url: https://cuanhomtruotquay.vn/dich-vu
    - generic [ref=e48]:
      - generic [ref=e50]: Dịch vụ
      - generic [ref=e52]:
        - generic [ref=e54]:
          - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e55] [cursor=pointer]:
            - /url: thi-cong-cua-nhom-sadona-truot-quay
            - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e56]
          - generic [ref=e57]:
            - link "Thi công cửa nhôm trượt quay" [ref=e58] [cursor=pointer]:
              - /url: thi-cong-cua-nhom-sadona-truot-quay
              - heading "Thi công cửa nhôm trượt quay" [level=3] [ref=e59]
            - 'link "Giá: Liên hệ" [ref=e60] [cursor=pointer]':
              - /url: tel:0387 191 399
              - generic [ref=e61]: "Giá: Liên hệ"
        - generic [ref=e63]:
          - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e64] [cursor=pointer]:
            - /url: thi-cong-cua-full-phao-nhom-sadona
            - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e65]
          - generic [ref=e66]:
            - link "Thi công cửa full phào" [ref=e67] [cursor=pointer]:
              - /url: thi-cong-cua-full-phao-nhom-sadona
              - heading "Thi công cửa full phào" [level=3] [ref=e68]
            - 'link "Giá: Liên hệ" [ref=e69] [cursor=pointer]':
              - /url: tel:0387 191 399
              - generic [ref=e70]: "Giá: Liên hệ"
        - generic [ref=e72]:
          - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e73] [cursor=pointer]:
            - /url: cua-so-giau-rem
            - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e74]
          - generic [ref=e75]:
            - link "Cửa sổ giấu rèm" [ref=e76] [cursor=pointer]:
              - /url: cua-so-giau-rem
              - heading "Cửa sổ giấu rèm" [level=3] [ref=e77]
            - 'link "Giá: Liên hệ" [ref=e78] [cursor=pointer]':
              - /url: tel:0387 191 399
              - generic [ref=e79]: "Giá: Liên hệ"
        - generic [ref=e81]:
          - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e82] [cursor=pointer]:
            - /url: gia-cong-lap-dat-cua-nhom
            - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e83]
          - generic [ref=e84]:
            - link "Gia công lắp đặt cửa nhôm" [ref=e85] [cursor=pointer]:
              - /url: gia-cong-lap-dat-cua-nhom
              - heading "Gia công lắp đặt cửa nhôm" [level=3] [ref=e86]
            - 'link "Giá: Liên hệ" [ref=e87] [cursor=pointer]':
              - /url: tel:0387 191 399
              - generic [ref=e88]: "Giá: Liên hệ"
    - generic [ref=e89]:
      - generic [ref=e94]:
        - generic [ref=e95]:
          - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e96] [cursor=pointer]:
            - /url: https://cuanhomtruotquay.vn/
            - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e97]
          - generic [ref=e98]: XingFa Đăng Khoa mang đến những giải pháp nhôm kính chất lượng, kiến tạo không gian hiện đại, bền vững và nâng tầm giá trị cho mọi công trình.
          - paragraph [ref=e99]: THEO DÕI CHÚNG TÔI TẠI
          - generic [ref=e100]:
            - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e101] [cursor=pointer]:
              - /url: ""
              - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e102]
            - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e103] [cursor=pointer]:
              - /url: ""
              - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e104]
            - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e105] [cursor=pointer]:
              - /url: ""
              - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e106]
            - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e107] [cursor=pointer]:
              - /url: ""
              - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e108]
            - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e109] [cursor=pointer]:
              - /url: ""
              - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e110]
        - generic [ref=e111]:
          - paragraph [ref=e112]: Sản phẩm
          - list [ref=e113]:
            - listitem [ref=e114]:
              - link "Cửa trượt quay" [ref=e115] [cursor=pointer]:
                - /url: cua-truot-quay
            - listitem [ref=e116]:
              - link "Cửa full phào" [ref=e117] [cursor=pointer]:
                - /url: cua-full-phao
            - listitem [ref=e118]:
              - link "Hệ cửa sổ giấu rèm" [ref=e119] [cursor=pointer]:
                - /url: he-cua-so-giau-rem
            - listitem [ref=e120]:
              - link "Cầu thang kính" [ref=e121] [cursor=pointer]:
                - /url: cau-thang-kinh
            - listitem [ref=e122]:
              - link "Cửa nhôm" [ref=e123] [cursor=pointer]:
                - /url: cua-nhom
        - generic [ref=e124]:
          - paragraph [ref=e125]: Dịch vụ
          - list [ref=e126]:
            - listitem [ref=e127]:
              - link "Thi công cửa full phào" [ref=e128] [cursor=pointer]:
                - /url: thi-cong-cua-full-phao
            - listitem [ref=e129]:
              - link "Thi công cửa nhôm trượt quay" [ref=e130] [cursor=pointer]:
                - /url: thi-cong-cua-nhom-truot-quay
        - generic [ref=e131]:
          - paragraph [ref=e132]: Thông tin liên hệ
          - paragraph [ref=e134]:
            - generic [ref=e135]: "Địa chỉ: 31/3 Thới Tứ, Tam Thôn, Hóc Môn"
            - generic [ref=e136]: "Tel: 0387191399"
            - generic [ref=e137]: "Email:"
            - link "khoanguyenksk@gmail.com" [ref=e138] [cursor=pointer]:
              - /url: mailto:khoanguyenksk@gmail.com
              - generic [ref=e145]: khoanguyenksk@gmail.com
      - generic [ref=e154]: Copyright ©2026 NHÔM KÍNH ĐĂNG KHOA. All Rights Reserved. Thiết kế Web MIMA
    - generic [ref=e155]:
      - 'link "Call me: 0387 191 399" [ref=e156] [cursor=pointer]':
        - /url: tel:0387191399
        - img [ref=e160]
        - generic [ref=e163]: "Call me: 0387 191 399"
      - 'link "Zalo: 0387191399" [ref=e164] [cursor=pointer]':
        - /url: https://zalo.me/0387191399
        - img [ref=e168]
        - generic [ref=e170]: "Zalo: 0387191399"
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
              - generic: "82"
              - generic: / 100
        - generic:
          - generic:
            - generic: "Điểm số:"
            - strong: 82/100
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
          - generic: "22"
          - generic: Tổng tiêu chí
        - generic:
          - generic: ✅ 18
          - generic: Đạt
        - generic:
          - generic: ❌ 4
          - generic: Không đạt
      - generic:
        - generic:
          - generic: "🔗 Trang:"
          - strong: Dịch vụ
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e171]:
      - generic [ref=e172]: "❌ Chi tiết lỗi cần khắc phục (4/22):"
      - generic [ref=e173]:
        - generic [ref=e174]:
          - generic [ref=e175]: 6. Liên kết (Links)
          - generic [ref=e176]: 1 lỗi
        - generic [ref=e177]:
          - strong [ref=e179]: "Không có broken links (lỗi: 20/38)"
          - generic [ref=e180]: "⚠️ Broken links: ban-le-bi (status: 404), khoa-dien-tu-1 (status: 404), khoa-du-lich-1 (status: 404), khoa-phan-the-1 (status: 404), khoa-tu (status: 404), ban-le-bat (status: 404), tay-nang (status: 404..."
      - generic [ref=e181]:
        - generic [ref=e182]:
          - generic [ref=e183]: 8. Tốc độ & Core Web Vitals
          - generic [ref=e184]: 3 lỗi
        - generic [ref=e185]:
          - strong [ref=e187]: "[📱 MOBILE (ƯU TIÊN)] LCP (Largest Contentful Paint): 5089ms (< 2500ms)"
          - generic [ref=e188]:
            - text: "⚠️ [📱 MOBILE (ƯU TIÊN)] LCP quá cao: 5089ms (chuẩn: < 2.5s) → Thủ phạm LCP:"
            - img
            - strong [ref=e190]: "[📱 MOBILE (ƯU TIÊN)] CLS (Cumulative Layout Shift): 0.258 (< 0.1)"
            - generic [ref=e191]:
              - text: "⚠️ [📱 MOBILE (ƯU TIÊN)] CLS quá cao: 0.258 (chuẩn: < 0.1) → Thủ phạm CLS: -"
              - generic [ref=e192]:
                - text: "-"
                - generic [ref=e193]:
                  - text: "-"
                  - generic [ref=e194]:
                    - text: "-"
                    - generic [ref=e195]:
                      - strong [ref=e197]: "[💻 Desktop] CLS (Cumulative Layout Shift): 0.216 (< 0.1)"
                      - generic [ref=e198]:
                        - text: "⚠️ [💻 Desktop] CLS quá cao: 0.216 (chuẩn: < 0.1) → Thủ phạm CLS: -"
                        - generic [ref=e199]:
                          - text: "-"
                          - generic [ref=e200]:
                            - text: "-"
                            - generic [ref=e201]:
                              - text: "-"
                              - generic [ref=e202]: ...
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
      |                           ^ Error: ❌ FAIL — Điểm SEO 82/100 dưới ngưỡng 95%. Có 4/22 tiêu chí không đạt.
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