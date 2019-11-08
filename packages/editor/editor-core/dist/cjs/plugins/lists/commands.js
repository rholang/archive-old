"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_model_1 = require("prosemirror-model");
var prosemirror_state_1 = require("prosemirror-state");
var prosemirror_transform_1 = require("prosemirror-transform");
var baseCommand = tslib_1.__importStar(require("prosemirror-commands"));
var baseListCommand = tslib_1.__importStar(require("prosemirror-schema-list"));
var prosemirror_utils_1 = require("prosemirror-utils");
var document_1 = require("../../utils/document");
var commands_1 = require("../../utils/commands");
var utils_1 = require("../../utils");
var transforms_1 = require("./transforms");
var gap_cursor_1 = require("../gap-cursor");
var analytics_1 = require("../analytics");
var maxIndentation = 5;
var deletePreviousEmptyListItem = function (state, dispatch) {
    var $from = state.selection.$from;
    var listItem = state.schema.nodes.listItem;
    var $cut = commands_1.findCutBefore($from);
    if (!$cut || !$cut.nodeBefore || !($cut.nodeBefore.type === listItem)) {
        return false;
    }
    var previousListItemEmpty = $cut.nodeBefore.childCount === 1 &&
        $cut.nodeBefore.firstChild.nodeSize <= 2;
    if (previousListItemEmpty) {
        var tr = state.tr;
        if (dispatch) {
            dispatch(tr
                .delete($cut.pos - $cut.nodeBefore.nodeSize, $from.pos)
                .scrollIntoView());
        }
        return true;
    }
    return false;
};
var joinToPreviousListItem = function (state, dispatch) {
    var $from = state.selection.$from;
    var _a = state.schema.nodes, paragraph = _a.paragraph, listItem = _a.listItem, codeBlock = _a.codeBlock, bulletList = _a.bulletList, orderedList = _a.orderedList;
    var isGapCursorShown = state.selection instanceof gap_cursor_1.GapCursorSelection;
    var $cutPos = isGapCursorShown ? state.doc.resolve($from.pos + 1) : $from;
    var $cut = commands_1.findCutBefore($cutPos);
    if (!$cut) {
        return false;
    }
    // see if the containing node is a list
    if ($cut.nodeBefore &&
        [bulletList, orderedList].indexOf($cut.nodeBefore.type) > -1) {
        // and the node after this is a paragraph or a codeBlock
        if ($cut.nodeAfter &&
            ($cut.nodeAfter.type === paragraph || $cut.nodeAfter.type === codeBlock)) {
            // find the nearest paragraph that precedes this node
            var $lastNode = $cut.doc.resolve($cut.pos - 1);
            while ($lastNode.parent.type !== paragraph) {
                $lastNode = state.doc.resolve($lastNode.pos - 1);
            }
            var tr = state.tr;
            if (isGapCursorShown) {
                var nodeBeforePos = prosemirror_utils_1.findPositionOfNodeBefore(tr.selection);
                if (typeof nodeBeforePos !== 'number') {
                    return false;
                }
                // append the codeblock to the list node
                var list = $cut.nodeBefore.copy($cut.nodeBefore.content.append(prosemirror_model_1.Fragment.from(listItem.createChecked({}, $cut.nodeAfter))));
                tr.replaceWith(nodeBeforePos, $from.pos + $cut.nodeAfter.nodeSize, list);
            }
            else {
                // take the text content of the paragraph and insert after the paragraph up until before the the cut
                tr = state.tr.step(new prosemirror_transform_1.ReplaceAroundStep($lastNode.pos, $cut.pos + $cut.nodeAfter.nodeSize, $cut.pos + 1, $cut.pos + $cut.nodeAfter.nodeSize - 1, state.tr.doc.slice($lastNode.pos, $cut.pos), 0, true));
            }
            // find out if there's now another list following and join them
            // as in, [list, p, list] => [list with p, list], and we want [joined list]
            var $postCut = tr.doc.resolve(tr.mapping.map($cut.pos + $cut.nodeAfter.nodeSize));
            if ($postCut.nodeBefore &&
                $postCut.nodeAfter &&
                $postCut.nodeBefore.type === $postCut.nodeAfter.type &&
                [bulletList, orderedList].indexOf($postCut.nodeBefore.type) > -1) {
                tr = tr.join($postCut.pos);
            }
            if (dispatch) {
                dispatch(tr.scrollIntoView());
            }
            return true;
        }
    }
    return false;
};
var isInsideListItem = function (state) {
    var $from = state.selection.$from;
    var _a = state.schema.nodes, listItem = _a.listItem, paragraph = _a.paragraph;
    if (state.selection instanceof gap_cursor_1.GapCursorSelection) {
        return $from.parent.type === listItem;
    }
    return (prosemirror_utils_1.hasParentNodeOfType(listItem)(state.selection) &&
        $from.parent.type === paragraph);
};
var canToJoinToPreviousListItem = function (state) {
    var $from = state.selection.$from;
    var _a = state.schema.nodes, bulletList = _a.bulletList, orderedList = _a.orderedList;
    var $before = state.doc.resolve($from.pos - 1);
    var nodeBefore = $before ? $before.nodeBefore : null;
    if (state.selection instanceof gap_cursor_1.GapCursorSelection) {
        nodeBefore = $from.nodeBefore;
    }
    return (!!nodeBefore && [bulletList, orderedList].indexOf(nodeBefore.type) > -1);
};
var canOutdent = function (state) {
    var parent = state.selection.$from.parent;
    var _a = state.schema.nodes, listItem = _a.listItem, paragraph = _a.paragraph;
    if (state.selection instanceof gap_cursor_1.GapCursorSelection) {
        return parent.type === listItem;
    }
    return (parent.type === paragraph && prosemirror_utils_1.hasParentNodeOfType(listItem)(state.selection));
};
exports.enterKeyCommand = function (state, dispatch) {
    var selection = state.selection;
    if (selection.empty) {
        var $from = selection.$from;
        var _a = state.schema.nodes, listItem = _a.listItem, codeBlock = _a.codeBlock;
        var node = $from.node($from.depth);
        var wrapper = $from.node($from.depth - 1);
        if (wrapper && wrapper.type === listItem) {
            /** Check if the wrapper has any visible content */
            var wrapperHasContent = document_1.hasVisibleContent(wrapper);
            if (document_1.isNodeEmpty(node) && !wrapperHasContent) {
                return outdentList()(state, dispatch);
            }
            else if (!prosemirror_utils_1.hasParentNodeOfType(codeBlock)(selection)) {
                return splitListItem(listItem)(state, dispatch);
            }
        }
    }
    return false;
};
exports.backspaceKeyCommand = baseCommand.chainCommands(
// if we're at the start of a list item, we need to either backspace
// directly to an empty list item above, or outdent this node
commands_1.filter([
    commands_1.isEmptySelectionAtStart,
    // list items might have multiple paragraphs; only do this at the first one
    commands_1.isFirstChildOfParent,
    canOutdent,
], baseCommand.chainCommands(deletePreviousEmptyListItem, outdentList())), 
// if we're just inside a paragraph node (or gapcursor is shown) and backspace, then try to join
// the text to the previous list item, if one exists
commands_1.filter([commands_1.isEmptySelectionAtStart, canToJoinToPreviousListItem], joinToPreviousListItem));
/**
 * Implemetation taken and modified for our needs from PM
 * @param itemType Node
 * Splits the list items, specific implementation take from PM
 */
