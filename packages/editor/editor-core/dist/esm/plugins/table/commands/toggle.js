import { __assign } from "tslib";
//#region Imports
import { toggleHeader } from 'prosemirror-tables';
import { findTable } from 'prosemirror-utils';
import { createCommand } from '../pm-plugins/main';
//#endregion
// #region Utils
/**
 * Table layout toggle logic
 * default -> wide -> full-width -> default
 */
export var getNextLayout = function (currentLayout) {
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
export var toggleHeaderRow = function (state, dispatch) {
    return toggleHeader('row')(state, function (tr) {
        return createCommand({ type: 'TOGGLE_HEADER_ROW' }, function () { return tr; })(state, dispatch);
    });
};
export var toggleHeaderColumn = function (state, dispatch) {
    return toggleHeader('column')(state, function (tr) {
        return createCommand({ type: 'TOGGLE_HEADER_COLUMN' }, function () { return tr; })(state, dispatch);
    });
};
export var toggleNumberColumn = function (state, dispatch) {
    var tr = state.tr;
    var _a = findTable(state.selection), node = _a.node, pos = _a.pos;
    tr.setNodeMarkup(pos, state.schema.nodes.table, __assign(__assign({}, node.attrs), { isNumberColumnEnabled: !node.attrs.isNumberColumnEnabled }));
    if (dispatch) {
        dispatch(tr);
    }
    return true;
};
export var toggleTableLayout = function (state, dispatch) {
    var table = findTable(state.selection);
    if (!table) {
        return false;
    }
    var layout = getNextLayout(table.node.attrs.layout);
    return createCommand({
        type: 'SET_TABLE_LAYOUT',
        data: {
            layout: layout,
        },
    }, function (tr) {
        return tr.setNodeMarkup(table.pos, state.schema.nodes.table, __assign(__assign({}, table.node.attrs), { layout: layout }));
    })(state, dispatch);
};
export var toggleContextualMenu = function () {
    return createCommand({
        type: 'TOGGLE_CONTEXTUAL_MENU',
    }, function (tr) { return tr.setMeta('addToHistory', false); });
};
// #endregion
//# sourceMappingURL=toggle.js.map