import { __assign } from "tslib";
import { isEditorCloseAction } from '../../actions/editorClose';
import { buttonClickPayload } from '.';
export default (function (action) {
    if (isEditorCloseAction(action)) {
        return [
            __assign(__assign({}, buttonClickPayload), { actionSubjectId: "mediaEditor" + action.selection + "Button" }),
        ];
    }
});
//# sourceMappingURL=editorCloseHandler.js.map