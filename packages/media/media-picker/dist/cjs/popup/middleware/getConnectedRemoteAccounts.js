"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var updateServiceList_1 = require("../actions/updateServiceList");
var getConnectedRemoteAccounts_1 = require("../actions/getConnectedRemoteAccounts");
var isGetConnectedRemoteAccountsAction = function (action) {
    return action.type === getConnectedRemoteAccounts_1.GET_CONNECTED_REMOTE_ACCOUNTS;
};
exports.getConnectedRemoteAccounts = function (fetcher) { return function (store) { return function (next) { return function (action) {
    if (isGetConnectedRemoteAccountsAction(action)) {
        var userMediaClient = store.getState().userMediaClient;
        store.dispatch(updateServiceList_1.updateServiceList(userMediaClient.config
            .authProvider()
            .then(function (auth) { return fetcher.getServiceList(auth); })));
    }
    return next(action);
}; }; }; };
//# sourceMappingURL=getConnectedRemoteAccounts.js.map