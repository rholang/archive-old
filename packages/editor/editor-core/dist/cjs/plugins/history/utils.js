"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pm_history_types_1 = require("./pm-history-types");
exports.getPmHistoryPlugin = function (state) {
    return state.plugins.find(function (plugin) { return plugin.key === pm_history_types_1.pmHistoryPluginKey; });
};
exports.getPmHistoryPluginState = function (state) {
    var pmHistoryPlugin = exports.getPmHistoryPlugin(state);
    if (!pmHistoryPlugin) {
        return;
    }
    return pmHistoryPlugin.getState(state);
};
//# sourceMappingURL=utils.js.map