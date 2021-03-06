// #region Imports
import { TableMap } from 'prosemirror-tables';
import { findTable, getCellsInColumn, getCellsInRow } from 'prosemirror-utils';
import { createCommand } from '../pm-plugins/main';
import { updatePluginStateDecorations, createCellHoverDecoration, createControlsHoverDecoration, getMergedCellsPositions, } from '../utils';
import { TableDecorations } from '../types';
// #endregion
// #region Utils
var makeArray = function (n) { return Array.from(Array(n).keys()); };
// #endregion
// #region Commands
export var hoverMergedCells = function () {
    return createCommand(function (state) {
        var mergedCellsPositions = getMergedCellsPositions(state.tr);
        if (!mergedCellsPositions.length) {
            return false;
        }
        var table = findTable(state.tr.selection);
        if (!table) {
            return false;
        }
        var mergedCells = mergedCellsPositions.map(function (pos) { return ({
            pos: pos + table.start,
            start: pos + table.start + 1,
            node: table.node.nodeAt(pos),
        }); });
        var decorations = createCellHoverDecoration(mergedCells, 'warning');
        return {
            type: 'HOVER_CELLS',
            data: {
                decorationSet: updatePluginStateDecorations(state, decorations, TableDecorations.CELL_CONTROLS_HOVER),
            },
        };
    }, function (tr) { return tr.setMeta('addToHistory', false); });
};
export var hoverColumns = function (hoveredColumns, isInDanger) {
    return createCommand(function (state) {
        var cells = getCellsInColumn(hoveredColumns)(state.selection);
        if (!cells) {
            return false;
        }
        var decorations = createControlsHoverDecoration(cells, 'column', isInDanger);
        return {
            type: 'HOVER_COLUMNS',
            data: {
                decorationSet: updatePluginStateDecorations(state, decorations, TableDecorations.COLUMN_CONTROLS_HOVER),
                hoveredColumns: hoveredColumns,
                isInDanger: isInDanger,
            },
        };
    }, function (tr) { return tr.setMeta('addToHistory', false); });
};
export var hoverRows = function (hoveredRows, isInDanger) {
    return createCommand(function (state) {
        var cells = getCellsInRow(hoveredRows)(state.selection);
        if (!cells) {
            return false;
        }
        var decorations = createControlsHoverDecoration(cells, 'row', isInDanger);
        return {
            type: 'HOVER_ROWS',
            data: {
                decorationSet: updatePluginStateDecorations(state, decorations, TableDecorations.ROW_CONTROLS_HOVER),
                hoveredRows: hoveredRows,
                isInDanger: isInDanger,
            },
        };
    }, function (tr) { return tr.setMeta('addToHistory', false); });
};
export var hoverTable = function (isInDanger) {
    return createCommand(function (state) {
        var table = findTable(state.selection);
        if (!table) {
            return false;
        }
        var map = TableMap.get(table.node);
        var hoveredColumns = makeArray(map.width);
        var hoveredRows = makeArray(map.height);
        var cells = getCellsInRow(hoveredRows)(state.selection);
        if (!cells) {
            return false;
        }
        var decorations = createControlsHoverDecoration(cells, 'table', isInDanger);
        return {
            type: 'HOVER_TABLE',
            data: {
                decorationSet: updatePluginStateDecorations(state, decorations, TableDecorations.TABLE_CONTROLS_HOVER),
                hoveredColumns: hoveredColumns,
                hoveredRows: hoveredRows,
                isInDanger: isInDanger,
            },
        };
    }, function (tr) { return tr.setMeta('addToHistory', false); });
};
export var clearHoverSelection = function () {
    return createCommand(function (state) { return ({
        type: 'CLEAR_HOVER_SELECTION',
        data: {
            decorationSet: updatePluginStateDecorations(state, [], TableDecorations.ALL_CONTROLS_HOVER),
        },
    }); });
};
// #endregion
//# sourceMappingURL=hover.js.map