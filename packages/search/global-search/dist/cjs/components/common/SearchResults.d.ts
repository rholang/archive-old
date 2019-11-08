import * as React from 'react';
import { ScreenCounter } from '../../util/ScreenCounter';
import { ReferralContextIdentifiers } from '../GlobalQuickSearchWrapper';
import { ResultsGroup } from '../../model/Result';
import { Scope } from '../../api/types';
import { CancelableEvent } from '@atlaskit/quick-search';
import { FilterWithMetadata } from '../../api/CrossProductSearchClient';
export interface Props {
    isPreQuery: boolean;
    query: string;
    isError: boolean;
    isLoading: boolean;
    renderNoResult: () => JSX.Element;
    renderNoRecentActivity: () => JSX.Element;
    renderBeforePreQueryState?: () => JSX.Element;
    retrySearch(): void;
    searchMore: undefined | ((scope: Scope) => void);
    getPreQueryGroups: () => ResultsGroup[];
    getPostQueryGroups: () => ResultsGroup[];
    renderAdvancedSearchGroup: (analyticsData?: any) => JSX.Element;
    keepPreQueryState: boolean;
    searchSessionId: string;
    preQueryScreenCounter?: ScreenCounter;
    postQueryScreenCounter?: ScreenCounter;
    referralContextIdentifiers?: ReferralContextIdentifiers;
    onSearchMoreAdvancedSearchClicked?: (event: CancelableEvent) => void;
    getFilterComponent(props: FilterComponentProps): React.ReactNode;
    currentFilters: FilterWithMetadata[];
    onFilterChanged(filter: FilterWithMetadata[]): void;
}
export interface FilterComponentProps {
    latestSearchQuery: string;
    searchResultsTotalSize: number;
    isLoading: boolean;
    searchSessionId: string;
    currentFilters: FilterWithMetadata[];
    onFilterChanged(filter: FilterWithMetadata[]): void;
}
export declare enum SearchResultsState {
    PreQueryLoading = 0,
    PreQueryResults = 1,
    PreQueryNoResults = 2,
    PostQueryResults = 3,
    PostQueryNoResults = 4,
    IntermediateResults = 5,
    IntermediateNoResults = 6
}
interface SearchResultStateQuery {
    isPreQuery: boolean;
    isLoading: boolean;
    hasResults: boolean;
}
export declare const getSearchResultState: ({ isPreQuery, isLoading, hasResults, }: SearchResultStateQuery) => SearchResultsState;
export default class SearchResults extends React.Component<Props> {
    static defaultProps: {
        getFilterComponent: () => null;
    };
    shouldComponentUpdate(nextProps: Props): boolean;
    hasNoResult(): boolean;
    renderNoResult(): JSX.Element;
    renderPreQueryState(): JSX.Element;
    renderSearchResultsState(): JSX.Element;
    render(): JSX.Element | null;
}
export {};
