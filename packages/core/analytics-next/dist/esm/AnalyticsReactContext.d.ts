import React from 'react';
export interface AnalyticsReactContextInterface {
    getAtlaskitAnalyticsContext(): any[];
    getAtlaskitAnalyticsEventHandlers(): any[];
}
export declare const AnalyticsReactContext: React.Context<AnalyticsReactContextInterface>;
