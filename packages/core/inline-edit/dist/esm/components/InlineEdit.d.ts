import React from 'react';
import { UIAnalyticsEvent } from '@atlaskit/analytics-next';
import { InlineEditProps } from '../types';
interface State {
    isEditing: boolean;
}
declare class InlineEdit extends React.Component<InlineEditProps, State> {
    static defaultProps: {
        startWithEditViewOpen: boolean;
    };
    editViewRef: React.RefObject<HTMLElement>;
    state: {
        isEditing: boolean;
    };
    componentDidMount(): void;
    onConfirm: (value: string, analyticsEvent: UIAnalyticsEvent) => void;
    onCancel: () => void;
    onEditRequested: () => void;
    render(): JSX.Element;
}
export default InlineEdit;
