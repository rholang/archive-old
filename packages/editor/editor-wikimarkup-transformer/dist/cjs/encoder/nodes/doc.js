"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("../");
exports.doc = function (node) {
    var result = [];
    node.forEach(function (n) {
        result.push(__1.encode(n));
    });
    return result.join('\n\n');
};
//# sourceMappingURL=doc.js.map