import { UIAnalyticsEvent } from '@atlaskit/analytics-next';
import { AtlassianSwitcherProps } from '@atlaskit/atlassian-switcher/types';
export declare type InstanceHandlers = {
    destroy: () => void;
};
export declare const render: (switcherProps: AtlassianSwitcherProps, analyticsListener: (event: UIAnalyticsEvent, channel?: string | undefined) => void, container: HTMLElement) => InstanceHandlers;
