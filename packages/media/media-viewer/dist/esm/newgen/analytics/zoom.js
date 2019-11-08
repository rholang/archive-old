import { __assign } from "tslib";
import { packageAttributes } from './index';
export function createZoomEvent(zoomType, zoomScale) {
    return {
        eventType: 'ui',
        action: 'clicked',
        actionSubject: 'button',
        actionSubjectId: zoomType,
        attributes: __assign({ zoomScale: zoomScale }, packageAttributes),
    };
}
//# sourceMappingURL=zoom.js.map