import { Plugin } from 'prosemirror-state';
import { ACTION, ACTION_SUBJECT, EVENT_TYPE, } from '../../analytics';
import { getNodesCount } from '../../../utils/document';
import { isPerformanceObserverAvailable, isPerformanceAPIAvailable, } from '@atlaskit/editor-common';
var FREEZE_CHECK_TIME = 600;
var SLOW_INPUT_TIME = 300;
var dispatchLongTaskEvent = function (dispatchAnalyticsEvent, view, time) {
    var state = view.state;
    return dispatchAnalyticsEvent({
        action: ACTION.BROWSER_FREEZE,
        actionSubject: ACTION_SUBJECT.EDITOR,
        attributes: {
            freezeTime: time,
            nodeSize: state.doc.nodeSize,
            nodes: getNodesCount(state.doc),
        },
        eventType: EVENT_TYPE.OPERATIONAL,
    });
};
export default (function (dispatchAnalyticsEvent) {
    return new Plugin({
        props: isPerformanceAPIAvailable()
            ? {
                handleTextInput: function (view) {
                    var state = view.state;
                    var now = performance.now();
                    requestAnimationFrame(function () {
                        var diff = performance.now() - now;
                        if (diff > SLOW_INPUT_TIME) {
                            dispatchAnalyticsEvent({
                                action: ACTION.SLOW_INPUT,
                                actionSubject: ACTION_SUBJECT.EDITOR,
                                attributes: {
                                    time: diff,
                                    nodeSize: state.doc.nodeSize,
                                    nodes: getNodesCount(state.doc),
                                },
                                eventType: EVENT_TYPE.OPERATIONAL,
                            });
                        }
                    });
                    return false;
                },
            }
            : undefined,
        view: function (view) {
            if (!isPerformanceObserverAvailable()) {
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