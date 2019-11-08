export var noop = function () { };
export var range = function (n) {
    return Array.from({ length: n }, function (v, i) { return i; });
};
export var between = function (min, max, number) {
    return Math.min(max, Math.max(min, number));
};
export var oneOf = function (a, b) { return (typeof a !== 'undefined' ? a : b); };
//# sourceMappingURL=handy.js.map