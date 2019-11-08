import { isFileIdentifier } from '@atlaskit/media-client';
export var getIdentifierCollection = function (identifier, defaultCollectionName) {
    return isFileIdentifier(identifier)
        ? identifier.collectionName || defaultCollectionName
        : undefined;
};
//# sourceMappingURL=getIdentifierCollection.js.map