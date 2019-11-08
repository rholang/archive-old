import { __read, __spread } from "tslib";
export var asMock = function (fn) { return fn; };
export var asMockReturnValue = function (fn, returnValue) { return asMock(fn).mockReturnValue(returnValue); };
export var expectToEqual = function (actual, expected) {
    return expect(actual).toEqual(expected);
};
export var expectConstructorToHaveBeenCalledWith = function (func, expectedArgs) {
    var _a;
    return (_a = expect(func)).toHaveBeenCalledWith.apply(_a, __spread(expectedArgs));
};
export var expectFunctionToHaveBeenCalledWith = function (func, expectedArgs) {
    var _a;
    return (_a = expect(func)).toHaveBeenCalledWith.apply(_a, __spread(expectedArgs));
};
//# sourceMappingURL=jestHelpers.js.map