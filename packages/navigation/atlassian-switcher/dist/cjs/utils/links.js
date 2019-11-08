"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var discover_filled_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/discover-filled"));
var add_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/add"));
var settings_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/settings"));
var marketplace_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/marketplace"));
var logo_1 = require("@atlaskit/logo");
var formatted_message_1 = tslib_1.__importDefault(require("../primitives/formatted-message"));
var types_1 = require("../types");
var messages_1 = tslib_1.__importDefault(require("./messages"));
var world_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/world"));
var icon_themes_1 = require("./icon-themes");
exports.OBJECT_TYPE_TO_LABEL_MAP = {
    'jira-project': messages_1.default.jiraProject,
    'confluence-space': messages_1.default.confluenceSpace,
};
exports.getObjectTypeLabel = function (type) {
    return exports.OBJECT_TYPE_TO_LABEL_MAP[type] ? (React.createElement(formatted_message_1.default, tslib_1.__assign({}, exports.OBJECT_TYPE_TO_LABEL_MAP[type]))) : (type);
};
exports.getFixedProductLinks = function (params) {
    return params.isDiscoverMoreForEveryoneEnabled ? [getDiscoverMoreLink()] : [];
};
var getDiscoverMoreLink = function (customIcon) {
    var icon = customIcon || add_1.default;
    return {
        // The discover more link href is intentionally empty to prioritise the onDiscoverMoreClicked callback
        key: 'discover-more',
        label: React.createElement(formatted_message_1.default, tslib_1.__assign({}, messages_1.default.discoverMore)),
        Icon: icon_themes_1.createIcon(icon, { size: 'medium' }),
        href: '',
    };
};
exports.AVAILABLE_PRODUCT_DATA_MAP = (_a = {},
    _a[types_1.WorklensProductType.BITBUCKET] = {
        label: 'Bitbucket',
        Icon: icon_themes_1.createIcon(logo_1.BitbucketIcon, { size: 'small' }),
        href: '/wiki',
    },
    _a[types_1.WorklensProductType.CONFLUENCE] = {
        label: 'Confluence',
        Icon: icon_themes_1.createIcon(logo_1.ConfluenceIcon, { size: 'small' }),
        href: '/wiki',
        description: (React.createElement(formatted_message_1.default, tslib_1.__assign({}, messages_1.default.productDescriptionConfluence))),
    },
    _a[types_1.WorklensProductType.JIRA_BUSINESS] = {
        label: 'Jira Core',
        Icon: icon_themes_1.createIcon(logo_1.JiraCoreIcon, { size: 'small' }),
        href: '/secure/BrowseProjects.jspa?selectedProjectType=business',
    },
    _a[types_1.WorklensProductType.JIRA_SOFTWARE] = {
        label: 'Jira Software',
        Icon: icon_themes_1.createIcon(logo_1.JiraSoftwareIcon, { size: 'small' }),
        href: '/secure/BrowseProjects.jspa?selectedProjectType=software',
        description: (React.createElement(formatted_message_1.default, tslib_1.__assign({}, messages_1.default.productDescriptionJiraSoftware))),
    },
    _a[types_1.WorklensProductType.JIRA_SERVICE_DESK] = {
        label: 'Jira Service Desk',
        Icon: icon_themes_1.createIcon(logo_1.JiraServiceDeskIcon, { size: 'small' }),
        href: '/secure/BrowseProjects.jspa?selectedProjectType=service_desk',
        description: (React.createElement(formatted_message_1.default, tslib_1.__assign({}, messages_1.default.productDescriptionJiraServiceDesk))),
    },
    _a[types_1.WorklensProductType.OPSGENIE] = {
        label: 'Opsgenie',
        Icon: icon_themes_1.createIcon(logo_1.OpsGenieIcon, { size: 'small' }),
        href: 'https://app.opsgenie.com',
        description: React.createElement(formatted_message_1.default, tslib_1.__assign({}, messages_1.default.productDescriptionOpsgenie)),
    },
    _a[types_1.WorklensProductType.STATUSPAGE] = {
        label: 'Statuspage',
        Icon: icon_themes_1.createIcon(logo_1.StatuspageIcon, { size: 'small' }),
        href: 'https://statuspage.io',
    },
    _a[types_1.WorklensProductType.TRELLO] = {
        label: 'Trello',
        Icon: icon_themes_1.createIcon(logo_1.TrelloIcon, { size: 'small' }),
        href: 'https://trello.com',
    },
    _a);
