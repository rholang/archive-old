import { findTable, getCellsInColumn, findDomRefAtPos, getSelectionRect, isColumnSelected, isTableSelected, } from 'prosemirror-utils';
import { TableMap, CellSelection } from 'prosemirror-tables';
import { tableDeleteButtonSize } from '../ui/styles';
import { TableCssClassName as ClassName } from '../types';
export var getColumnsWidths = function (view) {
    var selection = view.state.selection;
    var widths = [];
    var table = findTable(selection);
    if (table) {
        var map = TableMap.get(table.node);
        var domAtPos = view.domAtPos.bind(view);
        // When there is no cell we need to fill it with undefined
        widths = Array.from({ length: map.width });
        for (var i = 0; i < map.width; i++) {
            var cells = getCellsInColumn(i)(selection);
            var cell = cells[0];
            if (cell) {
                var cellRef = findDomRefAtPos(cell.pos, domAtPos);
                var rect = cellRef.getBoundingClientRect();
                widths[i] = (rect ? rect.width : cellRef.offsetWidth) + 1;
                i += cell.node.attrs.colspan - 1;
            }
        }
    }
    return widths;
};
export var isColumnDeleteButtonVisible = function (selection) {
    if (!isTableSelected(selection) &&
        (selection instanceof CellSelection && selection.isColSelection())) {
        return true;
    }
    return false;
};
export var getColumnDeleteButtonParams = function (columnsWidths, selection) {
    var rect = getSelectionRect(selection);
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
    var left = offset + width / 2 - tableDeleteButtonSize / 2;
    return { left: left, indexes: indexes };
};
export var getColumnClassNames = function (index, selection, hoveredColumns, isInDanger, isResizing) {
    if (hoveredColumns === void 0) { hoveredColumns = []; }
    var classNames = [];
    if (isColumnSelected(index)(selection) ||
        (hoveredColumns.indexOf(index) > -1 && !isResizing)) {
        classNames.push(ClassName.HOVERED_CELL_ACTIVE);
        if (isInDanger) {
            classNames.push(ClassName.HOVERED_CELL_IN_DANGER);
        }
    }
    return classNames.join(' ');
};
//# sourceMappingURL=column-controls.js.map