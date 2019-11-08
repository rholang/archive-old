"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var plugin_1 = tslib_1.__importStar(require("./plugin"));
var analytics_listeners_1 = require("@atlaskit/analytics-listeners");
exports.analyticsEventKey = 'EDITOR_ANALYTICS_EVENT';
exports.editorAnalyticsChannel = analytics_listeners_1.FabricChannel.editor;
tslib_1.__exportStar(require("./types"), exports);
tslib_1.__exportStar(require("./utils"), exports);
exports.analyticsPluginKey = plugin_1.analyticsPluginKey;
exports.default = plugin_1.default;
//# sourceMappingURL=index.js.map