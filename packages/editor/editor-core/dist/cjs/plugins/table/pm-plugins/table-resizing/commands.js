"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_tables_1 = require("prosemirror-tables");
var prosemirror_utils_1 = require("prosemirror-utils");
var editor_common_1 = require("@atlaskit/editor-common");
var transforms_1 = require("../../transforms");
var plugin_1 = require("./plugin");
var utils_1 = require("./utils");
exports.handleBreakoutContent = function (tableRef, cellPos, start, minWidth, table, domAtPos) { return function (state, dispatch) {
    var map = prosemirror_tables_1.TableMap.get(table);
    // Investigate Math.max fallback for tests using JSDOM: https://product-fabric.atlassian.net/browse/ED-7000
    var rect = map.findCell(Math.max(cellPos - start, 1));
    var cellStyle = getComputedStyle(tableRef);
    var amount = utils_1.addContainerLeftRightPadding(minWidth - tableRef.offsetWidth, cellStyle);
    while (tableRef.nodeName !== 'TABLE') {
        tableRef = tableRef.parentNode;
    }
    var resizeState = utils_1.resizeColumn(utils_1.getResizeState({
        minWidth: editor_common_1.tableCellMinWidth,
        maxSize: tableRef.offsetWidth,
        table: table,
        tableRef: tableRef,
        start: start,
        domAtPos: domAtPos,
    }), rect.left, amount, tableRef);
    var tr = state.tr;
    transforms_1.updateColumnWidths(resizeState, table, start)(tr);
    if (dispatch && tr.docChanged) {
        dispatch(tr);
    }
    return true;
}; };
// Scale the table to meet new requirements (col, layout change etc)
exports.scaleTable = function (tableRef, options, domAtPos) { return function (state, dispatch) {
    if (!tableRef) {
        return false;
    }
    var node = options.node, start = options.start, parentWidth = options.parentWidth;
    // If a table has not been resized yet, columns should be auto.
    if (utils_1.hasTableBeenResized(node) === false) {
        // If its not a re-sized table, we still want to re-create cols
        // To force reflow of columns upon delete.
        utils_1.insertColgroupFromNode(tableRef, node);
        return false;
    }
    var resizeState;
    if (parentWidth) {
        resizeState = utils_1.scaleWithParent(tableRef, parentWidth, node, start, domAtPos);
    }
    else {
        resizeState = utils_1.scale(tableRef, options, domAtPos);
    }
    if (resizeState) {
        var tr = state.tr;
        tr = transforms_1.updateColumnWidths(resizeState, node, start)(tr);
        if (tr.docChanged && dispatch) {
            dispatch(tr);
            return true;
        }
    }
    return false;
}; };
exports.evenColumns = function (_a) {
    var resizeState = _a.resizeState, table = _a.table, start = _a.start, event = _a.event;
    return function (state, dispatch) {
        if (!prosemirror_utils_1.isTableSelected(state.selection)) {
            return false;
        }
        // double click detection logic
        // Note: ProseMirror's handleDoubleClick doesn't quite work with DOM mousedown event handler
        var lastClick = plugin_1.getPluginState(state).lastClick;
        var now = Date.now();
        if (lastClick &&
            now - lastClick.time < 500 &&
            utils_1.isClickNear(event, lastClick)) {
            var newState_1 = utils_1.evenAllColumnsWidths(resizeState);
            exports.setLastClick(null, function (tr) { return transforms_1.updateColumnWidths(newState_1, table, start)(tr); })(state, dispatch);
            return true;
        }
        exports.setLastClick({ x: event.clientX, y: event.clientY, time: now })(state, dispatch);
        return false;
    };
};
exports.setResizeHandlePos = function (resizeHandlePos) {
    return plugin_1.createCommand({
        type: 'SET_RESIZE_HANDLE_POSITION',
        data: {
            resizeHandlePos: resizeHandlePos,
        },
    });
};
exports.stopResizing = function (tr) {
    return plugin_1.createCommand({
        type: 'STOP_RESIZING',
    }, function (originalTr) { return tr || originalTr; });
};
exports.setDragging = function (dragging, tr) {
    return plugin_1.createCommand({
        type: 'SET_DRAGGING',
        data: {
            dragging: dragging,
        },
    }, function (originalTr) { return tr || originalTr; });
};
exports.setLastClick = function (lastClick, transform) {
    return plugin_1.createCommand({
        type: 'SET_LAST_CLICK',
        data: {
            lastClick: lastClick,
        },
    }, transform);
};
//# sourceMappingURL=commands.js.map