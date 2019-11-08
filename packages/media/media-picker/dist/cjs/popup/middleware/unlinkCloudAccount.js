"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var unlinkCloudAccount_1 = require("../actions/unlinkCloudAccount");
var changeService_1 = require("../actions/changeService");
var unlinkCloudAccount_2 = require("../actions/unlinkCloudAccount");
exports.default = (function (fetcher) { return function (store) { return function (next) { return function (action) {
    if (action.type === unlinkCloudAccount_1.REQUEST_UNLINK_CLOUD_ACCOUNT) {
        var userMediaClient = store.getState().userMediaClient;
        userMediaClient.config
            .authProvider()
            .then(function (auth) { return fetcher.unlinkCloudAccount(auth, action.account.id); })
            .then(function () {
            store.dispatch(unlinkCloudAccount_2.unlinkCloudAccount(action.account));
            store.dispatch(changeService_1.changeService(action.account.name));
        });
    }
    return next(action);
}; }; }; });
//# sourceMappingURL=unlinkCloudAccount.js.map