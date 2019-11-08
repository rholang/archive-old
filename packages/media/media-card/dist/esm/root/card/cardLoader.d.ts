import * as React from 'react';
import { WithMediaClientConfigProps } from '@atlaskit/media-client';
import { MediaCardAnalyticsErrorBoundaryProps } from '../media-card-analytics-error-boundary';
import { CardWithAnalyticsEventsProps } from '.';
export declare type CardWithMediaClientConfigProps = WithMediaClientConfigProps<CardWithAnalyticsEventsProps>;
declare type CardWithMediaClientConfigComponent = React.ComponentType<CardWithMediaClientConfigProps>;
declare type MediaCardErrorBoundaryComponent = React.ComponentType<MediaCardAnalyticsErrorBoundaryProps>;
export interface AsyncCardState {
    Card?: CardWithMediaClientConfigComponent;
    MediaCardErrorBoundary?: MediaCardErrorBoundaryComponent;
}
export default class CardLoader extends React.PureComponent<CardWithMediaClientConfigProps & AsyncCardState, AsyncCardState> {
    static displayName: string;
    static Card?: CardWithMediaClientConfigComponent;
    static MediaCardErrorBoundary?: MediaCardErrorBoundaryComponent;
    state: AsyncCardState;
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
}
export {};
