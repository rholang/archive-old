import React from 'react';
import { fetchJson } from '../utils/fetch';
import asDataProvider, { Status, } from './as-data-provider';
export var MANAGE_HREF = '/plugins/servlet/customize-application-navigator';
var fetchCustomLinks = function () {
    return fetchJson("/rest/menu/latest/appswitcher");
};
var RealCustomLinksProvider = asDataProvider('customLinks', fetchCustomLinks);
var emptyCustomLinks = {
    status: Status.COMPLETE,
    data: [],
};
export var CustomLinksProvider = function (_a) {
    var disableCustomLinks = _a.disableCustomLinks, children = _a.children;
    if (disableCustomLinks) {
        return React.createElement(React.Fragment, null, children(emptyCustomLinks));
    }
    return React.createElement(RealCustomLinksProvider, null, children);
};
//# sourceMappingURL=jira-data-providers.js.map