"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_transition_group_1 = require("react-transition-group");
var duration = 500;
var easing = 'cubic-bezier(0.23, 1, 0.32, 1)'; // easeOutQuint
var verticalOffset = 16;
exports.Animation = function (_a) {
    var hasEntered = _a.in, _b = _a.stackIndex, stackIndex = _b === void 0 ? 0 : _b, onExited = _a.onExited, onEntered = _a.onEntered, children = _a.children;
    return (react_1.default.createElement(react_transition_group_1.Transition, { in: hasEntered, timeout: { enter: 0, exit: duration }, onExited: onExited, onEntered: onEntered, appear: true }, function (unadjustedStatus) {
        // when we first render, we want to finish the 'entering' state render
        // then jump to the 'entered' state as quick as possible.
        var adjustedStatus = hasEntered && unadjustedStatus === 'exited'
            ? 'entering'
            : unadjustedStatus;
        // Fade styles
        var fadeBaseStyles = {
            transition: "opacity " + duration / 2 + "ms",
            opacity: 1,
        };
        var fadeTransitionStyles = {
            entering: {
                opacity: 0,
            },
            entered: {},
            exiting: {
                opacity: 0,
            },
            exited: {},
        };
        // Slide styles
        var slideBaseStyles = {
            transition: "transform " + duration + "ms " + easing,
            transform: "translate3d(0, " + verticalOffset * 2 + "px, 0)",
        };
        var slideTransitionStyles = {
            entering: {},
            entered: {
                transform: stackIndex > 0
                    ? "translate3d(0, " + stackIndex * (verticalOffset / 2) + "px, 0)"
                    : null,
            },
            exiting: {
                transform: "translate3d(0, -" + verticalOffset * 2 + "px, 0)",
            },
            exited: {},
        };
        return children({
            fade: tslib_1.__assign(tslib_1.__assign({}, fadeBaseStyles), fadeTransitionStyles[adjustedStatus]),
            slide: tslib_1.__assign(tslib_1.__assign({}, slideBaseStyles), slideTransitionStyles[adjustedStatus]),
        });
    }));
};
//# sourceMappingURL=Animation.js.map