import { CollectionFetcher } from '../collection-fetcher';
import { FileFetcherImpl } from '../file-fetcher';
var MediaClient = /** @class */ (function () {
    function MediaClient(config) {
        this.config = config;
        this.getImage = jest.fn();
        this.getImageUrl = jest.fn();
        this.getImageMetadata = jest.fn();
        this.collection = new CollectionFetcher({});
        this.file = new FileFetcherImpl({});
    }
    return MediaClient;
}());
export { MediaClient };
//# sourceMappingURL=index.js.map