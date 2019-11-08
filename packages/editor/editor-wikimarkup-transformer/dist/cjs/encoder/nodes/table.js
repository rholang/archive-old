"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var unknown_1 = require("./unknown");
exports.table = function (node) {
    try {
        var result_1 = [];
        node.forEach(function (n) {
            result_1.push(tableRow(n));
        });
        return result_1.join('\n');
    }
    catch (err) {
        return unknown_1.unknown(node);
    }
};
var tableRow = function (node) {
    var result = [];
    var separator = '|';
    node.forEach(function (n) {
        if (n.type.name === 'tableHeader') {
            separator = '||';
        }
        result.push(tableCell(n));
    });
    return "" + separator + result.join("" + separator) + separator;
};
var tableCell = function (node) {
    if (isAdvancedTableCell(node)) {
        // This is an advanced table
        throw new Error('Advanced feature of table is not supported');
    }
    var result = [];
    node.forEach(function (n) {
        result.push(__1.encode(n));
    });
    var output = result.join('\n');
    // Return single whitespace if content of cell is empty
    // to preserve correct empty cell rendering in wiki
    return output === '' ? ' ' : output;
};
var isAdvancedTableCell = function (node) {
    if (!node.attrs) {
        return false;
    }
    if (node.attrs.colspan && node.attrs.colspan !== 1) {
        return true;
    }
    if (node.attrs.rowspan && node.attrs.rowspan !== 1) {
        return true;
    }
    if (node.attrs.colwidth) {
        return true;
    }
    if (node.attrs.background) {
        return true;
    }
    return false;
};
//# sourceMappingURL=table.js.map