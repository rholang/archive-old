"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_state_1 = require("prosemirror-state");
var utils_1 = require("../../../utils");
var LinkAction;
(function (LinkAction) {
    LinkAction["SHOW_INSERT_TOOLBAR"] = "SHOW_INSERT_TOOLBAR";
    LinkAction["HIDE_TOOLBAR"] = "HIDE_TOOLBAR";
    LinkAction["SELECTION_CHANGE"] = "SELECTION_CHANGE";
    LinkAction["INSERT_LINK_TOOLBAR"] = "INSERT";
    LinkAction["EDIT_INSERTED_TOOLBAR"] = "EDIT_INSERTED_TOOLBAR";
})(LinkAction = exports.LinkAction || (exports.LinkAction = {}));
var InsertStatus;
(function (InsertStatus) {
    InsertStatus["EDIT_LINK_TOOLBAR"] = "EDIT";
    InsertStatus["INSERT_LINK_TOOLBAR"] = "INSERT";
    InsertStatus["EDIT_INSERTED_TOOLBAR"] = "EDIT_INSERTED";
})(InsertStatus = exports.InsertStatus || (exports.InsertStatus = {}));
exports.canLinkBeCreatedInRange = function (from, to) { return function (state) {
    if (!state.doc.rangeHasMark(from, to, state.schema.marks.link)) {
        var $from = state.doc.resolve(from);
        var $to = state.doc.resolve(to);
        var link_1 = state.schema.marks.link;
        if ($from.parent === $to.parent && $from.parent.isTextblock) {
            if ($from.parent.type.allowsMarkType(link_1)) {
                var allowed_1 = true;
                state.doc.nodesBetween(from, to, function (node) {
                    allowed_1 = allowed_1 && !node.marks.some(function (m) { return m.type.excludes(link_1); });
                    return allowed_1;
                });
                return allowed_1;
            }
        }
    }
    return false;
}; };
var isSelectionInsideLink = function (state) {
    return !!state.doc.type.schema.marks.link.isInSet(state.selection.$from.marks());
};
var isSelectionAroundLink = function (state) {
    var _a = state.selection, $from = _a.$from, $to = _a.$to;
    var node = $from.nodeAfter;
    return (!!node &&
        $from.textOffset === 0 &&
        $to.pos - $from.pos === node.nodeSize &&
        !!state.doc.type.schema.marks.link.isInSet(node.marks));
};
var mapTransactionToState = function (state, tr) {
    if (!state) {
        return undefined;
    }
    else if (state.type === InsertStatus.EDIT_LINK_TOOLBAR ||
        state.type === InsertStatus.EDIT_INSERTED_TOOLBAR) {
        var _a = tr.mapping.mapResult(state.pos, 1), pos = _a.pos, deleted = _a.deleted;
        var node = tr.doc.nodeAt(pos);
        // If the position was not deleted & it is still a link
        if (!deleted && !!node.type.schema.marks.link.isInSet(node.marks)) {
            if (node === state.node && pos === state.pos) {
                return state;
            }
            return tslib_1.__assign(tslib_1.__assign({}, state), { pos: pos, node: node });
        }
        // If the position has been deleted, then require a navigation to show the toolbar again
        return;
    }
    else if (state.type === InsertStatus.INSERT_LINK_TOOLBAR) {
        return tslib_1.__assign(tslib_1.__assign({}, state), { from: tr.mapping.map(state.from), to: tr.mapping.map(state.to) });
    }
    return;
};
var toState = function (state, action, editorState) {
    // Show insert or edit toolbar
    if (!state) {
        switch (action) {
            case LinkAction.SHOW_INSERT_TOOLBAR: {
                var _a = editorState.selection, from = _a.from, to = _a.to;
                if (exports.canLinkBeCreatedInRange(from, to)(editorState)) {
                    return {
                        type: InsertStatus.INSERT_LINK_TOOLBAR,
                        from: from,
                        to: to,
                    };
                }
                return undefined;
            }
            case LinkAction.SELECTION_CHANGE:
                // If the user has moved their cursor, see if they're in a link
                var link = getActiveLinkMark(editorState);
                if (link) {
                    return tslib_1.__assign(tslib_1.__assign({}, link), { type: InsertStatus.EDIT_LINK_TOOLBAR });
                }
                return undefined;
            default:
                return undefined;
        }
    }
    // Update toolbar state if selection changes, or if toolbar is hidden
    if (state.type === InsertStatus.EDIT_LINK_TOOLBAR) {
        switch (action) {
            case LinkAction.EDIT_INSERTED_TOOLBAR: {
                var link_2 = getActiveLinkMark(editorState);
                if (link_2) {
                    if (link_2.pos === state.pos && link_2.node === state.node) {
                        return tslib_1.__assign(tslib_1.__assign({}, state), { type: InsertStatus.EDIT_INSERTED_TOOLBAR });
                    }
                    return tslib_1.__assign(tslib_1.__assign({}, link_2), { type: InsertStatus.EDIT_INSERTED_TOOLBAR });
                }
                return undefined;
            }
            case LinkAction.SELECTION_CHANGE:
                var link = getActiveLinkMark(editorState);
                if (link) {
                    if (link.pos === state.pos && link.node === state.node) {
                        // Make sure we return the same object, if it's the same link
                        return state;
                    }
                    return tslib_1.__assign(tslib_1.__assign({}, link), { type: InsertStatus.EDIT_LINK_TOOLBAR });
                }
                return undefined;
            case LinkAction.HIDE_TOOLBAR:
                return undefined;
            default:
                return state;
        }
    }
    // Remove toolbar if user changes selection or toolbar is hidden
    if (state.type === InsertStatus.INSERT_LINK_TOOLBAR) {
        switch (action) {
            case LinkAction.SELECTION_CHANGE:
            case LinkAction.HIDE_TOOLBAR:
                return undefined;
            default:
                return state;
        }
    }
    return;
};
var getActiveLinkMark = function (state) {
    var $from = state.selection.$from;
    if (isSelectionInsideLink(state) || isSelectionAroundLink(state)) {
        var pos = $from.pos - $from.textOffset;
        var node = state.doc.nodeAt(pos);
        return node && node.isText ? { node: node, pos: pos } : undefined;
    }
    return undefined;
};
var getActiveText = function (selection) {
    var currentSlice = selection.content();
    if (currentSlice.size === 0) {
        return;
    }
    if (currentSlice.content.childCount === 1 &&
        currentSlice.content.firstChild &&
        selection instanceof prosemirror_state_1.TextSelection) {
        return currentSlice.content.firstChild.textContent;
    }
    return;
};
exports.stateKey = new prosemirror_state_1.PluginKey('hyperlinkPlugin');
exports.plugin = function (dispatch) {
    return new prosemirror_state_1.Plugin({
        state: {
            init: function (_, state) {
                var canInsertLink = exports.canLinkBeCreatedInRange(state.selection.from, state.selection.to)(state);
                return {
                    activeText: getActiveText(state.selection),
                    canInsertLink: canInsertLink,
                    activeLinkMark: toState(undefined, LinkAction.SELECTION_CHANGE, state),
                };
            },
            apply: function (tr, pluginState, _oldState, newState) {
                var state = pluginState;
                var action = tr.getMeta(exports.stateKey) && tr.getMeta(exports.stateKey).type;
                if (tr.docChanged) {
                    state = {
                        activeText: state.activeText,
                        canInsertLink: exports.canLinkBeCreatedInRange(newState.selection.from, newState.selection.to)(newState),
                        activeLinkMark: mapTransactionToState(state.activeLinkMark, tr),
                    };
                }
                if (action) {
                    state = {
                        activeText: state.activeText,
                        canInsertLink: state.canInsertLink,
                        activeLinkMark: toState(state.activeLinkMark, action, newState),
                    };
                }
                if (tr.selectionSet) {
                    state = {
                        activeText: getActiveText(newState.selection),
                        canInsertLink: exports.canLinkBeCreatedInRange(newState.selection.from, newState.selection.to)(newState),
                        activeLinkMark: toState(state.activeLinkMark, LinkAction.SELECTION_CHANGE, newState),
                    };
                }
                if (!utils_1.shallowEqual(state, pluginState)) {
                    dispatch(exports.stateKey, state);
                }
                return state;
            },
        },
        key: exports.stateKey,
    });
};
//# sourceMappingURL=main.js.map