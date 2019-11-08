import { SwitcherItemType } from './links';
import { ProviderResult } from '../providers/as-data-provider';
import { AvailableProductsResponse, CustomLinksResponse, FeatureMap, Product, RecentContainersResponse, RecommendationsEngineResponse } from '../types';
interface ProviderResults {
    customLinks?: ProviderResult<CustomLinksResponse>;
    recentContainers: ProviderResult<RecentContainersResponse>;
    managePermission: ProviderResult<boolean>;
    addProductsPermission: ProviderResult<boolean>;
    isXFlowEnabled: ProviderResult<boolean>;
    productRecommendations: ProviderResult<RecommendationsEngineResponse>;
}
export declare function mapResultsToSwitcherProps(cloudId: string | null | undefined, results: ProviderResults, features: FeatureMap, availableProducts: ProviderResult<AvailableProductsResponse>, product?: Product): {
    licensedProductLinks: SwitcherItemType[];
    suggestedProductLinks: SwitcherItemType[];
    fixedLinks: SwitcherItemType[];
    adminLinks: SwitcherItemType[];
    recentLinks: import("./links").RecentItemType[];
    customLinks: SwitcherItemType[];
    showManageLink: boolean;
    hasLoaded: boolean;
    hasLoadedCritical: boolean;
    discoverSectionLinks: SwitcherItemType[];
};
export {};
