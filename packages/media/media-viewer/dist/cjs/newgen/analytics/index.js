"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var version_json_1 = require("../../version.json");
exports.channel = 'media';
exports.packageAttributes = {
    componentName: 'media-viewer',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
};
function fileStateToFileGasPayload(state) {
    var basePayload = {
        fileId: state.id,
    };
    switch (state.status) {
        case 'uploading':
        case 'failed-processing':
        case 'processing':
        case 'processed':
            return tslib_1.__assign(tslib_1.__assign({}, basePayload), { fileMediatype: state.mediaType, fileMimetype: state.mimeType, fileSize: state.size });
        case 'error':
            return basePayload;
    }
}
exports.fileStateToFileGasPayload = fileStateToFileGasPayload;
//# sourceMappingURL=index.js.map