"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mapDataUriToBlob(dataUri) {
    var arr = dataUri.split(',');
    var mime = arr[0].match(/:(.*?);/)[1];
    var bstr = atob(arr[1]);
    var n = bstr.length;
    var u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}
exports.mapDataUriToBlob = mapDataUriToBlob;
//# sourceMappingURL=index.js.map