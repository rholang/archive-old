"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var spinner_1 = tslib_1.__importDefault(require("@atlaskit/spinner"));
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_intl_1 = require("react-intl");
var i18n_1 = require("../i18n");
var styles = tslib_1.__importStar(require("./styles"));
var RetryableButton = /** @class */ (function (_super) {
    tslib_1.__extends(RetryableButton, _super);
    function RetryableButton(props) {
        return _super.call(this, props) || this;
    }
    RetryableButton.prototype.renderLoading = function () {
        return (React.createElement("span", { className: styles.buttonSpinner },
            React.createElement(spinner_1.default, { invertColor: false })));
    };
    RetryableButton.prototype.renderRetry = function () {
        var _a = this.props, loading = _a.loading, retryClassName = _a.retryClassName, onSubmit = _a.onSubmit;
        return loading ? (this.renderLoading()) : (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.retryLabel), function (retryLabel) { return (React.createElement(button_1.default, { className: retryClassName, appearance: "warning", onClick: onSubmit }, retryLabel)); }));
    };
    RetryableButton.prototype.render = function () {
        var _a = this.props, loading = _a.loading, error = _a.error, className = _a.className, appearance = _a.appearance, onSubmit = _a.onSubmit, label = _a.label;
        return error ? (this.renderRetry()) : loading ? (this.renderLoading()) : (React.createElement(button_1.default, { className: className, appearance: appearance, onClick: onSubmit }, label));
    };
    return RetryableButton;
}(react_1.Component));
exports.default = RetryableButton;
//# sourceMappingURL=RetryableButton.js.map