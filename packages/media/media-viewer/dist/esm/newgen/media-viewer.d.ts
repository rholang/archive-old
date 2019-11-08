/// <reference types="react-intl" />
import * as React from 'react';
import { MediaClient, Identifier } from '@atlaskit/media-client';
import { WithAnalyticsEventsProps, UIAnalyticsEvent } from '@atlaskit/analytics-next';
import { ItemSource, MediaViewerFeatureFlags } from './domain';
export declare type Props = {
    onClose?: () => void;
    selectedItem?: Identifier;
    featureFlags?: MediaViewerFeatureFlags;
    mediaClient: MediaClient;
    itemSource: ItemSource;
} & WithAnalyticsEventsProps;
export declare class MediaViewerComponent extends React.Component<Props, {}> {
    static contextTypes: {
        intl: ReactIntl.IntlShape;
    };
    static startTime: number;
    static timerElapsed: () => number;
    private fireAnalytics;
    UNSAFE_componentWillMount(): void;
    onShortcutClosed: () => void;
    onContentClose: (_e?: React.SyntheticEvent<Element, Event> | undefined, analyticsEvent?: UIAnalyticsEvent | undefined) => void;
    private sendClosedEvent;
    render(): JSX.Element;
    private renderContent;
}
export declare const MediaViewer: React.ForwardRefExoticComponent<Pick<Props, "onClose" | "mediaClient" | "selectedItem" | "featureFlags" | "itemSource"> & React.RefAttributes<any>>;
