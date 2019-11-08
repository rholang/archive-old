import * as React from 'react';
import { ProviderResult } from './as-data-provider';
import { RecentContainersResponse } from '../types';
import { RecommendationsEngineResponse, RecommendationsFeatureFlags } from '../types';
interface CommonDataProviderProps {
    cloudId?: string;
    disableRecentContainers: boolean;
    recommendationsFeatureFlags?: RecommendationsFeatureFlags;
    children: (props: {
        recentContainers: ProviderResult<RecentContainersResponse>;
        managePermission: ProviderResult<boolean>;
        addProductsPermission: ProviderResult<boolean>;
        isXFlowEnabled: ProviderResult<boolean>;
        productRecommendations: ProviderResult<RecommendationsEngineResponse>;
    }) => React.ReactElement<any>;
}
declare const _default: ({ cloudId, children, recommendationsFeatureFlags, disableRecentContainers, }: CommonDataProviderProps) => JSX.Element;
export default _default;
