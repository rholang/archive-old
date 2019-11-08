"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withGlobalItemAnalytics = exports.navigationExpandedCollapsed = exports.navigationChannel = void 0;

var _analyticsNext = require("@atlaskit/analytics-next");

var navigationChannel = 'navigation';
exports.navigationChannel = navigationChannel;

var navigationExpandedCollapsed = function navigationExpandedCollapsed(createAnalyticsEvent, _ref) {
  var isCollapsed = _ref.isCollapsed,
      trigger = _ref.trigger;
  return createAnalyticsEvent({
    action: isCollapsed ? 'collapsed' : 'expanded',
    actionSubject: 'productNavigation',
    attributes: {
      trigger: trigger
    }
  }).fire(navigationChannel);
};
/** Internal analytics fired on the fabric navigation channel. Not intended to
 * pass event instances to consumers.
 */


exports.navigationExpandedCollapsed = navigationExpandedCollapsed;

var withGlobalItemAnalytics = function withGlobalItemAnalytics(Component) {
  return (0, _analyticsNext.withAnalyticsEvents)({
    onClick: function onClick(createAnalyticsEvent, props) {
      if (props.id) {
        var event = createAnalyticsEvent({
          action: 'clicked',
          actionSubject: 'navigationItem',
          actionSubjectId: props.id,
          attributes: {
            navigationLayer: 'global'
          }
        });
        event.fire(navigationChannel);
      }

      return null;
    }
  })(Component);
};

exports.withGlobalItemAnalytics = withGlobalItemAnalytics;