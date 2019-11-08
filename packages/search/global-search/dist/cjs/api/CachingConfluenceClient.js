"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ConfluenceClient_1 = tslib_1.__importDefault(require("./ConfluenceClient"));
var simple_cache_1 = require("../util/simple-cache");
var CachingConfluenceClient = /** @class */ (function (_super) {
    tslib_1.__extends(CachingConfluenceClient, _super);
    function CachingConfluenceClient(url, prefetchedResults) {
        var _this = _super.call(this, url) || this;
        _this.itemCache = new simple_cache_1.SimpleCache(prefetchedResults &&
            prefetchedResults.then(function (result) { return result.objects.items; }), function () { return _super.prototype.getRecentItems.call(_this); });
        _this.spaceCache = new simple_cache_1.SimpleCache(prefetchedResults &&
            prefetchedResults.then(function (result) { return result.spaces.items; }), function () { return _super.prototype.getRecentSpaces.call(_this); });
        return _this;
    }
    CachingConfluenceClient.prototype.getRecentItems = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.itemCache.get()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CachingConfluenceClient.prototype.getRecentSpaces = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.spaceCache.get()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return CachingConfluenceClient;
}(ConfluenceClient_1.default));
exports.default = CachingConfluenceClient;
//# sourceMappingURL=CachingConfluenceClient.js.map