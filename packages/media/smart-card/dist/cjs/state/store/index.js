"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var context_1 = require("../context");
var react_1 = require("react");
var helpers_1 = require("../actions/helpers");
function useSmartCardState(url) {
    var store = context_1.useSmartLinkContext().store;
    // Initially, card state should be pending and 'empty'.
    var _a = tslib_1.__read(react_1.useState(helpers_1.getUrl(store, url)), 2), state = _a[0], setState = _a[1];
    // Selector for initial and subsequent states.
    react_1.useEffect(function () {
        store.subscribe(function () {
            setState(helpers_1.getUrl(store, url));
        });
    }, [url, store]);
    // State for use in view components.
    return state;
}
exports.useSmartCardState = useSmartCardState;
//# sourceMappingURL=index.js.map