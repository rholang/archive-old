import { __assign } from "tslib";
import React from 'react';
import { Transition } from 'react-transition-group';
var ENTER_DURATION = 120;
var EXIT_DURATION = 80;
var easing = 'cubic-bezier(0.23, 1, 0.32, 1)'; // easeOutQuint
var distance = 8;
var horizontalOffset = {
    left: distance,
    right: -distance,
    top: 0,
    bottom: 0,
};
var verticalOffset = {
    bottom: -distance,
    top: distance,
    left: 0,
    right: 0,
};
var defaultStyle = function (timeout) { return ({
    transition: "transform " + timeout.enter + "ms " + easing + ", opacity " + timeout.enter + "ms linear",
    opacity: 0,
}); };
var transitionStyle = function (timeout, state, position) {
    var transitions = {
        entering: {
            transform: "translate3d(" + horizontalOffset[position] + "px, " + verticalOffset[position] + "px, 0)",
        },
        entered: {
            opacity: 1,
        },
        exiting: {
            opacity: 0,
            transition: timeout.exit + "ms linear",
            transform: "translate3d(" + horizontalOffset[position] /
                2 + "px, " + verticalOffset[position] / 2 + "px, 0)",
        },
    };
    return transitions[state];
};
var getStyle = function (timeout, state) { return function (position) { return (__assign(__assign({}, defaultStyle(timeout)), transitionStyle(timeout, state, position))); }; };
var Animation = function (_a) {
    var children = _a.children, immediatelyHide = _a.immediatelyHide, immediatelyShow = _a.immediatelyShow, onExited = _a.onExited, inProp = _a.in;
    var timeout = {
        enter: immediatelyShow ? 1 : ENTER_DURATION,
        exit: immediatelyHide ? 1 : EXIT_DURATION,
    };
    return (React.createElement(Transition, { timeout: timeout, in: inProp, onExited: onExited, unmountOnExit: true, appear: true }, function (state) { return children(getStyle(timeout, state)); }));
};
export default Animation;
//# sourceMappingURL=Animation.js.map