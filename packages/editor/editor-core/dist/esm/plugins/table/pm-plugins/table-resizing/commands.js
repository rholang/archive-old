import { TableMap } from 'prosemirror-tables';
import { isTableSelected } from 'prosemirror-utils';
import { tableCellMinWidth } from '@atlaskit/editor-common';
import { updateColumnWidths } from '../../transforms';
import { createCommand, getPluginState } from './plugin';
import { addContainerLeftRightPadding, resizeColumn, getResizeState, hasTableBeenResized, insertColgroupFromNode as recreateResizeColsByNode, scaleWithParent, scale, isClickNear, evenAllColumnsWidths, } from './utils';
export var handleBreakoutContent = function (tableRef, cellPos, start, minWidth, table, domAtPos) { return function (state, dispatch) {
    var map = TableMap.get(table);
    // Investigate Math.max fallback for tests using JSDOM: https://product-fabric.atlassian.net/browse/ED-7000
    var rect = map.findCell(Math.max(cellPos - start, 1));
    var cellStyle = getComputedStyle(tableRef);
    var amount = addContainerLeftRightPadding(minWidth - tableRef.offsetWidth, cellStyle);
    while (tableRef.nodeName !== 'TABLE') {
        tableRef = tableRef.parentNode;
    }
    var resizeState = resizeColumn(getResizeState({
        minWidth: tableCellMinWidth,
        maxSize: tableRef.offsetWidth,
        table: table,
        tableRef: tableRef,
        start: start,
        domAtPos: domAtPos,
    }), rect.left, amount, tableRef);
    var tr = state.tr;
    updateColumnWidths(resizeState, table, start)(tr);
    if (dispatch && tr.docChanged) {
        dispatch(tr);
    }
    return true;
}; };
// Scale the table to meet new requirements (col, layout change etc)
export var scaleTable = function (tableRef, options, domAtPos) { return function (state, dispatch) {
    if (!tableRef) {
        return false;
    }
    var node = options.node, start = options.start, parentWidth = options.parentWidth;
    // If a table has not been resized yet, columns should be auto.
    if (hasTableBeenResized(node) === false) {
        // If its not a re-sized table, we still want to re-create cols
        // To force reflow of columns upon delete.
        recreateResizeColsByNode(tableRef, node);
        return false;
    }
    var resizeState;
    if (parentWidth) {
        resizeState = scaleWithParent(tableRef, parentWidth, node, start, domAtPos);
    }
    else {
        resizeState = scale(tableRef, options, domAtPos);
    }
    if (resizeState) {
        var tr = state.tr;
        tr = updateColumnWidths(resizeState, node, start)(tr);
        if (tr.docChanged && dispatch) {
            dispatch(tr);
            return true;
        }
    }
    return false;
}; };
export var evenColumns = function (_a) {
    var resizeState = _a.resizeState, table = _a.table, start = _a.start, event = _a.event;
    return function (state, dispatch) {
        if (!isTableSelected(state.selection)) {
            return false;
        }
        // double click detection logic
        // Note: ProseMirror's handleDoubleClick doesn't quite work with DOM mousedown event handler
        var lastClick = getPluginState(state).lastClick;
        var now = Date.now();
        if (lastClick &&
            now - lastClick.time < 500 &&
            isClickNear(event, lastClick)) {
            var newState_1 = evenAllColumnsWidths(resizeState);
            setLastClick(null, function (tr) { return updateColumnWidths(newState_1, table, start)(tr); })(state, dispatch);
            return true;
        }
        setLastClick({ x: event.clientX, y: event.clientY, time: now })(state, dispatch);
        return false;
    };
};
export var setResizeHandlePos = function (resizeHandlePos) {
    return createCommand({
        type: 'SET_RESIZE_HANDLE_POSITION',
        data: {
            resizeHandlePos: resizeHandlePos,
        },
    });
};
export var stopResizing = function (tr) {
    return createCommand({
        type: 'STOP_RESIZING',
    }, function (originalTr) { return tr || originalTr; });
};
export var setDragging = function (dragging, tr) {
    return createCommand({
        type: 'SET_DRAGGING',
        data: {
            dragging: dragging,
        },
    }, function (originalTr) { return tr || originalTr; });
};
export var setLastClick = function (lastClick, transform) {
    return createCommand({
        type: 'SET_LAST_CLICK',
        data: {
            lastClick: lastClick,
        },
    }, transform);
};
//# sourceMappingURL=commands.js.map