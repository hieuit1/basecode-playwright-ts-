const timestamp = Date.now().toString();

export const validBookingData = {
    name: `Test Booking ${timestamp}`,
    email: `booking${timestamp}@gmail.com`,
    phone: "0912345678",
    date: "2026-12-25",
    quantity: "2",
    content: "Booking for a special event.",
    priority: "high",
    severity: "critical"
};

export const invalidBookingCases = [
    {
        scenario: "bỏ trống tên",
        name: "",
        email: "booking@gmail.com",
        phone: "0912345678",
        date: "2026-12-25",
        quantity: "2",
        content: "Test content",
        priority: "high",
        severity: "critical"
    },
    {
        scenario: "bỏ trống số điện thoại",
        name: "Test Booking",
        email: "booking@gmail.com",
        phone: "",
        date: "2026-12-25",
        quantity: "2",
        content: "Test content",
        priority: "high",
        severity: "critical"
    },
    {
        scenario: "bỏ trống ngày đặt",
        name: "Test Booking",
        email: "booking@gmail.com",
        phone: "0912345678",
        date: "",
        quantity: "2",
        content: "Test content",
        priority: "high",
        severity: "critical"
    }
];
