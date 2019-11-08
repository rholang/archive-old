"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var lodash_isequal_1 = tslib_1.__importDefault(require("lodash.isequal"));
var primitives_1 = require("../primitives");
var analytics_1 = require("../utils/analytics");
var performance_now_1 = tslib_1.__importDefault(require("../utils/performance-now"));
var url_to_hostname_1 = require("../utils/url-to-hostname");
var noop = function () { return void 0; };
var getAnalyticsContext = function (itemsCount) { return (tslib_1.__assign({}, analytics_1.analyticsAttributes({
    itemsCount: itemsCount,
}))); };
var getItemAnalyticsContext = function (groupIndex, id, type, href, productType, extraAttributes) { return (tslib_1.__assign({}, analytics_1.analyticsAttributes(tslib_1.__assign({ groupIndex: groupIndex, itemId: id, itemType: type, domain: url_to_hostname_1.urlToHostname(href), productType: productType }, extraAttributes)))); };
var Switcher = /** @class */ (function (_super) {
    tslib_1.__extends(Switcher, _super);
    function Switcher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.triggerXFlow = function (key) { return function (event, analyticsEvent) {
            var triggerXFlow = _this.props.triggerXFlow;
            triggerXFlow(key, 'atlassian-switcher', event, analyticsEvent);
        }; };
        /** https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/6522/issue-prst-13-adding-discover-more-button/
         * Currently Atlaskit's Item prioritises the usage of href over onClick in the case the href is a valid value.
         *
         *  The Discover more link is rendered with href=”” and onClick={actualImplementation}. Because the value of
         *  href is not valid for this case the item will instead call the onClick callback provided.
         *  */
        _this.onDiscoverMoreClicked = function (event, analyticsEvent) {
            var onDiscoverMoreClicked = _this.props.onDiscoverMoreClicked;
            onDiscoverMoreClicked(event, analyticsEvent);
        };
        return _this;
    }
    Switcher.prototype.componentDidMount = function () {
        this.mountedAt = performance_now_1.default();
    };
    Switcher.prototype.shouldComponentUpdate = function (nextProps) {
        return !lodash_isequal_1.default(this.props, nextProps);
    };
    Switcher.prototype.timeSinceMounted = function () {
        return this.mountedAt ? Math.round(performance_now_1.default() - this.mountedAt) : 0;
    };
    Switcher.prototype.render = function () {
        var _this = this;
        var _a = this.props, messages = _a.messages, licensedProductLinks = _a.licensedProductLinks, suggestedProductLinks = _a.suggestedProductLinks, fixedLinks = _a.fixedLinks, adminLinks = _a.adminLinks, recentLinks = _a.recentLinks, customLinks = _a.customLinks, manageLink = _a.manageLink, hasLoaded = _a.hasLoaded, hasLoadedCritical = _a.hasLoadedCritical, disableHeadings = _a.disableHeadings, appearance = _a.appearance, isDiscoverSectionEnabled = _a.isDiscoverSectionEnabled, discoverSectionLinks = _a.discoverSectionLinks;
        /**
         * It is essential that switchToLinks reflects the order corresponding nav items
         * are rendered below in the 'Switch to' section.
         */
        var switchToLinks = tslib_1.__spread(licensedProductLinks, suggestedProductLinks, fixedLinks, adminLinks);
        var itemsCount = switchToLinks.length +
            recentLinks.length +
            customLinks.length +
            discoverSectionLinks.length;
        var firstContentArrived = Boolean(licensedProductLinks.length);
        var numberOfSites = firstContentArrived ? 1 : 0;
        if (licensedProductLinks) {
            var uniqueSets_1 = {};
            licensedProductLinks.forEach(function (link) {
                (link.childItems || []).forEach(function (item) {
                    uniqueSets_1[item.label] = true;
                });
            });
            var numbberOfUniqueSites = Object.keys(uniqueSets_1).length;
            if (numbberOfUniqueSites > 0) {
                numberOfSites = numbberOfUniqueSites;
            }
        }
        return (React.createElement(analytics_1.NavigationAnalyticsContext, { data: getAnalyticsContext(itemsCount) },
            React.createElement(primitives_1.SwitcherWrapper, { appearance: appearance },
                hasLoaded && (React.createElement(analytics_1.ViewedTracker, { subject: analytics_1.SWITCHER_SUBJECT, data: {
                        licensedProducts: licensedProductLinks.map(function (item) { return item.key; }),
                        suggestedProducts: suggestedProductLinks.map(function (item) { return item.key; }),
                        adminLinks: adminLinks.map(function (item) { return item.key; }),
                        fixedLinks: fixedLinks.map(function (item) { return item.key; }),
                        numberOfSites: numberOfSites,
                    } })),
                firstContentArrived && (React.createElement(analytics_1.RenderTracker, { subject: analytics_1.SWITCHER_SUBJECT, data: { duration: this.timeSinceMounted() } })),
                React.createElement(primitives_1.Section, { sectionId: "switchTo", title: disableHeadings ? null : (React.createElement(primitives_1.FormattedMessage, tslib_1.__assign({}, messages.switchTo))) },
                    licensedProductLinks.map(function (item, groupIndex) { return (React.createElement(analytics_1.NavigationAnalyticsContext, { key: item.key, data: getItemAnalyticsContext(groupIndex, item.key, 'product', item.href, item.productType) },
                        React.createElement(primitives_1.SwitcherItemWithDropdown, { icon: React.createElement(item.Icon, { theme: "product" }), childIcon: React.createElement(item.Icon, { theme: "subtle" }), description: item.description, href: item.href, childItems: item.childItems, tooltipContent: React.createElement(primitives_1.FormattedMessage, tslib_1.__assign({}, messages.showMoreSites)) }, item.label))); }),
                    !isDiscoverSectionEnabled &&
                        suggestedProductLinks.map(function (item, groupIndex) { return (React.createElement(analytics_1.NavigationAnalyticsContext, { key: item.key, data: getItemAnalyticsContext(groupIndex, item.key, 'try', item.href) },
                            React.createElement(primitives_1.SwitcherThemedItemWithEvents, { icon: React.createElement(item.Icon, { theme: "product" }), onClick: _this.triggerXFlow(item.key) },
                                item.label,
                                React.createElement(primitives_1.TryLozenge, null,
                                    React.createElement(primitives_1.FormattedMessage, tslib_1.__assign({}, messages.try)))))); }),
                    fixedLinks.map(function (item, groupIndex) { return (React.createElement(analytics_1.NavigationAnalyticsContext, { key: item.key, data: getItemAnalyticsContext(groupIndex, item.key, 'product', item.href) },
                        React.createElement(primitives_1.SwitcherThemedItemWithEvents, { icon: React.createElement(item.Icon, { theme: "product" }), href: item.href, onClick: item.key === 'discover-more'
                                ? _this.onDiscoverMoreClicked
                                : noop }, item.label))); }),
                    adminLinks.map(function (item, groupIndex) { return (React.createElement(analytics_1.NavigationAnalyticsContext, { key: item.key, data: getItemAnalyticsContext(groupIndex, item.key, 'admin', item.href) },
                        React.createElement(primitives_1.SwitcherThemedItemWithEvents, { icon: React.createElement(item.Icon, { theme: "admin" }), href: item.href }, item.label))); })),
                ")}",
                isDiscoverSectionEnabled && (React.createElement(primitives_1.Section, { sectionId: "discover", title: disableHeadings ? null : (React.createElement(primitives_1.FormattedMessage, tslib_1.__assign({}, messages.discover))) },
                    suggestedProductLinks.map(function (item, groupIndex) { return (React.createElement(analytics_1.NavigationAnalyticsContext, { key: item.key, data: getItemAnalyticsContext(groupIndex, item.key, 'discover', item.href) },
                        React.createElement(primitives_1.SwitcherThemedItemWithEvents, { icon: React.createElement(item.Icon, { theme: "recommendedProduct" }), description: item.description, onClick: _this.triggerXFlow(item.key) },
                            item.label,
                            groupIndex === 0 && (React.createElement(primitives_1.TryLozenge, { isBold: false },
                                React.createElement(primitives_1.FormattedMessage, tslib_1.__assign({}, messages.try))))))); }),
                    discoverSectionLinks.map(function (item, groupIndex) { return (React.createElement(analytics_1.NavigationAnalyticsContext, { key: item.key, data: getItemAnalyticsContext(groupIndex, item.key, 'discover-fixed-links', item.href) },
                        React.createElement(primitives_1.SwitcherThemedItemWithEvents, { icon: React.createElement(item.Icon, { theme: "discover" }), href: item.href, onClick: item.key === 'discover-more'
                                ? _this.onDiscoverMoreClicked
                                : noop }, item.label))); }))),
                React.createElement(primitives_1.Section, { sectionId: "recent", title: disableHeadings ? null : React.createElement(primitives_1.FormattedMessage, tslib_1.__assign({}, messages.recent)) }, recentLinks.map(function (_a, groupIndex) {
                    var key = _a.key, label = _a.label, href = _a.href, type = _a.type, description = _a.description, Icon = _a.Icon;
                    return (React.createElement(analytics_1.NavigationAnalyticsContext, { key: key, data: getItemAnalyticsContext(groupIndex, type, 'recent', href) },
                        React.createElement(primitives_1.SwitcherThemedItemWithEvents, { icon: React.createElement(Icon, { theme: "recent" }), description: description, href: href }, label)));
                })),
                React.createElement(primitives_1.Section, { sectionId: "customLinks", title: disableHeadings ? null : React.createElement(primitives_1.FormattedMessage, tslib_1.__assign({}, messages.more)) }, customLinks.map(function (_a, groupIndex) {
                    var analyticsAttributes = _a.analyticsAttributes, label = _a.label, href = _a.href, Icon = _a.Icon;
                    return (
                    // todo: id in SwitcherItem should be consumed from custom link resolver
                    React.createElement(analytics_1.NavigationAnalyticsContext, { key: groupIndex + '.' + label, data: getItemAnalyticsContext(groupIndex, null, 'customLink', href, undefined, analyticsAttributes) },
                        React.createElement(primitives_1.SwitcherThemedItemWithEvents, { icon: React.createElement(Icon, { theme: "custom" }), href: href }, label)));
                })),
                !hasLoadedCritical && React.createElement(primitives_1.Skeleton, null),
                manageLink && React.createElement(primitives_1.ManageButton, { href: manageLink }))));
    };
    Switcher.defaultProps = {
        appearance: 'drawer',
    };
    return Switcher;
}(React.Component));
exports.default = Switcher;
//# sourceMappingURL=switcher.js.map