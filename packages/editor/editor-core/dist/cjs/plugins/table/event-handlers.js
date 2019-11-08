"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_state_1 = require("prosemirror-state");
var prosemirror_tables_1 = require("prosemirror-tables");
var prosemirror_utils_1 = require("prosemirror-utils");
var raf_schd_1 = tslib_1.__importDefault(require("raf-schd"));
var editor_common_1 = require("@atlaskit/editor-common");
var analytics_1 = require("../../analytics");
var analytics_2 = require("../analytics");
var utils_1 = require("../../utils/");
var utils_2 = require("./utils");
var commands_1 = require("./commands");
var main_1 = require("./pm-plugins/main");
var plugin_1 = require("./pm-plugins/table-resizing/plugin");
var utils_3 = require("./utils");
var transforms_1 = require("./transforms");
exports.handleBlur = function (view, event) {
    var state = view.state, dispatch = view.dispatch;
    // fix for issue ED-4665
    if (editor_common_1.browser.ie_version !== 11) {
        commands_1.setEditorFocus(false)(state, dispatch);
    }
    event.preventDefault();
    return false;
};
exports.handleFocus = function (view, event) {
    var state = view.state, dispatch = view.dispatch;
    commands_1.setEditorFocus(true)(state, dispatch);
    event.preventDefault();
    return false;
};
exports.handleClick = function (view, event) {
    var element = event.target;
    var table = prosemirror_utils_1.findTable(view.state.selection);
    if (event instanceof MouseEvent && utils_2.isColumnControlsDecorations(element)) {
        var _a = tslib_1.__read(utils_2.getColumnOrRowIndex(element), 1), startIndex = _a[0];
        var state = view.state, dispatch_1 = view.dispatch;
        return commands_1.selectColumn(startIndex, event.shiftKey)(state, dispatch_1);
    }
    /**
     * Check if the table cell with an image is clicked
     * and its not the image itself
     */
    var matches = element.matches ? 'matches' : 'msMatchesSelector';
    if (!table ||
        !utils_1.isElementInTableCell(element) ||
        element[matches]('table .image, table p, table .image div')) {
        return false;
    }
    var map = prosemirror_tables_1.TableMap.get(table.node);
    /** Getting the offset of current item clicked */
    var colElement = (utils_1.closestElement(element, 'td') ||
        utils_1.closestElement(element, 'th'));
    var colIndex = colElement && colElement.cellIndex;
    var rowElement = utils_1.closestElement(element, 'tr');
    var rowIndex = rowElement && rowElement.rowIndex;
    var cellIndex = map.width * rowIndex + colIndex;
    var posInTable = map.map[cellIndex + 1];
    var dispatch = view.dispatch, _b = view.state, tr = _b.tr, paragraph = _b.schema.nodes.paragraph;
    var editorElement = table.node.nodeAt(map.map[cellIndex]);
    /** Only if the last item is media group, insert a paragraph */
    if (utils_1.isLastItemMediaGroup(editorElement)) {
        tr.insert(posInTable + table.pos, paragraph.create());
        dispatch(tr);
        utils_1.setNodeSelection(view, posInTable + table.pos);
    }
    return true;
};
exports.handleMouseOver = function (view, mouseEvent) {
    var state = view.state, dispatch = view.dispatch;
    var target = mouseEvent.target;
    var _a = main_1.getPluginState(state), insertColumnButtonIndex = _a.insertColumnButtonIndex, insertRowButtonIndex = _a.insertRowButtonIndex;
    if (utils_2.isInsertRowButton(target)) {
        var _b = tslib_1.__read(utils_2.getColumnOrRowIndex(target), 2), startIndex = _b[0], endIndex = _b[1];
        var positionRow = utils_2.getMousePositionVerticalRelativeByElement(mouseEvent) ===
            'bottom'
            ? endIndex
            : startIndex;
        return commands_1.showInsertRowButton(positionRow)(state, dispatch);
    }
    if (utils_2.isColumnControlsDecorations(target)) {
        var _c = tslib_1.__read(utils_2.getColumnOrRowIndex(target), 1), startIndex = _c[0];
        var state_1 = view.state, dispatch_2 = view.dispatch;
        return commands_1.hoverColumns([startIndex], false)(state_1, dispatch_2);
    }
    if ((utils_2.isCell(target) || utils_2.isCornerButton(target)) &&
        (typeof insertColumnButtonIndex === 'number' ||
            typeof insertRowButtonIndex === 'number')) {
        return commands_1.hideInsertColumnOrRowButton()(state, dispatch);
    }
    return false;
};
// Ignore any `mousedown` `event` from control and numbered column buttons
// PM end up changing selection during shift selection if not prevented
exports.handleMouseDown = function (_, event) {
    var isControl = !!(event.target &&
        event.target instanceof HTMLElement &&
        (utils_2.isColumnControlsDecorations(event.target) ||
            utils_2.isRowControlsButton(event.target)));
    if (isControl) {
        event.preventDefault();
    }
    return isControl;
};
exports.handleMouseOut = function (view, mouseEvent) {
    var target = mouseEvent.target;
    if (utils_2.isColumnControlsDecorations(target)) {
        var state = view.state, dispatch = view.dispatch;
        return commands_1.clearHoverSelection()(state, dispatch);
    }
    return false;
};
exports.handleMouseLeave = function (view, event) {
    var state = view.state, dispatch = view.dispatch;
    var _a = main_1.getPluginState(state), insertColumnButtonIndex = _a.insertColumnButtonIndex, insertRowButtonIndex = _a.insertRowButtonIndex;
    var target = event.target;
    if (utils_2.isTableControlsButton(target)) {
        return true;
    }
    if ((typeof insertColumnButtonIndex !== 'undefined' ||
        typeof insertRowButtonIndex !== 'undefined') &&
        commands_1.hideInsertColumnOrRowButton()(state, dispatch)) {
        return true;
    }
    return false;
};
exports.handleMouseMove = function (view, event) {
    var element = event.target;
    if (utils_2.isColumnControlsDecorations(element)) {
        var state = view.state, dispatch = view.dispatch;
        var insertColumnButtonIndex = main_1.getPluginState(state).insertColumnButtonIndex;
        var _a = tslib_1.__read(utils_2.getColumnOrRowIndex(element), 2), startIndex = _a[0], endIndex = _a[1];
        var positionColumn = utils_2.getMousePositionHorizontalRelativeByElement(event) ===
            'right'
            ? endIndex
            : startIndex;
        if (positionColumn !== insertColumnButtonIndex) {
            return commands_1.showInsertColumnButton(positionColumn)(state, dispatch);
        }
    }
    if (utils_2.isRowControlsButton(element)) {
        var state = view.state, dispatch = view.dispatch;
        var insertRowButtonIndex = main_1.getPluginState(state).insertRowButtonIndex;
        var _b = tslib_1.__read(utils_2.getColumnOrRowIndex(element), 2), startIndex = _b[0], endIndex = _b[1];
        var positionRow = utils_2.getMousePositionVerticalRelativeByElement(event) ===
            'bottom'
            ? endIndex
            : startIndex;
        if (positionRow !== insertRowButtonIndex) {
            return commands_1.showInsertRowButton(positionRow)(state, dispatch);
        }
    }
    return false;
};
function handleTripleClick(view, pos) {
    var state = view.state, dispatch = view.dispatch;
    var $cellPos = prosemirror_tables_1.cellAround(state.doc.resolve(pos));
    if (!$cellPos) {
        return false;
    }
    var cell = state.doc.nodeAt($cellPos.pos);
    if (cell) {
        var selFrom = prosemirror_state_1.Selection.findFrom($cellPos, 1, true);
        var selTo = prosemirror_state_1.Selection.findFrom(state.doc.resolve($cellPos.pos + cell.nodeSize), -1, true);
        if (selFrom && selTo) {
            dispatch(state.tr.setSelection(new prosemirror_state_1.TextSelection(selFrom.$from, selTo.$to)));
            return true;
        }
    }
    return false;
}
exports.handleTripleClick = handleTripleClick;
exports.handleCut = function (oldTr, oldState, newState) {
    var oldSelection = oldState.tr.selection;
    var tr = newState.tr;
    if (oldSelection instanceof prosemirror_tables_1.CellSelection) {
        var $anchorCell = oldTr.doc.resolve(oldTr.mapping.map(oldSelection.$anchorCell.pos));
        var $headCell = oldTr.doc.resolve(oldTr.mapping.map(oldSelection.$headCell.pos));
        // We need to fix the type of CellSelection in `prosemirror-tables'
        var cellSelection = new prosemirror_tables_1.CellSelection($anchorCell, $headCell);
        tr.setSelection(cellSelection);
        if (tr.selection instanceof prosemirror_tables_1.CellSelection) {
            var rect = prosemirror_utils_1.getSelectionRect(cellSelection);
            if (rect) {
                var _a = utils_3.getSelectedCellInfo(tr.selection), verticalCells = _a.verticalCells, horizontalCells = _a.horizontalCells, totalCells = _a.totalCells, totalRowCount = _a.totalRowCount, totalColumnCount = _a.totalColumnCount;
                // Reassigning to make it more obvious and consistent
                tr = analytics_2.addAnalytics(newState, tr, {
                    action: analytics_2.TABLE_ACTION.CUT,
                    actionSubject: analytics_2.ACTION_SUBJECT.TABLE,
                    actionSubjectId: null,
                    attributes: {
                        verticalCells: verticalCells,
                        horizontalCells: horizontalCells,
                        totalCells: totalCells,
                        totalRowCount: totalRowCount,
                        totalColumnCount: totalColumnCount,
                    },
                    eventType: analytics_2.EVENT_TYPE.TRACK,
                });
                // Need this check again since we are overriding the tr in previous statement
                if (tr.selection instanceof prosemirror_tables_1.CellSelection) {
                    var isTableSelected = tr.selection.isRowSelection() && tr.selection.isColSelection();
                    if (isTableSelected) {
                        tr = prosemirror_utils_1.removeTable(tr);
                    }
                    else if (tr.selection.isRowSelection()) {
                        var isHeaderRowRequired = main_1.getPluginState(newState).pluginConfig.isHeaderRowRequired;
                        tr = transforms_1.deleteRows(rect, isHeaderRowRequired)(tr);
                        analytics_1.analyticsService.trackEvent('atlassian.editor.format.table.delete_row.button');
                    }
                    else if (tr.selection.isColSelection()) {
                        analytics_1.analyticsService.trackEvent('atlassian.editor.format.table.delete_column.button');
                        tr = transforms_1.deleteColumns(rect)(tr);
                    }
                }
            }
        }
    }
    return tr;
};
exports.whenTableInFocus = function (eventHandler) { return function (view, mouseEvent) {
    var tableResizePluginState = plugin_1.getPluginState(view.state);
    var tablePluginState = main_1.getPluginState(view.state);
    var isDragging = tableResizePluginState && !!tableResizePluginState.dragging;
    var hasTableNode = tablePluginState && tablePluginState.tableNode;
    if (!hasTableNode || isDragging) {
        return false;
    }
    // debounce event handler
    return raf_schd_1.default(eventHandler(view, mouseEvent));
}; };
//# sourceMappingURL=event-handlers.js.map