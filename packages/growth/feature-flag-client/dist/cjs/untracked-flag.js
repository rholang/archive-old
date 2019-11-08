"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("./lib");
var UntrackedFlag = /** @class */ (function () {
    function UntrackedFlag(flagKey, flag) {
        this.flagKey = flagKey;
        this.value = flag.value;
    }
    UntrackedFlag.prototype.getBooleanValue = function (options) {
        if (!lib_1.isBoolean(this.value)) {
            return options.default;
        }
        return this.value;
    };
    UntrackedFlag.prototype.getVariantValue = function (options) {
        if (!lib_1.isString(this.value) ||
            !lib_1.isOneOf(this.value, options.oneOf)) {
            return options.default;
        }
        return this.value;
    };
    UntrackedFlag.prototype.getJSONValue = function () {
        if (!lib_1.isObject(this.value)) {
            return {};
        }
        return this.value;
    };
    return UntrackedFlag;
}());
exports.default = UntrackedFlag;
//# sourceMappingURL=untracked-flag.js.map