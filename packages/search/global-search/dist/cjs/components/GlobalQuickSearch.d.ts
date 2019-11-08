import * as React from 'react';
import { LinkComponent, ReferralContextIdentifiers } from './GlobalQuickSearchWrapper';
import { SelectedSearchResultEvent } from '../util/analytics-event-helper';
import { CreateAnalyticsEventFn } from './analytics/types';
import { FilterWithMetadata } from './../api/CrossProductSearchClient';
export interface Props {
    onMount?: () => void;
    onSearch(query: string, queryVersion: number, filters?: FilterWithMetadata[]): void;
    onSearchSubmit?(event: React.KeyboardEvent<HTMLInputElement>): void;
    onAutocomplete?(query: string): void;
    isLoading: boolean;
    placeholder?: string;
    searchSessionId: string;
    children: React.ReactNode;
    linkComponent?: LinkComponent;
    createAnalyticsEvent?: CreateAnalyticsEventFn;
    isSendSearchTermsEnabled?: boolean;
    selectedResultId?: string;
    onSelectedResultIdChanged?: (id: string | number | null) => void;
    inputControls?: JSX.Element;
    autocompleteSuggestions?: string[];
    referralContextIdentifiers?: ReferralContextIdentifiers;
    filters?: FilterWithMetadata[];
    advancedSearchId: string;
}
export interface State {
    query: string;
    autocompleteText: string | undefined;
}
/**
 * Presentational component that renders the search input and search results.
 */
export declare class GlobalQuickSearch extends React.Component<Props, State> {
    queryVersion: number;
    autoCompleteVersion: number;
    autoCompleteLastTimeStamp: number;
    resultSelected: boolean;
    state: State;
    static getDerivedStateFromProps(nextProps: Readonly<any>, prevState: State): State;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props, prevState: State): void;
    handleSearchInput: ({ target }: React.FormEvent<HTMLInputElement>, isAutocompleted?: boolean | undefined) => void;
    debouncedSearch: any;
    doSearch(query: string): void;
    debouncedAutocomplete: any;
    doAutocomplete(query: string): void;
    fireSearchResultSelectedEvent: (eventData: SelectedSearchResultEvent) => void;
    fireSearchResultEvents: (eventName: string, eventData: Object) => void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
declare const _default: React.ForwardRefExoticComponent<Pick<Props, "filters" | "onMount" | "onSearch" | "onSearchSubmit" | "onAutocomplete" | "isLoading" | "placeholder" | "searchSessionId" | "children" | "linkComponent" | "isSendSearchTermsEnabled" | "selectedResultId" | "onSelectedResultIdChanged" | "inputControls" | "autocompleteSuggestions" | "referralContextIdentifiers" | "advancedSearchId"> & React.RefAttributes<any>>;
export default _default;
