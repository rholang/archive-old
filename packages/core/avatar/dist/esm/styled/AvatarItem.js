import { __makeTemplateObject } from "tslib";
import styled, { css } from 'styled-components';
import { themed, withTheme } from '@atlaskit/theme/components';
import { borderRadius, gridSize } from '@atlaskit/theme/constants';
import * as colors from '@atlaskit/theme/colors';
import { divide } from '@atlaskit/theme/math';
var focusBorderColor = themed({ light: colors.B200, dark: colors.B75 });
var textColors = themed({ light: colors.N900, dark: colors.DN600 });
var subtleTextColors = themed({ light: colors.N200, dark: colors.DN300 });
export function getBackgroundColor(_a) {
    var backgroundColor = _a.backgroundColor, href = _a.href, isActive = _a.isActive, isHover = _a.isHover, isSelected = _a.isSelected, onClick = _a.onClick;
    var isInteractive = href || onClick;
    var themedBackgroundColor = backgroundColor || colors.background;
    // Interaction: Hover
    if (isInteractive && (isHover || isSelected)) {
        themedBackgroundColor = colors.backgroundHover;
    }
    // Interaction: Active
    if (isInteractive && isActive) {
        themedBackgroundColor = colors.backgroundActive;
    }
    return themedBackgroundColor;
}
export function getStyles(_a) {
    var isInteractive = _a.isInteractive, isActive = _a.isActive, isDisabled = _a.isDisabled, isFocus = _a.isFocus;
    var borderColor = 'transparent';
    var cursor = 'auto';
    var opacity = 1;
    var outline = 'none';
    var pointerEvents = 'auto';
    // Interaction: Focus
    if (isInteractive && isFocus && !isActive) {
        outline = 'none';
        borderColor = focusBorderColor;
    }
    // Disabled
    if (isDisabled) {
        cursor = 'not-allowed';
        opacity = 0.75;
        pointerEvents = 'none';
    }
    // Interactive
    if (isInteractive) {
        cursor = 'pointer';
    }
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    align-items: center;\n    background-color: ", ";\n    border-radius: ", "px;\n    border: 2px solid ", ";\n    box-sizing: content-box;\n    color: inherit;\n    cursor: ", ";\n    display: flex;\n    font-size: inherit;\n    font-style: normal;\n    font-weight: normal;\n    line-height: 1;\n    opacity: ", ";\n    outline: ", ";\n    margin: 0;\n    padding: ", "px;\n    pointer-events: ", ";\n    text-align: left;\n    text-decoration: none;\n    width: 100%;\n  "], ["\n    align-items: center;\n    background-color: ", ";\n    border-radius: ", "px;\n    border: 2px solid ", ";\n    box-sizing: content-box;\n    color: inherit;\n    cursor: ", ";\n    display: flex;\n    font-size: inherit;\n    font-style: normal;\n    font-weight: normal;\n    line-height: 1;\n    opacity: ", ";\n    outline: ", ";\n    margin: 0;\n    padding: ", "px;\n    pointer-events: ", ";\n    text-align: left;\n    text-decoration: none;\n    width: 100%;\n  "])), getBackgroundColor, borderRadius, borderColor, cursor, opacity, outline, divide(gridSize, 2), pointerEvents);
}
var truncateText = function (p) {
    return p.truncate && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    overflow-x: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  "], ["\n    overflow-x: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  "])));
};
export var Content = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n  flex: 1 1 100%;\n  line-height: 1.4;\n  padding-left: ", "px;\n"], ["\n  ",
    "\n  flex: 1 1 100%;\n  line-height: 1.4;\n  padding-left: ", "px;\n"])), function (truncate) {
    return truncate && css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      max-width: 100%;\n      min-width: 0;\n    "], ["\n      max-width: 100%;\n      min-width: 0;\n    "])));
}, gridSize);
export var PrimaryText = withTheme(styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", " color: ", ";\n"], ["\n  ", " color: ", ";\n"])), truncateText, textColors));
export var SecondaryText = withTheme(styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", " color: ", ";\n  font-size: 0.85em;\n"], ["\n  ", " color: ", ";\n  font-size: 0.85em;\n"])), truncateText, subtleTextColors));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=AvatarItem.js.map