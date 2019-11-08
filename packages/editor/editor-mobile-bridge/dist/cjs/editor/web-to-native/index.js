"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var android_impl_1 = tslib_1.__importDefault(require("./android-impl"));
var ios_impl_1 = tslib_1.__importDefault(require("./ios-impl"));
var dummy_impl_1 = tslib_1.__importDefault(require("./dummy-impl"));
function getBridgeImpl() {
    if (window.navigator.userAgent.match(/Android/)) {
        return new android_impl_1.default();
    }
    else if (window.webkit) {
        return new ios_impl_1.default();
    }
    else {
        return new dummy_impl_1.default();
    }
}
exports.toNativeBridge = getBridgeImpl();
//# sourceMappingURL=index.js.map