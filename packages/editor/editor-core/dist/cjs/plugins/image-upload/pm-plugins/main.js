"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_state_1 = require("prosemirror-state");
var clipboard_1 = require("../../../utils/clipboard");
var drag_drop_1 = require("../../../utils/drag-drop");
var analytics_1 = require("../../../analytics");
var utils_1 = require("../utils");
var commands_1 = require("./commands");
var createDOMHandler = function (pred, eventName) { return function (view, event) {
    if (!pred(event)) {
        return false;
    }
    event.preventDefault();
    event.stopPropagation();
    if (commands_1.startImageUpload(event)(view.state, view.dispatch)) {
        analytics_1.analyticsService.trackEvent(eventName);
    }
    return true;
}; };
exports.stateKey = new prosemirror_state_1.PluginKey('imageUploadPlugin');
var getNewActiveUpload = function (tr, pluginState) {
    var meta = tr.getMeta(exports.stateKey);
    if (meta && meta.name === 'START_UPLOAD') {
        return {
            event: meta.event,
        };
    }
    return pluginState.activeUpload;
};
exports.createPlugin = function (_a) {
    var dispatch = _a.dispatch, providerFactory = _a.providerFactory;
    var uploadHandler;
    return new prosemirror_state_1.Plugin({
        state: {
            init: function (_config, state) {
                return {
                    active: false,
                    enabled: utils_1.canInsertMedia(state),
                    hidden: !state.schema.nodes.media || !state.schema.nodes.mediaSingle,
                };
            },
            apply: function (tr, pluginState, _oldState, newState) {
                var newActive = utils_1.isMediaSelected(newState);
                var newEnabled = utils_1.canInsertMedia(newState);
                var newActiveUpload = getNewActiveUpload(tr, pluginState);
                if (newActive !== pluginState.active ||
                    newEnabled !== pluginState.enabled ||
                    newActiveUpload !== pluginState.activeUpload) {
                    var newPluginState = tslib_1.__assign(tslib_1.__assign({}, pluginState), { active: newActive, enabled: newEnabled, activeUpload: newActiveUpload });
                    dispatch(exports.stateKey, newPluginState);
                    return newPluginState;
                }
                return pluginState;
            },
        },
        key: exports.stateKey,
        view: function () {
            var handleProvider = function (name, provider) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
                var e_1;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (name !== 'imageUploadProvider' || !provider) {
                                return [2 /*return*/];
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, provider];
                        case 2:
                            uploadHandler = _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            e_1 = _a.sent();
                            uploadHandler = undefined;
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); };
            providerFactory.subscribe('imageUploadProvider', handleProvider);
            return {
                update: function (view, prevState) {
                    var editorState = view.state;
                    var currentState = exports.stateKey.getState(editorState);
                    // if we've add a new upload to the state, execute the uploadHandler
                    var oldState = exports.stateKey.getState(prevState);
                    if (currentState.activeUpload !== oldState.activeUpload &&
                        currentState.activeUpload &&
                        uploadHandler) {
                        uploadHandler(currentState.activeUpload.event, function (options) {
                            return commands_1.insertExternalImage(options)(view.state, view.dispatch);
                        });
                    }
                },
                destroy: function () {
                    providerFactory.unsubscribe('imageUploadProvider', handleProvider);
                },
            };
        },
        props: {
            handleDOMEvents: {
                drop: createDOMHandler(drag_drop_1.isDroppedFile, 'atlassian.editor.image.drop'),
                paste: createDOMHandler(clipboard_1.isPastedFile, 'atlassian.editor.image.paste'),
            },
        },
    });
};
//# sourceMappingURL=main.js.map