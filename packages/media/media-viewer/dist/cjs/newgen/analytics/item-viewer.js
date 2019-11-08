"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var index_1 = require("./index");
exports.mediaFileCommencedEvent = function (id) {
    return {
        eventType: 'operational',
        action: 'commenced',
        actionSubject: 'mediaFile',
        actionSubjectId: id,
        attributes: tslib_1.__assign({ fileId: id }, index_1.packageAttributes),
    };
};
exports.mediaFileLoadSucceededEvent = function (file) {
    return {
        eventType: 'operational',
        actionSubject: 'mediaFile',
        action: 'loadSucceeded',
        actionSubjectId: file.id,
        attributes: tslib_1.__assign(tslib_1.__assign({ status: 'success' }, index_1.fileStateToFileGasPayload(file)), index_1.packageAttributes),
    };
};
exports.mediaFileLoadFailedEvent = function (id, failReason, file) {
    var fileAttributes = file
        ? index_1.fileStateToFileGasPayload(file)
        : {
            fileId: id,
        };
    return {
        eventType: 'operational',
        actionSubject: 'mediaFile',
        action: 'loadFailed',
        actionSubjectId: id,
        attributes: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ status: 'fail' }, fileAttributes), { failReason: failReason }), index_1.packageAttributes),
    };
};
exports.mediaPreviewFailedEvent = function (failReason, fileState) {
    var fileId = fileState ? fileState.id : undefined;
    var fileAttributes = fileState && index_1.fileStateToFileGasPayload(fileState);
    return {
        eventType: 'operational',
        actionSubject: 'mediaFile',
        action: 'previewFailed',
        actionSubjectId: fileId,
        attributes: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ status: 'fail' }, fileAttributes), { failReason: failReason }), index_1.packageAttributes),
    };
};
//# sourceMappingURL=item-viewer.js.map