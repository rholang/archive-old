"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var showPopup_1 = require("../actions/showPopup");
function default_1(state, action) {
    if (showPopup_1.isShowPopupAction(action)) {
        return tslib_1.__assign(tslib_1.__assign({}, state), { view: tslib_1.__assign(tslib_1.__assign({}, state.view), { isVisible: true }) });
    }
    else {
        return state;
    }
}
exports.default = default_1;
//# sourceMappingURL=showPopup.js.map