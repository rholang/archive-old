import { __assign, __values } from "tslib";
import { UIAnalyticsEvent, } from '@atlaskit/analytics-next';
import { version, name } from '../../version.json';
import analyticsActionHandlers from './analyticsHandlers';
import { ANALYTICS_MEDIA_CHANNEL } from '../../components/media-picker-analytics-error-boundary';
// TODO https://product-fabric.atlassian.net/browse/MS-598
var createAndFire = function (payload, handlers) {
    new UIAnalyticsEvent({
        context: [{}],
        handlers: handlers,
        payload: __assign(__assign({}, payload), { attributes: __assign(__assign({}, payload.attributes), { componentName: 'mediaPicker', packageName: name, componentVersion: version }) }),
    }).fire(ANALYTICS_MEDIA_CHANNEL);
};
export default (function (store) { return function (next) { return function (action) {
    var e_1, _a;
    var proxyReactContext = store.getState().config.proxyReactContext;
    if (proxyReactContext &&
        proxyReactContext.getAtlaskitAnalyticsEventHandlers) {
        var atlaskitAnalyticsEventHandlers_1 = proxyReactContext.getAtlaskitAnalyticsEventHandlers();
        try {
            for (var analyticsActionHandlers_1 = __values(analyticsActionHandlers), analyticsActionHandlers_1_1 = analyticsActionHandlers_1.next(); !analyticsActionHandlers_1_1.done; analyticsActionHandlers_1_1 = analyticsActionHandlers_1.next()) {
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