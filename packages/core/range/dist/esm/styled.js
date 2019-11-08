import { __makeTemplateObject } from "tslib";
/* eslint-disable no-mixed-operators */
import styled, { css } from 'styled-components';
import { e200 } from '@atlaskit/theme/elevation';
var sliderThumbSize = 16;
var sliderThumbBorderThickness = 2;
var sliderLineThickness = 4;
var transitionDuration = '0.2s';
export var overallHeight = 40;
var getBackgroundGradient = function (_a, percent) {
    var lower = _a.lower, upper = _a.upper;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background: linear-gradient(", ", ", ") 0 / ", "% 100%\n      no-repeat ", ";\n    [dir='rtl'] & {\n      background-position: right;\n    }\n  "], ["\n    background: linear-gradient(", ", ", ") 0 / ", "% 100%\n      no-repeat ", ";\n    [dir='rtl'] & {\n      background-position: right;\n    }\n  "])), lower, lower, percent, upper);
};
var sliderThumbStyle = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: ", ";\n  border: ", "px solid transparent;\n  border-radius: 50%;\n  height: ", "px;\n  width: ", "px;\n  box-sizing: border-box;\n  ", ";\n"], ["\n  background: ", ";\n  border: ", "px solid transparent;\n  border-radius: 50%;\n  height: ", "px;\n  width: ", "px;\n  box-sizing: border-box;\n  ", ";\n"])), function (_a) {
    var thumb = _a.thumb;
    return thumb.default.background;
}, sliderThumbBorderThickness, sliderThumbSize, sliderThumbSize, e200);
var sliderThumbFocusedStyle = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  border-color: ", ";\n"], ["\n  border-color: ", ";\n"])), function (_a) {
    var thumb = _a.thumb;
    return thumb.focus.border;
});
var sliderThumbDisabledStyle = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  cursor: not-allowed;\n  box-shadow: 0 0 1px ", ";\n"], ["\n  cursor: not-allowed;\n  box-shadow: 0 0 1px ", ";\n"])), function (_a) {
    var thumb = _a.thumb;
    return thumb.disabled.boxShadow;
});
var sliderDefaultBackground = function (props) {
    return getBackgroundGradient(props.track.default, props.valuePercent);
};
var sliderTrackStyle = css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background: ", ";\n  border-radius: ", "px;\n  border: 0;\n  cursor: pointer;\n  height: ", "px;\n  width: 100%;\n  ", ";\n"], ["\n  background: ", ";\n  border-radius: ", "px;\n  border: 0;\n  cursor: pointer;\n  height: ", "px;\n  width: 100%;\n  ", ";\n"])), function (_a) {
    var track = _a.track;
    return track.background;
}, sliderLineThickness / 2, sliderLineThickness, sliderDefaultBackground);
var sliderTrackDisabledStyle = css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n  cursor: not-allowed;\n"], ["\n  ",
    "\n  cursor: not-allowed;\n"])), function (props) {
    return getBackgroundGradient(props.track.disabled, props.valuePercent);
});
var sliderTrackFocusedStyle = function (props) {
    return getBackgroundGradient(props.track.hover, props.valuePercent);
};
var chromeRangeInputStyle = css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    margin-top: -", "px;\n    transition: border-color ", " ease-in-out;\n    ", ";\n  }\n\n  &:focus::-webkit-slider-thumb {\n    ", ";\n  }\n\n  &:disabled::-webkit-slider-thumb {\n    ", ";\n  }\n\n  &::-webkit-slider-runnable-track {\n    transition: background-color ", " ease-in-out;\n    ", ";\n  }\n\n  &:focus::-webkit-slider-runnable-track {\n    ", ";\n  }\n\n  &:active::-webkit-slider-runnable-track,\n  &:hover::-webkit-slider-runnable-track {\n    ", ";\n  }\n\n  &:disabled::-webkit-slider-runnable-track {\n    ", ";\n  }\n"], ["\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    margin-top: -", "px;\n    transition: border-color ", " ease-in-out;\n    ", ";\n  }\n\n  &:focus::-webkit-slider-thumb {\n    ", ";\n  }\n\n  &:disabled::-webkit-slider-thumb {\n    ", ";\n  }\n\n  &::-webkit-slider-runnable-track {\n    transition: background-color ", " ease-in-out;\n    ", ";\n  }\n\n  &:focus::-webkit-slider-runnable-track {\n    ", ";\n  }\n\n  &:active::-webkit-slider-runnable-track,\n  &:hover::-webkit-slider-runnable-track {\n    ", ";\n  }\n\n  &:disabled::-webkit-slider-runnable-track {\n    ", ";\n  }\n"])), sliderThumbSize / 2 - sliderLineThickness / 2, transitionDuration, sliderThumbStyle, sliderThumbFocusedStyle, sliderThumbDisabledStyle, transitionDuration, sliderTrackStyle, sliderDefaultBackground, sliderTrackFocusedStyle, sliderTrackDisabledStyle);
var firefoxRangeInputStyle = css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-moz-range-thumb {\n    transition: border-color ", " ease-in-out;\n    ", ";\n  }\n\n  &:focus::-moz-range-thumb {\n    ", ";\n  }\n\n  &:disabled::-moz-range-thumb {\n    ", ";\n  }\n\n  &::-moz-range-track {\n    transition: background-color ", " ease-in-out;\n    ", ";\n  }\n\n  &:focus::-moz-range-track {\n    ", ";\n  }\n\n  &:active::-moz-range-track,\n  &:hover::-moz-range-track {\n    ", ";\n  }\n\n  &:disabled::-moz-range-track {\n    ", ";\n  }\n"], ["\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-moz-range-thumb {\n    transition: border-color ", " ease-in-out;\n    ", ";\n  }\n\n  &:focus::-moz-range-thumb {\n    ", ";\n  }\n\n  &:disabled::-moz-range-thumb {\n    ", ";\n  }\n\n  &::-moz-range-track {\n    transition: background-color ", " ease-in-out;\n    ", ";\n  }\n\n  &:focus::-moz-range-track {\n    ", ";\n  }\n\n  &:active::-moz-range-track,\n  &:hover::-moz-range-track {\n    ", ";\n  }\n\n  &:disabled::-moz-range-track {\n    ", ";\n  }\n"])), transitionDuration, sliderThumbStyle, sliderThumbFocusedStyle, sliderThumbDisabledStyle, transitionDuration, sliderTrackStyle, sliderDefaultBackground, sliderTrackFocusedStyle, sliderTrackDisabledStyle);
var IERangeInputStyle = css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  &::-ms-thumb {\n    margin-top: 0;\n    transition: border-color ", " ease-in-out;\n    ", ";\n  }\n\n  &:focus::-ms-thumb {\n    ", ";\n  }\n\n  &:disabled::-ms-thumb {\n    ", ";\n  }\n\n  &::-ms-track {\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n    cursor: pointer;\n    height: ", "px;\n    transition: background-color ", " ease-in-out;\n    width: 100%;\n  }\n\n  &::-ms-fill-lower {\n    background: ", ";\n    border-radius: ", "px;\n    border: 0;\n  }\n\n  &::-ms-fill-upper {\n    background: ", ";\n    border-radius: ", "px;\n    border: 0;\n  }\n\n  &:active::-ms-fill-lower,\n  &:hover::-ms-fill-lower {\n    background: ", ";\n  }\n\n  &:active::-ms-fill-upper,\n  &:hover::-ms-fill-upper {\n    background: ", ";\n  }\n\n  &:disabled::-ms-fill-lower {\n    background: ", ";\n  }\n\n  &:disabled::-ms-fill-upper {\n    background: ", ";\n  }\n"], ["\n  &::-ms-thumb {\n    margin-top: 0;\n    transition: border-color ", " ease-in-out;\n    ", ";\n  }\n\n  &:focus::-ms-thumb {\n    ", ";\n  }\n\n  &:disabled::-ms-thumb {\n    ", ";\n  }\n\n  &::-ms-track {\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n    cursor: pointer;\n    height: ", "px;\n    transition: background-color ", " ease-in-out;\n    width: 100%;\n  }\n\n  &::-ms-fill-lower {\n    background: ", ";\n    border-radius: ", "px;\n    border: 0;\n  }\n\n  &::-ms-fill-upper {\n    background: ", ";\n    border-radius: ", "px;\n    border: 0;\n  }\n\n  &:active::-ms-fill-lower,\n  &:hover::-ms-fill-lower {\n    background: ", ";\n  }\n\n  &:active::-ms-fill-upper,\n  &:hover::-ms-fill-upper {\n    background: ", ";\n  }\n\n  &:disabled::-ms-fill-lower {\n    background: ", ";\n  }\n\n  &:disabled::-ms-fill-upper {\n    background: ", ";\n  }\n"])), transitionDuration, sliderThumbStyle, sliderThumbFocusedStyle, sliderThumbDisabledStyle, sliderLineThickness, transitionDuration, function (_a) {
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
export var rangeInputStyle = css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n  background: transparent; /* Otherwise white in Chrome */\n  height: ", "px; /* Otherwise thumb will collide with previous box element */\n  padding: 0; /* IE11 includes padding, this normalises it */\n  width: 100%; /* Specific width is required for Firefox. */\n\n  &:focus {\n    outline: none;\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n  }\n\n  ", " ", " ", ";\n  background-position: right;\n"], ["\n  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n  background: transparent; /* Otherwise white in Chrome */\n  height: ", "px; /* Otherwise thumb will collide with previous box element */\n  padding: 0; /* IE11 includes padding, this normalises it */\n  width: 100%; /* Specific width is required for Firefox. */\n\n  &:focus {\n    outline: none;\n  }\n\n  &:disabled {\n    cursor: not-allowed;\n  }\n\n  ", " ", " ", ";\n  background-position: right;\n"])), overallHeight, chromeRangeInputStyle, firefoxRangeInputStyle, IERangeInputStyle);
export var Input = styled.input(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), rangeInputStyle);
Input.displayName = 'InputRange';
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
//# sourceMappingURL=styled.js.map