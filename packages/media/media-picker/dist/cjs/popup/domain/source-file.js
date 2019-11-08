"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var media_core_1 = require("@atlaskit/media-core");
function mapAuthToSourceFileOwner(auth) {
    if (media_core_1.isClientBasedAuth(auth)) {
        return {
            id: auth.clientId,
            token: auth.token,
            baseUrl: auth.baseUrl,
        };
    }
    else {
        return auth;
    }
}
exports.mapAuthToSourceFileOwner = mapAuthToSourceFileOwner;
//# sourceMappingURL=source-file.js.map