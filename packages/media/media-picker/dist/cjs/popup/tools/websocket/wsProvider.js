"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var media_core_1 = require("@atlaskit/media-core");
var wsConnectionHolder_1 = require("./wsConnectionHolder");
// Helper class that provides a WsConnectionHolder instance for a given client.
var WsProvider = /** @class */ (function () {
    function WsProvider() {
        this.connectionHolders = {};
    }
    WsProvider.prototype.getWsConnectionHolder = function (auth) {
        var tag = WsProvider.mapAuthToTag(auth);
        var stored = this.connectionHolders[tag];
        if (stored) {
            return stored;
        }
        return this.createAndRemember(auth, tag);
    };
    WsProvider.prototype.createAndRemember = function (auth, tag) {
        var holder = new wsConnectionHolder_1.WsConnectionHolder(auth);
        this.connectionHolders[tag] = holder;
        return holder;
    };
    WsProvider.mapAuthToTag = function (auth) {
        if (media_core_1.isClientBasedAuth(auth)) {
            return auth.clientId + "-" + auth.token;
        }
        else {
            return auth.asapIssuer + "-" + auth.token;
        }
    };
    return WsProvider;
}());
exports.WsProvider = WsProvider;
//# sourceMappingURL=wsProvider.js.map