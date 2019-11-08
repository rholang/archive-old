import { __assign } from "tslib";
import { isEditorShowErrorAction } from '../actions/editorShowError';
export default function editorShowError(state, action) {
    if (isEditorShowErrorAction(action)) {
        var editorData = state.editorData;
        var error = action.error;
        return __assign(__assign({}, state), { editorData: __assign(__assign({}, editorData), { error: error }) });
    }
    return state;
}
//# sourceMappingURL=editorShowError.js.map