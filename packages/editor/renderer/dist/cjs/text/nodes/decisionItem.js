"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var decisionItem = function (node, schema) {
    var result = [];
    var previousNodeType = '';
    node.forEach(function (n) {
        var text = _1.reduce(n, schema);
        if (previousNodeType === 'mention' && !text.startsWith(' ')) {
            result.push(" " + text);
        }
        else {
            result.push(text);
        }
        previousNodeType = n.type.name;
    });
    return "<> " + result.join('').trim();
};
exports.default = decisionItem;
//# sourceMappingURL=decisionItem.js.map