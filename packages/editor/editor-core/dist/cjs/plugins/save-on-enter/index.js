"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_keymap_1 = require("prosemirror-keymap");
var analytics_1 = require("../../analytics");
var analytics_2 = require("../../plugins/analytics");
function createPlugin(eventDispatch, onSave) {
    if (!onSave) {
        return;
    }
    return prosemirror_keymap_1.keymap({
        Enter: function (state, _dispatch, editorView) {
            if (canSaveOnEnter(editorView)) {
                eventDispatch(analytics_2.analyticsEventKey, analyticsPayload(state));
                analytics_1.analyticsService.trackEvent('atlassian.editor.stop.submit');
                onSave(editorView);
                return true;
            }
            return false;
        },
    });
}
exports.createPlugin = createPlugin;
function canSaveOnEnter(editorView) {
    var $cursor = editorView.state.selection.$cursor;
    var _a = editorView.state.schema.nodes, decisionItem = _a.decisionItem, paragraph = _a.paragraph, taskItem = _a.taskItem;
    return (!$cursor ||
        ($cursor.parent.type === paragraph && $cursor.depth === 1) ||
        ($cursor.parent.type === decisionItem && !isEmptyAtCursor($cursor)) ||
        ($cursor.parent.type === taskItem && !isEmptyAtCursor($cursor)));
}
function isEmptyAtCursor($cursor) {
    var content = $cursor.parent.content;
    return !(content && content.size);
}
var analyticsPayload = function (state) { return ({
    payload: {
        action: analytics_2.ACTION.STOPPED,
        actionSubject: analytics_2.ACTION_SUBJECT.EDITOR,
        actionSubjectId: analytics_2.ACTION_SUBJECT_ID.SAVE,
        attributes: {
            inputMethod: analytics_2.INPUT_METHOD.SHORTCUT,
            documentSize: state.doc.nodeSize,
        },
        eventType: analytics_2.EVENT_TYPE.UI,
    },
}); };
var saveOnEnterPlugin = function () { return ({
    name: 'saveOnEnter',
    pmPlugins: function () {
        return [
            {
                name: 'saveOnEnter',
                plugin: function (_a) {
                    var props = _a.props, dispatch = _a.dispatch;
                    return createPlugin(dispatch, props.onSave);
                },
            },
        ];
    },
}); };
exports.default = saveOnEnterPlugin;
//# sourceMappingURL=index.js.map