import { Result, Results, PeopleResults, ConfluenceObjectResults } from '../model/Result';
import { Scope, ConfluenceItem, JiraItem, PersonItem, QuickSearchContext, UrsPersonItem, NavScopeResultItem } from './types';
import { ModelParam } from '../util/model-parameters';
import { GlobalSearchPrefetchedResults } from './prefetchResults';
export declare const DEFAULT_AB_TEST: ABTest;
declare type PeopleScopes = Scope.People | Scope.UserConfluence | Scope.UserJira;
declare type ConfluenceObjectScopes = Scope.ConfluencePageBlogAttachment | Scope.ConfluencePageBlog;
declare type ConfluenceContainerResults = Scope.ConfluenceSpace;
/**
 * Eventually we want all the scopes to be typed in some way
 */
export declare type TypePeopleResults = {
    [S in PeopleScopes]: PeopleResults | undefined;
};
export declare type TypeConfluenceObjectResults = {
    [S in ConfluenceObjectScopes]: ConfluenceObjectResults | undefined;
};
export declare type TypeConfluenceContainerResults = {
    [S in ConfluenceContainerResults]: Results | undefined;
};
/**
 * Temporary type as we start typing all our results
 */
export declare type GenericResults = {
    [S in Exclude<Scope, PeopleScopes>]: Results | undefined;
};
/**
 * Note that this type ONLY provides types when retrieving objects given a key.
 * It does NOT have much type safety when it comes to assigning the values to a key.
 *
 * e.g.
 * typeof results[Scope.People] == PeopleResults (i.e provides type safety)
 *
 * but the following will also not throw any typescript warnings.
 *
 * const scope: Scope = Scope.People;
 * results[scope] = new Result()
 */
export declare type SearchResultsMap = GenericResults & TypePeopleResults & TypeConfluenceObjectResults & TypeConfluenceContainerResults;
export declare type CrossProductSearchResults = {
    results: SearchResultsMap;
    abTest?: ABTest;
};
export declare const EMPTY_CROSS_PRODUCT_SEARCH_RESPONSE: CrossProductSearchResults;
export interface CrossProductSearchResponse {
    scopes: ScopeResult[];
}
export interface CrossProductExperimentResponse {
    scopes: Experiment[];
}
export declare type SearchItem = ConfluenceItem | JiraItem | PersonItem | UrsPersonItem | NavScopeResultItem;
export interface ABTest {
    abTestId: string;
    controlId: string;
    experimentId: string;
}
export interface ScopeResult {
    id: Scope;
    error?: string;
    results: SearchItem[];
    abTest?: ABTest;
    size?: number;
}
export interface Experiment {
    id: Scope;
    error?: string;
    abTest: ABTest;
}
export interface PrefetchedData {
    abTest: Promise<ABTest> | undefined;
}
export declare enum FilterType {
    Spaces = "spaces",
    Contributors = "contributors"
}
export interface SpaceFilter {
    '@type': FilterType.Spaces;
    spaceKeys: string[];
}
export interface QueryBasedSpaceFilterMetadata {
    spaceTitle: string;
    spaceAvatar: string;
}
export interface ContributorsFilter {
    '@type': FilterType.Contributors;
    accountIds: string[];
}
export declare type FilterMetadata = QueryBasedSpaceFilterMetadata;
export declare type Filter = SpaceFilter | ContributorsFilter;
export interface FilterWithMetadata<T = Filter, W = FilterMetadata> {
    filter: T;
    metadata?: W;
}
export interface SearchParams {
    query: string;
    sessionId: string;
    referrerId: string | undefined;
    scopes: Scope[];
    modelParams: ModelParam[];
    resultLimit?: number;
    filters?: Filter[];
    mapItemToResult?: ItemToResultMapper;
}
export interface RecentParams {
    context: QuickSearchContext;
    modelParams: ModelParam[];
    resultLimit?: number;
    filters?: Filter[];
    mapItemToResult: ItemToResultMapper;
}
export interface SearchPeopleParams {
    query: string;
    sessionId: string;
    referrerId: string | undefined;
    currentQuickSearchContext: QuickSearchContext;
    resultLimit?: number;
}
export interface CrossProductSearchClient {
    search(params: SearchParams): Promise<CrossProductSearchResults>;
    getRecentItems(params: RecentParams): Promise<CrossProductSearchResults>;
    getPeople(params: SearchPeopleParams): Promise<CrossProductSearchResults>;
    getAbTestData(scope: Scope): Promise<ABTest>;
    getAbTestDataForProduct(product: QuickSearchContext): Promise<ABTest>;
    getNavAutocompleteSuggestions(query: string): Promise<string[]>;
}
export declare type ItemToResultMapper = (scope: Scope, item: SearchItem) => Result;
export default class CachingCrossProductSearchClientImpl implements CrossProductSearchClient {
    private serviceConfig;
    private cloudId;
    private isUserAnonymous;
    private abTestDataCache;
    private bootstrapPeopleCache;
    private crossProductRecentsCache;
    private readonly RESULT_LIMIT;
    constructor(url: string, cloudId: string, isUserAnonymous: boolean, prefetchResults: GlobalSearchPrefetchedResults | undefined);
    getNavAutocompleteSuggestions(query: string): Promise<string[]>;
    getPeople({ query, sessionId, referrerId, currentQuickSearchContext, resultLimit, }: SearchPeopleParams): Promise<CrossProductSearchResults>;
    search({ query, sessionId, referrerId, scopes, modelParams, resultLimit, filters, mapItemToResult, }: SearchParams): Promise<CrossProductSearchResults>;
    getRecentItems({ context, modelParams, resultLimit, filters, mapItemToResult, }: RecentParams): Promise<CrossProductSearchResults>;
    getAbTestDataForProduct(product: QuickSearchContext): Promise<ABTest>;
    /**
     * @deprecated use {getAbTestDataForProduct} instead. Using manually defined scopes here can
     * break caching behaviour.
     *
     * This will be moved into private scope in the near future.
     */
    getAbTestData(scope: Scope): Promise<ABTest>;
    private makeRequest;
    /**
     * Converts the raw xpsearch-aggregator response into a CrossProductSearchResults object containing
     * the results set and the experimentId that generated them.
     *
     * @param response
     * @param searchSessionId
     * @returns a CrossProductSearchResults object
     */
    private parseResponse;
}
export {};
