"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_transition_group_1 = require("react-transition-group");
var constants_1 = require("@atlaskit/theme/constants");
var constants_2 = require("../constants");
var defaultTransitionProps = {
    appear: true,
    mountOnEnter: true,
    unmountOnExit: true,
};
var TransitionHandler = /** @class */ (function (_super) {
    tslib_1.__extends(TransitionHandler, _super);
    function TransitionHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TransitionHandler.prototype.render = function () {
        var _a = this.props, _b = _a.component, component = _b === void 0 ? 'div' : _b, inProp = _a.in, onExited = _a.onExited, defaultStyles = _a.defaultStyles, transitionStyles = _a.transitionStyles, transitionProps = _a.transitionProps, props = tslib_1.__rest(_a, ["component", "in", "onExited", "defaultStyles", "transitionStyles", "transitionProps"]);
        var timeout = { enter: 0, exit: constants_2.transitionDurationMs };
        return (react_1.default.createElement(react_transition_group_1.Transition, tslib_1.__assign({ in: inProp, onExited: onExited, timeout: timeout }, transitionProps), function (state) {
            var style = tslib_1.__assign(tslib_1.__assign({}, defaultStyles), transitionStyles[state]);
            var Tag = component;
            return react_1.default.createElement(Tag, tslib_1.__assign({ style: style }, props));
        }));
    };
    TransitionHandler.defaultProps = {
        component: 'div',
        transitionProps: defaultTransitionProps,
    };
    return TransitionHandler;
}(react_1.Component));
exports.Fade = function (_a) {
    var props = tslib_1.__rest(_a, []);
    return (react_1.default.createElement(TransitionHandler, tslib_1.__assign({ defaultStyles: {
            transition: "opacity " + constants_2.transitionDurationMs + "ms " + constants_2.transitionTimingFunction,
            opacity: 0,
            position: 'fixed',
            zIndex: constants_1.layers.blanket(),
        }, transitionStyles: {
            entering: { opacity: 0 },
            entered: { opacity: 1 },
        } }, props)));
};
exports.Slide = function (_a) {
    var _b = _a.shouldUnmountOnExit, shouldUnmountOnExit = _b === void 0 ? true : _b, props = tslib_1.__rest(_a, ["shouldUnmountOnExit"]);
    return (react_1.default.createElement(TransitionHandler, tslib_1.__assign({ defaultStyles: {
            transition: "transform " + constants_2.transitionDurationMs + "ms " + constants_2.transitionTimingFunction + ", " +
                ("width " + constants_2.transitionDurationMs + "ms " + constants_2.transitionTimingFunction),
            transform: 'translate3d(-100%,0,0)',
        }, transitionStyles: {
            // Unset transform so we do not create a new stacking context for fixed-position children - NAV-159
            entered: { transform: null },
            exited: { transform: 'translate3d(-100%,0,0)' },
        }, transitionProps: tslib_1.__assign(tslib_1.__assign({}, defaultTransitionProps), { unmountOnExit: shouldUnmountOnExit }) }, props)));
};
//# sourceMappingURL=transitions.js.map