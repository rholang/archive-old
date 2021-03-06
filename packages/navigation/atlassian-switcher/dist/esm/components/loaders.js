import Loadable from 'react-loadable';
export var loadAtlassianSwitcher = function () {
    return import(/* webpackChunkName: "@ak-switcher-chunk-atlassian-switcher" */ './atlassian-switcher');
};
export var loadJiraSwitcher = function () {
    return import(/* webpackChunkName: "@ak-switcher-chunk-jira-switcher" */ './jira-switcher');
};
export var loadConfluenceSwitcher = function () {
    return import(/* webpackChunkName: "@ak-switcher-chunk-confluence-switcher" */ './confluence-switcher');
};
export var loadGenericSwitcher = function () {
    return import(/* webpackChunkName: "@ak-switcher-chunk-generic-switcher" */ './generic-switcher');
};
export var AtlassianSwitcherLoader = Loadable({
    loader: loadAtlassianSwitcher,
    loading: function () { return null; },
});
export var JiraSwitcherLoader = Loadable({
    loader: loadJiraSwitcher,
    loading: function () { return null; },
});
export var ConfluenceSwitcherLoader = Loadable({
    loader: loadConfluenceSwitcher,
    loading: function () { return null; },
});
export var GenericSwitcherLoader = Loadable({
    loader: loadGenericSwitcher,
    loading: function () { return null; },
});
//# sourceMappingURL=loaders.js.map