"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var constants_1 = require("@atlaskit/theme/constants");
var react_scrolllock_1 = tslib_1.__importDefault(require("react-scrolllock"));
var popper_1 = require("@atlaskit/popper");
/**
 * This component renders layered content with fixed positioning.
 * Scroll is locked outside the layer to prevent the layered content from detaching from the
 * container ref.
 */
var FixedLayer = /** @class */ (function (_super) {
    tslib_1.__extends(FixedLayer, _super);
    function FixedLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scheduleUpdate = function () { };
        return _this;
    }
    FixedLayer.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.inputValue !== this.props.inputValue) {
            this.scheduleUpdate();
        }
    };
    FixedLayer.prototype.render = function () {
        var _this = this;
        var _a = this.props, containerRef = _a.containerRef, content = _a.content;
        // Wait for containerRef callback to cause a re-render
        if (!containerRef)
            return react_1.default.createElement("div", null);
        var containerRect = containerRef.getBoundingClientRect();
        return (
        /* Need to wrap layer in a fixed position div so that it will render its content as fixed
         * We need to set the intial top value to where the container is and zIndex so that it still
         * applies since we're creating a new stacking context. */
        react_1.default.createElement(popper_1.Manager, null,
            react_1.default.createElement(react_scrolllock_1.default, null),
            react_1.default.createElement(popper_1.Reference, null, function (_a) {
                var ref = _a.ref;
                return (react_1.default.createElement("div", { ref: ref, "data-layer-child": true, style: {
                        position: 'absolute',
                        top: 0,
                        height: containerRect.height,
                        width: containerRect.width,
                        background: 'transparent',
                    } }));
            }),
            react_1.default.createElement(popper_1.Popper, null, function (_a) {
                var ref = _a.ref, style = _a.style, placement = _a.placement, scheduleUpdate = _a.scheduleUpdate;
                _this.scheduleUpdate = scheduleUpdate;
                return (
                // @ts-ignore: need to add `placement` onto div for popper
                react_1.default.createElement("div", { ref: ref, placement: placement, style: tslib_1.__assign(tslib_1.__assign({}, style), { zIndex: constants_1.layers.dialog() }) }, content));
            })));
    };
    return FixedLayer;
}(react_1.default.Component));
exports.default = FixedLayer;
//# sourceMappingURL=FixedLayer.js.map