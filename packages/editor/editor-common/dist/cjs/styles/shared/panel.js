"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = require("styled-components");
var theme_1 = require("@atlaskit/theme");
var utils_1 = require("../../utils");
var consts_1 = require("../consts");
var lightPanelColor = {
    info: theme_1.colors.B50,
    note: theme_1.colors.P50,
    tip: theme_1.colors.G50,
    success: theme_1.colors.G50,
    warning: theme_1.colors.Y50,
    error: theme_1.colors.R50,
};
var darkPanelOpacity = 0.64;
var darkPanelColor = {
    info: theme_1.colors.B500,
    note: theme_1.colors.P500,
    tip: theme_1.colors.G500,
    success: theme_1.colors.G500,
    warning: theme_1.colors.Y500,
    error: theme_1.colors.R500,
};
var darkPanelBorderColor = {
    info: theme_1.colors.B400,
    note: theme_1.colors.P400,
    tip: theme_1.colors.G400,
    success: theme_1.colors.G400,
    warning: theme_1.colors.Y400,
    error: theme_1.colors.R400,
};
var lightIconColor = {
    info: theme_1.colors.B400,
    note: theme_1.colors.P400,
    tip: theme_1.colors.G400,
    success: theme_1.colors.G400,
    warning: theme_1.colors.Y400,
    error: theme_1.colors.R400,
};
var darkIconColor = {
    info: theme_1.colors.B100,
    note: theme_1.colors.P100,
    tip: theme_1.colors.G200,
    success: theme_1.colors.G200,
    warning: theme_1.colors.Y100,
    error: theme_1.colors.R200,
};
var darkTextColor = {
    info: theme_1.colors.B75,
    note: theme_1.colors.P75,
    tip: theme_1.colors.G75,
    success: theme_1.colors.G75,
    warning: theme_1.colors.Y75,
    error: theme_1.colors.R75,
};
exports.PanelSharedCssClassName = {
    PANEL_CONTAINER: 'ak-editor-panel',
};
var iconDynamicStyles = function (panelType) { return function (props) {
    var light = lightIconColor[panelType];
    var dark = darkIconColor[panelType];
    var color = theme_1.themed({ light: light, dark: dark })(props);
    return "\n    color: " + color + ";\n  ";
}; };
var mainDynamicStyles = function (panelType) { return function (props) {
    var light = lightPanelColor[panelType];
    var dark = utils_1.hexToRgba(darkPanelColor[panelType], darkPanelOpacity);
    var darkText = darkTextColor[panelType];
    var background = theme_1.themed({ light: light, dark: dark })(props);
    var darkBorder = '1px solid ' + darkPanelBorderColor[panelType];
    var border = theme_1.themed({ light: 'none', dark: darkBorder })(props);
    var text = theme_1.themed({ light: 'inherit', dark: darkText })(props);
    return "\n    background-color: " + background + ";\n    border: " + border + ";\n    color: " + text + ";\n  ";
}; };
exports.panelSharedStyles = styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  .", " {\n    border-radius: ", "px;\n    margin: ", "px 0;\n    padding: ", "px;\n    min-width: ", "px;\n    display: flex;\n    align-items: baseline;\n    word-break: break-word;\n\n    ", "\n\n    .ak-editor-panel__icon {\n      display: block;\n      flex-shrink: 0;\n      height: ", "px;\n      width: ", "px;\n      box-sizing: content-box;\n      padding-right: ", "px;\n      ", "\n\n      > span {\n        vertical-align: middle;\n        display: inline;\n      }\n    }\n\n    .ak-editor-panel__content {\n      margin: 1px 0 1px;\n      flex: 1 0 0;\n    }\n\n    &[data-panel-type='note'] {\n      ", "\n\n      .ak-editor-panel__icon {\n        ", "\n      }\n    }\n\n    &[data-panel-type='tip'] {\n      ", "\n\n      .ak-editor-panel__icon {\n        ", "\n      }\n    }\n\n    &[data-panel-type='warning'] {\n      ", "\n\n      .ak-editor-panel__icon {\n        ", "\n      }\n    }\n\n    &[data-panel-type='error'] {\n      ", "\n\n      .ak-editor-panel__icon {\n        ", "\n      }\n    }\n\n    &[data-panel-type='success'] {\n      ", "\n\n      .ak-editor-panel__icon {\n        ", "\n      }\n    }\n\n    /* Danger when top level node */\n    &.danger {\n      box-shadow: inset 0px 0px 0px ", "px\n        ", ";\n      background: ", " !important;\n\n      .ak-editor-panel__icon {\n        color: ", " !important;\n      }\n    }\n  }\n\n  /* Danger when nested node */\n  & .danger .", " {\n    background: rgb(255, 189, 173, 0.5) !important; /* R75 with 50% opactiy */\n\n    .ak-editor-panel__icon {\n      color: ", " !important;\n    }\n  }\n"], ["\n  .", " {\n    border-radius: ", "px;\n    margin: ", "px 0;\n    padding: ", "px;\n    min-width: ", "px;\n    display: flex;\n    align-items: baseline;\n    word-break: break-word;\n\n    ", "\n\n    .ak-editor-panel__icon {\n      display: block;\n      flex-shrink: 0;\n      height: ", "px;\n      width: ", "px;\n      box-sizing: content-box;\n      padding-right: ", "px;\n      ", "\n\n      > span {\n        vertical-align: middle;\n        display: inline;\n      }\n    }\n\n    .ak-editor-panel__content {\n      margin: 1px 0 1px;\n      flex: 1 0 0;\n    }\n\n    &[data-panel-type='note'] {\n      ", "\n\n      .ak-editor-panel__icon {\n        ", "\n      }\n    }\n\n    &[data-panel-type='tip'] {\n      ", "\n\n      .ak-editor-panel__icon {\n        ", "\n      }\n    }\n\n    &[data-panel-type='warning'] {\n      ", "\n\n      .ak-editor-panel__icon {\n        ", "\n      }\n    }\n\n    &[data-panel-type='error'] {\n      ", "\n\n      .ak-editor-panel__icon {\n        ", "\n      }\n    }\n\n    &[data-panel-type='success'] {\n      ", "\n\n      .ak-editor-panel__icon {\n        ", "\n      }\n    }\n\n    /* Danger when top level node */\n    &.danger {\n      box-shadow: inset 0px 0px 0px ", "px\n        ", ";\n      background: ", " !important;\n\n      .ak-editor-panel__icon {\n        color: ", " !important;\n      }\n    }\n  }\n\n  /* Danger when nested node */\n  & .danger .", " {\n    background: rgb(255, 189, 173, 0.5) !important; /* R75 with 50% opactiy */\n\n    .ak-editor-panel__icon {\n      color: ", " !important;\n    }\n  }\n"])), exports.PanelSharedCssClassName.PANEL_CONTAINER, theme_1.borderRadius(), consts_1.relativeSize(1.142), theme_1.gridSize(), consts_1.akEditorTableCellMinWidth, mainDynamicStyles('info'), theme_1.gridSize() * 3, theme_1.gridSize() * 3, theme_1.gridSize(), iconDynamicStyles('info'), mainDynamicStyles('note'), iconDynamicStyles('note'), mainDynamicStyles('tip'), iconDynamicStyles('tip'), mainDynamicStyles('warning'), iconDynamicStyles('warning'), mainDynamicStyles('error'), iconDynamicStyles('error'), mainDynamicStyles('success'), iconDynamicStyles('success'), consts_1.akEditorSelectedBorderSize, consts_1.akEditorDeleteBorder, consts_1.akEditorDeleteBackground, consts_1.akEditorDeleteIconColor, exports.PanelSharedCssClassName.PANEL_CONTAINER, consts_1.akEditorDeleteIconColor);
var templateObject_1;
//# sourceMappingURL=panel.js.map