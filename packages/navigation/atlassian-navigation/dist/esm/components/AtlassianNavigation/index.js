/** @jsx jsx */
import { NavigationAnalyticsContext } from '@atlaskit/analytics-namespaced-context';
import { jsx } from '@emotion/core';
import { ThemeProvider, defaultTheme } from '../../theme';
import { containerCSS, leftCSS, rightCSS } from './styles';
import { PrimaryItemsContainer } from '../PrimaryItemsContainer';
var analyticsData = {
    attributes: { navigationLayer: 'global' },
    componentName: 'atlassianNavigation',
};
export var AtlassianNavigation = function (props) {
    var primaryItems = props.primaryItems, AppSwitcher = props.renderAppSwitcher, Create = props.renderCreate, Help = props.renderHelp, Notifications = props.renderNotifications, ProductHome = props.renderProductHome, Profile = props.renderProfile, Search = props.renderSearch, SignIn = props.renderSignIn, Settings = props.renderSettings, moreLabel = props.moreLabel, theme = props.theme;
    return (jsx(ThemeProvider, { value: theme },
        jsx(NavigationAnalyticsContext, { data: analyticsData },
            jsx("div", { css: containerCSS(theme) },
                jsx("div", { css: leftCSS },
                    ProductHome && jsx(ProductHome, null),
                    jsx(PrimaryItemsContainer, { moreLabel: moreLabel, items: primaryItems })),
                jsx("div", { css: rightCSS },
                    Create && jsx(Create, null),
                    Search && jsx(Search, null),
                    AppSwitcher && jsx(AppSwitcher, null),
                    Notifications && jsx(Notifications, null),
                    Settings && jsx(Settings, null),
                    Help && jsx(Help, null),
                    SignIn && jsx(SignIn, null),
                    Profile && jsx(Profile, null))))));
};
AtlassianNavigation.defaultProps = {
    primaryItems: [],
    moreLabel: '…',
    theme: defaultTheme,
};
//# sourceMappingURL=index.js.map