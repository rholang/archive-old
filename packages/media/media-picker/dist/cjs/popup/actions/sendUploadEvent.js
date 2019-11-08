"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEND_UPLOAD_EVENT = 'SEND_UPLOAD_EVENT';
function isSendUploadEventAction(action) {
    return action.type === exports.SEND_UPLOAD_EVENT;
}
exports.isSendUploadEventAction = isSendUploadEventAction;
function sendUploadEvent(payload) {
    return {
        type: exports.SEND_UPLOAD_EVENT,
        payload: payload,
    };
}
exports.sendUploadEvent = sendUploadEvent;
//# sourceMappingURL=sendUploadEvent.js.map