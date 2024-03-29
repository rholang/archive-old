import { __assign } from "tslib";
import { DecorationSet, Decoration } from 'prosemirror-view';
import { Plugin, PluginKey } from 'prosemirror-state';
import statusNodeView from './nodeviews/status';
import { ZeroWidthSpace } from '../../utils';
import { mayGetStatusAtSelection, isEmptyStatus } from './utils';
export var pluginKeyName = 'statusPlugin';
export var pluginKey = new PluginKey('statusPlugin');
var createPlugin = function (dispatch, portalProviderAPI, options) {
    return new Plugin({
        state: {
            init: function () { return ({
                isNew: false,
                showStatusPickerAt: null,
            }); },
            apply: function (tr, state, oldEditorState) {
                var meta = tr.getMeta(pluginKey);
                if (meta) {
                    var newState = __assign(__assign({}, state), meta);
                    dispatch(pluginKey, newState);
                    return newState;
                }
                if (tr.docChanged && state.showStatusPickerAt) {
                    var _a = tr.mapping.mapResult(state.showStatusPickerAt), pos = _a.pos, deleted = _a.deleted;
                    var showStatusPickerAt = deleted ? null : pos;
                    var newState = __assign(__assign({}, state), { showStatusPickerAt: showStatusPickerAt });
                    if (newState.showStatusPickerAt !== state.showStatusPickerAt) {
                        dispatch(pluginKey, newState);
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
                        var newState = __assign(__assign({}, state), { isNew: false, showStatusPickerAt: showStatusPickerAt });
                        dispatch(pluginKey, newState);
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
                var oldStatus = mayGetStatusAtSelection(oldEditorState.selection);
                var newStatus = mayGetStatusAtSelection(newEditorState.selection);
                if (oldStatus &&
                    ((newStatus && oldStatus.localId !== newStatus.localId) || !newStatus)) {
                    if (isEmptyStatus(oldStatus)) {
                        var pos = oldEditorState.selection.from;
                        tr.delete(tr.mapping.map(pos), tr.mapping.map(pos + 1));
                        changed = true;
                    }
                }
            }
            return changed ? tr : undefined;
        },
        key: pluginKey,
        props: {
            nodeViews: {
                status: statusNodeView(portalProviderAPI, options),
            },
            decorations: function (state) {
                var tr = state.tr;
                var nodeAtSelection = tr.doc.nodeAt(tr.selection.from);
                if (options &&
                    options.allowZeroWidthSpaceAfter &&
                    nodeAtSelection &&
                    nodeAtSelection.type === state.schema.nodes.status) {
                    var delayedNodeRendering = function () {
                        return document.createTextNode(ZeroWidthSpace);
                    };
                    var decoration = Decoration.widget(tr.selection.from, delayedNodeRendering, {
                        side: 1,
                        key: '#status-zero-width-char-decoration',
                    });
                    var doc = state.doc;
                    return DecorationSet.create(doc, [decoration]);
                }
                return null;
            },
        },
    });
};
export default createPlugin;
//# sourceMappingURL=plugin.js.map