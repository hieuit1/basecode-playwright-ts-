import * as fs from 'fs';
import * as path from 'path';

export class FeatureHelper {
    private static featureData: any = null;

    private static loadData() {
        if (!this.featureData) {
            try {
                const dataPath = path.resolve(__dirname, '../../data/templates/scanned-frontend.json');
                if (fs.existsSync(dataPath)) {
                    const rawData = fs.readFileSync(dataPath, 'utf-8');
                    this.featureData = JSON.parse(rawData);
                } else {
                    this.featureData = { features: {} };
                }
            } catch (error) {
                console.error("Lỗi đọc file scanned-features.json:", error);
                this.featureData = { features: {} };
            }
        }
    }

    /**
     * Kiểm tra xem website có chức năng tìm kiếm không (dựa trên kết quả quét tự động)
     */
    static hasSearchFeature(): boolean {
        this.loadData();
        return this.featureData?.features?.search === true;
    }

    /**
     * Kiểm tra xem website có chức năng đăng ký nhận tin không
     */
    static hasNewsletterFeature(): boolean {
        this.loadData();
        return this.featureData?.features?.newsletter === true;
    }

    /**
     * Kiểm tra xem website có chức năng form tư vấn miễn phí không
     */
    static hasFreeConsultationFeature(): boolean {
        this.loadData();
        return this.featureData?.features?.freeConsultation === true;
    }

    /**
     * Kiểm tra xem website có chức năng đặt bàn không
     */
    static hasBookingFeature(): boolean {
        this.loadData();
        return this.featureData?.features?.booking === true;
    }

    /**
     * Kiểm tra xem website có chức năng giỏ hàng không
     */
    static hasCartFeature(): boolean {
        this.loadData();
        return this.featureData?.features?.cart === true;
    }

    /**
     * Lấy URL trang chi tiết sản phẩm đã quét được
     */
    static getProductUrlForConsultation(): string {
        this.loadData();
        return this.featureData?.productUrlForConsultation || '';
    }
}
