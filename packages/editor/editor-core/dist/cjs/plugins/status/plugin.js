"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_view_1 = require("prosemirror-view");
var prosemirror_state_1 = require("prosemirror-state");
var status_1 = tslib_1.__importDefault(require("./nodeviews/status"));
var utils_1 = require("../../utils");
var utils_2 = require("./utils");
exports.pluginKeyName = 'statusPlugin';
exports.pluginKey = new prosemirror_state_1.PluginKey('statusPlugin');
var createPlugin = function (dispatch, portalProviderAPI, options) {
    return new prosemirror_state_1.Plugin({
        state: {
            init: function () { return ({
                isNew: false,
                showStatusPickerAt: null,
            }); },
            apply: function (tr, state, oldEditorState) {
                var meta = tr.getMeta(exports.pluginKey);
                if (meta) {
                    var newState = tslib_1.__assign(tslib_1.__assign({}, state), meta);
                    dispatch(exports.pluginKey, newState);
                    return newState;
                }
                if (tr.docChanged && state.showStatusPickerAt) {
                    var _a = tr.mapping.mapResult(state.showStatusPickerAt), pos = _a.pos, deleted = _a.deleted;
                    var showStatusPickerAt = deleted ? null : pos;
                    var newState = tslib_1.__assign(tslib_1.__assign({}, state), { showStatusPickerAt: showStatusPickerAt });
                    if (newState.showStatusPickerAt !== state.showStatusPickerAt) {
                        dispatch(exports.pluginKey, newState);
                        return newState;
                    }
                }
                if (!tr.selection.eq(oldEditorState.selection)) {
                    // Change in selection, while status picker was open, update state, if required.
                    var selectionFrom = tr.selection.from;
                    var nodeAtSelection = tr.doc.nodeAt(selectionFrom);
                    var showStatusPickerAt = null;
                    if (nodeAtSelection &&
                        nodeAtSelection.type === oldEditorState.schema.nodes.status) {
                        showStatusPickerAt = selectionFrom;
                    }
                    if (showStatusPickerAt !== state.showStatusPickerAt) {
                        var newState = tslib_1.__assign(tslib_1.__assign({}, state), { isNew: false, showStatusPickerAt: showStatusPickerAt });
                        dispatch(exports.pluginKey, newState);
                        return newState;
                    }
                }
                return state;
            },
        },
        appendTransaction: function (transactions, oldEditorState, newEditorState) {
            var changed = false;
            var tr = newEditorState.tr;
            // user leaves the StatusPicker with empty text and selects a new node
            if (transactions.find(function (tr) { return tr.selectionSet; })) {
                var oldStatus = utils_2.mayGetStatusAtSelection(oldEditorState.selection);
                var newStatus = utils_2.mayGetStatusAtSelection(newEditorState.selection);
                if (oldStatus &&
                    ((newStatus && oldStatus.localId !== newStatus.localId) || !newStatus)) {
                    if (utils_2.isEmptyStatus(oldStatus)) {
                        var pos = oldEditorState.selection.from;
                        tr.delete(tr.mapping.map(pos), tr.mapping.map(pos + 1));
                        changed = true;
                    }
                }
            }
            return changed ? tr : undefined;
        },
        key: exports.pluginKey,
        props: {
            nodeViews: {
                status: status_1.default(portalProviderAPI, options),
            },
            decorations: function (state) {
                var tr = state.tr;
                var nodeAtSelection = tr.doc.nodeAt(tr.selection.from);
                if (options &&
                    options.allowZeroWidthSpaceAfter &&
                    nodeAtSelection &&
                    nodeAtSelection.type === state.schema.nodes.status) {
                    var delayedNodeRendering = function () {
                        return document.createTextNode(utils_1.ZeroWidthSpace);
                    };
                    var decoration = prosemirror_view_1.Decoration.widget(tr.selection.from, delayedNodeRendering, {
                        side: 1,
                        key: '#status-zero-width-char-decoration',
                    });
                    var doc = state.doc;
                    return prosemirror_view_1.DecorationSet.create(doc, [decoration]);
                }
                return null;
            },
        },
    });
};
exports.default = createPlugin;
//# sourceMappingURL=plugin.js.map