"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_utils_1 = require("prosemirror-utils");
var selection_1 = require("./selection");
var types_1 = require("../table/types");
var styles_1 = require("../table/ui/styles");
var utils_1 = require("../../utils");
// we don't show gap cursor for those nodes
var IGNORED_NODES = [
    'paragraph',
    'bulletList',
    'orderedList',
    'listItem',
    'taskItem',
    'decisionItem',
    'heading',
    'blockquote',
];
// Returns DOM node's vertical margin. It descents into the node and reads margins of nested DOM nodes
var getDomNodeVerticalMargin = function (ref, side) {
    var margin = 0;
    while (ref && ref.nodeType === 1) {
        var css = window.getComputedStyle(ref);
        var curMargin = parseInt(css["margin-" + side], 10);
        if (curMargin > margin) {
            margin = curMargin;
        }
        ref = ref[side === 'top' ? 'firstChild' : 'lastChild'];
    }
    return margin;
};
exports.isIgnored = function (node) {
    return !!node && IGNORED_NODES.indexOf(node.type.name) !== -1;
};
exports.isValidTargetNode = function (node) {
    return !!node && !exports.isIgnored(node);
};
function getMediaNearPos(doc, $pos, schema, dir) {
    if (dir === void 0) { dir = -1; }
    var $currentPos = $pos;
    var currentNode = null;
    var _a = schema.nodes, mediaSingle = _a.mediaSingle, media = _a.media, mediaGroup = _a.mediaGroup;
    do {
        $currentPos = doc.resolve(dir === -1 ? $currentPos.before() : $currentPos.after());
        if (!$currentPos) {
            return null;
        }
        currentNode =
            (dir === -1 ? $currentPos.nodeBefore : $currentPos.nodeAfter) ||
                $currentPos.parent;
        if (!currentNode || currentNode.type === schema.nodes.doc) {
            return null;
        }
        if (currentNode.type === mediaSingle ||
            currentNode.type === media ||
            currentNode.type === mediaGroup) {
            return currentNode;
        }
    } while ($currentPos.depth > 0);
    return null;
}
exports.getMediaNearPos = getMediaNearPos;
exports.isTextBlockNearPos = function (doc, schema, $pos, dir) {
    var $currentPos = $pos;
    var currentNode = null;
    while ($currentPos.depth > 0) {
        $currentPos = doc.resolve(dir === -1 ? $currentPos.before() : $currentPos.after());
        if (!$currentPos) {
            return false;
        }
        currentNode =
            (dir === -1 ? $currentPos.nodeBefore : $currentPos.nodeAfter) ||
                $currentPos.parent;
        if (!currentNode || currentNode.type === schema.nodes.doc) {
            return false;
        }
        if (currentNode.isTextblock) {
            return true;
        }
    }
    var childNode = currentNode;
    while (childNode && childNode.firstChild) {
        childNode = childNode.firstChild;
        if (childNode && childNode.isTextblock) {
            return true;
        }
    }
    return false;
};
var isMediaSingle = function (node) {
    if (!node) {
        return false;
    }
    var firstChild = node.firstChild;
    return (!!firstChild &&
        firstChild.nodeType === Node.ELEMENT_NODE &&
        firstChild.classList.contains('media-single'));
};
var isNodeViewWrapper = function (node) {
    if (!node) {
        return false;
    }
    return (!!node &&
        node.nodeType === Node.ELEMENT_NODE &&
        node.className.indexOf('-content-wrap') !== -1);
};
function getBreakoutModeFromTargetNode(node) {
    if (node.attrs.layout) {
        return node.attrs.layout;
    }
    if (node.marks && node.marks.length) {
        return (node.marks.find(function (mark) { return mark.type.name === 'breakout'; }) || {
            attrs: { mode: '' },
        }).attrs.mode;
    }
    return '';
}
// incapsulated this hack into a separate util function
exports.fixCursorAlignment = function (view) {
    var _a = view.state, selection = _a.selection, schema = _a.schema, domAtPos = view.domAtPos;
    if (!(selection instanceof selection_1.GapCursorSelection)) {
        return;
    }
    var side = selection.side, $from = selection.$from;
    // gap cursor is positioned relative to that node
    var targetNode = side === selection_1.Side.LEFT ? $from.nodeAfter : $from.nodeBefore;
    if (!targetNode) {
        return;
    }
    var targetNodePos = side === selection_1.Side.LEFT ? $from.pos + 1 : prosemirror_utils_1.findPositionOfNodeBefore(selection);
    if (targetNodePos === undefined) {
        return;
    }
    var targetNodeRef = prosemirror_utils_1.findDomRefAtPos(targetNodePos, domAtPos.bind(view));
    var gapCursorRef = view.dom.querySelector('.ProseMirror-gapcursor span');
    if (!gapCursorRef) {
        return;
    }
    var gapCursorParentNodeRef = gapCursorRef.parentElement;
    if (!gapCursorParentNodeRef) {
        return;
    }
    var previousSibling = gapCursorParentNodeRef.previousSibling;
    var isTargetNodeMediaSingle = isMediaSingle(targetNodeRef);
    var isMediaWithWrapping = isTargetNodeMediaSingle &&
        /wrap-[right|left]/i.test(targetNode.attrs.layout);
    var prevNodeMarginBottom = getDomNodeVerticalMargin(previousSibling, 'bottom');
    var minHeight = 20;
    var height = 0;
    var width = 0;
    var marginTop = 0;
    var breakoutWidth = 0;
    var paddingLeft = 0;
    // gets width and height of the prevNode DOM element, or its nodeView wrapper DOM element
    do {
        if (!targetNodeRef) {
            break;
        }
        var isTargetNodeNodeViewWrapper = isNodeViewWrapper(targetNodeRef);
        var firstChild = targetNodeRef.firstElementChild;
        var css = window.getComputedStyle(isTargetNodeNodeViewWrapper && !isTargetNodeMediaSingle
            ? firstChild || targetNodeRef
            : targetNodeRef);
        var isInTableCell = !!targetNodeRef.parentElement &&
            /td|th/i.test(targetNodeRef.parentElement.nodeName);
        height = parseInt(css.height, 10);
        width = parseInt(css.width, 10);
        width += parseInt(css.paddingLeft, 10);
        width += parseInt(css.paddingRight, 10);
        height += parseInt(css.paddingTop, 10);
        height += parseInt(css.paddingBottom, 10);
        // padding is cumulative
        paddingLeft += parseInt(css.paddingLeft, 10);
        if (previousSibling || isMediaWithWrapping || isInTableCell) {
            var curNodeMarginTop = getDomNodeVerticalMargin(targetNodeRef, 'top');
            if (curNodeMarginTop > prevNodeMarginBottom) {
                marginTop = curNodeMarginTop - prevNodeMarginBottom;
            }
            if (isMediaWithWrapping) {
                marginTop = curNodeMarginTop;
            }
        }
        if (isTargetNodeNodeViewWrapper || isTargetNodeMediaSingle) {
            breakoutWidth = width;
        }
        if (targetNodeRef.parentElement &&
            targetNodeRef.parentElement.classList.contains('ProseMirror')) {
            break;
        }
        targetNodeRef = targetNodeRef.parentElement;
    } while (targetNodeRef && !targetNodeRef.contains(gapCursorRef));
    // height of the rule (<hr>) is 0, that's why we set minHeight
    if (height < minHeight) {
        height = minHeight;
        marginTop -= Math.round(minHeight / 2) - 1;
    }
    // breakout mode
    var breakoutMode = getBreakoutModeFromTargetNode(targetNode);
    var hasBreakoutEnable = /full-width|wide/i.test(breakoutMode);
    if (hasBreakoutEnable) {
        gapCursorRef.setAttribute('layout', breakoutMode);
    }
    // table nodeView margin fix
    if (targetNodeRef && targetNode.type === schema.nodes.table) {
        var tableNode = targetNodeRef.querySelector('table');
        if (!tableNode) {
            return;
        }
        var style = window.getComputedStyle(tableNode);
        var halfPlusButtonSize = styles_1.tableInsertColumnButtonSize / 2;
        marginTop = parseInt(style.marginTop, 10);
        paddingLeft =
            side === selection_1.Side.RIGHT
                ? hasBreakoutEnable
                    ? styles_1.tableInsertColumnButtonSize
                    : halfPlusButtonSize
                : 0;
        height = parseInt(style.height, 10);
        gapCursorRef.style.paddingLeft = paddingLeft + "px";
    }
    // mediaSingle with layout="wrap-left" or "wrap-right"
    if (isMediaWithWrapping) {
        gapCursorParentNodeRef.setAttribute('layout', targetNode.attrs.layout);
        if (targetNode.attrs.layout === 'wrap-right') {
            gapCursorRef.style.marginLeft = "-" + width + "px";
        }
    }
    gapCursorRef.style.height = height + "px";
    gapCursorRef.style.marginTop = marginTop + "px";
    gapCursorRef.style.width = (breakoutWidth || width) + "px";
};
exports.isIgnoredClick = function (elem) {
    if (elem.nodeName === 'BUTTON' || utils_1.closestElement(elem, 'button')) {
        return true;
    }
    // check if target node has a parent table node
    var tableWrap;
    var node = elem;
    while (node) {
        if (node.className &&
            (node.getAttribute('class') || '').indexOf(types_1.TableCssClassName.TABLE_CONTAINER) > -1) {
            tableWrap = node;
            break;
        }
        node = node.parentNode;
    }
    if (tableWrap) {
        var rowControls = tableWrap.querySelector("." + types_1.TableCssClassName.ROW_CONTROLS_WRAPPER);
        var isColumnControlsDecoration = elem &&
            elem.classList &&
            elem.classList.contains(types_1.TableCssClassName.COLUMN_CONTROLS_DECORATIONS);
        return ((rowControls && rowControls.contains(elem)) || isColumnControlsDecoration);
    }
    return false;
};
//# sourceMappingURL=utils.js.map