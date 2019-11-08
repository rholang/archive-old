"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var messages_1 = require("../../messages");
var NoResultsImage_1 = tslib_1.__importDefault(require("../../assets/NoResultsImage"));
var styled_1 = require("./styled");
exports.SearchResultsEmpty = function (props) {
    var formatMessage = props.intl.formatMessage;
    return (React.createElement(styled_1.SearchResultEmptyMessage, null,
        React.createElement(NoResultsImage_1.default, null),
        React.createElement("p", null, formatMessage(messages_1.messages.help_panel_search_results_no_results))));
};
exports.default = react_intl_1.injectIntl(exports.SearchResultsEmpty);
//# sourceMappingURL=SearchResultsEmpty.js.map