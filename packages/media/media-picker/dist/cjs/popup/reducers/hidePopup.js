"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hidePopup_1 = require("../actions/hidePopup");
function default_1(state, action) {
    if (hidePopup_1.isHidePopupAction(action)) {
        return tslib_1.__assign(tslib_1.__assign({}, state), { view: tslib_1.__assign(tslib_1.__assign({}, state.view), { isVisible: false }) });
    }
    else {
        return state;
    }
}
exports.default = default_1;
//# sourceMappingURL=hidePopup.js.map