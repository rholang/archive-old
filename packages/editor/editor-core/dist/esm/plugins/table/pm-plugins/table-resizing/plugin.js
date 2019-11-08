import { __assign } from "tslib";
import { Plugin, PluginKey } from 'prosemirror-state';
import classnames from 'classnames';
import { getResizeCellPos } from './utils';
import { TableCssClassName as ClassName, } from '../../types';
import { handleMouseDown } from './event-handlers';
import { pluginFactory } from '../../../../utils/plugin-state-factory';
import reducer from './reducer';
import { setResizeHandlePos } from './commands';
export var pluginKey = new PluginKey('tableFlexiColumnResizing');
function mapping(tr, pluginState) {
    if (pluginState && pluginState.resizeHandlePos !== null) {
        return __assign(__assign({}, pluginState), { resizeHandlePos: tr.mapping.map(pluginState.resizeHandlePos) });
    }
    return pluginState;
}
var _a = pluginFactory(pluginKey, reducer, {
    mapping: mapping,
}), createPluginState = _a.createPluginState, createCommand = _a.createCommand, getPluginState = _a.getPluginState;
export function createPlugin(dispatch, _a) {
    var _b = _a.lastColumnResizable, lastColumnResizable = _b === void 0 ? true : _b, _c = _a.dynamicTextSizing, dynamicTextSizing = _c === void 0 ? false : _c;
    return new Plugin({
        key: pluginKey,
        state: createPluginState(dispatch, {
            lastColumnResizable: lastColumnResizable,
            dynamicTextSizing: dynamicTextSizing,
            resizeHandlePos: null,
            dragging: null,
            lastClick: null,
        }),
        props: {
            attributes: function (state) {
                var _a;
                var pluginState = getPluginState(state);
                return {
                    class: classnames(ClassName.RESIZING_PLUGIN, (_a = {},
                        _a[ClassName.RESIZE_CURSOR] = pluginState.resizeHandlePos !== null,
                        _a[ClassName.IS_RESIZING] = !!pluginState.dragging,
                        _a)),
                };
            },
            handleDOMEvents: {
                mousedown: function (view, event) {
                    var state = view.state;
                    var resizeHandlePos = 
                    // we're setting `resizeHandlePos` via command in unit tests
                    getPluginState(state).resizeHandlePos ||
                        getResizeCellPos(view, event, lastColumnResizable);
                    var dragging = getPluginState(state).dragging;
                    if (resizeHandlePos !== null && !dragging) {
                        if (handleMouseDown(view, event, resizeHandlePos, dynamicTextSizing)) {
                            var state_1 = view.state, dispatch_1 = view.dispatch;
                            return setResizeHandlePos(resizeHandlePos)(state_1, dispatch_1);
                        }
                    }
                    return false;
                },
            },
        },
    });
}
export { createCommand, getPluginState };
//# sourceMappingURL=plugin.js.map