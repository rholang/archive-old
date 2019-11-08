import { ConfluenceClient } from './ConfluenceClient';
import { CrossProductSearchClient } from './CrossProductSearchClient';
import { JiraClient } from './JiraClient';
import { PeopleSearchClient } from './PeopleSearchClient';
import { GlobalSearchPrefetchedResults } from './prefetchResults';
import { AutocompleteClient } from './AutocompleteClient';
export interface SearchClients {
    crossProductSearchClient: CrossProductSearchClient;
    peopleSearchClient: PeopleSearchClient;
    confluenceClient: ConfluenceClient;
    jiraClient: JiraClient;
    autocompleteClient: AutocompleteClient;
}
export interface Config {
    activityServiceUrl: string;
    searchAggregatorServiceUrl: string;
    directoryServiceUrl: string;
    confluenceUrl: string;
    jiraUrl: string;
    autocompleteUrl: string;
}
declare function configureSearchClients(cloudId: string, partialConfig: Partial<Config>, isUserAnonymous: boolean, prefetchedResults?: GlobalSearchPrefetchedResults): SearchClients;
declare const _default: typeof configureSearchClients;
export default _default;
