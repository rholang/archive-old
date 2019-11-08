"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("@atlaskit/media-client/constants");
var getFilesInRecents_1 = require("../actions/getFilesInRecents");
var getFilesInRecents_2 = require("../actions/getFilesInRecents");
var saveCollectionItemsSubscription_1 = require("../actions/saveCollectionItemsSubscription");
var getFilesInRecents_3 = require("../actions/getFilesInRecents");
exports.getFilesInRecents = function () { return function (store) { return function (next) { return function (action) {
    if (getFilesInRecents_3.isGetFilesInRecentsAction(action)) {
        exports.requestRecentFiles(store);
    }
    return next(action);
}; }; }; };
exports.requestRecentFiles = function (store) {
    var _a = store.getState(), userMediaClient = _a.userMediaClient, collectionItemsSubscription = _a.collectionItemsSubscription;
    if (collectionItemsSubscription) {
        collectionItemsSubscription.unsubscribe();
    }
    var subscription = userMediaClient.collection
        .getItems(constants_1.RECENTS_COLLECTION)
        .subscribe({
        next: function (items) {
            store.dispatch(getFilesInRecents_1.getFilesInRecentsFullfilled(items));
        },
        error: function () {
            store.dispatch(getFilesInRecents_2.getFilesInRecentsFailed());
        },
    });
    store.dispatch(saveCollectionItemsSubscription_1.saveCollectionItemsSubscription(subscription));
};
//# sourceMappingURL=getFilesInRecents.js.map