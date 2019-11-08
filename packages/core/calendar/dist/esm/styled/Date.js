import { __makeTemplateObject } from "tslib";
import styled, { css } from 'styled-components';
import { themed } from '@atlaskit/theme/components';
import * as colors from '@atlaskit/theme/colors';
var getTransparent = themed({ light: 'transparent', dark: 'transparent' });
var selectedBackground = themed({ light: colors.N500, dark: colors.N0 });
var prevSelectedBackground = themed({ light: colors.B50, dark: colors.B50 });
var textDisabled = themed({ light: colors.N40, dark: colors.N40 });
var textHoverSelected = themed({ light: colors.N600, dark: colors.N600 });
var textPreviouslySelected = themed({
    light: colors.N600,
    dark: colors.N600,
});
var textSelected = themed({ light: colors.N0, dark: colors.N700 });
var textSibling = themed({ light: colors.N200, dark: colors.N200 });
var hoverPreviouslySelectedBackground = themed({
    light: colors.B50,
    dark: colors.B50,
});
var isActiveBackground = themed({ light: colors.B50, dark: colors.B50 });
var hoverBackground = themed({ light: colors.N30, dark: colors.N800 });
var getBackgroundColorSelectedAfter = themed({
    light: colors.N700,
    dark: colors.N700,
});
var getBackgroundColorsAfter = function (props) {
    return props.selected
        ? getBackgroundColorSelectedAfter(props)
        : colors.primary(props);
};
var getBorderColorFocused = themed({ light: colors.B100, dark: colors.B75 });
var getBorderColors = function (props) {
    return props.focused ? getBorderColorFocused(props) : getTransparent(props);
};
function getBackgroundColor(props) {
    if (props.selected)
        return selectedBackground(props);
    if (props.previouslySelected)
        return prevSelectedBackground(props);
    return getTransparent(props);
}
function getColor(props) {
    if (props.disabled)
        return textDisabled(props);
    if (props.selected)
        return textSelected(props);
    if (props.previouslySelected)
        return textPreviouslySelected(props);
    if (props.isToday)
        return colors.primary(props);
    if (props.sibling)
        return textSibling(props);
    return colors.text(props);
}
function getHoverBackgroundColor(props) {
    if (props.disabled)
        return getTransparent(props);
    if (props.previouslySelected)
        return hoverPreviouslySelectedBackground(props);
    if (props.isActive)
        return isActiveBackground(props);
    return hoverBackground(props);
}
var getHoverColor = function (props) {
    if (props.sibling)
        return textSibling(props);
    if (props.disabled)
        return textDisabled(props);
    if (props.selected || props.previouslySelected || props.isActive)
        return textHoverSelected(props);
    return colors.text(props);
};
export var DateDiv = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 3px;\n  color: ", ";\n  cursor: ", ";\n  font-size: 14px;\n  padding: 4px 9px;\n  position: relative;\n  text-align: center;\n\n  ", " &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 3px;\n  color: ", ";\n  cursor: ", ";\n  font-size: 14px;\n  padding: 4px 9px;\n  position: relative;\n  text-align: center;\n\n  ",
    " &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n"])), getBackgroundColor, getBorderColors, getColor, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 'not-allowed' : 'pointer');
}, function (props) {
    return props.isToday
        ? css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          font-weight: bold;\n          &::after {\n            background-color: ", ";\n            bottom: 2px;\n            content: '';\n            display: block;\n            height: 2px;\n            left: 2px;\n            position: absolute;\n            right: 2px;\n          }\n        "], ["\n          font-weight: bold;\n          &::after {\n            background-color: ", ";\n            bottom: 2px;\n            content: '';\n            display: block;\n            height: 2px;\n            left: 2px;\n            position: absolute;\n            right: 2px;\n          }\n        "])), getBackgroundColorsAfter(props)) : '';
}, getHoverBackgroundColor, getHoverColor);
export var DateTd = styled.td(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border: 0;\n  padding: 0;\n  text-align: center;\n"], ["\n  border: 0;\n  padding: 0;\n  text-align: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Date.js.map