import { RECENTS_COLLECTION } from '@atlaskit/media-client/constants';
import { isRemoveFileFromRecentsAction } from '../actions/removeFileFromRecents';
export var removeFileFromRecents = function (store) { return function (next) { return function (action) {
    if (isRemoveFileFromRecentsAction(action)) {
        store
            .getState()
            .userMediaClient.collection.removeFile(action.userFileId || action.id, RECENTS_COLLECTION, action.occurrenceKey);
    }
    return next(action);
}; }; };
//# sourceMappingURL=removeFileFromRecents.js.map