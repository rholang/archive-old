import { __assign } from "tslib";
import CachingConfluenceClient from './CachingConfluenceClient';
import { CachingPeopleSearchClient } from './CachingPeopleSearchClient';
import CachingCrossProductSearchClientImpl from './CrossProductSearchClient';
import JiraClientImpl from './JiraClient';
import { AutocompleteClientImpl, } from './AutocompleteClient';
import memoizeOne from 'memoize-one';
import deepEqual from 'deep-equal';
var defaultConfig = {
    activityServiceUrl: '/gateway/api/activity',
    searchAggregatorServiceUrl: '/gateway/api/xpsearch-aggregator',
    directoryServiceUrl: '/gateway/api/directory',
    confluenceUrl: '/wiki',
    jiraUrl: '',
    autocompleteUrl: '/gateway/api/ccsearch-autocomplete',
};
function configureSearchClients(cloudId, partialConfig, isUserAnonymous, prefetchedResults) {
    var config = __assign(__assign({}, defaultConfig), partialConfig);
    var confluencePrefetchedResults = prefetchedResults &&
        prefetchedResults
            .confluenceRecentItemsPromise
        ? prefetchedResults
            .confluenceRecentItemsPromise
        : undefined;
    return {
        crossProductSearchClient: new CachingCrossProductSearchClientImpl(config.searchAggregatorServiceUrl, cloudId, isUserAnonymous, prefetchedResults),
        peopleSearchClient: new CachingPeopleSearchClient(config.directoryServiceUrl, cloudId),
        confluenceClient: new CachingConfluenceClient(config.confluenceUrl, confluencePrefetchedResults),
        autocompleteClient: new AutocompleteClientImpl(config.autocompleteUrl, cloudId),
        jiraClient: new JiraClientImpl(config.jiraUrl, cloudId, isUserAnonymous),
    };
}
export default memoizeOne(configureSearchClients, deepEqual);
//# sourceMappingURL=configureSearchClients.js.map