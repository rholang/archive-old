import { __extends } from "tslib";
import * as React from 'react';
import IconError from '@atlaskit/icon/glyph/cross-circle';
import AkButton from '@atlaskit/button';
import { ErrorWrapper, ErrorTitle, ErrorText } from '../styled/Error';
var ErrorMessage = /** @class */ (function (_super) {
    __extends(ErrorMessage, _super);
    function ErrorMessage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderNotFound = function () { return (React.createElement(ErrorTitle, null, "The user is no longer available for the site")); };
        _this.renderDefault = function () { return (React.createElement(ErrorTitle, null,
            "Oops, looks like we\u2019re having issues",
            React.createElement("br", null),
            _this.props.reload ? (React.createElement(ErrorText, null, "Try again and we\u2019ll give it another shot")) : null)); };
        _this.renderRetryButton = function () {
            return _this.props.reload ? (React.createElement(AkButton, { appearance: "link", onClick: _this.props.reload }, "Try again")) : null;
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
        return (React.createElement(ErrorWrapper, null,
            React.createElement(IconError, { label: "icon error", size: "xlarge" }),
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
export default ErrorMessage;
//# sourceMappingURL=ErrorMessage.js.map