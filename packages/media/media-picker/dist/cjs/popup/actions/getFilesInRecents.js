"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_FILES_IN_RECENTS = 'GET_FILES_IN_RECENTS';
exports.isGetFilesInRecentsAction = function (action) {
    return action.type === exports.GET_FILES_IN_RECENTS;
};
exports.getFilesInRecents = function () {
    return {
        type: exports.GET_FILES_IN_RECENTS,
    };
};
exports.GET_FILES_IN_RECENTS_FULLFILLED = 'GET_FILES_IN_RECENTS_FULLFILLED';
exports.isGetFilesInRecentsFullfilledAction = function (action) {
    return action.type === exports.GET_FILES_IN_RECENTS_FULLFILLED;
};
function getFilesInRecentsFullfilled(items) {
    return {
        type: exports.GET_FILES_IN_RECENTS_FULLFILLED,
        items: items,
    };
}
exports.getFilesInRecentsFullfilled = getFilesInRecentsFullfilled;
exports.GET_FILES_IN_RECENTS_FAILED = 'GET_FILES_IN_RECENTS_FAILED';
exports.isGetFilesInRecentsFailedAction = function (action) {
    return action.type === exports.GET_FILES_IN_RECENTS_FAILED;
};
function getFilesInRecentsFailed() {
    return {
        type: exports.GET_FILES_IN_RECENTS_FAILED,
    };
}
exports.getFilesInRecentsFailed = getFilesInRecentsFailed;
//# sourceMappingURL=getFilesInRecents.js.map