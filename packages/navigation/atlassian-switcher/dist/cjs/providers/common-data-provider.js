"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var instance_data_providers_1 = require("./instance-data-providers");
var recommendations_provider_1 = require("./recommendations-provider");
var types_1 = require("../types");
exports.default = (function (_a) {
    var cloudId = _a.cloudId, children = _a.children, recommendationsFeatureFlags = _a.recommendationsFeatureFlags, disableRecentContainers = _a.disableRecentContainers;
    return (React.createElement(instance_data_providers_1.RecentContainersProvider, { cloudId: cloudId, disableRecentContainers: disableRecentContainers }, function (recentContainers) { return (React.createElement(instance_data_providers_1.UserPermissionProvider, { cloudId: cloudId, permissionId: types_1.Permissions.MANAGE }, function (managePermission) { return (React.createElement(instance_data_providers_1.UserPermissionProvider, { cloudId: cloudId, permissionId: types_1.Permissions.ADD_PRODUCTS }, function (addProductsPermission) { return (React.createElement(instance_data_providers_1.XFlowSettingsProvider, { cloudId: cloudId }, function (isXFlowEnabled) { return (React.createElement(recommendations_provider_1.RecommendationsEngineProvider, { featureFlags: recommendationsFeatureFlags }, function (productRecommendations) {
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