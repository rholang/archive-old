"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_dom_1 = require("react-dom");
var raf_schd_1 = tslib_1.__importDefault(require("raf-schd"));
var styles_1 = require("../../styles");
var utils_1 = require("./utils");
var Popup = /** @class */ (function (_super) {
    tslib_1.__extends(Popup, _super);
    function Popup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            overflowScrollParent: false,
            validPosition: true,
        };
        _this.placement = ['', ''];
        _this.handleRef = function (popup) {
            if (!popup) {
                return;
            }
            _this.initPopup(popup);
        };
        _this.scheduledUpdatePosition = raf_schd_1.default(function (props) {
            return _this.updatePosition(props);
        });
        _this.onResize = function () { return _this.scheduledUpdatePosition(); };
        return _this;
    }
    /**
     * Calculates new popup position
     */
    Popup.prototype.updatePosition = function (props, state) {
        if (props === void 0) { props = this.props; }
        if (state === void 0) { state = this.state; }
        var target = props.target, fitHeight = props.fitHeight, fitWidth = props.fitWidth, boundariesElement = props.boundariesElement, offset = props.offset, onPositionCalculated = props.onPositionCalculated, onPlacementChanged = props.onPlacementChanged, alignX = props.alignX, alignY = props.alignY, stick = props.stick, forcePlacement = props.forcePlacement, allowOutOfBounds = props.allowOutOfBounds, rect = props.rect;
        var popup = state.popup;
        if (!target || !popup) {
            return;
        }
        var placement = utils_1.calculatePlacement(target, boundariesElement || document.body, fitWidth, fitHeight, alignX, alignY, forcePlacement);
        if (onPlacementChanged && this.placement.join('') !== placement.join('')) {
            onPlacementChanged(placement);
            this.placement = placement;
        }
        var position = utils_1.calculatePosition({
            placement: placement,
            popup: popup,
            target: target,
            stick: stick,
            offset: offset,
            allowOutOfBounds: allowOutOfBounds,
            rect: rect,
        });
        position = onPositionCalculated ? onPositionCalculated(position) : position;
        this.setState({
            position: position,
            validPosition: utils_1.validatePosition(target),
        });
    };
    Popup.prototype.cannotSetPopup = function (popup, target, overflowScrollParent) {
        /**
         * Check whether:
         * 1. Popup's offset targets which means whether or not its possible to correctly position popup along with given target.
         * 2. Popup is inside "overflow: scroll" container, but its offset parent isn't.
         *
         * Currently Popup isn't capable of position itself correctly in case 2,
         * Add "position: relative" to "overflow: scroll" container or to some other FloatingPanel wrapper inside it.
         */
        return (!target ||
            (document.body.contains(target) &&
                (popup.offsetParent && !popup.offsetParent.contains(target))) ||
            (overflowScrollParent &&
                !overflowScrollParent.contains(popup.offsetParent)));
    };
    /**
     * Popup initialization.
     * Checks whether it's possible to position popup along given target, and if it's not throws an error.
     */
    Popup.prototype.initPopup = function (popup) {
        var target = this.props.target;
        var overflowScrollParent = utils_1.findOverflowScrollParent(popup);
        if (this.cannotSetPopup(popup, target, overflowScrollParent)) {
            return;
        }
        this.setState({ popup: popup, overflowScrollParent: overflowScrollParent }, this.scheduledUpdatePosition);
    };
    Popup.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
        // We are delaying `updatePosition` otherwise it happens before the children
        // get rendered and we end up with a wrong position
        this.scheduledUpdatePosition(newProps);
    };
    Popup.prototype.componentDidMount = function () {
        window.addEventListener('resize', this.onResize);
        var stick = this.props.stick;
        if (stick) {
            this.scrollElement = utils_1.findOverflowScrollParent(this.props.target);
        }
        else {
            this.scrollElement = this.props.scrollableElement;
        }
        if (this.scrollElement) {
            this.scrollElement.addEventListener('scroll', this.onResize);
        }
    };
    Popup.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.onResize);
        if (this.scrollElement) {
            this.scrollElement.removeEventListener('scroll', this.onResize);
        }
        this.scheduledUpdatePosition.cancel();
    };
    Popup.prototype.renderPopup = function () {
        var position = this.state.position;
        var shouldRenderPopup = this.props.shouldRenderPopup;
        if (shouldRenderPopup && !shouldRenderPopup(position || {})) {
            return null;
        }
        return (React.createElement("div", { ref: this.handleRef, style: tslib_1.__assign({ position: 'absolute', zIndex: this.props.zIndex || styles_1.akEditorFloatingPanelZIndex }, position), "aria-label": this.props.ariaLabel || 'Popup', "data-editor-popup": true }, this.props.children));
    };
    Popup.prototype.render = function () {
        var _a = this.props, target = _a.target, mountTo = _a.mountTo;
        var validPosition = this.state.validPosition;
        if (!target || !validPosition) {
            return null;
        }
        if (mountTo) {
            return react_dom_1.createPortal(this.renderPopup(), mountTo);
        }
        // Without mountTo property renders popup as is,
        // which means it will be cropped by "overflow: hidden" container.
        return this.renderPopup();
    };
    Popup.defaultProps = {
        offset: [0, 0],
        allowOutOfBound: false,
    };
    return Popup;
}(React.Component));
exports.default = Popup;
var utils_2 = require("./utils");
exports.findOverflowScrollParent = utils_2.findOverflowScrollParent;
//# sourceMappingURL=index.js.map