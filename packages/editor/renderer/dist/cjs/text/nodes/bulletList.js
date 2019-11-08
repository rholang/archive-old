"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var bulletList = function (node, schema) {
    var result = [];
    node.forEach(function (n) {
        result.push("* " + _1.reduce(n, schema));
    });
    return result.join('\n');
};
exports.default = bulletList;
//# sourceMappingURL=bulletList.js.map