import * as React from 'react';
import { NavigationAnalyticsContext } from '@atlaskit/analytics-namespaced-context';
import { withAnalyticsEvents, WithAnalyticsEventsProps, CreateUIAnalyticsEvent } from '@atlaskit/analytics-next';
import { UI_EVENT_TYPE, OPERATIONAL_EVENT_TYPE } from '@atlaskit/analytics-gas-types';
declare type PropsToContextMapper<P, C> = (props: P) => C;
export declare const NAVIGATION_CHANNEL = "navigation";
export declare const SWITCHER_SUBJECT = "atlassianSwitcher";
export declare const SWITCHER_ITEM_SUBJECT = "atlassianSwitcherItem";
export declare const SWITCHER_CHILD_ITEM_SUBJECT = "atlassianSwitcherChildItem";
export declare const SWITCHER_ITEM_EXPAND_SUBJECT = "atlassianSwitcherItemExpand";
export declare const SWITCHER_COMPONENT = "atlassianSwitcher";
export declare const SWITCHER_SOURCE = "atlassianSwitcher";
export declare const TRIGGER_COMPONENT = "atlassianSwitcherPrefetch";
export declare const TRIGGER_SUBJECT = "atlassianSwitcherPrefetch";
export declare const createAndFireNavigationEvent: (payload: Record<string, any>) => (createAnalyticsEvent: CreateUIAnalyticsEvent) => import("@atlaskit/analytics-next").UIAnalyticsEvent;
export declare const analyticsAttributes: <T extends object>(attributes: T) => {
    attributes: T;
};
export declare const withAnalyticsContextData: <P, C>(mapPropsToContext: PropsToContextMapper<P, C>) => (WrappedComponent: React.ComponentType<P>) => React.ComponentType<P>;
interface RenderTrackerProps extends WithAnalyticsEventsProps {
    subject: string;
    data?: object;
    onRender?: any;
}
export declare const RenderTracker: React.ForwardRefExoticComponent<Pick<RenderTrackerProps, "subject" | "data" | "onRender"> & React.RefAttributes<any>>;
export declare const ViewedTracker: React.ForwardRefExoticComponent<Pick<RenderTrackerProps, "subject" | "data" | "onRender"> & React.RefAttributes<any>>;
export { withAnalyticsEvents, WithAnalyticsEventsProps, NavigationAnalyticsContext, OPERATIONAL_EVENT_TYPE, UI_EVENT_TYPE, };
