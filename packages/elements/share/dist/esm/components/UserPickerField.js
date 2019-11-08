import { __assign, __extends } from "tslib";
import { ErrorMessage, Field, HelperMessage } from '@atlaskit/form';
import UserPicker, { isValidEmail, } from '@atlaskit/user-picker';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { messages } from '../i18n';
import { allowEmails, isValidEmailUsingConfig, showInviteWarning, } from './utils';
export var REQUIRED = 'REQUIRED';
var validate = function (value) {
    return value && value.length > 0 ? undefined : REQUIRED;
};
var getNoOptionsMessageDescriptor = function (mode, emailValidity) {
    switch (mode) {
        case 'EXISTING_USERS_ONLY':
            return messages.userPickerExistingUserOnlyNoOptionsMessage;
        case 'ONLY_DOMAIN_BASED_INVITE':
            if (emailValidity !== 'INVALID') {
                return messages.userPickerDomainBasedUserOnlyNoOptionsMessage;
            }
            else {
                return messages.userPickerGenericNoOptionsMessage;
            }
        default:
            return messages.userPickerGenericNoOptionsMessage;
    }
};
var getNoOptionsMessage = function (config) { return function (_a) {
    var inputValue = _a.inputValue;
    return inputValue && inputValue.trim().length > 0
        ? (React.createElement(FormattedMessage, __assign({}, getNoOptionsMessageDescriptor((config && config.mode) || '', isValidEmail(inputValue)), { values: {
                inputValue: inputValue,
                domains: (React.createElement("strong", null, ((config && config.allowedDomains) || []).join(', '))),
            } })))
        : null;
}; };
var getPlaceHolderMessageDescriptor = function (mode) {
    return mode === 'EXISTING_USERS_ONLY'
        ? messages.userPickerExistingUserOnlyPlaceholder
        : messages.userPickerGenericPlaceholder;
};
var UserPickerField = /** @class */ (function (_super) {
    __extends(UserPickerField, _super);
    function UserPickerField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadOptions = function (search) {
            var loadOptions = _this.props.loadOptions;
            if (loadOptions && search && search.length > 0) {
                return loadOptions(search);
            }
            else {
                return [];
            }
        };
        return _this;
    }
    UserPickerField.prototype.render = function () {
        var _this = this;
        var _a = this.props, defaultValue = _a.defaultValue, config = _a.config, capabilitiesInfoMessage = _a.capabilitiesInfoMessage, isLoading = _a.isLoading;
        var configMode = (config && config.mode) || '';
        return (React.createElement(Field, { name: "users", validate: validate, defaultValue: defaultValue }, function (_a) {
            var fieldProps = _a.fieldProps, error = _a.error, valid = _a.meta.valid;
            return (React.createElement(React.Fragment, null,
                React.createElement(FormattedMessage, __assign({}, messages.userPickerAddMoreMessage), function (addMore) { return (React.createElement(UserPicker, __assign({}, fieldProps, { fieldId: "share", loadOptions: _this.loadOptions, isMulti: true, width: "100%", placeholder: React.createElement(FormattedMessage, __assign({}, getPlaceHolderMessageDescriptor(configMode))), addMoreMessage: addMore, allowEmail: allowEmails(config), isValidEmail: isValidEmailUsingConfig(config), noOptionsMessage: getNoOptionsMessage(config), isLoading: isLoading }))); }),
                showInviteWarning(config, fieldProps.value) && (React.createElement(HelperMessage, null, capabilitiesInfoMessage || (React.createElement(FormattedMessage, __assign({}, messages.capabilitiesInfoMessage))))),
                !valid && error === REQUIRED && (React.createElement(ErrorMessage, null,
                    React.createElement(FormattedMessage, __assign({}, messages.userPickerRequiredMessage))))));
        }));
    };
    return UserPickerField;
}(React.Component));
export { UserPickerField };
//# sourceMappingURL=UserPickerField.js.map