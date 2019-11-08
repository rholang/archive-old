"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var raf_schd_1 = tslib_1.__importDefault(require("raf-schd"));
var prosemirror_state_1 = require("prosemirror-state");
var prosemirror_utils_1 = require("prosemirror-utils");
var editor_common_1 = require("@atlaskit/editor-common");
var WithPluginState_1 = tslib_1.__importDefault(require("../../ui/WithPluginState"));
var ToolbarLoader_1 = require("./ui/ToolbarLoader");
var editor_disabled_1 = require("../editor-disabled");
exports.getRelevantConfig = function (selection, configs) {
    // node selections always take precedence, see if
    var configPair;
    configs.find(function (config) {
        var node = prosemirror_utils_1.findSelectedNodeOfType(config.nodeType)(selection);
        if (node) {
            configPair = {
                node: node.node,
                pos: node.pos,
                config: config,
            };
        }
        return !!node;
    });
    if (configPair) {
        return configPair;
    }
    // create mapping of node type name to configs
    var configByNodeType = {};
    configs.forEach(function (config) {
        if (Array.isArray(config.nodeType)) {
            config.nodeType.forEach(function (nodeType) {
                configByNodeType[nodeType.name] = config;
            });
        }
        else {
            configByNodeType[config.nodeType.name] = config;
        }
    });
    // search up the tree from selection
    var $from = selection.$from;
    for (var i = $from.depth; i > 0; i--) {
        var node = $from.node(i);
        var matchedConfig = configByNodeType[node.type.name];
        if (matchedConfig) {
            return { config: matchedConfig, node: node, pos: $from.pos };
        }
    }
    return;
};
var getDomRefFromSelection = function (view) {
    return prosemirror_utils_1.findDomRefAtPos(view.state.selection.from, view.domAtPos.bind(view));
};
function filterUndefined(x) {
    return !!x;
}
var floatingToolbarPlugin = function () { return ({
    name: 'floatingToolbar',
    pmPlugins: function (floatingToolbarHandlers) {
        if (floatingToolbarHandlers === void 0) { floatingToolbarHandlers = []; }
        return [
            {
                // Should be after all toolbar plugins
                name: 'floatingToolbar',
                plugin: function (_a) {
                    var dispatch = _a.dispatch, reactContext = _a.reactContext, providerFactory = _a.providerFactory;
                    return floatingToolbarPluginFactory({
                        dispatch: dispatch,
                        floatingToolbarHandlers: floatingToolbarHandlers,
                        reactContext: reactContext,
                        providerFactory: providerFactory,
                    });
                },
            },
        ];
    },
    contentComponent: function (_a) {
        var popupsMountPoint = _a.popupsMountPoint, popupsBoundariesElement = _a.popupsBoundariesElement, popupsScrollableElement = _a.popupsScrollableElement, editorView = _a.editorView, providerFactory = _a.providerFactory, dispatchAnalyticsEvent = _a.dispatchAnalyticsEvent;
        return (React.createElement(WithPluginState_1.default, { plugins: {
                floatingToolbarState: pluginKey,
                editorDisabledPlugin: editor_disabled_1.pluginKey,
            }, render: function (_a) {
                var editorDisabledPlugin = _a.editorDisabledPlugin, floatingToolbarState = _a.floatingToolbarState;
                if (!floatingToolbarState ||
                    !floatingToolbarState.config ||
                    (typeof floatingToolbarState.config.visible !== 'undefined' &&
                        !floatingToolbarState.config.visible)) {
                    return null;
                }
                var _b = floatingToolbarState.config, title = _b.title, _c = _b.getDomRef, getDomRef = _c === void 0 ? getDomRefFromSelection : _c, items = _b.items, _d = _b.align, align = _d === void 0 ? 'center' : _d, _e = _b.className, className = _e === void 0 ? '' : _e, height = _b.height, width = _b.width, _f = _b.offset, offset = _f === void 0 ? [0, 12] : _f, forcePlacement = _b.forcePlacement;
                var targetRef = getDomRef(editorView);
                if (!targetRef ||
                    (editorDisabledPlugin && editorDisabledPlugin.editorDisabled)) {
                    return null;
                }
                var toolbarItems = Array.isArray(items)
                    ? items
                    : items(floatingToolbarState.node);
                return (React.createElement(editor_common_1.Popup, { ariaLabel: title, offset: offset, target: targetRef, alignY: "bottom", forcePlacement: forcePlacement, fitHeight: height, fitWidth: width, alignX: align, stick: true, mountTo: popupsMountPoint, boundariesElement: popupsBoundariesElement, scrollableElement: popupsScrollableElement },
                    React.createElement(ToolbarLoader_1.ToolbarLoader, { target: targetRef, items: toolbarItems, node: floatingToolbarState.node, dispatchCommand: function (fn) {
                            return fn && fn(editorView.state, editorView.dispatch);
                        }, editorView: editorView, className: className, focusEditor: function () { return editorView.focus(); }, providerFactory: providerFactory, popupsMountPoint: popupsMountPoint, popupsBoundariesElement: popupsBoundariesElement, popupsScrollableElement: popupsScrollableElement, dispatchAnalyticsEvent: dispatchAnalyticsEvent })));
            } }));
    },
}); };
exports.default = floatingToolbarPlugin;
/**
 *
 * ProseMirror Plugin
 *
 */
// We throttle update of this plugin with RAF.
// So from other plugins you will always get the previous state.
// To prevent the confusion we are not exporting the plugin key.
var pluginKey = new prosemirror_state_1.PluginKey('floatingToolbarPluginKey');
/**
 * Clean up floating toolbar configs from undesired properties.
 */
function sanitizeFloatingToolbarConfig(config) {
    // Cleanup from non existing node types
    if (Array.isArray(config.nodeType)) {
        return tslib_1.__assign(tslib_1.__assign({}, config), { nodeType: config.nodeType.filter(filterUndefined) });
    }
    return config;
}
function floatingToolbarPluginFactory(options) {
    var floatingToolbarHandlers = options.floatingToolbarHandlers, dispatch = options.dispatch, reactContext = options.reactContext, providerFactory = options.providerFactory;
    var apply = function (_tr, _pluginState, _oldState, newState) {
        var intl = reactContext().intl;
        var activeConfigs = floatingToolbarHandlers
            .map(function (handler) { return handler(newState, intl, providerFactory); })
            .filter(filterUndefined)
            .map(function (config) { return sanitizeFloatingToolbarConfig(config); });
        var relevantConfig = activeConfigs && exports.getRelevantConfig(newState.selection, activeConfigs);
        dispatch(pluginKey, relevantConfig);
        return relevantConfig;
    };
    var rafApply = raf_schd_1.default(apply);
    return new prosemirror_state_1.Plugin({
        key: pluginKey,
        state: {
            init: function () {
                ToolbarLoader_1.ToolbarLoader.preload();
            },
            apply: rafApply,
        },
        view: function () { return ({
            destroy: function () {
                rafApply.cancel();
            },
        }); },
    });
}
//# sourceMappingURL=index.js.map