"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RecentContainerType;
(function (RecentContainerType) {
    RecentContainerType["JIRA_PROJECT"] = "jira-project";
    RecentContainerType["CONFLUENCE_SPACE"] = "confluence-space";
})(RecentContainerType = exports.RecentContainerType || (exports.RecentContainerType = {}));
var Permissions;
(function (Permissions) {
    Permissions["MANAGE"] = "manage";
    Permissions["CAN_INVITE_USERS"] = "invite-users";
    Permissions["ADD_PRODUCTS"] = "add-products";
})(Permissions = exports.Permissions || (exports.Permissions = {}));
var Product;
(function (Product) {
    Product["BITBUCKET"] = "bitbucket";
    Product["CONFLUENCE"] = "confluence";
    Product["HOME"] = "home";
    Product["JIRA"] = "jira";
    Product["SITE_ADMIN"] = "site-admin";
    Product["TRUSTED_ADMIN"] = "trusted-admin";
})(Product = exports.Product || (exports.Product = {}));
var Feature;
(function (Feature) {
    Feature["disableCustomLinks"] = "disableCustomLinks";
    Feature["disableRecentContainers"] = "disableRecentContainers";
    Feature["disableHeadings"] = "disableHeadings";
    Feature["xflow"] = "xflow";
    Feature["isDiscoverMoreForEveryoneEnabled"] = "isDiscoverMoreForEveryoneEnabled";
    // EMCEE stands for Embedded Marketplace with in the product
    Feature["isEmceeLinkEnabled"] = "isEmceeLinkEnabled";
    // Enable Discover section - group suggested product links in Discover section
    Feature["isDiscoverSectionEnabled"] = "isDiscoverSectionEnabled";
})(Feature = exports.Feature || (exports.Feature = {}));
var WorklensProductType;
(function (WorklensProductType) {
    WorklensProductType["JIRA_BUSINESS"] = "JIRA_BUSINESS";
    WorklensProductType["JIRA_SERVICE_DESK"] = "JIRA_SERVICE_DESK";
    WorklensProductType["JIRA_SOFTWARE"] = "JIRA_SOFTWARE";
    WorklensProductType["CONFLUENCE"] = "CONFLUENCE";
    WorklensProductType["OPSGENIE"] = "OPSGENIE";
    WorklensProductType["BITBUCKET"] = "BITBUCKET";
    WorklensProductType["STATUSPAGE"] = "STATUSPAGE";
    WorklensProductType["TRELLO"] = "TRELLO";
})(WorklensProductType = exports.WorklensProductType || (exports.WorklensProductType = {}));
var ProductKey;
(function (ProductKey) {
    ProductKey["CONFLUENCE"] = "confluence.ondemand";
    ProductKey["JIRA_CORE"] = "jira-core.ondemand";
    ProductKey["JIRA_SOFTWARE"] = "jira-software.ondemand";
    ProductKey["JIRA_SERVICE_DESK"] = "jira-servicedesk.ondemand";
    ProductKey["OPSGENIE"] = "opsgenie";
})(ProductKey = exports.ProductKey || (exports.ProductKey = {}));
//# sourceMappingURL=types.js.map