var PRODUCT_ORDER = [
    types_1.WorklensProductType.JIRA_SOFTWARE,
    types_1.WorklensProductType.JIRA_SERVICE_DESK,
    types_1.WorklensProductType.JIRA_BUSINESS,
    types_1.WorklensProductType.CONFLUENCE,
    types_1.WorklensProductType.OPSGENIE,
    types_1.WorklensProductType.BITBUCKET,
    types_1.WorklensProductType.STATUSPAGE,
    types_1.WorklensProductType.TRELLO,
];
var BROWSE_APPS_URL = (_b = {},
    _b[types_1.Product.JIRA] = '/plugins/servlet/ac/com.atlassian.jira.emcee/discover',
    _b[types_1.Product.CONFLUENCE] = '/wiki/plugins/servlet/ac/com.atlassian.confluence.emcee/discover',
    _b);
var TO_WORKLENS_PRODUCT_KEY = (_c = {},
    _c[types_1.ProductKey.CONFLUENCE] = types_1.WorklensProductType.CONFLUENCE,
    _c[types_1.ProductKey.JIRA_CORE] = types_1.WorklensProductType.JIRA_BUSINESS,
    _c[types_1.ProductKey.JIRA_SERVICE_DESK] = types_1.WorklensProductType.JIRA_SERVICE_DESK,
    _c[types_1.ProductKey.JIRA_SOFTWARE] = types_1.WorklensProductType.JIRA_SOFTWARE,
    _c[types_1.ProductKey.OPSGENIE] = types_1.WorklensProductType.OPSGENIE,
    _c);
