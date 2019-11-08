"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var constants_1 = require("@atlaskit/theme/constants");
var portal_1 = tslib_1.__importDefault(require("@atlaskit/portal"));
var react_scrolllock_1 = tslib_1.__importDefault(require("react-scrolllock"));
var react_node_resolver_1 = tslib_1.__importDefault(require("react-node-resolver"));
var scroll_into_view_if_needed_1 = tslib_1.__importDefault(require("scroll-into-view-if-needed"));
var exenv_1 = require("exenv");
var Animation_1 = require("./Animation");
var Clone_1 = tslib_1.__importDefault(require("./Clone"));
var SpotlightDialog_1 = tslib_1.__importDefault(require("./SpotlightDialog"));
var SpotlightTransition_1 = require("./SpotlightTransition");
var SpotlightInner = /** @class */ (function (_super) {
    tslib_1.__extends(SpotlightInner, _super);
    function SpotlightInner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            // This is only used when targetReplacement is specified.
            // In this case, we have to render the targetReplacement component,
            // get a dom reference from that component, then render again passing
            // that reference into SpotlightDialog (Popper).
            replacementElement: null,
        };
        _this.isPositionFixed = function (element) {
            return window.getComputedStyle(element).position === 'fixed';
        };
        _this.hasPositionFixedParent = function (element) {
            // Cast to to any - offsetParent should be of interface "HTMLElement" instead of "Element"
            var offsetParent = element.offsetParent;
            if (!offsetParent) {
                return false;
            }
            if (_this.isPositionFixed(offsetParent)) {
                return true;
            }
            return _this.hasPositionFixedParent(offsetParent);
        };
        _this.getTargetNodeStyle = function () {
            if (!exenv_1.canUseDOM) {
                return {};
            }
            var targetNode = _this.props.targetNode;
            var _a = targetNode.getBoundingClientRect(), height = _a.height, left = _a.left, top = _a.top, width = _a.width;
            if (_this.isPositionFixed(targetNode) ||
                _this.hasPositionFixedParent(targetNode)) {
                return {
                    height: height,
                    left: left,
                    top: top,
                    width: width,
                    // fixed position holds the target in place if overflow/scroll is necessary
                    position: 'fixed',
                };
            }
            return {
                height: height,
                left: left + window.pageXOffset,
                top: top + window.pageYOffset,
                width: width,
                position: 'absolute',
            };
        };
        return _this;
    }
    SpotlightInner.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.targetNode !== this.props.targetNode) {
            scroll_into_view_if_needed_1.default(this.props.targetNode, {
                scrollMode: 'if-needed',
            });
        }
    };
    SpotlightInner.prototype.componentDidMount = function () {
        scroll_into_view_if_needed_1.default(this.props.targetNode, {
            scrollMode: 'if-needed',
        });
        this.props.onOpened();
    };
    SpotlightInner.prototype.componentWillUnmount = function () {
        this.props.onClosed();
    };
    SpotlightInner.prototype.render = function () {
        var _this = this;
        var _a = this.props, pulse = _a.pulse, target = _a.target, targetNode = _a.targetNode, targetBgColor = _a.targetBgColor, targetOnClick = _a.targetOnClick, targetRadius = _a.targetRadius, TargetReplacement = _a.targetReplacement;
        var replacementElement = this.state.replacementElement;
        return (react_1.default.createElement(SpotlightTransition_1.SpotlightTransitionConsumer, null, function (_a) {
            var isOpen = _a.isOpen, onExited = _a.onExited;
            return (react_1.default.createElement(portal_1.default, { zIndex: constants_1.layers.spotlight() + 1 },
                TargetReplacement ? (react_1.default.createElement(react_node_resolver_1.default, { innerRef: function (elem) {
                        return _this.setState({ replacementElement: elem });
                    } },
                    react_1.default.createElement(TargetReplacement, tslib_1.__assign({}, _this.getTargetNodeStyle())))) : (react_1.default.createElement(Clone_1.default, { pulse: pulse, target: target, style: _this.getTargetNodeStyle(), targetBgColor: targetBgColor, targetNode: targetNode, targetOnClick: targetOnClick, targetRadius: targetRadius })),
                TargetReplacement && !replacementElement ? null : (react_1.default.createElement(Animation_1.Fade, { in: isOpen, onExited: onExited }, function (animationStyles) { return (react_1.default.createElement(SpotlightDialog_1.default, { actions: _this.props.actions, actionsBeforeElement: _this.props.actionsBeforeElement, children: _this.props.children, dialogPlacement: _this.props.dialogPlacement, dialogWidth: _this.props.dialogWidth, footer: _this.props.footer, header: _this.props.header, heading: _this.props.heading, image: _this.props.image, targetNode: replacementElement || targetNode, animationStyles: animationStyles })); })),
                react_1.default.createElement(react_scrolllock_1.default, null)));
        }));
    };
    SpotlightInner.defaultProps = {
        dialogWidth: 400,
        pulse: true,
    };
    return SpotlightInner;
}(react_1.default.Component));
exports.default = SpotlightInner;
//# sourceMappingURL=SpotlightInner.js.map