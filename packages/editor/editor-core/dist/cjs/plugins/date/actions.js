"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_state_1 = require("prosemirror-state");
var editor_common_1 = require("@atlaskit/editor-common");
var plugin_1 = require("./plugin");
var analytics_1 = require("../analytics");
exports.insertDate = function (date, inputMethod) { return function (state, dispatch) {
    var schema = state.schema;
    var timestamp;
    if (date) {
        timestamp = Date.UTC(date.year, date.month - 1, date.day).toString();
    }
    else {
        timestamp = editor_common_1.todayTimestampInUTC();
    }
    var tr = state.tr;
    if (inputMethod) {
        analytics_1.addAnalytics(state, tr, {
            action: analytics_1.ACTION.INSERTED,
            actionSubject: analytics_1.ACTION_SUBJECT.DOCUMENT,
            actionSubjectId: analytics_1.ACTION_SUBJECT_ID.DATE,
            eventType: analytics_1.EVENT_TYPE.TRACK,
            attributes: { inputMethod: inputMethod },
        });
    }
    var showDatePickerAt = plugin_1.pluginKey.getState(state).showDatePickerAt;
    if (!showDatePickerAt) {
        var dateNode = schema.nodes.date.createChecked({ timestamp: timestamp });
        dispatch(tr
            .replaceSelectionWith(dateNode)
            .setSelection(prosemirror_state_1.NodeSelection.create(tr.doc, state.selection.$from.pos))
            .scrollIntoView());
        return true;
    }
    if (state.doc.nodeAt(showDatePickerAt)) {
        dispatch(tr
            .setNodeMarkup(showDatePickerAt, schema.nodes.date, {
            timestamp: timestamp,
        })
            .setSelection(prosemirror_state_1.Selection.near(tr.doc.resolve(showDatePickerAt + 2)))
            .setMeta(plugin_1.pluginKey, { showDatePickerAt: null })
            .scrollIntoView());
        return true;
    }
    return false;
}; };
exports.setDatePickerAt = function (showDatePickerAt) { return function (state, dispatch) {
    dispatch(state.tr.setMeta(plugin_1.pluginKey, { showDatePickerAt: showDatePickerAt }));
    return true;
}; };
exports.closeDatePicker = function () { return function (state, dispatch) {
    var showDatePickerAt = plugin_1.pluginKey.getState(state).showDatePickerAt;
    if (!showDatePickerAt) {
        return false;
    }
    if (dispatch) {
        dispatch(state.tr
            .setMeta(plugin_1.pluginKey, { showDatePickerAt: null })
            .setSelection(prosemirror_state_1.Selection.near(state.tr.doc.resolve(showDatePickerAt + 2))));
    }
    return false;
}; };
exports.openDatePicker = function () { return function (state, dispatch) {
    var $from = state.selection.$from;
    var node = state.doc.nodeAt($from.pos);
    if (node && node.type.name === state.schema.nodes.date.name) {
        var showDatePickerAt = $from.pos;
        if (dispatch) {
            dispatch(state.tr
                .setMeta(plugin_1.pluginKey, { showDatePickerAt: showDatePickerAt })
                .setSelection(prosemirror_state_1.NodeSelection.create(state.doc, showDatePickerAt)));
        }
    }
    return false;
}; };
//# sourceMappingURL=actions.js.map