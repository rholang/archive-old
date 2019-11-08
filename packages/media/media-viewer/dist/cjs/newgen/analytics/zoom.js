"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var index_1 = require("./index");
function createZoomEvent(zoomType, zoomScale) {
    return {
        eventType: 'ui',
        action: 'clicked',
        actionSubject: 'button',
        actionSubjectId: zoomType,
        attributes: tslib_1.__assign({ zoomScale: zoomScale }, index_1.packageAttributes),
    };
}
exports.createZoomEvent = createZoomEvent;
//# sourceMappingURL=zoom.js.map