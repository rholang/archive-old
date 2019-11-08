import { __assign } from "tslib";
import { EDITOR_SHOW_LOADING } from '../actions/editorShowLoading';
export default function editorShowLoading(state, action) {
    if (action.type === EDITOR_SHOW_LOADING) {
        return __assign(__assign({}, state), { editorData: { originalFile: action.originalFile } });
    }
    return state;
}
//# sourceMappingURL=editorShowLoading.js.map