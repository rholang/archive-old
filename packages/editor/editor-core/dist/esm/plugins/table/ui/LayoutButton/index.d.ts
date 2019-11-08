import * as React from 'react';
import { InjectedIntlProps } from 'react-intl';
import { EditorView } from 'prosemirror-view';
import { TableLayout } from '@atlaskit/adf-schema';
export interface Props {
    editorView: EditorView;
    targetRef?: HTMLElement;
    mountPoint?: HTMLElement;
    boundariesElement?: HTMLElement;
    scrollableElement?: HTMLElement;
    isResizing?: boolean;
    layout?: TableLayout;
}
declare const _default: React.ComponentClass<Props, any> & {
    WrappedComponent: ReactIntl.ComponentConstructor<Props & InjectedIntlProps>;
};
export default _default;
