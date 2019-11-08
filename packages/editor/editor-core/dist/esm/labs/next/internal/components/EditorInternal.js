import { __read } from "tslib";
import * as React from 'react';
import { intlShape } from 'react-intl';
import * as PropTypes from 'prop-types';
import { WidthProvider } from '@atlaskit/editor-common';
import EditorContext from '../../../../ui/EditorContext';
import { EditorActions } from '../../../../index';
import { EditorSharedConfigProvider } from '../context/shared-config';
import { useEditor } from '../hooks/use-editor';
import { EditorContentProvider } from './EditorContent';
export function EditorInternal(props, context) {
    var editorActions = (context || {}).editorActions || new EditorActions();
    var _a = __read(useEditor({
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
    return (React.createElement(WidthProvider, null,
        React.createElement(EditorContext, { editorActions: editorActions },
            React.createElement(EditorSharedConfigProvider, { value: editorSharedConfig },
                React.createElement(EditorContentProvider, { value: mountEditor }, props.children)))));
}
EditorInternal.contextTypes = {
    editorActions: PropTypes.object,
    intl: intlShape,
};
//# sourceMappingURL=EditorInternal.js.map