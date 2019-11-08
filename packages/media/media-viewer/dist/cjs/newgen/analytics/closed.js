"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var index_1 = require("./index");
var media_viewer_1 = require("../media-viewer");
function closedEvent(input) {
    return {
        eventType: 'ui',
        action: 'closed',
        actionSubject: 'mediaViewer',
        actionSubjectId: undefined,
        attributes: tslib_1.__assign(tslib_1.__assign({}, index_1.packageAttributes), { sessionDurationMs: media_viewer_1.MediaViewerComponent.timerElapsed(), input: input }),
    };
}
exports.closedEvent = closedEvent;
//# sourceMappingURL=closed.js.map