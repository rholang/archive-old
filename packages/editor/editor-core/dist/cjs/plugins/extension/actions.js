"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_utils_1 = require("prosemirror-utils");
var prosemirror_model_1 = require("prosemirror-model");
var prosemirror_state_1 = require("prosemirror-state");
var prosemirror_utils_2 = require("prosemirror-utils");
var plugin_1 = require("./plugin");
var macro_1 = require("../macro");
var utils_1 = require("./utils");
var slice_1 = require("../../utils/slice");
exports.updateExtensionLayout = function (layout) { return function (state, dispatch) {
    var selection = state.selection, schema = state.schema, tr = state.tr;
    var _a = schema.nodes, bodiedExtension = _a.bodiedExtension, extension = _a.extension, inlineExtension = _a.inlineExtension;
    var parentExtNode = prosemirror_utils_1.findParentNodeOfType([bodiedExtension])(selection);
    var extPosition;
    var extNode;
    var selectedNode = prosemirror_utils_2.findSelectedNodeOfType([
        bodiedExtension,
        inlineExtension,
        extension,
    ])(selection);
    if (!parentExtNode && !selectedNode) {
        return false;
    }
    if (selectedNode) {
        extPosition = selectedNode.pos;
        extNode = selectedNode.node;
    }
    else {
        extPosition = parentExtNode.pos;
        extNode = parentExtNode.node;
    }
    var pluginState = plugin_1.pluginKey.getState(state);
    tr.setNodeMarkup(extPosition, undefined, tslib_1.__assign(tslib_1.__assign({}, extNode.attrs), { layout: layout })).setMeta(plugin_1.pluginKey, tslib_1.__assign(tslib_1.__assign({}, pluginState), { layout: layout }));
    if (dispatch) {
        dispatch(tr);
    }
    return true;
}; };
exports.updateExtensionParams = function (updateExtension, node) { return function (state, dispatch) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var parameters, newParameters, newAttrs, newNode, transaction;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!state.schema.nodes.extension) {
                    return [2 /*return*/];
                }
                parameters = node.node.attrs.parameters;
                return [4 /*yield*/, updateExtension(parameters)];
            case 1:
                newParameters = _a.sent();
                if (newParameters) {
                    newAttrs = tslib_1.__assign(tslib_1.__assign({}, node.node.attrs), { parameters: tslib_1.__assign(tslib_1.__assign({}, parameters), newParameters) });
                    newNode = state.schema.nodes.extension.createChecked(newAttrs);
                    if (!newNode) {
                        return [2 /*return*/];
                    }
                    transaction = prosemirror_utils_1.replaceSelectedNode(newNode)(state.tr);
                    // Replacing selected node doesn't update the selection. `selection.node` still returns the old node
                    transaction = transaction.setSelection(prosemirror_state_1.NodeSelection.create(transaction.doc, state.selection.anchor));
                    if (dispatch) {
                        dispatch(transaction.scrollIntoView());
                    }
                }
                return [2 /*return*/];
        }
    });
}); }; };
exports.editExtension = function (macroProvider, updateExtension) { return function (state, dispatch) {
    var node = utils_1.getExtensionNode(state);
    if (!node) {
        return false;
    }
    if (updateExtension) {
        exports.updateExtensionParams(updateExtension, node)(state, dispatch);
        return true;
    }
    if (!macroProvider) {
        return false;
    }
    macro_1.insertMacroFromMacroBrowser(macroProvider, node.node, true)(state, dispatch);
    return true;
}; };
exports.removeExtension = function () { return function (state, dispatch) {
    var schema = state.schema, selection = state.selection;
    var pluginState = plugin_1.pluginKey.getState(state);
    var tr = state.tr.setMeta(plugin_1.pluginKey, tslib_1.__assign(tslib_1.__assign({}, pluginState), { element: null }));
    if (utils_1.isSelectionNodeExtension(selection, schema)) {
        tr = prosemirror_utils_2.removeSelectedNode(tr);
    }
    else {
        tr = prosemirror_utils_2.removeParentNodeOfType(schema.nodes.bodiedExtension)(tr);
    }
    if (dispatch) {
        dispatch(tr);
    }
    return true;
}; };
/**
 * Lift content out of "open" top-level bodiedExtensions.
 * Will not work if bodiedExtensions are nested, or when bodiedExtensions are not in the top level
 */
exports.transformSliceToRemoveOpenBodiedExtension = function (slice, schema) {
    var bodiedExtension = schema.nodes.bodiedExtension;
    var fragment = slice_1.mapFragment(slice.content, function (node, parent, index) {
        if (node.type === bodiedExtension && !parent) {
            var currentNodeIsAtStartAndIsOpen = slice.openStart && index === 0;
            var currentNodeIsAtEndAndIsOpen = slice.openEnd && index + 1 === slice.content.childCount;
            if (currentNodeIsAtStartAndIsOpen || currentNodeIsAtEndAndIsOpen) {
                return node.content;
            }
        }
        return node;
    });
    // If the first/last child has changed - then we know we've removed a bodied extension & to decrement the open depth
    return new prosemirror_model_1.Slice(fragment, fragment.firstChild &&
        fragment.firstChild.type !== slice.content.firstChild.type
        ? slice.openStart - 1
        : slice.openStart, fragment.lastChild &&
        fragment.lastChild.type !== slice.content.lastChild.type
        ? slice.openEnd - 1
        : slice.openEnd);
};
//# sourceMappingURL=actions.js.map