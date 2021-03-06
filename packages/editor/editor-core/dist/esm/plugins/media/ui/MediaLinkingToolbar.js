import { __extends } from "tslib";
import * as React from 'react';
import ChevronLeftLargeIcon from '@atlaskit/icon/glyph/chevron-left-large';
import EditorUnlinkIcon from '@atlaskit/icon/glyph/editor/unlink';
import PanelTextInput from '../../../ui/PanelTextInput';
import Button from '../../floating-toolbar/ui/Button';
import Separator from '../../floating-toolbar/ui/Separator';
import { Container, UrlInputWrapper, } from '../../../ui/RecentSearch/ToolbarComponents';
import RecentSearch from '../../../ui/RecentSearch';
import { linkToolbarMessages } from '../../../messages';
// Common Translations will live here
import { defineMessages } from 'react-intl';
export var mediaLinkToolbarMessages = defineMessages({
    backLink: {
        id: 'fabric.editor.backLink',
        defaultMessage: 'Go back',
        description: 'Go back from media linking toolbar to main toolbar',
    },
});
var LinkAddToolbar = /** @class */ (function (_super) {
    __extends(LinkAddToolbar, _super);
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
                    ? linkToolbarMessages.placeholder
                    : linkToolbarMessages.linkPlaceholder);
            };
            var formatLinkAddressText = formatMessage(mediaLinkToolbarMessages.backLink);
            var formatUnlinkText = formatMessage(linkToolbarMessages.unlink);
            return (React.createElement("div", { className: "recent-list" },
                React.createElement(Container, { provider: !!activityProvider },
                    React.createElement(UrlInputWrapper, null,
                        React.createElement(Button, { title: formatLinkAddressText, icon: React.createElement(ChevronLeftLargeIcon, { label: formatLinkAddressText }), onClick: function () {
                                return _this.handleOnBack({
                                    url: value,
                                    inputMethod: currentInputMethod,
                                });
                            } }),
                        React.createElement(PanelTextInput, { placeholder: getPlaceholder(!!activityProvider), onSubmit: onSubmit, autoFocus: true, onCancel: _this.handleCancel, defaultValue: value, onChange: onChange, onKeyDown: onKeyDown }),
                        displayUrl && (React.createElement(React.Fragment, null,
                            React.createElement(Separator, null),
                            React.createElement(Button, { title: formatUnlinkText, icon: React.createElement(EditorUnlinkIcon, { label: formatUnlinkText }), onClick: _this.handleUnlink })))),
                    renderRecentList())));
        };
        return _this;
    }
    LinkAddToolbar.prototype.render = function () {
        var _a = this.props, providerFactory = _a.providerFactory, displayUrl = _a.displayUrl;
        return (React.createElement(RecentSearch, { defaultUrl: displayUrl, providerFactory: providerFactory, onSubmit: this.handleSubmit, onBlur: this.handleOnBlur, render: this.renderContainer }));
    };
    return LinkAddToolbar;
}(React.PureComponent));
export { LinkAddToolbar };
export default LinkAddToolbar;
//# sourceMappingURL=MediaLinkingToolbar.js.map