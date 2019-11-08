"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var links_1 = require("./links");
var as_data_provider_1 = require("../providers/as-data-provider");
var types_1 = require("../types");
var create_collector_1 = require("./create-collector");
function collectAvailableProductLinks(cloudId, availableProducts) {
    if (availableProducts) {
        if (as_data_provider_1.isError(availableProducts)) {
            return [];
        }
        if (as_data_provider_1.isComplete(availableProducts)) {
            return links_1.getAvailableProductLinks(availableProducts.data, cloudId);
        }
        return;
    }
    return;
}
function collectSuggestedLinks(userSiteData, productRecommendations, isXFlowEnabled, isDiscoverSectionEnabled) {
    if (as_data_provider_1.isError(isXFlowEnabled) || as_data_provider_1.isError(userSiteData)) {
        return [];
    }
    if (as_data_provider_1.isComplete(userSiteData) &&
        as_data_provider_1.isComplete(isXFlowEnabled) &&
        as_data_provider_1.isComplete(productRecommendations)) {
        return isXFlowEnabled.data
            ? links_1.getSuggestedProductLink(userSiteData.data.provisionedProducts, productRecommendations.data, isDiscoverSectionEnabled)
            : [];
    }
}
function collectCanManageLinks(managePermission) {
    if (as_data_provider_1.isComplete(managePermission)) {
        return managePermission.data;
    }
}
function collectAdminLinks(managePermission, addProductsPermission, isDiscoverMoreForEveryoneEnabled, isEmceeLinkEnabled, product, isDiscoverSectionEnabled) {
    if (as_data_provider_1.isError(managePermission) || as_data_provider_1.isError(addProductsPermission)) {
        return [];
    }
    if (as_data_provider_1.isComplete(managePermission) && as_data_provider_1.isComplete(addProductsPermission)) {
        if (managePermission.data || addProductsPermission.data) {
            return links_1.getAdministrationLinks(managePermission.data, isDiscoverMoreForEveryoneEnabled, isEmceeLinkEnabled, product, isDiscoverSectionEnabled);
        }
        return [];
    }
}
function collectFixedProductLinks(isDiscoverMoreForEveryoneEnabled) {
    return links_1.getFixedProductLinks({
        isDiscoverMoreForEveryoneEnabled: isDiscoverMoreForEveryoneEnabled,
    });
}
function collectRecentLinks(recentContainers, userSiteData) {
    if (as_data_provider_1.isError(recentContainers) || as_data_provider_1.isError(userSiteData)) {
        return [];
    }
    if (as_data_provider_1.isComplete(recentContainers) && as_data_provider_1.isComplete(userSiteData)) {
        return links_1.getRecentLinkItems(recentContainers.data.data, userSiteData.data.currentSite);
    }
}
function collectCustomLinks(customLinks, userSiteData) {
    if (customLinks === undefined || as_data_provider_1.isError(userSiteData)) {
        return [];
    }
    if (as_data_provider_1.isComplete(customLinks) && as_data_provider_1.isComplete(userSiteData)) {
        return links_1.getCustomLinkItems(customLinks.data, userSiteData.data.currentSite);
    }
}
function asUserSiteDataProviderResult(availableProductsProvider, cloudId, product) {
    switch (availableProductsProvider.status) {
        case as_data_provider_1.Status.LOADING: // intentional fallthrough
        case as_data_provider_1.Status.ERROR:
            return availableProductsProvider;
        case as_data_provider_1.Status.COMPLETE:
            var site = availableProductsProvider.data.sites.find(function (site) {
                return (cloudId && site.cloudId === cloudId) ||
                    (product &&
                        product === types_1.Product.BITBUCKET &&
                        site.cloudId === types_1.Product.BITBUCKET);
            });
            if (!site) {
                return {
                    status: as_data_provider_1.Status.ERROR,
                    data: null,
                    error: new Error("could not find site in availableProducts for cloudId " + cloudId),
                };
            }
            return {
                status: as_data_provider_1.Status.COMPLETE,
                data: {
                    currentSite: {
                        url: site.url,
                        products: site.availableProducts,
                    },
                    provisionedProducts: links_1.getProvisionedProducts(availableProductsProvider.data),
                },
            };
    }
}
function mapResultsToSwitcherProps(cloudId, results, features, availableProducts, product) {
    var collect = create_collector_1.createCollector();
    var isXFlowEnabled = results.isXFlowEnabled, managePermission = results.managePermission, addProductsPermission = results.addProductsPermission, customLinks = results.customLinks, recentContainers = results.recentContainers, productRecommendations = results.productRecommendations;
    var userSiteData = asUserSiteDataProviderResult(availableProducts, cloudId, product);
    var hasLoadedAvailableProducts = as_data_provider_1.hasLoaded(availableProducts);
    var hasLoadedAdminLinks = as_data_provider_1.hasLoaded(managePermission) && as_data_provider_1.hasLoaded(addProductsPermission);
    var hasLoadedSuggestedProducts = features.xflow
        ? as_data_provider_1.hasLoaded(productRecommendations) && as_data_provider_1.hasLoaded(isXFlowEnabled)
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
            ? links_1.getDiscoverSectionLinks({
                product: product,
                isDiscoverMoreForEveryoneEnabled: features.isDiscoverMoreForEveryoneEnabled,
                isEmceeLinkEnabled: features.isEmceeLinkEnabled,
            })
            : [],
    };
}
exports.mapResultsToSwitcherProps = mapResultsToSwitcherProps;
//# sourceMappingURL=map-results-to-switcher-props.js.map