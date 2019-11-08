"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isType = function (value, type) {
    return value !== null && typeof value === type;
};
exports.isObject = function (value) { return exports.isType(value, 'object'); };
exports.isBoolean = function (value) { return exports.isType(value, 'boolean'); };
exports.isString = function (value) { return exports.isType(value, 'string'); };
exports.isFlagWithEvaluationDetails = function (flag) {
    return exports.isObject(flag) && 'value' in flag && 'explanation' in flag;
};
exports.isSimpleFlag = function (flag) {
    return exports.isObject(flag) && 'value' in flag && !('explanation' in flag);
};
exports.isOneOf = function (value, list) {
    return list.indexOf(value) > -1;
};
exports.enforceAttributes = function (obj, attributes, identifier) {
    var title = identifier ? identifier + ": " : '';
    attributes.forEach(function (attribute) {
        if (!obj.hasOwnProperty(attribute) && obj[attribute] !== null) {
            throw new Error(title + "Missing " + attribute);
        }
    });
};
exports.checkForReservedAttributes = function (customAttributes) {
    var reservedAttributes = ['flagKey', 'ruleId', 'reason', 'value'];
    var keys = Object.keys(customAttributes);
    if (reservedAttributes.some(function (attribute) { return keys.includes(attribute); })) {
        throw new TypeError("exposureData contains a reserved attribute. Reserved attributes are: " + reservedAttributes.join(', '));
    }
};
var validateFlag = function (flagKey, flag) {
    if (exports.isSimpleFlag(flag) || exports.isFlagWithEvaluationDetails(flag)) {
        return true;
    }
    // @ts-ignore
    if (process.env.NODE_ENV !== 'production') {
        throw new Error(flagKey + " is not a valid flag. Missing \"value\" attribute.");
    }
};
exports.validateFlags = function (flags) {
    Object.keys(flags).forEach(function (key) { return validateFlag(key, flags[key]); });
};
//# sourceMappingURL=lib.js.map