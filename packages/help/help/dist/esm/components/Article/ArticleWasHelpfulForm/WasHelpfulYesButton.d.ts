import * as React from 'react';
import { CreateUIAnalyticsEvent } from '@atlaskit/analytics-next';
export interface Props {
    onClick?: () => void;
    isSelected?: boolean;
    createAnalyticsEvent?: CreateUIAnalyticsEvent;
}
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Pick<any, string | number | symbol>, string | number | symbol> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, string | number | symbol> & React.RefAttributes<any>>;
export default _default;
