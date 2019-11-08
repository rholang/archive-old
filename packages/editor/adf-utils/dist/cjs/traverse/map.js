"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var traverse_1 = require("./traverse");
function map(adf, callback) {
    var result = [];
    traverse_1.traverse(adf, {
        any: function (node) {
            result.push(callback(node));
        },
    });
    return result;
}
exports.map = map;
//# sourceMappingURL=map.js.map