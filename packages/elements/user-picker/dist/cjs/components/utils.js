"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var memoize_one_1 = tslib_1.__importDefault(require("memoize-one"));
var types_1 = require("../types");
var select_1 = require("@atlaskit/select");
exports.isUser = function (option) {
    return option.type === undefined || option.type === types_1.UserType;
};
exports.isTeam = function (option) {
    return option.type === types_1.TeamType;
};
exports.isGroup = function (option) {
    return option.type === types_1.GroupType;
};
exports.isEmail = function (option) {
    return option.type === types_1.EmailType;
};
exports.optionToSelectableOption = function (option) { return ({
    label: option.name,
    value: option.id,
    data: option,
}); };
exports.extractOptionValue = function (value) {
    if (!value) {
        return undefined;
    }
    if (Array.isArray(value)) {
        return value.map(function (_a) {
            var option = _a.data;
            return option;
        });
    }
    return value.data;
};
exports.isIterable = function (a) {
    return typeof a[Symbol.iterator] === 'function';
};
exports.getOptions = memoize_one_1.default(function (options) {
    return options.map(exports.optionToSelectableOption);
});
exports.optionToSelectableOptions = memoize_one_1.default((function (defaultValue) {
    if (!defaultValue) {
        return null;
    }
    if (Array.isArray(defaultValue)) {
        return defaultValue.map(exports.optionToSelectableOption);
    }
    return exports.optionToSelectableOption(defaultValue);
}));
exports.getAvatarSize = function (appearance) {
    return appearance === 'big' ? 'medium' : appearance === 'multi' ? 'xsmall' : 'small';
};
exports.isChildInput = function (child) {
    return child &&
        typeof child === 'object' &&
        child.props &&
        child.props.type === 'text';
};
exports.isSingleValue = function (value) {
    return !!value && !Array.isArray(value);
};
exports.hasValue = function (value) {
    return !!value && value.trim().length > 0;
};
exports.callCallback = function (callback) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return callback && callback.apply(void 0, tslib_1.__spread(args));
};
exports.getAvatarUrl = function (optionData) {
    if (exports.isUser(optionData) || exports.isTeam(optionData)) {
        return optionData.avatarUrl;
    }
    return undefined;
};
exports.isPopupUserPickerByComponent = function (SelectComponent) { return SelectComponent === select_1.PopupSelect; };
exports.isPopupUserPickerByProps = function (selectProps) {
    return selectProps.searchThreshold === -1;
};
//# sourceMappingURL=utils.js.map