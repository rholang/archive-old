import { UIAnalyticsEvent } from '@atlaskit/analytics-next';
import { AtlassianSwitcherProps } from '@atlaskit/atlassian-switcher/types';
import { InstanceHandlers } from './render';
declare type SwitcherWrapperMethods = {
    prefetch: () => void;
    renderAt: (container: HTMLElement) => InstanceHandlers;
};
export declare const prepareAtlassianSwitcher: (switcherProps: AtlassianSwitcherProps, analyticsListener: (event: UIAnalyticsEvent, channel?: string | undefined) => void) => SwitcherWrapperMethods;
export {};
