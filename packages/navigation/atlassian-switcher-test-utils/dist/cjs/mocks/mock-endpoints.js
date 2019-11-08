"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fetch_mock_1 = tslib_1.__importDefault(require("fetch-mock"));
var mock_data_1 = tslib_1.__importDefault(require("./mock-data"));
var memoize_one_1 = tslib_1.__importDefault(require("memoize-one"));
exports.REQUEST_SLOW = {
    containers: 2000,
    xflow: 1200,
    permitted: 500,
    appswitcher: 1500,
    availableProducts: 1000,
};
exports.REQUEST_MEDIUM = {
    containers: 1000,
    xflow: 600,
    permitted: 250,
    appswitcher: 750,
    availableProducts: 400,
};
exports.REQUEST_FAST = {
    containers: 500,
    xflow: 300,
    permitted: 125,
    appswitcher: 375,
    availableProducts: 200,
};
exports.getMockData = memoize_one_1.default(function (transformer) {
    return transformer ? transformer(mock_data_1.default) : mock_data_1.default;
});
exports.mockEndpoints = function (product, transformer, loadTimes) {
    if (loadTimes === void 0) { loadTimes = {}; }
    var mockData = exports.getMockData(transformer);
    var RECENT_CONTAINERS_DATA = mockData.RECENT_CONTAINERS_DATA, CUSTOM_LINKS_DATA = mockData.CUSTOM_LINKS_DATA, USER_PERMISSION_DATA = mockData.USER_PERMISSION_DATA, XFLOW_SETTINGS = mockData.XFLOW_SETTINGS;
    exports.mockAvailableProductsEndpoint('/gateway/api/worklens/api/available-products', transformer, loadTimes);
    fetch_mock_1.default.get('/gateway/api/activity/api/client/recent/containers?cloudId=some-cloud-id', function () {
        return new Promise(function (res) {
            return setTimeout(function () { return res(RECENT_CONTAINERS_DATA); }, loadTimes && loadTimes.containers);
        });
    }, { method: 'GET', overwriteRoutes: true });
    fetch_mock_1.default.get((product === 'confluence' ? '/wiki' : '') + "/rest/menu/latest/appswitcher", function () {
        return new Promise(function (res) {
            return setTimeout(function () { return res(CUSTOM_LINKS_DATA); }, loadTimes && loadTimes.appswitcher);
        });
    }, { method: 'GET', overwriteRoutes: true });
    fetch_mock_1.default.post('/gateway/api/permissions/permitted', function (_, options) {
        return new Promise(function (res) {
            return setTimeout(function () {
                return res(USER_PERMISSION_DATA[JSON.parse(options.body).permissionId]);
            }, loadTimes && loadTimes.permitted);
        });
    }, { method: 'POST', overwriteRoutes: true });
    fetch_mock_1.default.get('/gateway/api/site/some-cloud-id/setting/xflow', function () {
        return new Promise(function (res) {
            return setTimeout(function () { return res(XFLOW_SETTINGS); }, loadTimes && loadTimes.xflow);
        });
    }, { method: 'GET', overwriteRoutes: true });
};
exports.mockAvailableProductsEndpoint = function (endpoint, transformer, loadTimes) {
    if (loadTimes === void 0) { loadTimes = {}; }
    var mockData = exports.getMockData(transformer);
    var AVAILABLE_PRODUCTS_DATA = mockData.AVAILABLE_PRODUCTS_DATA;
    fetch_mock_1.default.get(endpoint, function () {
        return new Promise(function (res) {
            return setTimeout(function () { return res(AVAILABLE_PRODUCTS_DATA); }, loadTimes && loadTimes.availableProducts);
        });
    }, { method: 'GET', overwriteRoutes: true });
};
//# sourceMappingURL=mock-endpoints.js.map