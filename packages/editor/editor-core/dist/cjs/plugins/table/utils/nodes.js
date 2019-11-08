"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_tables_1 = require("prosemirror-tables");
var prosemirror_utils_1 = require("prosemirror-utils");
var main_1 = require("../pm-plugins/main");
exports.isIsolating = function (node) {
    return !!node.type.spec.isolating;
};
exports.containsHeaderColumn = function (state, table) {
    var map = prosemirror_tables_1.TableMap.get(table);
    // Get cell positions for first column.
    var cellPositions = map.cellsInRect({
        left: 0,
        top: 0,
        right: 1,
        bottom: map.height,
    });
    for (var i = 0; i < cellPositions.length; i++) {
        try {
            var cell = table.nodeAt(cellPositions[i]);
            if (cell && cell.type !== state.schema.nodes.tableHeader) {
                return false;
            }
        }
        catch (e) {
            return false;
        }
    }
    return true;
};
exports.containsHeaderRow = function (state, table) {
    var map = prosemirror_tables_1.TableMap.get(table);
    for (var i = 0; i < map.width; i++) {
        var cell = table.nodeAt(map.map[i]);
        if (cell && cell.type !== state.schema.nodes.tableHeader) {
            return false;
        }
    }
    return true;
};
exports.checkIfHeaderColumnEnabled = function (state) {
    return filterNearSelection(state, prosemirror_utils_1.findTable, exports.containsHeaderColumn, false);
};
exports.checkIfHeaderRowEnabled = function (state) {
    return filterNearSelection(state, prosemirror_utils_1.findTable, exports.containsHeaderRow, false);
};
exports.checkIfNumberColumnEnabled = function (state) {
    return filterNearSelection(state, prosemirror_utils_1.findTable, function (_, table) { return !!table.attrs.isNumberColumnEnabled; }, false);
};
exports.isLayoutSupported = function (state) {
    var permittedLayouts = main_1.pluginKey.getState(state).pluginConfig.permittedLayouts;
    var _a = state.schema.nodes, bodiedExtension = _a.bodiedExtension, layoutSection = _a.layoutSection;
    return (!prosemirror_utils_1.hasParentNodeOfType([layoutSection, bodiedExtension])(state.selection) &&
        permittedLayouts &&
        (permittedLayouts === 'all' ||
            (permittedLayouts.indexOf('default') > -1 &&
                permittedLayouts.indexOf('wide') > -1 &&
                permittedLayouts.indexOf('full-page') > -1)));
};
exports.getTableWidth = function (node) {
    return getTableWidths(node).reduce(function (acc, current) { return acc + current; }, 0);
};
exports.tablesHaveDifferentColumnWidths = function (currentTable, previousTable) {
    var currentTableWidths = getTableWidths(currentTable);
    var previousTableWidths = getTableWidths(previousTable);
    var sameWidths = currentTableWidths.every(function (value, index) {
        return value === previousTableWidths[index];
    });
    return sameWidths === false;
};
exports.tablesHaveDifferentNoOfColumns = function (currentTable, previousTable) {
    var prevMap = prosemirror_tables_1.TableMap.get(previousTable);
    var currentMap = prosemirror_tables_1.TableMap.get(currentTable);
    return prevMap.width !== currentMap.width;
};
function filterNearSelection(state, findNode, predicate, defaultValue) {
    var found = findNode(state.selection);
    if (!found) {
        return defaultValue;
    }
    return predicate(state, found.node, found.pos);
}
function getTableWidths(node) {
    if (!node.content.firstChild) {
        return [];
    }
    var tableWidths = [];
    node.content.firstChild.content.forEach(function (cell) {
        if (Array.isArray(cell.attrs.colwidth)) {
            var colspan = cell.attrs.colspan || 1;
            tableWidths.push.apply(tableWidths, tslib_1.__spread(cell.attrs.colwidth.slice(0, colspan)));
        }
    });
    return tableWidths;
}
//# sourceMappingURL=nodes.js.map