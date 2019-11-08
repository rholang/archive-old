"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@emotion/core");
var styled_1 = tslib_1.__importDefault(require("@emotion/styled"));
var components_1 = require("@atlaskit/theme/components");
var constants_1 = require("@atlaskit/theme/constants");
var colors_1 = require("@atlaskit/theme/colors");
var math_1 = require("@atlaskit/theme/math");
var flex_max_height_ie_fix_1 = require("../utils/flex-max-height-ie-fix");
// Constants
// ==============================
var modalPadding = constants_1.gridSize() * 3;
var keylineColor = components_1.themed({ light: colors_1.N30, dark: colors_1.DN30 });
exports.keylineHeight = 2;
// Wrapper
// ==============================
exports.wrapperStyles = core_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  ", ";\n"])), flex_max_height_ie_fix_1.flexMaxHeightIEFix);
exports.Header = styled_1.default.header(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  flex: 0 0 auto;\n  justify-content: space-between;\n  transition: box-shadow 200ms;\n  z-index: 1;\n  padding: ", "px ", "px ", "px\n    ", "px;\n  box-shadow: ", ";\n"], ["\n  align-items: center;\n  display: flex;\n  flex: 0 0 auto;\n  justify-content: space-between;\n  transition: box-shadow 200ms;\n  z-index: 1;\n  padding: ", "px ", "px ", "px\n    ", "px;\n  box-shadow: ",
    ";\n"])), modalPadding, modalPadding, modalPadding - exports.keylineHeight, modalPadding, function (props) {
    return props.showKeyline
        ? "0 " + exports.keylineHeight + "px 0 0 " + keylineColor(props)
        : 'none';
});
exports.Title = styled_1.default.h4(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  font-size: 20px;\n  font-style: inherit;\n  font-weight: 500;\n  letter-spacing: -0.008em;\n  line-height: 1;\n  margin: 0;\n  min-width: 0;\n"], ["\n  align-items: center;\n  display: flex;\n  font-size: 20px;\n  font-style: inherit;\n  font-weight: 500;\n  letter-spacing: -0.008em;\n  line-height: 1;\n  margin: 0;\n  min-width: 0;\n"])));
exports.TitleText = styled_1.default.span(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  flex: 1 1 auto;\n  min-width: 0;\n  word-wrap: break-word;\n  width: 100%;\n  ", ";\n"], ["\n  flex: 1 1 auto;\n  min-width: 0;\n  word-wrap: break-word;\n  width: 100%;\n  ",
    ";\n"])), function (props) {
    return !props.isHeadingMultiline &&
        "\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    ";
});
var iconColor = {
    danger: colors_1.R400,
    warning: colors_1.Y400,
};
exports.titleIconWrapperStyles = function (appearance) { return core_1.css(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n  margin-right: ", "px;\n  flex: 0 0 auto;\n"], ["\n  color: ", ";\n  margin-right: ", "px;\n  flex: 0 0 auto;\n"])), iconColor[appearance], constants_1.gridSize()); };
// Body
// ==============================
/**
  Adding the padding here avoids cropping box shadow on first/last
  children. The combined vertical spacing is maintained by subtracting the
  keyline height from header and footer.
*/
exports.bodyStyles = function (shouldScroll) { return core_1.css(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  flex: 1 1 auto;\n  ", "\n\n  @media (min-width: 320px) and (max-width: 480px) {\n    overflow-y: auto;\n    height: 100%;\n  }\n"], ["\n  flex: 1 1 auto;\n  ",
    "\n\n  @media (min-width: 320px) and (max-width: 480px) {\n    overflow-y: auto;\n    height: 100%;\n  }\n"])), shouldScroll
    ? "\n        overflow-y: auto;\n        overflow-x: hidden;\n        padding: " + exports.keylineHeight + "px " + modalPadding + "px;\n      "
    : "\n        padding: 0 " + modalPadding + "px;\n      "); };
exports.Body = styled_1.default.div(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) { return exports.bodyStyles(props.shouldScroll); });
exports.Footer = styled_1.default.footer(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  flex: 0 0 auto;\n  justify-content: space-between;\n  transition: box-shadow 200ms;\n  z-index: 1;\n  padding: ", "px ", "px ", "px\n    ", "px;\n  box-shadow: ", ";\n"], ["\n  align-items: center;\n  display: flex;\n  flex: 0 0 auto;\n  justify-content: space-between;\n  transition: box-shadow 200ms;\n  z-index: 1;\n  padding: ", "px ", "px ", "px\n    ", "px;\n  box-shadow: ",
    ";\n"])), modalPadding - exports.keylineHeight, modalPadding, modalPadding, modalPadding, function (props) {
    return props.showKeyline
        ? "0 -" + exports.keylineHeight + "px 0 0 " + keylineColor(props)
        : 'none';
});
exports.Actions = styled_1.default.div(templateObject_9 || (templateObject_9 = tslib_1.__makeTemplateObject(["\n  display: inline-flex;\n  margin: 0 -", "px;\n"], ["\n  display: inline-flex;\n  margin: 0 -", "px;\n"])), math_1.divide(constants_1.gridSize, 2));
exports.ActionItem = styled_1.default.div(templateObject_10 || (templateObject_10 = tslib_1.__makeTemplateObject(["\n  flex: 1 0 auto;\n  margin: 0 ", "px;\n"], ["\n  flex: 1 0 auto;\n  margin: 0 ", "px;\n"])), math_1.divide(constants_1.gridSize, 2));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
//# sourceMappingURL=Content.js.map