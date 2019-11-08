"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var table = function (node, schema) {
    var result = [];
    node.forEach(function (n) {
        result.push(tableRow(n, schema));
    });
    return result.join('\n');
};
var tableRow = function (node, schema) {
    var result = [];
    var separator = '|';
    node.forEach(function (n) {
        result.push(tableCell(n, schema));
    });
    return "" + separator + result.join("" + separator) + separator;
};
var tableCell = function (node, schema) {
    var result = [];
    node.forEach(function (n) {
        result.push(_1.reduce(n, schema));
    });
    return result.join('\n');
};
exports.default = table;
//# sourceMappingURL=table.js.map