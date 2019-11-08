"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var prosemirror_utils_1 = require("prosemirror-utils");
var react_loadable_1 = tslib_1.__importDefault(require("react-loadable"));
var adf_schema_1 = require("@atlaskit/adf-schema");
var editor_common_1 = require("@atlaskit/editor-common");
var WithPluginState_1 = tslib_1.__importDefault(require("../../ui/WithPluginState"));
var ToolbarInsertBlock_1 = require("../insert-block/ui/ToolbarInsertBlock");
var actions_1 = require("./actions");
var plugin_1 = tslib_1.__importStar(require("./plugin"));
var keymap_1 = tslib_1.__importDefault(require("./keymap"));
var editor_disabled_1 = require("../editor-disabled");
var assets_1 = require("../quick-insert/assets");
var analytics_1 = require("../analytics");
var DatePicker = react_loadable_1.default({
    loader: function () {
        return Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName:"@atlaskit-internal-editor-datepicker" */ './ui/DatePicker')); });
    },
    loading: function () { return null; },
});
var datePlugin = function () { return ({
    name: 'date',
    nodes: function () {
        return [{ name: 'date', node: adf_schema_1.date }];
    },
    pmPlugins: function () {
        return [
            {
                name: 'date',
                plugin: function (options) {
                    DatePicker.preload();
                    return plugin_1.default(options);
                },
            },
            {
                name: 'dateKeymap',
                plugin: function () {
                    DatePicker.preload();
                    return keymap_1.default();
                },
            },
        ];
    },
    contentComponent: function (_a) {
        var editorView = _a.editorView;
        var dispatch = editorView.dispatch;
        var domAtPos = editorView.domAtPos.bind(editorView);
        return (React.createElement(WithPluginState_1.default, { plugins: {
                datePlugin: plugin_1.pluginKey,
                editorDisabledPlugin: editor_disabled_1.pluginKey,
            }, render: function (_a) {
                var editorDisabledPlugin = _a.editorDisabledPlugin, datePlugin = _a.datePlugin;
                var showDatePickerAt = datePlugin && datePlugin.showDatePickerAt;
                if (!showDatePickerAt ||
                    (editorDisabledPlugin || {}).editorDisabled) {
                    return null;
                }
                var element = prosemirror_utils_1.findDomRefAtPos(showDatePickerAt, domAtPos);
                return (React.createElement(DatePicker, { key: showDatePickerAt, element: element, onSelect: function (date) {
                        return actions_1.insertDate(date)(editorView.state, dispatch);
                    }, closeDatePicker: function () {
                        return actions_1.setDatePickerAt(null)(editorView.state, dispatch);
                    } }));
            } }));
    },
    pluginsOptions: {
        quickInsert: function (_a) {
            var formatMessage = _a.formatMessage;
            return [
                {
                    title: formatMessage(ToolbarInsertBlock_1.messages.date),
                    description: formatMessage(ToolbarInsertBlock_1.messages.dateDescription),
                    priority: 800,
                    keywords: ['time', 'today', '/'],
                    keyshortcut: '//',
                    icon: function () { return React.createElement(assets_1.IconDate, { label: formatMessage(ToolbarInsertBlock_1.messages.date) }); },
                    action: function (insert, state) {
                        var dateNode = state.schema.nodes.date.createChecked({
                            timestamp: editor_common_1.todayTimestampInUTC(),
                        });
                        var tr = insert(dateNode, { selectInlineNode: true });
                        analytics_1.addAnalytics(state, tr, {
                            action: analytics_1.ACTION.INSERTED,
                            actionSubject: analytics_1.ACTION_SUBJECT.DOCUMENT,
                            actionSubjectId: analytics_1.ACTION_SUBJECT_ID.DATE,
                            eventType: analytics_1.EVENT_TYPE.TRACK,
                            attributes: { inputMethod: analytics_1.INPUT_METHOD.QUICK_INSERT },
                        });
                        return tr.setMeta(plugin_1.pluginKey, {
                            showDatePickerAt: tr.selection.from,
                        });
                    },
                },
            ];
        },
    },
}); };
exports.default = datePlugin;
//# sourceMappingURL=index.js.map