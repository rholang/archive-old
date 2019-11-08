import { InjectedIntl } from 'react-intl';
import { EditorState } from 'prosemirror-state';
import { FloatingToolbarConfig } from '../../../../src/plugins/floating-toolbar/types';
import { ProviderFactory } from '@atlaskit/editor-common';
export declare type MediaFloatingToolbarOptions = {
    providerFactory?: ProviderFactory;
    allowResizing?: boolean;
    allowAnnotation?: boolean;
    allowLinking?: boolean;
    allowAdvancedToolBarOptions?: boolean;
    allowResizingInTables?: boolean;
};
export declare const floatingToolbar: (state: EditorState<any>, intl: InjectedIntl, options?: MediaFloatingToolbarOptions) => FloatingToolbarConfig | undefined;
