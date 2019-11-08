import { __assign, __rest } from "tslib";
import * as Rusha from 'rusha';
import { sanitizeSearchQuery, sanitizeContainerId, DEFAULT_GAS_CHANNEL, DEFAULT_GAS_ATTRIBUTES, DEFAULT_GAS_SOURCE, } from './analytics-util';
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
            source: DEFAULT_GAS_SOURCE,
            attributes: __assign(__assign({}, extraAtrributes), DEFAULT_GAS_ATTRIBUTES),
        };
        if (nonPrivacySafeAttributes) {
            payload.nonPrivacySafeAttributes = nonPrivacySafeAttributes;
        }
        event_1.update(payload).fire(DEFAULT_GAS_CHANNEL);
    }
};
export function firePreQueryShownEvent(eventAttributes, elapsedMs, renderTimeMs, searchSessionId, createAnalyticsEvent, abTest, referralContextIdentifiers, retrievedFromAggregator) {
    fireGasEvent(createAnalyticsEvent, 'shown', 'searchResults', 'preQuerySearchResults', 'ui', __assign(__assign(__assign({ preQueryRequestDurationMs: elapsedMs, renderTimeMs: renderTimeMs, searchSessionId: searchSessionId, referralContextIdentifiers: stripUGC(referralContextIdentifiers) }, eventAttributes), { retrievedFromAggregator: retrievedFromAggregator }), abTest));
}
export function fireExperimentExposureEvent(abTest, searchSessionId, createAnalyticsEvent) {
    fireGasEvent(createAnalyticsEvent, 'exposed', 'quickSearchExperiment', '', 'operational', __assign({ searchSessionId: searchSessionId,
        abTest: abTest }, abTest));
}
var getQueryAttributes = function (query) {
    var sanitizedQuery = sanitizeSearchQuery(query);
    return {
        queryLength: sanitizedQuery.length,
        wordCount: sanitizedQuery.length > 0 ? sanitizedQuery.split(/\s/).length : 0,
        queryHash: sanitizedQuery ? hash(sanitizedQuery) : '',
        isNonZeroNumericQuery: !!+sanitizedQuery,
    };
};
var getNonPrivacySafeAttributes = function (query) {
    return {
        query: sanitizeSearchQuery(query),
    };
};
export function fireTextEnteredEvent(query, searchSessionId, queryVersion, createAnalyticsEvent) {
    fireGasEvent(createAnalyticsEvent, 'entered', 'text', 'globalSearchInputBar', 'track', __assign(__assign({ queryId: null, queryVersion: queryVersion }, getQueryAttributes(query)), { searchSessionId: searchSessionId }), getNonPrivacySafeAttributes(query));
}
export function fireDismissedEvent(searchSessionId, createAnalyticsEvent) {
    fireGasEvent(createAnalyticsEvent, 'dismissed', 'globalSearchDrawer', '', 'ui', { searchSessionId: searchSessionId });
}
export function firePostQueryShownEvent(resultsDetails, timings, searchSessionId, query, filtersApplied, createAnalyticsEvent, abTest, referralContextIdentifiers) {
    var event = createAnalyticsEvent({});
    var elapsedMs = timings.elapsedMs, otherPerformanceTimings = __rest(timings, ["elapsedMs"]);
    var payload = {
        action: 'shown',
        actionSubject: 'searchResults',
        actionSubjectId: 'postQuerySearchResults',
        eventType: 'ui',
        source: DEFAULT_GAS_SOURCE,
        attributes: __assign(__assign(__assign(__assign(__assign(__assign({}, getQueryAttributes(query)), { filtersApplied: filtersApplied, postQueryRequestDurationMs: elapsedMs, searchSessionId: searchSessionId, referralContextIdentifiers: stripUGC(referralContextIdentifiers) }), otherPerformanceTimings), resultsDetails), DEFAULT_GAS_ATTRIBUTES), abTest),
    };
    event.update(payload).fire(DEFAULT_GAS_CHANNEL);
}
var transformSearchResultEventData = function (eventData) { return ({
    resultContentId: eventData.resultId,
    type: eventData.contentType,
    sectionId: eventData.type,
    sectionIndex: eventData.sectionIndex,
    globalIndex: eventData.index,
    indexWithinSection: eventData.indexWithinSection,
    containerId: sanitizeContainerId(eventData.containerId),
    resultCount: eventData.resultCount,
    experimentId: eventData.experimentId,
    isRecentResult: eventData.isRecentResult,
}); };
var hash = function (str) {
    return Rusha.createHash()
        .update(str)
        .digest('hex');
};
export function fireSelectedSearchResult(eventData, searchSessionId, referralContextIdentifiers, createAnalyticsEvent) {
    var method = eventData.method, newTab = eventData.newTab, query = eventData.query, queryVersion = eventData.queryVersion;
    fireGasEvent(createAnalyticsEvent, 'selected', 'navigationItem', 'searchResult', 'track', __assign(__assign(__assign(__assign({ queryVersion: queryVersion, queryId: null }, getQueryAttributes(query)), { trigger: method, searchSessionId: searchSessionId, newTab: newTab }), transformSearchResultEventData(eventData)), { referralContextIdentifiers: stripUGC(referralContextIdentifiers) }));
}
export function fireSelectedAdvancedSearch(eventData, searchSessionId, referralContextIdentifiers, createAnalyticsEvent) {
    var method = eventData.method, newTab = eventData.newTab, query = eventData.query, queryVersion = eventData.queryVersion;
    fireGasEvent(createAnalyticsEvent, 'selected', 'navigationItem', "advanced_" + eventData.resultId, 'track', __assign(__assign(__assign(__assign({ trigger: method, searchSessionId: searchSessionId, newTab: newTab,
        queryVersion: queryVersion, queryId: null, isLoading: eventData.isLoading }, getQueryAttributes(query)), { wasOnNoResultsScreen: eventData.wasOnNoResultsScreen || false }), transformSearchResultEventData(eventData)), { referralContextIdentifiers: stripUGC(referralContextIdentifiers) }));
}
export function fireHighlightedSearchResult(eventData, searchSessionId, referralContextIdentifiers, createAnalyticsEvent) {
    var key = eventData.key;
    fireGasEvent(createAnalyticsEvent, 'highlighted', 'navigationItem', 'searchResult', 'ui', __assign(__assign({ searchSessionId: searchSessionId }, transformSearchResultEventData(eventData)), { key: key, referralContextIdentifiers: stripUGC(referralContextIdentifiers) }));
}
export function fireShowMoreButtonClickEvent(searchSessionId, currentSize, totalResultSize, buttonIdentifier, pageSize, createAnalyticsEvent) {
    fireGasEvent(createAnalyticsEvent, 'clicked', 'button', buttonIdentifier, 'ui', {
        searchSessionId: searchSessionId,
        currentSize: currentSize,
        totalResultSize: totalResultSize,
        pageSize: pageSize,
    });
}
export function fireMoreFiltersButtonClickEvent(searchSessionId, createAnalyticsEvent) {
    fireGasEvent(createAnalyticsEvent, 'clicked', 'button', 'showMoreFilters', 'ui', {
        searchSessionId: searchSessionId,
    });
}
export function fireSpaceFilterShownEvent(searchSessionId, createAnalyticsEvent) {
    fireGasEvent(createAnalyticsEvent, 'shown', 'filter', 'spaceFilterButton', 'ui', {
        searchSessionId: searchSessionId,
    });
}
export function fireAutocompleteRenderedEvent(duration, searchSessionId, query, autocompleteText, queryVersion, fromCache, createAnalyticsEvent) {
    fireGasEvent(createAnalyticsEvent, 'rendered', 'autocomplete', '', 'operational', __assign(__assign({ duration: duration,
        searchSessionId: searchSessionId }, getQueryAttributes(query)), { autocompleteTextHash: hash(autocompleteText), queryVersion: queryVersion,
        fromCache: fromCache }), __assign(__assign({}, getNonPrivacySafeAttributes(query)), { autocompleteText: autocompleteText }));
}
export function fireAutocompleteCompletedEvent(searchSessionId, query, completedText, createAnalyticsEvent) {
    fireGasEvent(createAnalyticsEvent, 'completed', 'autocomplete', '', 'ui', __assign(__assign({ searchSessionId: searchSessionId }, getQueryAttributes(query)), { completedTextHash: hash(completedText) }), __assign(__assign({}, getNonPrivacySafeAttributes(query)), { completedText: completedText }));
}
//# sourceMappingURL=analytics-event-helper.js.map