import { of } from 'rxjs/observable/of';
import { MediaClient } from '@atlaskit/media-client';
import { asMock } from './jestHelpers';
export var getDefaultMediaClientConfig = function () { return ({
    authProvider: jest.fn().mockReturnValue(Promise.resolve({
        clientId: 'some-client-id',
        token: 'some-token',
        baseUrl: 'some-service-host',
    })),
}); };
export var fakeMediaClient = function (config) {
    if (config === void 0) { config = getDefaultMediaClientConfig(); }
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
        asMock(mediaClient.getImageUrl).mockResolvedValue('some-image-url');
        asMock(mediaClient.getImage).mockImplementation(mockMediaStore.getImage);
        asMock(mediaClient.collection.getItems).mockReturnValue(of([]));
        asMock(mediaClient.file.copyFile).mockReturnValue({ id: 'copied-file-id' });
        asMock(mediaClient.file.getCurrentState).mockReturnValue({ id: 'file-id' });
        return mediaClient;
    }
    else {
        return new MediaClient(config);
    }
};
//# sourceMappingURL=fakeMediaClient.js.map