import { __read, __spread } from "tslib";
import { editorAnalyticsChannel, } from './index';
import { analyticsPluginKey } from './plugin';
import { AnalyticsStep } from './analytics-step';
function getAnalyticsState(editorState) {
    return analyticsPluginKey.getState(editorState);
}
export function addAnalytics(state, tr, payload, channel) {
    if (channel === void 0) { channel = editorAnalyticsChannel; }
    var createAnalyticsEvent = getAnalyticsState(state);
    if (createAnalyticsEvent) {
        var storedMarks = tr.storedMarks;
        tr.step(new AnalyticsStep(createAnalyticsEvent, [
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
export function withAnalytics(payload, channel) {
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
export function ruleWithAnalytics(getPayload) {
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
export var fireAnalyticsEvent = function (createAnalyticsEvent) { return function (_a) {
    var payload = _a.payload, _b = _a.channel, channel = _b === void 0 ? editorAnalyticsChannel : _b;
    return createAnalyticsEvent && createAnalyticsEvent(payload).fire(channel);
}; };
export function getAnalyticsEventsFromTransaction(tr) {
    return tr.steps
        .filter(function (step) { return step instanceof AnalyticsStep; })
        .reduce(function (acc, step) { return __spread(acc, step.analyticsEvents); }, []);
}
//# sourceMappingURL=utils.js.map