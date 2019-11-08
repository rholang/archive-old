"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var CachingConfluenceClient_1 = tslib_1.__importDefault(require("./CachingConfluenceClient"));
var CachingPeopleSearchClient_1 = require("./CachingPeopleSearchClient");
var CrossProductSearchClient_1 = tslib_1.__importDefault(require("./CrossProductSearchClient"));
var JiraClient_1 = tslib_1.__importDefault(require("./JiraClient"));
var AutocompleteClient_1 = require("./AutocompleteClient");
var memoize_one_1 = tslib_1.__importDefault(require("memoize-one"));
var deep_equal_1 = tslib_1.__importDefault(require("deep-equal"));
var defaultConfig = {
    activityServiceUrl: '/gateway/api/activity',
    searchAggregatorServiceUrl: '/gateway/api/xpsearch-aggregator',
    directoryServiceUrl: '/gateway/api/directory',
    confluenceUrl: '/wiki',
    jiraUrl: '',
    autocompleteUrl: '/gateway/api/ccsearch-autocomplete',
};
function configureSearchClients(cloudId, partialConfig, isUserAnonymous, prefetchedResults) {
    var config = tslib_1.__assign(tslib_1.__assign({}, defaultConfig), partialConfig);
    var confluencePrefetchedResults = prefetchedResults &&
        prefetchedResults
            .confluenceRecentItemsPromise
        ? prefetchedResults
            .confluenceRecentItemsPromise
        : undefined;
    return {
        crossProductSearchClient: new CrossProductSearchClient_1.default(config.searchAggregatorServiceUrl, cloudId, isUserAnonymous, prefetchedResults),
        peopleSearchClient: new CachingPeopleSearchClient_1.CachingPeopleSearchClient(config.directoryServiceUrl, cloudId),
        confluenceClient: new CachingConfluenceClient_1.default(config.confluenceUrl, confluencePrefetchedResults),
        autocompleteClient: new AutocompleteClient_1.AutocompleteClientImpl(config.autocompleteUrl, cloudId),
        jiraClient: new JiraClient_1.default(config.jiraUrl, cloudId, isUserAnonymous),
    };
}
exports.default = memoize_one_1.default(configureSearchClients, deep_equal_1.default);
//# sourceMappingURL=configureSearchClients.js.map