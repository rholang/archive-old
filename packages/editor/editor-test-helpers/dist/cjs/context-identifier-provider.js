"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function storyContextIdentifierProviderFactory(config) {
    if (config === void 0) { config = {
        objectId: 'DUMMY-OBJECT-ID',
        containerId: 'DUMMY-CONTAINER-ID',
        childObjectId: 'DUMMY-CHILD-OBJECT-ID',
    }; }
    return Promise.resolve({
        objectId: config.objectId,
        containerId: config.containerId,
        childObjectId: config.childObjectId,
    });
}
exports.storyContextIdentifierProviderFactory = storyContextIdentifierProviderFactory;
//# sourceMappingURL=context-identifier-provider.js.map