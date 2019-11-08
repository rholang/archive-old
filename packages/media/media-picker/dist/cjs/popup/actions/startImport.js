"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.START_IMPORT = 'START_IMPORT';
function isStartImportAction(action) {
    return action.type === exports.START_IMPORT;
}
exports.isStartImportAction = isStartImportAction;
function startImport() {
    return {
        type: exports.START_IMPORT,
    };
}
exports.startImport = startImport;
//# sourceMappingURL=startImport.js.map