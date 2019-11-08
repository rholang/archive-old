"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noop = function () { };
exports.range = function (n) {
    return Array.from({ length: n }, function (v, i) { return i; });
};
exports.between = function (min, max, number) {
    return Math.min(max, Math.max(min, number));
};
exports.oneOf = function (a, b) { return (typeof a !== 'undefined' ? a : b); };
//# sourceMappingURL=handy.js.map