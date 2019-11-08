"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
//#region Imports
var prosemirror_tables_1 = require("prosemirror-tables");
var prosemirror_utils_1 = require("prosemirror-utils");
var main_1 = require("../pm-plugins/main");
//#endregion
// #region Utils
/**
 * Table layout toggle logic
 * default -> wide -> full-width -> default
 */
exports.getNextLayout = function (currentLayout) {
    switch (currentLayout) {
        case 'default':
            return 'wide';
        case 'wide':
            return 'full-width';
        case 'full-width':
            return 'default';
        default:
            return 'default';
    }
};
// #endregion
// #region Actions
exports.toggleHeaderRow = function (state, dispatch) {
    return prosemirror_tables_1.toggleHeader('row')(state, function (tr) {
        return main_1.createCommand({ type: 'TOGGLE_HEADER_ROW' }, function () { return tr; })(state, dispatch);
    });
};
exports.toggleHeaderColumn = function (state, dispatch) {
    return prosemirror_tables_1.toggleHeader('column')(state, function (tr) {
        return main_1.createCommand({ type: 'TOGGLE_HEADER_COLUMN' }, function () { return tr; })(state, dispatch);
    });
};
exports.toggleNumberColumn = function (state, dispatch) {
    var tr = state.tr;
    var _a = prosemirror_utils_1.findTable(state.selection), node = _a.node, pos = _a.pos;
    tr.setNodeMarkup(pos, state.schema.nodes.table, tslib_1.__assign(tslib_1.__assign({}, node.attrs), { isNumberColumnEnabled: !node.attrs.isNumberColumnEnabled }));
    if (dispatch) {
        dispatch(tr);
    }
    return true;
};
exports.toggleTableLayout = function (state, dispatch) {
    var table = prosemirror_utils_1.findTable(state.selection);
    if (!table) {
        return false;
    }
    var layout = exports.getNextLayout(table.node.attrs.layout);
    return main_1.createCommand({
        type: 'SET_TABLE_LAYOUT',
        data: {
            layout: layout,
        },
    }, function (tr) {
        return tr.setNodeMarkup(table.pos, state.schema.nodes.table, tslib_1.__assign(tslib_1.__assign({}, table.node.attrs), { layout: layout }));
    })(state, dispatch);
};
exports.toggleContextualMenu = function () {
    return main_1.createCommand({
        type: 'TOGGLE_CONTEXTUAL_MENU',
    }, function (tr) { return tr.setMeta('addToHistory', false); });
};
// #endregion
//# sourceMappingURL=toggle.js.map