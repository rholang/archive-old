import { __makeTemplateObject } from "tslib";
import styled from 'styled-components';
import { themed } from '@atlaskit/theme/components';
import { gridSize, borderRadius } from '@atlaskit/theme/constants';
import { R500, DN30, N700, R50, R100 } from '@atlaskit/theme/colors';
import { buttonWidthUnitless, tagHeight, focusRingColor } from '../constants';
import { backgroundColor, backgroundColorHover, textColor, textColorHover, } from '../theme';
var gridSizeUnitless = gridSize();
var colorRemoval = themed({ light: R500, dark: DN30 });
var colorRemovalHover = themed({ light: N700, dark: DN30 });
var backgroundColorRemoval = themed({ light: R50, dark: R100 });
export var Span = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &:focus {\n    box-shadow: 0 0 0 2px ", ";\n    outline: none;\n  }\n\n  background-color: ", ";\n  color: ", ";\n  border-radius: ", ";\n  cursor: default;\n  display: flex;\n  height: ", ";\n  line-height: 1;\n  margin: ", "px;\n  padding: 0;\n  overflow: ", ";\n\n  &:hover {\n    box-shadow: none;\n    background-color: ", ";\n    color: ", ";\n  }\n"], ["\n  &:focus {\n    box-shadow: 0 0 0 2px ", ";\n    outline: none;\n  }\n\n  background-color: ",
    ";\n  color: ", ";\n  border-radius: ",
    ";\n  cursor: default;\n  display: flex;\n  height: ", ";\n  line-height: 1;\n  margin: ", "px;\n  padding: 0;\n  overflow: ",
    ";\n\n  &:hover {\n    box-shadow: none;\n    background-color: ",
    ";\n    color: ",
    ";\n  }\n"])), focusRingColor, function (p) {
    return p.markedForRemoval ? backgroundColorRemoval(p) : backgroundColor(p);
}, function (p) { return (p.markedForRemoval ? colorRemoval(p) : textColor(p)); }, function (_a) {
    var isRounded = _a.isRounded;
    return isRounded ? buttonWidthUnitless / 2 + "px" : borderRadius() + "px";
}, tagHeight, gridSizeUnitless / 2, function (_a) {
    var isRemoved = _a.isRemoved, isRemoving = _a.isRemoving;
    return isRemoved || isRemoving ? 'hidden' : 'initial';
}, function (p) {
    return p.markedForRemoval ? backgroundColorRemoval(p) : backgroundColorHover(p);
}, function (p) {
    return p.markedForRemoval ? colorRemovalHover(p) : textColorHover(p);
});
var templateObject_1;
//# sourceMappingURL=styled.js.map