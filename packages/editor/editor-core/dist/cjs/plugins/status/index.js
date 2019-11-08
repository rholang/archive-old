"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var adf_schema_1 = require("@atlaskit/adf-schema");
var prosemirror_utils_1 = require("prosemirror-utils");
var plugin_1 = tslib_1.__importStar(require("./plugin"));
var WithPluginState_1 = tslib_1.__importDefault(require("../../ui/WithPluginState"));
var statusPicker_1 = tslib_1.__importDefault(require("./ui/statusPicker"));
var actions_1 = require("./actions");
var keymap_1 = require("./keymap");
var ToolbarInsertBlock_1 = require("../insert-block/ui/ToolbarInsertBlock");
var assets_1 = require("../quick-insert/assets");
var analytics_1 = require("../analytics");
var baseStatusPlugin = function (options) { return ({
    name: 'status',
    nodes: function () {
        return [{ name: 'status', node: adf_schema_1.status }];
    },
    pmPlugins: function () {
        return [
            {
                name: 'status',
                plugin: function (_a) {
                    var dispatch = _a.dispatch, portalProviderAPI = _a.portalProviderAPI;
                    return plugin_1.default(dispatch, portalProviderAPI, options);
                },
            },
            { name: 'statusKeymap', plugin: keymap_1.keymapPlugin },
        ];
    },
    contentComponent: function (_a) {
        var editorView = _a.editorView;
        var domAtPos = editorView.domAtPos.bind(editorView);
        return (React.createElement(WithPluginState_1.default, { plugins: {
                statusState: plugin_1.pluginKey,
            }, render: function (_a) {
                var _b = _a.statusState, statusState = _b === void 0 ? {} : _b;
                var showStatusPickerAt = statusState.showStatusPickerAt;
                if (typeof showStatusPickerAt !== 'number') {
                    return null;
                }
                var target = prosemirror_utils_1.findDomRefAtPos(showStatusPickerAt, domAtPos);
                var statusNode = editorView.state.doc.nodeAt(showStatusPickerAt);
                if (!statusNode || statusNode.type.name !== 'status') {
                    return null;
                }
                var _c = statusNode.attrs, text = _c.text, color = _c.color, localId = _c.localId;
                return (React.createElement(statusPicker_1.default, { isNew: statusState.isNew, target: target, defaultText: text, defaultColor: color, defaultLocalId: localId, onSelect: function (status) {
                        actions_1.updateStatus(status)(editorView.state, editorView.dispatch);
                    }, onTextChanged: function (status) {
                        actions_1.updateStatus(status)(editorView.state, editorView.dispatch);
                    }, closeStatusPicker: function () {
                        actions_1.commitStatusPicker()(editorView);
                    }, onEnter: function () {
                        actions_1.commitStatusPicker()(editorView);
                    } }));
            } }));
    },
}); };
var decorateWithPluginOptions = function (plugin, options) {
    if (options.menuDisabled === true) {
        return plugin;
    }
    plugin.pluginsOptions = {
        quickInsert: function (_a) {
            var formatMessage = _a.formatMessage;
            return [
                {
                    title: formatMessage(ToolbarInsertBlock_1.messages.status),
                    description: formatMessage(ToolbarInsertBlock_1.messages.statusDescription),
                    priority: 700,
                    keywords: ['lozenge'],
                    icon: function () { return React.createElement(assets_1.IconStatus, { label: formatMessage(ToolbarInsertBlock_1.messages.status) }); },
                    action: function (insert, state) {
                        return analytics_1.addAnalytics(state, actions_1.createStatus()(insert, state), {
                            action: analytics_1.ACTION.INSERTED,
                            actionSubject: analytics_1.ACTION_SUBJECT.DOCUMENT,
                            actionSubjectId: analytics_1.ACTION_SUBJECT_ID.STATUS,
                            attributes: {
                                inputMethod: analytics_1.INPUT_METHOD.QUICK_INSERT,
                            },
                            eventType: analytics_1.EVENT_TYPE.TRACK,
                        });
                    },
                },
            ];
        },
    };
    return plugin;
};
var statusPlugin = function (options) {
    return decorateWithPluginOptions(baseStatusPlugin(options), options);
};
exports.default = statusPlugin;
//# sourceMappingURL=index.js.map