"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Result_1 = require("../model/Result");
var JiraItemMapper_1 = require("./JiraItemMapper");
var ConfluenceItemMapper_1 = require("./ConfluenceItemMapper");
var util_service_support_1 = require("@atlaskit/util-service-support");
var types_1 = require("./types");
exports.DEFAULT_AB_TEST = Object.freeze({
    experimentId: 'default',
    abTestId: 'default',
    controlId: 'default',
});
var QUICKSEARCH_API_URL = 'quicksearch/v1';
exports.EMPTY_CROSS_PRODUCT_SEARCH_RESPONSE = {
    results: {},
};
var FilterType;
(function (FilterType) {
    FilterType["Spaces"] = "spaces";
    FilterType["Contributors"] = "contributors";
})(FilterType = exports.FilterType || (exports.FilterType = {}));
var CachingCrossProductSearchClientImpl = /** @class */ (function () {
    function CachingCrossProductSearchClientImpl(url, cloudId, isUserAnonymous, prefetchResults) {
        // result limit per scope
        this.RESULT_LIMIT = 10;
        this.serviceConfig = { url: url };
        this.cloudId = cloudId;
        this.isUserAnonymous = isUserAnonymous;
        this.abTestDataCache = prefetchResults ? prefetchResults.abTestPromise : {};
        this.crossProductRecentsCache = prefetchResults
            ? prefetchResults.crossProductRecentItemsPromise
            : undefined;
    }
    CachingCrossProductSearchClientImpl.prototype.getNavAutocompleteSuggestions = function (query) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var path, results, matchingScope, matchingDocuments;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = 'quicksearch/v1';
                        return [4 /*yield*/, this.makeRequest(path, {
                                cloudId: this.cloudId,
                                scopes: [types_1.Scope.NavSearchCompleteConfluence],
                                query: query,
                            })];
                    case 1:
                        results = _a.sent();
                        matchingScope = results.scopes.find(function (scope) { return scope.id === types_1.Scope.NavSearchCompleteConfluence; });
                        matchingDocuments = matchingScope ? matchingScope.results : [];
                        return [2 /*return*/, matchingDocuments.map(mapItemToNavCompletionString)];
                }
            });
        });
    };
    CachingCrossProductSearchClientImpl.prototype.getPeople = function (_a) {
        var query = _a.query, sessionId = _a.sessionId, referrerId = _a.referrerId, currentQuickSearchContext = _a.currentQuickSearchContext, _b = _a.resultLimit, resultLimit = _b === void 0 ? 3 : _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var isBootstrapQuery, scope, searchPromise;
            return tslib_1.__generator(this, function (_c) {
                isBootstrapQuery = !query;
                // We will use the bootstrap people cache if the query is a bootstrap query and there is a result cached
                if (isBootstrapQuery && this.bootstrapPeopleCache) {
                    return [2 /*return*/, this.bootstrapPeopleCache];
                }
                scope = currentQuickSearchContext === 'confluence'
                    ? types_1.Scope.UserConfluence
                    : currentQuickSearchContext === 'jira'
                        ? types_1.Scope.UserJira
                        : null;
                if (scope) {
                    searchPromise = this.search({
                        query: query,
                        sessionId: sessionId,
                        referrerId: referrerId,
                        scopes: [scope],
                        modelParams: [],
                        resultLimit: resultLimit,
                    });
                    if (isBootstrapQuery) {
                        this.bootstrapPeopleCache = searchPromise;
                    }
                    return [2 /*return*/, searchPromise];
                }
                return [2 /*return*/, {
                        results: {},
                    }];
            });
        });
    };
    CachingCrossProductSearchClientImpl.prototype.search = function (_a) {
        var query = _a.query, sessionId = _a.sessionId, referrerId = _a.referrerId, scopes = _a.scopes, modelParams = _a.modelParams, _b = _a.resultLimit, resultLimit = _b === void 0 ? this.RESULT_LIMIT : _b, _c = _a.filters, filters = _c === void 0 ? [] : _c, _d = _a.mapItemToResult, mapItemToResult = _d === void 0 ? postQueryMapItemToResult : _d;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var body, response;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        body = tslib_1.__assign({ query: query, cloudId: this.cloudId, limit: resultLimit, scopes: scopes, filters: filters, searchSession: {
                                sessionId: sessionId,
                                referrerId: referrerId,
                            } }, (modelParams.length > 0 ? { modelParams: modelParams } : {}));
                        return [4 /*yield*/, this.makeRequest(QUICKSEARCH_API_URL, body)];
                    case 1:
                        response = _e.sent();
                        return [2 /*return*/, this.parseResponse(response, mapItemToResult)];
                }
            });
        });
    };
    CachingCrossProductSearchClientImpl.prototype.getRecentItems = function (_a) {
        var context = _a.context, modelParams = _a.modelParams, _b = _a.resultLimit, resultLimit = _b === void 0 ? this.RESULT_LIMIT : _b, _c = _a.filters, filters = _c === void 0 ? [] : _c, mapItemToResult = _a.mapItemToResult;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var scopes, recents, body, response;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (this.isUserAnonymous) {
                            return [2 /*return*/, exports.EMPTY_CROSS_PRODUCT_SEARCH_RESPONSE];
                        }
                        scopes = mapContextToScopes(context);
                        if (!this.crossProductRecentsCache) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.crossProductRecentsCache];
                    case 1:
                        recents = _d.sent();
                        if (areAllScopesInCache(scopes, recents)) {
                            return [2 /*return*/, {
                                    results: recents,
                                }];
                        }
                        _d.label = 2;
                    case 2:
                        body = tslib_1.__assign({ query: '', cloudId: this.cloudId, limit: resultLimit, scopes: scopes, filters: filters }, (modelParams.length > 0 ? { modelParams: modelParams } : {}));
                        return [4 /*yield*/, this.makeRequest(QUICKSEARCH_API_URL, body)];
                    case 3:
                        response = _d.sent();
                        return [2 /*return*/, this.parseResponse(response, mapItemToResult)];
                }
            });
        });
    };
    CachingCrossProductSearchClientImpl.prototype.getAbTestDataForProduct = function (product) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var scope;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        switch (product) {
                            case 'confluence':
                                scope = types_1.Scope.ConfluencePageBlogAttachment;
                                break;
                            case 'jira':
                                scope = types_1.Scope.JiraIssue;
                                break;
                            default:
                                throw new Error('Invalid product for abtest');
                        }
                        return [4 /*yield*/, this.getAbTestData(scope)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @deprecated use {getAbTestDataForProduct} instead. Using manually defined scopes here can
     * break caching behaviour.
     *
     * This will be moved into private scope in the near future.
     */
    CachingCrossProductSearchClientImpl.prototype.getAbTestData = function (scope) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var path, body, response, scopeWithAbTest, abTestPromise;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.abTestDataCache[scope]) {
                            return [2 /*return*/, this.abTestDataCache[scope]];
                        }
                        path = 'experiment/v1';
                        body = {
                            cloudId: this.cloudId,
                            scopes: [scope],
                        };
                        return [4 /*yield*/, this.makeRequest(path, body)];
                    case 1:
                        response = _a.sent();
                        scopeWithAbTest = response.scopes.find(function (s) { return s.id === scope; });
                        abTestPromise = scopeWithAbTest
                            ? Promise.resolve(scopeWithAbTest.abTest)
                            : Promise.resolve(exports.DEFAULT_AB_TEST);
                        this.abTestDataCache[scope] = abTestPromise;
                        return [2 /*return*/, abTestPromise];
                }
            });
        });
    };
    CachingCrossProductSearchClientImpl.prototype.makeRequest = function (path, body) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var options;
            return tslib_1.__generator(this, function (_a) {
                options = {
                    path: path,
                    requestInit: {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(body),
                    },
                };
                return [2 /*return*/, util_service_support_1.utils.requestService(this.serviceConfig, options)];
            });
        });
    };
    /**
     * Converts the raw xpsearch-aggregator response into a CrossProductSearchResults object containing
     * the results set and the experimentId that generated them.
     *
     * @param response
     * @param searchSessionId
     * @returns a CrossProductSearchResults object
     */
    CachingCrossProductSearchClientImpl.prototype.parseResponse = function (response, mapItemToResult) {
        var abTest;
        var results = response.scopes
            .filter(function (scope) { return scope.results; })
            .reduce(function (resultsMap, scopeResult) {
            var items = scopeResult.results.map(function (result) {
                return mapItemToResult(scopeResult.id, result);
            });
            //@ts-ignore mapItemToResult returns a generic result type, technically we can't guarantee that the
            //           type returned by `mapItemToResult` can be coerced into the expected type, e.g. there's
            //           no guarantee the `Result` can be casted to `ConfluenceObjectResult`. We just make the assumption
            //           here for now and suppress the typescript error
            resultsMap[scopeResult.id] = {
                items: items,
                totalSize: scopeResult.size !== undefined ? scopeResult.size : items.length,
            };
            if (!abTest) {
                abTest = scopeResult.abTest;
            }
            return resultsMap;
        }, {});
        return { results: results, abTest: abTest };
    };
    return CachingCrossProductSearchClientImpl;
}());
exports.default = CachingCrossProductSearchClientImpl;
function mapPersonItemToResult(item) {
    var mention = item.nickname || item.name;
    return {
        resultType: Result_1.ResultType.PersonResult,
        resultId: 'people-' + item.account_id,
        name: item.name,
        href: '/people/' + item.account_id,
        avatarUrl: item.picture,
        contentType: Result_1.ContentType.Person,
        analyticsType: Result_1.AnalyticsType.ResultPerson,
        mentionName: mention,
        presenceMessage: item.job_title || '',
    };
}
function mapUrsResultItemToResult(item) {
    return {
        resultType: Result_1.ResultType.PersonResult,
        resultId: 'people-' + item.id,
        name: item.name,
        href: '/people/' + item.id,
        avatarUrl: item.avatarUrl,
        contentType: Result_1.ContentType.Person,
        analyticsType: Result_1.AnalyticsType.ResultPerson,
        mentionName: item.nickname || '',
        presenceMessage: '',
    };
}
function postQueryMapItemToResult(scope, item) {
    if (scope.startsWith('confluence')) {
        return ConfluenceItemMapper_1.mapConfluenceItemToResult(scope, item);
    }
    if (scope.startsWith('jira')) {
        return JiraItemMapper_1.mapJiraItemToResult(Result_1.AnalyticsType.ResultJira)(item);
    }
    if (scope === types_1.Scope.People) {
        return mapPersonItemToResult(item);
    }
    if (scope === types_1.Scope.UserConfluence || scope === types_1.Scope.UserJira) {
        return mapUrsResultItemToResult(item);
    }
    if (scope === types_1.Scope.NavSearchCompleteConfluence) {
        throw new Error('nav.completion-confluence cannot be transformed into a result because it is not a search result');
    }
    throw new Error("Non-exhaustive match for scope: " + scope);
}
function mapItemToNavCompletionString(item) {
    var completionItem = item;
    return completionItem.query;
}
function mapContextToScopes(context) {
    if (context === 'jira') {
        return [types_1.Scope.JiraIssue, types_1.Scope.JiraBoardProjectFilter];
    }
    else {
        throw new Error("Supplied contet " + context + " is not supported for pre-fetching");
    }
}
function areAllScopesInCache(scopes, cache) {
    return scopes.filter(function (scope) { return cache[scope] === undefined; }).length === 0;
}
//# sourceMappingURL=CrossProductSearchClient.js.map