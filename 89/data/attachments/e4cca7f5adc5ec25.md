# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Đưa Đón Sân Bay (/dua-don-san-bay)
- Location: tests/seo/seo.spec.ts:19:9

# Error details

```
Error: ❌ FAIL — Điểm SEO 93/100 dưới ngưỡng 96%. Có 1/15 tiêu chí không đạt.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - text: thuexekhanhhoa.com@gmail.com
  - generic [ref=e2]:
    - generic [ref=e6]:
      - link "Công Hợp Transport" [ref=e7] [cursor=pointer]:
        - /url: https://thuexekhanhhoa.com/
        - img "Công Hợp Transport" [ref=e8]
      - list [ref=e9]:
        - listitem [ref=e10]:
          - link "Trang chủ" [ref=e11] [cursor=pointer]:
            - /url: ""
        - listitem [ref=e12]:
          - link "Về chúng tôi" [ref=e13] [cursor=pointer]:
            - /url: gioi-thieu
        - listitem [ref=e14]:
          - link "Dịch vụ" [ref=e15] [cursor=pointer]:
            - /url: dich-vu
            - text: Dịch vụ
            - img [ref=e16]
        - listitem [ref=e18]:
          - link "Loại xe" [ref=e19] [cursor=pointer]:
            - /url: loai-xe
            - text: Loại xe
            - img [ref=e20]
        - listitem [ref=e22]:
          - link "Bảng giá" [ref=e23] [cursor=pointer]:
            - /url: bang-gia
        - listitem [ref=e24]:
          - link "Tuyến nổi bật" [ref=e25] [cursor=pointer]:
            - /url: tuyen-noi-bat
        - listitem [ref=e26]:
          - link "Tin tức" [ref=e27] [cursor=pointer]:
            - /url: tin-tuc
        - listitem [ref=e28]:
          - link "Tuyển dụng" [ref=e29] [cursor=pointer]:
            - /url: tuyen-dung
        - listitem [ref=e30]:
          - link "Liên hệ" [ref=e31] [cursor=pointer]:
            - /url: lien-he
      - generic [ref=e32]:
        - link "Hotline" [ref=e33] [cursor=pointer]:
          - /url: tel:0785555299
          - img "Hotline" [ref=e34]
        - link "0785 555 299" [ref=e36] [cursor=pointer]:
          - /url: tel:0785555299
    - list [ref=e39]:
      - listitem [ref=e40]:
        - link "Trang chủ" [ref=e41] [cursor=pointer]:
          - /url: https://thuexekhanhhoa.com/
          - generic [ref=e42]: Trang chủ
      - listitem [ref=e43]:
        - text: /
        - link "Dịch vụ" [ref=e44] [cursor=pointer]:
          - /url: https://thuexekhanhhoa.com/dich-vu
      - listitem [ref=e45]:
        - text: /
        - link "Đưa Đón Sân Bay" [ref=e46] [cursor=pointer]:
          - /url: https://thuexekhanhhoa.com/dua-don-san-bay
    - generic [ref=e50]:
      - generic [ref=e52]: Đưa Đón Sân Bay
      - generic [ref=e54]:
        - generic [ref=e56]:
          - link "Xe đưa đón sân bay Tân Sơn Nhất" [ref=e58] [cursor=pointer]:
            - /url: xe-dua-don-san-bay-tan-son-nhat
            - img "Xe đưa đón sân bay Tân Sơn Nhất" [ref=e59]
          - heading "Xe đưa đón sân bay Tân Sơn Nhất" [level=3] [ref=e61]:
            - link "Xe đưa đón sân bay Tân Sơn Nhất" [ref=e62] [cursor=pointer]:
              - /url: xe-dua-don-san-bay-tan-son-nhat
        - generic [ref=e64]:
          - link "Xe đưa đón sân bay Cam Ranh" [ref=e66] [cursor=pointer]:
            - /url: xe-dua-don-san-bay-cam-ranh
            - img "Xe đưa đón sân bay Cam Ranh" [ref=e67]
          - heading "Xe đưa đón sân bay Cam Ranh" [level=3] [ref=e69]:
            - link "Xe đưa đón sân bay Cam Ranh" [ref=e70] [cursor=pointer]:
              - /url: xe-dua-don-san-bay-cam-ranh
        - generic [ref=e72]:
          - link "Xe đưa đón sân bay trọn gói" [ref=e74] [cursor=pointer]:
            - /url: xe-dua-don-san-bay-tron-goi
            - img "Xe đưa đón sân bay trọn gói" [ref=e75]
          - heading "Xe đưa đón sân bay trọn gói" [level=3] [ref=e77]:
            - link "Xe đưa đón sân bay trọn gói" [ref=e78] [cursor=pointer]:
              - /url: xe-dua-don-san-bay-tron-goi
        - generic [ref=e80]:
          - link "Thuê xe đưa đón sân bay bao xe" [ref=e82] [cursor=pointer]:
            - /url: thue-xe-dua-don-san-bay-bao-xe
            - img "Thuê xe đưa đón sân bay bao xe" [ref=e83]
          - heading "Thuê xe đưa đón sân bay bao xe" [level=3] [ref=e85]:
            - link "Thuê xe đưa đón sân bay bao xe" [ref=e86] [cursor=pointer]:
              - /url: thue-xe-dua-don-san-bay-bao-xe
      - generic [ref=e87]:
        - paragraph [ref=e88]:
          - text: Một chuyến hành trình thuận lợi luôn bắt đầu bằng sự khởi đầu suôn sẻ. Khi bạn bước xuống máy bay sau nhiều giờ bay mệt mỏi, cảm giác được nhìn thấy một chiếc xe sạch sẽ, thơm tho đang chờ sẵn tại cửa nhà ga thực sự là một trải nghiệm đáng giá. Dịch vụ
          - link "Đưa Đón Sân Bay" [ref=e89] [cursor=pointer]:
            - /url: https://thuexekhanhhoa.com/dua-don-san-bay
          - text: của chúng tôi không chỉ đơn thuần là việc vận chuyển từ điểm A đến điểm B, mà là cách chúng tôi trân trọng thời gian và sự thoải mái của bạn trên mỗi cung đường.
        - paragraph [ref=e90]:
          - img "Đưa Đón Sân Bay" [ref=e91]
        - heading "Tận hưởng sự tiện nghi trong từng chuyến đi" [level=2] [ref=e92]
        - paragraph [ref=e93]: Sự khác biệt giữa việc tự xoay sở tìm phương tiện giữa dòng người đông đúc và việc có người đón tận nơi chính là sự an tâm. Chúng tôi thấu hiểu rằng khách hàng cần sự chuyên nghiệp, đúng giờ và thái độ phục vụ tận tâm. Dù bạn đi công tác, du lịch hay trở về nhà sau chuyến đi dài, chúng tôi luôn chuẩn bị kỹ lưỡng để hành trình của bạn trở nên nhẹ nhàng nhất.
        - heading "Dịch vụ Đưa Đón Sân Bay chuẩn mực" [level=3] [ref=e94]
        - paragraph [ref=e95]: Với đội ngũ lái xe giàu kinh nghiệm, thông thuộc mọi lộ trình, chúng tôi đảm bảo đón bạn đúng giờ, không để bạn phải chờ đợi. Các dòng xe luôn được bảo trì định kỳ, vệ sinh kỹ lưỡng trước khi đón khách, mang lại không gian thư giãn tuyệt đối. Bạn không cần lo lắng về việc mang vác hành lý nặng nề, vì tài xế của chúng tôi luôn sẵn sàng hỗ trợ tận tình từ cửa sảnh đến tận cốp xe.
        - paragraph [ref=e96]:
          - img "Tận hưởng sự tiện nghi trong từng chuyến đi" [ref=e97]
        - heading "Giải pháp di chuyển đa dạng cho mọi nhu cầu" [level=3] [ref=e98]
        - paragraph [ref=e99]: "Bên cạnh thế mạnh về dịch vụ đưa đón, chúng tôi cung cấp hệ thống xe đa dạng đáp ứng mọi nhu cầu cá nhân và doanh nghiệp:"
        - list [ref=e100]:
          - listitem [ref=e101]: "Thuê Xe Liên Tỉnh: Hành trình dài trở nên ngắn lại với những chiếc xe vận hành êm ái, đảm bảo an toàn tuyệt đối trên mọi địa hình."
          - listitem [ref=e102]: "Thuê Xe Du Lịch: Lựa chọn lý tưởng cho các gia đình hoặc nhóm bạn muốn tận hưởng chuyến đi riêng tư, chủ động lịch trình."
          - listitem [ref=e103]: "Thuê Xe Đánh Golf: Dòng xe cao cấp với khoang để túi gậy rộng rãi, phong cách sang trọng dành cho các quý ông, quý bà."
          - listitem [ref=e104]: "Thuê Xe Tự Lái: Dành cho những ai yêu thích sự tự do, muốn tự tay cầm lái khám phá những vùng đất mới cùng người thân."
          - listitem [ref=e105]: "Thuê xe Hoa - Cưới: Những chiếc xe hoa lộng lẫy, trang trọng góp phần làm nên ngày trọng đại hoàn hảo và đáng nhớ."
          - listitem [ref=e106]: "Thuê Xe Hợp Đồng: Giải pháp tối ưu cho doanh nghiệp cần xe chuyên chở nhân viên hoặc đối tác dài hạn."
          - listitem [ref=e107]: "Thuê Xe Theo Tháng: Tiết kiệm chi phí, chủ động thời gian cho các nhu cầu công việc ổn định."
          - listitem [ref=e108]: "Taxi: Lựa chọn nhanh chóng, tiện lợi cho mọi nhu cầu di chuyển tức thời trong thành phố."
        - paragraph [ref=e109]:
          - img "Giải pháp di chuyển đa dạng cho mọi nhu cầu" [ref=e110]
        - heading "Cam kết từ trái tim của những người cầm lái" [level=2] [ref=e111]
        - paragraph [ref=e112]: Sự hài lòng của bạn là thước đo thành công duy nhất mà chúng tôi hướng tới. Chúng tôi tin rằng, một chuyến đi chất lượng không chỉ nằm ở chiếc xe đời mới hay nội thất sang trọng, mà nằm ở thái độ phục vụ của người tài xế. Đó là nụ cười khi đón khách, là sự hỗ trợ chu đáo khi lên xuống xe và sự thấu hiểu nhu cầu của từng hành khách.
        - paragraph [ref=e113]:
          - img "Cam kết từ trái tim của những người cầm lái" [ref=e114]
        - heading "Chuyên nghiệp trong từng chi tiết nhỏ" [level=3] [ref=e115]
        - paragraph [ref=e116]: Mọi quy trình từ lúc tiếp nhận yêu cầu, điều phối xe đến khi trả khách đều được thực hiện theo tiêu chuẩn khắt khe. Chúng tôi chú trọng đến việc đào tạo đội ngũ lái xe không chỉ về tay lái vững vàng mà còn về kỹ năng giao tiếp lịch sự, nhã nhặn. Bạn sẽ cảm nhận được sự tôn trọng và ưu tiên hàng đầu trong suốt quá trình đồng hành cùng chúng tôi.
        - heading "Tiết kiệm thời gian và tối ưu chi phí" [level=3] [ref=e117]
        - paragraph [ref=e118]: Chúng tôi hiểu rằng tài chính luôn là yếu tố quan trọng. Chính vì vậy, bảng giá luôn được niêm yết công khai, minh bạch, không phát sinh chi phí bất ngờ. Với dịch vụ chuyên nghiệp, bạn sẽ loại bỏ được những rắc rối như tắc đường, lạc đường hay phải chờ đợi phương tiện quá lâu. Đầu tư vào một chuyến đi an toàn là khoản đầu tư thông minh nhất cho trải nghiệm cá nhân của chính bạn.
        - heading "Kết nối hành trình của bạn ngay hôm nay" [level=2] [ref=e119]
        - paragraph [ref=e120]: Đừng để những lo toan về phương tiện làm giảm đi niềm vui trong chuyến đi của bạn. Hãy để chúng tôi trở thành người đồng hành tin cậy, chăm sóc từng dặm đường của bạn bằng tất cả sự tận tâm. Chúng tôi không chỉ cung cấp dịch vụ xe, chúng tôi trao đi sự an tâm và những giá trị tốt đẹp nhất.
        - paragraph [ref=e121]:
          - img "Kết nối hành trình của bạn ngay hôm nay" [ref=e122]
        - paragraph [ref=e123]: Nếu bạn đang tìm kiếm một đơn vị vận chuyển uy tín, chuyên nghiệp và tận tụy, hãy liên hệ ngay với chúng tôi để trải nghiệm sự khác biệt. Đội ngũ nhân viên tư vấn luôn sẵn sàng lắng nghe và đưa ra phương án tối ưu nhất cho kế hoạch của bạn.
        - paragraph [ref=e124]:
          - text: Công Hợp Transport
          - text: "Địa chỉ: 111 Nguyễn Thị Minh Khai, TT Phước Dân Ninh Phước, Ninh Thuận"
          - text: "Hotline: 0785 555 299"
          - text: "Điện thoại: 0785555299"
          - text: "Email: thuexekhanhhoa.com@gmail.com"
          - text: "Website:"
          - link "thuexekhanhhoa.com" [ref=e125] [cursor=pointer]:
            - /url: http://thuexekhanhhoa.com/
        - link "Xem tất cả bài viết" [ref=e128] [cursor=pointer]:
          - /url: javascript:;
          - generic [ref=e129]:
            - text: Xem tất cả bài viết
            - img [ref=e130]
    - generic [ref=e138]:
      - generic [ref=e141]:
        - generic [ref=e142]:
          - paragraph [ref=e143]: Thông tin liên hệ
          - paragraph [ref=e145]:
            - generic [ref=e146]:
              - text: "Địa chỉ: 111 Nguyễn Thị Minh Khai, TT Phước Dân Ninh Phước, Ninh Thuận"
              - text: "Hotline: 0785555299"
              - text: "Email: thuexekhanhhoa.com@gmail.com"
              - text: "Website:"
              - link "thuexekhanhhoa.com" [ref=e147] [cursor=pointer]:
                - /url: https://thuexekhanhhoa.com/
              - text: "Giờ làm việc: Thứ 2 - Chủ nhật 7:30 - 20:00"
        - generic [ref=e149]:
          - generic [ref=e150]:
            - paragraph [ref=e151]: Truy cập nhanh
            - list [ref=e152]:
              - listitem [ref=e153]:
                - link "Trang chủ" [ref=e154] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=e155]:
                - link "Về chúng tôi" [ref=e156] [cursor=pointer]:
                  - /url: gioi-thieu
              - listitem [ref=e157]:
                - link "Dịch vụ" [ref=e158] [cursor=pointer]:
                  - /url: dich-vu
              - listitem [ref=e159]:
                - link "Tuyển dụng" [ref=e160] [cursor=pointer]:
                  - /url: tuyen-dung
              - listitem [ref=e161]:
                - link "Tin tức" [ref=e162] [cursor=pointer]:
                  - /url: tin-tuc
          - generic [ref=e163]:
            - paragraph [ref=e164]: Chính sách chúng tôi
            - list [ref=e165]:
              - listitem [ref=e166]:
                - link "Chính sách bảo mật" [ref=e167] [cursor=pointer]:
                  - /url: chinh-sach-bao-mat
              - listitem [ref=e168]:
                - link "Chính sách đặt xe" [ref=e169] [cursor=pointer]:
                  - /url: chinh-sach-dat-xe
              - listitem [ref=e170]:
                - link "Chính sách huỷ xe" [ref=e171] [cursor=pointer]:
                  - /url: chinh-sach-huy-xe
              - listitem [ref=e172]:
                - link "Hướng dẫn thanh toán" [ref=e173] [cursor=pointer]:
                  - /url: huong-dan-thanh-toan
              - listitem [ref=e174]:
                - link "Chính sách bảo mật thông tin" [ref=e175] [cursor=pointer]:
                  - /url: chinh-sach-bao-mat-thong-tin
              - listitem [ref=e176]:
                - link "Giải quyết tranh chấp" [ref=e177] [cursor=pointer]:
                  - /url: giai-quyet-tranh-chap
          - generic [ref=e178]:
            - paragraph [ref=e179]: Các dòng xe
            - list
      - generic [ref=e182]:
        - generic [ref=e183]: Copyright ©2026 Thuê Xe Khánh Hoà. Thiết kế web MIMA
        - generic [ref=e184]:
          - generic [ref=e185]: "Đang online: 1230"
          - text: "|"
          - generic [ref=e186]: "Hôm nay: 148"
          - text: "|"
          - generic [ref=e187]: "Tổng truy cập: 2001"
    - generic [ref=e188]:
      - 'link "Call me: 0785 555 299" [ref=e189] [cursor=pointer]':
        - /url: tel:0785555299
        - img [ref=e193]
        - generic [ref=e196]: "Call me: 0785 555 299"
      - 'link "Zalo: 0785555299" [ref=e197] [cursor=pointer]':
        - /url: https://zalo.me/0785555299
        - img [ref=e201]
        - generic [ref=e202]: "Zalo: 0785555299"
      - link "Đặt lịch thuê xe" [ref=e203] [cursor=pointer]:
        - /url: javascript:;
        - img [ref=e207]
        - generic [ref=e210]: Đặt lịch thuê xe
    - text: 
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
          - strong: Đưa Đón Sân Bay
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e211]:
      - generic [ref=e212]: "❌ Chi tiết lỗi cần khắc phục (1/15):"
      - generic [ref=e213]:
        - generic [ref=e214]:
          - generic [ref=e215]: 7. Technical SEO
          - generic [ref=e216]: 1 lỗi
        - generic [ref=e217]:
          - strong [ref=e219]: "Robots: noindex, nofollow (mong muốn: INDEX)"
          - generic [ref=e220]: ⚠️ Trang mong muốn INDEX nhưng đang bị gắn 'noindex'!
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