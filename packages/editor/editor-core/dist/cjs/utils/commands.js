"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_state_1 = require("prosemirror-state");
var prosemirror_tables_1 = require("prosemirror-tables");
var transform_to_code_1 = require("../plugins/text-formatting/commands/transform-to-code");
var gap_cursor_1 = require("../plugins/gap-cursor");
var filter = function (predicates, cmd) {
    return function (state, dispatch, view) {
        if (!Array.isArray(predicates)) {
            predicates = [predicates];
        }
        if (predicates.some(function (pred) { return !pred(state, view); })) {
            return false;
        }
        return cmd(state, dispatch, view) || false;
    };
};
exports.filter = filter;
var isEmptySelectionAtStart = function (state) {
    var _a = state.selection, empty = _a.empty, $from = _a.$from;
    return (empty &&
        ($from.parentOffset === 0 || state.selection instanceof gap_cursor_1.GapCursorSelection));
};
exports.isEmptySelectionAtStart = isEmptySelectionAtStart;
var isFirstChildOfParent = function (state) {
    var $from = state.selection.$from;
    return $from.depth > 1
        ? (state.selection instanceof gap_cursor_1.GapCursorSelection &&
            $from.parentOffset === 0) ||
            $from.index($from.depth - 1) === 0
        : true;
};
exports.isFirstChildOfParent = isFirstChildOfParent;
/**
 * Creates a filter that checks if the node at a given number of parents above the current
 * selection is of the correct node type.
 * @param nodeType The node type to compare the nth parent against
 * @param depthAway How many levels above the current node to check against. 0 refers to
 * the current selection's parent, which will be the containing node when the selection
 * is usually inside the text content.
 */
var isNthParentOfType = function (nodeType, depthAway) {
    return function (state) {
        var $from = state.selection.$from;
        var parent = $from.node($from.depth - depthAway);
        return !!parent && parent.type === state.schema.nodes[nodeType];
    };
};
exports.isNthParentOfType = isNthParentOfType;
// https://github.com/ProseMirror/prosemirror-commands/blob/master/src/commands.js#L90
// Keep going left up the tree, without going across isolating boundaries, until we
// can go along the tree at that same level
//
// You can think of this as, if you could construct each document like we do in the tests,
// return the position of the first ) backwards from the current selection.
function findCutBefore($pos) {
    // parent is non-isolating, so we can look across this boundary
    if (!$pos.parent.type.spec.isolating) {
        // search up the tree from the pos's *parent*
        for (var i = $pos.depth - 1; i >= 0; i--) {
            // starting from the inner most node's parent, find out
            // if we're not its first child
            if ($pos.index(i) > 0) {
                return $pos.doc.resolve($pos.before(i + 1));
            }
            if ($pos.node(i).type.spec.isolating) {
                break;
            }
        }
    }
    return null;
}
exports.findCutBefore = findCutBefore;
var applyMarkOnRange = function (from, to, removeMark, mark, tr) {
    var schema = tr.doc.type.schema;
    var code = schema.marks.code;
    if (mark.type === code) {
        transform_to_code_1.transformSmartCharsMentionsAndEmojis(from, to, tr);
    }
    tr.doc.nodesBetween(tr.mapping.map(from), tr.mapping.map(to), function (node, pos) {
        if (!node.isText) {
            return true;
        }
        // This is an issue when the user selects some text.
        // We need to check if the current node position is less than the range selection from.
        // If it’s true, that means we should apply the mark using the range selection,
        // not the current node position.
        var nodeBetweenFrom = Math.max(pos, tr.mapping.map(from));
        var nodeBetweenTo = Math.min(pos + node.nodeSize, tr.mapping.map(to));
        if (removeMark) {
            tr.removeMark(nodeBetweenFrom, nodeBetweenTo, mark);
        }
        else {
            tr.addMark(nodeBetweenFrom, nodeBetweenTo, mark);
        }
        return true;
    });
    return tr;
};
exports.applyMarkOnRange = applyMarkOnRange;
var toggleMarkInRange = function (mark) { return function (state, dispatch) {
    var tr = state.tr;
    if (state.selection instanceof prosemirror_tables_1.CellSelection) {
        var markInRange_1 = false;
        var cells_1 = [];
        state.selection.forEachCell(function (cell, cellPos) {
            cells_1.push({ node: cell, pos: cellPos });
            var from = cellPos;
            var to = cellPos + cell.nodeSize;
            if (!markInRange_1) {
                // @ts-ignore
                markInRange_1 = state.doc.rangeHasMark(from, to, mark);
            }
        });
        for (var i = cells_1.length - 1; i >= 0; i--) {
            var cell = cells_1[i];
            var from = cell.pos;
            var to = from + cell.node.nodeSize;
            applyMarkOnRange(from, to, markInRange_1, mark, tr);
        }
    }
    else {
        var _a = state.selection, $from = _a.$from, $to = _a.$to;
        // @ts-ignore The type for `rangeHasMark` only accepts a `MarkType` as a third param,
        // Yet the internals use a method that exists on both MarkType and Mark (one checks attributes the other doesnt)
        // For example, with our subsup mark: We use the same mark with different attributes to convery
        // different formatting but when using `MarkType.isInSet(marks)` it returns true for both.
        // Calling `Mark.isInSet(marks)` compares attributes as well.
        var markInRange = state.doc.rangeHasMark($from.pos, $to.pos, mark);
        applyMarkOnRange($from.pos, $to.pos, markInRange, mark, tr);
    }
    if (tr.docChanged) {
        if (dispatch) {
            dispatch(tr);
        }
        return true;
    }
    return false;
}; };
/**
 * A wrapper over the default toggleMark, except when we have a selection
 * we only toggle marks on text nodes rather than inline nodes.
 * @param markType
 * @param attrs
 */
var toggleMark = function (markType, attrs) { return function (state, dispatch) {
    var mark = markType.create(attrs);
    // For cursor selections we can use the default behaviour.
    if (state.selection instanceof prosemirror_state_1.TextSelection && state.selection.$cursor) {
        var tr = state.tr;
        if (mark.isInSet(state.storedMarks || state.selection.$cursor.marks())) {
            tr.removeStoredMark(mark);
        }
        else {
            tr.addStoredMark(mark);
        }
        if (dispatch) {
            dispatch(tr);
            return true;
        }
        return false;
    }
    return toggleMarkInRange(mark)(state, dispatch);
}; };
exports.toggleMark = toggleMark;
//# sourceMappingURL=commands.js.map