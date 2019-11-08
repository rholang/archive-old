import * as React from 'react';
import { InjectedIntlProps } from 'react-intl';
import { CancelableEvent } from '@atlaskit/quick-search';
import { ConfluenceClient } from '../../api/ConfluenceClient';
import { CrossProductSearchClient, CrossProductSearchResults, Filter, SpaceFilter, FilterWithMetadata, QueryBasedSpaceFilterMetadata } from '../../api/CrossProductSearchClient';
import { ConfluenceModelContext } from '../../api/types';
import { ResultsWithTiming, ConfluenceResultsMap, PersonResult } from '../../model/Result';
import { PeopleSearchClient } from '../../api/PeopleSearchClient';
import { SearchScreenCounter } from '../../util/ScreenCounter';
import { LinkComponent, ReferralContextIdentifiers, Logger } from '../GlobalQuickSearchWrapper';
import { CreateAnalyticsEventFn } from '../analytics/types';
import { SearchResultProps, PartiallyLoadedRecentItems } from '../common/QuickSearchContainer';
import { FilterComponentProps } from '../common/SearchResults';
import { AutocompleteClient } from '../../api/AutocompleteClient';
import { ConfluenceFeatures } from '../../util/features';
/**
 * NOTE: This component is only consumed internally as such avoid using optional props
 * i.e. instead of "propX?: something" use "propX: something | undefined"
 *
 * This improves type safety and prevent us from accidentally forgetting a parameter.
 */
export interface Props {
    crossProductSearchClient: CrossProductSearchClient;
    peopleSearchClient: PeopleSearchClient;
    confluenceClient: ConfluenceClient;
    autocompleteClient: AutocompleteClient;
    linkComponent: LinkComponent | undefined;
    referralContextIdentifiers: ReferralContextIdentifiers | undefined;
    logger: Logger;
    modelContext: ConfluenceModelContext | undefined;
    onAdvancedSearch: undefined | ((e: CancelableEvent, entity: string, query: string, searchSessionId: string, spaces?: string[]) => void);
    inputControls: JSX.Element | undefined;
    features: ConfluenceFeatures;
    firePrivateAnalyticsEvent?: any;
    createAnalyticsEvent?: CreateAnalyticsEventFn;
    confluenceUrl: string;
}
/**
 * Container Component that handles the data fetching when the user interacts with Search.
 */
export declare class ConfluenceQuickSearchContainer extends React.Component<Props & InjectedIntlProps> {
    screenCounters: {
        preQueryScreenCounter: SearchScreenCounter;
        postQueryScreenCounter: SearchScreenCounter;
    };
    handleSearchSubmit: (event: React.KeyboardEvent<HTMLInputElement>, searchSessionId: string) => void;
    searchCrossProductConfluence(query: string, sessionId: string, queryVersion: number, filters: Filter[]): Promise<CrossProductSearchResults>;
    handleSearchErrorAnalytics(error: Error, source: string): void;
    handleSearchErrorAnalyticsThunk: (source: string) => (reason: any) => void;
    getSearchResults: (query: string, sessionId: string, startTime: number, queryVersion: number, filters: Filter[]) => Promise<ResultsWithTiming<ConfluenceResultsMap>>;
    getRecentPeople: (sessionId: string) => Promise<PersonResult[]>;
    getRecentItems: (sessionId: string) => PartiallyLoadedRecentItems<ConfluenceResultsMap>;
    getAutocompleteSuggestions: (query: string) => Promise<string[]>;
    getPreQueryDisplayedResults: (recentItems: ConfluenceResultsMap | null, searchSessionId: string) => import("../../model/Result").ResultsGroup[];
    getPostQueryDisplayedResults: (searchResults: ConfluenceResultsMap | null, latestSearchQuery: string, recentItems: ConfluenceResultsMap | null, isLoading: boolean, searchSessionId: string) => import("../../model/Result").ResultsGroup[];
    getNoResultsStateComponent: (latestSearchQuery: string, searchSessionId: string, currentFilters: FilterWithMetadata<Filter, QueryBasedSpaceFilterMetadata>[], onFilterChanged: (filter: FilterWithMetadata<Filter, QueryBasedSpaceFilterMetadata>[]) => void) => JSX.Element;
    getFilterComponent: (searchResults: ConfluenceResultsMap | null) => ({ latestSearchQuery, searchResultsTotalSize, isLoading, searchSessionId, currentFilters, onFilterChanged, }: FilterComponentProps) => JSX.Element | undefined;
    createQueryBasedSpaceFilter: (currentFilters: FilterWithMetadata<Filter, QueryBasedSpaceFilterMetadata>[], searchResults: ConfluenceResultsMap) => FilterWithMetadata<SpaceFilter, QueryBasedSpaceFilterMetadata> | undefined;
    getSearchResultsComponent: ({ retrySearch, latestSearchQuery, isError, searchResults, isLoading, recentItems, searchSessionId, searchMore, currentFilters, onFilterChanged, }: SearchResultProps<ConfluenceResultsMap>) => JSX.Element;
    render(): JSX.Element;
}
declare const _default: (props: Pick<Props, "confluenceUrl" | "confluenceClient" | "crossProductSearchClient" | "linkComponent" | "createAnalyticsEvent" | "inputControls" | "referralContextIdentifiers" | "logger" | "onAdvancedSearch" | "peopleSearchClient" | "autocompleteClient" | "modelContext" | "firePrivateAnalyticsEvent">) => JSX.Element;
export default _default;
