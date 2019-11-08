"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_utils_1 = require("prosemirror-utils");
var adf_schema_1 = require("@atlaskit/adf-schema");
var analytics_1 = require("../../analytics");
var analytics_2 = require("../analytics");
var commands_1 = require("./commands");
var utils_1 = require("./utils");
var main_1 = require("./pm-plugins/main");
var transforms_1 = require("./transforms");
var misc_1 = require("./commands/misc");
var TABLE_BREAKOUT_NAME_MAPPING = {
    default: analytics_2.TABLE_BREAKOUT.NORMAL,
    wide: analytics_2.TABLE_BREAKOUT.WIDE,
    'full-width': analytics_2.TABLE_BREAKOUT.FULL_WIDTH,
};
// #region Analytics wrappers
exports.emptyMultipleCellsWithAnalytics = function (inputMethod, targetCellPosition) {
    return analytics_2.withAnalytics(function (_a) {
        var selection = _a.selection;
        var _b = utils_1.getSelectedCellInfo(selection), horizontalCells = _b.horizontalCells, verticalCells = _b.verticalCells, totalRowCount = _b.totalRowCount, totalColumnCount = _b.totalColumnCount;
        return {
            action: analytics_2.TABLE_ACTION.CLEARED,
            actionSubject: analytics_2.ACTION_SUBJECT.TABLE,
            actionSubjectId: null,
            attributes: {
                inputMethod: inputMethod,
                horizontalCells: horizontalCells,
                verticalCells: verticalCells,
                totalRowCount: totalRowCount,
                totalColumnCount: totalColumnCount,
            },
            eventType: analytics_2.EVENT_TYPE.TRACK,
        };
    })(analytics_1.withAnalytics("atlassian.editor.format.table.delete_content." + (inputMethod === analytics_2.INPUT_METHOD.KEYBOARD ? 'keyboard' : 'button'), commands_1.clearMultipleCells(targetCellPosition)));
};
exports.mergeCellsWithAnalytics = function () {
    return analytics_2.withAnalytics(function (_a) {
        var selection = _a.selection;
        var _b = utils_1.getSelectedCellInfo(selection), horizontalCells = _b.horizontalCells, verticalCells = _b.verticalCells, totalCells = _b.totalCells, totalRowCount = _b.totalRowCount, totalColumnCount = _b.totalColumnCount;
        return {
            action: analytics_2.TABLE_ACTION.MERGED,
            actionSubject: analytics_2.ACTION_SUBJECT.TABLE,
            actionSubjectId: null,
            attributes: {
                horizontalCells: horizontalCells,
                verticalCells: verticalCells,
                totalCells: totalCells,
                totalRowCount: totalRowCount,
                totalColumnCount: totalColumnCount,
            },
            eventType: analytics_2.EVENT_TYPE.TRACK,
        };
    })(function (state, dispatch) {
        if (dispatch) {
            analytics_1.analyticsService.trackEvent('atlassian.editor.format.table.merge.button');
            dispatch(transforms_1.mergeCells(state.tr));
        }
        return true;
    });
};
exports.splitCellWithAnalytics = function () {
    return analytics_2.withAnalytics(function (_a) {
        var selection = _a.selection;
        var _b = utils_1.getSelectedCellInfo(selection), totalRowCount = _b.totalRowCount, totalColumnCount = _b.totalColumnCount;
        var cell = prosemirror_utils_1.findCellClosestToPos(selection.$anchor);
        if (cell) {
            var _c = cell.node.attrs, verticalCells = _c.rowspan, horizontalCells = _c.colspan;
            return {
                action: analytics_2.TABLE_ACTION.SPLIT,
                actionSubject: analytics_2.ACTION_SUBJECT.TABLE,
                actionSubjectId: null,
                attributes: {
                    horizontalCells: horizontalCells,
                    verticalCells: verticalCells,
                    totalCells: horizontalCells * verticalCells,
                    totalRowCount: totalRowCount,
                    totalColumnCount: totalColumnCount,
                },
                eventType: analytics_2.EVENT_TYPE.TRACK,
            };
        }
        return;
    })(analytics_1.withAnalytics('atlassian.editor.format.table.split.button', misc_1.splitCell));
};
exports.setColorWithAnalytics = function (cellColor, targetCellPosition) {
    return analytics_2.withAnalytics(function (_a) {
        var selection = _a.selection;
        var _b = utils_1.getSelectedCellInfo(selection), horizontalCells = _b.horizontalCells, verticalCells = _b.verticalCells, totalCells = _b.totalCells, totalRowCount = _b.totalRowCount, totalColumnCount = _b.totalColumnCount;
        return {
            action: analytics_2.TABLE_ACTION.COLORED,
            actionSubject: analytics_2.ACTION_SUBJECT.TABLE,
            actionSubjectId: null,
            attributes: {
                cellColor: (adf_schema_1.tableBackgroundColorPalette.get(cellColor.toLowerCase()) || cellColor).toLowerCase(),
                horizontalCells: horizontalCells,
                verticalCells: verticalCells,
                totalCells: totalCells,
                totalRowCount: totalRowCount,
                totalColumnCount: totalColumnCount,
            },
            eventType: analytics_2.EVENT_TYPE.TRACK,
        };
    })(analytics_1.withAnalytics('atlassian.editor.format.table.backgroundColor.button', commands_1.setMultipleCellAttrs({ background: cellColor }, targetCellPosition)));
};
exports.insertRowWithAnalytics = function (inputMethod, position) {
    return analytics_2.withAnalytics(function (state) {
        var _a = utils_1.getSelectedTableInfo(state.selection), totalRowCount = _a.totalRowCount, totalColumnCount = _a.totalColumnCount;
        return {
            action: analytics_2.TABLE_ACTION.ADDED_ROW,
            actionSubject: analytics_2.ACTION_SUBJECT.TABLE,
            actionSubjectId: null,
            attributes: {
                inputMethod: inputMethod,
                position: position,
                totalRowCount: totalRowCount,
                totalColumnCount: totalColumnCount,
            },
            eventType: analytics_2.EVENT_TYPE.TRACK,
        };
    })(analytics_1.withAnalytics("atlassian.editor.format.table.row." + (inputMethod === analytics_2.INPUT_METHOD.KEYBOARD ? 'keyboard' : 'button'), commands_1.insertRow(position)));
};
exports.insertColumnWithAnalytics = function (inputMethod, position) {
    return analytics_2.withAnalytics(function (state) {
        var _a = utils_1.getSelectedTableInfo(state.selection), totalRowCount = _a.totalRowCount, totalColumnCount = _a.totalColumnCount;
        return {
            action: analytics_2.TABLE_ACTION.ADDED_COLUMN,
            actionSubject: analytics_2.ACTION_SUBJECT.TABLE,
            actionSubjectId: null,
            attributes: {
                inputMethod: inputMethod,
                position: position,
                totalRowCount: totalRowCount,
                totalColumnCount: totalColumnCount,
            },
            eventType: analytics_2.EVENT_TYPE.TRACK,
        };
    })(analytics_1.withAnalytics('atlassian.editor.format.table.column.button', commands_1.insertColumn(position)));
};
exports.deleteRowsWithAnalytics = function (inputMethod, rect, isHeaderRowRequired) {
    return analytics_2.withAnalytics(function (_a) {
        var selection = _a.selection;
        var _b = utils_1.getSelectedTableInfo(selection), totalRowCount = _b.totalRowCount, totalColumnCount = _b.totalColumnCount;
        return {
            action: analytics_2.TABLE_ACTION.DELETED_ROW,
            actionSubject: analytics_2.ACTION_SUBJECT.TABLE,
            actionSubjectId: null,
            attributes: {
                inputMethod: inputMethod,
                position: rect.top,
                count: rect.bottom - rect.top,
                totalRowCount: totalRowCount,
                totalColumnCount: totalColumnCount,
            },
            eventType: analytics_2.EVENT_TYPE.TRACK,
        };
    })(function (state, dispatch) {
        if (dispatch) {
            analytics_1.analyticsService.trackEvent('atlassian.editor.format.table.delete_row.button');
            dispatch(transforms_1.deleteRows(rect, isHeaderRowRequired)(state.tr));
        }
        return true;
    });
};
exports.deleteColumnsWithAnalytics = function (inputMethod, rect) {
    return analytics_2.withAnalytics(function (_a) {
        var selection = _a.selection;
        var _b = utils_1.getSelectedTableInfo(selection), totalRowCount = _b.totalRowCount, totalColumnCount = _b.totalColumnCount;
        return {
            action: analytics_2.TABLE_ACTION.DELETED_COLUMN,
            actionSubject: analytics_2.ACTION_SUBJECT.TABLE,
            actionSubjectId: null,
            attributes: {
                inputMethod: inputMethod,
                position: rect.left,
                count: rect.right - rect.left,
                totalRowCount: totalRowCount,
                totalColumnCount: totalColumnCount,
            },
            eventType: analytics_2.EVENT_TYPE.TRACK,
        };
    })(function (state, dispatch) {
        if (dispatch) {
            analytics_1.analyticsService.trackEvent('atlassian.editor.format.table.delete_column.button');
            dispatch(transforms_1.deleteColumns(rect)(state.tr));
        }
        return true;
    });
};
exports.deleteTableWithAnalytics = function () {
    return analytics_2.withAnalytics(function (_a) {
        var selection = _a.selection;
        var _b = utils_1.getSelectedTableInfo(selection), totalRowCount = _b.totalRowCount, totalColumnCount = _b.totalColumnCount;
        return {
            action: analytics_2.TABLE_ACTION.DELETED,
            actionSubject: analytics_2.ACTION_SUBJECT.TABLE,
            actionSubjectId: null,
            attributes: {
                inputMethod: analytics_2.INPUT_METHOD.FLOATING_TB,
                totalRowCount: totalRowCount,
                totalColumnCount: totalColumnCount,
            },
            eventType: analytics_2.EVENT_TYPE.TRACK,
        };
    })(analytics_1.withAnalytics('atlassian.editor.format.table.delete.button', commands_1.deleteTable));
};
exports.toggleHeaderRowWithAnalytics = function () {
    return analytics_2.withAnalytics(function (state) {
        var _a = utils_1.getSelectedTableInfo(state.selection), totalRowCount = _a.totalRowCount, totalColumnCount = _a.totalColumnCount;
        var isHeaderRowEnabled = main_1.getPluginState(state).isHeaderRowEnabled;
        return {
            action: analytics_2.TABLE_ACTION.TOGGLED_HEADER_ROW,
            actionSubject: analytics_2.ACTION_SUBJECT.TABLE,
            actionSubjectId: null,
            attributes: {
                newState: !isHeaderRowEnabled,
                totalRowCount: totalRowCount,
                totalColumnCount: totalColumnCount,
            },
            eventType: analytics_2.EVENT_TYPE.TRACK,
        };
    })(analytics_1.withAnalytics('atlassian.editor.format.table.toggleHeaderRow.button', commands_1.toggleHeaderRow));
};
exports.toggleHeaderColumnWithAnalytics = function () {
    return analytics_2.withAnalytics(function (state) {
        var _a = utils_1.getSelectedTableInfo(state.selection), totalRowCount = _a.totalRowCount, totalColumnCount = _a.totalColumnCount;
        var isHeaderColumnEnabled = main_1.getPluginState(state).isHeaderColumnEnabled;
        return {
            action: analytics_2.TABLE_ACTION.TOGGLED_HEADER_COLUMN,
            actionSubject: analytics_2.ACTION_SUBJECT.TABLE,
            actionSubjectId: null,
            attributes: {
                newState: !isHeaderColumnEnabled,
                totalRowCount: totalRowCount,
                totalColumnCount: totalColumnCount,
            },
            eventType: analytics_2.EVENT_TYPE.TRACK,
        };
    })(analytics_1.withAnalytics('atlassian.editor.format.table.toggleHeaderColumn.button', commands_1.toggleHeaderColumn));
};
exports.toggleNumberColumnWithAnalytics = function () {
    return analytics_2.withAnalytics(function (state) {
        var _a = utils_1.getSelectedTableInfo(state.selection), totalRowCount = _a.totalRowCount, totalColumnCount = _a.totalColumnCount;
        return {
            action: analytics_2.TABLE_ACTION.TOGGLED_NUMBER_COLUMN,
            actionSubject: analytics_2.ACTION_SUBJECT.TABLE,
            actionSubjectId: null,
            attributes: {
                newState: !utils_1.checkIfNumberColumnEnabled(state),
                totalRowCount: totalRowCount,
                totalColumnCount: totalColumnCount,
            },
            eventType: analytics_2.EVENT_TYPE.TRACK,
        };
    })(analytics_1.withAnalytics('atlassian.editor.format.table.toggleNumberColumn.button', commands_1.toggleNumberColumn));
};
exports.toggleTableLayoutWithAnalytics = function () {
    return analytics_2.withAnalytics(function (state) {
        var _a = utils_1.getSelectedTableInfo(state.selection), table = _a.table, totalRowCount = _a.totalRowCount, totalColumnCount = _a.totalColumnCount;
        if (table) {
            var layout = table.node.attrs.layout;
            return {
                action: analytics_2.TABLE_ACTION.CHANGED_BREAKOUT_MODE,
                actionSubject: analytics_2.ACTION_SUBJECT.TABLE,
                actionSubjectId: null,
                attributes: {
                    newBreakoutMode: TABLE_BREAKOUT_NAME_MAPPING[commands_1.getNextLayout(layout)],
                    previousBreakoutMode: TABLE_BREAKOUT_NAME_MAPPING[layout],
                    totalRowCount: totalRowCount,
                    totalColumnCount: totalColumnCount,
                },
                eventType: analytics_2.EVENT_TYPE.TRACK,
            };
        }
        return;
    })(commands_1.toggleTableLayout);
};
exports.sortColumnWithAnalytics = function (inputMethod, columnIndex, sortOrder) {
    return analytics_2.withAnalytics(function (state) {
        var _a = utils_1.getSelectedTableInfo(state.selection), totalRowCount = _a.totalRowCount, totalColumnCount = _a.totalColumnCount;
        return {
            action: analytics_2.TABLE_ACTION.SORTED_COLUMN,
            actionSubject: analytics_2.ACTION_SUBJECT.TABLE,
            attributes: {
                inputMethod: inputMethod,
                totalRowCount: totalRowCount,
                totalColumnCount: totalColumnCount,
                position: columnIndex,
                sortOrder: sortOrder,
                mode: 'editor',
            },
            eventType: analytics_2.EVENT_TYPE.TRACK,
        };
    })(commands_1.sortByColumn(columnIndex, sortOrder));
};
// #endregion
//# sourceMappingURL=commands-with-analytics.js.map