import { NodeSelection, Selection, } from 'prosemirror-state';
import { todayTimestampInUTC } from '@atlaskit/editor-common';
import { pluginKey } from './plugin';
import { addAnalytics, ACTION, ACTION_SUBJECT, ACTION_SUBJECT_ID, EVENT_TYPE, } from '../analytics';
export var insertDate = function (date, inputMethod) { return function (state, dispatch) {
    var schema = state.schema;
    var timestamp;
    if (date) {
        timestamp = Date.UTC(date.year, date.month - 1, date.day).toString();
    }
    else {
        timestamp = todayTimestampInUTC();
    }
    var tr = state.tr;
    if (inputMethod) {
        addAnalytics(state, tr, {
            action: ACTION.INSERTED,
            actionSubject: ACTION_SUBJECT.DOCUMENT,
            actionSubjectId: ACTION_SUBJECT_ID.DATE,
            eventType: EVENT_TYPE.TRACK,
            attributes: { inputMethod: inputMethod },
        });
    }
    var showDatePickerAt = pluginKey.getState(state).showDatePickerAt;
    if (!showDatePickerAt) {
        var dateNode = schema.nodes.date.createChecked({ timestamp: timestamp });
        dispatch(tr
            .replaceSelectionWith(dateNode)
            .setSelection(NodeSelection.create(tr.doc, state.selection.$from.pos))
            .scrollIntoView());
        return true;
    }
    if (state.doc.nodeAt(showDatePickerAt)) {
        dispatch(tr
            .setNodeMarkup(showDatePickerAt, schema.nodes.date, {
            timestamp: timestamp,
        })
            .setSelection(Selection.near(tr.doc.resolve(showDatePickerAt + 2)))
            .setMeta(pluginKey, { showDatePickerAt: null })
            .scrollIntoView());
        return true;
    }
    return false;
}; };
export var setDatePickerAt = function (showDatePickerAt) { return function (state, dispatch) {
    dispatch(state.tr.setMeta(pluginKey, { showDatePickerAt: showDatePickerAt }));
    return true;
}; };
export var closeDatePicker = function () { return function (state, dispatch) {
    var showDatePickerAt = pluginKey.getState(state).showDatePickerAt;
    if (!showDatePickerAt) {
        return false;
    }
    if (dispatch) {
        dispatch(state.tr
            .setMeta(pluginKey, { showDatePickerAt: null })
            .setSelection(Selection.near(state.tr.doc.resolve(showDatePickerAt + 2))));
    }
    return false;
}; };
export var openDatePicker = function () { return function (state, dispatch) {
    var $from = state.selection.$from;
    var node = state.doc.nodeAt($from.pos);
    if (node && node.type.name === state.schema.nodes.date.name) {
        var showDatePickerAt = $from.pos;
        if (dispatch) {
            dispatch(state.tr
                .setMeta(pluginKey, { showDatePickerAt: showDatePickerAt })
                .setSelection(NodeSelection.create(state.doc, showDatePickerAt)));
        }
    }
    return false;
}; };
//# sourceMappingURL=actions.js.map