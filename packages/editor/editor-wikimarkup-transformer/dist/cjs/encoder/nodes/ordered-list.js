"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var listItem_1 = require("./listItem");
exports.orderedList = function (node) {
    var result = [];
    node.forEach(function (item) {
        result.push(listItem_1.listItem(item, '#'));
    });
    return result.join('\n');
};
//# sourceMappingURL=ordered-list.js.map