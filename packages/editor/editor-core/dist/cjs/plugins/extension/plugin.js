"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_state_1 = require("prosemirror-state");
var extension_1 = tslib_1.__importDefault(require("./nodeviews/extension"));
var prosemirror_utils_1 = require("prosemirror-utils");
var utils_1 = require("../../utils");
var utils_2 = require("./utils");
exports.pluginKey = new prosemirror_state_1.PluginKey('extensionPlugin');
exports.default = (function (dispatch, providerFactory, extensionHandlers, portalProviderAPI, allowExtension) {
    return new prosemirror_state_1.Plugin({
        state: {
            init: function () {
                var stickToolbarToBottom = true;
                var allowBreakout = false;
                if (typeof allowExtension === 'object') {
                    stickToolbarToBottom = !!allowExtension.stickToolbarToBottom;
                    allowBreakout = !!allowExtension.allowBreakout;
                }
                return {
                    element: null,
                    layout: 'default',
                    showLayoutOptions: true,
                    stickToolbarToBottom: stickToolbarToBottom,
                    node: null,
                    allowBreakout: allowBreakout,
                };
            },
            apply: function (tr, state) {
                var nextPluginState = tr.getMeta(exports.pluginKey);
                if (nextPluginState) {
                    dispatch(exports.pluginKey, nextPluginState);
                    return nextPluginState;
                }
                return state;
            },
        },
        view: function (editorView) {
            var domAtPos = editorView.domAtPos.bind(editorView);
            return {
                update: function (view) {
                    var editorDispatch = view.dispatch, state = view.state, schema = view.state.schema;
                    /** this fetches the selected extn node, either by keyboard selection or click for all types of extns */
                    var selectedExtNode = utils_2.getExtensionNode(state);
                    var selectedExtDomNode = selectedExtNode &&
                        prosemirror_utils_1.findDomRefAtPos(selectedExtNode.pos, domAtPos);
                    var pluginState = exports.pluginKey.getState(state);
                    if (!selectedExtNode && !pluginState.element) {
                        return;
                    }
                    var _a = schema.nodes, extension = _a.extension, inlineExtension = _a.inlineExtension;
                    var isNonContentExt = prosemirror_utils_1.findSelectedNodeOfType([
                        inlineExtension,
                        extension,
                    ])(state.selection);
                    /** Non-content extension can be nested in bodied-extension, the following check is necessary for that case */
                    var newElement = selectedExtNode && selectedExtDomNode.querySelector
                        ? isNonContentExt
                            ? selectedExtDomNode.querySelector('.extension-container') ||
                                selectedExtDomNode
                            : utils_1.closestElement(selectedExtDomNode, '.extension-container') ||
                                selectedExtDomNode.querySelector('.extension-container') ||
                                selectedExtDomNode
                        : undefined;
                    if (pluginState.element !== newElement && selectedExtNode) {
                        var _b = selectedExtNode.node.attrs, extensionType = _b.extensionType, layout = _b.layout;
                        var extensionHandler = extensionHandlers[extensionType];
                        var showEditButton = true;
                        var updateExtension = void 0;
                        if (extensionHandler && typeof extensionHandler === 'object') {
                            showEditButton = !!extensionHandler.update;
                            updateExtension = extensionHandler.update;
                        }
                        editorDispatch(state.tr.setMeta(exports.pluginKey, tslib_1.__assign(tslib_1.__assign({}, pluginState), { element: newElement, layout: layout, node: selectedExtNode, showEditButton: showEditButton,
                            updateExtension: updateExtension })));
                        return true;
                    }
                    /** Required toolbar re-positioning */
                    dispatch(exports.pluginKey, tslib_1.__assign({}, pluginState));
                    return true;
                },
            };
        },
        key: exports.pluginKey,
        props: {
            nodeViews: {
                extension: extension_1.default(portalProviderAPI, providerFactory, extensionHandlers),
                bodiedExtension: extension_1.default(portalProviderAPI, providerFactory, extensionHandlers),
                inlineExtension: extension_1.default(portalProviderAPI, providerFactory, extensionHandlers),
            },
        },
    });
});
//# sourceMappingURL=plugin.js.map