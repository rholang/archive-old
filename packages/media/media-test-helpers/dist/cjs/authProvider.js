"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var collectionNames_1 = require("./collectionNames");
var cachedAuths = {};
var authProviderBaseURL = 'https://api-private.dev.atlassian.com/media-playground/api';
var StoryBookAuthProvider = /** @class */ (function () {
    function StoryBookAuthProvider() {
    }
    StoryBookAuthProvider.create = function (isAsapEnvironment, access) {
        var _this = this;
        var loadTenatAuth = function (collectionName) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var environment, headers, config, url, response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        environment = isAsapEnvironment ? 'asap' : '';
                        headers = new Headers();
                        headers.append('Content-Type', 'application/json; charset=utf-8');
                        headers.append('Accept', 'text/plain, */*; q=0.01');
                        config = {
                            method: 'POST',
                            credentials: 'include',
                            headers: headers,
                            body: access ? JSON.stringify({ access: access }) : undefined,
                        };
                        url = authProviderBaseURL + "/token/tenant?collection=" + collectionName + "&environment=" + environment;
                        response = fetch(url, config);
                        return [4 /*yield*/, response];
                    case 1: return [4 /*yield*/, (_a.sent()).json()];
                    case 2: 
                    // We leverage the fact, that our internal /toke/tenant API returns data in the same format as Auth
                    return [2 /*return*/, (_a.sent())];
                }
            });
        }); };
        return function (authContext) {
            var collectionName = (authContext && authContext.collectionName) || collectionNames_1.defaultCollectionName;
            var accessStr = access ? JSON.stringify(access) : '';
            var cacheKey = collectionName + "-" + accessStr + "-" + isAsapEnvironment;
            if (!cachedAuths[cacheKey]) {
                cachedAuths[cacheKey] = loadTenatAuth(collectionName);
            }
            return cachedAuths[cacheKey];
        };
    };
    return StoryBookAuthProvider;
}());
exports.StoryBookAuthProvider = StoryBookAuthProvider;
//# sourceMappingURL=authProvider.js.map