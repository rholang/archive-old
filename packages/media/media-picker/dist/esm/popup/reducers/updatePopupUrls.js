import { __assign } from "tslib";
import { isUpdatePopupUrlsAction } from '../actions/updatePopupUrls';
export default function updatePopupUrls(state, action) {
    if (isUpdatePopupUrlsAction(action)) {
        var urls = action.urls;
        return __assign(__assign({}, state), urls);
    }
    return state;
}
//# sourceMappingURL=updatePopupUrls.js.map