"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_1 = tslib_1.__importDefault(require("@emotion/styled"));
var components_1 = require("@atlaskit/theme/components");
var constants_1 = require("@atlaskit/theme/constants");
var colors_1 = require("@atlaskit/theme/colors");
var shared_variables_1 = require("../shared-variables");
var flex_max_height_ie_fix_1 = require("../utils/flex-max-height-ie-fix");
var boxShadow = function (_a) {
    var isChromeless = _a.isChromeless;
    return isChromeless
        ? 'none'
        : "\n      0 0 0 1px " + colors_1.N30A + ", 0 2px 1px " + colors_1.N30A + ",\n      0 0 20px -6px " + colors_1.N60A + "\n    ";
};
var dialogBgColor = function (_a) {
    var isChromeless = _a.isChromeless;
    return isChromeless ? 'transparent' : components_1.themed({ light: colors_1.N0, dark: colors_1.DN50 })();
};
var maxDimensions = "calc(100% - " + shared_variables_1.gutter * 2 + "px)";
var maxHeightDimensions = "calc(100% - " + (shared_variables_1.gutter * 2 - flex_max_height_ie_fix_1.IEMaxHeightCalcPx) + "px)";
exports.dialogWidth = function (_a) {
    var widthName = _a.widthName, widthValue = _a.widthValue;
    if (typeof widthValue === 'number') {
        return widthValue + "px";
    }
    return widthName ? shared_variables_1.WIDTH_ENUM.widths[widthName] + "px" : widthValue || 'auto';
};
exports.dialogHeight = function (_a) {
    var heightValue = _a.heightValue;
    if (typeof heightValue === 'number') {
        return heightValue + "px";
    }
    return heightValue || 'auto';
};
exports.FillScreen = styled_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  height: 100vh;\n  left: 0;\n  overflow-y: auto;\n  position: absolute;\n  top: ", "px;\n  width: 100%;\n  z-index: ", ";\n  -webkit-overflow-scrolling: touch;\n"], ["\n  height: 100vh;\n  left: 0;\n  overflow-y: auto;\n  position: absolute;\n  top: ", "px;\n  width: 100%;\n  z-index: ", ";\n  -webkit-overflow-scrolling: touch;\n"])), function (props) { return props.scrollDistance; }, constants_1.layers.modal);
exports.PositionerAbsolute = styled_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  height: ", ";\n  left: 0;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: ", ";\n  position: absolute;\n  right: 0;\n  top: ", "px;\n  width: ", ";\n  z-index: ", ";\n  pointer-events: none;\n\n  @media (min-width: 320px) and (max-width: 480px) {\n    height: 100%;\n    left: 0;\n    position: fixed;\n    top: 0;\n    max-width: 100%;\n    width: 100%;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  height: ", ";\n  left: 0;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: ", ";\n  position: absolute;\n  right: 0;\n  top: ", "px;\n  width: ", ";\n  z-index: ", ";\n  pointer-events: none;\n\n  @media (min-width: 320px) and (max-width: 480px) {\n    height: 100%;\n    left: 0;\n    position: fixed;\n    top: 0;\n    max-width: 100%;\n    width: 100%;\n  }\n"])), maxHeightDimensions, maxDimensions, shared_variables_1.gutter, exports.dialogWidth, constants_1.layers.modal);
exports.PositionerRelative = styled_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  margin: ", "px auto;\n  position: relative;\n  width: ", ";\n  z-index: ", ";\n  pointer-events: none;\n\n  @media (min-width: 320px) and (max-width: 480px) {\n    height: 100%;\n    left: 0;\n    position: fixed;\n    top: 0;\n    margin: 0;\n    max-width: 100%;\n    width: 100%;\n  }\n"], ["\n  margin: ", "px auto;\n  position: relative;\n  width: ", ";\n  z-index: ", ";\n  pointer-events: none;\n\n  @media (min-width: 320px) and (max-width: 480px) {\n    height: 100%;\n    left: 0;\n    position: fixed;\n    top: 0;\n    margin: 0;\n    max-width: 100%;\n    width: 100%;\n  }\n"])), shared_variables_1.gutter, exports.dialogWidth, constants_1.layers.modal);
exports.Dialog = styled_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  ", "\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  height: ", ";\n  ", ";\n  outline: 0;\n  pointer-events: auto;\n\n  @media (min-width: 320px) and (max-width: 480px) {\n    height: 100%;\n    max-height: 100%;\n    border-radius: 0;\n  }\n"], ["\n  ",
    "\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  height: ",
    ";\n  ", ";\n  outline: 0;\n  pointer-events: auto;\n\n  @media (min-width: 320px) and (max-width: 480px) {\n    height: 100%;\n    max-height: 100%;\n    border-radius: 0;\n  }\n"])), function (props) {
    return props.isChromeless
        ? null
        : "\n          background-color: " + dialogBgColor(props) + ";\n          border-radius: " + constants_1.borderRadius() + "px;\n          box-shadow: " + boxShadow(props) + ";\n        ";
}, colors_1.text, function (props) {
    return exports.dialogHeight({ heightValue: props.heightValue });
}, flex_max_height_ie_fix_1.flexMaxHeightIEFix);
exports.PositionerAbsolute.displayName = 'PositionerAbsolute';
exports.Dialog.displayName = 'Dialog';
exports.FillScreen.displayName = 'FillScreen';
exports.PositionerRelative.displayName = 'PositionerRelative';
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Modal.js.map