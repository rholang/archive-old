import { keymap } from 'prosemirror-keymap';
import { analyticsService } from '../../analytics';
import * as keymaps from '../../keymaps';
import { stateKey as mediaPluginKey } from '../../plugins/media/pm-plugins/main';
import { analyticsEventKey, ACTION, ACTION_SUBJECT, INPUT_METHOD, EVENT_TYPE, ACTION_SUBJECT_ID, } from '../../plugins/analytics';
export function createPlugin(eventDispatch, onSave) {
    var _a;
    if (!onSave) {
        return;
    }
    return keymap((_a = {},
        _a["" + keymaps.submit.common] = function (state, _dispatch, editorView) {
            var mediaState = mediaPluginKey.getState(state);
            if (mediaState &&
                mediaState.waitForMediaUpload &&
                !mediaState.allUploadsFinished) {
                return true;
            }
            eventDispatch(analyticsEventKey, analyticsPayload(state));
            analyticsService.trackEvent('atlassian.editor.stop.submit');
            onSave(editorView);
            return true;
        },
        _a));
}
var analyticsPayload = function (state) { return ({
    payload: {
        action: ACTION.STOPPED,
        actionSubject: ACTION_SUBJECT.EDITOR,
        actionSubjectId: ACTION_SUBJECT_ID.SAVE,
        attributes: {
            inputMethod: INPUT_METHOD.SHORTCUT,
            documentSize: state.doc.nodeSize,
        },
        eventType: EVENT_TYPE.UI,
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
export default submitEditorPlugin;
//# sourceMappingURL=index.js.map