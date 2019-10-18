// #region Imports
import { TableMap } from 'prosemirror-tables';
import { findTable, getCellsInColumn, getCellsInRow } from 'prosemirror-utils';
import { createCommand } from '../pm-plugins/main';
import {
  updatePluginStateDecorations,
  createCellHoverDecoration,
  createControlsHoverDecoration,
  getMergedCellsPositions,
} from '../utils';
import { TableDecorations, Cell } from '../types';
// #endregion

// #region Utils
const makeArray = (n: number) => Array.from(Array(n).keys());
// #endregion

// #region Commands
export const hoverMergedCells = () =>
  createCommand(
    state => {
      const mergedCellsPositions = getMergedCellsPositions(state.tr);
      if (!mergedCellsPositions.length) {
        return false;
      }
      const table = findTable(state.tr.selection);
      if (!table) {
        return false;
      }

      const mergedCells: Cell[] = mergedCellsPositions.map(pos => ({
        pos: pos + table.start,
        start: pos + table.start + 1,
        node: table.node.nodeAt(pos)!,
      }));

      const decorations = createCellHoverDecoration(mergedCells, 'warning');

      return {
        type: 'HOVER_CELLS',
        data: {
          decorationSet: updatePluginStateDecorations(
            state,
            decorations,
            TableDecorations.CELL_CONTROLS_HOVER,
          ),
        },
      };
    },
    tr => tr.setMeta('addToHistory', false),
  );

export const hoverColumns = (hoveredColumns: number[], isInDanger?: boolean) =>
  createCommand(
    state => {
      const cells = getCellsInColumn(hoveredColumns)(state.selection);
      if (!cells) {
        return false;
      }
      const decorations = createControlsHoverDecoration(
        cells,
        'column',
        isInDanger,
      );

      return {
        type: 'HOVER_COLUMNS',
        data: {
          decorationSet: updatePluginStateDecorations(
            state,
            decorations,
            TableDecorations.COLUMN_CONTROLS_HOVER,
          ),
          hoveredColumns,
          isInDanger,
        },
      };
    },
    tr => tr.setMeta('addToHistory', false),
  );

export const hoverRows = (hoveredRows: number[], isInDanger?: boolean) =>
  createCommand(
    state => {
      const cells = getCellsInRow(hoveredRows)(state.selection);
      if (!cells) {
        return false;
      }
      const decorations = createControlsHoverDecoration(
        cells,
        'row',
        isInDanger,
      );

      return {
        type: 'HOVER_ROWS',
        data: {
          decorationSet: updatePluginStateDecorations(
            state,
            decorations,
            TableDecorations.ROW_CONTROLS_HOVER,
          ),
          hoveredRows,
          isInDanger,
        },
      };
    },
    tr => tr.setMeta('addToHistory', false),
  );

export const hoverTable = (isInDanger?: boolean) =>
  createCommand(
    state => {
      const table = findTable(state.selection);
      if (!table) {
        return false;
      }
      const map = TableMap.get(table.node);
      const hoveredColumns = makeArray(map.width);
      const hoveredRows = makeArray(map.height);
      const cells = getCellsInRow(hoveredRows)(state.selection);
      if (!cells) {
        return false;
      }
      const decorations = createControlsHoverDecoration(
        cells,
        'table',
        isInDanger,
      );

      return {
        type: 'HOVER_TABLE',
        data: {
          decorationSet: updatePluginStateDecorations(
            state,
            decorations,
            TableDecorations.TABLE_CONTROLS_HOVER,
          ),
          hoveredColumns,
          hoveredRows,
          isInDanger,
        },
      };
    },
    tr => tr.setMeta('addToHistory', false),
  );

export const clearHoverSelection = () =>
  createCommand(state => ({
    type: 'CLEAR_HOVER_SELECTION',
    data: {
      decorationSet: updatePluginStateDecorations(
        state,
        [],
        TableDecorations.ALL_CONTROLS_HOVER,
      ),
    },
  }));
// #endregion
