"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
exports.blockquote = function (node) {
    var result = [];
    node.forEach(function (n) {
        result.push(__1.encode(n));
    });
    return "{quote}" + result.join('\n\n') + "{quote}";
};
//# sourceMappingURL=blockquote.js.map