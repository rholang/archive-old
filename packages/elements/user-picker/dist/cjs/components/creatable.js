"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var memoize_one_1 = tslib_1.__importDefault(require("memoize-one"));
var types_1 = require("../types");
var emailValidation_1 = require("./emailValidation");
var utils_1 = require("./utils");
var validOption = ['VALID', 'POTENTIAL'];
var isValidNewOption = function (isValidEmail) {
    if (isValidEmail === void 0) { isValidEmail = emailValidation_1.isValidEmail; }
    return function (inputValue) {
        return inputValue && validOption.indexOf(isValidEmail(inputValue)) !== -1;
    };
};
var getNewOptionData = function (inputValue) { return ({
    label: inputValue,
    value: inputValue,
    data: {
        id: inputValue,
        name: inputValue,
        type: types_1.EmailType,
    },
}); };
var formatCreateLabel = function (inputText) {
    if (inputText) {
        return inputText.trim();
    }
    return '';
};
var isOptionDisabled = function (isValidEmail) {
    if (isValidEmail === void 0) { isValidEmail = emailValidation_1.isValidEmail; }
    return function (option) {
        if (utils_1.isEmail(option.data)) {
            return isValidEmail(option.data.id) !== 'VALID';
        }
        return false;
    };
};
exports.getCreatableProps = memoize_one_1.default(function (isValidEmail) { return ({
    allowCreateWhileLoading: true,
    createOptionPosition: 'first',
    isValidNewOption: isValidNewOption(isValidEmail),
    getNewOptionData: getNewOptionData,
    formatCreateLabel: formatCreateLabel,
    isOptionDisabled: isOptionDisabled(isValidEmail),
}); });
//# sourceMappingURL=creatable.js.map