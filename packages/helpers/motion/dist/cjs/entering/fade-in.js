"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var core_1 = require("@emotion/core");
var curves_1 = require("../utils/curves");
var durations_1 = require("../utils/durations");
var accessibility_1 = require("../utils/accessibility");
exports.fadeInAnimation = function () { return ({
    from: {
        opacity: 0,
        transform: 'translate3d(0, 10%, 0)',
    },
    to: {
        opacity: 1,
        transform: 'none',
    },
}); };
/**
 * For a single element that needs a fade in entering animation.
 * This does not need Javascript to execute so it will run immediately for any SSR rendered React apps before the JS has executed.
 *
 * Will add a `className` to the direct child.
 */
var FadeIn = react_1.forwardRef(function (_a, ref) {
    var children = _a.children, isPaused = _a.isPaused, _b = _a.delay, delay = _b === void 0 ? 0 : _b, _c = _a.duration, duration = _c === void 0 ? durations_1.largeDurationMs : _c;
    return (react_1.default.createElement(core_1.ClassNames, null, function (_a) {
        var css = _a.css;
        return children({
            ref: ref,
            className: css(tslib_1.__assign({ animationName: "" + core_1.keyframes(exports.fadeInAnimation()), animationTimingFunction: curves_1.easeInOut, animationDelay: delay + "ms", animationFillMode: 'backwards', animationDuration: duration + "ms", animationPlayState: isPaused ? 'paused' : 'running' }, accessibility_1.prefersReducedMotion())),
        });
    }));
});
exports.default = FadeIn;
//# sourceMappingURL=fade-in.js.map