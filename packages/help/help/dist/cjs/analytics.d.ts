/// <reference types="react" />
/// <reference types="@emotion/core" />
import * as x from '@atlaskit/analytics-next';
export declare const withAnalyticsEvents: (createEventMap?: Record<string, Record<string, any> | import("@atlaskit/analytics-next/dist/cjs/types").AnalyticsEventCreator> | undefined) => <Props extends x.WithAnalyticsEventsProps, Component>(WrappedComponent: (((props: Props) => import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, any> | null) | (new (props: any) => import("react").Component<any, any, any>)> | null) & Component) | ((new (props: Props) => import("react").Component<Props, any, any>) & Component)) => import("react").ForwardRefExoticComponent<import("react").PropsWithoutRef<JSX.LibraryManagedAttributes<Component, Pick<Props, Exclude<keyof Props, "ref" | "createAnalyticsEvent">>>> & import("react").RefAttributes<any>>;
export declare const withAnalyticsContext: (defaultData?: any) => <Props, Component>(WrappedComponent: (((props: Props) => import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, any> | null) | (new (props: any) => import("react").Component<any, any, any>)> | null) & Component) | ((new (props: Props) => import("react").Component<Props, any, any>) & Component)) => import("react").ForwardRefExoticComponent<import("react").PropsWithoutRef<JSX.LibraryManagedAttributes<Component, Props & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps>> & import("react").RefAttributes<any>>;
export declare const createAndFire: (payload: Record<string, any>) => (createAnalyticsEvent: x.CreateUIAnalyticsEvent) => x.UIAnalyticsEvent;
export declare const defaultAnalyticsAttributes: {
    componentName: string;
    packageName: any;
    packageVersion: any;
};
