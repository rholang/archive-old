"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var uuid = tslib_1.__importStar(require("uuid"));
var mockData_1 = require("./mockData");
var utils_1 = require("../../utils");
function createCollectionItem(_a) {
    var _b = _a === void 0 ? {} : _a, name = _b.name, mimeType = _b.mimeType, collectionName = _b.collectionName, occurrenceKey = _b.occurrenceKey, _c = _b.blob, blob = _c === void 0 ? new Blob(['Hello World'], { type: 'text/plain' }) : _c, id = _b.id;
    var extension = mockData_1.getTextFileType();
    return {
        id: id || uuid.v4(),
        insertedAt: mockData_1.getPastDate().valueOf(),
        occurrenceKey: occurrenceKey || uuid.v4(),
        details: {
            name: name || mockData_1.getFakeFileName(extension),
            size: blob.size,
            mimeType: mimeType,
            processingStatus: 'succeeded',
            mediaType: 'image',
            artifacts: {},
            representations: {
                image: {},
            },
        },
        collectionName: collectionName || mockData_1.getHackerNoun(),
        blob: blob || utils_1.mapDataUriToBlob(mockData_1.fakeImage),
    };
}
exports.createCollectionItem = createCollectionItem;
//# sourceMappingURL=collection-item.js.map