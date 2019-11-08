"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var exenv = tslib_1.__importStar(require("exenv"));
var media_client_1 = require("@atlaskit/media-client");
exports.userAuthProviderBaseURL = 'https://dt-api.dev.atl-paas.net';
var userAuthProviderPromiseCache;
exports.userAuthProvider = function () {
    if (!exenv.canUseDOM) {
        return Promise.resolve({
            clientId: '',
            token: '',
            baseUrl: '',
        });
    }
    if (userAuthProviderPromiseCache) {
        return userAuthProviderPromiseCache;
    }
    var url = 'https://api-private.dev.atlassian.com/media-playground/api/token/user/impersonation';
    userAuthProviderPromiseCache = fetch(url, {
        method: 'GET',
        credentials: 'include',
    }).then(function (response) {
        // We leverage the fact, that our internal /toke/tenant API returns data in the same format as Auth
        return response.json();
    });
    return userAuthProviderPromiseCache;
};
exports.createUserMediaClient = function () {
    return new media_client_1.MediaClient({
        authProvider: exports.userAuthProvider,
    });
};
//# sourceMappingURL=userAuthProvider.js.map