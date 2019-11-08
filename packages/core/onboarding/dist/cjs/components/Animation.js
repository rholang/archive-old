"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_transition_group_1 = require("react-transition-group");
var duration = 100;
exports.Fade = function (_a) {
    var hasEntered = _a.in, children = _a.children, onExited = _a.onExited;
    return (react_1.default.createElement(react_transition_group_1.Transition, { in: hasEntered, timeout: duration, onExited: onExited, unmountOnExit: true, appear: true }, function (status) {
        var base = {
            transition: "opacity " + duration + "ms",
            opacity: 0,
        };
        var anim = {
            entered: { opacity: 1 },
            exiting: { opacity: 0 },
        };
        var style = tslib_1.__assign(tslib_1.__assign({}, base), anim[status]);
        return children(style);
    }));
};
//# sourceMappingURL=Animation.js.map