import { __assign, __awaiter, __generator } from "tslib";
import { Plugin, PluginKey } from 'prosemirror-state';
import { pluginFactory } from '../../../utils/plugin-state-factory';
import { setMediaClientConfig } from '../commands/media-editor';
import { getUploadMediaClientConfigFromMediaProvider, getViewMediaClientConfigFromMediaProvider, } from '../utils/media-common';
export var pluginKey = new PluginKey('mediaEditorPlugin');
export var reducer = function (state, action) {
    switch (action.type) {
        case 'open':
            return __assign(__assign({}, state), { editor: {
                    identifier: action.identifier,
                    pos: action.pos,
                } });
        case 'close':
            return __assign(__assign({}, state), { editor: undefined });
        case 'upload':
            return __assign(__assign({}, state), { editor: undefined });
        case 'setMediaClientConfig':
            return __assign(__assign({}, state), { mediaClientConfig: action.mediaClientConfig });
        default:
            return state;
    }
};
// handle mapping changes to providers -> plugin state
var pluginView = function (providerFactory) { return function (view) {
    var updateMediaProvider = function (name, provider) { return __awaiter(void 0, void 0, void 0, function () {
        var resolvedProvider, resolvedMediaClientConfig, _a, dispatch, state;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (name !== 'mediaProvider') {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, provider];
                case 1:
                    resolvedProvider = _b.sent();
                    if (!resolvedProvider) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, getUploadMediaClientConfigFromMediaProvider(resolvedProvider)];
                case 2:
                    _a = (_b.sent());
                    if (_a) return [3 /*break*/, 4];
                    return [4 /*yield*/, getViewMediaClientConfigFromMediaProvider(resolvedProvider)];
                case 3:
                    _a = (_b.sent());
                    _b.label = 4;
                case 4:
                    resolvedMediaClientConfig = _a;
                    dispatch = view.dispatch, state = view.state;
                    setMediaClientConfig(resolvedMediaClientConfig)(state, dispatch, view);
                    return [2 /*return*/];
            }
        });
    }); };
    providerFactory.subscribe('mediaProvider', updateMediaProvider);
    return {
        destroy: function () {
            providerFactory.unsubscribe('mediaProvider', updateMediaProvider);
        },
    };
}; };
var _a = pluginFactory(pluginKey, reducer, {
    mapping: function (tr, state) {
        if (!state.editor) {
            return state;
        }
        // remap the position of the editing media inside the state
        return __assign(__assign({}, state), { editor: __assign(__assign({}, state.editor), { pos: tr.mapping.map(state.editor.pos) }) });
    },
}), createPluginState = _a.createPluginState, createCommand = _a.createCommand, getPluginState = _a.getPluginState;
export var createPlugin = function (_a) {
    var dispatch = _a.dispatch, providerFactory = _a.providerFactory;
    return new Plugin({
        state: createPluginState(dispatch, {}),
        key: pluginKey,
        view: pluginView(providerFactory),
    });
};
export { createCommand, getPluginState };
//# sourceMappingURL=media-editor.js.map