import { __assign } from "tslib";
import { isHidePopupAction } from '../actions/hidePopup';
export default function (state, action) {
    if (isHidePopupAction(action)) {
        return __assign(__assign({}, state), { view: __assign(__assign({}, state.view), { isVisible: false }) });
    }
    else {
        return state;
    }
}
//# sourceMappingURL=hidePopup.js.map