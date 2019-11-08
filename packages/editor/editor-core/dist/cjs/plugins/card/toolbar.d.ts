import { InjectedIntl } from 'react-intl';
import { EditorState } from 'prosemirror-state';
import { Command } from '../../types';
import { FloatingToolbarConfig } from '../floating-toolbar/types';
import { ProviderFactory } from '@atlaskit/editor-common';
export declare const messages: {
    block: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    inline: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    link: {
        id: string;
        defaultMessage: string;
        description: string;
    };
};
export declare const removeCard: Command;
export declare const visitCardLink: Command;
export declare const floatingToolbar: (state: EditorState<any>, intl: InjectedIntl, providerFactory: ProviderFactory) => FloatingToolbarConfig | undefined;
