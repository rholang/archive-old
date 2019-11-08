import { __assign } from "tslib";
import { isEditorCloseAction } from '../actions';
export default function editorClose(state, action) {
    if (isEditorCloseAction(action)) {
        return __assign(__assign({}, state), { editorData: undefined });
    }
    return state;
}
//# sourceMappingURL=editorClose.js.map