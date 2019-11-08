"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var createNamespaceContext_1 = tslib_1.__importDefault(require("./helper/createNamespaceContext"));
exports.EDITOR_CONTEXT = 'fabricEditorCtx';
var EDITOR_APPEARANCE_CONTEXT;
(function (EDITOR_APPEARANCE_CONTEXT) {
    EDITOR_APPEARANCE_CONTEXT["FIXED_WIDTH"] = "fixedWidth";
    EDITOR_APPEARANCE_CONTEXT["FULL_WIDTH"] = "fullWidth";
    EDITOR_APPEARANCE_CONTEXT["COMMENT"] = "comment";
    EDITOR_APPEARANCE_CONTEXT["CHROMELESS"] = "chromeless";
    EDITOR_APPEARANCE_CONTEXT["MOBILE"] = "mobile";
})(EDITOR_APPEARANCE_CONTEXT = exports.EDITOR_APPEARANCE_CONTEXT || (exports.EDITOR_APPEARANCE_CONTEXT = {}));
exports.FabricEditorAnalyticsContext = createNamespaceContext_1.default(exports.EDITOR_CONTEXT, 'FabricEditorAnalyticsContext');
//# sourceMappingURL=FabricEditorAnalyticsContext.js.map