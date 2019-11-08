import * as React from 'react';
import { Node as PMNode } from 'prosemirror-model';
import * as PropTypes from 'prop-types';
import { EditorView } from 'prosemirror-view';
import { SmartCardProps } from './genericCard';
import { SelectionBasedNodeView, getPosHandler } from '../../../nodeviews/ReactNodeView';
export interface Props {
    children?: React.ReactNode;
    node: PMNode;
    view: EditorView;
    selected?: boolean;
    getPos: getPosHandler;
}
export declare class BlockCardComponent extends React.PureComponent<SmartCardProps> {
    onClick: () => void;
    static contextTypes: {
        contextAdapter: PropTypes.Requireable<any>;
    };
    onResolve: (data: {
        url?: string | undefined;
        title?: string | undefined;
    }) => void;
    render(): JSX.Element;
}
export declare class BlockCard extends SelectionBasedNodeView {
    render(): JSX.Element;
}
