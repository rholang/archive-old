import { __assign } from "tslib";
import { packageAttributes } from './index';
import { MediaViewerComponent } from '../media-viewer';
export function closedEvent(input) {
    return {
        eventType: 'ui',
        action: 'closed',
        actionSubject: 'mediaViewer',
        actionSubjectId: undefined,
        attributes: __assign(__assign({}, packageAttributes), { sessionDurationMs: MediaViewerComponent.timerElapsed(), input: input }),
    };
}
//# sourceMappingURL=closed.js.map