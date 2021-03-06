import { TableMap } from 'prosemirror-tables';
import { getSelectionRect } from 'prosemirror-utils';
import { tableCellMinWidth, akEditorTableNumberColumnWidth, } from '@atlaskit/editor-common';
import { pluginKey as editorDisabledPluginKey } from '../../../editor-disabled';
import { updateColumnWidths } from '../../transforms';
import { getResizeState, resizeColumn, getLayoutSize, currentColWidth, pointsAtCell, updateControls, } from './utils';
import { getSelectedColumnIndexes, updateResizeHandles } from '../../utils';
import { pluginKey as widthPluginKey } from '../../../width';
import { getPluginState } from './plugin';
import { setDragging, evenColumns, stopResizing } from './commands';
import { getParentNodeWidth } from '../../../../utils/node-width';
export var handleMouseDown = function (view, event, localResizeHandlePos, dynamicTextSizing) {
    var state = view.state, dispatch = view.dispatch;
    var editorDisabled = editorDisabledPluginKey.getState(state).editorDisabled;
    var domAtPos = view.domAtPos.bind(view);
    if (editorDisabled ||
        localResizeHandlePos === null ||
        !pointsAtCell(state.doc.resolve(localResizeHandlePos))) {
        return false;
    }
    event.preventDefault();
    var cell = state.doc.nodeAt(localResizeHandlePos);
    var $cell = state.doc.resolve(localResizeHandlePos);
    var originalTable = $cell.node(-1);
    var start = $cell.start(-1);
    var dom = domAtPos(start).node;
    while (dom.nodeName !== 'TABLE') {
        dom = dom.parentNode;
    }
    var containerWidth = widthPluginKey.getState(state);
    var parentWidth = getParentNodeWidth(start, state, containerWidth);
    var maxSize = parentWidth ||
        getLayoutSize(dom.getAttribute('data-layout'), containerWidth.width, {
            dynamicTextSizing: dynamicTextSizing,
        });
    if (originalTable.attrs.isNumberColumnEnabled) {
        maxSize -= akEditorTableNumberColumnWidth;
    }
    var resizeState = getResizeState({
        minWidth: tableCellMinWidth,
        maxSize: maxSize,
        table: originalTable,
        tableRef: dom,
        start: start,
        domAtPos: domAtPos,
    });
    if (evenColumns({
        resizeState: resizeState,
        table: originalTable,
        start: start,
        event: event,
    })(state, dispatch)) {
        finish(event);
        return true;
    }
    var width = currentColWidth(view, localResizeHandlePos, cell
        .attrs);
    setDragging({ startX: event.clientX, startWidth: width })(state, dispatch);
    function finish(event) {
        window.removeEventListener('mouseup', finish);
        window.removeEventListener('mousemove', move);
        var clientX = event.clientX;
        var state = view.state, dispatch = view.dispatch;
        var _a = getPluginState(state), dragging = _a.dragging, resizeHandlePos = _a.resizeHandlePos;
        if (resizeHandlePos === null) {
            return stopResizing()(state, dispatch);
        }
        if (!pointsAtCell(state.doc.resolve(resizeHandlePos))) {
            return;
        }
        // resizeHandlePos could be remapped via a collab change.
        // Fetch a fresh reference of the table.
        var $cell = state.doc.resolve(resizeHandlePos);
        var start = $cell.start(-1);
        var table = $cell.node(-1);
        // If we let go in the same place we started, dont need to do anything.
        if (dragging && clientX === dragging.startX) {
            return stopResizing()(state, dispatch);
        }
        var tr = state.tr;
        if (dragging) {
            var startX = dragging.startX;
            // If the table has changed (via collab for example) don't apply column widths
            // For example, if a table col is deleted we won't be able to reliably remap the new widths
            // There may be a more elegant solution to this, to avoid a jarring experience.
            if (table.eq(originalTable)) {
                var map = TableMap.get(table);
                var colIndex = map.colCount($cell.pos - start) +
                    ($cell.nodeAfter ? $cell.nodeAfter.attrs.colspan : 1) -
                    1;
                var selectionRect = getSelectionRect(state.selection);
                var selectedColumns = selectionRect
                    ? getSelectedColumnIndexes(selectionRect)
                    : [];
                // only selected (or selected - 1) columns should be distributed
                var resizingSelectedColumns = selectedColumns.indexOf(colIndex) > -1 ||
                    selectedColumns.indexOf(colIndex + 1) > -1;
                var newResizeState = resizeColumn(resizeState, colIndex, clientX - startX, dom, resizingSelectedColumns ? selectedColumns : undefined);
                tr = updateColumnWidths(newResizeState, table, start)(tr);
            }
            return stopResizing(tr)(state, dispatch);
        }
    }
    function move(event) {
        var clientX = event.clientX, which = event.which;
        var state = view.state;
        var _a = getPluginState(state), dragging = _a.dragging, resizeHandlePos = _a.resizeHandlePos;
        if (!which ||
            !dragging ||
            resizeHandlePos === null ||
            !pointsAtCell(state.doc.resolve(resizeHandlePos))) {
            return finish(event);
        }
        var $cell = state.doc.resolve(resizeHandlePos);
        var table = $cell.node(-1);
        var map = TableMap.get(table);
        var colIndex = map.colCount($cell.pos - $cell.start(-1)) +
            $cell.nodeAfter.attrs.colspan -
            1;
        resizeColumn(resizeState, colIndex, clientX - dragging.startX, dom);
        updateControls(state);
        updateResizeHandles(dom);
    }
    window.addEventListener('mouseup', finish);
    window.addEventListener('mousemove', move);
    return true;
};
//# sourceMappingURL=event-handlers.js.map