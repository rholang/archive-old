import { __assign, __extends } from "tslib";
import * as React from 'react';
import debounce from 'lodash.debounce';
import { QuickSearch } from '@atlaskit/quick-search';
import { withAnalyticsEvents, AnalyticsContext, } from '@atlaskit/analytics-next';
import { fireSelectedSearchResult, fireHighlightedSearchResult, fireSelectedAdvancedSearch, fireTextEnteredEvent, fireDismissedEvent, fireAutocompleteRenderedEvent, fireAutocompleteCompletedEvent, } from '../util/analytics-event-helper';
import { isAdvancedSearchResult } from './SearchResultsUtil';
import { getAutocompleteText } from '../util/autocomplete';
var ATLASKIT_QUICKSEARCH_NS = 'atlaskit.navigation.quick-search';
var QS_ANALYTICS_EV_KB_CTRLS_USED = ATLASKIT_QUICKSEARCH_NS + ".keyboard-controls-used";
var QS_ANALYTICS_EV_SUBMIT = ATLASKIT_QUICKSEARCH_NS + ".submit";
/**
 * Presentational component that renders the search input and search results.
 */
var GlobalQuickSearch = /** @class */ (function (_super) {
    __extends(GlobalQuickSearch, _super);
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
                fireAutocompleteCompletedEvent(searchSessionId, prevQuery, query, createAnalyticsEvent);
            }
            _this.setState({
                query: query,
            });
        };
        _this.debouncedSearch = debounce(_this.doSearch, 350);
        _this.debouncedAutocomplete = debounce(_this.doAutocomplete, 100);
        _this.fireSearchResultSelectedEvent = function (eventData) {
            var _a = _this.props, createAnalyticsEvent = _a.createAnalyticsEvent, searchSessionId = _a.searchSessionId, referralContextIdentifiers = _a.referralContextIdentifiers, advancedSearchId = _a.advancedSearchId;
            _this.resultSelected = true;
            var resultId = eventData.resultCount && eventData.method === 'shortcut'
                ? advancedSearchId
                : eventData.resultId;
            if (isAdvancedSearchResult(resultId)) {
                fireSelectedAdvancedSearch(__assign(__assign({}, eventData), { resultId: resultId, query: _this.state.query, queryVersion: _this.queryVersion, isLoading: _this.props.isLoading }), searchSessionId, referralContextIdentifiers, createAnalyticsEvent);
            }
            else {
                fireSelectedSearchResult(__assign(__assign({}, eventData), { query: _this.state.query, queryVersion: _this.queryVersion }), searchSessionId, referralContextIdentifiers, createAnalyticsEvent);
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
                    fireHighlightedSearchResult(data, searchSessionId, referralContextIdentifiers, createAnalyticsEvent);
                }
            }
        };
        return _this;
    }
    GlobalQuickSearch.getDerivedStateFromProps = function (nextProps, prevState) {
        var autocompleteSuggestions = nextProps.autocompleteSuggestions;
        var query = prevState.query;
        return __assign(__assign({}, prevState), { autocompleteText: getAutocompleteText(query, autocompleteSuggestions) });
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
            fireAutocompleteRenderedEvent(duration, searchSessionId, query, autocompleteText, this.autoCompleteVersion, autocompleteSuggestions === prevProps.autocompleteSuggestions, createAnalyticsEvent);
            this.autoCompleteLastTimeStamp = +new Date();
            this.autoCompleteVersion++;
        }
    };
    GlobalQuickSearch.prototype.doSearch = function (query) {
        var _a = this.props, onSearch = _a.onSearch, searchSessionId = _a.searchSessionId, createAnalyticsEvent = _a.createAnalyticsEvent, filters = _a.filters;
        onSearch(query.trim(), this.queryVersion, filters);
        fireTextEnteredEvent(query, searchSessionId, this.queryVersion, createAnalyticsEvent);
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
        fireDismissedEvent(searchSessionId, createAnalyticsEvent);
    };
    GlobalQuickSearch.prototype.render = function () {
        var _a = this.props, isLoading = _a.isLoading, placeholder = _a.placeholder, linkComponent = _a.linkComponent, children = _a.children, onSearchSubmit = _a.onSearchSubmit, selectedResultId = _a.selectedResultId, onSelectedResultIdChanged = _a.onSelectedResultIdChanged, inputControls = _a.inputControls;
        var _b = this.state, query = _b.query, autocompleteText = _b.autocompleteText;
        return (React.createElement(AnalyticsContext, { data: { searchSessionId: this.props.searchSessionId } },
            React.createElement(QuickSearch, { firePrivateAnalyticsEvent: this.fireSearchResultEvents, isLoading: isLoading, onSearchInput: this.handleSearchInput, placeholder: placeholder, value: query, linkComponent: linkComponent, onSearchSubmit: onSearchSubmit, selectedResultId: selectedResultId, onSelectedResultIdChanged: onSelectedResultIdChanged, inputControls: inputControls, autocompleteText: autocompleteText }, children)));
    };
    return GlobalQuickSearch;
}(React.Component));
export { GlobalQuickSearch };
export default withAnalyticsEvents()(GlobalQuickSearch);
//# sourceMappingURL=GlobalQuickSearch.js.map