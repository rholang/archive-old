"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCredentials = function (secOptions) {
    return secOptions && secOptions.omitCredentials
        ? 'omit'
        : 'include';
};
//# sourceMappingURL=types.js.map