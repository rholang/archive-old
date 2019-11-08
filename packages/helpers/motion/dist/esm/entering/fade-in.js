import { __assign } from "tslib";
import React, { forwardRef } from 'react';
import { ClassNames, keyframes } from '@emotion/core';
import { easeInOut } from '../utils/curves';
import { largeDurationMs } from '../utils/durations';
import { prefersReducedMotion } from '../utils/accessibility';
export var fadeInAnimation = function () { return ({
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
var FadeIn = forwardRef(function (_a, ref) {
    var children = _a.children, isPaused = _a.isPaused, _b = _a.delay, delay = _b === void 0 ? 0 : _b, _c = _a.duration, duration = _c === void 0 ? largeDurationMs : _c;
    return (React.createElement(ClassNames, null, function (_a) {
        var css = _a.css;
        return children({
            ref: ref,
            className: css(__assign({ animationName: "" + keyframes(fadeInAnimation()), animationTimingFunction: easeInOut, animationDelay: delay + "ms", animationFillMode: 'backwards', animationDuration: duration + "ms", animationPlayState: isPaused ? 'paused' : 'running' }, prefersReducedMotion())),
        });
    }));
});
export default FadeIn;
//# sourceMappingURL=fade-in.js.map