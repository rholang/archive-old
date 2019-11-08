"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// #region Imports
var prosemirror_state_1 = require("prosemirror-state");
var prosemirror_tables_1 = require("prosemirror-tables");
var prosemirror_view_1 = require("prosemirror-view");
var prosemirror_utils_1 = require("prosemirror-utils");
var main_1 = require("../pm-plugins/main");
var utils_1 = require("../utils");
var analytics_1 = require("../../../analytics");
var commands_1 = require("../../lists/commands");
var slice_1 = require("../../../utils/slice");
var utils_2 = require("../../../utils");
var transforms_1 = require("../transforms");
var analytics_2 = require("../../analytics");
var commands_with_analytics_1 = require("../commands-with-analytics");
var types_1 = require("../types");
// #endregion
// #region Constants
var TAB_FORWARD_DIRECTION = 1;
var TAB_BACKWARD_DIRECTION = -1;
// #endregion
// #region Commands
exports.setEditorFocus = function (editorHasFocus) {
    return main_1.createCommand({
        type: 'SET_EDITOR_FOCUS',
        data: {
            editorHasFocus: editorHasFocus,
        },
    });
};
exports.setTableRef = function (ref) {
    return main_1.createCommand(function (state) {
        var tableRef = ref || undefined;
        var tableNode = ref ? prosemirror_utils_1.findTable(state.selection).node : undefined;
        var tableWrapperTarget = utils_2.closestElement(tableRef, "." + types_1.TableCssClassName.TABLE_NODE_WRAPPER) ||
            undefined;
        var layout = tableNode ? tableNode.attrs.layout : undefined;
        var _a = main_1.getPluginState(state).pluginConfig.allowControls, allowControls = _a === void 0 ? true : _a;
        var decorationSet = prosemirror_view_1.DecorationSet.empty;
        if (allowControls && tableRef) {
            decorationSet = utils_1.updatePluginStateDecorations(state, utils_1.createColumnControlsDecoration(state.selection), types_1.TableDecorations.COLUMN_CONTROLS_DECORATIONS);
        }
        return {
            type: 'SET_TABLE_REF',
            data: {
                tableRef: tableRef,
                tableNode: tableNode,
                tableWrapperTarget: tableWrapperTarget,
                layout: layout || 'default',
                isHeaderRowEnabled: utils_1.checkIfHeaderRowEnabled(state),
                isHeaderColumnEnabled: utils_1.checkIfHeaderColumnEnabled(state),
                decorationSet: decorationSet,
            },
        };
    }, function (tr) { return tr.setMeta('addToHistory', false); });
};
exports.setCellAttr = function (name, value) { return function (state, dispatch) {
    var _a;
    var tr = state.tr, selection = state.selection;
    if (selection instanceof prosemirror_tables_1.CellSelection) {
        var updated_1 = false;
        selection.forEachCell(function (cell, pos) {
            var _a;
            if (cell.attrs[name] !== value) {
                tr.setNodeMarkup(pos, cell.type, tslib_1.__assign(tslib_1.__assign({}, cell.attrs), (_a = {}, _a[name] = value, _a)));
                updated_1 = true;
            }
        });
        if (updated_1) {
            if (dispatch) {
                dispatch(tr);
            }
            return true;
        }
    }
    else {
        var cell = prosemirror_tables_1.selectionCell(state);
        if (cell) {
            if (dispatch) {
                dispatch(tr.setNodeMarkup(cell.pos, cell.nodeAfter.type, tslib_1.__assign(tslib_1.__assign({}, cell.nodeAfter.attrs), (_a = {}, _a[name] = value, _a))));
            }
            return true;
        }
    }
    return false;
}; };
exports.triggerUnlessTableHeader = function (command) { return function (state, dispatch) {
    var selection = state.selection, tableHeader = state.schema.nodes.tableHeader;
    if (selection instanceof prosemirror_state_1.TextSelection) {
        var cell = prosemirror_utils_1.findCellClosestToPos(selection.$from);
        if (cell && cell.node.type !== tableHeader) {
            return command(state, dispatch);
        }
    }
    if (selection instanceof prosemirror_tables_1.CellSelection) {
        var rect = prosemirror_utils_1.getSelectionRect(selection);
        if (!utils_1.checkIfHeaderRowEnabled(state) || (rect && rect.top > 0)) {
            return command(state, dispatch);
        }
    }
    return false;
}; };
exports.transformSliceRemoveCellBackgroundColor = function (slice, schema) {
    var _a = schema.nodes, tableCell = _a.tableCell, tableHeader = _a.tableHeader;
    return slice_1.mapSlice(slice, function (maybeCell) {
        if (maybeCell.type === tableCell || maybeCell.type === tableHeader) {
            var cellAttrs = tslib_1.__assign({}, maybeCell.attrs);
            cellAttrs.background = undefined;
            return maybeCell.type.createChecked(cellAttrs, maybeCell.content, maybeCell.marks);
        }
        return maybeCell;
    });
};
exports.transformSliceToAddTableHeaders = function (slice, schema) {
    var _a = schema.nodes, table = _a.table, tableHeader = _a.tableHeader, tableRow = _a.tableRow;
    return slice_1.mapSlice(slice, function (maybeTable) {
        if (maybeTable.type === table) {
            var firstRow = maybeTable.firstChild;
            if (firstRow) {
                var headerCols_1 = [];
                firstRow.forEach(function (oldCol) {
                    headerCols_1.push(tableHeader.createChecked(oldCol.attrs, oldCol.content, oldCol.marks));
                });
                var headerRow = tableRow.createChecked(firstRow.attrs, headerCols_1, firstRow.marks);
                return maybeTable.copy(maybeTable.content.replaceChild(0, headerRow));
            }
        }
        return maybeTable;
    });
};
exports.transformSliceToRemoveColumnsWidths = function (slice, schema) {
    var _a = schema.nodes, tableHeader = _a.tableHeader, tableCell = _a.tableCell;
    return slice_1.mapSlice(slice, function (maybeCell) {
        if (maybeCell.type === tableCell || maybeCell.type === tableHeader) {
            if (!maybeCell.attrs.colwidth) {
                return maybeCell;
            }
            return maybeCell.type.createChecked(tslib_1.__assign(tslib_1.__assign({}, maybeCell.attrs), { colwidth: undefined }), maybeCell.content, maybeCell.marks);
        }
        return maybeCell;
    });
};
exports.deleteTable = function (state, dispatch) {
    if (dispatch) {
        dispatch(prosemirror_utils_1.removeTable(state.tr));
    }
    return true;
};
exports.convertFirstRowToHeader = function (schema) { return function (tr) {
    var table = prosemirror_utils_1.findTable(tr.selection);
    var map = prosemirror_tables_1.TableMap.get(table.node);
    for (var i = 0; i < map.width; i++) {
        var cell = table.node.child(0).child(i);
        tr.setNodeMarkup(table.start + map.map[i], schema.nodes.tableHeader, cell.attrs);
    }
    return tr;
}; };
exports.goToNextCell = function (direction) { return function (state, dispatch) {
    var table = prosemirror_utils_1.findTable(state.selection);
    if (!table) {
        return false;
    }
    var map = prosemirror_tables_1.TableMap.get(table.node);
    var _a = state.schema.nodes, tableCell = _a.tableCell, tableHeader = _a.tableHeader;
    var cell = prosemirror_utils_1.findParentNodeOfType([tableCell, tableHeader])(state.selection);
    var firstCellPos = map.positionAt(0, 0, table.node) + table.start;
    var lastCellPos = map.positionAt(map.height - 1, map.width - 1, table.node) + table.start;
    if (firstCellPos === cell.pos && direction === TAB_BACKWARD_DIRECTION) {
        commands_with_analytics_1.insertRowWithAnalytics(analytics_2.INPUT_METHOD.KEYBOARD, 0)(state, dispatch);
        return true;
    }
    if (lastCellPos === cell.pos && direction === TAB_FORWARD_DIRECTION) {
        commands_with_analytics_1.insertRowWithAnalytics(analytics_2.INPUT_METHOD.KEYBOARD, map.height)(state, dispatch);
        return true;
    }
    var event = direction === TAB_FORWARD_DIRECTION ? 'next_cell' : 'previous_cell';
    analytics_1.analyticsService.trackEvent("atlassian.editor.format.table." + event + ".keyboard");
    return prosemirror_tables_1.goToNextCell(direction)(state, dispatch);
}; };
exports.moveCursorBackward = function (state, dispatch) {
    var $cursor = state.selection.$cursor;
    // if cursor is in the middle of a text node, do nothing
    if (!$cursor || $cursor.parentOffset > 0) {
        return false;
    }
    // find the node before the cursor
    var before;
    var cut;
    if (!utils_1.isIsolating($cursor.parent)) {
        for (var i = $cursor.depth - 1; !before && i >= 0; i--) {
            if ($cursor.index(i) > 0) {
                cut = $cursor.before(i + 1);
                before = $cursor.node(i).child($cursor.index(i) - 1);
            }
            if (utils_1.isIsolating($cursor.node(i))) {
                break;
            }
        }
    }
    // if the node before is not a table node - do nothing
    if (!before || before.type !== state.schema.nodes.table) {
        return false;
    }
    /*
      ensure we're just at a top level paragraph
      otherwise, perform regular backspace behaviour
     */
    var grandparent = $cursor.node($cursor.depth - 1);
    var listItem = state.schema.nodes.listItem;
    if ($cursor.parent.type !== state.schema.nodes.paragraph ||
        (grandparent && grandparent.type !== state.schema.nodes.doc)) {
        if (grandparent && grandparent.type === listItem) {
            return commands_1.outdentList()(state, dispatch);
        }
        else {
            return false;
        }
    }
    var tr = state.tr;
    var lastCellPos = (cut || 0) - 4;
    // need to move cursor inside the table to be able to calculate table's offset
    tr.setSelection(new prosemirror_state_1.TextSelection(state.doc.resolve(lastCellPos)));
    var $from = tr.selection.$from;
    var start = $from.start(-1);
    var pos = start + $from.parent.nodeSize - 1;
    // move cursor to the last cell
    // it doesn't join node before (last cell) with node after (content after the cursor)
    // due to ridiculous amount of PM code that would have been required to overwrite
    if (dispatch) {
        dispatch(tr.setSelection(new prosemirror_state_1.TextSelection(state.doc.resolve(pos))));
    }
    return true;
};
exports.setMultipleCellAttrs = function (attrs, targetCellPosition) { return function (state, dispatch) {
    var cursorPos;
    var tr = state.tr;
    if (prosemirror_utils_1.isCellSelection(tr.selection)) {
        var selection = tr.selection;
        selection.forEachCell(function (_cell, pos) {
            var $pos = tr.doc.resolve(tr.mapping.map(pos + 1));
            tr = prosemirror_utils_1.setCellAttrs(prosemirror_utils_1.findCellClosestToPos($pos), attrs)(tr);
        });
        cursorPos = selection.$headCell.pos;
    }
    else if (targetCellPosition) {
        var cell = prosemirror_utils_1.findCellClosestToPos(tr.doc.resolve(targetCellPosition + 1));
        tr = prosemirror_utils_1.setCellAttrs(cell, attrs)(tr);
        cursorPos = cell.pos;
    }
    if (tr.docChanged && cursorPos !== undefined) {
        var $pos = tr.doc.resolve(tr.mapping.map(cursorPos));
        if (dispatch) {
            dispatch(tr.setSelection(prosemirror_state_1.Selection.near($pos)));
        }
        return true;
    }
    return false;
}; };
exports.selectColumn = function (column, expand) {
    return main_1.createCommand(function (state) {
        var targetCellPosition;
        var cells = prosemirror_utils_1.getCellsInColumn(column)(state.tr.selection);
        if (cells && cells.length) {
            targetCellPosition = cells[0].pos;
        }
        return { type: 'SET_TARGET_CELL_POSITION', data: { targetCellPosition: targetCellPosition } };
    }, function (tr) {
        return prosemirror_utils_1.selectColumn(column, expand)(tr).setMeta('addToHistory', false);
    });
};
exports.selectRow = function (row, expand) {
    return main_1.createCommand(function (state) {
        var targetCellPosition;
        var cells = prosemirror_utils_1.getCellsInRow(row)(state.tr.selection);
        if (cells && cells.length) {
            targetCellPosition = cells[0].pos;
        }
        return { type: 'SET_TARGET_CELL_POSITION', data: { targetCellPosition: targetCellPosition } };
    }, function (tr) { return prosemirror_utils_1.selectRow(row, expand)(tr).setMeta('addToHistory', false); });
};
exports.showInsertColumnButton = function (columnIndex) {
    return main_1.createCommand(function (_) {
        return columnIndex > -1
            ? {
                type: 'SHOW_INSERT_COLUMN_BUTTON',
                data: { insertColumnButtonIndex: columnIndex },
            }
            : false;
    }, function (tr) { return tr.setMeta('addToHistory', false); });
};
exports.showInsertRowButton = function (rowIndex) {
    return main_1.createCommand(function (_) {
        return rowIndex > -1
            ? {
                type: 'SHOW_INSERT_ROW_BUTTON',
                data: { insertRowButtonIndex: rowIndex },
            }
            : false;
    }, function (tr) { return tr.setMeta('addToHistory', false); });
};
exports.hideInsertColumnOrRowButton = function () {
    return main_1.createCommand({
        type: 'HIDE_INSERT_COLUMN_OR_ROW_BUTTON',
    }, function (tr) { return tr.setMeta('addToHistory', false); });
};
exports.autoSizeTable = function (view, node, table, basePos, opts) {
    view.dispatch(transforms_1.fixAutoSizedTable(view, node, table, basePos, opts));
    return true;
};
exports.addBoldInEmptyHeaderCells = function (tableCellHeader) { return function (state, dispatch) {
    var tr = state.tr;
    if (
    // Avoid infinite loop when the current selection is not a TextSelection
    utils_2.isTextSelection(tr.selection) &&
        // When storedMark is null that means this is the initial state
        // if the user press to remove the mark storedMark will be an empty array
        // and we shouldn't apply the strong mark
        tr.storedMarks == null &&
        // Check if the current node is a direct child from paragraph
        tr.selection.$from.depth === tableCellHeader.depth + 1 &&
        // this logic is applied only for empty paragraph
        tableCellHeader.node.nodeSize === 4 &&
        utils_2.isNodeTypeParagraph(tableCellHeader.node.firstChild)) {
        var strong = state.schema.marks.strong;
        tr.setStoredMarks([strong.create()]).setMeta('addToHistory', false);
        if (dispatch) {
            dispatch(tr);
        }
        return true;
    }
    return false;
}; };
// #endregion
/**
 * We need to split cell keeping the right type of cell given current table configuration.
 * We are using prosemirror-tables splitCellWithType that allows you to choose what cell type should be.
 */
exports.splitCell = function (state, dispatch) {
    var tableState = main_1.getPluginState(state);
    var _a = state.schema.nodes, tableHeader = _a.tableHeader, tableCell = _a.tableCell;
    return prosemirror_tables_1.splitCellWithType(function (_a) {
        var row = _a.row, col = _a.col;
        if ((row === 0 && tableState.isHeaderRowEnabled) ||
            (col === 0 && tableState.isHeaderColumnEnabled)) {
            return tableHeader;
        }
        return tableCell;
    })(state, dispatch);
};
//# sourceMappingURL=misc.js.map