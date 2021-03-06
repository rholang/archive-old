import { __assign } from "tslib";
import React from 'react';
import { Transition } from 'react-transition-group';
var duration = 100;
export var Fade = function (_a) {
    var hasEntered = _a.in, children = _a.children, onExited = _a.onExited;
    return (React.createElement(Transition, { in: hasEntered, timeout: duration, onExited: onExited, unmountOnExit: true, appear: true }, function (status) {
        var base = {
            transition: "opacity " + duration + "ms",
            opacity: 0,
        };
        var anim = {
            entered: { opacity: 1 },
            exiting: { opacity: 0 },
        };
        var style = __assign(__assign({}, base), anim[status]);
        return children(style);
    }));
};
//# sourceMappingURL=Animation.js.map