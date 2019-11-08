"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_model_1 = require("prosemirror-model");
var utils_1 = require("../../../utils");
var media_common_1 = require("./media-common");
var prosemirror_utils_1 = require("prosemirror-utils");
/**
 * Check if current editor selections is a media group or not.
 * @param state Editor state
 */
function isSelectionMediaGroup(state) {
    var schema = state.schema;
    var selectionParent = state.selection.$anchor.node();
    return selectionParent && selectionParent.type === schema.nodes.mediaGroup;
}
/**
 * Check if grand parent accepts media group
 * @param state Editor state
 * @param mediaNodes Media nodes to be inserted
 */
function grandParentAcceptMediaGroup(state, mediaNodes) {
    var grandParent = state.selection.$from.node(-1);
    return (grandParent &&
        grandParent.type.validContent(prosemirror_model_1.Fragment.from(state.schema.nodes.mediaGroup.createChecked({}, mediaNodes))));
}
/**
 * Insert a paragraph after if reach the end of doc
 * and there is no media group in the front or selection is a non media block node
 * @param node Node at insertion point
 * @param state Editor state
 */
function shouldAppendParagraph(state, node) {
    var media = state.schema.nodes.media;
    var wasMediaNode = node && node.type === media;
    return ((utils_1.insideTableCell(state) ||
        utils_1.isInListItem(state) ||
        (utils_1.atTheEndOfDoc(state) &&
            (!media_common_1.posOfPrecedingMediaGroup(state) ||
                media_common_1.isSelectionNonMediaBlockNode(state)))) &&
        !wasMediaNode);
}
/**
 * Insert a media into an existing media group
 * or create a new media group to insert the new media.
 * @param view Editor view
 * @param mediaStates Media files to be added to the editor
 * @param collection Collection for the media to be added
 */
exports.insertMediaGroupNode = function (view, mediaStates, collection) {
    var state = view.state, dispatch = view.dispatch;
    var tr = state.tr, schema = state.schema;
    var _a = schema.nodes, media = _a.media, paragraph = _a.paragraph;
    // Do nothing if no media found
    if (!media || !mediaStates.length) {
        return;
    }
    var mediaNodes = createMediaFileNodes(mediaStates, collection, media);
    var mediaInsertPos = findMediaInsertPos(state);
    var resolvedInsertPos = tr.doc.resolve(mediaInsertPos);
    var parent = resolvedInsertPos.parent;
    var nodeAtInsertionPoint = tr.doc.nodeAt(mediaInsertPos);
    var shouldSplit = !isSelectionMediaGroup(state) &&
        grandParentAcceptMediaGroup(state, mediaNodes);
    var withParagraph = shouldAppendParagraph(state, nodeAtInsertionPoint);
    var content = parent.type === schema.nodes.mediaGroup
        ? mediaNodes // If parent is a mediaGroup do not wrap items again.
        : [schema.nodes.mediaGroup.createChecked({}, mediaNodes)];
    if (shouldSplit) {
        content = withParagraph ? content.concat(paragraph.create()) : content;
        // delete the selection or empty paragraph
        // delete the selection or empty paragraph
        var deleteRange = findDeleteRange(state);
        if (!deleteRange) {
            tr.insert(mediaInsertPos, content);
        }
        else if (mediaInsertPos <= deleteRange.start) {
            tr.deleteRange(deleteRange.start, deleteRange.end).insert(mediaInsertPos, content);
        }
        else {
            tr.insert(mediaInsertPos, content).deleteRange(deleteRange.start, deleteRange.end);
        }
        dispatch(tr);
        setSelectionAfterMediaInsertion(view);
        return;
    }
    // Don't append new paragraph when adding media to a existing mediaGroup
    if (withParagraph && parent.type !== schema.nodes.mediaGroup) {
        content.push(paragraph.create());
    }
    dispatch(prosemirror_utils_1.safeInsert(prosemirror_model_1.Fragment.fromArray(content), mediaInsertPos)(tr));
};
var createMediaFileNodes = function (mediaStates, collection, media) {
    var nodes = mediaStates.map(function (mediaState) {
        var id = mediaState.id;
        var node = media.create({
            id: id,
            type: 'file',
            collection: collection,
        });
        media_common_1.copyOptionalAttrsFromMediaState(mediaState, node);
        return node;
    });
    return nodes;
};
/**
 * Find root list node if exist from current selection
 * @param state Editor state
 */
