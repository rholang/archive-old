"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var fetch_1 = require("../utils/fetch");
var as_data_provider_1 = tslib_1.__importStar(require("./as-data-provider"));
var types_1 = require("../types");
var with_cached_1 = require("../utils/with-cached");
var with_handle_optional_cloud_id_1 = tslib_1.__importDefault(require("./with-handle-optional-cloud-id"));
// Recent activity api
var fetchRecentContainers = function (_a) {
    var cloudId = _a.cloudId;
    return fetch_1.fetchJson("/gateway/api/activity/api/client/recent/containers?cloudId=" + cloudId);
};
var RealRecentContainersProvider = as_data_provider_1.default('recentContainers', fetchRecentContainers);
var emptyRecentContainers = {
    status: as_data_provider_1.Status.COMPLETE,
    data: { data: [] },
};
exports.RecentContainersProvider = with_handle_optional_cloud_id_1.default(function (_a) {
    var cloudId = _a.cloudId, disableRecentContainers = _a.disableRecentContainers, children = _a.children;
    if (disableRecentContainers) {
        return react_1.default.createElement(react_1.default.Fragment, null, children(emptyRecentContainers));
    }
    return (react_1.default.createElement(RealRecentContainersProvider, { cloudId: cloudId }, children));
}, emptyRecentContainers.data);
var fetchPermission = with_cached_1.withCached(function (_a) {
    var cloudId = _a.cloudId, permissionId = _a.permissionId;
    return fetch_1.postJson("/gateway/api/permissions/permitted", {
        permissionId: permissionId,
        resourceId: "ari:cloud:platform::site/" + cloudId,
    }).then(function (permission) { return permission.permitted; });
});
exports.UserPermissionProvider = with_handle_optional_cloud_id_1.default(as_data_provider_1.default('permission', fetchPermission, fetchPermission.cached), false);
// Xflow settings api
var fetchXflowSettings = with_cached_1.withCached(function (_a) {
    var cloudId = _a.cloudId;
    return fetch_1.fetchJson("/gateway/api/site/" + cloudId + "/setting/xflow").then(function (xFlowSettings) {
        return xFlowSettings['product-suggestions-enabled'] !== undefined
            ? xFlowSettings['product-suggestions-enabled']
            : true;
    });
});
exports.XFlowSettingsProvider = with_handle_optional_cloud_id_1.default(as_data_provider_1.default('xflowSettings', fetchXflowSettings, fetchXflowSettings.cached), true);
exports.prefetchAll = function (_a) {
    var cloudId = _a.cloudId;
    fetchXflowSettings({ cloudId: cloudId });
    fetchPermission({
        cloudId: cloudId,
        permissionId: types_1.Permissions.ADD_PRODUCTS,
    });
    fetchPermission({ cloudId: cloudId, permissionId: types_1.Permissions.MANAGE });
};
exports.resetAll = function () {
    fetchXflowSettings.reset();
    fetchPermission.reset();
};
//# sourceMappingURL=instance-data-providers.js.map