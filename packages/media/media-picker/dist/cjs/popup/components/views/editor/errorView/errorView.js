"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var media_ui_1 = require("@atlaskit/media-ui");
var react_intl_1 = require("react-intl");
var escHelper_1 = require("../escHelper");
var styles_1 = require("../styles");
var styles_2 = require("./styles");
var icons_1 = require("../../../../../icons");
var ErrorView = /** @class */ (function (_super) {
    tslib_1.__extends(ErrorView, _super);
    function ErrorView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorView.prototype.componentDidMount = function () {
        this.escHelper = new escHelper_1.EscHelper(this.props.onCancel);
    };
    ErrorView.prototype.componentWillUnmount = function () {
        if (this.escHelper) {
            this.escHelper.teardown();
        }
    };
    ErrorView.prototype.render = function () {
        return (React.createElement(styles_1.CenterView, null,
            React.createElement(styles_2.ErrorPopup, null,
                React.createElement(styles_2.ErrorIconWrapper, null, icons_1.errorIcon),
                React.createElement(styles_2.ErrorMessage, null, this.props.message),
                React.createElement(styles_2.ErrorHint, null, this.renderHint()),
                this.renderTryAgainButton(),
                this.renderCancelButton())));
    };
    ErrorView.prototype.renderHint = function () {
        var _a = this.props, onRetry = _a.onRetry, formatMessage = _a.intl.formatMessage;
        if (onRetry) {
            return React.createElement("span", null, formatMessage(media_ui_1.messages.error_hint_retry));
        }
        return React.createElement("span", null, formatMessage(media_ui_1.messages.error_hint_critical));
    };
    ErrorView.prototype.renderTryAgainButton = function () {
        var _a = this.props, onRetry = _a.onRetry, formatMessage = _a.intl.formatMessage;
        if (onRetry) {
            return (React.createElement(styles_2.ErrorButton, { appearance: "primary", onClick: onRetry }, formatMessage(media_ui_1.messages.try_again)));
        }
        return null;
    };
    ErrorView.prototype.renderCancelButton = function () {
        var _a = this.props, onCancel = _a.onCancel, onRetry = _a.onRetry, formatMessage = _a.intl.formatMessage;
        var message = onRetry ? media_ui_1.messages.cancel : media_ui_1.messages.close;
        return (React.createElement(styles_2.ErrorButton, { appearance: "subtle", onClick: onCancel }, formatMessage(message)));
    };
    return ErrorView;
}(react_1.Component));
exports.ErrorView = ErrorView;
exports.default = react_intl_1.injectIntl(ErrorView);
//# sourceMappingURL=errorView.js.map