var findRootListNode = function (state) {
    var _a = state.schema.nodes, bulletList = _a.bulletList, orderedList = _a.orderedList;
    return utils_1.findFarthestParentNode(function (node) { return node.type === bulletList || node.type === orderedList; })(state.selection);
};
/**
 * Return position of media to be inserted, if it is inside a list
 * @param content Content to be inserted
 * @param state Editor State
 */
exports.getPosInList = function (state) {
    var _a = state.schema.nodes, mediaGroup = _a.mediaGroup, listItem = _a.listItem;
    // 1. Check if I am inside a list.
    if (prosemirror_utils_1.hasParentNode(function (node) { return node.type === listItem; })(state.selection)) {
        // 2. Get end position of root list
        var rootListNode = findRootListNode(state);
        if (rootListNode) {
            var pos = rootListNode.pos + rootListNode.node.nodeSize;
            // 3. Fint the first location inside the media group
            var nextNode = state.doc.nodeAt(pos);
            if (nextNode && nextNode.type === mediaGroup) {
                return pos + 1;
            }
            return pos;
        }
    }
    return;
};
/**
 * Find insertion point,
 * If it is in a List it will return position to the next block,
 * If there are any media group close it will return this position
 * Otherwise, It will return the respective block given selection.
 * @param content Content to be inserted
 * @param state Editor state
 */
var findMediaInsertPos = function (state) {
    var _a = state.selection, $from = _a.$from, $to = _a.$to;
    // Check if selection is inside a list.
    var posInList = exports.getPosInList(state);
    if (posInList) {
        // If I have a position in lists, I should return, otherwise I am not inside a list
        return posInList;
    }
    var nearbyMediaGroupPos = media_common_1.posOfMediaGroupNearby(state);
    if (nearbyMediaGroupPos &&
        (!media_common_1.isSelectionNonMediaBlockNode(state) ||
            ($from.pos < nearbyMediaGroupPos && $to.pos < nearbyMediaGroupPos))) {
        return nearbyMediaGroupPos;
    }
    if (media_common_1.isSelectionNonMediaBlockNode(state)) {
        return $to.pos;
    }
    if (utils_1.atTheEndOfBlock(state)) {
        return $to.pos + 1;
    }
    if (utils_1.atTheBeginningOfBlock(state)) {
        return $from.pos - 1;
    }
    return $to.pos;
};
var findDeleteRange = function (state) {
    var _a = state.selection, $from = _a.$from, $to = _a.$to;
    if (media_common_1.posOfParentMediaGroup(state)) {
        return;
    }
    if (!media_common_1.isInsidePotentialEmptyParagraph(state) || media_common_1.posOfMediaGroupNearby(state)) {
        return range($from.pos, $to.pos);
    }
    return range(utils_1.startPositionOfParent($from) - 1, utils_1.endPositionOfParent($to));
};
var range = function (start, end) {
    if (end === void 0) { end = start; }
    return { start: start, end: end };
};
var setSelectionAfterMediaInsertion = function (view) {
    var state = view.state;
    var doc = state.doc;
    var mediaPos = media_common_1.posOfMediaGroupNearby(state);
    if (!mediaPos) {
        return;
    }
    var $mediaPos = doc.resolve(mediaPos);
    var endOfMediaGroup = utils_1.endPositionOfParent($mediaPos);
    if (endOfMediaGroup + 1 >= doc.nodeSize - 1) {
        // if nothing after the media group, fallback to select the newest uploaded media item
        utils_1.setNodeSelection(view, mediaPos);
    }
    else {
        utils_1.setTextSelection(view, endOfMediaGroup + 1);
    }
};
//# sourceMappingURL=media-files.js.map