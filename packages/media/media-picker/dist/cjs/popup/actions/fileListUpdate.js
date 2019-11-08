"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FILE_LIST_UPDATE = 'FILE_LIST_UPDATE';
function isFileListUpdateAction(action) {
    return action.type === exports.FILE_LIST_UPDATE;
}
exports.isFileListUpdateAction = isFileListUpdateAction;
function fileListUpdate(accountId, path, items, serviceName, currentCursor, nextCursor) {
    return {
        type: exports.FILE_LIST_UPDATE,
        accountId: accountId,
        path: path,
        items: items,
        currentCursor: currentCursor,
        nextCursor: nextCursor,
        serviceName: serviceName,
    };
}
exports.fileListUpdate = fileListUpdate;
//# sourceMappingURL=fileListUpdate.js.map