export interface DiscountFormData {
    codeName: string;       // Tên mã giảm giá (VD: "AUTO_K7X3M2")
    percent: string;        // Phần trăm giảm (VD: "30")
    maxDiscount: string;    // Giảm tối đa VNĐ (VD: "100000")
    usageCount: string;     // Số lần sử dụng (VD: "50")
    expiryDate: string;     // Ngày hết hạn (format: mm/dd/yyyy)
    description: string;    // Mô tả
    isVisible: boolean;     // Checkbox Hiển thị
    isSpecial: boolean;     // Checkbox Đặc biệt
}

export class DiscountDataGenerator {

    // ===== PRIVATE HELPERS =====

    /**
     * Sinh chuỗi random gồm chữ cái viết hoa và số
     */
    private static randomString(length: number): string {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    /**
     * Sinh số ngẫu nhiên trong khoảng [min, max]
     */
    private static randomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Format ngày theo dạng mm/dd/yyyy (đúng format input trên admin)
     */
    private static formatDate(date: Date): string {
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
        return `${year}-${month}-${day}`;
    }

    // ===== PUBLIC GENERATORS =====

    /**
     * Sinh tên mã giảm giá ngẫu nhiên
     * VD: "AUTO_K7X3M2", "AUTO_9BF4YP"
     */
    static generateCodeName(): string {
        return `AUTO_${this.randomString(6)}`;
    }

    /**
     * Sinh phần trăm giảm giá ngẫu nhiên (10% - 50%)
     */
    static generatePercent(): string {
        return String(this.randomInt(10, 50));
    }

    /**
     * Sinh giá giảm tối đa ngẫu nhiên (50.000đ - 200.000đ)
     * Luôn là bội số của 10.000
     */
    static generateMaxDiscount(): string {
        return String(this.randomInt(5, 20) * 10000);
    }

    /**
     * Sinh số lần sử dụng ngẫu nhiên (10 - 100)
     */
    static generateUsageCount(): string {
        return String(this.randomInt(10, 100));
    }

    /**
     * Sinh ngày hết hạn: 30 ngày kể từ hôm nay
     */
    static generateFutureExpiryDate(): string {
        const future = new Date();
        future.setDate(future.getDate() + 30);
        return this.formatDate(future);
    }

    /**
     * Sinh ngày đã qua: 30 ngày trước (dùng cho negative test)
     */
    static generatePastExpiryDate(): string {
        const past = new Date();
        past.setDate(past.getDate() - 30);
        return this.formatDate(past);
    }

    // ===== DATA PRESETS =====
    static generateValidDiscount(): DiscountFormData {
        const codeName = this.generateCodeName();
        return {
            codeName,
            percent: this.generatePercent(),
            maxDiscount: this.generateMaxDiscount(),
            usageCount: this.generateUsageCount(),
            expiryDate: this.generateFutureExpiryDate(),
            description: `Mã test tự động: ${codeName}`,
            isVisible: true,
            isSpecial: false,
        };
    }


    /**
     * Sinh data mã giảm giá đã cạn kiệt lượt dùng
     */
    static generateExhaustedDiscount(): DiscountFormData {
        const codeName = this.generateCodeName();
        return {
            codeName,
            percent: this.generatePercent(),
            maxDiscount: this.generateMaxDiscount(),
            usageCount: "0",
            expiryDate: this.generateFutureExpiryDate(),
            description: `Mã test tự động (Hết lượt): ${codeName}`,
            isVisible: true,
            isSpecial: false,
        };
    }
}
