import { __assign, __extends, __makeTemplateObject } from "tslib";
import CheckCircleIcon from '@atlaskit/icon/glyph/check-circle';
import LinkFilledIcon from '@atlaskit/icon/glyph/link-filled';
import InlineDialog from '@atlaskit/inline-dialog';
import { colors } from '@atlaskit/theme';
import * as React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import styled from 'styled-components';
import Button from './styles';
import { messages } from '../i18n';
var AUTO_DISMISS_SECONDS = 8;
export var MessageContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin: -8px -16px;\n"], ["\n  display: flex;\n  align-items: center;\n  margin: -8px -16px;\n"])));
var MessageSpan = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  text-indent: 6px;\n"], ["\n  text-indent: 6px;\n"])));
export var HiddenInput = React.forwardRef(
// we need a hidden input to reliably copy to clipboard across all browsers.
function (props, ref) { return (React.createElement("input", { style: { position: 'absolute', left: '-9999px' }, ref: ref, value: props.text, readOnly: true })); });
export var AUTO_DISMISS_MS = AUTO_DISMISS_SECONDS * 1000;
var CopyLinkButton = /** @class */ (function (_super) {
    __extends(CopyLinkButton, _super);
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
            React.createElement(HiddenInput, { ref: this.inputRef, text: this.props.link }),
            React.createElement(InlineDialog, { content: React.createElement(MessageContainer, null,
                    React.createElement(CheckCircleIcon, { label: formatMessage(messages.copiedToClipboardIconLabel), primaryColor: colors.G300 }),
                    React.createElement(MessageSpan, null,
                        React.createElement(FormattedMessage, __assign({}, messages.copiedToClipboardMessage)))), isOpen: shouldShowCopiedMessage, onClose: this.handleDismissCopiedMessage, placement: "top-start" },
                React.createElement(Button, { appearance: "subtle-link", iconBefore: React.createElement(LinkFilledIcon, { label: formatMessage(messages.copyLinkButtonIconLabel), size: "medium" }), onClick: this.handleClick },
                    React.createElement(FormattedMessage, __assign({}, messages.copyLinkButtonText))))));
    };
    return CopyLinkButton;
}(React.Component));
export { CopyLinkButton };
export default injectIntl(CopyLinkButton);
var templateObject_1, templateObject_2;
//# sourceMappingURL=CopyLinkButton.js.map