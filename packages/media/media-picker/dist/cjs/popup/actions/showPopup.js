"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SHOW_POPUP = 'SHOW_POPUP';
function isShowPopupAction(action) {
    return action.type === exports.SHOW_POPUP;
}
exports.isShowPopupAction = isShowPopupAction;
function showPopup() {
    return {
        type: exports.SHOW_POPUP,
    };
}
exports.showPopup = showPopup;
//# sourceMappingURL=showPopup.js.map