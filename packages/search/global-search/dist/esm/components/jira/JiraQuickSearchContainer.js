import { __assign, __extends, __makeTemplateObject, __read } from "tslib";
import * as React from 'react';
import { injectIntl, FormattedHTMLMessage, } from 'react-intl';
import styled from 'styled-components';
import { gridSize } from '@atlaskit/theme';
import { withAnalytics } from '@atlaskit/analytics';
import { withAnalyticsEvents } from '@atlaskit/analytics-next';
import StickyFooter from '../common/StickyFooter';
import { SearchScreenCounter } from '../../util/ScreenCounter';
import { Scope } from '../../api/types';
import { BaseJiraQuickSearchContainerJira, } from '../common/QuickSearchContainer';
import { messages } from '../../messages';
import SearchResultsComponent from '../common/SearchResults';
import NoResultsState from './NoResultsState';
import JiraAdvancedSearch from './JiraAdvancedSearch';
import { mapRecentResultsToUIGroups, mapSearchResultsToUIGroups, MAX_RECENT_RESULTS_TO_SHOW, } from './JiraSearchResultsMapper';
import { handlePromiseError, JiraEntityTypes, redirectToJiraAdvancedSearch, ADVANCED_JIRA_SEARCH_RESULT_ID, } from '../SearchResultsUtil';
import { AnalyticsType, } from '../../model/Result';
import { getUniqueResultId } from '../ResultList';
import performanceNow from '../../util/performance-now';
import { fireSelectedAdvancedSearch, } from '../../util/analytics-event-helper';
import AdvancedIssueSearchLink from './AdvancedIssueSearchLink';
import { getJiraMaxObjects } from '../../util/experiment-utils';
import { buildJiraModelParams } from '../../util/model-parameters';
import { injectFeatures } from '../FeaturesProvider';
import { mapJiraItemToResult } from '../../api/JiraItemMapper';
import { appendListWithoutDuplication } from '../../util/search-results-utils';
var JIRA_RESULT_LIMIT = 6;
var JIRA_PREQUERY_RESULT_LIMIT = 10;
var NoResultsAdvancedSearchContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: ", "px;\n"], ["\n  margin-top: ", "px;\n"])), 4 * gridSize());
var BeforePreQueryStateContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-top: ", "px;\n"], ["\n  margin-top: ", "px;\n"])), gridSize());
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
        .slice(0, MAX_RECENT_RESULTS_TO_SHOW);
};
var mergeSearchResultsWithRecentItems = function (searchResults, recentItems) {
    var defaultSearchResults = {
        objects: [],
        containers: [],
        people: [],
    };
    var results = __assign(__assign({}, defaultSearchResults), searchResults);
    return {
        objects: appendListWithoutDuplication(recentItems, results.objects),
        containers: results.containers,
        people: results.people,
    };
};
var SCOPES = [Scope.JiraIssue, Scope.JiraBoardProjectFilter];
var LOGGER_NAME = 'AK.GlobalSearch.JiraQuickSearchContainer';
/**
 * Container/Stateful Component that handles the data fetching and state handling when the user interacts with Search.
 */
