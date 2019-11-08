"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var adf_schema_1 = require("@atlaskit/adf-schema");
var ToolbarInsertBlock_1 = require("../insert-block/ui/ToolbarInsertBlock");
var main_1 = tslib_1.__importStar(require("./pm-plugins/main"));
exports.pluginKey = main_1.pluginKey;
var toolbar_1 = require("./toolbar");
var actions_1 = require("./actions");
var assets_1 = require("../quick-insert/assets");
var analytics_1 = require("../analytics");
var layoutPlugin = function () { return ({
    name: 'layout',
    nodes: function () {
        return [
            { name: 'layoutSection', node: adf_schema_1.layoutSection },
            { name: 'layoutColumn', node: adf_schema_1.layoutColumn },
        ];
    },
    pmPlugins: function () {
        return [
            {
                name: 'layout',
                plugin: function (_a) {
                    var props = _a.props;
                    return main_1.default(props.allowLayouts);
                },
            },
        ];
    },
    pluginsOptions: {
        floatingToolbar: function (state, intl) {
            var _a = main_1.pluginKey.getState(state), pos = _a.pos, allowBreakout = _a.allowBreakout, addSidebarLayouts = _a.addSidebarLayouts;
            if (pos !== null) {
                return toolbar_1.buildToolbar(state, intl, pos, allowBreakout, addSidebarLayouts);
            }
            return undefined;
        },
        quickInsert: function (_a) {
            var formatMessage = _a.formatMessage;
            return [
                {
                    title: formatMessage(ToolbarInsertBlock_1.messages.columns),
                    description: formatMessage(ToolbarInsertBlock_1.messages.columnsDescription),
                    keywords: ['layout', 'section', 'column'],
                    priority: 1100,
                    icon: function () { return React.createElement(assets_1.IconLayout, { label: formatMessage(ToolbarInsertBlock_1.messages.columns) }); },
                    action: function (insert, state) {
                        var tr = insert(actions_1.createDefaultLayoutSection(state));
                        return analytics_1.addAnalytics(state, tr, {
                            action: analytics_1.ACTION.INSERTED,
                            actionSubject: analytics_1.ACTION_SUBJECT.DOCUMENT,
                            actionSubjectId: analytics_1.ACTION_SUBJECT_ID.LAYOUT,
                            attributes: {
                                inputMethod: analytics_1.INPUT_METHOD.QUICK_INSERT,
                            },
                            eventType: analytics_1.EVENT_TYPE.TRACK,
                        });
                    },
                },
            ];
        },
    },
}); };
exports.default = layoutPlugin;
//# sourceMappingURL=index.js.map