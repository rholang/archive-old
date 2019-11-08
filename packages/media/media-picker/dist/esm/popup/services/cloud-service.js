import { __assign } from "tslib";
// We still need postis here to communicate with the "link-account-handler" iframe
import postis from 'postis';
import uuidV4 from 'uuid/v4';
import { objectToQueryString } from '@atlaskit/media-client';
import { mapAuthToQueryParameters } from '../domain/auth';
import { pickerUrl } from '../tools/fetcher/fetcher';
var CloudService = /** @class */ (function () {
    function CloudService(userAuthProvider) {
        this.userAuthProvider = userAuthProvider;
    }
    CloudService.prototype.startAuth = function (redirectUrl, serviceName) {
        var win = window.open('', '_blank');
        return this.userAuthProvider()
            .then(function (auth) {
            return new Promise(function (resolve) {
                var channelId = uuidV4();
                var authParams = mapAuthToQueryParameters(auth);
                var queryString = objectToQueryString(__assign(__assign({}, authParams), { redirectUrl: redirectUrl + "?channelId=" + channelId }));
                // Electron does not support location.assign so we must use the
                // string setter to assign a new location to the window
                win.location = pickerUrl(auth.baseUrl) + "/service/" + serviceName + "?" + queryString;
                var channel = postis({
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
export { CloudService };
//# sourceMappingURL=cloud-service.js.map