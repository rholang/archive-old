"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
exports.FILE_CLICK = 'FILE_CLICK';
function isFileClickAction(action) {
    return action.type === exports.FILE_CLICK;
}
exports.isFileClickAction = isFileClickAction;
function fileClick(file, serviceName, accountId) {
    return {
        type: exports.FILE_CLICK,
        file: tslib_1.__assign(tslib_1.__assign({}, file), { accountId: accountId,
            serviceName: serviceName }),
    };
}
exports.fileClick = fileClick;
//# sourceMappingURL=fileClick.js.map