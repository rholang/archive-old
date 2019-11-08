"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var constants_1 = require("@atlaskit/theme/constants");
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
var mixins_1 = require("../../mixins");
var wrapperPadding = 8;
exports.className = 'media-card-frame';
exports.cardShadow = "\n  box-shadow: 0 0 1px 0 rgba(23, 43, 77, 0.24);";
function minWidth(_a) {
    var minWidth = _a.minWidth;
    if (minWidth) {
        return "min-width: " + minWidth + "px;";
    }
    else {
        return '';
    }
}
function maxWidth(_a) {
    var maxWidth = _a.maxWidth;
    if (maxWidth) {
        return "max-width: " + maxWidth + "px;";
    }
    else {
        return '';
    }
}
function interactive(_a) {
    var isInteractive = _a.isInteractive;
    if (isInteractive) {
        return "\n      cursor: pointer;\n      &:hover {\n        background-color: " + colors.N30 + ";\n      }\n      &:active {\n        background-color: " + colors.B50 + ";\n      }\n    ";
    }
    else {
        return '';
    }
}
function selected(_a) {
    var isSelected = _a.isSelected;
    return isSelected
        ? "&::after {\n        cursor: pointer;\n        box-shadow: 0 0 0 2px " + colors.B100 + ";\n        content: '';\n        outline: none;\n        position: absolute;\n        height: 100%;\n        width: 100%;\n        left: 0;\n      }"
        : '';
}
var wrapperStyles = styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", " ", " ", " ", " display: inline-flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  font-family: ", ";\n  padding: 0 ", "px ", "px ", "px;\n  width: 100%;\n  user-select: none;\n  background-color: ", ";\n  line-height: initial;\n  transition: background 0.3s;\n  position: relative;\n  ", "\n"], ["\n  ", " ", " ", " ", " display: inline-flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  font-family: ", ";\n  padding: 0 ", "px ", "px ", "px;\n  width: 100%;\n  user-select: none;\n  background-color: ", ";\n  line-height: initial;\n  transition: background 0.3s;\n  position: relative;\n  ", "\n"])), mixins_1.borderRadius, minWidth, maxWidth, interactive, constants_1.fontFamily(), wrapperPadding, wrapperPadding, wrapperPadding, colors.N20, selected);
// export interface ContentProps {
//   maxWidth?: number;
// }
exports.LinkWrapper = styled_components_1.default.a(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  ", " &:hover {\n    text-decoration: none;\n  }\n"], ["\n  ", " &:hover {\n    text-decoration: none;\n  }\n"])), wrapperStyles);
exports.Wrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), wrapperStyles);
exports.Header = styled_components_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  height: 32px;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  height: 32px;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), colors.N300);
exports.IconWrapper = styled_components_1.default.div(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  ", " ", " ", " margin-right: 4px;\n"], ["\n  ", " ", " ",
    " margin-right: 4px;\n"])), mixins_1.borderRadius, mixins_1.size(16), function (_a) {
    var isPlaceholder = _a.isPlaceholder;
    if (isPlaceholder) {
        return "\n      background-color: " + colors.N30 + ";\n    ";
    }
    else {
        return '';
    }
});
exports.TextWrapper = styled_components_1.default.div(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  ", " color: ", ";\n  font-size: 12px;\n  line-height: 16px;\n  ", ";\n"], ["\n  ",
    " color: ", ";\n  font-size: 12px;\n  line-height: 16px;\n  ", ";\n"])), function (_a) {
    var isPlaceholder = _a.isPlaceholder;
    if (isPlaceholder) {
        return "\n        " + mixins_1.borderRadius + "\n        width: 125px;\n        height: 12px;\n        background-color: " + colors.N30 + ";\n      ";
    }
    else {
        return '';
    }
}, colors.N300, mixins_1.ellipsis('none'));
exports.Content = styled_components_1.default.div(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n  position: relative;\n\n  ", " ", " background-color: white;\n  transition: box-shadow 0.3s;\n\n  ", ";\n"], ["\n  position: relative;\n\n  ", " ", " background-color: white;\n  transition: box-shadow 0.3s;\n\n  ",
    ";\n"])), mixins_1.borderRadius, exports.cardShadow, function (_a) {
    var isInteractive = _a.isInteractive;
    if (isInteractive) {
        return "\n          ." + exports.className + ":hover & {\n            box-shadow: 0 4px 8px -2px rgba(23, 43, 77, 0.32),\n              0 0 1px rgba(23, 43, 77, 0.25);\n          }\n        ";
    }
    else {
        return '';
    }
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=styled.js.map