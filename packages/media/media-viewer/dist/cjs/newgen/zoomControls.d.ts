import * as React from 'react';
import { Component } from 'react';
import { ZoomLevel } from './domain/zoomLevel';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
import { InjectedIntlProps } from 'react-intl';
export declare type ZoomControlsProps = Readonly<{
    onChange: (newZoomLevel: ZoomLevel) => void;
    zoomLevel: ZoomLevel;
}> & WithAnalyticsEventsProps;
export declare class ZoomControlsBase extends Component<ZoomControlsProps & InjectedIntlProps, {}> {
    zoomIn: () => void;
    zoomOut: () => void;
    render(): JSX.Element;
    private fireAnalytics;
}
export declare const ZoomControls: React.ForwardRefExoticComponent<Pick<ZoomControlsProps, "onChange" | "zoomLevel"> & React.RefAttributes<any>>;
