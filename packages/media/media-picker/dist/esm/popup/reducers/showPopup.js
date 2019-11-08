import { __assign } from "tslib";
import { isShowPopupAction } from '../actions/showPopup';
export default function (state, action) {
    if (isShowPopupAction(action)) {
        return __assign(__assign({}, state), { view: __assign(__assign({}, state.view), { isVisible: true }) });
    }
    else {
        return state;
    }
}
//# sourceMappingURL=showPopup.js.map