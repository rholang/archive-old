"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_state_1 = require("prosemirror-state");
var main_1 = require("../pm-plugins/main");
var prosemirror_utils_1 = require("prosemirror-utils");
var editor_common_1 = require("@atlaskit/editor-common");
var types_1 = require("../types");
var utils_1 = require("../utils");
var main_2 = require("../pm-plugins/main");
var prosemirror_tables_1 = require("prosemirror-tables");
var main_3 = require("../../card/pm-plugins/main");
function createGetInlineCardTextFromStore(state) {
    var cardState = main_3.pluginKey.getState(state);
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
exports.sortByColumn = function (columnIndex, order) {
    if (order === void 0) { order = types_1.SortOrder.DESC; }
    return main_1.createCommand(function (state) { return ({
        type: 'SORT_TABLE',
        data: {
            ordering: {
                columnIndex: columnIndex,
                order: order,
            },
        },
    }); }, function (tr, state) {
        var table = prosemirror_utils_1.findTable(tr.selection);
        if (!table || !table.node) {
            return tr;
        }
        var selectionRect = prosemirror_utils_1.isCellSelection(tr.selection)
            ? prosemirror_utils_1.getSelectionRect(tr.selection)
            : prosemirror_utils_1.findCellRectClosestToPos(tr.selection.$from);
        if (!selectionRect) {
            return tr;
        }
        var tablePluginState = main_2.getPluginState(state);
        var tableArray = prosemirror_utils_1.convertTableNodeToArrayOfRows(table.node);
        var headerRow;
        if (tablePluginState.isHeaderRowEnabled) {
            headerRow = tableArray.shift();
        }
        var compareNodes = editor_common_1.createCompareNodes({
            getInlineCardTextFromStore: createGetInlineCardTextFromStore(state),
        });
        var sortedTable = tableArray.sort(function (rowA, rowB) {
            return (order === types_1.SortOrder.DESC ? -1 : 1) *
                compareNodes(rowA[columnIndex], rowB[columnIndex]);
        });
        if (headerRow) {
            sortedTable.unshift(headerRow);
        }
        var newTableNode = prosemirror_utils_1.convertArrayOfRowsToTableNode(table.node, sortedTable);
        tr.replaceWith(table.pos, table.pos + table.node.nodeSize, newTableNode);
        var pos = prosemirror_tables_1.TableMap.get(table.node).positionAt(selectionRect.top, columnIndex, table.node);
        var prev = tablePluginState.ordering;
        var next = {
            columnIndex: columnIndex,
            order: order,
        };
        tr.steps.push(new utils_1.TableSortStep(table.pos, prev, next));
        return tr.setSelection(prosemirror_state_1.Selection.near(tr.doc.resolve(table.start + pos)));
    });
};
//# sourceMappingURL=sort.js.map