"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tableCell = function (attrs) { return function () {
    var content = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        content[_i] = arguments[_i];
    }
    return ({
        type: 'tableCell',
        attrs: attrs,
        content: content,
    });
}; };
//# sourceMappingURL=table-cell.js.map