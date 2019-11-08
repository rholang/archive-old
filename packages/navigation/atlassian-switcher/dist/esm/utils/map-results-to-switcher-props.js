import { getAdministrationLinks, getAvailableProductLinks, getCustomLinkItems, getFixedProductLinks, getProvisionedProducts, getRecentLinkItems, getSuggestedProductLink, getDiscoverSectionLinks, } from './links';
import { hasLoaded, isComplete, isError, Status, } from '../providers/as-data-provider';
import { Product, } from '../types';
import { createCollector } from './create-collector';
function collectAvailableProductLinks(cloudId, availableProducts) {
    if (availableProducts) {
        if (isError(availableProducts)) {
            return [];
        }
        if (isComplete(availableProducts)) {
            return getAvailableProductLinks(availableProducts.data, cloudId);
        }
        return;
    }
    return;
}
function collectSuggestedLinks(userSiteData, productRecommendations, isXFlowEnabled, isDiscoverSectionEnabled) {
    if (isError(isXFlowEnabled) || isError(userSiteData)) {
        return [];
    }
    if (isComplete(userSiteData) &&
        isComplete(isXFlowEnabled) &&
        isComplete(productRecommendations)) {
        return isXFlowEnabled.data
            ? getSuggestedProductLink(userSiteData.data.provisionedProducts, productRecommendations.data, isDiscoverSectionEnabled)
            : [];
    }
}
function collectCanManageLinks(managePermission) {
    if (isComplete(managePermission)) {
        return managePermission.data;
    }
}
function collectAdminLinks(managePermission, addProductsPermission, isDiscoverMoreForEveryoneEnabled, isEmceeLinkEnabled, product, isDiscoverSectionEnabled) {
    if (isError(managePermission) || isError(addProductsPermission)) {
        return [];
    }
    if (isComplete(managePermission) && isComplete(addProductsPermission)) {
        if (managePermission.data || addProductsPermission.data) {
            return getAdministrationLinks(managePermission.data, isDiscoverMoreForEveryoneEnabled, isEmceeLinkEnabled, product, isDiscoverSectionEnabled);
        }
        return [];
    }
}
function collectFixedProductLinks(isDiscoverMoreForEveryoneEnabled) {
    return getFixedProductLinks({
        isDiscoverMoreForEveryoneEnabled: isDiscoverMoreForEveryoneEnabled,
    });
}
function collectRecentLinks(recentContainers, userSiteData) {
    if (isError(recentContainers) || isError(userSiteData)) {
        return [];
    }
    if (isComplete(recentContainers) && isComplete(userSiteData)) {
        return getRecentLinkItems(recentContainers.data.data, userSiteData.data.currentSite);
    }
}
function collectCustomLinks(customLinks, userSiteData) {
    if (customLinks === undefined || isError(userSiteData)) {
        return [];
    }
    if (isComplete(customLinks) && isComplete(userSiteData)) {
        return getCustomLinkItems(customLinks.data, userSiteData.data.currentSite);
    }
}
function asUserSiteDataProviderResult(availableProductsProvider, cloudId, product) {
    switch (availableProductsProvider.status) {
        case Status.LOADING: // intentional fallthrough
        case Status.ERROR:
            return availableProductsProvider;
        case Status.COMPLETE:
            var site = availableProductsProvider.data.sites.find(function (site) {
                return (cloudId && site.cloudId === cloudId) ||
                    (product &&
                        product === Product.BITBUCKET &&
                        site.cloudId === Product.BITBUCKET);
            });
            if (!site) {
                return {
                    status: Status.ERROR,
                    data: null,
                    error: new Error("could not find site in availableProducts for cloudId " + cloudId),
                };
            }
            return {
                status: Status.COMPLETE,
                data: {
                    currentSite: {
                        url: site.url,
                        products: site.availableProducts,
                    },
                    provisionedProducts: getProvisionedProducts(availableProductsProvider.data),
                },
            };
    }
}
export function mapResultsToSwitcherProps(cloudId, results, features, availableProducts, product) {
    var collect = createCollector();
    var isXFlowEnabled = results.isXFlowEnabled, managePermission = results.managePermission, addProductsPermission = results.addProductsPermission, customLinks = results.customLinks, recentContainers = results.recentContainers, productRecommendations = results.productRecommendations;
    var userSiteData = asUserSiteDataProviderResult(availableProducts, cloudId, product);
    var hasLoadedAvailableProducts = hasLoaded(availableProducts);
    var hasLoadedAdminLinks = hasLoaded(managePermission) && hasLoaded(addProductsPermission);
    var hasLoadedSuggestedProducts = features.xflow
        ? hasLoaded(productRecommendations) && hasLoaded(isXFlowEnabled)
        : true;
    var hasLoadedDiscoverSection = features.isDiscoverSectionEnabled &&
        hasLoadedAvailableProducts &&
        hasLoadedSuggestedProducts &&
        hasLoadedAdminLinks;
    return {
        licensedProductLinks: collect(collectAvailableProductLinks(cloudId, availableProducts), []),
        suggestedProductLinks: features.xflow
            ? collect(collectSuggestedLinks(userSiteData, productRecommendations, isXFlowEnabled, features.isDiscoverSectionEnabled), [])
            : [],
        fixedLinks: !features.isDiscoverSectionEnabled
            ? collect(collectFixedProductLinks(features.isDiscoverMoreForEveryoneEnabled), [])
            : [],
        adminLinks: collect(collectAdminLinks(managePermission, addProductsPermission, features.isDiscoverMoreForEveryoneEnabled, features.isEmceeLinkEnabled, product, features.isDiscoverSectionEnabled), []),
        recentLinks: collect(collectRecentLinks(recentContainers, userSiteData), []),
        customLinks: collect(collectCustomLinks(customLinks, userSiteData), []),
        showManageLink: !features.disableCustomLinks &&
            collect(collectCanManageLinks(managePermission), false),
        hasLoaded: hasLoadedAvailableProducts &&
            hasLoadedAdminLinks &&
            hasLoadedSuggestedProducts,
        hasLoadedCritical: hasLoadedAvailableProducts,
        discoverSectionLinks: hasLoadedDiscoverSection
            ? getDiscoverSectionLinks({
                product: product,
                isDiscoverMoreForEveryoneEnabled: features.isDiscoverMoreForEveryoneEnabled,
                isEmceeLinkEnabled: features.isEmceeLinkEnabled,
            })
            : [],
    };
}
//# sourceMappingURL=map-results-to-switcher-props.js.map