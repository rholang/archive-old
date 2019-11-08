"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var traverse_1 = require("./traverse");
function reduce(adf, callback, initial) {
    var result = initial;
    traverse_1.traverse(adf, {
        any: function (node) {
            result = callback(result, node);
        },
    });
    return result;
}
exports.reduce = reduce;
//# sourceMappingURL=reduce.js.map