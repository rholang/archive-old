"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_utils_1 = require("prosemirror-utils");
var prosemirror_state_1 = require("prosemirror-state");
var analytics_1 = require("../../../analytics");
exports.insertBlock = function (state, nodeType, nodeName, start, end, attrs) {
    // To ensure that match is done after HardBreak.
    var _a = state.schema.nodes, hardBreak = _a.hardBreak, codeBlock = _a.codeBlock, listItem = _a.listItem;
    var $pos = state.doc.resolve(start);
    if ($pos.nodeAfter.type !== hardBreak) {
        return null;
    }
    // To ensure no nesting is done. (unless we're inserting a codeBlock inside lists)
    if ($pos.depth > 1 &&
        !(nodeType === codeBlock && prosemirror_utils_1.hasParentNodeOfType(listItem)(state.selection))) {
        return null;
    }
    // Track event
    analytics_1.analyticsService.trackEvent("atlassian.editor.format." + nodeName + ".autoformatting");
    // Split at the start of autoformatting and delete formatting characters.
    var tr = state.tr.delete(start, end).split(start);
    var currentNode = tr.doc.nodeAt(start + 1);
    // If node has more content split at the end of autoformatting.
    var nodeHasMoreContent = false;
    tr.doc.nodesBetween(start, start + currentNode.nodeSize, function (node, pos) {
        if (!nodeHasMoreContent && node.type === hardBreak) {
            nodeHasMoreContent = true;
            tr = tr.split(pos + 1).delete(pos, pos + 1);
        }
    });
    if (nodeHasMoreContent) {
        currentNode = tr.doc.nodeAt(start + 1);
    }
    // Create new node and fill with content of current node.
    var _b = state.schema.nodes, blockquote = _b.blockquote, paragraph = _b.paragraph;
    var content;
    var depth;
    if (nodeType === blockquote) {
        depth = 3;
        content = [paragraph.create({}, currentNode.content)];
    }
    else {
        depth = 2;
        content = currentNode.content;
    }
    var newNode = nodeType.create(attrs, content);
    // Add new node.
    tr = tr
        .setSelection(new prosemirror_state_1.NodeSelection(tr.doc.resolve(start + 1)))
        .replaceSelectionWith(newNode)
        .setSelection(new prosemirror_state_1.TextSelection(tr.doc.resolve(start + depth)));
    return tr;
};
//# sourceMappingURL=insert-block.js.map