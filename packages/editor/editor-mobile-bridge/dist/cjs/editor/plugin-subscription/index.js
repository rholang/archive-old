"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var editor_core_1 = require("@atlaskit/editor-core");
var listState_1 = require("../web-to-native/listState");
var markState_1 = require("../web-to-native/markState");
var web_to_native_1 = require("../web-to-native");
var utils_1 = require("../../utils");
var createListenerConfig = function (config) { return config; };
var configs = [
    createListenerConfig({
        bridge: 'statusBridge',
        pluginKey: editor_core_1.statusPluginKey,
        updater: function (pluginState, view) {
            var showStatusPickerAt = pluginState.showStatusPickerAt, isNew = pluginState.isNew;
            var status;
            if (view && showStatusPickerAt) {
                var node = view.state.doc.nodeAt(showStatusPickerAt);
                if (node && node.type === view.state.schema.nodes.status) {
                    status = tslib_1.__assign({}, node.attrs);
                }
            }
            if (status) {
                web_to_native_1.toNativeBridge.call('statusBridge', 'showStatusPicker', {
                    text: status.text,
                    color: status.color,
                    uuid: status.localId,
                    isNew: isNew,
                });
            }
            else if (!showStatusPickerAt) {
                web_to_native_1.toNativeBridge.call('statusBridge', 'dismissStatusPicker', { isNew: isNew });
            }
        },
    }),
    createListenerConfig({
        bridge: 'textFormatBridge',
        pluginKey: editor_core_1.textFormattingStateKey,
        updater: function (pluginState) {
            web_to_native_1.toNativeBridge.call('textFormatBridge', 'updateTextFormat', {
                states: JSON.stringify(markState_1.valueOf(pluginState)),
            });
        },
    }),
    createListenerConfig({
        bridge: 'blockFormatBridge',
        pluginKey: editor_core_1.blockPluginStateKey,
        updater: function (pluginState) {
            /**
             * Currently `updateBlockState` is on different bridges in native land.
             * We have a ticket to align on the naming.
             * @see https://product-fabric.atlassian.net/browse/FM-1341
             */
            if (window.webkit) {
                // iOS
                web_to_native_1.toNativeBridge.call('blockFormatBridge', 'updateBlockState', {
                    states: pluginState.currentBlockType.name,
                });
            }
            else {
                // Android
                web_to_native_1.toNativeBridge.call('textFormatBridge', 'updateBlockState', {
                    states: pluginState.currentBlockType.name,
                });
            }
        },
    }),
    createListenerConfig({
        bridge: 'listBridge',
        pluginKey: editor_core_1.listsStateKey,
        updater: function (pluginState) {
            web_to_native_1.toNativeBridge.call('listBridge', 'updateListState', {
                states: JSON.stringify(listState_1.valueOf(pluginState)),
            });
        },
    }),
    createListenerConfig({
        bridge: 'textFormatBridge',
        pluginKey: editor_core_1.textColorPluginKey,
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
                    for (var _b = tslib_1.__values(pluginState.palette), _c = _b.next(); !_c.done; _c = _b.next()) {
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
                serialisedState = tslib_1.__assign(tslib_1.__assign({}, pluginState), { color: color,
                    borderColorPalette: borderColorPalette,
                    palette: palette });
            }
            web_to_native_1.toNativeBridge.call('textFormatBridge', 'updateTextColor', {
                states: JSON.stringify(serialisedState),
            });
        },
        sendInitialState: true,
    }),
    createListenerConfig({
        bridge: 'typeAheadBridge',
        pluginKey: editor_core_1.typeAheadPluginKey,
        updater: function (pluginState) {
            var active = pluginState.active, query = pluginState.query, trigger = pluginState.trigger;
            if (active === false) {
                web_to_native_1.toNativeBridge.call('typeAheadBridge', 'dismissTypeAhead');
                return;
            }
            web_to_native_1.toNativeBridge.call('typeAheadBridge', 'typeAheadQuery', {
                query: query,
                trigger: trigger,
            });
        },
    }),
    createListenerConfig({
        bridge: 'linkBridge',
        pluginKey: editor_core_1.hyperlinkStateKey,
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
                activeLinkMark.type === editor_core_1.HyperlinkInsertStatus.EDIT_LINK_TOOLBAR) {
                var linkType_1 = activeLinkMark.node.type.schema.marks.link;
                var linkText = activeLinkMark.node.textContent;
                message.text = linkText || '';
                message.url =
                    activeLinkMark.node.marks
                        .filter(function (mark) { return mark.type === linkType_1; })
                        .map(function (link) { return link.attrs.href; })
                        .pop() || '';
            }
            if (canInsertLink && message.text.length === 0 && utils_1.hasValue(activeText)) {
                message.text = activeText;
            }
            web_to_native_1.toNativeBridge.call('linkBridge', 'currentSelection', message);
        },
    }),
    createListenerConfig({
        bridge: 'undoRedoBridge',
        pluginKey: editor_core_1.historyPluginKey,
        updater: function (pluginState, view) {
            web_to_native_1.toNativeBridge.call('undoRedoBridge', 'stateChanged', {
                canUndo: pluginState.canUndo,
                canRedo: pluginState.canRedo,
            });
        },
    }),
];
function initPluginListeners(eventDispatcher, bridge, view) {
    configs.forEach(function (config) {
        var updater = config.updater, pluginKey = config.pluginKey;
        var pluginState = pluginKey.getState(view.state);
        bridge[config.bridge + "State"] = tslib_1.__assign(tslib_1.__assign({}, bridge[config.bridge + "State"]), pluginState);
        bridge[config.bridge + "Listener"] = function (pluginState, initialPass) { return updater(pluginState, view, initialPass); };
        if (config.sendInitialState && pluginState) {
            bridge[config.bridge + "Listener"](pluginState, true);
        }
        eventDispatcher.on(pluginKey.key, bridge[config.bridge + "Listener"]);
    });
}
exports.initPluginListeners = initPluginListeners;
function destroyPluginListeners(eventDispatcher, bridge) {
    configs.forEach(function (config) {
        bridge[config.bridge + "State"] = undefined;
        eventDispatcher.off(config.pluginKey.key, bridge[config.bridge + "Listener"]);
        bridge[config.bridge + "Listener"] = undefined;
    });
}
exports.destroyPluginListeners = destroyPluginListeners;
//# sourceMappingURL=index.js.map