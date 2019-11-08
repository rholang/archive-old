"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
/* Define keyframes statically to prevent a perfomance issue in styled components v1 where the keyframes function
 * does not cache previous values resulting in each spinner injecting the same keyframe definition
 * in the DOM.
 * This can be reverted to use dynamic keyframes when we upgrade to styled components v2
 */
var keyframeNames = {
    noop: styled_components_1.keyframes(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    from { opacity: 0; }\n    to { opacity: 0; }\n  "], ["\n    from { opacity: 0; }\n    to { opacity: 0; }\n  "]))),
    enterRotate: styled_components_1.keyframes(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n    from { transform: rotate(50deg); }\n    to { transform: rotate(230deg); }\n  "], ["\n    from { transform: rotate(50deg); }\n    to { transform: rotate(230deg); }\n  "]))),
    leaveRotate: styled_components_1.keyframes(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n    from { transform: rotate(230deg); }\n    to { transform: rotate(510deg); }\n  "], ["\n    from { transform: rotate(230deg); }\n    to { transform: rotate(510deg); }\n  "]))),
    leaveOpacity: styled_components_1.keyframes(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n    from { opacity: 1; }\n    to { opacity: 0; }\n  "], ["\n    from { opacity: 1; }\n    to { opacity: 0; }\n  "]))),
};
exports.getContainerAnimation = function (_a) {
    var delay = _a.delay, phase = _a.phase;
    if (phase === 'DELAY') {
        /* This hides the spinner and allows us to use animationend events to move to the next phase in
         * the same way we do with the other lifecycle stages */
        return styled_components_1.css(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n      animation: ", "s ", ";\n    "], ["\n      animation: ", "s ", ";\n    "])), delay, keyframeNames.noop);
    }
    if (phase === 'ENTER' || phase === 'IDLE') {
        return styled_components_1.css(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n      animation: 1s ease-in-out forwards ", ";\n    "], ["\n      animation: 1s ease-in-out forwards ", ";\n    "])), keyframeNames.enterRotate);
    }
    if (phase === 'LEAVE') {
        return styled_components_1.css(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n      animation: 0.53s ease-in-out forwards ", ",\n        0.2s ease-in-out 0.33s ", ";\n    "], ["\n      animation: 0.53s ease-in-out forwards ", ",\n        0.2s ease-in-out 0.33s ", ";\n    "])), keyframeNames.leaveRotate, keyframeNames.leaveOpacity);
    }
    return '';
};
var getSize = function (_a) {
    var size = _a.size;
    return size + "px";
};
var Container = styled_components_1.default.span(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n  ", "\n  display: flex;\n  height: ", ";\n  width: ", ";\n\n  /* Rapidly creating and removing spinners will result in multiple spinners being visible while\n   * they complete their exit animations. This rules hides the spinner if another one has been\n   * added. */\n  div + & {\n    display: none;\n  }\n"], ["\n  ", "\n  display: flex;\n  height: ", ";\n  width: ", ";\n\n  /* Rapidly creating and removing spinners will result in multiple spinners being visible while\n   * they complete their exit animations. This rules hides the spinner if another one has been\n   * added. */\n  div + & {\n    display: none;\n  }\n"])), exports.getContainerAnimation, getSize, getSize);
Container.displayName = 'SpinnerContainer';
exports.default = Container;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=styledContainer.js.map