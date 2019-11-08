import { EditorState } from 'prosemirror-state';
import { InjectedIntl } from 'react-intl';
import { FloatingToolbarItem } from '../../floating-toolbar/types';
import { Command } from '../../../types';
export declare const messages: {
    wrapLeft: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    wrapRight: {
        id: string;
        defaultMessage: string;
        description: string;
    };
};
declare const buildLayoutButtons: (state: EditorState<any>, intl: InjectedIntl, allowResizing?: boolean | undefined, allowResizingInTables?: boolean | undefined) => FloatingToolbarItem<Command>[];
export default buildLayoutButtons;
