"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Result_1 = require("../model/Result");
var util_service_support_1 = require("@atlaskit/util-service-support");
var PeopleSearchClientImpl = /** @class */ (function () {
    function PeopleSearchClientImpl(url, cloudId) {
        this.serviceConfig = { url: url };
        this.cloudId = cloudId;
    }
    PeopleSearchClientImpl.prototype.buildRecentQuery = function () {
        return {
            query: "query Collaborators(\n          $cloudId: String!,\n          $limit: Int) {\n          Collaborators(cloudId: $cloudId, limit: $limit) {\n            id,\n            fullName,\n            avatarUrl,\n            title,\n            nickname,\n            department\n          }\n        }",
            variables: {
                cloudId: this.cloudId,
                limit: 3,
                excludeBots: true,
                excludeInactive: true,
            },
        };
    };
    PeopleSearchClientImpl.prototype.buildRequestOptions = function (body) {
        return {
            path: 'graphql',
            requestInit: {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(body),
            },
        };
    };
    PeopleSearchClientImpl.prototype.getRecentPeople = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var options, response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = this.buildRequestOptions(this.buildRecentQuery());
                        return [4 /*yield*/, util_service_support_1.utils.requestService(this.serviceConfig, options)];
                    case 1:
                        response = _a.sent();
                        if (response.errors) {
                            // TODO should probably catch and log this
                            return [2 /*return*/, []];
                        }
                        if (!response.data || !response.data.Collaborators) {
                            return [2 /*return*/, []];
                        }
                        return [2 /*return*/, response.data.Collaborators.map(function (record) {
                                return userSearchResultToResult(record, Result_1.AnalyticsType.RecentPerson);
                            })];
                }
            });
        });
    };
    return PeopleSearchClientImpl;
}());
exports.default = PeopleSearchClientImpl;
function userSearchResultToResult(searchResult, analyticsType) {
    var mention = searchResult.nickname || searchResult.fullName;
    return {
        resultType: Result_1.ResultType.PersonResult,
        resultId: 'people-' + searchResult.id,
        name: searchResult.fullName,
        href: '/people/' + searchResult.id,
        avatarUrl: searchResult.avatarUrl,
        contentType: Result_1.ContentType.Person,
        analyticsType: analyticsType,
        mentionName: mention,
        presenceMessage: searchResult.title,
    };
}
//# sourceMappingURL=PeopleSearchClient.js.map