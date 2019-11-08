"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
var analytics_1 = require("@atlaskit/analytics");
var analytics_next_1 = require("@atlaskit/analytics-next");
var StickyFooter_1 = tslib_1.__importDefault(require("../common/StickyFooter"));
var ScreenCounter_1 = require("../../util/ScreenCounter");
var types_1 = require("../../api/types");
var QuickSearchContainer_1 = require("../common/QuickSearchContainer");
var messages_1 = require("../../messages");
var SearchResults_1 = tslib_1.__importDefault(require("../common/SearchResults"));
var NoResultsState_1 = tslib_1.__importDefault(require("./NoResultsState"));
var JiraAdvancedSearch_1 = tslib_1.__importDefault(require("./JiraAdvancedSearch"));
var JiraSearchResultsMapper_1 = require("./JiraSearchResultsMapper");
var SearchResultsUtil_1 = require("../SearchResultsUtil");
var Result_1 = require("../../model/Result");
var ResultList_1 = require("../ResultList");
var performance_now_1 = tslib_1.__importDefault(require("../../util/performance-now"));
var analytics_event_helper_1 = require("../../util/analytics-event-helper");
var AdvancedIssueSearchLink_1 = tslib_1.__importDefault(require("./AdvancedIssueSearchLink"));
var experiment_utils_1 = require("../../util/experiment-utils");
var model_parameters_1 = require("../../util/model-parameters");
var FeaturesProvider_1 = require("../FeaturesProvider");
var JiraItemMapper_1 = require("../../api/JiraItemMapper");
var search_results_utils_1 = require("../../util/search-results-utils");
var JIRA_RESULT_LIMIT = 6;
var JIRA_PREQUERY_RESULT_LIMIT = 10;
var NoResultsAdvancedSearchContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  margin-top: ", "px;\n"], ["\n  margin-top: ", "px;\n"])), 4 * theme_1.gridSize());
var BeforePreQueryStateContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  margin-top: ", "px;\n"], ["\n  margin-top: ", "px;\n"])), theme_1.gridSize());
var containsQuery = function (string, query) {
    return string.toLowerCase().indexOf(query.toLowerCase()) > -1;
};
var getRecentItemMatches = function (query, recentItems) {
    if (!recentItems) {
        return [];
    }
    var issueKeyMatches = recentItems.objects.filter(function (result) { return result.objectKey && containsQuery(result.objectKey, query); });
    var titleMatches = recentItems.objects.filter(function (result) {
        return containsQuery(result.name, query);
    });
    return issueKeyMatches
        .concat(titleMatches)
        .slice(0, JiraSearchResultsMapper_1.MAX_RECENT_RESULTS_TO_SHOW);
};
var mergeSearchResultsWithRecentItems = function (searchResults, recentItems) {
    var defaultSearchResults = {
        objects: [],
        containers: [],
        people: [],
    };
    var results = tslib_1.__assign(tslib_1.__assign({}, defaultSearchResults), searchResults);
    return {
        objects: search_results_utils_1.appendListWithoutDuplication(recentItems, results.objects),
        containers: results.containers,
        people: results.people,
    };
};
var SCOPES = [types_1.Scope.JiraIssue, types_1.Scope.JiraBoardProjectFilter];
var LOGGER_NAME = 'AK.GlobalSearch.JiraQuickSearchContainer';
/**
 * Container/Stateful Component that handles the data fetching and state handling when the user interacts with Search.
 */
