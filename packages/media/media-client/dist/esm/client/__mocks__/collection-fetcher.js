export var collectionCache = {};
var CollectionFetcher = /** @class */ (function () {
    function CollectionFetcher() {
        this.getItems = jest.fn();
        this.removeFile = jest.fn();
        this.loadNextPage = jest.fn();
    }
    return CollectionFetcher;
}());
export { CollectionFetcher };
//# sourceMappingURL=collection-fetcher.js.map