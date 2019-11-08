"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Result_1 = require("../model/Result");
var configureSearchClients_1 = tslib_1.__importDefault(require("./configureSearchClients"));
var CrossProductSearchClient_1 = require("./CrossProductSearchClient");
var JiraItemMapper_1 = require("./JiraItemMapper");
var types_1 = require("./types");
var prefetchConfluence = function (confluenceClient) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, objects, spaces;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, Promise.all([
                    confluenceClient.getRecentItems(),
                    confluenceClient.getRecentSpaces(),
                ])];
            case 1:
                _a = tslib_1.__read.apply(void 0, [_b.sent(), 2]), objects = _a[0], spaces = _a[1];
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
var prefetchJira = function (crossProductSearchClient) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var results;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, crossProductSearchClient.getRecentItems({
                    context: 'jira',
                    modelParams: [],
                    resultLimit: 250,
                    mapItemToResult: function (_, item) {
                        return JiraItemMapper_1.mapJiraItemToResult(Result_1.AnalyticsType.RecentJira)(item);
                    },
                })];
            case 1:
                results = (_a.sent()).results;
                return [2 /*return*/, results];
        }
    });
}); };
exports.getConfluencePrefetchedData = function (cloudId, confluenceUrl) {
    var _a;
    var config = confluenceUrl
        ? {
            confluenceUrl: confluenceUrl,
        }
        : {};
    var _b = configureSearchClients_1.default(cloudId, config, false), confluenceClient = _b.confluenceClient, crossProductSearchClient = _b.crossProductSearchClient;
    // Pre-call the relevant endpoints to cache the results
    return {
        confluenceRecentItemsPromise: prefetchConfluence(confluenceClient),
        abTestPromise: (_a = {},
            _a[types_1.Scope.ConfluencePageBlogAttachment] = crossProductSearchClient.getAbTestData(types_1.Scope.ConfluencePageBlogAttachment),
            _a),
        crossProductRecentItemsPromise: Promise.resolve(CrossProductSearchClient_1.EMPTY_CROSS_PRODUCT_SEARCH_RESPONSE.results),
    };
};
exports.getJiraPrefetchedData = function (cloudId, isUserAnonymous, jiraUrl) {
    var _a;
    var config = jiraUrl
        ? {
            jiraUrl: jiraUrl,
        }
        : {};
    var crossProductSearchClient = configureSearchClients_1.default(cloudId, config, isUserAnonymous).crossProductSearchClient;
    return {
        crossProductRecentItemsPromise: prefetchJira(crossProductSearchClient),
        abTestPromise: (_a = {},
            _a[types_1.Scope.JiraIssue] = crossProductSearchClient.getAbTestData(types_1.Scope.JiraIssue),
            _a),
    };
};
//# sourceMappingURL=prefetchResults.js.map