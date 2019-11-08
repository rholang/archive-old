"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var blockquote = function (node, schema) {
    var result = [];
    node.content.forEach(function (n) {
        result.push(_1.reduce(n, schema));
    });
    return "> " + result.join('');
};
exports.default = blockquote;
//# sourceMappingURL=blockquote.js.map