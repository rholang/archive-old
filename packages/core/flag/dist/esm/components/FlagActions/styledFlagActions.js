import { __makeTemplateObject } from "tslib";
import styled, { css } from 'styled-components';
import { gridSize } from '@atlaskit/theme/constants';
import { multiply } from '@atlaskit/theme/math';
import { DEFAULT_APPEARANCE } from '../Flag';
import { flagTextColor } from '../../theme';
// Outputs the styles for actions separator: mid-dot for non-bold flags, or space for bold flags.
var getDivider = function (_a) {
    var hasDivider = _a.hasDivider, useMidDot = _a.useMidDot;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: ", ";\n  content: \"", "\";\n  width: ", "px;\n"], ["\n  display: ", ";\n  content: \"", "\";\n  width: ", "px;\n"])), hasDivider ? 'inline-block' : 'none', useMidDot ? '\u00B7' : '', useMidDot ? multiply(gridSize, 2) : gridSize);
};
export default styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  padding-top: ", "px;\n  transform: ", ";\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  padding-top: ", "px;\n  transform: ",
    ";\n"])), gridSize, function (_a) {
    var appearance = _a.appearance;
    return appearance === DEFAULT_APPEARANCE ? "translateX(-" + gridSize() / 2 + "px)" : 0;
});
export var Action = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  &::before {\n    color: ", ";\n    text-align: center;\n    vertical-align: middle;\n\n    ", ";\n  }\n"], ["\n  &::before {\n    color: ", ";\n    text-align: center;\n    vertical-align: middle;\n\n    ", ";\n  }\n"])), flagTextColor, getDivider);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styledFlagActions.js.map