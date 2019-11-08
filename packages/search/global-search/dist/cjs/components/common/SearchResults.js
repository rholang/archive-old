"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var PreQueryState_1 = tslib_1.__importDefault(require("./PreQueryState"));
var SearchResultsUtil_1 = require("../SearchResultsUtil");
var ScreenAnalyticsHelper_1 = require("./ScreenAnalyticsHelper");
var ResultGroupsComponent_1 = tslib_1.__importStar(require("./ResultGroupsComponent"));
var SearchError_1 = tslib_1.__importDefault(require("../SearchError"));
var deep_equal_1 = tslib_1.__importDefault(require("deep-equal"));
var SearchResultsState;
(function (SearchResultsState) {
    SearchResultsState[SearchResultsState["PreQueryLoading"] = 0] = "PreQueryLoading";
    SearchResultsState[SearchResultsState["PreQueryResults"] = 1] = "PreQueryResults";
    SearchResultsState[SearchResultsState["PreQueryNoResults"] = 2] = "PreQueryNoResults";
    SearchResultsState[SearchResultsState["PostQueryResults"] = 3] = "PostQueryResults";
    SearchResultsState[SearchResultsState["PostQueryNoResults"] = 4] = "PostQueryNoResults";
    SearchResultsState[SearchResultsState["IntermediateResults"] = 5] = "IntermediateResults";
    SearchResultsState[SearchResultsState["IntermediateNoResults"] = 6] = "IntermediateNoResults";
})(SearchResultsState = exports.SearchResultsState || (exports.SearchResultsState = {}));
exports.getSearchResultState = function (_a) {
    var isPreQuery = _a.isPreQuery, isLoading = _a.isLoading, hasResults = _a.hasResults;
    if (isPreQuery) {
        // Pre query
        if (isLoading) {
            return SearchResultsState.PreQueryLoading;
        }
        if (!hasResults) {
            return SearchResultsState.PreQueryNoResults;
        }
        return SearchResultsState.PreQueryResults;
    }
    else if (isLoading) {
        // Intermediate
        if (!hasResults) {
            return SearchResultsState.IntermediateNoResults;
        }
        return SearchResultsState.IntermediateResults;
    }
    else {
        // Post query
        if (!hasResults) {
            return SearchResultsState.PostQueryNoResults;
        }
        return SearchResultsState.PostQueryResults;
    }
};
var SearchResults = /** @class */ (function (_super) {
    tslib_1.__extends(SearchResults, _super);
    function SearchResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchResults.prototype.shouldComponentUpdate = function (nextProps) {
        return !deep_equal_1.default(nextProps, this.props);
    };
    SearchResults.prototype.hasNoResult = function () {
        var _a = this.props, isPreQuery = _a.isPreQuery, isLoading = _a.isLoading, keepPreQueryState = _a.keepPreQueryState, getPreQueryGroups = _a.getPreQueryGroups, getPostQueryGroups = _a.getPostQueryGroups;
        var results = isPreQuery || (isLoading && keepPreQueryState)
            ? getPreQueryGroups()
            : getPostQueryGroups();
        return results.map(function (_a) {
            var items = _a.items;
            return items;
        }).every(SearchResultsUtil_1.isEmpty);
    };
    SearchResults.prototype.renderNoResult = function () {
        var _a = this.props, renderNoResult = _a.renderNoResult, postQueryScreenCounter = _a.postQueryScreenCounter, searchSessionId = _a.searchSessionId, referralContextIdentifiers = _a.referralContextIdentifiers;
        return (React.createElement(React.Fragment, null,
            renderNoResult(),
            React.createElement(ScreenAnalyticsHelper_1.PostQueryAnalyticsComponent, { screenCounter: postQueryScreenCounter, searchSessionId: searchSessionId, referralContextIdentifiers: referralContextIdentifiers, key: "post-query-analytics" })));
    };
    SearchResults.prototype.renderPreQueryState = function () {
        var _a = this.props, searchSessionId = _a.searchSessionId, preQueryScreenCounter = _a.preQueryScreenCounter, renderNoRecentActivity = _a.renderNoRecentActivity, referralContextIdentifiers = _a.referralContextIdentifiers, renderBeforePreQueryState = _a.renderBeforePreQueryState, renderAdvancedSearchGroup = _a.renderAdvancedSearchGroup, getPreQueryGroups = _a.getPreQueryGroups;
        return (React.createElement(React.Fragment, null,
            renderBeforePreQueryState && renderBeforePreQueryState(),
            React.createElement(PreQueryState_1.default, { resultsGroups: getPreQueryGroups(), renderNoRecentActivity: renderNoRecentActivity, searchSessionId: searchSessionId, screenCounter: preQueryScreenCounter, referralContextIdentifiers: referralContextIdentifiers, renderAdvancedSearchGroup: renderAdvancedSearchGroup })));
    };
    SearchResults.prototype.renderSearchResultsState = function () {
        var _a = this.props, searchSessionId = _a.searchSessionId, referralContextIdentifiers = _a.referralContextIdentifiers, renderAdvancedSearchGroup = _a.renderAdvancedSearchGroup, getPostQueryGroups = _a.getPostQueryGroups, postQueryScreenCounter = _a.postQueryScreenCounter, searchMore = _a.searchMore, onSearchMoreAdvancedSearchClicked = _a.onSearchMoreAdvancedSearchClicked, query = _a.query, getFilterComponent = _a.getFilterComponent, isLoading = _a.isLoading, currentFilters = _a.currentFilters, onFilterChanged = _a.onFilterChanged;
        var resultGroups = getPostQueryGroups();
        var topGroup = resultGroups.length > 0 ? resultGroups[0] : null;
        return (React.createElement(React.Fragment, null,
            topGroup &&
                getFilterComponent({
                    latestSearchQuery: query,
                    searchResultsTotalSize: topGroup.totalSize,
                    isLoading: isLoading,
                    searchSessionId: searchSessionId,
                    currentFilters: currentFilters,
                    onFilterChanged: onFilterChanged,
                }),
            React.createElement(ResultGroupsComponent_1.default, { query: query, type: ResultGroupsComponent_1.ResultGroupType.PostQuery, renderAdvancedSearch: renderAdvancedSearchGroup, resultsGroups: resultGroups, searchSessionId: searchSessionId, screenCounter: postQueryScreenCounter, referralContextIdentifiers: referralContextIdentifiers, onShowMoreClicked: searchMore || (function () { }), onSearchMoreAdvancedSearchClicked: onSearchMoreAdvancedSearchClicked })));
    };
    SearchResults.prototype.render = function () {
        var _a = this.props, isPreQuery = _a.isPreQuery, isError = _a.isError, isLoading = _a.isLoading, retrySearch = _a.retrySearch, keepPreQueryState = _a.keepPreQueryState;
        if (isError) {
            return React.createElement(SearchError_1.default, { onRetryClick: retrySearch });
        }
        var searchResultState = exports.getSearchResultState({
            isPreQuery: isPreQuery,
            isLoading: isLoading,
            hasResults: !this.hasNoResult(),
        });
        switch (searchResultState) {
            case SearchResultsState.PreQueryLoading:
                return null;
            case SearchResultsState.PreQueryNoResults:
                return this.renderPreQueryState();
            case SearchResultsState.PreQueryResults:
                return this.renderPreQueryState();
            case SearchResultsState.IntermediateNoResults:
                return keepPreQueryState ? this.renderPreQueryState() : null;
            case SearchResultsState.IntermediateResults:
                return keepPreQueryState
                    ? this.renderPreQueryState()
                    : this.renderSearchResultsState();
            case SearchResultsState.PostQueryNoResults:
                return this.renderNoResult();
            case SearchResultsState.PostQueryResults:
                return this.renderSearchResultsState();
            default:
                throw new Error('unhandled state');
        }
    };
    SearchResults.defaultProps = {
        getFilterComponent: function () { return null; },
    };
    return SearchResults;
}(React.Component));
exports.default = SearchResults;
//# sourceMappingURL=SearchResults.js.map