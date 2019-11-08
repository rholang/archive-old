"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = function (alias, description) {
    var stackTrace = Error().stack || '';
    var descr = description || '';
    var errorMessage = alias + ": " + descr + " \n " + stackTrace;
    // eslint-disable-next-line no-console
    console.error(errorMessage);
};
//# sourceMappingURL=handleError.js.map