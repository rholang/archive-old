import { __read } from "tslib";
import { TextSelection, Selection, } from 'prosemirror-state';
import { TableMap, cellAround, CellSelection } from 'prosemirror-tables';
import { findTable, getSelectionRect, removeTable } from 'prosemirror-utils';
import rafSchedule from 'raf-schd';
import { browser } from '@atlaskit/editor-common';
import { analyticsService } from '../../analytics';
import { addAnalytics, TABLE_ACTION, ACTION_SUBJECT, EVENT_TYPE, } from '../analytics';
import { isElementInTableCell, setNodeSelection, isLastItemMediaGroup, closestElement, } from '../../utils/';
import { isCell, isInsertRowButton, isColumnControlsDecorations, isTableControlsButton, isRowControlsButton, isCornerButton, getColumnOrRowIndex, getMousePositionHorizontalRelativeByElement, getMousePositionVerticalRelativeByElement, } from './utils';
import { setEditorFocus, showInsertColumnButton, showInsertRowButton, hideInsertColumnOrRowButton, selectColumn, hoverColumns, clearHoverSelection, } from './commands';
import { getPluginState } from './pm-plugins/main';
import { getPluginState as getResizePluginState } from './pm-plugins/table-resizing/plugin';
import { getSelectedCellInfo } from './utils';
import { deleteColumns, deleteRows } from './transforms';
export var handleBlur = function (view, event) {
    var state = view.state, dispatch = view.dispatch;
    // fix for issue ED-4665
    if (browser.ie_version !== 11) {
        setEditorFocus(false)(state, dispatch);
    }
    event.preventDefault();
    return false;
};
export var handleFocus = function (view, event) {
    var state = view.state, dispatch = view.dispatch;
    setEditorFocus(true)(state, dispatch);
    event.preventDefault();
    return false;
};
export var handleClick = function (view, event) {
    var element = event.target;
    var table = findTable(view.state.selection);
    if (event instanceof MouseEvent && isColumnControlsDecorations(element)) {
        var _a = __read(getColumnOrRowIndex(element), 1), startIndex = _a[0];
        var state = view.state, dispatch_1 = view.dispatch;
        return selectColumn(startIndex, event.shiftKey)(state, dispatch_1);
    }
    /**
     * Check if the table cell with an image is clicked
     * and its not the image itself
     */
    var matches = element.matches ? 'matches' : 'msMatchesSelector';
    if (!table ||
        !isElementInTableCell(element) ||
        element[matches]('table .image, table p, table .image div')) {
        return false;
    }
    var map = TableMap.get(table.node);
    /** Getting the offset of current item clicked */
    var colElement = (closestElement(element, 'td') ||
        closestElement(element, 'th'));
    var colIndex = colElement && colElement.cellIndex;
    var rowElement = closestElement(element, 'tr');
    var rowIndex = rowElement && rowElement.rowIndex;
    var cellIndex = map.width * rowIndex + colIndex;
    var posInTable = map.map[cellIndex + 1];
    var dispatch = view.dispatch, _b = view.state, tr = _b.tr, paragraph = _b.schema.nodes.paragraph;
    var editorElement = table.node.nodeAt(map.map[cellIndex]);
    /** Only if the last item is media group, insert a paragraph */
    if (isLastItemMediaGroup(editorElement)) {
        tr.insert(posInTable + table.pos, paragraph.create());
        dispatch(tr);
        setNodeSelection(view, posInTable + table.pos);
    }
    return true;
};
export var handleMouseOver = function (view, mouseEvent) {
    var state = view.state, dispatch = view.dispatch;
    var target = mouseEvent.target;
    var _a = getPluginState(state), insertColumnButtonIndex = _a.insertColumnButtonIndex, insertRowButtonIndex = _a.insertRowButtonIndex;
    if (isInsertRowButton(target)) {
        var _b = __read(getColumnOrRowIndex(target), 2), startIndex = _b[0], endIndex = _b[1];
        var positionRow = getMousePositionVerticalRelativeByElement(mouseEvent) ===
            'bottom'
            ? endIndex
            : startIndex;
        return showInsertRowButton(positionRow)(state, dispatch);
    }
    if (isColumnControlsDecorations(target)) {
        var _c = __read(getColumnOrRowIndex(target), 1), startIndex = _c[0];
        var state_1 = view.state, dispatch_2 = view.dispatch;
        return hoverColumns([startIndex], false)(state_1, dispatch_2);
    }
    if ((isCell(target) || isCornerButton(target)) &&
        (typeof insertColumnButtonIndex === 'number' ||
            typeof insertRowButtonIndex === 'number')) {
        return hideInsertColumnOrRowButton()(state, dispatch);
    }
    return false;
};
// Ignore any `mousedown` `event` from control and numbered column buttons
// PM end up changing selection during shift selection if not prevented
export var handleMouseDown = function (_, event) {
    var isControl = !!(event.target &&
        event.target instanceof HTMLElement &&
        (isColumnControlsDecorations(event.target) ||
            isRowControlsButton(event.target)));
    if (isControl) {
        event.preventDefault();
    }
    return isControl;
};
export var handleMouseOut = function (view, mouseEvent) {
    var target = mouseEvent.target;
    if (isColumnControlsDecorations(target)) {
        var state = view.state, dispatch = view.dispatch;
        return clearHoverSelection()(state, dispatch);
    }
    return false;
};
export var handleMouseLeave = function (view, event) {
    var state = view.state, dispatch = view.dispatch;
    var _a = getPluginState(state), insertColumnButtonIndex = _a.insertColumnButtonIndex, insertRowButtonIndex = _a.insertRowButtonIndex;
    var target = event.target;
    if (isTableControlsButton(target)) {
        return true;
    }
    if ((typeof insertColumnButtonIndex !== 'undefined' ||
        typeof insertRowButtonIndex !== 'undefined') &&
        hideInsertColumnOrRowButton()(state, dispatch)) {
        return true;
    }
    return false;
};
export var handleMouseMove = function (view, event) {
    var element = event.target;
    if (isColumnControlsDecorations(element)) {
        var state = view.state, dispatch = view.dispatch;
        var insertColumnButtonIndex = getPluginState(state).insertColumnButtonIndex;
        var _a = __read(getColumnOrRowIndex(element), 2), startIndex = _a[0], endIndex = _a[1];
        var positionColumn = getMousePositionHorizontalRelativeByElement(event) ===
            'right'
            ? endIndex
            : startIndex;
        if (positionColumn !== insertColumnButtonIndex) {
            return showInsertColumnButton(positionColumn)(state, dispatch);
        }
    }
    if (isRowControlsButton(element)) {
        var state = view.state, dispatch = view.dispatch;
        var insertRowButtonIndex = getPluginState(state).insertRowButtonIndex;
        var _b = __read(getColumnOrRowIndex(element), 2), startIndex = _b[0], endIndex = _b[1];
        var positionRow = getMousePositionVerticalRelativeByElement(event) ===
            'bottom'
            ? endIndex
            : startIndex;
        if (positionRow !== insertRowButtonIndex) {
            return showInsertRowButton(positionRow)(state, dispatch);
        }
    }
    return false;
};
export function handleTripleClick(view, pos) {
    var state = view.state, dispatch = view.dispatch;
    var $cellPos = cellAround(state.doc.resolve(pos));
    if (!$cellPos) {
        return false;
    }
    var cell = state.doc.nodeAt($cellPos.pos);
    if (cell) {
        var selFrom = Selection.findFrom($cellPos, 1, true);
        var selTo = Selection.findFrom(state.doc.resolve($cellPos.pos + cell.nodeSize), -1, true);
        if (selFrom && selTo) {
            dispatch(state.tr.setSelection(new TextSelection(selFrom.$from, selTo.$to)));
            return true;
        }
    }
    return false;
}
export var handleCut = function (oldTr, oldState, newState) {
    var oldSelection = oldState.tr.selection;
    var tr = newState.tr;
    if (oldSelection instanceof CellSelection) {
        var $anchorCell = oldTr.doc.resolve(oldTr.mapping.map(oldSelection.$anchorCell.pos));
        var $headCell = oldTr.doc.resolve(oldTr.mapping.map(oldSelection.$headCell.pos));
        // We need to fix the type of CellSelection in `prosemirror-tables'
        var cellSelection = new CellSelection($anchorCell, $headCell);
        tr.setSelection(cellSelection);
        if (tr.selection instanceof CellSelection) {
            var rect = getSelectionRect(cellSelection);
            if (rect) {
                var _a = getSelectedCellInfo(tr.selection), verticalCells = _a.verticalCells, horizontalCells = _a.horizontalCells, totalCells = _a.totalCells, totalRowCount = _a.totalRowCount, totalColumnCount = _a.totalColumnCount;
                // Reassigning to make it more obvious and consistent
                tr = addAnalytics(newState, tr, {
                    action: TABLE_ACTION.CUT,
                    actionSubject: ACTION_SUBJECT.TABLE,
                    actionSubjectId: null,
                    attributes: {
                        verticalCells: verticalCells,
                        horizontalCells: horizontalCells,
                        totalCells: totalCells,
                        totalRowCount: totalRowCount,
                        totalColumnCount: totalColumnCount,
                    },
                    eventType: EVENT_TYPE.TRACK,
                });
                // Need this check again since we are overriding the tr in previous statement
                if (tr.selection instanceof CellSelection) {
                    var isTableSelected = tr.selection.isRowSelection() && tr.selection.isColSelection();
                    if (isTableSelected) {
                        tr = removeTable(tr);
                    }
                    else if (tr.selection.isRowSelection()) {
                        var isHeaderRowRequired = getPluginState(newState).pluginConfig.isHeaderRowRequired;
                        tr = deleteRows(rect, isHeaderRowRequired)(tr);
                        analyticsService.trackEvent('atlassian.editor.format.table.delete_row.button');
                    }
                    else if (tr.selection.isColSelection()) {
                        analyticsService.trackEvent('atlassian.editor.format.table.delete_column.button');
                        tr = deleteColumns(rect)(tr);
                    }
                }
            }
        }
    }
    return tr;
};
export var whenTableInFocus = function (eventHandler) { return function (view, mouseEvent) {
    var tableResizePluginState = getResizePluginState(view.state);
    var tablePluginState = getPluginState(view.state);
    var isDragging = tableResizePluginState && !!tableResizePluginState.dragging;
    var hasTableNode = tablePluginState && tablePluginState.tableNode;
    if (!hasTableNode || isDragging) {
        return false;
    }
    // debounce event handler
    return rafSchedule(eventHandler(view, mouseEvent));
}; };
//# sourceMappingURL=event-handlers.js.map