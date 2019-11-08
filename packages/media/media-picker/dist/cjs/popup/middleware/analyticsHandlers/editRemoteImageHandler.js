"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var editRemoteImage_1 = require("../../actions/editRemoteImage");
var _1 = require(".");
exports.default = (function (action) {
    if (editRemoteImage_1.isEditRemoteImageAction(action)) {
        var collectionName = action.collectionName, _a = action.item, _b = _a === void 0 ? {} : _a, _c = _b.id, id = _c === void 0 ? undefined : _c, _d = _b.name, name_1 = _d === void 0 ? undefined : _d;
        return [
            tslib_1.__assign(tslib_1.__assign({}, _1.buttonClickPayload), { actionSubjectId: 'annotateFileButton', attributes: {
                    collectionName: collectionName,
                    fileId: id,
                    fileName: name_1,
                } }),
        ];
    }
});
//# sourceMappingURL=editRemoteImageHandler.js.map