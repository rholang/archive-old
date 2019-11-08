import { __makeTemplateObject } from "tslib";
import { css } from 'styled-components';
import { gridSize } from '@atlaskit/theme/constants';
import { N30A } from '@atlaskit/theme/colors';
import { divide } from '@atlaskit/theme/math';
import { ASC, DESC } from '../internal/constants';
import { arrow } from '../theme';
export var truncateStyle = function (_a) {
    var width = _a.width, isFixedSize = _a.isFixedSize, shouldTruncate = _a.shouldTruncate;
    return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", " ", ";\n  ", ";\n"], ["\n  ",
        " ",
        ";\n  ",
        ";\n"])), width
        ? css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        width: ", "%;\n      "], ["\n        width: ", "%;\n      "])), width) : '', isFixedSize
        ? css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        overflow: hidden;\n      "], ["\n        overflow: hidden;\n      "]))) : '', isFixedSize && shouldTruncate
        ? css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      "], ["\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      "]))) : '');
};
export var onClickStyle = function (_a) {
    var onClick = _a.onClick;
    return onClick && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    &:hover {\n      cursor: pointer;\n      background-color: ", ";\n    }\n  "], ["\n    &:hover {\n      cursor: pointer;\n      background-color: ", ";\n    }\n  "])), N30A);
};
export var arrowsStyle = function (props) {
    var isSortable = props.isSortable, sortOrder = props.sortOrder;
    if (!isSortable) {
        return '';
    }
    var pseudoBase = css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    border: 3px solid transparent;\n    display: block;\n    height: 0;\n    position: absolute;\n    right: -", "px;\n    width: 0;\n  "], ["\n    border: 3px solid transparent;\n    display: block;\n    height: 0;\n    position: absolute;\n    right: -", "px;\n    width: 0;\n  "])), gridSize);
    return css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    & > span {\n      position: relative;\n      &::before {\n        ", ";\n        border-bottom: 3px solid\n          ", ";\n        bottom: 8px;\n        content: ' ';\n      }\n      &::after {\n        ", ";\n        border-top: 3px solid\n          ", ";\n        bottom: 0;\n        content: ' ';\n      }\n    }\n\n    &:hover > span {\n      &::before {\n        border-bottom: 3px solid\n          ", ";\n      }\n      &::after {\n        border-top: 3px solid\n          ", ";\n      }\n    }\n  "], ["\n    & > span {\n      position: relative;\n      &::before {\n        ", ";\n        border-bottom: 3px solid\n          ",
        ";\n        bottom: 8px;\n        content: ' ';\n      }\n      &::after {\n        ", ";\n        border-top: 3px solid\n          ",
        ";\n        bottom: 0;\n        content: ' ';\n      }\n    }\n\n    &:hover > span {\n      &::before {\n        border-bottom: 3px solid\n          ",
        ";\n      }\n      &::after {\n        border-top: 3px solid\n          ",
        ";\n      }\n    }\n  "])), pseudoBase, sortOrder === ASC
        ? arrow.selectedColor(props)
        : arrow.defaultColor(props), pseudoBase, sortOrder === DESC
        ? arrow.selectedColor(props)
        : arrow.defaultColor(props), sortOrder === ASC
        ? arrow.selectedColor(props)
        : arrow.hoverColor(props), sortOrder === DESC
        ? arrow.selectedColor(props)
        : arrow.hoverColor(props));
};
export var cellStyle = css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  border: none;\n  padding: ", "px ", "px;\n  text-align: left;\n\n  &:first-child {\n    padding-left: 0;\n  }\n  &:last-child {\n    padding-right: 0;\n  }\n"], ["\n  border: none;\n  padding: ", "px ", "px;\n  text-align: left;\n\n  &:first-child {\n    padding-left: 0;\n  }\n  &:last-child {\n    padding-right: 0;\n  }\n"])), divide(gridSize, 2), gridSize);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=constants.js.map