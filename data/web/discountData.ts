export const discountData = {
    invalidCodes: [
        {
            code: 'KHONGTONTAI_' + Math.random().toString(36).substring(2, 8).toUpperCase(),
            description: 'Nhập mã không tồn tại',
            expectedMessage: 'Mã giảm giá không tồn tại hoặc đã hết hạn sử dụng!'
        },
        {
            code: '',
            description: 'Bỏ trống ô nhập rồi bấm Áp Dụng',
            expectedMessage: 'Vui lòng nhập mã ưu đãi'
        },
    ],
    hackCodes: [
        {
            code: "' OR 1=1 --",
            description: 'SQL Injection cơ bản (Cố gắng bypass query của Database)',
            expectedMessage: 'Mã giảm giá', // Message có thể khác nhau tùy lỗi (không tồn tại/không hợp lệ) nhưng miễn không sập là được
            isSecurity: true
        },
        {
            code: "<script>alert('hack')</script>",
            description: 'Cross-Site Scripting - XSS (Chèn mã độc JavaScript)',
            expectedMessage: 'Mã giảm giá',
            isSecurity: true
        },
        {
            code: 'A'.repeat(500), 
            description: 'Buffer Overflow (Nhập chuỗi ký tự dài bất thường để làm tràn bộ nhớ/chậm server)',
            expectedMessage: 'Mã giảm giá', 
            isSecurity: true
        },
        {
            code: 'DROP TABLE coupons;',
            description: 'Cố gắng thực thi lệnh phá hủy Database',
            expectedMessage: 'Mã giảm giá',
            isSecurity: true
        },
        {
            code: '../../etc/passwd',
            description: 'Directory Traversal (Lỗ hổng duyệt thư mục)',
            expectedMessage: 'Mã giảm giá',
            isSecurity: true
        }
    ]
};
