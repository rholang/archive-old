"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_state_1 = require("prosemirror-state");
var plugin_state_factory_1 = require("../../../utils/plugin-state-factory");
var media_editor_1 = require("../commands/media-editor");
var media_common_1 = require("../utils/media-common");
exports.pluginKey = new prosemirror_state_1.PluginKey('mediaEditorPlugin');
exports.reducer = function (state, action) {
    switch (action.type) {
        case 'open':
            return tslib_1.__assign(tslib_1.__assign({}, state), { editor: {
                    identifier: action.identifier,
                    pos: action.pos,
                } });
        case 'close':
            return tslib_1.__assign(tslib_1.__assign({}, state), { editor: undefined });
        case 'upload':
            return tslib_1.__assign(tslib_1.__assign({}, state), { editor: undefined });
        case 'setMediaClientConfig':
            return tslib_1.__assign(tslib_1.__assign({}, state), { mediaClientConfig: action.mediaClientConfig });
        default:
            return state;
    }
};
// handle mapping changes to providers -> plugin state
var pluginView = function (providerFactory) { return function (view) {
    var updateMediaProvider = function (name, provider) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var resolvedProvider, resolvedMediaClientConfig, _a, dispatch, state;
        return tslib_1.__generator(this, function (_b) {
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
                    return [4 /*yield*/, media_common_1.getUploadMediaClientConfigFromMediaProvider(resolvedProvider)];
                case 2:
                    _a = (_b.sent());
                    if (_a) return [3 /*break*/, 4];
                    return [4 /*yield*/, media_common_1.getViewMediaClientConfigFromMediaProvider(resolvedProvider)];
                case 3:
                    _a = (_b.sent());
                    _b.label = 4;
                case 4:
                    resolvedMediaClientConfig = _a;
                    dispatch = view.dispatch, state = view.state;
                    media_editor_1.setMediaClientConfig(resolvedMediaClientConfig)(state, dispatch, view);
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
var _a = plugin_state_factory_1.pluginFactory(exports.pluginKey, exports.reducer, {
    mapping: function (tr, state) {
        if (!state.editor) {
            return state;
        }
        // remap the position of the editing media inside the state
        return tslib_1.__assign(tslib_1.__assign({}, state), { editor: tslib_1.__assign(tslib_1.__assign({}, state.editor), { pos: tr.mapping.map(state.editor.pos) }) });
    },
}), createPluginState = _a.createPluginState, createCommand = _a.createCommand, getPluginState = _a.getPluginState;
exports.createCommand = createCommand;
exports.getPluginState = getPluginState;
exports.createPlugin = function (_a) {
    var dispatch = _a.dispatch, providerFactory = _a.providerFactory;
    return new prosemirror_state_1.Plugin({
        state: createPluginState(dispatch, {}),
        key: exports.pluginKey,
        view: pluginView(providerFactory),
    });
};
//# sourceMappingURL=media-editor.js.map