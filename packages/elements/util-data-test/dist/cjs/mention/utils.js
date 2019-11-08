"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copy of definition from @atlaskit/mention
// NOTE: if this is changed in the original package, this must also be modified
var HttpError = /** @class */ (function () {
    function HttpError(statusCode, statusMessage) {
        this.statusCode = statusCode;
        this.message = statusMessage;
        this.name = 'HttpError';
        this.stack = new Error().stack;
    }
    return HttpError;
}());
exports.HttpError = HttpError;
//# sourceMappingURL=utils.js.map