import { __assign } from "tslib";
import { isHidePopupAction } from '../../actions/hidePopup';
import { buttonClickPayload } from '.';
export default (function (action, store) {
    if (isHidePopupAction(action)) {
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
            __assign(__assign({}, buttonClickPayload), { actionSubjectId: actionSubjectId, attributes: __assign(__assign({ fileCount: selectedItems.length }, serviceNames), (actionSubjectId === 'insertFilesButton' ? { files: files } : {})) }),
        ];
    }
});
//# sourceMappingURL=hidePopupHandler.js.map