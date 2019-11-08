import { __assign, __extends, __makeTemplateObject } from "tslib";
import * as React from 'react';
import styled from 'styled-components';
import Button from '@atlaskit/button';
import { ResultItemGroup } from '@atlaskit/quick-search';
import { FormattedMessage } from 'react-intl';
import { messages } from '../../messages';
import NoResults from '../NoResults';
import SearchConfluenceItem from '../SearchConfluenceItem';
import { ConfluenceAdvancedSearchTypes } from '../SearchResultsUtil';
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"])));
var NoResultsInFilterState = /** @class */ (function (_super) {
    __extends(NoResultsInFilterState, _super);
    function NoResultsInFilterState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoResultsInFilterState.prototype.render = function () {
        var _this = this;
        var _a = this.props, query = _a.query, spaceTitle = _a.spaceTitle, onClearFilters = _a.onClearFilters;
        var analyticsData = { resultsCount: 0, wasOnNoResultsScreen: true };
        return (React.createElement(React.Fragment, null,
            React.createElement(NoResults, { key: "no-results", title: React.createElement(FormattedMessage, __assign({}, messages.confluence_no_results_in_space, { values: { spaceTitle: spaceTitle } })) }),
            React.createElement(ResultItemGroup, { title: "", key: "advanced-search" },
                React.createElement(Container, null,
                    React.createElement(Button, { appearance: "primary", onClick: onClearFilters },
                        React.createElement(FormattedMessage, __assign({}, messages.confluence_remove_space_filter))),
                    React.createElement(SearchConfluenceItem, { analyticsData: analyticsData, isCompact: true, query: query, text: React.createElement(Button, { shouldFitContainer: true, onClick: function (event) {
                                if (_this.props.onClickAdvancedSearch) {
                                    _this.props.onClickAdvancedSearch(event, ConfluenceAdvancedSearchTypes.Content);
                                }
                            } },
                            React.createElement(FormattedMessage, __assign({}, messages.confluence_advanced_search))) })))));
    };
    return NoResultsInFilterState;
}(React.Component));
export default NoResultsInFilterState;
var templateObject_1;
//# sourceMappingURL=NoResultsInFilterState.js.map