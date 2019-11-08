"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_2 = require("react");
var exenv_1 = require("exenv");
var react_dom_1 = require("react-dom");
var react_transition_group_1 = require("react-transition-group");
var constants_1 = require("./constants");
var styled_1 = require("./styled");
exports.UNMOUNTED = 'unmounted';
exports.EXITED = 'exited';
exports.ENTERING = 'entering';
exports.ENTERED = 'entered';
exports.EXITING = 'exiting';
var TransitionStatus;
(function (TransitionStatus) {
    TransitionStatus["UNMOUNTED"] = "unmounted";
    TransitionStatus["EXITED"] = "exited";
    TransitionStatus["ENTERING"] = "entering";
    TransitionStatus["ENTERED"] = "entered";
    TransitionStatus["EXITING"] = "exiting";
})(TransitionStatus = exports.TransitionStatus || (exports.TransitionStatus = {}));
var defaultStyle = {
    transition: "width " + constants_1.transitionDurationMs + "ms,\n  flex " + constants_1.transitionDurationMs + "ms",
    width: "0",
    flex: "0 0 0",
};
var transitionStyles = {
    entered: { width: constants_1.panelWidth + "px", flex: "0 0 " + constants_1.panelWidth + "px" },
    exited: { width: 0, flex: "0 0 0" },
};
var RightSidePanel = /** @class */ (function (_super) {
    tslib_1.__extends(RightSidePanel, _super);
    function RightSidePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attachPanelTo = _this.props.attachPanelTo;
        _this.state = {
            entered: false,
            container: undefined,
        };
        return _this;
    }
    RightSidePanel.prototype.componentDidMount = function () {
        this.setState({
            container: exenv_1.canUseDOM
                ? document.querySelector('#' + this.attachPanelTo)
                : undefined,
        });
    };
    RightSidePanel.prototype.renderDrawer = function (Container) {
        var _a = this.props, children = _a.children, isOpen = _a.isOpen, _b = _a.skipAnimationOnMount, skipAnimationOnMount = _b === void 0 ? false : _b, _c = _a.mountOnEnter, mountOnEnter = _c === void 0 ? true : _c, _d = _a.unmountOnExit, unmountOnExit = _d === void 0 ? true : _d, _e = _a.disableEnterAnimation, disableEnterAnimation = _e === void 0 ? false : _e, _f = _a.disableExitAnimation, disableExitAnimation = _f === void 0 ? false : _f, onOpenAnimationFinished = _a.onOpenAnimationFinished, onCloseAnimationFinished = _a.onCloseAnimationFinished;
        return react_dom_1.createPortal(react_1.default.createElement(react_transition_group_1.Transition, { in: isOpen, timeout: constants_1.transitionDurationMs, mountOnEnter: mountOnEnter, unmountOnExit: unmountOnExit, appear: !skipAnimationOnMount, enter: !disableEnterAnimation, exit: !disableExitAnimation, onEntered: onOpenAnimationFinished, onExited: onCloseAnimationFinished }, function (state) { return (react_1.default.createElement(styled_1.RightSidePanelDrawer, { style: tslib_1.__assign(tslib_1.__assign({}, defaultStyle), transitionStyles[state]) },
            react_1.default.createElement(styled_1.RightSidePanelDrawerContent, null, children))); }), Container);
    };
    RightSidePanel.prototype.render = function () {
        var container = this.state.container;
        return !!container ? this.renderDrawer(container) : null;
    };
    return RightSidePanel;
}(react_2.Component));
exports.RightSidePanel = RightSidePanel;
exports.default = RightSidePanel;
//# sourceMappingURL=index.js.map