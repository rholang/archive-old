import { __makeTemplateObject } from "tslib";
import styled from 'styled-components';
import { borderRadius, gridSize } from '@atlaskit/theme/constants';
import { multiply } from '@atlaskit/theme/math';
import { flagBackgroundColor, flagBorderColor, flagTextColor, flagShadowColor, flagFocusRingColor, } from '../../theme';
var getBoxShadow = function (props) {
    var borderColor = flagBorderColor(props);
    var shadowColor = flagShadowColor(props);
    var border = borderColor && "0 0 1px " + borderColor;
    var shadow = "0 20px 32px -8px " + shadowColor;
    return [border, shadow].filter(function (p) { return p; }).join(',');
};
export default styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", "px;\n  box-sizing: border-box;\n  box-shadow: ", ";\n  color: ", ";\n  padding: ", "px;\n  transition: background-color 200ms;\n  width: 100%;\n  z-index: 600;\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px ", ";\n  }\n"], ["\n  background-color: ", ";\n  border-radius: ", "px;\n  box-sizing: border-box;\n  box-shadow: ", ";\n  color: ", ";\n  padding: ", "px;\n  transition: background-color 200ms;\n  width: 100%;\n  z-index: 600;\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px ", ";\n  }\n"])), flagBackgroundColor, borderRadius, getBoxShadow, flagTextColor, multiply(gridSize, 2), flagFocusRingColor);
// Header
export var Header = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  height: ", "px;\n"], ["\n  display: flex;\n  align-items: center;\n  height: ", "px;\n"])), multiply(gridSize, 4));
export var Icon = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 0 0 auto;\n  width: ", "px;\n"], ["\n  flex: 0 0 auto;\n  width: ", "px;\n"])), multiply(gridSize, 5));
export var Title = styled.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n  font-weight: 600;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], ["\n  color: ", ";\n  font-weight: 600;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])), flagTextColor);
export var DismissButton = styled.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  appearance: none;\n  background: none;\n  border: none;\n  border-radius: ", "px;\n  color: ", ";\n  cursor: pointer;\n  flex: 0 0 auto;\n  line-height: 1;\n  margin-left: ", "px;\n  padding: 0;\n  white-space: nowrap;\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px ", ";\n  }\n"], ["\n  appearance: none;\n  background: none;\n  border: none;\n  border-radius: ", "px;\n  color: ", ";\n  cursor: pointer;\n  flex: 0 0 auto;\n  line-height: 1;\n  margin-left: ", "px;\n  padding: 0;\n  white-space: nowrap;\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px ", ";\n  }\n"])), borderRadius, flagTextColor, gridSize, flagFocusRingColor);
// Content
export var Content = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  flex: 1 1 100%;\n  flex-direction: column;\n  justify-content: center;\n  min-width: 0;\n  padding: 0 0 0 ", "px;\n"], ["\n  display: flex;\n  flex: 1 1 100%;\n  flex-direction: column;\n  justify-content: center;\n  min-width: 0;\n  padding: 0 0 0 ", "px;\n"])), multiply(gridSize, 5));
export var Expander = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  max-height: ", "px;\n  opacity: ", ";\n  overflow: ", ";\n  transition: max-height 0.3s, opacity 0.3s;\n"], ["\n  max-height: ", "px;\n  opacity: ", ";\n  overflow: ",
    ";\n  transition: max-height 0.3s, opacity 0.3s;\n"])), function (_a) {
    var isExpanded = _a.isExpanded;
    return (isExpanded ? 150 : 0);
}, function (_a) {
    var isExpanded = _a.isExpanded;
    return (isExpanded ? 1 : 0);
}, function (_a) {
    var isExpanded = _a.isExpanded;
    return isExpanded ? 'visible' : 'hidden';
});
export var Description = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  color: ", ";\n  word-wrap: break-word;\n"], ["\n  color: ", ";\n  word-wrap: break-word;\n"])), flagTextColor);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=styledFlag.js.map