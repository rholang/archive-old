import { __assign } from "tslib";
import { isStartAppAction } from '../actions/startApp';
export default function (state, action) {
    if (isStartAppAction(action)) {
        return __assign(__assign({}, state), { onCancelUpload: action.payload.onCancelUpload });
    }
    else {
        return state;
    }
}
//# sourceMappingURL=startApp.js.map