"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var traverse_1 = require("./traverse");
function filter(adf, callback) {
    var result = [];
    traverse_1.traverse(adf, {
        any: function (node) {
            if (callback(node)) {
                result.push(node);
            }
        },
    });
    return result;
}
exports.filter = filter;
//# sourceMappingURL=filter.js.map