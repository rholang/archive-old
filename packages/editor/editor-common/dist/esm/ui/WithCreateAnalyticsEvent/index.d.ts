import * as React from 'react';
import { CreateUIAnalyticsEvent } from '@atlaskit/analytics-next';
export declare type Props = {
    render: (createAnalyticsEvent?: CreateUIAnalyticsEvent) => React.ReactNode;
};
export declare const WithCreateAnalyticsEvent: React.ComponentType<Props>;
