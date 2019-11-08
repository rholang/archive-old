"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_model_1 = require("prosemirror-model");
var prosemirror_state_1 = require("prosemirror-state");
var adf_schema_1 = require("@atlaskit/adf-schema");
var plugin_1 = require("./plugin");
var analytics_1 = require("../analytics");
exports.DEFAULT_STATUS = {
    text: '',
    color: 'neutral',
};
exports.createStatus = function (showStatusPickerAtOffset) {
    if (showStatusPickerAtOffset === void 0) { showStatusPickerAtOffset = -2; }
    return function (insert, state) {
        var statusNode = state.schema.nodes.status.createChecked(tslib_1.__assign(tslib_1.__assign({}, exports.DEFAULT_STATUS), { localId: adf_schema_1.uuid.generate() }));
        var tr = insert(statusNode);
        var showStatusPickerAt = tr.selection.from + showStatusPickerAtOffset;
        return tr
            .setSelection(prosemirror_state_1.NodeSelection.create(tr.doc, showStatusPickerAt))
            .setMeta(plugin_1.pluginKey, {
            showStatusPickerAt: showStatusPickerAt,
            isNew: true,
        });
    };
};
exports.updateStatus = function (status) { return function (state, dispatch) {
    var schema = state.schema;
    var selectedStatus = status
        ? Object.assign(status, {
            text: status.text.trim(),
            localId: status.localId || adf_schema_1.uuid.generate(),
        })
        : status;
    var statusProps = tslib_1.__assign(tslib_1.__assign({}, exports.DEFAULT_STATUS), selectedStatus);
    var tr = state.tr;
    var showStatusPickerAt = plugin_1.pluginKey.getState(state).showStatusPickerAt;
    if (!showStatusPickerAt) {
        // Same behaviour as quick insert (used in createStatus)
        var statusNode = schema.nodes.status.createChecked(statusProps);
        var fragment = prosemirror_model_1.Fragment.fromArray([statusNode, state.schema.text(' ')]);
        var newShowStatusPickerAt = tr.selection.from;
        tr = tr.replaceWith(newShowStatusPickerAt, newShowStatusPickerAt, fragment);
        tr = tr.setSelection(prosemirror_state_1.NodeSelection.create(tr.doc, newShowStatusPickerAt));
        tr = tr
            .setMeta(plugin_1.pluginKey, {
            showStatusPickerAt: newShowStatusPickerAt,
            isNew: true,
        })
            .scrollIntoView();
        if (dispatch) {
            dispatch(tr);
        }
        return true;
    }
    if (state.doc.nodeAt(showStatusPickerAt)) {
        tr = tr.setNodeMarkup(showStatusPickerAt, schema.nodes.status, statusProps);
        tr = tr.setSelection(prosemirror_state_1.NodeSelection.create(tr.doc, showStatusPickerAt));
        tr = tr.setMeta(plugin_1.pluginKey, { showStatusPickerAt: showStatusPickerAt }).scrollIntoView();
        if (dispatch) {
            dispatch(tr);
        }
        return true;
    }
    return false;
}; };
exports.updateStatusWithAnalytics = function (inputMethod, status) {
    return analytics_1.withAnalytics({
        action: analytics_1.ACTION.INSERTED,
        actionSubject: analytics_1.ACTION_SUBJECT.DOCUMENT,
        actionSubjectId: analytics_1.ACTION_SUBJECT_ID.STATUS,
        attributes: { inputMethod: inputMethod },
        eventType: analytics_1.EVENT_TYPE.TRACK,
    })(exports.updateStatus(status));
};
exports.setStatusPickerAt = function (showStatusPickerAt) { return function (state, dispatch) {
    dispatch(state.tr.setMeta(plugin_1.pluginKey, {
        showStatusPickerAt: showStatusPickerAt,
        isNew: false,
    }));
    return true;
}; };
exports.commitStatusPicker = function () { return function (editorView) {
    var state = editorView.state, dispatch = editorView.dispatch;
    var showStatusPickerAt = plugin_1.pluginKey.getState(state).showStatusPickerAt;
    if (!showStatusPickerAt) {
        return;
    }
    var statusNode = state.tr.doc.nodeAt(showStatusPickerAt);
    if (!statusNode) {
        return;
    }
    var tr = state.tr;
    tr = tr.setMeta(plugin_1.pluginKey, {
        showStatusPickerAt: null,
        isNew: false,
    });
    if (statusNode.attrs.text) {
        // still has content - keep content
        // move selection after status if selection did not change
        if (tr.selection.from === showStatusPickerAt) {
            tr = tr.setSelection(prosemirror_state_1.Selection.near(state.tr.doc.resolve(showStatusPickerAt + 2)));
        }
    }
    else {
        // no content - remove node
        tr = tr.delete(showStatusPickerAt, showStatusPickerAt + 1);
    }
    dispatch(tr);
    editorView.focus();
}; };
//# sourceMappingURL=actions.js.map