"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var media_client_1 = require("@atlaskit/media-client");
exports.getIdentifierCollection = function (identifier, defaultCollectionName) {
    return media_client_1.isFileIdentifier(identifier)
        ? identifier.collectionName || defaultCollectionName
        : undefined;
};
//# sourceMappingURL=getIdentifierCollection.js.map