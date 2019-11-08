"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var form_1 = tslib_1.__importStar(require("@atlaskit/form"));
var error_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/error"));
var theme_1 = require("@atlaskit/theme");
var tooltip_1 = tslib_1.__importDefault(require("@atlaskit/tooltip"));
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var i18n_1 = require("../i18n");
var CommentField_1 = require("./CommentField");
var CopyLinkButton_1 = tslib_1.__importDefault(require("./CopyLinkButton"));
var ShareHeader_1 = require("./ShareHeader");
var UserPickerField_1 = require("./UserPickerField");
var SubmitButtonWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  margin-left: auto;\n"], ["\n  display: flex;\n  margin-left: auto;\n"])));
var CenterAlignedIconWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  padding: 0 10px;\n\n  > div {\n    line-height: 1;\n  }\n"], ["\n  display: flex;\n  align-self: center;\n  padding: 0 10px;\n\n  > div {\n    line-height: 1;\n  }\n"])));
exports.FromWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  [class^='FormHeader__FormHeaderWrapper'] {\n    h1:first-child {\n      ", "\n      \n      > span {\n        /* jira has a class override font settings on h1 > span in gh-custom-field-pickers.css */\n        font-size: inherit !important;\n        line-height: inherit !important;\n        letter-spacing: inherit !important;\n      }\n    }\n  }\n\n  [class^='FormSection__FormSectionWrapper'] {\n    margin-top: 0px;\n  }\n\n  [class^='FormFooter__FormFooterWrapper'] {\n    justify-content: space-between;\n    margin-top: 12px;\n    margin-bottom: 24px;\n  }\n\n  [class^='Field__FieldWrapper']:not(:first-child) {\n    margin-top: 12px;\n  }\n"], ["\n  [class^='FormHeader__FormHeaderWrapper'] {\n    h1:first-child {\n      ", "\n      \n      > span {\n        /* jira has a class override font settings on h1 > span in gh-custom-field-pickers.css */\n        font-size: inherit !important;\n        line-height: inherit !important;\n        letter-spacing: inherit !important;\n      }\n    }\n  }\n\n  [class^='FormSection__FormSectionWrapper'] {\n    margin-top: 0px;\n  }\n\n  [class^='FormFooter__FormFooterWrapper'] {\n    justify-content: space-between;\n    margin-top: 12px;\n    margin-bottom: 24px;\n  }\n\n  [class^='Field__FieldWrapper']:not(:first-child) {\n    margin-top: 12px;\n  }\n"])), theme_1.typography.h500());
var InternalForm = /** @class */ (function (_super) {
    tslib_1.__extends(InternalForm, _super);
    function InternalForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderSubmitButton = function () {
            var _a = _this.props, formatMessage = _a.intl.formatMessage, isSharing = _a.isSharing, shareError = _a.shareError, submitButtonLabel = _a.submitButtonLabel;
            var shouldShowWarning = shareError && !isSharing;
            var buttonAppearance = !shouldShowWarning ? 'primary' : 'warning';
            var buttonLabel = shareError ? i18n_1.messages.formRetry : i18n_1.messages.formSend;
            var ButtonLabelWrapper = buttonAppearance === 'warning' ? 'strong' : React.Fragment;
            return (React.createElement(SubmitButtonWrapper, null,
                React.createElement(CenterAlignedIconWrapper, null, shouldShowWarning && (React.createElement(tooltip_1.default, { content: React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.shareFailureMessage)), position: "top" },
                    React.createElement(error_1.default, { label: formatMessage(i18n_1.messages.shareFailureIconLabel), primaryColor: theme_1.colors.R400 })))),
                React.createElement(button_1.default, { appearance: buttonAppearance, type: "submit", isLoading: isSharing },
                    React.createElement(ButtonLabelWrapper, null, submitButtonLabel || React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, buttonLabel))))));
        };
        return _this;
    }
    InternalForm.prototype.componentWillUnmount = function () {
        var _a = this.props, onDismiss = _a.onDismiss, getValues = _a.getValues;
        if (onDismiss) {
            onDismiss(getValues());
        }
    };
    InternalForm.prototype.render = function () {
        var _a = this.props, formProps = _a.formProps, title = _a.title, loadOptions = _a.loadOptions, capabilitiesInfoMessage = _a.capabilitiesInfoMessage, onLinkCopy = _a.onLinkCopy, copyLink = _a.copyLink, defaultValue = _a.defaultValue, config = _a.config, isFetchingConfig = _a.isFetchingConfig;
        return (React.createElement(exports.FromWrapper, null,
            React.createElement("form", tslib_1.__assign({}, formProps),
                React.createElement(ShareHeader_1.ShareHeader, { title: title }),
                React.createElement(form_1.FormSection, null,
                    React.createElement(UserPickerField_1.UserPickerField, { loadOptions: loadOptions, defaultValue: defaultValue && defaultValue.users, capabilitiesInfoMessage: capabilitiesInfoMessage, config: config, isLoading: isFetchingConfig }),
                    config && config.allowComment && (React.createElement(CommentField_1.CommentField, { defaultValue: defaultValue && defaultValue.comment }))),
                React.createElement(form_1.FormFooter, null,
                    React.createElement(CopyLinkButton_1.default, { onLinkCopy: onLinkCopy, link: copyLink }),
                    this.renderSubmitButton()))));
    };
    return InternalForm;
}(React.PureComponent));
var InternalFormWithIntl = react_intl_1.injectIntl(InternalForm);
exports.ShareForm = function (props) { return (React.createElement(form_1.default, { onSubmit: props.onSubmit }, function (_a) {
    var formProps = _a.formProps, getValues = _a.getValues;
    return (React.createElement(InternalFormWithIntl, tslib_1.__assign({}, props, { formProps: formProps, getValues: getValues })));
})); };
exports.ShareForm.defaultProps = {
    isSharing: false,
    onSubmit: function () { },
};
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=ShareForm.js.map