"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_dom_1 = require("react-dom");
var spinner_1 = tslib_1.__importDefault(require("@atlaskit/spinner"));
var constants_1 = require("../internal/constants");
var LoadingContainerAdvanced_1 = require("../styled/LoadingContainerAdvanced");
var LoadingContainerAdvanced = /** @class */ (function (_super) {
    tslib_1.__extends(LoadingContainerAdvanced, _super);
    function LoadingContainerAdvanced() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentDidMount = function () {
            if (_this.props.isLoading && _this.hasTargetNode()) {
                _this.attachListeners();
                _this.updateTargetAppearance();
                _this.updateSpinnerPosition();
            }
        };
        _this.UNSAFE_componentWillReceiveProps = function (nextProps) {
            if (!nextProps.isLoading || !_this.hasTargetNode(nextProps)) {
                _this.detachListeners();
            }
            else if (!_this.props.isLoading) {
                _this.attachListeners();
            }
        };
        _this.componentDidUpdate = function () {
            if (_this.hasTargetNode()) {
                _this.updateTargetAppearance();
                if (_this.props.isLoading) {
                    _this.updateSpinnerPosition();
                }
            }
        };
        _this.componentWillUnmount = function () {
            _this.detachListeners();
        };
        _this.getTargetNode = function (nextProps) {
            if (nextProps === void 0) { nextProps = _this.props; }
            var targetRef = nextProps.targetRef;
            // targetRef prop may be defined but it is not guaranteed it returns an element
            var targetElement = targetRef ? targetRef() : _this.children;
            // @ts-ignore - targetElement is not assignable to type 'ReactInstance'
            var targetNode = react_dom_1.findDOMNode(targetElement);
            return targetNode;
        };
        _this.getThisNode = function () { return react_dom_1.findDOMNode(_this); };
        // @ts-ignore - this.spinner is not assignable to type 'ReactInstance'
        _this.getSpinnerNode = function () { return react_dom_1.findDOMNode(_this.spinner); };
        _this.hasTargetNode = function (nextProps) { return !!_this.getTargetNode(nextProps); };
        _this.isVerticallyVisible = function (elementRect, viewportHeight) {
            var top = elementRect.top, bottom = elementRect.bottom;
            if (bottom <= 0) {
                return false;
            }
            return top < viewportHeight;
        };
        _this.isFullyVerticallyVisible = function (elementRect, viewportHeight) {
            var top = elementRect.top, bottom = elementRect.bottom;
            return top >= 0 && bottom <= viewportHeight;
        };
        _this.handleResize = function () {
            _this.updateSpinnerPosition();
        };
        _this.handleScroll = function () {
            _this.updateSpinnerPosition();
        };
        _this.translateSpinner = function (spinnerNode, transformY, isFixed) {
            spinnerNode.style.position = isFixed ? 'fixed' : '';
            spinnerNode.style.transform =
                transformY !== 0 ? "translate3d(0, " + transformY + "px, 0)" : '';
        };
        _this.updateTargetAppearance = function () {
            var targetNode = _this.getTargetNode();
            var _a = _this.props, isLoading = _a.isLoading, contentsOpacity = _a.contentsOpacity;
            if (targetNode &&
                targetNode.style &&
                typeof targetNode.style === 'object') {
                targetNode.style.pointerEvents = isLoading ? 'none' : '';
                targetNode.style.opacity = isLoading ? contentsOpacity.toString() : '';
            }
        };
        return _this;
    }
    LoadingContainerAdvanced.prototype.attachListeners = function () {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
    };
    LoadingContainerAdvanced.prototype.detachListeners = function () {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
    };
    LoadingContainerAdvanced.prototype.updateSpinnerPosition = function () {
        var viewportHeight = window.innerHeight;
        var targetNode = this.getTargetNode();
        var spinnerNode = this.getSpinnerNode();
        if (!targetNode || !spinnerNode) {
            return;
        }
        var targetRect = targetNode.getBoundingClientRect();
        var spinnerRect = spinnerNode.getBoundingClientRect();
        var spinnerHeight = spinnerRect.height;
        var isInViewport = this.isVerticallyVisible(targetRect, viewportHeight);
        var top = targetRect.top, bottom = targetRect.bottom, height = targetRect.height;
        if (isInViewport) {
            // The spinner may follow the element only if there is enough space:
            // Let's say the element can fit at least three spinners (vertically)
            var canFollow = height >= spinnerHeight * 3;
            if (canFollow &&
                !this.isFullyVerticallyVisible(targetRect, viewportHeight)) {
                if (top >= 0) {
                    // Only the head of the element is visible
                    var viewportSpaceTakenByElement = viewportHeight - top;
                    var diff = viewportSpaceTakenByElement / 2 + top - spinnerHeight / 2;
                    var y = viewportSpaceTakenByElement < spinnerHeight * 3
                        ? top + spinnerHeight
                        : diff;
                    this.translateSpinner(spinnerNode, y, true);
                }
                else if (top < 0 && bottom > viewportHeight) {
                    // The element takes all viewport, nor its head nor tail are visible
                    var y = viewportHeight / 2 - spinnerHeight / 2;
                    this.translateSpinner(spinnerNode, y, true);
                }
                else {
                    // Only the tail of the element is visible
                    var diff = bottom / 2 - spinnerHeight / 2;
                    var y = diff < spinnerHeight ? diff - (spinnerHeight - diff) : diff;
                    this.translateSpinner(spinnerNode, y, true);
                }
                return;
            }
        }
        else {
            // If both the element and the spinner are off screen - quit
            if (!this.isVerticallyVisible(spinnerRect, viewportHeight)) {
                return;
            }
        }
        // Three options here:
        // 1) the element is fully visible
        // 2) the element is too small for the spinner to follow
        // 3) the spinner might still be visible while the element isn't
        var thisNode = this.getThisNode();
        if (thisNode && typeof thisNode.getBoundingClientRect === 'function') {
            var thisTop = thisNode.getBoundingClientRect().top;
            var y = (top - thisTop) / 2;
            this.translateSpinner(spinnerNode, y, false);
        }
    };
    LoadingContainerAdvanced.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, isLoading = _a.isLoading, spinnerSize = _a.spinnerSize;
        return (react_1.default.createElement(LoadingContainerAdvanced_1.Container, null,
            react_1.default.cloneElement(children, {
                ref: function (el) {
                    _this.children = el;
                },
            }),
            isLoading && (react_1.default.createElement(LoadingContainerAdvanced_1.SpinnerBackdrop, null,
                react_1.default.createElement(LoadingContainerAdvanced_1.SpinnerContainer, { innerRef: function (el) {
                        _this.spinner = el;
                    } },
                    react_1.default.createElement(spinner_1.default, { size: spinnerSize }))))));
    };
    LoadingContainerAdvanced.defaultProps = {
        isLoading: true,
        spinnerSize: constants_1.LARGE,
        contentsOpacity: constants_1.LOADING_CONTENTS_OPACITY,
    };
    return LoadingContainerAdvanced;
}(react_1.default.Component));
exports.default = LoadingContainerAdvanced;
//# sourceMappingURL=LoadingContainerAdvanced.js.map