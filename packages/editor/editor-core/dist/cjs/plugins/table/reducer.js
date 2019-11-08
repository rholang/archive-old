"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var main_1 = require("./pm-plugins/main");
exports.default = (function (pluginState, action) {
    switch (action.type) {
        case 'TOGGLE_HEADER_COLUMN':
            return tslib_1.__assign(tslib_1.__assign({}, pluginState), { isHeaderColumnEnabled: !pluginState.isHeaderColumnEnabled });
        case 'TOGGLE_HEADER_ROW':
            return tslib_1.__assign(tslib_1.__assign({}, pluginState), { isHeaderRowEnabled: !pluginState.isHeaderRowEnabled });
        case 'CLEAR_HOVER_SELECTION':
            return tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, pluginState), action.data), main_1.defaultTableSelection);
        case 'SET_TARGET_CELL_POSITION':
            return tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, pluginState), action.data), { isContextualMenuOpen: false });
        case 'SET_TABLE_LAYOUT':
            return tslib_1.__assign(tslib_1.__assign({}, pluginState), action.data);
        case 'TOGGLE_CONTEXTUAL_MENU':
            return tslib_1.__assign(tslib_1.__assign({}, pluginState), { isContextualMenuOpen: !pluginState.isContextualMenuOpen });
        case 'SHOW_INSERT_ROW_BUTTON':
            if (action.data.insertRowButtonIndex === pluginState.insertRowButtonIndex) {
                return pluginState;
            }
            return tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, pluginState), action.data), { insertColumnButtonIndex: undefined });
        case 'SHOW_INSERT_COLUMN_BUTTON':
            if (action.data.insertColumnButtonIndex ===
                pluginState.insertColumnButtonIndex) {
                return pluginState;
            }
            return tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, pluginState), action.data), { insertRowButtonIndex: undefined });
        case 'HIDE_INSERT_COLUMN_OR_ROW_BUTTON':
            if (pluginState.insertRowButtonIndex !== undefined ||
                pluginState.insertColumnButtonIndex !== undefined) {
                return tslib_1.__assign(tslib_1.__assign({}, pluginState), { insertRowButtonIndex: undefined, insertColumnButtonIndex: undefined });
            }
            return pluginState;
        case 'SET_TABLE_REF':
        case 'HOVER_ROWS':
        case 'HOVER_COLUMNS':
        case 'HOVER_TABLE':
        case 'HOVER_CELLS':
        case 'SET_EDITOR_FOCUS':
            return tslib_1.__assign(tslib_1.__assign({}, pluginState), action.data);
        default:
            return pluginState;
    }
});
//# sourceMappingURL=reducer.js.map