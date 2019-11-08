import { UIAnalyticsEvent } from '@atlaskit/analytics-next';
import { WithTheme } from './theme/types';
import { AvailableProductsDataProvider } from './providers/products-data-provider';
export interface TriggerXFlowCallback {
    (productKey: string, sourceComponent: string, event: any, analyticsEvent: UIAnalyticsEvent): void;
}
export interface DiscoverMoreCallback {
    (event: any, analyticsEvent: UIAnalyticsEvent): void;
}
export interface WithCloudId {
    cloudId: string;
}
export declare enum RecentContainerType {
    JIRA_PROJECT = "jira-project",
    CONFLUENCE_SPACE = "confluence-space"
}
export interface RecentContainer {
    name: string;
    url: string;
    objectId: string;
    iconUrl: string;
    type: RecentContainerType;
}
export interface CustomLink {
    key: string;
    label: string;
    link: string;
    local: boolean;
}
export declare enum Permissions {
    MANAGE = "manage",
    CAN_INVITE_USERS = "invite-users",
    ADD_PRODUCTS = "add-products"
}
export declare enum Product {
    BITBUCKET = "bitbucket",
    CONFLUENCE = "confluence",
    HOME = "home",
    JIRA = "jira",
    SITE_ADMIN = "site-admin",
    TRUSTED_ADMIN = "trusted-admin"
}
export declare enum Feature {
    disableCustomLinks = "disableCustomLinks",
    disableRecentContainers = "disableRecentContainers",
    disableHeadings = "disableHeadings",
    xflow = "xflow",
    isDiscoverMoreForEveryoneEnabled = "isDiscoverMoreForEveryoneEnabled",
    isEmceeLinkEnabled = "isEmceeLinkEnabled",
    isDiscoverSectionEnabled = "isDiscoverSectionEnabled"
}
export declare type FeatureFlagProps = {
    disableCustomLinks?: boolean;
    disableRecentContainers?: boolean;
    disableHeadings?: boolean;
    isDiscoverMoreForEveryoneEnabled?: boolean;
    isEmceeLinkEnabled?: boolean;
    isDiscoverSectionEnabled?: boolean;
};
export declare type FeatureMap = {
    [key in Feature]: boolean;
};
export declare type CustomLinksResponse = CustomLink[];
export declare type ProvisionedProducts = {
    [key in WorklensProductType]?: boolean;
};
export interface CurrentSite {
    url: string;
    products: AvailableProduct[];
}
export interface UserSiteDataResponse {
    currentSite: CurrentSite;
    provisionedProducts: ProvisionedProducts;
}
export interface XFlowSettingsResponse {
    'product-suggestions-enabled'?: boolean;
}
export interface UserPermissionResponse {
    permitted: boolean;
}
export interface RecentContainersResponse {
    data: Array<RecentContainer>;
}
export declare enum WorklensProductType {
    JIRA_BUSINESS = "JIRA_BUSINESS",
    JIRA_SERVICE_DESK = "JIRA_SERVICE_DESK",
    JIRA_SOFTWARE = "JIRA_SOFTWARE",
    CONFLUENCE = "CONFLUENCE",
    OPSGENIE = "OPSGENIE",
    BITBUCKET = "BITBUCKET",
    STATUSPAGE = "STATUSPAGE",
    TRELLO = "TRELLO"
}
export declare type AvailableProduct = {
    activityCount: number;
    productType: WorklensProductType.JIRA_BUSINESS | WorklensProductType.JIRA_SERVICE_DESK | WorklensProductType.JIRA_SOFTWARE | WorklensProductType.CONFLUENCE;
} | AvailableProductWithUrl;
interface AvailableProductWithUrl {
    activityCount: number;
    productType: WorklensProductType.BITBUCKET | WorklensProductType.OPSGENIE | WorklensProductType.STATUSPAGE | WorklensProductType.TRELLO;
    url: string;
}
export interface AvailableSite {
    adminAccess: boolean;
    availableProducts: AvailableProduct[];
    avatar: string | null;
    cloudId: string;
    displayName: string;
    url: string;
}
export interface AvailableProductsResponse {
    sites: AvailableSite[];
}
export declare enum ProductKey {
    CONFLUENCE = "confluence.ondemand",
    JIRA_CORE = "jira-core.ondemand",
    JIRA_SOFTWARE = "jira-software.ondemand",
    JIRA_SERVICE_DESK = "jira-servicedesk.ondemand",
    OPSGENIE = "opsgenie"
}
export declare type RecommendationsEngineResponse = RecommendationItem[];
export interface RecommendationItem {
    productKey: ProductKey;
}
export declare type RecommendationsFeatureFlags = {
    [key: string]: string | boolean;
};
export interface SwitcherChildItem {
    href: string;
    label: string;
    avatar: string | null;
}
export declare type AtlassianSwitcherProps = WithTheme & {
    product: string;
    cloudId?: string;
    triggerXFlow?: TriggerXFlowCallback;
    onDiscoverMoreClicked?: DiscoverMoreCallback;
    recommendationsFeatureFlags?: RecommendationsFeatureFlags;
    availableProductsDataProvider?: AvailableProductsDataProvider;
} & FeatureFlagProps;
export {};
