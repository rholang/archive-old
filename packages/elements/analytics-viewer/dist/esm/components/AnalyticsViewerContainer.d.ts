import { UIAnalyticsEvent } from '@atlaskit/analytics-next';
import * as React from 'react';
import { EventsArray } from './AnalyticsViewer';
declare type Props = {
    children: React.ReactNode;
    channel?: string;
};
declare type State = {
    events: EventsArray;
};
export declare class AnalyticsViewerContainer extends React.Component<Props, State> {
    static defaultProps: {
        channel: string;
    };
    constructor(props: Props);
    handleOnEvent: (event: UIAnalyticsEvent, channel?: string | undefined) => void;
    render(): JSX.Element;
}
export {};
