"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var deep_equal_1 = tslib_1.__importDefault(require("deep-equal"));
exports.isFileIdentifier = function (identifier) {
    return identifier.mediaItemType === 'file';
};
exports.isExternalImageIdentifier = function (identifier) {
    return identifier.mediaItemType === 'external-image';
};
exports.isDifferentIdentifier = function (a, b) {
    if (exports.isFileIdentifier(a) && exports.isFileIdentifier(b)) {
        return (a.id !== b.id ||
            a.collectionName !== b.collectionName ||
            a.occurrenceKey !== b.occurrenceKey);
    }
    else {
        return !deep_equal_1.default(a, b);
    }
};
//# sourceMappingURL=identifier.js.map