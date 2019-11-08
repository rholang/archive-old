import { __assign } from "tslib";
import { isEditRemoteImageAction } from '../../actions/editRemoteImage';
import { buttonClickPayload } from '.';
export default (function (action) {
    if (isEditRemoteImageAction(action)) {
        var collectionName = action.collectionName, _a = action.item, _b = _a === void 0 ? {} : _a, _c = _b.id, id = _c === void 0 ? undefined : _c, _d = _b.name, name_1 = _d === void 0 ? undefined : _d;
        return [
            __assign(__assign({}, buttonClickPayload), { actionSubjectId: 'annotateFileButton', attributes: {
                    collectionName: collectionName,
                    fileId: id,
                    fileName: name_1,
                } }),
        ];
    }
});
//# sourceMappingURL=editRemoteImageHandler.js.map