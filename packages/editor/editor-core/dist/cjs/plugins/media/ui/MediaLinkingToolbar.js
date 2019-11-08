"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var chevron_left_large_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/chevron-left-large"));
var unlink_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/unlink"));
var PanelTextInput_1 = tslib_1.__importDefault(require("../../../ui/PanelTextInput"));
var Button_1 = tslib_1.__importDefault(require("../../floating-toolbar/ui/Button"));
var Separator_1 = tslib_1.__importDefault(require("../../floating-toolbar/ui/Separator"));
var ToolbarComponents_1 = require("../../../ui/RecentSearch/ToolbarComponents");
var RecentSearch_1 = tslib_1.__importDefault(require("../../../ui/RecentSearch"));
var messages_1 = require("../../../messages");
// Common Translations will live here
var react_intl_1 = require("react-intl");
exports.mediaLinkToolbarMessages = react_intl_1.defineMessages({
    backLink: {
        id: 'fabric.editor.backLink',
        defaultMessage: 'Go back',
        description: 'Go back from media linking toolbar to main toolbar',
    },
});
var LinkAddToolbar = /** @class */ (function (_super) {
    tslib_1.__extends(LinkAddToolbar, _super);
    function LinkAddToolbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleSubmit = function (_a) {
            var url = _a.url, inputMethod = _a.inputMethod;
            _this.props.onSubmit(url, { inputMethod: inputMethod });
        };
        _this.handleOnBack = function (_a) {
            var url = _a.url, inputMethod = _a.inputMethod;
            var onBack = _this.props.onBack;
            if (onBack) {
                onBack(url, { inputMethod: inputMethod });
            }
        };
        _this.handleCancel = function () {
            var onCancel = _this.props.onCancel;
            if (onCancel) {
                onCancel();
            }
        };
        _this.handleUnlink = function () {
            var onUnlink = _this.props.onUnlink;
            if (onUnlink) {
                onUnlink();
            }
        };
        _this.handleOnBlur = function (options) {
            _this.props.onBlur(options.url);
        };
        _this.renderContainer = function (_a) {
            var activityProvider = _a.activityProvider, _b = _a.inputProps, onChange = _b.onChange, onKeyDown = _b.onKeyDown, onSubmit = _b.onSubmit, value = _b.value, currentInputMethod = _a.currentInputMethod, renderRecentList = _a.renderRecentList;
            var _c = _this.props, formatMessage = _c.intl.formatMessage, displayUrl = _c.displayUrl;
            var getPlaceholder = function (hasActivityProvider) {
                return formatMessage(hasActivityProvider
                    ? messages_1.linkToolbarMessages.placeholder
                    : messages_1.linkToolbarMessages.linkPlaceholder);
            };
            var formatLinkAddressText = formatMessage(exports.mediaLinkToolbarMessages.backLink);
            var formatUnlinkText = formatMessage(messages_1.linkToolbarMessages.unlink);
            return (React.createElement("div", { className: "recent-list" },
                React.createElement(ToolbarComponents_1.Container, { provider: !!activityProvider },
                    React.createElement(ToolbarComponents_1.UrlInputWrapper, null,
                        React.createElement(Button_1.default, { title: formatLinkAddressText, icon: React.createElement(chevron_left_large_1.default, { label: formatLinkAddressText }), onClick: function () {
                                return _this.handleOnBack({
                                    url: value,
                                    inputMethod: currentInputMethod,
                                });
                            } }),
                        React.createElement(PanelTextInput_1.default, { placeholder: getPlaceholder(!!activityProvider), onSubmit: onSubmit, autoFocus: true, onCancel: _this.handleCancel, defaultValue: value, onChange: onChange, onKeyDown: onKeyDown }),
                        displayUrl && (React.createElement(React.Fragment, null,
                            React.createElement(Separator_1.default, null),
                            React.createElement(Button_1.default, { title: formatUnlinkText, icon: React.createElement(unlink_1.default, { label: formatUnlinkText }), onClick: _this.handleUnlink })))),
                    renderRecentList())));
        };
        return _this;
    }
    LinkAddToolbar.prototype.render = function () {
        var _a = this.props, providerFactory = _a.providerFactory, displayUrl = _a.displayUrl;
        return (React.createElement(RecentSearch_1.default, { defaultUrl: displayUrl, providerFactory: providerFactory, onSubmit: this.handleSubmit, onBlur: this.handleOnBlur, render: this.renderContainer }));
    };
    return LinkAddToolbar;
}(React.PureComponent));
exports.LinkAddToolbar = LinkAddToolbar;
exports.default = LinkAddToolbar;
//# sourceMappingURL=MediaLinkingToolbar.js.map