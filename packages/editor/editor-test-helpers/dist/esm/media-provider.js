import { defaultCollectionName, userAuthProvider, mediaPickerAuthProvider, defaultMediaPickerAuthProvider, getAuthFromContextProvider, fakeMediaClient, } from '@atlaskit/media-test-helpers';
/**
 * Add "import * as mediaTestHelpers from '@atlaskit/media-test-helpers'"
 * at the beginning of your file and pass "mediaTestHelpers" into this function
 */
export function storyMediaProviderFactory(mediaProviderFactoryConfig) {
    if (mediaProviderFactoryConfig === void 0) { mediaProviderFactoryConfig = {}; }
    var collectionName = mediaProviderFactoryConfig.collectionName, includeUploadMediaClientConfig = mediaProviderFactoryConfig.includeUploadMediaClientConfig, includeUserAuthProvider = mediaProviderFactoryConfig.includeUserAuthProvider, _a = mediaProviderFactoryConfig.useMediaPickerAuthProvider, useMediaPickerAuthProvider = _a === void 0 ? true : _a;
    var collection = collectionName || defaultCollectionName;
    var mediaClientConfig = {
        authProvider: useMediaPickerAuthProvider
            ? mediaPickerAuthProvider()
            : defaultMediaPickerAuthProvider,
        userAuthProvider: includeUserAuthProvider === false ? undefined : userAuthProvider,
        getAuthFromContext: getAuthFromContextProvider,
    };
    // Feel free to up-comment this and farther lines to verify it works with old context stack.
    // const context: Context = ContextFactory.create(mediaClientConfig);
    return Promise.resolve({
        featureFlags: {},
        uploadParams: { collection: collection },
        viewMediaClientConfig: mediaClientConfig,
        uploadMediaClientConfig: includeUploadMediaClientConfig === false ? undefined : mediaClientConfig,
    });
}
// This method returns an instance of MediaProvider ready to use in tests and side effect free
// We should migrate unit tests to this method and stop using storyMediaProviderFactory
export var fakeMediaProvider = function (mediaProviderFactoryConfig) {
    if (mediaProviderFactoryConfig === void 0) { mediaProviderFactoryConfig = {}; }
    var collectionName = mediaProviderFactoryConfig.collectionName;
    var collection = collectionName || defaultCollectionName;
    var mediaClientConfig = fakeMediaClient().config;
    return Promise.resolve({
        featureFlags: {},
        uploadParams: { collection: collection },
        viewMediaClientConfig: mediaClientConfig,
        uploadMediaClientConfig: mediaClientConfig,
    });
};
export function fileToBase64(blob) {
    return new Promise(function (resolve, reject) {
        var reader = new window.FileReader();
        reader.onloadend = function () {
            resolve(reader.result);
        };
        reader.onabort = function () {
            reject('abort');
        };
        reader.onerror = function (err) {
            reject(err);
        };
        reader.readAsDataURL(blob);
    });
}
export function isImage(type) {
    return ['image/jpeg', 'image/png'].indexOf(type) > -1;
}
//# sourceMappingURL=media-provider.js.map