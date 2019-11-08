"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function copyMediaFileForUpload(_a, fileId) {
    var name = _a.name, size = _a.size, creationDate = _a.creationDate, type = _a.type, occurrenceKey = _a.occurrenceKey;
    // We dont' use spread here because user upload events are not sanitized
    return {
        id: fileId,
        name: name,
        size: size,
        creationDate: creationDate,
        type: type,
        occurrenceKey: occurrenceKey,
    };
}
exports.copyMediaFileForUpload = copyMediaFileForUpload;
//# sourceMappingURL=file.js.map