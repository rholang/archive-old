import * as React from 'react';
import * as PropTypes from 'prop-types';
import { SmartCardProps } from './genericCard';
import { SelectionBasedNodeView } from '../../../nodeviews/ReactNodeView';
export declare class InlineCardComponent extends React.PureComponent<SmartCardProps> {
    private scrollContainer?;
    private onClick;
    static contextTypes: {
        contextAdapter: PropTypes.Requireable<any>;
    };
    UNSAFE_componentWillMount(): void;
    onResolve: (data: {
        url?: string | undefined;
        title?: string | undefined;
    }) => void;
    render(): JSX.Element;
}
export declare class InlineCard extends SelectionBasedNodeView {
    render(): JSX.Element;
}
