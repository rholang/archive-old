"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prosemirror_state_1 = require("prosemirror-state");
var analytics_1 = require("../../analytics");
var document_1 = require("../../../utils/document");
var editor_common_1 = require("@atlaskit/editor-common");
var FREEZE_CHECK_TIME = 600;
var SLOW_INPUT_TIME = 300;
var dispatchLongTaskEvent = function (dispatchAnalyticsEvent, view, time) {
    var state = view.state;
    return dispatchAnalyticsEvent({
        action: analytics_1.ACTION.BROWSER_FREEZE,
        actionSubject: analytics_1.ACTION_SUBJECT.EDITOR,
        attributes: {
            freezeTime: time,
            nodeSize: state.doc.nodeSize,
            nodes: document_1.getNodesCount(state.doc),
        },
        eventType: analytics_1.EVENT_TYPE.OPERATIONAL,
    });
};
exports.default = (function (dispatchAnalyticsEvent) {
    return new prosemirror_state_1.Plugin({
        props: editor_common_1.isPerformanceAPIAvailable()
            ? {
                handleTextInput: function (view) {
                    var state = view.state;
                    var now = performance.now();
                    requestAnimationFrame(function () {
                        var diff = performance.now() - now;
                        if (diff > SLOW_INPUT_TIME) {
                            dispatchAnalyticsEvent({
                                action: analytics_1.ACTION.SLOW_INPUT,
                                actionSubject: analytics_1.ACTION_SUBJECT.EDITOR,
                                attributes: {
                                    time: diff,
                                    nodeSize: state.doc.nodeSize,
                                    nodes: document_1.getNodesCount(state.doc),
                                },
                                eventType: analytics_1.EVENT_TYPE.OPERATIONAL,
                            });
                        }
                    });
                    return false;
                },
            }
            : undefined,
        view: function (view) {
            if (!editor_common_1.isPerformanceObserverAvailable()) {
                return {};
            }
            var observer;
            try {
                var observer_1 = new PerformanceObserver(function (list) {
                    var perfEntries = list.getEntries();
                    for (var i = 0; i < perfEntries.length; i++) {
                        var duration = perfEntries[i].duration;
                        if (duration > FREEZE_CHECK_TIME) {
                            dispatchLongTaskEvent(dispatchAnalyticsEvent, view, duration);
                        }
                    }
                });
                // register observer for long task notifications
                observer_1.observe({ entryTypes: ['longtask'] });
            }
            catch (e) { }
            return {
                destroy: function () {
                    if (observer) {
                        observer.disconnect();
                    }
                },
            };
        },
    });
});
//# sourceMappingURL=frozen-editor.js.map