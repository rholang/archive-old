"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/* eslint-disable no-mixed-operators */
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var elevation_1 = require("@atlaskit/theme/elevation");
var sliderThumbSize = 16;
var sliderThumbBorderThickness = 2;
var sliderLineThickness = 4;
var transitionDuration = '0.2s';
exports.overallHeight = 40;
var getBackgroundGradient = function (_a, percent) {
    var lower = _a.lower, upper = _a.upper;
    return styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    background: linear-gradient(", ", ", ") 0 / ", "% 100%\n      no-repeat ", ";\n    [dir='rtl'] & {\n      background-position: right;\n    }\n  "], ["\n    background: linear-gradient(", ", ", ") 0 / ", "% 100%\n      no-repeat ", ";\n    [dir='rtl'] & {\n      background-position: right;\n    }\n  "])), lower, lower, percent, upper);
};
var sliderThumbStyle = styled_components_1.css(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  background: ", ";\n  border: ", "px solid transparent;\n  border-radius: 50%;\n  height: ", "px;\n  width: ", "px;\n  box-sizing: border-box;\n  ", ";\n"], ["\n  background: ", ";\n  border: ", "px solid transparent;\n  border-radius: 50%;\n  height: ", "px;\n  width: ", "px;\n  box-sizing: border-box;\n  ", ";\n"])), function (_a) {
    var thumb = _a.thumb;
    return thumb.default.background;
}, sliderThumbBorderThickness, sliderThumbSize, sliderThumbSize, elevation_1.e200);
var sliderThumbFocusedStyle = styled_components_1.css(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  border-color: ", ";\n"], ["\n  border-color: ", ";\n"])), function (_a) {
    var thumb = _a.thumb;
    return thumb.focus.border;
});
var sliderThumbDisabledStyle = styled_components_1.css(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  cursor: not-allowed;\n  box-shadow: 0 0 1px ", ";\n"], ["\n  cursor: not-allowed;\n  box-shadow: 0 0 1px ", ";\n"])), function (_a) {
    var thumb = _a.thumb;
    return thumb.disabled.boxShadow;
});
var sliderDefaultBackground = function (props) {
    return getBackgroundGradient(props.track.default, props.valuePercent);
};
var sliderTrackStyle = styled_components_1.css(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  background: ", ";\n  border-radius: ", "px;\n  border: 0;\n  cursor: pointer;\n  height: ", "px;\n  width: 100%;\n  ", ";\n"], ["\n  background: ", ";\n  border-radius: ", "px;\n  border: 0;\n  cursor: pointer;\n  height: ", "px;\n  width: 100%;\n  ", ";\n"])), function (_a) {
    var track = _a.track;
    return track.background;
}, sliderLineThickness / 2, sliderLineThickness, sliderDefaultBackground);
var sliderTrackDisabledStyle = styled_components_1.css(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  ", "\n  cursor: not-allowed;\n"], ["\n  ",
    "\n  cursor: not-allowed;\n"])), function (props) {
    return getBackgroundGradient(props.track.disabled, props.valuePercent);
});
var sliderTrackFocusedStyle = function (props) {
    return getBackgroundGradient(props.track.hover, props.valuePercent);
};
var chromeRangeInputStyle = styled_components_1.css(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    margin-top: -", "px;\n    transition: border-color ", " ease-in-out;\n    ", ";\n  }\n\n  &:focus::-webkit-slider-thumb {\n    ", ";\n  }\n\n  &:disabled::-webkit-slider-thumb {\n    ", ";\n  }\n\n  &::-webkit-slider-runnable-track {\n    transition: background-color ", " ease-in-out;\n    ", ";\n  }\n\n  &:focus::-webkit-slider-runnable-track {\n    ", ";\n  }\n\n  &:active::-webkit-slider-runnable-track,\n  &:hover::-webkit-slider-runnable-track {\n    ", ";\n  }\n\n  &:disabled::-webkit-slider-runnable-track {\n    ", ";\n  }\n"], ["\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    margin-top: -", "px;\n    transition: border-color ", " ease-in-out;\n    ", ";\n  }\n\n  &:focus::-webkit-slider-thumb {\n    ", ";\n  }\n\n  &:disabled::-webkit-slider-thumb {\n    ", ";\n  }\n\n  &::-webkit-slider-runnable-track {\n    transition: background-color ", " ease-in-out;\n    ", ";\n  }\n\n  &:focus::-webkit-slider-runnable-track {\n    ", ";\n  }\n\n  &:active::-webkit-slider-runnable-track,\n  &:hover::-webkit-slider-runnable-track {\n    ", ";\n  }\n\n  &:disabled::-webkit-slider-runnable-track {\n    ", ";\n  }\n"])), sliderThumbSize / 2 - sliderLineThickness / 2, transitionDuration, sliderThumbStyle, sliderThumbFocusedStyle, sliderThumbDisabledStyle, transitionDuration, sliderTrackStyle, sliderDefaultBackground, sliderTrackFocusedStyle, sliderTrackDisabledStyle);
var firefoxRangeInputStyle = styled_components_1.css(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-moz-range-thumb {\n    transition: border-color ", " ease-in-out;\n    ", ";\n  }\n\n  &:focus::-moz-range-thumb {\n    ", ";\n  }\n\n  &:disabled::-moz-range-thumb {\n    ", ";\n  }\n\n  &::-moz-range-track {\n    transition: background-color ", " ease-in-out;\n    ", ";\n  }\n\n  &:focus::-moz-range-track {\n    ", ";\n  }\n\n  &:active::-moz-range-track,\n  &:hover::-moz-range-track {\n    ", ";\n  }\n\n  &:disabled::-moz-range-track {\n    ", ";\n  }\n"], ["\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-moz-range-thumb {\n    transition: border-color ", " ease-in-out;\n    ", ";\n  }\n\n  &:focus::-moz-range-thumb {\n    ", ";\n  }\n\n  &:disabled::-moz-range-thumb {\n    ", ";\n  }\n\n  &::-moz-range-track {\n    transition: background-color ", " ease-in-out;\n    ", ";\n  }\n\n  &:focus::-moz-range-track {\n    ", ";\n  }\n\n  &:active::-moz-range-track,\n  &:hover::-moz-range-track {\n    ", ";\n  }\n\n  &:disabled::-moz-range-track {\n    ", ";\n  }\n"])), transitionDuration, sliderThumbStyle, sliderThumbFocusedStyle, sliderThumbDisabledStyle, transitionDuration, sliderTrackStyle, sliderDefaultBackground, sliderTrackFocusedStyle, sliderTrackDisabledStyle);
var IERangeInputStyle = styled_components_1.css(templateObject_9 || (templateObject_9 = tslib_1.__makeTemplateObject(["\n  &::-ms-thumb {\n    margin-top: 0;\n    transition: border-color ", " ease-in-out;\n    ", ";\n  }\n\n  &:focus::-ms-thumb {\n    ", ";\n  }\n\n  &:disabled::-ms-thumb {\n    ", ";\n  }\n\n  &::-ms-track {\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n    cursor: pointer;\n    height: ", "px;\n    transition: background-color ", " ease-in-out;\n    width: 100%;\n  }\n\n  &::-ms-fill-lower {\n    background: ", ";\n    border-radius: ", "px;\n    border: 0;\n  }\n\n  &::-ms-fill-upper {\n    background: ", ";\n    border-radius: ", "px;\n    border: 0;\n  }\n\n  &:active::-ms-fill-lower,\n  &:hover::-ms-fill-lower {\n    background: ", ";\n  }\n\n  &:active::-ms-fill-upper,\n  &:hover::-ms-fill-upper {\n    background: ", ";\n  }\n\n  &:disabled::-ms-fill-lower {\n    background: ", ";\n  }\n\n  &:disabled::-ms-fill-upper {\n    background: ", ";\n  }\n"], ["\n  &::-ms-thumb {\n    margin-top: 0;\n    transition: border-color ", " ease-in-out;\n    ", ";\n  }\n\n  &:focus::-ms-thumb {\n    ", ";\n  }\n\n  &:disabled::-ms-thumb {\n    ", ";\n  }\n\n  &::-ms-track {\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n    cursor: pointer;\n    height: ", "px;\n    transition: background-color ", " ease-in-out;\n    width: 100%;\n  }\n\n  &::-ms-fill-lower {\n    background: ", ";\n    border-radius: ", "px;\n    border: 0;\n  }\n\n  &::-ms-fill-upper {\n    background: ", ";\n    border-radius: ", "px;\n    border: 0;\n  }\n\n  &:active::-ms-fill-lower,\n  &:hover::-ms-fill-lower {\n    background: ", ";\n  }\n\n  &:active::-ms-fill-upper,\n  &:hover::-ms-fill-upper {\n    background: ", ";\n  }\n\n  &:disabled::-ms-fill-lower {\n    background: ", ";\n  }\n\n  &:disabled::-ms-fill-upper {\n    background: ", ";\n  }\n"])), transitionDuration, sliderThumbStyle, sliderThumbFocusedStyle, sliderThumbDisabledStyle, sliderLineThickness, transitionDuration, function (_a) {
    var track = _a.track;
    return track.default.lower;
}, sliderLineThickness / 2, function (_a) {
    var track = _a.track;
    return track.default.upper;
}, sliderLineThickness / 2, function (_a) {
    var track = _a.track;
    return track.hover.lower;
}, function (_a) {
    var track = _a.track;
    return track.hover.upper;
}, function (_a) {
    var track = _a.track;
    return track.disabled.lower;
}, function (_a) {
    var track = _a.track;
    return track.disabled.upper;
});
exports.rangeInputStyle = styled_components_1.css(templateObject_10 || (templateObject_10 = tslib_1.__makeTemplateObject(["\n  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n  background: transparent; /* Otherwise white in Chrome */\n  height: ", "px; /* Otherwise thumb will collide with previous box element */\n  padding: 0; /* IE11 includes padding, this normalises it */\n  width: 100%; /* Specific width is required for Firefox. */\n\n  &:focus {\n    outline: none;\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n  }\n\n  ", " ", " ", ";\n  background-position: right;\n"], ["\n  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n  background: transparent; /* Otherwise white in Chrome */\n  height: ", "px; /* Otherwise thumb will collide with previous box element */\n  padding: 0; /* IE11 includes padding, this normalises it */\n  width: 100%; /* Specific width is required for Firefox. */\n\n  &:focus {\n    outline: none;\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n  }\n\n  ", " ", " ", ";\n  background-position: right;\n"])), exports.overallHeight, chromeRangeInputStyle, firefoxRangeInputStyle, IERangeInputStyle);
exports.Input = styled_components_1.default.input(templateObject_11 || (templateObject_11 = tslib_1.__makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), exports.rangeInputStyle);
exports.Input.displayName = 'InputRange';
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
//# sourceMappingURL=styled.js.map