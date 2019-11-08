"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESET_VIEW = 'RESET_VIEW';
function isResetViewAction(action) {
    return action.type === exports.RESET_VIEW;
}
exports.isResetViewAction = isResetViewAction;
function resetView() {
    return {
        type: exports.RESET_VIEW,
    };
}
exports.resetView = resetView;
//# sourceMappingURL=resetView.js.map