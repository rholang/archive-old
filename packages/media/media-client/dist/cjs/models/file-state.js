"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
exports.isErrorFileState = function (fileState) {
    return fileState.status === 'error';
};
exports.isImageRepresentationReady = function (fileState) {
    switch (fileState.status) {
        case 'processing':
        case 'processed':
        case 'failed-processing':
            return !!(fileState.representations && fileState.representations.image);
        default:
            return false;
    }
};
exports.mapMediaFileToFileState = function (mediaFile) {
    var _a = mediaFile.data, id = _a.id, name = _a.name, size = _a.size, processingStatus = _a.processingStatus, artifacts = _a.artifacts, mediaType = _a.mediaType, mimeType = _a.mimeType, representations = _a.representations;
    var baseState = {
        id: id,
        name: name,
        size: size,
        mediaType: mediaType,
        mimeType: mimeType,
        artifacts: artifacts,
        representations: representations,
    };
    switch (processingStatus) {
        case 'pending':
        case undefined:
            return tslib_1.__assign(tslib_1.__assign({}, baseState), { status: 'processing' });
        case 'succeeded':
            return tslib_1.__assign(tslib_1.__assign({}, baseState), { status: 'processed' });
        case 'failed':
            return tslib_1.__assign(tslib_1.__assign({}, baseState), { status: 'failed-processing' });
    }
};
exports.mapMediaItemToFileState = function (id, item) {
    return exports.mapMediaFileToFileState({
        data: tslib_1.__assign({ id: id }, item),
    });
};
//# sourceMappingURL=file-state.js.map