import * as analytics from '@atlaskit/analytics-next';
import { name as packageName, version as packageVersion } from './version.json';
var withAnalyticsContext = analytics.withAnalyticsContext,
    withAnalyticsEvents = analytics.withAnalyticsEvents;
export { withAnalyticsContext, withAnalyticsEvents };
export var createAndFire = analytics.createAndFireEvent('atlaskit');
export var defaultAttributes = {
  componentName: 'refinement-bar',
  packageName: packageName,
  packageVersion: packageVersion
};