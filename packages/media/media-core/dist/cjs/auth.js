"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isClientBasedAuth(auth) {
    return !!auth.clientId;
}
exports.isClientBasedAuth = isClientBasedAuth;
function isAsapBasedAuth(auth) {
    return !!auth.asapIssuer;
}
exports.isAsapBasedAuth = isAsapBasedAuth;
exports.authToOwner = function (auth) {
    if (isAsapBasedAuth(auth)) {
        return auth;
    }
    var clientAuth = {
        id: auth.clientId,
        baseUrl: auth.baseUrl,
        token: auth.token,
    };
    return clientAuth;
};
//# sourceMappingURL=auth.js.map