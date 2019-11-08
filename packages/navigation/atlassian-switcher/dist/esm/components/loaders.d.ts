/// <reference types="react" />
/// <reference types="react-intl" />
/// <reference types="@emotion/core" />
import Loadable from 'react-loadable';
export declare const loadAtlassianSwitcher: () => Promise<typeof import("./atlassian-switcher")>;
export declare const loadJiraSwitcher: () => Promise<typeof import("./jira-switcher")>;
export declare const loadConfluenceSwitcher: () => Promise<typeof import("./confluence-switcher")>;
export declare const loadGenericSwitcher: () => Promise<typeof import("./generic-switcher")>;
export declare const AtlassianSwitcherLoader: (import("react").ComponentClass<import("../types").AtlassianSwitcherProps, any> & Loadable.LoadableComponent) | (import("react").FunctionComponent<import("../types").AtlassianSwitcherProps> & Loadable.LoadableComponent);
export declare const JiraSwitcherLoader: (import("react").ComponentClass<import("../theme/types").WithTheme & {
    cloudId: string;
    messages: ReactIntl.Messages;
    features: import("../types").FeatureMap;
    triggerXFlow: import("../types").TriggerXFlowCallback;
    onDiscoverMoreClicked: import("../types").DiscoverMoreCallback;
    recommendationsFeatureFlags?: import("../types").RecommendationsFeatureFlags | undefined;
}, any> & Loadable.LoadableComponent) | (import("react").FunctionComponent<import("../theme/types").WithTheme & {
    cloudId: string;
    messages: ReactIntl.Messages;
    features: import("../types").FeatureMap;
    triggerXFlow: import("../types").TriggerXFlowCallback;
    onDiscoverMoreClicked: import("../types").DiscoverMoreCallback;
    recommendationsFeatureFlags?: import("../types").RecommendationsFeatureFlags | undefined;
}> & Loadable.LoadableComponent);
export declare const ConfluenceSwitcherLoader: (import("react").ComponentClass<import("../theme/types").WithTheme & {
    cloudId: string;
    messages: ReactIntl.Messages;
    features: import("../types").FeatureMap;
    triggerXFlow: import("../types").TriggerXFlowCallback;
    onDiscoverMoreClicked: import("../types").DiscoverMoreCallback;
    recommendationsFeatureFlags?: import("../types").RecommendationsFeatureFlags | undefined;
}, any> & Loadable.LoadableComponent) | (import("react").FunctionComponent<import("../theme/types").WithTheme & {
    cloudId: string;
    messages: ReactIntl.Messages;
    features: import("../types").FeatureMap;
    triggerXFlow: import("../types").TriggerXFlowCallback;
    onDiscoverMoreClicked: import("../types").DiscoverMoreCallback;
    recommendationsFeatureFlags?: import("../types").RecommendationsFeatureFlags | undefined;
}> & Loadable.LoadableComponent);
export declare const GenericSwitcherLoader: (import("react").ComponentClass<import("../theme/types").WithTheme & {
    cloudId?: string | undefined;
    messages: ReactIntl.Messages;
    features: import("../types").FeatureMap;
    triggerXFlow: import("../types").TriggerXFlowCallback;
    onDiscoverMoreClicked: import("../types").DiscoverMoreCallback;
    product: import("../types").Product.BITBUCKET | import("../types").Product.HOME | import("../types").Product.SITE_ADMIN | import("../types").Product.TRUSTED_ADMIN;
    availableProductsDataProvider?: import("../providers/create-data-provider").ExportedDataProvider<import("../types").AvailableProductsResponse> | undefined;
}, any> & Loadable.LoadableComponent) | (import("react").FunctionComponent<import("../theme/types").WithTheme & {
    cloudId?: string | undefined;
    messages: ReactIntl.Messages;
    features: import("../types").FeatureMap;
    triggerXFlow: import("../types").TriggerXFlowCallback;
    onDiscoverMoreClicked: import("../types").DiscoverMoreCallback;
    product: import("../types").Product.BITBUCKET | import("../types").Product.HOME | import("../types").Product.SITE_ADMIN | import("../types").Product.TRUSTED_ADMIN;
    availableProductsDataProvider?: import("../providers/create-data-provider").ExportedDataProvider<import("../types").AvailableProductsResponse> | undefined;
}> & Loadable.LoadableComponent);
