# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: seo/seo.spec.ts >> SEO Page >> Kiểm tra SEO Onpage: Phụ kiện cửa an toàn và tiện nghi (/phu-kien-cua-an-toan-va-tien-nghi)
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
        - link "Tin tức" [ref=e44] [cursor=pointer]:
          - /url: https://cuanhomtruotquay.vn/tin-tuc
      - listitem [ref=e45]:
        - text: /
        - link "Phụ kiện cửa an toàn và tiện nghi" [ref=e46] [cursor=pointer]:
          - /url: https://cuanhomtruotquay.vn/phu-kien-cua-an-toan-va-tien-nghi
    - generic [ref=e48]:
      - generic [ref=e50]:
        - generic [ref=e52]: Phụ kiện cửa an toàn và tiện nghi
        - generic [ref=e53]:
          - img [ref=e54]
          - generic [ref=e57]: 102 Lượt xem
          - img [ref=e58]
          - generic [ref=e61]: "Ngày đăng: 23/09/2025 11:18 PM"
        - generic [ref=e63]:
          - generic [ref=e64] [cursor=pointer]:
            - img [ref=e65]
            - text: Mục lục
            - img [ref=e68]
          - text: ▾ ▾
        - text: ▾ ▾
        - generic [ref=e72]:
          - 'heading "Phụ Kiện Cửa An Toàn Và Tiện Nghi: Giải Pháp Hoàn Hảo Cho Mọi Không Gian" [level=2] [ref=e73]':
            - strong [ref=e76]: "Phụ Kiện Cửa An Toàn Và Tiện Nghi: Giải Pháp Hoàn Hảo Cho Mọi Không Gian"
          - paragraph [ref=e77]:
            - strong [ref=e80]:
              - 'img "Phụ Kiện Cửa An Toàn Và Tiện Nghi: Giải Pháp Hoàn Hảo Cho Mọi Không Gian tại hân di" [ref=e81]'
          - paragraph [ref=e82]: Trong không gian sống hiện đại, việc lựa chọn phụ kiện cửa không chỉ giúp bảo vệ ngôi nhà mà còn mang đến sự tiện nghi và thẩm mỹ cao. Phụ kiện cửa an toàn và tiện nghi không chỉ là những chi tiết nhỏ nhưng lại đóng vai trò vô cùng quan trọng trong việc nâng cao chất lượng cuộc sống của bạn. Cùng CÔNG TY TNHH CUNG ỨNG NỘI THẤT HÂN DI, khám phá những sản phẩm phụ kiện cửa không chỉ đảm bảo an toàn mà còn tối ưu tiện nghi cho không gian sống của bạn.
          - 'heading "Phụ Kiện Cửa An Toàn Và Tiện Nghi: Những Lợi Ích Vượt Trội" [level=2] [ref=e83]':
            - strong [ref=e86]: "Phụ Kiện Cửa An Toàn Và Tiện Nghi: Những Lợi Ích Vượt Trội"
          - paragraph [ref=e87]:
            - strong [ref=e90]:
              - 'img "Phụ Kiện Cửa An Toàn Và Tiện Nghi: Những Lợi Ích Vượt Trội tại hân di" [ref=e91]'
          - paragraph [ref=e92]: Phụ kiện cửa an toàn và tiện nghi không chỉ mang lại vẻ đẹp thẩm mỹ cho căn nhà mà còn giúp tăng cường độ bền của cửa, bảo vệ các thành viên trong gia đình khỏi các tai nạn không mong muốn. Đặc biệt, với những công nghệ tiên tiến và thiết kế tinh tế, những phụ kiện này góp phần mang lại trải nghiệm sống thoải mái, dễ dàng sử dụng và cực kỳ an toàn.
          - heading "An Toàn Tuyệt Đối Cho Người Dùng" [level=3] [ref=e93]:
            - strong [ref=e95]: An Toàn Tuyệt Đối Cho Người Dùng
          - paragraph [ref=e96]: Một trong những yếu tố quan trọng nhất của phụ kiện cửa an toàn là khả năng bảo vệ người sử dụng. Các phụ kiện cửa như khóa cửa, bản lề, và tay nắm được thiết kế đặc biệt để đảm bảo an toàn cho người sử dụng, tránh các tình huống nguy hiểm do lỗi kỹ thuật hoặc lắp đặt sai cách. Chất liệu của các phụ kiện này cũng được lựa chọn kỹ càng, giúp chịu lực tốt và có độ bền cao, chống được tác động từ môi trường bên ngoài.
          - heading "Tạo Nên Không Gian Sống Tiện Nghi" [level=3] [ref=e97]:
            - strong [ref=e99]: Tạo Nên Không Gian Sống Tiện Nghi
          - paragraph [ref=e100]:
            - strong [ref=e102]:
              - img "Tạo Nên Không Gian Sống Tiện Nghi tại hân di" [ref=e103]
          - paragraph [ref=e104]: Bên cạnh yếu tố an toàn, phụ kiện cửa an toàn và tiện nghi còn mang đến sự tiện lợi tối đa trong cuộc sống hàng ngày. Các sản phẩm phụ kiện cửa hiện đại được trang bị những tính năng thông minh, dễ sử dụng và bảo trì, giúp tiết kiệm thời gian và công sức cho người sử dụng. Ví dụ, các loại khóa cửa thông minh, bản lề tự động, hay tay nắm cửa có thể điều chỉnh giúp bạn dễ dàng sử dụng cửa mà không gặp phải sự bất tiện nào.
          - heading "Các Loại Phụ Kiện Cửa An Toàn Và Tiện Nghi Cần Có" [level=2] [ref=e105]:
            - strong [ref=e108]: Các Loại Phụ Kiện Cửa An Toàn Và Tiện Nghi Cần Có
          - paragraph [ref=e109]:
            - strong [ref=e112]:
              - img "Các Loại Phụ Kiện Cửa An Toàn Và Tiện Nghi Cần Có tại hân di" [ref=e113]
          - paragraph [ref=e114]: "Để tạo nên một không gian sống hoàn hảo, việc lựa chọn những phụ kiện cửa an toàn và tiện nghi chất lượng là vô cùng quan trọng. Dưới đây là một số phụ kiện cửa nổi bật mà bạn không thể bỏ qua:"
          - heading "Khóa Cửa An Toàn" [level=3] [ref=e115]:
            - strong [ref=e117]: Khóa Cửa An Toàn
          - paragraph [ref=e118]: Khóa cửa là phụ kiện không thể thiếu đối với mọi gia đình. Các loại khóa cửa an toàn ngày nay không chỉ giúp bảo vệ tài sản mà còn đảm bảo sự an toàn cho các thành viên trong gia đình. Những chiếc khóa cửa hiện đại được trang bị công nghệ khóa thông minh, dễ dàng mở khóa qua các ứng dụng trên điện thoại, giúp bạn quản lý việc ra vào cửa một cách thuận tiện và an toàn.
          - heading "Bản Lề Cửa Chắc Chắn" [level=3] [ref=e119]:
            - strong [ref=e121]: Bản Lề Cửa Chắc Chắn
          - paragraph [ref=e122]: Bản lề cửa là một trong những phụ kiện không thể thiếu để đảm bảo cửa có thể hoạt động trơn tru và bền bỉ. Bản lề cửa chất lượng không chỉ giúp cửa mở đóng dễ dàng mà còn đảm bảo độ bền và độ chính xác cao. Các bản lề cửa an toàn và tiện nghi của CÔNG TY TNHH CUNG ỨNG NỘI THẤT HÂN DI có khả năng chịu lực tốt, chống gỉ sét, phù hợp với mọi loại cửa, từ cửa gỗ đến cửa thép, mang lại sự an toàn tuyệt đối.
          - heading "Tay Nắm Cửa Tiện Lợi" [level=3] [ref=e123]:
            - strong [ref=e125]: Tay Nắm Cửa Tiện Lợi
          - paragraph [ref=e126]: Tay nắm cửa cũng là một trong những phụ kiện cửa quan trọng, giúp tạo điểm nhấn thẩm mỹ cho không gian sống. Các loại tay nắm cửa hiện nay được thiết kế với kiểu dáng thanh lịch, dễ dàng sử dụng và phù hợp với nhiều loại cửa khác nhau. Bên cạnh đó, tay nắm cửa còn được làm từ các chất liệu cao cấp như inox, đồng, nhôm, không chỉ mang lại độ bền cao mà còn dễ vệ sinh, giúp cửa luôn giữ được vẻ đẹp sáng bóng theo thời gian.
          - heading "Dây Chắn Cửa và Chốt Cửa" [level=3] [ref=e127]:
            - strong [ref=e129]: Dây Chắn Cửa và Chốt Cửa
          - paragraph [ref=e130]: Dây chắn cửa và chốt cửa giúp bảo vệ gia đình bạn khỏi những sự cố không mong muốn như gió mạnh hay những tác động từ bên ngoài. Đây là những phụ kiện cửa đơn giản nhưng lại cực kỳ hữu ích trong việc tăng cường độ an toàn cho cửa và ngôi nhà của bạn. Các sản phẩm này giúp cửa luôn vững vàng, không bị ảnh hưởng bởi những yếu tố ngoại cảnh, giữ cho không gian sống luôn an toàn và yên bình.
          - heading "Tại Sao Nên Chọn Phụ Kiện Cửa An Toàn Và Tiện Nghi Của CÔNG TY TNHH CUNG ỨNG NỘI THẤT HÂN DI?" [level=2] [ref=e131]:
            - strong [ref=e134]: Tại Sao Nên Chọn Phụ Kiện Cửa An Toàn Và Tiện Nghi Của CÔNG TY TNHH CUNG ỨNG NỘI THẤT HÂN DI?
          - paragraph [ref=e135]:
            - strong [ref=e138]:
              - img "Tại Sao Nên Chọn Phụ Kiện Cửa An Toàn Và Tiện Nghi Của CÔNG TY TNHH CUNG ỨNG NỘI THẤT HÂN DI? tại hân di" [ref=e139]
          - paragraph [ref=e140]: CÔNG TY TNHH CUNG ỨNG NỘI THẤT HÂN DI luôn cam kết mang đến cho khách hàng những sản phẩm phụ kiện cửa an toàn và tiện nghi chất lượng cao, đáp ứng mọi nhu cầu của người tiêu dùng. Với hơn nhiều năm kinh nghiệm trong ngành cung cấp các giải pháp nội thất, chúng tôi tự hào là đơn vị cung cấp phụ kiện cửa uy tín và đáng tin cậy trên thị trường. Sản phẩm của chúng tôi được thiết kế và sản xuất với chất liệu cao cấp, mang đến sự bền bỉ, an toàn và tiện nghi tuyệt đối cho người sử dụng.
          - paragraph [ref=e141]: Chúng tôi cung cấp nhiều loại phụ kiện cửa phù hợp với từng loại cửa và yêu cầu sử dụng khác nhau. Từ những sản phẩm thông dụng như khóa cửa, bản lề, tay nắm, đến những sản phẩm chuyên dụng như khóa cửa thông minh, chốt cửa tự động, tất cả đều được lựa chọn kỹ càng và kiểm tra chất lượng nghiêm ngặt trước khi đến tay người tiêu dùng.
          - heading "Thông Tin Liên Hệ" [level=2] [ref=e142]:
            - strong [ref=e145]: Thông Tin Liên Hệ
          - paragraph [ref=e146]: "Hotline: 0934.004.552"
          - paragraph [ref=e147]: "Địa chỉ: 730/33/25 Lạc Long Quân, Phường Tân Hòa, TP Hồ Chí Minh, Việt Nam"
          - paragraph [ref=e148]: "Email: ngokimsang@gmail.com"
          - paragraph [ref=e149]: "Website: https://phukiennoithatbep.com/"
          - paragraph [ref=e150]: "Mã số thuế: 0315524871"
          - paragraph [ref=e151]: Phụ kiện cửa an toàn và tiện nghi không chỉ giúp nâng cao chất lượng cuộc sống mà còn bảo vệ không gian sống của bạn. Với sự kết hợp hoàn hảo giữa công nghệ và thiết kế, phụ kiện cửa của CÔNG TY TNHH CUNG ỨNG NỘI THẤT HÂN DI là lựa chọn tối ưu cho mọi gia đình. Hãy chọn ngay những sản phẩm phụ kiện cửa chất lượng để mang lại sự an toàn và tiện nghi tuyệt vời cho ngôi nhà của bạn.
          - link "Xem thêm NHÔM KÍNH ĐĂNG KHOA" [ref=e154] [cursor=pointer]:
            - /url: javascript:;
            - generic [ref=e155]:
              - text: Xem thêm
              - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e156]
      - generic [ref=e158]: Các Tin tức khác
      - generic [ref=e159]:
        - generic:
          - generic:
            - paragraph:
              - link "Bếp điện Hân Di kết hợp công nghệ và thiết kế (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (":
                - /url: bep-dien-han-di-ket-hop-cong-nghe-va-thiet-ke-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                - img "Bếp điện Hân Di kết hợp công nghệ và thiết kế (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) ("
            - generic:
              - generic: 15/08/2026 11:09 AM
              - heading "Bếp điện Hân Di kết hợp công nghệ và thiết kế (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (" [level=2]:
                - link "Bếp điện Hân Di kết hợp công nghệ và thiết kế (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (":
                  - /url: bep-dien-han-di-ket-hop-cong-nghe-va-thiet-ke-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
              - paragraph: Bếp điện Hân Di kết hợp công nghệ và thiết kế tinh tế giúp tiết kiệm thời gian, năng lượng và tạo không gian bếp sang trọng. Khám phá ngay tính năng vượt trội và sự tiện nghi
        - generic:
          - generic:
            - paragraph:
              - link "Bếp điện Hân Di kết hợp công nghệ và thiết kế (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (":
                - /url: bep-dien-han-di-ket-hop-cong-nghe-va-thiet-ke-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                - img "Bếp điện Hân Di kết hợp công nghệ và thiết kế (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) ("
            - generic:
              - generic: 15/08/2026 11:09 AM
              - heading "Bếp điện Hân Di kết hợp công nghệ và thiết kế (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (" [level=2]:
                - link "Bếp điện Hân Di kết hợp công nghệ và thiết kế (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (":
                  - /url: bep-dien-han-di-ket-hop-cong-nghe-va-thiet-ke-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
              - paragraph: Bếp điện Hân Di kết hợp công nghệ và thiết kế tinh tế giúp tiết kiệm thời gian, năng lượng và tạo không gian bếp sang trọng. Khám phá ngay tính năng vượt trội và sự tiện nghi
        - generic:
          - generic:
            - paragraph:
              - link "Bếp điện Hân Di kết hợp công nghệ và thiết kế (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (":
                - /url: bep-dien-han-di-ket-hop-cong-nghe-va-thiet-ke-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                - img "Bếp điện Hân Di kết hợp công nghệ và thiết kế (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) ("
            - generic:
              - generic: 15/08/2026 11:09 AM
              - heading "Bếp điện Hân Di kết hợp công nghệ và thiết kế (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (" [level=2]:
                - link "Bếp điện Hân Di kết hợp công nghệ và thiết kế (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (":
                  - /url: bep-dien-han-di-ket-hop-cong-nghe-va-thiet-ke-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
              - paragraph: Bếp điện Hân Di kết hợp công nghệ và thiết kế tinh tế giúp tiết kiệm thời gian, năng lượng và tạo không gian bếp sang trọng. Khám phá ngay tính năng vượt trội và sự tiện nghi
        - generic:
          - generic:
            - paragraph:
              - link "Bếp điện Hân Di kết hợp công nghệ và thiết kế (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (":
                - /url: bep-dien-han-di-ket-hop-cong-nghe-va-thiet-ke-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
                - img "Bếp điện Hân Di kết hợp công nghệ và thiết kế (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) ("
            - generic:
              - generic: 15/08/2026 11:09 AM
              - heading "Bếp điện Hân Di kết hợp công nghệ và thiết kế (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (" [level=2]:
                - link "Bếp điện Hân Di kết hợp công nghệ và thiết kế (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (":
                  - /url: bep-dien-han-di-ket-hop-cong-nghe-va-thiet-ke-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1
              - paragraph: Bếp điện Hân Di kết hợp công nghệ và thiết kế tinh tế giúp tiết kiệm thời gian, năng lượng và tạo không gian bếp sang trọng. Khám phá ngay tính năng vượt trội và sự tiện nghi
    - generic [ref=e160]:
      - generic [ref=e165]:
        - generic [ref=e166]:
          - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e167] [cursor=pointer]:
            - /url: https://cuanhomtruotquay.vn/
            - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e168]
          - generic [ref=e169]: XingFa Đăng Khoa mang đến những giải pháp nhôm kính chất lượng, kiến tạo không gian hiện đại, bền vững và nâng tầm giá trị cho mọi công trình.
          - paragraph [ref=e170]: THEO DÕI CHÚNG TÔI TẠI
          - generic [ref=e171]:
            - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e172] [cursor=pointer]:
              - /url: https://cuanhomtruotquay.vn/dich-vu
              - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e173]
            - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e174] [cursor=pointer]:
              - /url: ""
              - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e175]
            - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e176] [cursor=pointer]:
              - /url: ""
              - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e177]
            - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e178] [cursor=pointer]:
              - /url: ""
              - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e179]
            - link "NHÔM KÍNH ĐĂNG KHOA" [ref=e180] [cursor=pointer]:
              - /url: ""
              - img "NHÔM KÍNH ĐĂNG KHOA" [ref=e181]
        - generic [ref=e182]:
          - paragraph [ref=e183]: Sản phẩm
          - list [ref=e184]:
            - listitem [ref=e185]:
              - link "Cửa trượt quay" [ref=e186] [cursor=pointer]:
                - /url: cua-truot-quay
            - listitem [ref=e187]:
              - link "Cửa full phào" [ref=e188] [cursor=pointer]:
                - /url: cua-full-phao
            - listitem [ref=e189]:
              - link "Hệ cửa sổ giấu rèm" [ref=e190] [cursor=pointer]:
                - /url: he-cua-so-giau-rem
            - listitem [ref=e191]:
              - link "Cầu thang kính" [ref=e192] [cursor=pointer]:
                - /url: cau-thang-kinh
            - listitem [ref=e193]:
              - link "Cửa nhôm" [ref=e194] [cursor=pointer]:
                - /url: cua-nhom
        - generic [ref=e195]:
          - paragraph [ref=e196]: Dịch vụ
          - list [ref=e197]:
            - listitem [ref=e198]:
              - link "Thi công cửa full phào" [ref=e199] [cursor=pointer]:
                - /url: thi-cong-cua-full-phao
            - listitem [ref=e200]:
              - link "Thi công cửa nhôm trượt quay" [ref=e201] [cursor=pointer]:
                - /url: thi-cong-cua-nhom-truot-quay
        - generic [ref=e202]:
          - paragraph [ref=e203]: Thông tin liên hệ
          - paragraph [ref=e205]:
            - generic [ref=e206]: "Địa chỉ: 31/3 Thới Tứ, Tam Thôn, Hóc Môn"
            - generic [ref=e207]: "Tel: 0387191399"
            - generic [ref=e208]: "Email:"
            - link "khoanguyenksk@gmail.com" [ref=e209] [cursor=pointer]:
              - /url: mailto:khoanguyenksk@gmail.com
              - generic [ref=e216]: khoanguyenksk@gmail.com
      - generic [ref=e225]: Copyright ©2026 NHÔM KÍNH ĐĂNG KHOA. All Rights Reserved. Thiết kế Web MIMA
    - generic [ref=e226]:
      - 'link "Call me: 0387 191 399" [ref=e227] [cursor=pointer]':
        - /url: tel:0387191399
        - img [ref=e231]
        - generic [ref=e234]: "Call me: 0387 191 399"
      - 'link "Zalo: 0387191399" [ref=e235] [cursor=pointer]':
        - /url: https://zalo.me/0387191399
        - img [ref=e239]
        - generic [ref=e241]: "Zalo: 0387191399"
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
          - strong: Phụ kiện cửa an toàn và tiện nghi
        - generic:
          - generic: "🔑 Từ khóa:"
          - strong: N/A
    - generic [ref=e242]:
      - generic [ref=e243]: "❌ Chi tiết lỗi cần khắc phục (1/15):"
      - generic [ref=e244]:
        - generic [ref=e245]:
          - generic [ref=e246]: 9. Bảo mật
          - generic [ref=e247]: 1 lỗi
        - generic [ref=e248]:
          - strong [ref=e250]: "Mixed Content: 5 tài nguyên HTTP"
          - generic [ref=e251]: "⚠️ Phát hiện 5 tài nguyên HTTP trên HTTPS: http://code.mimadigi.com/code-t9-2025-noithathandi/upload/elfinder/tin-tuc/phu-kien-cua-an-toan-va-tien-nghi-giai-phap-hoan-hao-cho-moi-khong-gian.png, http://c..."
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