import * as React from 'react';
import { UIAnalyticsEventHandler } from '@atlaskit/analytics-next';
import { ListenerProps } from '../types';
export default class MediaAnalyticsListener extends React.Component<ListenerProps> {
    listenerHandler: UIAnalyticsEventHandler;
    render(): JSX.Element;
}
