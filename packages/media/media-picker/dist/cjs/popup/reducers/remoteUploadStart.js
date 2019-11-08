"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var remoteUploadStart_1 = require("../actions/remoteUploadStart");
function remoteUploadStart(state, action) {
    if (action.type === remoteUploadStart_1.REMOTE_UPLOAD_START) {
        var uploadId = action.uploadId;
        var remoteUploads = tslib_1.__assign({}, state.remoteUploads);
        remoteUploads[uploadId] = {
            timeStarted: Date.now(),
        };
        return tslib_1.__assign(tslib_1.__assign({}, state), { remoteUploads: remoteUploads });
    }
    return state;
}
exports.default = remoteUploadStart;
//# sourceMappingURL=remoteUploadStart.js.map