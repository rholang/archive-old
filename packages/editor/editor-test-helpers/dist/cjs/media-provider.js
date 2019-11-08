"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var media_test_helpers_1 = require("@atlaskit/media-test-helpers");
/**
 * Add "import * as mediaTestHelpers from '@atlaskit/media-test-helpers'"
 * at the beginning of your file and pass "mediaTestHelpers" into this function
 */
function storyMediaProviderFactory(mediaProviderFactoryConfig) {
    if (mediaProviderFactoryConfig === void 0) { mediaProviderFactoryConfig = {}; }
    var collectionName = mediaProviderFactoryConfig.collectionName, includeUploadMediaClientConfig = mediaProviderFactoryConfig.includeUploadMediaClientConfig, includeUserAuthProvider = mediaProviderFactoryConfig.includeUserAuthProvider, _a = mediaProviderFactoryConfig.useMediaPickerAuthProvider, useMediaPickerAuthProvider = _a === void 0 ? true : _a;
    var collection = collectionName || media_test_helpers_1.defaultCollectionName;
    var mediaClientConfig = {
        authProvider: useMediaPickerAuthProvider
            ? media_test_helpers_1.mediaPickerAuthProvider()
            : media_test_helpers_1.defaultMediaPickerAuthProvider,
        userAuthProvider: includeUserAuthProvider === false ? undefined : media_test_helpers_1.userAuthProvider,
        getAuthFromContext: media_test_helpers_1.getAuthFromContextProvider,
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
exports.storyMediaProviderFactory = storyMediaProviderFactory;
// This method returns an instance of MediaProvider ready to use in tests and side effect free
// We should migrate unit tests to this method and stop using storyMediaProviderFactory
exports.fakeMediaProvider = function (mediaProviderFactoryConfig) {
    if (mediaProviderFactoryConfig === void 0) { mediaProviderFactoryConfig = {}; }
    var collectionName = mediaProviderFactoryConfig.collectionName;
    var collection = collectionName || media_test_helpers_1.defaultCollectionName;
    var mediaClientConfig = media_test_helpers_1.fakeMediaClient().config;
    return Promise.resolve({
        featureFlags: {},
        uploadParams: { collection: collection },
        viewMediaClientConfig: mediaClientConfig,
        uploadMediaClientConfig: mediaClientConfig,
    });
};
function fileToBase64(blob) {
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
exports.fileToBase64 = fileToBase64;
function isImage(type) {
    return ['image/jpeg', 'image/png'].indexOf(type) > -1;
}
exports.isImage = isImage;
//# sourceMappingURL=media-provider.js.map