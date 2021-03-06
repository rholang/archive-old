import { setParentNodeMarkup, removeParentNodeOfType } from 'prosemirror-utils';
import { analyticsService } from '../../analytics';
import { ACTION, ACTION_SUBJECT, INPUT_METHOD, EVENT_TYPE, addAnalytics, } from '../analytics';
import { pluginKey } from './pm-plugins/main';
export var removePanel = function () { return function (state, dispatch) {
    var nodes = state.schema.nodes, tr = state.tr;
    var payload = {
        action: ACTION.DELETED,
        actionSubject: ACTION_SUBJECT.PANEL,
        attributes: { inputMethod: INPUT_METHOD.TOOLBAR },
        eventType: EVENT_TYPE.TRACK,
    };
    analyticsService.trackEvent("atlassian.editor.format.panel.delete.button");
    if (dispatch) {
        dispatch(addAnalytics(state, removeParentNodeOfType(nodes.panel)(tr), payload));
    }
    return true;
}; };
export var changePanelType = function (panelType) { return function (state, dispatch) {
    var nodes = state.schema.nodes, tr = state.tr;
    var previousType = pluginKey.getState(state).activePanelType;
    var payload = {
        action: ACTION.CHANGED_TYPE,
        actionSubject: ACTION_SUBJECT.PANEL,
        attributes: {
            newType: panelType,
            previousType: previousType,
        },
        eventType: EVENT_TYPE.TRACK,
    };
    analyticsService.trackEvent("atlassian.editor.format.panel." + panelType + ".button");
    if (dispatch) {
        dispatch(addAnalytics(state, setParentNodeMarkup(nodes.panel, null, { panelType: panelType })(tr).setMeta(pluginKey, { activePanelType: panelType }), payload));
    }
    return true;
}; };
//# sourceMappingURL=actions.js.map