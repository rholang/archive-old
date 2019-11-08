"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var analytics_gas_types_1 = require("@atlaskit/analytics-gas-types");
var fileUploadError_1 = require("../../actions/fileUploadError");
exports.default = (function (action, store) {
    if (fileUploadError_1.isFileUploadErrorAction(action)) {
        var uploadFile = action.file;
        var currentUploads = store.getState().uploads;
        var timeStarted = (currentUploads[uploadFile.id] || {
            timeStarted: undefined,
        }).timeStarted;
        return [
            {
                action: 'uploaded',
                actionSubject: 'mediaUpload',
                actionSubjectId: 'localMedia',
                attributes: {
                    fileAttributes: {
                        fileId: uploadFile.id,
                        fileSize: uploadFile.size,
                        fileSource: 'mediapicker',
                    },
                    status: 'fail',
                    failReason: action.error.description,
                    uploadDurationMsec: timeStarted !== undefined ? Date.now() - timeStarted : -1,
                },
                eventType: analytics_gas_types_1.TRACK_EVENT_TYPE,
            },
        ];
    }
});
//# sourceMappingURL=fileUploadErrorHandler.js.map