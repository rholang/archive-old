import { UIAnalyticsEvent } from '@atlaskit/analytics-next';
import { WithTheme } from './theme/types';
import { AvailableProductsDataProvider } from './providers/products-data-provider';

export interface TriggerXFlowCallback {
  (
    productKey: string,
    sourceComponent: string,
    event: any,
    analyticsEvent: UIAnalyticsEvent,
  ): void;
}
export interface DiscoverMoreCallback {
  (event: any, analyticsEvent: UIAnalyticsEvent): void;
}

export interface WithCloudId {
  cloudId: string;
}

export enum RecentContainerType {
  JIRA_PROJECT = 'jira-project',
  CONFLUENCE_SPACE = 'confluence-space',
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

export enum Permissions {
  MANAGE = 'manage',
  CAN_INVITE_USERS = 'invite-users',
  ADD_PRODUCTS = 'add-products',
}

export enum Product {
  BITBUCKET = 'bitbucket',
  CONFLUENCE = 'confluence',
  HOME = 'home',
  JIRA = 'jira',
  SITE_ADMIN = 'site-admin',
  TRUSTED_ADMIN = 'trusted-admin',
}

export enum Feature {
  disableCustomLinks = 'disableCustomLinks',
  disableRecentContainers = 'disableRecentContainers',
  disableHeadings = 'disableHeadings',
  xflow = 'xflow',
  isDiscoverMoreForEveryoneEnabled = 'isDiscoverMoreForEveryoneEnabled',
  // EMCEE stands for Embedded Marketplace with in the product
  isEmceeLinkEnabled = 'isEmceeLinkEnabled',
  // Enable Discover section - group suggested product links in Discover section
  isDiscoverSectionEnabled = 'isDiscoverSectionEnabled',
}

export type FeatureFlagProps = {
  // Custom links are enabled by default for Jira and Confluence, this feature flag allows to hide them. Custom links are not supported by the switcher in any other products.
  disableCustomLinks?: boolean;
  // Hide recent containers. Recent containers are enabled by default.
  disableRecentContainers?: boolean;
  // Remove section headers - useful if something else is providing them. i.e: trello inline dialog.
  disableHeadings?: boolean;
  // Enable discover more.
  isDiscoverMoreForEveryoneEnabled?: boolean;
  // Enable Embedded Marketplace within the product.
  isEmceeLinkEnabled?: boolean;
  // Enable Discover section - group suggested product links in Discover section
  isDiscoverSectionEnabled?: boolean;
};

export type FeatureMap = { [key in Feature]: boolean };

export type CustomLinksResponse = CustomLink[];

export type ProvisionedProducts = { [key in WorklensProductType]?: boolean };

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

export enum WorklensProductType {
  JIRA_BUSINESS = 'JIRA_BUSINESS',
  JIRA_SERVICE_DESK = 'JIRA_SERVICE_DESK',
  JIRA_SOFTWARE = 'JIRA_SOFTWARE',
  CONFLUENCE = 'CONFLUENCE',
  OPSGENIE = 'OPSGENIE',
  BITBUCKET = 'BITBUCKET',
  STATUSPAGE = 'STATUSPAGE',
  TRELLO = 'TRELLO',
}

export type AvailableProduct =
  | {
      activityCount: number;
      productType:
        | WorklensProductType.JIRA_BUSINESS
        | WorklensProductType.JIRA_SERVICE_DESK
        | WorklensProductType.JIRA_SOFTWARE
        | WorklensProductType.CONFLUENCE;
    }
  | AvailableProductWithUrl;

interface AvailableProductWithUrl {
  activityCount: number;
  productType:
    | WorklensProductType.BITBUCKET
    | WorklensProductType.OPSGENIE
    | WorklensProductType.STATUSPAGE // assuming that the URL is provided by TCS (same as Opsgenie)
    | WorklensProductType.TRELLO;
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

export enum ProductKey {
  CONFLUENCE = 'confluence.ondemand',
  JIRA_CORE = 'jira-core.ondemand',
  JIRA_SOFTWARE = 'jira-software.ondemand',
  JIRA_SERVICE_DESK = 'jira-servicedesk.ondemand',
  OPSGENIE = 'opsgenie',
}

export type RecommendationsEngineResponse = RecommendationItem[];

export interface RecommendationItem {
  productKey: ProductKey;
}

export type RecommendationsFeatureFlags = {
  [key: string]: string | boolean;
};

export interface SwitcherChildItem {
  href: string;
  label: string;
  avatar: string | null;
}

export type AtlassianSwitcherProps = WithTheme & {
  // Product name used for analytics events
  product: string;
  // Optional cloudID, should be provided for tenanted applications.
  cloudId?: string;
  // Optional callback to be exectuted after an XFlow event is triggered.
  triggerXFlow?: TriggerXFlowCallback;
  // Optional callback to be exectuted after a user clicks on discover more.
  onDiscoverMoreClicked?: DiscoverMoreCallback;
  // A map of feature flags used by the XFlow recommendations engine.
  recommendationsFeatureFlags?: RecommendationsFeatureFlags;
  // Optional custom provider for available products
  availableProductsDataProvider?: AvailableProductsDataProvider;
} & FeatureFlagProps;
