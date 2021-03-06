"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_transform_1 = require("prosemirror-transform");
exports.isWrappingPossible = function (nodeType, state) {
    var _a = state.selection, $from = _a.$from, $to = _a.$to;
    var range = $from.blockRange($to);
    if (!range) {
        return false;
    }
    var wrap = prosemirror_transform_1.findWrapping(range, nodeType);
    if (!wrap) {
        return false;
    }
    return true;
};
// This will return (depth - 1) for root list parent of a list.
exports.getListLiftTarget = function (schema, resPos) {
    var target = resPos.depth;
    var _a = schema.nodes, bulletList = _a.bulletList, orderedList = _a.orderedList, listItem = _a.listItem;
    for (var i = resPos.depth; i > 0; i--) {
        var node = resPos.node(i);
        if (node.type === bulletList || node.type === orderedList) {
            target = i;
        }
        if (node.type !== bulletList &&
            node.type !== orderedList &&
            node.type !== listItem) {
            break;
        }
    }
    return target - 1;
};
//# sourceMappingURL=utils.js.map