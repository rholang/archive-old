import { ConfluenceRecentsMap } from '../model/Result';
import { ABTest, SearchResultsMap } from './CrossProductSearchClient';
interface CommonPrefetchedResults {
    abTestPromise: {
        [scope: string]: Promise<ABTest>;
    };
    crossProductRecentItemsPromise: Promise<SearchResultsMap>;
}
export interface ConfluencePrefetchedResults extends CommonPrefetchedResults {
    confluenceRecentItemsPromise: Promise<ConfluenceRecentsMap>;
}
export interface JiraPrefetchedResults extends CommonPrefetchedResults {
}
export declare type GlobalSearchPrefetchedResults = ConfluencePrefetchedResults | JiraPrefetchedResults;
export declare const getConfluencePrefetchedData: (cloudId: string, confluenceUrl?: string | undefined) => ConfluencePrefetchedResults;
export declare const getJiraPrefetchedData: (cloudId: string, isUserAnonymous: boolean, jiraUrl?: string | undefined) => JiraPrefetchedResults;
export {};
