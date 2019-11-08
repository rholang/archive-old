"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var GlobalQuickSearch_1 = tslib_1.__importDefault(require("../GlobalQuickSearch"));
var performance_now_1 = tslib_1.__importDefault(require("../../util/performance-now"));
var analytics_util_1 = require("../../util/analytics-util");
var analytics_event_helper_1 = require("../../util/analytics-event-helper");
var analytics_next_1 = require("@atlaskit/analytics-next");
var deep_equal_1 = tslib_1.__importDefault(require("deep-equal"));
var experiment_utils_1 = require("../../util/experiment-utils");
var SearchSessionProvider_1 = require("../SearchSessionProvider");
var resultMapToArray = function (results) {
    return results.map(function (result) { return result.items; });
};
var LOGGER_NAME = 'AK.GlobalSearch.QuickSearchContainer';
/**
 * Container/Stateful Component that handles the data fetching and state handling when the user interacts with Search.
 */
var QuickSearchContainer = /** @class */ (function (_super) {
    tslib_1.__extends(QuickSearchContainer, _super);
    function QuickSearchContainer(props) {
        var _this = _super.call(this, props) || this;
        // used to terminate if component is unmounted while waiting for a promise
        _this.unmounted = false;
        _this.latestQueryVersion = 0;
        _this.doSearch = function (query, queryVersion, filters) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var startTime, _a, results, timings_1, elapsedMs_1, e_1;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        startTime = performance_now_1.default();
                        this.latestQueryVersion = queryVersion;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.props.getSearchResults(query, this.props.searchSessionId, startTime, queryVersion, filters.map(function (_a) {
                                var filter = _a.filter;
                                return filter;
                            }))];
                    case 2:
                        _a = _b.sent(), results = _a.results, timings_1 = _a.timings;
                        if (this.unmounted) {
                            return [2 /*return*/];
                        }
                        elapsedMs_1 = performance_now_1.default() - startTime;
                        if (this.state.latestSearchQuery === query) {
                            this.setState({
                                searchResults: results,
                                isError: false,
                                isLoading: false,
                                keepPreQueryState: false,
                            }, function () {
                                _this.fireShownPostQueryEvent(startTime, elapsedMs_1, _this.state.searchResults || {}, // Remove 'any' as part of QS-740
                                _this.state.recentItems || {}, // Remove 'any' as part of QS-740
                                timings_1 || {}, _this.props.searchSessionId, _this.state.latestSearchQuery, _this.state.currentFilters.map(function (_a) {
                                    var filter = _a.filter;
                                    return filter;
                                }) || [], _this.state.isLoading);
                            });
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        this.props.logger.safeError(LOGGER_NAME, 'error while getting search results', e_1);
                        this.setState({
                            isError: true,
                            isLoading: false,
                            keepPreQueryState: false,
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.fireExperimentExposureEvent = function () {
            var _a = _this.props, createAnalyticsEvent = _a.createAnalyticsEvent, features = _a.features, searchSessionId = _a.searchSessionId;
            if (createAnalyticsEvent) {
                analytics_event_helper_1.fireExperimentExposureEvent(features.abTest, searchSessionId, createAnalyticsEvent);
            }
        };
        _this.fireShownPreQueryEvent = function (requestStartTime, renderStartTime) {
            var searchSessionId = _this.props.searchSessionId;
            var recentItems = _this.state.recentItems;
            var _a = _this.props, createAnalyticsEvent = _a.createAnalyticsEvent, getPreQueryDisplayedResults = _a.getPreQueryDisplayedResults, enablePreQueryFromAggregator = _a.enablePreQueryFromAggregator, referralContextIdentifiers = _a.referralContextIdentifiers, features = _a.features;
            if (createAnalyticsEvent && getPreQueryDisplayedResults) {
                var elapsedMs = requestStartTime
                    ? performance_now_1.default() - requestStartTime
                    : 0;
                var renderTime = renderStartTime
                    ? performance_now_1.default() - renderStartTime
                    : 0;
                var resultsArray = resultMapToArray(getPreQueryDisplayedResults(recentItems, searchSessionId));
                var eventAttributes = tslib_1.__assign({}, analytics_util_1.buildShownEventDetails.apply(void 0, tslib_1.__spread(resultsArray)));
                analytics_event_helper_1.firePreQueryShownEvent(eventAttributes, elapsedMs, renderTime, searchSessionId, createAnalyticsEvent, features.abTest, referralContextIdentifiers, !!enablePreQueryFromAggregator);
            }
        };
        _this.fireShownPostQueryEvent = function (startTime, elapsedMs, searchResults, recentItems, timings, searchSessionId, latestSearchQuery, latestFilters, isLoading) {
            var e_2, _a;
            var features = _this.props.features;
            var performanceTiming = tslib_1.__assign({ startTime: startTime,
                elapsedMs: elapsedMs }, timings);
            var _b = _this.props, createAnalyticsEvent = _b.createAnalyticsEvent, getPostQueryDisplayedResults = _b.getPostQueryDisplayedResults, referralContextIdentifiers = _b.referralContextIdentifiers;
            var filtersApplied = {};
            try {
                for (var latestFilters_1 = tslib_1.__values(latestFilters), latestFilters_1_1 = latestFilters_1.next(); !latestFilters_1_1.done; latestFilters_1_1 = latestFilters_1.next()) {
                    var filter = latestFilters_1_1.value;
                    filtersApplied[filter['@type']] = true;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (latestFilters_1_1 && !latestFilters_1_1.done && (_a = latestFilters_1.return)) _a.call(latestFilters_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            if (createAnalyticsEvent && getPostQueryDisplayedResults) {
                var resultsArray = resultMapToArray(getPostQueryDisplayedResults(searchResults, latestSearchQuery, recentItems, isLoading, searchSessionId));
                var resultsDetails = analytics_util_1.buildShownEventDetails.apply(void 0, tslib_1.__spread(resultsArray));
                analytics_event_helper_1.firePostQueryShownEvent(resultsDetails, performanceTiming, searchSessionId, latestSearchQuery, filtersApplied, createAnalyticsEvent, features.abTest, referralContextIdentifiers);
            }
        };
        _this.handleSearch = function (newLatestSearchQuery, queryVersion, filters) {
            if (_this.state.latestSearchQuery !== newLatestSearchQuery ||
                filters !== _this.state.currentFilters) {
                _this.setState({
                    latestSearchQuery: newLatestSearchQuery,
                    currentFilters: filters,
                    isLoading: true,
                });
            }
            if (newLatestSearchQuery.length === 0) {
                // reset search results so that internal state between query and results stays consistent
                _this.setState({
                    isError: false,
                    isLoading: false,
                    keepPreQueryState: true,
                    currentFilters: [],
                }, function () {
                    _this.fireShownPreQueryEvent();
                });
            }
            else {
                _this.doSearch(newLatestSearchQuery, queryVersion, filters);
            }
        };
        _this.retrySearch = function () {
            _this.handleSearch(_this.state.latestSearchQuery, _this.latestQueryVersion, _this.state.currentFilters);
        };
        _this.handleAutocomplete = function (query) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var getAutocompleteSuggestions, results, e_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getAutocompleteSuggestions = this.props.getAutocompleteSuggestions;
                        if (!getAutocompleteSuggestions) {
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, getAutocompleteSuggestions(query)];
                    case 2:
                        results = _a.sent();
                        if (this.unmounted) {
                            return [2 /*return*/];
                        }
                        this.setState({
                            autocompleteSuggestions: results,
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        e_3 = _a.sent();
                        this.props.logger.safeError(LOGGER_NAME, 'error while getting autocompletion', e_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.getMoreSearchResults = function (scope) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var product, currentResultsByScope, result, numberOfCurrentItems;
            var _a;
            return tslib_1.__generator(this, function (_b) {
                product = this.props.product;
                if (product === 'confluence') {
                    try {
                        currentResultsByScope = this.state
                            .searchResults;
                        result = currentResultsByScope[scope];
                        if (result) {
                            numberOfCurrentItems = result.numberOfCurrentItems || experiment_utils_1.CONF_OBJECTS_ITEMS_PER_PAGE;
                            this.setState({
                                searchResults: tslib_1.__assign(tslib_1.__assign({}, this.state.searchResults), (_a = {}, _a[scope] = tslib_1.__assign(tslib_1.__assign({}, result), { numberOfCurrentItems: numberOfCurrentItems + experiment_utils_1.CONF_OBJECTS_ITEMS_PER_PAGE }), _a)),
                            });
                        }
                    }
                    catch (e) {
                        this.props.logger.safeError(LOGGER_NAME, "error while getting more results for " + scope, e);
                        this.setState({
                            isLoading: false,
                        });
                    }
                }
                return [2 /*return*/];
            });
        }); };
        _this.handleSearchSubmit = function (event) {
            var handleSearchSubmit = _this.props.handleSearchSubmit;
            if (handleSearchSubmit) {
                handleSearchSubmit(event, _this.props.searchSessionId);
            }
        };
        _this.handleFilter = function (filter) {
            _this.handleSearch(_this.state.latestSearchQuery, _this.latestQueryVersion, filter);
        };
        _this.state = {
            isLoading: true,
            isError: false,
            latestSearchQuery: '',
            recentItems: null,
            searchResults: null,
            keepPreQueryState: true,
            currentFilters: [],
        };
        return _this;
    }
    QuickSearchContainer.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return (!deep_equal_1.default(nextProps, this.props) || !deep_equal_1.default(nextState, this.state));
    };
    QuickSearchContainer.prototype.componentDidCatch = function (error, info) {
        this.props.logger.safeError(LOGGER_NAME, 'component did catch an error', {
            error: error,
            info: info,
            safeState: {
                searchSessionId: this.props.searchSessionId,
                latestSearchQuery: !!this.state.latestSearchQuery,
                isLoading: this.state.isLoading,
                isError: this.state.isError,
                keepPreQueryState: this.state.keepPreQueryState,
                recentItems: !!this.state.recentItems,
                searchResults: !!this.state.searchResults,
            },
        });
        this.setState({
            isError: true,
        });
    };
    QuickSearchContainer.prototype.componentWillUnmount = function () {
        this.unmounted = true;
    };
    QuickSearchContainer.prototype.componentDidMount = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var startTime, _a, eagerRecentItemsPromise, lazyLoadedRecentItemsPromise, results_1, renderStartTime_1, e_4;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        startTime = performance_now_1.default();
                        this.fireExperimentExposureEvent();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this.props.getRecentItems(this.props.searchSessionId), eagerRecentItemsPromise = _a.eagerRecentItemsPromise, lazyLoadedRecentItemsPromise = _a.lazyLoadedRecentItemsPromise;
                        return [4 /*yield*/, eagerRecentItemsPromise];
                    case 2:
                        results_1 = (_b.sent()).results;
                        renderStartTime_1 = performance_now_1.default();
                        if (this.unmounted) {
                            return [2 /*return*/];
                        }
                        this.setState({
                            recentItems: results_1,
                            isLoading: false,
                        });
                        lazyLoadedRecentItemsPromise.then(function (lazyLoadedRecentItems) {
                            _this.setState({
                                recentItems: Object.assign({}, results_1, lazyLoadedRecentItems),
                            }, function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                return tslib_1.__generator(this, function (_a) {
                                    this.fireShownPreQueryEvent(startTime, renderStartTime_1);
                                    return [2 /*return*/];
                                });
                            }); });
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        e_4 = _b.sent();
                        this.props.logger.safeError(LOGGER_NAME, 'error while getting recent items', e_4);
                        if (this.state.isLoading) {
                            this.setState({
                                isLoading: false,
                            });
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    QuickSearchContainer.prototype.render = function () {
        var _a = this.props, linkComponent = _a.linkComponent, getSearchResultsComponent = _a.getSearchResultsComponent, placeholder = _a.placeholder, selectedResultId = _a.selectedResultId, onSelectedResultIdChanged = _a.onSelectedResultIdChanged, inputControls = _a.inputControls, searchSessionId = _a.searchSessionId, advancedSearchId = _a.advancedSearchId;
        var _b = this.state, isLoading = _b.isLoading, latestSearchQuery = _b.latestSearchQuery, isError = _b.isError, searchResults = _b.searchResults, recentItems = _b.recentItems, keepPreQueryState = _b.keepPreQueryState, autocompleteSuggestions = _b.autocompleteSuggestions, currentFilters = _b.currentFilters;
        return (React.createElement(GlobalQuickSearch_1.default, { onSearch: this.handleSearch, onSearchSubmit: this.handleSearchSubmit, onAutocomplete: this.handleAutocomplete, isLoading: isLoading, placeholder: placeholder, linkComponent: linkComponent, searchSessionId: searchSessionId, selectedResultId: selectedResultId, onSelectedResultIdChanged: onSelectedResultIdChanged, inputControls: inputControls, autocompleteSuggestions: autocompleteSuggestions, filters: this.state.currentFilters, advancedSearchId: advancedSearchId }, getSearchResultsComponent({
            retrySearch: this.retrySearch,
            latestSearchQuery: latestSearchQuery,
            isError: isError,
            searchResults: searchResults,
            isLoading: isLoading,
            recentItems: recentItems,
            keepPreQueryState: keepPreQueryState,
            searchSessionId: searchSessionId,
            searchMore: this.getMoreSearchResults,
            currentFilters: currentFilters,
            onFilterChanged: this.handleFilter,
        })));
    };
    return QuickSearchContainer;
}(React.Component));
exports.QuickSearchContainer = QuickSearchContainer;
exports.BaseConfluenceQuickSearchContainer = SearchSessionProvider_1.injectSearchSession(analytics_next_1.withAnalyticsEvents()(QuickSearchContainer));
exports.BaseJiraQuickSearchContainerJira = SearchSessionProvider_1.injectSearchSession(analytics_next_1.withAnalyticsEvents()(QuickSearchContainer));
//# sourceMappingURL=QuickSearchContainer.js.map