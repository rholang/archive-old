"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_commands_1 = require("prosemirror-commands");
var prosemirror_model_1 = require("prosemirror-model");
var prosemirror_state_1 = require("prosemirror-state");
var commands_1 = require("../../../commands");
var utils_1 = require("../../../utils");
var slice_1 = require("../../../utils/slice");
var dom_1 = require("../../../utils/dom");
exports.posOfMediaGroupNearby = function (state) {
    return (exports.posOfParentMediaGroup(state) ||
        posOfFollowingMediaGroup(state) ||
        exports.posOfPrecedingMediaGroup(state));
};
exports.isSelectionNonMediaBlockNode = function (state) {
    var node = state.selection.node;
    return node && node.type !== state.schema.nodes.media && node.isBlock;
};
exports.posOfPrecedingMediaGroup = function (state) {
    if (!utils_1.atTheBeginningOfBlock(state)) {
        return;
    }
    return posOfMediaGroupAbove(state, state.selection.$from);
};
var posOfFollowingMediaGroup = function (state) {
    if (!utils_1.atTheEndOfBlock(state)) {
        return;
    }
    return exports.posOfMediaGroupBelow(state, state.selection.$to);
};
var posOfMediaGroupAbove = function (state, $pos) {
    var adjacentPos;
    var adjacentNode;
    if (exports.isSelectionNonMediaBlockNode(state)) {
        adjacentPos = $pos.pos;
        adjacentNode = $pos.nodeBefore;
    }
    else {
        adjacentPos = utils_1.startPositionOfParent($pos) - 1;
        adjacentNode = state.doc.resolve(adjacentPos).nodeBefore;
    }
    if (adjacentNode && adjacentNode.type === state.schema.nodes.mediaGroup) {
        return adjacentPos - adjacentNode.nodeSize + 1;
    }
    return;
};
/**
 * Determine whether the cursor is inside empty paragraph
 * or the selection is the entire paragraph
 */
exports.isInsidePotentialEmptyParagraph = function (state) {
    var $from = state.selection.$from;
    return ($from.parent.type === state.schema.nodes.paragraph &&
        utils_1.atTheBeginningOfBlock(state) &&
        utils_1.atTheEndOfBlock(state));
};
exports.posOfMediaGroupBelow = function (state, $pos, prepend) {
    if (prepend === void 0) { prepend = true; }
    var adjacentPos;
    var adjacentNode;
    if (exports.isSelectionNonMediaBlockNode(state)) {
        adjacentPos = $pos.pos;
        adjacentNode = $pos.nodeAfter;
    }
    else {
        adjacentPos = utils_1.endPositionOfParent($pos);
        adjacentNode = state.doc.nodeAt(adjacentPos);
    }
    if (adjacentNode && adjacentNode.type === state.schema.nodes.mediaGroup) {
        return prepend ? adjacentPos + 1 : adjacentPos + adjacentNode.nodeSize - 1;
    }
    return;
};
exports.posOfParentMediaGroup = function (state, $pos, prepend) {
    if (prepend === void 0) { prepend = false; }
    var $from = state.selection.$from;
    $pos = $pos || $from;
    if ($pos.parent.type === state.schema.nodes.mediaGroup) {
        return prepend
            ? utils_1.startPositionOfParent($pos)
            : utils_1.endPositionOfParent($pos) - 1;
    }
    return;
};
/**
 * The function will return the position after current selection where mediaGroup can be inserted.
 */
function endPositionForMedia(state, resolvedPos) {
    var mediaGroup = state.schema.nodes.mediaGroup;
    var i = resolvedPos.depth;
    for (; i > 1; i--) {
        var nodeType = resolvedPos.node(i).type;
        if (nodeType.validContent(prosemirror_model_1.Fragment.from(mediaGroup.create()))) {
            break;
        }
    }
    return resolvedPos.end(i) + 1;
}
exports.endPositionForMedia = endPositionForMedia;
exports.removeMediaNode = function (view, node, getPos) {
    var id = node.attrs.id;
    var state = view.state;
    var tr = state.tr, selection = state.selection, doc = state.doc;
    var currentMediaNodePos = getPos();
    tr.deleteRange(currentMediaNodePos, currentMediaNodePos + node.nodeSize);
    if (utils_1.isTemporary(id)) {
        tr.setMeta('addToHistory', false);
    }
    view.dispatch(tr);
    var $currentMediaNodePos = doc.resolve(currentMediaNodePos);
    var isLastMediaNode = $currentMediaNodePos.index() === $currentMediaNodePos.parent.childCount - 1;
    // If deleting a selected media node, we need to tell where the cursor to go next.
    // Prosemirror didn't gave us the behaviour of moving left if the media node is not the last one.
    // So we handle it ourselves.
    if (selection.from === currentMediaNodePos &&
        !isLastMediaNode &&
        !utils_1.atTheBeginningOfDoc(state)) {
        utils_1.moveLeft(view);
    }
};
exports.splitMediaGroup = function (view) {
    var selection = view.state.selection;
    // if selection is not a media node, do nothing.
    if (!(selection instanceof prosemirror_state_1.NodeSelection) ||
        selection.node.type !== view.state.schema.nodes.media) {
        return false;
    }
    prosemirror_commands_1.deleteSelection(view.state, view.dispatch);
    if (selection.$to.nodeAfter) {
        prosemirror_commands_1.splitBlock(view.state, view.dispatch);
        commands_1.createParagraphNear(false)(view.state, view.dispatch);
    }
    else {
        commands_1.createNewParagraphBelow(view.state, view.dispatch);
    }
    return true;
};
var isOptionalAttr = function (attr) {
    return attr.length > 1 && attr[0] === '_' && attr[1] === '_';
};
exports.copyOptionalAttrsFromMediaState = function (mediaState, node) {
    Object.keys(node.attrs)
        .filter(isOptionalAttr)
        .forEach(function (key) {
        var mediaStateKey = key.substring(2);
        var attrValue = mediaState[mediaStateKey];
        if (attrValue !== undefined) {
            node.attrs[key] = attrValue;
        }
    });
};
/**
 * Customer can define either deprecated Context or MediaClientConfig object directly. All internal
 * API are being switched to MediaClientConfig exclusively.
 * This utility helps to retrieve MediaClientConfig object from media Provider no matter what customer
 * has provided.
 */
