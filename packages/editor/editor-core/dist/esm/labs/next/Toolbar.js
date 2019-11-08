import * as React from 'react';
import { EditorSharedConfigConsumer } from './Editor';
import ToolBar from '../../ui/Toolbar';
export function Toolbar() {
    return (React.createElement(EditorSharedConfigConsumer, null, function (config) {
        return !config ? null : (React.createElement(ToolBar, { editorView: config.editorView, eventDispatcher: config.eventDispatcher, providerFactory: config.providerFactory, items: config.primaryToolbarComponents, popupsMountPoint: config.popupsMountPoint, popupsBoundariesElement: config.popupsBoundariesElement, popupsScrollableElement: config.popupsScrollableElement, disabled: config.disabled || false }));
    }));
}
//# sourceMappingURL=Toolbar.js.map