var JiraQuickSearchContainer = /** @class */ (function (_super) {
    __extends(JiraQuickSearchContainer, _super);
    function JiraQuickSearchContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            selectedAdvancedSearchType: JiraEntityTypes.Issues,
        };
        _this.screenCounters = {
            preQueryScreenCounter: new SearchScreenCounter(),
            postQueryScreenCounter: new SearchScreenCounter(),
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
                redirectToJiraAdvancedSearch(_this.state.selectedAdvancedSearchType, query);
            }
        };
        _this.handleAdvancedSearch = function (event, entity, query, searchSessionId, analyticsData, isLoading) {
            var _a = _this.props, referralContextIdentifiers = _a.referralContextIdentifiers, _b = _a.onAdvancedSearch, onAdvancedSearch = _b === void 0 ? function () { } : _b;
            var eventData = __assign(__assign({ resultId: ADVANCED_JIRA_SEARCH_RESULT_ID }, analyticsData), { query: query, 
                // queryversion is missing
                contentType: entity, type: AnalyticsType.AdvancedSearchJira, isLoading: isLoading });
            fireSelectedAdvancedSearch(eventData, searchSessionId, referralContextIdentifiers, _this.props.createAnalyticsEvent);
            onAdvancedSearch(event, entity, query, searchSessionId);
        };
        _this.getPreQueryDisplayedResults = function (recentItems, searchSessionId) {
            var features = _this.props.features;
            return mapRecentResultsToUIGroups(recentItems, searchSessionId, features, _this.props.appPermission);
        };
        _this.getPostQueryDisplayedResults = function (searchResults, latestSearchQuery, recentItems, isLoading, searchSessionId) {
            var features = _this.props.features;
            if (features.isInFasterSearchExperiment) {
                var currentSearchResults = isLoading || !searchResults ? {} : searchResults;
                var recentResults = getRecentItemMatches(latestSearchQuery, recentItems);
                var mergedRecentSearchResults = mergeSearchResultsWithRecentItems(currentSearchResults, recentResults);
                return mapSearchResultsToUIGroups(mergedRecentSearchResults, searchSessionId, features, _this.props.appPermission, latestSearchQuery);
            }
            return mapSearchResultsToUIGroups(searchResults, searchSessionId, features, _this.props.appPermission, latestSearchQuery);
        };
        _this.getSearchResultsComponent = function (_a) {
            var retrySearch = _a.retrySearch, latestSearchQuery = _a.latestSearchQuery, isError = _a.isError, searchResults = _a.searchResults, isLoading = _a.isLoading, recentItems = _a.recentItems, keepPreQueryState = _a.keepPreQueryState, searchSessionId = _a.searchSessionId, searchMore = _a.searchMore, currentFilters = _a.currentFilters, onFilterChanged = _a.onFilterChanged;
            var query = latestSearchQuery;
            var _b = _this.props, referralContextIdentifiers = _b.referralContextIdentifiers, _c = _b.onAdvancedSearch, onAdvancedSearch = _c === void 0 ? function () { } : _c, appPermission = _b.appPermission, features = _b.features, isJiraPeopleProfilesEnabled = _b.isJiraPeopleProfilesEnabled;
            return (React.createElement(SearchResultsComponent, __assign({ query: query, isPreQuery: !query, isError: isError, isLoading: isLoading, retrySearch: retrySearch, keepPreQueryState: features.isInFasterSearchExperiment ? false : keepPreQueryState, searchSessionId: searchSessionId }, _this.screenCounters, { referralContextIdentifiers: referralContextIdentifiers, searchMore: searchMore, currentFilters: currentFilters, onFilterChanged: onFilterChanged, renderNoRecentActivity: function () { return (React.createElement(React.Fragment, null,
                    React.createElement(FormattedHTMLMessage, __assign({}, messages.jira_no_recent_activity_body)),
                    React.createElement(NoResultsAdvancedSearchContainer, null,
                        React.createElement(JiraAdvancedSearch, { appPermission: appPermission, query: query, analyticsData: { resultsCount: 0, wasOnNoResultsScreen: true }, onClick: function (mouseEvent, entity) {
                                return _this.handleAdvancedSearch(mouseEvent, entity, query, searchSessionId, { resultsCount: 0, wasOnNoResultsScreen: true }, isLoading);
                            }, isJiraPeopleProfilesEnabled: isJiraPeopleProfilesEnabled })))); }, renderAdvancedSearchGroup: function (analyticsData) { return (React.createElement(StickyFooter, { style: { marginTop: 2 * gridSize() + "px" } },
                    React.createElement(JiraAdvancedSearch, { appPermission: appPermission, analyticsData: analyticsData, query: query, onClick: function (mouseEvent, entity) {
                            return _this.handleAdvancedSearch(mouseEvent, entity, query, searchSessionId, analyticsData, isLoading);
                        }, isJiraPeopleProfilesEnabled: isJiraPeopleProfilesEnabled }))); }, renderBeforePreQueryState: function () { return (React.createElement(BeforePreQueryStateContainer, null,
                    React.createElement(AdvancedIssueSearchLink, { onClick: function (_a) {
                            var event = _a.event;
                            return onAdvancedSearch(event, JiraEntityTypes.Issues, query, searchSessionId);
                        } }))); }, getPreQueryGroups: function () {
                    return _this.getPreQueryDisplayedResults(recentItems, searchSessionId);
                }, getPostQueryGroups: function () {
                    return _this.getPostQueryDisplayedResults(searchResults, latestSearchQuery, recentItems, isLoading, searchSessionId);
                }, renderNoResult: function () { return (React.createElement(NoResultsState, { query: query, onAdvancedSearch: function (mouseEvent, entity) {
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
                return handlePromiseError(peoplePromise, [], function (error) {
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
                resultLimit: getJiraMaxObjects(features.abTest, JIRA_PREQUERY_RESULT_LIMIT),
                mapItemToResult: function (_, item) {
                    return mapJiraItemToResult(AnalyticsType.RecentJira)(item);
                },
            })
                .then(function (xpRecentResults) {
                var objects = xpRecentResults.results[Scope.JiraIssue];
                var containers = xpRecentResults.results[Scope.JiraBoardProjectFilter];
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
                return handlePromiseError(_this.props.jiraClient.canSearchUsers(), false, function (error) {
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
                    var _b = __read(_a, 2), people = _b[0], canSearchUsers = _b[1];
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
                modelParams: buildJiraModelParams(queryVersion, _this.props.referralContextIdentifiers &&
                    _this.props.referralContextIdentifiers.currentContainerId),
                resultLimit: getJiraMaxObjects(features.abTest, JIRA_RESULT_LIMIT),
            });
            var searchPeoplePromise = Promise.resolve([]);
            var mapPromiseToPerformanceTime = function (p) {
                return p.then(function () { return performanceNow() - startTime; });
            };
            return Promise.all([
                crossProductSearchPromise,
                searchPeoplePromise,
                mapPromiseToPerformanceTime(crossProductSearchPromise),
                mapPromiseToPerformanceTime(searchPeoplePromise),
                _this.canSearchUsers(),
            ]).then(function (_a) {
                var _b = __read(_a, 5), xpsearchResults = _b[0], peopleResults = _b[1], crossProductSearchElapsedMs = _b[2], peopleElapsedMs = _b[3], canSearchPeople = _b[4];
                var objects = xpsearchResults.results[Scope.JiraIssue];
                var containers = xpsearchResults.results[Scope.JiraBoardProjectFilter];
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
                selectedResultId: getUniqueResultId(issueResults[0]),
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
        React.createElement(BaseJiraQuickSearchContainerJira, { placeholder: this.props.intl.formatMessage(messages.jira_search_placeholder), linkComponent: linkComponent, getPreQueryDisplayedResults: function (recentItems, searchSessionId) { return _this.getPreQueryDisplayedResults(recentItems, searchSessionId); }, getPostQueryDisplayedResults: this.getPostQueryDisplayedResults, getSearchResultsComponent: this.getSearchResultsComponent, getRecentItems: this.getRecentItems, getSearchResults: this.getSearchResults, handleSearchSubmit: this.handleSearchSubmit, createAnalyticsEvent: createAnalyticsEvent, logger: logger, selectedResultId: selectedResultId, onSelectedResultIdChanged: function (newId) {
                return _this.handleSelectedResultIdChanged(newId);
            }, referralContextIdentifiers: referralContextIdentifiers, product: "jira", features: features, advancedSearchId: ADVANCED_JIRA_SEARCH_RESULT_ID, isJiraPeopleProfilesEnabled: isJiraPeopleProfilesEnabled }));
    };
    return JiraQuickSearchContainer;
}(React.Component));
export { JiraQuickSearchContainer };
var JiraQuickSearchContainerWithIntl = injectIntl(withAnalytics(JiraQuickSearchContainer, {}, {}));
export default injectFeatures(withAnalyticsEvents()(JiraQuickSearchContainerWithIntl));
var templateObject_1, templateObject_2;
//# sourceMappingURL=JiraQuickSearchContainer.js.map