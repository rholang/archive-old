"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fetchNextCloudFilesPage_1 = require("../actions/fetchNextCloudFilesPage");
var fileListUpdate_1 = require("../actions/fileListUpdate");
var unlinkCloudAccount_1 = require("../actions/unlinkCloudAccount");
exports.fetchNextCloudFilesPageMiddleware = function (fetcher) { return function (store) { return function (next) { return function (action) {
    if (fetchNextCloudFilesPage_1.isFetchNextCloudFilesPageAction(action)) {
        var userMediaClient = store.getState().userMediaClient;
        var serviceName_1 = action.serviceName, accountId_1 = action.accountId, path_1 = action.path;
        var folderId_1 = (path_1[path_1.length - 1] || { id: '' }).id;
        var view = store.getState().view;
        var cursor_1 = view && view.nextCursor;
        var items_1 = (view && view.items) || [];
        userMediaClient.config
            .authProvider()
            .then(function (auth) {
            return fetcher.fetchCloudAccountFolder(auth, serviceName_1, accountId_1, folderId_1, cursor_1);
        })
            .then(function (folder) {
            return store.dispatch(fileListUpdate_1.fileListUpdate(accountId_1, path_1, items_1.concat(folder.items), serviceName_1, cursor_1, folder.cursor));
        })
            .catch(function (error) {
            /* TODO: error collector */
            if (error.response && error.response.status === 401) {
                store.dispatch(unlinkCloudAccount_1.requestUnlinkCloudAccount({ id: accountId_1, name: serviceName_1 }));
            }
        });
    }
    return next(action);
}; }; }; };
//# sourceMappingURL=fetchNextCloudFilesPage.js.map