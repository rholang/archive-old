import { __assign } from "tslib";
import { FILE_LIST_UPDATE, } from '../actions/fileListUpdate';
import { pathsEqual } from '../tools/pathsEqual';
export default function fileListUpdate(state, action) {
    if (action.type === FILE_LIST_UPDATE) {
        if (pathsEqual(action.path, state.view.path) &&
            action.accountId === state.view.service.accountId &&
            state.view.currentCursor === action.currentCursor) {
            return __assign(__assign({}, state), { view: __assign(__assign({}, state.view), { items: action.items, isLoading: false, currentCursor: action.currentCursor, nextCursor: action.nextCursor }) });
        }
    }
    return state;
}
//# sourceMappingURL=fileListUpdate.js.map