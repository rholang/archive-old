"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var startImport_1 = require("../actions/startImport");
var resetView_1 = require("../actions/resetView");
var hidePopup_1 = require("../actions/hidePopup");
function isUploading(state, action) {
    if (state === void 0) { state = false; }
    if (startImport_1.isStartImportAction(action)) {
        return true;
    }
    else if (resetView_1.isResetViewAction(action)) {
        return false;
    }
    else {
        return state;
    }
}
exports.isUploading = isUploading;
function isCancelling(state, action) {
    if (state === void 0) { state = false; }
    if (hidePopup_1.isHidePopupAction(action)) {
        return true;
    }
    else if (resetView_1.isResetViewAction(action)) {
        return false;
    }
    else {
        return state;
    }
}
exports.isCancelling = isCancelling;
function default_1(state, action) {
    var nextState = tslib_1.__assign(tslib_1.__assign({}, state), { view: tslib_1.__assign({}, state.view) });
    var hasChanged = false;
    nextState.view.isUploading = isUploading(state.view.isUploading, action);
    if (nextState.view.isUploading !== state.view.isUploading) {
        hasChanged = true;
    }
    nextState.view.isCancelling = isCancelling(state.view.isCancelling, action);
    if (nextState.view.isCancelling !== state.view.isCancelling) {
        hasChanged = true;
    }
    return hasChanged ? nextState : state;
}
exports.default = default_1;
// this would be nicer:
// import {combineReducers} from 'redux';
// export default combineReducers({
//   isUploading,
//   isCancelling
// });
//# sourceMappingURL=isUploading.js.map