"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../utils");
var _1 = require("./");
var unknown = function (node, schema) {
    var result = [];
    node.forEach(function (n) {
        result.push(_1.reduce(n, schema));
    });
    if (result.length > 0) {
        return result.join('');
    }
    return utils_1.getText(node);
};
exports.default = unknown;
//# sourceMappingURL=unknown.js.map