"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HIDE_POPUP = 'HIDE_POPUP';
function isHidePopupAction(action) {
    return action.type === exports.HIDE_POPUP;
}
exports.isHidePopupAction = isHidePopupAction;
function hidePopup() {
    return {
        type: exports.HIDE_POPUP,
    };
}
exports.hidePopup = hidePopup;
//# sourceMappingURL=hidePopup.js.map