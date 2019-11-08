"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var bridge_utils_1 = require("../../bridge-utils");
var WebRendererBridge = /** @class */ (function () {
    function WebRendererBridge() {
    }
    WebRendererBridge.prototype.call = function (bridge, event) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        bridge_utils_1.sendToBridge.apply(void 0, tslib_1.__spread([bridge, event], args));
    };
    return WebRendererBridge;
}());
exports.toNativeBridge = new WebRendererBridge();
//# sourceMappingURL=implementation.js.map