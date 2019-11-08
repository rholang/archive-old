"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArtifactUrl = function (artifacts, prop) {
    var artifact = artifacts[prop];
    if (!artifact || !artifact.url) {
        return undefined;
    }
    return artifact.url;
};
//# sourceMappingURL=artifacts.js.map