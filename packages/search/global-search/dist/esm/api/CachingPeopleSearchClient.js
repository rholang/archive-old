import { __awaiter, __extends, __generator } from "tslib";
import PeopleSearchClientImpl from './PeopleSearchClient';
var CachingPeopleSearchClient = /** @class */ (function (_super) {
    __extends(CachingPeopleSearchClient, _super);
    function CachingPeopleSearchClient(url, cloudId) {
        return _super.call(this, url, cloudId) || this;
    }
    CachingPeopleSearchClient.prototype.getRecentPeople = function () {
        return __awaiter(this, void 0, void 0, function () {
            var prefetchedPeople;
            return __generator(this, function (_a) {
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
}(PeopleSearchClientImpl));
export { CachingPeopleSearchClient };
//# sourceMappingURL=CachingPeopleSearchClient.js.map