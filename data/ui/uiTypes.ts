/** Một node cấp cao quét được từ file Figma */
export interface FigmaFrame {
    id: string;
    name: string;
    /** Tên page (CANVAS) chứa frame này trong file Figma */
    page: string;
    x: number;
    y: number;
    /** Chiều rộng bản vẽ — cho biết frame này thiết kế cho nhóm viewport nào */
    width: number;
    height: number;
    type?: string;
}

/** Nguồn chuẩn dùng để đối chiếu giao diện */
export type BaselineKind = 'figma' | 'reference-site' | 'none';

/**
 * Nhóm viewport. Bản thiết kế và trang web chỉ đối chiếu được khi cùng nhóm —
 * so ảnh mobile 375px với bản vẽ desktop 1920px là vô nghĩa.
 */
export type ViewportTier = 'mobile' | 'tablet' | 'desktop';

export function viewportTier(width: number): ViewportTier {
    if (width < 600) return 'mobile';
    if (width < 1100) return 'tablet';
    return 'desktop';
}

/**
 * Vai trò của trang trong website, suy ra từ dữ liệu SEO đã sinh sẵn:
 *  - home:   trang chủ
 *  - hub:    trang có template riêng (SEO đánh dấu bằng checkCoreWebVitals)
 *  - sample: trang danh mục / chi tiết lấy mẫu đại diện
 */
export type TemplateKind = 'home' | 'hub' | 'sample';

/**
 * Một trang được chọn để test UI.
 *
 * Sinh từ data/seo/seoGeneratedData.ts nên KHÔNG phụ thuộc vào việc có Figma hay không.
 * Các trường figma* chỉ là phần làm giàu thêm: ghép được bản thiết kế thì trang đó có
 * chuẩn để đối chiếu, không ghép được thì vẫn test bằng các lớp kiểm tra nội tại.
 */
export interface UiPageTarget {
    name: string;
    path: string;
    templateKind: TemplateKind;
    figmaNodeId: string | null;
    figmaFrameName: string | null;
    /** Chiều rộng bản vẽ Figma — quyết định frame này đối chiếu được ở viewport nào */
    figmaFrameWidth: number | null;
    /** Độ khớp tên frame ↔ trang (0–1). 0 nghĩa là không ghép được thiết kế nào. */
    matchScore: number;
}

/** Cấu trúc file data/templates/scanned-figma-frames.json */
export interface ScannedFigmaFramesFile {
    timestamp: string;
    fileKey: string;
    frames: FigmaFrame[];
}
