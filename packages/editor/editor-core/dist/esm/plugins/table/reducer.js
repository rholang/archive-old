import { __assign } from "tslib";
import { defaultTableSelection } from './pm-plugins/main';
export default (function (pluginState, action) {
    switch (action.type) {
        case 'TOGGLE_HEADER_COLUMN':
            return __assign(__assign({}, pluginState), { isHeaderColumnEnabled: !pluginState.isHeaderColumnEnabled });
        case 'TOGGLE_HEADER_ROW':
            return __assign(__assign({}, pluginState), { isHeaderRowEnabled: !pluginState.isHeaderRowEnabled });
        case 'CLEAR_HOVER_SELECTION':
            return __assign(__assign(__assign({}, pluginState), action.data), defaultTableSelection);
        case 'SET_TARGET_CELL_POSITION':
            return __assign(__assign(__assign({}, pluginState), action.data), { isContextualMenuOpen: false });
        case 'SET_TABLE_LAYOUT':
            return __assign(__assign({}, pluginState), action.data);
        case 'TOGGLE_CONTEXTUAL_MENU':
            return __assign(__assign({}, pluginState), { isContextualMenuOpen: !pluginState.isContextualMenuOpen });
        case 'SHOW_INSERT_ROW_BUTTON':
            if (action.data.insertRowButtonIndex === pluginState.insertRowButtonIndex) {
                return pluginState;
            }
            return __assign(__assign(__assign({}, pluginState), action.data), { insertColumnButtonIndex: undefined });
        case 'SHOW_INSERT_COLUMN_BUTTON':
            if (action.data.insertColumnButtonIndex ===
                pluginState.insertColumnButtonIndex) {
                return pluginState;
            }
            return __assign(__assign(__assign({}, pluginState), action.data), { insertRowButtonIndex: undefined });
        case 'HIDE_INSERT_COLUMN_OR_ROW_BUTTON':
            if (pluginState.insertRowButtonIndex !== undefined ||
                pluginState.insertColumnButtonIndex !== undefined) {
                return __assign(__assign({}, pluginState), { insertRowButtonIndex: undefined, insertColumnButtonIndex: undefined });
            }
            return pluginState;
        case 'SET_TABLE_REF':
        case 'HOVER_ROWS':
        case 'HOVER_COLUMNS':
        case 'HOVER_TABLE':
        case 'HOVER_CELLS':
        case 'SET_EDITOR_FOCUS':
            return __assign(__assign({}, pluginState), action.data);
        default:
            return pluginState;
    }
});
//# sourceMappingURL=reducer.js.map