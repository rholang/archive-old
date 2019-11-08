"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var FeatureFlag;
(function (FeatureFlag) {
})(FeatureFlag = exports.FeatureFlag || (exports.FeatureFlag = {}));
var defaultFlags = {};
var FeatureFlags = /** @class */ (function () {
    function FeatureFlags(flags) {
        this.flags = tslib_1.__assign(tslib_1.__assign({}, defaultFlags), flags);
    }
    FeatureFlags.prototype.isEnabled = function (key) {
        return this.flags[key] === true;
    };
    return FeatureFlags;
}());
exports.FeatureFlags = FeatureFlags;
//# sourceMappingURL=featureFlags.js.map