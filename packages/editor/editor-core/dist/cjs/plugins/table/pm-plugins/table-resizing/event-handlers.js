"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_tables_1 = require("prosemirror-tables");
var prosemirror_utils_1 = require("prosemirror-utils");
var editor_common_1 = require("@atlaskit/editor-common");
var editor_disabled_1 = require("../../../editor-disabled");
var transforms_1 = require("../../transforms");
var utils_1 = require("./utils");
var utils_2 = require("../../utils");
var width_1 = require("../../../width");
var plugin_1 = require("./plugin");
var commands_1 = require("./commands");
var node_width_1 = require("../../../../utils/node-width");
exports.handleMouseDown = function (view, event, localResizeHandlePos, dynamicTextSizing) {
    var state = view.state, dispatch = view.dispatch;
    var editorDisabled = editor_disabled_1.pluginKey.getState(state).editorDisabled;
    var domAtPos = view.domAtPos.bind(view);
    if (editorDisabled ||
        localResizeHandlePos === null ||
        !utils_1.pointsAtCell(state.doc.resolve(localResizeHandlePos))) {
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
    var containerWidth = width_1.pluginKey.getState(state);
    var parentWidth = node_width_1.getParentNodeWidth(start, state, containerWidth);
    var maxSize = parentWidth ||
        utils_1.getLayoutSize(dom.getAttribute('data-layout'), containerWidth.width, {
            dynamicTextSizing: dynamicTextSizing,
        });
    if (originalTable.attrs.isNumberColumnEnabled) {
        maxSize -= editor_common_1.akEditorTableNumberColumnWidth;
    }
    var resizeState = utils_1.getResizeState({
        minWidth: editor_common_1.tableCellMinWidth,
        maxSize: maxSize,
        table: originalTable,
        tableRef: dom,
        start: start,
        domAtPos: domAtPos,
    });
    if (commands_1.evenColumns({
        resizeState: resizeState,
        table: originalTable,
        start: start,
        event: event,
    })(state, dispatch)) {
        finish(event);
        return true;
    }
    var width = utils_1.currentColWidth(view, localResizeHandlePos, cell
        .attrs);
    commands_1.setDragging({ startX: event.clientX, startWidth: width })(state, dispatch);
    function finish(event) {
        window.removeEventListener('mouseup', finish);
        window.removeEventListener('mousemove', move);
        var clientX = event.clientX;
        var state = view.state, dispatch = view.dispatch;
        var _a = plugin_1.getPluginState(state), dragging = _a.dragging, resizeHandlePos = _a.resizeHandlePos;
        if (resizeHandlePos === null) {
            return commands_1.stopResizing()(state, dispatch);
        }
        if (!utils_1.pointsAtCell(state.doc.resolve(resizeHandlePos))) {
            return;
        }
        // resizeHandlePos could be remapped via a collab change.
        // Fetch a fresh reference of the table.
        var $cell = state.doc.resolve(resizeHandlePos);
        var start = $cell.start(-1);
        var table = $cell.node(-1);
        // If we let go in the same place we started, dont need to do anything.
        if (dragging && clientX === dragging.startX) {
            return commands_1.stopResizing()(state, dispatch);
        }
        var tr = state.tr;
        if (dragging) {
            var startX = dragging.startX;
            // If the table has changed (via collab for example) don't apply column widths
            // For example, if a table col is deleted we won't be able to reliably remap the new widths
            // There may be a more elegant solution to this, to avoid a jarring experience.
            if (table.eq(originalTable)) {
                var map = prosemirror_tables_1.TableMap.get(table);
                var colIndex = map.colCount($cell.pos - start) +
                    ($cell.nodeAfter ? $cell.nodeAfter.attrs.colspan : 1) -
                    1;
                var selectionRect = prosemirror_utils_1.getSelectionRect(state.selection);
                var selectedColumns = selectionRect
                    ? utils_2.getSelectedColumnIndexes(selectionRect)
                    : [];
                // only selected (or selected - 1) columns should be distributed
                var resizingSelectedColumns = selectedColumns.indexOf(colIndex) > -1 ||
                    selectedColumns.indexOf(colIndex + 1) > -1;
                var newResizeState = utils_1.resizeColumn(resizeState, colIndex, clientX - startX, dom, resizingSelectedColumns ? selectedColumns : undefined);
                tr = transforms_1.updateColumnWidths(newResizeState, table, start)(tr);
            }
            return commands_1.stopResizing(tr)(state, dispatch);
        }
    }
    function move(event) {
        var clientX = event.clientX, which = event.which;
        var state = view.state;
        var _a = plugin_1.getPluginState(state), dragging = _a.dragging, resizeHandlePos = _a.resizeHandlePos;
        if (!which ||
            !dragging ||
            resizeHandlePos === null ||
            !utils_1.pointsAtCell(state.doc.resolve(resizeHandlePos))) {
            return finish(event);
        }
        var $cell = state.doc.resolve(resizeHandlePos);
        var table = $cell.node(-1);
        var map = prosemirror_tables_1.TableMap.get(table);
        var colIndex = map.colCount($cell.pos - $cell.start(-1)) +
            $cell.nodeAfter.attrs.colspan -
            1;
        utils_1.resizeColumn(resizeState, colIndex, clientX - dragging.startX, dom);
        utils_1.updateControls(state);
        utils_2.updateResizeHandles(dom);
    }
    window.addEventListener('mouseup', finish);
    window.addEventListener('mousemove', move);
    return true;
};
//# sourceMappingURL=event-handlers.js.map