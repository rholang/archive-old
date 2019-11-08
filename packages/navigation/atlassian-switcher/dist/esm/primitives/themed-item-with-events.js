import ThemedItem from './themed-item';
import { createAndFireNavigationEvent, withAnalyticsEvents, UI_EVENT_TYPE, SWITCHER_ITEM_SUBJECT, } from '../utils/analytics';
var SwitcherItemWithEvents = withAnalyticsEvents({
    onClick: createAndFireNavigationEvent({
        eventType: UI_EVENT_TYPE,
        action: 'clicked',
        actionSubject: SWITCHER_ITEM_SUBJECT,
    }),
})(ThemedItem);
export default SwitcherItemWithEvents;
//# sourceMappingURL=themed-item-with-events.js.map