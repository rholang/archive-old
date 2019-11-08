import React from 'react';
import { AnalyticsEventPayload } from './events';
declare const AnalyticsContext: React.Context<{
    fireAnalyticsEvent: (event: AnalyticsEventPayload) => void;
}>;
export default AnalyticsContext;
