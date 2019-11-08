"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var analytics_gas_types_1 = require("@atlaskit/analytics-gas-types");
var editorShowImage_1 = require("../../actions/editorShowImage");
exports.default = (function (action) {
    if (editorShowImage_1.isEditorShowImageAction(action)) {
        var _a = action.imageUrl, imageUrl = _a === void 0 ? undefined : _a, _b = action.originalFile, originalFile = _b === void 0 ? undefined : _b;
        return [
            {
                name: 'fileEditorModal',
                eventType: analytics_gas_types_1.SCREEN_EVENT_TYPE,
                attributes: {
                    imageUrl: imageUrl,
                    originalFile: originalFile,
                },
            },
        ];
    }
});
//# sourceMappingURL=editorShowImageHandler.js.map