exports.getViewMediaClientConfigFromMediaProvider = function (mediaProvider) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!mediaProvider.viewContext) return [3 /*break*/, 2];
                return [4 /*yield*/, mediaProvider.viewContext];
            case 1: return [2 /*return*/, (_a.sent()).config];
            case 2: 
            // We can use ! here since XOR would not allow MediaProvider object created without one of the properties.
            return [2 /*return*/, mediaProvider.viewMediaClientConfig];
        }
    });
}); };
/**
 * Customer can define either deprecated Context or MediaClientConfig object directly. All internal
 * API are being switched to MediaClientConfig exclusively.
 * This utility helps to retrieve MediaClientConfig object from media Provider no matter what customer
 * has provided.
 */
exports.getUploadMediaClientConfigFromMediaProvider = function (mediaProvider) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!mediaProvider.uploadContext) return [3 /*break*/, 2];
                return [4 /*yield*/, mediaProvider.uploadContext];
            case 1: return [2 /*return*/, (_a.sent()).config];
            case 2:
                if (mediaProvider.uploadMediaClientConfig) {
                    return [2 /*return*/, mediaProvider.uploadMediaClientConfig];
                }
                else {
                    return [2 /*return*/];
                }
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.transformSliceToCorrectMediaWrapper = function (slice, schema) {
    var _a = schema.nodes, mediaGroup = _a.mediaGroup, mediaSingle = _a.mediaSingle, media = _a.media;
    return slice_1.mapSlice(slice, function (node, parent) {
        if (!parent && node.type === media) {
            if (mediaSingle &&
                (utils_1.isImage(node.attrs.__fileMimeType) || node.attrs.type === 'external')) {
                return mediaSingle.createChecked({}, node);
            }
            else {
                return mediaGroup.createChecked({}, [node]);
            }
        }
        return node;
    });
};
/**
 * Check base styles to see if an element will be invisible when rendered in a document.
 * @param element
 */
var isElementInvisible = function (element) {
    return (element.style.opacity === '0' ||
        element.style.display === 'none' ||
        element.style.visibility === 'hidden');
};
var VALID_TAGS_CONTAINER = ['DIV', 'TD'];
function canContainImage(element) {
    if (!element) {
        return false;
    }
    return VALID_TAGS_CONTAINER.indexOf(element.tagName) !== -1;
}
/**
 * Given a html string, we attempt to hoist any nested `<img>` tags,
 * not wrapped by a `<div>` as ProseMirror no-op's on those scenarios.
 * @param html
 */
exports.unwrapNestedMediaElements = function (html) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, 'text/html');
    var wrapper = doc.body;
    // Remove Google Doc's wrapper <b> el
    var docsWrapper = wrapper.querySelector('b[id^="docs-internal-guid-"]');
    if (docsWrapper) {
        dom_1.unwrap(wrapper, docsWrapper);
    }
    var imageTags = wrapper.querySelectorAll('img');
    if (!imageTags.length) {
        return html;
    }
    imageTags.forEach(function (imageTag) {
        // Capture the immediate parent, we may remove the media from here later.
        var mediaParent = imageTag.parentElement;
        if (!mediaParent) {
            return;
        }
        // If either the parent or the image itself contains styles that would make
        // them invisible on copy, dont paste them.
        if (isElementInvisible(mediaParent) || isElementInvisible(imageTag)) {
            mediaParent.removeChild(imageTag);
            return;
        }
        // If its wrapped by a div we assume its safe to bypass.
        // ProseMirror should handle this case properly.
        if (mediaParent instanceof HTMLDivElement) {
            return;
        }
        // Find the top most element that the parent has a valid container for the image.
        // Stop just before found the wrapper
        var insertBeforeElement = dom_1.walkUpTreeUntil(mediaParent, function (element) {
            // If is at the top just use this element as reference
            if (element.parentElement === wrapper) {
                return true;
            }
            return canContainImage(element.parentElement);
        });
        // Here we try to insert the media right after its top most valid parent element
        // Unless its the last element in our structure then we will insert above it.
        if (insertBeforeElement && insertBeforeElement.parentElement) {
            // Insert as close as possible to the most closest valid element index in the tree.
            insertBeforeElement.parentElement.insertBefore(imageTag, insertBeforeElement.nextElementSibling || insertBeforeElement);
            // Attempt to clean up lines left behind by the image
            mediaParent.innerText = mediaParent.innerText.trim();
            // Walk up and delete empty elements left over after removing the image tag
            dom_1.removeNestedEmptyEls(mediaParent);
        }
    });
    // If last child is a hardbreak we don't want it
    if (wrapper.lastElementChild && wrapper.lastElementChild.tagName === 'BR') {
        wrapper.removeChild(wrapper.lastElementChild);
    }
    return wrapper.innerHTML;
};
//# sourceMappingURL=media-common.js.map