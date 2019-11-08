"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var index_1 = require("./index");
var getBasePayload = function (actionSubjectId) { return ({
    eventType: 'ui',
    action: 'clicked',
    actionSubject: 'button',
    actionSubjectId: actionSubjectId,
}); };
var getBaseAttributes = function (fileState) { return (tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, index_1.fileStateToFileGasPayload(fileState)), { fileProcessingStatus: fileState.status }), index_1.packageAttributes)); };
var downloadEvent = function (fileState, actionSubjectId, failReason) {
    var basePayload = getBasePayload(actionSubjectId);
    var baseAttributes = failReason
        ? tslib_1.__assign(tslib_1.__assign({}, getBaseAttributes(fileState)), { failReason: failReason }) : getBaseAttributes(fileState);
    switch (fileState.status) {
        case 'processed':
        case 'uploading':
        case 'processing':
        case 'failed-processing':
            return tslib_1.__assign(tslib_1.__assign({}, basePayload), { attributes: tslib_1.__assign(tslib_1.__assign({}, baseAttributes), { fileSupported: fileState.mediaType !== 'unknown' }) });
        case 'error':
            return tslib_1.__assign(tslib_1.__assign({}, basePayload), { attributes: tslib_1.__assign({}, baseAttributes) });
    }
};
function downloadErrorButtonEvent(state, err) {
    return downloadEvent(state, 'failedPreviewDownloadButton', err.errorName);
}
exports.downloadErrorButtonEvent = downloadErrorButtonEvent;
function downloadButtonEvent(state) {
    return downloadEvent(state, 'downloadButton');
}
exports.downloadButtonEvent = downloadButtonEvent;
//# sourceMappingURL=download.js.map