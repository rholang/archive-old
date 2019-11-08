"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var orderedList = function (node, schema) {
    var result = [];
    node.forEach(function (n, _offset, index) {
        result.push(index + 1 + ". " + _1.reduce(n, schema));
    });
    return result.join('\n');
};
exports.default = orderedList;
//# sourceMappingURL=orderedList.js.map