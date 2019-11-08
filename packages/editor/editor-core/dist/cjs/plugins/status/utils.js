"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_state_1 = require("prosemirror-state");
exports.mayGetStatusAtSelection = function (selection) {
    if (selection && selection instanceof prosemirror_state_1.NodeSelection) {
        var nodeSelection = selection;
        if (nodeSelection.node.type.name === 'status') {
            return selection.node.attrs || null;
        }
    }
    return null;
};
exports.mayGetStatusAtPos = function (pos, doc) {
    if (pos) {
        var node = doc.nodeAt(pos);
        if (node && node.type.name === 'status') {
            return node.attrs;
        }
    }
    return null;
};
exports.isEmptyStatus = function (node) {
    return node && ((node.text && node.text.trim().length === 0) || node.text === '');
};
exports.setSelectionNearPos = function (tr, pos) {
    return tr.setSelection(prosemirror_state_1.Selection.near(tr.doc.resolve(tr.mapping.map(pos))));
};
exports.setNodeSelectionNearPos = function (tr, pos) {
    return tr.setSelection(prosemirror_state_1.NodeSelection.create(tr.doc, tr.mapping.map(pos)));
};
//# sourceMappingURL=utils.js.map