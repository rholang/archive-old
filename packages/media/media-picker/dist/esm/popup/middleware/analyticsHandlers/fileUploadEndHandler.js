import { TRACK_EVENT_TYPE } from '@atlaskit/analytics-gas-types';
import { isFileUploadEndAction } from '../../actions/fileUploadEnd';
export default (function (action, store) {
    if (isFileUploadEndAction(action)) {
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
                eventType: TRACK_EVENT_TYPE,
            },
        ];
    }
});
//# sourceMappingURL=fileUploadEndHandler.js.map