import { __assign } from "tslib";
import { CellSelection } from 'prosemirror-tables';
import { findTable, findParentNodeOfType } from 'prosemirror-utils';
import { DecorationSet } from 'prosemirror-view';
import { defaultTableSelection } from './pm-plugins/main';
import { TableDecorations, } from './types';
import { findControlsHoverDecoration, updateNodeDecorations, createColumnControlsDecoration, createColumnSelectedDecorations, TableSortStep, } from './utils';
import { findColumnControlSelectedDecoration } from './utils/decoration';
// #endregion
var getDecorationSet = function (tr, allowControls, tableNode) {
    var decorationSet = DecorationSet.empty;
    if (allowControls && tableNode) {
        decorationSet = updateNodeDecorations(tr.doc, decorationSet, createColumnControlsDecoration(tr.selection), TableDecorations.COLUMN_CONTROLS_DECORATIONS);
    }
    if (tr.selection instanceof CellSelection && tr.selection.isColSelection()) {
        decorationSet = updateNodeDecorations(tr.doc, decorationSet, createColumnSelectedDecorations(tr), TableDecorations.COLUMN_SELECTED);
    }
    return decorationSet;
};
export var handleDocOrSelectionChanged = function (tr, pluginState) {
    var tableNode;
    var targetCellPosition;
    var table = findTable(tr.selection);
    if (table) {
        tableNode = table.node;
        var _a = tr.doc.type.schema.nodes, tableCell = _a.tableCell, tableHeader = _a.tableHeader;
        var cell = findParentNodeOfType([tableCell, tableHeader])(tr.selection);
        targetCellPosition = cell ? cell.pos : undefined;
    }
    var _b = pluginState.pluginConfig.allowControls, allowControls = _b === void 0 ? true : _b;
    var hoverDecoration = findControlsHoverDecoration(pluginState.decorationSet);
    // @see: https://product-fabric.atlassian.net/browse/ED-7304
    var selectedColumnControlsDecoration = findColumnControlSelectedDecoration(pluginState.decorationSet);
    var tableSortStep = tr.steps.find(function (step) { return step instanceof TableSortStep; });
    var ordering;
    if (tableSortStep && table && table.pos === tableSortStep.pos) {
        ordering = tableSortStep.next;
    }
    if (pluginState.tableNode !== tableNode ||
        pluginState.targetCellPosition !== targetCellPosition ||
        hoverDecoration.length ||
        selectedColumnControlsDecoration.length) {
        var decorationSet = getDecorationSet(tr, allowControls, tableNode);
        var nextPluginState = __assign(__assign(__assign({}, pluginState), defaultTableSelection), { 
            // @see: https://product-fabric.atlassian.net/browse/ED-3796
            decorationSet: decorationSet.remove(hoverDecoration), targetCellPosition: targetCellPosition,
            tableNode: tableNode,
            ordering: ordering });
        return nextPluginState;
    }
    return pluginState;
};
//# sourceMappingURL=handlers.js.map