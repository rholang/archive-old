"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = require("styled-components");
var adf_schema_1 = require("@atlaskit/adf-schema");
var theme_1 = require("@atlaskit/theme");
var consts_1 = require("../consts");
var panel_1 = require("./panel");
exports.tableMarginTop = 24;
exports.tableMarginBottom = 16;
exports.tableMarginSides = 8;
exports.tableCellMinWidth = 48;
exports.tableNewColumnMinWidth = 140;
exports.tableCellBorderWidth = 1;
exports.tableCellPadding = 8;
exports.tableResizeHandleWidth = 6;
exports.TableSharedCssClassName = {
    TABLE_CONTAINER: adf_schema_1.tablePrefixSelector + "-container",
    TABLE_NODE_WRAPPER: adf_schema_1.tablePrefixSelector + "-wrapper",
    TABLE_LEFT_SHADOW: adf_schema_1.tablePrefixSelector + "-with-left-shadow",
    TABLE_RIGHT_SHADOW: adf_schema_1.tablePrefixSelector + "-with-right-shadow",
    TABLE_CELL_NODEVIEW_CONTENT_DOM: adf_schema_1.tableCellContentDomSelector,
};
var tableSharedStyle = styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  .", " {\n    position: relative;\n    margin: 0 auto ", "px;\n    box-sizing: border-box;\n\n    /**\n     * Fix block top alignment inside table cells.\n     */\n    .code-block,\n    .", ",\n    .taskItemView-content-wrap > div,\n    .decisionItemView-content-wrap > div {\n      margin-top: 0;\n    }\n  }\n  .", "[data-number-column='true'] {\n    padding-left: ", "px;\n  }\n  /* avoid applying styles to nested tables (possible via extensions) */\n  .", " > table,\n  .", " > table {\n    border-collapse: collapse;\n    margin: ", "px ", "px 0 0;\n    border: ", "px solid ", ";\n    table-layout: fixed;\n    font-size: ", "px;\n    width: 100%;\n\n    &[data-autosize='true'] {\n      table-layout: auto;\n    }\n\n    & {\n      * {\n        box-sizing: border-box;\n      }\n\n      tbody {\n        border-bottom: none;\n      }\n      th td {\n        background-color: white;\n      }\n      th,\n      td {\n        min-width: ", "px;\n        font-weight: normal;\n        vertical-align: top;\n        border: 1px solid ", ";\n        border-right-width: 0;\n        border-bottom-width: 0;\n        padding: ", "px;\n        /* https://stackoverflow.com/questions/7517127/borders-not-shown-in-firefox-with-border-collapse-on-table-position-relative-o */\n        background-clip: padding-box;\n\n        th p:not(:first-of-type),\n        td p:not(:first-of-type) {\n          margin-top: 12px;\n        }\n      }\n      th {\n        background-color: ", ";\n        text-align: left;\n\n        .code-block {\n          /*\n            Add a background color tint to code blocks inside a table heading since they both\n            share the same background colour. This prevents them visually blending together.\n          */\n          background: ", ";\n\n          > span {\n            /*\n              The codeblock inside @atlaskit/code uses inline styles so we disable the default\n              background color because editor/renderer provides it's own background colours.\n            */\n            background: transparent !important;\n          }\n        }\n      }\n    }\n  }\n"], ["\n  .", " {\n    position: relative;\n    margin: 0 auto ", "px;\n    box-sizing: border-box;\n\n    /**\n     * Fix block top alignment inside table cells.\n     */\n    .code-block,\n    .", ",\n    .taskItemView-content-wrap > div,\n    .decisionItemView-content-wrap > div {\n      margin-top: 0;\n    }\n  }\n  .", "[data-number-column='true'] {\n    padding-left: ", "px;\n  }\n  /* avoid applying styles to nested tables (possible via extensions) */\n  .", " > table,\n  .", " > table {\n    border-collapse: collapse;\n    margin: ", "px ", "px 0 0;\n    border: ", "px solid ",
    ";\n    table-layout: fixed;\n    font-size: ", "px;\n    width: 100%;\n\n    &[data-autosize='true'] {\n      table-layout: auto;\n    }\n\n    & {\n      * {\n        box-sizing: border-box;\n      }\n\n      tbody {\n        border-bottom: none;\n      }\n      th td {\n        background-color: white;\n      }\n      th,\n      td {\n        min-width: ", "px;\n        font-weight: normal;\n        vertical-align: top;\n        border: 1px solid ",
    ";\n        border-right-width: 0;\n        border-bottom-width: 0;\n        padding: ", "px;\n        /* https://stackoverflow.com/questions/7517127/borders-not-shown-in-firefox-with-border-collapse-on-table-position-relative-o */\n        background-clip: padding-box;\n\n        th p:not(:first-of-type),\n        td p:not(:first-of-type) {\n          margin-top: 12px;\n        }\n      }\n      th {\n        background-color: ",
    ";\n        text-align: left;\n\n        .code-block {\n          /*\n            Add a background color tint to code blocks inside a table heading since they both\n            share the same background colour. This prevents them visually blending together.\n          */\n          background: ", ";\n\n          > span {\n            /*\n              The codeblock inside @atlaskit/code uses inline styles so we disable the default\n              background color because editor/renderer provides it's own background colours.\n            */\n            background: transparent !important;\n          }\n        }\n      }\n    }\n  }\n"])), exports.TableSharedCssClassName.TABLE_CONTAINER, exports.tableMarginBottom, panel_1.PanelSharedCssClassName.PANEL_CONTAINER, exports.TableSharedCssClassName.TABLE_CONTAINER, consts_1.akEditorTableNumberColumnWidth - 1, exports.TableSharedCssClassName.TABLE_CONTAINER, exports.TableSharedCssClassName.TABLE_NODE_WRAPPER, exports.tableMarginTop, exports.tableMarginSides, exports.tableCellBorderWidth, theme_1.themed({
    light: consts_1.akEditorTableBorder,
    dark: consts_1.akEditorTableBorderDark,
}), theme_1.fontSize(), exports.tableCellMinWidth, theme_1.themed({
    light: consts_1.akEditorTableBorder,
    dark: consts_1.akEditorTableBorderDark,
}), exports.tableCellPadding, theme_1.themed({
    light: consts_1.akEditorTableToolbar,
    dark: consts_1.akEditorTableToolbarDark,
}), theme_1.themed({ light: theme_1.colors.N20A, dark: theme_1.colors.DN700A }));
exports.tableSharedStyle = tableSharedStyle;
exports.calcTableWidth = function (layout, containerWidth, addControllerPadding) {
    if (addControllerPadding === void 0) { addControllerPadding = true; }
    switch (layout) {
        case 'full-width':
            return containerWidth
                ? Math.min(containerWidth -
                    (addControllerPadding ? consts_1.akEditorBreakoutPadding : 0), consts_1.akEditorFullWidthLayoutWidth) + "px"
                : consts_1.akEditorFullWidthLayoutWidth + "px";
        case 'wide':
            if (containerWidth) {
                return Math.min(containerWidth - (addControllerPadding ? consts_1.akEditorBreakoutPadding : 0), consts_1.akEditorWideLayoutWidth) + "px";
            }
            return consts_1.akEditorWideLayoutWidth + "px";
        default:
            return 'inherit';
    }
};
var templateObject_1;
//# sourceMappingURL=table.js.map