function splitListItem(itemType) {
    return function (state, dispatch) {
        var ref = state.selection;
        var $from = ref.$from;
        var $to = ref.$to;
        var node = ref.node;
        if ((node && node.isBlock) || $from.depth < 2 || !$from.sameParent($to)) {
            return false;
        }
        var grandParent = $from.node(-1);
        if (grandParent.type !== itemType) {
            return false;
        }
        /** --> The following line changed from the original PM implementation to allow list additions with multiple paragraphs */
        if (grandParent.content.content.length <= 1 &&
            $from.parent.content.size === 0 &&
            !(grandParent.content.size === 0)) {
            // In an empty block. If this is a nested list, the wrapping
            // list item should be split. Otherwise, bail out and let next
            // command handle lifting.
            if ($from.depth === 2 ||
                $from.node(-3).type !== itemType ||
                $from.index(-2) !== $from.node(-2).childCount - 1) {
                return false;
            }
            if (dispatch) {
                var wrap = prosemirror_model_1.Fragment.empty;
                var keepItem = $from.index(-1) > 0;
                // Build a fragment containing empty versions of the structure
                // from the outer list item to the parent node of the cursor
                for (var d = $from.depth - (keepItem ? 1 : 2); d >= $from.depth - 3; d--) {
                    wrap = prosemirror_model_1.Fragment.from($from.node(d).copy(wrap));
                }
                // Add a second list item with an empty default start node
                wrap = wrap.append(prosemirror_model_1.Fragment.from(itemType.createAndFill()));
                var tr$1 = state.tr.replace($from.before(keepItem ? undefined : -1), $from.after(-3), new prosemirror_model_1.Slice(wrap, keepItem ? 3 : 2, 2));
                tr$1.setSelection(state.selection.constructor.near(tr$1.doc.resolve($from.pos + (keepItem ? 3 : 2))));
                dispatch(tr$1.scrollIntoView());
            }
            return true;
        }
        var nextType = $to.pos === $from.end()
            ? grandParent.contentMatchAt(0).defaultType
            : undefined;
        var tr = state.tr.delete($from.pos, $to.pos);
        var types = nextType && [undefined, { type: nextType }];
        if (dispatch) {
            dispatch(tr.split($from.pos, 2, types).scrollIntoView());
        }
        return true;
    };
}
/**
 * Merge closest bullet list blocks into one
 *
 * @param {NodeType} listItem
 * @param {NodeRange} range
 * @returns
 */
