"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_tables_1 = require("prosemirror-tables");
var prosemirror_utils_1 = require("prosemirror-utils");
var prosemirror_view_1 = require("prosemirror-view");
var main_1 = require("./pm-plugins/main");
var types_1 = require("./types");
var utils_1 = require("./utils");
var decoration_1 = require("./utils/decoration");
// #endregion
var getDecorationSet = function (tr, allowControls, tableNode) {
    var decorationSet = prosemirror_view_1.DecorationSet.empty;
    if (allowControls && tableNode) {
        decorationSet = utils_1.updateNodeDecorations(tr.doc, decorationSet, utils_1.createColumnControlsDecoration(tr.selection), types_1.TableDecorations.COLUMN_CONTROLS_DECORATIONS);
    }
    if (tr.selection instanceof prosemirror_tables_1.CellSelection && tr.selection.isColSelection()) {
        decorationSet = utils_1.updateNodeDecorations(tr.doc, decorationSet, utils_1.createColumnSelectedDecorations(tr), types_1.TableDecorations.COLUMN_SELECTED);
    }
    return decorationSet;
};
exports.handleDocOrSelectionChanged = function (tr, pluginState) {
    var tableNode;
    var targetCellPosition;
    var table = prosemirror_utils_1.findTable(tr.selection);
    if (table) {
        tableNode = table.node;
        var _a = tr.doc.type.schema.nodes, tableCell = _a.tableCell, tableHeader = _a.tableHeader;
        var cell = prosemirror_utils_1.findParentNodeOfType([tableCell, tableHeader])(tr.selection);
        targetCellPosition = cell ? cell.pos : undefined;
    }
    var _b = pluginState.pluginConfig.allowControls, allowControls = _b === void 0 ? true : _b;
    var hoverDecoration = utils_1.findControlsHoverDecoration(pluginState.decorationSet);
    // @see: https://product-fabric.atlassian.net/browse/ED-7304
    var selectedColumnControlsDecoration = decoration_1.findColumnControlSelectedDecoration(pluginState.decorationSet);
    var tableSortStep = tr.steps.find(function (step) { return step instanceof utils_1.TableSortStep; });
    var ordering;
    if (tableSortStep && table && table.pos === tableSortStep.pos) {
        ordering = tableSortStep.next;
    }
    if (pluginState.tableNode !== tableNode ||
        pluginState.targetCellPosition !== targetCellPosition ||
        hoverDecoration.length ||
        selectedColumnControlsDecoration.length) {
        var decorationSet = getDecorationSet(tr, allowControls, tableNode);
        var nextPluginState = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, pluginState), main_1.defaultTableSelection), { 
            // @see: https://product-fabric.atlassian.net/browse/ED-3796
            decorationSet: decorationSet.remove(hoverDecoration), targetCellPosition: targetCellPosition,
            tableNode: tableNode,
            ordering: ordering });
        return nextPluginState;
    }
    return pluginState;
};
//# sourceMappingURL=handlers.js.map