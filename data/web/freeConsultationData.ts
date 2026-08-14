const timestamp = Date.now().toString();

export const validFreeConsultationData = {
    name: `Khách Hàng ${timestamp}`,
    phone: "0912345678",
    priority: "high",
    severity: "critical"
};

export const invalidFreeConsultationCases = [
    {
        scenario: "bỏ trống tên",
        name: "",
        phone: "0912345678",
        priority: "high",
        severity: "critical"
    },
    {
        scenario: "bỏ trống số điện thoại",
        name: "Nguyễn Văn A",
        phone: "",
        priority: "high",
        severity: "critical"
    },
    {
        scenario: "số điện thoại sai định dạng",
        name: "Nguyễn Văn A",
        phone: "abcdefghij",
        priority: "medium",
        severity: "normal"
    },
    {
        scenario: "tấn công XSS vào tên",
        name: "<script>alert('hack')</script>",
        phone: "0912345678",
        priority: "high",
        severity: "critical"
    }
];
