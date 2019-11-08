import React from 'react';
import { fetchJson, postJson } from '../utils/fetch';
import asDataProvider, { Status, } from './as-data-provider';
import { Permissions, } from '../types';
import { withCached } from '../utils/with-cached';
import withHandleOptionalCloudId from './with-handle-optional-cloud-id';
// Recent activity api
var fetchRecentContainers = function (_a) {
    var cloudId = _a.cloudId;
    return fetchJson("/gateway/api/activity/api/client/recent/containers?cloudId=" + cloudId);
};
var RealRecentContainersProvider = asDataProvider('recentContainers', fetchRecentContainers);
var emptyRecentContainers = {
    status: Status.COMPLETE,
    data: { data: [] },
};
export var RecentContainersProvider = withHandleOptionalCloudId(function (_a) {
    var cloudId = _a.cloudId, disableRecentContainers = _a.disableRecentContainers, children = _a.children;
    if (disableRecentContainers) {
        return React.createElement(React.Fragment, null, children(emptyRecentContainers));
    }
    return (React.createElement(RealRecentContainersProvider, { cloudId: cloudId }, children));
}, emptyRecentContainers.data);
var fetchPermission = withCached(function (_a) {
    var cloudId = _a.cloudId, permissionId = _a.permissionId;
    return postJson("/gateway/api/permissions/permitted", {
        permissionId: permissionId,
        resourceId: "ari:cloud:platform::site/" + cloudId,
    }).then(function (permission) { return permission.permitted; });
});
export var UserPermissionProvider = withHandleOptionalCloudId(asDataProvider('permission', fetchPermission, fetchPermission.cached), false);
// Xflow settings api
var fetchXflowSettings = withCached(function (_a) {
    var cloudId = _a.cloudId;
    return fetchJson("/gateway/api/site/" + cloudId + "/setting/xflow").then(function (xFlowSettings) {
        return xFlowSettings['product-suggestions-enabled'] !== undefined
            ? xFlowSettings['product-suggestions-enabled']
            : true;
    });
});
export var XFlowSettingsProvider = withHandleOptionalCloudId(asDataProvider('xflowSettings', fetchXflowSettings, fetchXflowSettings.cached), true);
export var prefetchAll = function (_a) {
    var cloudId = _a.cloudId;
    fetchXflowSettings({ cloudId: cloudId });
    fetchPermission({
        cloudId: cloudId,
        permissionId: Permissions.ADD_PRODUCTS,
    });
    fetchPermission({ cloudId: cloudId, permissionId: Permissions.MANAGE });
};
export var resetAll = function () {
    fetchXflowSettings.reset();
    fetchPermission.reset();
};
//# sourceMappingURL=instance-data-providers.js.map