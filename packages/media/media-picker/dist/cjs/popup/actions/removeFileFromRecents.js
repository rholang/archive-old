"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REMOVE_FILES_FROM_RECENTS = 'REMOVE_FILES_FROM_RECENTS';
exports.isRemoveFileFromRecentsAction = function (action) {
    return action.type === exports.REMOVE_FILES_FROM_RECENTS;
};
exports.removeFileFromRecents = function (id, occurrenceKey) {
    return {
        type: exports.REMOVE_FILES_FROM_RECENTS,
        id: id,
        occurrenceKey: occurrenceKey,
    };
};
//# sourceMappingURL=removeFileFromRecents.js.map