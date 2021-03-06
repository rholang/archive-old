import { __assign, __values } from "tslib";
import { Plugin, PluginKey } from 'prosemirror-state';
import { isPerformanceAPIAvailable, measureRender, } from '@atlaskit/editor-common';
import { ACTION, EVENT_TYPE } from './types';
import { fireAnalyticsEvent, getAnalyticsEventsFromTransaction } from './utils';
export var analyticsPluginKey = new PluginKey('analyticsPlugin');
function createPlugin(createAnalyticsEvent) {
    if (!createAnalyticsEvent) {
        return;
    }
    var hasRequiredPerformanceAPIs = isPerformanceAPIAvailable();
    return new Plugin({
        key: analyticsPluginKey,
        state: {
            init: function () { return createAnalyticsEvent; },
            apply: function (tr) {
                var e_1, _a;
                var analyticsEventWithChannel = getAnalyticsEventsFromTransaction(tr);
                if (analyticsEventWithChannel.length > 0) {
                    var _loop_1 = function (payload, channel) {
                        // Measures how much time it takes to update the DOM after each ProseMirror document update
                        // that has an analytics event.
                        if (hasRequiredPerformanceAPIs &&
                            tr.docChanged &&
                            payload.action !== ACTION.INSERTED &&
                            payload.action !== ACTION.DELETED) {
                            var measureName = payload.actionSubject + ":" + payload.action + ":" + payload.actionSubjectId;
                            measureRender(measureName, function (duration) {
                                fireAnalyticsEvent(createAnalyticsEvent)({
                                    payload: extendPayload(payload, duration),
                                    channel: channel,
                                });
                            });
                        }
                    };
                    try {
                        for (var analyticsEventWithChannel_1 = __values(analyticsEventWithChannel), analyticsEventWithChannel_1_1 = analyticsEventWithChannel_1.next(); !analyticsEventWithChannel_1_1.done; analyticsEventWithChannel_1_1 = analyticsEventWithChannel_1.next()) {
                            var _b = analyticsEventWithChannel_1_1.value, payload = _b.payload, channel = _b.channel;
                            _loop_1(payload, channel);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (analyticsEventWithChannel_1_1 && !analyticsEventWithChannel_1_1.done && (_a = analyticsEventWithChannel_1.return)) _a.call(analyticsEventWithChannel_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                return createAnalyticsEvent;
            },
        },
    });
}
var analyticsPlugin = function (createAnalyticsEvent) { return ({
    name: 'analytics',
    pmPlugins: function () {
        return [
            {
                name: 'analyticsPlugin',
                plugin: function () { return createPlugin(createAnalyticsEvent); },
            },
        ];
    },
}); };
export function extendPayload(payload, duration) {
    return __assign(__assign({}, payload), { attributes: __assign(__assign({}, payload.attributes), { duration: duration }), eventType: EVENT_TYPE.OPERATIONAL });
}
export default analyticsPlugin;
//# sourceMappingURL=plugin.js.map