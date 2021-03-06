import { __assign, __awaiter, __generator } from "tslib";
import { findParentNodeOfType, replaceSelectedNode } from 'prosemirror-utils';
import { Slice } from 'prosemirror-model';
import { NodeSelection } from 'prosemirror-state';
import { removeSelectedNode, removeParentNodeOfType, findSelectedNodeOfType, } from 'prosemirror-utils';
import { pluginKey } from './plugin';
import { insertMacroFromMacroBrowser } from '../macro';
import { getExtensionNode, isSelectionNodeExtension } from './utils';
import { mapFragment } from '../../utils/slice';
export var updateExtensionLayout = function (layout) { return function (state, dispatch) {
    var selection = state.selection, schema = state.schema, tr = state.tr;
    var _a = schema.nodes, bodiedExtension = _a.bodiedExtension, extension = _a.extension, inlineExtension = _a.inlineExtension;
    var parentExtNode = findParentNodeOfType([bodiedExtension])(selection);
    var extPosition;
    var extNode;
    var selectedNode = findSelectedNodeOfType([
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
    var pluginState = pluginKey.getState(state);
    tr.setNodeMarkup(extPosition, undefined, __assign(__assign({}, extNode.attrs), { layout: layout })).setMeta(pluginKey, __assign(__assign({}, pluginState), { layout: layout }));
    if (dispatch) {
        dispatch(tr);
    }
    return true;
}; };
export var updateExtensionParams = function (updateExtension, node) { return function (state, dispatch) { return __awaiter(void 0, void 0, void 0, function () {
    var parameters, newParameters, newAttrs, newNode, transaction;
    return __generator(this, function (_a) {
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
                    newAttrs = __assign(__assign({}, node.node.attrs), { parameters: __assign(__assign({}, parameters), newParameters) });
                    newNode = state.schema.nodes.extension.createChecked(newAttrs);
                    if (!newNode) {
                        return [2 /*return*/];
                    }
                    transaction = replaceSelectedNode(newNode)(state.tr);
                    // Replacing selected node doesn't update the selection. `selection.node` still returns the old node
                    transaction = transaction.setSelection(NodeSelection.create(transaction.doc, state.selection.anchor));
                    if (dispatch) {
                        dispatch(transaction.scrollIntoView());
                    }
                }
                return [2 /*return*/];
        }
    });
}); }; };
export var editExtension = function (macroProvider, updateExtension) { return function (state, dispatch) {
    var node = getExtensionNode(state);
    if (!node) {
        return false;
    }
    if (updateExtension) {
        updateExtensionParams(updateExtension, node)(state, dispatch);
        return true;
    }
    if (!macroProvider) {
        return false;
    }
    insertMacroFromMacroBrowser(macroProvider, node.node, true)(state, dispatch);
    return true;
}; };
export var removeExtension = function () { return function (state, dispatch) {
    var schema = state.schema, selection = state.selection;
    var pluginState = pluginKey.getState(state);
    var tr = state.tr.setMeta(pluginKey, __assign(__assign({}, pluginState), { element: null }));
    if (isSelectionNodeExtension(selection, schema)) {
        tr = removeSelectedNode(tr);
    }
    else {
        tr = removeParentNodeOfType(schema.nodes.bodiedExtension)(tr);
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
export var transformSliceToRemoveOpenBodiedExtension = function (slice, schema) {
    var bodiedExtension = schema.nodes.bodiedExtension;
    var fragment = mapFragment(slice.content, function (node, parent, index) {
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
    return new Slice(fragment, fragment.firstChild &&
        fragment.firstChild.type !== slice.content.firstChild.type
        ? slice.openStart - 1
        : slice.openStart, fragment.lastChild &&
        fragment.lastChild.type !== slice.content.lastChild.type
        ? slice.openEnd - 1
        : slice.openEnd);
};
//# sourceMappingURL=actions.js.map