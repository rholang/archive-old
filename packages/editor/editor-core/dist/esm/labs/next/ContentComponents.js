import * as React from 'react';
import { EditorSharedConfigConsumer } from './Editor';
import PluginSlot from '../../ui/PluginSlot';
export function ContentComponents() {
    return (React.createElement(EditorSharedConfigConsumer, null, function (config) {
        return !config ? null : (React.createElement(PluginSlot, { editorView: config.editorView, eventDispatcher: config.eventDispatcher, providerFactory: config.providerFactory, items: config.contentComponents, popupsMountPoint: config.popupsMountPoint, popupsBoundariesElement: config.popupsBoundariesElement, popupsScrollableElement: config.popupsScrollableElement, disabled: config.disabled || false, containerElement: undefined }));
    }));
}
//# sourceMappingURL=ContentComponents.js.map