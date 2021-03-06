import { __awaiter, __generator } from "tslib";
import { stateKey as mediaStateKey, } from '../plugins/media/pm-plugins/main';
export function getEditorValueWithMedia(editorView) {
    return __awaiter(this, void 0, void 0, function () {
        var state, mediaPluginState;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!editorView) {
                        return [2 /*return*/];
                    }
                    state = editorView.state;
                    mediaPluginState = state && mediaStateKey.getState(state);
                    if (!(mediaPluginState && mediaPluginState.waitForMediaUpload)) return [3 /*break*/, 2];
                    return [4 /*yield*/, mediaPluginState.waitForPendingTasks()];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/, editorView.state.doc];
            }
        });
    });
}
/**
 * Iterates over the commands one after the other,
 * passes the tr through and dispatches the cumulated transaction
 */
export function cascadeCommands(cmds) {
    return function (state, dispatch) {
        var baseTr = state.tr;
        var shouldDispatch = false;
        var onDispatchAction = function (tr) {
            baseTr.setSelection(tr.selection);
            tr.steps.forEach(function (st) {
                baseTr.step(st);
            });
            shouldDispatch = true;
        };
        cmds.forEach(function (cmd) { return cmd(state, onDispatchAction); });
        if (dispatch && shouldDispatch) {
            dispatch(baseTr);
            return true;
        }
        return false;
    };
}
//# sourceMappingURL=action.js.map