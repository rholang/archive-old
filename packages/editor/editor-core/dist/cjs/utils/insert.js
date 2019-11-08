"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_utils_1 = require("prosemirror-utils");
var prosemirror_model_1 = require("prosemirror-model");
var prosemirror_transform_1 = require("prosemirror-transform");
var document_1 = require("./document");
var gap_cursor_1 = require("../plugins/gap-cursor");
var LookDirection;
(function (LookDirection) {
    LookDirection["Before"] = "before";
    LookDirection["After"] = "after";
})(LookDirection = exports.LookDirection || (exports.LookDirection = {}));
var isLastChild = function ($pos, doc) {
    return doc.resolve($pos.after()).node().lastChild === $pos.node();
};
var isFirstChild = function ($pos, doc) {
    return doc.resolve($pos.before()).node().firstChild === $pos.node();
};
var nodeIsInsideAList = function (tr) {
    var nodes = tr.doc.type.schema.nodes;
    return prosemirror_utils_1.hasParentNodeOfType([nodes.orderedList, nodes.bulletList])(tr.selection);
};
var insertBeforeOrAfter = function (tr, lookDirection, $parentPos, $proposedPosition, content) {
    /**
     * This block caters for the first item in a parent with the cursor being at the very start
     * or the last item with the cursor being at the very end
     *
     * e.g.
     * ul
     *  li {<>}Scenario one
     *  li
     *  li Scenario two{<>}
     */
    if ((isFirstChild($proposedPosition, tr.doc) &&
        lookDirection === LookDirection.Before) ||
        (isLastChild($proposedPosition, tr.doc) &&
            lookDirection === LookDirection.After)) {
        return tr.insert($parentPos[lookDirection](), content);
    }
    return tr.insert($proposedPosition[lookDirection](), content);
};
// FIXME: A more sustainable and configurable way to choose when to split
var shouldSplit = function (nodeType, schemaNodes) {
    return [
        schemaNodes.bulletList,
        schemaNodes.orderedList,
        schemaNodes.panel,
    ].includes(nodeType);
};
exports.safeInsert = function (content, position) { return function (tr) {
    var nodes = tr.doc.type.schema.nodes;
    var whitelist = [nodes.rule, nodes.mediaSingle];
    // fallback if the node to insert is not in the whitelist, or if the insertion should happen within a list.
    if (content instanceof prosemirror_model_1.Fragment ||
        !whitelist.includes(content.type) ||
        nodeIsInsideAList(tr)) {
        return null;
    }
    // Check for selection
    if (!tr.selection.empty || prosemirror_utils_1.isNodeSelection(tr.selection)) {
        // NOT IMPLEMENTED
        return null;
    }
    var $from = tr.selection.$from;
    var $insertPos = position
        ? tr.doc.resolve(position)
        : prosemirror_utils_1.isNodeSelection(tr.selection)
            ? tr.doc.resolve($from.pos + 1)
            : $from;
    var lookDirection;
    var insertPosEnd = $insertPos.end();
    var insertPosStart = $insertPos.start();
    // When parent node is an empty paragraph,
    // check the empty paragraph is the first or last node of its parent.
    if (document_1.isEmptyParagraph($insertPos.parent)) {
        if (isLastChild($insertPos, tr.doc)) {
            lookDirection = LookDirection.After;
        }
        else if (isFirstChild($insertPos, tr.doc)) {
            lookDirection = LookDirection.Before;
        }
    }
    else {
        if ($insertPos.pos === insertPosEnd) {
            lookDirection = LookDirection.After;
        }
        else if ($insertPos.pos === insertPosStart) {
            lookDirection = LookDirection.Before;
        }
    }
    if (!lookDirection) {
        // fallback to consumer for now
        return null;
    }
    // Replace empty paragraph
    if (document_1.isEmptyParagraph($insertPos.parent) &&
        prosemirror_utils_1.canInsert(tr.doc.resolve($insertPos[lookDirection]()), content)) {
        return finaliseInsert(tr.replaceWith($insertPos.before(), $insertPos.after(), content), -1);
    }
    var $proposedPosition = $insertPos;
    while ($proposedPosition.depth > 0) {
        var $parentPos = tr.doc.resolve($proposedPosition[lookDirection]());
        var parentNode = $parentPos.node();
        // Insert at position (before or after target pos)
        if (prosemirror_utils_1.canInsert($proposedPosition, content)) {
            return finaliseInsert(tr.insert($proposedPosition.pos, content), content.nodeSize);
        }
        // If we can't insert, and we think we should split, we fallback to consumer for now
        if (shouldSplit(parentNode.type, tr.doc.type.schema.nodes)) {
            return finaliseInsert(insertBeforeOrAfter(tr, lookDirection, $parentPos, $proposedPosition, content), content.nodeSize);
        }
        // Can not insert into current parent, step up one parent
        $proposedPosition = $parentPos;
    }
    return finaliseInsert(tr.insert($proposedPosition.pos, content), content.nodeSize);
}; };
var finaliseInsert = function (tr, nodeLength) {
    var lastStep = tr.steps[tr.steps.length - 1];
    if (!(lastStep instanceof prosemirror_transform_1.ReplaceStep || lastStep instanceof prosemirror_transform_1.ReplaceAroundStep)) {
        return null;
    }
    // Place gap cursor after the newly inserted node
    // Properties `to` and `slice` are private attributes of ReplaceStep.
    // @ts-ignore
    var gapCursorPos = lastStep.to + lastStep.slice.openStart + nodeLength;
    return tr
        .setSelection(new gap_cursor_1.GapCursorSelection(tr.doc.resolve(gapCursorPos), gap_cursor_1.Side.RIGHT))
        .scrollIntoView();
};
//# sourceMappingURL=insert.js.map