import { __assign, __awaiter, __extends, __generator, __read } from "tslib";
import * as React from 'react';
import { injectIntl, FormattedHTMLMessage, } from 'react-intl';
// @ts-ignore
import { withAnalytics } from '@atlaskit/analytics';
import { FilterType, } from '../../api/CrossProductSearchClient';
import { Scope } from '../../api/types';
import { SearchScreenCounter } from '../../util/ScreenCounter';
import { ConfluenceAdvancedSearchTypes, redirectToConfluenceAdvancedSearch, handlePromiseError, ADVANCED_CONFLUENCE_SEARCH_RESULT_ID, } from '../SearchResultsUtil';
import performanceNow from '../../util/performance-now';
import { BaseConfluenceQuickSearchContainer, } from '../common/QuickSearchContainer';
import { messages } from '../../messages';
import NoResultsState from './NoResultsState';
import SearchResultsComponent from '../common/SearchResults';
import { getConfluenceAdvancedSearchLink } from '../SearchResultsUtil';
import AdvancedSearchGroup from './AdvancedSearchGroup';
import { mapRecentResultsToUIGroups, mapSearchResultsToUIGroups, MAX_RECENT_RESULTS_TO_SHOW, } from './ConfluenceSearchResultsMapper';
import { CONF_MAX_DISPLAYED_RESULTS } from '../../util/experiment-utils';
import { appendListWithoutDuplication } from '../../util/search-results-utils';
import { buildConfluenceModelParams } from '../../util/model-parameters';
import ConfluenceFilterGroup from './ConfluenceFilterGroup';
import NoResultsInFilterState from './NoResultsInFilterState';
import some from 'lodash.some';
import { injectFeatures } from '../FeaturesProvider';
var getRecentItemMatches = function (query, recentItems) {
    if (!recentItems) {
        return [];
    }
    return recentItems.objects.items
        .filter(function (result) {
        return result.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
        .slice(0, MAX_RECENT_RESULTS_TO_SHOW);
};
var mergeSearchResultsWithRecentItems = function (searchResults, recentItems) {
    var defaultSearchResults = {
        objects: {
            items: [],
            totalSize: 0,
        },
        spaces: {
            items: [],
            totalSize: 0,
        },
        people: {
            items: [],
            totalSize: 0,
        },
    };
    var results = __assign(__assign({}, defaultSearchResults), searchResults);
    return {
        objects: {
            items: appendListWithoutDuplication(recentItems, results.objects.items),
            // We don't add the 3 extra results to the total.
            // The rationale here is that the server results will eventually contain the 3 recent items
            // so the total here already includes the recent items.
            // In the case where we don't know the number from the server, we also can't show more so
            // this numeber should just be the size of the current list.
            totalSize: results.objects.totalSize,
            numberOfCurrentItems: results.objects.numberOfCurrentItems,
        },
        spaces: results.spaces,
        people: results.people,
    };
};
var LOGGER_NAME = 'AK.GlobalSearch.ConfluenceQuickSearchContainer';
var CCS_AUTOCOMPLETE = 'ccsearch-autocomplete';
/**
 * Container Component that handles the data fetching when the user interacts with Search.
 */
var ConfluenceQuickSearchContainer = /** @class */ (function (_super) {
    __extends(ConfluenceQuickSearchContainer, _super);
    function ConfluenceQuickSearchContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
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
            }), ConfluenceAdvancedSearchTypes.Content, query, searchSessionId);
            if (!defaultPrevented) {
                redirectToConfluenceAdvancedSearch(query);
            }
        };
        _this.handleSearchErrorAnalyticsThunk = function (source) { return function (error) {
            _this.handleSearchErrorAnalytics(error, source);
            _this.props.logger.safeError(LOGGER_NAME, "error in promise " + source, error);
        }; };
        _this.getSearchResults = function (query, sessionId, startTime, queryVersion, filters) {
            var confXpSearchPromise = _this.searchCrossProductConfluence(query, sessionId, queryVersion, filters);
            confXpSearchPromise.catch(_this.handleSearchErrorAnalyticsThunk('xpsearch-confluence'));
            var mapPromiseToPerformanceTime = function (p) {
                return p.then(function () { return performanceNow() - startTime; });
            };
            return Promise.all([
                confXpSearchPromise,
                mapPromiseToPerformanceTime(confXpSearchPromise),
            ]).then(function (_a) {
                var _b = __read(_a, 2), xpsearchResults = _b[0], confSearchElapsedMs = _b[1];
                var spaces = xpsearchResults.results[Scope.ConfluenceSpace];
                var objects = xpsearchResults.results[Scope.ConfluencePageBlogAttachment];
                var people = xpsearchResults.results[Scope.People];
                return {
                    results: {
                        objects: {
                            items: objects ? objects.items : [],
                            totalSize: objects ? objects.totalSize : 0,
                        },
                        spaces: {
                            items: spaces ? spaces.items : [],
                            totalSize: spaces ? spaces.totalSize : 0,
                        },
                        people: {
                            items: people ? people.items : [],
                            totalSize: people ? people.totalSize : 0,
                        },
                    },
                    timings: {
                        confSearchElapsedMs: confSearchElapsedMs,
                    },
                };
            });
        };
        _this.getRecentPeople = function (sessionId) {
            var _a = _this.props, peopleSearchClient = _a.peopleSearchClient, crossProductSearchClient = _a.crossProductSearchClient, features = _a.features, referralContextIdentifiers = _a.referralContextIdentifiers;
            var referrerId = referralContextIdentifiers && referralContextIdentifiers.searchReferrerId;
            // We want to be consistent with the search results when prefetching is enabled so we will use URS (via aggregator) to get the
            // bootstrapped people results, see prefetchResults.ts.
            return !features.useUrsForBootstrapping
                ? peopleSearchClient.getRecentPeople()
                : crossProductSearchClient
                    .getPeople({
                    query: '',
                    sessionId: sessionId,
                    referrerId: referrerId,
                    currentQuickSearchContext: 'confluence',
                    resultLimit: 3,
                })
                    .then(function (xProductResult) {
                    var recentPeople = xProductResult.results[Scope.UserConfluence];
                    return recentPeople ? recentPeople.items : [];
                });
        };
        _this.getRecentItems = function (sessionId) {
            var confluenceClient = _this.props.confluenceClient;
            var recentActivityPromisesMap = {
                'recent-confluence-items': confluenceClient.getRecentItems(),
                'recent-confluence-spaces': confluenceClient.getRecentSpaces(),
            };
            var recentActivityPromises = Object.keys(recentActivityPromisesMap).map(function (key) {
                return handlePromiseError(recentActivityPromisesMap[key], [], _this.handleSearchErrorAnalyticsThunk(key));
            });
            // NOTE:
            // We lose type safety here as typescript assumes there's no guarantee the order in which a map
            // gets converted into promises. Also there is currently no way (and no way in the forseeable future)
            // to get typescript to convert union types into tuple types (https://github.com/Microsoft/TypeScript/issues/13298)
            var required = Promise.all(recentActivityPromises).then(function (_a) {
                var _b = __read(_a, 2), recentlyViewedPages = _b[0], recentlyViewedSpaces = _b[1];
                return {
                    results: {
                        objects: {
                            items: recentlyViewedPages,
                            totalSize: recentlyViewedPages.length,
                        },
                        spaces: {
                            items: recentlyViewedSpaces,
                            totalSize: recentlyViewedSpaces.length,
                        },
                        people: {
                            items: [],
                            totalSize: 0,
                        },
                    },
                };
            });
            return {
                eagerRecentItemsPromise: required,
                lazyLoadedRecentItemsPromise: _this.getRecentPeople(sessionId).then(function (recentPeople) { return ({
                    people: {
                        items: recentPeople,
                        totalSize: recentPeople.length,
                    },
                }); }),
            };
        };
        _this.getAutocompleteSuggestions = function (query) {
            var _a = _this.props, autocompleteClient = _a.autocompleteClient, features = _a.features;
            if (features.isNavAutocompleteEnabled) {
                var crossProductSearchClient = _this.props.crossProductSearchClient;
                var navAutocompletePromise = handlePromiseError(crossProductSearchClient.getNavAutocompleteSuggestions(query), [query], _this.handleSearchErrorAnalyticsThunk(CCS_AUTOCOMPLETE));
                return navAutocompletePromise;
            }
            else if (features.isAutocompleteEnabled) {
                var autocompletePromise = handlePromiseError(autocompleteClient.getAutocompleteSuggestions(query), [query], _this.handleSearchErrorAnalyticsThunk(CCS_AUTOCOMPLETE));
                return autocompletePromise;
            }
            return Promise.resolve([]);
        };
        _this.getPreQueryDisplayedResults = function (recentItems, searchSessionId) {
            var features = _this.props.features;
            return mapRecentResultsToUIGroups(recentItems, features, searchSessionId);
        };
        _this.getPostQueryDisplayedResults = function (searchResults, latestSearchQuery, recentItems, isLoading, searchSessionId) {
            var features = _this.props.features;
            var currentSearchResults = isLoading || !searchResults
                ? {}
                : searchResults;
            var recentResults = getRecentItemMatches(latestSearchQuery, recentItems);
            var mergedRecentSearchResults = mergeSearchResultsWithRecentItems(currentSearchResults, recentResults);
            return mapSearchResultsToUIGroups(mergedRecentSearchResults, features, searchSessionId, isLoading);
        };
        _this.getNoResultsStateComponent = function (latestSearchQuery, searchSessionId, currentFilters, onFilterChanged) {
            var _a = _this.props, _b = _a.onAdvancedSearch, onAdvancedSearch = _b === void 0 ? function () { } : _b, referralContextIdentifiers = _a.referralContextIdentifiers;
            var filtersAreApplied = currentFilters.length > 0;
            if (filtersAreApplied &&
                referralContextIdentifiers &&
                referralContextIdentifiers.currentContainerName) {
                return (React.createElement(NoResultsInFilterState, { spaceTitle: referralContextIdentifiers.currentContainerName, query: latestSearchQuery, onClickAdvancedSearch: function (event, entity) {
                        return onAdvancedSearch(event, entity, latestSearchQuery, searchSessionId);
                    }, onClearFilters: function () {
                        onFilterChanged([]);
                    } }));
            }
            return (React.createElement(NoResultsState, { query: latestSearchQuery, onClick: function (event, entity) {
                    return onAdvancedSearch(event, entity, latestSearchQuery, searchSessionId);
                } }));
        };
        _this.getFilterComponent = function (searchResults) { return function (_a) {
            var latestSearchQuery = _a.latestSearchQuery, searchResultsTotalSize = _a.searchResultsTotalSize, isLoading = _a.isLoading, searchSessionId = _a.searchSessionId, currentFilters = _a.currentFilters, onFilterChanged = _a.onFilterChanged;
            var _b = _this.props, _c = _b.onAdvancedSearch, onAdvancedSearch = _c === void 0 ? function () { } : _c, features = _b.features;
            if (!features.spaceballsExperimentEnabled || searchResults === null) {
                return;
            }
            // only show filter post-query
            if (!latestSearchQuery) {
                return;
            }
            // don't show space filter if there are no results in all spaces
            if (currentFilters.length === 0 && searchResultsTotalSize === 0) {
                return;
            }
            var filterObject = _this.createQueryBasedSpaceFilter(currentFilters, searchResults);
            if (filterObject &&
                filterObject.filter.spaceKeys[0] &&
                filterObject.metadata) {
                var filter = filterObject.filter;
                var spaces_1 = filter ? filter.spaceKeys : [];
                return (React.createElement(ConfluenceFilterGroup, { onFilterChanged: onFilterChanged, isDisabled: isLoading, spaceTitle: filterObject.metadata.spaceTitle, spaceAvatar: filterObject.metadata.spaceAvatar, spaceKey: filter.spaceKeys[0], isFilterOn: currentFilters.length !== 0, searchSessionId: searchSessionId, onAdvancedSearch: function (event) {
                        return onAdvancedSearch(event, ConfluenceAdvancedSearchTypes.Content, latestSearchQuery, searchSessionId, spaces_1);
                    } }));
            }
        }; };
        _this.createQueryBasedSpaceFilter = function (currentFilters, searchResults) {
            function instanceOfSpaceFilter(filter) {
                return filter.filter['@type'] === FilterType.Spaces;
            }
            function createSpaceFilter(_a) {
                var spaces = _a.spaces;
                var space = spaces.items[0];
                return space && space.key && space.avatarUrl
                    ? {
                        filter: {
                            '@type': FilterType.Spaces,
                            spaceKeys: [space.key],
                        },
                        metadata: {
                            spaceAvatar: space.avatarUrl,
                            spaceTitle: space.name,
                        },
                    }
                    : undefined;
            }
            var existingSpaceFilter = currentFilters.find(instanceOfSpaceFilter);
            if (existingSpaceFilter) {
                return existingSpaceFilter;
            }
            return createSpaceFilter(searchResults);
        };
        _this.getSearchResultsComponent = function (_a) {
            var retrySearch = _a.retrySearch, latestSearchQuery = _a.latestSearchQuery, isError = _a.isError, searchResults = _a.searchResults, isLoading = _a.isLoading, recentItems = _a.recentItems, searchSessionId = _a.searchSessionId, searchMore = _a.searchMore, currentFilters = _a.currentFilters, onFilterChanged = _a.onFilterChanged;
            var _b = _this.props.onAdvancedSearch, onAdvancedSearch = _b === void 0 ? function () { } : _b;
            var onSearchMoreAdvancedSearchClicked = function (event) {
                onAdvancedSearch(event, ConfluenceAdvancedSearchTypes.Content, latestSearchQuery, searchSessionId);
            };
            return (React.createElement(SearchResultsComponent, __assign({ query: latestSearchQuery, isPreQuery: !latestSearchQuery, isError: isError, onFilterChanged: onFilterChanged, getFilterComponent: _this.getFilterComponent(searchResults), isLoading: isLoading, retrySearch: retrySearch, searchMore: searchMore, currentFilters: currentFilters, onSearchMoreAdvancedSearchClicked: onSearchMoreAdvancedSearchClicked, keepPreQueryState: false, searchSessionId: searchSessionId }, _this.screenCounters, { referralContextIdentifiers: _this.props.referralContextIdentifiers, renderNoRecentActivity: function () { return (React.createElement(FormattedHTMLMessage, __assign({}, messages.no_recent_activity_body, { values: { url: getConfluenceAdvancedSearchLink() } }))); }, renderAdvancedSearchGroup: function (analyticsData) { return (React.createElement(AdvancedSearchGroup, { key: "advanced", query: latestSearchQuery, analyticsData: analyticsData, onClick: function (event, entity) {
                        return onAdvancedSearch(event, entity, latestSearchQuery, searchSessionId);
                    } })); }, getPreQueryGroups: function () {
                    return _this.getPreQueryDisplayedResults(recentItems, searchSessionId);
                }, getPostQueryGroups: function () {
                    return _this.getPostQueryDisplayedResults(searchResults, latestSearchQuery, recentItems, isLoading, searchSessionId);
                }, renderNoResult: function () {
                    return _this.getNoResultsStateComponent(latestSearchQuery, searchSessionId, currentFilters, onFilterChanged);
                } })));
        };
        return _this;
    }
    ConfluenceQuickSearchContainer.prototype.searchCrossProductConfluence = function (query, sessionId, queryVersion, filters) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, crossProductSearchClient, modelContext, referralContextIdentifiers, scopes, modelParams, referrerId, results;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, crossProductSearchClient = _a.crossProductSearchClient, modelContext = _a.modelContext, referralContextIdentifiers = _a.referralContextIdentifiers;
                        scopes = [Scope.ConfluencePageBlogAttachment];
                        if (!some(filters, function (filter) { return filter['@type'] === 'spaces'; })) {
                            scopes = scopes.concat([Scope.ConfluenceSpace, Scope.People]);
                        }
                        modelParams = buildConfluenceModelParams(queryVersion, modelContext || {});
                        referrerId = referralContextIdentifiers && referralContextIdentifiers.searchReferrerId;
                        return [4 /*yield*/, crossProductSearchClient.search({
                                query: query,
                                sessionId: sessionId,
                                referrerId: referrerId,
                                scopes: scopes,
                                modelParams: modelParams,
                                resultLimit: CONF_MAX_DISPLAYED_RESULTS,
                                filters: filters,
                            })];
                    case 1:
                        results = _b.sent();
                        return [2 /*return*/, results];
                }
            });
        });
    };
    // TODO extract
    ConfluenceQuickSearchContainer.prototype.handleSearchErrorAnalytics = function (error, source) {
        var firePrivateAnalyticsEvent = this.props.firePrivateAnalyticsEvent;
        if (firePrivateAnalyticsEvent) {
            try {
                firePrivateAnalyticsEvent('atlassian.fabric.global-search.search-error', {
                    name: error.name,
                    message: error.message,
                    source: source,
                });
            }
            catch (e) {
                this.props.logger.safeError(LOGGER_NAME, 'Can not fire event atlassian.fabric.global-search.search-error', e);
            }
        }
    };
    ConfluenceQuickSearchContainer.prototype.render = function () {
        var _a = this.props, linkComponent = _a.linkComponent, logger = _a.logger, inputControls = _a.inputControls, features = _a.features;
        var isAutocompleteEnabled = features.isAutocompleteEnabled;
        var isNavAutocompleteEnabled = features.isNavAutocompleteEnabled;
        return (React.createElement(BaseConfluenceQuickSearchContainer, { placeholder: this.props.intl.formatMessage(messages.confluence_search_placeholder), linkComponent: linkComponent, getSearchResultsComponent: this.getSearchResultsComponent, referralContextIdentifiers: this.props.referralContextIdentifiers, getRecentItems: this.getRecentItems, getSearchResults: this.getSearchResults, getAutocompleteSuggestions: isAutocompleteEnabled || isNavAutocompleteEnabled
                ? this.getAutocompleteSuggestions
                : undefined, product: "confluence", handleSearchSubmit: this.handleSearchSubmit, getPreQueryDisplayedResults: this.getPreQueryDisplayedResults, getPostQueryDisplayedResults: this.getPostQueryDisplayedResults, logger: logger, inputControls: inputControls, features: features, advancedSearchId: ADVANCED_CONFLUENCE_SEARCH_RESULT_ID }));
    };
    return ConfluenceQuickSearchContainer;
}(React.Component));
export { ConfluenceQuickSearchContainer };
export default injectFeatures(injectIntl(withAnalytics(ConfluenceQuickSearchContainer, {}, {})));
//# sourceMappingURL=ConfluenceQuickSearchContainer.js.map