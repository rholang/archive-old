import * as React from 'react';
import { InjectedIntlProps } from 'react-intl';
import { EditorView } from 'prosemirror-view';
import { Rect } from 'prosemirror-tables';
export declare const messages: {
    cellBackground: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    mergeCells: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    splitCell: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    clearCells: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    sortColumnASC: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    sortColumnDESC: {
        id: string;
        defaultMessage: string;
        description: string;
    };
    canNotSortTable: {
        id: string;
        defaultMessage: string;
        description: string;
    };
};
export interface Props {
    editorView: EditorView;
    isOpen: boolean;
    selectionRect: Rect;
    targetCellPosition?: number;
    mountPoint?: HTMLElement;
    allowMergeCells?: boolean;
    allowColumnSorting?: boolean;
    allowBackgroundColor?: boolean;
    boundariesElement?: HTMLElement;
    offset?: Array<number>;
}
export interface State {
    isSubmenuOpen: boolean;
}
declare const _default: React.ComponentClass<Props, any> & {
    WrappedComponent: ReactIntl.ComponentConstructor<Props & InjectedIntlProps>;
};
export default _default;
