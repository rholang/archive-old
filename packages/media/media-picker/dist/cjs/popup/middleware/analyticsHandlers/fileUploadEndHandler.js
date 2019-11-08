"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var analytics_gas_types_1 = require("@atlaskit/analytics-gas-types");
var fileUploadEnd_1 = require("../../actions/fileUploadEnd");
exports.default = (function (action, store) {
    if (fileUploadEnd_1.isFileUploadEndAction(action)) {
        var file = action.file;
        var timeStarted = (store.getState().uploads[file.id] || {
            timeStarted: undefined,
        }).timeStarted;
        return [
            {
                action: 'uploaded',
                actionSubject: 'mediaUpload',
                actionSubjectId: 'localMedia',
                attributes: {
                    fileAttributes: {
                        fileSize: file.size,
                        fileMimetype: file.type,
                        fileId: file.id,
                        fileSource: 'mediapicker',
                    },
                    status: 'success',
                    uploadDurationMsec: timeStarted !== undefined ? Date.now() - timeStarted : -1,
                },
                eventType: analytics_gas_types_1.TRACK_EVENT_TYPE,
            },
        ];
    }
});
//# sourceMappingURL=fileUploadEndHandler.js.map