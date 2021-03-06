import { findCellClosestToPos } from 'prosemirror-utils';
import { tableBackgroundColorPalette } from '@atlaskit/adf-schema';
import { analyticsService as analyticsV2, withAnalytics as withV2Analytics, } from '../../analytics';
import { withAnalytics, TABLE_ACTION, ACTION_SUBJECT, EVENT_TYPE, INPUT_METHOD, TABLE_BREAKOUT, } from '../analytics';
import { insertColumn, insertRow, clearMultipleCells, setMultipleCellAttrs, toggleHeaderRow, toggleHeaderColumn, toggleNumberColumn, deleteTable, toggleTableLayout, getNextLayout, sortByColumn, } from './commands';
import { getSelectedCellInfo, getSelectedTableInfo, checkIfNumberColumnEnabled, } from './utils';
import { getPluginState } from './pm-plugins/main';
import { mergeCells, deleteColumns, deleteRows } from './transforms';
import { splitCell } from './commands/misc';
var TABLE_BREAKOUT_NAME_MAPPING = {
    default: TABLE_BREAKOUT.NORMAL,
    wide: TABLE_BREAKOUT.WIDE,
    'full-width': TABLE_BREAKOUT.FULL_WIDTH,
};
// #region Analytics wrappers
export var emptyMultipleCellsWithAnalytics = function (inputMethod, targetCellPosition) {
    return withAnalytics(function (_a) {
        var selection = _a.selection;
        var _b = getSelectedCellInfo(selection), horizontalCells = _b.horizontalCells, verticalCells = _b.verticalCells, totalRowCount = _b.totalRowCount, totalColumnCount = _b.totalColumnCount;
        return {
            action: TABLE_ACTION.CLEARED,
            actionSubject: ACTION_SUBJECT.TABLE,
            actionSubjectId: null,
            attributes: {
                inputMethod: inputMethod,
                horizontalCells: horizontalCells,
                verticalCells: verticalCells,
                totalRowCount: totalRowCount,
                totalColumnCount: totalColumnCount,
            },
            eventType: EVENT_TYPE.TRACK,
        };
    })(withV2Analytics("atlassian.editor.format.table.delete_content." + (inputMethod === INPUT_METHOD.KEYBOARD ? 'keyboard' : 'button'), clearMultipleCells(targetCellPosition)));
};
export var mergeCellsWithAnalytics = function () {
    return withAnalytics(function (_a) {
        var selection = _a.selection;
        var _b = getSelectedCellInfo(selection), horizontalCells = _b.horizontalCells, verticalCells = _b.verticalCells, totalCells = _b.totalCells, totalRowCount = _b.totalRowCount, totalColumnCount = _b.totalColumnCount;
        return {
            action: TABLE_ACTION.MERGED,
            actionSubject: ACTION_SUBJECT.TABLE,
            actionSubjectId: null,
            attributes: {
                horizontalCells: horizontalCells,
                verticalCells: verticalCells,
                totalCells: totalCells,
                totalRowCount: totalRowCount,
                totalColumnCount: totalColumnCount,
            },
            eventType: EVENT_TYPE.TRACK,
        };
    })(function (state, dispatch) {
        if (dispatch) {
            analyticsV2.trackEvent('atlassian.editor.format.table.merge.button');
            dispatch(mergeCells(state.tr));
        }
        return true;
    });
};
export var splitCellWithAnalytics = function () {
    return withAnalytics(function (_a) {
        var selection = _a.selection;
        var _b = getSelectedCellInfo(selection), totalRowCount = _b.totalRowCount, totalColumnCount = _b.totalColumnCount;
        var cell = findCellClosestToPos(selection.$anchor);
        if (cell) {
            var _c = cell.node.attrs, verticalCells = _c.rowspan, horizontalCells = _c.colspan;
            return {
                action: TABLE_ACTION.SPLIT,
                actionSubject: ACTION_SUBJECT.TABLE,
                actionSubjectId: null,
                attributes: {
                    horizontalCells: horizontalCells,
                    verticalCells: verticalCells,
                    totalCells: horizontalCells * verticalCells,
                    totalRowCount: totalRowCount,
                    totalColumnCount: totalColumnCount,
                },
                eventType: EVENT_TYPE.TRACK,
            };
        }
        return;
    })(withV2Analytics('atlassian.editor.format.table.split.button', splitCell));
};
export var setColorWithAnalytics = function (cellColor, targetCellPosition) {
    return withAnalytics(function (_a) {
        var selection = _a.selection;
        var _b = getSelectedCellInfo(selection), horizontalCells = _b.horizontalCells, verticalCells = _b.verticalCells, totalCells = _b.totalCells, totalRowCount = _b.totalRowCount, totalColumnCount = _b.totalColumnCount;
        return {
            action: TABLE_ACTION.COLORED,
            actionSubject: ACTION_SUBJECT.TABLE,
            actionSubjectId: null,
            attributes: {
                cellColor: (tableBackgroundColorPalette.get(cellColor.toLowerCase()) || cellColor).toLowerCase(),
                horizontalCells: horizontalCells,
                verticalCells: verticalCells,
                totalCells: totalCells,
                totalRowCount: totalRowCount,
                totalColumnCount: totalColumnCount,
            },
            eventType: EVENT_TYPE.TRACK,
        };
    })(withV2Analytics('atlassian.editor.format.table.backgroundColor.button', setMultipleCellAttrs({ background: cellColor }, targetCellPosition)));
};
export var insertRowWithAnalytics = function (inputMethod, position) {
    return withAnalytics(function (state) {
        var _a = getSelectedTableInfo(state.selection), totalRowCount = _a.totalRowCount, totalColumnCount = _a.totalColumnCount;
        return {
            action: TABLE_ACTION.ADDED_ROW,
            actionSubject: ACTION_SUBJECT.TABLE,
            actionSubjectId: null,
            attributes: {
                inputMethod: inputMethod,
                position: position,
                totalRowCount: totalRowCount,
                totalColumnCount: totalColumnCount,
            },
            eventType: EVENT_TYPE.TRACK,
        };
    })(withV2Analytics("atlassian.editor.format.table.row." + (inputMethod === INPUT_METHOD.KEYBOARD ? 'keyboard' : 'button'), insertRow(position)));
};
export var insertColumnWithAnalytics = function (inputMethod, position) {
    return withAnalytics(function (state) {
        var _a = getSelectedTableInfo(state.selection), totalRowCount = _a.totalRowCount, totalColumnCount = _a.totalColumnCount;
        return {
            action: TABLE_ACTION.ADDED_COLUMN,
            actionSubject: ACTION_SUBJECT.TABLE,
            actionSubjectId: null,
            attributes: {
                inputMethod: inputMethod,
                position: position,
                totalRowCount: totalRowCount,
                totalColumnCount: totalColumnCount,
            },
            eventType: EVENT_TYPE.TRACK,
        };
    })(withV2Analytics('atlassian.editor.format.table.column.button', insertColumn(position)));
};
export var deleteRowsWithAnalytics = function (inputMethod, rect, isHeaderRowRequired) {
    return withAnalytics(function (_a) {
        var selection = _a.selection;
        var _b = getSelectedTableInfo(selection), totalRowCount = _b.totalRowCount, totalColumnCount = _b.totalColumnCount;
        return {
            action: TABLE_ACTION.DELETED_ROW,
            actionSubject: ACTION_SUBJECT.TABLE,
            actionSubjectId: null,
            attributes: {
                inputMethod: inputMethod,
                position: rect.top,
                count: rect.bottom - rect.top,
                totalRowCount: totalRowCount,
                totalColumnCount: totalColumnCount,
            },
            eventType: EVENT_TYPE.TRACK,
        };
    })(function (state, dispatch) {
        if (dispatch) {
            analyticsV2.trackEvent('atlassian.editor.format.table.delete_row.button');
            dispatch(deleteRows(rect, isHeaderRowRequired)(state.tr));
        }
        return true;
    });
};
export var deleteColumnsWithAnalytics = function (inputMethod, rect) {
    return withAnalytics(function (_a) {
        var selection = _a.selection;
        var _b = getSelectedTableInfo(selection), totalRowCount = _b.totalRowCount, totalColumnCount = _b.totalColumnCount;
        return {
            action: TABLE_ACTION.DELETED_COLUMN,
            actionSubject: ACTION_SUBJECT.TABLE,
            actionSubjectId: null,
            attributes: {
                inputMethod: inputMethod,
                position: rect.left,
                count: rect.right - rect.left,
                totalRowCount: totalRowCount,
                totalColumnCount: totalColumnCount,
            },
            eventType: EVENT_TYPE.TRACK,
        };
    })(function (state, dispatch) {
        if (dispatch) {
            analyticsV2.trackEvent('atlassian.editor.format.table.delete_column.button');
            dispatch(deleteColumns(rect)(state.tr));
        }
        return true;
    });
};
export var deleteTableWithAnalytics = function () {
    return withAnalytics(function (_a) {
        var selection = _a.selection;
        var _b = getSelectedTableInfo(selection), totalRowCount = _b.totalRowCount, totalColumnCount = _b.totalColumnCount;
        return {
            action: TABLE_ACTION.DELETED,
            actionSubject: ACTION_SUBJECT.TABLE,
            actionSubjectId: null,
            attributes: {
                inputMethod: INPUT_METHOD.FLOATING_TB,
                totalRowCount: totalRowCount,
                totalColumnCount: totalColumnCount,
            },
            eventType: EVENT_TYPE.TRACK,
        };
    })(withV2Analytics('atlassian.editor.format.table.delete.button', deleteTable));
};
export var toggleHeaderRowWithAnalytics = function () {
    return withAnalytics(function (state) {
        var _a = getSelectedTableInfo(state.selection), totalRowCount = _a.totalRowCount, totalColumnCount = _a.totalColumnCount;
        var isHeaderRowEnabled = getPluginState(state).isHeaderRowEnabled;
        return {
            action: TABLE_ACTION.TOGGLED_HEADER_ROW,
            actionSubject: ACTION_SUBJECT.TABLE,
            actionSubjectId: null,
            attributes: {
                newState: !isHeaderRowEnabled,
                totalRowCount: totalRowCount,
                totalColumnCount: totalColumnCount,
            },
            eventType: EVENT_TYPE.TRACK,
        };
    })(withV2Analytics('atlassian.editor.format.table.toggleHeaderRow.button', toggleHeaderRow));
};
export var toggleHeaderColumnWithAnalytics = function () {
    return withAnalytics(function (state) {
        var _a = getSelectedTableInfo(state.selection), totalRowCount = _a.totalRowCount, totalColumnCount = _a.totalColumnCount;
        var isHeaderColumnEnabled = getPluginState(state).isHeaderColumnEnabled;
        return {
            action: TABLE_ACTION.TOGGLED_HEADER_COLUMN,
            actionSubject: ACTION_SUBJECT.TABLE,
            actionSubjectId: null,
            attributes: {
                newState: !isHeaderColumnEnabled,
                totalRowCount: totalRowCount,
                totalColumnCount: totalColumnCount,
            },
            eventType: EVENT_TYPE.TRACK,
        };
    })(withV2Analytics('atlassian.editor.format.table.toggleHeaderColumn.button', toggleHeaderColumn));
};
export var toggleNumberColumnWithAnalytics = function () {
    return withAnalytics(function (state) {
        var _a = getSelectedTableInfo(state.selection), totalRowCount = _a.totalRowCount, totalColumnCount = _a.totalColumnCount;
        return {
            action: TABLE_ACTION.TOGGLED_NUMBER_COLUMN,
            actionSubject: ACTION_SUBJECT.TABLE,
            actionSubjectId: null,
            attributes: {
                newState: !checkIfNumberColumnEnabled(state),
                totalRowCount: totalRowCount,
                totalColumnCount: totalColumnCount,
            },
            eventType: EVENT_TYPE.TRACK,
        };
    })(withV2Analytics('atlassian.editor.format.table.toggleNumberColumn.button', toggleNumberColumn));
};
export var toggleTableLayoutWithAnalytics = function () {
    return withAnalytics(function (state) {
        var _a = getSelectedTableInfo(state.selection), table = _a.table, totalRowCount = _a.totalRowCount, totalColumnCount = _a.totalColumnCount;
        if (table) {
            var layout = table.node.attrs.layout;
            return {
                action: TABLE_ACTION.CHANGED_BREAKOUT_MODE,
                actionSubject: ACTION_SUBJECT.TABLE,
                actionSubjectId: null,
                attributes: {
                    newBreakoutMode: TABLE_BREAKOUT_NAME_MAPPING[getNextLayout(layout)],
                    previousBreakoutMode: TABLE_BREAKOUT_NAME_MAPPING[layout],
                    totalRowCount: totalRowCount,
                    totalColumnCount: totalColumnCount,
                },
                eventType: EVENT_TYPE.TRACK,
            };
        }
        return;
    })(toggleTableLayout);
};
export var sortColumnWithAnalytics = function (inputMethod, columnIndex, sortOrder) {
    return withAnalytics(function (state) {
        var _a = getSelectedTableInfo(state.selection), totalRowCount = _a.totalRowCount, totalColumnCount = _a.totalColumnCount;
        return {
            action: TABLE_ACTION.SORTED_COLUMN,
            actionSubject: ACTION_SUBJECT.TABLE,
            attributes: {
                inputMethod: inputMethod,
                totalRowCount: totalRowCount,
                totalColumnCount: totalColumnCount,
                position: columnIndex,
                sortOrder: sortOrder,
                mode: 'editor',
            },
            eventType: EVENT_TYPE.TRACK,
        };
    })(sortByColumn(columnIndex, sortOrder));
};
// #endregion
//# sourceMappingURL=commands-with-analytics.js.map