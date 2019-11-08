"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@emotion/core");
var react_transition_group_1 = require("react-transition-group");
var theme_1 = require("@atlaskit/theme");
var constants_1 = require("../constants");
var animationDuration = 300;
var offscreen = {
    translateX: constants_1.surveyInnerWidth + constants_1.surveyOffset + "px",
    opacity: '0',
};
var getAnimationProps = function (state) {
    switch (state) {
        case 'entering': {
            return offscreen;
        }
        case 'entered': {
            return {
                translateX: '0',
                opacity: '1',
            };
        }
        case 'exited':
        case 'exiting': {
            return offscreen;
        }
    }
};
function SurveyMarshal(props) {
    var children = props.children, shouldShow = props.shouldShow;
    return (core_1.jsx(react_transition_group_1.Transition, { in: shouldShow, timeout: animationDuration, unmountOnExit: true }, function (state) {
        var _a = getAnimationProps(state), translateX = _a.translateX, opacity = _a.opacity;
        return (core_1.jsx("div", { css: core_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n              position: fixed;\n              right: ", "px;\n              bottom: ", "px;\n              z-index: ", ";\n              transform: translateX(", ");\n              opacity: ", ";\n              transition: all ", "ms ease-in-out;\n              transition-property: transform, opacity;\n            "], ["\n              position: fixed;\n              right: ", "px;\n              bottom: ", "px;\n              z-index: ", ";\n              transform: translateX(", ");\n              opacity: ", ";\n              transition: all ", "ms ease-in-out;\n              transition-property: transform, opacity;\n            "])), constants_1.surveyOffset, constants_1.surveyOffset, theme_1.layers.flag(), translateX, opacity, animationDuration) }, children()));
    }));
}
exports.default = SurveyMarshal;
var templateObject_1;
//# sourceMappingURL=SurveyMarshal.js.map