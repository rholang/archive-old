"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var prosemirror_keymap_1 = require("prosemirror-keymap");
var prosemirror_state_1 = require("prosemirror-state");
var keymaps = tslib_1.__importStar(require("../../keymaps"));
var analytics_1 = require("../../analytics");
var WithPluginState_1 = tslib_1.__importDefault(require("../../ui/WithPluginState"));
var HelpDialogLoader_1 = require("./ui/HelpDialogLoader");
var quick_insert_1 = require("../quick-insert");
var analytics_2 = require("../../plugins/analytics");
exports.pluginKey = new prosemirror_state_1.PluginKey('helpDialogPlugin');
exports.openHelpCommand = function (tr, dispatch) {
    tr = tr.setMeta(exports.pluginKey, true);
    if (dispatch) {
        dispatch(tr);
    }
};
exports.closeHelpCommand = function (tr, dispatch) {
    tr = tr.setMeta(exports.pluginKey, false);
    dispatch(tr);
};
exports.stopPropagationCommand = function (e) { return e.stopPropagation(); };
function createPlugin(dispatch, imageEnabled) {
    return new prosemirror_state_1.Plugin({
        key: exports.pluginKey,
        state: {
            init: function () {
                return { isVisible: false, imageEnabled: imageEnabled };
            },
            apply: function (tr, _value, state) {
                var isVisible = tr.getMeta(exports.pluginKey);
                var currentState = exports.pluginKey.getState(state);
                if (isVisible !== undefined && isVisible !== currentState.isVisible) {
                    var newState = tslib_1.__assign(tslib_1.__assign({}, currentState), { isVisible: isVisible });
                    dispatch(exports.pluginKey, newState);
                    return newState;
                }
                return currentState;
            },
        },
    });
}
exports.createPlugin = createPlugin;
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
        return (React.createElement(WithPluginState_1.default, { plugins: {
                helpDialog: exports.pluginKey,
                quickInsert: quick_insert_1.pluginKey,
            }, render: function (_a) {
                var _b = _a.helpDialog, helpDialog = _b === void 0 ? {} : _b, quickInsert = _a.quickInsert;
                return (React.createElement(HelpDialogLoader_1.HelpDialogLoader, { editorView: editorView, isVisible: helpDialog.isVisible, quickInsertEnabled: !!quickInsert, imageEnabled: helpDialog.imageEnabled }));
            } }));
    },
}); };
var keymapPlugin = function () {
    var list = {};
    keymaps.bindKeymapWithCommand(keymaps.openHelp.common, function (state, dispatch) {
        var tr = state.tr;
        var isVisible = tr.getMeta(exports.pluginKey);
        if (!isVisible) {
            analytics_1.analyticsService.trackEvent('atlassian.editor.help.keyboard');
            tr = analytics_2.addAnalytics(state, tr, {
                action: analytics_2.ACTION.CLICKED,
                actionSubject: analytics_2.ACTION_SUBJECT.BUTTON,
                actionSubjectId: analytics_2.ACTION_SUBJECT_ID.BUTTON_HELP,
                attributes: { inputMethod: analytics_2.INPUT_METHOD.SHORTCUT },
                eventType: analytics_2.EVENT_TYPE.UI,
            });
            exports.openHelpCommand(tr, dispatch);
        }
        return true;
    }, list);
    return prosemirror_keymap_1.keymap(list);
};
exports.default = helpDialog;
//# sourceMappingURL=index.js.map