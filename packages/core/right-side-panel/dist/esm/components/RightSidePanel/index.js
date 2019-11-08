import { __assign, __extends } from "tslib";
import React from 'react';
import { Component } from 'react';
import { canUseDOM } from 'exenv';
import { createPortal } from 'react-dom';
import { Transition } from 'react-transition-group';
import { transitionDurationMs, panelWidth } from './constants';
import { RightSidePanelDrawer, RightSidePanelDrawerContent } from './styled';
export var UNMOUNTED = 'unmounted';
export var EXITED = 'exited';
export var ENTERING = 'entering';
export var ENTERED = 'entered';
export var EXITING = 'exiting';
export var TransitionStatus;
(function (TransitionStatus) {
    TransitionStatus["UNMOUNTED"] = "unmounted";
    TransitionStatus["EXITED"] = "exited";
    TransitionStatus["ENTERING"] = "entering";
    TransitionStatus["ENTERED"] = "entered";
    TransitionStatus["EXITING"] = "exiting";
})(TransitionStatus || (TransitionStatus = {}));
var defaultStyle = {
    transition: "width " + transitionDurationMs + "ms,\n  flex " + transitionDurationMs + "ms",
    width: "0",
    flex: "0 0 0",
};
var transitionStyles = {
    entered: { width: panelWidth + "px", flex: "0 0 " + panelWidth + "px" },
    exited: { width: 0, flex: "0 0 0" },
};
var RightSidePanel = /** @class */ (function (_super) {
    __extends(RightSidePanel, _super);
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
            container: canUseDOM
                ? document.querySelector('#' + this.attachPanelTo)
                : undefined,
        });
    };
    RightSidePanel.prototype.renderDrawer = function (Container) {
        var _a = this.props, children = _a.children, isOpen = _a.isOpen, _b = _a.skipAnimationOnMount, skipAnimationOnMount = _b === void 0 ? false : _b, _c = _a.mountOnEnter, mountOnEnter = _c === void 0 ? true : _c, _d = _a.unmountOnExit, unmountOnExit = _d === void 0 ? true : _d, _e = _a.disableEnterAnimation, disableEnterAnimation = _e === void 0 ? false : _e, _f = _a.disableExitAnimation, disableExitAnimation = _f === void 0 ? false : _f, onOpenAnimationFinished = _a.onOpenAnimationFinished, onCloseAnimationFinished = _a.onCloseAnimationFinished;
        return createPortal(React.createElement(Transition, { in: isOpen, timeout: transitionDurationMs, mountOnEnter: mountOnEnter, unmountOnExit: unmountOnExit, appear: !skipAnimationOnMount, enter: !disableEnterAnimation, exit: !disableExitAnimation, onEntered: onOpenAnimationFinished, onExited: onCloseAnimationFinished }, function (state) { return (React.createElement(RightSidePanelDrawer, { style: __assign(__assign({}, defaultStyle), transitionStyles[state]) },
            React.createElement(RightSidePanelDrawerContent, null, children))); }), Container);
    };
    RightSidePanel.prototype.render = function () {
        var container = this.state.container;
        return !!container ? this.renderDrawer(container) : null;
    };
    return RightSidePanel;
}(Component));
export { RightSidePanel };
export default RightSidePanel;
//# sourceMappingURL=index.js.map