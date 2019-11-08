"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var index_1 = require("./index");
var plugin_1 = require("./plugin");
var analytics_step_1 = require("./analytics-step");
function getAnalyticsState(editorState) {
    return plugin_1.analyticsPluginKey.getState(editorState);
}
function addAnalytics(state, tr, payload, channel) {
    if (channel === void 0) { channel = index_1.editorAnalyticsChannel; }
    var createAnalyticsEvent = getAnalyticsState(state);
    if (createAnalyticsEvent) {
        var storedMarks = tr.storedMarks;
        tr.step(new analytics_step_1.AnalyticsStep(createAnalyticsEvent, [
            {
                payload: payload,
                channel: channel,
            },
        ], tr.selection.$from.pos));
        // When you add a new step all the storedMarks are removed it
        if (storedMarks) {
            tr.setStoredMarks(storedMarks);
        }
    }
    return tr;
}
exports.addAnalytics = addAnalytics;
function withAnalytics(payload, channel) {
    return function (command) { return function (state, dispatch, view) {
        return command(state, function (tr) {
            if (dispatch) {
                if (payload instanceof Function) {
                    var dynamicPayload = payload(state);
                    if (dynamicPayload) {
                        dispatch(addAnalytics(state, tr, dynamicPayload, channel));
                    }
                }
                else {
                    dispatch(addAnalytics(state, tr, payload, channel));
                }
            }
        }, view);
    }; };
}
exports.withAnalytics = withAnalytics;
function ruleWithAnalytics(getPayload) {
    return function (rule) {
        // Monkey patching handler to add analytics
        var handler = rule.handler;
        rule.handler = function (state, match, start, end) {
            var tr = handler(state, match, start, end);
            if (tr) {
                var payload = getPayload(state, match, start, end);
                tr = addAnalytics(state, tr, payload);
            }
            return tr;
        };
        return rule;
    };
}
exports.ruleWithAnalytics = ruleWithAnalytics;
exports.fireAnalyticsEvent = function (createAnalyticsEvent) { return function (_a) {
    var payload = _a.payload, _b = _a.channel, channel = _b === void 0 ? index_1.editorAnalyticsChannel : _b;
    return createAnalyticsEvent && createAnalyticsEvent(payload).fire(channel);
}; };
function getAnalyticsEventsFromTransaction(tr) {
    return tr.steps
        .filter(function (step) { return step instanceof analytics_step_1.AnalyticsStep; })
        .reduce(function (acc, step) { return tslib_1.__spread(acc, step.analyticsEvents); }, []);
}
exports.getAnalyticsEventsFromTransaction = getAnalyticsEventsFromTransaction;
//# sourceMappingURL=utils.js.map