var JiraQuickSearchContainer = /** @class */ (function (_super) {
    tslib_1.__extends(JiraQuickSearchContainer, _super);
    function JiraQuickSearchContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            selectedAdvancedSearchType: SearchResultsUtil_1.JiraEntityTypes.Issues,
        };
        _this.screenCounters = {
            preQueryScreenCounter: new ScreenCounter_1.SearchScreenCounter(),
            postQueryScreenCounter: new ScreenCounter_1.SearchScreenCounter(),
        };
        _this.handleSearchSubmit = function (event, searchSessionId) {
            var _a = _this.props.onAdvancedSearch, onAdvancedSearch = _a === void 0 ? function () { } : _a;
            var target = event.target;
            var query = target.value;
            var defaultPrevented = false;
            onAdvancedSearch(Object.assign({}, event, {
                preventDefault: function () {
                    defaultPrevented = true;
                    event.preventDefault();
                    event.stopPropagation();
                },
                stopPropagation: function () { },
            }), _this.state.selectedAdvancedSearchType, query, searchSessionId);
            if (!defaultPrevented) {
                SearchResultsUtil_1.redirectToJiraAdvancedSearch(_this.state.selectedAdvancedSearchType, query);
            }
        };
        _this.handleAdvancedSearch = function (event, entity, query, searchSessionId, analyticsData, isLoading) {
            var _a = _this.props, referralContextIdentifiers = _a.referralContextIdentifiers, _b = _a.onAdvancedSearch, onAdvancedSearch = _b === void 0 ? function () { } : _b;
            var eventData = tslib_1.__assign(tslib_1.__assign({ resultId: SearchResultsUtil_1.ADVANCED_JIRA_SEARCH_RESULT_ID }, analyticsData), { query: query, 
                // queryversion is missing
                contentType: entity, type: Result_1.AnalyticsType.AdvancedSearchJira, isLoading: isLoading });
            analytics_event_helper_1.fireSelectedAdvancedSearch(eventData, searchSessionId, referralContextIdentifiers, _this.props.createAnalyticsEvent);
            onAdvancedSearch(event, entity, query, searchSessionId);
        };
        _this.getPreQueryDisplayedResults = function (recentItems, searchSessionId) {
            var features = _this.props.features;
            return JiraSearchResultsMapper_1.mapRecentResultsToUIGroups(recentItems, searchSessionId, features, _this.props.appPermission);
        };
        _this.getPostQueryDisplayedResults = function (searchResults, latestSearchQuery, recentItems, isLoading, searchSessionId) {
            var features = _this.props.features;
            if (features.isInFasterSearchExperiment) {
                var currentSearchResults = isLoading || !searchResults ? {} : searchResults;
                var recentResults = getRecentItemMatches(latestSearchQuery, recentItems);
                var mergedRecentSearchResults = mergeSearchResultsWithRecentItems(currentSearchResults, recentResults);
                return JiraSearchResultsMapper_1.mapSearchResultsToUIGroups(mergedRecentSearchResults, searchSessionId, features, _this.props.appPermission, latestSearchQuery);
            }
            return JiraSearchResultsMapper_1.mapSearchResultsToUIGroups(searchResults, searchSessionId, features, _this.props.appPermission, latestSearchQuery);
        };
        _this.getSearchResultsComponent = function (_a) {
            var retrySearch = _a.retrySearch, latestSearchQuery = _a.latestSearchQuery, isError = _a.isError, searchResults = _a.searchResults, isLoading = _a.isLoading, recentItems = _a.recentItems, keepPreQueryState = _a.keepPreQueryState, searchSessionId = _a.searchSessionId, searchMore = _a.searchMore, currentFilters = _a.currentFilters, onFilterChanged = _a.onFilterChanged;
            var query = latestSearchQuery;
            var _b = _this.props, referralContextIdentifiers = _b.referralContextIdentifiers, _c = _b.onAdvancedSearch, onAdvancedSearch = _c === void 0 ? function () { } : _c, appPermission = _b.appPermission, features = _b.features, isJiraPeopleProfilesEnabled = _b.isJiraPeopleProfilesEnabled;
            return (React.createElement(SearchResults_1.default, tslib_1.__assign({ query: query, isPreQuery: !query, isError: isError, isLoading: isLoading, retrySearch: retrySearch, keepPreQueryState: features.isInFasterSearchExperiment ? false : keepPreQueryState, searchSessionId: searchSessionId }, _this.screenCounters, { referralContextIdentifiers: referralContextIdentifiers, searchMore: searchMore, currentFilters: currentFilters, onFilterChanged: onFilterChanged, renderNoRecentActivity: function () { return (React.createElement(React.Fragment, null,
                    React.createElement(react_intl_1.FormattedHTMLMessage, tslib_1.__assign({}, messages_1.messages.jira_no_recent_activity_body)),
                    React.createElement(NoResultsAdvancedSearchContainer, null,
                        React.createElement(JiraAdvancedSearch_1.default, { appPermission: appPermission, query: query, analyticsData: { resultsCount: 0, wasOnNoResultsScreen: true }, onClick: function (mouseEvent, entity) {
                                return _this.handleAdvancedSearch(mouseEvent, entity, query, searchSessionId, { resultsCount: 0, wasOnNoResultsScreen: true }, isLoading);
                            }, isJiraPeopleProfilesEnabled: isJiraPeopleProfilesEnabled })))); }, renderAdvancedSearchGroup: function (analyticsData) { return (React.createElement(StickyFooter_1.default, { style: { marginTop: 2 * theme_1.gridSize() + "px" } },
                    React.createElement(JiraAdvancedSearch_1.default, { appPermission: appPermission, analyticsData: analyticsData, query: query, onClick: function (mouseEvent, entity) {
                            return _this.handleAdvancedSearch(mouseEvent, entity, query, searchSessionId, analyticsData, isLoading);
                        }, isJiraPeopleProfilesEnabled: isJiraPeopleProfilesEnabled }))); }, renderBeforePreQueryState: function () { return (React.createElement(BeforePreQueryStateContainer, null,
                    React.createElement(AdvancedIssueSearchLink_1.default, { onClick: function (_a) {
                            var event = _a.event;
                            return onAdvancedSearch(event, SearchResultsUtil_1.JiraEntityTypes.Issues, query, searchSessionId);
                        } }))); }, getPreQueryGroups: function () {
                    return _this.getPreQueryDisplayedResults(recentItems, searchSessionId);
                }, getPostQueryGroups: function () {
                    return _this.getPostQueryDisplayedResults(searchResults, latestSearchQuery, recentItems, isLoading, searchSessionId);
                }, renderNoResult: function () { return (React.createElement(NoResultsState_1.default, { query: query, onAdvancedSearch: function (mouseEvent, entity) {
                        return _this.handleAdvancedSearch(mouseEvent, entity, query, searchSessionId, { resultsCount: 0, wasOnNoResultsScreen: true }, isLoading);
                    }, isJiraPeopleProfilesEnabled: isJiraPeopleProfilesEnabled })); } })));
        };
        _this.getRecentlyInteractedPeople = function () {
            /*
              the following code is temporarily feature flagged for performance reasons and will be shortly reinstated.
              https://product-fabric.atlassian.net/browse/QS-459
            */
            if (_this.props.features.disableJiraPreQueryPeopleSearch) {
                return Promise.resolve([]);
            }
            else {
                var peoplePromise = _this.props.peopleSearchClient.getRecentPeople();
                return SearchResultsUtil_1.handlePromiseError(peoplePromise, [], function (error) {
                    return _this.props.logger.safeError(LOGGER_NAME, 'error in recently interacted people promise', error);
                });
            }
        };
        _this.getJiraRecentItems = function () {
            var features = _this.props.features;
            return _this.props.crossProductSearchClient
                .getRecentItems({
                context: 'jira',
                modelParams: [],
                resultLimit: experiment_utils_1.getJiraMaxObjects(features.abTest, JIRA_PREQUERY_RESULT_LIMIT),
                mapItemToResult: function (_, item) {
                    return JiraItemMapper_1.mapJiraItemToResult(Result_1.AnalyticsType.RecentJira)(item);
                },
            })
                .then(function (xpRecentResults) {
                var objects = xpRecentResults.results[types_1.Scope.JiraIssue];
                var containers = xpRecentResults.results[types_1.Scope.JiraBoardProjectFilter];
                return {
                    objects: objects ? objects.items : [],
                    containers: containers ? containers.items : [],
                    people: [],
                };
            })
                .catch(function (error) {
                _this.props.logger.safeError(LOGGER_NAME, 'error in recent Jira items promise', error);
                return {
                    objects: [],
                    containers: [],
                    people: [],
                };
            });
        };
        _this.canSearchUsers = function () {
            /*
              the following code is temporarily feature flagged for performance reasons and will be shortly reinstated.
              https://product-fabric.atlassian.net/browse/QS-459
            */
            if (_this.props.features.disableJiraPreQueryPeopleSearch) {
                return Promise.resolve(false);
            }
            else {
                return SearchResultsUtil_1.handlePromiseError(_this.props.jiraClient.canSearchUsers(), false, function (error) {
                    return _this.props.logger.safeError(LOGGER_NAME, 'error fetching browse user permission', error);
                });
            }
        };
        _this.getRecentItems = function () {
            return {
                eagerRecentItemsPromise: _this.getJiraRecentItems().then(function (results) { return ({ results: results }); }),
                lazyLoadedRecentItemsPromise: Promise.all([
                    _this.getRecentlyInteractedPeople(),
                    _this.canSearchUsers(),
                ]).then(function (_a) {
                    var _b = tslib_1.__read(_a, 2), people = _b[0], canSearchUsers = _b[1];
                    return {
                        people: canSearchUsers ? people : [],
                    };
                }),
            };
        };
        _this.getSearchResults = function (query, sessionId, startTime, queryVersion) {
            var features = _this.props.features;
            var referrerId = _this.props.referralContextIdentifiers &&
                _this.props.referralContextIdentifiers.searchReferrerId;
            var crossProductSearchPromise = _this.props.crossProductSearchClient.search({
                query: query,
                sessionId: sessionId,
                referrerId: referrerId,
                scopes: SCOPES,
                modelParams: model_parameters_1.buildJiraModelParams(queryVersion, _this.props.referralContextIdentifiers &&
                    _this.props.referralContextIdentifiers.currentContainerId),
                resultLimit: experiment_utils_1.getJiraMaxObjects(features.abTest, JIRA_RESULT_LIMIT),
            });
            var searchPeoplePromise = Promise.resolve([]);
            var mapPromiseToPerformanceTime = function (p) {
                return p.then(function () { return performance_now_1.default() - startTime; });
            };
            return Promise.all([
                crossProductSearchPromise,
                searchPeoplePromise,
                mapPromiseToPerformanceTime(crossProductSearchPromise),
                mapPromiseToPerformanceTime(searchPeoplePromise),
                _this.canSearchUsers(),
            ]).then(function (_a) {
                var _b = tslib_1.__read(_a, 5), xpsearchResults = _b[0], peopleResults = _b[1], crossProductSearchElapsedMs = _b[2], peopleElapsedMs = _b[3], canSearchPeople = _b[4];
                var objects = xpsearchResults.results[types_1.Scope.JiraIssue];
                var containers = xpsearchResults.results[types_1.Scope.JiraBoardProjectFilter];
                var objectItems = objects ? objects.items : [];
                _this.highlightMatchingFirstResult(query, objectItems);
                return {
                    results: {
                        objects: objectItems,
                        containers: containers ? containers.items : [],
                        people: canSearchPeople ? peopleResults : [],
                    },
                    timings: {
                        crossProductSearchElapsedMs: crossProductSearchElapsedMs,
                        peopleElapsedMs: peopleElapsedMs,
                    },
                    abTest: xpsearchResults.abTest,
                };
            });
        };
        return _this;
    }
    JiraQuickSearchContainer.prototype.highlightMatchingFirstResult = function (query, issueResults) {
        if (issueResults &&
            issueResults.length > 0 &&
            typeof issueResults[0].objectKey === 'string' &&
            (issueResults[0].objectKey.toLowerCase() === query.toLowerCase() ||
                (!!+query &&
                    issueResults[0].objectKey.toLowerCase().endsWith("" + -query)))) {
            this.setState({
                selectedResultId: ResultList_1.getUniqueResultId(issueResults[0]),
            });
        }
    };
    JiraQuickSearchContainer.prototype.handleSelectedResultIdChanged = function (newSelectedId) {
        this.setState({
            selectedResultId: newSelectedId,
        });
    };
    JiraQuickSearchContainer.prototype.render = function () {
        var _this = this;
        var _a = this.props, linkComponent = _a.linkComponent, createAnalyticsEvent = _a.createAnalyticsEvent, logger = _a.logger, features = _a.features, referralContextIdentifiers = _a.referralContextIdentifiers, isJiraPeopleProfilesEnabled = _a.isJiraPeopleProfilesEnabled;
        var selectedResultId = this.state.selectedResultId;
        return (
        // @ts-ignore
        React.createElement(QuickSearchContainer_1.BaseJiraQuickSearchContainerJira, { placeholder: this.props.intl.formatMessage(messages_1.messages.jira_search_placeholder), linkComponent: linkComponent, getPreQueryDisplayedResults: function (recentItems, searchSessionId) { return _this.getPreQueryDisplayedResults(recentItems, searchSessionId); }, getPostQueryDisplayedResults: this.getPostQueryDisplayedResults, getSearchResultsComponent: this.getSearchResultsComponent, getRecentItems: this.getRecentItems, getSearchResults: this.getSearchResults, handleSearchSubmit: this.handleSearchSubmit, createAnalyticsEvent: createAnalyticsEvent, logger: logger, selectedResultId: selectedResultId, onSelectedResultIdChanged: function (newId) {
                return _this.handleSelectedResultIdChanged(newId);
            }, referralContextIdentifiers: referralContextIdentifiers, product: "jira", features: features, advancedSearchId: SearchResultsUtil_1.ADVANCED_JIRA_SEARCH_RESULT_ID, isJiraPeopleProfilesEnabled: isJiraPeopleProfilesEnabled }));
    };
    return JiraQuickSearchContainer;
}(React.Component));
exports.JiraQuickSearchContainer = JiraQuickSearchContainer;
var JiraQuickSearchContainerWithIntl = react_intl_1.injectIntl(analytics_1.withAnalytics(JiraQuickSearchContainer, {}, {}));
exports.default = FeaturesProvider_1.injectFeatures(analytics_next_1.withAnalyticsEvents()(JiraQuickSearchContainerWithIntl));
var templateObject_1, templateObject_2;
//# sourceMappingURL=JiraQuickSearchContainer.js.map