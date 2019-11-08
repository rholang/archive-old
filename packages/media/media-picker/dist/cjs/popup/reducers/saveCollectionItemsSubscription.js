"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var saveCollectionItemsSubscription_1 = require("../actions/saveCollectionItemsSubscription");
function saveCollectionItemsSubscription(state, action) {
    if (action.type === saveCollectionItemsSubscription_1.SAVE_COLLECTION_ITEMS_SUBSCRIPTION) {
        return tslib_1.__assign(tslib_1.__assign({}, state), { collectionItemsSubscription: action.subscription });
    }
    else {
        return state;
    }
}
exports.default = saveCollectionItemsSubscription;
//# sourceMappingURL=saveCollectionItemsSubscription.js.map