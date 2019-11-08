"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var PeopleSearchClient_1 = tslib_1.__importDefault(require("./PeopleSearchClient"));
var CachingPeopleSearchClient = /** @class */ (function (_super) {
    tslib_1.__extends(CachingPeopleSearchClient, _super);
    function CachingPeopleSearchClient(url, cloudId) {
        return _super.call(this, url, cloudId) || this;
    }
    CachingPeopleSearchClient.prototype.getRecentPeople = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var prefetchedPeople;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.prefetchPeople) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.prefetchPeople];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        prefetchedPeople = _super.prototype.getRecentPeople.call(this);
                        this.prefetchPeople = prefetchedPeople;
                        return [2 /*return*/, prefetchedPeople];
                }
            });
        });
    };
    return CachingPeopleSearchClient;
}(PeopleSearchClient_1.default));
exports.CachingPeopleSearchClient = CachingPeopleSearchClient;
//# sourceMappingURL=CachingPeopleSearchClient.js.map