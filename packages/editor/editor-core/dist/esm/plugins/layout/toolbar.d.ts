import { InjectedIntl } from 'react-intl';
import { EditorState } from 'prosemirror-state';
import { FloatingToolbarConfig } from '../../../src/plugins/floating-toolbar/types';
export declare const messages: {
    twoColumns: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    threeColumns: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    rightSidebar: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    leftSidebar: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    threeColumnsWithSidebars: {
        id: string;
        defaultMessage: string;
        description: string;
    };
};
export declare const buildToolbar: (state: EditorState<any>, intl: InjectedIntl, pos: number, _allowBreakout: boolean, addSidebarLayouts: boolean) => FloatingToolbarConfig | undefined;
