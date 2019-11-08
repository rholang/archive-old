"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shallowEqual = function (objA, objB) {
    if (objA === objB) {
        return true;
    }
    if (objA == null || objB == null) {
        return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    for (var idx = 0; idx < keysA.length; idx++) {
        var key = keysA[idx];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        if (objA[key] !== objB[key]) {
            return false;
        }
    }
    return true;
};
exports.compareArrays = function (left, right, compareFn) {
    if (compareFn === void 0) { compareFn = exports.shallowEqual; }
    if (left.length !== right.length) {
        return false;
    }
    for (var idx = 0; idx < left.length; idx++) {
        if (!compareFn(left[idx], right[idx])) {
            return false;
        }
    }
    return true;
};
//# sourceMappingURL=utils.js.map