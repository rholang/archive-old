import { EditorView } from 'prosemirror-view';
import { EditorState } from 'prosemirror-state';
import { ProviderFactory } from '@atlaskit/editor-common';
import { EventDispatcher, createDispatch, } from '../../../../../event-dispatcher';
import { processPluginsList, createPMPlugins, createSchema, } from '../../../../../create-editor/create-editor';
import { processRawValue } from '../../../../../utils';
export function createEditor(_a) {
    var context = _a.context, plugins = _a.plugins, portalProviderAPI = _a.portalProviderAPI, defaultValue = _a.defaultValue, ref = _a.ref, popupsMountPoint = _a.popupsMountPoint, popupsBoundariesElement = _a.popupsBoundariesElement, popupsScrollableElement = _a.popupsScrollableElement, disabled = _a.disabled, onChange = _a.onChange;
    if (!ref) {
        return null;
    }
    var eventDispatcher = new EventDispatcher();
    var providerFactory = new ProviderFactory();
    var dispatch = createDispatch(eventDispatcher);
    var editorConfig = processPluginsList(plugins || [], {});
    var schema = createSchema(editorConfig);
    var pmPlugins = createPMPlugins({
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
    var state = EditorState.create({
        schema: schema,
        plugins: pmPlugins,
        doc: processRawValue(schema, defaultValue),
    });
    var editorView = new EditorView({ mount: ref }, {
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
//# sourceMappingURL=create-editor.js.map