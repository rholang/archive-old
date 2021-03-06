"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importStar(require("styled-components"));
var constants_1 = require("./constants");
var Span = styled_components_1.default.span(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  color: ", ";\n  display: inline-block;\n  fill: ", ";\n  height: ", "px;\n  position: relative;\n  user-select: none;\n\n  > svg {\n    fill: inherit;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n  > canvas {\n    display: block;\n    height: 100%;\n    visibility: hidden;\n  }\n  ", ";\n"], ["\n  color: ", ";\n  display: inline-block;\n  fill: ", ";\n  height: ", "px;\n  position: relative;\n  user-select: none;\n\n  > svg {\n    fill: inherit;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n  > canvas {\n    display: block;\n    height: 100%;\n    visibility: hidden;\n  }\n  ",
    ";\n"])), function (p) { return p.iconColor; }, function (p) { return p.textColor; }, function (p) { return p.size && constants_1.sizes[p.size]; }, function (p) {
    /* Only apply this if our stop-colors are inherit, if they aren't we don't need to set stop-color via css */
    return p.iconGradientStart === 'inherit' &&
        p.iconGradientStop === 'inherit' && styled_components_1.css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      /* Stop-color doesn't properly apply in chrome when the inherited/current color changes.\n      * We have to initially set stop-color to inherit (either via DOM attribute or an initial CSS\n      * rule) and then override it with currentColor for the color changes to be picked up.\n      */\n      stop {\n        stop-color: currentColor;\n      }\n    "], ["\n      /* Stop-color doesn't properly apply in chrome when the inherited/current color changes.\n      * We have to initially set stop-color to inherit (either via DOM attribute or an initial CSS\n      * rule) and then override it with currentColor for the color changes to be picked up.\n      */\n      stop {\n        stop-color: currentColor;\n      }\n    "])));
});
var Wrapper = function (_a) {
    var label = _a.label, svg = _a.svg, rest = tslib_1.__rest(_a, ["label", "svg"]);
    return (react_1.default.createElement(Span
    // We want to not add the aria-label if it does not exist for consistency
    // eslint-disable-next-line
    , tslib_1.__assign({ "aria-label": label ? label : undefined, dangerouslySetInnerHTML: {
            __html: typeof svg === 'function'
                ? svg(String(rest.iconGradientStart), String(rest.iconGradientStop))
                : svg,
        } }, rest)));
};
exports.default = Wrapper;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Wrapper.js.map