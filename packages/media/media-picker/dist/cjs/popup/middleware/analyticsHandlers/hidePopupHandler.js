"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hidePopup_1 = require("../../actions/hidePopup");
var _1 = require(".");
exports.default = (function (action, store) {
    if (hidePopup_1.isHidePopupAction(action)) {
        var _a = store.getState().selectedItems, selectedItems = _a === void 0 ? [] : _a;
        var actionSubjectId = selectedItems.length > 0 ? 'insertFilesButton' : 'cancelButton';
        var files = actionSubjectId === 'insertFilesButton'
            ? selectedItems.map(function (item) { return ({
                fileId: item.id,
                fileMimetype: item.mimeType,
                fileName: item.name,
                fileSize: item.size,
                accountId: item.accountId,
                serviceName: item.serviceName,
            }); })
            : [];
        var serviceNames = selectedItems.length > 0
            ? {
                serviceNames: selectedItems.map(function (i) { return i.serviceName; }),
            }
            : {};
        return [
            tslib_1.__assign(tslib_1.__assign({}, _1.buttonClickPayload), { actionSubjectId: actionSubjectId, attributes: tslib_1.__assign(tslib_1.__assign({ fileCount: selectedItems.length }, serviceNames), (actionSubjectId === 'insertFilesButton' ? { files: files } : {})) }),
        ];
    }
});
//# sourceMappingURL=hidePopupHandler.js.map