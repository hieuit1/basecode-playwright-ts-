const timestamp = Date.now().toString();

export const validNewsletterData = {
    name: `Test User ${timestamp}`,
    email: `test${timestamp}@gmail.com`,
    phone: "0912345678",
    content: "This is a test content for the newsletter form.",
    priority: "high",
    severity: "critical"
};

export const invalidNewsletterCases = [
    {
        scenario: "bỏ trống tên",
        name: "",
        email: "test@gmail.com",
        phone: "0912345678",
        content: "Test content",
        priority: "high",
        severity: "critical"
    },
    {
        scenario: "bỏ trống điện thoại",
        name: "Test User",
        email: "test@gmail.com",
        phone: "",
        content: "Test content",
        priority: "high",
        severity: "critical"
    },
    {
        scenario: "số điện thoại quá ngắn",
        name: "Test User",
        email: "test@gmail.com",
        phone: "0912",
        content: "Test content",
        priority: "medium",
        severity: "normal"
    },
    {
        scenario: "tấn công XSS",
        name: "<script>alert('hack')</script>",
        email: "test@gmail.com",
        phone: "0912345678",
        content: "Test content",
        priority: "high",
        severity: "critical"
    }
];
