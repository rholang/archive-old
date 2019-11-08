"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var messages_1 = require("../../messages");
var NoResults_1 = tslib_1.__importDefault(require("../NoResults"));
var quick_search_1 = require("@atlaskit/quick-search");
var JiraAdvancedSearch_1 = tslib_1.__importDefault(require("./JiraAdvancedSearch"));
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"])));
var NoResultsState = /** @class */ (function (_super) {
    tslib_1.__extends(NoResultsState, _super);
    function NoResultsState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoResultsState.prototype.render = function () {
        var _a = this.props, query = _a.query, onAdvancedSearch = _a.onAdvancedSearch, isJiraPeopleProfilesEnabled = _a.isJiraPeopleProfilesEnabled;
        return (React.createElement(React.Fragment, null,
            React.createElement(NoResults_1.default, { key: "no-results", title: React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.jira_no_results_title)), body: React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.jira_no_results_body)) }),
            React.createElement(quick_search_1.ResultItemGroup, { title: "", key: "advanced-search" },
                React.createElement(Container, null,
                    React.createElement(JiraAdvancedSearch_1.default, { query: query, analyticsData: { resultsCount: 0, wasOnNoResultsScreen: true }, onClick: onAdvancedSearch, isJiraPeopleProfilesEnabled: isJiraPeopleProfilesEnabled })))));
    };
    return NoResultsState;
}(React.Component));
exports.default = NoResultsState;
var templateObject_1;
//# sourceMappingURL=NoResultsState.js.map