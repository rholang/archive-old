"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATE_POPUP_URLS = 'UPDATE_POPUP_URLS';
exports.updatePopupUrls = function (urls) {
    return {
        type: exports.UPDATE_POPUP_URLS,
        urls: urls,
    };
};
function isUpdatePopupUrlsAction(action) {
    return action.type === exports.UPDATE_POPUP_URLS;
}
exports.isUpdatePopupUrlsAction = isUpdatePopupUrlsAction;
//# sourceMappingURL=updatePopupUrls.js.map