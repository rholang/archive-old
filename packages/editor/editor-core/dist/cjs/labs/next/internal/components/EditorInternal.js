"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var PropTypes = tslib_1.__importStar(require("prop-types"));
var editor_common_1 = require("@atlaskit/editor-common");
var EditorContext_1 = tslib_1.__importDefault(require("../../../../ui/EditorContext"));
var index_1 = require("../../../../index");
var shared_config_1 = require("../context/shared-config");
var use_editor_1 = require("../hooks/use-editor");
var EditorContent_1 = require("./EditorContent");
function EditorInternal(props, context) {
    var editorActions = (context || {}).editorActions || new index_1.EditorActions();
    var _a = tslib_1.__read(use_editor_1.useEditor({
        context: context,
        editorActions: editorActions,
        disabled: props.disabled,
        defaultValue: props.defaultValue,
        plugins: props.plugins,
        portalProviderAPI: props.portalProviderAPI,
        popupsMountPoint: props.popupsMountPoint,
        popupsBoundariesElement: props.popupsBoundariesElement,
        popupsScrollableElement: props.popupsScrollableElement,
        onChange: props.onChange,
    }), 2), editorSharedConfig = _a[0], mountEditor = _a[1];
    React.useEffect(function () {
        if (editorSharedConfig) {
            editorActions._privateRegisterEditor(editorSharedConfig.editorView, editorSharedConfig.eventDispatcher);
            return function () {
                editorActions._privateUnregisterEditor();
            };
        }
    }, [editorSharedConfig, editorActions]);
    return (React.createElement(editor_common_1.WidthProvider, null,
        React.createElement(EditorContext_1.default, { editorActions: editorActions },
            React.createElement(shared_config_1.EditorSharedConfigProvider, { value: editorSharedConfig },
                React.createElement(EditorContent_1.EditorContentProvider, { value: mountEditor }, props.children)))));
}
exports.EditorInternal = EditorInternal;
EditorInternal.contextTypes = {
    editorActions: PropTypes.object,
    intl: react_intl_1.intlShape,
};
//# sourceMappingURL=EditorInternal.js.map