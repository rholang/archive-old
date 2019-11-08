"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var memoize_one_1 = tslib_1.__importDefault(require("memoize-one"));
var ClearIndicator_1 = require("./ClearIndicator");
var MultiValue_1 = require("./MultiValue");
var MultiValueContainer_1 = require("./MultiValueContainer");
var Option_1 = require("./Option");
var SingleValue_1 = require("./SingleValue");
var Input_1 = require("./Input");
var SingleValueContainer_1 = require("./SingleValueContainer");
var PopupInput_1 = require("./PopupInput");
var PopupControl_1 = require("./PopupControl");
/**
 * Memoize getComponents to avoid rerenders.
 */
exports.getComponents = memoize_one_1.default(function (multi, anchor) {
    if (anchor) {
        return {
            Control: anchor,
            Option: Option_1.Option,
        };
    }
    else {
        return {
            MultiValue: MultiValue_1.MultiValue,
            DropdownIndicator: null,
            SingleValue: SingleValue_1.SingleValue,
            ClearIndicator: multi ? null : ClearIndicator_1.ClearIndicator,
            Option: Option_1.Option,
            ValueContainer: multi ? MultiValueContainer_1.MultiValueContainer : SingleValueContainer_1.SingleValueContainer,
            Input: Input_1.Input,
        };
    }
});
exports.getPopupComponents = memoize_one_1.default(function (hasPopupTitle) {
    var baseProps = {
        DropdownIndicator: null,
        SingleValue: SingleValue_1.SingleValue,
        ClearIndicator: ClearIndicator_1.ClearIndicator,
        Option: Option_1.Option,
        ValueContainer: SingleValueContainer_1.SingleValueContainer,
        Input: PopupInput_1.PopupInput,
    };
    if (hasPopupTitle) {
        return tslib_1.__assign(tslib_1.__assign({}, baseProps), { Control: PopupControl_1.PopupControl });
    }
    return baseProps;
});
//# sourceMappingURL=components.js.map