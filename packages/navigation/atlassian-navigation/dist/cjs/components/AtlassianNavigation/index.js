"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var analytics_namespaced_context_1 = require("@atlaskit/analytics-namespaced-context");
var core_1 = require("@emotion/core");
var theme_1 = require("../../theme");
var styles_1 = require("./styles");
var PrimaryItemsContainer_1 = require("../PrimaryItemsContainer");
var analyticsData = {
    attributes: { navigationLayer: 'global' },
    componentName: 'atlassianNavigation',
};
exports.AtlassianNavigation = function (props) {
    var primaryItems = props.primaryItems, AppSwitcher = props.renderAppSwitcher, Create = props.renderCreate, Help = props.renderHelp, Notifications = props.renderNotifications, ProductHome = props.renderProductHome, Profile = props.renderProfile, Search = props.renderSearch, SignIn = props.renderSignIn, Settings = props.renderSettings, moreLabel = props.moreLabel, theme = props.theme;
    return (core_1.jsx(theme_1.ThemeProvider, { value: theme },
        core_1.jsx(analytics_namespaced_context_1.NavigationAnalyticsContext, { data: analyticsData },
            core_1.jsx("div", { css: styles_1.containerCSS(theme) },
                core_1.jsx("div", { css: styles_1.leftCSS },
                    ProductHome && core_1.jsx(ProductHome, null),
                    core_1.jsx(PrimaryItemsContainer_1.PrimaryItemsContainer, { moreLabel: moreLabel, items: primaryItems })),
                core_1.jsx("div", { css: styles_1.rightCSS },
                    Create && core_1.jsx(Create, null),
                    Search && core_1.jsx(Search, null),
                    AppSwitcher && core_1.jsx(AppSwitcher, null),
                    Notifications && core_1.jsx(Notifications, null),
                    Settings && core_1.jsx(Settings, null),
                    Help && core_1.jsx(Help, null),
                    SignIn && core_1.jsx(SignIn, null),
                    Profile && core_1.jsx(Profile, null))))));
};
exports.AtlassianNavigation.defaultProps = {
    primaryItems: [],
    moreLabel: '…',
    theme: theme_1.defaultTheme,
};
//# sourceMappingURL=index.js.map