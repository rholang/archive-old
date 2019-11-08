import { __read, __spread } from "tslib";
export var defaultPadding = [32, 16, 32, 16];
var WebBridge = /** @class */ (function () {
    function WebBridge() {
        this.padding = { top: 0, right: 0, bottom: 0, left: 0 };
        // Set initial page padding (necessary for seeing the gap cursor for some content nodes).
        // This may be overwritten at runtime by a native bridge consumer.
        this.setPadding.apply(this, __spread(defaultPadding));
    }
    WebBridge.prototype.setPadding = function (top, right, bottom, left) {
        if (top === void 0) { top = 0; }
        if (right === void 0) { right = 0; }
        if (bottom === void 0) { bottom = 0; }
        if (left === void 0) { left = 0; }
        var root = this.getRootElement();
        if (root) {
            root.style.padding = top + "px " + right + "px " + bottom + "px " + left + "px";
            this.padding = { top: top, right: right, bottom: bottom, left: left };
        }
    };
    WebBridge.prototype.getPadding = function () {
        return this.padding;
    };
    WebBridge.prototype.reload = function () {
        window.location.reload();
    };
    return WebBridge;
}());
export default WebBridge;
//# sourceMappingURL=web-bridge.js.map