function mergeLists(listItem, range) {
    return function (command) {
        return function (state, dispatch) {
            return command(state, function (tr) {
                /* we now need to handle the case that we lifted a sublist out,
                 * and any listItems at the current level get shifted out to
                 * their own new list; e.g.:
                 *
                 * unorderedList
                 *  listItem(A)
                 *  listItem
                 *    unorderedList
                 *      listItem(B)
                 *  listItem(C)
                 *
                 * becomes, after unindenting the first, top level listItem, A:
                 *
                 * content of A
                 * unorderedList
                 *  listItem(B)
                 * unorderedList
                 *  listItem(C)
                 *
                 * so, we try to merge these two lists if they're of the same type, to give:
                 *
                 * content of A
                 * unorderedList
                 *  listItem(B)
                 *  listItem(C)
                 */
                var $start = state.doc.resolve(range.start);
                var $end = state.doc.resolve(range.end);
                var $join = tr.doc.resolve(tr.mapping.map(range.end - 1));
                if ($join.nodeBefore &&
                    $join.nodeAfter &&
                    $join.nodeBefore.type === $join.nodeAfter.type) {
                    if ($end.nodeAfter &&
                        $end.nodeAfter.type === listItem &&
                        $end.parent.type === $start.parent.type) {
                        tr.join($join.pos);
                    }
                }
                if (dispatch) {
                    dispatch(tr.scrollIntoView());
                }
            });
        };
    };
}
function outdentList() {
    return function (state, dispatch) {
        var listItem = state.schema.nodes.listItem;
        var _a = state.selection, $from = _a.$from, $to = _a.$to;
        if (isInsideListItem(state)) {
            // if we're backspacing at the start of a list item, unindent it
            // take the the range of nodes we might be lifting
            // the predicate is for when you're backspacing a top level list item:
            // we don't want to go up past the doc node, otherwise the range
            // to clear will include everything
            var range = $from.blockRange($to, function (node) { return node.childCount > 0 && node.firstChild.type === listItem; });
            if (!range) {
                return false;
            }
            var initialIndentationLevel = exports.numberNestedLists(state.selection.$from, state.schema.nodes);
            return utils_1.compose(analytics_1.withAnalytics({
                action: analytics_1.ACTION.FORMATTED,
                actionSubject: analytics_1.ACTION_SUBJECT.TEXT,
                actionSubjectId: analytics_1.ACTION_SUBJECT_ID.FORMAT_INDENT,
                eventType: analytics_1.EVENT_TYPE.TRACK,
                attributes: {
                    inputMethod: analytics_1.INPUT_METHOD.KEYBOARD,
                    previousIndentationLevel: initialIndentationLevel,
                    newIndentLevel: initialIndentationLevel - 1,
                    direction: analytics_1.INDENT_DIR.OUTDENT,
                    indentType: analytics_1.INDENT_TYPE.LIST,
                },
            }), // 3. Send analytics event
            mergeLists(listItem, range), // 2. Check if I need to merge nearest list
            baseListCommand.liftListItem)(listItem)(state, dispatch);
        }
        return false;
    };
}
exports.outdentList = outdentList;
/**
 * Check if we can sink the list.
 *
 * @param {number} initialIndentationLevel
 * @param {EditorState} state
 * @returns {boolean} - true if we can sink the list
 *                    - false if we reach the max indentation level
 */
