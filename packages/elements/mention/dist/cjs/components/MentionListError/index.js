"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var i18n_1 = require("../../util/i18n");
var GenericErrorIllustration_1 = require("./GenericErrorIllustration");
var styles_1 = require("./styles");
var advisedActionMessages = {
    '401': i18n_1.LoginAgain,
    '403': i18n_1.DifferentText,
    default: i18n_1.DefaultAdvisedAction,
};
var MentionListError = /** @class */ (function (_super) {
    tslib_1.__extends(MentionListError, _super);
    function MentionListError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Translate the supplied Error into a message suitable for display in the MentionList.
     *
     * @param error the error to be displayed
     */
    MentionListError.getAdvisedActionMessage = function (error) {
        if (error && error.hasOwnProperty('statusCode')) {
            var httpError = error;
            return (advisedActionMessages[httpError.statusCode.toString()] ||
                advisedActionMessages.default);
        }
        return advisedActionMessages.default;
    };
    MentionListError.prototype.render = function () {
        var error = this.props.error;
        var ErrorMessage = MentionListError.getAdvisedActionMessage(error);
        return (React.createElement(styles_1.MentionListErrorStyle, null,
            React.createElement(GenericErrorIllustration_1.GenericErrorIllustration, null),
            React.createElement(styles_1.MentionListErrorHeadlineStyle, null,
                React.createElement(i18n_1.DefaultHeadline, null)),
            React.createElement(styles_1.MentionListAdviceStyle, null,
                React.createElement(ErrorMessage, null))));
    };
    return MentionListError;
}(React.PureComponent));
exports.default = MentionListError;
//# sourceMappingURL=index.js.map