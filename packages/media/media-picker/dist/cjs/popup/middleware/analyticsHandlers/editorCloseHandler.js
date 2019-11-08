"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var editorClose_1 = require("../../actions/editorClose");
var _1 = require(".");
exports.default = (function (action) {
    if (editorClose_1.isEditorCloseAction(action)) {
        return [
            tslib_1.__assign(tslib_1.__assign({}, _1.buttonClickPayload), { actionSubjectId: "mediaEditor" + action.selection + "Button" }),
        ];
    }
});
//# sourceMappingURL=editorCloseHandler.js.map