import { RECENTS_COLLECTION } from '@atlaskit/media-client/constants';
import { getFilesInRecentsFullfilled } from '../actions/getFilesInRecents';
import { getFilesInRecentsFailed } from '../actions/getFilesInRecents';
import { saveCollectionItemsSubscription } from '../actions/saveCollectionItemsSubscription';
import { isGetFilesInRecentsAction } from '../actions/getFilesInRecents';
export var getFilesInRecents = function () { return function (store) { return function (next) { return function (action) {
    if (isGetFilesInRecentsAction(action)) {
        requestRecentFiles(store);
    }
    return next(action);
}; }; }; };
export var requestRecentFiles = function (store) {
    var _a = store.getState(), userMediaClient = _a.userMediaClient, collectionItemsSubscription = _a.collectionItemsSubscription;
    if (collectionItemsSubscription) {
        collectionItemsSubscription.unsubscribe();
    }
    var subscription = userMediaClient.collection
        .getItems(RECENTS_COLLECTION)
        .subscribe({
        next: function (items) {
            store.dispatch(getFilesInRecentsFullfilled(items));
        },
        error: function () {
            store.dispatch(getFilesInRecentsFailed());
        },
    });
    store.dispatch(saveCollectionItemsSubscription(subscription));
};
//# sourceMappingURL=getFilesInRecents.js.map