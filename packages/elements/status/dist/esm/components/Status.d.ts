import * as React from 'react';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
export declare type Color = 'neutral' | 'purple' | 'blue' | 'red' | 'yellow' | 'green';
export declare type StatusStyle = 'bold' | 'subtle';
export interface OwnProps {
    text: string;
    color: Color;
    style?: StatusStyle;
    localId?: string;
    onClick?: (event: React.SyntheticEvent<any>) => void;
    onHover?: () => void;
}
export declare type Props = OwnProps & WithAnalyticsEventsProps;
export declare const Status: React.ForwardRefExoticComponent<Pick<Props, "text" | "color" | "style" | "localId" | "onClick" | "onHover"> & React.RefAttributes<any>>;
