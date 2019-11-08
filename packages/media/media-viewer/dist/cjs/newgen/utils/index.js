"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var media_client_1 = require("@atlaskit/media-client");
exports.toIdentifier = function (item, collectionName) {
    return {
        id: item.id,
        mediaItemType: 'file',
        occurrenceKey: item.occurrenceKey,
        collectionName: collectionName,
    };
};
// TODO MS-1752 - current implementation makes viewer navigation to misbehave
// if passed a file with the same id (with different occurrenceKeys) or with the same dataURI twice
exports.getSelectedIndex = function (items, selectedItem) {
    return items.findIndex(function (item) {
        if (media_client_1.isFileIdentifier(item) && media_client_1.isFileIdentifier(selectedItem)) {
            return item.id === selectedItem.id;
        }
        if (!media_client_1.isFileIdentifier(item) && !media_client_1.isFileIdentifier(selectedItem)) {
            return item.dataURI === selectedItem.dataURI;
        }
        return false;
    });
};
//# sourceMappingURL=index.js.map