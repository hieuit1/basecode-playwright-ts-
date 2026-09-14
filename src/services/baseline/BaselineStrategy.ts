import { TestInfo } from '@playwright/test';
import * as path from 'path';
import { BaselineKind, UiPageTarget, viewportTier } from '../../../data/ui/uiTypes';
import { FigmaService } from '../FigmaService';

/**
 * Tầng trừu tượng cho "chuẩn để đối chiếu giao diện".
 *
 * Tool chạy trên nhiều loại website nên không thể hardcode chuẩn là Figma:
 *   1. Web có bản thiết kế Figma          → FigmaBaseline
 *   2. Web cào lại từ web khách cũ còn sống → ReferenceSiteBaseline (chưa làm)
 *   3. Web cào rồi đè lên chính tên miền cũ → NoBaseline, không còn gì để so
 *
 * Chuẩn được chọn theo TỪNG TRANG và TỪNG VIEWPORT, không theo website: ngay cả web
 * loại 1 cũng chỉ có vài trang được thiết kế, và bản vẽ desktop thì không dùng để
 * đối chiếu ảnh mobile được.
 *
 * Trang không có chuẩn KHÔNG bị bỏ qua — nó chỉ không chạy lớp đối chiếu ảnh, còn các
 * lớp kiểm tra nội tại (đồng bộ design token, hiệu ứng, heuristic UX, cross-viewport)
 * vẫn chạy bình thường.
 */

export interface BaselineContext {
    /** Chiều rộng viewport thực tế của test đang chạy */
    viewportWidth: number;
    /** Tên project Playwright, dùng để đặt tên ảnh và hiển thị trong báo cáo */
    viewportName: string;
}

export interface BaselineImage {
    kind: BaselineKind;
    /** Đường dẫn ảnh chuẩn trên đĩa */
    path: string;
    /** Nhãn hiển thị trong Allure */
    label: string;
}

export interface BaselineStrategy {
    readonly kind: BaselineKind;
    /** Trả về ảnh chuẩn, hoặc null khi trang/viewport này không có chuẩn để đối chiếu */
    getExpected(
        target: UiPageTarget,
        ctx: BaselineContext,
        testInfo: TestInfo
    ): Promise<BaselineImage | null>;
}

// ─────────────────────────────────────────────────────────────
// 1. Chuẩn là bản thiết kế Figma
// ─────────────────────────────────────────────────────────────
export class FigmaBaseline implements BaselineStrategy {
    readonly kind = 'figma' as const;
    private static service: FigmaService | null = null;

    /** Khởi tạo trễ: website không dùng Figma thì không bao giờ tạo service */
    private static getService(): FigmaService {
        if (!this.service) this.service = new FigmaService();
        return this.service;
    }

    async getExpected(
        target: UiPageTarget,
        ctx: BaselineContext,
        testInfo: TestInfo
    ): Promise<BaselineImage | null> {
        const fileKey = process.env.UI_TEST_FIGMA_FILE_KEY || '';
        if (!fileKey || !target.figmaNodeId) return null;
        if (!matchesViewport(target, ctx.viewportWidth)) return null;

        // Ảnh Figma không đổi theo viewport nên cache ở cấp project, dùng chung mọi test.
        const safeId = target.figmaNodeId.replace(/[^a-z0-9]/gi, '_');
        const cachePath = path.join(testInfo.project.outputDir, `figma_${safeId}.png`);

        await FigmaBaseline.getService().downloadSnapshot(fileKey, target.figmaNodeId, cachePath);

        return {
            kind: this.kind,
            path: cachePath,
            label: `Figma — ${target.figmaFrameName}`
        };
    }
}

// ─────────────────────────────────────────────────────────────
// 2. Không có chuẩn ngoài
// ─────────────────────────────────────────────────────────────
export class NoBaseline implements BaselineStrategy {
    readonly kind = 'none' as const;

    async getExpected(): Promise<BaselineImage | null> {
        return null;
    }
}

// ─────────────────────────────────────────────────────────────
// Chọn chuẩn cho một trang
// ─────────────────────────────────────────────────────────────
export function resolveBaseline(target: UiPageTarget): BaselineStrategy {
    if (target.figmaNodeId && process.env.UI_TEST_FIGMA_FILE_KEY) {
        return new FigmaBaseline();
    }

    // TODO (web loại 2 — cào từ web khách cũ): khi có UI_REFERENCE_URL thì trả về
    // ReferenceSiteBaseline, chụp cùng path trên web cũ ở đúng viewport này rồi so.
    // Cách so chưa chốt (structural diff / pixel / AI) nên tạm thời chưa cắm vào.

    return new NoBaseline();
}

/**
 * Kiểm tra đồng bộ: trang này có chuẩn để đối chiếu ở viewport này không.
 * Dùng cho test.skip() ở đầu test body, tránh phải gọi API rồi mới biết là bỏ qua.
 */
export function hasBaseline(target: UiPageTarget, viewportWidth: number): boolean {
    if (target.figmaNodeId && process.env.UI_TEST_FIGMA_FILE_KEY) {
        return matchesViewport(target, viewportWidth);
    }
    return false;
}

/**
 * Bản vẽ chỉ đối chiếu được với viewport cùng nhóm.
 * Designer thường chỉ vẽ desktop, nên mobile/tablet sẽ tự động không có chuẩn và rơi
 * về các lớp nội tại — đúng hơn là ép so rồi báo lỗi sai hàng loạt.
 */
function matchesViewport(target: UiPageTarget, viewportWidth: number): boolean {
    // Không biết chiều rộng bản vẽ (data cũ) thì chấp nhận, để không chặn nhầm.
    if (!target.figmaFrameWidth) return true;
    return viewportTier(target.figmaFrameWidth) === viewportTier(viewportWidth);
}
