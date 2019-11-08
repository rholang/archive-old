import React from 'react';
import { UIAnalyticsEvent } from '@atlaskit/analytics-next';
export declare type KeyboardOrMouseEvent = React.MouseEvent<any> | React.KeyboardEvent<any>;
export declare type AppearanceType = 'danger' | 'warning';
export declare type ButtonOnClick = (e: React.MouseEvent<HTMLElement>, analyticsEvent: UIAnalyticsEvent) => void;
