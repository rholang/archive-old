"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var react_intl_1 = require("react-intl");
var HelpContext_1 = require("../../HelpContext");
var messages_1 = require("../../../messages");
var SomethingWrong_1 = tslib_1.__importDefault(require("../../../assets/SomethingWrong"));
var styled_1 = require("./styled");
exports.LoadingError = function (_a) {
    var help = _a.help, formatMessage = _a.intl.formatMessage;
    var handleOnClick = function () {
        help.loadArticle();
    };
    return (React.createElement(styled_1.LoadingErrorMessage, null,
        React.createElement("div", { dangerouslySetInnerHTML: {
                __html: SomethingWrong_1.default,
            } }),
        React.createElement("h2", null, formatMessage(messages_1.messages.help_panel_search_error_loading_title)),
        React.createElement("p", null, formatMessage(messages_1.messages.help_panel_search_error_loading_text)),
        React.createElement(styled_1.LoadingErrorButtonContainer, null,
            React.createElement(button_1.default, { onClick: handleOnClick }, formatMessage(messages_1.messages.help_panel_search_error_loading_button_label)))));
};
exports.default = HelpContext_1.withHelp(react_intl_1.injectIntl(exports.LoadingError));
//# sourceMappingURL=index.js.map