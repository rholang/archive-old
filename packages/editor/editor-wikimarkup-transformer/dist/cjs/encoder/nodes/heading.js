"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inlines_1 = require("./inlines");
exports.heading = function (node) {
    var result = '';
    node.forEach(function (n) {
        result += inlines_1.inlines(n);
    });
    return "h" + node.attrs.level + ". " + result;
};
//# sourceMappingURL=heading.js.map