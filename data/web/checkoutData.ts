export const checkoutTestConfig = {
    customer: {
        fullname: "Hiếu Trần Test Auto",
        phone: "0912345678",
        email: "test.auto@mima.com",
        address: "Số 1, Phố Tràng Tiền",
        requirements: "Giao hàng giờ hành chính. Xin cảm ơn!"
    },
    paymentMethods: {
        cod: "Thanh toán khi nhận hàng",
        bank: "Thanh toán qua ngân hàng"
    }
};

export const invalidCheckoutCases = [
    {
        scenario: "không nhập họ tên",
        fullname: "",
        phone: "0912345678",
        email: "test.auto@mima.com",
        address: "Số 1, Phố Tràng Tiền",
        requirements: "Giao hàng giờ hành chính. Xin cảm ơn!",
        priority: "high",
        severity: "critical",
    },
    {
        scenario: "không nhập số điện thoại",
        fullname: "Hiếu Trần Test Auto",
        phone: "",
        email: "test.auto@mima.com",
        address: "Số 1, Phố Tràng Tiền",
        requirements: "Giao hàng giờ hành chính. Xin cảm ơn!",
        priority: "high",
        severity: "critical",
    },
    {
        scenario: "nhập số điện thoại sai định dạng",
        fullname: "Hiếu Trần Test Auto",
        phone: "090",
        email: "test.auto@mima.com",
        address: "Số 1, Phố Tràng Tiền",
        requirements: "Giao hàng giờ hành chính. Xin cảm ơn!",
        priority: "medium",
        severity: "normal",
    },
    {
        scenario: "không nhập địa chỉ",
        fullname: "Hiếu Trần Test Auto",
        phone: "0912345678",
        email: "test.auto@mima.com",
        address: "",
        requirements: "Giao hàng giờ hành chính. Xin cảm ơn!",
        priority: "high",
        severity: "critical",
    },
    {
        scenario: "nhập email sai định dạng",
        fullname: "Hiếu Trần Test Auto",
        phone: "0912345678",
        email: "email_khong_hop_le",
        address: "Số 1, Phố Tràng Tiền",
        requirements: "Giao hàng giờ hành chính. Xin cảm ơn!",
        priority: "medium",
        severity: "normal",
    },
    {
        scenario: "tấn công XSS",
        fullname: "<script>alert('hack')</script>",
        phone: "0912345",
        email: "test.hacker@[IP_ADDRESS]",
        address: "Số 1, Phố Tràng Tiền",
        requirements: "Giao hàng giờ hành chính. Xin cảm ơn!",
        priority: "low",
        severity: "minor",
    }
];
