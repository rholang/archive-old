"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getMediaTypeFromMimeType_1 = require("./getMediaTypeFromMimeType");
exports.getMediaTypeFromUploadableFile = function (file) {
    if (file.content instanceof Blob) {
        var type = file.content.type;
        return getMediaTypeFromMimeType_1.getMediaTypeFromMimeType(type);
    }
    else {
        return 'unknown';
    }
};
//# sourceMappingURL=getMediaTypeFromUploadableFile.js.map