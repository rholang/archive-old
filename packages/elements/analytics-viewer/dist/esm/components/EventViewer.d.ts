import { UIAnalyticsEvent } from '@atlaskit/analytics-next';
import * as React from 'react';
export declare type Event = {
    channel?: string;
    event: UIAnalyticsEvent;
};
export declare class EventViewer extends React.PureComponent<Event, {
    showMore: boolean;
}> {
    constructor(props: Event);
    private handleMoreClick;
    render(): JSX.Element;
}
