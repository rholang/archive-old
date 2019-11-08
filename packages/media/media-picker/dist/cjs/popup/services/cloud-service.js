"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// We still need postis here to communicate with the "link-account-handler" iframe
var postis_1 = tslib_1.__importDefault(require("postis"));
var v4_1 = tslib_1.__importDefault(require("uuid/v4"));
var media_client_1 = require("@atlaskit/media-client");
var auth_1 = require("../domain/auth");
var fetcher_1 = require("../tools/fetcher/fetcher");
var CloudService = /** @class */ (function () {
    function CloudService(userAuthProvider) {
        this.userAuthProvider = userAuthProvider;
    }
    CloudService.prototype.startAuth = function (redirectUrl, serviceName) {
        var win = window.open('', '_blank');
        return this.userAuthProvider()
            .then(function (auth) {
            return new Promise(function (resolve) {
                var channelId = v4_1.default();
                var authParams = auth_1.mapAuthToQueryParameters(auth);
                var queryString = media_client_1.objectToQueryString(tslib_1.__assign(tslib_1.__assign({}, authParams), { redirectUrl: redirectUrl + "?channelId=" + channelId }));
                // Electron does not support location.assign so we must use the
                // string setter to assign a new location to the window
                win.location = fetcher_1.pickerUrl(auth.baseUrl) + "/service/" + serviceName + "?" + queryString;
                var channel = postis_1.default({
                    window: win,
                    scope: channelId,
                });
                channel.ready(function () {
                    channel.listen('auth-callback-received', function () {
                        // notify auth window to close itself
                        channel.send({ method: 'auth-callback-done', params: {} });
                        // unregister the channel listener
                        channel.destroy();
                        resolve();
                        // TODO: MSW-69 what happens if this times out?
                    });
                });
            });
        })
            .catch(function (e) {
            if (win) {
                win.close();
            }
            throw e;
        });
    };
    return CloudService;
}());
exports.CloudService = CloudService;
//# sourceMappingURL=cloud-service.js.map