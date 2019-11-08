"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var collection_fetcher_1 = require("../collection-fetcher");
var file_fetcher_1 = require("../file-fetcher");
var MediaClient = /** @class */ (function () {
    function MediaClient(config) {
        this.config = config;
        this.getImage = jest.fn();
        this.getImageUrl = jest.fn();
        this.getImageMetadata = jest.fn();
        this.collection = new collection_fetcher_1.CollectionFetcher({});
        this.file = new file_fetcher_1.FileFetcherImpl({});
    }
    return MediaClient;
}());
exports.MediaClient = MediaClient;
//# sourceMappingURL=index.js.map