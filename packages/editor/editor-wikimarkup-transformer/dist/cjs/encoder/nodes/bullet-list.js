"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var listItem_1 = require("./listItem");
exports.bulletList = function (node) {
    var result = [];
    node.forEach(function (item) {
        result.push(listItem_1.listItem(item, '*'));
    });
    return result.join('\n');
};
//# sourceMappingURL=bullet-list.js.map