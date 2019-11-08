"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var cross_circle_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/cross-circle"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var Error_1 = require("../styled/Error");
var ErrorMessage = /** @class */ (function (_super) {
    tslib_1.__extends(ErrorMessage, _super);
    function ErrorMessage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderNotFound = function () { return (React.createElement(Error_1.ErrorTitle, null, "The user is no longer available for the site")); };
        _this.renderDefault = function () { return (React.createElement(Error_1.ErrorTitle, null,
            "Oops, looks like we\u2019re having issues",
            React.createElement("br", null),
            _this.props.reload ? (React.createElement(Error_1.ErrorText, null, "Try again and we\u2019ll give it another shot")) : null)); };
        _this.renderRetryButton = function () {
            return _this.props.reload ? (React.createElement(button_1.default, { appearance: "link", onClick: _this.props.reload }, "Try again")) : null;
        };
        return _this;
    }
    ErrorMessage.prototype.renderErrorContent = function () {
        var errorType = this.props.errorType || {
            reason: 'default',
        };
        switch (errorType.reason) {
            case 'NotFound':
                return this.renderNotFound();
            default:
                return this.renderDefault();
        }
    };
    ErrorMessage.prototype.render = function () {
        return (React.createElement(Error_1.ErrorWrapper, null,
            React.createElement(cross_circle_1.default, { label: "icon error", size: "xlarge" }),
            this.renderErrorContent(),
            this.renderRetryButton()));
    };
    ErrorMessage.defaultProps = {
        errorType: {
            reason: 'default',
        },
    };
    return ErrorMessage;
}(React.PureComponent));
exports.default = ErrorMessage;
//# sourceMappingURL=ErrorMessage.js.map