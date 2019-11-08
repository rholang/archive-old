import { __assign } from "tslib";
import { REMOTE_UPLOAD_START, } from '../actions/remoteUploadStart';
export default function remoteUploadStart(state, action) {
    if (action.type === REMOTE_UPLOAD_START) {
        var uploadId = action.uploadId;
        var remoteUploads = __assign({}, state.remoteUploads);
        remoteUploads[uploadId] = {
            timeStarted: Date.now(),
        };
        return __assign(__assign({}, state), { remoteUploads: remoteUploads });
    }
    return state;
}
//# sourceMappingURL=remoteUploadStart.js.map