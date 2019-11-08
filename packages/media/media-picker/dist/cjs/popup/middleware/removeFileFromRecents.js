"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("@atlaskit/media-client/constants");
var removeFileFromRecents_1 = require("../actions/removeFileFromRecents");
exports.removeFileFromRecents = function (store) { return function (next) { return function (action) {
    if (removeFileFromRecents_1.isRemoveFileFromRecentsAction(action)) {
        store
            .getState()
            .userMediaClient.collection.removeFile(action.userFileId || action.id, constants_1.RECENTS_COLLECTION, action.occurrenceKey);
    }
    return next(action);
}; }; };
//# sourceMappingURL=removeFileFromRecents.js.map