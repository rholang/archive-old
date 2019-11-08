"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var paragraph_1 = require("../nodes/paragraph");
function normalizePMNodes(nodes, schema) {
    return normalizeInlineNodes(normalizeMediaGroups(nodes, schema), schema);
}
exports.normalizePMNodes = normalizePMNodes;
function normalizeInlineNodes(nodes, schema) {
    var e_1, _a;
    var output = [];
    var inlineNodeBuffer = [];
    try {
        for (var nodes_1 = tslib_1.__values(nodes), nodes_1_1 = nodes_1.next(); !nodes_1_1.done; nodes_1_1 = nodes_1.next()) {
            var node = nodes_1_1.value;
            if (!node.isBlock) {
                inlineNodeBuffer.push(node);
                continue;
            }
            var trimedInlineNodes_1 = trimInlineNodes(inlineNodeBuffer);
            if (trimedInlineNodes_1.length > 0) {
                output.push.apply(output, tslib_1.__spread(paragraph_1.createParagraphNodeFromInlineNodes(trimedInlineNodes_1, schema)));
            }
            inlineNodeBuffer = []; // clear buffer
            output.push(node);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (nodes_1_1 && !nodes_1_1.done && (_a = nodes_1.return)) _a.call(nodes_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var trimedInlineNodes = trimInlineNodes(inlineNodeBuffer);
    if (trimedInlineNodes.length > 0) {
        output.push.apply(output, tslib_1.__spread(paragraph_1.createParagraphNodeFromInlineNodes(trimedInlineNodes, schema)));
    }
    if (output.length === 0) {
        return [paragraph_1.createEmptyParagraphNode(schema)];
    }
    return output;
}
/**
 * Normalize the list of the given nodes for media groups.
 * The rule is: if there are consecutive media group nodes (each with a single child media
 * node) separated by any space or a single newline, then merge them into one media group
 * with multiple child media nodes.
 * @param nodes list of nodes to normalize. Must not be null
 * @param schema
 */
function normalizeMediaGroups(nodes, schema) {
    var e_2, _a;
    var output = [];
    var mediaGroupBuffer = [];
    var separatorBuffer = [];
    try {
        for (var nodes_2 = tslib_1.__values(nodes), nodes_2_1 = nodes_2.next(); !nodes_2_1.done; nodes_2_1 = nodes_2.next()) {
            var n = nodes_2_1.value;
            if (n.type.name === 'mediaGroup' && n.childCount === 1) {
                mediaGroupBuffer.push(n);
                continue;
            }
            if (mediaGroupBuffer.length > 0) {
                if (isSignificantSeparatorNode(n, separatorBuffer)) {
                    output.push(createMergedMediaGroup(mediaGroupBuffer, schema));
                    output.push(n);
                    mediaGroupBuffer = [];
                    separatorBuffer = [];
                }
                else {
                    separatorBuffer.push(n);
                }
                continue;
            }
            output.push(n);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (nodes_2_1 && !nodes_2_1.done && (_a = nodes_2.return)) _a.call(nodes_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    if (mediaGroupBuffer.length > 0) {
        output.push(createMergedMediaGroup(mediaGroupBuffer, schema));
    }
    return output;
}
/**
 * Creates a single mediaGroup whose children are the single media elements from the given mediaGroupNodes.
 * @param mediaGroupNodes list of mediaGroups that have a single child each
 * @param schema the schema
 */
function createMergedMediaGroup(mediaGroupNodes, schema) {
    var mediaGroup = schema.nodes.mediaGroup;
    var mediaNodes = mediaGroupNodes.map(function (v) { return v.child(0); });
    return mediaGroup.createChecked({}, mediaNodes);
}
function isSignificantSeparatorNode(n, separatorBuffer) {
    return (isHardBreak(n, separatorBuffer) ||
        !isEmptyTextNode(n) ||
        isMediaGroupWithMultipleChildren(n));
}
/**
 * Existing media groups with more than one child is considered as a significant separator.
 */
function isMediaGroupWithMultipleChildren(n) {
    return n.type.name === 'mediaGroup' && n.childCount > 1;
}
/**
 * If the current node is a hard break, AND there's already at least
 * one hard break in the separator buffer, then we want to return true.
 * @param n the current node to examine
 * @param separatorBuffer the existing separator buffer.
 */
function isHardBreak(n, separatorBuffer) {
    return (n.type.name === 'hardBreak' &&
        separatorBuffer.map(function (v) { return v.type.name; }).indexOf('hardBreak') !== -1);
}
function isEmptyTextNode(n) {
    return n.textContent !== undefined && n.textContent.trim().length === 0;
}
/**
 * Remove leading and trailing hardBreak
 */
function trimInlineNodes(nodes) {
    var leadingNode = nodes.shift();
    while (leadingNode) {
        if (leadingNode.type.name !== 'hardBreak') {
            nodes.unshift(leadingNode);
            break;
        }
        leadingNode = nodes.shift();
    }
    var trailingNode = nodes.pop();
    while (trailingNode) {
        if (trailingNode.type.name !== 'hardBreak') {
            nodes.push(trailingNode);
            break;
        }
        trailingNode = nodes.pop();
    }
    return nodes;
}
function isNextLineEmpty(input) {
    // Line with only spaces is considered an empty line
    return input.trim().length === 0;
}
exports.isNextLineEmpty = isNextLineEmpty;
//# sourceMappingURL=normalize.js.map