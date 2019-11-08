import * as React from 'react';
import { IntlShape } from 'react-intl';
export { WithOuterListenersProps } from './components/withOuterListeners';
export declare type Elevation = 'e100' | 'e200' | 'e300' | 'e400' | 'e500' | 'none';
export interface ApiClientResponse {
    User: {
        id: string;
        isBot: boolean;
        isCurrentUser: boolean;
        isNotMentionable: boolean;
        avatarUrl: string | null;
        email: string | null;
        fullName: string | null;
        location: string | null;
        meta: string | null;
        nickname: string | null;
        companyName: string | null;
        remoteTimeString: string | null;
        remoteWeekdayIndex: string | null;
        remoteWeekdayString: string | null;
        status: StatusType;
        statusModifiedDate: number | null;
    };
}
export interface ProfileCardClientData {
    isBot: boolean;
    isCurrentUser: boolean;
    isNotMentionable: boolean;
    avatarUrl?: string;
    email?: string;
    fullName?: string;
    location?: string;
    meta?: string;
    nickname?: string;
    companyName?: string;
    timestring?: string;
    status: StatusType;
    statusModifiedDate?: number | null;
}
export interface ProfileCardResourcedProps {
    userId: string;
    cloudId: string;
    resourceClient: ProfileClient;
    actions?: ProfileCardAction[];
    analytics?: any;
    position?: ProfilecardTriggerPosition;
    trigger?: TriggerType;
    children?: React.ReactNode;
    customElevation?: Elevation;
}
export interface ProfileCardResourcedState {
    visible?: boolean;
    isLoading?: boolean;
    hasError: boolean;
    error?: ProfileCardErrorType;
    data: ProfileCardClientData | null;
}
export interface ProfileCardTriggerProps {
    userId: string;
    cloudId: string;
    resourceClient: ProfileClient;
    actions?: ProfileCardAction[];
    analytics?: any;
    position?: ProfilecardTriggerPosition;
    trigger?: TriggerType;
    children?: React.ReactNode;
    customElevation?: Elevation;
}
export interface ProfileCardTriggerState {
    visible?: boolean;
    isLoading?: boolean;
    hasError: boolean;
    error?: ProfileCardErrorType;
    data: ProfileCardClientData | null;
}
export declare type StatusType = 'active' | 'inactive' | 'closed';
export declare type TriggerType = 'hover' | 'click';
export declare type StatusModifiedDateType = 'noDate' | 'thisWeek' | 'thisMonth' | 'lastMonth' | 'aFewMonths' | 'severalMonths' | 'moreThanAYear';
export interface ProfileCardAction {
    callback?: (...args: any[]) => any;
    shouldRender?: (data: any) => boolean;
    id?: string;
    label: string;
}
export interface ProfilecardProps {
    isLoading?: boolean;
    hasError?: boolean;
    errorType?: ProfileCardErrorType;
    status?: StatusType;
    isBot?: boolean;
    isNotMentionable?: boolean;
    avatarUrl?: string;
    fullName?: string;
    meta?: string;
    nickname?: string;
    email?: string;
    location?: string;
    companyName?: string;
    timestring?: string;
    actions?: ProfileCardAction[];
    clientFetchProfile?: any;
    analytics?: any;
    statusModifiedDate?: number | null;
    customElevation?: Elevation;
    disabledAccountMessage?: React.ReactNode;
    hasDisabledAccountLozenge?: boolean;
}
export interface MessageIntlProviderProps {
    children: React.ReactNode;
    intl: IntlShape;
}
export declare type RelativeDateKeyType = 'ThisWeek' | 'ThisMonth' | 'LastMonth' | 'AFewMonths' | 'SeveralMonths' | 'MoreThanAYear' | null;
export interface ProfileClient {
    makeRequest: (cloudId: string, userId: string) => Promise<ProfileCardClientData>;
    setCachedProfile: (cloudId: string, userId: string, cacheItem: any) => void;
    getCachedProfile: (cloudId: string, userId: string) => ProfileCardClientData;
    flushCache: () => void;
    getProfile: (cloudId: string, userId: string) => Promise<ProfileCardClientData>;
}
export declare type ProfilecardTriggerPosition = 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end' | 'top-end' | 'top' | 'top-start' | 'right-end' | 'right' | 'right-start';
export declare type ProfileCardErrorType = {
    reason: 'default' | 'NotFound';
} | null;
export interface ProfileClientOptions {
    url: string;
    cacheSize?: number;
    cacheMaxAge?: number;
}
export interface ProfileClientConfig extends ProfileClientOptions {
    url: string;
    cacheSize: number;
    cacheMaxAge: number;
}
