import { Decoration, DecorationSet } from 'prosemirror-view';
import { getCellsInRow, getSelectionRect, findTable, } from 'prosemirror-utils';
import { TableMap } from 'prosemirror-tables';
import { TableCssClassName as ClassName, TableDecorations, } from '../types';
import { getPluginState } from '../pm-plugins/main';
var filterDecorationByKey = function (key, decorationSet) {
    return decorationSet.find(undefined, undefined, function (spec) { return spec.key.indexOf(key) > -1; });
};
var createResizeHandleNode = function () {
    var node = document.createElement('div');
    node.classList.add(ClassName.RESIZE_HANDLE);
    return node;
};
export var findColumnControlSelectedDecoration = function (decorationSet) {
    return filterDecorationByKey(TableDecorations.COLUMN_SELECTED, decorationSet);
};
export var findControlsHoverDecoration = function (decorationSet) {
    return filterDecorationByKey(TableDecorations.ALL_CONTROLS_HOVER, decorationSet);
};
export var createCellHoverDecoration = function (cells, type) {
    return cells.map(function (cell) {
        return Decoration.node(cell.pos, cell.pos + cell.node.nodeSize, {
            class: ClassName.HOVERED_CELL_WARNING,
        }, {
            key: TableDecorations.CELL_CONTROLS_HOVER,
        });
    });
};
export var createControlsHoverDecoration = function (cells, type, danger) {
    return cells.map(function (cell) {
        var classes = [ClassName.HOVERED_CELL];
        if (danger) {
            classes.push(ClassName.HOVERED_CELL_IN_DANGER);
        }
        classes.push(type === 'column'
            ? ClassName.HOVERED_COLUMN
            : type === 'row'
                ? ClassName.HOVERED_ROW
                : ClassName.HOVERED_TABLE);
        var key;
        switch (type) {
            case 'row':
                key = TableDecorations.ROW_CONTROLS_HOVER;
                break;
            case 'column':
                key = TableDecorations.COLUMN_CONTROLS_HOVER;
                break;
            default:
                key = TableDecorations.TABLE_CONTROLS_HOVER;
                break;
        }
        return Decoration.node(cell.pos, cell.pos + cell.node.nodeSize, {
            class: classes.join(' '),
        }, { key: key });
    });
};
export var createColumnSelectedDecorations = function (tr) {
    var selection = tr.selection, doc = tr.doc;
    var table = findTable(selection);
    var rect = getSelectionRect(selection);
    if (!table || !rect) {
        return [];
    }
    var map = TableMap.get(table.node);
    var cellPositions = map.cellsInRect(rect);
    return cellPositions.map(function (pos, index) {
        var cell = doc.nodeAt(pos + table.start);
        return Decoration.node(pos + table.start, pos + table.start + cell.nodeSize, {
            class: ClassName.COLUMN_SELECTED,
        }, {
            key: TableDecorations.COLUMN_SELECTED + "_" + index,
        });
    });
};
export var createColumnControlsDecoration = function (selection) {
    var cells = getCellsInRow(0)(selection) || [];
    var index = 0;
    return cells.map(function (cell) {
        var colspan = cell.node.attrs.colspan || 1;
        var element = document.createElement('div');
        element.classList.add(ClassName.COLUMN_CONTROLS_DECORATIONS);
        element.dataset.startIndex = "" + index;
        index += colspan;
        element.dataset.endIndex = "" + index;
        element.appendChild(createResizeHandleNode());
        return Decoration.widget(cell.pos + 1, 
        // Do not delay the rendering for this Decoration
        // because we need to always render all controls
        // to keep the order safe
        element, {
            key: TableDecorations.COLUMN_CONTROLS_DECORATIONS + "_" + index,
            // this decoration should be the first one, even before gap cursor.
            side: -100,
        });
    });
};
export var updateNodeDecorations = function (node, decorationSet, decorations, key) {
    var filteredDecorations = filterDecorationByKey(key, decorationSet);
    var decorationSetFiltered = decorationSet.remove(filteredDecorations);
    return decorationSetFiltered.add(node, decorations);
};
export var updatePluginStateDecorations = function (state, decorations, key) {
    return updateNodeDecorations(state.doc, getPluginState(state).decorationSet || DecorationSet.empty, decorations, key);
};
//# sourceMappingURL=decoration.js.map