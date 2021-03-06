/**
 * This HOC will eventually be a replacement for `withAnalyticsEvents` once we are ready
 * to make the major bump to solely use hooks and new React context API. For now it let's
 * us test the hook logic to make sure that it accomplishes the expected behavior.
 */
import React from 'react';
import { CreateUIAnalyticsEvent } from './types';
export interface WithAnalyticsHookProps {
    /**
     * You should not be accessing this prop under any circumstances.
     * It is provided by `@atlaskit/analytics-next` and integrated in the component
     */
    createAnalyticsEvent?: CreateUIAnalyticsEvent;
    ref?: React.Ref<any>;
}
declare const withAnalyticsHook: (createEventMap?: Record<string, Record<string, any> | import("./types").AnalyticsEventCreator> | undefined) => <Props extends WithAnalyticsHookProps, Component>(WrappedComponent: (((props: Props) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | null) & Component) | ((new (props: Props) => React.Component<Props, any, any>) & Component)) => React.ForwardRefExoticComponent<React.PropsWithoutRef<JSX.LibraryManagedAttributes<Component, Pick<Props, Exclude<keyof Props, "createAnalyticsEvent" | "ref">>>> & React.RefAttributes<any>>;
export default withAnalyticsHook;
