"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_state_1 = require("prosemirror-state");
var editor_common_1 = require("@atlaskit/editor-common");
var types_1 = require("./types");
var utils_1 = require("./utils");
exports.analyticsPluginKey = new prosemirror_state_1.PluginKey('analyticsPlugin');
function createPlugin(createAnalyticsEvent) {
    if (!createAnalyticsEvent) {
        return;
    }
    var hasRequiredPerformanceAPIs = editor_common_1.isPerformanceAPIAvailable();
    return new prosemirror_state_1.Plugin({
        key: exports.analyticsPluginKey,
        state: {
            init: function () { return createAnalyticsEvent; },
            apply: function (tr) {
                var e_1, _a;
                var analyticsEventWithChannel = utils_1.getAnalyticsEventsFromTransaction(tr);
                if (analyticsEventWithChannel.length > 0) {
                    var _loop_1 = function (payload, channel) {
                        // Measures how much time it takes to update the DOM after each ProseMirror document update
                        // that has an analytics event.
                        if (hasRequiredPerformanceAPIs &&
                            tr.docChanged &&
                            payload.action !== types_1.ACTION.INSERTED &&
                            payload.action !== types_1.ACTION.DELETED) {
                            var measureName = payload.actionSubject + ":" + payload.action + ":" + payload.actionSubjectId;
                            editor_common_1.measureRender(measureName, function (duration) {
                                utils_1.fireAnalyticsEvent(createAnalyticsEvent)({
                                    payload: extendPayload(payload, duration),
                                    channel: channel,
                                });
                            });
                        }
                    };
                    try {
                        for (var analyticsEventWithChannel_1 = tslib_1.__values(analyticsEventWithChannel), analyticsEventWithChannel_1_1 = analyticsEventWithChannel_1.next(); !analyticsEventWithChannel_1_1.done; analyticsEventWithChannel_1_1 = analyticsEventWithChannel_1.next()) {
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
function extendPayload(payload, duration) {
    return tslib_1.__assign(tslib_1.__assign({}, payload), { attributes: tslib_1.__assign(tslib_1.__assign({}, payload.attributes), { duration: duration }), eventType: types_1.EVENT_TYPE.OPERATIONAL });
}
exports.extendPayload = extendPayload;
exports.default = analyticsPlugin;
//# sourceMappingURL=plugin.js.map