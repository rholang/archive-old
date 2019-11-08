import { __assign, __extends } from "tslib";
import React from 'react';
import { layers } from '@atlaskit/theme/constants';
import Portal from '@atlaskit/portal';
import ScrollLock from 'react-scrolllock';
import NodeResovler from 'react-node-resolver';
import scrollIntoView from 'scroll-into-view-if-needed';
import { canUseDOM } from 'exenv';
import { Fade } from './Animation';
import Clone from './Clone';
import SpotlightDialog from './SpotlightDialog';
import { SpotlightTransitionConsumer } from './SpotlightTransition';
var SpotlightInner = /** @class */ (function (_super) {
    __extends(SpotlightInner, _super);
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
            if (!canUseDOM) {
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
            scrollIntoView(this.props.targetNode, {
                scrollMode: 'if-needed',
            });
        }
    };
    SpotlightInner.prototype.componentDidMount = function () {
        scrollIntoView(this.props.targetNode, {
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
        return (React.createElement(SpotlightTransitionConsumer, null, function (_a) {
            var isOpen = _a.isOpen, onExited = _a.onExited;
            return (React.createElement(Portal, { zIndex: layers.spotlight() + 1 },
                TargetReplacement ? (React.createElement(NodeResovler, { innerRef: function (elem) {
                        return _this.setState({ replacementElement: elem });
                    } },
                    React.createElement(TargetReplacement, __assign({}, _this.getTargetNodeStyle())))) : (React.createElement(Clone, { pulse: pulse, target: target, style: _this.getTargetNodeStyle(), targetBgColor: targetBgColor, targetNode: targetNode, targetOnClick: targetOnClick, targetRadius: targetRadius })),
                TargetReplacement && !replacementElement ? null : (React.createElement(Fade, { in: isOpen, onExited: onExited }, function (animationStyles) { return (React.createElement(SpotlightDialog, { actions: _this.props.actions, actionsBeforeElement: _this.props.actionsBeforeElement, children: _this.props.children, dialogPlacement: _this.props.dialogPlacement, dialogWidth: _this.props.dialogWidth, footer: _this.props.footer, header: _this.props.header, heading: _this.props.heading, image: _this.props.image, targetNode: replacementElement || targetNode, animationStyles: animationStyles })); })),
                React.createElement(ScrollLock, null)));
        }));
    };
    SpotlightInner.defaultProps = {
        dialogWidth: 400,
        pulse: true,
    };
    return SpotlightInner;
}(React.Component));
export default SpotlightInner;
//# sourceMappingURL=SpotlightInner.js.map