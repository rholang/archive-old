import { __assign, __extends, __rest } from "tslib";
import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import { layers } from '@atlaskit/theme/constants';
import { transitionDurationMs, transitionTimingFunction } from '../constants';
var defaultTransitionProps = {
    appear: true,
    mountOnEnter: true,
    unmountOnExit: true,
};
var TransitionHandler = /** @class */ (function (_super) {
    __extends(TransitionHandler, _super);
    function TransitionHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TransitionHandler.prototype.render = function () {
        var _a = this.props, _b = _a.component, component = _b === void 0 ? 'div' : _b, inProp = _a.in, onExited = _a.onExited, defaultStyles = _a.defaultStyles, transitionStyles = _a.transitionStyles, transitionProps = _a.transitionProps, props = __rest(_a, ["component", "in", "onExited", "defaultStyles", "transitionStyles", "transitionProps"]);
        var timeout = { enter: 0, exit: transitionDurationMs };
        return (React.createElement(Transition, __assign({ in: inProp, onExited: onExited, timeout: timeout }, transitionProps), function (state) {
            var style = __assign(__assign({}, defaultStyles), transitionStyles[state]);
            var Tag = component;
            return React.createElement(Tag, __assign({ style: style }, props));
        }));
    };
    TransitionHandler.defaultProps = {
        component: 'div',
        transitionProps: defaultTransitionProps,
    };
    return TransitionHandler;
}(Component));
export var Fade = function (_a) {
    var props = __rest(_a, []);
    return (React.createElement(TransitionHandler, __assign({ defaultStyles: {
            transition: "opacity " + transitionDurationMs + "ms " + transitionTimingFunction,
            opacity: 0,
            position: 'fixed',
            zIndex: layers.blanket(),
        }, transitionStyles: {
            entering: { opacity: 0 },
            entered: { opacity: 1 },
        } }, props)));
};
export var Slide = function (_a) {
    var _b = _a.shouldUnmountOnExit, shouldUnmountOnExit = _b === void 0 ? true : _b, props = __rest(_a, ["shouldUnmountOnExit"]);
    return (React.createElement(TransitionHandler, __assign({ defaultStyles: {
            transition: "transform " + transitionDurationMs + "ms " + transitionTimingFunction + ", " +
                ("width " + transitionDurationMs + "ms " + transitionTimingFunction),
            transform: 'translate3d(-100%,0,0)',
        }, transitionStyles: {
            // Unset transform so we do not create a new stacking context for fixed-position children - NAV-159
            entered: { transform: null },
            exited: { transform: 'translate3d(-100%,0,0)' },
        }, transitionProps: __assign(__assign({}, defaultTransitionProps), { unmountOnExit: shouldUnmountOnExit }) }, props)));
};
//# sourceMappingURL=transitions.js.map