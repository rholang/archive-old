"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

/*
cleanProps removes props added by the withAnalytics HOC from an object
*/
if (process.env.NODE_ENV !== 'production' && !process.env.CI) {
  // eslint-disable-next-line no-console
  console.warn('The @atlaskit/analytics package has been deprecated. Please use the @atlaskit/analytics-next package instead.');
}

function cleanProps(props) {
  /* eslint-disable no-unused-vars */
  var analyticsId = props.analyticsId,
      analyticsData = props.analyticsData,
      delegateAnalyticsEvent = props.delegateAnalyticsEvent,
      fireAnalyticsEvent = props.fireAnalyticsEvent,
      firePrivateAnalyticsEvent = props.firePrivateAnalyticsEvent,
      getParentAnalyticsData = props.getParentAnalyticsData,
      cleanedProps = (0, _objectWithoutProperties2.default)(props, ["analyticsId", "analyticsData", "delegateAnalyticsEvent", "fireAnalyticsEvent", "firePrivateAnalyticsEvent", "getParentAnalyticsData"]);
  /* eslint-enable no-unused-vars */

  return cleanedProps;
}

var _default = cleanProps;
exports.default = _default;