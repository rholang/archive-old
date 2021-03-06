import { Selection } from 'prosemirror-state';
import { createCommand } from '../pm-plugins/main';
import { findTable, convertTableNodeToArrayOfRows, convertArrayOfRowsToTableNode, isCellSelection, getSelectionRect, findCellRectClosestToPos, } from 'prosemirror-utils';
import { createCompareNodes } from '@atlaskit/editor-common';
import { SortOrder } from '../types';
import { TableSortStep } from '../utils';
import { getPluginState } from '../pm-plugins/main';
import { TableMap } from 'prosemirror-tables';
import { pluginKey } from '../../card/pm-plugins/main';
function createGetInlineCardTextFromStore(state) {
    var cardState = pluginKey.getState(state);
    if (!cardState) {
        // If not card state, return null always
        return function () { return null; };
    }
    return function (attrs) {
        var cardUrl = attrs.url;
        if (cardUrl) {
            var card = cardState.cards.find(function (_a) {
                var url = _a.url;
                return url === cardUrl;
            });
            if (card && card.title) {
                return card.title;
            }
        }
        return null;
    };
}
export var sortByColumn = function (columnIndex, order) {
    if (order === void 0) { order = SortOrder.DESC; }
    return createCommand(function (state) { return ({
        type: 'SORT_TABLE',
        data: {
            ordering: {
                columnIndex: columnIndex,
                order: order,
            },
        },
    }); }, function (tr, state) {
        var table = findTable(tr.selection);
        if (!table || !table.node) {
            return tr;
        }
        var selectionRect = isCellSelection(tr.selection)
            ? getSelectionRect(tr.selection)
            : findCellRectClosestToPos(tr.selection.$from);
        if (!selectionRect) {
            return tr;
        }
        var tablePluginState = getPluginState(state);
        var tableArray = convertTableNodeToArrayOfRows(table.node);
        var headerRow;
        if (tablePluginState.isHeaderRowEnabled) {
            headerRow = tableArray.shift();
        }
        var compareNodes = createCompareNodes({
            getInlineCardTextFromStore: createGetInlineCardTextFromStore(state),
        });
        var sortedTable = tableArray.sort(function (rowA, rowB) {
            return (order === SortOrder.DESC ? -1 : 1) *
                compareNodes(rowA[columnIndex], rowB[columnIndex]);
        });
        if (headerRow) {
            sortedTable.unshift(headerRow);
        }
        var newTableNode = convertArrayOfRowsToTableNode(table.node, sortedTable);
        tr.replaceWith(table.pos, table.pos + table.node.nodeSize, newTableNode);
        var pos = TableMap.get(table.node).positionAt(selectionRect.top, columnIndex, table.node);
        var prev = tablePluginState.ordering;
        var next = {
            columnIndex: columnIndex,
            order: order,
        };
        tr.steps.push(new TableSortStep(table.pos, prev, next));
        return tr.setSelection(Selection.near(tr.doc.resolve(table.start + pos)));
    });
};
//# sourceMappingURL=sort.js.map