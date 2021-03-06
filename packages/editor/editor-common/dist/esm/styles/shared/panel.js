import { __makeTemplateObject } from "tslib";
import { css } from 'styled-components';
import { gridSize, borderRadius, colors, themed } from '@atlaskit/theme';
import { hexToRgba } from '../../utils';
import { relativeSize, akEditorTableCellMinWidth, akEditorDeleteBackground, akEditorDeleteBorder, akEditorSelectedBorderSize, akEditorDeleteIconColor, } from '../consts';
var lightPanelColor = {
    info: colors.B50,
    note: colors.P50,
    tip: colors.G50,
    success: colors.G50,
    warning: colors.Y50,
    error: colors.R50,
};
var darkPanelOpacity = 0.64;
var darkPanelColor = {
    info: colors.B500,
    note: colors.P500,
    tip: colors.G500,
    success: colors.G500,
    warning: colors.Y500,
    error: colors.R500,
};
var darkPanelBorderColor = {
    info: colors.B400,
    note: colors.P400,
    tip: colors.G400,
    success: colors.G400,
    warning: colors.Y400,
    error: colors.R400,
};
var lightIconColor = {
    info: colors.B400,
    note: colors.P400,
    tip: colors.G400,
    success: colors.G400,
    warning: colors.Y400,
    error: colors.R400,
};
var darkIconColor = {
    info: colors.B100,
    note: colors.P100,
    tip: colors.G200,
    success: colors.G200,
    warning: colors.Y100,
    error: colors.R200,
};
var darkTextColor = {
    info: colors.B75,
    note: colors.P75,
    tip: colors.G75,
    success: colors.G75,
    warning: colors.Y75,
    error: colors.R75,
};
export var PanelSharedCssClassName = {
    PANEL_CONTAINER: 'ak-editor-panel',
};
var iconDynamicStyles = function (panelType) { return function (props) {
    var light = lightIconColor[panelType];
    var dark = darkIconColor[panelType];
    var color = themed({ light: light, dark: dark })(props);
    return "\n    color: " + color + ";\n  ";
}; };
var mainDynamicStyles = function (panelType) { return function (props) {
    var light = lightPanelColor[panelType];
    var dark = hexToRgba(darkPanelColor[panelType], darkPanelOpacity);
    var darkText = darkTextColor[panelType];
    var background = themed({ light: light, dark: dark })(props);
    var darkBorder = '1px solid ' + darkPanelBorderColor[panelType];
    var border = themed({ light: 'none', dark: darkBorder })(props);
    var text = themed({ light: 'inherit', dark: darkText })(props);
    return "\n    background-color: " + background + ";\n    border: " + border + ";\n    color: " + text + ";\n  ";
}; };
export var panelSharedStyles = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .", " {\n    border-radius: ", "px;\n    margin: ", "px 0;\n    padding: ", "px;\n    min-width: ", "px;\n    display: flex;\n    align-items: baseline;\n    word-break: break-word;\n\n    ", "\n\n    .ak-editor-panel__icon {\n      display: block;\n      flex-shrink: 0;\n      height: ", "px;\n      width: ", "px;\n      box-sizing: content-box;\n      padding-right: ", "px;\n      ", "\n\n      > span {\n        vertical-align: middle;\n        display: inline;\n      }\n    }\n\n    .ak-editor-panel__content {\n      margin: 1px 0 1px;\n      flex: 1 0 0;\n    }\n\n    &[data-panel-type='note'] {\n      ", "\n\n      .ak-editor-panel__icon {\n        ", "\n      }\n    }\n\n    &[data-panel-type='tip'] {\n      ", "\n\n      .ak-editor-panel__icon {\n        ", "\n      }\n    }\n\n    &[data-panel-type='warning'] {\n      ", "\n\n      .ak-editor-panel__icon {\n        ", "\n      }\n    }\n\n    &[data-panel-type='error'] {\n      ", "\n\n      .ak-editor-panel__icon {\n        ", "\n      }\n    }\n\n    &[data-panel-type='success'] {\n      ", "\n\n      .ak-editor-panel__icon {\n        ", "\n      }\n    }\n\n    /* Danger when top level node */\n    &.danger {\n      box-shadow: inset 0px 0px 0px ", "px\n        ", ";\n      background: ", " !important;\n\n      .ak-editor-panel__icon {\n        color: ", " !important;\n      }\n    }\n  }\n\n  /* Danger when nested node */\n  & .danger .", " {\n    background: rgb(255, 189, 173, 0.5) !important; /* R75 with 50% opactiy */\n\n    .ak-editor-panel__icon {\n      color: ", " !important;\n    }\n  }\n"], ["\n  .", " {\n    border-radius: ", "px;\n    margin: ", "px 0;\n    padding: ", "px;\n    min-width: ", "px;\n    display: flex;\n    align-items: baseline;\n    word-break: break-word;\n\n    ", "\n\n    .ak-editor-panel__icon {\n      display: block;\n      flex-shrink: 0;\n      height: ", "px;\n      width: ", "px;\n      box-sizing: content-box;\n      padding-right: ", "px;\n      ", "\n\n      > span {\n        vertical-align: middle;\n        display: inline;\n      }\n    }\n\n    .ak-editor-panel__content {\n      margin: 1px 0 1px;\n      flex: 1 0 0;\n    }\n\n    &[data-panel-type='note'] {\n      ", "\n\n      .ak-editor-panel__icon {\n        ", "\n      }\n    }\n\n    &[data-panel-type='tip'] {\n      ", "\n\n      .ak-editor-panel__icon {\n        ", "\n      }\n    }\n\n    &[data-panel-type='warning'] {\n      ", "\n\n      .ak-editor-panel__icon {\n        ", "\n      }\n    }\n\n    &[data-panel-type='error'] {\n      ", "\n\n      .ak-editor-panel__icon {\n        ", "\n      }\n    }\n\n    &[data-panel-type='success'] {\n      ", "\n\n      .ak-editor-panel__icon {\n        ", "\n      }\n    }\n\n    /* Danger when top level node */\n    &.danger {\n      box-shadow: inset 0px 0px 0px ", "px\n        ", ";\n      background: ", " !important;\n\n      .ak-editor-panel__icon {\n        color: ", " !important;\n      }\n    }\n  }\n\n  /* Danger when nested node */\n  & .danger .", " {\n    background: rgb(255, 189, 173, 0.5) !important; /* R75 with 50% opactiy */\n\n    .ak-editor-panel__icon {\n      color: ", " !important;\n    }\n  }\n"])), PanelSharedCssClassName.PANEL_CONTAINER, borderRadius(), relativeSize(1.142), gridSize(), akEditorTableCellMinWidth, mainDynamicStyles('info'), gridSize() * 3, gridSize() * 3, gridSize(), iconDynamicStyles('info'), mainDynamicStyles('note'), iconDynamicStyles('note'), mainDynamicStyles('tip'), iconDynamicStyles('tip'), mainDynamicStyles('warning'), iconDynamicStyles('warning'), mainDynamicStyles('error'), iconDynamicStyles('error'), mainDynamicStyles('success'), iconDynamicStyles('success'), akEditorSelectedBorderSize, akEditorDeleteBorder, akEditorDeleteBackground, akEditorDeleteIconColor, PanelSharedCssClassName.PANEL_CONTAINER, akEditorDeleteIconColor);
var templateObject_1;
//# sourceMappingURL=panel.js.map