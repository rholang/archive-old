"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_view_1 = require("prosemirror-view");
var prosemirror_state_1 = require("prosemirror-state");
var editor_common_1 = require("@atlaskit/editor-common");
var event_dispatcher_1 = require("../../../../../event-dispatcher");
var create_editor_1 = require("../../../../../create-editor/create-editor");
var utils_1 = require("../../../../../utils");
function createEditor(_a) {
    var context = _a.context, plugins = _a.plugins, portalProviderAPI = _a.portalProviderAPI, defaultValue = _a.defaultValue, ref = _a.ref, popupsMountPoint = _a.popupsMountPoint, popupsBoundariesElement = _a.popupsBoundariesElement, popupsScrollableElement = _a.popupsScrollableElement, disabled = _a.disabled, onChange = _a.onChange;
    if (!ref) {
        return null;
    }
    var eventDispatcher = new event_dispatcher_1.EventDispatcher();
    var providerFactory = new editor_common_1.ProviderFactory();
    var dispatch = event_dispatcher_1.createDispatch(eventDispatcher);
    var editorConfig = create_editor_1.processPluginsList(plugins || [], {});
    var schema = create_editor_1.createSchema(editorConfig);
    var pmPlugins = create_editor_1.createPMPlugins({
        editorConfig: editorConfig,
        schema: schema,
        dispatch: dispatch,
        eventDispatcher: eventDispatcher,
        props: {},
        portalProviderAPI: portalProviderAPI,
        providerFactory: providerFactory,
        reactContext: function () { return context; },
        dispatchAnalyticsEvent: function () { },
    });
    var state = prosemirror_state_1.EditorState.create({
        schema: schema,
        plugins: pmPlugins,
        doc: utils_1.processRawValue(schema, defaultValue),
    });
    var editorView = new prosemirror_view_1.EditorView({ mount: ref }, {
        state: state,
        attributes: { 'data-gramm': 'false' },
        // Ignore all transactions by default
        dispatchTransaction: function () { },
        // Disables the contentEditable attribute of the editor if the editor is disabled
        editable: function (_state) { return !!disabled; },
    });
    return {
        editorView: editorView,
        eventDispatcher: eventDispatcher,
        dispatch: dispatch,
        primaryToolbarComponents: editorConfig.primaryToolbarComponents,
        contentComponents: editorConfig.contentComponents,
        popupsMountPoint: popupsMountPoint,
        popupsBoundariesElement: popupsBoundariesElement,
        popupsScrollableElement: popupsScrollableElement,
        disabled: disabled,
        providerFactory: providerFactory,
        onChange: onChange,
    };
}
exports.createEditor = createEditor;
//# sourceMappingURL=create-editor.js.map