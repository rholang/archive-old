"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var components_1 = require("@atlaskit/theme/components");
var constants_1 = require("@atlaskit/theme/constants");
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
var math_1 = require("@atlaskit/theme/math");
var TRANSITION_DURATION = '0.25s ease-in-out';
/* Container */
exports.getMaxHeight = function (_a) {
    var appearance = _a.appearance;
    return appearance === 'announcement' ? '88px' : '52px';
};
exports.backgroundColor = components_1.themed('appearance', {
    error: { light: colors.R400, dark: colors.R300 },
    warning: { light: colors.Y300, dark: colors.Y300 },
    announcement: { light: colors.N500, dark: colors.N500 },
});
exports.Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  max-height: ", ";\n  overflow: ", ";\n  background-color: ", ";\n"], ["\n  max-height: ", ";\n  overflow: ",
    ";\n  background-color: ", ";\n"])), exports.getMaxHeight, function (_a) {
    var appearance = _a.appearance;
    return appearance === 'announcement' ? 'scroll' : 'visible';
}, exports.backgroundColor);
exports.testErrorBackgroundColor = colors.R400;
exports.testErrorTextColor = colors.N0;
exports.textColor = components_1.themed('appearance', {
    error: { light: colors.N0, dark: colors.DN40 },
    warning: { light: colors.N700, dark: colors.DN40 },
    announcement: { light: colors.N0, dark: colors.N0 },
});
exports.Content = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  color: ", ";\n  display: flex;\n  fill: ", ";\n  font-weight: 500;\n  justify-content: center;\n  padding: ", "px;\n  text-align: center;\n  ", "\n\n  margin: auto;\n  ", " transition: color ", ";\n\n  a,\n  a:visited,\n  a:hover,\n  a:active,\n  a:focus {\n    color: ", ";\n    text-decoration: underline;\n  }\n"], ["\n  align-items: center;\n  background-color: ", ";\n  color: ", ";\n  display: flex;\n  fill: ", ";\n  font-weight: 500;\n  justify-content: center;\n  padding: ", "px;\n  text-align: center;\n  ", /* transition: color ${TRANSITION_DURATION}; */ "\n\n  margin: auto;\n  ",
    " transition: color ", ";\n\n  a,\n  a:visited,\n  a:hover,\n  a:active,\n  a:focus {\n    color: ", ";\n    text-decoration: underline;\n  }\n"])), exports.backgroundColor, exports.textColor, exports.backgroundColor, math_1.multiply(constants_1.gridSize, 1.5), '' /* transition: color ${TRANSITION_DURATION}; */, function (_a) {
    var appearance = _a.appearance;
    return appearance === 'announcement'
        ? 'max-width: 876px;'
        : '';
}, TRANSITION_DURATION, exports.textColor);
exports.Icon = styled_components_1.default.span(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 auto;\n"], ["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 auto;\n"])));
var textOverflow = function (_a) {
    var appearance = _a.appearance;
    return appearance === 'announcement'
        ? ''
        : styled_components_1.css(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      "], ["\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      "])));
};
exports.Visibility = styled_components_1.default.div(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  max-height: ", "px;\n  overflow: hidden;\n  transition: max-height ", ";\n"], ["\n  max-height: ",
    "px;\n  overflow: hidden;\n  transition: max-height ", ";\n"])), function (props) {
    return props.isOpen ? props.bannerHeight : 0;
}, TRANSITION_DURATION);
exports.Text = styled_components_1.default.span(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  flex: 0 1 auto;\n  padding: ", "px;\n  ", ";\n  overflow: hidden;\n"], ["\n  flex: 0 1 auto;\n  padding: ", "px;\n  ", ";\n  overflow: hidden;\n"])), math_1.divide(constants_1.gridSize, 2), textOverflow);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=styled.js.map