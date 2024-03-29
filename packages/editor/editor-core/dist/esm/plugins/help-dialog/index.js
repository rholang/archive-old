import { __assign } from "tslib";
import * as React from 'react';
import { keymap } from 'prosemirror-keymap';
import { Plugin, PluginKey } from 'prosemirror-state';
import * as keymaps from '../../keymaps';
import { analyticsService } from '../../analytics';
import WithPluginState from '../../ui/WithPluginState';
import { HelpDialogLoader } from './ui/HelpDialogLoader';
import { pluginKey as quickInsertPluginKey } from '../quick-insert';
import { addAnalytics, ACTION, ACTION_SUBJECT, INPUT_METHOD, EVENT_TYPE, ACTION_SUBJECT_ID, } from '../../plugins/analytics';
export var pluginKey = new PluginKey('helpDialogPlugin');
export var openHelpCommand = function (tr, dispatch) {
    tr = tr.setMeta(pluginKey, true);
    if (dispatch) {
        dispatch(tr);
    }
};
export var closeHelpCommand = function (tr, dispatch) {
    tr = tr.setMeta(pluginKey, false);
    dispatch(tr);
};
export var stopPropagationCommand = function (e) { return e.stopPropagation(); };
export function createPlugin(dispatch, imageEnabled) {
    return new Plugin({
        key: pluginKey,
        state: {
            init: function () {
                return { isVisible: false, imageEnabled: imageEnabled };
            },
            apply: function (tr, _value, state) {
                var isVisible = tr.getMeta(pluginKey);
                var currentState = pluginKey.getState(state);
                if (isVisible !== undefined && isVisible !== currentState.isVisible) {
                    var newState = __assign(__assign({}, currentState), { isVisible: isVisible });
                    dispatch(pluginKey, newState);
                    return newState;
                }
                return currentState;
            },
        },
    });
}
var helpDialog = function () { return ({
    name: 'helpDialog',
    pmPlugins: function () {
        return [
            {
                name: 'helpDialog',
                plugin: function (_a) {
                    var dispatch = _a.dispatch, legacyImageUploadProvider = _a.props.legacyImageUploadProvider;
                    return createPlugin(dispatch, !!legacyImageUploadProvider);
                },
            },
            {
                name: 'helpDialogKeymap',
                plugin: function () { return keymapPlugin(); },
            },
        ];
    },
    contentComponent: function (_a) {
        var editorView = _a.editorView;
        return (React.createElement(WithPluginState, { plugins: {
                helpDialog: pluginKey,
                quickInsert: quickInsertPluginKey,
            }, render: function (_a) {
                var _b = _a.helpDialog, helpDialog = _b === void 0 ? {} : _b, quickInsert = _a.quickInsert;
                return (React.createElement(HelpDialogLoader, { editorView: editorView, isVisible: helpDialog.isVisible, quickInsertEnabled: !!quickInsert, imageEnabled: helpDialog.imageEnabled }));
            } }));
    },
}); };
var keymapPlugin = function () {
    var list = {};
    keymaps.bindKeymapWithCommand(keymaps.openHelp.common, function (state, dispatch) {
        var tr = state.tr;
        var isVisible = tr.getMeta(pluginKey);
        if (!isVisible) {
            analyticsService.trackEvent('atlassian.editor.help.keyboard');
            tr = addAnalytics(state, tr, {
                action: ACTION.CLICKED,
                actionSubject: ACTION_SUBJECT.BUTTON,
                actionSubjectId: ACTION_SUBJECT_ID.BUTTON_HELP,
                attributes: { inputMethod: INPUT_METHOD.SHORTCUT },
                eventType: EVENT_TYPE.UI,
            });
            openHelpCommand(tr, dispatch);
        }
        return true;
    }, list);
    return keymap(list);
};
export default helpDialog;
//# sourceMappingURL=index.js.map