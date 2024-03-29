"use strict";
/* eslint-disable react/require-default-props */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_node_resolver_1 = tslib_1.__importDefault(require("react-node-resolver"));
var flushable_1 = tslib_1.__importDefault(require("flushable"));
var popper_1 = require("@atlaskit/popper");
var portal_1 = tslib_1.__importDefault(require("@atlaskit/portal"));
var constants_1 = require("@atlaskit/theme/constants");
var analytics_next_1 = require("@atlaskit/analytics-next");
var version_json_1 = require("../version.json");
var styled_1 = require("../styled");
var Animation_1 = tslib_1.__importDefault(require("./Animation"));
var analytics_payloads_1 = require("./utils/analytics-payloads");
var SCROLL_OPTIONS = { capture: true, passive: true };
function getMousePosition(mouseCoordinates) {
    var safeMouse = mouseCoordinates || { top: 0, left: 0 };
    var getBoundingClientRect = function () {
        return {
            top: safeMouse.top,
            left: safeMouse.left,
            bottom: safeMouse.top,
            right: safeMouse.left,
            width: 0,
            height: 0,
        };
    };
    return {
        getBoundingClientRect: getBoundingClientRect,
        clientWidth: 0,
        clientHeight: 0,
    };
}
var pendingHide;
var showTooltip = function (fn, defaultDelay) {
    var isHidePending = pendingHide && pendingHide.pending();
    if (isHidePending) {
        pendingHide.flush();
    }
    var pendingShow = flushable_1.default(function () { return fn(isHidePending); }, isHidePending ? 0 : defaultDelay);
    return pendingShow.cancel;
};
var hideTooltip = function (fn, defaultDelay) {
    pendingHide = flushable_1.default(function (flushed) { return fn(flushed); }, defaultDelay);
    return pendingHide.cancel;
};
var Tooltip = /** @class */ (function (_super) {
    tslib_1.__extends(Tooltip, _super);
    function Tooltip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cancelPendingSetState = function () { };
        // set in mouseover/mouseout handlers
        _this.state = {
            immediatelyHide: false,
            immediatelyShow: false,
            isVisible: false,
            renderTooltip: false,
        };
        _this.handleWindowScroll = function () {
            if (_this.state.isVisible) {
                _this.cancelPendingSetState();
                _this.setState({ isVisible: false, immediatelyHide: true });
            }
        };
        _this.handleMouseClick = function () {
            if (_this.props.hideTooltipOnClick) {
                _this.cancelPendingSetState();
                _this.setState({ isVisible: false, immediatelyHide: true });
            }
        };
        _this.handleMouseDown = function () {
            if (_this.props.hideTooltipOnMouseDown) {
                _this.cancelPendingSetState();
                _this.setState({ isVisible: false, immediatelyHide: true });
            }
        };
        _this.handleMouseOver = function (e) {
            if (e.target === _this.wrapperRef)
                return;
            // In the case where a tooltip is newly rendered but immediately becomes hovered,
            // we need to set the coordinates in the mouseOver event.
            if (!_this.fakeMouseElement)
                _this.fakeMouseElement = getMousePosition({
                    left: e.clientX,
                    top: e.clientY,
                });
            _this.cancelPendingSetState();
            if (Boolean(_this.props.content) && !_this.state.isVisible) {
                _this.cancelPendingSetState = showTooltip(function (immediatelyShow) {
                    _this.setState({
                        isVisible: true,
                        renderTooltip: true,
                        immediatelyShow: immediatelyShow,
                    });
                }, _this.props.delay || 0);
            }
        };
        _this.handleMouseLeave = function (e) {
            if (e.target === _this.wrapperRef)
                return;
            _this.cancelPendingSetState();
            if (_this.state.isVisible) {
                _this.cancelPendingSetState = hideTooltip(function (immediatelyHide) {
                    _this.setState({ isVisible: false, immediatelyHide: immediatelyHide });
                }, _this.props.delay || 0);
            }
        };
        // Update mouse coordinates, used when position is 'mouse'.
        // We are not debouncing/throttling this function because we aren't causing any
        // re-renders or performaing any intensive calculations, we're just updating a value.
        // React also doesn't play nice debounced DOM event handlers because they pool their
        // SyntheticEvent objects. Need to use event.persist as a workaround - https://stackoverflow.com/a/24679479/893630
        _this.handleMouseMove = function (event) {
            if (!_this.state.renderTooltip) {
                _this.fakeMouseElement = getMousePosition({
                    left: event.clientX,
                    top: event.clientY,
                });
            }
        };
        return _this;
    }
    Tooltip.prototype.componentWillUnmount = function () {
        this.cancelPendingSetState();
        this.removeScrollListener();
    };
    Tooltip.prototype.componentDidUpdate = function (_prevProps, prevState) {
        if (!prevState.isVisible && this.state.isVisible) {
            if (this.props.onShow)
                this.props.onShow();
            window.addEventListener('scroll', this.handleWindowScroll, SCROLL_OPTIONS);
        }
        else if (prevState.isVisible && !this.state.isVisible) {
            if (this.props.onHide)
                this.props.onHide();
            this.removeScrollListener();
        }
    };
    Tooltip.prototype.removeScrollListener = function () {
        window.removeEventListener('scroll', this.handleWindowScroll, SCROLL_OPTIONS);
    };
    Tooltip.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, content = _a.content, position = _a.position, mousePosition = _a.mousePosition, truncate = _a.truncate, TooltipContainer = _a.component, TargetContainer = _a.tag, testId = _a.testId;
        var _b = this.state, isVisible = _b.isVisible, renderTooltip = _b.renderTooltip, immediatelyShow = _b.immediatelyShow, immediatelyHide = _b.immediatelyHide;
        return (
        /* eslint-disable jsx-a11y/mouse-events-have-key-events */
        react_1.default.createElement(react_1.default.Fragment, null,
            TargetContainer && (react_1.default.createElement(TargetContainer, { onClick: this.handleMouseClick, onMouseOver: this.handleMouseOver, onMouseOut: this.handleMouseLeave, onMouseMove: this.handleMouseMove, onMouseDown: this.handleMouseDown, ref: function (wrapperRef) {
                    _this.wrapperRef = wrapperRef;
                } },
                react_1.default.createElement(react_node_resolver_1.default, { innerRef: function (targetRef) {
                        _this.targetRef = targetRef;
                    } }, react_1.default.Children.only(children)))),
            renderTooltip && this.targetRef && this.fakeMouseElement ? (react_1.default.createElement(portal_1.default, { zIndex: constants_1.layers.tooltip() },
                react_1.default.createElement(popper_1.Popper
                // @ts-ignore
                , { 
                    // @ts-ignore
                    referenceElement: 
                    // https://github.com/FezVrasta/react-popper#usage-without-a-reference-htmlelement
                    // We are using a popper technique to pass in a faked element when we use mouse.
                    // This is fine.
                    position === 'mouse' ? this.fakeMouseElement : this.targetRef, placement: position === 'mouse' ? mousePosition : position }, function (_a) {
                    var ref = _a.ref, style = _a.style, placement = _a.placement;
                    return TooltipContainer && (react_1.default.createElement(Animation_1.default, { immediatelyShow: immediatelyShow, immediatelyHide: immediatelyHide, onExited: function () { return _this.setState({ renderTooltip: false }); }, in: isVisible }, function (getAnimationStyles) { return (react_1.default.createElement(TooltipContainer, { innerRef: ref, className: "Tooltip", style: tslib_1.__assign(tslib_1.__assign({}, getAnimationStyles(placement)), style), truncate: truncate || false, "data-testid": testId }, content)); }));
                }))) : null)
        /* eslint-enable */
        );
    };
    Tooltip.defaultProps = {
        component: styled_1.Tooltip,
        delay: 300,
        mousePosition: 'bottom',
        position: 'bottom',
        tag: 'div',
    };
    return Tooltip;
}(react_1.default.Component));
exports.TooltipWithoutAnalytics = Tooltip;
var createAndFireEventOnAtlaskit = analytics_next_1.createAndFireEvent('atlaskit');
exports.default = analytics_next_1.withAnalyticsContext({
    componentName: 'tooltip',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents({
    onHide: analytics_payloads_1.unhoveredPayload,
    onShow: createAndFireEventOnAtlaskit(tslib_1.__assign({}, analytics_payloads_1.hoveredPayload)),
})(Tooltip));
//# sourceMappingURL=Tooltip.js.map