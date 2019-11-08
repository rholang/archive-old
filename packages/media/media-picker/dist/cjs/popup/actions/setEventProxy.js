"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SET_EVENT_PROXY = 'SET_EVENT_PROXY';
exports.setEventProxy = function (itemId, uploadId) {
    return {
        type: exports.SET_EVENT_PROXY,
        itemId: itemId,
        uploadId: uploadId,
    };
};
//# sourceMappingURL=setEventProxy.js.map