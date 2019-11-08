import { __assign, __extends, __makeTemplateObject } from "tslib";
import { AnalyticsContext, withAnalyticsEvents, } from '@atlaskit/analytics-next';
import ShareIcon from '@atlaskit/icon/glyph/share';
import InlineDialog from '@atlaskit/inline-dialog';
import Aktooltip from '@atlaskit/tooltip';
import * as React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import styled from 'styled-components';
import { messages } from '../i18n';
import { ADMIN_NOTIFIED, OBJECT_SHARED, } from '../types';
import { cancelShare, CHANNEL_ID, copyLinkButtonClicked, formShareSubmitted, screenEvent, shareTriggerButtonClicked, ANALYTICS_SOURCE, } from './analytics';
import ShareButton from './ShareButton';
import { ShareForm } from './ShareForm';
import { showInviteWarning } from './utils';
var ShareButtonWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  outline: none;\n"], ["\n  display: inline-flex;\n  outline: none;\n"])));
var InlineDialogFormWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 352px;\n  margin: -16px 0;\n"], ["\n  width: 352px;\n  margin: -16px 0;\n"])));
var BottomMessageWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 352px;\n"], ["\n  width: 352px;\n"])));
export var defaultShareContentState = {
    users: [],
    comment: {
        format: 'plain_text',
        value: '',
    },
};
var ShareDialogWithTriggerInternal = /** @class */ (function (_super) {
    __extends(ShareDialogWithTriggerInternal, _super);
    function ShareDialogWithTriggerInternal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.containerRef = React.createRef();
        _this.start = 0;
        _this.state = {
            isDialogOpen: false,
            isSharing: false,
            ignoreIntermediateState: false,
            defaultValue: defaultShareContentState,
        };
        _this.closeAndResetDialog = function () {
            _this.setState({
                defaultValue: defaultShareContentState,
                ignoreIntermediateState: true,
                shareError: undefined,
                isDialogOpen: false,
            });
        };
        _this.createAndFireEvent = function (payload) {
            var _a = _this.props, createAnalyticsEvent = _a.createAnalyticsEvent, analyticsDecorator = _a.analyticsDecorator;
            if (analyticsDecorator)
                payload = analyticsDecorator(payload);
            if (createAnalyticsEvent)
                createAnalyticsEvent(payload).fire(CHANNEL_ID);
        };
        _this.getFlags = function (config, data) {
            var formatMessage = _this.props.intl.formatMessage;
            var flags = [];
            var shouldShowAdminNotifiedFlag = showInviteWarning(config, data.users);
            if (shouldShowAdminNotifiedFlag) {
                flags.push({
                    appearance: 'success',
                    title: __assign(__assign({}, messages.adminNotifiedMessage), { defaultMessage: formatMessage(messages.adminNotifiedMessage) }),
                    type: ADMIN_NOTIFIED,
                });
            }
            flags.push({
                appearance: 'success',
                title: __assign(__assign({}, messages.shareSuccessMessage), { defaultMessage: formatMessage(messages.shareSuccessMessage, {
                        object: _this.props.shareContentType.toLowerCase(),
                    }) }),
                type: OBJECT_SHARED,
            });
            // The reason for providing message property is that in jira,
            // the Flag system takes only Message Descriptor as payload
            // and formatMessage is called for every flag
            // if the translation data is not provided, a translated default message
            // will be displayed
            return flags;
        };
        _this.handleKeyDown = function (event) {
            var isDialogOpen = _this.state.isDialogOpen;
            var shouldCloseOnEscapePress = _this.props.shouldCloseOnEscapePress;
            if (isDialogOpen && shouldCloseOnEscapePress) {
                switch (event.key) {
                    case 'Escape':
                        // react-select will always capture the event via onKeyDown
                        // and trigger event.preventDefault()
                        var isKeyPressedOnContainer = !!(_this.containerRef.current &&
                            _this.containerRef.current === event.target);
                        // we DO NOT expect any prevent default behavior on the container itself
                        // the defaultPrevented check will happen only if the key press occurs on the container's children
                        if (!isKeyPressedOnContainer && event.defaultPrevented) {
                            // put the focus back onto the share dialog so that
                            // the user can press the escape key again to close the dialog
                            if (_this.containerRef.current) {
                                _this.containerRef.current.focus();
                            }
                            return;
                        }
                        event.stopPropagation();
                        _this.closeAndResetDialog();
                        _this.createAndFireEvent(cancelShare(_this.start));
                }
            }
        };
        _this.onTriggerClick = function () {
            _this.createAndFireEvent(shareTriggerButtonClicked());
            _this.setState(function (state) { return ({
                isDialogOpen: !state.isDialogOpen,
                ignoreIntermediateState: false,
            }); }, function () {
                var onDialogOpen = _this.props.onDialogOpen;
                var isDialogOpen = _this.state.isDialogOpen;
                if (isDialogOpen) {
                    _this.start = Date.now();
                    _this.createAndFireEvent(screenEvent());
                    if (onDialogOpen)
                        onDialogOpen();
                    if (_this.containerRef.current) {
                        _this.containerRef.current.focus();
                    }
                }
            });
        };
        _this.handleCloseDialog = function (_) {
            _this.setState({ isDialogOpen: false });
        };
        _this.handleShareSubmit = function (data) {
            var _a = _this.props, onShareSubmit = _a.onShareSubmit, shareContentType = _a.shareContentType, formShareOrigin = _a.formShareOrigin, showFlags = _a.showFlags, config = _a.config;
            if (!onShareSubmit) {
                return;
            }
            _this.setState({ isSharing: true });
            _this.createAndFireEvent(formShareSubmitted(_this.start, data, shareContentType, formShareOrigin, config));
            onShareSubmit(data)
                .then(function () {
                _this.closeAndResetDialog();
                _this.setState({ isSharing: false });
                showFlags(_this.getFlags(config, data));
            })
                .catch(function (err) {
                _this.setState({
                    isSharing: false,
                    shareError: {
                        message: err.message,
                    },
                });
            });
        };
        _this.handleFormDismiss = function (data) {
            _this.setState(function (_a) {
                var ignoreIntermediateState = _a.ignoreIntermediateState;
                return ignoreIntermediateState ? null : { defaultValue: data };
            });
        };
        _this.handleCopyLink = function () {
            var _a = _this.props, copyLinkOrigin = _a.copyLinkOrigin, shareContentType = _a.shareContentType;
            _this.createAndFireEvent(copyLinkButtonClicked(_this.start, shareContentType, copyLinkOrigin));
        };
        _this.renderShareTriggerButton = function () {
            var isDialogOpen = _this.state.isDialogOpen;
            var _a = _this.props, formatMessage = _a.intl.formatMessage, isDisabled = _a.isDisabled, renderCustomTriggerButton = _a.renderCustomTriggerButton, triggerButtonTooltipText = _a.triggerButtonTooltipText, triggerButtonTooltipPosition = _a.triggerButtonTooltipPosition, triggerButtonAppearance = _a.triggerButtonAppearance, triggerButtonStyle = _a.triggerButtonStyle;
            var button;
            if (renderCustomTriggerButton) {
                var shareError = _this.state.shareError;
                button = renderCustomTriggerButton({
                    error: shareError,
                    isSelected: isDialogOpen,
                    onClick: _this.onTriggerClick,
                });
            }
            else {
                button = (React.createElement(ShareButton, { appearance: triggerButtonAppearance, text: triggerButtonStyle !== 'icon-only' ? (React.createElement(FormattedMessage, __assign({}, messages.shareTriggerButtonText))) : null, onClick: _this.onTriggerClick, iconBefore: triggerButtonStyle !== 'text-only' ? (React.createElement(ShareIcon, { label: formatMessage(messages.shareTriggerButtonIconLabel) })) : (undefined), isSelected: isDialogOpen, isDisabled: isDisabled }));
            }
            if (triggerButtonStyle === 'icon-only') {
                button = (React.createElement(Aktooltip, { content: triggerButtonTooltipText ||
                        formatMessage(messages.shareTriggerButtonTooltipText), position: triggerButtonTooltipPosition, hideTooltipOnClick: true }, button));
            }
            return button;
        };
        return _this;
    }
    ShareDialogWithTriggerInternal.prototype.render = function () {
        var _a = this.state, isDialogOpen = _a.isDialogOpen, isSharing = _a.isSharing, shareError = _a.shareError, defaultValue = _a.defaultValue;
        var _b = this.props, copyLink = _b.copyLink, dialogPlacement = _b.dialogPlacement, isFetchingConfig = _b.isFetchingConfig, loadUserOptions = _b.loadUserOptions, shareFormTitle = _b.shareFormTitle, config = _b.config, bottomMessage = _b.bottomMessage, submitButtonLabel = _b.submitButtonLabel;
        // for performance purposes, we may want to have a loadable content i.e. ShareForm
        return (React.createElement(ShareButtonWrapper, { tabIndex: 0, onKeyDown: this.handleKeyDown, style: { outline: 'none' }, innerRef: this.containerRef },
            React.createElement(InlineDialog, { content: React.createElement(AnalyticsContext, { data: { source: ANALYTICS_SOURCE } },
                    React.createElement(React.Fragment, null,
                        React.createElement(InlineDialogFormWrapper, null,
                            React.createElement(ShareForm, { copyLink: copyLink, loadOptions: loadUserOptions, isSharing: isSharing, onSubmit: this.handleShareSubmit, title: shareFormTitle, shareError: shareError, onDismiss: this.handleFormDismiss, defaultValue: defaultValue, config: config, onLinkCopy: this.handleCopyLink, isFetchingConfig: isFetchingConfig, submitButtonLabel: submitButtonLabel })),
                        bottomMessage ? (React.createElement(BottomMessageWrapper, null, bottomMessage)) : null)), isOpen: isDialogOpen, onClose: this.handleCloseDialog, placement: dialogPlacement }, this.renderShareTriggerButton())));
    };
    ShareDialogWithTriggerInternal.defaultProps = {
        isDisabled: false,
        dialogPlacement: 'bottom-end',
        shouldCloseOnEscapePress: true,
        triggerButtonAppearance: 'subtle',
        triggerButtonStyle: 'icon-only',
        triggerButtonTooltipPosition: 'top',
    };
    return ShareDialogWithTriggerInternal;
}(React.PureComponent));
export { ShareDialogWithTriggerInternal };
export var ShareDialogWithTrigger = withAnalyticsEvents()(injectIntl(ShareDialogWithTriggerInternal));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=ShareDialogWithTrigger.js.map