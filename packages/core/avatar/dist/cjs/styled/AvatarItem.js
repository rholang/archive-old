"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var components_1 = require("@atlaskit/theme/components");
var constants_1 = require("@atlaskit/theme/constants");
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
var math_1 = require("@atlaskit/theme/math");
var focusBorderColor = components_1.themed({ light: colors.B200, dark: colors.B75 });
var textColors = components_1.themed({ light: colors.N900, dark: colors.DN600 });
var subtleTextColors = components_1.themed({ light: colors.N200, dark: colors.DN300 });
function getBackgroundColor(_a) {
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
exports.getBackgroundColor = getBackgroundColor;
function getStyles(_a) {
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
    return styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    align-items: center;\n    background-color: ", ";\n    border-radius: ", "px;\n    border: 2px solid ", ";\n    box-sizing: content-box;\n    color: inherit;\n    cursor: ", ";\n    display: flex;\n    font-size: inherit;\n    font-style: normal;\n    font-weight: normal;\n    line-height: 1;\n    opacity: ", ";\n    outline: ", ";\n    margin: 0;\n    padding: ", "px;\n    pointer-events: ", ";\n    text-align: left;\n    text-decoration: none;\n    width: 100%;\n  "], ["\n    align-items: center;\n    background-color: ", ";\n    border-radius: ", "px;\n    border: 2px solid ", ";\n    box-sizing: content-box;\n    color: inherit;\n    cursor: ", ";\n    display: flex;\n    font-size: inherit;\n    font-style: normal;\n    font-weight: normal;\n    line-height: 1;\n    opacity: ", ";\n    outline: ", ";\n    margin: 0;\n    padding: ", "px;\n    pointer-events: ", ";\n    text-align: left;\n    text-decoration: none;\n    width: 100%;\n  "])), getBackgroundColor, constants_1.borderRadius, borderColor, cursor, opacity, outline, math_1.divide(constants_1.gridSize, 2), pointerEvents);
}
exports.getStyles = getStyles;
var truncateText = function (p) {
    return p.truncate && styled_components_1.css(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n    overflow-x: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  "], ["\n    overflow-x: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  "])));
};
exports.Content = styled_components_1.default.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  ", "\n  flex: 1 1 100%;\n  line-height: 1.4;\n  padding-left: ", "px;\n"], ["\n  ",
    "\n  flex: 1 1 100%;\n  line-height: 1.4;\n  padding-left: ", "px;\n"])), function (truncate) {
    return truncate && styled_components_1.css(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n      max-width: 100%;\n      min-width: 0;\n    "], ["\n      max-width: 100%;\n      min-width: 0;\n    "])));
}, constants_1.gridSize);
exports.PrimaryText = components_1.withTheme(styled_components_1.default.div(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  ", " color: ", ";\n"], ["\n  ", " color: ", ";\n"])), truncateText, textColors));
exports.SecondaryText = components_1.withTheme(styled_components_1.default.div(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  ", " color: ", ";\n  font-size: 0.85em;\n"], ["\n  ", " color: ", ";\n  font-size: 0.85em;\n"])), truncateText, subtleTextColors));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=AvatarItem.js.map