"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var themed_item_1 = tslib_1.__importDefault(require("./themed-item"));
var analytics_1 = require("../utils/analytics");
var SwitcherItemWithEvents = analytics_1.withAnalyticsEvents({
    onClick: analytics_1.createAndFireNavigationEvent({
        eventType: analytics_1.UI_EVENT_TYPE,
        action: 'clicked',
        actionSubject: analytics_1.SWITCHER_ITEM_SUBJECT,
    }),
})(themed_item_1.default);
exports.default = SwitcherItemWithEvents;
//# sourceMappingURL=themed-item-with-events.js.map