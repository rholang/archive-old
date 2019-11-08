"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getExtensionRenderer(extensionHandler) {
    if (typeof extensionHandler === 'object') {
        return extensionHandler.render;
    }
    else {
        return extensionHandler;
    }
}
exports.getExtensionRenderer = getExtensionRenderer;
//# sourceMappingURL=extension-handler.js.map