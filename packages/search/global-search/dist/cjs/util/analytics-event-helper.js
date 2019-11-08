"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Rusha = tslib_1.__importStar(require("rusha"));
var analytics_util_1 = require("./analytics-util");
function stripUGC(referralContextIdentifiers) {
    if (referralContextIdentifiers) {
        var searchReferrerId = referralContextIdentifiers.searchReferrerId, currentContentId = referralContextIdentifiers.currentContentId, currentContainerId = referralContextIdentifiers.currentContainerId;
        return { searchReferrerId: searchReferrerId, currentContentId: currentContentId, currentContainerId: currentContainerId };
    }
}
var fireGasEvent = function (createAnalyticsEvent, action, actionSubject, actionSubjectId, eventType, extraAtrributes, nonPrivacySafeAttributes) {
    if (createAnalyticsEvent) {
        var event_1 = createAnalyticsEvent({});
        var payload = {
            action: action,
            actionSubject: actionSubject,
            actionSubjectId: actionSubjectId,
            eventType: eventType,
            source: analytics_util_1.DEFAULT_GAS_SOURCE,
            attributes: tslib_1.__assign(tslib_1.__assign({}, extraAtrributes), analytics_util_1.DEFAULT_GAS_ATTRIBUTES),
        };
        if (nonPrivacySafeAttributes) {
            payload.nonPrivacySafeAttributes = nonPrivacySafeAttributes;
        }
        event_1.update(payload).fire(analytics_util_1.DEFAULT_GAS_CHANNEL);
    }
};
function firePreQueryShownEvent(eventAttributes, elapsedMs, renderTimeMs, searchSessionId, createAnalyticsEvent, abTest, referralContextIdentifiers, retrievedFromAggregator) {
    fireGasEvent(createAnalyticsEvent, 'shown', 'searchResults', 'preQuerySearchResults', 'ui', tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ preQueryRequestDurationMs: elapsedMs, renderTimeMs: renderTimeMs, searchSessionId: searchSessionId, referralContextIdentifiers: stripUGC(referralContextIdentifiers) }, eventAttributes), { retrievedFromAggregator: retrievedFromAggregator }), abTest));
}
exports.firePreQueryShownEvent = firePreQueryShownEvent;
function fireExperimentExposureEvent(abTest, searchSessionId, createAnalyticsEvent) {
    fireGasEvent(createAnalyticsEvent, 'exposed', 'quickSearchExperiment', '', 'operational', tslib_1.__assign({ searchSessionId: searchSessionId,
        abTest: abTest }, abTest));
}
exports.fireExperimentExposureEvent = fireExperimentExposureEvent;
var getQueryAttributes = function (query) {
    var sanitizedQuery = analytics_util_1.sanitizeSearchQuery(query);
    return {
        queryLength: sanitizedQuery.length,
        wordCount: sanitizedQuery.length > 0 ? sanitizedQuery.split(/\s/).length : 0,
        queryHash: sanitizedQuery ? hash(sanitizedQuery) : '',
        isNonZeroNumericQuery: !!+sanitizedQuery,
    };
};
var getNonPrivacySafeAttributes = function (query) {
    return {
        query: analytics_util_1.sanitizeSearchQuery(query),
    };
};
function fireTextEnteredEvent(query, searchSessionId, queryVersion, createAnalyticsEvent) {
    fireGasEvent(createAnalyticsEvent, 'entered', 'text', 'globalSearchInputBar', 'track', tslib_1.__assign(tslib_1.__assign({ queryId: null, queryVersion: queryVersion }, getQueryAttributes(query)), { searchSessionId: searchSessionId }), getNonPrivacySafeAttributes(query));
}
exports.fireTextEnteredEvent = fireTextEnteredEvent;
function fireDismissedEvent(searchSessionId, createAnalyticsEvent) {
    fireGasEvent(createAnalyticsEvent, 'dismissed', 'globalSearchDrawer', '', 'ui', { searchSessionId: searchSessionId });
}
exports.fireDismissedEvent = fireDismissedEvent;
function firePostQueryShownEvent(resultsDetails, timings, searchSessionId, query, filtersApplied, createAnalyticsEvent, abTest, referralContextIdentifiers) {
    var event = createAnalyticsEvent({});
    var elapsedMs = timings.elapsedMs, otherPerformanceTimings = tslib_1.__rest(timings, ["elapsedMs"]);
    var payload = {
        action: 'shown',
        actionSubject: 'searchResults',
        actionSubjectId: 'postQuerySearchResults',
        eventType: 'ui',
        source: analytics_util_1.DEFAULT_GAS_SOURCE,
        attributes: tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, getQueryAttributes(query)), { filtersApplied: filtersApplied, postQueryRequestDurationMs: elapsedMs, searchSessionId: searchSessionId, referralContextIdentifiers: stripUGC(referralContextIdentifiers) }), otherPerformanceTimings), resultsDetails), analytics_util_1.DEFAULT_GAS_ATTRIBUTES), abTest),
    };
    event.update(payload).fire(analytics_util_1.DEFAULT_GAS_CHANNEL);
}
exports.firePostQueryShownEvent = firePostQueryShownEvent;
var transformSearchResultEventData = function (eventData) { return ({
    resultContentId: eventData.resultId,
    type: eventData.contentType,
    sectionId: eventData.type,
    sectionIndex: eventData.sectionIndex,
    globalIndex: eventData.index,
    indexWithinSection: eventData.indexWithinSection,
    containerId: analytics_util_1.sanitizeContainerId(eventData.containerId),
    resultCount: eventData.resultCount,
    experimentId: eventData.experimentId,
    isRecentResult: eventData.isRecentResult,
}); };
var hash = function (str) {
    return Rusha.createHash()
        .update(str)
        .digest('hex');
};
function fireSelectedSearchResult(eventData, searchSessionId, referralContextIdentifiers, createAnalyticsEvent) {
    var method = eventData.method, newTab = eventData.newTab, query = eventData.query, queryVersion = eventData.queryVersion;
    fireGasEvent(createAnalyticsEvent, 'selected', 'navigationItem', 'searchResult', 'track', tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ queryVersion: queryVersion, queryId: null }, getQueryAttributes(query)), { trigger: method, searchSessionId: searchSessionId, newTab: newTab }), transformSearchResultEventData(eventData)), { referralContextIdentifiers: stripUGC(referralContextIdentifiers) }));
}
exports.fireSelectedSearchResult = fireSelectedSearchResult;
function fireSelectedAdvancedSearch(eventData, searchSessionId, referralContextIdentifiers, createAnalyticsEvent) {
    var method = eventData.method, newTab = eventData.newTab, query = eventData.query, queryVersion = eventData.queryVersion;
    fireGasEvent(createAnalyticsEvent, 'selected', 'navigationItem', "advanced_" + eventData.resultId, 'track', tslib_1.__assign(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ trigger: method, searchSessionId: searchSessionId, newTab: newTab,
        queryVersion: queryVersion, queryId: null, isLoading: eventData.isLoading }, getQueryAttributes(query)), { wasOnNoResultsScreen: eventData.wasOnNoResultsScreen || false }), transformSearchResultEventData(eventData)), { referralContextIdentifiers: stripUGC(referralContextIdentifiers) }));
}
exports.fireSelectedAdvancedSearch = fireSelectedAdvancedSearch;
function fireHighlightedSearchResult(eventData, searchSessionId, referralContextIdentifiers, createAnalyticsEvent) {
    var key = eventData.key;
    fireGasEvent(createAnalyticsEvent, 'highlighted', 'navigationItem', 'searchResult', 'ui', tslib_1.__assign(tslib_1.__assign({ searchSessionId: searchSessionId }, transformSearchResultEventData(eventData)), { key: key, referralContextIdentifiers: stripUGC(referralContextIdentifiers) }));
}
exports.fireHighlightedSearchResult = fireHighlightedSearchResult;
function fireShowMoreButtonClickEvent(searchSessionId, currentSize, totalResultSize, buttonIdentifier, pageSize, createAnalyticsEvent) {
    fireGasEvent(createAnalyticsEvent, 'clicked', 'button', buttonIdentifier, 'ui', {
        searchSessionId: searchSessionId,
        currentSize: currentSize,
        totalResultSize: totalResultSize,
        pageSize: pageSize,
    });
}
exports.fireShowMoreButtonClickEvent = fireShowMoreButtonClickEvent;
function fireMoreFiltersButtonClickEvent(searchSessionId, createAnalyticsEvent) {
    fireGasEvent(createAnalyticsEvent, 'clicked', 'button', 'showMoreFilters', 'ui', {
        searchSessionId: searchSessionId,
    });
}
exports.fireMoreFiltersButtonClickEvent = fireMoreFiltersButtonClickEvent;
function fireSpaceFilterShownEvent(searchSessionId, createAnalyticsEvent) {
    fireGasEvent(createAnalyticsEvent, 'shown', 'filter', 'spaceFilterButton', 'ui', {
        searchSessionId: searchSessionId,
    });
}
exports.fireSpaceFilterShownEvent = fireSpaceFilterShownEvent;
function fireAutocompleteRenderedEvent(duration, searchSessionId, query, autocompleteText, queryVersion, fromCache, createAnalyticsEvent) {
    fireGasEvent(createAnalyticsEvent, 'rendered', 'autocomplete', '', 'operational', tslib_1.__assign(tslib_1.__assign({ duration: duration,
        searchSessionId: searchSessionId }, getQueryAttributes(query)), { autocompleteTextHash: hash(autocompleteText), queryVersion: queryVersion,
        fromCache: fromCache }), tslib_1.__assign(tslib_1.__assign({}, getNonPrivacySafeAttributes(query)), { autocompleteText: autocompleteText }));
}
exports.fireAutocompleteRenderedEvent = fireAutocompleteRenderedEvent;
function fireAutocompleteCompletedEvent(searchSessionId, query, completedText, createAnalyticsEvent) {
    fireGasEvent(createAnalyticsEvent, 'completed', 'autocomplete', '', 'ui', tslib_1.__assign(tslib_1.__assign({ searchSessionId: searchSessionId }, getQueryAttributes(query)), { completedTextHash: hash(completedText) }), tslib_1.__assign(tslib_1.__assign({}, getNonPrivacySafeAttributes(query)), { completedText: completedText }));
}
exports.fireAutocompleteCompletedEvent = fireAutocompleteCompletedEvent;
//# sourceMappingURL=analytics-event-helper.js.map