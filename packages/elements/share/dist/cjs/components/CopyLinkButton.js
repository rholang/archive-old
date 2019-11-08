"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var check_circle_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/check-circle"));
var link_filled_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/link-filled"));
var inline_dialog_1 = tslib_1.__importDefault(require("@atlaskit/inline-dialog"));
var theme_1 = require("@atlaskit/theme");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var styles_1 = tslib_1.__importDefault(require("./styles"));
var i18n_1 = require("../i18n");
var AUTO_DISMISS_SECONDS = 8;
exports.MessageContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin: -8px -16px;\n"], ["\n  display: flex;\n  align-items: center;\n  margin: -8px -16px;\n"])));
var MessageSpan = styled_components_1.default.span(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  text-indent: 6px;\n"], ["\n  text-indent: 6px;\n"])));
exports.HiddenInput = React.forwardRef(
// we need a hidden input to reliably copy to clipboard across all browsers.
function (props, ref) { return (React.createElement("input", { style: { position: 'absolute', left: '-9999px' }, ref: ref, value: props.text, readOnly: true })); });
exports.AUTO_DISMISS_MS = AUTO_DISMISS_SECONDS * 1000;
var CopyLinkButton = /** @class */ (function (_super) {
    tslib_1.__extends(CopyLinkButton, _super);
    function CopyLinkButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputRef = React.createRef();
        _this.state = {
            shouldShowCopiedMessage: false,
        };
        _this.clearAutoDismiss = function () {
            if (_this.autoDismiss) {
                clearTimeout(_this.autoDismiss);
                _this.autoDismiss = undefined;
            }
        };
        _this.handleClick = function () {
            _this.inputRef.current.select();
            document.execCommand('copy');
            if (_this.props.onLinkCopy) {
                _this.props.onLinkCopy(_this.props.link);
            }
            _this.setState({ shouldShowCopiedMessage: true }, function () {
                _this.clearAutoDismiss();
                _this.autoDismiss = setTimeout(function () {
                    _this.setState({ shouldShowCopiedMessage: false });
                }, AUTO_DISMISS_SECONDS * 1000);
            });
        };
        _this.handleDismissCopiedMessage = function () {
            _this.clearAutoDismiss();
            _this.setState({ shouldShowCopiedMessage: false });
        };
        return _this;
    }
    CopyLinkButton.prototype.componentWillUnmount = function () {
        this.clearAutoDismiss();
    };
    CopyLinkButton.prototype.render = function () {
        var shouldShowCopiedMessage = this.state.shouldShowCopiedMessage;
        var formatMessage = this.props.intl.formatMessage;
        return (React.createElement(React.Fragment, null,
            React.createElement(exports.HiddenInput, { ref: this.inputRef, text: this.props.link }),
            React.createElement(inline_dialog_1.default, { content: React.createElement(exports.MessageContainer, null,
                    React.createElement(check_circle_1.default, { label: formatMessage(i18n_1.messages.copiedToClipboardIconLabel), primaryColor: theme_1.colors.G300 }),
                    React.createElement(MessageSpan, null,
                        React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.copiedToClipboardMessage)))), isOpen: shouldShowCopiedMessage, onClose: this.handleDismissCopiedMessage, placement: "top-start" },
                React.createElement(styles_1.default, { appearance: "subtle-link", iconBefore: React.createElement(link_filled_1.default, { label: formatMessage(i18n_1.messages.copyLinkButtonIconLabel), size: "medium" }), onClick: this.handleClick },
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.copyLinkButtonText))))));
    };
    return CopyLinkButton;
}(React.Component));
exports.CopyLinkButton = CopyLinkButton;
exports.default = react_intl_1.injectIntl(CopyLinkButton);
var templateObject_1, templateObject_2;
//# sourceMappingURL=CopyLinkButton.js.map