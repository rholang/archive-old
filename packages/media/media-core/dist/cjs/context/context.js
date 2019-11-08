"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var media_client_1 = require("@atlaskit/media-client");
var ContextFactory = /** @class */ (function () {
    function ContextFactory() {
    }
    ContextFactory.create = function (config) {
        return new media_client_1.MediaClient(config);
    };
    return ContextFactory;
}());
exports.ContextFactory = ContextFactory;
//# sourceMappingURL=context.js.map