"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var analytics_next_1 = require("@atlaskit/analytics-next");
var share_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/share"));
var inline_dialog_1 = tslib_1.__importDefault(require("@atlaskit/inline-dialog"));
var tooltip_1 = tslib_1.__importDefault(require("@atlaskit/tooltip"));
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var i18n_1 = require("../i18n");
var types_1 = require("../types");
var analytics_1 = require("./analytics");
var ShareButton_1 = tslib_1.__importDefault(require("./ShareButton"));
var ShareForm_1 = require("./ShareForm");
var utils_1 = require("./utils");
var ShareButtonWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: inline-flex;\n  outline: none;\n"], ["\n  display: inline-flex;\n  outline: none;\n"])));
var InlineDialogFormWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  width: 352px;\n  margin: -16px 0;\n"], ["\n  width: 352px;\n  margin: -16px 0;\n"])));
var BottomMessageWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  width: 352px;\n"], ["\n  width: 352px;\n"])));
exports.defaultShareContentState = {
    users: [],
    comment: {
        format: 'plain_text',
        value: '',
    },
};
var ShareDialogWithTriggerInternal = /** @class */ (function (_super) {
    tslib_1.__extends(ShareDialogWithTriggerInternal, _super);
    function ShareDialogWithTriggerInternal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.containerRef = React.createRef();
        _this.start = 0;
        _this.state = {
            isDialogOpen: false,
            isSharing: false,
            ignoreIntermediateState: false,
            defaultValue: exports.defaultShareContentState,
        };
        _this.closeAndResetDialog = function () {
            _this.setState({
                defaultValue: exports.defaultShareContentState,
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
                createAnalyticsEvent(payload).fire(analytics_1.CHANNEL_ID);
        };
        _this.getFlags = function (config, data) {
            var formatMessage = _this.props.intl.formatMessage;
            var flags = [];
            var shouldShowAdminNotifiedFlag = utils_1.showInviteWarning(config, data.users);
            if (shouldShowAdminNotifiedFlag) {
                flags.push({
                    appearance: 'success',
                    title: tslib_1.__assign(tslib_1.__assign({}, i18n_1.messages.adminNotifiedMessage), { defaultMessage: formatMessage(i18n_1.messages.adminNotifiedMessage) }),
                    type: types_1.ADMIN_NOTIFIED,
                });
            }
            flags.push({
                appearance: 'success',
                title: tslib_1.__assign(tslib_1.__assign({}, i18n_1.messages.shareSuccessMessage), { defaultMessage: formatMessage(i18n_1.messages.shareSuccessMessage, {
                        object: _this.props.shareContentType.toLowerCase(),
                    }) }),
                type: types_1.OBJECT_SHARED,
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
                        _this.createAndFireEvent(analytics_1.cancelShare(_this.start));
                }
            }
        };
        _this.onTriggerClick = function () {
            _this.createAndFireEvent(analytics_1.shareTriggerButtonClicked());
            _this.setState(function (state) { return ({
                isDialogOpen: !state.isDialogOpen,
                ignoreIntermediateState: false,
            }); }, function () {
                var onDialogOpen = _this.props.onDialogOpen;
                var isDialogOpen = _this.state.isDialogOpen;
                if (isDialogOpen) {
                    _this.start = Date.now();
                    _this.createAndFireEvent(analytics_1.screenEvent());
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
            _this.createAndFireEvent(analytics_1.formShareSubmitted(_this.start, data, shareContentType, formShareOrigin, config));
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
            _this.createAndFireEvent(analytics_1.copyLinkButtonClicked(_this.start, shareContentType, copyLinkOrigin));
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
                button = (React.createElement(ShareButton_1.default, { appearance: triggerButtonAppearance, text: triggerButtonStyle !== 'icon-only' ? (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.shareTriggerButtonText))) : null, onClick: _this.onTriggerClick, iconBefore: triggerButtonStyle !== 'text-only' ? (React.createElement(share_1.default, { label: formatMessage(i18n_1.messages.shareTriggerButtonIconLabel) })) : (undefined), isSelected: isDialogOpen, isDisabled: isDisabled }));
            }
            if (triggerButtonStyle === 'icon-only') {
                button = (React.createElement(tooltip_1.default, { content: triggerButtonTooltipText ||
                        formatMessage(i18n_1.messages.shareTriggerButtonTooltipText), position: triggerButtonTooltipPosition, hideTooltipOnClick: true }, button));
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
            React.createElement(inline_dialog_1.default, { content: React.createElement(analytics_next_1.AnalyticsContext, { data: { source: analytics_1.ANALYTICS_SOURCE } },
                    React.createElement(React.Fragment, null,
                        React.createElement(InlineDialogFormWrapper, null,
                            React.createElement(ShareForm_1.ShareForm, { copyLink: copyLink, loadOptions: loadUserOptions, isSharing: isSharing, onSubmit: this.handleShareSubmit, title: shareFormTitle, shareError: shareError, onDismiss: this.handleFormDismiss, defaultValue: defaultValue, config: config, onLinkCopy: this.handleCopyLink, isFetchingConfig: isFetchingConfig, submitButtonLabel: submitButtonLabel })),
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
exports.ShareDialogWithTriggerInternal = ShareDialogWithTriggerInternal;
exports.ShareDialogWithTrigger = analytics_next_1.withAnalyticsEvents()(react_intl_1.injectIntl(ShareDialogWithTriggerInternal));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=ShareDialogWithTrigger.js.map