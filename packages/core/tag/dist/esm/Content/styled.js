import { __makeTemplateObject, __rest } from "tslib";
import styled, { css } from 'styled-components';
import { gridSize, fontSize } from '@atlaskit/theme/constants';
import { link, linkHover } from '@atlaskit/theme/colors';
import { divide } from '@atlaskit/theme/math';
import { buttonWidthUnitless, maxTextWidth, maxTextWidthUnitless, } from '../constants';
// Common styles for Text & Link
var COMMON_STYLES = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: ", "px;\n  font-weight: normal;\n  line-height: 1;\n  margin-left: ", "px;\n  margin-right: ", "px;\n  padding: 2px 0;\n  max-width: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], ["\n  font-size: ", "px;\n  font-weight: normal;\n  line-height: 1;\n  margin-left: ", "px;\n  margin-right: ", "px;\n  padding: 2px 0;\n  max-width: ",
    ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])), fontSize, divide(gridSize, 2), divide(gridSize, 2), function (_a) {
    var isRemovable = _a.isRemovable;
    return isRemovable
        ? maxTextWidthUnitless - buttonWidthUnitless + "px"
        : maxTextWidth;
});
export var Text = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), COMMON_STYLES);
// Styles exclusive to Link
var getFocusedStyles = function (_a) {
    var isFocused = _a.isFocused, color = _a.color, rest = __rest(_a, ["isFocused", "color"]);
    if (color !== 'standard')
        return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      color: inherit;\n    "], ["\n      color: inherit;\n    "])));
    if (isFocused)
        return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), link(rest));
    return null;
};
export var linkStyles = css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", " ", " text-decoration: ", ";\n\n  &:hover {\n    color: ", ";\n    ", ";\n  }\n"], ["\n  ", " ", " text-decoration: ",
    ";\n\n  &:hover {\n    color: ", ";\n    ",
    ";\n  }\n"])), COMMON_STYLES, getFocusedStyles, function (_a) {
    var color = _a.color;
    return (color === 'standard' ? 'none' : 'underline');
}, linkHover, function (_a) {
    var color = _a.color;
    return color === 'standard'
        ? ''
        : css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            color: inherit;\n          "], ["\n            color: inherit;\n          "])));
});
export var Link = styled.a(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), linkStyles);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=styled.js.map