function canSink(initialIndentationLevel, state) {
    /*
        - Keep going forward in document until indentation of the node is < than the initial
        - If indentation is EVER > max indentation, return true and don't sink the list
        */
    var currentIndentationLevel;
    var currentPos = state.tr.selection.$to.pos;
    do {
        var resolvedPos = state.doc.resolve(currentPos);
        currentIndentationLevel = exports.numberNestedLists(resolvedPos, state.schema.nodes);
        if (currentIndentationLevel > maxIndentation) {
            // Cancel sink list.
            // If current indentation less than the initial, it won't be
            // larger than the max, and the loop will terminate at end of this iteration
            return false;
        }
        currentPos++;
    } while (currentIndentationLevel >= initialIndentationLevel);
    return true;
}
function indentList() {
    return function (state, dispatch) {
        var listItem = state.schema.nodes.listItem;
        if (isInsideListItem(state)) {
            // Record initial list indentation
            var initialIndentationLevel = exports.numberNestedLists(state.selection.$from, state.schema.nodes);
            if (canSink(initialIndentationLevel, state)) {
                // Analytics command wrapper should be here because we need to get indentation level
                utils_1.compose(analytics_1.withAnalytics({
                    action: analytics_1.ACTION.FORMATTED,
                    actionSubject: analytics_1.ACTION_SUBJECT.TEXT,
                    actionSubjectId: analytics_1.ACTION_SUBJECT_ID.FORMAT_INDENT,
                    eventType: analytics_1.EVENT_TYPE.TRACK,
                    attributes: {
                        inputMethod: analytics_1.INPUT_METHOD.KEYBOARD,
                        previousIndentationLevel: initialIndentationLevel,
                        newIndentLevel: initialIndentationLevel + 1,
                        direction: analytics_1.INDENT_DIR.INDENT,
                        indentType: analytics_1.INDENT_TYPE.LIST,
                    },
                }), baseListCommand.sinkListItem)(listItem)(state, dispatch);
            }
            return true;
        }
        return false;
    };
}
exports.indentList = indentList;
function liftListItems() {
    return function (state, dispatch) {
        var tr = state.tr;
        var _a = state.selection, $from = _a.$from, $to = _a.$to;
        tr.doc.nodesBetween($from.pos, $to.pos, function (node, pos) {
            // Following condition will ensure that block types paragraph, heading, codeBlock, blockquote, panel are lifted.
            // isTextblock is true for paragraph, heading, codeBlock.
            if (node.isTextblock) {
                var sel = new prosemirror_state_1.NodeSelection(tr.doc.resolve(tr.mapping.map(pos)));
                var range = sel.$from.blockRange(sel.$to);
                if (!range || sel.$from.parent.type !== state.schema.nodes.listItem) {
                    return false;
                }
                var target = range && prosemirror_transform_1.liftTarget(range);
                if (target === undefined || target === null) {
                    return false;
                }
                tr.lift(range, target);
            }
            return;
        });
        if (dispatch) {
            dispatch(tr);
        }
        return true;
    };
}
exports.liftListItems = liftListItems;
/**
 * Sometimes a selection in the editor can be slightly offset, for example:
 * it's possible for a selection to start or end at an empty node at the very end of
 * a line. This isn't obvious by looking at the editor and it's likely not what the
 * user intended - so we need to adjust the selection a bit in scenarios like that.
 */
