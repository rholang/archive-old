"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("./lib");
var TrackedFlag = /** @class */ (function () {
    function TrackedFlag(flagKey, flag, trackExposure) {
        this.flagKey = flagKey;
        this.value = flag.value;
        this.trackExposure = trackExposure;
        this.flag = flag;
    }
    TrackedFlag.prototype.getBooleanValue = function (options) {
        if (!lib_1.isBoolean(this.value)) {
            return options.default;
        }
        if (options.shouldTrackExposureEvent) {
            this.trackExposure(this.flagKey, this.flag, options.exposureData);
        }
        return this.value;
    };
    TrackedFlag.prototype.getVariantValue = function (options) {
        if (!lib_1.isString(this.value) ||
            !lib_1.isOneOf(this.value, options.oneOf)) {
            return options.default;
        }
        if (options.shouldTrackExposureEvent) {
            this.trackExposure(this.flagKey, this.flag, options.exposureData);
        }
        return this.value;
    };
    TrackedFlag.prototype.getJSONValue = function () {
        if (!lib_1.isObject(this.value)) {
            return {};
        }
        return this.value;
    };
    return TrackedFlag;
}());
exports.default = TrackedFlag;
//# sourceMappingURL=tracked-flag.js.map