import * as x from '@atlaskit/analytics-next';
import { name as packageName, version as packageVersion } from './version.json';
export var withAnalyticsEvents = x.withAnalyticsEvents;
export var withAnalyticsContext = x.withAnalyticsContext;
export var createAndFire = x.createAndFireEvent('atlaskit');
export var defaultAnalyticsAttributes = {
    componentName: 'help',
    packageName: packageName,
    packageVersion: packageVersion,
};
//# sourceMappingURL=analytics.js.map