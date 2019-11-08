import * as React from 'react';
import { InjectedIntlProps } from 'react-intl';
import { EditorView } from 'prosemirror-view';
import { EventDispatcher } from '../../../event-dispatcher';
import { CollabInviteToEditProps } from '../types';
export declare type Props = {
    editorView?: EditorView;
    eventDispatcher?: EventDispatcher;
} & CollabInviteToEditProps;
declare const _default: React.ComponentClass<Props, any> & {
    WrappedComponent: ReactIntl.ComponentConstructor<{
        editorView?: EditorView<any> | undefined;
        eventDispatcher?: EventDispatcher<any> | undefined;
    } & CollabInviteToEditProps & InjectedIntlProps>;
};
export default _default;
