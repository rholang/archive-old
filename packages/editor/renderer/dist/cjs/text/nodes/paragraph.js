"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var paragraph = function (node, schema) {
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
    return result.join('').trim();
};
exports.default = paragraph;
//# sourceMappingURL=paragraph.js.map