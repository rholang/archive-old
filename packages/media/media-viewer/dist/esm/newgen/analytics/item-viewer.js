import { __assign } from "tslib";
import { packageAttributes, fileStateToFileGasPayload } from './index';
export var mediaFileCommencedEvent = function (id) {
    return {
        eventType: 'operational',
        action: 'commenced',
        actionSubject: 'mediaFile',
        actionSubjectId: id,
        attributes: __assign({ fileId: id }, packageAttributes),
    };
};
export var mediaFileLoadSucceededEvent = function (file) {
    return {
        eventType: 'operational',
        actionSubject: 'mediaFile',
        action: 'loadSucceeded',
        actionSubjectId: file.id,
        attributes: __assign(__assign({ status: 'success' }, fileStateToFileGasPayload(file)), packageAttributes),
    };
};
export var mediaFileLoadFailedEvent = function (id, failReason, file) {
    var fileAttributes = file
        ? fileStateToFileGasPayload(file)
        : {
            fileId: id,
        };
    return {
        eventType: 'operational',
        actionSubject: 'mediaFile',
        action: 'loadFailed',
        actionSubjectId: id,
        attributes: __assign(__assign(__assign({ status: 'fail' }, fileAttributes), { failReason: failReason }), packageAttributes),
    };
};
export var mediaPreviewFailedEvent = function (failReason, fileState) {
    var fileId = fileState ? fileState.id : undefined;
    var fileAttributes = fileState && fileStateToFileGasPayload(fileState);
    return {
        eventType: 'operational',
        actionSubject: 'mediaFile',
        action: 'previewFailed',
        actionSubjectId: fileId,
        attributes: __assign(__assign(__assign({ status: 'fail' }, fileAttributes), { failReason: failReason }), packageAttributes),
    };
};
//# sourceMappingURL=item-viewer.js.map