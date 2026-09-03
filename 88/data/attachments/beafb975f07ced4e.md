# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: H9 (/h9)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 93/100 dưới ngưỡng 96%. Có 1/15 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e6]:
        - paragraph [ref=e7]:
          - generic [ref=e8]: “Công Ty TNHH Ngân Nhân Phát – Uy tín tạo giá trị, vững bước tương lai.”
        - generic [ref=e9]:
          - paragraph [ref=e10]:
            - text: "Email:"
            - link "caonghia163@gmail.com" [ref=e11] [cursor=pointer]:
              - /url: mailto:caonghia163@gmail.com
          - paragraph [ref=e12]:
            - text: "Hotline:"
            - link "0908.589877" [ref=e13] [cursor=pointer]:
              - /url: tel:0908589877
      - list [ref=e17]:
        - listitem [ref=e18]:
          - link "Trang chủ" [ref=e19] [cursor=pointer]:
            - /url: https://phutungmayin.com/
        - listitem [ref=e20]:
          - link "Giới thiệu" [ref=e21] [cursor=pointer]:
            - /url: gioi-thieu
        - listitem [ref=e22]:
          - link "Sản phẩm" [ref=e23] [cursor=pointer]:
            - /url: san-pham
        - listitem [ref=e24]:
          - link "Phụ Tùng Máy In Công NghiệpTại TP.HCM_Công Ty TNHH Ngân Nhân Phát" [ref=e25] [cursor=pointer]:
            - /url: https://phutungmayin.com/
            - img "Phụ Tùng Máy In Công NghiệpTại TP.HCM_Công Ty TNHH Ngân Nhân Phát" [ref=e26]
        - listitem [ref=e27]:
          - link "Dịch vụ" [ref=e28] [cursor=pointer]:
            - /url: dich-vu
        - listitem [ref=e29]:
          - link "Tin tức" [ref=e30] [cursor=pointer]:
            - /url: tin-tuc
        - listitem [ref=e31]:
          - link "Liên hệ" [ref=e32] [cursor=pointer]:
            - /url: lien-he
        - listitem [ref=e33]:
          - link [ref=e34] [cursor=pointer]:
            - /url: javascript:void();
          - textbox "Nhập từ khóa cần tìm..."
      - text:  
    - list [ref=e37]:
      - listitem [ref=e38]:
        - link "Trang chủ" [ref=e39] [cursor=pointer]:
          - /url: https://phutungmayin.com/
          - generic [ref=e40]: Trang chủ
      - listitem [ref=e41]:
        - text: "|"
        - link "Sản phẩm" [ref=e42] [cursor=pointer]:
          - /url: https://phutungmayin.com/san-pham
      - listitem [ref=e43]:
        - text: "|"
        - link "Phụ tùng của Máy In Phun hiệu Hitachi" [ref=e44] [cursor=pointer]:
          - /url: https://phutungmayin.com/phu-tung-cua-may-in-phun-hieu-hitachi
      - listitem [ref=e45]:
        - text: "|"
        - link "H9" [ref=e46] [cursor=pointer]:
          - /url: https://phutungmayin.com/h9
    - generic [ref=e48]:
      - generic [ref=e49]:
        - link [ref=e51] [cursor=pointer]:
          - /url: watermark/product/1200x1200x3/upload/product/8-1832-3726.jpg
          - figure [ref=e52]:
            - img "H9" [ref=e53]
            - generic:
              - img
            - generic:
              - img
        - generic [ref=e54]:
          - paragraph [ref=e55]: H9
          - list [ref=e56]:
            - listitem [ref=e57]:
              - generic [ref=e58]: "Lượt xem:"
              - generic [ref=e59]: "378"
            - listitem [ref=e60]:
              - generic [ref=e61]: "Giá:"
              - generic [ref=e62]: Liên hệ
      - generic [ref=e63]:
        - tablist [ref=e64]:
          - listitem [ref=e65]:
            - tab "Thông tin sản phẩm" [ref=e66] [cursor=pointer]
        - tabpanel [ref=e68]:
          - alert [ref=e69]:
            - strong [ref=e70]: Nội dung đang cập nhật
      - heading "Sản phẩm cùng loại" [level=2] [ref=e72]
      - generic [ref=e73]:
        - generic [ref=e76]:
          - generic [ref=e78]:
            - link "H8" [ref=e80] [cursor=pointer]:
              - /url: h8
              - img "H8" [ref=e81]
            - heading "H8" [level=3] [ref=e82]:
              - link "H8" [ref=e83] [cursor=pointer]:
                - /url: h8
            - link "Liên hệ" [ref=e85] [cursor=pointer]:
              - /url: tel:0908589877
              - generic [ref=e86]: Liên hệ
          - generic [ref=e88]:
            - link "H13" [ref=e90] [cursor=pointer]:
              - /url: h13
              - img "H13" [ref=e91]
            - heading "H13" [level=3] [ref=e92]:
              - link "H13" [ref=e93] [cursor=pointer]:
                - /url: h13
            - link "Liên hệ" [ref=e95] [cursor=pointer]:
              - /url: tel:0908589877
              - generic [ref=e96]: Liên hệ
          - generic [ref=e98]:
            - link "H1" [ref=e100] [cursor=pointer]:
              - /url: h1
              - img "H1" [ref=e101]
            - heading "H1" [level=3] [ref=e102]:
              - link "H1" [ref=e103] [cursor=pointer]:
                - /url: h1
            - link "Liên hệ" [ref=e105] [cursor=pointer]:
              - /url: tel:0908589877
              - generic [ref=e106]: Liên hệ
          - generic [ref=e108]:
            - link "H26" [ref=e110] [cursor=pointer]:
              - /url: h26
              - img "H26" [ref=e111]
            - heading "H26" [level=3] [ref=e112]:
              - link "H26" [ref=e113] [cursor=pointer]:
                - /url: h26
            - link "Liên hệ" [ref=e115] [cursor=pointer]:
              - /url: tel:0908589877
              - generic [ref=e116]: Liên hệ
          - generic [ref=e118]:
            - link "H25" [ref=e120] [cursor=pointer]:
              - /url: h25
              - img "H25" [ref=e121]
            - heading "H25" [level=3] [ref=e122]:
              - link "H25" [ref=e123] [cursor=pointer]:
                - /url: h25
            - link "Liên hệ" [ref=e125] [cursor=pointer]:
              - /url: tel:0908589877
              - generic [ref=e126]: Liên hệ
          - generic [ref=e128]:
            - link "H24" [ref=e130] [cursor=pointer]:
              - /url: h24
              - img "H24" [ref=e131]
            - heading "H24" [level=3] [ref=e132]:
              - link "H24" [ref=e133] [cursor=pointer]:
                - /url: h24
            - link "Liên hệ" [ref=e135] [cursor=pointer]:
              - /url: tel:0908589877
              - generic [ref=e136]: Liên hệ
          - generic [ref=e138]:
            - link "H22" [ref=e140] [cursor=pointer]:
              - /url: h22
            - heading "H22" [level=3] [ref=e141]:
              - link "H22" [ref=e142] [cursor=pointer]:
                - /url: h22
            - link "Liên hệ" [ref=e144] [cursor=pointer]:
              - /url: tel:0908589877
              - generic [ref=e145]: Liên hệ
          - generic [ref=e147]:
            - link "H21" [ref=e149] [cursor=pointer]:
              - /url: h21
            - heading "H21" [level=3] [ref=e150]:
              - link "H21" [ref=e151] [cursor=pointer]:
                - /url: h21
            - link "Liên hệ" [ref=e153] [cursor=pointer]:
              - /url: tel:0908589877
              - generic [ref=e154]: Liên hệ
          - generic [ref=e156]:
            - link "H20" [ref=e158] [cursor=pointer]:
              - /url: h20
            - heading "H20" [level=3] [ref=e159]:
              - link "H20" [ref=e160] [cursor=pointer]:
                - /url: h20
            - link "Liên hệ" [ref=e162] [cursor=pointer]:
              - /url: tel:0908589877
              - generic [ref=e163]: Liên hệ
          - generic [ref=e165]:
            - link "H19" [ref=e167] [cursor=pointer]:
              - /url: h19
            - heading "H19" [level=3] [ref=e168]:
              - link "H19" [ref=e169] [cursor=pointer]:
                - /url: h19
            - link "Liên hệ" [ref=e171] [cursor=pointer]:
              - /url: tel:0908589877
              - generic [ref=e172]: Liên hệ
        - generic:
          - button [ref=e173] [cursor=pointer]:
            - img [ref=e174]
          - button [ref=e177] [cursor=pointer]:
            - img [ref=e178]
    - generic [ref=e182]:
      - generic [ref=e184]:
        - generic [ref=e185]:
          - paragraph [ref=e186]: Thông tin liên hệ
          - paragraph [ref=e187]: CÔNG TY TNHH NGÂN NHÂN PHÁT
          - generic [ref=e188]:
            - paragraph [ref=e189]:
              - generic [ref=e191]:
                - strong [ref=e192]: "Địa chỉ:"
                - text: 410/3C, Tỉnh lộ 8, Tổ 7, Ấp 20, xã Phú Hoà Đông , Tp.HCM
            - paragraph [ref=e193]:
              - generic [ref=e195]:
                - strong [ref=e196]: "Email:"
                - text: caonghia163@gmail.com
            - paragraph [ref=e197]:
              - generic [ref=e199]:
                - strong [ref=e200]: "Phòng trưng bày sản phẩm:"
                - text: 79 Trương Định , phường Bến Thành , Tp.HCM
            - paragraph [ref=e201]:
              - generic [ref=e203]:
                - strong [ref=e204]: "VPGD:"
                - text: 82/2 Đường 494 , Khu Phố 14 , phường Tăng Nhơn Phú , Tp.HCM
            - paragraph [ref=e205]:
              - generic [ref=e207]:
                - strong [ref=e208]: "VPGD:"
                - text: Số 50 Hương lộ 15, ấp Ngãi Hiệp, xã Hưng Mỹ , tỉnh Vĩnh Long
            - paragraph [ref=e209]:
              - generic [ref=e211]:
                - strong [ref=e212]: VPGD
                - text: ": Lô 117A đường Bàu Mạc 8, phường Liên Chiểu, Thành phố Đà Nẵng"
            - paragraph [ref=e213]:
              - generic [ref=e215]:
                - strong [ref=e216]: "Hotlines:"
                - text: 0908.589877 - 0909.589877 - 0936.589877- 0938.589877
            - paragraph [ref=e217]:
              - generic [ref=e219]:
                - text: "website :"
                - link "phutungmayin.com" [ref=e220] [cursor=pointer]:
                  - /url: https://phutungmayin.com/
                - text: "- mucindungmoi.com"
        - link "Phụ Tùng Máy In Công NghiệpTại TP.HCM_Công Ty TNHH Ngân Nhân Phát" [ref=e222] [cursor=pointer]:
          - /url: https://phutungmayin.com/
          - img "Phụ Tùng Máy In Công NghiệpTại TP.HCM_Công Ty TNHH Ngân Nhân Phát" [ref=e223]
        - generic [ref=e224]:
          - paragraph [ref=e225]: Truy cập nhanh
          - list [ref=e226]:
            - listitem [ref=e227]:
              - link "Trang chủ" [ref=e228] [cursor=pointer]:
                - /url: https://phutungmayin.com/
            - listitem [ref=e229]:
              - link "Giới thiệu" [ref=e230] [cursor=pointer]:
                - /url: gioi-thieu
            - listitem [ref=e231]:
              - link "Sản phẩm" [ref=e232] [cursor=pointer]:
                - /url: san-pham
            - listitem [ref=e233]:
              - link "Dịch vụ" [ref=e234] [cursor=pointer]:
                - /url: dich-vu
            - listitem [ref=e235]:
              - link "Tin tức" [ref=e236] [cursor=pointer]:
                - /url: tin-tuc
            - listitem [ref=e237]:
              - link "Liên hệ" [ref=e238] [cursor=pointer]:
                - /url: lien-he
      - generic [ref=e240]:
        - list [ref=e241]:
          - listitem [ref=e242]:
            - link [ref=e243] [cursor=pointer]:
              - /url: https://www.facebook.com/profile.php?id=61571802610387&ref=embed_page
          - listitem [ref=e244]:
            - link [ref=e245] [cursor=pointer]:
              - /url: https://zalo.me/0908589877
          - listitem [ref=e246]:
            - link [ref=e247] [cursor=pointer]:
              - /url: https://www.tiktok.com/@nghia.cao90?_r=1&_d=secCgYIASAHKAESPgo8dfCBj1W6MqFesvHJ1IpDQktB7%2FboK05GsbOW%2BKEJ4jxHEd1QOf119UkeT8jWSg48BixjG3B9zLanqUxGGgA%3D&checksum=efdf4558130926519cf167efe74caee247efc0d8e971c4d5f0c343fdfacac56b&sec_uid=MS4wLjABAAAA3B6GvGBOjCIdCDqGOnh2wz4kuqnVZd4BeBabv507oBGy2YNpq3Jr_VbfAM5icrYL&sec_user_id=MS4wLjABAAAA3B6GvGBOjCIdCDqGOnh2wz4kuqnVZd4BeBabv507oBGy2YNpq3Jr_VbfAM5icrYL&share_app_id=1180&share_author_id=7413716049362011141&share_link_id=CCF409FE-5B32-419D-A444-70C6EB9831B6&sharer_language=vi&social_share_type=4&source=h5_t&timestamp=1740110423&tt_from=copy&u_code=eg6kf7ake5737f&ug_btm=b0%2Cb0&user_id=7413716049362011141&utm_campaign=client_share&utm_medium=ios&utm_source=copy
          - listitem [ref=e248]:
            - link [ref=e249] [cursor=pointer]:
              - /url: https://www.youtube.com/@caonghia5657
        - generic [ref=e250]: Copyright © CÔNG TY TNHH NGÂN NHÂN PHÁT. All rights reserved. Thiêt kế web MIMA
    - generic [ref=e251]:
      - 'link "Call me: 0908589877" [ref=e252] [cursor=pointer]':
        - /url: tel:0908589877
        - img [ref=e254]
        - generic: "Call me: 0908589877"
      - 'link "Zalo: 0908589877" [ref=e257] [cursor=pointer]':
        - /url: https://zalo.me/0908589877
        - img [ref=e259]
        - generic: "Zalo: 0908589877"
    - text: 
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
          - strong: H9
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e261]:
      - generic [ref=e262]: "❌ Chi tiết lỗi cần khắc phục (1/15):"
      - generic [ref=e263]:
        - generic [ref=e264]:
          - generic [ref=e265]: 5. Hình ảnh
          - generic [ref=e266]: 1 lỗi
        - generic [ref=e267]:
          - strong [ref=e269]: "100% ảnh có thuộc tính alt (thiếu: 3/21)"
          - generic [ref=e270]: "⚠️ Có 3 hình ảnh thiếu thuộc tính 'alt'. VD: data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=, data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=, https://phutungmayin.com/watermark/pro..."
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