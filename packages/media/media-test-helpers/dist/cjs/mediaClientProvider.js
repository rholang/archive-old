"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var media_client_1 = require("@atlaskit/media-client");
var authProvider_1 = require("./authProvider");
var collectionNames_1 = require("./collectionNames");
var mediaPickerAuthProvider_1 = require("./mediaPickerAuthProvider");
var userAuthProvider_1 = require("./userAuthProvider");
exports.defaultBaseUrl = 'https://dt-api.dev.atl-paas.net';
exports.defaultParams = {
    clientId: '5a9812fc-d029-4a39-8a46-d3cc36eed7ab',
    asapIssuer: 'micros/media-playground',
    baseUrl: exports.defaultBaseUrl,
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
exports.createStorybookMediaClient = function (authParameter) {
    if (authParameter === void 0) { authParameter = defaultAuthParameter; }
    return new media_client_1.MediaClient(exports.createStorybookMediaClientConfig(authParameter));
};
exports.createStorybookMediaClientConfig = function (authParameter) {
    if (authParameter === void 0) { authParameter = defaultAuthParameter; }
    var scopes = {
        'urn:filestore:file:*': ['read'],
        'urn:filestore:chunk:*': ['read'],
    };
    collectionNames_1.collectionNames.forEach(function (c) {
        scopes["urn:filestore:collection:" + c] = ['read', 'update'];
    });
    var isAsapEnvironment = authParameter.authType === 'asap';
    var authProvider = authProvider_1.StoryBookAuthProvider.create(isAsapEnvironment, scopes);
    return { authProvider: authProvider };
};
exports.createUploadMediaClient = function () {
    return new media_client_1.MediaClient(exports.createUploadMediaClientConfig());
};
exports.createUploadMediaClientConfig = function () { return ({
    authProvider: mediaPickerAuthProvider_1.mediaPickerAuthProvider('asap'),
    userAuthProvider: userAuthProvider_1.userAuthProvider,
}); };
//# sourceMappingURL=mediaClientProvider.js.map