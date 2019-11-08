"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var lodash_debounce_1 = tslib_1.__importDefault(require("lodash.debounce"));
var quick_search_1 = require("@atlaskit/quick-search");
var analytics_next_1 = require("@atlaskit/analytics-next");
var analytics_event_helper_1 = require("../util/analytics-event-helper");
var SearchResultsUtil_1 = require("./SearchResultsUtil");
var autocomplete_1 = require("../util/autocomplete");
var ATLASKIT_QUICKSEARCH_NS = 'atlaskit.navigation.quick-search';
var QS_ANALYTICS_EV_KB_CTRLS_USED = ATLASKIT_QUICKSEARCH_NS + ".keyboard-controls-used";
var QS_ANALYTICS_EV_SUBMIT = ATLASKIT_QUICKSEARCH_NS + ".submit";
/**
 * Presentational component that renders the search input and search results.
 */
var GlobalQuickSearch = /** @class */ (function (_super) {
    tslib_1.__extends(GlobalQuickSearch, _super);
    function GlobalQuickSearch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.queryVersion = 0;
        _this.autoCompleteVersion = 0;
        _this.autoCompleteLastTimeStamp = 0;
        _this.resultSelected = false;
        _this.state = {
            query: '',
            autocompleteText: undefined,
        };
        _this.handleSearchInput = function (_a, isAutocompleted) {
            var target = _a.target;
            var query = target.value;
            _this.debouncedSearch(query);
            if (query.length > 0) {
                _this.autoCompleteLastTimeStamp = +new Date();
                _this.debouncedAutocomplete(query);
            }
            if (isAutocompleted) {
                var _b = _this.props, searchSessionId = _b.searchSessionId, createAnalyticsEvent = _b.createAnalyticsEvent;
                var prevQuery = _this.state.query;
                analytics_event_helper_1.fireAutocompleteCompletedEvent(searchSessionId, prevQuery, query, createAnalyticsEvent);
            }
            _this.setState({
                query: query,
            });
        };
        _this.debouncedSearch = lodash_debounce_1.default(_this.doSearch, 350);
        _this.debouncedAutocomplete = lodash_debounce_1.default(_this.doAutocomplete, 100);
        _this.fireSearchResultSelectedEvent = function (eventData) {
            var _a = _this.props, createAnalyticsEvent = _a.createAnalyticsEvent, searchSessionId = _a.searchSessionId, referralContextIdentifiers = _a.referralContextIdentifiers, advancedSearchId = _a.advancedSearchId;
            _this.resultSelected = true;
            var resultId = eventData.resultCount && eventData.method === 'shortcut'
                ? advancedSearchId
                : eventData.resultId;
            if (SearchResultsUtil_1.isAdvancedSearchResult(resultId)) {
                analytics_event_helper_1.fireSelectedAdvancedSearch(tslib_1.__assign(tslib_1.__assign({}, eventData), { resultId: resultId, query: _this.state.query, queryVersion: _this.queryVersion, isLoading: _this.props.isLoading }), searchSessionId, referralContextIdentifiers, createAnalyticsEvent);
            }
            else {
                analytics_event_helper_1.fireSelectedSearchResult(tslib_1.__assign(tslib_1.__assign({}, eventData), { query: _this.state.query, queryVersion: _this.queryVersion }), searchSessionId, referralContextIdentifiers, createAnalyticsEvent);
            }
        };
        _this.fireSearchResultEvents = function (eventName, eventData) {
            var _a = _this.props, createAnalyticsEvent = _a.createAnalyticsEvent, searchSessionId = _a.searchSessionId, referralContextIdentifiers = _a.referralContextIdentifiers;
            if (eventName === QS_ANALYTICS_EV_SUBMIT) {
                _this.fireSearchResultSelectedEvent(eventData);
            }
            else if (eventName === QS_ANALYTICS_EV_KB_CTRLS_USED) {
                var data = eventData;
                if (data.key === 'ArrowDown' || data.key === 'ArrowUp') {
                    analytics_event_helper_1.fireHighlightedSearchResult(data, searchSessionId, referralContextIdentifiers, createAnalyticsEvent);
                }
            }
        };
        return _this;
    }
    GlobalQuickSearch.getDerivedStateFromProps = function (nextProps, prevState) {
        var autocompleteSuggestions = nextProps.autocompleteSuggestions;
        var query = prevState.query;
        return tslib_1.__assign(tslib_1.__assign({}, prevState), { autocompleteText: autocomplete_1.getAutocompleteText(query, autocompleteSuggestions) });
    };
    GlobalQuickSearch.prototype.componentDidMount = function () {
        this.props.onMount && this.props.onMount();
    };
    GlobalQuickSearch.prototype.componentDidUpdate = function (prevProps, prevState) {
        var _a = this.props, createAnalyticsEvent = _a.createAnalyticsEvent, searchSessionId = _a.searchSessionId, autocompleteSuggestions = _a.autocompleteSuggestions;
        var _b = this.state, query = _b.query, autocompleteText = _b.autocompleteText;
        if (query.length > 0 &&
            autocompleteText &&
            autocompleteText.length > query.length &&
            (query !== prevState.query ||
                autocompleteText !== prevState.autocompleteText)) {
            var duration = +new Date() - this.autoCompleteLastTimeStamp;
            analytics_event_helper_1.fireAutocompleteRenderedEvent(duration, searchSessionId, query, autocompleteText, this.autoCompleteVersion, autocompleteSuggestions === prevProps.autocompleteSuggestions, createAnalyticsEvent);
            this.autoCompleteLastTimeStamp = +new Date();
            this.autoCompleteVersion++;
        }
    };
    GlobalQuickSearch.prototype.doSearch = function (query) {
        var _a = this.props, onSearch = _a.onSearch, searchSessionId = _a.searchSessionId, createAnalyticsEvent = _a.createAnalyticsEvent, filters = _a.filters;
        onSearch(query.trim(), this.queryVersion, filters);
        analytics_event_helper_1.fireTextEnteredEvent(query, searchSessionId, this.queryVersion, createAnalyticsEvent);
        this.queryVersion++;
    };
    GlobalQuickSearch.prototype.doAutocomplete = function (query) {
        var onAutocomplete = this.props.onAutocomplete;
        onAutocomplete && onAutocomplete(query);
    };
    GlobalQuickSearch.prototype.componentWillUnmount = function () {
        if (this.resultSelected) {
            return;
        }
        var _a = this.props, createAnalyticsEvent = _a.createAnalyticsEvent, searchSessionId = _a.searchSessionId;
        analytics_event_helper_1.fireDismissedEvent(searchSessionId, createAnalyticsEvent);
    };
    GlobalQuickSearch.prototype.render = function () {
        var _a = this.props, isLoading = _a.isLoading, placeholder = _a.placeholder, linkComponent = _a.linkComponent, children = _a.children, onSearchSubmit = _a.onSearchSubmit, selectedResultId = _a.selectedResultId, onSelectedResultIdChanged = _a.onSelectedResultIdChanged, inputControls = _a.inputControls;
        var _b = this.state, query = _b.query, autocompleteText = _b.autocompleteText;
        return (React.createElement(analytics_next_1.AnalyticsContext, { data: { searchSessionId: this.props.searchSessionId } },
            React.createElement(quick_search_1.QuickSearch, { firePrivateAnalyticsEvent: this.fireSearchResultEvents, isLoading: isLoading, onSearchInput: this.handleSearchInput, placeholder: placeholder, value: query, linkComponent: linkComponent, onSearchSubmit: onSearchSubmit, selectedResultId: selectedResultId, onSelectedResultIdChanged: onSelectedResultIdChanged, inputControls: inputControls, autocompleteText: autocompleteText }, children)));
    };
    return GlobalQuickSearch;
}(React.Component));
exports.GlobalQuickSearch = GlobalQuickSearch;
exports.default = analytics_next_1.withAnalyticsEvents()(GlobalQuickSearch);
//# sourceMappingURL=GlobalQuickSearch.js.map