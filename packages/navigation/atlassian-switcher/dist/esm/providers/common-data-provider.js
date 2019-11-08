import * as React from 'react';
import { RecentContainersProvider, UserPermissionProvider, XFlowSettingsProvider, } from './instance-data-providers';
import { RecommendationsEngineProvider } from './recommendations-provider';
import { Permissions, } from '../types';
export default (function (_a) {
    var cloudId = _a.cloudId, children = _a.children, recommendationsFeatureFlags = _a.recommendationsFeatureFlags, disableRecentContainers = _a.disableRecentContainers;
    return (React.createElement(RecentContainersProvider, { cloudId: cloudId, disableRecentContainers: disableRecentContainers }, function (recentContainers) { return (React.createElement(UserPermissionProvider, { cloudId: cloudId, permissionId: Permissions.MANAGE }, function (managePermission) { return (React.createElement(UserPermissionProvider, { cloudId: cloudId, permissionId: Permissions.ADD_PRODUCTS }, function (addProductsPermission) { return (React.createElement(XFlowSettingsProvider, { cloudId: cloudId }, function (isXFlowEnabled) { return (React.createElement(RecommendationsEngineProvider, { featureFlags: recommendationsFeatureFlags }, function (productRecommendations) {
        return children({
            recentContainers: recentContainers,
            managePermission: managePermission,
            addProductsPermission: addProductsPermission,
            isXFlowEnabled: isXFlowEnabled,
            productRecommendations: productRecommendations,
        });
    })); })); })); })); }));
});
//# sourceMappingURL=common-data-provider.js.map