"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var media_core_1 = require("@atlaskit/media-core");
function mapAuthToAuthHeaders(auth) {
    if (media_core_1.isClientBasedAuth(auth)) {
        return {
            'X-Client-Id': auth.clientId,
            Authorization: "Bearer " + auth.token,
        };
    }
    else {
        return {
            'X-Issuer': auth.asapIssuer,
            Authorization: "Bearer " + auth.token,
        };
    }
}
exports.mapAuthToAuthHeaders = mapAuthToAuthHeaders;
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
//# sourceMappingURL=auth.js.map