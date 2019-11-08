"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// #region Imports
var prosemirror_tables_1 = require("prosemirror-tables");
var prosemirror_utils_1 = require("prosemirror-utils");
var main_1 = require("../pm-plugins/main");
var utils_1 = require("../utils");
var types_1 = require("../types");
// #endregion
// #region Utils
var makeArray = function (n) { return Array.from(Array(n).keys()); };
// #endregion
// #region Commands
exports.hoverMergedCells = function () {
    return main_1.createCommand(function (state) {
        var mergedCellsPositions = utils_1.getMergedCellsPositions(state.tr);
        if (!mergedCellsPositions.length) {
            return false;
        }
        var table = prosemirror_utils_1.findTable(state.tr.selection);
        if (!table) {
            return false;
        }
        var mergedCells = mergedCellsPositions.map(function (pos) { return ({
            pos: pos + table.start,
            start: pos + table.start + 1,
            node: table.node.nodeAt(pos),
        }); });
        var decorations = utils_1.createCellHoverDecoration(mergedCells, 'warning');
        return {
            type: 'HOVER_CELLS',
            data: {
                decorationSet: utils_1.updatePluginStateDecorations(state, decorations, types_1.TableDecorations.CELL_CONTROLS_HOVER),
            },
        };
    }, function (tr) { return tr.setMeta('addToHistory', false); });
};
exports.hoverColumns = function (hoveredColumns, isInDanger) {
    return main_1.createCommand(function (state) {
        var cells = prosemirror_utils_1.getCellsInColumn(hoveredColumns)(state.selection);
        if (!cells) {
            return false;
        }
        var decorations = utils_1.createControlsHoverDecoration(cells, 'column', isInDanger);
        return {
            type: 'HOVER_COLUMNS',
            data: {
                decorationSet: utils_1.updatePluginStateDecorations(state, decorations, types_1.TableDecorations.COLUMN_CONTROLS_HOVER),
                hoveredColumns: hoveredColumns,
                isInDanger: isInDanger,
            },
        };
    }, function (tr) { return tr.setMeta('addToHistory', false); });
};
exports.hoverRows = function (hoveredRows, isInDanger) {
    return main_1.createCommand(function (state) {
        var cells = prosemirror_utils_1.getCellsInRow(hoveredRows)(state.selection);
        if (!cells) {
            return false;
        }
        var decorations = utils_1.createControlsHoverDecoration(cells, 'row', isInDanger);
        return {
            type: 'HOVER_ROWS',
            data: {
                decorationSet: utils_1.updatePluginStateDecorations(state, decorations, types_1.TableDecorations.ROW_CONTROLS_HOVER),
                hoveredRows: hoveredRows,
                isInDanger: isInDanger,
            },
        };
    }, function (tr) { return tr.setMeta('addToHistory', false); });
};
exports.hoverTable = function (isInDanger) {
    return main_1.createCommand(function (state) {
        var table = prosemirror_utils_1.findTable(state.selection);
        if (!table) {
            return false;
        }
        var map = prosemirror_tables_1.TableMap.get(table.node);
        var hoveredColumns = makeArray(map.width);
        var hoveredRows = makeArray(map.height);
        var cells = prosemirror_utils_1.getCellsInRow(hoveredRows)(state.selection);
        if (!cells) {
            return false;
        }
        var decorations = utils_1.createControlsHoverDecoration(cells, 'table', isInDanger);
        return {
            type: 'HOVER_TABLE',
            data: {
                decorationSet: utils_1.updatePluginStateDecorations(state, decorations, types_1.TableDecorations.TABLE_CONTROLS_HOVER),
                hoveredColumns: hoveredColumns,
                hoveredRows: hoveredRows,
                isInDanger: isInDanger,
            },
        };
    }, function (tr) { return tr.setMeta('addToHistory', false); });
};
exports.clearHoverSelection = function () {
    return main_1.createCommand(function (state) { return ({
        type: 'CLEAR_HOVER_SELECTION',
        data: {
            decorationSet: utils_1.updatePluginStateDecorations(state, [], types_1.TableDecorations.ALL_CONTROLS_HOVER),
        },
    }); });
};
// #endregion
//# sourceMappingURL=hover.js.map