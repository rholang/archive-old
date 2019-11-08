"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function error(message, _input, line, column) {
    throw createError({
        message: message,
        line: line,
        column: column,
    });
}
exports.error = error;
function createError(props) {
    var err = Object.create(SyntaxError.prototype);
    Object.assign(err, props, {
        name: 'SyntaxError',
    });
    return err;
}
//# sourceMappingURL=error.js.map