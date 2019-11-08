"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_utils_1 = require("prosemirror-utils");
var prosemirror_tables_1 = require("prosemirror-tables");
var styles_1 = require("../ui/styles");
var types_1 = require("../types");
exports.getColumnsWidths = function (view) {
    var selection = view.state.selection;
    var widths = [];
    var table = prosemirror_utils_1.findTable(selection);
    if (table) {
        var map = prosemirror_tables_1.TableMap.get(table.node);
        var domAtPos = view.domAtPos.bind(view);
        // When there is no cell we need to fill it with undefined
        widths = Array.from({ length: map.width });
        for (var i = 0; i < map.width; i++) {
            var cells = prosemirror_utils_1.getCellsInColumn(i)(selection);
            var cell = cells[0];
            if (cell) {
                var cellRef = prosemirror_utils_1.findDomRefAtPos(cell.pos, domAtPos);
                var rect = cellRef.getBoundingClientRect();
                widths[i] = (rect ? rect.width : cellRef.offsetWidth) + 1;
                i += cell.node.attrs.colspan - 1;
            }
        }
    }
    return widths;
};
exports.isColumnDeleteButtonVisible = function (selection) {
    if (!prosemirror_utils_1.isTableSelected(selection) &&
        (selection instanceof prosemirror_tables_1.CellSelection && selection.isColSelection())) {
        return true;
    }
    return false;
};
exports.getColumnDeleteButtonParams = function (columnsWidths, selection) {
    var rect = prosemirror_utils_1.getSelectionRect(selection);
    if (!rect) {
        return null;
    }
    var width = 0;
    var offset = 0;
    // find the columns before the selection
    for (var i = 0; i < rect.left; i++) {
        var colWidth = columnsWidths[i];
        if (colWidth) {
            offset += colWidth - 1;
        }
    }
    // these are the selected columns widths
    var indexes = [];
    for (var i = rect.left; i < rect.right; i++) {
        var colWidth = columnsWidths[i];
        if (colWidth) {
            width += colWidth;
            indexes.push(i);
        }
    }
    var left = offset + width / 2 - styles_1.tableDeleteButtonSize / 2;
    return { left: left, indexes: indexes };
};
exports.getColumnClassNames = function (index, selection, hoveredColumns, isInDanger, isResizing) {
    if (hoveredColumns === void 0) { hoveredColumns = []; }
    var classNames = [];
    if (prosemirror_utils_1.isColumnSelected(index)(selection) ||
        (hoveredColumns.indexOf(index) > -1 && !isResizing)) {
        classNames.push(types_1.TableCssClassName.HOVERED_CELL_ACTIVE);
        if (isInDanger) {
            classNames.push(types_1.TableCssClassName.HOVERED_CELL_IN_DANGER);
        }
    }
    return classNames.join(' ');
};
//# sourceMappingURL=column-controls.js.map