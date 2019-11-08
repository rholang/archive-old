import { __makeTemplateObject } from "tslib";
import styled from 'styled-components';
import { themed } from '@atlaskit/theme/components';
import { borderRadius, gridSize } from '@atlaskit/theme/constants';
import * as colors from '@atlaskit/theme/colors';
import { divide } from '@atlaskit/theme/math';
function lockSelectedColor(normal) {
    var selected = { light: colors.B400, dark: colors.B100 };
    return themed('status', { normal: normal, selected: selected });
}
var labelColor = lockSelectedColor({
    light: colors.N500,
    dark: colors.DN400,
});
var activeLabelColor = lockSelectedColor({
    light: colors.B500,
    dark: colors.B200,
});
var focusLabelColor = lockSelectedColor({
    light: colors.B100,
    dark: colors.B100,
});
var hoverLabelColor = lockSelectedColor({
    light: colors.B400,
    dark: colors.B75,
});
var underlineColor = lockSelectedColor({
    light: colors.N30,
    dark: colors.DN0,
});
var underlineHeight = '2px';
/*
  NOTE min-height attribute
  FF http://stackoverflow.com/questions/28636832/firefox-overflow-y-not-working-with-nested-flexbox
*/
// Tabs
export var Tabs = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-basis: 100%;\n  flex-direction: column;\n  flex-grow: 1;\n  max-width: 100%;\n  min-height: 0%; /* See min-height note */\n"], ["\n  display: flex;\n  flex-basis: 100%;\n  flex-direction: column;\n  flex-grow: 1;\n  max-width: 100%;\n  min-height: 0%; /* See min-height note */\n"])));
// TabPane
export var TabPane = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-grow: 1;\n  min-height: 0%; /* See min-height note */\n  padding-left: ", "px;\n  padding-right: ", "px;\n"], ["\n  display: flex;\n  flex-grow: 1;\n  min-height: 0%; /* See min-height note */\n  padding-left: ", "px;\n  padding-right: ", "px;\n"])), gridSize, gridSize);
// TabNav
export var NavWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
export var Nav = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  font-weight: 500;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n"], ["\n  display: flex;\n  font-weight: 500;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n"])));
export var NavLine = styled.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", ";\n  bottom: 0;\n  content: '';\n  height: ", ";\n  left: ", "px;\n  margin: 0;\n  position: absolute;\n  right: ", "px;\n  width: inherit;\n"], ["\n  background-color: ", ";\n  border-radius: ", ";\n  bottom: 0;\n  content: '';\n  height: ", ";\n  left: ", "px;\n  margin: 0;\n  position: absolute;\n  right: ", "px;\n  width: inherit;\n"])), underlineColor, underlineHeight, underlineHeight, gridSize, gridSize);
export var NavItem = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: ", ";\n  cursor: pointer;\n  line-height: 1.8;\n  margin: 0;\n  padding: ", "px ", "px;\n  position: relative;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  &:hover {\n    color: ", ";\n  }\n  &:active,\n  &:active::before {\n    color: ", ";\n  }\n\n  &:focus {\n    border-radius: ", "px;\n    box-shadow: 0 0 0 2px ", " inset;\n    outline: none;\n  }\n"], ["\n  color: ", ";\n  cursor: pointer;\n  line-height: 1.8;\n  margin: 0;\n  padding: ", "px ", "px;\n  position: relative;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  &:hover {\n    color: ", ";\n  }\n  &:active,\n  &:active::before {\n    color: ", ";\n  }\n\n  &:focus {\n    border-radius: ", "px;\n    box-shadow: 0 0 0 2px ", " inset;\n    outline: none;\n  }\n"])), labelColor, divide(gridSize, 2), gridSize, hoverLabelColor, activeLabelColor, borderRadius, focusLabelColor);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=styled.js.map