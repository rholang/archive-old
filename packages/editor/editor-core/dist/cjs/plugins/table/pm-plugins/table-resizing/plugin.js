"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_state_1 = require("prosemirror-state");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var utils_1 = require("./utils");
var types_1 = require("../../types");
var event_handlers_1 = require("./event-handlers");
var plugin_state_factory_1 = require("../../../../utils/plugin-state-factory");
var reducer_1 = tslib_1.__importDefault(require("./reducer"));
var commands_1 = require("./commands");
exports.pluginKey = new prosemirror_state_1.PluginKey('tableFlexiColumnResizing');
function mapping(tr, pluginState) {
    if (pluginState && pluginState.resizeHandlePos !== null) {
        return tslib_1.__assign(tslib_1.__assign({}, pluginState), { resizeHandlePos: tr.mapping.map(pluginState.resizeHandlePos) });
    }
    return pluginState;
}
var _a = plugin_state_factory_1.pluginFactory(exports.pluginKey, reducer_1.default, {
    mapping: mapping,
}), createPluginState = _a.createPluginState, createCommand = _a.createCommand, getPluginState = _a.getPluginState;
exports.createCommand = createCommand;
exports.getPluginState = getPluginState;
function createPlugin(dispatch, _a) {
    var _b = _a.lastColumnResizable, lastColumnResizable = _b === void 0 ? true : _b, _c = _a.dynamicTextSizing, dynamicTextSizing = _c === void 0 ? false : _c;
    return new prosemirror_state_1.Plugin({
        key: exports.pluginKey,
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
                    class: classnames_1.default(types_1.TableCssClassName.RESIZING_PLUGIN, (_a = {},
                        _a[types_1.TableCssClassName.RESIZE_CURSOR] = pluginState.resizeHandlePos !== null,
                        _a[types_1.TableCssClassName.IS_RESIZING] = !!pluginState.dragging,
                        _a)),
                };
            },
            handleDOMEvents: {
                mousedown: function (view, event) {
                    var state = view.state;
                    var resizeHandlePos = 
                    // we're setting `resizeHandlePos` via command in unit tests
                    getPluginState(state).resizeHandlePos ||
                        utils_1.getResizeCellPos(view, event, lastColumnResizable);
                    var dragging = getPluginState(state).dragging;
                    if (resizeHandlePos !== null && !dragging) {
                        if (event_handlers_1.handleMouseDown(view, event, resizeHandlePos, dynamicTextSizing)) {
                            var state_1 = view.state, dispatch_1 = view.dispatch;
                            return commands_1.setResizeHandlePos(resizeHandlePos)(state_1, dispatch_1);
                        }
                    }
                    return false;
                },
            },
        },
    });
}
exports.createPlugin = createPlugin;
//# sourceMappingURL=plugin.js.map