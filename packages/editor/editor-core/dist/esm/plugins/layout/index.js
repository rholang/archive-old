import * as React from 'react';
import { layoutSection, layoutColumn } from '@atlaskit/adf-schema';
import { messages } from '../insert-block/ui/ToolbarInsertBlock';
import { default as createLayoutPlugin, pluginKey, } from './pm-plugins/main';
import { buildToolbar } from './toolbar';
import { createDefaultLayoutSection } from './actions';
import { IconLayout } from '../quick-insert/assets';
import { addAnalytics, ACTION, ACTION_SUBJECT, ACTION_SUBJECT_ID, INPUT_METHOD, EVENT_TYPE, } from '../analytics';
export { pluginKey };
var layoutPlugin = function () { return ({
    name: 'layout',
    nodes: function () {
        return [
            { name: 'layoutSection', node: layoutSection },
            { name: 'layoutColumn', node: layoutColumn },
        ];
    },
    pmPlugins: function () {
        return [
            {
                name: 'layout',
                plugin: function (_a) {
                    var props = _a.props;
                    return createLayoutPlugin(props.allowLayouts);
                },
            },
        ];
    },
    pluginsOptions: {
        floatingToolbar: function (state, intl) {
            var _a = pluginKey.getState(state), pos = _a.pos, allowBreakout = _a.allowBreakout, addSidebarLayouts = _a.addSidebarLayouts;
            if (pos !== null) {
                return buildToolbar(state, intl, pos, allowBreakout, addSidebarLayouts);
            }
            return undefined;
        },
        quickInsert: function (_a) {
            var formatMessage = _a.formatMessage;
            return [
                {
                    title: formatMessage(messages.columns),
                    description: formatMessage(messages.columnsDescription),
                    keywords: ['layout', 'section', 'column'],
                    priority: 1100,
                    icon: function () { return React.createElement(IconLayout, { label: formatMessage(messages.columns) }); },
                    action: function (insert, state) {
                        var tr = insert(createDefaultLayoutSection(state));
                        return addAnalytics(state, tr, {
                            action: ACTION.INSERTED,
                            actionSubject: ACTION_SUBJECT.DOCUMENT,
                            actionSubjectId: ACTION_SUBJECT_ID.LAYOUT,
                            attributes: {
                                inputMethod: INPUT_METHOD.QUICK_INSERT,
                            },
                            eventType: EVENT_TYPE.TRACK,
                        });
                    },
                },
            ];
        },
    },
}); };
export default layoutPlugin;
//# sourceMappingURL=index.js.map