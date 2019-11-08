"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var components_1 = require("@atlaskit/theme/components");
var colors_1 = require("@atlaskit/theme/colors");
var constants_1 = require("./constants");
var getStrokeWidth = function (size) { return Math.round(size / 10); };
var getStrokeCircumference = function (size) {
    var strokeWidth = getStrokeWidth(size);
    var strokeRadius = size / 2 - strokeWidth / 2;
    return Math.PI * strokeRadius * 2;
};
/* Define keyframes statically to prevent a perfomance issue in styled components v1 where the keyframes function
 * does not cache previous values resulting in each spinner injecting the same keyframe definition
 * in the DOM.
 * This can be reverted to dynamic keyframes when we upgrade to styled components v2
 */
var keyframeNames = {
    noop: styled_components_1.keyframes(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    from { opacity: 0; }\n    to { opacity: 0; }\n  "], ["\n    from { opacity: 0; }\n    to { opacity: 0; }\n  "]))),
    rotate: styled_components_1.keyframes(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n    to { transform: rotate(360deg); }\n  "], ["\n    to { transform: rotate(360deg); }\n  "]))),
    enterOpacity: styled_components_1.keyframes(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n    from { opacity: 0; }\n    to { opacity: 1; }\n  "], ["\n    from { opacity: 0; }\n    to { opacity: 1; }\n  "]))),
    smallEnterStroke: styled_components_1.keyframes(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n    from { stroke-dashoffset: ", "px; }\n    to { stroke-dashoffset: ", "px; }\n  "], ["\n    from { stroke-dashoffset: ", "px; }\n    to { stroke-dashoffset: ",
        "px; }\n  "])), getStrokeCircumference(constants_1.SIZES_MAP.small), getStrokeCircumference(constants_1.SIZES_MAP.small) *
        0.8),
    mediumEnterStroke: styled_components_1.keyframes(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n    from { stroke-dashoffset: ", "px; }\n    to { stroke-dashoffset: ", "px; }\n  "], ["\n    from { stroke-dashoffset: ", "px; }\n    to { stroke-dashoffset: ",
        "px; }\n  "])), getStrokeCircumference(constants_1.SIZES_MAP.medium), getStrokeCircumference(constants_1.SIZES_MAP.medium) *
        0.8),
    largeEnterStroke: styled_components_1.keyframes(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n    from { stroke-dashoffset: ", "px; }\n    to { stroke-dashoffset: ", "px; }\n  "], ["\n    from { stroke-dashoffset: ", "px; }\n    to { stroke-dashoffset: ",
        "px; }\n  "])), getStrokeCircumference(constants_1.SIZES_MAP.large), getStrokeCircumference(constants_1.SIZES_MAP.large) *
        0.8),
    xlargeEnterStroke: styled_components_1.keyframes(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n    from { stroke-dashoffset: ", "px; }\n    to { stroke-dashoffset: ", "px; }\n  "], ["\n    from { stroke-dashoffset: ", "px; }\n    to { stroke-dashoffset: ",
        "px; }\n  "])), getStrokeCircumference(constants_1.SIZES_MAP.xlarge), getStrokeCircumference(constants_1.SIZES_MAP.xlarge) *
        0.8),
};
/* If a standard size is used, we can use one of our statically defined keyframes, otherwise
 * we're forced to dynamically create the keyframe and incur a performance cost.
 */
var getEnterStrokeKeyframe = function (size) {
    var standardSizeName = Object.keys(constants_1.SIZES_MAP).find(function (sizeName) { return size === constants_1.SIZES_MAP[sizeName]; });
    if (standardSizeName) {
        return keyframeNames[standardSizeName + "EnterStroke"];
    }
    var circumference = getStrokeCircumference(size);
    return styled_components_1.keyframes(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n    from { stroke-dashoffset: ", "px; }\n    to { stroke-dashoffset: ", "px; }\n  "], ["\n    from { stroke-dashoffset: ", "px; }\n    to { stroke-dashoffset: ", "px; }\n  "])), circumference, circumference * 0.8);
};
var spinnerColor = components_1.themed({ light: colors_1.N500, dark: colors_1.N0 });
var spinnerColorInverted = components_1.themed({ light: colors_1.N0, dark: colors_1.N0 });
exports.getStrokeColor = function (_a) {
    var invertColor = _a.invertColor, props = tslib_1.__rest(_a, ["invertColor"]);
    return invertColor ? spinnerColorInverted(props) : spinnerColor(props);
};
exports.svgStyles = styled_components_1.css(templateObject_12 || (templateObject_12 = tslib_1.__makeTemplateObject(["\n  ", ";\n"], ["\n  ",
    ";\n"])), function (props) {
    var circumference = getStrokeCircumference(props.size);
    var animation = function (animProps) {
        var baseAnimation = '0.86s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite';
        if (animProps.phase === 'ENTER') {
            return styled_components_1.css(templateObject_9 || (templateObject_9 = tslib_1.__makeTemplateObject(["\n          animation: ", " ", ",\n            0.8s ease-in-out ", ",\n            0.2s ease-in-out ", ";\n        "], ["\n          animation: ", " ", ",\n            0.8s ease-in-out ", ",\n            0.2s ease-in-out ", ";\n        "])), baseAnimation, keyframeNames.rotate, getEnterStrokeKeyframe(animProps.size), keyframeNames.enterOpacity);
        }
        return styled_components_1.css(templateObject_10 || (templateObject_10 = tslib_1.__makeTemplateObject(["\n        animation: ", " ", ";\n      "], ["\n        animation: ", " ", ";\n      "])), baseAnimation, keyframeNames.rotate);
    };
    return styled_components_1.css(templateObject_11 || (templateObject_11 = tslib_1.__makeTemplateObject(["\n      ", "\n      fill: none;\n      stroke: ", ";\n      stroke-dasharray: ", "px;\n      stroke-dashoffset: ", "px;\n      stroke-linecap: round;\n      stroke-width: ", "px;\n      transform-origin: center;\n    "], ["\n      ", "\n      fill: none;\n      stroke: ", ";\n      stroke-dasharray: ", "px;\n      stroke-dashoffset: ", "px;\n      stroke-linecap: round;\n      stroke-width: ", "px;\n      transform-origin: center;\n    "])), animation, exports.getStrokeColor, circumference, circumference * 0.8, getStrokeWidth(props.size));
});
var Svg = styled_components_1.default.svg(templateObject_13 || (templateObject_13 = tslib_1.__makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), exports.svgStyles);
Svg.displayName = 'SpinnerSvg';
exports.default = Svg;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
//# sourceMappingURL=styledSvg.js.map