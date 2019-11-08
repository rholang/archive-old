"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHANGE_CLOUD_ACCOUNT_FOLDER = 'CHANGE_CLOUD_ACCOUNT_FOLDER';
function changeCloudAccountFolder(serviceName, accountId, path) {
    return {
        type: exports.CHANGE_CLOUD_ACCOUNT_FOLDER,
        serviceName: serviceName,
        accountId: accountId,
        path: path,
    };
}
exports.changeCloudAccountFolder = changeCloudAccountFolder;
function isChangeCloudAccountFolderAction(action) {
    return action.type === exports.CHANGE_CLOUD_ACCOUNT_FOLDER;
}
exports.isChangeCloudAccountFolderAction = isChangeCloudAccountFolderAction;
//# sourceMappingURL=changeCloudAccountFolder.js.map