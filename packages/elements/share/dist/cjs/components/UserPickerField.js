"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var form_1 = require("@atlaskit/form");
var user_picker_1 = tslib_1.__importStar(require("@atlaskit/user-picker"));
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var i18n_1 = require("../i18n");
var utils_1 = require("./utils");
exports.REQUIRED = 'REQUIRED';
var validate = function (value) {
    return value && value.length > 0 ? undefined : exports.REQUIRED;
};
var getNoOptionsMessageDescriptor = function (mode, emailValidity) {
    switch (mode) {
        case 'EXISTING_USERS_ONLY':
            return i18n_1.messages.userPickerExistingUserOnlyNoOptionsMessage;
        case 'ONLY_DOMAIN_BASED_INVITE':
            if (emailValidity !== 'INVALID') {
                return i18n_1.messages.userPickerDomainBasedUserOnlyNoOptionsMessage;
            }
            else {
                return i18n_1.messages.userPickerGenericNoOptionsMessage;
            }
        default:
            return i18n_1.messages.userPickerGenericNoOptionsMessage;
    }
};
var getNoOptionsMessage = function (config) { return function (_a) {
    var inputValue = _a.inputValue;
    return inputValue && inputValue.trim().length > 0
        ? (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, getNoOptionsMessageDescriptor((config && config.mode) || '', user_picker_1.isValidEmail(inputValue)), { values: {
                inputValue: inputValue,
                domains: (React.createElement("strong", null, ((config && config.allowedDomains) || []).join(', '))),
            } })))
        : null;
}; };
var getPlaceHolderMessageDescriptor = function (mode) {
    return mode === 'EXISTING_USERS_ONLY'
        ? i18n_1.messages.userPickerExistingUserOnlyPlaceholder
        : i18n_1.messages.userPickerGenericPlaceholder;
};
var UserPickerField = /** @class */ (function (_super) {
    tslib_1.__extends(UserPickerField, _super);
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
        return (React.createElement(form_1.Field, { name: "users", validate: validate, defaultValue: defaultValue }, function (_a) {
            var fieldProps = _a.fieldProps, error = _a.error, valid = _a.meta.valid;
            return (React.createElement(React.Fragment, null,
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.userPickerAddMoreMessage), function (addMore) { return (React.createElement(user_picker_1.default, tslib_1.__assign({}, fieldProps, { fieldId: "share", loadOptions: _this.loadOptions, isMulti: true, width: "100%", placeholder: React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, getPlaceHolderMessageDescriptor(configMode))), addMoreMessage: addMore, allowEmail: utils_1.allowEmails(config), isValidEmail: utils_1.isValidEmailUsingConfig(config), noOptionsMessage: getNoOptionsMessage(config), isLoading: isLoading }))); }),
                utils_1.showInviteWarning(config, fieldProps.value) && (React.createElement(form_1.HelperMessage, null, capabilitiesInfoMessage || (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.capabilitiesInfoMessage))))),
                !valid && error === exports.REQUIRED && (React.createElement(form_1.ErrorMessage, null,
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.userPickerRequiredMessage))))));
        }));
    };
    return UserPickerField;
}(React.Component));
exports.UserPickerField = UserPickerField;
//# sourceMappingURL=UserPickerField.js.map