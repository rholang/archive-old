import { Messages } from 'react-intl';
import { FeatureMap, RecommendationsFeatureFlags, DiscoverMoreCallback, TriggerXFlowCallback } from '../types';
import { WithTheme } from '../theme/types';
declare type ConfluenceSwitcherProps = WithTheme & {
    cloudId: string;
    messages: Messages;
    features: FeatureMap;
    triggerXFlow: TriggerXFlowCallback;
    onDiscoverMoreClicked: DiscoverMoreCallback;
    recommendationsFeatureFlags?: RecommendationsFeatureFlags;
};
declare const _default: (props: ConfluenceSwitcherProps) => JSX.Element;
export default _default;
