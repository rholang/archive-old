"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var of_1 = require("rxjs/observable/of");
var media_client_1 = require("@atlaskit/media-client");
var jestHelpers_1 = require("./jestHelpers");
exports.getDefaultMediaClientConfig = function () { return ({
    authProvider: jest.fn().mockReturnValue(Promise.resolve({
        clientId: 'some-client-id',
        token: 'some-token',
        baseUrl: 'some-service-host',
    })),
}); };
exports.fakeMediaClient = function (config) {
    if (config === void 0) { config = exports.getDefaultMediaClientConfig(); }
    if (jest && jest.genMockFromModule) {
        var _a = jest.genMockFromModule('@atlaskit/media-client'), MockMediaClient = _a.MediaClient, FileFetcherImpl = _a.FileFetcherImpl, CollectionFetcher = _a.CollectionFetcher, MockMediaStore = _a.MediaStore;
        var mediaClient = new MockMediaClient();
        var fileFetcher = new FileFetcherImpl();
        var collectionFetcher = new CollectionFetcher();
        var mockMediaStore = new MockMediaStore({
            authProvider: config.authProvider,
        });
        mediaClient.file = fileFetcher;
        mediaClient.collection = collectionFetcher;
        mediaClient.config = config;
        mediaClient.mediaStore = mockMediaStore;
        mediaClient.mediaStore.getItems = jest
            .fn()
            .mockResolvedValue({ data: { items: [] } });
        jestHelpers_1.asMock(mediaClient.getImageUrl).mockResolvedValue('some-image-url');
        jestHelpers_1.asMock(mediaClient.getImage).mockImplementation(mockMediaStore.getImage);
        jestHelpers_1.asMock(mediaClient.collection.getItems).mockReturnValue(of_1.of([]));
        jestHelpers_1.asMock(mediaClient.file.copyFile).mockReturnValue({ id: 'copied-file-id' });
        jestHelpers_1.asMock(mediaClient.file.getCurrentState).mockReturnValue({ id: 'file-id' });
        return mediaClient;
    }
    else {
        return new media_client_1.MediaClient(config);
    }
};
//# sourceMappingURL=fakeMediaClient.js.map