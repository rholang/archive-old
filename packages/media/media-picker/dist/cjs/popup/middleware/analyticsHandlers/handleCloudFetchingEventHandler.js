"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var analytics_gas_types_1 = require("@atlaskit/analytics-gas-types");
var handleCloudFetchingEvent_1 = require("../../actions/handleCloudFetchingEvent");
var commonPayload = {
    actionSubject: 'mediaUpload',
    actionSubjectId: 'cloudMedia',
};
var fileAttributes = function (file) { return ({
    fileId: file.id,
    fileSize: file.size,
    fileMimetype: file.type,
    fileSource: 'mediapicker',
}); };
exports.default = (function (action, store) {
    if (handleCloudFetchingEvent_1.isHandleCloudFetchingEventAction(action)) {
        var event_1 = action.event, payload = action.payload, file = action.file;
        var remoteUpload = store.getState().remoteUploads[payload.uploadId];
        var timeStarted = (remoteUpload || { timeStarted: undefined }).timeStarted;
        var uploadDurationMsec = timeStarted !== undefined ? Date.now() - timeStarted : -1;
        if (event_1 === 'RemoteUploadStart') {
            return [
                tslib_1.__assign(tslib_1.__assign({ action: 'commenced' }, commonPayload), { attributes: {
                        fileAttributes: fileAttributes(file),
                    }, eventType: analytics_gas_types_1.OPERATIONAL_EVENT_TYPE }),
            ];
        }
        else if (event_1 === 'RemoteUploadEnd') {
            return [
                tslib_1.__assign(tslib_1.__assign({ action: 'uploaded' }, commonPayload), { attributes: {
                        fileAttributes: fileAttributes(file),
                        status: 'success',
                        uploadDurationMsec: uploadDurationMsec,
                    }, eventType: analytics_gas_types_1.TRACK_EVENT_TYPE }),
            ];
        }
        else if (event_1 === 'RemoteUploadFail') {
            return [
                tslib_1.__assign(tslib_1.__assign({ action: 'uploaded' }, commonPayload), { attributes: {
                        fileAttributes: fileAttributes(file),
                        status: 'fail',
                        uploadDurationMsec: uploadDurationMsec,
                    }, eventType: analytics_gas_types_1.TRACK_EVENT_TYPE }),
            ];
        }
        else {
            return [];
        }
    }
});
//# sourceMappingURL=handleCloudFetchingEventHandler.js.map