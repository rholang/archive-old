import { ShownAnalyticsAttributes, PerformanceTiming } from './analytics-util';
import { GasPayload } from '@atlaskit/analytics-gas-types';
import { CreateAnalyticsEventFn } from '../components/analytics/types';
import { ABTest } from '../api/CrossProductSearchClient';
import { ReferralContextIdentifiers } from '../components/GlobalQuickSearchWrapper';
export declare function firePreQueryShownEvent(eventAttributes: ShownAnalyticsAttributes, elapsedMs: number, renderTimeMs: number, searchSessionId: string, createAnalyticsEvent: CreateAnalyticsEventFn, abTest: ABTest, referralContextIdentifiers?: ReferralContextIdentifiers, retrievedFromAggregator?: boolean): void;
export declare function fireExperimentExposureEvent(abTest: ABTest, searchSessionId: string, createAnalyticsEvent: CreateAnalyticsEventFn): void;
export declare function fireTextEnteredEvent(query: string, searchSessionId: string, queryVersion: number, createAnalyticsEvent?: CreateAnalyticsEventFn): void;
export declare function fireDismissedEvent(searchSessionId: string, createAnalyticsEvent?: CreateAnalyticsEventFn): void;
export declare function firePostQueryShownEvent(resultsDetails: ShownAnalyticsAttributes, timings: PerformanceTiming, searchSessionId: string, query: string, filtersApplied: {
    [filterType: string]: boolean;
}, createAnalyticsEvent: CreateAnalyticsEventFn, abTest: ABTest, referralContextIdentifiers?: ReferralContextIdentifiers): void;
export interface SearchResultEvent {
    resultId: string;
    type: string;
    contentType: string;
    sectionIndex: string;
    index: string;
    indexWithinSection: string;
    containerId?: string;
    resultCount?: string;
    experimentId?: string;
    isRecentResult?: boolean;
}
export interface KeyboardControlEvent extends SearchResultEvent {
    key: string;
}
export interface SelectedSearchResultEvent extends SearchResultEvent {
    method: string;
    newTab: boolean;
    query: string;
    queryVersion: number;
    queryId: null | string;
}
export interface AdvancedSearchSelectedEvent extends SelectedSearchResultEvent {
    wasOnNoResultsScreen: boolean;
    trigger?: string;
    isLoading: boolean;
}
export declare type AnalyticsNextEvent = {
    payload: GasPayload;
    context: Array<any>;
    update: (payload: GasPayload) => AnalyticsNextEvent;
    fire: (string: string) => AnalyticsNextEvent;
};
export declare function fireSelectedSearchResult(eventData: SelectedSearchResultEvent, searchSessionId: string, referralContextIdentifiers?: ReferralContextIdentifiers, createAnalyticsEvent?: CreateAnalyticsEventFn): void;
export declare function fireSelectedAdvancedSearch(eventData: AdvancedSearchSelectedEvent, searchSessionId: string, referralContextIdentifiers?: ReferralContextIdentifiers, createAnalyticsEvent?: CreateAnalyticsEventFn): void;
export declare function fireHighlightedSearchResult(eventData: KeyboardControlEvent, searchSessionId: string, referralContextIdentifiers?: ReferralContextIdentifiers, createAnalyticsEvent?: CreateAnalyticsEventFn): void;
export declare function fireShowMoreButtonClickEvent(searchSessionId: string, currentSize: number, totalResultSize: number, buttonIdentifier: string, pageSize: number, createAnalyticsEvent?: CreateAnalyticsEventFn): void;
export declare function fireMoreFiltersButtonClickEvent(searchSessionId: string, createAnalyticsEvent?: CreateAnalyticsEventFn): void;
export declare function fireSpaceFilterShownEvent(searchSessionId: string, createAnalyticsEvent?: CreateAnalyticsEventFn): void;
export declare function fireAutocompleteRenderedEvent(duration: number, searchSessionId: string, query: string, autocompleteText: string, queryVersion: number, fromCache: boolean, createAnalyticsEvent?: CreateAnalyticsEventFn): void;
export declare function fireAutocompleteCompletedEvent(searchSessionId: string, query: string, completedText: string, createAnalyticsEvent?: CreateAnalyticsEventFn): void;
