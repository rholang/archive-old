"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var analytics_gas_types_1 = require("@atlaskit/analytics-gas-types");
var fileUploadsStart_1 = require("../../actions/fileUploadsStart");
exports.default = (function (action) {
    if (fileUploadsStart_1.isFileUploadsStartAction(action)) {
        return action.files.map(function (file) {
            return ({
                action: 'commenced',
                actionSubject: 'mediaUpload',
                actionSubjectId: 'localMedia',
                attributes: {
                    fileAttributes: {
                        fileId: file.id,
                        fileSize: file.size,
                        fileMimetype: file.type,
                        fileSource: 'mediapicker',
                    },
                },
                eventType: analytics_gas_types_1.OPERATIONAL_EVENT_TYPE,
            });
        });
    }
});
//# sourceMappingURL=fileUploadsStartHandler.js.map