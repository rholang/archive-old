"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var quick_search_1 = require("@atlaskit/quick-search");
var react_intl_1 = require("react-intl");
var messages_1 = require("../../messages");
var NoResults_1 = tslib_1.__importDefault(require("../NoResults"));
var SearchConfluenceItem_1 = tslib_1.__importDefault(require("../SearchConfluenceItem"));
var SearchResultsUtil_1 = require("../SearchResultsUtil");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"])));
var NoResultsInFilterState = /** @class */ (function (_super) {
    tslib_1.__extends(NoResultsInFilterState, _super);
    function NoResultsInFilterState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoResultsInFilterState.prototype.render = function () {
        var _this = this;
        var _a = this.props, query = _a.query, spaceTitle = _a.spaceTitle, onClearFilters = _a.onClearFilters;
        var analyticsData = { resultsCount: 0, wasOnNoResultsScreen: true };
        return (React.createElement(React.Fragment, null,
            React.createElement(NoResults_1.default, { key: "no-results", title: React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.confluence_no_results_in_space, { values: { spaceTitle: spaceTitle } })) }),
            React.createElement(quick_search_1.ResultItemGroup, { title: "", key: "advanced-search" },
                React.createElement(Container, null,
                    React.createElement(button_1.default, { appearance: "primary", onClick: onClearFilters },
                        React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.confluence_remove_space_filter))),
                    React.createElement(SearchConfluenceItem_1.default, { analyticsData: analyticsData, isCompact: true, query: query, text: React.createElement(button_1.default, { shouldFitContainer: true, onClick: function (event) {
                                if (_this.props.onClickAdvancedSearch) {
                                    _this.props.onClickAdvancedSearch(event, SearchResultsUtil_1.ConfluenceAdvancedSearchTypes.Content);
                                }
                            } },
                            React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.confluence_advanced_search))) })))));
    };
    return NoResultsInFilterState;
}(React.Component));
exports.default = NoResultsInFilterState;
var templateObject_1;
//# sourceMappingURL=NoResultsInFilterState.js.map