"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = require("styled-components");
var constants_1 = require("@atlaskit/theme/constants");
var colors_1 = require("@atlaskit/theme/colors");
var math_1 = require("@atlaskit/theme/math");
var constants_2 = require("../internal/constants");
var theme_1 = require("../theme");
exports.truncateStyle = function (_a) {
    var width = _a.width, isFixedSize = _a.isFixedSize, shouldTruncate = _a.shouldTruncate;
    return styled_components_1.css(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  ", " ", ";\n  ", ";\n"], ["\n  ",
        " ",
        ";\n  ",
        ";\n"])), width
        ? styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n        width: ", "%;\n      "], ["\n        width: ", "%;\n      "])), width) : '', isFixedSize
        ? styled_components_1.css(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n        overflow: hidden;\n      "], ["\n        overflow: hidden;\n      "]))) : '', isFixedSize && shouldTruncate
        ? styled_components_1.css(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      "], ["\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      "]))) : '');
};
exports.onClickStyle = function (_a) {
    var onClick = _a.onClick;
    return onClick && styled_components_1.css(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n    &:hover {\n      cursor: pointer;\n      background-color: ", ";\n    }\n  "], ["\n    &:hover {\n      cursor: pointer;\n      background-color: ", ";\n    }\n  "])), colors_1.N30A);
};
exports.arrowsStyle = function (props) {
    var isSortable = props.isSortable, sortOrder = props.sortOrder;
    if (!isSortable) {
        return '';
    }
    var pseudoBase = styled_components_1.css(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n    border: 3px solid transparent;\n    display: block;\n    height: 0;\n    position: absolute;\n    right: -", "px;\n    width: 0;\n  "], ["\n    border: 3px solid transparent;\n    display: block;\n    height: 0;\n    position: absolute;\n    right: -", "px;\n    width: 0;\n  "])), constants_1.gridSize);
    return styled_components_1.css(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n    & > span {\n      position: relative;\n      &::before {\n        ", ";\n        border-bottom: 3px solid\n          ", ";\n        bottom: 8px;\n        content: ' ';\n      }\n      &::after {\n        ", ";\n        border-top: 3px solid\n          ", ";\n        bottom: 0;\n        content: ' ';\n      }\n    }\n\n    &:hover > span {\n      &::before {\n        border-bottom: 3px solid\n          ", ";\n      }\n      &::after {\n        border-top: 3px solid\n          ", ";\n      }\n    }\n  "], ["\n    & > span {\n      position: relative;\n      &::before {\n        ", ";\n        border-bottom: 3px solid\n          ",
        ";\n        bottom: 8px;\n        content: ' ';\n      }\n      &::after {\n        ", ";\n        border-top: 3px solid\n          ",
        ";\n        bottom: 0;\n        content: ' ';\n      }\n    }\n\n    &:hover > span {\n      &::before {\n        border-bottom: 3px solid\n          ",
        ";\n      }\n      &::after {\n        border-top: 3px solid\n          ",
        ";\n      }\n    }\n  "])), pseudoBase, sortOrder === constants_2.ASC
        ? theme_1.arrow.selectedColor(props)
        : theme_1.arrow.defaultColor(props), pseudoBase, sortOrder === constants_2.DESC
        ? theme_1.arrow.selectedColor(props)
        : theme_1.arrow.defaultColor(props), sortOrder === constants_2.ASC
        ? theme_1.arrow.selectedColor(props)
        : theme_1.arrow.hoverColor(props), sortOrder === constants_2.DESC
        ? theme_1.arrow.selectedColor(props)
        : theme_1.arrow.hoverColor(props));
};
exports.cellStyle = styled_components_1.css(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n  border: none;\n  padding: ", "px ", "px;\n  text-align: left;\n\n  &:first-child {\n    padding-left: 0;\n  }\n  &:last-child {\n    padding-right: 0;\n  }\n"], ["\n  border: none;\n  padding: ", "px ", "px;\n  text-align: left;\n\n  &:first-child {\n    padding-left: 0;\n  }\n  &:last-child {\n    padding-right: 0;\n  }\n"])), math_1.divide(constants_1.gridSize, 2), constants_1.gridSize);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=constants.js.map