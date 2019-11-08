import { __assign } from "tslib";
import { isChangeCloudAccountFolderAction } from '../actions/changeCloudAccountFolder';
export default function pathChangeRequest(state, action) {
    if (isChangeCloudAccountFolderAction(action)) {
        var view = __assign(__assign({}, state.view), {
            isLoading: true,
            path: action.path,
            currentCursor: undefined,
            nextCursor: undefined,
        });
        return __assign(__assign({}, state), { view: view });
    }
    else {
        return state;
    }
}
//# sourceMappingURL=pathChangeRequest.js.map