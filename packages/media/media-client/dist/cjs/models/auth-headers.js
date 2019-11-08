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
//# sourceMappingURL=auth-headers.js.map