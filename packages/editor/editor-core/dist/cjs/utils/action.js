"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var main_1 = require("../plugins/media/pm-plugins/main");
function getEditorValueWithMedia(editorView) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var state, mediaPluginState;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!editorView) {
                        return [2 /*return*/];
                    }
                    state = editorView.state;
                    mediaPluginState = state && main_1.stateKey.getState(state);
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
exports.getEditorValueWithMedia = getEditorValueWithMedia;
/**
 * Iterates over the commands one after the other,
 * passes the tr through and dispatches the cumulated transaction
 */
function cascadeCommands(cmds) {
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
exports.cascadeCommands = cascadeCommands;
//# sourceMappingURL=action.js.map