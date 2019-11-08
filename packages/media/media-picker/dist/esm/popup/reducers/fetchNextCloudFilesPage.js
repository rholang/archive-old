import { __assign } from "tslib";
import { isFetchNextCloudFilesPageAction } from '../actions/fetchNextCloudFilesPage';
export default function fetchNextPage(state, action) {
    if (isFetchNextCloudFilesPageAction(action)) {
        return __assign(__assign({}, state), { view: __assign(__assign({}, state.view), { isLoading: true, currentCursor: action.nextCursor, nextCursor: undefined }) });
    }
    else {
        return state;
    }
}
//# sourceMappingURL=fetchNextCloudFilesPage.js.map