function adjustSelectionInList(doc, selection) {
    var $from = selection.$from, $to = selection.$to;
    var isSameLine = $from.pos === $to.pos;
    var startPos = $from.pos;
    var endPos = $to.pos;
    if (isSameLine && startPos === doc.nodeSize - 3) {
        // Line is empty, don't do anything
        return selection;
    }
    // Selection started at the very beginning of a line and therefor points to the previous line.
    if ($from.nodeBefore && !isSameLine) {
        startPos++;
        var node = doc.nodeAt(startPos);
        while (!node || (node && !node.isText)) {
            startPos++;
            node = doc.nodeAt(startPos);
        }
    }
    if (endPos === startPos) {
        return new prosemirror_state_1.TextSelection(doc.resolve(startPos));
    }
    return new prosemirror_state_1.TextSelection(doc.resolve(startPos), doc.resolve(endPos));
}
exports.adjustSelectionInList = adjustSelectionInList;
// Get the depth of the nearest ancestor list
exports.rootListDepth = function (pos, nodes) {
    var bulletList = nodes.bulletList, orderedList = nodes.orderedList, listItem = nodes.listItem;
    var depth;
    for (var i = pos.depth - 1; i > 0; i--) {
        var node = pos.node(i);
        if (node.type === bulletList || node.type === orderedList) {
            depth = i;
        }
        if (node.type !== bulletList &&
            node.type !== orderedList &&
            node.type !== listItem) {
            break;
        }
    }
    return depth;
};
// Returns the number of nested lists that are ancestors of the given selection
exports.numberNestedLists = function (resolvedPos, nodes) {
    var bulletList = nodes.bulletList, orderedList = nodes.orderedList;
    var count = 0;
    for (var i = resolvedPos.depth - 1; i > 0; i--) {
        var node = resolvedPos.node(i);
        if (node.type === bulletList || node.type === orderedList) {
            count += 1;
        }
    }
    return count;
};
exports.toggleList = function (state, dispatch, view, listType, inputMethod) {
    var selection = state.selection;
    var fromNode = selection.$from.node(selection.$from.depth - 2);
    var endNode = selection.$to.node(selection.$to.depth - 2);
    if (!fromNode ||
        fromNode.type.name !== listType ||
        (!endNode || endNode.type.name !== listType)) {
        return exports.toggleListCommandWithAnalytics(inputMethod, listType)(state, dispatch, view);
    }
    else {
        var depth = exports.rootListDepth(selection.$to, state.schema.nodes);
        var tr = transforms_1.liftFollowingList(state, selection.$to.pos, selection.$to.end(depth), depth || 0, state.tr);
        tr = transforms_1.liftSelectionList(state, tr);
        tr = analytics_1.addAnalytics(state, tr, {
            action: analytics_1.ACTION.FORMATTED,
            actionSubject: analytics_1.ACTION_SUBJECT.TEXT,
            actionSubjectId: listType === 'bulletList'
                ? analytics_1.ACTION_SUBJECT_ID.FORMAT_LIST_BULLET
                : analytics_1.ACTION_SUBJECT_ID.FORMAT_LIST_NUMBER,
            eventType: analytics_1.EVENT_TYPE.TRACK,
            attributes: {
                inputMethod: inputMethod,
            },
        });
        dispatch(tr);
        return true;
    }
};
/**
 * Check of is selection is inside a list of the specified type
 * @param state
 * @param listType
 */
