"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var unlinkCloudAccount_1 = require("../actions/unlinkCloudAccount");
var changeCloudAccountFolder_1 = require("../actions/changeCloudAccountFolder");
var fileListUpdate_1 = require("../actions/fileListUpdate");
exports.changeCloudAccountFolderMiddleware = function (fetcher) { return function (store) { return function (next) { return function (action) {
    if (changeCloudAccountFolder_1.isChangeCloudAccountFolderAction(action)) {
        var userMediaClient = store.getState().userMediaClient;
        var serviceName_1 = action.serviceName, accountId_1 = action.accountId, path_1 = action.path;
        var lastPath_1 = path_1.length === 0 ? { id: '', name: '' } : path_1[path_1.length - 1];
        userMediaClient.config
            .authProvider()
            .then(function (auth) {
            return fetcher.fetchCloudAccountFolder(auth, serviceName_1, accountId_1, lastPath_1.id);
        })
            .then(function (folder) {
            return store.dispatch(fileListUpdate_1.fileListUpdate(accountId_1, path_1, folder.items, serviceName_1, undefined, folder.cursor));
        })
            .catch(function (error) {
            /* TODO: Error Collector */
            if (error.response && error.response.status === 401) {
                store.dispatch(unlinkCloudAccount_1.requestUnlinkCloudAccount({ id: accountId_1, name: serviceName_1 }));
            }
        });
    }
    return next(action);
}; }; }; };
//# sourceMappingURL=changeCloudAccountFolder.js.map