"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var searchGiphy_1 = require("../actions/searchGiphy");
exports.default = (function (fetcher) { return function (store) { return function (next) { return function (action) {
    if (searchGiphy_1.isSearchGiphyAction(action)) {
        var query = action.query, shouldAppendResults = action.shouldAppendResults;
        var imageCardModels = store.getState().giphy.imageCardModels;
        var offset = shouldAppendResults ? imageCardModels.length + 1 : undefined;
        exports.fetchGifs(fetcher, store, { query: query, offset: offset, shouldAppendResults: shouldAppendResults });
    }
    return next(action);
}; }; }; });
exports.fetchGifs = function (fetcher, store, params) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var query, offset, shouldAppendResults, _a, cardModels, totalResultCount, _b, e_1;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                query = params.query, offset = params.offset, shouldAppendResults = params.shouldAppendResults;
                _c.label = 1;
            case 1:
                _c.trys.push([1, 6, , 7]);
                if (!(query.length > 0)) return [3 /*break*/, 3];
                return [4 /*yield*/, fetcher.fetchGifsRelevantToSearch(query, offset)];
            case 2:
                _b = _c.sent();
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, fetcher.fetchTrendingGifs(offset)];
            case 4:
                _b = _c.sent();
                _c.label = 5;
            case 5:
                _a = _b, cardModels = _a.cardModels, totalResultCount = _a.totalResultCount;
                store.dispatch(searchGiphy_1.searchGiphyFulfilled(cardModels, totalResultCount, shouldAppendResults));
                return [3 /*break*/, 7];
            case 6:
                e_1 = _c.sent();
                store.dispatch(searchGiphy_1.searchGiphyFailed());
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=searchGiphy.js.map