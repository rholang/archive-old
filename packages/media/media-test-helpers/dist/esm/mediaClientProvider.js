import { MediaClient } from '@atlaskit/media-client';
import { StoryBookAuthProvider } from './authProvider';
import { collectionNames } from './collectionNames';
import { mediaPickerAuthProvider } from './mediaPickerAuthProvider';
import { userAuthProvider } from './userAuthProvider';
export var defaultBaseUrl = 'https://dt-api.dev.atl-paas.net';
export var defaultParams = {
    clientId: '5a9812fc-d029-4a39-8a46-d3cc36eed7ab',
    asapIssuer: 'micros/media-playground',
    baseUrl: defaultBaseUrl,
};
var defaultAuthParameter = {
    authType: 'client',
};
/**
 * Creates and returns `MediaClient` (from `media-client`) based on the data provided in parameter object.
 *
 * @param {AuthParameter} authParameter specifies serviceName and whatever auth should be done with clientId or asapIssuer
 * @returns {Context}
 */
export var createStorybookMediaClient = function (authParameter) {
    if (authParameter === void 0) { authParameter = defaultAuthParameter; }
    return new MediaClient(createStorybookMediaClientConfig(authParameter));
};
export var createStorybookMediaClientConfig = function (authParameter) {
    if (authParameter === void 0) { authParameter = defaultAuthParameter; }
    var scopes = {
        'urn:filestore:file:*': ['read'],
        'urn:filestore:chunk:*': ['read'],
    };
    collectionNames.forEach(function (c) {
        scopes["urn:filestore:collection:" + c] = ['read', 'update'];
    });
    var isAsapEnvironment = authParameter.authType === 'asap';
    var authProvider = StoryBookAuthProvider.create(isAsapEnvironment, scopes);
    return { authProvider: authProvider };
};
export var createUploadMediaClient = function () {
    return new MediaClient(createUploadMediaClientConfig());
};
export var createUploadMediaClientConfig = function () { return ({
    authProvider: mediaPickerAuthProvider('asap'),
    userAuthProvider: userAuthProvider,
}); };
//# sourceMappingURL=mediaClientProvider.js.map