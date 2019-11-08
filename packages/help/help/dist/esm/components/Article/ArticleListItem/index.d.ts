import * as React from 'react';
import { CreateUIAnalyticsEvent, UIAnalyticsEvent } from '@atlaskit/analytics-next';
import { Analytics } from '../../../model/Analytics';
declare type Props = {
    createAnalyticsEvent: CreateUIAnalyticsEvent;
    onClick?: (id: string, analyticsEvent: UIAnalyticsEvent) => void;
    title?: string;
    description?: string;
    icon?: React.ReactNode;
    href?: string;
    id: string;
};
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<React.PropsWithChildren<Props & Analytics>, "icon" | "id" | "title" | "children" | "onClick" | "href" | "description"> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "icon" | "key" | "id" | "title" | "children" | "onClick" | "href" | "analyticsContext" | "description"> & React.RefAttributes<any>>;
export default _default;