function isInsideList(state, listType) {
    var $from = state.selection.$from;
    var parent = $from.node(-2);
    var grandgrandParent = $from.node(-3);
    return ((parent && parent.type === state.schema.nodes[listType]) ||
        (grandgrandParent && grandgrandParent.type === state.schema.nodes[listType]));
}
function toggleListCommand(listType) {
    return function (state, dispatch, view) {
        if (dispatch) {
            dispatch(state.tr.setSelection(adjustSelectionInList(state.doc, state.selection)));
        }
        if (!view) {
            return false;
        }
        state = view.state;
        var _a = state.selection, $from = _a.$from, $to = _a.$to;
        var isRangeOfSingleType = utils_1.isRangeOfType(state.doc, $from, $to, state.schema.nodes[listType]);
        if (isInsideList(state, listType) && isRangeOfSingleType) {
            // Untoggles list
            return liftListItems()(state, dispatch);
        }
        else {
            // Converts list type e.g. bullet_list -> ordered_list if needed
            if (!isRangeOfSingleType) {
                liftListItems()(state, dispatch);
                state = view.state;
            }
            // Remove any invalid marks that are not supported
            var tr = utils_1.sanitizeSelectionMarks(state);
            if (tr) {
                dispatch(tr);
                state = view.state;
            }
            // Wraps selection in list
            return wrapInList(state.schema.nodes[listType])(state, dispatch);
        }
    };
}
exports.toggleListCommand = toggleListCommand;
// TODO: Toggle list command dispatch more than one time, so commandWithAnalytics doesn't work as expected.
// This is a helper to fix that.
exports.toggleListCommandWithAnalytics = function (inputMethod, listType) {
    var listTypeActionSubjectId = {
        bulletList: analytics_1.ACTION_SUBJECT_ID.FORMAT_LIST_BULLET,
        orderedList: analytics_1.ACTION_SUBJECT_ID.FORMAT_LIST_NUMBER,
    };
    return function (state, dispatch, view) {
        if (toggleListCommand(listType)(state, dispatch, view)) {
            if (view && dispatch) {
                dispatch(analytics_1.addAnalytics(state, view.state.tr, {
                    action: analytics_1.ACTION.FORMATTED,
                    actionSubject: analytics_1.ACTION_SUBJECT.TEXT,
                    actionSubjectId: listTypeActionSubjectId[listType],
                    eventType: analytics_1.EVENT_TYPE.TRACK,
                    attributes: {
                        inputMethod: inputMethod,
                    },
                }));
            }
            return true;
        }
        return false;
    };
};
function toggleBulletList(view, inputMethod) {
    if (inputMethod === void 0) { inputMethod = analytics_1.INPUT_METHOD.TOOLBAR; }
    return exports.toggleList(view.state, view.dispatch, view, 'bulletList', inputMethod);
}
exports.toggleBulletList = toggleBulletList;
function toggleOrderedList(view, inputMethod) {
    if (inputMethod === void 0) { inputMethod = analytics_1.INPUT_METHOD.TOOLBAR; }
    return exports.toggleList(view.state, view.dispatch, view, 'orderedList', inputMethod);
}
exports.toggleOrderedList = toggleOrderedList;
function wrapInList(nodeType) {
    return baseCommand.autoJoin(baseListCommand.wrapInList(nodeType), function (before, after) { return before.type === after.type && before.type === nodeType; });
}
exports.wrapInList = wrapInList;
//# sourceMappingURL=commands.js.map