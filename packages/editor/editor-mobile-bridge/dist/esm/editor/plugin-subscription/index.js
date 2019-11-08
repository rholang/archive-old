import { __assign, __values } from "tslib";
import { textFormattingStateKey, blockPluginStateKey, listsStateKey, statusPluginKey, textColorPluginKey, typeAheadPluginKey, hyperlinkStateKey, HyperlinkInsertStatus, historyPluginKey, } from '@atlaskit/editor-core';
import { valueOf as valueOfListState } from '../web-to-native/listState';
import { valueOf as valueOfMarkState } from '../web-to-native/markState';
import { toNativeBridge } from '../web-to-native';
import { hasValue } from '../../utils';
var createListenerConfig = function (config) { return config; };
var configs = [
    createListenerConfig({
        bridge: 'statusBridge',
        pluginKey: statusPluginKey,
        updater: function (pluginState, view) {
            var showStatusPickerAt = pluginState.showStatusPickerAt, isNew = pluginState.isNew;
            var status;
            if (view && showStatusPickerAt) {
                var node = view.state.doc.nodeAt(showStatusPickerAt);
                if (node && node.type === view.state.schema.nodes.status) {
                    status = __assign({}, node.attrs);
                }
            }
            if (status) {
                toNativeBridge.call('statusBridge', 'showStatusPicker', {
                    text: status.text,
                    color: status.color,
                    uuid: status.localId,
                    isNew: isNew,
                });
            }
            else if (!showStatusPickerAt) {
                toNativeBridge.call('statusBridge', 'dismissStatusPicker', { isNew: isNew });
            }
        },
    }),
    createListenerConfig({
        bridge: 'textFormatBridge',
        pluginKey: textFormattingStateKey,
        updater: function (pluginState) {
            toNativeBridge.call('textFormatBridge', 'updateTextFormat', {
                states: JSON.stringify(valueOfMarkState(pluginState)),
            });
        },
    }),
    createListenerConfig({
        bridge: 'blockFormatBridge',
        pluginKey: blockPluginStateKey,
        updater: function (pluginState) {
            /**
             * Currently `updateBlockState` is on different bridges in native land.
             * We have a ticket to align on the naming.
             * @see https://product-fabric.atlassian.net/browse/FM-1341
             */
            if (window.webkit) {
                // iOS
                toNativeBridge.call('blockFormatBridge', 'updateBlockState', {
                    states: pluginState.currentBlockType.name,
                });
            }
            else {
                // Android
                toNativeBridge.call('textFormatBridge', 'updateBlockState', {
                    states: pluginState.currentBlockType.name,
                });
            }
        },
    }),
    createListenerConfig({
        bridge: 'listBridge',
        pluginKey: listsStateKey,
        updater: function (pluginState) {
            toNativeBridge.call('listBridge', 'updateListState', {
                states: JSON.stringify(valueOfListState(pluginState)),
            });
        },
    }),
    createListenerConfig({
        bridge: 'textFormatBridge',
        pluginKey: textColorPluginKey,
        updater: function (pluginState, _view, initialPass) {
            var e_1, _a;
            var color = pluginState.color || null;
            var serialisedState = {
                color: color,
                disabled: pluginState.disabled,
            };
            if (initialPass) {
                var palette = Object.create(null);
                var borderColorPalette = Object.create(null);
                try {
                    for (var _b = __values(pluginState.palette), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var _d = _c.value, value = _d.value, label = _d.label, border = _d.border;
                        borderColorPalette[label.toLowerCase().replace(' ', '-')] = border;
                        palette[label] = value;
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                serialisedState = __assign(__assign({}, pluginState), { color: color,
                    borderColorPalette: borderColorPalette,
                    palette: palette });
            }
            toNativeBridge.call('textFormatBridge', 'updateTextColor', {
                states: JSON.stringify(serialisedState),
            });
        },
        sendInitialState: true,
    }),
    createListenerConfig({
        bridge: 'typeAheadBridge',
        pluginKey: typeAheadPluginKey,
        updater: function (pluginState) {
            var active = pluginState.active, query = pluginState.query, trigger = pluginState.trigger;
            if (active === false) {
                toNativeBridge.call('typeAheadBridge', 'dismissTypeAhead');
                return;
            }
            toNativeBridge.call('typeAheadBridge', 'typeAheadQuery', {
                query: query,
                trigger: trigger,
            });
        },
    }),
    createListenerConfig({
        bridge: 'linkBridge',
        pluginKey: hyperlinkStateKey,
        updater: function (pluginState, view) {
            var activeText = pluginState.activeText, activeLinkMark = pluginState.activeLinkMark, canInsertLink = pluginState.canInsertLink;
            var message = {
                text: '',
                url: '',
                top: -1,
                right: -1,
                bottom: -1,
                left: -1,
            };
            if (view && activeLinkMark && !!activeLinkMark.node) {
                var coords = view.coordsAtPos(activeLinkMark.pos);
                message.top = coords.top;
                message.right = coords.right;
                message.bottom = coords.bottom;
                message.left = coords.left;
            }
            if (activeLinkMark &&
                activeLinkMark.type === HyperlinkInsertStatus.EDIT_LINK_TOOLBAR) {
                var linkType_1 = activeLinkMark.node.type.schema.marks.link;
                var linkText = activeLinkMark.node.textContent;
                message.text = linkText || '';
                message.url =
                    activeLinkMark.node.marks
                        .filter(function (mark) { return mark.type === linkType_1; })
                        .map(function (link) { return link.attrs.href; })
                        .pop() || '';
            }
            if (canInsertLink && message.text.length === 0 && hasValue(activeText)) {
                message.text = activeText;
            }
            toNativeBridge.call('linkBridge', 'currentSelection', message);
        },
    }),
    createListenerConfig({
        bridge: 'undoRedoBridge',
        pluginKey: historyPluginKey,
        updater: function (pluginState, view) {
            toNativeBridge.call('undoRedoBridge', 'stateChanged', {
                canUndo: pluginState.canUndo,
                canRedo: pluginState.canRedo,
            });
        },
    }),
];
export function initPluginListeners(eventDispatcher, bridge, view) {
    configs.forEach(function (config) {
        var updater = config.updater, pluginKey = config.pluginKey;
        var pluginState = pluginKey.getState(view.state);
        bridge[config.bridge + "State"] = __assign(__assign({}, bridge[config.bridge + "State"]), pluginState);
        bridge[config.bridge + "Listener"] = function (pluginState, initialPass) { return updater(pluginState, view, initialPass); };
        if (config.sendInitialState && pluginState) {
            bridge[config.bridge + "Listener"](pluginState, true);
        }
        eventDispatcher.on(pluginKey.key, bridge[config.bridge + "Listener"]);
    });
}
export function destroyPluginListeners(eventDispatcher, bridge) {
    configs.forEach(function (config) {
        bridge[config.bridge + "State"] = undefined;
        eventDispatcher.off(config.pluginKey.key, bridge[config.bridge + "Listener"]);
        bridge[config.bridge + "Listener"] = undefined;
    });
}
//# sourceMappingURL=index.js.map