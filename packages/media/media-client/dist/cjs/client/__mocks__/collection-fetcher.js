"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionCache = {};
var CollectionFetcher = /** @class */ (function () {
    function CollectionFetcher() {
        this.getItems = jest.fn();
        this.removeFile = jest.fn();
        this.loadNextPage = jest.fn();
    }
    return CollectionFetcher;
}());
exports.CollectionFetcher = CollectionFetcher;
//# sourceMappingURL=collection-fetcher.js.map