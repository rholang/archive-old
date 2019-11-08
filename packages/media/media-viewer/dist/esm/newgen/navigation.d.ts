import * as React from 'react';
import { Component } from 'react';
import { Identifier } from '@atlaskit/media-client';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
export declare type NavigationDirection = 'prev' | 'next';
export declare type NavigationProps = Readonly<{
    items: Identifier[];
    selectedItem: Identifier;
    onChange: (item: Identifier) => void;
}> & WithAnalyticsEventsProps;
export declare type NavigationSource = 'keyboard' | 'mouse';
export declare class NavigationBase extends Component<NavigationProps, {}> {
    private navigate;
    private fireAnalytics;
    readonly selectedIndex: number;
    render(): JSX.Element | null;
}
export declare const Navigation: React.ForwardRefExoticComponent<Pick<NavigationProps, "onChange" | "items" | "selectedItem"> & React.RefAttributes<any>>;
