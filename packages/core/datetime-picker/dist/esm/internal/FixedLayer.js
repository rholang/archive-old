import { __assign, __extends } from "tslib";
import React from 'react';
import { layers } from '@atlaskit/theme/constants';
import ScrollLock from 'react-scrolllock';
import { Popper, Manager, Reference } from '@atlaskit/popper';
/**
 * This component renders layered content with fixed positioning.
 * Scroll is locked outside the layer to prevent the layered content from detaching from the
 * container ref.
 */
var FixedLayer = /** @class */ (function (_super) {
    __extends(FixedLayer, _super);
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
            return React.createElement("div", null);
        var containerRect = containerRef.getBoundingClientRect();
        return (
        /* Need to wrap layer in a fixed position div so that it will render its content as fixed
         * We need to set the intial top value to where the container is and zIndex so that it still
         * applies since we're creating a new stacking context. */
        React.createElement(Manager, null,
            React.createElement(ScrollLock, null),
            React.createElement(Reference, null, function (_a) {
                var ref = _a.ref;
                return (React.createElement("div", { ref: ref, "data-layer-child": true, style: {
                        position: 'absolute',
                        top: 0,
                        height: containerRect.height,
                        width: containerRect.width,
                        background: 'transparent',
                    } }));
            }),
            React.createElement(Popper, null, function (_a) {
                var ref = _a.ref, style = _a.style, placement = _a.placement, scheduleUpdate = _a.scheduleUpdate;
                _this.scheduleUpdate = scheduleUpdate;
                return (
                // @ts-ignore: need to add `placement` onto div for popper
                React.createElement("div", { ref: ref, placement: placement, style: __assign(__assign({}, style), { zIndex: layers.dialog() }) }, content));
            })));
    };
    return FixedLayer;
}(React.Component));
export default FixedLayer;
//# sourceMappingURL=FixedLayer.js.map