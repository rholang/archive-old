"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_utils_1 = require("prosemirror-utils");
var analytics_1 = require("../../analytics");
var analytics_2 = require("../analytics");
var main_1 = require("./pm-plugins/main");
exports.removePanel = function () { return function (state, dispatch) {
    var nodes = state.schema.nodes, tr = state.tr;
    var payload = {
        action: analytics_2.ACTION.DELETED,
        actionSubject: analytics_2.ACTION_SUBJECT.PANEL,
        attributes: { inputMethod: analytics_2.INPUT_METHOD.TOOLBAR },
        eventType: analytics_2.EVENT_TYPE.TRACK,
    };
    analytics_1.analyticsService.trackEvent("atlassian.editor.format.panel.delete.button");
    if (dispatch) {
        dispatch(analytics_2.addAnalytics(state, prosemirror_utils_1.removeParentNodeOfType(nodes.panel)(tr), payload));
    }
    return true;
}; };
exports.changePanelType = function (panelType) { return function (state, dispatch) {
    var nodes = state.schema.nodes, tr = state.tr;
    var previousType = main_1.pluginKey.getState(state).activePanelType;
    var payload = {
        action: analytics_2.ACTION.CHANGED_TYPE,
        actionSubject: analytics_2.ACTION_SUBJECT.PANEL,
        attributes: {
            newType: panelType,
            previousType: previousType,
        },
        eventType: analytics_2.EVENT_TYPE.TRACK,
    };
    analytics_1.analyticsService.trackEvent("atlassian.editor.format.panel." + panelType + ".button");
    if (dispatch) {
        dispatch(analytics_2.addAnalytics(state, prosemirror_utils_1.setParentNodeMarkup(nodes.panel, null, { panelType: panelType })(tr).setMeta(main_1.pluginKey, { activePanelType: panelType }), payload));
    }
    return true;
}; };
//# sourceMappingURL=actions.js.map