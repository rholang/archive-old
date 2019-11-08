import { __awaiter, __extends, __generator } from "tslib";
import ConfluenceClientImpl from './ConfluenceClient';
import { SimpleCache } from '../util/simple-cache';
var CachingConfluenceClient = /** @class */ (function (_super) {
    __extends(CachingConfluenceClient, _super);
    function CachingConfluenceClient(url, prefetchedResults) {
        var _this = _super.call(this, url) || this;
        _this.itemCache = new SimpleCache(prefetchedResults &&
            prefetchedResults.then(function (result) { return result.objects.items; }), function () { return _super.prototype.getRecentItems.call(_this); });
        _this.spaceCache = new SimpleCache(prefetchedResults &&
            prefetchedResults.then(function (result) { return result.spaces.items; }), function () { return _super.prototype.getRecentSpaces.call(_this); });
        return _this;
    }
    CachingConfluenceClient.prototype.getRecentItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.itemCache.get()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CachingConfluenceClient.prototype.getRecentSpaces = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.spaceCache.get()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return CachingConfluenceClient;
}(ConfluenceClientImpl));
export default CachingConfluenceClient;
//# sourceMappingURL=CachingConfluenceClient.js.map