"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var store_1 = require("./store");
var actions_1 = require("./actions");
var react_1 = require("react");
function useSmartLink(url, dispatchAnalytics) {
    var state = store_1.useSmartCardState(url);
    var actions = actions_1.useSmartCardActions(url, dispatchAnalytics);
    // Register the current card.
    var register = function () {
        actions.register();
    };
    react_1.useEffect(register, [url]);
    // Provide the state and card actions to consumers.
    return { state: state, actions: actions };
}
exports.useSmartLink = useSmartLink;
tslib_1.__exportStar(require("./context"), exports);
//# sourceMappingURL=index.js.map