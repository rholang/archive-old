"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultAttributes = exports.createAndFire = exports.withAnalyticsEvents = exports.withAnalyticsContext = void 0;

var analytics = _interopRequireWildcard(require("@atlaskit/analytics-next"));

var _version = require("./version.json");

var withAnalyticsContext = analytics.withAnalyticsContext,
    withAnalyticsEvents = analytics.withAnalyticsEvents;
exports.withAnalyticsEvents = withAnalyticsEvents;
exports.withAnalyticsContext = withAnalyticsContext;
var createAndFire = analytics.createAndFireEvent('atlaskit');
exports.createAndFire = createAndFire;
var defaultAttributes = {
  componentName: 'refinement-bar',
  packageName: _version.name,
  packageVersion: _version.version
};
exports.defaultAttributes = defaultAttributes;