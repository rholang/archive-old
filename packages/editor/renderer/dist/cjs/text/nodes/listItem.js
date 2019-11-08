"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var listItem = function (node, schema) {
    var result = [];
    node.forEach(function (n) {
        result.push(_1.reduce(n, schema));
    });
    return result.join('\n');
};
exports.default = listItem;
//# sourceMappingURL=listItem.js.map