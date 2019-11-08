import { isFileIdentifier, } from '@atlaskit/media-client';
export var toIdentifier = function (item, collectionName) {
    return {
        id: item.id,
        mediaItemType: 'file',
        occurrenceKey: item.occurrenceKey,
        collectionName: collectionName,
    };
};
// TODO MS-1752 - current implementation makes viewer navigation to misbehave
// if passed a file with the same id (with different occurrenceKeys) or with the same dataURI twice
export var getSelectedIndex = function (items, selectedItem) {
    return items.findIndex(function (item) {
        if (isFileIdentifier(item) && isFileIdentifier(selectedItem)) {
            return item.id === selectedItem.id;
        }
        if (!isFileIdentifier(item) && !isFileIdentifier(selectedItem)) {
            return item.dataURI === selectedItem.dataURI;
        }
        return false;
    });
};
//# sourceMappingURL=index.js.map