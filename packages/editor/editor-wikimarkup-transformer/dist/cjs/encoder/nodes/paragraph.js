"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inlines_1 = require("./inlines");
exports.paragraph = function (node) {
    var result = '';
    node.forEach(function (n) {
        result += inlines_1.inlines(n);
    });
    return result;
};
//# sourceMappingURL=paragraph.js.map