"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var media_core_1 = require("@atlaskit/media-core");
function mapAuthToQueryParameters(auth) {
    if (media_core_1.isClientBasedAuth(auth)) {
        return {
            client: auth.clientId,
            token: auth.token,
        };
    }
    else {
        return {
            issuer: auth.asapIssuer,
            token: auth.token,
        };
    }
}
exports.mapAuthToQueryParameters = mapAuthToQueryParameters;
//# sourceMappingURL=auth-query-parameters.js.map