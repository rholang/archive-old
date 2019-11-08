"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_keymap_1 = require("prosemirror-keymap");
var prosemirror_state_1 = require("prosemirror-state");
var prosemirror_utils_1 = require("prosemirror-utils");
var utils_1 = require("../../../utils");
var deleteCurrentItem = function ($from) { return function (tr) {
    return tr.delete($from.before($from.depth) - 1, $from.end($from.depth) + 1);
}; };
var setTextSelection = function (pos) { return function (tr) {
    var newSelection = prosemirror_state_1.Selection.findFrom(tr.doc.resolve(pos), -1, true);
    if (newSelection) {
        tr.setSelection(newSelection);
    }
    return tr;
}; };
function keymapPlugin(schema) {
    return prosemirror_keymap_1.keymap({
        Backspace: function (state, dispatch) {
            var $cursor = utils_1.getCursor(state.selection);
            var _a = state.schema.nodes, paragraph = _a.paragraph, codeBlock = _a.codeBlock, listItem = _a.listItem, table = _a.table, layoutColumn = _a.layoutColumn;
            if (!$cursor || $cursor.parent.type !== codeBlock) {
                return false;
            }
            if ($cursor.pos === 1 ||
                (prosemirror_utils_1.hasParentNodeOfType(listItem)(state.selection) &&
                    $cursor.parentOffset === 0)) {
                var node = prosemirror_utils_1.findParentNodeOfTypeClosestToPos($cursor, codeBlock);
                if (!node) {
                    return false;
                }
                dispatch(state.tr
                    .setNodeMarkup(node.pos, node.node.type, node.node.attrs, [])
                    .setBlockType($cursor.pos, $cursor.pos, paragraph));
                return true;
            }
            if (dispatch &&
                $cursor.node &&
                utils_1.isEmptyNode(schema)($cursor.node()) &&
                (prosemirror_utils_1.hasParentNodeOfType(layoutColumn)(state.selection) ||
                    prosemirror_utils_1.hasParentNodeOfType(table)(state.selection))) {
                var tr = state.tr;
                var insertPos = $cursor.pos;
                dispatch(utils_1.pipe(deleteCurrentItem($cursor), setTextSelection(insertPos))(tr).scrollIntoView());
                return true;
            }
            return false;
        },
    });
}
exports.keymapPlugin = keymapPlugin;
exports.default = keymapPlugin;
//# sourceMappingURL=keymaps.js.map