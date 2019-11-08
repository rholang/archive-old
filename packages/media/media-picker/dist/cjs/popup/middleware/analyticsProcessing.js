"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var analytics_next_1 = require("@atlaskit/analytics-next");
var version_json_1 = require("../../version.json");
var analyticsHandlers_1 = tslib_1.__importDefault(require("./analyticsHandlers"));
var media_picker_analytics_error_boundary_1 = require("../../components/media-picker-analytics-error-boundary");
// TODO https://product-fabric.atlassian.net/browse/MS-598
var createAndFire = function (payload, handlers) {
    new analytics_next_1.UIAnalyticsEvent({
        context: [{}],
        handlers: handlers,
        payload: tslib_1.__assign(tslib_1.__assign({}, payload), { attributes: tslib_1.__assign(tslib_1.__assign({}, payload.attributes), { componentName: 'mediaPicker', packageName: version_json_1.name, componentVersion: version_json_1.version }) }),
    }).fire(media_picker_analytics_error_boundary_1.ANALYTICS_MEDIA_CHANNEL);
};
exports.default = (function (store) { return function (next) { return function (action) {
    var e_1, _a;
    var proxyReactContext = store.getState().config.proxyReactContext;
    if (proxyReactContext &&
        proxyReactContext.getAtlaskitAnalyticsEventHandlers) {
        var atlaskitAnalyticsEventHandlers_1 = proxyReactContext.getAtlaskitAnalyticsEventHandlers();
        try {
            for (var analyticsActionHandlers_1 = tslib_1.__values(analyticsHandlers_1.default), analyticsActionHandlers_1_1 = analyticsActionHandlers_1.next(); !analyticsActionHandlers_1_1.done; analyticsActionHandlers_1_1 = analyticsActionHandlers_1.next()) {
                var handler = analyticsActionHandlers_1_1.value;
                var payloads = handler(action, store) || [];
                payloads.forEach(function (payload) {
                    return createAndFire(payload, atlaskitAnalyticsEventHandlers_1);
                });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (analyticsActionHandlers_1_1 && !analyticsActionHandlers_1_1.done && (_a = analyticsActionHandlers_1.return)) _a.call(analyticsActionHandlers_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    return next(action);
}; }; });
//# sourceMappingURL=analyticsProcessing.js.map