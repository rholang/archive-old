import * as React from 'react';
import { EditorView } from 'prosemirror-view';
import { TableLayout } from '@atlaskit/adf-schema';
import { InjectedIntlProps } from 'react-intl';
export interface Props {
    editorView: EditorView;
    targetCellPosition: number;
    isContextualMenuOpen?: boolean;
    mountPoint?: HTMLElement;
    boundariesElement?: HTMLElement;
    scrollableElement?: HTMLElement;
    layout?: TableLayout;
}
declare const _default: React.ComponentClass<Props, any> & {
    WrappedComponent: ReactIntl.ComponentConstructor<Props & InjectedIntlProps>;
};
export default _default;
