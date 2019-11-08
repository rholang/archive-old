"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_view_1 = require("prosemirror-view");
var prosemirror_utils_1 = require("prosemirror-utils");
var prosemirror_tables_1 = require("prosemirror-tables");
var types_1 = require("../types");
var main_1 = require("../pm-plugins/main");
var filterDecorationByKey = function (key, decorationSet) {
    return decorationSet.find(undefined, undefined, function (spec) { return spec.key.indexOf(key) > -1; });
};
var createResizeHandleNode = function () {
    var node = document.createElement('div');
    node.classList.add(types_1.TableCssClassName.RESIZE_HANDLE);
    return node;
};
exports.findColumnControlSelectedDecoration = function (decorationSet) {
    return filterDecorationByKey(types_1.TableDecorations.COLUMN_SELECTED, decorationSet);
};
exports.findControlsHoverDecoration = function (decorationSet) {
    return filterDecorationByKey(types_1.TableDecorations.ALL_CONTROLS_HOVER, decorationSet);
};
exports.createCellHoverDecoration = function (cells, type) {
    return cells.map(function (cell) {
        return prosemirror_view_1.Decoration.node(cell.pos, cell.pos + cell.node.nodeSize, {
            class: types_1.TableCssClassName.HOVERED_CELL_WARNING,
        }, {
            key: types_1.TableDecorations.CELL_CONTROLS_HOVER,
        });
    });
};
exports.createControlsHoverDecoration = function (cells, type, danger) {
    return cells.map(function (cell) {
        var classes = [types_1.TableCssClassName.HOVERED_CELL];
        if (danger) {
            classes.push(types_1.TableCssClassName.HOVERED_CELL_IN_DANGER);
        }
        classes.push(type === 'column'
            ? types_1.TableCssClassName.HOVERED_COLUMN
            : type === 'row'
                ? types_1.TableCssClassName.HOVERED_ROW
                : types_1.TableCssClassName.HOVERED_TABLE);
        var key;
        switch (type) {
            case 'row':
                key = types_1.TableDecorations.ROW_CONTROLS_HOVER;
                break;
            case 'column':
                key = types_1.TableDecorations.COLUMN_CONTROLS_HOVER;
                break;
            default:
                key = types_1.TableDecorations.TABLE_CONTROLS_HOVER;
                break;
        }
        return prosemirror_view_1.Decoration.node(cell.pos, cell.pos + cell.node.nodeSize, {
            class: classes.join(' '),
        }, { key: key });
    });
};
exports.createColumnSelectedDecorations = function (tr) {
    var selection = tr.selection, doc = tr.doc;
    var table = prosemirror_utils_1.findTable(selection);
    var rect = prosemirror_utils_1.getSelectionRect(selection);
    if (!table || !rect) {
        return [];
    }
    var map = prosemirror_tables_1.TableMap.get(table.node);
    var cellPositions = map.cellsInRect(rect);
    return cellPositions.map(function (pos, index) {
        var cell = doc.nodeAt(pos + table.start);
        return prosemirror_view_1.Decoration.node(pos + table.start, pos + table.start + cell.nodeSize, {
            class: types_1.TableCssClassName.COLUMN_SELECTED,
        }, {
            key: types_1.TableDecorations.COLUMN_SELECTED + "_" + index,
        });
    });
};
exports.createColumnControlsDecoration = function (selection) {
    var cells = prosemirror_utils_1.getCellsInRow(0)(selection) || [];
    var index = 0;
    return cells.map(function (cell) {
        var colspan = cell.node.attrs.colspan || 1;
        var element = document.createElement('div');
        element.classList.add(types_1.TableCssClassName.COLUMN_CONTROLS_DECORATIONS);
        element.dataset.startIndex = "" + index;
        index += colspan;
        element.dataset.endIndex = "" + index;
        element.appendChild(createResizeHandleNode());
        return prosemirror_view_1.Decoration.widget(cell.pos + 1, 
        // Do not delay the rendering for this Decoration
        // because we need to always render all controls
        // to keep the order safe
        element, {
            key: types_1.TableDecorations.COLUMN_CONTROLS_DECORATIONS + "_" + index,
            // this decoration should be the first one, even before gap cursor.
            side: -100,
        });
    });
};
exports.updateNodeDecorations = function (node, decorationSet, decorations, key) {
    var filteredDecorations = filterDecorationByKey(key, decorationSet);
    var decorationSetFiltered = decorationSet.remove(filteredDecorations);
    return decorationSetFiltered.add(node, decorations);
};
exports.updatePluginStateDecorations = function (state, decorations, key) {
    return exports.updateNodeDecorations(state.doc, main_1.getPluginState(state).decorationSet || prosemirror_view_1.DecorationSet.empty, decorations, key);
};
//# sourceMappingURL=decoration.js.map