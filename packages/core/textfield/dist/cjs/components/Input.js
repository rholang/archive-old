"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@emotion/core");
function warnIfClash(ours, theirs) {
    var ourKeys = Object.keys(ours);
    var theirKeys = Object.keys(theirs);
    ourKeys.forEach(function (key) {
        if (theirKeys.includes(key)) {
            // eslint-disable-next-line no-console
            console.warn("\n          FieldText:\n          You are attempting to add prop \"" + key + "\" to the input field.\n          It is clashing with one of our supplied props.\n          Please try to control this prop through our public API\n        ");
        }
    });
}
function Input(_a) {
    var elemAfterInput = _a.elemAfterInput, elemBeforeInput = _a.elemBeforeInput, isDisabled = _a.isDisabled, isReadOnly = _a.isReadOnly, isRequired = _a.isRequired, onMouseDown = _a.onMouseDown, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave, onBlur = _a.onBlur, onFocus = _a.onFocus, theme = _a.theme, innerRef = _a.innerRef, testId = _a.testId, theirInputProps = tslib_1.__rest(_a, ["elemAfterInput", "elemBeforeInput", "isDisabled", "isReadOnly", "isRequired", "onMouseDown", "onMouseEnter", "onMouseLeave", "onBlur", "onFocus", "theme", "innerRef", "testId"]);
    var ourInputProps = {
        onFocus: onFocus,
        onBlur: onBlur,
        disabled: isDisabled,
        readOnly: isReadOnly,
        required: isRequired,
    };
    // Check for any clashes when in development
    if (process.env.NODE_ENV !== 'production') {
        warnIfClash(ourInputProps, theirInputProps);
    }
    var inputProps = tslib_1.__assign(tslib_1.__assign({}, theirInputProps), ourInputProps);
    var containerProps = {
        onMouseDown: onMouseDown,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
    };
    return (core_1.jsx("div", tslib_1.__assign({}, containerProps, { css: theme.container }),
        elemBeforeInput,
        core_1.jsx("input", tslib_1.__assign({}, inputProps, { css: theme.input, ref: innerRef, "data-testid": testId })),
        elemAfterInput));
}
exports.default = Input;
//# sourceMappingURL=Input.js.map