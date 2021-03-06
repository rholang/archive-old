import createNamespaceContext from './helper/createNamespaceContext';
export var EDITOR_CONTEXT = 'fabricEditorCtx';
export var EDITOR_APPEARANCE_CONTEXT;
(function (EDITOR_APPEARANCE_CONTEXT) {
    EDITOR_APPEARANCE_CONTEXT["FIXED_WIDTH"] = "fixedWidth";
    EDITOR_APPEARANCE_CONTEXT["FULL_WIDTH"] = "fullWidth";
    EDITOR_APPEARANCE_CONTEXT["COMMENT"] = "comment";
    EDITOR_APPEARANCE_CONTEXT["CHROMELESS"] = "chromeless";
    EDITOR_APPEARANCE_CONTEXT["MOBILE"] = "mobile";
})(EDITOR_APPEARANCE_CONTEXT || (EDITOR_APPEARANCE_CONTEXT = {}));
export var FabricEditorAnalyticsContext = createNamespaceContext(EDITOR_CONTEXT, 'FabricEditorAnalyticsContext');
//# sourceMappingURL=FabricEditorAnalyticsContext.js.map