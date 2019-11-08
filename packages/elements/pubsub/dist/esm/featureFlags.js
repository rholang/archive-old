import { __assign } from "tslib";
export var FeatureFlag;
(function (FeatureFlag) {
})(FeatureFlag || (FeatureFlag = {}));
var defaultFlags = {};
var FeatureFlags = /** @class */ (function () {
    function FeatureFlags(flags) {
        this.flags = __assign(__assign({}, defaultFlags), flags);
    }
    FeatureFlags.prototype.isEnabled = function (key) {
        return this.flags[key] === true;
    };
    return FeatureFlags;
}());
export { FeatureFlags };
//# sourceMappingURL=featureFlags.js.map