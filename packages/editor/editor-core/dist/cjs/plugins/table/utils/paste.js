"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_model_1 = require("prosemirror-model");
var prosemirror_utils_1 = require("prosemirror-utils");
var slice_1 = require("../../../utils/slice");
// lifts up the content of each cell, returning an array of nodes
exports.unwrapContentFromTable = function (maybeTable) {
    var schema = maybeTable.type.schema;
    if (maybeTable.type === schema.nodes.table) {
        var content_1 = [];
        var _a = schema.nodes, tableCell_1 = _a.tableCell, tableHeader_1 = _a.tableHeader;
        maybeTable.descendants(function (maybeCell) {
            if (maybeCell.type === tableCell_1 || maybeCell.type === tableHeader_1) {
                content_1.push.apply(content_1, tslib_1.__spread(prosemirror_utils_1.flatten(maybeCell, false).map(function (child) { return child.node; })));
            }
            return true;
        });
        return content_1;
    }
    return maybeTable;
};
exports.removeTableFromFirstChild = function (node, i) {
    return i === 0 ? exports.unwrapContentFromTable(node) : node;
};
exports.removeTableFromLastChild = function (node, i, fragment) {
    return i === fragment.childCount - 1 ? exports.unwrapContentFromTable(node) : node;
};
/**
 * When we copy from a table cell with a hardBreak at the end,
 * the slice generated will come with a hardBreak outside of the table.
 * This code will look for that pattern and fix it.
 */
exports.transformSliceToFixHardBreakProblemOnCopyFromCell = function (slice, schema) {
    var _a = schema.nodes, paragraph = _a.paragraph, table = _a.table, hardBreak = _a.hardBreak;
    var emptyParagraphNode = paragraph.createAndFill();
    var hardBreakNode = hardBreak.createAndFill();
    var paragraphNodeSize = emptyParagraphNode
        ? emptyParagraphNode.nodeSize
        : 0;
    var hardBreakNodeSize = hardBreakNode ? hardBreakNode.nodeSize : 0;
    var paragraphWithHardBreakSize = paragraphNodeSize + hardBreakNodeSize;
    if (slice.content.childCount === 2 &&
        slice.content.firstChild &&
        slice.content.lastChild &&
        slice.content.firstChild.type === table &&
        slice.content.lastChild.type === paragraph &&
        slice.content.lastChild.nodeSize === paragraphWithHardBreakSize) {
        var nodes = exports.unwrapContentFromTable(slice.content.firstChild);
        if (nodes instanceof Array) {
            return new prosemirror_model_1.Slice(prosemirror_model_1.Fragment.from(
            // keep only the content and discard the hardBreak
            nodes[0]), slice.openStart, slice.openEnd);
        }
    }
    return slice;
};
exports.transformSliceToRemoveOpenTable = function (slice, schema) {
    // we're removing the table, tableRow and tableCell reducing the open depth by 3
    var depthDecrement = 3;
    // Case 1: A slice entirely within a single CELL
    if (
    // starts and ends inside of a cell
    slice.openStart >= 4 &&
        slice.openEnd >= 4 &&
        // slice is a table node
        slice.content.childCount === 1 &&
        slice.content.firstChild.type === schema.nodes.table) {
        return new prosemirror_model_1.Slice(slice_1.flatmap(slice.content, exports.unwrapContentFromTable), slice.openStart - depthDecrement, slice.openEnd - depthDecrement);
    }
    // Case 2: A slice starting inside a table and finishing outside
    // slice.openStart can only be >= 4 if its a TextSelection. CellSelection would give openStart = 1
    if (slice.openStart >= 4 &&
        slice.content.firstChild.type === schema.nodes.table) {
        return new prosemirror_model_1.Slice(slice_1.flatmap(slice.content, exports.removeTableFromFirstChild), slice.openStart - depthDecrement, slice.openEnd);
    }
    // Case 3: A slice starting outside a table and finishing inside
    if (slice.openEnd >= 4 &&
        slice.content.lastChild.type === schema.nodes.table) {
        return new prosemirror_model_1.Slice(slice_1.flatmap(slice.content, exports.removeTableFromLastChild), slice.openStart, slice.openEnd - depthDecrement);
    }
    return slice;
};
exports.transformSliceToCorrectEmptyTableCells = function (slice, schema) {
    var _a = schema.nodes, tableCell = _a.tableCell, tableHeader = _a.tableHeader;
    return slice_1.mapSlice(slice, function (node) {
        if (node &&
            (node.type === tableCell || node.type === tableHeader) &&
            !node.content.childCount) {
            return node.type.createAndFill(node.attrs) || node;
        }
        return node;
    });
};
//# sourceMappingURL=paste.js.map