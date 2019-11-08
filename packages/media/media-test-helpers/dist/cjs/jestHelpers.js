"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
exports.asMock = function (fn) { return fn; };
exports.asMockReturnValue = function (fn, returnValue) { return exports.asMock(fn).mockReturnValue(returnValue); };
exports.expectToEqual = function (actual, expected) {
    return expect(actual).toEqual(expected);
};
exports.expectConstructorToHaveBeenCalledWith = function (func, expectedArgs) {
    var _a;
    return (_a = expect(func)).toHaveBeenCalledWith.apply(_a, tslib_1.__spread(expectedArgs));
};
exports.expectFunctionToHaveBeenCalledWith = function (func, expectedArgs) {
    var _a;
    return (_a = expect(func)).toHaveBeenCalledWith.apply(_a, tslib_1.__spread(expectedArgs));
};
//# sourceMappingURL=jestHelpers.js.map