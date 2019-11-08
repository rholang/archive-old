var _a, _b, _c;
import { __assign } from "tslib";
import * as React from 'react';
import DiscoverFilledGlyph from '@atlaskit/icon/glyph/discover-filled';
import AddIcon from '@atlaskit/icon/glyph/add';
import SettingsGlyph from '@atlaskit/icon/glyph/settings';
import MarketplaceGlyph from '@atlaskit/icon/glyph/marketplace';
import { BitbucketIcon, ConfluenceIcon, JiraSoftwareIcon, JiraServiceDeskIcon, JiraCoreIcon, OpsGenieIcon, StatuspageIcon, TrelloIcon, } from '@atlaskit/logo';
import FormattedMessage from '../primitives/formatted-message';
import { RecentContainerType, WorklensProductType, ProductKey, Product, } from '../types';
import messages from './messages';
import WorldIcon from '@atlaskit/icon/glyph/world';
import { createIcon, createImageIcon } from './icon-themes';
export var OBJECT_TYPE_TO_LABEL_MAP = {
    'jira-project': messages.jiraProject,
    'confluence-space': messages.confluenceSpace,
};
export var getObjectTypeLabel = function (type) {
    return OBJECT_TYPE_TO_LABEL_MAP[type] ? (React.createElement(FormattedMessage, __assign({}, OBJECT_TYPE_TO_LABEL_MAP[type]))) : (type);
};
export var getFixedProductLinks = function (params) {
    return params.isDiscoverMoreForEveryoneEnabled ? [getDiscoverMoreLink()] : [];
};
var getDiscoverMoreLink = function (customIcon) {
    var icon = customIcon || AddIcon;
    return {
        // The discover more link href is intentionally empty to prioritise the onDiscoverMoreClicked callback
        key: 'discover-more',
        label: React.createElement(FormattedMessage, __assign({}, messages.discoverMore)),
        Icon: createIcon(icon, { size: 'medium' }),
        href: '',
    };
};
export var AVAILABLE_PRODUCT_DATA_MAP = (_a = {},
    _a[WorklensProductType.BITBUCKET] = {
        label: 'Bitbucket',
        Icon: createIcon(BitbucketIcon, { size: 'small' }),
        href: '/wiki',
    },
    _a[WorklensProductType.CONFLUENCE] = {
        label: 'Confluence',
        Icon: createIcon(ConfluenceIcon, { size: 'small' }),
        href: '/wiki',
        description: (React.createElement(FormattedMessage, __assign({}, messages.productDescriptionConfluence))),
    },
    _a[WorklensProductType.JIRA_BUSINESS] = {
        label: 'Jira Core',
        Icon: createIcon(JiraCoreIcon, { size: 'small' }),
        href: '/secure/BrowseProjects.jspa?selectedProjectType=business',
    },
    _a[WorklensProductType.JIRA_SOFTWARE] = {
        label: 'Jira Software',
        Icon: createIcon(JiraSoftwareIcon, { size: 'small' }),
        href: '/secure/BrowseProjects.jspa?selectedProjectType=software',
        description: (React.createElement(FormattedMessage, __assign({}, messages.productDescriptionJiraSoftware))),
    },
    _a[WorklensProductType.JIRA_SERVICE_DESK] = {
        label: 'Jira Service Desk',
        Icon: createIcon(JiraServiceDeskIcon, { size: 'small' }),
        href: '/secure/BrowseProjects.jspa?selectedProjectType=service_desk',
        description: (React.createElement(FormattedMessage, __assign({}, messages.productDescriptionJiraServiceDesk))),
    },
    _a[WorklensProductType.OPSGENIE] = {
        label: 'Opsgenie',
        Icon: createIcon(OpsGenieIcon, { size: 'small' }),
        href: 'https://app.opsgenie.com',
        description: React.createElement(FormattedMessage, __assign({}, messages.productDescriptionOpsgenie)),
    },
    _a[WorklensProductType.STATUSPAGE] = {
        label: 'Statuspage',
        Icon: createIcon(StatuspageIcon, { size: 'small' }),
        href: 'https://statuspage.io',
    },
    _a[WorklensProductType.TRELLO] = {
        label: 'Trello',
        Icon: createIcon(TrelloIcon, { size: 'small' }),
        href: 'https://trello.com',
    },
    _a);
