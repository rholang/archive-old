import { __assign } from "tslib";
import { Fragment } from 'prosemirror-model';
import { NodeSelection, Selection, } from 'prosemirror-state';
import { uuid } from '@atlaskit/adf-schema';
import { pluginKey } from './plugin';
import { withAnalytics, ACTION, ACTION_SUBJECT, ACTION_SUBJECT_ID, EVENT_TYPE, } from '../analytics';
export var DEFAULT_STATUS = {
    text: '',
    color: 'neutral',
};
export var createStatus = function (showStatusPickerAtOffset) {
    if (showStatusPickerAtOffset === void 0) { showStatusPickerAtOffset = -2; }
    return function (insert, state) {
        var statusNode = state.schema.nodes.status.createChecked(__assign(__assign({}, DEFAULT_STATUS), { localId: uuid.generate() }));
        var tr = insert(statusNode);
        var showStatusPickerAt = tr.selection.from + showStatusPickerAtOffset;
        return tr
            .setSelection(NodeSelection.create(tr.doc, showStatusPickerAt))
            .setMeta(pluginKey, {
            showStatusPickerAt: showStatusPickerAt,
            isNew: true,
        });
    };
};
export var updateStatus = function (status) { return function (state, dispatch) {
    var schema = state.schema;
    var selectedStatus = status
        ? Object.assign(status, {
            text: status.text.trim(),
            localId: status.localId || uuid.generate(),
        })
        : status;
    var statusProps = __assign(__assign({}, DEFAULT_STATUS), selectedStatus);
    var tr = state.tr;
    var showStatusPickerAt = pluginKey.getState(state).showStatusPickerAt;
    if (!showStatusPickerAt) {
        // Same behaviour as quick insert (used in createStatus)
        var statusNode = schema.nodes.status.createChecked(statusProps);
        var fragment = Fragment.fromArray([statusNode, state.schema.text(' ')]);
        var newShowStatusPickerAt = tr.selection.from;
        tr = tr.replaceWith(newShowStatusPickerAt, newShowStatusPickerAt, fragment);
        tr = tr.setSelection(NodeSelection.create(tr.doc, newShowStatusPickerAt));
        tr = tr
            .setMeta(pluginKey, {
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
        tr = tr.setSelection(NodeSelection.create(tr.doc, showStatusPickerAt));
        tr = tr.setMeta(pluginKey, { showStatusPickerAt: showStatusPickerAt }).scrollIntoView();
        if (dispatch) {
            dispatch(tr);
        }
        return true;
    }
    return false;
}; };
export var updateStatusWithAnalytics = function (inputMethod, status) {
    return withAnalytics({
        action: ACTION.INSERTED,
        actionSubject: ACTION_SUBJECT.DOCUMENT,
        actionSubjectId: ACTION_SUBJECT_ID.STATUS,
        attributes: { inputMethod: inputMethod },
        eventType: EVENT_TYPE.TRACK,
    })(updateStatus(status));
};
export var setStatusPickerAt = function (showStatusPickerAt) { return function (state, dispatch) {
    dispatch(state.tr.setMeta(pluginKey, {
        showStatusPickerAt: showStatusPickerAt,
        isNew: false,
    }));
    return true;
}; };
export var commitStatusPicker = function () { return function (editorView) {
    var state = editorView.state, dispatch = editorView.dispatch;
    var showStatusPickerAt = pluginKey.getState(state).showStatusPickerAt;
    if (!showStatusPickerAt) {
        return;
    }
    var statusNode = state.tr.doc.nodeAt(showStatusPickerAt);
    if (!statusNode) {
        return;
    }
    var tr = state.tr;
    tr = tr.setMeta(pluginKey, {
        showStatusPickerAt: null,
        isNew: false,
    });
    if (statusNode.attrs.text) {
        // still has content - keep content
        // move selection after status if selection did not change
        if (tr.selection.from === showStatusPickerAt) {
            tr = tr.setSelection(Selection.near(state.tr.doc.resolve(showStatusPickerAt + 2)));
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