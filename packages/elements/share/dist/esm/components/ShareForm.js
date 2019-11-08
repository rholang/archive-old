import { __assign, __extends, __makeTemplateObject } from "tslib";
import Button from '@atlaskit/button';
import Form, { FormFooter, FormSection } from '@atlaskit/form';
import ErrorIcon from '@atlaskit/icon/glyph/error';
import { colors, typography } from '@atlaskit/theme';
import Tooltip from '@atlaskit/tooltip';
import * as React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import styled from 'styled-components';
import { messages } from '../i18n';
import { CommentField } from './CommentField';
import CopyLinkButton from './CopyLinkButton';
import { ShareHeader } from './ShareHeader';
import { UserPickerField } from './UserPickerField';
var SubmitButtonWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  margin-left: auto;\n"], ["\n  display: flex;\n  margin-left: auto;\n"])));
var CenterAlignedIconWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  padding: 0 10px;\n\n  > div {\n    line-height: 1;\n  }\n"], ["\n  display: flex;\n  align-self: center;\n  padding: 0 10px;\n\n  > div {\n    line-height: 1;\n  }\n"])));
export var FromWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  [class^='FormHeader__FormHeaderWrapper'] {\n    h1:first-child {\n      ", "\n      \n      > span {\n        /* jira has a class override font settings on h1 > span in gh-custom-field-pickers.css */\n        font-size: inherit !important;\n        line-height: inherit !important;\n        letter-spacing: inherit !important;\n      }\n    }\n  }\n\n  [class^='FormSection__FormSectionWrapper'] {\n    margin-top: 0px;\n  }\n\n  [class^='FormFooter__FormFooterWrapper'] {\n    justify-content: space-between;\n    margin-top: 12px;\n    margin-bottom: 24px;\n  }\n\n  [class^='Field__FieldWrapper']:not(:first-child) {\n    margin-top: 12px;\n  }\n"], ["\n  [class^='FormHeader__FormHeaderWrapper'] {\n    h1:first-child {\n      ", "\n      \n      > span {\n        /* jira has a class override font settings on h1 > span in gh-custom-field-pickers.css */\n        font-size: inherit !important;\n        line-height: inherit !important;\n        letter-spacing: inherit !important;\n      }\n    }\n  }\n\n  [class^='FormSection__FormSectionWrapper'] {\n    margin-top: 0px;\n  }\n\n  [class^='FormFooter__FormFooterWrapper'] {\n    justify-content: space-between;\n    margin-top: 12px;\n    margin-bottom: 24px;\n  }\n\n  [class^='Field__FieldWrapper']:not(:first-child) {\n    margin-top: 12px;\n  }\n"])), typography.h500());
var InternalForm = /** @class */ (function (_super) {
    __extends(InternalForm, _super);
    function InternalForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderSubmitButton = function () {
            var _a = _this.props, formatMessage = _a.intl.formatMessage, isSharing = _a.isSharing, shareError = _a.shareError, submitButtonLabel = _a.submitButtonLabel;
            var shouldShowWarning = shareError && !isSharing;
            var buttonAppearance = !shouldShowWarning ? 'primary' : 'warning';
            var buttonLabel = shareError ? messages.formRetry : messages.formSend;
            var ButtonLabelWrapper = buttonAppearance === 'warning' ? 'strong' : React.Fragment;
            return (React.createElement(SubmitButtonWrapper, null,
                React.createElement(CenterAlignedIconWrapper, null, shouldShowWarning && (React.createElement(Tooltip, { content: React.createElement(FormattedMessage, __assign({}, messages.shareFailureMessage)), position: "top" },
                    React.createElement(ErrorIcon, { label: formatMessage(messages.shareFailureIconLabel), primaryColor: colors.R400 })))),
                React.createElement(Button, { appearance: buttonAppearance, type: "submit", isLoading: isSharing },
                    React.createElement(ButtonLabelWrapper, null, submitButtonLabel || React.createElement(FormattedMessage, __assign({}, buttonLabel))))));
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
        return (React.createElement(FromWrapper, null,
            React.createElement("form", __assign({}, formProps),
                React.createElement(ShareHeader, { title: title }),
                React.createElement(FormSection, null,
                    React.createElement(UserPickerField, { loadOptions: loadOptions, defaultValue: defaultValue && defaultValue.users, capabilitiesInfoMessage: capabilitiesInfoMessage, config: config, isLoading: isFetchingConfig }),
                    config && config.allowComment && (React.createElement(CommentField, { defaultValue: defaultValue && defaultValue.comment }))),
                React.createElement(FormFooter, null,
                    React.createElement(CopyLinkButton, { onLinkCopy: onLinkCopy, link: copyLink }),
                    this.renderSubmitButton()))));
    };
    return InternalForm;
}(React.PureComponent));
var InternalFormWithIntl = injectIntl(InternalForm);
export var ShareForm = function (props) { return (React.createElement(Form, { onSubmit: props.onSubmit }, function (_a) {
    var formProps = _a.formProps, getValues = _a.getValues;
    return (React.createElement(InternalFormWithIntl, __assign({}, props, { formProps: formProps, getValues: getValues })));
})); };
ShareForm.defaultProps = {
    isSharing: false,
    onSubmit: function () { },
};
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=ShareForm.js.map