import { __makeTemplateObject } from "tslib";
import { jsx, css } from '@emotion/core';
import { Transition } from 'react-transition-group';
import { layers } from '@atlaskit/theme';
import { surveyInnerWidth, surveyOffset } from '../constants';
var animationDuration = 300;
var offscreen = {
    translateX: surveyInnerWidth + surveyOffset + "px",
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
export default function SurveyMarshal(props) {
    var children = props.children, shouldShow = props.shouldShow;
    return (jsx(Transition, { in: shouldShow, timeout: animationDuration, unmountOnExit: true }, function (state) {
        var _a = getAnimationProps(state), translateX = _a.translateX, opacity = _a.opacity;
        return (jsx("div", { css: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n              position: fixed;\n              right: ", "px;\n              bottom: ", "px;\n              z-index: ", ";\n              transform: translateX(", ");\n              opacity: ", ";\n              transition: all ", "ms ease-in-out;\n              transition-property: transform, opacity;\n            "], ["\n              position: fixed;\n              right: ", "px;\n              bottom: ", "px;\n              z-index: ", ";\n              transform: translateX(", ");\n              opacity: ", ";\n              transition: all ", "ms ease-in-out;\n              transition-property: transform, opacity;\n            "])), surveyOffset, surveyOffset, layers.flag(), translateX, opacity, animationDuration) }, children()));
    }));
}
var templateObject_1;
//# sourceMappingURL=SurveyMarshal.js.map