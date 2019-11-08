import * as React from 'react';
import { InjectedIntlProps } from 'react-intl';
import { CancelableEvent } from '@atlaskit/quick-search';
import { CreateAnalyticsEventFn } from '../analytics/types';
import { SearchScreenCounter } from '../../util/ScreenCounter';
import { JiraClient } from '../../api/JiraClient';
import { PeopleSearchClient } from '../../api/PeopleSearchClient';
import { LinkComponent, ReferralContextIdentifiers, Logger, JiraApplicationPermission } from '../GlobalQuickSearchWrapper';
import { SearchResultProps, PartiallyLoadedRecentItems } from '../common/QuickSearchContainer';
import { JiraEntityTypes } from '../SearchResultsUtil';
import { JiraResult, Result, ResultsWithTiming, JiraResultsMap } from '../../model/Result';
import { CrossProductSearchClient } from '../../api/CrossProductSearchClient';
import { JiraFeatures } from '../../util/features';
/**
 * NOTE: This component is only consumed internally as such avoid using optional props
 * i.e. instead of "propX?: something" use "propX: something | undefined"
 *
 * This improves type safety and prevent us from accidentally forgetting a parameter.
 */
export interface Props {
    createAnalyticsEvent?: CreateAnalyticsEventFn | undefined;
    linkComponent: LinkComponent | undefined;
    referralContextIdentifiers: ReferralContextIdentifiers | undefined;
    jiraClient: JiraClient;
    peopleSearchClient: PeopleSearchClient;
    crossProductSearchClient: CrossProductSearchClient;
    logger: Logger;
    onAdvancedSearch: undefined | ((e: CancelableEvent, entity: string, query: string, searchSessionId: string) => void);
    appPermission: JiraApplicationPermission | undefined;
    features: JiraFeatures;
    isJiraPeopleProfilesEnabled?: boolean;
}
export interface State {
    selectedAdvancedSearchType: JiraEntityTypes;
    selectedResultId?: string;
}
/**
 * Container/Stateful Component that handles the data fetching and state handling when the user interacts with Search.
 */
export declare class JiraQuickSearchContainer extends React.Component<Props & InjectedIntlProps, State> {
    state: State;
    screenCounters: {
        preQueryScreenCounter: SearchScreenCounter;
        postQueryScreenCounter: SearchScreenCounter;
    };
    handleSearchSubmit: (event: React.KeyboardEvent<HTMLInputElement>, searchSessionId: string) => void;
    handleAdvancedSearch: (event: CancelableEvent, entity: string, query: string, searchSessionId: string, analyticsData: Object, isLoading: boolean) => void;
    getPreQueryDisplayedResults: (recentItems: JiraResultsMap | null, searchSessionId: string) => import("../../model/Result").ResultsGroup[];
    getPostQueryDisplayedResults: (searchResults: JiraResultsMap | null, latestSearchQuery: string, recentItems: JiraResultsMap | null, isLoading: boolean, searchSessionId: string) => import("../../model/Result").ResultsGroup[];
    getSearchResultsComponent: ({ retrySearch, latestSearchQuery, isError, searchResults, isLoading, recentItems, keepPreQueryState, searchSessionId, searchMore, currentFilters, onFilterChanged, }: SearchResultProps<JiraResultsMap>) => JSX.Element;
    getRecentlyInteractedPeople: () => Promise<Result[]>;
    getJiraRecentItems: () => Promise<JiraResultsMap>;
    canSearchUsers: () => Promise<boolean>;
    getRecentItems: () => PartiallyLoadedRecentItems<JiraResultsMap>;
    getSearchResults: (query: string, sessionId: string, startTime: number, queryVersion: number) => Promise<ResultsWithTiming<JiraResultsMap>>;
    highlightMatchingFirstResult(query: string, issueResults: JiraResult[]): void;
    handleSelectedResultIdChanged(newSelectedId?: string): void;
    render(): JSX.Element;
}
declare const _default: (props: Pick<Pick<Props, "crossProductSearchClient" | "isJiraPeopleProfilesEnabled" | "linkComponent" | "referralContextIdentifiers" | "logger" | "features" | "onAdvancedSearch" | "peopleSearchClient" | "appPermission" | "jiraClient"> & React.RefAttributes<any>, "key" | "crossProductSearchClient" | "isJiraPeopleProfilesEnabled" | "linkComponent" | "referralContextIdentifiers" | "ref" | "logger" | "onAdvancedSearch" | "peopleSearchClient" | "appPermission" | "jiraClient">) => JSX.Element;
export default _default;
