import { __awaiter, __generator, __read } from "tslib";
import { AnalyticsType } from '../model/Result';
import configureSearchClients from './configureSearchClients';
import { EMPTY_CROSS_PRODUCT_SEARCH_RESPONSE, } from './CrossProductSearchClient';
import { mapJiraItemToResult } from './JiraItemMapper';
import { Scope } from './types';
var prefetchConfluence = function (confluenceClient) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, objects, spaces;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, Promise.all([
                    confluenceClient.getRecentItems(),
                    confluenceClient.getRecentSpaces(),
                ])];
            case 1:
                _a = __read.apply(void 0, [_b.sent(), 2]), objects = _a[0], spaces = _a[1];
                return [2 /*return*/, {
                        objects: {
                            items: objects,
                            totalSize: objects.length,
                        },
                        spaces: {
                            items: spaces,
                            totalSize: spaces.length,
                        },
                        people: {
                            items: [],
                            totalSize: 0,
                        },
                    }];
        }
    });
}); };
var prefetchJira = function (crossProductSearchClient) { return __awaiter(void 0, void 0, void 0, function () {
    var results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, crossProductSearchClient.getRecentItems({
                    context: 'jira',
                    modelParams: [],
                    resultLimit: 250,
                    mapItemToResult: function (_, item) {
                        return mapJiraItemToResult(AnalyticsType.RecentJira)(item);
                    },
                })];
            case 1:
                results = (_a.sent()).results;
                return [2 /*return*/, results];
        }
    });
}); };
export var getConfluencePrefetchedData = function (cloudId, confluenceUrl) {
    var _a;
    var config = confluenceUrl
        ? {
            confluenceUrl: confluenceUrl,
        }
        : {};
    var _b = configureSearchClients(cloudId, config, false), confluenceClient = _b.confluenceClient, crossProductSearchClient = _b.crossProductSearchClient;
    // Pre-call the relevant endpoints to cache the results
    return {
        confluenceRecentItemsPromise: prefetchConfluence(confluenceClient),
        abTestPromise: (_a = {},
            _a[Scope.ConfluencePageBlogAttachment] = crossProductSearchClient.getAbTestData(Scope.ConfluencePageBlogAttachment),
            _a),
        crossProductRecentItemsPromise: Promise.resolve(EMPTY_CROSS_PRODUCT_SEARCH_RESPONSE.results),
    };
};
export var getJiraPrefetchedData = function (cloudId, isUserAnonymous, jiraUrl) {
    var _a;
    var config = jiraUrl
        ? {
            jiraUrl: jiraUrl,
        }
        : {};
    var crossProductSearchClient = configureSearchClients(cloudId, config, isUserAnonymous).crossProductSearchClient;
    return {
        crossProductRecentItemsPromise: prefetchJira(crossProductSearchClient),
        abTestPromise: (_a = {},
            _a[Scope.JiraIssue] = crossProductSearchClient.getAbTestData(Scope.JiraIssue),
            _a),
    };
};
//# sourceMappingURL=prefetchResults.js.map