var PRODUCT_ORDER = [
    WorklensProductType.JIRA_SOFTWARE,
    WorklensProductType.JIRA_SERVICE_DESK,
    WorklensProductType.JIRA_BUSINESS,
    WorklensProductType.CONFLUENCE,
    WorklensProductType.OPSGENIE,
    WorklensProductType.BITBUCKET,
    WorklensProductType.STATUSPAGE,
    WorklensProductType.TRELLO,
];
var BROWSE_APPS_URL = (_b = {},
    _b[Product.JIRA] = '/plugins/servlet/ac/com.atlassian.jira.emcee/discover',
    _b[Product.CONFLUENCE] = '/wiki/plugins/servlet/ac/com.atlassian.confluence.emcee/discover',
    _b);
var TO_WORKLENS_PRODUCT_KEY = (_c = {},
    _c[ProductKey.CONFLUENCE] = WorklensProductType.CONFLUENCE,
    _c[ProductKey.JIRA_CORE] = WorklensProductType.JIRA_BUSINESS,
    _c[ProductKey.JIRA_SERVICE_DESK] = WorklensProductType.JIRA_SERVICE_DESK,
    _c[ProductKey.JIRA_SOFTWARE] = WorklensProductType.JIRA_SOFTWARE,
    _c[ProductKey.OPSGENIE] = WorklensProductType.OPSGENIE,
    _c);
