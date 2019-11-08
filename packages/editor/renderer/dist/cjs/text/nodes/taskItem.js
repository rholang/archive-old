"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var taskItem = function (node, schema) {
    var result = [];
    var previousNodeType = '';
    var state = node.attrs.state === 'DONE' ? '[x]' : '[]';
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
    return state + " " + result.join('').trim();
};
exports.default = taskItem;
//# sourceMappingURL=taskItem.js.map