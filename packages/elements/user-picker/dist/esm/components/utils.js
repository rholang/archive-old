import { __read, __spread } from "tslib";
import memoizeOne from 'memoize-one';
import { EmailType, TeamType, GroupType, UserType, } from '../types';
import { PopupSelect } from '@atlaskit/select';
export var isUser = function (option) {
    return option.type === undefined || option.type === UserType;
};
export var isTeam = function (option) {
    return option.type === TeamType;
};
export var isGroup = function (option) {
    return option.type === GroupType;
};
export var isEmail = function (option) {
    return option.type === EmailType;
};
export var optionToSelectableOption = function (option) { return ({
    label: option.name,
    value: option.id,
    data: option,
}); };
export var extractOptionValue = function (value) {
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
export var isIterable = function (a) {
    return typeof a[Symbol.iterator] === 'function';
};
export var getOptions = memoizeOne(function (options) {
    return options.map(optionToSelectableOption);
});
export var optionToSelectableOptions = memoizeOne((function (defaultValue) {
    if (!defaultValue) {
        return null;
    }
    if (Array.isArray(defaultValue)) {
        return defaultValue.map(optionToSelectableOption);
    }
    return optionToSelectableOption(defaultValue);
}));
export var getAvatarSize = function (appearance) {
    return appearance === 'big' ? 'medium' : appearance === 'multi' ? 'xsmall' : 'small';
};
export var isChildInput = function (child) {
    return child &&
        typeof child === 'object' &&
        child.props &&
        child.props.type === 'text';
};
export var isSingleValue = function (value) {
    return !!value && !Array.isArray(value);
};
export var hasValue = function (value) {
    return !!value && value.trim().length > 0;
};
export var callCallback = function (callback) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return callback && callback.apply(void 0, __spread(args));
};
export var getAvatarUrl = function (optionData) {
    if (isUser(optionData) || isTeam(optionData)) {
        return optionData.avatarUrl;
    }
    return undefined;
};
export var isPopupUserPickerByComponent = function (SelectComponent) { return SelectComponent === PopupSelect; };
export var isPopupUserPickerByProps = function (selectProps) {
    return selectProps.searchThreshold === -1;
};
//# sourceMappingURL=utils.js.map