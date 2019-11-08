"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var create_dispatch_transaction_1 = require("./create-dispatch-transaction");
var create_editor_1 = require("./create-editor");
function useEditor(config) {
    var _a = tslib_1.__read(useCreateEditor(config), 2), editorSharedConfig = _a[0], mountEditor = _a[1];
    var editorSharedConfigRef = React.useRef(null);
    editorSharedConfigRef.current = editorSharedConfig;
    useApplyEditorViewProps(editorSharedConfig, config.disabled);
    useHandleEditorUnmount(editorSharedConfigRef);
    return [editorSharedConfig, mountEditor];
}
exports.useEditor = useEditor;
/**
 *
 * Sub hooks ¯\_(ツ)_/¯
 *
 */
function useCreateEditor(config) {
    var _a = tslib_1.__read(React.useState(null), 2), editorSharedConfig = _a[0], setEditorSharedConfig = _a[1];
    return [
        editorSharedConfig,
        React.useCallback(function (ref) {
            setEditorSharedConfig(function (editorSharedConfig) {
                return editorSharedConfig || create_editor_1.createEditor(tslib_1.__assign(tslib_1.__assign({}, config), { ref: ref }));
            });
        }, [config]),
    ];
}
/**
 * Applies updated EditorView properties e.g. set dispatchTransaction or 'disabled' state changes
 */
function useApplyEditorViewProps(editorSharedConfig, disabled) {
    React.useEffect(function () {
        if (editorSharedConfig) {
            editorSharedConfig.editorView.setProps({
                dispatchTransaction: create_dispatch_transaction_1.createDispatchTransaction(editorSharedConfig),
            });
            editorSharedConfig.editorView.setProps({
                editable: function (_state) { return !disabled; },
            });
        }
    }, [editorSharedConfig, disabled]);
}
/**
 * Handles editor component unmount
 */
function useHandleEditorUnmount(editorSharedConfigRef) {
    React.useEffect(function () {
        // Need to keep this reference in order to make "react-hooks/exhaustive-deps" eslint rule happy
        var editorSharedConfig = editorSharedConfigRef;
        // Will unmount
        return function () {
            if (!editorSharedConfig.current) {
                return;
            }
            var _a = editorSharedConfig.current, eventDispatcher = _a.eventDispatcher, editorView = _a.editorView;
            if (eventDispatcher) {
                eventDispatcher.destroy();
            }
            if (editorView) {
                // Prevent any transactions from coming through when unmounting
                editorView.setProps({
                    dispatchTransaction: function (_tr) { },
                });
                // Destroy the state if the Editor is being unmounted
                var editorState_1 = editorView.state;
                editorState_1.plugins.forEach(function (plugin) {
                    var state = plugin.getState(editorState_1);
                    if (state && state.destroy) {
                        state.destroy();
                    }
                });
                editorView.destroy();
            }
        };
    }, [editorSharedConfigRef]);
}
//# sourceMappingURL=index.js.map