var getProductSiteUrl = function (connectedSite) {
    var product = connectedSite.product, siteUrl = connectedSite.siteUrl;
    if (product.productType === WorklensProductType.OPSGENIE ||
        product.productType === WorklensProductType.BITBUCKET ||
        product.productType === WorklensProductType.STATUSPAGE ||
        product.productType === WorklensProductType.TRELLO) {
        return product.url;
    }
    return siteUrl + AVAILABLE_PRODUCT_DATA_MAP[product.productType].href;
};
var getAvailableProductLinkFromSiteProduct = function (connectedSites) {
    var topSite = connectedSites.find(function (site) { return site.isCurrentSite; }) ||
        connectedSites.sort(function (a, b) { return b.product.activityCount - a.product.activityCount; })[0];
    var productType = topSite.product.productType;
    var productLinkProperties = AVAILABLE_PRODUCT_DATA_MAP[productType];
    return __assign(__assign({}, productLinkProperties), { key: productType + topSite.siteName, href: getProductSiteUrl(topSite), description: topSite.siteName, productType: productType, childItems: connectedSites.length > 1
            ? connectedSites
                .map(function (site) { return ({
                href: getProductSiteUrl(site),
                label: site.siteName,
                avatar: site.avatar,
            }); })
                .sort(function (a, b) { return a.label.localeCompare(b.label); })
            : [] });
};
export var getAvailableProductLinks = function (availableProducts, cloudId) {
    var productsMap = {};
    availableProducts.sites.forEach(function (site) {
        var availableProducts = site.availableProducts, avatar = site.avatar, displayName = site.displayName, url = site.url;
        availableProducts.forEach(function (product) {
            var productType = product.productType;
            if (!productsMap[productType]) {
                productsMap[productType] = [];
            }
            productsMap[productType].push({
                product: product,
                isCurrentSite: Boolean(cloudId) && site.cloudId === cloudId,
                siteName: displayName,
                siteUrl: url,
                avatar: avatar,
            });
        });
    });
    return PRODUCT_ORDER.map(function (productType) {
        var connectedSites = productsMap[productType];
        return (connectedSites && getAvailableProductLinkFromSiteProduct(connectedSites));
    }).filter(function (link) { return !!link; });
};
export var getAdministrationLinks = function (isAdmin, isDiscoverMoreForEveryoneEnabled, isEmceeLinkEnabled, product, isDiscoverSectionEnabled) {
    var adminBaseUrl = isAdmin ? "/admin" : '/trusted-admin';
    var adminLinks = [
        {
            key: 'administration',
            label: React.createElement(FormattedMessage, __assign({}, messages.administration)),
            Icon: createIcon(SettingsGlyph, { size: 'medium' }),
            href: adminBaseUrl,
        },
    ];
    if (isDiscoverSectionEnabled) {
        return adminLinks;
    }
    var emceeLink = isEmceeLinkEnabled && getEmceeLink(product);
    if (emceeLink) {
        adminLinks.unshift(emceeLink);
    }
    if (!isDiscoverMoreForEveryoneEnabled) {
        adminLinks.unshift({
            key: 'discover-applications',
            label: React.createElement(FormattedMessage, __assign({}, messages.discoverMore)),
            Icon: createIcon(DiscoverFilledGlyph, { size: 'medium' }),
            href: adminBaseUrl + "/billing/addapplication",
        });
    }
    return adminLinks;
};
var getEmceeLink = function (product) {
    var emceeLink = product && BROWSE_APPS_URL[product];
    if (emceeLink) {
        return {
            key: 'browse-apps',
            label: React.createElement(FormattedMessage, __assign({}, messages.browseApps)),
            Icon: createIcon(MarketplaceGlyph, { size: 'medium' }),
            href: emceeLink + "#!/discover?source=app_switcher",
        };
    }
};
var PRODUCT_RECOMMENDATION_LIMIT = 2;
var DISCOVER_PRODUCT_RECOMMENDATION_LIMIT = 3;
export var getSuggestedProductLink = function (provisionedProducts, productRecommendations, isDiscoverSectionEnabled) {
    return productRecommendations
        .filter(function (legacyProduct) {
        var productKey = TO_WORKLENS_PRODUCT_KEY[legacyProduct.productKey];
        return !provisionedProducts[productKey];
    })
        .map(function (legacyProduct) {
        var productKey = TO_WORKLENS_PRODUCT_KEY[legacyProduct.productKey];
        return __assign({ key: legacyProduct.productKey }, AVAILABLE_PRODUCT_DATA_MAP[productKey]);
    })
        .slice(0, isDiscoverSectionEnabled
        ? DISCOVER_PRODUCT_RECOMMENDATION_LIMIT
        : PRODUCT_RECOMMENDATION_LIMIT);
};
export function getDiscoverSectionLinks(_a) {
    var isDiscoverMoreForEveryoneEnabled = _a.isDiscoverMoreForEveryoneEnabled, isEmceeLinkEnabled = _a.isEmceeLinkEnabled, product = _a.product;
    var discoverLinks = [];
    var discoverMoreLink = isDiscoverMoreForEveryoneEnabled &&
        getDiscoverMoreLink(DiscoverFilledGlyph);
    var emceeLink = isEmceeLinkEnabled && getEmceeLink(product);
    if (discoverMoreLink) {
        discoverLinks.push(discoverMoreLink);
    }
    if (emceeLink) {
        discoverLinks.push(emceeLink);
    }
    return discoverLinks;
}
export var getProvisionedProducts = function (availableProducts) {
    var provisionedProducts = {};
    availableProducts.sites.forEach(function (site) {
        return site.availableProducts.forEach(function (product) { return (provisionedProducts[product.productType] = true); });
    });
    return provisionedProducts;
};
export var getCustomLinkItems = function (list, currentSite) {
    var defaultProductCustomLinks = [
        currentSite.url + "/secure/MyJiraHome.jspa",
        currentSite.url + "/wiki/",
    ];
    return list
        .filter(function (customLink) { return defaultProductCustomLinks.indexOf(customLink.link) === -1; })
        .map(function (customLink) { return ({
        key: customLink.key,
        label: customLink.label,
        Icon: createIcon(WorldIcon),
        href: customLink.link,
        analyticsAttributes: {
            linkType: customLink.local ? 'customLink' : 'applink',
        },
    }); });
};
export var getRecentLinkItems = function (list, currentSite) {
    var isAnyJiraProductActive = Boolean(currentSite.products.find(function (product) {
        return product.productType === WorklensProductType.JIRA_BUSINESS ||
            product.productType === WorklensProductType.JIRA_SERVICE_DESK ||
            product.productType === WorklensProductType.JIRA_SOFTWARE;
    }));
    var isConfluenceActive = Boolean(currentSite.products.find(function (product) { return product.productType === WorklensProductType.CONFLUENCE; }));
    return list
        .filter(function (recent) {
        return ((recent.type === RecentContainerType.JIRA_PROJECT &&
            isAnyJiraProductActive) ||
            (recent.type === RecentContainerType.CONFLUENCE_SPACE &&
                isConfluenceActive) ||
            [
                RecentContainerType.JIRA_PROJECT,
                RecentContainerType.CONFLUENCE_SPACE,
            ].indexOf(recent.type) === -1);
    })
        .slice(0, 6)
        .map(function (customLink) { return ({
        key: customLink.objectId,
        label: customLink.name,
        Icon: createImageIcon(customLink.iconUrl),
        href: customLink.url,
        type: customLink.type,
        description: getObjectTypeLabel(customLink.type),
    }); });
};
//# sourceMappingURL=links.js.map