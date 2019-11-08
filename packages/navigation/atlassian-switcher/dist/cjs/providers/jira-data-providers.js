"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var fetch_1 = require("../utils/fetch");
var as_data_provider_1 = tslib_1.__importStar(require("./as-data-provider"));
exports.MANAGE_HREF = '/plugins/servlet/customize-application-navigator';
var fetchCustomLinks = function () {
    return fetch_1.fetchJson("/rest/menu/latest/appswitcher");
};
var RealCustomLinksProvider = as_data_provider_1.default('customLinks', fetchCustomLinks);
var emptyCustomLinks = {
    status: as_data_provider_1.Status.COMPLETE,
    data: [],
};
exports.CustomLinksProvider = function (_a) {
    var disableCustomLinks = _a.disableCustomLinks, children = _a.children;
    if (disableCustomLinks) {
        return react_1.default.createElement(react_1.default.Fragment, null, children(emptyCustomLinks));
    }
    return react_1.default.createElement(RealCustomLinksProvider, null, children);
};
//# sourceMappingURL=jira-data-providers.js.map