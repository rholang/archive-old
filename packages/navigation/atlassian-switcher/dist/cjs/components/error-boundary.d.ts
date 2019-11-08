import * as React from 'react';
import { Messages } from 'react-intl';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
interface ErrorBoundaryProps {
    messages: Messages;
    children: React.ReactNode;
}
declare const _default: React.ForwardRefExoticComponent<Pick<ErrorBoundaryProps & WithAnalyticsEventsProps, "children" | "messages"> & React.RefAttributes<any>>;
export default _default;