var getProductSiteUrl = function (connectedSite) {
    var product = connectedSite.product, siteUrl = connectedSite.siteUrl;
    if (product.productType === types_1.WorklensProductType.OPSGENIE ||
        product.productType === types_1.WorklensProductType.BITBUCKET ||
        product.productType === types_1.WorklensProductType.STATUSPAGE ||
        product.productType === types_1.WorklensProductType.TRELLO) {
        return product.url;
    }
    return siteUrl + exports.AVAILABLE_PRODUCT_DATA_MAP[product.productType].href;
};
var getAvailableProductLinkFromSiteProduct = function (connectedSites) {
    var topSite = connectedSites.find(function (site) { return site.isCurrentSite; }) ||
        connectedSites.sort(function (a, b) { return b.product.activityCount - a.product.activityCount; })[0];
    var productType = topSite.product.productType;
    var productLinkProperties = exports.AVAILABLE_PRODUCT_DATA_MAP[productType];
    return tslib_1.__assign(tslib_1.__assign({}, productLinkProperties), { key: productType + topSite.siteName, href: getProductSiteUrl(topSite), description: topSite.siteName, productType: productType, childItems: connectedSites.length > 1
            ? connectedSites
                .map(function (site) { return ({
                href: getProductSiteUrl(site),
                label: site.siteName,
                avatar: site.avatar,
            }); })
                .sort(function (a, b) { return a.label.localeCompare(b.label); })
            : [] });
};
exports.getAvailableProductLinks = function (availableProducts, cloudId) {
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
exports.getAdministrationLinks = function (isAdmin, isDiscoverMoreForEveryoneEnabled, isEmceeLinkEnabled, product, isDiscoverSectionEnabled) {
    var adminBaseUrl = isAdmin ? "/admin" : '/trusted-admin';
    var adminLinks = [
        {
            key: 'administration',
            label: React.createElement(formatted_message_1.default, tslib_1.__assign({}, messages_1.default.administration)),
            Icon: icon_themes_1.createIcon(settings_1.default, { size: 'medium' }),
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
            label: React.createElement(formatted_message_1.default, tslib_1.__assign({}, messages_1.default.discoverMore)),
            Icon: icon_themes_1.createIcon(discover_filled_1.default, { size: 'medium' }),
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
            label: React.createElement(formatted_message_1.default, tslib_1.__assign({}, messages_1.default.browseApps)),
            Icon: icon_themes_1.createIcon(marketplace_1.default, { size: 'medium' }),
            href: emceeLink + "#!/discover?source=app_switcher",
        };
    }
};
var PRODUCT_RECOMMENDATION_LIMIT = 2;
var DISCOVER_PRODUCT_RECOMMENDATION_LIMIT = 3;
exports.getSuggestedProductLink = function (provisionedProducts, productRecommendations, isDiscoverSectionEnabled) {
    return productRecommendations
        .filter(function (legacyProduct) {
        var productKey = TO_WORKLENS_PRODUCT_KEY[legacyProduct.productKey];
        return !provisionedProducts[productKey];
    })
        .map(function (legacyProduct) {
        var productKey = TO_WORKLENS_PRODUCT_KEY[legacyProduct.productKey];
        return tslib_1.__assign({ key: legacyProduct.productKey }, exports.AVAILABLE_PRODUCT_DATA_MAP[productKey]);
    })
        .slice(0, isDiscoverSectionEnabled
        ? DISCOVER_PRODUCT_RECOMMENDATION_LIMIT
        : PRODUCT_RECOMMENDATION_LIMIT);
};
function getDiscoverSectionLinks(_a) {
    var isDiscoverMoreForEveryoneEnabled = _a.isDiscoverMoreForEveryoneEnabled, isEmceeLinkEnabled = _a.isEmceeLinkEnabled, product = _a.product;
    var discoverLinks = [];
    var discoverMoreLink = isDiscoverMoreForEveryoneEnabled &&
        getDiscoverMoreLink(discover_filled_1.default);
    var emceeLink = isEmceeLinkEnabled && getEmceeLink(product);
    if (discoverMoreLink) {
        discoverLinks.push(discoverMoreLink);
    }
    if (emceeLink) {
        discoverLinks.push(emceeLink);
    }
    return discoverLinks;
}
exports.getDiscoverSectionLinks = getDiscoverSectionLinks;
exports.getProvisionedProducts = function (availableProducts) {
    var provisionedProducts = {};
    availableProducts.sites.forEach(function (site) {
        return site.availableProducts.forEach(function (product) { return (provisionedProducts[product.productType] = true); });
    });
    return provisionedProducts;
};
exports.getCustomLinkItems = function (list, currentSite) {
    var defaultProductCustomLinks = [
        currentSite.url + "/secure/MyJiraHome.jspa",
        currentSite.url + "/wiki/",
    ];
    return list
        .filter(function (customLink) { return defaultProductCustomLinks.indexOf(customLink.link) === -1; })
        .map(function (customLink) { return ({
        key: customLink.key,
        label: customLink.label,
        Icon: icon_themes_1.createIcon(world_1.default),
        href: customLink.link,
        analyticsAttributes: {
            linkType: customLink.local ? 'customLink' : 'applink',
        },
    }); });
};
exports.getRecentLinkItems = function (list, currentSite) {
    var isAnyJiraProductActive = Boolean(currentSite.products.find(function (product) {
        return product.productType === types_1.WorklensProductType.JIRA_BUSINESS ||
            product.productType === types_1.WorklensProductType.JIRA_SERVICE_DESK ||
            product.productType === types_1.WorklensProductType.JIRA_SOFTWARE;
    }));
    var isConfluenceActive = Boolean(currentSite.products.find(function (product) { return product.productType === types_1.WorklensProductType.CONFLUENCE; }));
    return list
        .filter(function (recent) {
        return ((recent.type === types_1.RecentContainerType.JIRA_PROJECT &&
            isAnyJiraProductActive) ||
            (recent.type === types_1.RecentContainerType.CONFLUENCE_SPACE &&
                isConfluenceActive) ||
            [
                types_1.RecentContainerType.JIRA_PROJECT,
                types_1.RecentContainerType.CONFLUENCE_SPACE,
            ].indexOf(recent.type) === -1);
    })
        .slice(0, 6)
        .map(function (customLink) { return ({
        key: customLink.objectId,
        label: customLink.name,
        Icon: icon_themes_1.createImageIcon(customLink.iconUrl),
        href: customLink.url,
        type: customLink.type,
        description: exports.getObjectTypeLabel(customLink.type),
    }); });
};
//# sourceMappingURL=links.js.map