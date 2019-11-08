"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_loadable_1 = tslib_1.__importDefault(require("react-loadable"));
exports.loadAtlassianSwitcher = function () {
    return Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName: "@ak-switcher-chunk-atlassian-switcher" */ './atlassian-switcher')); });
};
exports.loadJiraSwitcher = function () {
    return Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName: "@ak-switcher-chunk-jira-switcher" */ './jira-switcher')); });
};
exports.loadConfluenceSwitcher = function () {
    return Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName: "@ak-switcher-chunk-confluence-switcher" */ './confluence-switcher')); });
};
exports.loadGenericSwitcher = function () {
    return Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName: "@ak-switcher-chunk-generic-switcher" */ './generic-switcher')); });
};
exports.AtlassianSwitcherLoader = react_loadable_1.default({
    loader: exports.loadAtlassianSwitcher,
    loading: function () { return null; },
});
exports.JiraSwitcherLoader = react_loadable_1.default({
    loader: exports.loadJiraSwitcher,
    loading: function () { return null; },
});
exports.ConfluenceSwitcherLoader = react_loadable_1.default({
    loader: exports.loadConfluenceSwitcher,
    loading: function () { return null; },
});
exports.GenericSwitcherLoader = react_loadable_1.default({
    loader: exports.loadGenericSwitcher,
    loading: function () { return null; },
});
//# sourceMappingURL=loaders.js.map