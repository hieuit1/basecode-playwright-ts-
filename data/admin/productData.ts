const timestamp = Date.now().toString();
import * as path from 'path';

export const validProductData = {
    slug: `test-product-title-${timestamp}`,
    title: `Test Product Title ${timestamp}`,
    numb: "0",
    code: `SP-${timestamp}`,
    regularPrice: "1500000",
    salePrice: "1200000",
    discount: "20",
    descHtml: `Đây là mô tả sản phẩm được tự động tạo lúc ${timestamp}. Sản phẩm chất lượng cao.`,
    contentHtml: `Đây là nội dung chi tiết của sản phẩm được tự động tạo bởi automation script lúc ${timestamp}.
  
  Chi tiết tính năng:
  - Tính năng 1
  - Tính năng 2
  Đảm bảo chất lượng tốt nhất.`,
    thongsoHtml: `Thông số kỹ thuật:
  - Trọng lượng: 1kg
  - Kích thước: 10x10x10 cm
  - Chất liệu: Nhựa cao cấp`,
    imagePath: path.resolve(process.cwd(), "data/images/test-image.jpg"),
    galleryPaths: [
        path.resolve(process.cwd(), "data/images/test-image.jpg")
    ],
    // Dữ liệu tiếng Anh (optional) - chỉ được dùng khi web hỗ trợ 2 ngôn ngữ
    // Nếu web không có tab EN, bỏ object này hoặc để undefined
    enData: {
        titleEn: `Test Product Title EN ${timestamp}`,
        slugEn: `test-product-title-en-${timestamp}`,
        descEn: `This is an auto-generated product description at ${timestamp}. High quality product.`,
        contentEn: `This is the detailed content of the product auto-generated at ${timestamp}.\n\nFeature details:\n- Feature 1\n- Feature 2\nBest quality guaranteed.`,
        thongsoEn: `Technical specifications:\n- Weight: 1kg\n- Size: 10x10x10 cm\n- Material: Premium plastic`,
    }
};

export const invalidProductCases = [
    {
        scenario: "không nhập tiêu đề",
        title: "",
        slug: `test-product-${timestamp}`,
        numb: "0",
        code: `SP-${timestamp}`,
        regularPrice: "1500000",
        salePrice: "1200000",
        discount: "20",
        descHtml: "Mô tả sản phẩm",
        contentHtml: "Nội dung",
        thongsoHtml: "Thông số",
        imagePath: path.resolve(process.cwd(), "data/images/test-image.jpg"),
        galleryPaths: [],
        priority: "high",
        severity: "critical",
        assertionType: "form_block"
    },
    {
        scenario: "không nhập đường dẫn mẫu",
        title: `Test Product Title ${timestamp}`,
        slug: "",
        numb: "0",
        code: `SP-${timestamp}`,
        regularPrice: "1500000",
        salePrice: "1200000",
        discount: "20",
        descHtml: "Mô tả sản phẩm",
        contentHtml: "Nội dung",
        thongsoHtml: "Thông số",
        imagePath: path.resolve(process.cwd(), "data/images/test-image.jpg"),
        galleryPaths: [],
        priority: "high",
        severity: "critical",
        assertionType: "form_block"
    }
];
