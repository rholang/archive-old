import React from 'react';
import { ProviderResult } from './as-data-provider';
import { Permissions, RecentContainersResponse, WithCloudId } from '../types';
export declare const RecentContainersProvider: (props: Pick<{
    disableRecentContainers?: boolean | undefined;
    children: (recentContainers: ProviderResult<RecentContainersResponse>) => React.ReactNode;
} & WithCloudId, "disableRecentContainers"> & {
    cloudId?: string | undefined;
} & import("./as-data-provider").DataProviderProps<RecentContainersResponse>) => JSX.Element;
export declare const UserPermissionProvider: (props: Pick<Pick<{
    cloudId: string;
    permissionId: Permissions;
} & import("./as-data-provider").DataProviderProps<boolean> & import("@atlaskit/analytics-next").WithAnalyticsEventsProps, "children" | "cloudId" | "permissionId"> & React.RefAttributes<any>, "ref" | "key" | "permissionId"> & {
    cloudId?: string | undefined;
} & import("./as-data-provider").DataProviderProps<boolean>) => JSX.Element;
export declare const XFlowSettingsProvider: (props: Pick<Pick<{
    cloudId: string;
} & import("./as-data-provider").DataProviderProps<boolean> & import("@atlaskit/analytics-next").WithAnalyticsEventsProps, "children" | "cloudId"> & React.RefAttributes<any>, "ref" | "key"> & {
    cloudId?: string | undefined;
} & import("./as-data-provider").DataProviderProps<boolean>) => JSX.Element;
export declare const prefetchAll: ({ cloudId }: WithCloudId) => void;
export declare const resetAll: () => void;
