"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeExcludes = function (plugins, excludes) {
    if (excludes) {
        return plugins.filter(function (plugin) { return excludes.indexOf(plugin.name) === -1; });
    }
    return plugins;
};
exports.enableExperimental = function (plugins, experimental, experimentalPluginMap) {
    if (experimental && experimental.length) {
        experimental.map(function (pluginName) {
            var plugin = experimentalPluginMap.get(pluginName);
            if (plugin) {
                plugins.push(plugin);
            }
        });
    }
    return plugins;
};
//# sourceMappingURL=utils.js.map