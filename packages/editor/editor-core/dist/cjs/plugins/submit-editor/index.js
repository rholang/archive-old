"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_keymap_1 = require("prosemirror-keymap");
var analytics_1 = require("../../analytics");
var keymaps = tslib_1.__importStar(require("../../keymaps"));
var main_1 = require("../../plugins/media/pm-plugins/main");
var analytics_2 = require("../../plugins/analytics");
function createPlugin(eventDispatch, onSave) {
    var _a;
    if (!onSave) {
        return;
    }
    return prosemirror_keymap_1.keymap((_a = {},
        _a["" + keymaps.submit.common] = function (state, _dispatch, editorView) {
            var mediaState = main_1.stateKey.getState(state);
            if (mediaState &&
                mediaState.waitForMediaUpload &&
                !mediaState.allUploadsFinished) {
                return true;
            }
            eventDispatch(analytics_2.analyticsEventKey, analyticsPayload(state));
            analytics_1.analyticsService.trackEvent('atlassian.editor.stop.submit');
            onSave(editorView);
            return true;
        },
        _a));
}
exports.createPlugin = createPlugin;
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
var submitEditorPlugin = function () { return ({
    name: 'submitEditor',
    pmPlugins: function () {
        return [
            {
                name: 'submitEditor',
                plugin: function (_a) {
                    var props = _a.props, dispatch = _a.dispatch;
                    return createPlugin(dispatch, props.onSave);
                },
            },
        ];
    },
}); };
exports.default = submitEditorPlugin;
//# sourceMappingURL=index.js.map