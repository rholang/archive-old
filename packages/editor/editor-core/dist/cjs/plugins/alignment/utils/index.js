"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_utils_1 = require("prosemirror-utils");
var prosemirror_tables_1 = require("prosemirror-tables");
exports.getActiveAlignment = function (state) {
    if (state.selection instanceof prosemirror_tables_1.CellSelection) {
        var marks_1 = [];
        state.selection.forEachCell(function (cell) {
            var mark = cell.firstChild.marks.filter(function (mark) { return mark.type === state.schema.marks.alignment; })[0];
            marks_1.push(mark ? mark.attrs.align : 'start');
        });
        return marks_1.every(function (mark) { return mark === marks_1[0]; })
            ? marks_1[0]
            : 'start';
    }
    var node = prosemirror_utils_1.findParentNodeOfType([
        state.schema.nodes.paragraph,
        state.schema.nodes.heading,
    ])(state.selection);
    var getMark = node &&
        node.node.marks.filter(function (mark) { return mark.type === state.schema.marks.alignment; })[0];
    return (getMark && getMark.attrs.align) || 'start';
};
//# sourceMappingURL=index.js.map