"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var pickBy = function (test, object) {
    return Object.keys(object).reduce(function (obj, key) {
        var _a;
        return test(String(key), object[key]) ? tslib_1.__assign(tslib_1.__assign({}, obj), (_a = {}, _a[key] = object[key], _a)) : obj;
    }, {});
};
exports.default = pickBy;
//# sourceMappingURL=pick-by.js.map