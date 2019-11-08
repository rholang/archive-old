"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.START_FILE_BROWSER = 'START_FILE_BROWSER';
function isStartFileBrowserAction(action) {
    return action.type === exports.START_FILE_BROWSER;
}
exports.isStartFileBrowserAction = isStartFileBrowserAction;
function startFileBrowser() {
    return {
        type: exports.START_FILE_BROWSER,
    };
}
exports.startFileBrowser = startFileBrowser;
//# sourceMappingURL=startFileBrowser.js.map